# LLDB

## 什么是[LLDB](https://lldb.llvm.org/)
LLDB 是下一代高性能调试器，类比GDB。

## 命令行

* 帮助文档

```shell
help 查看命令行
help image list
```

* 查看模块
```shell
image list -b -h -o 查看模块基地址，偏移地址
image list -h -f module_name 为基地址，IDA rebase这个即可
```

* 字符串查找
```shell
memory find -s "string" addressStart addressEnd
```

* 设置断点
```shell
breakpoint set -a 0x1002321EB
```

* 反汇编
```shell
dis -p 反汇编当前 pc、ip
```

* 查看栈
```shell
frame select 0 == frame info 查看当前栈
frame select 1 查看上一个栈
```


* 指令修改
```shell
memory write address code
```