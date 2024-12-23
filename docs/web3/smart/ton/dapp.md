# DAPP开发

## [TON DAPP文档](https://docs.ton.org/mandarin/develop/dapps/)

<DocsAD/>

* [安装库](https://docs.ton.org/mandarin/develop/dapps/apis/sdk)
* [API Toncenter](https://toncenter.com/)

```sh
npm install tonweb
```

## HelloWorld

```js
// 导入连接TON网络库
const TonWeb = require('tonweb');
// 实例化
const tonweb = new TonWeb();

// 获取账户余额
function getBalance(addr="EQChB2eMoFG4ThuEsZ6ehlBPKJXOjNxlR5B7qKZNGIv256Da"){
    tonweb.getBalance(addr).then(balance=>{
        console.log("余额：",balance,"TON");
    })
    .catch(error => {
        console.log(error);
    })
}
getBalance()

// 获取交易
function getTransactions(addr="EQChB2eMoFG4ThuEsZ6ehlBPKJXOjNxlR5B7qKZNGIv256Da"){
    tonweb.getTransactions(addr).then(tran=>{
        console.log(tran);
    })
    .catch(error => {
        console.log(error);
    })
}
getTransactions()
```

## 获取交易

```js
async function getLatestTransactions(address) {
    try {
        const transactions = await tonweb.provider.getTransactions(address, 1); // 获取最近的1笔交易
        console.log(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
    }
}
```

## 获取地址合约

```js


```

## 获取Block信息

```js


```