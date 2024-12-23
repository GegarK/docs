# Appium测试

Appium 是一个开源的自动化测试框架，用于在多种平台上（如 Android、iOS 和 Windows）自动化移动应用程序和桌面应用程序的操作。它支持对原生应用程序、移动Web应用程序以及混合应用程序的自动化测试。

## [Appium 的工作原理教学](https://forum.deelmind.com/d/2-wei-xin-qqqun-nei-zhi-bo-ke-cheng)

<DocsAD/>

## 1. 客户端-服务器架构

- **Appium Server**：Appium 的核心是一个 HTTP 服务器，基于 WebDriver 协议（也称为 JSON Wire Protocol 或 W3C WebDriver）。Appium Server 负责接收来自客户端的请求，并将这些请求转发给相应的平台（Android、iOS、Windows）进行处理。

- **Appium Client**：客户端可以使用多种编程语言（如 Java、Python、Ruby、JavaScript 等）编写测试脚本。客户端通过 WebDriver 向 Appium Server 发送命令（如点击、输入文本等）。


## 2. 工作流程

1. **启动 Appium Server**：
   - 首先，Appium Server 启动并开始监听来自客户端的 HTTP 请求。你可以手动启动它，也可以通过 Appium Desktop GUI 或命令行启动。

2. **发送请求到 Appium Server**：
   - 客户端通过 WebDriver 向 Appium Server 发送 JSON 格式的请求。这些请求可以包括启动应用程序、查找元素、执行操作（如点击、输入）等。

3. **Appium Server 解析请求**：
   - Appium Server 解析这些请求，并根据平台类型（Android、iOS 或 Windows）选择合适的驱动来与设备或模拟器进行通信。
   - [appium-inspector](https://github.com/appium/appium-inspector)
   
4. **平台驱动执行操作**：
   - 对于 Android，Appium 使用 `UiAutomator2` 或 `Espresso` 来与设备交互。
   - 对于 iOS，Appium 使用 `XCUITest`。
   - 对于 Windows 桌面应用程序，Appium 使用 [WinAppDriver](https://github.com/microsoft/WinAppDriver) [https://accessibilityinsights.io/](https://accessibilityinsights.io/)。

5. **平台驱动返回结果**：
   - 操作执行后，平台驱动返回执行结果，Appium Server 将结果封装为 HTTP 响应并返回给客户端。