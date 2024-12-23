import{_ as s,K as a,L as t,a5 as o,W as e,F as p}from"./framework-edebdfe1.js";const c={},l=e(`<h1 id="对话聊天" tabindex="-1"><a class="header-anchor" href="#对话聊天" aria-hidden="true">#</a> 对话聊天</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> openai
openai<span class="token punctuation">.</span>api_key <span class="token operator">=</span> <span class="token string">&quot;OPENAI_API_KEY&quot;</span>

completion <span class="token operator">=</span> openai<span class="token punctuation">.</span>ChatCompletion<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
  model<span class="token operator">=</span><span class="token string">&quot;gpt-3.5-turbo&quot;</span><span class="token punctuation">,</span>
  messages<span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>completion<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chatcmpl-123&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;object&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chat.completion&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token number">1677652288</span><span class="token punctuation">,</span>
  <span class="token property">&quot;choices&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assistant&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n\\nHello there, how may I assist you today?&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;finish_reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;usage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prompt_tokens&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token property">&quot;completion_tokens&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;total_tokens&quot;</span><span class="token operator">:</span> <span class="token number">21</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function i(u,r){const n=p("DocsAD");return a(),t("div",null,[l,o(n)])}const k=s(c,[["render",i],["__file","chat.html.vue"]]);export{k as default};
