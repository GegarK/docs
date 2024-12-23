import{_ as l,K as r,L as o,M as a,N as n,a5 as s,W as c,F as i}from"./framework-edebdfe1.js";const p={},d=a("h1",{id:"winafl",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#winafl","aria-hidden":"true"},"#"),n(" WinAFL")],-1),u={id:"什么是winafl",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#什么是winafl","aria-hidden":"true"},"#",-1),v={href:"https://github.com/googleprojectzero/winafl",target:"_blank",rel:"noopener noreferrer"},b=a("h2",{id:"编译",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#编译","aria-hidden":"true"},"#"),n(" 编译")],-1),k={start:"0"},h={href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"},f=a("li",null,[a("p",null,"下载项目")],-1),g=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> https://github.com/googleprojectzero/winafl.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建文件夹</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> build32
<span class="token function">mkdir</span> build64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>生成make文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> build32
cmake -G<span class="token string">&quot;Visual Studio 17 2022&quot;</span> <span class="token parameter variable">-A</span> Win32 <span class="token punctuation">..</span> <span class="token parameter variable">-DDynamoRIO_DIR</span><span class="token operator">=</span>E:<span class="token punctuation">\\</span>我的课程<span class="token punctuation">\\</span>免费视频课<span class="token punctuation">\\</span>逆向分析<span class="token punctuation">\\</span>二进制漏洞挖掘FUZZ<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>DynamoRIO-Windows-10.0.19683<span class="token punctuation">\\</span>cmake <span class="token parameter variable">-DINTELPT</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> build64
cmake -G<span class="token string">&quot;Visual Studio 17 2022&quot;</span> <span class="token parameter variable">-A</span> X64 <span class="token punctuation">..</span> <span class="token parameter variable">-DDynamoRIO_DIR</span><span class="token operator">=</span>E:<span class="token punctuation">\\</span>我的课程<span class="token punctuation">\\</span>免费视频课<span class="token punctuation">\\</span>逆向分析<span class="token punctuation">\\</span>二进制漏洞挖掘FUZZ<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>DynamoRIO-Windows-10.0.19683<span class="token punctuation">\\</span>cmake <span class="token parameter variable">-DINTELPT</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>编译项目</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cmake <span class="token parameter variable">--build</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--config</span> Release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="winafl文档" tabindex="-1"><a class="header-anchor" href="#winafl文档" aria-hidden="true">#</a> WINAFL文档</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Required parameters:

  <span class="token parameter variable">-i</span> <span class="token function">dir</span>        - input directory with <span class="token builtin class-name">test</span> cases
  <span class="token parameter variable">-o</span> <span class="token function">dir</span>        - output directory <span class="token keyword">for</span> fuzzer findings
  <span class="token parameter variable">-t</span> msec       - <span class="token function">timeout</span> <span class="token keyword">for</span> each run

Instrumentation type:

  <span class="token parameter variable">-D</span> <span class="token function">dir</span>       - directory with DynamoRIO binaries <span class="token punctuation">(</span>drrun, drconfig<span class="token punctuation">)</span>
  <span class="token parameter variable">-w</span> winafl    - Path to winafl.dll
  <span class="token parameter variable">-P</span>           - use Intel PT tracing mode
  <span class="token parameter variable">-y</span>           - use TinyInst tracing mode
  <span class="token parameter variable">-Y</span>           - <span class="token builtin class-name">enable</span> the static instrumentation mode

Execution control settings:

  <span class="token parameter variable">-f</span> <span class="token function">file</span>       - location <span class="token builtin class-name">read</span> by the fuzzed program <span class="token punctuation">(</span>stdin<span class="token punctuation">)</span>
  <span class="token parameter variable">-m</span> limit      - memory limit <span class="token keyword">for</span> the target process
  <span class="token parameter variable">-p</span>            - persist DynamoRIO cache across target process restarts
  <span class="token parameter variable">-c</span> cpu        - the CPU to run the fuzzed program

Fuzzing behavior settings:

  <span class="token parameter variable">-d</span>            - quick <span class="token operator">&amp;</span> dirty mode <span class="token punctuation">(</span>skips deterministic steps<span class="token punctuation">)</span>
  <span class="token parameter variable">-n</span>            - fuzz without instrumentation <span class="token punctuation">(</span>dumb mode<span class="token punctuation">)</span>
  <span class="token parameter variable">-x</span> <span class="token function">dir</span>        - optional fuzzer dictionary <span class="token punctuation">(</span>see README<span class="token punctuation">)</span>

Other stuff:

  <span class="token parameter variable">-I</span> msec       - <span class="token function">timeout</span> <span class="token keyword">for</span> process initialization and first run
  <span class="token parameter variable">-T</span> text       - text banner to show on the <span class="token function">screen</span>
  <span class="token parameter variable">-M</span> <span class="token punctuation">\\</span> <span class="token parameter variable">-S</span> <span class="token function">id</span>   - distributed mode <span class="token punctuation">(</span>see parallel_fuzzing.txt<span class="token punctuation">)</span>
  <span class="token parameter variable">-C</span>            - crash exploration mode <span class="token punctuation">(</span>the peruvian rabbit thing<span class="token punctuation">)</span>
  <span class="token parameter variable">-e</span>            - expert mode to run WinAFL as a DynamoRIO tool
  <span class="token parameter variable">-l</span> path       - a path to user-defined DLL <span class="token keyword">for</span> custom <span class="token builtin class-name">test</span> cases processing
  <span class="token parameter variable">-V</span>            - show version number and <span class="token builtin class-name">exit</span>

Attach:

  <span class="token parameter variable">-A</span> module     - attach to the process that loaded the provided module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function _(w,x){const e=i("ExternalLinkIcon"),t=i("DocsAD");return r(),o("div",null,[d,a("h2",u,[m,n(" 什么是"),a("a",v,[n("WinAFL"),s(e)])]),s(t),b,a("ol",k,[a("li",null,[a("p",null,[n("安装"),a("a",h,[n("cmake"),s(e)]),n("/Visual Studio")])]),f]),g])}const D=l(p,[["render",_],["__file","winafl.html.vue"]]);export{D as default};
