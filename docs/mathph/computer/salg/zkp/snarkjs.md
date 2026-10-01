# SnarkJS

snarkjs 是一个用于构建和验证零知识证明（ZKPs）工具的 JavaScript 库，它主要用于处理 zk-SNARKs（简洁非交互式零知识证明）。snarkjs 可以帮助开发者生成 ZKPs，验证证明，及管理可信设置等操作。

<DocsAD/>

## [安装](https://github.com/iden3/snarkjs)

```sh
npm install -g snarkjs
npm install -g circom
```

## 定义电路

```cirrom
// square.circom
template Square() {
    signal input x;
    signal output y;

    y <== x * x;  // y = x^2
}

component main = Square();
```

## 可信设置

## 证明生成

## 证明验证