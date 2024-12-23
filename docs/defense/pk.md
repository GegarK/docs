# 端口敲门

## 什么是端口敲门（Port Knocking）？
端口敲门是一种基于网络层的安全策略，通过监听一系列预定义的端口访问顺序来动态打开防火墙的特定端口。只有按正确顺序“敲击”了指定端口的客户端，才能获得访问特定服务（如SSH）的权限。

## 为什么使用端口敲门？
- **提高安全性**：隐藏服务端口，使其不被端口扫描工具检测到，从而降低暴露面。
- **防止暴力攻击**：通过动态开启端口，减少未授权用户的攻击机会。
- **灵活性**：只需修改端口敲门规则，即可对服务进行灵活控制。

## 如何配置端口敲门

### 1. 安装`knockd`
在大多数Linux发行版上，`knockd`工具可以通过包管理器安装。

```bash
# 在Debian/Ubuntu上安装
sudo apt install knockd

# 在CentOS/RHEL上安装
sudo yum install epel-release
sudo yum install knock
```
### 2. 配置`knockd`/etc/knockd.conf

```config
[options]
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
```

* sequence：定义了端口敲门的顺序。例如，访问7000、8000、9000端口。
* seq_timeout：定义了在几秒钟内必须完成所有敲门请求。
* command：敲门成功后执行的命令。在openSSH部分，它允许指定IP访问SSH端口。
* tcpflags：定义了检测的TCP标志（如syn表示同步标志）。

### 3. 启动`knockd`

```sh
# 在Debian/Ubuntu上
sudo systemctl enable knockd
sudo systemctl start knockd

# 在CentOS/RHEL上
sudo systemctl enable knockd
sudo systemctl start knockd
```

4. 使用端口敲门

```sh
knock 192.168.1.100 7000 8000 9000
```

5. 关闭端口敲门

```sh
knock 192.168.1.100 9000 8000 7000
```
