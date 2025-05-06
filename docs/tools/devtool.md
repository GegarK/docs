# DevTool

## 什么是DevTool

DevTools，全名 Developer Tools，几乎是所有主流浏览器都内置的前端开发利器。它能查看页面源代码、实时编辑样式、审查元素、查看请求数据、直接调试 JavaScript 脚本。

## 检测绕过

* [https://github.com/AEPKILL/devtools-detector](https://github.com/AEPKILL/devtools-detector)

## 代码实例

```js
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevTools检测反制</title>
</head>
<body>
    <script>
        (function() {
          // 核心检测控制器
          const DevToolsDetector = {
            isOpen: false,
        
            // 方法1：检测 console 是否调用 getter（有效率较高）
            detectGetter: function() {
              const element = new Image();
              Object.defineProperty(element, 'id', {
                get: () => {
                  this.isOpen = true;
                  console.warn('DevTools detected via getter');
                }
              });
              console.log('detectGetter %c', element);
            },
        
            // 方法2：利用窗口尺寸检测
            detectSize: function(threshold = 160) {
              const widthDiff = window.outerWidth - window.innerWidth;
              const heightDiff = window.outerHeight - window.innerHeight;
              console.log('Width Diff:', widthDiff, 'Height Diff:', heightDiff);
              if (widthDiff > threshold || heightDiff > threshold) {
                this.isOpen = true;
                console.warn('DevTools detected via window size');
              }
            },
        
            // 方法3：利用 debugger 卡顿检测
            detectDebuggerPause: function(threshold = 100) {
              const start = Date.now();
              debugger; // 若 DevTools 开启，这行会卡顿
              const timeTaken = Date.now() - start;
              if (timeTaken > threshold) {
                this.isOpen = true;
                console.warn('DevTools detected via debugger pause');
              }
            },
        
            // 方法4：定时综合检测（建议用 setInterval 定时运行）
            run: function(interval = 3000) {
              setInterval(() => {
                this.isOpen = false;
                // this.detectGetter();
                this.detectSize();
                // this.detectDebuggerPause();
        
                if (this.isOpen) {
                  this.onDetect();
                }
              }, interval);
            },
        
            // 检测到 DevTools 打开后的操作（可自定义）
            onDetect: function() {
              console.error("检测到 DevTools 被打开！");
              // 示例：跳转页面、弹窗警告、停止功能等
              alert("检测到 DevTools！请关闭后继续使用网站。");
              // location.href = "/404.html";
            }
          };
        
          // 启动检测
          DevToolsDetector.run();
        })();
        </script>
</body>
</html>
```