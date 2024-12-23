# 获取合约

```js
const { Web3 } = require('web3');

// 初始化web3实例，连接到以太坊节点
const web3 = new Web3();

// 要检查的地址
const address = '0xdac17f958d2ee523a2206206994597c13d831ec7'; // 将此替换为要检查的地址

// 函数：判断地址是否包含智能合约
async function checkIfContract(address) {
  try {
    // 获取地址的代码
    const code = await web3.eth.getCode(address);

    // 检查代码是否为空
    if (code !== '0x') {
      console.log(`Address ${address} contains a smart contract.`);
      console.log(code);
    } else {
      console.log(`Address ${address} does not contain a smart contract.`);
    }
  } catch (error) {
    console.error(`Error checking address ${address}:`, error);
  }
}

// 调用函数
checkIfContract(address);
0x606060405260043610610196576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461019b5780630753c30c14610229578063095ea7b3146102625780630e136b19146102a4...
```