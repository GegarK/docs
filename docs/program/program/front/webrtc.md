# WEBRTC

## 什么是[WEBRTC](https://webrtc.org/)

WEBRTC(Web Real-Time Communication)支持在`点对点`之间发送视频、语音和通用数据，允许开发人员构建强大的语音和视频通信解决方案。该技术可用于所有现代浏览器以及所有主要平台的本机客户端。WebRTC 背后的技术作为开放网络标准实施，并在所有主要浏览器中作为常规 JavaScript API 提供。对于原生客户端，如 Android 和 iOS 应用程序，可以使用提供相同功能的库。WebRTC 项目是开源的，并得到苹果、谷歌、微软和 Mozilla 等公司的支持。

<DocsAD/>

![er](/imgs/program/front/webrtc/webrtc.png)

## NAT(Network Address Translation)

## WEBRTC协议
* STUN

STUN（Simple Traversal of UDP Through NATs）允许通过UDP穿透NAT。


* TURN

TURN（Traversal Using Relay NAT），允许通过TCP或UDP方式穿透NAT。

## ICE

ICE（Interactive Connectivity Establishment），ICE定义了穿越方案，类似接口框架。

## 服务器搭建

## 获取IP地址

```
function findIP(onNewIP) {
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({iceServers: [{urls: "stun:stun.l.google.com:19302"}]}),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

  function ipIterate(ip) {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  }
  
  pc.createDataChannel("");
  
  pc.createOffer(function(sdp) {
    sdp.sdp.split('\n').forEach(function(line) {
      if (line.indexOf('candidate') < 0) return;
      line.match(ipRegex).forEach(ipIterate);
    });
    pc.setLocalDescription(sdp, noop, noop);
  }, noop);
  
  pc.onicecandidate = function(ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
  };
}



var ul = document.createElement('ul');
ul.textContent = 'Your IPs are: '
document.body.appendChild(ul);

function addIP(ip) {
  console.log('got ip: ', ip);
  var li = document.createElement('li');
  li.textContent = ip;
  ul.appendChild(li);
}

findIP(addIP);
```