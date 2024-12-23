import{_ as e,K as t,L as p,a5 as c,M as n,N as s,W as o,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"_51单片机",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_51单片机","aria-hidden":"true"},"#"),s(" 51单片机")],-1),d=n("h2",{id:"什么是51单片机",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是51单片机","aria-hidden":"true"},"#"),s(" 什么是51单片机")],-1),r=n("p",null,"51单片机是对兼容英特尔8051指令系统的单片机的统称。",-1),k=o(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;reg52.h&gt;</span>			 <span class="token comment">//定义单片机的一些特殊功能寄存器</span></span>
sbit led<span class="token operator">=</span>P2<span class="token operator">^</span><span class="token number">0</span><span class="token punctuation">;</span>				<span class="token comment">//定义指定LED灯的管脚</span>

<span class="token keyword">void</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span>			<span class="token comment">//延时函数。unsigned int定义无符号整型，范围0-655535</span>
<span class="token punctuation">{</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//i=1时，大约延时10us</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">//主函数，程序从这里开始执行</span>
<span class="token punctuation">{</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		led<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>        <span class="token comment">//0表示低电平，共阳极二极管点亮</span>
		<span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">50000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//大约延时450ms</span>
		led<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>        <span class="token comment">//1表示高电平，LED熄灭</span>
		<span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">50000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//大约延时450ms	</span>
	<span class="token punctuation">}</span>		
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(v,b){const a=i("DocsAD");return t(),p("div",null,[u,d,r,c(a),k])}const h=e(l,[["render",m],["__file","index.html.vue"]]);export{h as default};
