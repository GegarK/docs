import{_ as p,K as c,L as r,a5 as a,M as n,N as s,a6 as u,W as t,F as e}from"./framework-edebdfe1.js";const d={},k=n("h1",{id:"slither",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#slither","aria-hidden":"true"},"#"),s(" Slither")],-1),v=n("h2",{id:"slither是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#slither是什么","aria-hidden":"true"},"#"),s(" Slither是什么")],-1),m=n("p",null,"Slither 是一个用 Python3 编写的 Solidity & Vyper 静态分析框架。它运行一套漏洞检测器，打印有关合约详细信息的视觉信息，并提供 API 以轻松编写自定义分析。Slither 使开发人员能够发现漏洞，增强他们的代码理解能力，并快速制作自定义分析的原型。",-1),b=t(`<h2 id="slither安装使用" tabindex="-1"><a class="header-anchor" href="#slither安装使用" aria-hidden="true">#</a> Slither安装使用</h2><ul><li>安装Slither</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>python3 <span class="token operator">-</span>m pip install slither<span class="token operator">-</span>analyzer


git clone https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>crytic<span class="token operator">/</span>slither<span class="token punctuation">.</span>git <span class="token operator">&amp;</span><span class="token operator">&amp;</span> cd slither
python3 <span class="token operator">-</span>m pip install <span class="token punctuation">.</span>

slither test<span class="token punctuation">.</span>sol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装solidity版本管理</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> solc
solc-select <span class="token function">install</span> <span class="token number">0.8</span>.0
solc-select use <span class="token number">0.8</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h={id:"slither开发类似codeql",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#slither开发类似codeql","aria-hidden":"true"},"#",-1),y={href:"https://crytic.github.io/slither/slither.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<ul><li>测试Solidity</li></ul><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Token</span> <span class="token punctuation">{</span>
  <span class="token comment">// uint8 0 - 255</span>
  <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint8</span><span class="token punctuation">)</span> balances<span class="token punctuation">;</span>

  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token builtin">uint8</span> _value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    unchecked<span class="token punctuation">{</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> _value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> _owner<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> balance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> balances<span class="token punctuation">[</span>_owner<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Detector开发</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>crytic<span class="token operator">/</span>slither<span class="token operator">/</span>wiki<span class="token operator">/</span>Adding<span class="token operator">-</span>a<span class="token operator">-</span>new<span class="token operator">-</span>detector

conda\\envs\\slither\\Lib\\site<span class="token operator">-</span>packages\\slither\\detectors\\ 添加detector

<span class="token keyword">from</span> slither<span class="token punctuation">.</span>detectors<span class="token punctuation">.</span>abstract_detector <span class="token keyword">import</span> AbstractDetector<span class="token punctuation">,</span> DetectorClassification
<span class="token keyword">from</span> slither<span class="token punctuation">.</span>core<span class="token punctuation">.</span>declarations <span class="token keyword">import</span> Function

<span class="token keyword">class</span> <span class="token class-name">Deelmind</span><span class="token punctuation">(</span>AbstractDetector<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Documentation
    &quot;&quot;&quot;</span>

    ARGUMENT <span class="token operator">=</span> <span class="token string">&#39;DeeLMind_Detector&#39;</span> <span class="token comment"># slither will launch the detector with slither.py --detect mydetector</span>
    HELP <span class="token operator">=</span> <span class="token string">&#39;Slither Detector Help&#39;</span>
    IMPACT <span class="token operator">=</span> DetectorClassification<span class="token punctuation">.</span>HIGH
    CONFIDENCE <span class="token operator">=</span> DetectorClassification<span class="token punctuation">.</span>HIGH

    WIKI <span class="token operator">=</span> <span class="token string">&#39;https://deelmind.com/&#39;</span>

    WIKI_TITLE <span class="token operator">=</span> <span class="token string">&#39;DeeLMind_Detector_Title&#39;</span>
    WIKI_DESCRIPTION <span class="token operator">=</span> <span class="token string">&#39;DeeLMind_Detector_Desc&#39;</span>
    WIKI_EXPLOIT_SCENARIO <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
  function deposit(uint8 _value) public returns (bool) {
    unchecked{
        balances[msg.sender] += _value;
    }
    return true;
  }
&quot;&quot;&quot;</span>
    WIKI_RECOMMENDATION <span class="token operator">=</span> <span class="token string">&#39;DeeLMind_Detector_Recommendation&#39;</span>

    <span class="token keyword">def</span> <span class="token function">_detect</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        info <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;This is an example&#39;</span><span class="token punctuation">]</span>

        <span class="token keyword">for</span> c <span class="token keyword">in</span> self<span class="token punctuation">.</span>contracts<span class="token punctuation">:</span>
            <span class="token keyword">for</span> func <span class="token keyword">in</span> c<span class="token punctuation">.</span>all_functions_called<span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> Function<span class="token punctuation">)</span><span class="token punctuation">:</span>
                    <span class="token keyword">continue</span>
                <span class="token keyword">for</span> node <span class="token keyword">in</span> func<span class="token punctuation">.</span>nodes<span class="token punctuation">:</span>
                    <span class="token keyword">for</span> ir <span class="token keyword">in</span> node<span class="token punctuation">.</span>irs<span class="token punctuation">:</span>
                        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-&gt;&gt;&quot;</span><span class="token punctuation">,</span>ir<span class="token punctuation">)</span>

        res <span class="token operator">=</span> self<span class="token punctuation">.</span>generate_result<span class="token punctuation">(</span>info<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">[</span>res<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Slither检测</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>slither --list-detectors
slither test.sol <span class="token parameter variable">--detect</span><span class="token operator">=</span>DeeLMind_Detector
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function f(w,D){const i=e("DocsAD"),o=e("ExternalLinkIcon"),l=e("RouterLink");return c(),r("div",null,[k,v,m,a(i),b,n("h2",h,[_,s(),n("a",y,[s("Slither开发"),a(o)]),s("类似"),a(l,{to:"/tools/codeql/"},{default:u(()=>[s("CodeQL")]),_:1})]),g])}const q=p(d,[["render",f],["__file","slither.html.vue"]]);export{q as default};
