import{_ as n,K as s,L as e,W as a}from"./framework-edebdfe1.js";const i={},d=a(`<h1 id="端口敲门" tabindex="-1"><a class="header-anchor" href="#端口敲门" aria-hidden="true">#</a> 端口敲门</h1><h2 id="什么是端口敲门-port-knocking" tabindex="-1"><a class="header-anchor" href="#什么是端口敲门-port-knocking" aria-hidden="true">#</a> 什么是端口敲门（Port Knocking）？</h2><p>端口敲门是一种基于网络层的安全策略，通过监听一系列预定义的端口访问顺序来动态打开防火墙的特定端口。只有按正确顺序“敲击”了指定端口的客户端，才能获得访问特定服务（如SSH）的权限。</p><h2 id="为什么使用端口敲门" tabindex="-1"><a class="header-anchor" href="#为什么使用端口敲门" aria-hidden="true">#</a> 为什么使用端口敲门？</h2><ul><li><strong>提高安全性</strong>：隐藏服务端口，使其不被端口扫描工具检测到，从而降低暴露面。</li><li><strong>防止暴力攻击</strong>：通过动态开启端口，减少未授权用户的攻击机会。</li><li><strong>灵活性</strong>：只需修改端口敲门规则，即可对服务进行灵活控制。</li></ul><h2 id="如何配置端口敲门" tabindex="-1"><a class="header-anchor" href="#如何配置端口敲门" aria-hidden="true">#</a> 如何配置端口敲门</h2><h3 id="_1-安装knockd" tabindex="-1"><a class="header-anchor" href="#_1-安装knockd" aria-hidden="true">#</a> 1. 安装<code>knockd</code></h3><p>在大多数Linux发行版上，<code>knockd</code>工具可以通过包管理器安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在Debian/Ubuntu上安装</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> knockd

<span class="token comment"># 在CentOS/RHEL上安装</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> epel-release
<span class="token function">sudo</span> yum <span class="token function">install</span> knock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置knockd-etc-knockd-conf" tabindex="-1"><a class="header-anchor" href="#_2-配置knockd-etc-knockd-conf" aria-hidden="true">#</a> 2. 配置<code>knockd</code>/etc/knockd.conf</h3><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>[options]
    logfile = /var/log/knockd.log

[openSSH]
    sequence = 7000,8000,9000
    seq_timeout = 5
    command = /sbin/iptables -A INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
    tcpflags = syn

[closeSSH]
    sequence = 9000,8000,7000
    seq_timeout = 5
    command = /sbin/iptables -D INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
    tcpflags = syn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sequence：定义了端口敲门的顺序。例如，访问7000、8000、9000端口。</li><li>seq_timeout：定义了在几秒钟内必须完成所有敲门请求。</li><li>command：敲门成功后执行的命令。在openSSH部分，它允许指定IP访问SSH端口。</li><li>tcpflags：定义了检测的TCP标志（如syn表示同步标志）。</li></ul><h3 id="_3-启动knockd" tabindex="-1"><a class="header-anchor" href="#_3-启动knockd" aria-hidden="true">#</a> 3. 启动<code>knockd</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在Debian/Ubuntu上</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> knockd
<span class="token function">sudo</span> systemctl start knockd

<span class="token comment"># 在CentOS/RHEL上</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> knockd
<span class="token function">sudo</span> systemctl start knockd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>使用端口敲门</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>knock <span class="token number">192.168</span>.1.100 <span class="token number">7000</span> <span class="token number">8000</span> <span class="token number">9000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>关闭端口敲门</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>knock <span class="token number">192.168</span>.1.100 <span class="token number">9000</span> <span class="token number">8000</span> <span class="token number">7000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),l=[d];function c(o,t){return s(),e("div",null,l)}const u=n(i,[["render",c],["__file","pk.html.vue"]]);export{u as default};
