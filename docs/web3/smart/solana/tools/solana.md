# Solana

## [命令行](https://docs.solanalabs.com/cli/usage)

| Command               | Command               | Command               |
|-----------------------|-----------------------|-----------------------|
| solana                | solana-keygen        | spl-token         |

<DocsAD/>

## Solana命令行

* solana config get 查看配置信息

```sh
PS C:\Users\Administrator> solana config get
Config File: C:\Users\Administrator\.config\solana\cli\config.yml
RPC URL: http://127.0.0.1
WebSocket URL: ws://127.0.0.1/ (computed)
Keypair Path: C:\Users\Administrator\.config\solana\id.json
```

* solana-keygen new 生成密钥对

```sh
~/.config/solana/id.json
[105,38,176,206,95,148,97,25,221,92,90,24,179,189,244,158,81,171,136,91,73,10,162,176,222,236,38,165,158,111,210,51,235,185,88,38,143,151,5,157,103,104,148,124,47,142,116,104,230,241,34,218,162,254,236,160,97,136,225,209,215,218,163,144]
```

* solana-keygen pubkey 查看公钥

```sh
solana-keygen pubkey ~/.config/solana/id.json

GsAjFVdC3PXReBrgnTw22edFoVmJjaWPEjTjXznsBDfu
```

* solana-keygen verify 校验密钥对

```sh
solana-keygen verify GsAjFVdC3PXReBrgnTw22edFoVmJjaWPEjTjXznsBDfu
```

* solana-keygen recover 'prompt://' 助记词恢复

```sh
符合BIP-39格式
abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
```

* solana airdrop 3 默认账户空投

* `solana airdrop 5 --config C:\Users\Administrator\Desktop\DLM2sra4mruRoG9QASoB5Ls72roN85dXGwA1dF4Np8hE.json`

* solana balance 查看默认账户余额

* solana balance DLM2sra4mruRoG9QASoB5Ls72roN85dXGwA1dF4Np8hE

* 切换网络地址

```sh
solana config set --url https://api.devnet.solana.com
solana config set --url https://api.testnet.solana.com
solana config set --url https://api.mainnet-beta.solana.com
```

* solana gossip 查看节点

