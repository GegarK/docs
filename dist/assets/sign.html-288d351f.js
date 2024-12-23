import{_ as a,K as e,L as t,a5 as p,M as n,N as c,W as i,F as o}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"签名钓鱼",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#签名钓鱼","aria-hidden":"true"},"#"),c(" 签名钓鱼")],-1),r=i(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">SignatureVerifier</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">verify</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span> messageHash<span class="token punctuation">,</span>
        <span class="token builtin">uint8</span> v<span class="token punctuation">,</span>
        <span class="token builtin">bytes32</span> r<span class="token punctuation">,</span>
        <span class="token builtin">bytes32</span> s
    <span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 构造带有前缀的以太坊签名消息哈希</span>
        <span class="token builtin">bytes32</span> ethSignedMessageHash <span class="token operator">=</span> <span class="token function">prefixed</span><span class="token punctuation">(</span>messageHash<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用 ecrecover 恢复签名者地址</span>
        <span class="token builtin">address</span> signer <span class="token operator">=</span> <span class="token function">ecrecover</span><span class="token punctuation">(</span>ethSignedMessageHash<span class="token punctuation">,</span> v<span class="token punctuation">,</span> r<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> signer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将消息哈希进行前缀处理，符合以太坊的标准签名格式</span>
    <span class="token keyword">function</span> <span class="token function">prefixed</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> hash<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token string">&quot;\\x19Ethereum Signed Message:\\n32&quot;</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(k,v){const s=o("DocsAD");return e(),t("div",null,[u,p(s),r])}const b=a(l,[["render",d],["__file","sign.html.vue"]]);export{b as default};
