# 共识算法

<DocsAD/>

## POW

```rust
#[derive(Debug, Clone)]
pub struct Transaction {
    pub sender: String,
    pub receiver: String,
    pub amount: u64,
}

#[derive(Debug)]
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

#[derive(Debug)]
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
}



fn main() {
    let mut blockchain = Blockchain::new();

    // 添加一些区块
    for _ in 0..15 {
        println!("Mining a new block...");
        blockchain.add_block(vec![
            Transaction { sender: "Alice".to_string(), receiver: "Bob".to_string(), amount: 10 },
        ]);
    }

    // 打印区块链信息，检查难度调整
    for block in blockchain.chain {
        println!("Block {}: Hash: {}, Difficulty: {}", block.index, block.hash, block.difficulty);
    }
}
```

## POS

```rust
#[derive(Debug, Clone)]
pub struct Transaction {
    pub sender: String,
    pub receiver: String,
    pub amount: u64,
}

#[derive(Debug)]
pub struct Block {
    pub index: u64,
    pub timestamp: u128,
    pub transactions: Vec<Transaction>,
    pub previous_hash: String,
    pub hash: String,
    pub validator: String, // 生成该区块的验证者
}

impl Block {
    pub fn new(index: u64, timestamp: u128, transactions: Vec<Transaction>, previous_hash: String, validator: String) -> Self {
        Block {
            index,
            timestamp,
            transactions,
            previous_hash,
            hash: String::new(),
            validator,
        }
    }

    pub fn calculate_hash(&self) -> String {
        let block_data = format!("{:?}{:?}{:?}{}", self.index, self.timestamp, self.transactions, self.previous_hash);
        use sha2::Digest;
        format!("{:x}", sha2::Sha256::digest(block_data.as_bytes()))
    }
}

#[derive(Debug)]
pub struct Blockchain {
    pub chain: Vec<Block>,
    pub validators: Vec<String>, // 验证者列表
}

impl Blockchain {
    pub fn new(validators: Vec<String>) -> Self {
        let genesis_block = Block::new(0, Self::current_timestamp(), vec![], "0".to_string(), "None".to_string());
        Blockchain {
            chain: vec![genesis_block],
            validators,
        }
    }

    pub fn add_block(&mut self, transactions: Vec<Transaction>) {
        let last_block = self.chain.last().unwrap();
        let validator = self.select_validator();
        let mut new_block = Block::new(
            last_block.index + 1,
            Self::current_timestamp(),
            transactions,
            last_block.hash.clone(),
            validator,
        );

        new_block.hash = new_block.calculate_hash();
        self.chain.push(new_block);
    }

    // 随机选择验证者
    fn select_validator(&self) -> String {
        use rand::Rng; // 使用 rand crate 来选择验证者
        let mut rng = rand::thread_rng();
        let index = rng.gen_range(0..self.validators.len());
        self.validators[index].clone()
    }

    // 获取当前时间戳
    fn current_timestamp() -> u128 {
        use std::time::{SystemTime, UNIX_EPOCH};
        let start = SystemTime::now();
        start.duration_since(UNIX_EPOCH).unwrap().as_millis()
    }
}

fn main() {
    let validators = vec!["Alice".to_string(), "Bob".to_string(), "Charlie".to_string()];
    let mut blockchain = Blockchain::new(validators);

    // 添加一些区块
    for _ in 0..15 {
        println!("Adding a new block...");
        blockchain.add_block(vec![
            Transaction { sender: "Alice".to_string(), receiver: "Bob".to_string(), amount: 10 },
        ]);
    }

    // 打印区块链信息
    for block in blockchain.chain {
        println!("Block {}: Hash: {}, Validator: {}", block.index, block.hash, block.validator);
    }
}
```