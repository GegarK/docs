# JavaScript

## 什么是 [JavaScript](https://www.w3schools.com/js/default.asp)

JavaScript 是一种轻量级、解释型的编程语言，最初是为网页开发设计的。它是 Web 前端开发的三大支柱之一（与 HTML 和 CSS 共同构成）。JavaScript 允许开发者在网页中实现动态内容，比如表单验证、动画、用户交互等。随着时间的推移，JavaScript 已经发展成为一种通用编程语言，不仅在浏览器中运行，还可以在服务器端（如使用 Node.js）运行。

JavaScript 是一种基于原型的语言，支持面向对象编程、函数式编程以及事件驱动编程。其灵活性和强大功能使其成为现代 Web 开发中不可或缺的工具。

### JavaScript 的基本语法

```javascript
// 示例：输出 "Hello, World!" 到控制台
console.log("Hello, World!");

// 示例：定义一个函数并调用它
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));

```

## Javascript发展历史

* 1995 年: JavaScript 由网景公司（Netscape）的程序员 Brendan Eich 在仅仅 10 天内设计并开发完成。最初的名字是 Mocha，随后改名为 LiveScript，最终定名为 JavaScript。

* 1996 年: 为了推广 JavaScript，网景将其提交给 ECMA（欧洲计算机制造商协会）进行标准化。这导致了 ECMAScript 标准的出现，JavaScript 是 ECMAScript 标准的实现之一。

* 1997 年: ECMAScript 1.0 发布，确立了 JavaScript 的核心语法和功能。

* 1999 年: ECMAScript 3 发布，这是一个重要版本，定义了大部分现代 JavaScript 的核心功能，包括正则表达式、try/catch 异常处理机制等。

* 2009 年: ECMAScript 5 发布，加入了严格模式（strict mode）和其他语言增强特性。

* 2015 年: ECMAScript 6（也称为 ES6 或 ECMAScript 2015）发布，这是 JavaScript 语言史上最大的一次升级。ES6 引入了类（class）、模块（modules）、箭头函数（arrow functions）、let 和 const 声明、模板字符串（template literals）、默认参数等诸多新特性。

* 2016 年起: ECMAScript 开始采用年度发布计划，每年都会推出新的 ECMAScript 版本（如 ES2016、ES2017 等），持续改进语言的特性和性能。

# [JavaScript 版本区别](https://ecma-international.org/)

## ECMAScript 5 (ES5) - 2009
- **日期**: 2009 年发布。
- **新特性**:
  - **严格模式** (`"use strict"`)：通过启用严格模式，可以捕捉更容易被忽视的错误，并避免一些不安全的特性。
  - **原生 JSON 支持**：内置 `JSON.parse()` 和 `JSON.stringify()` 方法。
  - **数组方法**：如 `forEach()`、`map()`、`filter()`、`reduce()`。
  - **对象属性**：`Object.defineProperty()`、`Object.keys()`、`Object.create()`。
  - **Getter 和 Setter**：在对象中定义 `getter` 和 `setter`。

## ECMAScript 6 (ES6/ES2015) - 2015
- **日期**: 2015 年发布。
- **新特性**:
  - **箭头函数** (`=>`)：更简洁的函数定义方式，并且不绑定 `this`。
  - **`let` 和 `const` 声明**：`let` 用于块作用域变量，`const` 用于常量。
  - **类（Class）**：基于原型链的类定义语法糖。
  - **模块（Modules）**：引入 `import` 和 `export` 关键字，用于模块化开发。
  - **模板字符串**：使用反引号 `` ` `` 定义多行字符串和嵌入表达式。
  - **默认参数**：函数参数可以有默认值。
  - **解构赋值**：允许从数组和对象中提取数据赋给变量。
  - **Promise**：用于异步操作的更好方式。
  - **符号（Symbol）**：一种新的基本数据类型。