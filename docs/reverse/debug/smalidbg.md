# SMALI动态调试


## 安卓调试APK(Smali)

* 修改androikdmanifest

```
 <application
        // 支持debug
        android:debuggable="true"
```

* 开启调试APP

```
adb shell am start -D -n com.deelmind.main.ctf/.MainActivity
```

* 端口转发

```
adb shell ps | findstr com.deelmind.main.ctf
adb forward tcp:5005 jdwp:pid
```