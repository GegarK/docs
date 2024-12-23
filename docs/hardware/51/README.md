# 51单片机

## 什么是51单片机
51单片机是对兼容英特尔8051指令系统的单片机的统称。

<DocsAD/>

```c
#include <reg52.h>			 //定义单片机的一些特殊功能寄存器
sbit led=P2^0;				//定义指定LED灯的管脚

void delay(unsigned int i)			//延时函数。unsigned int定义无符号整型，范围0-655535
{
	while(i--);	//i=1时，大约延时10us
}

void main()       //主函数，程序从这里开始执行
{
	while(1)
	{
		led=0;        //0表示低电平，共阳极二极管点亮
		delay(50000); //大约延时450ms
		led=1;        //1表示高电平，LED熄灭
		delay(50000); //大约延时450ms	
	}		
}
```