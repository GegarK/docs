import{_ as n,K as r,L as i,M as e,N as a,a5 as s,W as o,F as c}from"./framework-edebdfe1.js";const t={},l=e("h1",{id:"foundry",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#foundry","aria-hidden":"true"},"#"),a(" Foundry")],-1),u={id:"安装",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#",-1),v={href:"https://book.getfoundry.sh/",target:"_blank",rel:"noopener noreferrer"},f=o(`<div class="language-Foundry line-numbers-mode" data-ext="Foundry"><pre class="language-Foundry"><code>forge init hello_foundry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="编译工程" tabindex="-1"><a class="header-anchor" href="#编译工程" aria-hidden="true">#</a> 编译工程</h2><div class="language-Foundry line-numbers-mode" data-ext="Foundry"><pre class="language-Foundry"><code>forge build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="测试工程" tabindex="-1"><a class="header-anchor" href="#测试工程" aria-hidden="true">#</a> 测试工程</h2><div class="language-Foundry line-numbers-mode" data-ext="Foundry"><pre class="language-Foundry"><code>forge test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="测试节点" tabindex="-1"><a class="header-anchor" href="#测试节点" aria-hidden="true">#</a> 测试节点</h2><div class="language-Foundry line-numbers-mode" data-ext="Foundry"><pre class="language-Foundry"><code>anvil
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="部署合约" tabindex="-1"><a class="header-anchor" href="#部署合约" aria-hidden="true">#</a> 部署合约</h2><div class="language-Foundry line-numbers-mode" data-ext="Foundry"><pre class="language-Foundry"><code>forge create --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 src/GKBToken.sol:GKBToken --constructor-args 1000000000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function b(m,g){const d=c("ExternalLinkIcon");return r(),i("div",null,[l,e("h2",u,[h,a(),e("a",v,[a("安装"),s(d)])]),f])}const y=n(t,[["render",b],["__file","foundry.html.vue"]]);export{y as default};
