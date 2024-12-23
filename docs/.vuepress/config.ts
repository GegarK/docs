import { defineUserConfig } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'
// import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { resolve } from 'path';
import theme from "./theme";

import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
      
    ],
    [
      "script",
      {
        "data-ad-client": "ca-pub-8498045280190096",
        crossorigin:"anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ]
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "極客方舟",
      description: "極客方舟,DeeLMind,网络安全,逆向工程,WEB渗透,免杀,Bypass,机器学习,深度学习,人工智能",
    },
  },

  theme,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/modules/navbar/components/RepoLink": resolve(
      __dirname,
      "./components/NavRight.vue"
    ),
    "@theme-hope/components/PageFooter": resolve(
      __dirname,
      "./components/Footer.vue"
    ),
  },
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    // copyrightPlugin({
    //   author: "極客方舟(@DeeLMind)",
    //   canonical: "https://deelmind.com/",
    //   global: true,
    // }),
    searchProPlugin({
      indexContent:true
    }),
    registerComponentsPlugin({
      components: {
        DocsAD: resolve(__dirname, './components/DocsAD.vue'),
      },
    }),
  ],
});

