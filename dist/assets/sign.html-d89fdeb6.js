import{_ as a,K as t,L as c,a5 as p,M as n,N as e,W as o,F as i}from"./framework-edebdfe1.js";const u={},l=n("h1",{id:"数字签名",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数字签名","aria-hidden":"true"},"#"),e(" 数字签名")],-1),d=o(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// 导入web3.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Web3 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;web3&#39;</span><span class="token punctuation">;</span>
const web3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建账户</span>
const account <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  <span class="token builtin">address</span><span class="token punctuation">:</span> <span class="token string">&#39;0x8D866ABAAf79E1fB5128B9557B09669F44bB6b72&#39;</span><span class="token punctuation">,</span>
  privateKey<span class="token punctuation">:</span> <span class="token string">&#39;0x419a74f16c55f07a42d7fc9f4b3c1bb47dd89f010e44d1135d73fef558f35c7c&#39;</span><span class="token punctuation">,</span>
  signTransaction<span class="token punctuation">:</span> <span class="token punctuation">[</span>Function<span class="token punctuation">:</span> signTransaction<span class="token punctuation">]</span><span class="token punctuation">,</span>
  sign<span class="token punctuation">:</span> <span class="token punctuation">[</span>Function<span class="token punctuation">:</span> sign<span class="token punctuation">]</span><span class="token punctuation">,</span>
  encrypt<span class="token punctuation">:</span> <span class="token punctuation">[</span>Function<span class="token punctuation">:</span> encrypt<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过私钥生成一个账户对象</span>
const accountFromPrivateKey <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token function">privateKeyToAccount</span><span class="token punctuation">(</span>
  account<span class="token punctuation">.</span>privateKey
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Address from Private Key:&#39;</span><span class="token punctuation">,</span> accountFromPrivateKey<span class="token punctuation">.</span><span class="token builtin">address</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Address <span class="token keyword">from</span> Private Key<span class="token punctuation">:</span> <span class="token number">0x97a417677a82b4e080F9350654C42AcFf542B063</span>

<span class="token comment">// 给消息签名</span>
const signature <span class="token operator">=</span> account<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, Web3.js!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  message<span class="token punctuation">:</span> <span class="token string">&#39;Hello, Web3.js!&#39;</span><span class="token punctuation">,</span>
  messageHash<span class="token punctuation">:</span> <span class="token string">&#39;0xc0f5f7ee704f1473acbb7959f5f925d787a9aa76dccc1b4914cbe77c09fd68d5&#39;</span><span class="token punctuation">,</span>
  v<span class="token punctuation">:</span> <span class="token string">&#39;0x1b&#39;</span><span class="token punctuation">,</span>
  r<span class="token punctuation">:</span> <span class="token string">&#39;0xf12dbab70fd440273e112a8c45f7b293b09c2719a3a1d37ec03450b7d7a1ed6b&#39;</span><span class="token punctuation">,</span>
  s<span class="token punctuation">:</span> <span class="token string">&#39;0x5d15632cba8afc573aeda264a16168a894ac368be9b84440f331c23e70b89253&#39;</span><span class="token punctuation">,</span>
  signature<span class="token punctuation">:</span> <span class="token string">&#39;0xf12dbab70fd440273e112a8c45f7b293b09c2719a3a1d37ec03450b7d7a1ed6b5d15632cba8afc573aeda264a16168a894ac368be9b84440f331c23e70b892531b&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 从签名中恢复签名者的地址</span>
const data <span class="token operator">=</span> <span class="token string">&#39;Hello, Web3.js!&#39;</span><span class="token punctuation">;</span>
const sigObj <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>
  data<span class="token punctuation">,</span>
  <span class="token string">&#39;0x419a74f16c55f07a42d7fc9f4b3c1bb47dd89f010e44d1135d73fef558f35c7c&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sigObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  message<span class="token punctuation">:</span> <span class="token string">&#39;Hello, Web3.js!&#39;</span><span class="token punctuation">,</span>
  messageHash<span class="token punctuation">:</span> <span class="token string">&#39;0xc0f5f7ee704f1473acbb7959f5f925d787a9aa76dccc1b4914cbe77c09fd68d5&#39;</span><span class="token punctuation">,</span>
  v<span class="token punctuation">:</span> <span class="token string">&#39;0x1b&#39;</span><span class="token punctuation">,</span>
  r<span class="token punctuation">:</span> <span class="token string">&#39;0x5757bc96de40dd51092a89e4f50404ef766effb3154b5585b60f373eda810fc4&#39;</span><span class="token punctuation">,</span>
  s<span class="token punctuation">:</span> <span class="token string">&#39;0x4735d02946149661104d495e98a2655cc279139c5507d03cd061f6456e6aa0eb&#39;</span><span class="token punctuation">,</span>
  signature<span class="token punctuation">:</span> <span class="token string">&#39;0x5757bc96de40dd51092a89e4f50404ef766effb3154b5585b60f373eda810fc44735d02946149661104d495e98a2655cc279139c5507d03cd061f6456e6aa0eb1b&#39;</span>
<span class="token punctuation">}</span>
const r <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token function">recover</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> sigObj<span class="token punctuation">.</span>v<span class="token punctuation">,</span> sigObj<span class="token punctuation">.</span>r<span class="token punctuation">,</span> sigObj<span class="token punctuation">.</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">0x8D866ABAAf79E1fB5128B9557B09669F44bB6b72</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(r,b){const s=i("DocsAD");return t(),c("div",null,[l,p(s),d])}const m=a(u,[["render",k],["__file","sign.html.vue"]]);export{m as default};
