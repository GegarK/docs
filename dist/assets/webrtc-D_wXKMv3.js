import{a as e,n as t,o as n,r,s as i}from"./app-C9M3NSvs.js";import{t as a}from"./plugin-vue_export-helper-BDNMzG2s.js";var o=JSON.parse(`{"path":"/program/program/front/webrtc.html","title":"WEBRTC","lang":"zh-CN","frontmatter":{"description":"WEBRTC 什么是WEBRTC WEBRTC(Web Real-Time Communication)支持在点对点之间发送视频、语音和通用数据，允许开发人员构建强大的语音和视频通信解决方案。该技术可用于所有现代浏览器以及所有主要平台的本机客户端。WebRTC 背后的技术作为开放网络标准实施，并在所有主要浏览器中作为常规 JavaScript API ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WEBRTC\\",\\"image\\":[\\"https://deelmind.com/imgs/program/front/webrtc/webrtc.png\\"],\\"dateModified\\":\\"2026-03-11T05:49:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DeeLMind\\",\\"url\\":\\"https://deelmind.com\\"}]}"],["meta",{"property":"og:url","content":"https://deelmind.com/program/program/front/webrtc.html"}],["meta",{"property":"og:site_name","content":"極客方舟"}],["meta",{"property":"og:title","content":"WEBRTC"}],["meta",{"property":"og:description","content":"WEBRTC 什么是WEBRTC WEBRTC(Web Real-Time Communication)支持在点对点之间发送视频、语音和通用数据，允许开发人员构建强大的语音和视频通信解决方案。该技术可用于所有现代浏览器以及所有主要平台的本机客户端。WebRTC 背后的技术作为开放网络标准实施，并在所有主要浏览器中作为常规 JavaScript API ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://deelmind.com/imgs/program/front/webrtc/webrtc.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-03-11T05:49:26.000Z"}],["meta",{"property":"article:modified_time","content":"2026-03-11T05:49:26.000Z"}]]},"git":{"createdTime":1734955114000,"updatedTime":1773208166000,"contributors":[{"name":"DeeLMind","username":"DeeLMind","email":"deelmind@gmail.com","commits":2,"url":"https://github.com/DeeLMind"}]},"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"program/program/front/webrtc.md","autoDesc":true}`),s={name:`webrtc.md`};function c(a,o,s,c,l,u){let d=i(`DocsAD`);return n(),t(`div`,null,[o[0]||=r(`<h1 id="webrtc" tabindex="-1"><a class="header-anchor" href="#webrtc"><span>WEBRTC</span></a></h1><h2 id="什么是webrtc" tabindex="-1"><a class="header-anchor" href="#什么是webrtc"><span>什么是<a href="https://webrtc.org/" target="_blank" rel="noopener noreferrer">WEBRTC</a></span></a></h2><p>WEBRTC(Web Real-Time Communication)支持在<code>点对点</code>之间发送视频、语音和通用数据，允许开发人员构建强大的语音和视频通信解决方案。该技术可用于所有现代浏览器以及所有主要平台的本机客户端。WebRTC 背后的技术作为开放网络标准实施，并在所有主要浏览器中作为常规 JavaScript API 提供。对于原生客户端，如 Android 和 iOS 应用程序，可以使用提供相同功能的库。WebRTC 项目是开源的，并得到苹果、谷歌、微软和 Mozilla 等公司的支持。</p>`,3),e(d),o[1]||=r(`<p><img src="/imgs/program/front/webrtc/webrtc.png" alt="er"></p><h2 id="nat-network-address-translation" tabindex="-1"><a class="header-anchor" href="#nat-network-address-translation"><span>NAT(Network Address Translation)</span></a></h2><h2 id="webrtc-协议" tabindex="-1"><a class="header-anchor" href="#webrtc-协议"><span>WEBRTC 协议</span></a></h2><ul><li>STUN</li></ul><p>STUN（Simple Traversal of UDP Through NATs）允许通过 UDP 穿透 NAT。</p><ul><li>TURN</li></ul><p>TURN（Traversal Using Relay NAT），允许通过 TCP 或 UDP 方式穿透 NAT。</p><h2 id="ice" tabindex="-1"><a class="header-anchor" href="#ice"><span>ICE</span></a></h2><p>ICE（Interactive Connectivity Establishment），ICE 定义了穿越方案，类似接口框架。</p><h2 id="服务器搭建" tabindex="-1"><a class="header-anchor" href="#服务器搭建"><span>服务器搭建</span></a></h2><h2 id="获取-ip-地址" tabindex="-1"><a class="header-anchor" href="#获取-ip-地址"><span>获取 IP 地址</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>function findIP(onNewIP) {</span></span>
<span class="line"><span>  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;</span></span>
<span class="line"><span>  var pc = new myPeerConnection({iceServers: [{urls: &quot;stun:stun.l.google.com:19302&quot;}]}),</span></span>
<span class="line"><span>    noop = function() {},</span></span>
<span class="line"><span>    localIPs = {},</span></span>
<span class="line"><span>    ipRegex = /([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,</span></span>
<span class="line"><span>    key;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function ipIterate(ip) {</span></span>
<span class="line"><span>    if (!localIPs[ip]) onNewIP(ip);</span></span>
<span class="line"><span>    localIPs[ip] = true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  pc.createDataChannel(&quot;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  pc.createOffer(function(sdp) {</span></span>
<span class="line"><span>    sdp.sdp.split(&#39;\\n&#39;).forEach(function(line) {</span></span>
<span class="line"><span>      if (line.indexOf(&#39;candidate&#39;) &lt; 0) return;</span></span>
<span class="line"><span>      line.match(ipRegex).forEach(ipIterate);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    pc.setLocalDescription(sdp, noop, noop);</span></span>
<span class="line"><span>  }, noop);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  pc.onicecandidate = function(ice) {</span></span>
<span class="line"><span>    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;</span></span>
<span class="line"><span>    ice.candidate.candidate.match(ipRegex).forEach(ipIterate);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>var ul = document.createElement(&#39;ul&#39;);</span></span>
<span class="line"><span>ul.textContent = &#39;Your IPs are: &#39;</span></span>
<span class="line"><span>document.body.appendChild(ul);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function addIP(ip) {</span></span>
<span class="line"><span>  console.log(&#39;got ip: &#39;, ip);</span></span>
<span class="line"><span>  var li = document.createElement(&#39;li&#39;);</span></span>
<span class="line"><span>  li.textContent = ip;</span></span>
<span class="line"><span>  ul.appendChild(li);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>findIP(addIP);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)])}var l=a(s,[[`render`,c]]);export{o as _pageData,l as default};