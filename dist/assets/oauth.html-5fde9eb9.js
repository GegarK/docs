import{_ as t,K as l,L as c,M as e,N as n,a5 as i,W as r,F as a}from"./framework-edebdfe1.js";const o="/imgs/web/exploits/permission/oauth/oauth-2-flow-diagram.png",u="/imgs/web/exploits/permission/oauth/redirect.png",v="/imgs/web/exploits/permission/oauth/auth.png",m={},b=e("h1",{id:"oauth漏洞",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#oauth漏洞","aria-hidden":"true"},"#"),n(" OAuth漏洞")],-1),h={id:"什么是oauth2认证",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#什么是oauth2认证","aria-hidden":"true"},"#",-1),g={href:"https://oauth.net/2/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[e("img",{src:o,alt:"OAUTH",loading:"lazy"})],-1),_=e("h2",{id:"oauth2分类",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#oauth2分类","aria-hidden":"true"},"#"),n(" OAuth2分类")],-1),y=e("ul",null,[e("li",null,"implicit"),e("li",null,"authorization code"),e("li",null,"password"),e("li",null,"client credentials"),e("li",null,"refresh token")],-1),S=r(`<h2 id="oauth2-implicit" tabindex="-1"><a class="header-anchor" href="#oauth2-implicit" aria-hidden="true">#</a> OAuth2 implicit</h2><ul><li>第一步 跳转到授权网站</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>GET /social-login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+'" alt="OAUTH" loading="lazy"></p><p>用户名密码登录</p><p><img src="'+v+`" alt="OAUTH" loading="lazy"></p><ul><li>第二步 获取授权码</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>GET /auth?client_id=neivpmi71bz7h7wiosar2&amp;redirect_uri=https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback&amp;response_type=token&amp;nonce=814077241&amp;scope=openid%20profile%20email HTTP/1.1
Host: oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net
Cookie: _session=gAhcfl4Hb04WDf_y1ZOeI; _session.legacy=gAhcfl4Hb04WDf_y1ZOeI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>POST /interaction/30HW15ukE9HP7NxVOnW-G/confirm HTTP/1.1
Host: oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net
Cookie: _interaction=30HW15ukE9HP7NxVOnW-G; _session=gAhcfl4Hb04WDf_y1ZOeI; _session.legacy=gAhcfl4Hb04WDf_y1ZOeI
Origin: https://oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>HTTP/1.1 302 Found
X-Powered-By: Express
Pragma: no-cache
Cache-Control: no-cache, no-store
Set-Cookie: _interaction_resume=; path=/auth/30HW15ukE9HP7NxVOnW-G; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=lax; secure; httponly
Set-Cookie: _session=OEnTFndbnoasjyORmdgHX; path=/; expires=Wed, 16 Mar 2022 08:09:34 GMT; samesite=none; secure; httponly
Set-Cookie: _session.legacy=OEnTFndbnoasjyORmdgHX; path=/; expires=Wed, 16 Mar 2022 08:09:34 GMT; secure; httponly
Location: https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback#access_token=vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV&amp;expires_in=3600&amp;token_type=Bearer&amp;scope=openid%20profile%20email
Content-Type: text/html; charset=utf-8
Date: Wed, 02 Mar 2022 08:09:34 GMT
Connection: close
Content-Length: 459

Redirecting to &lt;a href=&quot;https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback#access_token=vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV&amp;amp;expires_in=3600&amp;amp;token_type=Bearer&amp;amp;scope=openid%20profile%20email&quot;&gt;https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback#access_token=vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV&amp;amp;expires_in=3600&amp;amp;token_type=Bearer&amp;amp;scope=openid%20profile%20email&lt;/a&gt;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第三步 获取access token</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>GET /oauth-callback HTTP/1.1
Host: ac401ffa1e91fb3ac01854c700520092.web-security-academy.net
Cookie: session=dYZki6hv0EfUUg2nULqDxHUf70htwzCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Connection: close
Content-Length: 734

&lt;script&gt;
const urlSearchParams = new URLSearchParams(window.location.hash.substr(1));
const token = urlSearchParams.get(&#39;access_token&#39;);
fetch(&#39;https://oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net/me&#39;, {
    method: &#39;GET&#39;,
    headers: {
        &#39;Authorization&#39;: &#39;Bearer &#39; + token,
        &#39;Content-Type&#39;: &#39;application/json&#39;
    }
})
.then(r =&gt; r.json())
.then(j =&gt; 
    fetch(&#39;/authenticate&#39;, {
        method: &#39;POST&#39;,
        headers: {
            &#39;Accept&#39;: &#39;application/json&#39;,
            &#39;Content-Type&#39;: &#39;application/json&#39;
        },
        body: JSON.stringify({
            email: j.email,
            username: j.sub,
            token: token
        })
    }).then(r =&gt; document.location = &#39;/&#39;))
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第四步 获取资源</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>GET /me HTTP/1.1
Host: oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net
Sec-Ch-Ua: &quot; Not A;Brand&quot;;v=&quot;99&quot;, &quot;Chromium&quot;;v=&quot;92&quot;
Authorization: Bearer vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>HTTP/1.1 200 OK
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Origin: https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net
Access-Control-Expose-Headers: WWW-Authenticate
Pragma: no-cache
Cache-Control: no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Wed, 02 Mar 2022 08:09:38 GMT
Connection: close
Content-Length: 88

{&quot;sub&quot;:&quot;wiener&quot;,&quot;name&quot;:&quot;Peter Wiener&quot;,&quot;email&quot;:&quot;wiener@hotdog.com&quot;,&quot;email_verified&quot;:true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>POST /authenticate HTTP/1.1
Host: ac401ffa1e91fb3ac01854c700520092.web-security-academy.net
Cookie: session=dYZki6hv0EfUUg2nULqDxHUf70htwzCP
Content-Length: 103
Sec-Ch-Ua: &quot; Not A;Brand&quot;;v=&quot;99&quot;, &quot;Chromium&quot;;v=&quot;92&quot;
Accept: application/json
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36
Content-Type: application/json
Origin: https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Connection: close

{&quot;email&quot;:&quot;wiener@hotdog.com&quot;,&quot;username&quot;:&quot;wiener&quot;,&quot;token&quot;:&quot;vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oauth2-code" tabindex="-1"><a class="header-anchor" href="#oauth2-code" aria-hidden="true">#</a> OAuth2 code</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>GET /auth?client_id=kxz97it442c8z2z19j7ep&amp;state=deelmind&amp;redirect_uri=https://ac7c1f611feaab85c08336f100ab0002.web-security-academy.net/oauth-login&amp;response_type=code&amp;scope=openid%20profile%20email HTTP/1.1
Host: oauth-ac601f871fdbabd8c0ad363d0251009d.web-security-academy.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>GET /oauth-login?code=-DaIJjB8YSM_9358H6lfdPZgd_OrhwYSXD1ZrS4G0Wg&amp;state=deelmind HTTP/1.1
Host: ac7c1f611feaab85c08336f100ab0002.web-security-academy.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function q(J,T){const s=a("ExternalLinkIcon"),d=a("DocsAD");return l(),c("div",null,[b,e("h2",h,[p,n(" 什么是"),e("a",g,[n("OAuth2认证"),i(s)])]),f,_,y,i(d),S])}const x=t(m,[["render",q],["__file","oauth.html.vue"]]);export{x as default};
