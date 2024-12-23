import{_ as e,K as a,L as i,W as d}from"./framework-edebdfe1.js";const n={},s=d(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><h2 id="用户信息" tabindex="-1"><a class="header-anchor" href="#用户信息" aria-hidden="true">#</a> 用户信息</h2><ul><li>用户信息</li></ul><div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>whoami
who/w
id
finger
cat /etc/passwd
cat /etc/shadow
cat /etc/gshadow
cat /etc/group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进程信息" tabindex="-1"><a class="header-anchor" href="#进程信息" aria-hidden="true">#</a> 进程信息</h2><ul><li>进程信息</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>ps aux
ps -efl
top
pstree -aup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>端口进程</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>sudo lsof -i:22
sudo netstat -tunlp | grep 53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭进程</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>kill -9 PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息" aria-hidden="true">#</a> 系统信息</h2><ul><li>主机名称</li></ul><div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>uname -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>内核版本</li></ul><div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>uname -srm
hostnamectl
hostnamectl | grep -i kernel
cat /proc/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CPU信息</li></ul><div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>lscpu
cat /proc/cpuinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>内存信息</li></ul><div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>free -m -w
cat /proc/meminfo 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>交换分区</li></ul><div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>free -m -w
cat /proc/meminfo 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>环境变量</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>set
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动信息" tabindex="-1"><a class="header-anchor" href="#启动信息" aria-hidden="true">#</a> 启动信息</h2><h2 id="计划任务" tabindex="-1"><a class="header-anchor" href="#计划任务" aria-hidden="true">#</a> 计划任务</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>schtasks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="密码信息" tabindex="-1"><a class="header-anchor" href="#密码信息" aria-hidden="true">#</a> 密码信息</h2><ul><li>查看用户密码</li></ul><div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>cat /etc/password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>cat /etc/shadow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="票据信息" tabindex="-1"><a class="header-anchor" href="#票据信息" aria-hidden="true">#</a> 票据信息</h2><h2 id="磁盘信息" tabindex="-1"><a class="header-anchor" href="#磁盘信息" aria-hidden="true">#</a> 磁盘信息</h2><h2 id="网络信息" tabindex="-1"><a class="header-anchor" href="#网络信息" aria-hidden="true">#</a> 网络信息</h2><ul><li>查看网卡信息</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>ifconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看host信息</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>cat /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看网卡信息</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>ifconfig
arp -a
route print
netstat -anot
Get-NetTCPConnection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件信息" tabindex="-1"><a class="header-anchor" href="#文件信息" aria-hidden="true">#</a> 文件信息</h2><h2 id="服务信息" tabindex="-1"><a class="header-anchor" href="#服务信息" aria-hidden="true">#</a> 服务信息</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>sc query
wmic service list brief
Get-WmiObject win32_service | select PathName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志信息" tabindex="-1"><a class="header-anchor" href="#日志信息" aria-hidden="true">#</a> 日志信息</h2><h2 id="软件信息" tabindex="-1"><a class="header-anchor" href="#软件信息" aria-hidden="true">#</a> 软件信息</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>wmic product get name,version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="驱动信息" tabindex="-1"><a class="header-anchor" href="#驱动信息" aria-hidden="true">#</a> 驱动信息</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>DRIVERQUERY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="后缀信息" tabindex="-1"><a class="header-anchor" href="#后缀信息" aria-hidden="true">#</a> 后缀信息</h2><h2 id="注册表信息" tabindex="-1"><a class="header-anchor" href="#注册表信息" aria-hidden="true">#</a> 注册表信息</h2><h2 id="防火墙信息" tabindex="-1"><a class="header-anchor" href="#防火墙信息" aria-hidden="true">#</a> 防火墙信息</h2>`,51),l=[s];function r(c,u){return a(),i("div",null,l)}const t=e(n,[["render",r],["__file","linux.html.vue"]]);export{t as default};
