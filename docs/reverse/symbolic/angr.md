# ANGR

## 下载安装[ANGR](https://angr.io/)

`pip install angr`

## 核心流程

<DocsAD/>

```py
import angr

project = angr.Project("software", auto_load_libs=False)
initial_state = project.factory.entry_state(addr=0x400B9E)
sm = project.factory.simulation_manager(initial_state)
sm.explore(find=find_addr,avoid=avoid_addr)
found = sm.found[0]
solution = found.solver.eval()
```

## 简单例子

```c
int __cdecl main(int argc, const char **argv, const char **envp)
{
  int result; // eax

  if ( argc == 2 )
  {
    if ( (unsigned int)verify(argv[1], argv, envp) )
      puts("Correct! that is the secret key!"); // 0x400602
    else
      puts("I'm sorry, that's the wrong secret key!");
    result = 0;
  }
  else
  {
    puts("You need to enter the secret key!"); // 0x4005DA
    result = -1;
  }
  return result;
}

_BOOL8 __fastcall verify(__int64 a1)
{
  int i; // [rsp+14h] [rbp-4h]

  for ( i = 0; *(_BYTE *)(i + a1); ++i )
  {
    if ( encrypted[i] != ((unsigned __int8)((unsigned __int8)(*(_BYTE *)(i + a1) ^ i) << ((i ^ 9) & 3)) | (unsigned __int8)((int)(unsigned __int8)(*(_BYTE *)(i + a1) ^ i) >> (8 - ((i ^ 9) & 3))))
                       + 8 )
      return 0LL;
  }
  return i == 23;
}
```

```python
project = angr.Project("./ais3_crackme", auto_load_libs=False)
argv1 = claripy.BVS("argv1",100*4)
initial_state = project.factory.entry_state(args=["ais3_crackme",argv1])
sm = project.factory.simulation_manager(initial_state)
sm.explore(find=0x400602,avoid=0x4005DA)
found = sm.found[0]
solution = found.solver.eval(argv1, cast_to=bytes)
solution = solution[:solution.find(b"\x00")]
print(solution)
```

## 约束条件

```c
__int64 __fastcall main(int a1, char **a2, char **a3)
{
  __int64 v3; // r8
  __int64 v5[7]; // [rsp+0h] [rbp-38h] BYREF

  v3 = 0LL;
  if ( a1 > 1 )
    v3 = strtol(a2[1], 0LL, 10); // 0x4004AC
  v5[0] = 1019660215 * v3;
  v5[1] = 0x981DDEC9AB2D9LL * (v3 >> 19) % 2837 * (v3 >> 19) % 35 * ((v3 >> 19) % 33);
  v5[2] = (v3 >> 19) % 9643 * 0x148E0E2774AE66LL * ((v3 >> 19) % 167);
  v5[3] = (v3 >> 19) % 257 * 0x25FB3FE64A952LL * ((v3 >> 19) % 55);
  v5[4] = (v3 >> 19) % 48271 * 0x246DC95E05ELL * ((v3 >> 19) % 23);
  puts((const char *)v5); //0x400684
  return 0LL;
}
```

```assembly
text:000000000040049C mov     rdi, [rsi+8]    ; nptr
.text:00000000004004A0 mov     edx, 0Ah        ; base
.text:00000000004004A5 xor     esi, esi        ; endptr
.text:00000000004004A7 call    _strtol
.text:00000000004004AC mov     r8, rax
```

```python
    p = angr.Project("fake", auto_load_libs=False)

    state = p.factory.blank_state(addr=0x4004AC)
    inp = state.solver.BVS('inp', 8*8)
    state.regs.rax = inp

    simgr= p.factory.simulation_manager(state)
    simgr.explore(find=0x400684)
    found = simgr.found[0]

    flag_addr = found.regs.rdi
    found.add_constraints(found.memory.load(flag_addr, 5) == int(binascii.hexlify(b"ASIS{"), 16))

    flag = found.memory.load(flag_addr, 40)
    for i in range(5, 5+32):
        cond_0 = flag.get_byte(i) >= ord('0')
        cond_1 = flag.get_byte(i) <= ord('9')
        cond_2 = flag.get_byte(i) >= ord('a')
        cond_3 = flag.get_byte(i) <= ord('f')
        cond_4 = found.solver.And(cond_0, cond_1)
        cond_5 = found.solver.And(cond_2, cond_3)
        found.add_constraints(found.solver.Or(cond_4, cond_5))

    found.add_constraints(flag.get_byte(32+5) == ord('}'))

    flag_str = found.solver.eval(flag, cast_to=bytes)

    print("The number to input: ", found.solver.eval(inp))
    print("Flag:", flag)
```