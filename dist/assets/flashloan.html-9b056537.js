import{_ as n,K as s,L as a,W as t}from"./framework-edebdfe1.js";const p={},e=t(`<h1 id="闪电贷" tabindex="-1"><a class="header-anchor" href="#闪电贷" aria-hidden="true">#</a> 闪电贷</h1><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.26</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IUniswapV2Callee</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">uniswapV2Call</span><span class="token punctuation">(</span>
        <span class="token builtin">address</span> sender<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> amount0<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> amount1<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> data
    <span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">UniswapV2FlashSwap</span> <span class="token keyword">is</span> IUniswapV2Callee <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">private</span> <span class="token keyword">constant</span> UNISWAP_V2_FACTORY <span class="token operator">=</span>
        <span class="token number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span><span class="token punctuation">;</span>

    <span class="token builtin">address</span> <span class="token keyword">private</span> <span class="token keyword">constant</span> DAI <span class="token operator">=</span> <span class="token number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span><span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">private</span> <span class="token keyword">constant</span> WETH <span class="token operator">=</span> <span class="token number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span><span class="token punctuation">;</span>

    IUniswapV2Factory <span class="token keyword">private</span> <span class="token keyword">constant</span> factory <span class="token operator">=</span>
        <span class="token function">IUniswapV2Factory</span><span class="token punctuation">(</span>UNISWAP_V2_FACTORY<span class="token punctuation">)</span><span class="token punctuation">;</span>

    IERC20 <span class="token keyword">private</span> <span class="token keyword">constant</span> weth <span class="token operator">=</span> <span class="token function">IERC20</span><span class="token punctuation">(</span>WETH<span class="token punctuation">)</span><span class="token punctuation">;</span>

    IUniswapV2Pair <span class="token keyword">private</span> immutable pair<span class="token punctuation">;</span>

    <span class="token comment">// For this example, store the amount to repay</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> amountToRepay<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pair <span class="token operator">=</span> <span class="token function">IUniswapV2Pair</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getPair</span><span class="token punctuation">(</span>DAI<span class="token punctuation">,</span> WETH<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">flashSwap</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> wethAmount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token comment">// Need to pass some data to trigger uniswapV2Call</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data <span class="token operator">=</span> abi<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>WETH<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// amount0Out is DAI, amount1Out is WETH</span>
        pair<span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> wethAmount<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// This function is called by the DAI/WETH pair contract</span>
    <span class="token keyword">function</span> <span class="token function">uniswapV2Call</span><span class="token punctuation">(</span>
        <span class="token builtin">address</span> sender<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> amount0<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> amount1<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> data
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span>pair<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;not pair&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>sender <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;not sender&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">(</span><span class="token builtin">address</span> tokenBorrow<span class="token punctuation">,</span> <span class="token builtin">address</span> caller<span class="token punctuation">)</span> <span class="token operator">=</span>
            abi<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Your custom code would go here. For example, code to arbitrage.</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>tokenBorrow <span class="token operator">==</span> WETH<span class="token punctuation">,</span> <span class="token string">&quot;token borrow != WETH&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// about 0.3% fee, +1 to round up</span>
        <span class="token builtin">uint256</span> fee <span class="token operator">=</span> <span class="token punctuation">(</span>amount1 <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">997</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        amountToRepay <span class="token operator">=</span> amount1 <span class="token operator">+</span> fee<span class="token punctuation">;</span>

        <span class="token comment">// Transfer flash swap fee from caller</span>
        weth<span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span>caller<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fee<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Repay</span>
        weth<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span>pair<span class="token punctuation">)</span><span class="token punctuation">,</span> amountToRepay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IUniswapV2Pair</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span>
        <span class="token builtin">uint256</span> amount0Out<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> amount1Out<span class="token punctuation">,</span>
        <span class="token builtin">address</span> to<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> data
    <span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IUniswapV2Factory</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">getPair</span><span class="token punctuation">(</span><span class="token builtin">address</span> tokenA<span class="token punctuation">,</span> <span class="token builtin">address</span> tokenB<span class="token punctuation">)</span>
        <span class="token keyword">external</span>
        <span class="token keyword">view</span>
        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span> pair<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IERC20</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> recipient<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span>
        <span class="token keyword">external</span>
        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">allowance</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">)</span>
        <span class="token keyword">external</span>
        <span class="token keyword">view</span>
        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> sender<span class="token punctuation">,</span> <span class="token builtin">address</span> recipient<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span>
        <span class="token keyword">external</span>
        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IWETH</span> <span class="token keyword">is</span> IERC20 <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","flashloan.html.vue"]]);export{k as default};
