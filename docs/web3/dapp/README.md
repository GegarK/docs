# DAPP

## 什么是DAPP
DAPP（Decentralized application），WEB3.0前端，类比传统WEB前端。不同区块链平台使用的库不一样，但是大同小异。

<DocsAD/>

## DAPP开发

* [web3.0.js](https://web3js.org/)
* [ethers.js](https://docs.ethers.org/v5/)
* [https://solana-labs.github.io/solana-web3.js/](https://solana-labs.github.io/solana-web3.js/)
* [https://sdk.mystenlabs.com/typescript/install](https://sdk.mystenlabs.com/typescript/install)

```js
import { Web3 } from 'web3';

// Connect to the Ethereum network using the HTTP provider
// const { Web3 } = require('web3');
const ganacheUrl = 'http://localhost:7545';
const httpProvider = new Web3.providers.HttpProvider(ganacheUrl);
const web3 = new Web3(httpProvider);

async function main() {
  try {
    // Get the current block number from the network
    const currentBlockNumber = await web3.eth.getBlockNumber();
    console.log('Current block number:', currentBlockNumber);

    // Get the list of accounts in the connected node (e.g., Ganache)
    const accounts = await web3.eth.getAccounts();

    // Send a transaction to the network and wait for the transaction to be mined.
    // Note that sending a transaction with Ganache will cause it, in its default configuration, to min a new block.
    const transactionReceipt = await web3.eth.sendTransaction({
      from: accounts[0],
      to: accounts[1],
      value: web3.utils.toWei('0.001', 'ether'),
    });
    console.log('Transaction Receipt:', transactionReceipt);

    // Get the updated block number
    const updatedBlockNumber = await web3.eth.getBlockNumber();
    console.log('Updated block number:', updatedBlockNumber);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
```

## DAPP自动化开发

* [Alchemy](https://alchemy.com/)
* [Immutable](https://immutable.com/)