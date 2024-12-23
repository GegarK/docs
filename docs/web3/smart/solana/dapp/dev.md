# 开发部署

<DocsAD/>

## 节点

* [本地节点](https://solana.com/developers/cookbook/development/start-local-validator)

```sh
solana-test-validator
```

* 远程节点

```sh
主网测试版 https://api.mainnet-beta.solana.com
开发网 https://api.devnet.solana.com
测试网 https://api.testnet.solana.com
```

```js
import { clusterApiUrl, Connection } from "@solana/web3.js";
 
(async () => {
  // const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
  // const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const connection = new Connection(clusterApiUrl("testnet"), "confirmed");
  console.log(connection);
})();
 
(async () => {
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  console.log(connection);
})();
```



## 空投

* solana airdrop 5

```js
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import fs from 'fs';

let keypair = null;

async function loadUser(){
    const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync('C:\\Users\\Administrator\\.config\\solana\\id.json', 'utf-8')));
    keypair = Keypair.fromSecretKey(secretKey);
    console.log(keypair.publicKey);
    console.log(keypair.secretKey);
}
await loadUser();

async function airdrop5(){
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
 
    const signature = await connection.requestAirdrop(
        new PublicKey(keypair.publicKey),
        5 * LAMPORTS_PER_SOL,
    );

    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
    
    await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
    });
}
await airdrop5();
```