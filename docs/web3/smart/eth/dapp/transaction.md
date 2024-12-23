# 获取交易

```js
const { Web3 } = require('web3');

// 初始化web3实例，连接到以太坊节点
const web3 = new Web3();

// 要检查的地址
const address = '0xdac17f958d2ee523a2206206994597c13d831ec7'; // 将此替换为要检查的地址

// 获取交易记录的函数
async function getTransactionsByAddress(address, _startBlockNumber, _endBlockNumber) {
  let startBlockNumber = _startBlockNumber;
  let endBlockNumber = _endBlockNumber;

  if (!endBlockNumber) {
    endBlockNumber = await web3.eth.getBlockNumber();
  }
  if (!startBlockNumber) {
    startBlockNumber = endBlockNumber - BigInt(10); // 默认检查最近10个区块
  }

  console.log(`Searching for transactions to/from address ${address} from block ${startBlockNumber} to ${endBlockNumber}`);

  for (let i = startBlockNumber; i <= endBlockNumber; i++) {
    let block = await web3.eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach(e => {
        if (address === e.from || address === e.to) {
          console.log(`Transaction found in block ${i}`);
          console.log(`  Hash        : ${e.hash}`);
          console.log(`  From        : ${e.from}`);
          console.log(`  To          : ${e.to}`);
          console.log(`  Value       : ${web3.utils.fromWei(e.value, 'ether')} ETH`);
          console.log(`  Gas Price   : ${web3.utils.fromWei(e.gasPrice, 'gwei')} Gwei`);
          console.log(`  Gas         : ${e.gas}`);
          console.log(`  Input       : ${e.input}`);
        }
      });
    }
  }
}

// 调用函数获取交易记录
getTransactionsByAddress(address);
```