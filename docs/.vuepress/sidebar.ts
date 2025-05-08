import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/mind/":[
      "attack",
      "awqj/basic",
      "system/",
      "drivers/",
      "quantum/",
      {
        text: "软件程序",
        // icon: "creative",
        prefix: "software/",
        collapsible: true,
        children: ["","web","script","other","bin"],
      },
      {
        text: "通讯协议",
        // icon: "creative",
        prefix: "protocal/",
        collapsible: true,
        children: ["software","protocal","hardware","safe"],
      },

      {
        text: "硬件设备",
        // icon: "creative",
        prefix: "hardware/",
        collapsible: true,
        children: ["cpu","mcu","sensor","wireless"],
      },
      {
        text: "电路设备",
        // icon: "creative",
        prefix: "circuit/",
        collapsible: true,
        children: ["digital","analog"],
      },
      // "skill/",
    ],

    "/mind/skill/":[
      "",
      "ctfer",
      "cloud",
      "anfu",
      "attack",
      "blueteam",
      "redteam",
      "control",
      "exploit",
      "level",
      "reverse",
      "virus",
      "web",
      "forensics"
    ],

    "/mind/group/":[
      "",
      "LazarusGroup",
    ],

    "/mind/news/":[
      "",
      "bybit20250221"
    ],

    "/program/":[
      "program/",
    ],

    "/program/program/":[
      "front",
      "sql",
      "driver/",
      "full/",
      "spider/",
      "rust/",
      "c/",
      "iosmac/",
      "windows/",
      "androidlinux/",
    ],

    "/program/program/rust/":[
      "",
      "env",
      "cmd",
      "toml",
      "file",
      "web",
      "tauri",
      "shellcode",
      "rev",
      
      // "bvar",
      // "avar",
      // "flow",
      // "function",
      // "mod",
      // "live",
      // "pointer",
      // "match",
      // "error",
      // "closure",
      // "ctype",
      // "spointer",
      // "macro",
    ],

    "/program/program/rust/tauri":[
      "",
      "build",
      "calc",
      "frame"
    ],

    "/program/alg/":[
      "",
      "greedy",
      "dyn",
      "hash",
      "sort",
      "sliding",
      "recurrence"
    ],

    "/program/test/":[
      "",
      "Appium",
      "pywinauto"
    ],

    "/program/design/":[
      "",
      "fv"
    ],

    "/program/program/front/":[
      "css",
      "html",
      "nodejs",
      "js",
      "pack",
      "brower",
      "webrtc",
      "webassembly"
    ],

    "/program/program/sql/":[
      "mysql",
      "mssql",
      "mongodb"
    ],

    "/program/program/c/":[
      "",
      "mem",
      "compile",
      "bin"
    ],

    "/program/program/assemb/":[
      "",
      "tmp"
    ],

    "/program/program/windows/":[
      "",
      "api",
      "file",
      "lnk",
      "mem",
      "mouse",
      "key",
      "ui",
      "permission",
      "env",
      "net",
      "inject",
      "cut",
      "thread",
      "db",
      "dll",
      "hook",
      "com"
    ],

    "/program/program/androidlinux/":[
      "",
      "gcc",
    ],

    "/program/program/iosmac/":[
      "",
    ],

    "/program/program/spider/":[
      "",
      "anti"
    ],

    "/program/protocal/":[
      "proxy",
      "http",
      "http2",
      "tsl",
      "dns",
      "ip",
      "tcp",
      "udp",
      "icmp",
      "bgp",
      "arp",
      "dhcp",
      "router",
    ],
    "/program/encode/" : [
      "",
      "url",
      "rot",
      "hex",
      "base",
      "html",
      "ascii",
      "morse",
      "jsfuck",
      "brainfuck",
      "quoted-printable",
      "enclosed",
    ],
    "/program/vagrant":[
      "docs",
    ],
    "/program/tools/":[
      "vscode",
      "vagrant",
      "server",
      "vpn",
      "proxy",
      "ip_proxy"
    ],
    "/program/secops/":[
      "",
      "docker",
      "k8s",
      "terraform"
    ],
    "/nav/":[
      "safe",
      "ai",
      "rev",
      "hardware",
      "virus",
      "hash",
      "program",
      "tiny",
    ],

    "/safep/":[
      "",
      'port',
      "zip",
    ],

    "/reverse/":[
      "",
      "example/",
      "opcode/",
      "ffile/",
      "debug",
      "shellcode"
    ],

    "/reverse/example/":[
      "",
      "wxchat",
      "safedogrule"
    ],

    "/reverse/debug/":[
      "applescript",
      "sodbg",
      "smalidbg"
    ],


    "/reverse/apple/":[
      "applescript/"
    ],

    "/reverse/android/":[
      "smalidbg/",
      "sodbg"
    ],


    "/reverse/opcode/":[
      "",
      "x86/"
    ],

    "/reverse/opcode/x86/":[
      "",
      "reg",
      "mem",
      "op",
    ],

    "/reverse/ffile/":[
      "",
      "pe",
      "elf",
      "dex",
      "macho"
    ],

    "/reverse/ffile/pe/":[
      "",
      "tmp"
    ],

    "/reverse/ffile/elf/":[
      "",
      "tmp"
    ],

    "/reverse/ffile/dex/":[
      "",
      "tmp"
    ],

    "/reverse/ffile/macho/":[
      "",
      "tmp"
    ],

    "/reverse/tools/":[
      "ida",
      "jeb",
      "lldb",
      "x64dbg",
      "windbg",
      "apktool"
    ],

    "/reverse/game/":[
      "",
      "crack",
      "def",
      "ce",
      "dma",
    ],

    "/reverse/protect/":[
      "",
      "unpack",
      "vt",
      "ollvm",
      "bpf"
    ],

    "/reverse/symbolic/":[
      "",
      "z3",
      "angr",
      "hook",
      "mem",
      "stack",
      "ais3_crackme",
      "java",
      "whitehatvn2015_re400",
      "hackcon2016_angry-reverser"
    ],

    "/reverse/exploits/":[
      "",
      "fuzz",
      "afl",
      "winafl",
      "jackalope",
      "pin",
      "poc",
      "lheap",
      "wheap",
      "double",
      "string",
      "userafter",
      "stack",
    ],
    "/reverse/virus/":[
      "",
      "vyoudao",
      "cad",
      "Ransomware"
    ],

    "/web3/":[
      "",
      "web3",
      "bc",
      "dapp",
      "wallet",
      "coin",
      "tokenrescue",
      "smart",
      "ai",
      "poc",
      "vulns",
      "tools",
      "other",
      "analyse",
    ],

    "/web3/other/":[
      "",
      "explorer",
      "trade",
      "zcash",
      "monero",
      "ethclass",
      "trx",
      "base",
      "arbitrum",
      "optimism",
      "ethtype",
      "bob",
      "liquid",
      "merlin",
      "other"
    ],

    "/web3/ai/":[
      "",
      "safe",
      "data",
      "alg",
      "ethusdt",
      "predict",
      "freqtrade"
    ],

    "/web3/wallet/":[
      "",
      "sign",
      "hd",
      "btcwallet",
      "ethwallet",
      "solwallet",
      "tonwallet",
      "ms",
      "msdev",
      "hardware"
    ],

    "/web3/analyse/":[
      "ottersecbytecode",
      "fr",
      "mixer",
      "mev",
      "timelock",
      "mempool",
      "kyc",
      "dune",
      "erc20",
      "frun",
      "earn",
      "trade",
      "arb",
      "mp",
      "qt",
      "runes",
      "fin"
    ],

    "/web3/bc/":[
      "",
      "vm",
      "p2p",
      "alg",
      "calg",
      "zkp",
      "substrate",
      "cosmos",
      "corda",
      "fisco",
      "hyperledger",
      "zero",
    ],

    "/web3/bc/zkp/":[
      "",
      "theory",
      "starks",
      "snarks"
    ],

    "/web3/bc/comsos/":[
      ""
    ],

    "/web3/poc/":[
      "",
      "Spectra_finance",
      "Lifiprotocol"
    ],

    "/web3/vulns/":[
      "wallet",
      "airdrop",
      "dev",
      "walletcrack",
      "permit",
      "permit2",
      "create2",
      "approve",
      "poll",
      "sign",
      "reentrancy",
      "overflow",
      "signaturereplay",
      "txorigin",
      "logic",
      "badrandomness",
      "ddos",
      "c",
      "selectorclash",
      "oracle",
      "flashloan",
      "sumermoney",
      "shortaddress"
    ],

    "/web3/tools/":[
      "",
      "protect",
      "fk",
      "slither",
      "ityfuzz",
      "trident"
      
    ],

    "/web3/smart/":[
      "btc",
      "eth",
      "bnb",
      "solana",
      "polkadot",
      "polygen",
      "ton",
      "sui",
      "aptos",
      "eos",
      "xrp",
      "cardano",
      "kusama",
      "uniswap",
      "aave",
      "avalanche",
      "cosmos",
      "mantle",
      "imx",
      "near",
      "nervos",
      "partisia",
      "rootstock",
      "oracle",
      "meme",
      "layer2",
      "layer3",
      "cross",
      "faucet",
      "trade",
    ],

    "/web3/smart/rootstock":[
      "",
    ],

    "/web3/smart/meme":[
      "",
      "theory"
    ],

    "/web3/smart/btc":[
      "",
      "theory",
      "dev",
      "dapp",
      "dep",
      "mint",
      "monitor",
      "script"
    ],

    "/web3/smart/aave":[
      "",
      "theory"
    ],

    "/web3/smart/near":[
      "",
      "theory"
    ],

    "/web3/smart/eth":[
      "",
      "theory",
      "tools",
      "dapp",
      "solidity",
      "vyper",
      "huff",
    ],

    "/web3/smart/polygen":[
      "",
      "theory"
    ],

    "/web3/smart/aptos":[
      "",
      "theory"
    ],

    "/web3/smart/xrp":[
      "",
      "theory"
    ],



    "/web3/smart/eth/tools":[
      "",
      "truffle",
      "hardhat",
      "foundry"
    ],

    "/web3/smart/eth/dapp":[
      "",
      "contract",
      "transaction",
      "wallet",
      "interact"
    ],

    "/web3/smart/eth/solidity":[
      "",
      "erc20",
      "nft",
      "erc1115",
      "permit",
      "proxy",
      "cross",
    ],

    "/web3/smart/eth/vyper":[
      ""
    ],

    "/web3/smart/eth/huff":[
      ""
    ],

    "/web3/smart/solana":[
      "",
      "theory",
      "tools",
      "dapp",
      "rust",
      "move",
      "security"
    ],

    "/web3/smart/solana/dapp":[
      "",
      "dev",
      "user",
      "tran",
      "acctount",
      "program",
      "token"
    ],

    "/web3/smart/solana/rust":[
      "",
      "helloworld",
      "accountcreate",
      "accountclose",
      "accountcheck",
      "accountdata",
      "pda",
      "cpi",
      "spl",
      "nft"
    ],

    "/web3/smart/solana/move":[
      "",
      "lang"
    ],

    "/web3/smart/solana/tools":[
      "",
      "anchor",
      "solana",
      "seahorse"
    ],
    "/web3/smart/solana/security":[
      "",
      "audit",
      "phishing",
      "logic",
      "ddos"
    ],

    "/web3/smart/sui":[
      "",
      "theory",
      "tools",
      "dapp",
      "move"
    ],

    "/web3/smart/sui/tools":[
      ""
    ],

    "/web3/smart/sui/move":[
      ""
    ],

    "/web3/smart/ton":[
      "",
      "theory",
      "dapp",
      "gamefi",
      "func",
      "tact",
      "tolk",
      "fift",
      "tvm",
      "tlb",
      "jetton"
    ],

    "/web3/smart/ton/func":[
      ""
    ],

    "/web3/smart/eos":[
      "",
      "theory",
      "dapp",
      "server"
    ],

    "/web3/smart/oracle":[
      "",
      "theory"
    ],

    "/web3/smart/cardano":[
      "",
      "theory"
    ],

    "/web3/smart/kusama":[
      "",
      "theory"
    ],

    "/web3/smart/uniswap":[
      "",
      "theory",
      "v2",
      "v3",
      "flashloan"
    ],
    
    "/web3/smart/nervos":[
      "",
      "theory"
    ],

    "/web3/smart/avalanche":[
      "",
      "theory"
    ],

    "/web3/smart/bnb":[
      "",
      "theory"
    ],

    "/web3/smart/polkadot":[
      "",
      "theory"
    ],

    "/web3/bc/substrate":[
      "",
      "p2p",
      "rpc",
      "message",
      "gas",
      "crypt",
      "storage",
      "consensus",
      "event",
      "vm",
      "metadata"
    ],

    "/web3/bc/zero":[
      "",
      "blockchain",
      "cons",
      "vm",
      "rpc",
    ],

    "/web3/bc/alg":[
      "",
      "MerkleTree",
      "bft",
    ],

    "/web3/bc/calg":[
      "",
      "pow",
      "pos",
      "poh",
      "pol",
      "pob",
      "pw",
      "poa",
      "fba",
      "dpos",
      "pbft",
      "poet",
      "chaindbft",
      "tendermint"
    ],

    "/web3/smart/cosmos":[
      ""
    ],

    "/web3/bc/cosmos":[
      "",
    ],

    "/web3/smart/layer2/":[
      "",
      "zk-Rollups",
      "zksync",
      "raiden",
      "arbitrum",
      "optimism",
      "starknet",
    ],

    "/web3/smart/layer2/starknet/":[
      "",
      "theory",
      "helloworld"
    ],

    "/web3/smart/layer2/arbitrum/":[
      "",
      "theory",
      "helloworld"
    ],

    "/metaverse/":[
      "",
      "safe"
    ],

    "/tools/":[
      "kali/",
      "nmap/",
      "sqlmap/",
      "shodan/",
      "beef",
      "devtool",
      "burpsuite/",
      "metasploit/",
      "cobaltstrike/",
      "codeql/",
      {
        text: "内网渗透",
        // icon: "creative",
        prefix: "inner/",
        collapsible: true,
        children: ["mimikatz","bloodhound"],
      },
      {
        text: "代理转发",
        // icon: "creative",
        prefix: "fwd/",
        collapsible: true,
        children: ["frp",'lcx','portmap','ngrok',"msf",'cobaltstrike'],
      },

      
      {
        text: "WEBSHELL工具",
        // icon: "creative",
        prefix: "webshell/",
        collapsible: true,
        children: ["","caidao","behinder","antsword","godzilla",],
      },

    ],
    "/tools/kali/":[
      "install",
      "hijack",
    ],
    "/tools/codeql/":[
      "",
    ],
    "/tools/nmap/":[
      "",
      "tmp",
    ],
    "/tools/sqlmap/":[
      "",
      "basic",
      "target",
      "request",
      "optimization",
      "inject",
      "detection",
      "technique",
      "enumeration",
      "general",
      "other"
    ],
    "/tools/burpsuite/":[
      "",
      "tmp",
    ],
    "/tools/metasploit/":[
      "install",
    ],

    "/exps/":[
      "",
      "CVE-2021-39345",
      "CVE-2024-2961"
    ],

    "/web/sqli/":[
      "process",
      "type",
      "tmp"
    ],

    "/web/csrf/":[
      "",
      "tmp",
    ],
    "/web/updatefile/":[
      "",
      "tmp",
    ],
    "/web/ssrf/":[
      "",
      "tmp",
    ],
    "/web/xxe/":[
      "",
      "tmp",
    ],
    "/web/xss/":[
      "",
      "tmp",
    ],
    "/web/permission/":[
      "",
      "jwt",
      "oauth",
      "force",
      "access",
      "parallel",
      "vertical",
      "fa2",
      "sso",
    ],
    "/web/deserialization/":[
      "",
      "tmp",
    ],
    "/web/cache/":[
      "",
      "utm",
    ],
    "/web/clickjacking/":[
      "",
      "tmp",
    ],
    "/web/directory/":[
      "",
      "tmp",
    ],
    "/web/httpheader/":[
      "",
      "tmp",
    ],
    "/web/inject/":[
      "",
      "tmp",
    ],

    "/web/smuggling/":[
      "",
      "http2",
    ],
    "/web/eloits/ssti/":[
      "",
      "tmp",
    ],
    "/web/cors/":[
      "",
      "jsonp",
    ],
    "/web/":[
      "sqli/",
      "xss/",
      "xxe/",
      "cdn/",
      "app/",
      "ssrf/",
      "logic/",
      "updatefile/",
      "permission/",
      "inject/",
      "clickjacking/",
      "cors/",
      "audit/",
      "csrf/",
      "directory/",
      "cache/",
      "deserialization/",
      "ssti/",
      "websocket/",
      "smuggling/",
      "httpheader/",
    ],
    // "/web/": [
    //   "exploits/sqli/",
    //   "exploits/xss/",
    //   "exploits/xxe/",
    //   "exploits/app/",
    //   "exploits/cdn/",
    //   "exploits/ssrf/",
    //   "exploits/logic/",
    //   "exploits/updatefile/",
    //   "exploits/permission/",
    //   "exploits/inject/",
    //   "exploits/clickjacking/",
    //   "exploits/cors/",
    //   "exploits/audit/",
    //   "exploits/csrf/",
    //   "exploits/directory/",
    //   "exploits/cache/",
    //   "exploits/deserialization/",
    //   "exploits/ssti/",
    //   "exploits/websocket/",
    //   "exploits/smuggling/",
    //   "exploits/httpheader/",
    // ],

    "/cves/":[
      "",
      'examples/',
      "platform",
      'cve',
      'src',
      'bounty/'
    ],
    "/cves/examples/":[
      ""
    ],
    "/cves/bounty/":[
      "info"
    ],
    "/defense/":[
      "sdl/",
      "zero/",
      "threatintelligence/",
      "riskcontrol/",
      "er/",
      "devsecops/",
      "pk"
      
    ],
    "/pentest/":[
      "",
      "info/",
      "audit",
      "scan",
      "exploits",
      "persistence/",
      "priv/",
      "bypass/",
      "lateralm/",
      'clean/',
      "domain/",
      "docker/",
      "cloud/",
      "se",
      "ddos/",
      "app/",
      "dnshajack/",
    ],

    "/pentest/dnshajack/":[
      "",
      "exp",
    ],

    "/pentest/app/":[
      "",
      "http",
      "wxmini"
    ],

    "/pentest/info/":[
      "linux","mac","windows","router","other","topology","svc","exploits","threat"
    ],

    // "/pentest/scan/":[
    //   "",
    // ],

    "/pentest/exploits/":[
      "",
      "sftp"
    ],

    // "/pentest/attack/":[
    //   "",
    // ],

    "/pentest/persistence/":[
      "",
    ],

    "/pentest/bypass/":[
      "",
      "av",
      "local",
      "remote",
      "tools",
      "process",
      "php",
      "bin",
      "closeav",
      "bw",
      "captcha"
    ],

    "/pentest/priv/":[
      "",
      "rbashescape"
    ],

    "/pentest/lateralm/":[
      "",
    ],

    "/pentest/clean/":[
      "",
    ],

    "/pentest/domain/":[
      "windows","protocal","share","linux","hash","ldap","dcsync","ntlm","kerberos","pth","ptt","dcshadow","sidhistory","goldensaml","kerberoasting","adminsdholder"
    ],

    "/pentest/docker/":[
      "",
    ],

    "/pentest/cloud/":[
      "",
      "k8s"
    ],

    "/pentest/ddos/":[
      "",
      "http",
      "tcp",
      "dns"
    ],

    "/hardware/":[
      "/hardware/basic",
      "/hardware/communication/",
      "/hardware/plc/",
      "/hardware/fpga/",
      "/hardware/stm32/",
      "/hardware/embeded/",
      "/hardware/51/",
      "/hardware/arduino/",
      "/hardware/raspberrypi/",
    ],
    
    "/hardware/wireless/":[
      "sdr",
      "bluetooth",
      "wifi",
      "hdmi"
    ],
    "/hardware/iot/":[
      "",
      "car"
    ],
    "/hardware/incontrol/":[
      "",
    ],

    "/hardware/arduino/":[
      "theory",
      "helloworld",
      "module",
      "pluse",
      "badusb",
      "csb",
      "buzzer",
    ],

    "/hardware/quantum/":[
      "",
      "shor"
    ],

    "/ai/":[
      "",
      "examples/",
      "math",
      "python",
      "data",
      "feature"
    ],
    "/ai/examples/":[
      "",
      "killscriptviru"
    ],
    "/ai/gan/":[
      "math",
      "wgan",
      "dcgan"
    ],
    "/ai/ml/":[
      "svm",
      "regression",
      "bayes",
      "decisiontrees",
      "nearestneighbors"
    ],
    "/ai/deep/":[
      "nn",
      "cnn",
      "rnn",
      "gru",
      "lstm",
      "transformer",
      "autoencoder",
      "stablediffusion"
      
    ],
    "/ai/llm/":[
      "chat",
      "image",
      "mvideo",
      "ollama",
      "mcp"
    ],
    "/ctf/":[
      "",
      "res",
    ],
    "/ctf/flow/":[
      "tmp"
    ],
    "/ctf/misc/":[
      "",
      "defcon31",
      "crypt"
    ],
    "/ctf/bin/":[
      "tmp"
    ],
    "/ctf/pwn/":[
      "tmp"
    ],
    "/ctf/web/":[
      "tmp"
    ],

    "/ctf/web3/":[
      "openzeppelin"
    ],

    "/ppt/":[
      "ai",
    ],

    "/ppt/pentest/":[
      "1",
      "2"
    ],
    "/ppt/ai/":[
      "1",
      "2",
      "3"
    ],
    "/ppt/revw/":[
      "1",
      "2"
    ],

    "/pay/":[
      {
        text: "付费课程",
        // icon: "creative",
        prefix: "class/",
        collapsible: true,
        children: ["","pentest","bin","iosmac","windows","androidlinux","ai","tiny"],
      },
      "me",
      "group",
      "services",
      "alive",
      "platform",
      "download",
      "video",
    ],
    "/other/":[
      "",
    ],
    "/other/setup/":[
      "",
      "ios",
      "linux",
      "mac",
      "android",
      "windows",
    ],
    "/other/computediy/":[
      "",
      "install",
      "cpu",
      "ram",
      "ssd",
      "gpu",
      "mboard",
      "display"
    ],
    "/other/jailbreaking/":[
      "",
      "trollstore",
    ],
    "/other/router/":[
      "",
      "home",
      "openwrt",
    ],
    "/other/other/":[
      "error",
      "windowsdefender",
      "bbs",
      "yi",
      "tor",
      "client",
      "winget",
      "wsl",
      "hyperv",
      "discourse",
      "flarum",
      "info"
    ]
  },
);
