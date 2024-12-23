# SOL钱包开发

<DocsAD/>

## 账户生成

* 公钥私钥

```js
const solanaWeb3 = require('@solana/web3.js');

// 生成新的密钥对
const keypair = solanaWeb3.Keypair.generate();

console.log("公钥:", keypair.publicKey.toBase58());
console.log("私钥:", keypair.secretKey);

公钥: C9ArttcScpFjwVkb7vGeqPmUs7CTQ1vHH1qNKCgw2x93
私钥: Uint8Array(64) [
   65,  86, 171,  59, 137,  44, 233, 114, 136, 154, 240,
    5, 135,  32,  11,  89, 202, 114, 102,  11, 152,  15,
  224, 164,  91, 149, 252,   5, 180, 159, 198, 242, 165,
  136,  90,   8,  18, 108,  65, 211, 216,  76,  87, 117,
  155,  64,  64,  77, 170, 132, 247,  67,  57,  73,  89,
   51, 118, 145,   3, 186, 160, 124,  82,  54
]
```

* 助记词

```js
const solanaWeb3 = require('@solana/web3.js');
const bip39 = require('bip39');
const { derivePath } = require('ed25519-hd-key');

// 生成助记词
const mnemonic = bip39.generateMnemonic();
console.log("助记词:", mnemonic);

// 从助记词生成种子
const seed = bip39.mnemonicToSeedSync(mnemonic);

// 使用 Solana 的派生路径 m/44'/501'/0'/0'
const path = "m/44'/501'/0'/0'";
const { key } = derivePath(path, seed.toString('hex'));

// 根据派生的 seed 生成密钥对
const keypair = solanaWeb3.Keypair.fromSeed(key);

console.log("公钥:", keypair.publicKey.toBase58());
console.log("私钥:", keypair.secretKey);

助记词: chunk view deal hen horse visual cook below dish recall awesome upgrade
公钥: Gm14JyqRqPqMr8go2myLbvB4nSX4y3toqmv1kpJCR1A6
私钥: Uint8Array(64) [
  154,  35, 110,  47, 158, 126,  70, 105,   3, 100,  41,
  146,  66,  47,  35, 193, 147, 138, 234, 165, 233,  10,
   43, 134, 136,  58,   0, 246, 141, 168,  61,  74, 234,
   36, 236, 140, 191, 121, 202, 247,  68,  36, 214,  26,
  217, 250, 231, 148, 185,  65, 213, 101, 232, 110, 123,
  252, 151,  34, 118, 229, 183,  31,  80,  95
]
```

## 交易信息

* 获取资金

```js
const solanaWeb3 = require('@solana/web3.js');

// 连接到 Solana 的主网
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');

// 使用你的公钥创建一个公钥对象
const publicKey = new solanaWeb3.PublicKey("So11111111111111111111111111111111111111112");

// 查询账户余额
connection.getBalance(publicKey).then(balance => {
    console.log("余额:", balance / solanaWeb3.LAMPORTS_PER_SOL, "SOL");
});
```

* 发送交易

```js
const solanaWeb3 = require('@solana/web3.js');

// 连接到 Solana 的主网
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');

// 从密钥创建一个 Keypair（假设你已有私钥）
const secretKey = Uint8Array.from([154,  35, 110,  47, 158, 126,  70, 105,   3, 100,  41,
    146,  66,  47,  35, 193, 147, 138, 234, 165, 233,  10,
     43, 134, 136,  58,   0, 246, 141, 168,  61,  74, 234,
     36, 236, 140, 191, 121, 202, 247,  68,  36, 214,  26,
    217, 250, 231, 148, 185,  65, 213, 101, 232, 110, 123,
    252, 151,  34, 118, 229, 183,  31,  80,  95]);
const senderKeypair = solanaWeb3.Keypair.fromSecretKey(secretKey);

// 接收者公钥（将 SOL 发送到的地址）
const recipientPublicKey = new solanaWeb3.PublicKey("Gm14JyqRqPqMr8go2myLbvB4nSX4y3toqmv1kpJCR1A6");

// 创建一笔交易
const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
        fromPubkey: senderKeypair.publicKey,
        toPubkey: recipientPublicKey,
        lamports: 1000000, // 发送的金额，单位是 lamports，1 SOL = 1,000,000,000 lamports
    })
);

// 签署并发送交易
(async () => {
    try {
        const signature = await solanaWeb3.sendAndConfirmTransaction(
            connection,
            transaction,
            [senderKeypair]
        );
        console.log("交易成功，签名:", signature);
    } catch (err) {
        console.error("交易失败:", err);
    }
})();
```

## 账户恢复

* 私钥恢复

```js
const solanaWeb3 = require('@solana/web3.js');

// 假设你有一个现有的私钥
const secretKey = Uint8Array.from([65,  86, 171,  59, 137,  44, 233, 114, 136, 154, 240,
    5, 135,  32,  11,  89, 202, 114, 102,  11, 152,  15,
  224, 164,  91, 149, 252,   5, 180, 159, 198, 242, 165,
  136,  90,   8,  18, 108,  65, 211, 216,  76,  87, 117,
  155,  64,  64,  77, 170, 132, 247,  67,  57,  73,  89,
   51, 118, 145,   3, 186, 160, 124,  82,  54])

// 根据私钥还原 Keypair
const keypair = solanaWeb3.Keypair.fromSecretKey(secretKey);

console.log("公钥:", keypair.publicKey.toBase58());
console.log("私钥:", keypair.secretKey);
```

* 助记词恢复

```js
const bip39 = require('bip39');
const solanaWeb3 = require('@solana/web3.js');
const { derivePath } = require('ed25519-hd-key');

// 假设这是你的助记词
const mnemonic = "chunk view deal hen horse visual cook below dish recall awesome upgrade";

// 从助记词生成种子
const seed = bip39.mnemonicToSeedSync(mnemonic);

// 使用 Solana 的派生路径 m/44'/501'/0'/0'
const path = "m/44'/501'/0'/0'";
const { key } = derivePath(path, seed.toString('hex'));

// 通过种子还原密钥对
const keypair = solanaWeb3.Keypair.fromSeed(key);

console.log("还原的公钥:", keypair.publicKey.toBase58());
console.log("还原的私钥:", keypair.secretKey);
```