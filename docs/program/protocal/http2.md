# HTTP/2协议

## 什么是HTTP/2协议
HTTP/2没有改动HTTP的应用语义，仍然使用HTTP的请求方法、状态码和头字段等规则，它主要修改了HTTP的报文传输格式，通过引入二进制分帧层实现性能的提升。HTTP/2主要基于SPDY协议，通过对HTTP头字段进行首部压缩、对数据传输采用多路复用和增加服务器推送等举措，来减少网络延迟，提高客户端的页面加载速度。

![er](/imgs/other/protocal/http2/1.png)

## HTTP/2 vs HTTP/1.1
* 二进制分帧（Binary Format）
* 多路复用 (Multiplexing) / 连接共享
![er](/imgs/other/protocal/http2/2.png)
* 头部压缩（Header Compression）

<DocsAD/>