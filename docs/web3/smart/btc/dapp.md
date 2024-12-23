# DAPP开发

## 本地节点

```rust
use bitcoincore_rpc::{Auth, Client, RpcApi};

fn main() {
    let rpc = Client::new("http://localhost:8332",
    Auth::UserPass("user".to_string(),
                   "pass".to_string())).unwrap();
    let best_block_hash = rpc.get_best_block_hash().unwrap();
    println!("best block hash: {}", best_block_hash);
}
```