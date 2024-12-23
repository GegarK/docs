# Permit

## Permit

`permit` 是 EIP-2612 中定义的一种方法，它允许代币持有者通过签名来授权转账，而无需通过标准的 `approve` 方式。这样可以避免用户为了授权转账而支付额外的以太坊网络Gas费用。

<DocsAD/>

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract PermitToken is ERC20Permit {
    constructor() ERC20("PermitToken", "PTK") ERC20Permit("PermitToken") {
        _mint(msg.sender, 1000 * 10**18);
    }
}

function permit(
    address owner,
    address spender,
    uint256 value,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
) external;
```

<DocsAD/>

## Permit2

`permit2` 是 permit 的一个增强版，允许用户在同一个交易中管理多个授权操作。这种模式适用于更复杂的场景，特别是需要批量处理授权时。