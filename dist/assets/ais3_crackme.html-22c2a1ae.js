import{_ as a,K as t,L as e,a5 as p,M as n,N as o,W as c,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"ais3-crackme",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ais3-crackme","aria-hidden":"true"},"#"),o(" ais3_crackme")],-1),r=c(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
b&quot;ais3{I_tak3_g00d_n0t3s}&quot;
&#39;&#39;&#39;</span>

<span class="token keyword">import</span> angr
<span class="token keyword">import</span> claripy


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    project <span class="token operator">=</span> angr<span class="token punctuation">.</span>Project<span class="token punctuation">(</span><span class="token string">&quot;./ais3_crackme&quot;</span><span class="token punctuation">)</span>

    argv <span class="token operator">=</span> claripy<span class="token punctuation">.</span>BVS<span class="token punctuation">(</span><span class="token string">&quot;argv&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">)</span>

    initial_state <span class="token operator">=</span> project<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>entry_state<span class="token punctuation">(</span>args<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;self&quot;</span><span class="token punctuation">,</span>argv<span class="token punctuation">]</span><span class="token punctuation">)</span>

    sm <span class="token operator">=</span> project<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simulation_manager<span class="token punctuation">(</span>initial_state<span class="token punctuation">)</span>

    sm<span class="token punctuation">.</span>explore<span class="token punctuation">(</span>find<span class="token operator">=</span><span class="token number">0x400602</span><span class="token punctuation">)</span>

    found <span class="token operator">=</span> sm<span class="token punctuation">.</span>found<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    solution <span class="token operator">=</span> found<span class="token punctuation">.</span>solver<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span>argv<span class="token punctuation">,</span> cast_to<span class="token operator">=</span><span class="token builtin">bytes</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> solution


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(k,v){const s=i("DocsAD");return t(),e("div",null,[u,p(s),r])}const b=a(l,[["render",d],["__file","ais3_crackme.html.vue"]]);export{b as default};
