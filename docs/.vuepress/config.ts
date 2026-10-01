import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  dest: "./dist",

  bundler: viteBundler(),

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "script",
      {
        "data-ad-client": "ca-pub-8498045280190096",
        crossorigin: "anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "極客方舟",
      description:
        "極客方舟,DeeLMind,网络安全,逆向工程,WEB渗透,免杀,Bypass,机器学习,深度学习,人工智能",
    },
  },

  theme,

  plugins: [
    registerComponentsPlugin({
      components: {
        DocsAD: resolve(__dirname, "./components/DocsAD.vue"),
      },
    }),
  ],
});