# BTC监控

## BTC浏览器

* [btcscan](https://btcscan.org/)
* [btcmempool](https://btcmempool.org/)

<DocsAD/>

## 监控脚本

```rust
use reqwest::Error;
use serde::Deserialize;

static HOST_API : &str = "https://btcscan.org/api/";

// 定义 `Prevout` 结构，表示输入交易中的前一个输出
#[derive(Deserialize, Debug)]
struct Prevout {
    scriptpubkey: String,
    scriptpubkey_asm: String,
    scriptpubkey_type: String,
    scriptpubkey_address: String,
    value: u64,
}

// 定义 `Vin` 结构，表示输入交易
#[derive(Deserialize, Debug)]
struct Vin {
    txid: String,
    vout: u64,
    prevout: Prevout,
    sequence: u64,
    witness: Vec<String>,
    is_coinbase: bool,
}

// 定义 `Vout` 结构，表示输出交易
#[derive(Deserialize, Debug)]
struct Vout {
    scriptpubkey: String,
    scriptpubkey_asm: String,
    scriptpubkey_type: String,
    scriptpubkey_address: Option<String>, // OP_RETURN 类型时可能没有地址
    value: u64,
}

// 定义 `Status` 结构，表示交易的状态
#[derive(Deserialize, Debug)]
struct Status {
    confirmed: bool,
    block_height: u64,
    block_hash: String,
    block_time: u64,
}

// 定义 `Transaction` 结构
#[derive(Deserialize, Debug)]
struct Transaction {
    txid: String,
    version: u64,
    locktime: u64,
    vin: Vec<Vin>,
    vout: Vec<Vout>,
    size: u64,
    weight: u64,
    fee: u64,
    status: Status,
}

// 定义 `ApiResponse` 结构来接收 API 响应
#[derive(Deserialize, Debug)]
struct ApiResponse {
    status: String,
    message: String,
    data: Transaction,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    // 替换为实际的交易哈希
    let txid = "c2dd29fa161decfc349840f2fa8a68e9ada7b804bc5057d242da308768437afc";
    let url = format!("https://btcscan.org/api/tx/{}", txid);

    // 发送请求并获取响应
    let response = reqwest::get(&url).await?;

    // 打印原始响应体
    let body = response.text().await?;
    println!("原始响应: {}", body);

    // 解析 JSON 响应
    let transaction: Transaction = serde_json::from_str(&body).expect("");

    // 打印交易相关信息
    println!("交易哈希: {}", transaction.txid);
    println!("版本: {}", transaction.version);
    println!("锁定时间: {}", transaction.locktime);
    println!("交易大小: {} 字节", transaction.size);
    println!("权重: {}", transaction.weight);
    println!("交易手续费: {}", transaction.fee);
    println!("确认状态: {}", transaction.status.confirmed);
    println!("区块哈希: {}", transaction.status.block_hash);
    println!("区块高度: {}", transaction.status.block_height);
    println!("区块时间: {}", transaction.status.block_time);

    // 打印交易输入信息
    for (i, vin) in transaction.vin.iter().enumerate() {
        println!("输入 {}:", i);
        println!("  输入交易哈希: {}", vin.txid);
        println!("  输出索引: {}", vin.vout);
        println!("  前一个输出的地址: {}", vin.prevout.scriptpubkey_address);
        println!("  金额: {}", vin.prevout.value);
    }

    // 打印交易输出信息
    for (i, vout) in transaction.vout.iter().enumerate() {
        println!("输出 {}:", i);
        if let Some(address) = &vout.scriptpubkey_address {
            println!("  输出地址: {}", address);
        } else {
            println!("  输出地址: 无 (OP_RETURN)");
        }
        println!("  金额: {}", vout.value);
    }

    Ok(())
}
```