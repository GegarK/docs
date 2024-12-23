import{_ as o,K as c,L as p,a5 as e,M as n,N as s,W as t,F as i}from"./framework-edebdfe1.js";const d="/imgs/web3/analyse/1.png",r={},u=t('<h1 id="简单opcode分析" tabindex="-1"><a class="header-anchor" href="#简单opcode分析" aria-hidden="true">#</a> 简单Opcode分析</h1><div class="hint-container warning"><p class="hint-container-title">DeeLMind 非常喜欢的招聘要求|大道至简</p><p>We don&#39;t have formal experience requirements. We&#39;re looking for people who are able to learn fast and tackle interesting problems. If you enjoy solving difficult problems, please shoot us your application and we&#39;ll followup with next steps.</p><p>网络安全包络万象，掌握根本，有兴趣，才能快速分析问题，解决问题。</p></div><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Coding Challenge</p><p>This is the runtime bytecode of a contract using EIP-3855.</p><p>6181935f351415600b57005b5f80fd</p><p>Please provide the calldata of a transaction that will not revert. Submit your answer as a hex string. If there are multiple answers, submit the shortest answer. If there are multiple shortest answers, submit the unique lexicographically first answer.</p>',7),v=n("h2",{id:"分析思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分析思路","aria-hidden":"true"},"#"),s(" 分析思路")],-1),m={href:"https://www.evm.codes/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://eips.ethereum.org/EIPS/eip-3855",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>引入新的操作码：PUSH0</p><p>操作码：0x5f</p><p>功能：将一个常量零值（0）推送到堆栈上。 目的：减少合约字节码的长度和复杂度，提升执行效率。</p><p>为什么引入 PUSH0 操作码？ 在当前的以太坊虚拟机中，如果合约需要将零值推送到堆栈上，通常会使用 PUSH1 操作码，然后提供一个字节的零值（PUSH1 0x00），这需要两个字节的空间。</p><p>通过引入 PUSH0 操作码，只需一个字节即可完成相同的操作，从而节省空间和降低 gas 成本。这对大量使用零值的智能合约特别有利，可以显著提升它们的执行效率。</p><ul><li>反编译 Opcode 静态分析</li></ul><p>6181935f351415600b57005b5f80fd</p><p>618193 5f 35 14 15 600b 57 00 5b 5f 80 fd</p><div class="language-Disassembly line-numbers-mode" data-ext="Disassembly"><pre class="language-Disassembly"><code>0x0: PUSH2     0x8193  // Push the value 0x8193 onto the stack
0x3: PUSH0             // Push the value 0 (zero) onto the stack
0x4: CALLDATALOAD      // Load the first 32 bytes of calldata into the stack
0x5: EQ                // Compare if the two top stack values are equal
0x6: ISZERO            // Check if the top stack value is zero
0x7: PUSH1     0xb     // Push the value 0xb (address of the jump destination) onto the stack
0x9: JUMPI             // Conditionally jump to address 0xb if the top stack value is non-zero
0xa: STOP              // Halt execution
0xb: JUMPDEST          // Jump destination (address 0xb)
0xc: PUSH0             // Push the value 0 (zero) onto the stack
0xd: DUP1              // Duplicate the top stack value
0xe: REVERT            // Revert the transaction

PUSH2 0x8193：将常量 0x8193 推入堆栈。
PUSH0：将零推入堆栈。
CALLDATALOAD：将调用数据的前32个字节加载到堆栈。
EQ：比较两个堆栈顶值是否相等。
ISZERO：检查堆栈顶值是否为零。
PUSH1 0xb, JUMPI：如果堆栈顶值非零，则跳转到地址 0xb。
STOP：停止执行。
JUMPDEST：跳转目标。
PUSH0：将零推入堆栈。
DUP1：复制堆栈顶值。
REVERT：回滚事务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>伪代码还原</li></ul><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">EIP3855Example</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _input<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// The following inline assembly mimics the provided bytecode</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token comment">// Equivalent to PUSH2 0x8193</span>
            <span class="token keyword">let</span> pushedValue <span class="token operator">:=</span> <span class="token number">0x8193</span>
            <span class="token comment">// Equivalent to PUSH0, CALLDATALOAD</span>
            <span class="token keyword">let</span> callDataValue <span class="token operator">:=</span> <span class="token function">calldataload</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token comment">// Equivalent to EQ</span>
            <span class="token keyword">let</span> isEqual <span class="token operator">:=</span> <span class="token function">eq</span><span class="token punctuation">(</span>pushedValue<span class="token punctuation">,</span> callDataValue<span class="token punctuation">)</span>
            <span class="token comment">// Equivalent to ISZERO</span>
            <span class="token keyword">if</span> <span class="token function">iszero</span><span class="token punctuation">(</span>isEqual<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Equivalent to PUSH1 0xb, JUMPI</span>
                <span class="token comment">// Jump destination</span>
                <span class="token keyword">revert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// Equivalent to STOP</span>
            <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析结论</li></ul><p>用户输入的内容与0x8193进行对比，错误则Revert，我们只需构造输入参数使之匹配正确即可</p><p>相比于我们以前逆向分析二进制程序要简单很多</p>`,14),h={href:"https://www.evm.codes/playground",target:"_blank",rel:"noopener noreferrer"},f=t('<p><img src="'+d+`" alt="er" loading="lazy"></p><ul><li>答案</li></ul><div class="language-hex line-numbers-mode" data-ext="hex"><pre class="language-hex"><code>0x0000000000000000000000000000000000000000000000000000000000008193
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function x(y,P){const l=i("DocsAD"),a=i("ExternalLinkIcon");return c(),p("div",null,[u,e(l),v,n("ul",null,[n("li",null,[n("p",null,[n("a",m,[s("ETH Opcode"),e(a)])])]),n("li",null,[n("p",null,[s("什么是"),n("a",b,[s("EIP-3855"),e(a)])])])]),k,n("ul",null,[n("li",null,[n("a",h,[s("动态调试"),e(a)])])]),f])}const g=o(r,[["render",x],["__file","ottersecbytecode.html.vue"]]);export{g as default};
