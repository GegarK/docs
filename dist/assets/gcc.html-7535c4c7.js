import{_ as l,K as d,L as c,a5 as t,M as e,N as i,W as n,F as s}from"./framework-edebdfe1.js";const u={},r=e("h1",{id:"gcc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gcc","aria-hidden":"true"},"#"),i(" GCC")],-1),o=e("h2",{id:"什么是gcc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是gcc","aria-hidden":"true"},"#"),i(" 什么是GCC")],-1),v=e("p",null,"GCC是GNU编译器套件的缩写。它是一个功能强大、高效的跨平台编译器，可以编译多种编程语言。最初，GCC是作为C语言编译器（GNU C Compiler）而开发的，但现在它还支持其他语言，如C++、Java、Pascal等。",-1),g=n(`<h2 id="安装命令" tabindex="-1"><a class="header-anchor" href="#安装命令" aria-hidden="true">#</a> 安装命令</h2><div class="language-ubuntu line-numbers-mode" data-ext="ubuntu"><pre class="language-ubuntu"><code>sudo apt install build-essential
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><ul><li>编译C语言程序：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -o output_file input_file.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>output_file</code>是编译后的可执行文件名，<code>input_file.c</code>是源代码文件名。</p><ul><li>编译debug版本：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -g -o output_file input_file.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>output_file</code>是编译后的可执行文件名，<code>input_file.c</code>是源代码文件名。</p><ul><li>编译release版本：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -o output_file input_file.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>output_file</code>是编译后的可执行文件名，<code>input_file.c</code>是源代码文件名。</p><ul><li>只执行预处理：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -E source_file.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>只执行到源代码到汇编代码的转换：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -S source_file.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>只执行到编译，输出目标文件：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -c source_file.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>编译多个文件：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -o output_file input_file1.c input_file2.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>生成静态库：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -c foo.c
ar rcs libfoo.a foo.o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看编译器版本：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24);function m(p,x){const a=s("DocsAD");return d(),c("div",null,[r,o,v,t(a),g])}const _=l(u,[["render",m],["__file","gcc.html.vue"]]);export{_ as default};
