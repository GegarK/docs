# RUST开发

## [Rust语言](../../../../program/program/rust/README.md)

* [https://solana.com/developers/guides/getstarted/local-rust-hello-world](https://solana.com/developers/guides/getstarted/local-rust-hello-world)

## HelloWorld Anchor

```rust
use anchor_lang::prelude::*;

declare_id!("BgfQ9VDxpZGW3WWj4ZW4hwSxSf8W63jZB7HdVvmttW48");

#[program]
pub mod test1 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
```



## HelloWorld Native

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
```js
import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { Keypair } from "@solana/web3.js";
import { getKeypairFromFile } from "@solana-developers/helpers";
   
  const programId = new PublicKey("CEiJvr96AdH39VVLFC6CCg6mWtng9YBzgHh1Kuv3678w");
   
  // Connect to a solana cluster. Either to your local test validator or to devnet
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  //const connection = new Connection("https://api.devnet.solana.com", "confirmed");
   
  // We load the keypair that we created in a previous step
  const parsedFileContents = Uint8Array.from(JSON.parse("[] "));
  const keyPair =  Keypair.fromSecretKey(parsedFileContents);
  // const keyPair =  getKeypairFromFile("id.json");
   
  // Every transaction requires a blockhash
  const blockhashInfo = await connection.getLatestBlockhash();
   
  // Create a new transaction
  const tx = new Transaction({
    ...blockhashInfo,
  });
   
  // Add our Hello World instruction
  tx.add(
    new TransactionInstruction({
      programId: programId,
      keys: [],
      data: Buffer.from([]),
    }),
  );
   
  // Sign the transaction with your previously created keypair
  tx.sign(keyPair);
   
  // Send the transaction to the Solana network
  const txHash = await connection.sendRawTransaction(tx.serialize());
   
  console.log("Transaction sent with hash:", txHash);
   
  await connection.confirmTransaction({
    blockhash: blockhashInfo.blockhash,
    lastValidBlockHeight: blockhashInfo.lastValidBlockHeight,
    signature: txHash,
  });
   
  console.log(
    `Congratulations! Look at your ‘Hello World' transaction in the Solana Explorer:
    https://explorer.solana.com/tx/${txHash}?cluster=custom`,
  );
```
<DocsAD/>