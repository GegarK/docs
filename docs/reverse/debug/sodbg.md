# SO动态调试


* 文件上传

```
android_server在IDA目录dbgsrv下,找到对应版面然后将这个软件安装到调试平台上，也就是Android手机上
adb push android_server /data/local/tmp
```

* 权限提升

```
执行提升权限命令 su
然后授予可执行权限，因为777方便我就写这个权限了
chmod 777 /data/local/tmp/android_server
```

* 执行/data/local/tmp/android_server

* 端口转发

```
adb forward tcp:23946 tcp:23946
```