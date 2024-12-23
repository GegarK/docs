# 抢先交易

抢先交易（Front-running）是一种攻击行为，通常发生在区块链或去中心化金融（DeFi）系统中。当某人观察到即将发布的交易信息（例如，在去中心化交易所提交的订单），他们会提前提交一笔自己的交易，以便在原始交易之前执行，从而获利。

<DocsAD/>

* DEX 交易：在 Uniswap 等去中心化交易所中，抢先交易常用于操纵代币价格。例如，当有大额交易提交时，攻击者抢先购买代币，然后在受害者交易完成后卖出以获利。


## 本地脚本例子

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PriceChangingToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("PriceChangingToken", "PCT") {
        _mint(msg.sender, initialSupply);
    }

    function buy() external payable {

    }

    function sell(uint256 amount) external {

    }
}
```

```js
const { ethers } = require("ethers");

// 连接到以太坊节点
const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545'); // 替换为你的节点URL

// 设置合约地址和 ABI
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractABI = [
    "function buy() external payable"
];

// 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720
const wallet = new ethers.Wallet('0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6', provider);

async function monitorMempool() {
    console.log("Monitoring mempool for transactions...");

    // 监听 pending 交易
    provider.on("pending", async (txHash) => {
        try {
            const transaction = await provider.getTransaction(txHash);
            if (transaction) {
                console.log(`Detected transaction: ${txHash}`);

                // 判断是否是目标合约的交易
                if (transaction.to === contractAddress) {
                    console.log(`Transaction to target contract detected: ${txHash}`);

                    // 判断是否调用了特定的函数（例如：buy）
                    const iface = new ethers.Interface(contractABI);
                    const decodedData = iface.parseTransaction({ data: transaction.data });

                    console.log(`Function called: ${decodedData.name}`); // 输出函数名
                    if (decodedData.name === "buy") {
                        console.log("抢先交易");
                    }
                }
            }
        } catch (error) {
            console.error(`Error fetching transaction ${txHash}:`, error);
        }
    });
}

// 启动监控
monitorMempool();
```