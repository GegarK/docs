import{_ as d,K as s,L as a,a5 as l,M as e,N as n,W as r,F as v}from"./framework-edebdfe1.js";const c={},b=e("h1",{id:"badusb攻击",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#badusb攻击","aria-hidden":"true"},"#"),n(" BADUSB攻击")],-1),u=e("h2",{id:"什么是badusb攻击",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是badusb攻击","aria-hidden":"true"},"#"),n(" 什么是BADUSB攻击")],-1),o=e("p",null,'计算机或者其它设备"承认"我们插入的硬件为键盘鼠标，硬件版本模拟键盘鼠标操作。',-1),t=r(`<h2 id="badusb代码" tabindex="-1"><a class="header-anchor" href="#badusb代码" aria-hidden="true">#</a> BADUSB代码</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>#include &quot;Keyboard.h&quot;

void typeKey(int key)
{
  Keyboard.press(key);
  delay(50);
  Keyboard.release(key);
}

/* Init function */
void setup()
{
  // Begining the Keyboard stream
  Keyboard.begin();

  // Wait 500ms
  delay(500);

  delay(3000);

  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press(&#39;r&#39;);
  Keyboard.releaseAll();

  delay(500);

  Keyboard.print(&quot;notepad&quot;);

  delay(500);

  typeKey(KEY_RETURN);

  delay(750);

  Keyboard.print(&quot;DeeLMind&quot;);

  typeKey(KEY_RETURN);

  // Ending stream
  Keyboard.end();
}

/* Unused endless loop */
void loop() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(h,y){const i=v("DocsAD");return s(),a("div",null,[b,u,o,l(i),t])}const p=d(c,[["render",m],["__file","badusb.html.vue"]]);export{p as default};
