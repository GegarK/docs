# 注入技术


Techniques: 注入技术
IN / OUT
--technique=TECH    SQL injection techniques to use (default "BEUSTQ")
        指定注入技术，默认使用全部(default "BEUSTQ")，那个含义如下：
        # B: Boolean-based blind SQL injection
        # E: Error-based SQL injection
        # U: UNION query SQL injection
        # S: Stacked queries SQL injection
        # T: Time-based blind SQL injection
        # Q: Inline SQL injection

    
--time-sec=TIMESEC  Seconds to delay the DBMS response (default 5)
使用基于时间的盲注时，设置的数据库延迟，默认是5


--union-cols=UCOLS  Range of columns to test for UNION query SQL injection
设置联合查询列的数目的范围 10-20

    
--union-char=UCHAR  Character to use for bruteforcing number of columns
设定union查询使用的字符，默认使用NULL

    
--union-from=UFROM  Table to use in FROM part of UNION query SQL injection
--dns-domain=DNS..  Domain name used for DNS exfiltration attack
--second-order=S..  Resulting page URL searched for second-order response
