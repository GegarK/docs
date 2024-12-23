import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";
import { resolve } from 'path';

export default hopeTheme({
  hostname: "https://deelmind.com",
  author: {
    name: "DeeLMind",
    url: "https://deelmind.com",
  },
  iconPrefix: "iconfont icon-",

    // 关键词: "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
    iconAssets: "fontawesome",

  logo: "/geekfz.png",
  darkmode: "enable",

  navbar: navbar,
  sidebar: sidebar,
  footer: '<a href="https://deelmind.com" target="_blank">極客方舟</a>',
  displayFooter: true,

  encrypt: {
    config: {
      "/ppt/": ["<a href=https://deelmind.com target=_blank>極客方舟</a>"], // 加密密码
    },
  },

  plugins: {
    // 全局复制100字数以上，开启版权复制
    copyright:{
      global:true
    },
    // SEO
    seo:true,
    components: {
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "FontIcon",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
      componentOptions: {
        // fontIcon: {
        //   assets: "fontawesome",
        // },
      },
      rootComponents: {
        // <li><a href="/pay/alive">B站答疑，YouTube答疑</a>直播课程移动至<a href="/pay/group">QQ群</a>，<a href="/pay/group">DISCORD</a>内部直播答疑</li><li>移动端打开视频链接B站APP跳转错误，可以直接搜索视频。</li><li><a href="/pay/services">黑产&灰产请不要找我，我不太会！！！</a></li>
        // addThis: "ra-641d68e49b4ca49b",<li><a target="_blank" href="https://all.deelmind.com.cn/">【随缘】自然而然【思维教程】</a></li>
        notice: [
          {
            path: "/",
            title: "重要公告（核心基础）",
            content:
              '<ul><li>思维教程：<a target="_blank" href="https://all.deelmind.com.cn/">《随缘自然而然》</a></li><li>加群课程：<a href="/pay/class/tiny">《加群直播课程》</a></li><li>付费课程：<a href="/pay/class/pentest">《渗透测试一对一辅导》</a></li><li>付费课程：<a href="/pay/class/bin">《二进制安全》</a></li><li>付费课程：<a href="/pay/class/ai">《网络安全AI课程》</a></li><li>信任标准：不信我不要找我，先了解我，或者学一下思维课程<a target="_blank" href="https://all.deelmind.com.cn/">《随缘自然而然》</a></li></ul>'
          },
          
        ],
      },
    },

    mdEnhance: {
      // 开启幻灯片
      presentation: true,
      mermaid: true,
      align: true,
      chart: true,
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      codetabs: true,
      container: true,
      flowchart: true,
      imgLazyload: true,
      include: {
        resolvePath: (file) =>
          file.startsWith("@src")
            ? file.replace("@src", resolve(__dirname, ".."))
            : file,
      },
      mark: true,
      tasklist: true,
    },
  },
});
