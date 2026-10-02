<template>
  <div class="deelmind-hub">

    <!-- =========================
         DeeLMind Hub Trigger
    ========================== -->
    <button
      class="hub-trigger"
      aria-label="Open DeeLMind Hub"
      @click="togglePanel"
      @mouseenter="openPanel"
    >
      <div class="reactor-ring ring-1"></div>
      <div class="reactor-ring ring-2"></div>
      <div class="reactor-ring ring-3"></div>

      <div class="reactor-core">
        <img
          src="/ME.png"
          alt="DeeLMind"
        />
      </div>

      <!-- <div class="reactor-pulse"></div> -->
    </button>


    <!-- =========================
         Hub Panel
    ========================== -->
    <transition name="hub-fade">
      <div
        v-if="isOpen"
        class="hub-panel"
        @mouseenter="cancelClose"
        @mouseleave="scheduleClose"
      >

        <!-- Header -->
        <div class="hub-header">
          <div>
            <div class="hub-title">
              DEELMIND
            </div>

            <div class="hub-subtitle">
              DIGITAL KNOWLEDGE HUB
            </div>
          </div>

          <div class="status">
            <span class="status-dot"></span>
            ONLINE
          </div>
        </div>


        <!-- =========================
             Main / NullMind
        ========================== -->
        <a
          href="https://nullmind.org"
          target="_blank"
          rel="noopener noreferrer"
          class="nullmind-card"
        >
          <div class="nullmind-glow"></div>

          <div class="nullmind-icon">
            ∅
          </div>

          <div class="nullmind-info">
            <div class="nullmind-title">
              NullMind
            </div>

            <div class="nullmind-desc">
              AI-Driven Penetration Engine
            </div>
          </div>

          <div class="arrow">
            ↗
          </div>
        </a>


        <!-- =========================
             Platforms
        ========================== -->
        <div class="section-label">
          PLATFORMS
        </div>

        <div class="platform-grid">

          <a
            href="https://safe.deelmind.com"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-card"
          >
            <div class="platform-icon security">
              ⛨
            </div>

            <div>
              <div class="platform-name">
                安全平台
              </div>

              <div class="platform-desc">
                Security
              </div>
            </div>
          </a>


          <a
            href="https://lab.deelmind.com"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-card"
          >
            <div class="platform-icon lab">
              ⌬
            </div>

            <div>
              <div class="platform-name">
                实验平台
              </div>

              <div class="platform-desc">
                Lab
              </div>
            </div>
          </a>


          <a
            href="https://tool.deelmind.com"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-card"
          >
            <div class="platform-icon tools">
              ⌘
            </div>

            <div>
              <div class="platform-name">
                工具平台
              </div>

              <div class="platform-desc">
                Tools
              </div>
            </div>
          </a>


          <a
            href="https://board.deelmind.com.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-card"
          >
            <div class="platform-icon board">
              ▦
            </div>

            <div>
              <div class="platform-name">
                白板
              </div>

              <div class="platform-desc">
                Whiteboard
              </div>
            </div>
          </a>


          <a
            href="https://socialdb.deelmind.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-card platform-wide"
          >
            <div class="platform-icon socialdb">
              ◎
            </div>

            <div>
              <div class="platform-name">
                社工查询
              </div>

              <div class="platform-desc">
                OSINT / Social Database
              </div>
            </div>
          </a>

        </div>


        <!-- =========================
             Social
        ========================== -->
        <div class="section-label">
          SOCIAL NETWORK
        </div>

        <div class="social-grid">

          <!-- Bilibili -->
          <a
            href="https://space.bilibili.com/282616786"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card bilibili"
          >
            <div class="social-logo">
              B
            </div>

            <div class="social-text">
              <span>Bilibili</span>
              <small>视频</small>
            </div>

            <div class="social-arrow">
              ↗
            </div>
          </a>


          <!-- YouTube -->
          <a
            href="https://youtube.com/DeeLMind"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card youtube"
          >
            <div class="social-logo">
              ▶
            </div>

            <div class="social-text">
              <span>YouTube</span>
              <small>Video</small>
            </div>

            <div class="social-arrow">
              ↗
            </div>
          </a>


          <!-- X -->
          <a
            href="https://twitter.com/DeeLMind"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card x"
          >
            <div class="social-logo">
              𝕏
            </div>

            <div class="social-text">
              <span>X</span>
              <small>Twitter</small>
            </div>

            <div class="social-arrow">
              ↗
            </div>
          </a>


          <!-- Telegram -->
          <a
            href="https://t.me/deelmindgeekark"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card telegram"
          >
            <div class="social-logo">
              ➤
            </div>

            <div class="social-text">
              <span>Telegram</span>
              <small>Community</small>
            </div>

            <div class="social-arrow">
              ↗
            </div>
          </a>

        </div>


        <!-- =========================
             Website / About
        ========================== -->
        <div class="hub-links">

          <a
            href="https://deelmind.com"
            target="_blank"
            rel="noopener noreferrer"
            class="hub-link"
          >
            <span>DEELMIND.COM</span>
            <span>↗</span>
          </a>

          <a
            href="/pay/"
            class="hub-link"
          >
            <span>ABOUT / SUPPORT</span>
            <span>→</span>
          </a>

        </div>

      </div>
    </transition>


    <!-- =========================
         Mobile Hub Overlay
         IMPORTANT:
         Must be BELOW panel
    ========================== -->
    <transition name="overlay-fade">
      <div
        v-if="isOpen && isMobile"
        class="mobile-overlay"
        @click="closePanel"
      ></div>
    </transition>


    <!-- =========================
         Ko-fi Trigger
    ========================== -->
    <button
      class="kofi-trigger"
      aria-label="Support DeeLMind"
      @click="toggleKofi"
    >
      ☕
    </button>


    <!-- =========================
         Ko-fi Modal
    ========================== -->
    <transition name="kofi-fade">
      <div
        v-if="isKofiOpen"
        class="kofi-modal"
      >

        <div class="kofi-header">

          <div>
            <div class="kofi-title">
              SUPPORT DEELMIND
            </div>

            <div class="kofi-subtitle">
              BUY ME A COFFEE ☕
            </div>
          </div>

          <button
            class="kofi-close"
            aria-label="Close"
            @click="closeKofi"
          >
            ×
          </button>

        </div>


        <div class="kofi-content">

          <iframe
            id="kofiframe"
            src="https://ko-fi.com/deelmind/?hidefeed=true&widget=true&embed=true&preview=true"
            style="border:none;width:100%;padding:4px;background:#f9f9f9;"
            height="712"
            title="deelmind"
          ></iframe>

        </div>

      </div>
    </transition>


    <!-- =========================
         Ko-fi Mobile Overlay
    ========================== -->
    <transition name="overlay-fade">
      <div
        v-if="isKofiOpen && isMobile"
        class="kofi-overlay"
        @click="closeKofi"
      ></div>
    </transition>

  </div>
</template>


<script>
export default {
  name: "DeeLMindHub",

  data() {
    return {
      isOpen: false,
      isKofiOpen: false,
      isMobile: false,
      closeTimer: null,
    };
  },

  mounted() {
    this.checkMobile();

    window.addEventListener(
      "resize",
      this.checkMobile,
      { passive: true }
    );
  },

  beforeUnmount() {
    window.removeEventListener(
      "resize",
      this.checkMobile
    );

    this.clearCloseTimer();
  },

  methods: {

    /* =========================
       Mobile Detection
    ========================== */
    checkMobile() {
      this.isMobile =
        window.innerWidth <= 768;
    },


    /* =========================
       Hub
    ========================== */

    openPanel() {
      if (this.isMobile) return;

      this.clearCloseTimer();

      this.isOpen = true;
    },

    togglePanel() {
      this.clearCloseTimer();

      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        this.isKofiOpen = false;
      }
    },

    closePanel() {
      this.clearCloseTimer();

      this.isOpen = false;
    },

    scheduleClose() {
      if (this.isMobile) return;

      this.clearCloseTimer();

      this.closeTimer = setTimeout(() => {
        this.isOpen = false;
      }, 180);
    },

    cancelClose() {
      this.clearCloseTimer();
    },

    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },


    /* =========================
       Ko-fi
    ========================== */

    toggleKofi() {
      this.isKofiOpen =
        !this.isKofiOpen;

      if (this.isKofiOpen) {
        this.isOpen = false;
      }
    },

    closeKofi() {
      this.isKofiOpen = false;
    },

  },
};
</script>


<style scoped>

/* =========================================================
   ROOT
========================================================= */

.deelmind-hub {
  --green: #00e89a;
  --green-soft: #00c98b;
  --cyan: #00d9c8;

  --panel: rgba(24, 32, 34, 0.96);
  --panel-soft: rgba(255, 255, 255, 0.045);

  --border: rgba(0, 255, 156, 0.18);

  --text: #ecfffa;
  --muted: #78918a;

  position: relative;

  /*
   * Very high stacking context.
   * Prevents VuePress theme elements from
   * covering the Hub.
   */
  z-index: 2147483000;
}


/* =========================================================
   HUB TRIGGER
========================================================= */

.hub-trigger {
  position: fixed;

  top: 72px;
  right: 18px;

  width: 56px;
  height: 56px;

  padding: 0;

  border: 1px solid rgba(0, 255, 156, 0.28);
  border-radius: 50%;

  background:
    radial-gradient(
      circle at center,
      rgba(0, 255, 156, 0.12),
      rgba(8, 18, 19, 0.96) 65%
    );

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    0 0 0 1px rgba(0, 255, 156, 0.04),
    0 0 16px rgba(0, 255, 156, 0.18),
    inset 0 0 18px rgba(0, 255, 156, 0.08);

  z-index: 10002;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.hub-trigger:hover {
  transform: scale(1.06);

  box-shadow:
    0 0 0 1px rgba(0, 255, 156, 0.12),
    0 0 25px rgba(0, 255, 156, 0.32),
    inset 0 0 20px rgba(0, 255, 156, 0.12);
}


/* =========================================================
   REACTOR RINGS
========================================================= */

.reactor-ring {
  position: absolute;

  left: 50%;
  top: 50%;

  border-radius: 50%;

  pointer-events: none;
}

.ring-1 {
  width: 39px;
  height: 39px;

  transform: translate(-50%, -50%);

  border: 1px solid rgba(0, 255, 156, 0.35);

  animation:
    reactor-spin 7s linear infinite;
}

.ring-2 {
  width: 45px;
  height: 45px;

  transform: translate(-50%, -50%);

  border: 1px dashed rgba(0, 217, 200, 0.3);

  animation:
    reactor-spin-reverse 10s linear infinite;
}

.ring-3 {
  width: 49px;
  height: 49px;

  transform: translate(-50%, -50%);

  border:
    1px solid rgba(0, 255, 156, 0.08);

  animation:
    reactor-pulse-ring 2.5s ease-in-out infinite;
}


/* =========================================================
   LOGO CORE
========================================================= */

.reactor-core {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 24px;
  height: 24px;

  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  border-radius: 20px;

  background:
    rgba(4, 12, 13, 0.96);

  border:
    1px solid rgba(0, 255, 156, 0.45);

  box-shadow:
    0 0 10px rgba(0, 255, 156, 0.3),
    inset 0 0 8px rgba(0, 255, 156, 0.08);

  z-index: 3;

  pointer-events: none;
}

.reactor-core img {
  width: 100%;
  height: 100%;

  padding: 3px;

  display: block;

  object-fit: contain;

  box-sizing: border-box;
}


/* =========================================================
   PULSE
========================================================= */

.reactor-pulse {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 5px;
  height: 5px;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: var(--green);

  box-shadow:
    0 0 7px var(--green),
    0 0 14px rgba(0, 255, 156, 0.7);

  opacity: 0.45;

  pointer-events: none;

  animation:
    core-pulse 1.8s ease-in-out infinite;

  z-index: 4;
}


/* =========================================================
   HUB PANEL
========================================================= */

.hub-panel {
  position: fixed;

  top: 68px;
  right: 84px;

  width: 350px;

  padding: 16px;

  box-sizing: border-box;

  background:
    linear-gradient(
      145deg,
      rgba(29, 39, 41, 0.98),
      rgba(18, 26, 28, 0.98)
    );

  border:
    1px solid rgba(0, 255, 156, 0.18);

  border-radius: 18px;

  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.38),
    0 0 30px rgba(0, 255, 156, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);

  overflow: hidden;

  /*
   * CRITICAL:
   * Must be above mobile overlay.
   */
  z-index: 10001;

  transform-origin: top right;
}


/* =========================================================
   HEADER
========================================================= */

.hub-header {
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 2px 2px 14px;

  border-bottom:
    1px solid rgba(255, 255, 255, 0.06);
}

.hub-title {
  font-family:
    "Orbitron",
    "SF Mono",
    monospace;

  font-size: 14px;
  font-weight: 700;

  letter-spacing: 2px;

  color: var(--text);
}

.hub-subtitle {
  margin-top: 4px;

  font-family: monospace;

  font-size: 8px;

  letter-spacing: 1.4px;

  color: var(--muted);
}

.status {
  display: flex;

  align-items: center;
  gap: 5px;

  font-family: monospace;

  font-size: 8px;

  letter-spacing: 1px;

  color: var(--green);
}

.status-dot {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: var(--green);

  box-shadow:
    0 0 8px var(--green);

  animation:
    core-pulse 1.6s ease-in-out infinite;
}


/* =========================================================
   NULLMIND
========================================================= */

.nullmind-card {
  position: relative;

  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 14px;

  padding: 14px;

  border:
    1px solid rgba(0, 255, 156, 0.25);

  border-radius: 13px;

  background:
    linear-gradient(
      135deg,
      rgba(0, 255, 156, 0.09),
      rgba(0, 217, 200, 0.025)
    );

  overflow: hidden;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.nullmind-card:hover {
  transform: translateY(-2px);

  border-color:
    rgba(0, 255, 156, 0.48);

  background:
    linear-gradient(
      135deg,
      rgba(0, 255, 156, 0.14),
      rgba(0, 217, 200, 0.045)
    );
}

.nullmind-glow {
  position: absolute;

  width: 100px;
  height: 100px;

  top: -55px;
  right: -30px;

  background:
    radial-gradient(
      circle,
      rgba(0, 255, 156, 0.14),
      transparent 70%
    );

  pointer-events: none;
}

.nullmind-icon {
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background:
    rgba(0, 255, 156, 0.08);

  border:
    1px solid rgba(0, 255, 156, 0.2);

  color: var(--green);

  font-family: monospace;

  font-size: 22px;

  box-shadow:
    0 0 14px rgba(0, 255, 156, 0.08);
}

.nullmind-info {
  flex: 1;
}

.nullmind-title {
  color: var(--text);

  font-size: 14px;
  font-weight: 700;

  letter-spacing: 0.5px;
}

.nullmind-desc {
  margin-top: 4px;

  color: var(--muted);

  font-family: monospace;

  font-size: 8px;

  letter-spacing: 0.4px;
}

.arrow {
  color: var(--green);

  font-size: 17px;

  opacity: 0.75;
}


/* =========================================================
   SECTION LABEL
========================================================= */

.section-label {
  margin: 16px 2px 8px;

  color: #536c65;

  font-family: monospace;

  font-size: 8px;

  letter-spacing: 1.8px;
}


/* =========================================================
   PLATFORM GRID
========================================================= */

.platform-grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 7px;
}

.platform-card {
  min-width: 0;

  display: flex;

  align-items: center;

  gap: 9px;

  padding: 10px;

  border:
    1px solid rgba(255, 255, 255, 0.06);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.025);

  text-decoration: none;

  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease;
}

.platform-card:hover {
  transform: translateY(-1px);

  background:
    rgba(0, 255, 156, 0.055);

  border-color:
    rgba(0, 255, 156, 0.2);
}

.platform-wide {
  grid-column: span 2;
}

.platform-icon {
  width: 28px;
  height: 28px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 7px;

  font-size: 14px;

  font-family: monospace;
}

.security {
  color: #00e89a;

  background:
    rgba(0, 232, 154, 0.08);
}

.lab {
  color: #00d9c8;

  background:
    rgba(0, 217, 200, 0.08);
}

.tools {
  color: #b4ffdf;

  background:
    rgba(180, 255, 223, 0.07);
}

.board {
  color: #c9fff0;

  background:
    rgba(201, 255, 240, 0.06);
}

.socialdb {
  color: #9effd8;

  background:
    rgba(158, 255, 216, 0.07);
}

.platform-name {
  color: #dffcf4;

  font-size: 10px;
  font-weight: 600;
}

.platform-desc {
  margin-top: 2px;

  color: #60766f;

  font-family: monospace;

  font-size: 7px;
}


/* =========================================================
   SOCIAL GRID
========================================================= */

.social-grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 7px;
}

.social-card {
  min-width: 0;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 9px;

  border-radius: 10px;

  text-decoration: none;

  border: 1px solid transparent;

  transition:
    transform 0.18s ease,
    filter 0.18s ease,
    border-color 0.18s ease;
}

.social-card:hover {
  transform: translateY(-2px);

  filter: brightness(1.08);
}

.social-logo {
  width: 28px;
  height: 28px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  font-size: 14px;
  font-weight: 800;
}

.social-text {
  min-width: 0;

  flex: 1;

  display: flex;

  flex-direction: column;
}

.social-text span {
  font-size: 9px;
  font-weight: 700;
}

.social-text small {
  margin-top: 2px;

  font-family: monospace;

  font-size: 6px;

  opacity: 0.58;
}

.social-arrow {
  font-size: 12px;

  opacity: 0.65;
}


/* Bilibili */

.bilibili {
  background:
    rgba(0, 174, 236, 0.1);

  border-color:
    rgba(0, 174, 236, 0.22);

  color: #bdefff;
}

.bilibili .social-logo {
  background:
    rgba(0, 174, 236, 0.16);

  color: #00aeec;
}


/* YouTube */

.youtube {
  background:
    rgba(255, 48, 48, 0.09);

  border-color:
    rgba(255, 48, 48, 0.22);

  color: #ffe2e2;
}

.youtube .social-logo {
  background:
    rgba(255, 48, 48, 0.16);

  color: #ff4040;
}


/* X */

.x {
  background:
    rgba(255, 255, 255, 0.045);

  border-color:
    rgba(255, 255, 255, 0.12);

  color: #f4f4f4;
}

.x .social-logo {
  background:
    rgba(255, 255, 255, 0.08);

  color: #ffffff;
}


/* Telegram */

.telegram {
  background:
    rgba(42, 171, 238, 0.09);

  border-color:
    rgba(42, 171, 238, 0.22);

  color: #d7f3ff;
}

.telegram .social-logo {
  background:
    rgba(42, 171, 238, 0.16);

  color: #2aabee;
}


/* =========================================================
   HUB LINKS
========================================================= */

.hub-links {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 7px;

  margin-top: 14px;
}

.hub-link {
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 9px 10px;

  border-radius: 9px;

  background:
    rgba(255, 255, 255, 0.025);

  border:
    1px solid rgba(255, 255, 255, 0.055);

  color: #809890;

  font-family: monospace;

  font-size: 7px;

  letter-spacing: 0.6px;

  text-decoration: none;

  transition:
    color 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.hub-link:hover {
  color: var(--green);

  border-color:
    rgba(0, 255, 156, 0.18);

  background:
    rgba(0, 255, 156, 0.045);
}


/* =========================================================
   MOBILE OVERLAY
========================================================= */

/*
 * IMPORTANT:
 *
 * overlay < panel < trigger
 *
 * This fixes the original mobile issue where
 * the panel looked blurred / couldn't be clicked.
 */

.mobile-overlay,
.kofi-overlay {
  position: fixed;

  inset: 0;

  background:
    rgba(0, 0, 0, 0.42);

  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  z-index: 10000;
}

.mobile-overlay {
  cursor: pointer;
}


/* =========================================================
   KOFI TRIGGER
========================================================= */

.kofi-trigger {
  position: fixed;

  top: 138px;
  right: 18px;

  width: 56px;
  height: 56px;

  padding: 0;

  border:
    1px solid rgba(255, 190, 100, 0.22);

  border-radius: 50%;

  background:
    radial-gradient(
      circle at center,
      rgba(255, 190, 100, 0.11),
      rgba(15, 18, 19, 0.96) 68%
    );

  color: #ffd9a3;

  font-size: 22px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    0 0 18px rgba(255, 170, 80, 0.12),
    inset 0 0 16px rgba(255, 180, 80, 0.05);

  z-index: 10005;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.kofi-trigger:hover {
  transform: scale(1.06);

  box-shadow:
    0 0 25px rgba(255, 170, 80, 0.24),
    inset 0 0 18px rgba(255, 180, 80, 0.08);
}


/* =========================================================
   KOFI MODAL
========================================================= */

.kofi-modal {
  position: fixed;

  top: 68px;
  right: 84px;

  width: 390px;

  max-width: calc(100vw - 100px);

  background:
    rgba(25, 29, 30, 0.98);

  border:
    1px solid rgba(255, 255, 255, 0.1);

  border-radius: 16px;

  overflow: hidden;

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.48);

  z-index: 10004;
}


/* =========================================================
   KOFI HEADER
========================================================= */

.kofi-header {
  height: 58px;

  padding: 0 14px;

  box-sizing: border-box;

  display: flex;

  align-items: center;
  justify-content: space-between;

  background:
    rgba(255, 255, 255, 0.025);

  border-bottom:
    1px solid rgba(255, 255, 255, 0.07);
}

.kofi-title {
  color: #f5f5f5;

  font-family:
    "Orbitron",
    monospace;

  font-size: 11px;

  letter-spacing: 1.4px;
}

.kofi-subtitle {
  margin-top: 3px;

  color: #a08d79;

  font-family: monospace;

  font-size: 7px;

  letter-spacing: 1px;
}

.kofi-close {
  width: 30px;
  height: 30px;

  padding: 0;

  border: none;

  border-radius: 8px;

  background:
    rgba(255, 255, 255, 0.06);

  color: #999;

  font-size: 20px;

  line-height: 1;

  cursor: pointer;

  transition:
    background 0.18s ease,
    color 0.18s ease;
}

.kofi-close:hover {
  background:
    rgba(255, 255, 255, 0.11);

  color: white;
}


/* =========================================================
   KOFI CONTENT
========================================================= */

.kofi-content {
  width: 100%;

  background: #f9f9f9;

  overflow-y: auto;
}

.kofi-content iframe {
  display: block;

  width: 100%;

  min-height: 712px;

  border: none;
}


/* =========================================================
   TRANSITIONS
========================================================= */

.hub-fade-enter-active,
.hub-fade-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.hub-fade-enter-from,
.hub-fade-leave-to {
  opacity: 0;

  transform:
    translateY(-8px)
    scale(0.97);
}


.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition:
    opacity 0.2s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}


.kofi-fade-enter-active,
.kofi-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.kofi-fade-enter-from,
.kofi-fade-leave-to {
  opacity: 0;

  transform:
    translateY(-8px)
    scale(0.98);
}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes reactor-spin {
  from {
    transform:
      translate(-50%, -50%)
      rotate(0deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotate(360deg);
  }
}

@keyframes reactor-spin-reverse {
  from {
    transform:
      translate(-50%, -50%)
      rotate(360deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotate(0deg);
  }
}

@keyframes reactor-pulse-ring {
  0%,
  100% {
    opacity: 0.35;

    transform:
      translate(-50%, -50%)
      scale(0.95);
  }

  50% {
    opacity: 0.8;

    transform:
      translate(-50%, -50%)
      scale(1.05);
  }
}

@keyframes core-pulse {
  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 768px) {

  .hub-trigger {
    top:
      calc(
        66px +
        env(safe-area-inset-top)
      );

    right: 14px;

    width: 52px;
    height: 52px;
  }


  .kofi-trigger {
    top:
      calc(
        126px +
        env(safe-area-inset-top)
      );

    right: 14px;

    width: 52px;
    height: 52px;
  }


  .reactor-ring.ring-1 {
    width: 36px;
    height: 36px;
  }

  .reactor-ring.ring-2 {
    width: 42px;
    height: 42px;
  }

  .reactor-ring.ring-3 {
    width: 46px;
    height: 46px;
  }


  .reactor-core {
    width: 23px;
    height: 23px;
  }


  /*
   * Mobile panel:
   * centered instead of attached to the button.
   */

  .hub-panel {
    top:
      calc(
        58px +
        env(safe-area-inset-top)
      );

    right: 10px;
    left: 10px;

    width: auto;

    max-height:
      calc(
        100vh -
        78px -
        env(safe-area-inset-top)
      );

    overflow-y: auto;

    -webkit-overflow-scrolling: touch;

    border-radius: 16px;

    /*
     * Keep it above overlay.
     */
    z-index: 10001;
  }


  .hub-header {
    padding-bottom: 12px;
  }


  .nullmind-card {
    padding: 13px;
  }


  .platform-card {
    padding: 10px;
  }


  .social-card {
    padding: 9px;
  }


  /*
   * Mobile Ko-fi
   */

  .kofi-modal {
    top:
      calc(
        58px +
        env(safe-area-inset-top)
      );

    left: 10px;
    right: 10px;

    width: auto;

    max-width: none;

    max-height:
      calc(
        100vh -
        70px -
        env(safe-area-inset-top)
      );

    overflow: hidden;

    border-radius: 14px;

    z-index: 10004;
  }


  .kofi-content {
    max-height:
      calc(
        100vh -
        128px -
        env(safe-area-inset-top)
      );

    overflow-y: auto;
  }


  .kofi-content iframe {
    min-height: 712px;
  }


  /*
   * Make touch targets easier to hit.
   */

  .platform-card,
  .social-card,
  .hub-link,
  .nullmind-card {
    -webkit-tap-highlight-color:
      transparent;
  }

}


/* =========================================================
   VERY SMALL MOBILE
========================================================= */

@media (max-width: 380px) {

  .hub-panel {
    left: 7px;
    right: 7px;

    padding: 13px;
  }


  .platform-grid {
    gap: 6px;
  }


  .social-grid {
    gap: 6px;
  }


  .hub-links {
    gap: 6px;
  }


  .platform-name {
    font-size: 9px;
  }


  .platform-desc {
    font-size: 6px;
  }

}

</style>