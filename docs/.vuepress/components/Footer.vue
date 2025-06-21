<template>
    <div class="footer-wrapper">
      <div class="footer">
        Copyright © 2023 <a href="https://deelmind.com" target="_blank">極客方舟</a>
      </div>
    </div>
  </template>

<script>
    import { onMounted } from 'vue';
export default {
    setup(){
          onMounted(() => {
            const main = document.querySelector("#main-title");
            if (main) {
                // 添加动画类前，先等 DOM/CSS 完成渲染（确保字体加载完）
                requestAnimationFrame(() => {
                setTimeout(() => {
                    main.classList.remove("text-normal");
                    main.classList.add("fancy-text");
                }, 100); // 延迟100ms可以确保初始正常渲染
                });
            }
            const intervalId = setInterval(function() {
                const listItems = document.querySelectorAll('.notice-content ul li');
                if (listItems.length >= 6) {  // 找到6个li了
                    listItems[5].classList.add('cool-highlight');
                    // 修改 class 为 deelmind 的元素颜色
                    const deelmind = document.getElementsByClassName("deelmind");
                    for (let i = 0; i < deelmind.length; i++) {
                        deelmind[i].style.color = "#c94251";
                    }
                    clearInterval(intervalId);  // 找到并修改完成，停止定时器
                }
            }, 100);

            function isMobile() {
                return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }

            if (isMobile()) {
                // 移动端执行的代码
                let checkIntervalmobile = setInterval(function() {
                    let jiedan = document.getElementsByClassName("navbar-links-item")[9];
                    if (jiedan) {
                        clearInterval(checkIntervalmobile); 

                        // 修改 jiedan 元素的样式
                        jiedan.style.backgroundColor = "rgb(28 76 55)";
                        jiedan.style.color = "yellow";
                        jiedan.style.fontWeight = "bold";
                        jiedan.style.padding = ".2px";
                        jiedan.style.borderRadius = "5px";
                        
                        let childElements = jiedan.children;
                        for (let child of childElements) {
                            child.style.color = "white";
                        }
                    } else {
                        console.log("元素未找到，继续查找Mobile...");
                    }
                }, 100);
            } else {
                // 客户端执行的代码
                let checkInterval = setInterval(function() {
                    let jiedan = document.getElementsByClassName("nav-item hide-in-mobile")[9];
                    if (jiedan) {
                        clearInterval(checkInterval); 

                        // 修改 jiedan 元素的样式
                        jiedan.style.backgroundColor = "rgb(28 76 55)";
                        jiedan.style.color = "yellow";
                        jiedan.style.fontWeight = "bold";
                        jiedan.style.padding = "3px";
                        jiedan.style.borderRadius = "5px";
                        
                        let childElements = jiedan.children;
                        for (let child of childElements) {
                            child.style.color = "white";
                        }
                    } else {
                        console.log("元素未找到，继续查找...");
                    }
                }, 100);
            }
            })
    }
}
</script>


<style>
    .footer-wrapper {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center; /* 使内容水平居中 */
        padding: 0.3rem;
        border-top: 1px solid #30363d;
        background: #1e1e1e;
        text-align: center;
        z-index: 50;
    }
    .footer {
        font-size: 14px;
    }
    .fancy-text {
    font-size: 34px; /* Slightly larger for more impact */
    font-weight: 900; /* Bolder for a raw, commanding look */
    font-family: 'Share Tech Mono', 'Orbitron', 'Courier New', monospace; /* Monospace fonts for terminal-like hacker vibe */
    background: linear-gradient(90deg, #ff00ff, #00ff88, #ff004d, #00ccff, #ff00ff); /* Tighter neon palette with hacker colors */
    background-size: 400% 400%; /* Reduced for faster, more erratic animation */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: glitchGlow 6s ease-in-out infinite, glitchShift 1.5s steps(2) infinite; /* Dual animation for glow and glitch */
    text-shadow:
        0 0 3px rgba(0, 255, 136, 0.8), /* Neon green glow for hacker terminals */
        0 0 6px rgba(0, 255, 136, 0.6),
        0 0 12px rgba(255, 0, 77, 0.5), /* Reddish-pink for contrast */
        0 0 24px rgba(255, 0, 77, 0.3);

    letter-spacing: 1.5px; /* Wider spacing for a digital, spread-out look */
    transition: transform 0.2s ease-out, opacity 0.2s ease-out, filter 0.2s ease-out;
    filter: brightness(1.2) saturate(1.5); /* Boost vibrancy for neon pop */
    position: relative; /* For glitch pseudo-elements */
    }

    /* Glitch animation */
    @keyframes glitchGlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
    }

    @keyframes glitchShift {
    0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% { transform: skewX(0deg) translateX(0); }
    41% { transform: skewX(10deg) translateX(2px); }
    42% { transform: skewX(-10deg) translateX(-2px); }
    59% { transform: skewX(20deg) translateX(3px); }
    60% { transform: skewX(-20deg) translateX(-3px); }
    }

    /* Optional pseudo-elements for glitchy overlays */
    .fancy-text::before,
    .fancy-text::after {
    content: attr(data-text); /* Requires data-text="your text" in HTML */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    .fancy-text::before {
    background: linear-gradient(90deg, rgba(255, 0, 255, 0.5), rgba(0, 255, 136, 0.5));
    animation: glitchOverlay 1.2s steps(3) infinite;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    }

    .fancy-text::after {
    background: linear-gradient(90deg, rgba(0, 204, 255, 0.5), rgba(255, 0, 77, 0.5));
    animation: glitchOverlay 1.8s steps(4) infinite reverse;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    }

    @keyframes glitchOverlay {
    0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% { opacity: 0.6; transform: translate(0, 0); }
    41% { opacity: 0.8; transform: translate(2px, -1px); }
    42% { opacity: 0.4; transform: translate(-2px, 1px); }
    59% { opacity: 0.7; transform: translate(3px, -2px); }
    60% { opacity: 0.3; transform: translate(-3px, 2px); }
    }

    /* Hover effect for interactivity */
    .fancy-text:hover {
    transform: scale(1.05) translateY(-2px); /* Slight lift and scale */
    filter: brightness(1.5) saturate(2); /* Amplify neon intensity */
    text-shadow:
        0 0 5px rgba(0, 255, 136, 1),
        0 0 10px rgba(0, 255, 136, 0.8),
        0 0 20px rgba(255, 0, 77, 0.7),
        0 0 40px rgba(255, 0, 77, 0.5);
    }

    @keyframes neonGlow {
  0%, 100% {
    text-shadow:
      0 0 5px #f40,
      0 0 10px #f40,
      0 0 20px #f40,
      0 0 40px #ff4500,
      0 0 80px #ff4500,
      0 0 90px #ff4500;
    color: #ff6a00;
  }
  50% {
    text-shadow:
      0 0 10px #ff0,
      0 0 20px #ff0,
      0 0 30px #ff0,
      0 0 50px #ffff00,
      0 0 70px #ffff00,
      0 0 100px #ffff00;
    color: #fff700;
  }
}

@keyframes bgPulse {
  0%, 100% {
    background-color: #1a1a1a;
  }
  50% {
    background-color: #330000;
  }
}

.cool-highlight {
  animation: neonGlow 2s infinite alternate,
             bgPulse 3s infinite alternate;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

.cool-highlight:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px #ff4500, 0 0 30px #ff4500;
}

</style>
  