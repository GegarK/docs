# 通用设置

General: 通用的
-s SESSIONFILE      Load session from a stored (.sqlite) file
-t TRAFFICFILE      Log all HTTP traffic into a textual file
--batch             Never ask for user input, use the default behaviour
不要询问，使用默认选项

--binary-fields=..  Result fields having binary values (e.g. "digest")
--charset=CHARSET   Force character encoding used for data retrieval
--crawl=CRAWLDEPTH  Crawl the website starting from the target URL
--crawl-exclude=..  Regexp to exclude pages from crawling (e.g. "logout")
--csv-del=CSVDEL    Delimiting character used in CSV output (default ",")
--dump-format=DU..  Format of dumped data (CSV (default), HTML or SQLITE)
--eta               Display for each output the estimated time of arrival
--flush-session     Flush session files for current target
--forms             Parse and test forms on target URL
--fresh-queries     Ignore query results stored in session file
--hex               Use DBMS hex function(s) for data retrieval
--output-dir=OUT..  Custom output directory path
--parse-errors      Parse and display DBMS error messages from responses
--save=SAVECONFIG   Save options to a configuration INI file
--scope=SCOPE       Regexp to filter targets from provided proxy log
--test-filter=TE..  Select tests by payloads and/or titles (e.g. ROW)
--test-skip=TEST..  Skip tests by payloads and/or titles (e.g. BENCHMARK)
--preprocess
--postprocess
--update            Update sqlmap