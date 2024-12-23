# DAPP开发

## [Solana SDK](https://solana-labs.github.io/solana-web3.js/)

```sh
npm i @solana/web3.js 我的实例默认使用的V1版本，除非特别指出使用V2
npm i @solana/web3.js@2
```

<DocsAD/>

## JS

```js
const solanaWeb3 = require('@solana/web3.js');

// Connect to the Solana Devnet
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('testnet'), 'confirmed');

// Generate a new keypair (wallet)
const wallet = solanaWeb3.Keypair.generate();
console.log("Generated new wallet with public key:", wallet.publicKey.toBase58());

// Request an airdrop of 1 SOL to the generated wallet
async function requestAirdrop() {
  const airdropSignature = await connection.requestAirdrop(
    wallet.publicKey,
    solanaWeb3.LAMPORTS_PER_SOL, // 1 SOL
  );
  
  // Confirm the transaction
  await connection.confirmTransaction(airdropSignature);

  console.log("Airdrop successful!");
}

// Check balance of the wallet
async function checkBalance() {
  const balance = await connection.getBalance(wallet.publicKey);
  console.log("Wallet balance:", balance / solanaWeb3.LAMPORTS_PER_SOL, "SOL");
}

// Main function to run the example
async function main() {
  await requestAirdrop();
  await checkBalance();
}

main().catch(err => {
  console.error(err);
});
```

## Rust

```rust
use solana_client::rpc_client::RpcClient;
use solana_sdk::pubkey::Pubkey;
use solana_sdk::commitment_config::CommitmentConfig;
use solana_account_decoder::UiAccountEncoding;
use std::str::FromStr;

fn main() {
    // 创建与 Solana 节点的 RPC 客户端连接
    let rpc_url = "https://api.mainnet-beta.solana.com";
    let client = RpcClient::new_with_commitment(rpc_url.to_string(), CommitmentConfig::confirmed());

    // 获取最新的区块高度
    match client.get_slot() {
        Ok(slot) => println!("Current slot: {}", slot),
        Err(err) => eprintln!("Error getting slot: {}", err),
    }

    // 智能合约的程序ID（Program ID）
    let program_id_str = "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"; // 替换为实际的程序ID
    let program_id = Pubkey::from_str(program_id_str).expect("Invalid program ID");

    // 获取程序账户信息
    match client.get_account_with_commitment(&program_id, CommitmentConfig::confirmed()) {
        Ok(response) => {
            if let Some(account) = response.value {
                println!("Program account info:");
                println!("Lamports: {}", account.lamports);
                println!("Executable: {}", account.executable);
                println!("Owner: {}", account.owner);
                println!("Data: {:?}", account.data);
            } else {
                println!("No account found for program ID: {}", program_id_str);
            }
        },
        Err(err) => eprintln!("Error getting program account: {}", err),
    }
}
```