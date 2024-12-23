# 数字签名

<DocsAD/>

```solidity
// 导入web3.js
import { Web3 } from 'web3';
const web3 = new Web3();
// 创建账户
const account = web3.eth.accounts.create();
{
  address: '0x8D866ABAAf79E1fB5128B9557B09669F44bB6b72',
  privateKey: '0x419a74f16c55f07a42d7fc9f4b3c1bb47dd89f010e44d1135d73fef558f35c7c',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt]
}

// 通过私钥生成一个账户对象
const accountFromPrivateKey = web3.eth.accounts.privateKeyToAccount(
  account.privateKey
);

console.log('Address from Private Key:', accountFromPrivateKey.address);
Address from Private Key: 0x97a417677a82b4e080F9350654C42AcFf542B063

// 给消息签名
const signature = account.sign("Hello, Web3.js!");
{
  message: 'Hello, Web3.js!',
  messageHash: '0xc0f5f7ee704f1473acbb7959f5f925d787a9aa76dccc1b4914cbe77c09fd68d5',
  v: '0x1b',
  r: '0xf12dbab70fd440273e112a8c45f7b293b09c2719a3a1d37ec03450b7d7a1ed6b',
  s: '0x5d15632cba8afc573aeda264a16168a894ac368be9b84440f331c23e70b89253',
  signature: '0xf12dbab70fd440273e112a8c45f7b293b09c2719a3a1d37ec03450b7d7a1ed6b5d15632cba8afc573aeda264a16168a894ac368be9b84440f331c23e70b892531b'
}

// 从签名中恢复签名者的地址
const data = 'Hello, Web3.js!';
const sigObj = web3.eth.accounts.sign(
  data,
  '0x419a74f16c55f07a42d7fc9f4b3c1bb47dd89f010e44d1135d73fef558f35c7c'
);

console.log(sigObj);
{
  message: 'Hello, Web3.js!',
  messageHash: '0xc0f5f7ee704f1473acbb7959f5f925d787a9aa76dccc1b4914cbe77c09fd68d5',
  v: '0x1b',
  r: '0x5757bc96de40dd51092a89e4f50404ef766effb3154b5585b60f373eda810fc4',
  s: '0x4735d02946149661104d495e98a2655cc279139c5507d03cd061f6456e6aa0eb',
  signature: '0x5757bc96de40dd51092a89e4f50404ef766effb3154b5585b60f373eda810fc44735d02946149661104d495e98a2655cc279139c5507d03cd061f6456e6aa0eb1b'
}
const r = web3.eth.accounts.recover(data, sigObj.v, sigObj.r, sigObj.s);
console.log(r);
0x8D866ABAAf79E1fB5128B9557B09669F44bB6b72
```