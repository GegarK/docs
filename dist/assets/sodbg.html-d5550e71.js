import{_ as e,K as a,L as d,W as i}from"./framework-edebdfe1.js";const l={},s=i(`<h1 id="so动态调试" tabindex="-1"><a class="header-anchor" href="#so动态调试" aria-hidden="true">#</a> SO动态调试</h1><ul><li>文件上传</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>android_server在IDA目录dbgsrv下,找到对应版面然后将这个软件安装到调试平台上，也就是Android手机上
adb push android_server /data/local/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>权限提升</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>执行提升权限命令 su
然后授予可执行权限，因为777方便我就写这个权限了
chmod 777 /data/local/tmp/android_server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>执行/data/local/tmp/android_server</p></li><li><p>端口转发</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb forward tcp:23946 tcp:23946
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),n=[s];function r(t,c){return a(),d("div",null,n)}const u=e(l,[["render",r],["__file","sodbg.html.vue"]]);export{u as default};
