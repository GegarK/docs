# 函数分析

<DocsAD/>

## 函数调用

| 调用约定           | 参数传递顺序                         | 谁清理栈 | 特点             |
| -------------- | ------------------------------ | ---- | -------------- |
| `cdecl`        | 从右到左                           | 调用者  | 最常见，支持可变参数     |
| `stdcall`      | 从右到左                           | 被调用者 | Windows API 默认 |
| `fastcall`     | 前两个参数通过寄存器（ECX、EDX），剩余右到左入栈    | 被调用者 | 提高效率           |
| `thiscall`     | ECX 传递 this 指针，其余从右到左入栈        | 被调用者 | C++ 成员函数默认     |
| `__vectorcall` | 参数优先使用寄存器传递，支持 SIMD            | 被调用者 | 新的高性能约定        |
| `syscall`      | 系统调用                           | 系统约定 | 内核调用           |
| x64 通用         | RCX, RDX, R8, R9（前四参数传寄存器）剩余入栈 | 被调用者 | Windows x64 默认 |


| 寄存器 | 用途                                |
| --- | --------------------------------- |
| EAX | 函数返回值寄存器                          |
| ECX | fastcall 第一个参数、thiscall 的 this 指针 |
| EDX | fastcall 第二个参数                    |
| ESP | 栈顶指针                              |
| EBP | 栈基址（常用于栈帧指针）                      |

| 参数位置     | 传递方式 |
| -------- | ---- |
| 第 1 个    | RCX  |
| 第 2 个    | RDX  |
| 第 3 个    | R8   |
| 第 4 个    | R9   |
| 第 5 个及之后 | 入栈   |

## 缓冲区分配

* cdecl 调用者清，stdcall 被调清；
* fastcall 用寄存，thiscall ECX；
* 参数右到左，返回靠 EAX；