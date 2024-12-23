# 用户钱包

<DocsAD/>

## 生成用户

```js
// 生成用户公钥私钥
import { Keypair } from "@solana/web3.js";
async function generateUser(){
    const keypair = Keypair.generate();
    console.log(keypair.publicKey);
    console.log(keypair.secretKey);
}
await generateUser();

PublicKey [PublicKey(GiAnySWV7dPPC3xo3LSsrcMK2fRPwQS6nw5JPLTTWxiU)] {
  _bn: <BN: e96b308c449ce60ce241ee294fdf971e58ee82bd6769b8d31b9f263aa7a39f49>
}
Uint8Array(64) [
   88, 143, 140,  41,  18, 253, 151, 249,  50,  63, 195,
  219, 105,  32, 144, 105, 252, 140, 250, 108, 230, 237,
  196, 112,  96,  47,  93, 172, 139, 210, 113, 252, 233,
  107,  48, 140,  68, 156, 230,  12, 226,  65, 238,  41,
   79, 223, 151,  30,  88, 238, 130, 189, 103, 105, 184,
  211,  27, 159,  38,  58, 167, 163, 159,  73
]

import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
async function generateUserBase58(){
    const keypair = Keypair.generate();
    console.log('Public Key:', keypair.publicKey.toBase58());
    console.log('Private Key (Base58):', bs58.encode(keypair.secretKey));
}
await generateUserBase58();
Public Key: 7cnDmSgHDQuV5uywsKEWTWu2dffEHdYG5uQBrfZcQGw
Private Key (Base58): 4MWdtviNNdREHkidbDewymPQ3ihsmJwp8Cp7ZuPucv6uT2te7SV2wxbS6i2R6W3D2w4yBfboqFjHBKMC4Q2xkeTq
```

## 加载用户

```js
import { Keypair } from "@solana/web3.js";
import fs from 'fs';
async function loadUser(){
    const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync('C:\\Users\\DeeLMind\\.config\\solana\\id.json', 'utf-8')));
    const keypair = Keypair.fromSecretKey(secretKey);
    console.log(keypair.publicKey);
    console.log(keypair.secretKey);
}
await loadUser();
PublicKey [PublicKey(GiAnySWV7dPPC3xo3LSsrcMK2fRPwQS6nw5JPLTTWxiU)] {
  _bn: <BN: e96b308c449ce60ce241ee294fdf971e58ee82bd6769b8d31b9f263aa7a39f49>
}
Uint8Array(64) [
   88, 143, 140,  41,  18, 253, 151, 249,  50,  63, 195,
  219, 105,  32, 144, 105, 252, 140, 250, 108, 230, 237,
  196, 112,  96,  47,  93, 172, 139, 210, 113, 252, 233,
  107,  48, 140,  68, 156, 230,  12, 226,  65, 238,  41,
   79, 223, 151,  30,  88, 238, 130, 189, 103, 105, 184,
  211,  27, 159,  38,  58, 167, 163, 159,  73
]
```

## 私钥恢复

```js
import { Keypair } from "@solana/web3.js";
async function restoreUser(){
    const keypairBytes = Uint8Array.from([
        88, 143, 140,  41,  18, 253, 151, 249,  50,  63, 195,
       219, 105,  32, 144, 105, 252, 140, 250, 108, 230, 237,
       196, 112,  96,  47,  93, 172, 139, 210, 113, 252, 233,
       107,  48, 140,  68, 156, 230,  12, 226,  65, 238,  41,
        79, 223, 151,  30,  88, 238, 130, 189, 103, 105, 184,
       211,  27, 159,  38,  58, 167, 163, 159,  73
     ]);
     
    const keypair = Keypair.fromSecretKey(keypairBytes);
    console.log(keypair.publicKey);
    console.log(keypair.secretKey);
}
await restoreUser();
PublicKey [PublicKey(GiAnySWV7dPPC3xo3LSsrcMK2fRPwQS6nw5JPLTTWxiU)] {
  _bn: <BN: e96b308c449ce60ce241ee294fdf971e58ee82bd6769b8d31b9f263aa7a39f49>
}
Uint8Array(64) [
   88, 143, 140,  41,  18, 253, 151, 249,  50,  63, 195,
  219, 105,  32, 144, 105, 252, 140, 250, 108, 230, 237,
  196, 112,  96,  47,  93, 172, 139, 210, 113, 252, 233,
  107,  48, 140,  68, 156, 230,  12, 226,  65, 238,  41,
   79, 223, 151,  30,  88, 238, 130, 189, 103, 105, 184,
  211,  27, 159,  38,  58, 167, 163, 159,  73
]

import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
async function restoreUserBase58(){
    // 7cnDmSgHDQuV5uywsKEWTWu2dffEHdYG5uQBrfZcQGw
    const base58String = "4MWdtviNNdREHkidbDewymPQ3ihsmJwp8Cp7ZuPucv6uT2te7SV2wxbS6i2R6W3D2w4yBfboqFjHBKMC4Q2xkeTq";
    const byteArray = bs58.decode(base58String);
    const keypair = Keypair.fromSecretKey(byteArray);
    console.log(keypair.publicKey);
    console.log(keypair.secretKey);
}
await restoreUserBase58();
```

## 地址有效

```js
import { Keypair, PublicKey } from "@solana/web3.js";
 
const publicKey = new PublicKey("24PNhTaNtomHhoy3fTRaMhAFCRj4uHqhZEEoWrKDbR5p");
 
const keypair = Keypair.fromSecretKey(
  Uint8Array.from([
    174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56,
    222, 53, 138, 189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246,
    15, 185, 186, 82, 177, 240, 148, 69, 241, 227, 167, 80, 141, 89, 240, 121,
    121, 35, 172, 247, 68, 251, 226, 218, 48, 63, 176, 109, 168, 89, 238, 135,
  ]),
);

console.log(keypair.publicKey.toBase58() === publicKey.toBase58());
```

* sol v2

```js
import { isAddress } from "@solana/web3.js";
 
// Note that generateKeyPair() will always give a public key that is valid for users
 
// Valid public key
const key = "5oNDL3swdJJF1g9DzJiZ4ynHXgszjAEpUkxVYejchzrY";
 
// Lies on the ed25519 curve and is suitable for users
console.log("Valid Address: ", isAddress(key));
 
// // Valid public key
const offCurveAddress = "4BJXYkfvg37zEmBbsacZjeQDpTNx91KppxFJxRqrz48e";
 
// // Not on the ed25519 curve, therefore not suitable for users
console.log("Valid Off Curve Address: ", isAddress(offCurveAddress));
 
// // Not a valid public key
const errorPubkey = "testPubkey";
console.log("Invalid Address: ", isAddress(errorPubkey));
```

## 助记词生成恢复

```js
import { Keypair } from "@solana/web3.js";
import bip39 from "bip39";
const mnemonic = bip39.generateMnemonic();
console.log(mnemonic);
// arguments: (mnemonic, password)
const seed = bip39.mnemonicToSeedSync(mnemonic, "");
const keypair = Keypair.fromSeed(seed.slice(0, 32));
console.log(`${keypair.publicKey}`);
console.log(`${keypair.secretKey}`);
```