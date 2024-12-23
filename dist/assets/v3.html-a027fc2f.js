import{_ as n,K as s,L as a,W as t}from"./framework-edebdfe1.js";const e={},p=t(`<h1 id="uniswapv3" tabindex="-1"><a class="header-anchor" href="#uniswapv3" aria-hidden="true">#</a> UniswapV3</h1><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-2.0-or-later</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">=</span><span class="token number">0.7</span><span class="token number">.6</span><span class="token punctuation">;</span>
<span class="token keyword">pragma</span> abicoder v2<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">SimpleSwap</span> <span class="token punctuation">{</span>
    ISwapRouter <span class="token keyword">public</span> immutable swapRouter<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> <span class="token keyword">constant</span> DAI <span class="token operator">=</span> <span class="token number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span><span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> <span class="token keyword">constant</span> WETH9 <span class="token operator">=</span> <span class="token number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span><span class="token punctuation">;</span>
    <span class="token builtin">uint24</span> <span class="token keyword">public</span> <span class="token keyword">constant</span> feeTier <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span>ISwapRouter _swapRouter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        swapRouter <span class="token operator">=</span> _swapRouter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">swapWETHForDAI</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amountIn<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> amountOut<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// Transfer the specified amount of WETH9 to this contract.</span>
        TransferHelper<span class="token punctuation">.</span><span class="token function">safeTransferFrom</span><span class="token punctuation">(</span>WETH9<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> amountIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Approve the router to spend WETH9.</span>
        TransferHelper<span class="token punctuation">.</span><span class="token function">safeApprove</span><span class="token punctuation">(</span>WETH9<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span>swapRouter<span class="token punctuation">)</span><span class="token punctuation">,</span> amountIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Note: To use this example, you should explicitly set slippage limits, omitting for simplicity</span>
        <span class="token builtin">uint256</span> minOut <span class="token operator">=</span> <span class="token comment">/* Calculate min output */</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token builtin">uint160</span> priceLimit <span class="token operator">=</span> <span class="token comment">/* Calculate price limit */</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// Create the params that will be used to execute the swap</span>
        ISwapRouter<span class="token punctuation">.</span>ExactInputSingleParams <span class="token keyword">memory</span> params <span class="token operator">=</span>
            ISwapRouter<span class="token punctuation">.</span><span class="token function">ExactInputSingleParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                tokenIn<span class="token punctuation">:</span> WETH9<span class="token punctuation">,</span>
                tokenOut<span class="token punctuation">:</span> DAI<span class="token punctuation">,</span>
                fee<span class="token punctuation">:</span> feeTier<span class="token punctuation">,</span>
                recipient<span class="token punctuation">:</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span>
                deadline<span class="token punctuation">:</span> block<span class="token punctuation">.</span>timestamp<span class="token punctuation">,</span>
                amountIn<span class="token punctuation">:</span> amountIn<span class="token punctuation">,</span>
                amountOutMinimum<span class="token punctuation">:</span> minOut<span class="token punctuation">,</span>
                sqrtPriceLimitX96<span class="token punctuation">:</span> priceLimit
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// The call to \`exactInputSingle\` executes the swap.</span>
        amountOut <span class="token operator">=</span> swapRouter<span class="token punctuation">.</span><span class="token function">exactInputSingle</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","v3.html.vue"]]);export{r as default};
