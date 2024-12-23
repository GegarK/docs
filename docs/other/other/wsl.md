# WSL

WSL（Windows Subsystem for Linux）是微软推出的一种在 Windows 上运行 Linux 环境的兼容层。它允许用户在 Windows 上直接运行 Linux 命令行工具和应用程序，而无需启动虚拟机或双系统。WSL 使得开发人员能够在 Windows 上享受 Linux 系统的一些优势，如使用 Linux 工具链、运行 Bash 脚本等。

<DocsAD/>

* WSL 1：通过系统调用兼容层实现，它使得 Windows 与 Linux 内核直接互操作，但性能相对较低，尤其是在文件系统操作上。

* WSL 2：引入了真正的 Linux 内核，在 Windows 上运行一个轻量级的虚拟机，使得 Linux 的性能大大提升，尤其是在 I/O 密集型操作方面。WSL 2 也支持 Docker 和其他容器技术，因为它提供了与原生 Linux 内核相同的功能。

## WSL使用

## 1. 启用 [WSL](https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands)

### Windows 10（版本 1903 或更高版本）或 Windows 11：

1. **启用 Windows Subsystem for Linux 功能**
   - 打开 PowerShell 以管理员身份运行，并输入以下命令：
   
     ```powershell
     wsl --install
     wsl --unregister ubuntu 卸载
     ```

     这个命令会自动启用 WSL 和 Hyper-V 功能，安装 WSL 2 和 Linux 内核更新。如果你只需要安装 WSL 1，可以使用 `wsl --set-default-version 1` 命令。

2. **安装 Linux 发行版**
   - 运行以下命令，选择并安装你喜欢的 Linux 发行版（如 Ubuntu）：
   
     ```powershell
     wsl --install -d Ubuntu
     ```

   - 如果你已经安装了 WSL，但尚未选择 Linux 发行版，可以从 Microsoft Store 中安装。例如，打开 Microsoft Store，搜索并安装 `Ubuntu`、`Debian`、`Kali Linux` 等 Linux 发行版。

3. **重启计算机**
   - 安装完成后，可能需要重启计算机以完成 WSL 配置。

## 2. 启动和配置 WSL

1. **启动 WSL**
   - 安装并配置好后，你可以通过命令行启动 Linux 环境。打开 PowerShell 或命令提示符，输入：
   
     ```powershell
     wsl
     ```

     或者，输入你安装的 Linux 发行版的名称，例如：
   
     ```powershell
     ubuntu
     ```

     这样会启动你的 Linux shell 环境。

2. **首次启动**
   - 如果是第一次启动 WSL，会要求你设置 Linux 用户名和密码。

## 3. 选择 WSL 版本（WSL 1 或 WSL 2）

1. **检查当前 WSL 版本**
   - 你可以查看当前已安装的 Linux 发行版版本：
   
     ```powershell
     wsl -l -v
     ```

2. **切换版本**
   - 如果你希望切换到 WSL 2，可以运行以下命令（假设发行版为 `Ubuntu`）：
   
     ```powershell
     wsl --set-version Ubuntu 2
     ```

   - 要切换回 WSL 1，使用：
   
     ```powershell
     wsl --set-version Ubuntu 1
     ```

3. **设置默认版本**
   - 设置 WSL 2 为默认版本（适用于所有新安装的 Linux 发行版）：
   
     ```powershell
     wsl --set-default-version 2
     ```

## 安装目录

* [下载指定Linux](https://learn.microsoft.com/en-us/windows/wsl/install-manual#downloading-distributions)
* 手动安装

## 虚拟机冲突

* WSL 2 和 Hyper-V 是兼容的，因为 WSL 2 依赖 Hyper-V 来虚拟化 Linux 内核。

* VMware 和 Hyper-V 以及 VirtualBox 和 Hyper-V 存在冲突，因为它们都依赖硬件虚拟化资源。如果启用 Hyper-V，VMware 和 VirtualBox 无法正常工作。

* WSL 1 不依赖硬件虚拟化，与你的虚拟机软件（如 VMware 和 VirtualBox）兼容。