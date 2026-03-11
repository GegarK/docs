# HTTP 协议

## Header 字段

- [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)

X-Forwarded-For:第一个字段表面客户端 IP 地址，后面字段为代理 IP 地址；不能真正代表客户端地址，因为这仅仅是 HTTP 协议的一个字段，真正的请求是在 TCP/IP 层，所以 X-Forwarded-For 不能真正代表客户端地址。

```
X-Forwarded-For:clientIP, proxy2IP, proxy3IP
```

<DocsAD/>
