# APKTOOL


* 解包

```
java -jar apktool.jar d  src.apk -o out
```

* 打包

```
java -jar apktool.jar b out
```

* 对齐

```
.\zipalign.exe -v 4 src.apk dst.apk
```

* 签名

```
java -jar .\apksigner.jar  sign --key .\testkey.pk8 --cert .\testkey.x509.pem .\dst.apk
```