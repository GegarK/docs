# OAuth漏洞

## 什么是[OAuth2认证](https://oauth.net/2/)
![OAUTH](/imgs/web/exploits/permission/oauth/oauth-2-flow-diagram.png)

## OAuth2分类
* implicit
* authorization code
* password
* client credentials
* refresh token

<DocsAD/>

## OAuth2 implicit
* 第一步 跳转到授权网站
```JS
GET /social-login
```
![OAUTH](/imgs/web/exploits/permission/oauth/redirect.png)

用户名密码登录

![OAUTH](/imgs/web/exploits/permission/oauth/auth.png)

* 第二步 获取授权码

```JS
GET /auth?client_id=neivpmi71bz7h7wiosar2&redirect_uri=https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback&response_type=token&nonce=814077241&scope=openid%20profile%20email HTTP/1.1
Host: oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net
Cookie: _session=gAhcfl4Hb04WDf_y1ZOeI; _session.legacy=gAhcfl4Hb04WDf_y1ZOeI
```

```JS
POST /interaction/30HW15ukE9HP7NxVOnW-G/confirm HTTP/1.1
Host: oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net
Cookie: _interaction=30HW15ukE9HP7NxVOnW-G; _session=gAhcfl4Hb04WDf_y1ZOeI; _session.legacy=gAhcfl4Hb04WDf_y1ZOeI
Origin: https://oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net
```


```JS
HTTP/1.1 302 Found
X-Powered-By: Express
Pragma: no-cache
Cache-Control: no-cache, no-store
Set-Cookie: _interaction_resume=; path=/auth/30HW15ukE9HP7NxVOnW-G; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=lax; secure; httponly
Set-Cookie: _session=OEnTFndbnoasjyORmdgHX; path=/; expires=Wed, 16 Mar 2022 08:09:34 GMT; samesite=none; secure; httponly
Set-Cookie: _session.legacy=OEnTFndbnoasjyORmdgHX; path=/; expires=Wed, 16 Mar 2022 08:09:34 GMT; secure; httponly
Location: https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback#access_token=vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV&expires_in=3600&token_type=Bearer&scope=openid%20profile%20email
Content-Type: text/html; charset=utf-8
Date: Wed, 02 Mar 2022 08:09:34 GMT
Connection: close
Content-Length: 459

Redirecting to <a href="https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback#access_token=vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV&amp;expires_in=3600&amp;token_type=Bearer&amp;scope=openid%20profile%20email">https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback#access_token=vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV&amp;expires_in=3600&amp;token_type=Bearer&amp;scope=openid%20profile%20email</a>.
```
* 第三步 获取access token

```JS
GET /oauth-callback HTTP/1.1
Host: ac401ffa1e91fb3ac01854c700520092.web-security-academy.net
Cookie: session=dYZki6hv0EfUUg2nULqDxHUf70htwzCP
```

```JS
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Connection: close
Content-Length: 734

<script>
const urlSearchParams = new URLSearchParams(window.location.hash.substr(1));
const token = urlSearchParams.get('access_token');
fetch('https://oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net/me', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
})
.then(r => r.json())
.then(j => 
    fetch('/authenticate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: j.email,
            username: j.sub,
            token: token
        })
    }).then(r => document.location = '/'))
</script>
```

* 第四步 获取资源

```JS
GET /me HTTP/1.1
Host: oauth-ac4c1fd21e8afbfdc06854a902f800de.web-security-academy.net
Sec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="92"
Authorization: Bearer vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV
```

```JS
HTTP/1.1 200 OK
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Origin: https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net
Access-Control-Expose-Headers: WWW-Authenticate
Pragma: no-cache
Cache-Control: no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Wed, 02 Mar 2022 08:09:38 GMT
Connection: close
Content-Length: 88

{"sub":"wiener","name":"Peter Wiener","email":"wiener@hotdog.com","email_verified":true}
```

```JS
POST /authenticate HTTP/1.1
Host: ac401ffa1e91fb3ac01854c700520092.web-security-academy.net
Cookie: session=dYZki6hv0EfUUg2nULqDxHUf70htwzCP
Content-Length: 103
Sec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="92"
Accept: application/json
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36
Content-Type: application/json
Origin: https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://ac401ffa1e91fb3ac01854c700520092.web-security-academy.net/oauth-callback
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Connection: close

{"email":"wiener@hotdog.com","username":"wiener","token":"vGQhDtCFPnvSWSJPOHpkBu_8JJGNspW97D9qKcyr4hV"}
```

## OAuth2 code

```JS
GET /auth?client_id=kxz97it442c8z2z19j7ep&state=deelmind&redirect_uri=https://ac7c1f611feaab85c08336f100ab0002.web-security-academy.net/oauth-login&response_type=code&scope=openid%20profile%20email HTTP/1.1
Host: oauth-ac601f871fdbabd8c0ad363d0251009d.web-security-academy.net
```

```JS
GET /oauth-login?code=-DaIJjB8YSM_9358H6lfdPZgd_OrhwYSXD1ZrS4G0Wg&state=deelmind HTTP/1.1
Host: ac7c1f611feaab85c08336f100ab0002.web-security-academy.net
```
