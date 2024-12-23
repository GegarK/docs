import{_ as s,K as l,L as c,M as e,N as n,a5 as i,W as t,F as a}from"./framework-edebdfe1.js";const o="/imgs/program/front/webrtc/webrtc.png",v={},u=e("h1",{id:"webrtc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webrtc","aria-hidden":"true"},"#"),n(" WEBRTC")],-1),m={id:"什么是webrtc",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#什么是webrtc","aria-hidden":"true"},"#",-1),h={href:"https://webrtc.org/",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[n("WEBRTC(Web Real-Time Communication)支持在"),e("code",null,"点对点"),n("之间发送视频、语音和通用数据，允许开发人员构建强大的语音和视频通信解决方案。该技术可用于所有现代浏览器以及所有主要平台的本机客户端。WebRTC 背后的技术作为开放网络标准实施，并在所有主要浏览器中作为常规 JavaScript API 提供。对于原生客户端，如 Android 和 iOS 应用程序，可以使用提供相同功能的库。WebRTC 项目是开源的，并得到苹果、谷歌、微软和 Mozilla 等公司的支持。")],-1),f=t('<p><img src="'+o+`" alt="er" loading="lazy"></p><h2 id="nat-network-address-translation" tabindex="-1"><a class="header-anchor" href="#nat-network-address-translation" aria-hidden="true">#</a> NAT(Network Address Translation)</h2><h2 id="webrtc协议" tabindex="-1"><a class="header-anchor" href="#webrtc协议" aria-hidden="true">#</a> WEBRTC协议</h2><ul><li>STUN</li></ul><p>STUN（Simple Traversal of UDP Through NATs）允许通过UDP穿透NAT。</p><ul><li>TURN</li></ul><p>TURN（Traversal Using Relay NAT），允许通过TCP或UDP方式穿透NAT。</p><h2 id="ice" tabindex="-1"><a class="header-anchor" href="#ice" aria-hidden="true">#</a> ICE</h2><p>ICE（Interactive Connectivity Establishment），ICE定义了穿越方案，类似接口框架。</p><h2 id="服务器搭建" tabindex="-1"><a class="header-anchor" href="#服务器搭建" aria-hidden="true">#</a> 服务器搭建</h2><h2 id="获取ip地址" tabindex="-1"><a class="header-anchor" href="#获取ip地址" aria-hidden="true">#</a> 获取IP地址</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function findIP(onNewIP) {
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({iceServers: [{urls: &quot;stun:stun.l.google.com:19302&quot;}]}),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

  function ipIterate(ip) {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  }
  
  pc.createDataChannel(&quot;&quot;);
  
  pc.createOffer(function(sdp) {
    sdp.sdp.split(&#39;\\n&#39;).forEach(function(line) {
      if (line.indexOf(&#39;candidate&#39;) &lt; 0) return;
      line.match(ipRegex).forEach(ipIterate);
    });
    pc.setLocalDescription(sdp, noop, noop);
  }, noop);
  
  pc.onicecandidate = function(ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
  };
}



var ul = document.createElement(&#39;ul&#39;);
ul.textContent = &#39;Your IPs are: &#39;
document.body.appendChild(ul);

function addIP(ip) {
  console.log(&#39;got ip: &#39;, ip);
  var li = document.createElement(&#39;li&#39;);
  li.textContent = ip;
  ul.appendChild(li);
}

findIP(addIP);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function _(C,T){const d=a("ExternalLinkIcon"),r=a("DocsAD");return l(),c("div",null,[u,e("h2",m,[b,n(" 什么是"),e("a",h,[n("WEBRTC"),i(d)])]),p,i(r),f])}const x=s(v,[["render",_],["__file","webrtc.html.vue"]]);export{x as default};
