# 函数结构

```
int strcmp_m(const char* p1, const char* p2)
{
	const unsigned char* s1 = (const unsigned char*)p1;
	const unsigned char* s2 = (const unsigned char*)p2;
	unsigned char c1, c2;
	do
	{
		c1 = (unsigned char)*s1++;
		c2 = (unsigned char)*s2++;
		if (c1 == '\0')
			return c1 - c2;
	} while (c1 == c2);
	return c1 - c2;
}
```

* 函数参数

* 函数返回

* 局部变量

![er](/imgs/rev/function.png)

## [函数类型](https://learn.microsoft.com/en-us/cpp/cpp/stdcall?view=msvc-170)

* [__stdcall](https://learn.microsoft.com/zh-cn/cpp/build/reference/gd-gr-gv-gz-calling-convention?view=msvc-170)

* __cdecl

* __fastcall

* __thiscall