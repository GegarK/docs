import{_ as a,K as t,L as e,a5 as p,M as n,N as o,W as c,F as i}from"./framework-edebdfe1.js";const l="/imgs/other/safep/socket_connect.jpg",u={},r=n("h1",{id:"端口扫描",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#端口扫描","aria-hidden":"true"},"#"),o(" 端口扫描")],-1),k=c(`<h2 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> pyfiglet
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> socket
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime

ascii_banner <span class="token operator">=</span> pyfiglet<span class="token punctuation">.</span>figlet_format<span class="token punctuation">(</span><span class="token string">&quot;PORT SCANNER&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ascii_banner<span class="token punctuation">)</span>

target <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span>

<span class="token comment"># Add Banner</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Scanning Target: &quot;</span> <span class="token operator">+</span> target<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Scanning started at:&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># will scan ports between 1 to 65,535</span>
    <span class="token keyword">for</span> port <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
        socket<span class="token punctuation">.</span>setdefaulttimeout<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># returns an error indicator</span>
        result <span class="token operator">=</span> s<span class="token punctuation">.</span>connect_ex<span class="token punctuation">(</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> result <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Port {} is open&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">)</span>
        s<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Exiting Program !!!!&quot;</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> socket<span class="token punctuation">.</span>gaierror<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Hostname Could Not Be Resolved !!!!&quot;</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> socket<span class="token punctuation">.</span>error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\ Server not responding !!!!&quot;</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="er" loading="lazy"></p>',3);function d(v,m){const s=i("DocsAD");return t(),e("div",null,[r,p(s),k])}const y=a(u,[["render",d],["__file","port.html.vue"]]);export{y as default};
