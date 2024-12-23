# VARRANT

## 虚拟机教程

[YouTube系列教程](https://www.youtube.com/watch?v=xdsbXzePYMw&list=PLgZqc0esdeS9SXSx1doEAehD0PnErucmE)
<iframe width="720px" height="480px" src="https://www.youtube.com/embed/xdsbXzePYMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[B站系列教程](https://www.bilibili.com/medialist/play/282616786?from=space&business=space_series&business_id=2061138&desc=1&spm_id_from=333.999.0.0)
<iframe src="//player.bilibili.com/player.html?aid=335853538&bvid=BV1eR4y1n78X&cid=418909366&page=1"  frameborder="no"  allowfullscreen="true" style="width:720px;height:480px"> 
</iframe>

# VAGRANT文档

::: warning DeeLMind 提示
VAGRANT 比较简单，视频都有讲解，只需查看官方文件即可。
:::

<DocsAD/>

## [官方文档](https://developer.hashicorp.com/vagrant/docs)

## 修改存储路径Windows，其它系统同理

* 环境变量VAGRANT_HOME到指定目录

```shell
举例：set VAGRANT_HOME=E:\\vagrant
```

* 复制里面内容到环境变量路径%userprofile%/.vagrant.d/
* 修改VirtualBox默认虚拟机安装位置

## 下载Box

官网下载即可

## 生成自己的Box

* VirtualBox正常配置好一台虚拟机
* 进入虚拟机安装目录执行vagrant package --base windows10_x64 --output windows10_x64.box
* vagrant box add windows10_x64 windows10_x64.box

## 命令行

```vagrant
Vagrant.configure("2") do |config|
  # 镜像Box
  config.vm.box = "windows10_x64"
  # 主机名
  config.vm.hostname = "DeeLMind"
  config.vm.communicator = "winrm"
  # 网络配置，公网配置，private为host_only不选择
  config.vm.network "public_network", ip: "192.168.100.10"
  # 设置RDP端口转发，将主机的33899端口转发到虚拟机的3389端口
  config.vm.network "forwarded_port", guest: 3389, host: 33891
  # 开启GUI true会打开VirtualBox，一般选择false
  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
  end
end
```

* vagrant up 开启虚拟机
* vagrant suspend 暂停虚拟机
* vagrant halt 关闭虚拟机
* vagrant reload 重新加载配置文件
