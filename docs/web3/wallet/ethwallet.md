# ETH钱包开发

<DocsAD/>

## 账户生成

* 公钥私钥

```js
const randomAccount = web3.eth.accounts.wallet.create(1);
```

* 助记词

```js
const { Wallet } = require('ethers');

// 创建随机钱包并输出助记词和地址
const randomWallet = Wallet.createRandom();
console.log('助记词:', randomWallet.mnemonic.phrase);
console.log('地址:', randomWallet.address);
console.log('私钥:', randomWallet.privateKey);

助记词: brisk light news girl gold arrest tomato spare chimney around twist change
地址: 0xA6BF9BDCA11D9c0955892ba3E87a832827253694
私钥: 0xee60c1b32a5a16dfc49c2efedc8d0e7014d2a1fc4b4e5594e1ca1639260796ae
```

## 交易信息

* 获取资金

```js
const address = '0xfb0bc05F1aC61a566E70890e0e000E66F147ae66';

web3.eth.getBalance(address).then((balance)=>{
    console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
}).catch(err => {
    console.error(err);
});
```

* 发送交易

```js
async function sendTransaction() {
    const fromAddress = '0xfb0bc05F1aC61a566E70890e0e000E66F147ae66';
    const privateKey = '';
    // 获取当前交易计数 (nonce)
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest');
    // 设置交易参数
    const tx = {
        from: fromAddress,
        to: '0x9Ae9119e614BEdffbd0B66756Cf2F4F4CFdb7ca9',
        value: web3.utils.toWei('0.1', 'ether'),  // 发送 0.1 ETH
        gas: 21000,  // 用于简单的 ETH 转账
        gasPrice: await web3.eth.getGasPrice(),  // 获取当前网络的 gas 价格
        nonce: nonce,
    };
    // 签名交易
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    // 发送已签名的交易
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    .on('receipt', receipt => {
        console.log('交易成功:', receipt);
    })
    .on('error', err => {
        console.error('交易失败:', err);
    });
}
```

## 账户恢复

* 私钥恢复

```js
const accountFromPrivateKey = web3.eth.accounts.privateKeyToAccount(
  'privateKey'
);
```

* 助记词恢复

```js
// 引入 ethers.js 库
const { Wallet } = require('ethers');

// 助记词（通常由 12 或 24 个单词组成）
const mnemonic = 'brisk light news girl gold arrest tomato spare chimney around twist change';

// 使用助记词恢复钱包
const wallet = Wallet.fromPhrase(mnemonic);

// 输出钱包的地址和私钥
console.log('地址:', wallet.address);
console.log('私钥:', wallet.privateKey);

地址: 0xA6BF9BDCA11D9c0955892ba3E87a832827253694
私钥: 0xee60c1b32a5a16dfc49c2efedc8d0e7014d2a1fc4b4e5594e1ca1639260796ae
```