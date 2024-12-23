# Tauri(UI)

[Tauri](https://tauri.app/) 是一个轻量级的跨平台桌面应用开发框架，允许使用现代前端框架（如 React、Vue.js、Svelte）和 Rust 后端一起构建桌面应用。与 Electron 类似，Tauri 利用 Web 技术来渲染前端，但它的资源占用相对较小，且更注重安全性。

<DocsAD/>

## Tauri 的主要特点

1. **小尺寸**：Tauri 编译的应用体积较小，通常比 Electron 应用体积小得多，因为它使用了系统的 WebView，而不是捆绑一个完整的浏览器。
   
2. **安全性**：Tauri 强调安全性，提供了多种机制来防止应用中的恶意代码运行，允许精细控制文件系统访问等操作。

3. **性能**：Tauri 应用使用 WebView 渲染前端，Rust 作为后端语言具有高性能的优势，尤其在 CPU 密集型任务中表现优异。

4. **跨平台支持**：Tauri 支持 Windows、macOS 和 Linux 平台，允许开发者在多个平台上构建和分发应用。

## 环境安装

```npm
npm create tauri-app@latest

✔ Project name · tauri-app
✔ Identifier · com.tauri-app.app
✔ Choose which language to use for your frontend · TypeScript / JavaScript - (pnpm, yarn, npm, deno, bun)
✔ Choose your package manager · npm
✔ Choose your UI template · Vue - (https://vuejs.org/)
✔ Choose your UI flavor · JavaScript
```