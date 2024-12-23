import{_ as a,K as e,L as t,a5 as i,W as n,F as c}from"./framework-edebdfe1.js";const p="/imgs/rev/exploit/stack-frame.png",o="/imgs/rev/exploit/stack-overflow.png",l={},u=n('<h1 id="stack-overflow" tabindex="-1"><a class="header-anchor" href="#stack-overflow" aria-hidden="true">#</a> Stack-Overflow</h1><h2 id="栈溢出" tabindex="-1"><a class="header-anchor" href="#栈溢出" aria-hidden="true">#</a> 栈溢出</h2><ul><li>栈帧 Stack Frame</li></ul><p><img src="'+p+'" alt="er" loading="lazy"></p><ul><li>栈溢出 Stack-Overflow</li></ul><p><img src="'+o+'" alt="er" loading="lazy"></p>',6),r=n(`<h2 id="漏洞代码" tabindex="-1"><a class="header-anchor" href="#漏洞代码" aria-hidden="true">#</a> 漏洞代码</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Windows.h&gt;</span></span>

<span class="token comment">/**
11112222333344445555

31313131
32323232
33333333
34343434
35353535

// address 0x00461100 show()
 */</span>

<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">bof</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> buff<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter password: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> buff<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span> show<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">bof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(k,v){const s=c("DocsAD");return e(),t("div",null,[u,i(s),r])}const b=a(l,[["render",d],["__file","stack.html.vue"]]);export{b as default};
