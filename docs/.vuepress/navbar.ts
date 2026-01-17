import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "安闻全见", 
    icon: "type" ,
    children:[
      { text: "安闻全见", link: "/mind/awqj/", icon: "arrow" },
      { text: "软件程序", link: "/mind/software/", icon: "arrow" },
      { text: "通讯协议", link: "/mind/protocal/", icon: "arrow" },
      { text: "操作系统", link: "/mind/system/", icon: "arrow" },
      { text: "驱动程序", link: "/mind/drivers/", icon: "arrow" },
      { text: "硬件设备", link: "/mind/hardware/", icon: "arrow" },
      { text: "电路设备", link: "/mind/circuit/", icon: "arrow" },
      { text: "量子计算", link: "/mind/quantum/", icon: "arrow" },
      { text: "生物计算", link: "/mind/biocomputing/", icon: "arrow" },
      { text: "人工智能", link: "/mind/ai/", icon: "arrow" },
      { text: "技能组合", link: "/mind/skill/", icon: "arrow" },
      { text: "抵制八股", link: "/mind/bagu", icon: "arrow" },
      { text: "安全事件", link: "/mind/news", icon: "arrow" },
      { text: "黑客组织", link: "/mind/group", icon: "arrow" },
    ]
  },
  { 
    text: "编程", 
    icon: "script",
    children:[
      { text: "编程开发", link: "/program/program/", icon: "arrow" },
      { text: "黑客编程", link: "/safep/", icon: "arrow" },
      { text: "路由协议", link: "/program/protocal/", icon: "arrow" },
      { text: "密码编码", link: "/program/encode/", icon: "arrow" },
      { text: "算法ACM", link: "/program/alg/", icon: "arrow" },
      { text: "算法讲解", link: "/program/alg/", icon: "arrow" },
      { text: "设计模式", link: "/program/design/", icon: "arrow" },
      { text: "软件测试", link: "/program/test/", icon: "arrow" },
      { text: "正向工具", link: "/program/tools/", icon: "arrow" },
      { text: "安全运维", link: "/program/secops/", icon: "arrow" },
    ]
  },
  {
    text: "二进制",
    icon: "debug",
    children:[
      { text: "逆向分析", link: "/reverse/", icon: "arrow" },
      { text: "逆向工具", link: "/reverse/tools/", icon: "arrow" },
      { text: "程序保护", link: "/reverse/protect/", icon: "arrow" },
      { text: "符号执行", link: "/reverse/symbolic/", icon: "arrow" },
      { text: "漏洞挖掘", link: "/reverse/exploits/", icon: "arrow" },
      { text: "游戏安全", link: "/reverse/game/", icon: "arrow" },
      { text: "病毒分析", link: "/reverse/virus/", icon: "arrow" },
      { text: "RUST安全", link: "/program/program/rust", icon: "arrow" },
    ]
  },
  {
    text: "渗透",
    icon: "network",
    children:[
      { text: "NullMind", link: "/nullmind/", icon: "arrow" },
      { text: "渗透测试", link: "/pentest/", icon: "arrow" },
      { text: "安全建设", link: "/defense/", icon: "arrow" },
      { text: "渗透工具", link: "/tools/", icon: "arrow" },
      { text: "漏洞复现", link: "/exps/", icon: "arrow" },
      { text: "CVE&SRC", link: "/cves/", icon: "arrow" },
      { text: "WEB2.0漏洞", link: "/web/", icon: "arrow" },
      { text: "WEB3.0安全", link: "/web3/", icon: "arrow" },
      { text: "Metaverse安全", link: "/metaverse/", icon: "arrow" },
      // { text: "密码算法安全", link: "https://mathph.org", icon: "arrow" },
    ]
  },
    {
    text: "WEB3",
    icon: "network",
    children:[
      { text: "区块链", link: "/web3/", icon: "arrow" },
      { text: "虚拟货币", link: "/web3/", icon: "arrow" },
      { text: "量化分析", link: "/web3/", icon: "arrow" },
      { text: "漏洞复现", link: "/web3/", icon: "arrow" },
      { text: "DAPP开发", link: "/web3/", icon: "arrow" },
      { text: "WEB3安全", link: "/web3/", icon: "arrow" },
      { text: "区块链开发", link: "/web3/", icon: "arrow" },
      { text: "智能合约开发", link: "/web3/", icon: "arrow" },
    ]
  },
  {
    text: "硬件",
    icon: "process",
    children:[
      { text: "硬件安全", link: "/hardware/", icon: "arrow" },
      { text: "无线安全", link: "/hardware/wireless/", icon: "arrow" },
      { text: "量子计算", link: "/hardware/quantum/", icon: "arrow" },
      { text: "工控安全", link: "/hardware/incontrol/", icon: "arrow" },
      { text: "IOT-安全", link: "/hardware/iot/", icon: "arrow" },
      { text: "机器人安全", link: "/hardware/robot/", icon: "arrow" },
    ]
  },
  { 
    text: "AI", 
    icon: "semantic",
    children:[
      { text: "AI安全", link: "/ai/", icon: "arrow" },
      { text: "机器学习", link: "/ai/ml/", icon: "arrow" },
      { text: "深度学习", link: "/ai/deep/", icon: "arrow" },
      { text: "GAN网络", link: "/ai/gan/", icon: "arrow" },
      { text: "LLM大模型", link: "/ai/llm/", icon: "arrow" },
    ]
  },
  { text: "密码学", link: "https://mathph.org", icon: "arrow" },
  { 
    text: "CTF", 
    icon: "creative",
    children:[
      { text: "WriteUp", link: "https://github.com/DeeLMind/CTF", icon: "arrow" },
      { text: "CTF教程", link: "/ctf/", icon: "arrow" },
      { text: "杂项题目", link: "/ctf/misc/", icon: "arrow" },
      { text: "WEB题目", link: "/ctf/web/", icon: "arrow" },
      { text: "逆向题目", link: "/ctf/bin/", icon: "arrow" },
      { text: "PWN题目", link: "/ctf/pwn/", icon: "arrow" },
      { text: "WEB3.0题目", link: "/ctf/web3/", icon: "arrow" },
    ]
  },
  { 
    text: "其它", 
    icon: "creative",
    children:[
      { text: "路由器", link: "/other/router/", icon: "arrow" },
      { text: "电脑DIY", link: "/other/computediy/", icon: "arrow" },
      { text: "手机越狱", link: "/other/jailbreaking/", icon: "arrow"},
      { text: "系统装机", link: "/other/setup/", icon: "arrow" },
      { text: "其它知识", link: "/other/other/", icon: "arrow" },
    ]
  },
  // { 
  //   text: "平台", 
  //   icon: "creative",
  //   children:[
  //     { text: "安全平台", link: "https://study.deelmind.com", icon: "arrow" },
  //     { text: "实验平台", link: "https://lab.deelmind.com", icon: "arrow" },
  //     { text: "工具平台", link: "https://tool.deelmind.com", icon: "arrow" },
  //   ]
  // },20.11.1
  // { text: "接单", icon: "plugin", link: "/pay/services" },
  // { text: "论坛", icon: "article", link: "https://forum.deelmind.com" },
  // { text: "资源", icon: "cache", link: "https://deelmind.org" },
]);
