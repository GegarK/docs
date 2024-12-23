import{_ as e,K as t,L as i,a5 as l,M as n,N as s,W as p,F as c}from"./framework-edebdfe1.js";const o={},d=n("h1",{id:"特征工程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#特征工程","aria-hidden":"true"},"#"),s(" 特征工程")],-1),r=n("h2",{id:"什么是特征工程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是特征工程","aria-hidden":"true"},"#"),s(" 什么是特征工程")],-1),u=n("p",null,"特征工程的目标是从原始数据中提取出有用的特征，转变成数学符号，也就是矩阵，以便让机器学习算法更好地理解数据。",-1),v=p(`<h2 id="特征工程步骤" tabindex="-1"><a class="header-anchor" href="#特征工程步骤" aria-hidden="true">#</a> 特征工程步骤</h2><ul><li>提取特征</li><li>特征清洗</li><li>特征降维</li></ul><h2 id="特征工程实例" tabindex="-1"><a class="header-anchor" href="#特征工程实例" aria-hidden="true">#</a> 特征工程实例</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>  
<span class="token keyword">function</span> <span class="token function-definition function">fun</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
    @<span class="token keyword">eval</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
@<span class="token function">fun</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;shell&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token delimiter important">?&gt;</span></span>

<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$bb</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;assert&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token operator">=</span><span class="token string single-quoted-string">&#39;bb&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$$aa</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;shell&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-feature line-numbers-mode" data-ext="feature"><pre class="language-feature"><code>count(eval)
count(fun)
count($_POST)

str(shell) 0/1

第一个脚本特征：1,2,1,1,1
第二个脚本特征：0,0,1,1,0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(h,m){const a=c("DocsAD");return t(),i("div",null,[d,r,u,l(a),v])}const g=e(o,[["render",k],["__file","index.html.vue"]]);export{g as default};
