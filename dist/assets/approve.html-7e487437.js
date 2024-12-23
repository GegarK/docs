import{_ as n,K as s,L as a,W as e}from"./framework-edebdfe1.js";const t={},p=e(`<h1 id="approve钓鱼" tabindex="-1"><a class="header-anchor" href="#approve钓鱼" aria-hidden="true">#</a> Approve钓鱼</h1><p>在以太坊生态中，<code>approve</code> 函数允许用户授权特定地址（通常是智能合约）可以代表用户花费其资产。当用户调用 <code>approve</code> 时，他们指定一个地址和一个可以被该地址支配的代币数量。如果攻击者能够诱使用户调用其恶意合约的 <code>approve</code> 函数，便可以在用户不知情的情况下转移他们的代币。</p><h2 id="示例攻击流程" tabindex="-1"><a class="header-anchor" href="#示例攻击流程" aria-hidden="true">#</a> 示例攻击流程</h2><ol><li><strong>诱骗用户</strong>：攻击者设计一个恶意合约，声称需要用户进行 <code>approve</code> 操作以完成某个合法的交易或活动。</li><li><strong>执行 <code>approve</code></strong>：用户在不知情的情况下调用恶意合约的 <code>approve</code> 函数。</li><li><strong>转移资产</strong>：攻击者随后可以通过 <code>transferFrom</code> 函数转移用户授权的资产。</li></ol><h2 id="恶意合约" tabindex="-1"><a class="header-anchor" href="#恶意合约" aria-hidden="true">#</a> 恶意合约</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">contract</span> <span class="token class-name">GKBToken</span> <span class="token keyword">is</span> ERC20 <span class="token punctuation">{</span>
    <span class="token comment">// 初始化生成代币</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> initialSupply<span class="token punctuation">)</span> <span class="token function">ERC20</span><span class="token punctuation">(</span><span class="token string">&quot;GKBToken&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GKB&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_mint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> initialSupply<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">contract</span> <span class="token class-name">PhishingContract</span> <span class="token punctuation">{</span>
    IERC20 <span class="token keyword">public</span> token<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _tokenAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        token <span class="token operator">=</span> <span class="token function">IERC20</span><span class="token punctuation">(</span>_tokenAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 模拟钓鱼操作，诱导用户进行批准</span>
    <span class="token keyword">function</span> <span class="token function">phishingApprove</span><span class="token punctuation">(</span><span class="token builtin">address</span> dest <span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token comment">// 诱导用户授权给恶意合约</span>
        token<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","approve.html.vue"]]);export{d as default};
