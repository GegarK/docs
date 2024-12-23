# 目标设置

## Target 设置:
* -d DIRECT
Connection string for direct database connection
直接连接数据库
```
sqlmap -d mysql://USER:PASSWORD@DBMS_IP:DBMS_PORT/DATABASE_NAME
```


* -u URL, --url=URL
```
sqlmap -u http://www.example.com
```

* -l LOGFILE
Parse target(s) from Burp or WebScarab proxy log file

* -x SITEMAPURL
Parse target(s) from remote sitemap(.xml) file
从xml文件中解析目标

* -m BULKFILE       

Scan multiple targets given in a textual file
大文件读取

* -r REQUESTFILE      

Load HTTP request from a file 加载HTTP请求报文

```
sqlmap -u request_file.txt
```

* -g GOOGLEDORK       

Process Google dork results as target URLs 通过google搜索找到的url作为目标

```
sqlmap.py -g "inurl:\".php?id=1\""
```

* -c CONFIGFILE