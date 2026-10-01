# OpenSSL工具

[OpenSSL](https://www.openssl.org/) 是一个强大的开源工具，用于实现 SSL/TLS 加密协议，同时提供各种加密算法、证书生成和验证等功能。以下是对 OpenSSL 常用功能的详细介绍及示例。

## 安装 [OpenSSL](https://wiki.openssl.org/index.php/Binaries)

## RSA

* 生成密钥

```sh
openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048
```

* 提取公钥

```sh
openssl rsa -in private.pem -pubout -out public.pem
```

* 查看私钥

```sh
openssl rsa -in private.pem -text -noout
```

* 查看公钥

```sh
openssl rsa -in public.pem -pubin -text -noout
```

* 公钥加密

```sh
openssl pkeyutl -encrypt -inkey public.pem -pubin -in plaintext.txt -out encrypted.bin
```

* 私钥解密

```sh
openssl pkeyutl -decrypt -inkey private.pem -in encrypted.bin -out decrypted.txt
```

* PEM -> DER

```
openssl rsa -in private.pem -outform DER -out private.der
```

## ECC

* 生成密钥

```sh
openssl ecparam -name prime256v1 -genkey -noout -out private_key.pem
```

* 提取公钥

```sh
openssl ec -in private_key.pem -pubout -out public_key.pem
```

* 查看私钥

```sh
openssl ec -in private_key.pem -text -noout
```