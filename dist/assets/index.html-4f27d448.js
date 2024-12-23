import{_ as a,K as n,L as s,a5 as d,W as e,F as r}from"./framework-edebdfe1.js";const t={},l=e('<h1 id="fpga" tabindex="-1"><a class="header-anchor" href="#fpga" aria-hidden="true">#</a> FPGA</h1><h2 id="什么是fpga" tabindex="-1"><a class="header-anchor" href="#什么是fpga" aria-hidden="true">#</a> 什么是FPGA</h2><p>FPGA，可编程硬件，即&quot;现场可编程门阵列&quot;（Field Programmable Gate Array），硬件块阵列（每块都可配置）可根据需要进行连接，允许为所有应用构建特定域的高效架构。</p><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><p>虽然 CPU 灵活性很高，但其底层硬件是固定的。CPU 一旦出厂，硬件就无法修改。它依靠软件来告诉它要针对内存中的哪个数据执行哪项具体运算（算术函数）。硬件必须能够执行所有可能的运算，称之为使用软件指令，通常一次只能执行一条指令。相比之下，FPGA 可并行处理海量数据。与 CPU 相比，自适应硬件的优势因应用而异，很大程度上取决于计算的性质及其并行化的能力，但与功能可高度并行化的 CPU 实现方案相比，性能提高 20 倍的情况并不少见。</p><p>GPU 不仅可弥补 CPU 的一个主要不足之处 — 并行处理大量数据的能力，而且运行的数据集还很宽。从根本上讲，GPU 和 CPU 类似，因为它们有固定的硬件，而且使用软件指令运行。一条指令可处理 1000 个以上的数据，因此它们适用于图形加速、高性能计算、视频处理以及某些形式的机器学习等特定域。但从根本上讲，GPU 的基本架构和数据流在制造之前是固定的。</p><p>FPGA 可帮助编程人员和设计人员更灵活地适应和更新计算的硬件架构。</p>',7),c=e(`<h2 id="编程语言" tabindex="-1"><a class="header-anchor" href="#编程语言" aria-hidden="true">#</a> 编程语言</h2><ul><li>Verilog</li><li>VHDL</li></ul><div class="language-Verilog line-numbers-mode" data-ext="Verilog"><pre class="language-Verilog"><code>// https://circuitverse.org/users/93627/projects/first-verilog
module Calc (input[2:0]a,
			 input[2:0]b,
			 output[2:0]Diff,
			 output[3:0]Sum,
			 output[5:0]Prod,
			 output[4:0]Quo);
  
  assign {Diff} = a-b;
  assign {Sum} = a+b;
  assign {Prod} = a*b;
  assign {Quo} = a/b;
  
endmodule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function o(u,v){const i=r("DocsAD");return n(),s("div",null,[l,d(i),c])}const m=a(t,[["render",o],["__file","index.html.vue"]]);export{m as default};
