# Hardhat


## [安装](https://hardhat.org/)

```npm
npm install --save-dev hardhat
```

## 新建工程

```npm
npx hardhat init
```

## 编译工程

```npm
npx hardhat compile
```

## 测试工程

```npm
npx hardhat test
```

## 测试节点

```npm
npx hardhat node
```

## 清理缓存

```npm
npx hardhat clean
```

## 安装库

```npm
npm install @openzeppelin/contracts
```

## 部署

```npm
npx hardhat ignition deploy ./ignition/modules/Lock.js --network localhost
```

## ignition

```js
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("random", (m) => {
  const c = m.contract("Your Contract Name");
  return { c };
});
```