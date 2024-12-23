# 跨域漏洞

[YouTube系列教程](https://www.youtube.com/watch?v=Dsy9CxjNCYE&list=PLgZqc0esdeS-AEqmdmoxroGu5b08Wbb0f)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/Dsy9CxjNCYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2262479&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=641345810&bvid=BV18Y4y1b7hk&cid=711950088&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>

## 什么是CORS跨域
![er](/imgs/web/exploits/cors/cors.png)

* https://www.deelmind.com
* http://www.deelmind.com:88
* http://tools.deelmind.com

<DocsAD/>

## 跨域安全性
* Cookie、LocalStorage、IndexedDB等存储性内容
* DOM节点操作

## CORS跨域方式
* 正常方式（需要服务器，客户端支持，属于正常开发要求，前后端分离）
* SCR标签
```js
<img src=XXX>
<link href=XXX>
<script src=XXX>
```
* Jsonp
* WebSocket
* PostMessage
* Location.hash
* Window.name
* Document.domain

## Chrome浏览器策略
* HttpOnly
* Secure
* [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
* SamePary
* Partition Key
* Priority