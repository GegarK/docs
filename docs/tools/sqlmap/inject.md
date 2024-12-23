# 注入设置

Injection: 注入
-p TESTPARAMETER    Testable parameter(s)
设定测试的参数，sqlmap默认测试所有的GET和POST参数，当--level的值大于等于2的时候也会测试HTTP Cookie头的值，当大于等于3的时候也会测试User-Agent和HTTP Referer头的值。
这里就给你自己设定了 例如： -p "id,user-agent"

--skip=SKIP         Skip testing for given parameter(s)
--skip-static       Skip testing parameters that not appear dynamic
--dbms=DBMS         Force back-end DBMS to this value
指定后端的数据库类型（mysql，mssql等）


--dbms-cred=DBMS..  DBMS authentication credentials (user:password)
指定数据库的认证信息(user:password)

    
--os=OS             Force back-end DBMS operating system to this value
指定后台的系统类型


--invalid-bignum    Use big numbers for invalidating values
    
--invalid-logical   Use logical operations for invalidating values
--invalid-string    Use random strings for invalidating values
--no-cast           Turn off payload casting mechanism
--no-escape         Turn off string escaping mechanism
--prefix=PREFIX     Injection payload prefix string
--suffix=SUFFIX     Injection payload suffix string
--tamper=TAMPER     Use given script(s) for tampering injection data