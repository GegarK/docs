import{_ as e,K as t,L as p,a5 as o,M as n,N as s,W as i,F as c}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"压缩包破解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#压缩包破解","aria-hidden":"true"},"#"),s(" 压缩包破解")],-1),r=n("h2",{id:"暴力破解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#暴力破解","aria-hidden":"true"},"#"),s(" 暴力破解")],-1),d=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入压缩包解压模块zipfile</span>
<span class="token keyword">import</span> zipfile
<span class="token comment"># 导入时间模块</span>
<span class="token keyword">import</span> timeit

<span class="token comment"># 加密zip文件路径</span>
zFile <span class="token operator">=</span> zipfile<span class="token punctuation">.</span>ZipFile<span class="token punctuation">(</span><span class="token string">&quot;test.zip&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 字典路径</span>
dictionary_attack <span class="token operator">=</span> <span class="token string">&quot;dictionary.txt&quot;</span>
<span class="token comment"># 以下是字典内容，方便观看</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
123
123456789
3124
adfadf
33
&quot;&quot;&quot;</span>

<span class="token comment"># 破解函数</span>
<span class="token keyword">def</span> <span class="token function">Cracker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 破解次数统计</span>
    attempts <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment"># 成功标志位</span>
    flag <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment"># 打开破解字典</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>dictionary_attack<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> attack<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Cracking password...one sec&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> line <span class="token keyword">in</span> attack<span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                <span class="token comment"># 去除回车符号</span>
                passwd <span class="token operator">=</span> line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
                <span class="token comment"># 尝试解压</span>
                zFile<span class="token punctuation">.</span>extractall<span class="token punctuation">(</span>pwd<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span>passwd<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">except</span> Exception<span class="token punctuation">:</span>
                <span class="token comment"># 如果解压失败，则破解次数统计加以</span>
                attempts <span class="token operator">+=</span> <span class="token number">1</span>
                <span class="token keyword">pass</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token comment"># 如果解压成功则标志位置1表示成功，并且打印出密码</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Password is %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>passwd<span class="token punctuation">)</span><span class="token punctuation">)</span>
                flag <span class="token operator">=</span> <span class="token number">1</span>
                <span class="token keyword">break</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Attempted %d passwords from %s wordlist&quot;</span> <span class="token operator">%</span>
              <span class="token punctuation">(</span>attempts<span class="token punctuation">,</span> dictionary_attack<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> flag <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Password Cracking Failed!&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 开始计时</span>
    start <span class="token operator">=</span> timeit<span class="token punctuation">.</span>default_timer<span class="token punctuation">(</span><span class="token punctuation">)</span>
    Cracker<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 停止计时</span>
    stop <span class="token operator">=</span> timeit<span class="token punctuation">.</span>default_timer<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 打印计算破解时间</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;crack it in %d secs&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>stop <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪加密破解" tabindex="-1"><a class="header-anchor" href="#伪加密破解" aria-hidden="true">#</a> 伪加密破解</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 修改文件内容</span>
<span class="token keyword">def</span> <span class="token function">modified</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        r_all <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        r_all <span class="token operator">=</span> <span class="token builtin">bytearray</span><span class="token punctuation">(</span>r_all<span class="token punctuation">)</span>
        <span class="token comment">#  504B0304后的第3、4个byte改成0000</span>
        index <span class="token operator">=</span> r_all<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">b&#39;PK\\x03\\x04&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> index<span class="token punctuation">:</span>
            i <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">4</span>
            r_all<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">:</span>i <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">b&#39;\\x00\\x00&#39;</span>
         <span class="token comment">#  504B0102后的第5、6个byte改成0000</span>
        index1 <span class="token operator">=</span> r_all<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">b&#39;PK\\x01\\x02&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> index1<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            i <span class="token operator">=</span> index1 <span class="token operator">+</span> <span class="token number">4</span>
            r_all<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">:</span>i <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">b&#39;\\x00\\x00&#39;</span>
    <span class="token comment"># 保持文件，命名为test.zip</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.zip&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f1<span class="token punctuation">:</span>
        f1<span class="token punctuation">.</span>write<span class="token punctuation">(</span>r_all<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 存在伪加密的压缩包路径</span>
    filename <span class="token operator">=</span> <span class="token string">&#39;File.zip&#39;</span>
    modified<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(v,m){const a=c("DocsAD");return t(),p("div",null,[u,r,o(a),d])}const _=e(l,[["render",k],["__file","zip.html.vue"]]);export{_ as default};
