# Permit钓鱼

## [Permit](../smart/eth/solidity/permit.md)

`Permit` 是针对ERC-20标准下授权的一个扩展功能，是一种允许代币持有人通过签名授权他人使用其代币的机制，而不需要实际调用 `approve` 函数。这是一种减少链上交互次数的方式，尤其适用于降低转账和授权的 Gas 费开销。

EIP-2612 提案引入了 permit 功能，它允许代币持有人签署一条消息，然后通过 permit 函数提交该消息授权第三方花费其代币，而不需要持有者自己提交链上交易。持有人只需生成签名，而不需要自己支付 Gas 费。


## Permit钓鱼