import{_ as c,K as l,L as t,M as n,N as e,a5 as s,W as r,F as a}from"./framework-edebdfe1.js";const d="/imgs/rev/function.png",o={},u=r(`<h1 id="函数结构" tabindex="-1"><a class="header-anchor" href="#函数结构" aria-hidden="true">#</a> 函数结构</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int strcmp_m(const char* p1, const char* p2)
{
	const unsigned char* s1 = (const unsigned char*)p1;
	const unsigned char* s2 = (const unsigned char*)p2;
	unsigned char c1, c2;
	do
	{
		c1 = (unsigned char)*s1++;
		c2 = (unsigned char)*s2++;
		if (c1 == &#39;\\0&#39;)
			return c1 - c2;
	} while (c1 == c2);
	return c1 - c2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>函数参数</p></li><li><p>函数返回</p></li><li><p>局部变量</p></li></ul><p><img src="`+d+'" alt="er" loading="lazy"></p>',4),_={id:"函数类型",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#函数类型","aria-hidden":"true"},"#",-1),h={href:"https://learn.microsoft.com/en-us/cpp/cpp/stdcall?view=msvc-170",target:"_blank",rel:"noopener noreferrer"},p={href:"https://learn.microsoft.com/zh-cn/cpp/build/reference/gd-gr-gv-gz-calling-convention?view=msvc-170",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,[n("p",null,"__cdecl")],-1),g=n("li",null,[n("p",null,"__fastcall")],-1),b=n("li",null,[n("p",null,"__thiscall")],-1);function f(x,k){const i=a("ExternalLinkIcon");return l(),t("div",null,[u,n("h2",_,[v,e(),n("a",h,[e("函数类型"),s(i)])]),n("ul",null,[n("li",null,[n("p",null,[n("a",p,[e("__stdcall"),s(i)])])]),m,g,b])])}const V=c(o,[["render",f],["__file","function.html.vue"]]);export{V as default};
