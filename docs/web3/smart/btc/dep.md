# 节点部署

## [完整节点部署](https://bitcoin.org/en/full-node)

* [下载程序](https://bitcoin.org/en/download)

## RPC接口

`bitcoin.conf`中添加用户名密码：

```conf
rpcuser=yourusername
rpcpassword=yourpassword

bitcoin-cli.exe -rpcuser=user -rpcpassword=pass getblockchaininfo

{
  "chain": "main",
  "blocks": 429742,
  "headers": 865836,
  "bestblockhash": "0000000000000000019d727776a5c3b7701a2be3ea2187f2357a4133a6fd33e4",
  "difficulty": 225832872179.4596,
  "time": 1473839719,
  "mediantime": 1473837334,
  "verificationprogress": 0.1405214791612086,
  "initialblockdownload": true,
  "chainwork": "000000000000000000000000000000000000000000268f5eb2eba5ba26737f02",
  "size_on_disk": 555003712,
  "pruned": true,
  "pruneheight": 429266,
  "automatic_pruning": true,
  "prune_target_size": 1999634432,
  "warnings": ""
}
```

<DocsAD/>

## 轻节点钱包

* [electrum](https://electrum.org/)

## BTC命令行

### 1. 节点信息
- **获取节点版本**
  ```bash
  bitcoin-cli getversion
  ```

- **获取区块链信息**
  ```bash
  bitcoin-cli getblockchaininfo
  ```

- **获取网络信息**
  ```bash
  bitcoin-cli getnetworkinfo
  ```

### 2. 钱包操作
- **创建新钱包**
  ```bash
  bitcoin-cli createwallet "wallet_name"
  ```

- **获取钱包余额**
  ```bash
  bitcoin-cli getbalance
  ```

- **发送比特币**
  ```bash
  bitcoin-cli sendtoaddress "address" amount
  ```

- **获取交易信息**
  ```bash
  bitcoin-cli gettransaction "txid"
  ```

### 3. 交易操作
- **创建原始交易**
  ```bash
  bitcoin-cli createrawtransaction '[{"txid": "some_txid", "vout": 0}]' '{"address": amount}'
  ```

- **签名原始交易**
  ```bash
  bitcoin-cli signrawtransactionwithwallet "raw_transaction"
  ```

- **发送原始交易**
  ```bash
  bitcoin-cli sendrawtransaction "signed_transaction"
  ```

### 4. 内存池操作
- **获取内存池信息**
  ```bash
  bitcoin-cli getmempoolinfo
  ```

- **获取内存池中的所有交易ID**
  ```bash
  bitcoin-cli getrawmempool
  ```

### 5. 区块操作
- **获取区块高度**
  ```bash
  bitcoin-cli getblockcount
  ```

- **获取区块信息**
  ```bash
  bitcoin-cli getblock "blockhash"
  ```

- **获取特定区块的交易**
  ```bash
  bitcoin-cli getblock "blockhash" 2
  ```