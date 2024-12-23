# 区块链

::: warning DeeLMind 提示
[算法学习网站MathPH](https://mathph.org/)
:::

## 什么是区块链
区块链技术是一种高级数据库机制，允许在企业网络中透明地共享信息。区块链数据库将数据存储在区块中，而数据库则一起链接到一个链条中。数据在时间上是一致的，因为在没有网络共识的情况下，您不能删除或修改链条。因此，您可以使用区块链技术创建不可改变的分类账，以便跟踪订单、付款、账户和其他交易。

[区块链可视化](https://andersbrownworth.com/blockchain/blockchain)

<DocsAD/>

## 区块链组件

* 网络节点
* 激励机制
* 加密算法
* 共识算法
* 交易处理
* 链上治理
* 状态转换
* 智能合约
* 分布式账本

## 开发框架

* [Substrate](./substrate/)
* [Cosmos SDK](./cosmos/)
* [Corda](./corda/)
* [FISCO BCOS](./fisco/)
* [Hyperledger-Fabric](./hyperledger/)

## 区块链分叉

区块链分叉是指在某一时刻，区块链网络中的节点出现了不一致的状态，导致链上的数据产生了分歧。这种分歧可以由于网络中的节点在达成共识时出现了分歧，也可以是由于协议的更新或网络的攻击等原因导致的。

区块链分叉通常分为两种类型：

1. **硬分叉（Hard Fork）：** 硬分叉是指区块链协议的升级，需要所有节点都同意并采用新的规则。在硬分叉发生时，原有的区块链分裂成两条链，一部分节点选择继续使用旧的规则（旧链），另一部分节点选择采用新的规则（新链）。硬分叉后，原有的区块链和新的区块链将彼此独立运行，互不兼容。

2. **软分叉（Soft Fork）：** 软分叉是指区块链协议的升级，只需要大多数节点同意并采用新的规则。在软分叉发生时，原有的区块链仍然保持完整性，但是只有采用新规则的节点产生的区块才会被其他节点接受。因此，软分叉并不会导致区块链的分裂，只会使得部分节点不再有效。

分叉可能会导致一些不便和风险，例如双花攻击、共识混乱和社区分裂等。因此，区块链的分叉通常需要经过慎重的考虑和社区共识，并在分叉前进行充分的准备和沟通。


## 区块链共识机制

区块链共识机制是分布式网络中用于达成一致的重要协议。它们确保所有参与者对区块链的状态达成共识，从而实现系统的安全性和完整性。以下是几种主要的区块链共识机制及其详细介绍：

### 1. 工作量证明 (Proof of Work, PoW)

- **定义**: 参与者（矿工）通过解决复杂的数学难题来获得记账权。难题的解是工作量的证明。
- **代表性区块链**: 比特币、以太坊（转向PoS前）
- **优点**:
  - 高安全性：攻击者需要控制超过50%的计算能力，成本极高。
  - 去中心化：任何人都可以参与挖矿。
- **缺点**:
  - 高能耗：需要大量计算资源和电力。
  - 低效率：交易确认时间较长。

### 2. 权益证明 (Proof of Stake, PoS)

- **定义**: 参与者（验证者）根据其持有的代币数量和年龄（即权益）来获得记账权。
- **代表性区块链**: 以太坊2.0、Cardano
- **优点**:
  - 低能耗：不需要进行大量计算。
  - 更快的交易确认时间。
- **缺点**:
  - 富者更富：持有大量代币的参与者更容易获得记账权。
  - 初始分配问题：初始代币分配不公可能导致集中化。

### 3. 委托权益证明 (Delegated Proof of Stake, DPoS)

- **定义**: 代币持有者投票选出代表（见证人）进行记账，代表定期更换。
- **代表性区块链**: EOS、TRON
- **优点**:
  - 高效率：交易确认时间短，吞吐量高。
  - 低能耗：不需要进行大量计算。
- **缺点**:
  - 中心化风险：少数代表控制网络。
  - 安全性：代表受到攻击可能影响网络稳定性。

### 4. 权威证明 (Proof of Authority, PoA)

- **定义**: 由预先批准的验证者（节点）进行记账。验证者的身份由其声誉或其他标准决定。
- **代表性区块链**: VeChain、PoA Network
- **优点**:
  - 高效率：交易确认时间短，吞吐量高。
  - 低能耗：不需要进行大量计算。
- **缺点**:
  - 中心化：验证者数量有限，可能导致集中化。
  - 信任问题：需要信任验证者。

### 5. 实用拜占庭容错算法 (Practical Byzantine Fault Tolerance, PBFT)

- **定义**: 网络中的节点通过多轮投票达成共识，能够容忍一定数量的恶意节点。
- **代表性区块链**: Hyperledger Fabric、Zilliqa
- **优点**:
  - 高效率：交易确认时间短，吞吐量高。
  - 低能耗：不需要进行大量计算。
- **缺点**:
  - 网络规模限制：适用于小规模网络，节点数量增加会导致性能下降。
  - 中心化风险：节点需要彼此信任。

### 6. 权益加权拜占庭容错算法 (Delegated Byzantine Fault Tolerance, dBFT)

- **定义**: 类似于 DPoS，代币持有者投票选出验证者，通过拜占庭容错算法达成共识。
- **代表性区块链**: NEO
- **优点**:
  - 高效率：交易确认时间短，吞吐量高。
  - 低能耗：不需要进行大量计算。
- **缺点**:
  - 中心化风险：少数代表控制网络。
  - 安全性：代表受到攻击可能影响网络稳定性。

### 7. 混合共识机制 (Hybrid Consensus)

- **定义**: 结合两种或多种共识机制的优点，以提高安全性和效率。
- **代表性区块链**: Decred（PoW + PoS）
- **优点**:
  - 结合不同共识机制的优点，提高网络整体性能。
  - 增强安全性：攻击者需要同时攻破多种


## 区块链开发

```JS
https://github.com/Savjee/SavjeeCoin

'use strict';
const crypto = require('crypto');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const debug = require('debug')('savjeecoin:blockchain');

class Transaction {
  /**
   * @param {string} fromAddress
   * @param {string} toAddress
   * @param {number} amount
   */
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
  }

  /**
   * Creates a SHA256 hash of the transaction
   *
   * @returns {string}
   */
  calculateHash() {
    return crypto
      .createHash('sha256')
      .update(this.fromAddress + this.toAddress + this.amount + this.timestamp)
      .digest('hex');
  }

  /**
   * Signs a transaction with the given signingKey (which is an Elliptic keypair
   * object that contains a private key). The signature is then stored inside the
   * transaction object and later stored on the blockchain.
   *
   * @param {string} signingKey
   */
  signTransaction(signingKey) {
    // You can only send a transaction from the wallet that is linked to your
    // key. So here we check if the fromAddress matches your publicKey
    if (signingKey.getPublic('hex') !== this.fromAddress) {
      throw new Error('You cannot sign transactions for other wallets!');
    }

    // Calculate the hash of this transaction, sign it with the key
    // and store it inside the transaction object
    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx, 'base64');

    this.signature = sig.toDER('hex');
  }

  /**
   * Checks if the signature is valid (transaction has not been tampered with).
   * It uses the fromAddress as the public key.
   *
   * @returns {boolean}
   */
  isValid() {
    // If the transaction doesn't have a from address we assume it's a
    // mining reward and that it's valid. You could verify this in a
    // different way (special field for instance)
    if (this.fromAddress === null) return true;

    if (!this.signature || this.signature.length === 0) {
      throw new Error('No signature in this transaction');
    }

    const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

class Block {
  /**
   * @param {number} timestamp
   * @param {Transaction[]} transactions
   * @param {string} previousHash
   */
  constructor(timestamp, transactions, previousHash = '') {
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  /**
   * Returns the SHA256 of this block (by processing all the data stored
   * inside this block)
   *
   * @returns {string}
   */
  calculateHash() {
    return crypto
      .createHash('sha256')
      .update(
        this.previousHash +
          this.timestamp +
          JSON.stringify(this.transactions) +
          this.nonce
      )
      .digest('hex');
  }

  /**
   * Starts the mining process on the block. It changes the 'nonce' until the hash
   * of the block starts with enough zeros (= difficulty)
   *
   * @param {number} difficulty
   */
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    debug(`Block mined: ${this.hash}`);
  }

  /**
   * Validates all the transactions inside this block (signature + hash) and
   * returns true if everything checks out. False if the block is invalid.
   *
   * @returns {boolean}
   */
  hasValidTransactions() {
    for (const tx of this.transactions) {
      if (!tx.isValid()) {
        return false;
      }
    }

    return true;
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  /**
   * @returns {Block}
   */
  createGenesisBlock() {
    return new Block(Date.parse('2017-01-01'), [], '0');
  }

  /**
   * Returns the latest block on our chain. Useful when you want to create a
   * new Block and you need the hash of the previous Block.
   *
   * @returns {Block[]}
   */
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  /**
   * Takes all the pending transactions, puts them in a Block and starts the
   * mining process. It also adds a transaction to send the mining reward to
   * the given address.
   *
   * @param {string} miningRewardAddress
   */
  minePendingTransactions(miningRewardAddress) {
    const rewardTx = new Transaction(
      null,
      miningRewardAddress,
      this.miningReward
    );
    this.pendingTransactions.push(rewardTx);

    const block = new Block(
      Date.now(),
      this.pendingTransactions,
      this.getLatestBlock().hash
    );
    block.mineBlock(this.difficulty);

    debug('Block successfully mined!');
    this.chain.push(block);

    this.pendingTransactions = [];
  }

  /**
   * Add a new transaction to the list of pending transactions (to be added
   * next time the mining process starts). This verifies that the given
   * transaction is properly signed.
   *
   * @param {Transaction} transaction
   */
  addTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error('Transaction must include from and to address');
    }

    // Verify the transactiion
    if (!transaction.isValid()) {
      throw new Error('Cannot add invalid transaction to chain');
    }

    if (transaction.amount <= 0) {
      throw new Error('Transaction amount should be higher than 0');
    }

    // Making sure that the amount sent is not greater than existing balance
    const walletBalance = this.getBalanceOfAddress(transaction.fromAddress);
    if (walletBalance < transaction.amount) {
      throw new Error('Not enough balance');
    }

    // Get all other pending transactions for the "from" wallet
    const pendingTxForWallet = this.pendingTransactions.filter(
      tx => tx.fromAddress === transaction.fromAddress
    );

    // If the wallet has more pending transactions, calculate the total amount
    // of spend coins so far. If this exceeds the balance, we refuse to add this
    // transaction.
    if (pendingTxForWallet.length > 0) {
      const totalPendingAmount = pendingTxForWallet
        .map(tx => tx.amount)
        .reduce((prev, curr) => prev + curr);

      const totalAmount = totalPendingAmount + transaction.amount;
      if (totalAmount > walletBalance) {
        throw new Error(
          'Pending transactions for this wallet is higher than its balance.'
        );
      }
    }

    this.pendingTransactions.push(transaction);
    debug('transaction added: %s', transaction);
  }

  /**
   * Returns the balance of a given wallet address.
   *
   * @param {string} address
   * @returns {number} The balance of the wallet
   */
  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }

    debug('getBalanceOfAdrees: %s', balance);
    return balance;
  }

  /**
   * Returns a list of all transactions that happened
   * to and from the given wallet address.
   *
   * @param  {string} address
   * @return {Transaction[]}
   */
  getAllTransactionsForWallet(address) {
    const txs = [];

    for (const block of this.chain) {
      for (const tx of block.transactions) {
        if (tx.fromAddress === address || tx.toAddress === address) {
          txs.push(tx);
        }
      }
    }

    debug('get transactions for wallet count: %s', txs.length);
    return txs;
  }

  /**
   * Loops over all the blocks in the chain and verify if they are properly
   * linked together and nobody has tampered with the hashes. By checking
   * the blocks it also verifies the (signed) transactions inside of them.
   *
   * @returns {boolean}
   */
  isChainValid() {
    // Check if the Genesis block hasn't been tampered with by comparing
    // the output of createGenesisBlock with the first block on our chain
    const realGenesis = JSON.stringify(this.createGenesisBlock());

    if (realGenesis !== JSON.stringify(this.chain[0])) {
      return false;
    }

    // Check the remaining blocks on the chain to see if there hashes and
    // signatures are correct
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (previousBlock.hash !== currentBlock.previousHash) {
        return false;
      }

      if (!currentBlock.hasValidTransactions()) {
        return false;
      }

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
    }

    return true;
  }
}

module.exports.Blockchain = Blockchain;
module.exports.Block = Block;
module.exports.Transaction = Transaction;
```