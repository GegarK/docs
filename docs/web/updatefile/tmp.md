# 上传BYPASS

https://book.hacktricks.xyz/pentesting-web/file-upload

## 不同后缀
* PHP: .php, .php2, .php3, .php4, .php5, .php6, .php7, .phps, .phps, .pht, .phtm, .phtml, .pgif, .shtml, .htaccess, .phar, .inc
* ASP: .asp, .aspx, .config, .ashx, .asmx, .aspq, .axd, .cshtm, .cshtml, .rem, .soap, .vbhtm, .vbhtml, .asa, .cer, .shtml
* Jsp: .jsp, .jspx, .jsw, .jsv, .jspf, .wss, .do, .action

## 空白截断
* %00截断(eval.php%00.jpg)
* \x00截断(eval.php\x00.jpg)
* %0a截断(eval.php%a.jpg)
* %0d截断(eval.php%d.jpg)
* %0d%0a截断(eval.php%0d%0a.jpg)
* %20截断(eval.php%20.jpg)

## 图片头修改
* PNG: "\x89PNG\r\n\x1a\n\0\0\0\rIHDR\0\0\x03H\0\xs0\x03["
* JPG: "\xff\xd8\xff"
