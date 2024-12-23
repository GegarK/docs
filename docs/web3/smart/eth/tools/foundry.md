# Foundry

## [安装](https://book.getfoundry.sh/)

```Foundry
forge init hello_foundry
```

## 编译工程

```Foundry
forge build
```

## 测试工程

```Foundry
forge test
```

## 测试节点

```Foundry
anvil
```

## 部署合约

```Foundry
forge create --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 src/GKBToken.sol:GKBToken --constructor-args 1000000000000
```