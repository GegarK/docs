# HelloWorld

<DocsAD/>

## Native

### Rust

```sh
cargo init helloworld --lib
cargo add solana-program@1.18.26
cargo build-sbf
solana program deploy hellworld.so
```

* Cargo.toml

```toml
[package]
name = "helloworld"
version = "0.1.0"
edition = "2021"

[dependencies]
solana-program = "1.18.26"

[lib]
crate-type = ["cdylib", "lib"]
```

* lib.rs

```rust
use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

// Tells Solana that the entrypoint to this program
//  is the "process_instruction" function.
//
entrypoint!(process_instruction);

// Our entrypoint's parameters have to match the
//  anatomy of a transaction instruction (see README).
//
fn process_instruction(
    program_id: &Pubkey,
    _accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello, Solana!");

    msg!("Our program's Program ID: {}", &program_id);

    Ok(())
}
```

### JS

```js
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  Keypair,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

// 设置连接到 Devnet（也可以替换为 mainnet 或 testnet）
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

// 你的程序的 PublicKey（Rust 程序的 ID）
const programId = new PublicKey('5Jo7Zp3yA4v3VLVN9WFDSUDWTb61R9Hpjr5GGEdqVzJP');

// 创建一个新的 Keypair 作为交易的签署者（payer）
const payer = Keypair.fromSecretKey(new Uint8Array([私钥]));

// 创建一个简单的指令数据，这里我们可以传递一个空的字节数组或自定义的数据
const instructionData = Buffer.from([]);

// 创建交易指令
const instruction = new Transaction().add({
  keys: [
    {
      pubkey: payer.publicKey,  // 使用 payer 账户的公钥
      isSigner: true,           // 该账户需要签署交易
      isWritable: false,        // 如果交易不涉及修改账户数据，设置为 false
    },
  ],
  programId: programId,        // 目标程序的 Program ID
  data: instructionData,       // 附带的数据
});

// 创建并发送交易
async function callSolanaProgram() {
  try {
    // 将交易发送到网络并等待确认
    const txId = await sendAndConfirmTransaction(connection, instruction, [payer]);
    console.log("Transaction successful with ID:", txId);
  } catch (err) {
    console.error("Transaction failed:", err);
  }
}

callSolanaProgram();
```

## Anchor

### Rust

```sh
anchor init hellworld
anchor build
anchor deploy
```

```anchor.toml
[toolchain]

[features]
resolution = true
skip-lint = false

[programs.localnet]
anchro_helloworld = "6be4ZEKUf8KjoKvsRmSs1Ls4vXqn9mLe3qkZu7GNp15"

[registry]
url = "https://api.devnet.solana.com"

[provider]
cluster = "https://api.devnet.solana.com"
wallet = "~/.config/solana/id.json"

[scripts]
test = "yarn run ts-mocha -p ./tsconfig.json -t 1000000 tests/**/*.ts"
```

```rust
use anchor_lang::prelude::*;

declare_id!("");

#[program]
pub mod anchro_helloworld {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

```

### JS IDL

```js

```