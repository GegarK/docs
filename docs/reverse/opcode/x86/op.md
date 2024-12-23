# 汇编指令

## 基础指令

* `PUSH`

```JS
PUSH X (将操作数X推入栈顶)
```

* `POP`

```JS
POP X (将栈顶的操作数弹出到X)
```

* `MOV`

```JS
MOV A,B (将操作数B推入操作数A)
```

* `LEA`

```JS
LEA A,B (地址操作，将操作数B推入操作数A Load Effective Address)
```

* `MOVQ`

```JS
MOVQ A,B (将操作数B推入操作数A,QuaDword)
```

* `SUB`

```JS
SUB DESTINATION,SOURCE (两个操作数相减操作，并将结果存放在目的操作数中)
```

* `ADD`

```JS
ADD DESTINATION,SOURCE (两个操作数相加操作，并将结果存放在目的操作数中)
```

<DocsAD/>

## 函数调用

* `CALL`

```JS
CALL FUNCTION (调用函数)
```

* `RET`

```JS
RET(N) X (函数返回，返回值放入EAX)
```

## 位与操作

* `AND`

```JS
AND DESTINATION,SOURCE (两个操作数的对应位之间进行（按位）逻辑与（AND）操作，并将结果存放在目的操作数中，会操作标志位)
```

* `XOR`

```JS
XOR DESTINATION,SOURCE (两个操作数的对应位之间进行（按位）逻辑与（XOR）操作，并将结果存放在目的操作数中，当按位操作或算术操作的目标操作数最低字节为偶时，奇偶标志PF位置 1，反之，如果操作数为奇校验，则奇偶标志位清 0)
```


## 比较指令

* `CMP`

```JS
Compare WITH
CMP DESTINATION,SOURCE (比较，目的操作数中减去源操作数，赋值给目的操作数)
```

| CMP结果        | ZF | CF  |
|--------------|----|-----|
| 目的操作数 < 源操作数 | 0  | 1   |
| 目的操作数 > 源操作数 | 0  | 0   |
| 目的操作数 = 源操作数 | 1  | 0   |

* `TEST`

```JS
TEST DESTINATION,SOURCE (两个操作数的对应位之间进行 AND 操作，并根据运算结果设置符号标志位、零标志位和奇偶标志位)

0  0  1  0  0  1  0  1    <- 输入值
0  0  0  0  1  0  0  1    <- 测试值
0  0  0  0  0  0  0  1    <- 结果：ZF=0

0  0  1  0  0  1  0  0    <- 输入值
0  0  0  0  1  0  0  1    <- 测试值
0  0  0  0  0  0  0  0    <- 结果：ZF=1
```

## 跳转指令

* `JMP`

```JS
Always jump
JMP DESTINATION (JUMP 无条件跳转)
```

* `JE`

```JS
Jump if cmp is equal
JE DESTINATION (判断ZF标志位，如果ZF=1则跳转，如果ZF=0，不跳转)
```

* `JNE`

```JS
Jump if cmp is equal
JE DESTINATION (判断ZF标志位，如果ZF=0则跳转，如果ZF=1，不跳转)
```