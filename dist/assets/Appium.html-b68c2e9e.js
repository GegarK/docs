import{_ as t,K as s,L as p,M as e,N as n,a5 as i,F as r}from"./framework-edebdfe1.js";const u={},a=e("h1",{id:"appium测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#appium测试","aria-hidden":"true"},"#"),n(" Appium测试")],-1),c=e("p",null,"Appium 是一个开源的自动化测试框架，用于在多种平台上（如 Android、iOS 和 Windows）自动化移动应用程序和桌面应用程序的操作。它支持对原生应用程序、移动Web应用程序以及混合应用程序的自动化测试。",-1),d={id:"appium-的工作原理教学",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#appium-的工作原理教学","aria-hidden":"true"},"#",-1),h={href:"https://forum.deelmind.com/d/2-wei-xin-qqqun-nei-zhi-bo-ke-cheng",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"_1-客户端-服务器架构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-客户端-服务器架构","aria-hidden":"true"},"#"),n(" 1. 客户端-服务器架构")],-1),A=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"Appium Server"),n("：Appium 的核心是一个 HTTP 服务器，基于 WebDriver 协议（也称为 JSON Wire Protocol 或 W3C WebDriver）。Appium Server 负责接收来自客户端的请求，并将这些请求转发给相应的平台（Android、iOS、Windows）进行处理。")])]),e("li",null,[e("p",null,[e("strong",null,"Appium Client"),n("：客户端可以使用多种编程语言（如 Java、Python、Ruby、JavaScript 等）编写测试脚本。客户端通过 WebDriver 向 Appium Server 发送命令（如点击、输入文本等）。")])])],-1),f=e("h2",{id:"_2-工作流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-工作流程","aria-hidden":"true"},"#"),n(" 2. 工作流程")],-1),v=e("li",null,[e("p",null,[e("strong",null,"启动 Appium Server"),n("：")]),e("ul",null,[e("li",null,"首先，Appium Server 启动并开始监听来自客户端的 HTTP 请求。你可以手动启动它，也可以通过 Appium Desktop GUI 或命令行启动。")])],-1),b=e("li",null,[e("p",null,[e("strong",null,"发送请求到 Appium Server"),n("：")]),e("ul",null,[e("li",null,"客户端通过 WebDriver 向 Appium Server 发送 JSON 格式的请求。这些请求可以包括启动应用程序、查找元素、执行操作（如点击、输入）等。")])],-1),S=e("p",null,[e("strong",null,"Appium Server 解析请求"),n("：")],-1),g=e("li",null,"Appium Server 解析这些请求，并根据平台类型（Android、iOS 或 Windows）选择合适的驱动来与设备或模拟器进行通信。",-1),W={href:"https://github.com/appium/appium-inspector",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[e("strong",null,"平台驱动执行操作"),n("：")],-1),D=e("li",null,[n("对于 Android，Appium 使用 "),e("code",null,"UiAutomator2"),n(" 或 "),e("code",null,"Espresso"),n(" 来与设备交互。")],-1),k=e("li",null,[n("对于 iOS，Appium 使用 "),e("code",null,"XCUITest"),n("。")],-1),T={href:"https://github.com/microsoft/WinAppDriver",target:"_blank",rel:"noopener noreferrer"},N={href:"https://accessibilityinsights.io/",target:"_blank",rel:"noopener noreferrer"},O=e("li",null,[e("p",null,[e("strong",null,"平台驱动返回结果"),n("：")]),e("ul",null,[e("li",null,"操作执行后，平台驱动返回执行结果，Appium Server 将结果封装为 HTTP 响应并返回给客户端。")])],-1);function w(P,y){const l=r("ExternalLinkIcon"),o=r("DocsAD");return s(),p("div",null,[a,c,e("h2",d,[_,n(),e("a",h,[n("Appium 的工作原理教学"),i(l)])]),i(o),m,A,f,e("ol",null,[v,b,e("li",null,[S,e("ul",null,[g,e("li",null,[e("a",W,[n("appium-inspector"),i(l)])])])]),e("li",null,[x,e("ul",null,[D,k,e("li",null,[n("对于 Windows 桌面应用程序，Appium 使用 "),e("a",T,[n("WinAppDriver"),i(l)]),n(),e("a",N,[n("https://accessibilityinsights.io/"),i(l)]),n("。")])])]),O])])}const E=t(u,[["render",w],["__file","Appium.html.vue"]]);export{E as default};
