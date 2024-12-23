# TMP

XML外部实体注入(XML External Entity) XXE
XML:
https://www.w3schools.com/xml/
https://www.tutorialspoint.com/dtd/dtd_syntax.htm
http://edutechwiki.unige.ch/en/DTD_tutorial

```xml
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
```


1.内部声明DTD：
<!DOCTYPE 根元素 [元素声明]>
 
2.引用外部DTD：
<!DOCTYPE 根元素 SYSTEM "文件名">
 
3.内外部DTD文档结合：
<!DOCTYPE 根元素 SYSTEM "DTD文件路径" [定义内容]>
 
DTD中的一些重要的关键字：
●DOCTYPE（DTD的声明）
●ENTITY（实体的声明）
●SYSTEM、PUBLIC（外部资源申请）
实体主要分为一下四类
 
●内置实体 (Built-in entities)
●字符实体 (Character entities)
●通用实体 (General entities)
●参数实体 (Parameter entities)
 
参数实体用%实体名称申明，引用时也用%实体名称;
其余实体直接用实体名称申明，引用时用&实体名称。
参数实体只能在DTD中申明，DTD中引用；
其余实体只能在DTD中申明，可在xml文档中引用。

注意：参数实体是在DTD中被引用的，而其余实体是在xml文档中被引用的。


bypass

https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/XXE%20Injection/README.md

 
读取文件
DOS
RCE

https://blog.sonarsource.com/wordpress-xxe-security-vulnerability