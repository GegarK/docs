import{_ as l,K as o,L as t,a5 as i,M as e,N as n,W as s,F as a}from"./framework-edebdfe1.js";const c="/imgs/other/protocal/dns/1.png",h="/imgs/other/protocal/dns/3.png",m="/imgs/other/protocal/dns/2.png",v={},u=s(`<h1 id="dns协议" tabindex="-1"><a class="header-anchor" href="#dns协议" aria-hidden="true">#</a> DNS协议</h1><h2 id="什么是dns协议" tabindex="-1"><a class="header-anchor" href="#什么是dns协议" aria-hidden="true">#</a> 什么是DNS协议?</h2><p>域名系统（英语：Domain Name System，缩写：DNS）是互联网的一项服务。它作为将域名和IP地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS使用TCP和UDP端口53。当前，对于每一级域名长度的限制是63个字符，域名总长度则不能超过253个字符。</p><h2 id="dns系统组成" tabindex="-1"><a class="header-anchor" href="#dns系统组成" aria-hidden="true">#</a> DNS系统组成</h2><ul><li>root 根域名</li><li>顶级域名</li><li>二级域名</li><li>三级域名</li><li>四级域名</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>deelmind.com.
. root域名
com 顶级域名
deelmind 二级域名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),b=s('<h2 id="dns解析流程" tabindex="-1"><a class="header-anchor" href="#dns解析流程" aria-hidden="true">#</a> DNS解析流程</h2><p><img src="'+c+`" alt="er" loading="lazy"></p><ul><li>本地HOSTS文件解析</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>C:\\Windows\\System32\\drivers\\etc\\hosts

# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a &#39;#&#39; symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p={id:"dns-records-types",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#dns-records-types","aria-hidden":"true"},"#",-1),f={href:"https://www.cloudflare.com/zh-cn/learning/dns/dns-records/",target:"_blank",rel:"noopener noreferrer"},g=s('<p><img src="'+h+'" alt="er" loading="lazy"></p><ul><li>A 记录（IPv4 Address Record）</li><li>MX 记录（Mail Exchanger Record）</li><li>NS 记录（Name Server Record）</li><li>PTR 记录（Pointer Record）</li><li>SOA 记录（Start of Authority Record）</li><li>SRV 记录（Service Record）</li><li>TXT 记录（Text Record）</li><li>AAAA 记录（IPv6 Address Record）</li><li>CNAME 记录（Canonical Name Record）</li></ul>',2),S={id:"dns-root-server",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#dns-root-server","aria-hidden":"true"},"#",-1),N={href:"https://www.iana.org/domains/root/servers",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[e("img",{src:m,alt:"er",loading:"lazy"})],-1);function D(T,A){const r=a("DocsAD"),d=a("ExternalLinkIcon");return o(),t("div",null,[u,i(r),b,e("h2",p,[_,n(),e("a",f,[n("DNS Records Types"),i(d)])]),g,e("h2",S,[x,n(),e("a",N,[n("DNS Root Server"),i(d)])]),y])}const P=l(v,[["render",D],["__file","dns.html.vue"]]);export{P as default};
