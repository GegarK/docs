import{_ as s,K as a,L as e,a5 as t,W as o,F as p}from"./framework-edebdfe1.js";const i={},c=o(`<h1 id="seahorse" tabindex="-1"><a class="header-anchor" href="#seahorse" aria-hidden="true">#</a> Seahorse</h1><h2 id="helloworld" tabindex="-1"><a class="header-anchor" href="#helloworld" aria-hidden="true">#</a> HelloWorld</h2><ul><li>安装Seahorse</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cargo</span> <span class="token function">install</span> seahorse-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>seahorse init demo</li><li>seahorse build</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># fizzbuzz</span>
<span class="token comment"># Built with Seahorse v0.1.0</span>
<span class="token comment">#</span>
<span class="token comment"># On-chain, persistent FizzBuzz!</span>

<span class="token keyword">from</span> seahorse<span class="token punctuation">.</span>prelude <span class="token keyword">import</span> <span class="token operator">*</span>

declare_id<span class="token punctuation">(</span><span class="token string">&#39;Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">FizzBuzz</span><span class="token punctuation">(</span>Account<span class="token punctuation">)</span><span class="token punctuation">:</span>
  fizz<span class="token punctuation">:</span> <span class="token builtin">bool</span>
  buzz<span class="token punctuation">:</span> <span class="token builtin">bool</span>
  n<span class="token punctuation">:</span> u64

<span class="token decorator annotation punctuation">@instruction</span>
<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span>owner<span class="token punctuation">:</span> Signer<span class="token punctuation">,</span> fizzbuzz<span class="token punctuation">:</span> Empty<span class="token punctuation">[</span>FizzBuzz<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  fizzbuzz<span class="token punctuation">.</span>init<span class="token punctuation">(</span>payer <span class="token operator">=</span> owner<span class="token punctuation">,</span> seeds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;fizzbuzz&#39;</span><span class="token punctuation">,</span> owner<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@instruction</span>
<span class="token keyword">def</span> <span class="token function">do_fizzbuzz</span><span class="token punctuation">(</span>fizzbuzz<span class="token punctuation">:</span> FizzBuzz<span class="token punctuation">,</span> n<span class="token punctuation">:</span> u64<span class="token punctuation">)</span><span class="token punctuation">:</span>
  fizzbuzz<span class="token punctuation">.</span>fizz <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span>
  fizzbuzz<span class="token punctuation">.</span>buzz <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span>
  <span class="token keyword">if</span> <span class="token keyword">not</span> fizzbuzz<span class="token punctuation">.</span>fizz <span class="token keyword">and</span> <span class="token keyword">not</span> fizzbuzz<span class="token punctuation">.</span>buzz<span class="token punctuation">:</span>
    fizzbuzz<span class="token punctuation">.</span>n <span class="token operator">=</span> n
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    fizzbuzz<span class="token punctuation">.</span>n <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function l(u,r){const n=p("DocsAD");return a(),e("div",null,[c,t(n)])}const k=s(i,[["render",l],["__file","seahorse.html.vue"]]);export{k as default};
