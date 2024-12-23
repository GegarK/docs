import{_ as o,K as t,L as r,M as s,N as n,a5 as e,a6 as i,W as p,F as a}from"./framework-edebdfe1.js";const d={},u=s("h1",{id:"poc-exp",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#poc-exp","aria-hidden":"true"},"#"),n(" POC/EXP")],-1),m=s("blockquote",null,[s("p",null,"编写Shellcode/EXP/POC")],-1),b={id:"stack-overflow",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#stack-overflow","aria-hidden":"true"},"#",-1),k=p(`<ul><li>查找jmp esp</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>MessageBoxW<span class="token punctuation">.</span>Addr <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">75</span>DF3B90

nop <span class="token number">90</span>
push <span class="token number">0x0</span>        <span class="token number">6</span>A <span class="token number">00</span>
push <span class="token number">0x0</span>        <span class="token number">6</span>A <span class="token number">00</span>     
push <span class="token number">0x0</span>        <span class="token number">6</span>A <span class="token number">00</span>
push <span class="token number">0x0</span>        <span class="token number">6</span>A <span class="token number">00</span>
call <span class="token number">771</span>BEA11   E8 XXXX

<span class="token number">006</span>a9090
<span class="token number">006</span>a006a
<span class="token number">2</span>b4233E8
<span class="token number">00000075</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(h,x){const c=a("RouterLink"),l=a("DocsAD");return t(),r("div",null,[u,m,s("h2",b,[v,n(),e(c,{to:"/reverse/exploits/stack.html"},{default:i(()=>[n("Stack-Overflow")]),_:1})]),e(l),k])}const A=o(d,[["render",_],["__file","poc.html.vue"]]);export{A as default};
