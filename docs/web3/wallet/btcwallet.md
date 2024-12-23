# BTC钱包开发

<DocsAD/>

## 账户生成

* 公钥私钥助记词

```js
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1');
const { BIP32Factory } = require('bip32');

// 生成助记词
const mnemonic = bip39.generateMnemonic();
console.log('生成的助记词:', mnemonic);

// 使用助记词生成种子
const seed = bip39.mnemonicToSeedSync(mnemonic);
console.log('种子:', seed);

// 检查助记词的有效性
const isValid = bip39.validateMnemonic(mnemonic);
console.log('助记词是否有效:', isValid);

// 创建 bip32 实例
const bip32 = BIP32Factory(ecc);

// 使用种子生成 BIP32 根私钥
const root = bip32.fromSeed(seed);

console.log('助记词:', mnemonic);
console.log('根私钥 (WIF):', root.toWIF());
console.log('根公钥:', root.publicKey.toString('hex'));

// 派生子密钥
const child = root.derivePath("m/44'/0'/0'/0/0");
console.log('子私钥 (WIF):', child.toWIF());
console.log('子公钥:', child.publicKey.toString('hex'));

// 使用公钥生成 P2PKH 地址
const { address } = bitcoin.payments.p2pkh({ pubkey: Buffer.from(child.publicKey, 'hex') });

console.log('比特币地址:', address);
```

## 交易信息

* 获取资金

```js
const axios = require('axios');

const btcAddress = '34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo';  // 替换为你要查询的比特币地址

axios.get(`https://blockchain.info/rawaddr/${btcAddress}`)
.then(response => {
    const finalBalance = response.data.final_balance;  // 余额是以 satoshis 为单位
    console.log(`地址: ${btcAddress} 的余额为: ${finalBalance / 100000000} BTC`);
})
.catch(error => {
    console.error('获取余额时发生错误:', error);
});
```

* 发送交易

```js

```

## 账户恢复

* 私钥恢复

```js

```

* 助记词恢复

```js
const bip39 = require('bip39');
const { BIP32Factory } = require('bip32');
const ecc = require('tiny-secp256k1');
const bitcoin = require('bitcoinjs-lib');

// 创建 bip32 实例
const bip32 = BIP32Factory(ecc);

// 假设你有一个助记词
const mnemonic = 'fence core rapid bid hour denial brass flavor praise solve under mask';

// 通过助记词生成种子
const seed = bip39.mnemonicToSeedSync(mnemonic);

// 使用种子生成 BIP32 根私钥
const root = bip32.fromSeed(seed);

// 获取根私钥（WIF 格式）
const rootPrivateKeyWIF = root.toWIF();
console.log('根私钥 (WIF):', rootPrivateKeyWIF);

// 获取根公钥
const rootPublicKey = root.publicKey.toString('hex');
console.log('根公钥:', rootPublicKey);

// 生成根公钥对应的比特币地址
const { address } = bitcoin.payments.p2pkh({ pubkey: root.publicKey });
console.log('比特币地址:', address);
```

```js
const bip39 = require('bip39');
const { BIP32Factory } = require('bip32');
const ecc = require('tiny-secp256k1');
const bitcoin = require('bitcoinjs-lib');

// 创建 bip32 实例
const bip32 = BIP32Factory(ecc);

// 假设你有一个助记词
const mnemonic = 'fence core rapid bid hour denial brass flavor praise solve under mask';

// 通过助记词生成种子
const seed = bip39.mnemonicToSeedSync(mnemonic);

// 使用种子生成 BIP32 根私钥
const root = bip32.fromSeed(seed);

// 派生子密钥（示例路径 "m/44'/0'/0'/0/0"）
const child = root.derivePath("m/44'/0'/0'/0/0");

// 获取私钥（WIF 格式）
const privateKeyWIF = child.toWIF();
console.log('私钥 (WIF):', privateKeyWIF);

// 获取公钥
const publicKey = child.publicKey.toString('hex');
console.log('公钥:', publicKey);

// 生成比特币地址
const { address } = bitcoin.payments.p2pkh({ pubkey: child.publicKey });
console.log('比特币地址:', address);
```