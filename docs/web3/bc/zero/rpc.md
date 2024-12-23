# RPC接口

<DocsAD/>

* curl http://127.0.0.1:3030/get_block/2

```rust
use serde::{Deserialize, Serialize};
use warp::Filter;

#[derive(Debug, Clone,Serialize,Deserialize)]
pub struct Contract {
    pub code: String, // 合约代码
}

impl Contract {
    // 执行合约的简单逻辑
    pub fn execute(&self, sender: &String, receiver: &String, amount: u64) -> Result<String, String> {
        // 简单示例：检查合约代码是否包含特定字符串
        if self.code.contains("transfer") {
            // 这里可以添加更多的逻辑，例如余额检查等
            Ok(format!("Transfer of {} from {} to {} executed.", amount, sender, receiver))
        } else {
            Err("Invalid contract code".to_string())
        }
    }
}

#[derive(Debug)]
pub struct VirtualMachine;

impl VirtualMachine {
    // 执行合约
    pub fn execute(&self, contract: &Contract, sender: &String, receiver: &String, amount: u64) -> Result<String, String> {
        // 简单的指令集解析
        let instructions: Vec<&str> = contract.code.split_whitespace().collect();
        
        for instruction in instructions {
            match instruction {
                "transfer" => {
                    return Ok(format!("Transfer of {} from {} to {} executed.", amount, sender, receiver));
                }
                _ => return Err(format!("Unknown instruction: {}", instruction)),
            }
        }
        Err("No valid instructions found".to_string())
    }
}

#[derive(Debug, Clone,Serialize,Deserialize)]
pub struct Transaction {
    pub sender: String,
    pub receiver: String,
    pub amount: u64,
    pub contract: Option<Contract>
}

#[derive(Debug,Serialize,Deserialize,Clone)]
pub struct Block {
    pub index: u64,
    pub timestamp: u128,
    pub transactions: Vec<Transaction>,
    pub previous_hash: String,
    pub hash: String,
    pub nonce: u64,
    pub difficulty: usize, // 当前区块的难度
}

impl Block {
    pub fn new(index: u64, timestamp: u128, transactions: Vec<Transaction>, previous_hash: String, difficulty: usize) -> Self {
        Block {
            index,
            timestamp,
            transactions,
            previous_hash,
            hash: String::new(),
            nonce: 0,
            difficulty,
        }
    }

    // 矿工不断尝试找到一个符合难度的哈希值
    pub fn mine_block(&mut self) {
        while !self.hash_starts_with_n_zeros(self.difficulty) {
            self.nonce += 1;
            self.hash = Self::calculate_hash(self.index, self.timestamp, &self.transactions, &self.previous_hash, self.nonce);
        }
        println!("Block mined: {}", self.hash);
        let vm = VirtualMachine; // 创建虚拟机实例
        
        // 在挖矿成功后，执行合约
        for transaction in &self.transactions {
            if let Some(contract) = &transaction.contract {
                match vm.execute(contract, &transaction.sender, &transaction.receiver, transaction.amount) {
                    Ok(message) => println!("{}", message),
                    Err(error) => println!("Error executing contract: {}", error),
                }
            }
        }
    }

    pub fn calculate_hash(index: u64, timestamp: u128, transactions: &Vec<Transaction>, previous_hash: &str, nonce: u64) -> String {
        let block_data = format!("{:?}{:?}{:?}{}{}", index, timestamp, transactions, previous_hash, nonce);
        use sha2::Digest;
        format!("{:x}", sha2::Sha256::digest(block_data.as_bytes()))
    }

    fn hash_starts_with_n_zeros(&self, n: usize) -> bool {
        let bytes = self.hash.as_bytes();
        bytes.len() >= n && bytes[..n].iter().all(|&byte| byte == b'0')
    }
}

#[derive(Debug,Clone)]
pub struct Blockchain {
    pub chain: Vec<Block>,
    pub target_block_time: u64, // 目标出块时间（以秒为单位）
    pub difficulty_adjustment_interval: usize, // 每多少个区块调整一次难度
}

impl Blockchain {
    pub fn new() -> Self {
        let genesis_block = Block::new(0, Self::current_timestamp(), vec![], "0".to_string(), 4);
        Blockchain {
            chain: vec![genesis_block],
            target_block_time: 600,  // 假设目标是每10分钟（600秒）出一个块
            difficulty_adjustment_interval: 10, // 每10个区块调整一次难度
        }
    }

    pub fn add_block(&mut self, transactions: Vec<Transaction>) {
        let last_block = self.chain.last().unwrap();
        let difficulty = self.adjust_difficulty();

        let mut new_block = Block::new(
            last_block.index + 1,
            Self::current_timestamp(),
            transactions,
            last_block.hash.clone(),
            difficulty,
        );

        new_block.mine_block();
        self.chain.push(new_block);
    }

    // 动态调整难度
    pub fn adjust_difficulty(&self) -> usize {
        let last_block = self.chain.last().unwrap();
        let interval = self.chain.len() as u64;

        if interval % self.difficulty_adjustment_interval as u64 != 0 {
            return last_block.difficulty;  // 不调整
        }

        let previous_adjustment_block = &self.chain[self.chain.len() - self.difficulty_adjustment_interval];
        let time_taken = last_block.timestamp - previous_adjustment_block.timestamp;
        let expected_time = self.target_block_time * self.difficulty_adjustment_interval as u64;

        // 如果挖矿时间比目标时间短，难度增加，否则减少
        if time_taken < expected_time.into() {
            return last_block.difficulty + 1; // 增加难度
        } else if time_taken > expected_time.into() {
            return last_block.difficulty.saturating_sub(1); // 减少难度，但不能小于1
        }

        last_block.difficulty
    }

    // 获取当前时间戳
    fn current_timestamp() -> u128 {
        use std::time::{SystemTime, UNIX_EPOCH};
        let start = SystemTime::now();
        start.duration_since(UNIX_EPOCH).unwrap().as_millis()
    }

    // 获取当前区块链的长度
    pub fn get_chain_length(&self) -> usize {
        self.chain.len()
    }

    // 获取指定区块
    pub fn get_block(&self, index: usize) -> Option<&Block> {
        self.chain.get(index)
    }
}



#[tokio::main]
async fn main() {
    let mut blockchain = Blockchain::new();
    // 添加一些区块
    for _ in 0..15 {
        println!("Mining a new block...");

        // 创建合约并添加到交易中
        let contract = Contract {
            code: "transfer".to_string(), // 示例合约代码
        };

        blockchain.add_block(vec![
            Transaction {
                sender: "Alice".to_string(),
                receiver: "Bob".to_string(),
                amount: 10,
                contract: Some(contract), // 将合约添加到交易中
            },
        ]);
    }
    // 创建过滤器
    let blockchain_filter = warp::any().map(move || blockchain.clone());

    // 获取区块链信息的路由
    let get_chain = warp::path!("get_chain")
        .and(blockchain_filter.clone())
        .map(|blockchain: Blockchain| warp::reply::json(&blockchain.chain));

    // 获取特定区块的路由
    let get_block = warp::path!("get_block" / usize)
        .and(blockchain_filter.clone())
        .map(|index: usize, blockchain: Blockchain| {
            match blockchain.get_block(index) {
                Some(block) => warp::reply::json(&block),
                None => warp::reply::json(&"Block not found"),
            }
        });

    // 启动RPC服务器
    let routes = get_chain.or(get_block);
    warp::serve(routes).run(([127, 0, 0, 1], 3030)).await;
}
```