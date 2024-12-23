import{_ as o,K as d,L as t,M as e,N as n,a5 as r,W as c,F as a}from"./framework-edebdfe1.js";const l={},h=e("h1",{id:"func开发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#func开发","aria-hidden":"true"},"#"),n(" FUNC开发")],-1),u={id:"func文档",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#func文档","aria-hidden":"true"},"#",-1),m={href:"https://docs.ton.org/develop/func/cookbook",target:"_blank",rel:"noopener noreferrer"},v={id:"开发环境搭建",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#开发环境搭建","aria-hidden":"true"},"#",-1),b={href:"https://github.com/ton-blockchain/ton/releases",target:"_blank",rel:"noopener noreferrer"},p=c(`<h2 id="helloworld" tabindex="-1"><a class="header-anchor" href="#helloworld" aria-hidden="true">#</a> HelloWorld</h2><div class="language-func line-numbers-mode" data-ext="func"><pre class="language-func"><code>() hello_world()  {
  int number = 2;
  int multiplier = number;
  int degree = 5;

  repeat(degree - 1) {
      number *= multiplier;
  }
}
func -o test.fif test.fc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function x(g,k){const i=a("ExternalLinkIcon"),s=a("DocsAD");return d(),t("div",null,[h,e("h2",u,[_,n(),e("a",m,[n("FUNC文档"),r(i)])]),e("h2",v,[f,n(),e("a",b,[n("开发环境搭建"),r(i)])]),r(s),p])}const D=o(l,[["render",x],["__file","index.html.vue"]]);export{D as default};
