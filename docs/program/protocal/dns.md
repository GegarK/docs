# DNS协议

## 什么是DNS协议?
域名系统（英语：Domain Name System，缩写：DNS）是互联网的一项服务。它作为将域名和IP地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS使用TCP和UDP端口53。当前，对于每一级域名长度的限制是63个字符，域名总长度则不能超过253个字符。

## DNS系统组成
* root 根域名
* 顶级域名
* 二级域名
* 三级域名
* 四级域名
```JS
deelmind.com.
. root域名
com 顶级域名
deelmind 二级域名
```

<DocsAD/>

## DNS解析流程

![er](/imgs/other/protocal/dns/1.png)

* 本地HOSTS文件解析
```JS
C:\Windows\System32\drivers\etc\hosts

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
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
```

## [DNS Records Types](https://www.cloudflare.com/zh-cn/learning/dns/dns-records/)
![er](/imgs/other/protocal/dns/3.png)

* A 记录（IPv4 Address Record）
* MX 记录（Mail Exchanger Record）
* NS 记录（Name Server Record）
* PTR 记录（Pointer Record）
* SOA 记录（Start of Authority Record）
* SRV 记录（Service Record）
* TXT 记录（Text Record）
* AAAA 记录（IPv6 Address Record）
* CNAME 记录（Canonical Name Record）

## [DNS Root Server](https://www.iana.org/domains/root/servers)
![er](/imgs/other/protocal/dns/2.png)