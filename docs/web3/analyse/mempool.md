# Mempool

Mempool（Memory Pool）是指在区块链网络中，尚未被打包进区块的所有待处理交易的集合。交易首先被广播到网络，并存储在每个节点的 Mempool 中，直到矿工将这些交易打包到一个新的区块中。

<DocsAD/>

## Mempool 的主要特点

- **临时存储：** Mempool 是交易在区块链上被确认之前的临时存储区。
- **交易优先级：** 矿工通常根据交易费用（Gas 费）优先选择哪些交易要优先打包进区块。因此，支付更高费用的交易通常会更快地被打包。
- **网络健康：** Mempool 的大小和处理时间可以反映网络的拥堵情况。如果 Mempool 中的交易数量过多，可能意味着网络负荷较高，交易确认时间可能会变长。

## Mempool 的工作流程

1. **广播交易：** 用户发起一笔交易并将其广播到区块链网络。
2. **交易验证：** 节点验证交易的合法性（例如，签名是否正确，账户余额是否充足）。
3. **存储交易：** 验证通过的交易会被放入节点的 Mempool 中，等待被打包。
4. **打包交易：** 矿工从 Mempool 中选择交易打包进一个新的区块，并将区块广播到全网。

## 示例图示

```plaintext
1. 用户发起交易
     ↓
2. 交易广播到区块链网络
     ↓
3. 节点验证交易合法性
     ↓
4. 交易存储在 Mempool 中
     ↓
5. 矿工从 Mempool 中选择交易打包到区块中
     ↓
6. 新区块广播到全网，交易从 Mempool 中移除
```

## 监控脚本

```js
const { ethers } = require('ethers');

const provider = new ethers.WebSocketProvider('wss://eth-mainnet.g.alchemy.com/v2/ged06NfoHIbeQK9sMoJpm_RatVPnguAp');

let network = provider.getNetwork()
network.then(res => console.log(`[${(new Date).toLocaleTimeString()}] 连接到 chain ID ${res.chainId}`));

function throttle(fn, delay) {
    let timer;
    return function(){
        if(!timer) {
            fn.apply(this, arguments)
            timer = setTimeout(()=>{
                clearTimeout(timer)
                timer = null
            },delay)
        }
    }
}

const main = async () => {
    let i = 0;
    // 3. 监听pending交易，获取txHash
    console.log("\n3. 监听pending交易，打印txHash。")
    provider.on("pending", async (txHash) => {
        if (txHash && i < 100) {
            // 打印txHash
            console.log(`[${(new Date).toLocaleTimeString()}] 监听Pending交易 ${i}: ${txHash} \r`);
            i++
            }
    });

    // 4. 监听pending交易，并获取交易详情
    console.log("\n4. 监听pending交易，获取txHash，并输出交易详情。")
    let j = 0
    provider.on("pending", throttle(async (txHash) => {
        if (txHash && j <= 100) {
            // 获取tx详情
            let tx = await provider.getTransaction(txHash);
            console.log(`\n[${(new Date).toLocaleTimeString()}] 监听Pending交易 ${j}: ${txHash} \r`);
            console.log(tx);
            j++
            }
    }, 1000));
};

main()
```