import{_ as d,K as r,L as a,M as e,N as i,a5 as n,W as c,F as s}from"./framework-edebdfe1.js";const o={},v=e("h1",{id:"xxe漏洞",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#xxe漏洞","aria-hidden":"true"},"#"),i(" XXE漏洞")],-1),u=e("h2",{id:"视频教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#视频教程","aria-hidden":"true"},"#"),i(" 视频教程")],-1),m={href:"https://www.youtube.com/watch?v=r4rh1Llw6Vs&list=PLgZqc0esdeS8TkLr6T6EkDb1AfOz9VvkL",target:"_blank",rel:"noopener noreferrer"},b=e("iframe",{width:"720px",height:"480px",src:"https://www.youtube.com/embed/r4rh1Llw6Vs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),h={href:"https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2061160&desc=1&spm_id_from=333.999.0.0",target:"_blank",rel:"noopener noreferrer"},p=e("iframe",{src:"//player.bilibili.com/player.html?aid=634975282&bvid=BV1Vb4y1v7jN&cid=463651217&page=1",frameborder:"no",allowfullscreen:"true",style:{width:"720px",height:"480px"}},` 
`,-1),g=c(`<h2 id="什么是xxe" tabindex="-1"><a class="header-anchor" href="#什么是xxe" aria-hidden="true">#</a> 什么是XXE</h2><p>XXE(Server-side request forgery XML外部实体注入 XML External Entity)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

&lt;!DOCTYPE note [
&lt;!ENTITY nbsp &quot;&amp;#xA0;&quot;&gt;
&lt;!ENTITY writer &quot;Writer: Donald Duck.&quot;&gt;
&lt;!ENTITY copyright &quot;Copyright: W3Schools.&quot;&gt;
&lt;!ENTITY % copyright &quot;Copyright: W3Schools.&quot;&gt;
&lt;!ENTITY %copyright; &gt;
]&gt;

&lt;note&gt;
&lt;to&gt;Tove&lt;/to&gt;
&lt;from&gt;Jani&lt;/from&gt;
&lt;heading&gt;Reminder&lt;/heading&gt;
&lt;body&gt;Don&#39;t forget me this weekend!&lt;/body&gt;
&lt;footer&gt;&amp;writer;&amp;nbsp;&amp;copyright;&lt;/footer&gt;
&lt;/note&gt;


&lt;![CDATA[ … ]]&gt;
https://github.com/enjoiz/XXEinjector
https://github.com/luisfontes19/xxexploiter




1.内部声明DTD：
&lt;!DOCTYPE 根元素 [元素声明]&gt;
 
2.引用外部DTD：
&lt;!DOCTYPE 根元素 SYSTEM &quot;文件名&quot;&gt;
 
3.内外部DTD文档结合：
&lt;!DOCTYPE 根元素 SYSTEM &quot;DTD文件路径&quot; [定义内容]&gt;
 
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
其余实体直接用实体名称申明，引用时用&amp;实体名称。
参数实体只能在DTD中申明，DTD中引用；
其余实体只能在DTD中申明，可在xml文档中引用。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function T(_,x){const l=s("ExternalLinkIcon"),t=s("DocsAD");return r(),a("div",null,[v,u,e("p",null,[e("a",m,[i("YouTube系列教程"),n(l)])]),b,e("p",null,[e("a",h,[i("B站系列教程"),n(l)])]),p,n(t),g])}const f=d(o,[["render",T],["__file","index.html.vue"]]);export{f as default};
