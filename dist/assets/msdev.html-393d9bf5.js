import{_ as t,K as e,L as p,a5 as o,M as n,N as s,W as c,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"多签名钱包开发",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多签名钱包开发","aria-hidden":"true"},"#"),s(" 多签名钱包开发")],-1),k=n("h2",{id:"ethereum-eth",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ethereum-eth","aria-hidden":"true"},"#"),s(" Ethereum(ETH)")],-1),r=c(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">AuthorizeTransfer</span> <span class="token punctuation">{</span>

    <span class="token builtin">address</span> <span class="token keyword">public</span> A<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> B<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> C<span class="token punctuation">;</span>

    <span class="token comment">// 存储A和B是否授权</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token keyword">public</span> authorized<span class="token punctuation">;</span>

    <span class="token comment">// 事件记录授权情况</span>
    <span class="token keyword">event</span> <span class="token function">Authorized</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> by<span class="token punctuation">,</span> <span class="token builtin">bool</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">TransferToC</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">,</span><span class="token builtin">string</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _C<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        A <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span> <span class="token comment">// 部署合约的人默认是A</span>
        C <span class="token operator">=</span> _C<span class="token punctuation">;</span> <span class="token comment">// 传入C的地址</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// B设置（需单独调用）</span>
    <span class="token keyword">function</span> <span class="token function">setB</span><span class="token punctuation">(</span><span class="token builtin">address</span> _B<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> A<span class="token punctuation">,</span> <span class="token string">&quot;Only A can set B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        B <span class="token operator">=</span> _B<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// A或B对转账授权</span>
    <span class="token keyword">function</span> <span class="token function">authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> A <span class="token operator">||</span> msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> B<span class="token punctuation">,</span> <span class="token string">&quot;Only A or B can authorize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        authorized<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Authorized</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 取消授权</span>
    <span class="token keyword">function</span> <span class="token function">revokeAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> A <span class="token operator">||</span> msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> B<span class="token punctuation">,</span> <span class="token string">&quot;Only A or B can revoke authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        authorized<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Authorized</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// A或者B向C转钱，需双方都授权</span>
    <span class="token keyword">function</span> <span class="token function">transferToC</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>authorized<span class="token punctuation">[</span>A<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> authorized<span class="token punctuation">[</span>B<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;Both A and B must authorize the transfer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 重置授权状态</span>
        authorized<span class="token punctuation">[</span>A<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        authorized<span class="token punctuation">[</span>B<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token comment">// 转账给C</span>
        <span class="token keyword">emit</span> <span class="token function">TransferToC</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> amount<span class="token punctuation">,</span><span class="token string">&quot;DeeLMind&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 接收以太币</span>
    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 查询合约余额</span>
    <span class="token keyword">function</span> <span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=i("DocsAD");return e(),p("div",null,[u,k,o(a),r])}const y=t(l,[["render",d],["__file","msdev.html.vue"]]);export{y as default};
