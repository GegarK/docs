import{_ as a,K as e,L as t,a5 as p,M as n,N as o,W as c,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"整数溢出",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#整数溢出","aria-hidden":"true"},"#"),o(" 整数溢出")],-1),r=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"DeeLMind 提示"),n("p",null,"整数溢出不限语言。")],-1),d=c(`<h2 id="solidity" tabindex="-1"><a class="header-anchor" href="#solidity" aria-hidden="true">#</a> Solidity</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.17</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Token</span> <span class="token punctuation">{</span>
  <span class="token comment">// uint8 0 - 255</span>
  <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint8</span><span class="token punctuation">)</span> balances<span class="token punctuation">;</span>

  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token builtin">uint8</span> _value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    unchecked<span class="token punctuation">{</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> _value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> _owner<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> balance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> balances<span class="token punctuation">[</span>_owner<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h2><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> x<span class="token punctuation">:</span> <span class="token keyword">u8</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span> <span class="token comment">// u8 类型的最大值是 255</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Before overflow: {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 增加 1，会导致溢出</span>
    x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;After overflow: {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(v,m){const s=i("DocsAD");return e(),t("div",null,[u,r,p(s),d])}const h=a(l,[["render",k],["__file","overflow.html.vue"]]);export{h as default};
