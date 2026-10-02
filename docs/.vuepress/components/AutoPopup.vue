```vue
<template>
  <div class="float-tools">

    <!-- Ko-fi -->
    <a
      class="float-btn kofi"
      href="https://ko-fi.com/deelmind"
      target="_blank"
      rel="noopener noreferrer"
      title="Support me on Ko-fi"
    >
      <span class="icon">☕</span>
      <span class="label">Support</span>
    </a>

    <!-- 白板 -->
    <a
      class="float-btn"
      href="https://board.deelmind.com.cn/"
      target="_blank"
      rel="noopener noreferrer"
      title="DeeLMind Whiteboard"
    >
      <span class="icon">▣</span>
      <span class="label">白板</span>
    </a>

    <!-- 联系方式 -->
    <a
      class="float-btn"
      href="/pay/me.html"
      target="_blank"
      rel="noopener noreferrer"
      title="联系方式"
    >
      <span class="icon">✉</span>
      <span class="label">联系</span>
    </a>

    <!-- 安全平台 -->
    <a
      class="float-btn"
      href="http://safe.deelmind.com/"
      target="_blank"
      rel="noopener noreferrer"
      title="DeeLMind Security Platform"
    >
      <span class="icon">⌬</span>
      <span class="label">安全</span>
    </a>

  </div>
</template>

<style scoped>
.float-tools {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  z-index: 99999;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 8px 6px 8px 8px;

  border: 1px solid rgba(62, 175, 124, 0.25);
  border-right: none;

  border-radius: 16px 0 0 16px;

  background: rgba(10, 15, 13, 0.88);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.35),
    0 0 20px rgba(62, 175, 124, 0.08);
}

/* =========================
   Button
   ========================= */

.float-btn {
  position: relative;

  display: flex;
  align-items: center;

  width: 76px;
  height: 42px;

  padding: 0 10px;

  gap: 7px;

  border-radius: 10px;

  color: #b9c9c0;
  background: rgba(255, 255, 255, 0.04);

  text-decoration: none;

  font-size: 12px;
  font-weight: 500;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

/* icon */

.icon {
  width: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  flex-shrink: 0;
}

/* text */

.label {
  white-space: nowrap;
}

/* hover */

.float-btn:hover {
  color: #3eaf7c;

  background: rgba(62, 175, 124, 0.12);

  transform: translateX(-3px);
}

/* Ko-fi */

.float-btn.kofi {
  color: #fff;
  background: #72a4f2;
}

.float-btn.kofi:hover {
  color: #fff;
  background: #5f92e2;
}

/* =========================
   Mobile
   ========================= */

@media (max-width: 768px) {

  .float-tools {
    top: auto;
    bottom: calc(
      20px + env(safe-area-inset-bottom, 0px)
    );

    transform: none;

    gap: 6px;

    padding: 6px 4px 6px 6px;

    border-radius: 14px 0 0 14px;
  }

  .float-btn {
    width: 48px;
    height: 40px;

    padding: 0;

    justify-content: center;

    border-radius: 9px;
  }

  .label {
    display: none;
  }

  .icon {
    width: auto;
    font-size: 18px;
  }

  .float-btn:hover {
    transform: none;
  }
}

/* =========================
   Very small screen
   ========================= */

@media (max-width: 380px) {

  .float-tools {
    gap: 4px;
  }

  .float-btn {
    width: 42px;
    height: 36px;
  }

  .icon {
    font-size: 16px;
  }
}
</style>
```
