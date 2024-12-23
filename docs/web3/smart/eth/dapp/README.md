# DAPP开发

::: warning DeeLMind 提示
以太坊DAPP开发，可以直接调用以太坊接口，也可以调用其它平台的API接口
:::

## 环境搭建

* [web3.js](https://docs.web3js.org/api/web3-eth/)

```js
npm install web3
```

* HelloWorld

```js
// 导入web3.js
const { Web3 } = require('web3');
// 实例化
const web3 = new Web3();

const address = '0xfb0bc05F1aC61a566E70890e0e000E66F147ae66';

// 获取余额
web3.eth.getBalance(address).then((balance)=>{
    console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
}).catch(err => {
    console.error(err);
});
```

<DocsAD/>