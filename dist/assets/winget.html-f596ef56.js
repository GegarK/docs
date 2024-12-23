import{_ as l,K as r,L as t,M as e,a5 as i,N as a,W as c,F as n}from"./framework-edebdfe1.js";const v={},u=e("h1",{id:"winget",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#winget","aria-hidden":"true"},"#"),a(" WinGet")],-1),o={href:"https://learn.microsoft.com/zh-tw/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"winget",-1),m=c(`<h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>PS C:\\Users\\Administrator&gt; winget
Windows 程序包管理器 v1.9.25200
版权所有 (C) Microsoft Corporation。保留所有权利。

WinGet 命令行实用工具可从命令行安装应用程序和其他程序包。

使用情况: winget  [&lt;命令&gt;] [&lt;选项&gt;]

下列命令有效:
  install    安装给定的程序包
  show       显示包的相关信息
  source     管理程序包的来源
  search     查找并显示程序包的基本信息
  list       显示已安装的程序包
  upgrade    显示并执行可用升级
  uninstall  卸载给定的程序包
  hash       哈希安装程序的帮助程序
  validate   验证清单文件
  settings   打开设置或设置管理员设置
  features   显示实验性功能的状态
  export     导出已安装程序包的列表
  import     安装文件中的所有程序包
  pin        管理包钉
  configure  将系统配置为所需状态
  download   从给定的程序包下载安装程序
  repair     修复所选包

如需特定命令的更多详细信息，请向其传递帮助参数。 [-?]

下列选项可用：
  -v,--version                显示工具的版本
  --info                      显示工具的常规信息
  -?,--help                   显示选定命令的帮助信息
  --wait                      提示用户在退出前按任意键
  --logs,--open-logs          打开默认日志位置
  --verbose,--verbose-logs    启用 WinGet 的详细日志记录
  --nowarn,--ignore-warnings  禁止显示警告输出
  --disable-interactivity     禁用交互式提示
  --proxy                     设置要用于此执行的代理
  --no-proxy                  禁止对此执行使用代理

可在此找到更多帮助: &quot;https://aka.ms/winget-command-help&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="换源重置" tabindex="-1"><a class="header-anchor" href="#换源重置" aria-hidden="true">#</a> 换源重置</h2><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>winget source remove winget
winget source add winget https://mirrors.ustc.edu.cn/winget-source --trust-level trusted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>winget source reset winget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li>下载不安装指定目录</li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>winget download XXXXID -d F://
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>指定目录安装</li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>winget settings
https://github.com/microsoft/winget-cli/blob/master/doc/Settings.md
&quot;installBehavior&quot;: {
    &quot;portablePackageUserRoot&quot;: &quot;C:/Users/FooBar/Packages&quot;
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>交互安装</li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>winget install -i XXXXID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装后会自动清理</li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>winget install XXXXID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更新软件</li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>winget upgrade XXXXID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>卸载软件</li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>winget uninstall XXXXID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18);function g(h,p){const s=n("ExternalLinkIcon"),d=n("DocsAD");return r(),t("div",null,[u,e("p",null,[e("a",o,[b,i(s)]),a(" 是 Windows 10 和 Windows 11 中的一个命令行工具，用于管理和安装 Windows 应用程序。它是 Windows Package Manager 的一部分，允许用户通过命令行界面安装、升级和管理软件包。")]),i(d),m])}const _=l(v,[["render",g],["__file","winget.html.vue"]]);export{_ as default};
