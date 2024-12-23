import{_ as n,K as s,L as a,W as t}from"./framework-edebdfe1.js";const p={},e=t(`<h1 id="shellcode" tabindex="-1"><a class="header-anchor" href="#shellcode" aria-hidden="true">#</a> SHELLCODE</h1><div class="hint-container warning"><p class="hint-container-title">DeeLMind 提示</p><p>SHELLCODE难度比较大，需要很强的二进制基础，本质就是逆向分析。</p></div><h2 id="什么是shellcode" tabindex="-1"><a class="header-anchor" href="#什么是shellcode" aria-hidden="true">#</a> 什么是shellcode</h2><p>shellcode是一段用于利用软件漏洞而执行的代码，shellcode为机械码，以其经常让攻击者获得shell而得名。</p><h2 id="如何开发shellcode" tabindex="-1"><a class="header-anchor" href="#如何开发shellcode" aria-hidden="true">#</a> 如何开发shellcode</h2><ul><li>自己编写</li><li>生成器生成</li></ul><h2 id="如何分析shellcode" tabindex="-1"><a class="header-anchor" href="#如何分析shellcode" aria-hidden="true">#</a> 如何分析shellcode</h2><ul><li>静态分析</li><li>动态调试</li><li>符号执行</li><li>虚拟化执行</li></ul><h2 id="shellcode分析工具" tabindex="-1"><a class="header-anchor" href="#shellcode分析工具" aria-hidden="true">#</a> shellcode分析工具</h2><ul><li>IDA Pro</li><li>Capstone</li><li>Qemu</li><li>Unicorn</li><li>Angr</li></ul><h2 id="shellcode-1" tabindex="-1"><a class="header-anchor" href="#shellcode-1" aria-hidden="true">#</a> shellcode</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SYS_EXECV filename=/bin//sh

31 c0                   xor    eax,eax
50                      push   eax
68 2f 2f 73 68          push   0x68732f2f
68 2f 62 69 6e          push   0x6e69622f
89 e3                   mov    ebx,esp
50                      push   eax
53                      push   ebx
89 e1                   mov    ecx,esp
b0 0b                   mov    al,0xb
cd 80                   int    0x80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="capstone" tabindex="-1"><a class="header-anchor" href="#capstone" aria-hidden="true">#</a> Capstone</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install capstone

<span class="token keyword">from</span> capstone <span class="token keyword">import</span> <span class="token operator">*</span>

CODE <span class="token operator">=</span> <span class="token string">b&quot;\\x31\\xc0\\x50\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x50\\x53\\x89\\xe1\\xb0\\x0b\\xcd\\x80&quot;</span>

md <span class="token operator">=</span> Cs<span class="token punctuation">(</span>CS_ARCH_X86<span class="token punctuation">,</span> CS_MODE_64<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> md<span class="token punctuation">.</span>disasm<span class="token punctuation">(</span>CODE<span class="token punctuation">,</span> <span class="token number">0x400010</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;0x%x:\\t%s\\t%s&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>address<span class="token punctuation">,</span> i<span class="token punctuation">.</span>mnemonic<span class="token punctuation">,</span> i<span class="token punctuation">.</span>op_str<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unicorn" tabindex="-1"><a class="header-anchor" href="#unicorn" aria-hidden="true">#</a> Unicorn</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> unicorn <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> unicorn<span class="token punctuation">.</span>x86_const <span class="token keyword">import</span> <span class="token operator">*</span>

X86_CODE32 <span class="token operator">=</span> <span class="token string">b&quot;\\x31\\xc0\\x50\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x50\\x53\\x89\\xe1\\xb0\\x0b\\xcd\\x80&quot;</span>

ADDRESS <span class="token operator">=</span> <span class="token number">0x1000000</span>


<span class="token keyword">def</span> <span class="token function">hook_code</span><span class="token punctuation">(</span>uc<span class="token punctuation">,</span> address<span class="token punctuation">,</span> size<span class="token punctuation">,</span> user_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; Tracing instruction at 0x%x, instruction size = 0x%x&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>address<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">)</span>
    tmp <span class="token operator">=</span> uc<span class="token punctuation">.</span>mem_read<span class="token punctuation">(</span>address<span class="token punctuation">,</span> size<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;*** PC = %x *** :&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> tmp<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot; %02x&quot;</span> <span class="token operator">%</span> i<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">hook_block</span><span class="token punctuation">(</span>uc<span class="token punctuation">,</span> address<span class="token punctuation">,</span> size<span class="token punctuation">,</span> user_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; Tracing basic block at 0x%x, block size = 0x%x&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>address<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">read_string</span><span class="token punctuation">(</span>uc<span class="token punctuation">,</span> address<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    c <span class="token operator">=</span> uc<span class="token punctuation">.</span>mem_read<span class="token punctuation">(</span>address<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    read_bytes <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">while</span> c <span class="token operator">!=</span> <span class="token number">0x0</span><span class="token punctuation">:</span>
        ret <span class="token operator">+=</span> <span class="token builtin">chr</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
        c <span class="token operator">=</span> uc<span class="token punctuation">.</span>mem_read<span class="token punctuation">(</span>address <span class="token operator">+</span> read_bytes<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        read_bytes <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> ret


<span class="token comment"># callback for tracing Linux interrupt</span>
<span class="token keyword">def</span> <span class="token function">hook_intr</span><span class="token punctuation">(</span>uc<span class="token punctuation">,</span> intno<span class="token punctuation">,</span> user_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># only handle Linux syscall</span>
    <span class="token keyword">if</span> intno <span class="token operator">!=</span> <span class="token number">0x80</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;got interrupt %x ???&quot;</span> <span class="token operator">%</span> intno<span class="token punctuation">)</span><span class="token punctuation">;</span>
        uc<span class="token punctuation">.</span>emu_stop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>

    eax <span class="token operator">=</span> uc<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_EAX<span class="token punctuation">)</span>
    eip <span class="token operator">=</span> uc<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_EIP<span class="token punctuation">)</span>

    <span class="token keyword">if</span> eax <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>  <span class="token comment"># sys_exit</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; 0x%x: interrupt 0x%x, EAX = 0x%x&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>eip<span class="token punctuation">,</span> intno<span class="token punctuation">,</span> eax<span class="token punctuation">)</span><span class="token punctuation">)</span>
        uc<span class="token punctuation">.</span>emu_stop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> eax <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">:</span>  <span class="token comment"># sys_write</span>
        <span class="token comment"># ECX = buffer address</span>
        ecx <span class="token operator">=</span> uc<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_ECX<span class="token punctuation">)</span>
        <span class="token comment"># EDX = buffer size</span>
        edx <span class="token operator">=</span> uc<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_EDX<span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            buf <span class="token operator">=</span> uc<span class="token punctuation">.</span>mem_read<span class="token punctuation">(</span>ecx<span class="token punctuation">,</span> edx<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; 0x%x: interrupt 0x%x, SYS_WRITE. buffer = 0x%x, size = %u, content = &quot;</span> \\
                  <span class="token operator">%</span> <span class="token punctuation">(</span>eip<span class="token punctuation">,</span> intno<span class="token punctuation">,</span> ecx<span class="token punctuation">,</span> edx<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> buf<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span> <span class="token operator">%</span> i<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> UcError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; 0x%x: interrupt 0x%x, SYS_WRITE. buffer = 0x%x, size = %u, content = &lt;unknown&gt;\\n&quot;</span> \\
                  <span class="token operator">%</span> <span class="token punctuation">(</span>eip<span class="token punctuation">,</span> intno<span class="token punctuation">,</span> ecx<span class="token punctuation">,</span> edx<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> eax <span class="token operator">==</span> <span class="token number">11</span><span class="token punctuation">:</span>  <span class="token comment"># sys_write</span>
        ebx <span class="token operator">=</span> uc<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_EBX<span class="token punctuation">)</span>
        filename <span class="token operator">=</span> read_string<span class="token punctuation">(</span>uc<span class="token punctuation">,</span> ebx<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; SYS_EXECV filename=%s&quot;</span> <span class="token operator">%</span> filename<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; 0x%x: interrupt 0x%x, EAX = 0x%x&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>eip<span class="token punctuation">,</span> intno<span class="token punctuation">,</span> eax<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">hook_syscall32</span><span class="token punctuation">(</span>mu<span class="token punctuation">,</span> user_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    eax <span class="token operator">=</span> mu<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_EAX<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; got SYSCALL with EAX = 0x%x&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>eax<span class="token punctuation">)</span><span class="token punctuation">)</span>
    mu<span class="token punctuation">.</span>emu_stop<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">hook_syscall64</span><span class="token punctuation">(</span>mu<span class="token punctuation">,</span> user_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    rax <span class="token operator">=</span> mu<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_RAX<span class="token punctuation">)</span>
    rdi <span class="token operator">=</span> mu<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_RDI<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; got SYSCALL with RAX = %d&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>rax<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> rax <span class="token operator">==</span> <span class="token number">59</span><span class="token punctuation">:</span>  <span class="token comment"># sys_execve</span>
        filename <span class="token operator">=</span> read_string<span class="token punctuation">(</span>mu<span class="token punctuation">,</span> rdi<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; SYS_EXECV filename=%s&quot;</span> <span class="token operator">%</span> filename<span class="token punctuation">)</span>

    <span class="token keyword">else</span><span class="token punctuation">:</span>
        rip <span class="token operator">=</span> mu<span class="token punctuation">.</span>reg_read<span class="token punctuation">(</span>UC_X86_REG_RIP<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; Syscall Found at 0x%x: , RAX = 0x%x&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>rip<span class="token punctuation">,</span> rax<span class="token punctuation">)</span><span class="token punctuation">)</span>

    mu<span class="token punctuation">.</span>emu_stop<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># Test X86 32 bit</span>
<span class="token keyword">def</span> <span class="token function">test_i386</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> mode <span class="token operator">==</span> UC_MODE_32<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Emulate x86_32 code&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> mode <span class="token operator">==</span> UC_MODE_64<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Emulate x86_64 code&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># Initialize emulator</span>
        mu <span class="token operator">=</span> Uc<span class="token punctuation">(</span>UC_ARCH_X86<span class="token punctuation">,</span> mode<span class="token punctuation">)</span>

        <span class="token comment"># map 2MB memory for this emulation</span>
        mu<span class="token punctuation">.</span>mem_map<span class="token punctuation">(</span>ADDRESS<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span>

        <span class="token comment"># write machine code to be emulated to memory</span>
        mu<span class="token punctuation">.</span>mem_write<span class="token punctuation">(</span>ADDRESS<span class="token punctuation">,</span> code<span class="token punctuation">)</span>

        <span class="token comment"># initialize stack</span>
        mu<span class="token punctuation">.</span>reg_write<span class="token punctuation">(</span>UC_X86_REG_ESP<span class="token punctuation">,</span> ADDRESS <span class="token operator">+</span> <span class="token number">0x200000</span><span class="token punctuation">)</span>

        <span class="token comment"># tracing all basic blocks with customized callback</span>
        mu<span class="token punctuation">.</span>hook_add<span class="token punctuation">(</span>UC_HOOK_BLOCK<span class="token punctuation">,</span> hook_block<span class="token punctuation">)</span>

        <span class="token comment"># tracing all instructions with customized callback</span>
        mu<span class="token punctuation">.</span>hook_add<span class="token punctuation">(</span>UC_HOOK_CODE<span class="token punctuation">,</span> hook_code<span class="token punctuation">)</span>

        <span class="token keyword">if</span> mode <span class="token operator">==</span> UC_MODE_32<span class="token punctuation">:</span>
            <span class="token comment"># handle interrupt ourself</span>
            mu<span class="token punctuation">.</span>hook_add<span class="token punctuation">(</span>UC_HOOK_INTR<span class="token punctuation">,</span> hook_intr<span class="token punctuation">)</span>
            <span class="token comment"># handle SYSCALL</span>
            mu<span class="token punctuation">.</span>hook_add<span class="token punctuation">(</span>UC_HOOK_INSN<span class="token punctuation">,</span> hook_syscall32<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> UC_X86_INS_SYSCALL<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> mode <span class="token operator">==</span> UC_MODE_64<span class="token punctuation">:</span>
            mu<span class="token punctuation">.</span>hook_add<span class="token punctuation">(</span>UC_HOOK_INSN<span class="token punctuation">,</span> hook_syscall64<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> UC_X86_INS_SYSCALL<span class="token punctuation">)</span>

        <span class="token comment"># emulate machine code in infinite time</span>
        mu<span class="token punctuation">.</span>emu_start<span class="token punctuation">(</span>ADDRESS<span class="token punctuation">,</span> ADDRESS <span class="token operator">+</span> <span class="token builtin">len</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># now print out some registers</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt; Emulation done&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">except</span> UcError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;ERROR: %s&quot;</span> <span class="token operator">%</span> e<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    test_i386<span class="token punctuation">(</span>UC_MODE_32<span class="token punctuation">,</span> X86_CODE32<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
