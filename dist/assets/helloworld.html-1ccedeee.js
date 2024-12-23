import{_ as a,K as e,L as t,a5 as o,M as n,N as c,W as i,F as p}from"./framework-edebdfe1.js";const l={},d=n("h1",{id:"helloworld",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#helloworld","aria-hidden":"true"},"#"),c(" HelloWorld")],-1),u=i(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
  Blink
  
  Switching a LED on and off
  
  This example is part of the Fritzing Creator Kit: www.fritzing.org/creator-kit.
*/</span>

<span class="token keyword">int</span> led <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>                   <span class="token comment">// integer variable led is declared</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                  <span class="token comment">// the setup() method is executed only once</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>led<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// the led PIN is declared as digital output</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                   <span class="token comment">// the loop() method is repeated</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>led<span class="token punctuation">,</span> HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// switching on the led </span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// stopping the program for 1000 milliseconds</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>led<span class="token punctuation">,</span> LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// switching off the led </span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// stopping the program for 1000 milliseconds</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,2);function r(m,k){const s=p("DocsAD");return e(),t("div",null,[d,o(s),u])}const h=a(l,[["render",r],["__file","helloworld.html.vue"]]);export{h as default};
