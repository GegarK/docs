# WebAssembly

## 什么是WebAssembly

[WebAssembly](https://webassembly.org/)（缩写为 Wasm）是一种二进制指令格式，可作为便携式编译目标，以便高性能应用程序在 Web 上运行。它是一种低级编程语言，旨在补充 JavaScript，使得浏览器能够以接近本地速度执行代码，并且为现代 Web 提供更高效的性能。

<DocsAD/>

## WebAssembly 的特点和优点

1. **高性能**：
   - WebAssembly 是一种低级的字节码格式，可以直接在浏览器的虚拟机中执行，速度接近于原生应用程序。
   - 通过高效的编译和优化技术，WebAssembly 可以提供比 JavaScript 更高的性能，尤其是在需要大量计算的应用场景中。

2. **语言中立**：
   - WebAssembly 设计为多种编程语言的编译目标。目前，许多语言（如 C、C++、Rust）都可以编译为 WebAssembly。
   - 这意味着开发者可以使用自己熟悉的语言编写代码，然后将其编译为 WebAssembly 以在 Web 上运行。

3. **安全性**：
   - WebAssembly 在一个安全的沙箱环境中运行，与 JavaScript 相同。这使得它能够在不信任的环境中运行而不会对用户的系统造成威胁。
   - 浏览器通过验证和沙箱机制，确保 WebAssembly 模块的安全性。

4. **可移植性**：
   - WebAssembly 是一种标准化的格式，由 W3C 维护。它可以在所有现代浏览器中运行，无需任何插件或扩展。
   - 由于它是跨平台的，WebAssembly 代码可以在不同的设备和操作系统上运行。

5. **易于集成**：
   - WebAssembly 可以与 JavaScript 互操作，允许开发者在 JavaScript 中调用 WebAssembly 模块，反之亦然。
   - 这使得开发者能够将现有的 JavaScript 代码与高性能的 WebAssembly 模块相结合，以优化性能。

## 使用场景

WebAssembly 适用于多种高性能计算应用场景，例如：

- **游戏开发**：高性能的 3D 游戏可以使用 WebAssembly 来提供流畅的用户体验。
- **视频处理**：实时视频编解码和处理可以使用 WebAssembly 来提高效率。
- **图像处理**：例如 Photoshop 类的在线图像编辑器，可以使用 WebAssembly 来加速图像处理。
- **科学计算**：复杂的数学和物理模拟可以使用 WebAssembly 来获得更快的计算速度。
- **跨平台应用**：将桌面或移动应用程序编译为 WebAssembly 以便在浏览器中运行。

## 示例

以下是一个简单的 WebAssembly 示例，展示了如何使用 WebAssembly 和 JavaScript 进行互操作。

### 1. 编写一个简单的 C 函数

首先，编写一个简单的 C 函数 `hello`，在控制台打印消息。

```c
// hello.c
#include <stdio.h>

void hello() {
    printf("Hello, WebAssembly!\n");
}
```

### 2. 使用 [Emscripten](https://emscripten.org/) 工具链将其编译为 WebAssembly

```shell
emcc hello.c -o hello.js -s WASM=1
```

### 3. 在 HTML 页面中加载 WebAssembly 模块

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebAssembly Example</title>
</head>
<body>
    <script>
        // 加载 WebAssembly 模块
        fetch('hello.wasm').then(response =>
            response.arrayBuffer()
        ).then(bytes =>
            WebAssembly.instantiate(bytes)
        ).then(results => {
            const instance = results.instance;
            // 调用 WebAssembly 模块中的函数
            instance.exports.hello();
        });
    </script>
</body>
</html>
```