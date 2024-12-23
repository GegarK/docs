# 整数溢出

::: warning DeeLMind 提示
整数溢出不限语言。
:::

<DocsAD/>

## Solidity

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Token {
  // uint8 0 - 255
  mapping(address => uint8) balances;

  constructor() {
    balances[msg.sender] = 250;
  }
  
  function deposit(uint8 _value) public returns (bool) {
    unchecked{
        balances[msg.sender] += _value;
    }
    return true;
  }

  function balanceOf(address _owner) public view returns (uint balance) {
    return balances[_owner];
  }
}

```

## Rust

```rust
fn main() {
    let mut x: u8 = 255; // u8 类型的最大值是 255
    println!("Before overflow: {}", x);
    // 增加 1，会导致溢出
    x = x + 1;
    println!("After overflow: {}", x);
}
```