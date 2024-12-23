# 区块链

<DocsAD/>

```rust
#[derive(Debug, Clone)]
pub struct Transaction {
    pub sender: String,
    pub receiver: String,
    pub amount: u64,
}

#[derive(Debug, Clone)]
pub struct Block {
    pub index: u64,
    pub timestamp: u128,
    pub transactions: Vec<Transaction>,
    pub previous_hash: String,
    pub hash: String,
    pub nonce: u64,
}

impl Block {
    pub fn new(index: u64, timestamp: u128, transactions: Vec<Transaction>, previous_hash: String) -> Self {
        let nonce = 0;
        let hash = Self::calculate_hash(index, timestamp, &transactions, &previous_hash, nonce);
        Block {
            index,
            timestamp,
            transactions,
            previous_hash,
            hash,
            nonce,
        }
    }

    pub fn calculate_hash(index: u64, timestamp: u128, transactions: &Vec<Transaction>, previous_hash: &str, nonce: u64) -> String {
        // 使用SHA256对数据进行哈希处理，确保区块数据的完整性
        let block_data = format!("{:?}{:?}{:?}{}{}", index, timestamp, transactions, previous_hash, nonce);
        use sha2::Digest;
        format!("{:x}", sha2::Sha256::digest(block_data.as_bytes()))
    }
}

#[derive(Debug)]
pub struct Blockchain {
    pub chain: Vec<Block>,
}

impl Blockchain {
    pub fn new() -> Self {
        // 初始化创世区块
        let genesis_block = Block::new(0, Self::current_timestamp(), vec![], "0".to_string());
        Blockchain {
            chain: vec![genesis_block],
        }
    }

    pub fn add_block(&mut self, transactions: Vec<Transaction>) {
        let last_block = self.chain.last().unwrap();
        let new_block = Block::new(
            last_block.index + 1,
            Self::current_timestamp(),
            transactions,
            last_block.hash.clone(),
        );
        self.chain.push(new_block);
    }

    fn current_timestamp() -> u128 {
        // 获取当前时间戳
        use std::time::{SystemTime, UNIX_EPOCH};
        let start = SystemTime::now();
        start.duration_since(UNIX_EPOCH).unwrap().as_millis()
    }
}


fn main(){
    let mut block_chain = Blockchain::new();

    block_chain.add_block(vec![
        Transaction { sender: "One".to_string(), receiver: "Two".to_string(), amount: 40 },
        Transaction { sender: "One1".to_string(), receiver: "Two1".to_string(), amount: 40 }
    ]);
    block_chain.add_block(vec![
        Transaction { sender: "Two".to_string(), receiver: "One".to_string(), amount: 20 },
    ]);

    println!("{:#?}",block_chain);
}
```