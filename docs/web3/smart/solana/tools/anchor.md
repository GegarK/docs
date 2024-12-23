# Anchor

## HelloWorld


* 安装Anchor

```sh
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
sudo apt-get update && sudo apt-get upgrade && sudo apt-get install -y pkg-config build-essential libudev-dev libssl-dev
avm install latest
avm use latest

npm install @coral-xyz/anchor
```

* anchor init test1
* anchor build

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

* anchor deploy

<DocsAD/>