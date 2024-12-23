import{_ as a,K as e,L as t,a5 as p,M as n,N as o,W as c,F as l}from"./framework-edebdfe1.js";const i={},u=n("h1",{id:"cargo-toml",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cargo-toml","aria-hidden":"true"},"#"),o(" Cargo.toml")],-1),r=c(`<h2 id="主要部分" tabindex="-1"><a class="header-anchor" href="#主要部分" aria-hidden="true">#</a> 主要部分</h2><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;project_name&quot;</span>       <span class="token comment"># 项目名称</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.0&quot;</span>           <span class="token comment"># 项目版本</span>
<span class="token key property">authors</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Author Name&quot;</span><span class="token punctuation">]</span>   <span class="token comment"># 作者</span>
<span class="token key property">edition</span> <span class="token punctuation">=</span> <span class="token string">&quot;2021&quot;</span>            <span class="token comment"># Rust 版次</span>

<span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
<span class="token key property">serde</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.0&quot;</span>       <span class="token comment"># 依赖 serde crate，版本为 1.0.x</span>
<span class="token key property">regex</span> <span class="token punctuation">=</span> <span class="token string">&quot;1&quot;</span>         <span class="token comment"># 依赖 regex crate，版本为 1.x</span>

<span class="token punctuation">[</span><span class="token table class-name">dev-dependencies</span><span class="token punctuation">]</span>
<span class="token key property">tempdir</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.7&quot;</span>   <span class="token comment"># 仅在开发时使用的依赖</span>

<span class="token punctuation">[</span><span class="token table class-name">build-dependencies</span><span class="token punctuation">]</span>
<span class="token key property">cc</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.0&quot;</span>        <span class="token comment"># 用于构建脚本的依赖</span>

<span class="token punctuation">[</span><span class="token table class-name">features</span><span class="token punctuation">]</span>
<span class="token key property">default</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;serde&quot;</span><span class="token punctuation">]</span>   <span class="token comment"># 默认启用的功能</span>

<span class="token punctuation">[</span><span class="token table class-name">workspace</span><span class="token punctuation">]</span>
<span class="token key property">members</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/package1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;src/package2&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token table class-name">package.metadata</span><span class="token punctuation">]</span>
<span class="token key property">documentation</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://docs.example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(k,m){const s=l("DocsAD");return e(),t("div",null,[u,p(s),r])}const b=a(i,[["render",d],["__file","toml.html.vue"]]);export{b as default};
