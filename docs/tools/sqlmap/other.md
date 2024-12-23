# 其它设置

Fingerprint:
-f, --fingerprint   Perform an extensive DBMS version fingerprint


Brute force: 爆破

--common-tables     Check existence of common tables
--common-columns    Check existence of common columns
User-defined function injection: 使用用户定义的函数注入

--udf-inject        Inject custom user-defined functions
--shared-lib=SHLIB  Local path of the shared library

File system access:  文件系统访问
--file-read=RFILE   Read a file from the back-end DBMS file system
--file-write=WFILE  Write a local file on the back-end DBMS file system
--file-dest=DFILE   Back-end DBMS absolute filepath to write to

Operating system access:  操作系统访问

--os-cmd=OSCMD      Execute an operating system command
--os-shell          Prompt for an interactive operating system shell
--os-pwn            Prompt for an OOB shell, Meterpreter or VNC
--os-smbrelay       One click prompt for an OOB shell, Meterpreter or VNC
--os-bof            Stored procedure buffer overflow exploitation
--priv-esc          Database process user privilege escalation
--msf-path=MSFPATH  Local path where Metasploit Framework is installed
--tmp-path=TMPPATH  Remote absolute path of temporary files directory
--reg-read          Read a Windows registry key value
--reg-add           Write a Windows registry key value data
--reg-del           Delete a Windows registry key value
--reg-key=REGKEY    Windows registry key
--reg-value=REGVAL  Windows registry key value
--reg-data=REGDATA  Windows registry key value data
--reg-type=REGTYPE  Windows registry key value type

