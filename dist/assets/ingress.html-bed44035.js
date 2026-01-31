import{_ as i,K as l,L as n,W as s}from"./framework-edebdfe1.js";const e={},r=s(`<h1 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress" aria-hidden="true">#</a> Ingress</h1><h2 id="_1-定义与职责" tabindex="-1"><a class="header-anchor" href="#_1-定义与职责" aria-hidden="true">#</a> 1. 定义与职责</h2><p>接入层是用户与系统之间的第一道门，也叫 <strong>Front Door</strong> 或 <strong>Ingress Layer</strong>。<br> 主要职责：</p><ol><li>流量入口管理：所有来自互联网或内部的请求必须经过接入层。</li><li>高可用性：保证服务入口无单点故障。</li><li>安全防护：提供 DDoS 防护、WAF、SSL/TLS 终止等安全措施。</li><li>性能优化：缓存静态资源、CDN 分发、边缘节点加速。</li><li>监控与治理：统计请求指标、健康检查，拦截异常流量。</li></ol><hr><h2 id="_2-功能模块" tabindex="-1"><a class="header-anchor" href="#_2-功能模块" aria-hidden="true">#</a> 2. 功能模块</h2><h3 id="_2-1-dns-与流量解析" tabindex="-1"><a class="header-anchor" href="#_2-1-dns-与流量解析" aria-hidden="true">#</a> 2.1 DNS 与流量解析</h3><ul><li><strong>作用</strong>：将域名解析到具体服务入口（Load Balancer / Edge Node）。</li><li><strong>设计考虑</strong>： <ul><li>多地区部署，避免单点故障。</li><li>支持智能路由（Geo DNS、Anycast）优化延迟。</li></ul></li><li><strong>技术选型</strong>： <ul><li>Route53（AWS）</li><li>Cloudflare DNS</li><li>阿里云 DNS</li></ul></li><li><strong>注意点</strong>： <ul><li>TTL 设置合理，保证变更快速生效。</li><li>支持健康检查和故障转移。</li></ul></li></ul><h3 id="_2-2-cdn-内容分发网络" tabindex="-1"><a class="header-anchor" href="#_2-2-cdn-内容分发网络" aria-hidden="true">#</a> 2.2 CDN（内容分发网络）</h3><ul><li><strong>作用</strong>：将静态内容缓存到离用户更近的节点，减少回源压力。</li><li><strong>设计考虑</strong>： <ul><li>缓存策略：根据资源更新频率设置 TTL。</li><li>动态内容是否通过 CDN 或回源。</li></ul></li><li><strong>技术选型</strong>： <ul><li>CloudFront</li><li>Akamai</li><li>Fastly</li></ul></li><li><strong>优化点</strong>： <ul><li>静态资源使用版本号或 hash 保证更新立即生效。</li><li>支持边缘计算（Edge Compute）处理简单逻辑，减轻主服务压力。</li></ul></li></ul><h3 id="_2-3-ssl-tls-终止" tabindex="-1"><a class="header-anchor" href="#_2-3-ssl-tls-终止" aria-hidden="true">#</a> 2.3 SSL/TLS 终止</h3><ul><li><strong>作用</strong>：统一处理 HTTPS 加密解密，减轻下游服务压力。</li><li><strong>设计考虑</strong>： <ul><li>支持 TLS1.3，启用安全加密套件。</li><li>自动证书管理（Let&#39;s Encrypt / ACM）。</li></ul></li><li><strong>架构方式</strong>： <ul><li>CDN 边缘节点终止。</li><li>或负载均衡层终止，内部使用 HTTP/2 或 gRPC。</li></ul></li></ul><h3 id="_2-4-waf-与-ddos-防护" tabindex="-1"><a class="header-anchor" href="#_2-4-waf-与-ddos-防护" aria-hidden="true">#</a> 2.4 WAF 与 DDoS 防护</h3><ul><li><strong>作用</strong>：防止常见攻击、恶意请求、爬虫和分布式攻击。</li><li><strong>功能</strong>： <ul><li>SQL 注入 / XSS 防护</li><li>IP 黑白名单</li><li>Bot 识别</li><li>请求频率限制</li></ul></li><li><strong>技术选型</strong>： <ul><li>Cloudflare WAF</li><li>AWS WAF</li><li>自建 ModSecurity + Nginx</li></ul></li><li><strong>优化点</strong>： <ul><li>WAF 规则结合业务场景，避免误杀合法请求。</li><li>DDoS 防护在 CDN / LB 层提前拦截。</li></ul></li></ul><h3 id="_2-5-健康检查与流量控制" tabindex="-1"><a class="header-anchor" href="#_2-5-健康检查与流量控制" aria-hidden="true">#</a> 2.5 健康检查与流量控制</h3><ul><li><strong>作用</strong>： <ul><li>定期检测下游服务健康状态</li><li>动态调整流量路由</li></ul></li><li><strong>技术手段</strong>： <ul><li>HTTP / TCP 心跳检查</li><li>主动节点剔除</li><li>流量灰度切分和限流</li></ul></li><li><strong>优化点</strong>： <ul><li>心跳频率适中，避免产生额外压力</li><li>健康检查失败阈值设置合理，避免误判</li></ul></li></ul><h3 id="_2-6-高可用设计" tabindex="-1"><a class="header-anchor" href="#_2-6-高可用设计" aria-hidden="true">#</a> 2.6 高可用设计</h3><ul><li><strong>多区域部署</strong>： <ul><li>多机房或多可用区 (AZ)</li><li>Anycast IP 全局路由</li></ul></li><li><strong>负载均衡策略</strong>： <ul><li>DNS 轮询（Round Robin）</li><li>最少连接 / 响应时间</li><li>权重流量分配</li></ul></li><li><strong>自动故障切换</strong>： <ul><li>异地容灾（DR）</li><li>健康检查 + 自动切换</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用户 / 客户端
│
▼
┌─────────────────────────┐
│ DNS &amp; 路由 │
│ - Route53 / Cloudflare │
│ - GeoDNS / Anycast │
└─────────────────────────┘
│
▼
┌─────────────────────────┐
│ CDN │
│ - CloudFront / Akamai │
│ - 静态资源缓存 / 边缘加速 │
└─────────────────────────┘
│
▼
┌─────────────────────────┐
│ WAF / DDoS 防护层 │
│ - SQLi/XSS 防护 │
│ - IP 黑白名单 / Bot 识别 │
└─────────────────────────┘
│
▼
┌─────────────────────────┐
│ 负载均衡 / SSL 终止 │
│ - F5 / Nginx / HAProxy │
│ - TLS1.3, 自动证书管理 │
└─────────────────────────┘
│
▼
┌─────────────────────────┐
│ 健康检查与流量控制 │
│ - 心跳检测 │
│ - 节点剔除 / 限流 │
│ - 灰度发布 / 灾备切换 │
└─────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),d=[r];function a(u,t){return l(),n("div",null,d)}const c=i(e,[["render",a],["__file","ingress.html.vue"]]);export{c as default};
