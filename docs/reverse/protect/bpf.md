# BPF

## 什么是[BPF](https://ebpf.io/)
BPF (Berkeley Packet Filter)，是一种运行在 [Linux](https://docs.kernel.org/bpf/) 内核（[Windows](https://github.com/microsoft/ebpf-for-windows)）中的虚拟机，用于处理网络数据包，最初用于实现数据包过滤功能，但后来被扩展为支持更广泛的用途，例如跟踪、调试、安全等。

eBPF 是 BPF 的扩展版本，具有以下优势：

* 支持更复杂的程序
* 运行效率更高
* 安全性更高

<DocsAD/>

## *BFP原理

* 用户代码
* 内核执行
* JIT/虚拟机执行

![er](/imgs/rev/protect/bpf.png)

## BPF应用：

* 网络：BPF 可以用于实现数据包过滤、流量分析、安全防护等功能。
* 安全：BPF 可以用于检测恶意软件、入侵检测等。
* 监控：BPF 可以用于收集系统运行状态信息，例如 CPU 使用率、内存使用率等。
* 调试：BPF 可以用于跟踪系统运行过程，例如追踪进程调用栈、内存分配等。

## 支持语言

* rust
* c/c++
* golang