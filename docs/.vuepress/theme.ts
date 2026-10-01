import { hopeTheme } from "vuepress-theme-hope";
import { getDirname, path } from "vuepress/utils";
import { dirname, resolve } from "node:path";
import navbar from "./navbar";
import sidebar from "./sidebar";

const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  // =========================
  // 基础信息
  // =========================
  hostname: "https://deelmind.com",

  author: {
    name: "DeeLMind",
    url: "https://deelmind.com",
  },
  

  // =========================
  // Logo / 图标
  // =========================
  logo: "/geekfz.png",

  // =========================
  // 外观
  // =========================
  darkmode: "enable",

  // =========================
  // 导航
  // =========================
  navbar,


  sidebar,

  // =========================
  // Footer
  // =========================
  footer:
    '<a href="https://deelmind.com" target="_blank">極客方舟</a>',

  displayFooter: true,

  // =========================
  // 内容加密
  // =========================
  encrypt: {
    config: {
      "/ppt/": {
        password: ["極客方舟"],
        hint: "请输入访问密码",
      },
    },
  },

  plugins: {
    // =========================
    // 图标
    // =========================
    icon: {
      assets: "fontawesome",
    },

    // =========================
    // 搜索
    // =========================
    search: true,

    // =========================
    // 版权
    // =========================
    copyright: {
      global: true,
    },

    // =========================
    // SEO
    // =========================
    seo: true,

    // =========================
    // Sitemap
    // =========================
    sitemap: true,

    // =========================
    // VuePress Components
    // =========================
    components: {
      components: [
        "Badge",
        "CodePen",
        "Share",
        "SiteInfo",
        "StackBlitz",
      ],
    }
  },
markdown: {
    // =========================
    // Markdown 行为
    // =========================
    gfm: true,
    breaks: true,
    linkify: true,

    // =========================
    // Markdown 基础语法增强
    // =========================
    component: true,
    footnote: true,
    imgMark: true,
    imgSize: true,
    include: true,
    tabs: true,
    tasklist: true,
    revealjs: true,

    // =========================
    // 数学公式
    // =========================
    math: {
      type: "katex",
      copy: true,
      mhchem: true,
    },
  },
},
{ custom: true },
);