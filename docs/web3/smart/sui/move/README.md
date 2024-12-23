# Move开发

**Move 语言** 是由 Meta（前身为 Facebook）为其区块链项目 **Diem**（原名 Libra）开发的编程语言。Move 语言专为区块链和智能合约设计，重点是资产和资源的安全管理。虽然它最初是为 Diem 项目开发的，但在 Meta 宣布停止该项目后，Move 语言的使用并未结束，反而得到了广泛的应用。

* [https://move-language.github.io/move/](https://move-language.github.io/move/)
* [https://move-book.com/index.html](https://move-book.com/index.html)

<DocsAD/>

## 1. **Aptos**
Aptos 是目前最著名的使用 Move 语言的区块链平台。Aptos 由前 Meta 的 Diem 团队成员创建，继承了 Diem 的许多技术和设计理念，并继续使用 Move 语言。Aptos 的目标是提供一个高效、安全、可扩展的区块链，尤其注重去中心化金融（DeFi）、数字资产和智能合约的开发。

- **Aptos 的特点**：
  - **高吞吐量**：Aptos 采用了一些创新的共识机制和并行处理方式，能够提供每秒数万笔交易（TPS）的吞吐量。
  - **安全性和资源管理**：借助 Move 语言的资源管理模型，Aptos 强调资产和资源的安全性，避免了传统区块链中的许多常见问题（如双重支付、资产丢失等）。
  - **智能合约**：Aptos 使用 Move 语言来实现高效且安全的智能合约，确保代码在执行时不违反资源安全的基本规则。

## 2. **Sui**
Sui 是由 **Mysten Labs** 开发的另一个基于 Move 语言的区块链项目。Sui 与 Aptos 同样来自 Diem 的前团队，旨在构建一个高性能、高可扩展性的智能合约平台。Sui 的设计理念侧重于低延迟、高吞吐量，并利用 Move 语言的资源管理能力来提高区块链系统的效率和安全性。

- **Sui 的特点**：
  - **水平扩展性**：Sui 采用了一种创新的方式来处理交易并行，能够实现大规模的吞吐量。
  - **高效的资产管理**：使用 Move 语言对资源（如代币、NFT）进行管理，确保每个资源的唯一性和安全性。
  - **即时交易执行**：Sui 在设计上优化了交易确认时间，旨在实现接近即时的交易执行。

## 3. **其他基于 Move 的区块链项目**

- **Solana**:[https://docs.anza.xyz/proposals/embedding-move](https://docs.anza.xyz/proposals/embedding-move)

```move
#[test_only]
module hello_world::hello_world_tests;

use hello_world::hello_world;

#[test]
fun test_hello_world() {
    assert!(hello_world::hello_world() == b"Hello, World!".to_string(), 0);
}

module test_addr::test {
    struct Example has copy, drop { a: address }

    use std::debug;
    friend test_addr::another_test;

    public fun print() {
        let example = Example { a: @test_addr };
        debug::print(&example)
    }
}
```