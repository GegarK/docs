# Node.js

[Node.js](https://nodejs.org/) 是一个基于 [Chrome V8](https://v8.dev/) 引擎的 JavaScript 运行时环境，允许开发者在服务器端运行 JavaScript 代码。它的异步、非阻塞 I/O 模型使得 Node.js 非常适合处理高并发的应用程序，如 Web 服务器、实时聊天应用、RESTful API 等。


## 发展历程

- **2009 年**：Ryan Dahl 发布了 Node.js。最初版本的 Node.js 支持基本的文件系统 I/O 和网络功能，基于 Google 的 V8 引擎，支持异步编程模式。

- **2010 年**：Node.js 社区开始发展，出现了 npm（Node Package Manager）作为包管理工具，极大地促进了 Node.js 的生态系统发展。

- **2011 年**：Node.js 开始得到广泛关注，大量公司和开发者开始使用 Node.js 开发应用程序。

- **2014 年**：io.js 项目从 Node.js 分叉出来，意图推进 Node.js 的开发，特别是在社区参与和更新速度方面。

- **2015 年**：Node.js 基金会成立，Node.js 和 io.js 合并为 Node.js v4.0，标志着社区和企业的进一步团结。

- **2018 年及以后**：Node.js 持续更新，加入了对最新 ECMAScript 标准的支持，同时保持了对性能优化的关注。Node.js 在微服务、物联网（IoT）、无服务器计算等新兴领域中得到广泛应用。

## Node.js 的特点

- **异步非阻塞 I/O**：Node.js 的 I/O 操作是异步的，不会阻塞程序执行，适合高并发应用。
- **单线程事件驱动**：使用单线程处理事件循环，避免多线程编程的复杂性。
- **跨平台支持**：支持在 Windows、macOS 和 Linux 上运行。
- **npm 生态系统**：拥有丰富的开源库和工具，通过 npm 可以方便地管理和使用这些包。

## Node.js 工具

* npm/pnpm/yarn/cnpm 包管理工具
* nvm nodejs版本管理

## Node.js 库导入

* 直接导入

```js
<script src="https://deelmind.com/demo.js"></script>
```

* ES6模块导入

ES6 模块导入使用 import 语法，通常用于现代前端框架如 React、Vue 或者 Node.js 环境下

```js
"type": "module",
export function add(a, b) {
    return a + b;
}

import axios from 'axios';
```

* CommonJS模块导入

CommonJS 是 Node.js 的模块系统，使用 require 语法

```js
function add(a, b) {
    return a + b;
}
  
module.exports = add;

const axios = require('axios');
```

* AMD模块导入
* UMD模块导入