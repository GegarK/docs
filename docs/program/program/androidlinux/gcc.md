# GCC

## 什么是 GCC

GCC 是 GNU 编译器套件的缩写。它是一个功能强大、高效的跨平台编译器，可以编译多种编程语言。最初，GCC 是作为 C 语言编译器（GNU C Compiler）而开发的，但现在它还支持其他语言，如 C++、Java、Pascal 等。

<DocsAD/>

## 安装命令

```ubuntu
sudo apt install build-essential
```

## 命令行

- 编译 C 语言程序：

```
gcc -o output_file input_file.c
```

其中，`output_file`是编译后的可执行文件名，`input_file.c`是源代码文件名。

- 编译 debug 版本：

```
gcc -g -o output_file input_file.c
```

其中，`output_file`是编译后的可执行文件名，`input_file.c`是源代码文件名。

- 编译 release 版本：

```
gcc -o output_file input_file.c
```

其中，`output_file`是编译后的可执行文件名，`input_file.c`是源代码文件名。

- 只执行预处理：

```
gcc -E source_file.c
```

- 只执行到源代码到汇编代码的转换：

```
gcc -S source_file.c
```

- 只执行到编译，输出目标文件：

```
gcc -c source_file.c
```

- 编译多个文件：

```
gcc -o output_file input_file1.c input_file2.c
```

- 生成静态库：

```
gcc -c foo.c
ar rcs libfoo.a foo.o
```

- 查看编译器版本：

```
gcc --version
```
