# 驱动内核

驱动开发指的是为了让硬件与操作系统进行交互，从而使硬件能够正常工作而编写的软件。这些软件通常被称为驱动程序或驱动程序软件。驱动程序通过与硬件设备通信，向操作系统提供有关硬件设备的信息和功能支持。

## Windows

<DocsAD/>

* 后缀sys

```c
// 示例：Windows设备驱动程序代码
#include <windows.h>
#include <winioctl.h>

// 驱动程序入口函数
extern "C" NTSTATUS DriverEntry(_In_ PDRIVER_OBJECT DriverObject, _In_ PUNICODE_STRING RegistryPath) {
    // 驱动初始化代码
    return STATUS_SUCCESS;
}

// 驱动程序卸载函数
extern "C" VOID DriverUnload(_In_ PDRIVER_OBJECT DriverObject) {
    // 驱动卸载代码
}

```

## Linux

```c
// 示例：Linux设备驱动程序代码
#include <linux/init.h>
#include <linux/module.h>

// 模块初始化函数
static int __init hello_init(void) {
    printk(KERN_INFO "Hello, world!\n");
    return 0;
}

// 模块卸载函数
static void __exit hello_exit(void) {
    printk(KERN_INFO "Goodbye, world!\n");
}
```

## MacOS

* 后缀kext

```c
#include <mach/mach_types.h>
#include <libkern/libkern.h>

kern_return_t MyDriver_start(kmod_info_t *ki, void *d);
kern_return_t MyDriver_stop(kmod_info_t *ki, void *d);

kern_return_t MyDriver_start(kmod_info_t *ki, void *d) {
    printf("MyDriver started.\n");
    return KERN_SUCCESS;
}

kern_return_t MyDriver_stop(kmod_info_t *ki, void *d) {
    printf("MyDriver stopped.\n");
    return KERN_SUCCESS;
}

extern "C" {
    kern_return_t MyDriver_start(kmod_info_t *ki, void *d);
    kern_return_t MyDriver_stop(kmod_info_t *ki, void *d);
};

OSKextDeclareUserClient();
OSMetaClassDeclareReservedUnused(OSKext, 0);
OSMetaClassDeclareReservedUnused(OSKext, 1);
OSMetaClassDeclareReservedUnused(OSKext, 2);
OSMetaClassDeclareReservedUnused(OSKext, 3);

/* This is the linkage structure for the kernel module manager. */
KMOD_EXPLICIT_DECL(com.example.driver, "1.0.0", MyDriver_start, MyDriver_stop)

```

## Android IOS