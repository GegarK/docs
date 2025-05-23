# Layer2

Layer 2（第二层）是一个术语，指的是在区块链（通常是以太坊）之上建立的协议，旨在提高区块链的可扩展性和效率。Layer 2 解决方案通过将部分交易处理移到主链之外来减轻主链的负担，从而实现更快的交易速度和更低的交易费用。

<DocsAD/>

## 侧链跨链Layer2原理


## 主链侧链

侧链（Sidechain）是一种与主要区块链网络相连接的并行区块链网络。侧链可以与主链进行双向资产转移，并允许开发者在其上构建和执行智能合约。侧链通常具有自己的共识机制和区块链协议，与主链相比，侧链通常具有更高的交易速度和更低的交易成本。

## Layer1/2

#### Layer1

* Layer1 指的是区块链网络的基础层，是指整个区块链系统的底层协议和基础设施，包括底层的区块链协议、共识机制、网络架构等。
* Layer1 包含了实际的区块链网络，如比特币、以太坊等，其特点是安全性高、去中心化程度高、交易速度相对较慢，但可以实现高价值的资产交换和存储。

#### Layer2

* Layer2 则是建立在 Layer1 之上的第二层扩展解决方案，旨在通过在 Layer1 上构建更高效的第二层协议和机制来提高区块链的可扩展性、交易速度和吞吐量。
* Layer2 解决方案可以包括闪电网络、Rollup、Plasma 等，其特点是在不牺牲安全性和去中心化的情况下提高了交易速度和吞吐量，降低了交易成本，从而促进了更广泛的区块链应用和使用。

1. Plasma 
2. Validiums
3. StarkNet
4. Arbitrum
5. Optimism
6. zkSync
7. Polygon

## Rollups

将交易数据批量处理，并将结果存储在链上，从而减少链上交易数量，提高吞吐量和效率。

## Plasma

Plasma 通过创建多个子链（Plasma Chain）来处理交易。每个子链可以独立运行并处理大量交易，只将必要的信息和状态更新提交到以太坊主链。

## Optimistic Rollup

* Optimistic Rollup 的设计思想是乐观的，在链上只提交交易的摘要数据，而不是完整的交易数据。然后，在链下执行所有的交易，并生成一个计算证明（类似于“承诺”），证明交易执行的正确性。只有当有人对交易结果提出异议时，才会触发链上的争议解决过程。
* 由于大多数情况下交易是诚实的，因此这种方法可以大大减少链上的交易负载，提高网络吞吐量和效率。

## ZkRollup && zkEVM

* 利用零知识证明的密码学算法，在无需知道验证者是谁的情况下，完成外包工作的Layer2方法。
* zkEVM（Zero-Knowledge Ethereum Virtual Machine）是一种基于零知识证明（Zero-Knowledge Proof，简称 ZKProof）技术的以太坊虚拟机。

## zkSync

zkSync 是一种 Layer 2 扩展解决方案，旨在提高以太坊网络的吞吐量和可扩展性，同时降低交易成本。它通过使用 zkRollup 技术来实现高性能的批量交易处理，同时保持以太坊网络的去中心化特性。

## StarkNet

StarkNet 利用了 STARK（Scalable Transparent ARguments of Knowledge）技术，这是一种零知识证明技术，可以实现高度的可扩展性和隐私性。

## Arbitrum

* Arbitrum 也是一种 Layer 2 扩展解决方案，但其设计理念略有不同。它使用了一种称为“任意执行”的方法，在链上提交完整的交易数据和执行结果，然后通过执行者（executor）来验证交易执行的正确性，并生成验证证明。这样，链上并不需要完全信任执行者，但执行者需要在链下提交一个附加性的交易来保证交易执行的正确性。
* 相对于 Optimistic Rollup，Arbitrum 的设计更加保守，尽管它可以在一定程度上提高网络的可扩展性，但可能会在某些方面牺牲一些效率。
