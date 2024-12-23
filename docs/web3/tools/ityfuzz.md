# ItyFuzz

## 什么是[ItyFuzz](https://github.com/fuzzland/ityfuzz)

ItyFuzz 是一种针对智能合约的最先进的模糊测试工具，专为发现智能合约中的漏洞而设计。它结合了符号执行和模糊测试，以识别以太坊虚拟机（EVM）和 MoveVM 智能合约中的漏洞。ItyFuzz 能够处理复杂的状态和交互场景，使其在去中心化金融（DeFi）应用和其他复杂智能合约中表现尤为出色。

<DocsAD/>

## 使用教程

```sh
ETH_RPC_URL=https://polygon-rpc.com ityfuzz evm\
    -t 0xbcf6e9d27bf95f3f5eddb93c38656d684317d5b4,0x5d6c48f05ad0fde3f64bab50628637d73b1eb0bb\
    -c polygon\
    --flashloan\
    --onchain-block-number 35718198\
    --onchain-etherscan-api-key XX

😊😊 Found vulnerabilities! 


================ Description ================
[Fund Loss]: Anyone can earn 19.970 ETH by interacting with the provided contracts

================ Trace ================
[Sender] 0xe1A425f1AC34A8a441566f93c82dD730639c8510
   ├─[1] Router.swapExactETHForTokens{value: 210197646.7465 ether}(0, path:(WETH → 0x5D6C48F05ad0fde3f64baB50628637d73B1eB0BB), address(this), block.timestamp);
   ├─[1] 0x5D6C48F05ad0fde3f64baB50628637d73B1eB0BB.redeem(0.9999 ether)
   │  ├─[2] [Sender] 0xe1A425f1AC34A8a441566f93c82dD730639c8510.fallback()
   │  │  └─[3] 0xBcF6e9d27bf95F3F5eDDB93C38656D684317D5b4.getBounty()
   │  [Sender] 0x8EF508Aca04B32Ff3ba5003177cb18BfA6Cd79dd
   │  │  ├─[3] 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270.withdraw(0)
   │  │  │  ├─[4] [Sender] 0x8EF508Aca04B32Ff3ba5003177cb18BfA6Cd79dd.fallback()
   │  │  │  │  └─[5] 0x5D6C48F05ad0fde3f64baB50628637d73B1eB0BB.fallback()
   │  │  └─[3] 0x5D6C48F05ad0fde3f64baB50628637d73B1eB0BB.fallback()
[Sender] 0xe1A425f1AC34A8a441566f93c82dD730639c8510
   └─[1] 0x5D6C48F05ad0fde3f64baB50628637d73B1eB0BB.call{value: 1.1529 ether}()
```