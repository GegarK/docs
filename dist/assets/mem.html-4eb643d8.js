import{_ as a,K as t,L as p,a5 as e,M as n,N as o,W as c,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"内存操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内存操作","aria-hidden":"true"},"#"),o(" 内存操作")],-1),r=c(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># codegate_2017-angrybird</span>

<span class="token keyword">import</span> angr

<span class="token comment"># b&#39;Im_so_cute&amp;pretty_:)&#39;</span>

START_ADDR <span class="token operator">=</span> <span class="token number">0x4007c2</span>
FIND_ADDR <span class="token operator">=</span> <span class="token number">0x404fab</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    proj <span class="token operator">=</span> angr<span class="token punctuation">.</span>Project<span class="token punctuation">(</span><span class="token string">&#39;angrybird&#39;</span><span class="token punctuation">)</span>
    state <span class="token operator">=</span> proj<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>entry_state<span class="token punctuation">(</span>addr<span class="token operator">=</span>START_ADDR<span class="token punctuation">,</span> add_options<span class="token operator">=</span><span class="token punctuation">{</span>angr<span class="token punctuation">.</span>options<span class="token punctuation">.</span>LAZY_SOLVES<span class="token punctuation">}</span><span class="token punctuation">)</span>
    state<span class="token punctuation">.</span>regs<span class="token punctuation">.</span>rbp <span class="token operator">=</span> state<span class="token punctuation">.</span>regs<span class="token punctuation">.</span>rsp
    state<span class="token punctuation">.</span>mem<span class="token punctuation">[</span>state<span class="token punctuation">.</span>regs<span class="token punctuation">.</span>rbp <span class="token operator">-</span> <span class="token number">0x74</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0x16</span>

    sm <span class="token operator">=</span> proj<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simulation_manager<span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    sm<span class="token punctuation">.</span>explore<span class="token punctuation">(</span>find<span class="token operator">=</span>FIND_ADDR<span class="token punctuation">)</span>
    found <span class="token operator">=</span> sm<span class="token punctuation">.</span>found<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    flag <span class="token operator">=</span> found<span class="token punctuation">.</span>posix<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> flag<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">]</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(k,m){const s=i("DocsAD");return t(),p("div",null,[u,e(s),r])}const b=a(l,[["render",d],["__file","mem.html.vue"]]);export{b as default};
