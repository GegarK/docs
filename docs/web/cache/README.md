# WEB缓存漏洞

[YouTube系列教程](https://www.youtube.com/watch?v=Dsy9CxjNCYE&list=PLgZqc0esdeS-AEqmdmoxroGu5b08Wbb0f)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/Dsy9CxjNCYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2262479&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=641345810&bvid=BV18Y4y1b7hk&cid=711950088&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>

## 什么是WEB缓存
WEB缓存就是指网站的静态文件，比如图片、CSS、JS等，在网站上访问的时候，服务器会将这些文件缓存起来，以便下次访问时直接从缓存中读取，不需要再次请求服务器。

<DocsAD/>

## 什么是WEB缓存漏洞？
攻击者利用 Web 服务器和缓存的行为，从而将有害的 HTTP 响应提供给其他用户。

![er](/imgs/web/exploits/cache/1.png)

![er](/imgs/web/exploits/cache/2.png)

## 缓存点
* 后端程序缓存
* 服务器缓存
* 浏览器缓存
* 缓存服务器
* CDN缓存

## 缓存KEY

```JS
hashx(hostname + pathname + querystring + ...)
```