# Create2钓鱼

**CREATE2** 是以太坊中的一种合约创建机制，它允许开发者在已知的地址上部署合约，而无需提前知道这个地址。攻击者可以利用这一特性，通过恶意合约地址进行钓鱼攻击。

## 攻击原理
1. **合约地址预测**：攻击者可以使用 `CREATE2` 计算出一个合约的地址，只要知道创建合约的创始地址和特定的盐值（salt），他们就可以在未来的某个时间点向这个地址发送交易。
  
2. **恶意合约**：攻击者部署一个恶意合约，伪装成合法的合约地址。受害者可能会在不知道的情况下与这个合约互动，导致资产损失。

3. **绕过验证**：由于 CREATE2 允许在任何时间点部署到相同地址，用户可能会认为该合约是合法的，从而进行交易。

## CREATE2 钓鱼代码示例

以下是一个使用 CREATE2 创建合约的简单示例，以及如何进行钓鱼攻击的伪代码。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContractD {
    uint256 public value;

    constructor(uint256 _value) {
        value = _value;
    }
}


contract ContractC {
    event ContractDeployed(address contractAddress);

    // 通过 CREATE2 部署合约 D
    function deployDWithCreate2(uint256 _value, bytes32 _salt) public returns (address) {
        address contractAddress;
        bytes memory bytecode = getContractDBytecode(_value);

        assembly {
            contractAddress := create2(0, add(bytecode, 0x20), mload(bytecode), _salt)
        }

        require(contractAddress != address(0), "Failed to deploy contract");
        emit ContractDeployed(contractAddress);
        return contractAddress;
    }

    // 获取合约 D 的字节码
    function getContractDBytecode(uint256 _value) public pure returns (bytes memory) {
        bytes memory bytecode = type(ContractD).creationCode;
        return abi.encodePacked(bytecode, abi.encode(_value));
    }

    // 计算 CREATE2 将要部署的合约地址
    function computeAddress(bytes32 _salt) public view returns (address) {
        bytes memory bytecode = getContractDBytecode(0); // 假设_value 为 0，仅用于计算
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),  // 当前合约 C 的地址
                _salt,
                keccak256(bytecode)
            )
        );
        return address(uint160(uint256(hash)));
    }

    function getSalt() public pure returns (bytes32){
        bytes32 salt = keccak256("MyUniqueSaltValue");
        return salt;
    }
}
```