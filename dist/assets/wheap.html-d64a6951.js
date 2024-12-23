import{_ as p,K as l,L as o,a5 as a,M as n,a6 as t,N as s,W as u,F as c}from"./framework-edebdfe1.js";const d={},r=n("h1",{id:"windows-heap",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows-heap","aria-hidden":"true"},"#"),s(" Windows-Heap")],-1),m=n("h2",{id:"堆溢出漏洞",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#堆溢出漏洞","aria-hidden":"true"},"#"),s(" 堆溢出漏洞")],-1),v=u(`<h2 id="windows堆结构" tabindex="-1"><a class="header-anchor" href="#windows堆结构" aria-hidden="true">#</a> Windows堆结构</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//0x10 bytes (sizeof)</span>
<span class="token keyword">struct</span> <span class="token class-name">_LIST_ENTRY</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">_LIST_ENTRY</span><span class="token operator">*</span> Flink<span class="token punctuation">;</span>                                              <span class="token comment">//0x0</span>
    <span class="token keyword">struct</span> <span class="token class-name">_LIST_ENTRY</span><span class="token operator">*</span> Blink<span class="token punctuation">;</span>                                              <span class="token comment">//0x8</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//0x10 bytes (sizeof)</span>
<span class="token keyword">struct</span> <span class="token class-name">_HEAP_FREE_ENTRY</span>
<span class="token punctuation">{</span>
    <span class="token keyword">union</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">struct</span> <span class="token class-name">_HEAP_ENTRY</span> HeapEntry<span class="token punctuation">;</span>                                       <span class="token comment">//0x0</span>
        <span class="token keyword">struct</span> <span class="token class-name">_HEAP_UNPACKED_ENTRY</span> UnpackedEntry<span class="token punctuation">;</span>                          <span class="token comment">//0x0</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            USHORT Size<span class="token punctuation">;</span>                                                    <span class="token comment">//0x0</span>
            UCHAR Flags<span class="token punctuation">;</span>                                                    <span class="token comment">//0x2</span>
            UCHAR SmallTagIndex<span class="token punctuation">;</span>                                            <span class="token comment">//0x3</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            ULONG SubSegmentCode<span class="token punctuation">;</span>                                           <span class="token comment">//0x0</span>
            USHORT PreviousSize<span class="token punctuation">;</span>                                            <span class="token comment">//0x4</span>
            <span class="token keyword">union</span>
            <span class="token punctuation">{</span>
                UCHAR SegmentOffset<span class="token punctuation">;</span>                                        <span class="token comment">//0x6</span>
                UCHAR LFHFlags<span class="token punctuation">;</span>                                             <span class="token comment">//0x6</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            UCHAR UnusedBytes<span class="token punctuation">;</span>                                              <span class="token comment">//0x7</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span> <span class="token class-name">_HEAP_EXTENDED_ENTRY</span> ExtendedEntry<span class="token punctuation">;</span>                          <span class="token comment">//0x0</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            USHORT FunctionIndex<span class="token punctuation">;</span>                                           <span class="token comment">//0x0</span>
            USHORT ContextValue<span class="token punctuation">;</span>                                            <span class="token comment">//0x2</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            ULONG InterceptorValue<span class="token punctuation">;</span>                                         <span class="token comment">//0x0</span>
            USHORT UnusedBytesLength<span class="token punctuation">;</span>                                       <span class="token comment">//0x4</span>
            UCHAR EntryOffset<span class="token punctuation">;</span>                                              <span class="token comment">//0x6</span>
            UCHAR ExtendedBlockSignature<span class="token punctuation">;</span>                                   <span class="token comment">//0x7</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            ULONG Code1<span class="token punctuation">;</span>                                                    <span class="token comment">//0x0</span>
            <span class="token keyword">union</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">struct</span>
                <span class="token punctuation">{</span>
                    USHORT Code2<span class="token punctuation">;</span>                                           <span class="token comment">//0x4</span>
                    UCHAR Code3<span class="token punctuation">;</span>                                            <span class="token comment">//0x6</span>
                    UCHAR Code4<span class="token punctuation">;</span>                                            <span class="token comment">//0x7</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
                ULONG Code234<span class="token punctuation">;</span>                                              <span class="token comment">//0x4</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        ULONGLONG AgregateCode<span class="token punctuation">;</span>                                             <span class="token comment">//0x0</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">_LIST_ENTRY</span> FreeList<span class="token punctuation">;</span>                                            <span class="token comment">//0x8</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//0x8 bytes (sizeof)</span>
<span class="token keyword">struct</span> <span class="token class-name">_HEAP_ENTRY</span>
<span class="token punctuation">{</span>
    <span class="token keyword">union</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            USHORT Size<span class="token punctuation">;</span>                                                    <span class="token comment">//0x0</span>
            UCHAR Flags<span class="token punctuation">;</span>                                                    <span class="token comment">//0x2</span>
            UCHAR SmallTagIndex<span class="token punctuation">;</span>                                            <span class="token comment">//0x3</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            VOID<span class="token operator">*</span> <span class="token keyword">volatile</span> SubSegmentCode<span class="token punctuation">;</span>                                  <span class="token comment">//0x0</span>
            USHORT PreviousSize<span class="token punctuation">;</span>                                            <span class="token comment">//0x4</span>
            <span class="token keyword">union</span>
            <span class="token punctuation">{</span>
                UCHAR SegmentOffset<span class="token punctuation">;</span>                                        <span class="token comment">//0x6</span>
                UCHAR LFHFlags<span class="token punctuation">;</span>                                             <span class="token comment">//0x6</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            UCHAR UnusedBytes<span class="token punctuation">;</span>                                              <span class="token comment">//0x7</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            USHORT FunctionIndex<span class="token punctuation">;</span>                                           <span class="token comment">//0x0</span>
            USHORT ContextValue<span class="token punctuation">;</span>                                            <span class="token comment">//0x2</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            ULONG InterceptorValue<span class="token punctuation">;</span>                                         <span class="token comment">//0x0</span>
            USHORT UnusedBytesLength<span class="token punctuation">;</span>                                       <span class="token comment">//0x4</span>
            UCHAR EntryOffset<span class="token punctuation">;</span>                                              <span class="token comment">//0x6</span>
            UCHAR ExtendedBlockSignature<span class="token punctuation">;</span>                                   <span class="token comment">//0x7</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">struct</span>
        <span class="token punctuation">{</span>
            ULONG Code1<span class="token punctuation">;</span>                                                    <span class="token comment">//0x0</span>
            USHORT Code2<span class="token punctuation">;</span>                                                   <span class="token comment">//0x4</span>
            UCHAR Code3<span class="token punctuation">;</span>                                                    <span class="token comment">//0x6</span>
            UCHAR Code4<span class="token punctuation">;</span>                                                    <span class="token comment">//0x7</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        ULONGLONG AgregateCode<span class="token punctuation">;</span>                                             <span class="token comment">//0x0</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="堆操作函数" tabindex="-1"><a class="header-anchor" href="#堆操作函数" aria-hidden="true">#</a> 堆操作函数</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>malloc
free
HeapAlloc
HeepFree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function k(b,x){const i=c("DocsAD"),e=c("RouterLink");return l(),o("div",null,[r,m,a(i),n("ul",null,[n("li",null,[a(e,{to:"/reverse/exploits/double.html"},{default:t(()=>[s("Double-Free")]),_:1})]),n("li",null,[a(e,{to:"/reverse/exploits/userafter.html"},{default:t(()=>[s("Use-After-Free")]),_:1})])]),v])}const _=p(d,[["render",k],["__file","wheap.html.vue"]]);export{_ as default};
