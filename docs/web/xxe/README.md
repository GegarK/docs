# XXE漏洞

## 视频教程

[YouTube系列教程](https://www.youtube.com/watch?v=r4rh1Llw6Vs&list=PLgZqc0esdeS8TkLr6T6EkDb1AfOz9VvkL)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/r4rh1Llw6Vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2061160&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=634975282&bvid=BV1Vb4y1v7jN&cid=463651217&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>

<DocsAD/>

## 什么是XXE
XXE(Server-side request forgery XML外部实体注入 XML External Entity)

```
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE note [
<!ENTITY nbsp "&#xA0;">
<!ENTITY writer "Writer: Donald Duck.">
<!ENTITY copyright "Copyright: W3Schools.">
<!ENTITY % copyright "Copyright: W3Schools.">
<!ENTITY %copyright; >
]>

<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
<footer>&writer;&nbsp;&copyright;</footer>
</note>


<![CDATA[ … ]]>
https://github.com/enjoiz/XXEinjector
https://github.com/luisfontes19/xxexploiter




1.内部声明DTD：
<!DOCTYPE 根元素 [元素声明]>
 
2.引用外部DTD：
<!DOCTYPE 根元素 SYSTEM "文件名">
 
3.内外部DTD文档结合：
<!DOCTYPE 根元素 SYSTEM "DTD文件路径" [定义内容]>
 
DTD中的一些重要的关键字：
DOCTYPE（DTD的声明）
ENTITY（实体的声明）
SYSTEM、PUBLIC（外部资源申请）
实体主要分为一下四类
 
内置实体 (Built-in entities)
字符实体 (Character entities)
通用实体 (General entities)
参数实体 (Parameter entities)
 
参数实体用%实体名称申明，引用时也用%实体名称;
其余实体直接用实体名称申明，引用时用&实体名称。
参数实体只能在DTD中申明，DTD中引用；
其余实体只能在DTD中申明，可在xml文档中引用。

```