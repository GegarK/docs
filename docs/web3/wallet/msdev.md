# 多签名钱包开发

## Ethereum(ETH)

<DocsAD/>

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AuthorizeTransfer {

    address public A;
    address public B;
    address public C;

    // 存储A和B是否授权
    mapping(address => bool) public authorized;

    // 事件记录授权情况
    event Authorized(address indexed by, bool status);
    event TransferToC(address indexed from, uint256 amount,string info);

    constructor(address _C) {

        A = msg.sender; // 部署合约的人默认是A
        C = _C; // 传入C的地址
    }

    // B设置（需单独调用）
    function setB(address _B) external {
        require(msg.sender == A, "Only A can set B");
        B = _B;
    }

    // A或B对转账授权
    function authorize() external {
        require(msg.sender == A || msg.sender == B, "Only A or B can authorize");
        authorized[msg.sender] = true;
        emit Authorized(msg.sender, true);
    }

    // 取消授权
    function revokeAuthorization() external {
        require(msg.sender == A || msg.sender == B, "Only A or B can revoke authorization");
        authorized[msg.sender] = false;
        emit Authorized(msg.sender, false);
    }

    // A或者B向C转钱，需双方都授权
    function transferToC(uint256 amount) external {
        require(authorized[A] && authorized[B], "Both A and B must authorize the transfer");

        // 重置授权状态
        authorized[A] = false;
        authorized[B] = false;

        // 转账给C
        emit TransferToC(msg.sender, amount,"DeeLMind");
    }

    // 接收以太币
    receive() external payable {}

    // 查询合约余额
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
```