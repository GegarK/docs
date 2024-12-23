# HDMI信号泄露

## 什么是[HDMI](https://zh.wikipedia.org/wiki/HDMI)

HDMI（High-Definition Multimedia Interface，高定义多媒体接口）是一种用于传输高质量数字视频和音频信号的接口。它被广泛应用于电视、显示器、电脑、游戏机和其他消费电子设备之间的连接。

* 标准 HDMI（Type A）：最常见的 HDMI 接口类型，应用于大多数电视、显示器和AV设备。
* Mini HDMI（Type C）：比标准 HDMI 较小，常用于便携设备，如相机和平板电脑。
* Micro HDMI（Type D）：比 Mini HDMI 更小，主要用于超便携设备，如智能手机。
* Type E：用于汽车中的 HDMI 连接，具有特殊的锁定机制和抗干扰设计。

## 什么是HDCP

HDCP（High-bandwidth Digital Content Protection，高带宽数字内容保护）是一种由英特尔公司开发的数字版权保护技术，旨在保护通过 HDMI、DVI 和其他数字接口传输的音视频内容。HDCP 的主要目标是防止未经授权的设备从数字连接中复制或截取高质量的数字内容。

1. **认证**：
   - 发送设备（如蓝光播放器、游戏机）和接收设备（如电视、显示器）在建立连接时会进行握手过程，以验证双方是否都支持 HDCP。
   - 这个握手过程使用称为密钥交换的机制，其中设备使用一组受信任的密钥来相互认证。

2. **加密**：
   - 发送设备将内容加密，并通过 HDMI 或其他支持 HDCP 的接口传输数据。
   - 加密过程使用动态加密密钥，使得每次连接都会生成不同的加密密钥，从而提高安全性。

3. **解密**：
   - 接收设备在接收到加密数据后，使用认证过程中交换的密钥进行解密，以恢复原始内容并进行播放。

## HDMI信号泄露

* [https://github.com/martinmarinov/TempestSDR](https://github.com/martinmarinov/TempestSDR)
* [https://github.com/emidan19/deep-tempest](https://github.com/emidan19/deep-tempest)