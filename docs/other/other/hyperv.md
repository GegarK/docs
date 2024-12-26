# Hyper-V

Hyper-V 是微软的本地虚拟化平台，允许用户在 Windows 系统上创建和管理虚拟机。Hyper-V 与 其他虚拟机（VMware，VirtualBox）如果你的机器开启了 Hyper-V，通常 VMware 会遇到兼容性问题，因为两者都依赖硬件虚拟化技术。

<DocsAD/>

## Hyper-V开关

* bcdedit /set hypervisorlaunchtype off
* bcdedit /set hypervisorlaunchtype on