# Arbitrum

## [https://arbiscan.io/](https://arbiscan.io/)

<DocsAD/>

## 一、历史

1. **背景**
   - Arbitrum 是一种 Layer 2 解决方案，旨在提高以太坊的可扩展性和交易效率。
   - 以太坊网络的拥堵问题促使开发者寻找高效的解决方案，以降低交易费用和提高速度。

2. **发展历程**
   - 2018 年，Offchain Labs 团队成立，开始研发 Arbitrum 项目。
   - 2020 年，Arbitrum 测试网上线，吸引了众多开发者参与。
   - 2021 年，Arbitrum One 主网正式推出，标志着该项目的成功。

## 二、原理

1. **Arbitrum Rollup**
   - Arbitrum 采用 Rollup 技术，将多个交易打包到 Layer 2 中执行。通过将大量交易合并为一个交易提交到以太坊主链，降低了费用并提高了吞吐量。
   - Arbitrum Rollup 在链下执行交易，并在链上存储状态。

2. **安全性**
   - Arbitrum 的安全性依赖于以太坊主链，所有交易数据最终都会记录在以太坊上。
   - 在出现争议时，Arbitrum 允许任何人验证交易的有效性，并且可以通过链上数据进行回滚和验证。

3. **智能合约兼容性**
   - Arbitrum 完全兼容以太坊的智能合约，开发者可以使用 Solidity 编写 DApp，并在 Arbitrum 上进行部署。
   - 现有的以太坊工具（如 Remix 和 Truffle）也可以在 Arbitrum 上使用。

4. **用户体验**
   - Arbitrum 旨在提供更快、更便宜的交易体验，让用户在使用去中心化应用时拥有更好的体验。