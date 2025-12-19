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
            const intervalId = setInterval(function() {
                const listItems = document.querySelectorAll('.notice-content ul li');
                if (listItems.length >= 6) {  // 找到6个li了
                    listItems[5].classList.add('cool-highlight');
                    listItems[6].classList.add('cool-highlight');
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

            // if (isMobile()) {
            //     // 移动端执行的代码
            //     let checkIntervalmobile = setInterval(function() {
            //         let jiedan = document.getElementsByClassName("navbar-links-item")[10];
            //         if (jiedan) {
            //             clearInterval(checkIntervalmobile); 

            //             // 修改 jiedan 元素的样式
            //             jiedan.style.backgroundColor = "rgb(28 76 55)";
            //             jiedan.style.color = "yellow";
            //             jiedan.style.fontWeight = "bold";
            //             jiedan.style.padding = ".2px";
            //             jiedan.style.borderRadius = "5px";
                        
            //             let childElements = jiedan.children;
            //             for (let child of childElements) {
            //                 child.style.color = "white";
            //             }
            //         } else {
            //             console.log("元素未找到，继续查找Mobile...");
            //         }
            //     }, 100);
            // } else {
            //     // 客户端执行的代码
            //     let checkInterval = setInterval(function() {
            //         let jiedan = document.getElementsByClassName("nav-item hide-in-mobile")[10];
            //         if (jiedan) {
            //             clearInterval(checkInterval); 

            //             // 修改 jiedan 元素的样式
            //             jiedan.style.backgroundColor = "rgb(28 76 55)";
            //             jiedan.style.color = "yellow";
            //             jiedan.style.fontWeight = "bold";
            //             jiedan.style.padding = "3px";
            //             jiedan.style.borderRadius = "5px";
                        
            //             let childElements = jiedan.children;
            //             for (let child of childElements) {
            //                 child.style.color = "white";
            //             }
            //         } else {
            //             console.log("元素未找到，继续查找...");
            //         }
            //     }, 100);
            // }
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

.cool-highlight {
  position: relative;
  padding: 12px 22px;
  border-radius: 6px;

  color: #00ff9c;
  background: rgba(0, 20, 10, 0.85);
  border: 1px solid rgba(0, 255, 156, 0.4);

  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  font-weight: 600;
  letter-spacing: 0.5px;

  cursor: pointer;
  user-select: none;

  animation:
    neonGlow 1.8s ease-in-out infinite alternate,
    glitchFlicker 3.5s infinite;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    color 0.25s ease;
}

/* 悬停强化：像“锁定目标” */
.cool-highlight:hover {
  transform: scale(1.08);
  color: #0affff;
  box-shadow:
    0 0 6px rgba(0, 255, 200, 0.6),
    0 0 18px rgba(0, 255, 200, 0.8),
    inset 0 0 8px rgba(0, 255, 200, 0.3);
}

/* 点击时像终端确认 */
.cool-highlight:active {
  transform: scale(0.97);
  box-shadow: 0 0 6px rgba(0, 255, 200, 0.4);
}

/* 霓虹呼吸 */
@keyframes neonGlow {
  from {
    text-shadow:
      0 0 4px rgba(0, 255, 156, 0.6),
      0 0 8px rgba(0, 255, 156, 0.4);
    border-color: rgba(0, 255, 156, 0.4);
  }
  to {
    text-shadow:
      0 0 6px rgba(0, 255, 200, 0.9),
      0 0 14px rgba(0, 255, 200, 0.7);
    border-color: rgba(0, 255, 200, 0.8);
  }
}

/* 微弱“故障闪烁” */
@keyframes glitchFlicker {
  0%, 100% {
    opacity: 1;
  }
  92% {
    opacity: 0.95;
  }
  94% {
    opacity: 0.85;
  }
  96% {
    opacity: 1;
  }
}



</style>
  