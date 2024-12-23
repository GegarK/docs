# 寄存器

## 寄存器类型

* 通用寄存器

| EAX | EBX | ECX | EDX | ESI |
|-----|-----|-----|-----|-----|
| EDI |     |     |     |     |

| RAX | RBX | RCX | RDX | RSI |
|-----|-----|-----|-----|-----|
| RDI | R8    |  R9   | ...    | R15    |

* 标志寄存器

<DocsAD/>

| EFLAG | RFLAG |  | PF |
|-------|-------|----|----|
| AF    | OF    | SF | DF |
| CF    | TF    | IF |  ZF  |

| Bit # | Mask   | Abbreviation | Description             | =1                   | =0                     |
|-------|--------|--------------|-------------------------|----------------------|------------------------|
| 0     | 0x0001 | CF           | Carry flag              | CY(Carry)            | NC(No Carry)           |
| 2     | 0x0004 | PF           | Parity flag             | PE(Parity Even)      | PO(Parity Odd)         |
| 4     | 0x0010 | AF           | Auxiliary Carry flag[4] | AC(Auxiliary Carry)  | NA(No Auxiliary Carry) |
| 6     | 0x0040 | ZF           | Zero flag               | ZR(Zero)             | NZ(Not Zero)           |
| 7     | 0x0080 | SF           | Sign flag               | NG(Negative)         | PL(Positive)           |
| 8     | 0x0100 | TF           | Trap flag (single step) |                      |                        |
| 9     | 0x0200 | IF           | Interrupt enable flag   | EI(Enable Interrupt) | DI(Disable Interrupt)  |
| 10    | 0x0400 | DF           | Direction flag          | DN(Down)             | UP(Up)                 |
| 11    | 0x0800 | OF           | Overflow flag           | OV(Overflow)         | NV(Not Overflow)       |


* 指令寄存器

`EIP` `RIP`

* 段寄存器
* MSR寄存器
* 控制寄存器
* 调试寄存器
* 任务寄存器
* 描述符寄存器

