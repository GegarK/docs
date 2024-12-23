# JWT漏洞

## 什么是JWT
JSON Web Token (JWT) 是一个开放标准 ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519))，它定义了一种紧凑且自包含的方式，用于在各方之间安全地传输信息作为 JSON 对象。 此信息可以验证和信任，因为它是数字签名的。 JWT 可以使用密钥（使用 HMAC 算法）或使用 RSA 或 ECDSA 的公钥/私钥对进行签名。

<DocsAD/>

![JWT格式](/imgs/web/exploits/permission/jwt/jwtall.jpg)
## JWT格式
```JS
Header.Payload.Signature
```
![JWT格式](/imgs/web/exploits/permission/jwt/jwt.jpeg)
* JWT Header
```JS
{"alg":"加密算法","typ":"JWT"}
```
* JWT Payload
```JS
iss: The issuer of the token
sub: The subject of the token
aud: The audience of the token
exp: JWT expiration time defined in Unix time
nbf: "Not before" time that identifies the time before which the JWT must not be accepted for processing
iat: "Issued at" time, in Unix time, at which the token was issued
jti: JWT ID claim provides a unique identifier for the JWT
自定义其它字段
```
* JWT Signature
```JS
Signature = HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload),"secret")
```
## JWT 校验过程
![JWT格式](/imgs/web/exploits/permission/jwt/jwtprocess.png)
## 潜在漏洞
* 签名未校验
* 算法被篡改
* 敏感信息泄露
* 加密算法不安全
* 伪造密钥(CVE-2018-0114)
```JS
{
  "typ": "JWT",
  "alg": "RS256",
  "jwk": {
    "kty": "RSA",
    "kid": "TEST",
    "use": "sig",
    "e":   "AQAB",
    "n":   "axUj"
  }
}
```