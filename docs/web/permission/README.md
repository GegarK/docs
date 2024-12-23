# 权限漏洞

[YouTube系列教程](https://www.youtube.com/watch?v=wTUpG1lMUyM&list=PLgZqc0esdeS8jbN6iJJM6f6j4El92IkH7)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/wTUpG1lMUyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2262472&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=595436367&bvid=BV1tq4y1a7qr&cid=567410639&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>



## 什么是权限漏洞
只要是涉及权限的问题，例如：登录、注册、支付、购买等中涉及到非正常用户可以冒充正常用户进行操作，都可以被认为是权限漏洞。这么说很笼统，但是，大家通过视频讲解理解了就行，不需要非得分的非常详细，因为`很多漏洞都是杂糅在一起的`，所以大家可能看起来感觉这个漏洞，好像是SQL注入漏洞，又好像是权限漏洞，这个不重要，大家只要理解就行。

<DocsAD/>

## 权限漏洞类型
我说过，没有必要去分的非常详细，只要理解就行，我这里作分类只是方便大家看的清晰。这种太多了，永远写不完，不同的认证算法，机制就会导致不一样叫法的漏洞，所以大家要理解权限漏洞的本质，以后遇到类似的问题可以根据自己以前学习分析过的权限漏洞去解决以后未知的权限问题。
* HTTP Basic Authentication漏洞
* Session-Cookie认证漏洞
* 权限泄露漏洞（信息泄露）
* 暴力破解登录漏洞
* SSO单点登录漏洞
* JWT认证机制漏洞
* 多因素认证漏洞
* 弱口令登录漏洞
* 未授权访问漏洞
* Token认证漏洞
* 平行越权漏洞
* 垂直越权漏洞
* 访问控制漏洞
* OAuth漏洞
* 等等

## 攻击方式
* WEB漏洞
* 信息泄露
* 暴力破解
* 网站配置漏洞