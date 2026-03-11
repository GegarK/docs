# 杂项设置

Miscellaneous: 杂项
-z MNEMONICS Use short mnemonics (e.g. "flu,bat,ban,tec=EU")
--alert=ALERT Run host OS command(s) when SQL injection is found
如果存在注入，运行系统命令

--answers=ANSWERS Set question answers (e.g. "quit=N,follow=N")
--beep Beep on question and/or when SQL injection is found
哔一声，找到注入的话

--cleanup Clean up the DBMS from sqlmap specific UDF and tables
--dependencies Check for missing (non-core) sqlmap dependencies
--disable-coloring Disable console output coloring
关闭颜色的输出

--gpage=GOOGLEPAGE Use Google dork results from specified page number
指定 google 搜索的页码，找 sqlmap 注入目标

--identify-waf Make a thorough testing for a WAF/IPS/IDS protection
尝试辨认 WAF/IPS/IDS 的类型

--mobile Imitate smartphone through HTTP User-Agent header
使用手机 User-Agent

--offline Work in offline mode (only use session data)
--page-rank Display page rank (PR) for Google dork results
显示该 url，google 的 rank 值

--purge-output Safely remove all content from output directory
安全地删除 output 文件夹

--skip-waf Skip heuristic detection of WAF/IPS/IDS protection
跳过探测 WAF/IPS/IDS

--smart Conduct thorough tests only if positive heuristic(s)
--shell Prompt for an interactive sqlmap shell
交互式的 sqlmap shell

--tmp-dir=TMPDIR Local directory for storing temporary files
设置临时文件目录

--wizard Simple wizard interface for beginner users
提供简单的向导
