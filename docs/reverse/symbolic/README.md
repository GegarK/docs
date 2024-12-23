# 符号执行

## 什么是符号执行

符号执行（英語：symbolic execution）是一种计算机科学领域的程序分析技术，通过采用抽象的符号代替精确值作为程序输入变量，得出每个路径抽象的输出结果,符号执行技术是一种白盒的静态分析技术。

## 符号执行工具

* ANGR
* KLEE

<DocsAD/>

## 符号执行原理

```c
int m=M, n=N, q=Q; 
int x1=0,x2=0,x3=0;
if(m!=0)
{
    x1=-2;
}
if(n<12)
{
    if(!m && q)
    {
        x2=1;
    }
    x3=2;
}
assert(x1+x2+x3!=3)
```

![er](/imgs/rev/symbolic/1.png)

![er](/imgs/rev/symbolic/2.png)