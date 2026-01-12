<template>
  <div class="footer-wrapper">
    <div class="footer">
      Copyright © 2023 
      <a href="https://deelmind.com" target="_blank">極客方舟</a>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      // 高亮 notice 列表
      const intervalId = setInterval(() => {
        const listItems = document.querySelectorAll('.notice-content ul li');
        if (listItems.length >= 6) {
          listItems[5].classList.add('cool-highlightside');
          listItems[4].classList.add('cool-highlightside');

          const deelmind = document.getElementsByClassName('deelmind');
          for (let i = 0; i < deelmind.length; i++) {
            deelmind[i].style.color = '#c94251';
          }

          clearInterval(intervalId);
        }
      }, 100);

      const actionsP = document.querySelector('p.actions');
      if (!actionsP) return;

      const links = actionsP.querySelectorAll('.nav-link.action-button.primary');
      if (links.length >= 3) {
        const thirdLink = links[2];

        const nullMindBtn = document.createElement('a');
        nullMindBtn.href = 'https://nullmind.org';
        nullMindBtn.target = '_blank';
        nullMindBtn.className = 'nav-link action-button primary nullmind-btn cool-highlight';
        nullMindBtn.innerText = 'NullMind';

        thirdLink.parentNode.insertBefore(nullMindBtn, thirdLink.nextSibling);

        // 联动悬停效果
        const toggleHighlight = (add) => {
          if (add) {
            nullMindBtn.classList.add('cool-highlight');
            thirdLink.classList.add('cool-highlight');
          } else {
            nullMindBtn.classList.remove('cool-highlight');
            thirdLink.classList.remove('cool-highlight');
          }
        };

        // thirdLink.addEventListener('mouseenter', () => toggleHighlight(true));
        // thirdLink.addEventListener('mouseleave', () => toggleHighlight(false));
        nullMindBtn.addEventListener('mouseenter', () => toggleHighlight(true));
        nullMindBtn.addEventListener('mouseleave', () => toggleHighlight(false));
      }
    });
  },
};
</script>

<style>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  background: #1e1e1e;
  border-top: 1px solid #222;
  z-index: 50;
}

.footer {
  font-size: 14px;
  color: #ccc;
}

.footer a {
  color: #00ff9c;
  text-decoration: none;
  transition: color 0.3s ease;
}

/* 霓虹按钮样式 */
/* 针对 NullMind 按钮 */
.cool-highlight {
  color: #ff3b3b; /* 血红文字 */
  background: rgba(30, 0, 0, 0.9); /* 血红背景 */
  border-color: rgba(255, 59, 59, 0.8); /* 血红边框 */
  text-shadow:
    0 0 4px rgba(255, 59, 59, 0.6),
    0 0 12px rgba(255, 59, 59, 0.7);

  animation:
    neonGlow 1.8s ease-in-out infinite alternate,
    glitchFlicker 3.5s infinite;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    color 0.25s ease;
}


.cool-highlight:hover {
  transform: scale(1.08);
  box-shadow:
    0 0 8px rgba(0, 255, 200, 0.6),
    0 0 20px rgba(0, 255, 200, 0.8),
    inset 0 0 10px rgba(0, 255, 200, 0.3);
  /* 不改变 color 或 animation，保持默认霓虹效果 */
}



.cool-highlightside {
  position: relative;
  padding: 12px 24px;
  border-radius: 6px;

  color: #00ff9c;
  background: rgba(20, 0, 0, 0.85);
  border: 1px solid rgba(0, 255, 156, 0.4);

  font-family: 'JetBrains Mono', 'Fira Code', monospace;
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

.cool-highlightside:hover {
  transform: scale(1.08);
  color: #0affff;
  box-shadow:
    0 0 8px rgba(0, 255, 200, 0.6),
    0 0 20px rgba(0, 255, 200, 0.8),
    inset 0 0 10px rgba(0, 255, 200, 0.3);
}

@keyframes neonGlow {
  0% {
    text-shadow: 0 0 4px rgba(0, 255, 156, 0.6),
                 0 0 10px rgba(0, 255, 156, 0.4);
    border-color: rgba(0, 255, 156, 0.4);
  }
  100% {
    text-shadow: 0 0 8px rgba(0, 255, 200, 0.9),
                 0 0 16px rgba(0, 255, 200, 0.7);
    border-color: rgba(0, 255, 200, 0.8);
  }
}

@keyframes glitchFlicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 0.95; }
  94% { opacity: 0.85; }
  96% { opacity: 1; }
}
</style>
