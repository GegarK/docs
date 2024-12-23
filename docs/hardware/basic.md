# 硬件基础

::: warning DeeLMind 提示
"硬件"就类似一个人，由大脑指挥其它器官完成对应的工作。
:::

<DocsAD/>

## 什么是硬件
硬件（英文名Hardware）是由机械和光电元件等组成的各种物理装置的总称。

![er](/imgs/hardware/hardware.png)

## 大脑

* CPU

中央处理器 （英语：Central Processing Unit)

* MPU

微处理器（英语：Microprocessor）

* MCU

微控制器（英语：Microcontroller）


## 其它器官（传感器）

* 眼睛
* 胳膊
* 视频
* 喇叭
* 电机马达
* 红外传感器
* 超声波传感器

## 骨骼

* 骨架
* PCB电路板

## 神经

* 神经
* 血管
* 导线

## "硬件"类型

* FPGA
* Arduino
* 51单片机
* 树莓派、香蕉派

## "硬件"区别

* 编译器
* 编程IDE
* 硬件原理
* 调试过程

## 基础元器件

* 电阻
* 电容
* 电感
* 二极管
* 三极管
* 场效应管

## 芯片架构

* X86
* ARM
    * Cortex-A
    * Cortex-R
    * Cortex-M
* MIPS
* RISC-V
* AVR

## BootLoader
芯片首先加载的代码,[Github](https://github.com/arduino/ArduinoCore-avr/tree/master/bootloaders)

## RAM
RAM（随机存取存储器）用于临时存储程序和其他信息。当设备断电时，所有存储的数据都会消失。操作系统和当前正在运行的程序利用这种类型的存储，使这种极快且相对每千字节较贵的介质加速您的计算机使用。

## ROM
ROM（只读存储器）是一种非易失性存储器，可以永久保存数据和程序，即使在断电情况下也能保留。

## EPROM
EPROM（可擦除可编程只读存储器）是一种非易失性可重新编程的芯片，但需要紫外线来擦除芯片上的位。它们还需要比我们在编程数字电路时通常看到的更高电压。因此，EPROM不适合存储经常更改的信息。

## EEPROM
EEPROM（电可擦除可编程只读存储器）与Flash内存之间的主要区别在于，当Flash内存被擦除时，整个设备都被擦除，而EEPROM则可以擦除所需字节。EPROM和EEPROM都是可擦除和可编程的只读存储器，但它们擦除数据的方式不同

## FLASH
FLASH是一种非易失性内存，在微控制器中主要用作程序内存。

## SPI

## ICSP
* MISO
* MOSI
* VCC
* SCK	
* Reset
* GND

## 比特率

比特率在数字信道中，比特率是数字信号的传输速率，它用单位时间内传输的二进制代码的有效位(bit)数来表示，其单位为每秒比特数bit/s(bps)。

## 波特率
波特率可以被理解为单位时间内传输符号的个数（传符号率），通过不同的调制方法可以在一个符号上负载多个比特信息。

## 串行通信

串行通信技术(Serial Communication)，是指通信双方按位bit进行，遵守时序的一种通信方式。串行通信中，将数据按位依次传输， 每位数据占据固定的时间长度，仅用一根接收线和一根发送线就可以完成系统间交换信息。

## 电阻色环

## 高阻态

## 悬空态

## 上拉电阻

## 下拉电阻

## 调制解调

## PWM
PWM(Pulse-width modulation),脉冲宽度调制

![er](/imgs/hardware/pwm.jpg)

## 串口、COM口、UART口, TTL、RS-232、RS-485

## 什么是中断

## 什么是模拟数字

## 数模转换器（DAC）

## 模数转换器（ADC）