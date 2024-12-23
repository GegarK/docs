# 枚举设置

Enumeration:
-a, --all           Retrieve everything

-b, --banner        Retrieve DBMS banner
--current-user      Retrieve DBMS current user
--current-db        Retrieve DBMS current database
--hostname          Retrieve DBMS server hostname
--is-dba            Detect if the DBMS current user is DBA
检测是不是dba，就是root权限

--users             Enumerate DBMS users
--passwords         Enumerate DBMS users password hashes
枚举数据库用户的哈希值

--privileges        Enumerate DBMS users privileges
枚举数据库用户的权限

--roles             Enumerate DBMS users roles
枚举数据库用户的角色

--dbs               Enumerate DBMS databases
--tables            Enumerate DBMS database tables
--columns           Enumerate DBMS database table columns
--schema            Enumerate DBMS schema
--count             Retrieve number of entries for table(s)
--dump              Dump DBMS database table entries
--dump-all          Dump all DBMS databases tables entries
--search            Search column(s), table(s) and/or database name(s)
--comments          Retrieve DBMS comments
-D DB               DBMS database to enumerate
-T TBL              DBMS database table(s) to enumerate
-C COL              DBMS database table column(s) to enumerate
-X EXCLUDECOL       DBMS database table column(s) to not enumerate
指定不枚举那个列

-U USER             DBMS user to enumerate
--exclude-sysdbs    Exclude DBMS system databases when enumerating tables
--pivot-column=P..  Pivot column name
--where=DUMPWHERE   Use WHERE condition while table dumping
--start=LIMITSTART  First query output entry to retrieve
指定开始从第几行开始输出，如--start=3，前两行就不输出了

--stop=LIMITSTOP    Last query output entry to retrieve
指定从第几行开始停止输出

--first=FIRSTCHAR   First query output word character to retrieve
--last=LASTCHAR     Last query output word character to retrieve
--sql-query=QUERY   SQL statement to be executed
--sql-shell         Prompt for an interactive SQL shell
--sql-file=SQLFILE  Execute SQL statements from given file(s)