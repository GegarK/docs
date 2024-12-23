import{_ as s,K as a,L as e,a5 as t,W as o,F as p}from"./framework-edebdfe1.js";const i={},c=o(`<h1 id="图像生成" tabindex="-1"><a class="header-anchor" href="#图像生成" aria-hidden="true">#</a> 图像生成</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> openai
openai<span class="token punctuation">.</span>api_key <span class="token operator">=</span> <span class="token string">&quot;OPENAI_API_KEY&quot;</span>

completion <span class="token operator">=</span> openai<span class="token punctuation">.</span>Image<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
  prompt<span class="token operator">=</span><span class="token string">&quot;A cute baby sea otter&quot;</span><span class="token punctuation">,</span>
  n<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
  size<span class="token operator">=</span><span class="token string">&quot;1024x1024&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>completion<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token number">1589478378</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://...&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://...&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function l(u,r){const n=p("DocsAD");return a(),e("div",null,[c,t(n)])}const v=s(i,[["render",l],["__file","image.html.vue"]]);export{v as default};
