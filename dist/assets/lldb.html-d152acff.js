import{_ as n,K as l,L as i,M as e,N as a,a5 as d,W as r,F as t}from"./framework-edebdfe1.js";const c={},o=e("h1",{id:"lldb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lldb","aria-hidden":"true"},"#"),a(" LLDB")],-1),p={id:"什么是lldb",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#什么是lldb","aria-hidden":"true"},"#",-1),b={href:"https://lldb.llvm.org/",target:"_blank",rel:"noopener noreferrer"},m=r(`<p>LLDB 是下一代高性能调试器，类比GDB。</p><h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><ul><li>帮助文档</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">help</span> 查看命令行
<span class="token builtin class-name">help</span> image list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看模块</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>image list <span class="token parameter variable">-b</span> <span class="token parameter variable">-h</span> <span class="token parameter variable">-o</span> 查看模块基地址，偏移地址
image list <span class="token parameter variable">-h</span> <span class="token parameter variable">-f</span> module_name 为基地址，IDA rebase这个即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符串查找</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>memory <span class="token function">find</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;string&quot;</span> addressStart addressEnd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设置断点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>breakpoint <span class="token builtin class-name">set</span> <span class="token parameter variable">-a</span> 0x1002321EB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>反汇编</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dis <span class="token parameter variable">-p</span> 反汇编当前 pc、ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看栈</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>frame <span class="token keyword">select</span> <span class="token number">0</span> <span class="token operator">==</span> frame info 查看当前栈
frame <span class="token keyword">select</span> <span class="token number">1</span> 查看上一个栈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>指令修改</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>memory <span class="token function">write</span> address code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16);function v(h,g){const s=t("ExternalLinkIcon");return l(),i("div",null,[o,e("h2",p,[u,a(" 什么是"),e("a",b,[a("LLDB"),d(s)])]),m])}const _=n(c,[["render",v],["__file","lldb.html.vue"]]);export{_ as default};
