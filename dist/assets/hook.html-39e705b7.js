import{_ as a,K as p,L as t,a5 as e,M as n,N as o,W as c,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"hook",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hook","aria-hidden":"true"},"#"),o(" HOOK")],-1),r=c(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> angr
<span class="token keyword">import</span> claripy

base <span class="token operator">=</span> <span class="token number">0x400000</span>
main <span class="token operator">=</span> base <span class="token operator">+</span> <span class="token number">0x00000b2f</span>

find <span class="token operator">=</span> base <span class="token operator">+</span> <span class="token number">0x38ec</span>
avoid <span class="token operator">=</span> base <span class="token operator">+</span> <span class="token number">0x38ff</span>

<span class="token keyword">def</span> <span class="token function">nothing</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">set_eax</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">:</span>
    state<span class="token punctuation">.</span>regs<span class="token punctuation">.</span>eax <span class="token operator">=</span> <span class="token number">1</span>


project <span class="token operator">=</span> angr<span class="token punctuation">.</span>Project<span class="token punctuation">(</span><span class="token string">&quot;./REme-a28b7273a8e6671e6f0a361addbba87e&quot;</span><span class="token punctuation">)</span>
<span class="token builtin">input</span> <span class="token operator">=</span> claripy<span class="token punctuation">.</span>BVS<span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token operator">*</span><span class="token number">8</span><span class="token punctuation">)</span>
state <span class="token operator">=</span> project<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>entry_state<span class="token punctuation">(</span>addr<span class="token operator">=</span>main<span class="token punctuation">)</span>
project<span class="token punctuation">.</span>hook<span class="token punctuation">(</span>base <span class="token operator">+</span> <span class="token number">0x431f</span><span class="token punctuation">,</span> nothing<span class="token punctuation">)</span>

patch <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0x00000b4e</span><span class="token punctuation">,</span> <span class="token number">0x00001340</span><span class="token punctuation">,</span> <span class="token number">0x00001805</span><span class="token punctuation">,</span> <span class="token number">0x00001dd3</span><span class="token punctuation">,</span> <span class="token number">0x000026ff</span><span class="token punctuation">,</span> <span class="token number">0x0000302e</span><span class="token punctuation">]</span>
patch <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> base <span class="token operator">+</span> x<span class="token punctuation">,</span> patch<span class="token punctuation">)</span>

<span class="token keyword">for</span> addr <span class="token keyword">in</span> patch<span class="token punctuation">:</span>
    project<span class="token punctuation">.</span>hook<span class="token punctuation">(</span>addr<span class="token punctuation">,</span> set_eax<span class="token punctuation">)</span>

sm <span class="token operator">=</span> project<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simulation_manager<span class="token punctuation">(</span>state<span class="token punctuation">)</span>
sm<span class="token punctuation">.</span>explore<span class="token punctuation">(</span>find<span class="token operator">=</span>find<span class="token punctuation">,</span> avoid<span class="token operator">=</span>avoid<span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> sm<span class="token punctuation">.</span>found<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>posix<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(d,v){const s=i("DocsAD");return p(),t("div",null,[u,e(s),r])}const b=a(l,[["render",k],["__file","hook.html.vue"]]);export{b as default};
