# CVE&SRC

::: warning DeeLMind 提示
推荐新手学完我讲的渗透测试课程，先分析CVE，挖掘CVE，然后再去搞SRC。
因为挖掘CVE都是有源码，有源码都搞不定，没有源码是不是更复杂一点呢？
:::

[YouTube系列教程](https://www.youtube.com/watch?v=xaJVG8go4GA&list=PLgZqc0esdeS88f_MviZ6V-1QdCde8qwrn)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/xaJVG8go4GA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2796020&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=688191733&bvid=BV1a24y1d7rv&cid=899742426&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>


<DocsAD/>

## CVE
CVE 是通用漏洞披露（Common Vulnerabilities and Exposures）的英文缩写，由The Mitre Corporation运营的美国国家网络安全 FFRDC负责维护该系统，资金来自美国国土安全部的美国国家网络安全部门。该系统于1999年9月正式向公众推出，是一个非营利性组织。[http://cve.mitre.org/](http://cve.mitre.org/)，[https://www.cve.org/](https://www.cve.org/)。

CVE标识符组成（CVE-年-多位数字），例如：CVE-2011-1111

## CVE-LESS
CVE-LESS就是没有进入CVE库中的漏洞。

## CVSS
CVSS（Common Vulnerability Scoring System）通用漏洞评分系统。[在线计算分数](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator)，[分数计算例子](https://www.first.org/cvss/examples)

## CNA
CNA（CVE Numbering Authority）是 [CVE 编号的分发机构](https://www.cve.org/ProgramOrganization/CNAs)，成员包括供应商、开源项目社区、漏洞研究人员、国家计算机安全应急响应组等，主要职能是在授权范围内分发和管理 CVE 编号。
CNA必须是具有显著的用户基础和建立了安全咨询能力的主要的软件厂商，并且建立了通常作为研究人员和厂商之间的一个第三方的中立的接口。它必须拥有一个在CVE编委会中从事技术工作的成员。

## CWE
[CWE](https://cwe.mitre.org/)（CommonWeakness Enumeration）是社区开发的常见软件和硬件安全漏洞列表。

## NVD
[NVD](https://nvd.nist.gov/)（National Vulnerability Database），美国国家漏洞库，可能对CVE有详细分析。


## SRC
SRC（Security Response Center），安全应急响应中心。