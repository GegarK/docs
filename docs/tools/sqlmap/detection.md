# 探测发现

Detection: 发现

--level=LEVEL       Level of tests to perform (1-5, default 1)
--risk=RISK         Risk of tests to perform (1-3, default 1)
--string=STRING     String to match when query is evaluated to True
设置一些返回页面中的字符，页面返回这个字符，说明我们的注入判断语句是正确的


--not-string=NOT..  String to match when query is evaluated to False
设置返回页面没返回某个字符，就是判断错误

    
--regexp=REGEXP     Regexp to match when query is evaluated to True
用正则匹配告诉sqlmap返回什么是正确的

  
--code=CODE         HTTP code to match when query is evaluated to True
用HTTP的响应码来判断注入判断语句是正确的，例如，响应200的时候为真，响应401的时候为假，可以添加参数--code=200

--text-only         Compare pages based only on the textual content
真条件下的返回页面与假条件下返回页面是不同可以使用这个


--titles            Compare pages based only on their titles
真条件下的返回页面的标题与假条件下返回页面的标题是不同可以使用这个