# 浏览器

## 浏览器解析

### 1. **请求网页**

- **发送请求**：浏览器通过HTTP/HTTPS协议向服务器发送请求，请求指定的网页资源。
- **接收响应**：服务器处理请求并返回网页内容（如HTML、CSS、JavaScript、图片等）。

### 2. **解析HTML**

- **构建DOM树**：浏览器解析HTML文档，将其转换为DOM（文档对象模型）树。DOM树是表示网页结构的树状结构，包含所有的HTML元素和文本节点。
- **处理文档类型**：根据文档类型声明（如`<!DOCTYPE html>`），确定解析模式（标准模式或怪异模式）。

### 3. **解析CSS**

- **构建CSSOM树**：浏览器解析CSS样式表，将其转换为CSSOM（CSS对象模型）树。CSSOM树包含所有的CSS规则和样式信息。
- **应用样式**：将CSSOM树中的样式信息应用到DOM树上，为每个DOM节点计算样式。

<DocsAD/>

### 4. **构建渲染树**

- **生成渲染树**：结合DOM树和CSSOM树，生成渲染树。渲染树包含了需要绘制的可视化内容，排除了一些不可见的内容（如`display: none`的元素）。
- **计算布局**：为渲染树中的每个元素计算位置和大小，生成布局信息。这一过程被称为“回流”或“重排”。

### 5. **绘制**

- **绘制内容**：根据布局信息，将渲染树中的元素绘制到屏幕上。这一过程将视觉效果（如颜色、边框、阴影等）应用到页面元素。

### 6. **执行JavaScript**

- **解析和执行**：浏览器解析并执行JavaScript代码。JavaScript代码可能会修改DOM树、CSSOM树，或者触发事件。
- **更新渲染**：JavaScript修改页面内容后，可能需要重新计算布局和绘制，称为“重绘”和“重排”。

### 7. **处理异步操作**

- **异步加载**：浏览器可以异步加载资源（如图片、脚本、样式表）以提高页面性能。
- **事件处理**：浏览器处理用户交互和事件（如点击、滚动、键盘输入），并相应地更新页面内容。

### 8. **缓存**

- **缓存机制**：浏览器缓存静态资源（如CSS、JavaScript、图片），以减少重复请求，加快页面加载速度。
- **缓存控制**：使用HTTP缓存头（如`Cache-Control`、`Expires`）管理缓存策略，确保最新内容的加载。

### 9. **性能优化**

- **优化渲染**：浏览器引擎使用各种优化技术（如合成层、GPU加速）提升页面渲染性能。
- **异步任务**：通过Web Workers和异步JavaScript操作，避免主线程阻塞，提高用户体验。

## 主流浏览器内核

### 1. Blink

- **简介**：Blink 是 Google 开发的开源渲染引擎。它是 WebKit 的一个分支。
- **主要浏览器**：
  - **Google Chrome**： [google.com/chrome](https://www.google.com/chrome/)
  - **Microsoft Edge**（基于 Chromium）： [microsoft.com/edge](https://www.microsoft.com/edge)
  - **Opera**： [opera.com](https://www.opera.com/)

### 2. WebKit

- **简介**：WebKit 是 Apple 开发的开源渲染引擎，最初由 KDE 项目开发。
- **主要浏览器**：
  - **Safari**： [apple.com/safari](https://www.apple.com/safari/)
  - **旧版 Android 浏览器**：（部分 Android 版本中使用）

### 3. Gecko

- **简介**：Gecko 是 Mozilla 开发的开源渲染引擎。
- **主要浏览器**：
  - **Mozilla Firefox**： [mozilla.org/firefox](https://www.mozilla.org/firefox/)
  - **Thunderbird**（Mozilla 的邮件客户端）： [mozilla.org/thunderbird](https://www.mozilla.org/thunderbird/)

### 4. Trident

- **简介**：Trident 是 Microsoft 开发的渲染引擎，用于旧版 Internet Explorer 浏览器。
- **主要浏览器**：
  - **Internet Explorer**： [support.microsoft.com/internet-explorer](https://support.microsoft.com/internet-explorer)

### 5. EdgeHTML

- **简介**：EdgeHTML 是 Microsoft 为新版 Edge 浏览器开发的渲染引擎，已被 Blink 替代。
- **主要浏览器**：
  - **旧版 Microsoft Edge**： [microsoft.com/edge](https://www.microsoft.com/edge)

### 6. Presto

- **简介**：Presto 是 Opera Software 开发的渲染引擎，已被 Blink 替代。
- **主要浏览器**：
  - **旧版 Opera 浏览器**： [opera.com](https://www.opera.com/)

### 7. Servo

- **简介**：Servo 是 Mozilla 和多家机构合作开发的实验性渲染引擎，采用 Rust 编程语言编写。
- **主要浏览器**：
  - **目前没有主流浏览器使用**，但作为实验性项目正在开发中： [servo.org](https://servo.org/)

