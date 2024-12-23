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
            function isMobile() {
                return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }

            if (isMobile()) {
                // 移动端执行的代码
                let checkIntervalmobile = setInterval(function() {
                    let jiedan = document.getElementsByClassName("navbar-links-item")[8];
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
                    let jiedan = document.getElementsByClassName("nav-item hide-in-mobile")[8];
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
  </style>
  