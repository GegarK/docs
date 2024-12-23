import{_ as p,K as c,L as i,M as n,N as s,a5 as a,W as l,F as t}from"./framework-edebdfe1.js";const u={},r=n("h1",{id:"ollama",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ollama","aria-hidden":"true"},"#"),s(" OLLAMA")],-1),k={id:"本地搭建大模型ollama",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#本地搭建大模型ollama","aria-hidden":"true"},"#",-1),m={href:"https://ollama.com/",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> requests

<span class="token comment"># NOTE: ollama must be running for this to work, start the ollama app or run \`ollama serve\`</span>
model <span class="token operator">=</span> <span class="token string">&quot;qwen:0.5b&quot;</span>  <span class="token comment"># TODO: update this for whatever model you wish to use</span>


<span class="token keyword">def</span> <span class="token function">chat</span><span class="token punctuation">(</span>messages<span class="token punctuation">)</span><span class="token punctuation">:</span>
    r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>
        <span class="token string">&quot;http://127.0.0.1:11434/api/chat&quot;</span><span class="token punctuation">,</span>
        json<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;model&quot;</span><span class="token punctuation">:</span> model<span class="token punctuation">,</span> <span class="token string">&quot;messages&quot;</span><span class="token punctuation">:</span> messages<span class="token punctuation">,</span> <span class="token string">&quot;stream&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    r<span class="token punctuation">.</span>raise_for_status<span class="token punctuation">(</span><span class="token punctuation">)</span>
    output <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

    <span class="token keyword">for</span> line <span class="token keyword">in</span> r<span class="token punctuation">.</span>iter_lines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        body <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token string">&quot;error&quot;</span> <span class="token keyword">in</span> body<span class="token punctuation">:</span>
            <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span>body<span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> body<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
            message <span class="token operator">=</span> body<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
            content <span class="token operator">=</span> message<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
            output <span class="token operator">+=</span> content
            <span class="token comment"># the response streams one token at a time, print that as we receive it</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> flush<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> body<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            message<span class="token punctuation">[</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> output
            <span class="token keyword">return</span> message


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        user_input <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter a prompt: &quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> user_input<span class="token punctuation">:</span>
            exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        messages<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> user_input<span class="token punctuation">}</span><span class="token punctuation">)</span>
        message <span class="token operator">=</span> chat<span class="token punctuation">(</span>messages<span class="token punctuation">)</span>
        messages<span class="token punctuation">.</span>append<span class="token punctuation">(</span>message<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(q,g){const e=t("ExternalLinkIcon"),o=t("DocsAD");return c(),i("div",null,[r,n("h2",k,[d,s(" 本地搭建大模型"),n("a",m,[s("OLLAMA"),a(e)])]),a(o),v])}const h=p(u,[["render",b],["__file","ollama.html.vue"]]);export{h as default};
