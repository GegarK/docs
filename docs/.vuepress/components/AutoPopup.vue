<template>
  <div class="deelmind-hub">

    <!-- =====================================================
         DEELMIND HUB BUTTON
    ===================================================== -->

    <button
      class="hub-trigger"
      :class="{ active: isOpen }"
      @mouseenter="openPanel"
      @click="togglePanel"
      aria-label="Open DeeLMind Hub"
    >
      <div class="reactor">
        <div class="reactor-ring ring-1"></div>
        <div class="reactor-ring ring-2"></div>
        <div class="reactor-ring ring-3"></div>

        <div class="reactor-core">
          <span>D</span>
        </div>

        <div class="reactor-pulse"></div>
      </div>
    </button>


    <!-- =====================================================
         DEELMIND HUB PANEL
    ===================================================== -->

    <transition name="panel">
      <aside
        v-if="isOpen"
        class="hub-panel"
        @mouseenter="cancelClose"
        @mouseleave="scheduleClose"
      >

        <!-- Header -->
        <div class="panel-header">

          <div class="brand">

            <span class="brand-mark">
              D
            </span>

            <div class="brand-text">
              <strong>DEELMIND</strong>
              <small>CYBER NODE</small>
            </div>

          </div>

          <button
            class="close-btn"
            @click="closePanel"
            aria-label="Close"
          >
            ×
          </button>

        </div>


        <!-- Status -->
        <div class="system-line">

          <span>ACCESS NODE</span>

          <i></i>

          <em>ONLINE</em>

        </div>


        <!-- =================================================
             NULLMIND
        ================================================= -->

        <a
          href="https://nullmind.org"
          target="_blank"
          rel="noopener noreferrer"
          class="nullmind-card"
        >

          <div class="nullmind-icon">
            N
          </div>

          <div class="nullmind-content">

            <div class="nullmind-title">
              NULLMIND
              <span>AI</span>
            </div>

            <p>
              AI-Driven Penetration Engine
            </p>

          </div>

          <div class="arrow">
            ↗
          </div>

        </a>


        <!-- =================================================
             PLATFORMS
        ================================================= -->

        <div class="section-title">
          <span>PLATFORMS</span>
          <b></b>
        </div>


        <div class="platform-grid">

          <!-- Security -->
          <a
            href="https://safe.deelmind.com"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-item"
          >

            <span class="platform-icon">
              ⌁
            </span>

            <span class="platform-info">

              <strong>
                安全平台
              </strong>

              <small>
                SECURITY
              </small>

            </span>

          </a>


          <!-- Lab -->
          <a
            href="https://lab.deelmind.com"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-item"
          >

            <span class="platform-icon">
              ⌘
            </span>

            <span class="platform-info">

              <strong>
                实验平台
              </strong>

              <small>
                LAB
              </small>

            </span>

          </a>


          <!-- Tools -->
          <a
            href="https://tool.deelmind.com"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-item"
          >

            <span class="platform-icon">
              ◈
            </span>

            <span class="platform-info">

              <strong>
                工具平台
              </strong>

              <small>
                TOOLS
              </small>

            </span>

          </a>


          <!-- Board -->
          <a
            href="https://board.deelmind.com.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-item"
          >

            <span class="platform-icon">
              □
            </span>

            <span class="platform-info">

              <strong>
                白板
              </strong>

              <small>
                BOARD
              </small>

            </span>

          </a>


          <!-- Social DB -->
          <a
            href="https://socialdb.deelmind.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="platform-item platform-wide"
          >

            <span class="platform-icon">
              ◎
            </span>

            <span class="platform-info">

              <strong>
                社工查询
              </strong>

              <small>
                SOCIAL DB
              </small>

            </span>

          </a>

        </div>


        <!-- =================================================
             SOCIAL NETWORK
        ================================================= -->

        <div class="section-title social-heading">

          <span>
            SOCIAL NETWORK
          </span>

          <b></b>

        </div>


        <div class="social-grid">


          <!-- =================================================
               BILIBILI
          ================================================= -->

          <a
            href="https://space.bilibili.com/282616786"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card bilibili"
          >

            <div class="social-logo">
              B
            </div>

            <div class="social-info">

              <strong>
                Bilibili
              </strong>

              <span>
                @DeeLMind
              </span>

            </div>

            <div class="social-arrow">
              ↗
            </div>

          </a>


          <!-- =================================================
               YOUTUBE
          ================================================= -->

          <a
            href="https://youtube.com/DeeLMind"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card youtube"
          >

            <div class="social-logo">
              ▶
            </div>

            <div class="social-info">

              <strong>
                YouTube
              </strong>

              <span>
                DeeLMind
              </span>

            </div>

            <div class="social-arrow">
              ↗
            </div>

          </a>


          <!-- =================================================
               X
          ================================================= -->

          <a
            href="https://twitter.com/DeeLMind"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card x"
          >

            <div class="social-logo">
              𝕏
            </div>

            <div class="social-info">

              <strong>
                X
              </strong>

              <span>
                @DeeLMind
              </span>

            </div>

            <div class="social-arrow">
              ↗
            </div>

          </a>


          <!-- =================================================
               TELEGRAM
          ================================================= -->

          <a
            href="https://t.me/deelmindgeekark"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card telegram"
          >

            <div class="social-logo">
              ➤
            </div>

            <div class="social-info">

              <strong>
                Telegram
              </strong>

              <span>
                Geek Ark
              </span>

            </div>

            <div class="social-arrow">
              ↗
            </div>

          </a>

        </div>

      </aside>
    </transition>


    <!-- =====================================================
         MOBILE OVERLAY - DEELMIND HUB
    ===================================================== -->

    <transition name="overlay">

      <div
        v-if="isOpen && isMobile"
        class="mobile-overlay"
        @click="closePanel"
      ></div>

    </transition>



    <!-- =====================================================
         KO-FI BUTTON
    ===================================================== -->

    <button
      class="kofi-trigger"
      :class="{ active: isKofiOpen }"
      @click="toggleKofi"
      aria-label="Buy Me a Coffee"
    >

      <span class="kofi-cup">
        ☕
      </span>

    </button>



    <!-- =====================================================
         KO-FI MODAL
    ===================================================== -->

    <transition name="kofi">

      <div
        v-if="isKofiOpen"
        class="kofi-modal"
      >

        <!-- Header -->

        <div class="kofi-modal-header">

          <div>

            <strong>
              BUY ME A COFFEE
            </strong>

            <small>
              SUPPORT DEELMIND
            </small>

          </div>


          <button
            class="kofi-close"
            @click="closeKofi"
            aria-label="Close"
          >
            ×
          </button>

        </div>


        <!-- Ko-fi iframe -->

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



    <!-- =====================================================
         MOBILE OVERLAY - KO-FI
    ===================================================== -->

    <transition name="overlay">

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

      closeTimer: null
    };
  },


  mounted() {

    this.checkMobile();

    window.addEventListener(
      "resize",
      this.checkMobile
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

    /* =====================================================
       RESPONSIVE
    ===================================================== */

    checkMobile() {

      this.isMobile =
        window.innerWidth <= 768;

    },


    /* =====================================================
       DEELMIND HUB
    ===================================================== */

    openPanel() {

      if (this.isMobile) {
        return;
      }

      this.clearCloseTimer();

      this.isOpen = true;

    },


    togglePanel() {

      this.clearCloseTimer();

      this.isOpen =
        !this.isOpen;

    },


    closePanel() {

      this.clearCloseTimer();

      this.isOpen = false;

    },


    scheduleClose() {

      if (this.isMobile) {
        return;
      }

      this.clearCloseTimer();

      this.closeTimer =
        setTimeout(() => {

          this.isOpen = false;

        }, 350);

    },


    cancelClose() {

      this.clearCloseTimer();

    },


    /* =====================================================
       KO-FI
    ===================================================== */

    toggleKofi() {

      this.isKofiOpen =
        !this.isKofiOpen;

    },


    closeKofi() {

      this.isKofiOpen = false;

    },


    /* =====================================================
       TIMER
    ===================================================== */

    clearCloseTimer() {

      if (this.closeTimer) {

        clearTimeout(
          this.closeTimer
        );

        this.closeTimer = null;

      }

    }

  }
};
</script>


<style scoped>

/* =========================================================
   ROOT
========================================================= */

.deelmind-hub {

  --green: #00e89a;
  --cyan: #00d9c8;

  --panel: rgba(24, 32, 34, 0.92);
  --panel-soft: rgba(255, 255, 255, 0.045);

  --border: rgba(0, 255, 156, 0.18);

  --text: #ecfffa;
  --muted: #78918a;

  position: relative;

  z-index: 9999;
}


/* =========================================================
   DEELMIND FLOATING BUTTON
========================================================= */

.hub-trigger {

  position: fixed;

  top: 72px;
  right: 18px;

  width: 56px;
  height: 56px;

  padding: 0;

  border: 1px solid
    rgba(0, 255, 156, 0.35);

  border-radius: 50%;

  background:
    radial-gradient(
      circle at center,
      rgba(0, 255, 156, 0.14),
      rgba(5, 14, 15, 0.96) 68%
    );

  box-shadow:
    0 0 20px
      rgba(0, 255, 156, 0.12),

    inset 0 0 15px
      rgba(0, 255, 156, 0.08);

  cursor: pointer;

  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 10001;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}


.hub-trigger:hover,
.hub-trigger.active {

  transform: scale(1.06);

  border-color:
    rgba(0, 255, 156, 0.7);

  box-shadow:

    0 0 28px
      rgba(0, 255, 156, 0.25),

    inset 0 0 20px
      rgba(0, 255, 156, 0.12);

}


/* =========================================================
   REACTOR
========================================================= */

.reactor {

  position: relative;

  width: 34px;
  height: 34px;

}


.reactor-ring {

  position: absolute;

  left: 50%;
  top: 50%;

  border: 1px solid
    rgba(0, 255, 156, 0.45);

  border-radius: 50%;

  transform:
    translate(-50%, -50%);

}


.ring-1 {

  width: 32px;
  height: 32px;

  animation:
    spin 8s linear infinite;

}


.ring-2 {

  width: 24px;
  height: 24px;

  border-style: dashed;

  animation:
    spinReverse 5s linear infinite;

}


.ring-3 {

  width: 17px;
  height: 17px;

  border-color:
    rgba(0, 217, 200, 0.8);

}


.reactor-core {

  position: absolute;

  left: 50%;
  top: 50%;

  width: 13px;
  height: 13px;

  transform:
    translate(-50%, -50%);

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #00e89a;

  color: #07120f;

  font-size: 8px;

  font-weight: 900;

  box-shadow:

    0 0 10px #00e89a,

    0 0 22px
      rgba(0, 232, 154, 0.6);

}


.reactor-pulse {

  position: absolute;

  left: 50%;
  top: 50%;

  width: 38px;
  height: 38px;

  border:
    1px solid
    rgba(0, 255, 156, 0.3);

  border-radius: 50%;

  transform:
    translate(-50%, -50%);

  animation:
    pulse 2.4s ease-out infinite;

}


/* =========================================================
   DEELMIND PANEL
========================================================= */

.hub-panel {

  position: fixed;

  top: 68px;
  right: 84px;

  width: 350px;

  padding: 17px;

  border:
    1px solid
    rgba(0, 255, 156, 0.18);

  border-radius: 18px;

  background:

    linear-gradient(
      145deg,
      rgba(31, 42, 44, 0.97),
      rgba(17, 25, 27, 0.94)
    );

  backdrop-filter:
    blur(26px)
    saturate(130%);

  -webkit-backdrop-filter:
    blur(26px)
    saturate(130%);

  box-shadow:

    0 25px 70px
      rgba(0, 0, 0, 0.45),

    0 0 40px
      rgba(0, 255, 156, 0.06);

  color: var(--text);

}


/* =========================================================
   HEADER
========================================================= */

.panel-header {

  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 13px;

}


.brand {

  display: flex;

  align-items: center;

  gap: 10px;

}


.brand-mark {

  width: 32px;
  height: 32px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 9px;

  background:
    rgba(0, 232, 154, 0.1);

  border:
    1px solid
    rgba(0, 232, 154, 0.3);

  color: var(--green);

  font-size: 14px;

  font-weight: 900;

  box-shadow:
    0 0 14px
    rgba(0, 232, 154, 0.1);

}


.brand-text strong {

  display: block;

  font-size: 12px;

  letter-spacing: 0.16em;

}


.brand-text small {

  display: block;

  margin-top: 2px;

  color: var(--muted);

  font-size: 8px;

  letter-spacing: 0.18em;

}


.close-btn {

  width: 26px;
  height: 26px;

  border: 0;

  border-radius: 7px;

  background:
    rgba(255, 255, 255, 0.04);

  color: #8fa39e;

  cursor: pointer;

  font-size: 17px;

  transition: 0.2s;

}


.close-btn:hover {

  background:
    rgba(255, 255, 255, 0.08);

  color: white;

}


/* =========================================================
   STATUS
========================================================= */

.system-line {

  display: flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 12px;

  color: #657c76;

  font-size: 8px;

  letter-spacing: 0.16em;

}


.system-line i {

  width: 5px;
  height: 5px;

  border-radius: 50%;

  background:
    var(--green);

  box-shadow:
    0 0 8px
    var(--green);

}


.system-line em {

  margin-left: auto;

  color: var(--green);

  font-style: normal;

}


/* =========================================================
   NULLMIND
========================================================= */

.nullmind-card {

  position: relative;

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 13px;

  margin-bottom: 16px;

  border:
    1px solid
    rgba(0, 232, 154, 0.22);

  border-radius: 13px;

  background:

    linear-gradient(
      110deg,
      rgba(0, 232, 154, 0.08),
      rgba(0, 232, 154, 0.015)
    );

  text-decoration: none;

  transition: 0.25s;

}


.nullmind-card:hover {

  border-color:
    rgba(0, 232, 154, 0.55);

  transform:
    translateY(-1px);

  box-shadow:

    0 8px 25px
      rgba(0, 232, 154, 0.08);

}


.nullmind-icon {

  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: #071a15;

  border:
    1px solid
    rgba(0, 232, 154, 0.35);

  color: var(--green);

  font-weight: 900;

}


.nullmind-title {

  color: var(--text);

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 0.08em;

}


.nullmind-title span {

  margin-left: 5px;

  padding: 2px 5px;

  border-radius: 4px;

  background:
    rgba(0, 232, 154, 0.12);

  color: var(--green);

  font-size: 7px;

}


.nullmind-content p {

  margin: 4px 0 0;

  color: var(--muted);

  font-size: 9px;

}


.arrow {

  margin-left: auto;

  color: var(--green);

  font-size: 15px;

}


/* =========================================================
   SECTION TITLE
========================================================= */

.section-title {

  display: flex;

  align-items: center;

  gap: 8px;

  margin:
    13px 1px 8px;

  color: #667d77;

  font-size: 8px;

  letter-spacing: 0.18em;

}


.section-title b {

  flex: 1;

  height: 1px;

  background:
    rgba(255, 255, 255, 0.07);

}


/* =========================================================
   PLATFORM
========================================================= */

.platform-grid {

  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 7px;

}


.platform-item {

  display: flex;

  align-items: center;

  gap: 8px;

  min-height: 48px;

  padding: 8px 9px;

  border:
    1px solid
    rgba(255, 255, 255, 0.055);

  border-radius: 9px;

  background:
    rgba(255, 255, 255, 0.025);

  text-decoration: none;

  transition: 0.2s;

}


.platform-item:hover {

  background:
    rgba(0, 232, 154, 0.055);

  border-color:
    rgba(0, 232, 154, 0.22);

}


.platform-icon {

  width: 25px;
  height: 25px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background:
    rgba(255, 255, 255, 0.05);

  color: #8eeed0;

  font-size: 12px;

}


.platform-info strong {

  display: block;

  color: #d9e9e5;

  font-size: 10px;

}


.platform-info small {

  display: block;

  margin-top: 2px;

  color: #60736e;

  font-size: 7px;

  letter-spacing: 0.08em;

}


.platform-wide {

  grid-column:
    span 2;

}


/* =========================================================
   SOCIAL NETWORK
========================================================= */

.social-heading {

  margin-top: 17px;

}


.social-grid {

  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 8px;

}


.social-card {

  position: relative;

  display: flex;

  align-items: center;

  gap: 9px;

  min-height: 58px;

  padding: 9px;

  overflow: hidden;

  border-radius: 11px;

  text-decoration: none;

  background:
    rgba(255, 255, 255, 0.035);

  border:
    1px solid
    rgba(255, 255, 255, 0.07);

  transition:

    transform 0.22s ease,

    border-color 0.22s ease,

    background 0.22s ease;

}


.social-card:hover {

  transform:
    translateY(-2px);

}


.social-logo {

  width: 34px;
  height: 34px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 9px;

  font-size: 16px;

  font-weight: 900;

}


.social-info {

  min-width: 0;

}


.social-info strong {

  display: block;

  color: #edf8f5;

  font-size: 10px;

  font-weight: 800;

}


.social-info span {

  display: block;

  margin-top: 3px;

  color: #6f8580;

  font-size: 8px;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;

}


.social-arrow {

  position: absolute;

  top: 7px;
  right: 8px;

  color:
    rgba(255, 255, 255, 0.3);

  font-size: 11px;

  transition: 0.2s;

}


/* =========================================================
   BILIBILI
========================================================= */

.bilibili {

  border-color:
    rgba(0, 174, 236, 0.16);

  background:

    linear-gradient(
      135deg,
      rgba(0, 174, 236, 0.10),
      rgba(0, 174, 236, 0.025)
    );

}


.bilibili .social-logo {

  background:
    rgba(0, 174, 236, 0.14);

  color:
    #00aeec;

  border:
    1px solid
    rgba(0, 174, 236, 0.25);

}


.bilibili:hover {

  border-color:
    rgba(0, 174, 236, 0.45);

  box-shadow:
    0 7px 25px
    rgba(0, 174, 236, 0.08);

}


.bilibili:hover .social-arrow {

  color:
    #00aeec;

}


/* =========================================================
   YOUTUBE
========================================================= */

.youtube {

  border-color:
    rgba(255, 40, 40, 0.15);

  background:

    linear-gradient(
      135deg,
      rgba(255, 40, 40, 0.10),
      rgba(255, 40, 40, 0.025)
    );

}


.youtube .social-logo {

  background:
    rgba(255, 40, 40, 0.12);

  color:
    #ff3030;

  border:
    1px solid
    rgba(255, 40, 40, 0.25);

}


.youtube:hover {

  border-color:
    rgba(255, 40, 40, 0.45);

  box-shadow:
    0 7px 25px
    rgba(255, 40, 40, 0.08);

}


.youtube:hover .social-arrow {

  color:
    #ff4040;

}


/* =========================================================
   X
========================================================= */

.x {

  border-color:
    rgba(255, 255, 255, 0.10);

  background:

    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.018)
    );

}


.x .social-logo {

  background:
    rgba(255, 255, 255, 0.08);

  color:
    #ffffff;

  border:
    1px solid
    rgba(255, 255, 255, 0.15);

}


.x:hover {

  border-color:
    rgba(255, 255, 255, 0.35);

  box-shadow:
    0 7px 25px
    rgba(255, 255, 255, 0.04);

}


.x:hover .social-arrow {

  color:
    white;

}


/* =========================================================
   TELEGRAM
========================================================= */

.telegram {

  border-color:
    rgba(42, 171, 238, 0.15);

  background:

    linear-gradient(
      135deg,
      rgba(42, 171, 238, 0.10),
      rgba(42, 171, 238, 0.025)
    );

}


.telegram .social-logo {

  background:
    rgba(42, 171, 238, 0.13);

  color:
    #2aabee;

  border:
    1px solid
    rgba(42, 171, 238, 0.25);

}


.telegram:hover {

  border-color:
    rgba(42, 171, 238, 0.45);

  box-shadow:
    0 7px 25px
    rgba(42, 171, 238, 0.08);

}


.telegram:hover .social-arrow {

  color:
    #2aabee;

}


/* =========================================================
   KO-FI BUTTON
========================================================= */

.kofi-trigger {

  position: fixed;

  top: 138px;
  right: 18px;

  width: 56px;
  height: 56px;

  padding: 0;

  border:
    1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 50%;

  background:

    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.10),
      rgba(255, 255, 255, 0.035)
    );

  backdrop-filter:
    blur(16px);

  -webkit-backdrop-filter:
    blur(16px);

  box-shadow:

    0 8px 30px
      rgba(0, 0, 0, 0.25);

  cursor: pointer;

  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 10001;

  transition:

    transform 0.25s ease,

    border-color 0.25s ease,

    box-shadow 0.25s ease;

}


.kofi-trigger:hover,
.kofi-trigger.active {

  transform:
    scale(1.06);

  border-color:
    rgba(255, 255, 255, 0.35);

  box-shadow:

    0 10px 35px
      rgba(0, 0, 0, 0.35);

}


.kofi-cup {

  font-size: 22px;

  filter:

    grayscale(0.15)

    drop-shadow(
      0 2px 7px
      rgba(0, 0, 0, 0.3)
    );

  transition:
    transform 0.25s ease;

}


.kofi-trigger:hover .kofi-cup {

  transform:
    rotate(-8deg)
    scale(1.08);

}


/* =========================================================
   KO-FI MODAL
========================================================= */

.kofi-modal {

  position: fixed;

  z-index: 10002;

  top: 68px;
  right: 84px;

  width: 390px;

  overflow: hidden;

  border-radius: 18px;

  border:
    1px solid
    rgba(255, 255, 255, 0.13);

  background:
    rgba(27, 32, 34, 0.97);

  backdrop-filter:
    blur(25px);

  -webkit-backdrop-filter:
    blur(25px);

  box-shadow:

    0 30px 90px
      rgba(0, 0, 0, 0.55);

}


/* =========================================================
   KO-FI HEADER
========================================================= */

.kofi-modal-header {

  height: 56px;

  padding:
    0 14px
    0 17px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.07);

}


.kofi-modal-header strong {

  display: block;

  color: #f1f5f4;

  font-size: 11px;

  letter-spacing: 0.14em;

}


.kofi-modal-header small {

  display: block;

  margin-top: 3px;

  color: #748580;

  font-size: 7px;

  letter-spacing: 0.15em;

}


/* =========================================================
   KO-FI CLOSE
========================================================= */

.kofi-close {

  width: 29px;
  height: 29px;

  border: 0;

  border-radius: 8px;

  background:
    rgba(255, 255, 255, 0.045);

  color: #91a09d;

  cursor: pointer;

  font-size: 18px;

  transition: 0.2s;

}


.kofi-close:hover {

  background:
    rgba(255, 255, 255, 0.09);

  color: white;

}


/* =========================================================
   KO-FI CONTENT
========================================================= */

.kofi-content {

  width: 100%;

  height: 712px;

  overflow: hidden;

  background: #f9f9f9;

}


.kofi-content iframe {

  display: block;

  width: 100%;

  height: 712px;

  border: none;

}


/* =========================================================
   MOBILE OVERLAY
========================================================= */

.mobile-overlay,
.kofi-overlay {

  position: fixed;

  inset: 0;

  background:
    rgba(0, 0, 0, 0.42);

  backdrop-filter:
    blur(3px);

}


.mobile-overlay {

  z-index: 9998;

}


.kofi-overlay {

  z-index: 10000;

}


/* =========================================================
   PANEL TRANSITION
========================================================= */

.panel-enter-active,
.panel-leave-active {

  transition:

    opacity 0.2s ease,

    transform 0.25s ease;

}


.panel-enter-from,
.panel-leave-to {

  opacity: 0;

  transform:

    translateX(12px)
    scale(0.97);

}


/* =========================================================
   KO-FI TRANSITION
========================================================= */

.kofi-enter-active,
.kofi-leave-active {

  transition:

    opacity 0.22s ease,

    transform 0.25s ease;

}


.kofi-enter-from,
.kofi-leave-to {

  opacity: 0;

  transform:

    translateX(12px)
    scale(0.97);

}


/* =========================================================
   OVERLAY TRANSITION
========================================================= */

.overlay-enter-active,
.overlay-leave-active {

  transition:
    opacity 0.2s ease;

}


.overlay-enter-from,
.overlay-leave-to {

  opacity: 0;

}


/* =========================================================
   REACTOR ANIMATION
========================================================= */

@keyframes spin {

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


@keyframes spinReverse {

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


@keyframes pulse {

  0% {

    opacity: 0.7;

    transform:

      translate(-50%, -50%)
      scale(0.8);

  }

  100% {

    opacity: 0;

    transform:

      translate(-50%, -50%)
      scale(1.45);

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 768px) {

  /* DeeLMind */

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


  /* Ko-fi */

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


  /* DeeLMind Panel */

  .hub-panel {

    top:
      calc(
        58px +
        env(safe-area-inset-top)
      );

    left: 10px;
    right: 10px;

    width: auto;

    max-height:
      calc(
        100vh - 75px
      );

    overflow-y: auto;

    padding: 14px;

    border-radius: 16px;

  }


  /* Ko-fi Modal */

  .kofi-modal {

    top:
      calc(
        58px +
        env(safe-area-inset-top)
      );

    left: 10px;
    right: 10px;

    width: auto;

    max-height:
      calc(
        100vh - 70px
      );

    border-radius: 16px;

  }


  .kofi-content {

    height:
      calc(
        100vh - 126px
      );

    overflow-y: auto;

  }


  .kofi-content iframe {

    min-height: 712px;

    height: 712px;

  }


  /* Grid */

  .platform-grid,
  .social-grid {

    grid-template-columns:
      1fr 1fr;

  }


  .platform-wide {

    grid-column:
      span 2;

  }

}

</style>