# HTTP协议

## Header字段
* [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)

X-Forwarded-For:第一个字段表面客户端IP地址，后面字段为代理IP地址；不能真正代表客户端地址，因为这仅仅是HTTP协议的一个字段，真正的请求是在TCP/IP层，所以X-Forwarded-For不能真正代表客户端地址。

```
X-Forwarded-For:clientIP, proxy2IP, proxy3IP
```

<DocsAD/>