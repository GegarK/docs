# 反序列化漏洞

## 视频讲解

[YouTube系列教程](https://www.youtube.com/watch?v=Q11eRzl7xt0&list=PLgZqc0esdeS9ndgsZpI_Xy84JgFbyElpN)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/Q11eRzl7xt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2061149&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=635670931&bvid=BV1Db4y1H7Vg&cid=486491735&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>

## 什么是反序列化

序列化(Serialization)是将对象的状态信息转换为可以存储或传输的形式的过程，反序列化刚好相反。

![er](/imgs/web/deserialization/1.png)

![er](/imgs/web/deserialization/2.png)

```
O:5:"Human":2:{s:4:"name";s:5:"human";s:3:"sex";s:1:"m";}
object(Human)#2 (2) { ["name"]=> string(5) "human" ["sex"]=> string(1) "m" }
```
<DocsAD/>

## 支持反序列化语言

* 支持序列化就支持反序列化

## 反序列化漏洞工具

* gadget tools