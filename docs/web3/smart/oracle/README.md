# 预言机Chainlink(LINK)

[Chainlink](https://chain.link/) 是一个去中心化的预言机网络，用于将外部数据安全地传递到区块链。它允许智能合约与现实世界的数据源、APIs 和支付系统进行交互。

<DocsAD/>

## 2.1 Chainlink V1

- **发布日期**: 2017年9月
- **主要特性**:
  - 提供去中心化的预言机服务。
  - 支持基本的智能合约数据请求。

## 2.2 Chainlink V2

- **发布日期**: 2020年6月
- **主要特性**:
  - 引入了 Chainlink 数据源的标准化和多数据源聚合功能。
  - 支持更多数据类型和请求形式。
  - 改进了链上合约与链下数据源的交互机制。

## 2.3 Chainlink V3

- **发布日期**: 2021年11月
- **主要特性**:
  - 引入了“去中心化的预言机网络”（DPN）模型。
  - 支持更复杂的智能合约和数据请求。
  - 增强了安全性和可靠性。
  - 提供了改进的链上和链下数据处理功能。

## 3. 关键事件

## 3.1 主网启动

- **日期**: 2019年5月
- **描述**: Chainlink 的主网正式上线，标志着去中心化预言机服务的全面推出。

## 3.2 合约升级

- **日期**: 2020年12月
- **描述**: Chainlink 进行了一次重要的合约升级，引入了新的功能和改进，增强了合约的灵活性和安全性。

## 3.3 与 Google Cloud 的合作

- **日期**: 2021年3月
- **描述**: Chainlink 与 Google Cloud 达成合作，通过 Chainlink 预言机提供 Google Cloud 上的数据和计算能力。


## 5. 链接和参考

- [Chainlink 官方网站](https://chain.link)
- [Chainlink 文档](https://docs.chain.link/)
- [Chainlink GitHub](https://github.com/smartcontractkit/chainlink)

<DocsAD/>

## [Chainlink例子](https://docs.chain.link/data-feeds/getting-started)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED
 * VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

/**
 * If you are reading data feeds on L2 networks, you must
 * check the latest answer from the L2 Sequencer Uptime
 * Feed to ensure that the data is accurate in the event
 * of an L2 sequencer outage. See the
 * https://docs.chain.link/data-feeds/l2-sequencer-feeds
 * page for details.
 */

contract DataConsumerV3 {
    AggregatorV3Interface internal dataFeed;

    /**
     * Network: Sepolia
     * Aggregator: BTC/USD
     * Address: 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
     */
    constructor() {
        dataFeed = AggregatorV3Interface(
            0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
        );
    }

    /**
     * Returns the latest answer.
     */
    function getChainlinkDataFeedLatestAnswer() public view returns (int) {
        // prettier-ignore
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        return answer;
    }
}
```