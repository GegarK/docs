import{_ as n,K as s,L as a,W as t}from"./framework-edebdfe1.js";const p={},e=t(`<h1 id="create2钓鱼" tabindex="-1"><a class="header-anchor" href="#create2钓鱼" aria-hidden="true">#</a> Create2钓鱼</h1><p><strong>CREATE2</strong> 是以太坊中的一种合约创建机制，它允许开发者在已知的地址上部署合约，而无需提前知道这个地址。攻击者可以利用这一特性，通过恶意合约地址进行钓鱼攻击。</p><h2 id="攻击原理" tabindex="-1"><a class="header-anchor" href="#攻击原理" aria-hidden="true">#</a> 攻击原理</h2><ol><li><p><strong>合约地址预测</strong>：攻击者可以使用 <code>CREATE2</code> 计算出一个合约的地址，只要知道创建合约的创始地址和特定的盐值（salt），他们就可以在未来的某个时间点向这个地址发送交易。</p></li><li><p><strong>恶意合约</strong>：攻击者部署一个恶意合约，伪装成合法的合约地址。受害者可能会在不知道的情况下与这个合约互动，导致资产损失。</p></li><li><p><strong>绕过验证</strong>：由于 CREATE2 允许在任何时间点部署到相同地址，用户可能会认为该合约是合法的，从而进行交易。</p></li></ol><h2 id="create2-钓鱼代码示例" tabindex="-1"><a class="header-anchor" href="#create2-钓鱼代码示例" aria-hidden="true">#</a> CREATE2 钓鱼代码示例</h2><p>以下是一个使用 CREATE2 创建合约的简单示例，以及如何进行钓鱼攻击的伪代码。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">ContractD</span> <span class="token punctuation">{</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> value<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> _value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">contract</span> <span class="token class-name">ContractC</span> <span class="token punctuation">{</span>
    <span class="token keyword">event</span> <span class="token function">ContractDeployed</span><span class="token punctuation">(</span><span class="token builtin">address</span> contractAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 通过 CREATE2 部署合约 D</span>
    <span class="token keyword">function</span> <span class="token function">deployDWithCreate2</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _value<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _salt<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> contractAddress<span class="token punctuation">;</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> bytecode <span class="token operator">=</span> <span class="token function">getContractDBytecode</span><span class="token punctuation">(</span>_value<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            contractAddress <span class="token operator">:=</span> <span class="token function">create2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span>bytecode<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>bytecode<span class="token punctuation">)</span><span class="token punctuation">,</span> _salt<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">require</span><span class="token punctuation">(</span>contractAddress <span class="token operator">!=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Failed to deploy contract&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">ContractDeployed</span><span class="token punctuation">(</span>contractAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> contractAddress<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取合约 D 的字节码</span>
    <span class="token keyword">function</span> <span class="token function">getContractDBytecode</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> bytecode <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>ContractD<span class="token punctuation">)</span><span class="token punctuation">.</span>creationCode<span class="token punctuation">;</span>
        <span class="token keyword">return</span> abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>bytecode<span class="token punctuation">,</span> abi<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 计算 CREATE2 将要部署的合约地址</span>
    <span class="token keyword">function</span> <span class="token function">computeAddress</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _salt<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> bytecode <span class="token operator">=</span> <span class="token function">getContractDBytecode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 假设_value 为 0，仅用于计算</span>
        <span class="token builtin">bytes32</span> hash <span class="token operator">=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>
            abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>
                <span class="token builtin">bytes1</span><span class="token punctuation">(</span><span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 当前合约 C 的地址</span>
                _salt<span class="token punctuation">,</span>
                <span class="token function">keccak256</span><span class="token punctuation">(</span>bytecode<span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token builtin">uint160</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getSalt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">bytes32</span> salt <span class="token operator">=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;MyUniqueSaltValue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> salt<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","create2.html.vue"]]);export{k as default};
