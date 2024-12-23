# 优化设置

Optimization: 优化

-o                  Turn on all optimization switches
开启所有优化选项


--predict-output    Predict common queries output
没有用过

--keep-alive        Use persistent HTTP(s) connections
--proxy 不兼容

--null-connection   Retrieve page l ength without actual HTTP response body
--text-only 不兼容
curl baidu.com -i -H "Range: bytes=0-1023"


--threads=THREADS   Max number of concurrent HTTP(s) requests (default 1)