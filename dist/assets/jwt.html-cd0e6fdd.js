import{_ as d,K as l,L as o,M as e,N as i,a5 as n,W as r,F as a}from"./framework-edebdfe1.js";const u="/imgs/web/exploits/permission/jwt/jwtall.jpg",c="/imgs/web/exploits/permission/jwt/jwt.jpeg",v="/imgs/web/exploits/permission/jwt/jwtprocess.png",m={},h=e("h1",{id:"jwt漏洞",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jwt漏洞","aria-hidden":"true"},"#"),i(" JWT漏洞")],-1),b=e("h2",{id:"什么是jwt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是jwt","aria-hidden":"true"},"#"),i(" 什么是JWT")],-1),p={href:"https://datatracker.ietf.org/doc/html/rfc7519",target:"_blank",rel:"noopener noreferrer"},q=r('<p><img src="'+u+`" alt="JWT格式" loading="lazy"></p><h2 id="jwt格式" tabindex="-1"><a class="header-anchor" href="#jwt格式" aria-hidden="true">#</a> JWT格式</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>Header.Payload.Signature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+`" alt="JWT格式" loading="lazy"></p><ul><li>JWT Header</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>{&quot;alg&quot;:&quot;加密算法&quot;,&quot;typ&quot;:&quot;JWT&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>JWT Payload</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>iss: The issuer of the token
sub: The subject of the token
aud: The audience of the token
exp: JWT expiration time defined in Unix time
nbf: &quot;Not before&quot; time that identifies the time before which the JWT must not be accepted for processing
iat: &quot;Issued at&quot; time, in Unix time, at which the token was issued
jti: JWT ID claim provides a unique identifier for the JWT
自定义其它字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JWT Signature</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>Signature = HMACSHA256(base64UrlEncode(header) + &quot;.&quot; + base64UrlEncode(payload),&quot;secret&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="jwt-校验过程" tabindex="-1"><a class="header-anchor" href="#jwt-校验过程" aria-hidden="true">#</a> JWT 校验过程</h2><p><img src="`+v+`" alt="JWT格式" loading="lazy"></p><h2 id="潜在漏洞" tabindex="-1"><a class="header-anchor" href="#潜在漏洞" aria-hidden="true">#</a> 潜在漏洞</h2><ul><li>签名未校验</li><li>算法被篡改</li><li>敏感信息泄露</li><li>加密算法不安全</li><li>伪造密钥(CVE-2018-0114)</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>{
  &quot;typ&quot;: &quot;JWT&quot;,
  &quot;alg&quot;: &quot;RS256&quot;,
  &quot;jwk&quot;: {
    &quot;kty&quot;: &quot;RSA&quot;,
    &quot;kid&quot;: &quot;TEST&quot;,
    &quot;use&quot;: &quot;sig&quot;,
    &quot;e&quot;:   &quot;AQAB&quot;,
    &quot;n&quot;:   &quot;axUj&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function g(J,_){const t=a("ExternalLinkIcon"),s=a("DocsAD");return l(),o("div",null,[h,b,e("p",null,[i("JSON Web Token (JWT) 是一个开放标准 ("),e("a",p,[i("RFC 7519"),n(t)]),i(")，它定义了一种紧凑且自包含的方式，用于在各方之间安全地传输信息作为 JSON 对象。 此信息可以验证和信任，因为它是数字签名的。 JWT 可以使用密钥（使用 HMAC 算法）或使用 RSA 或 ECDSA 的公钥/私钥对进行签名。")]),n(s),q])}const S=d(m,[["render",g],["__file","jwt.html.vue"]]);export{S as default};
