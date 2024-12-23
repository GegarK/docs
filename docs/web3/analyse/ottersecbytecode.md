# 简单Opcode分析

::: warning DeeLMind 非常喜欢的招聘要求|大道至简
We don't have formal experience requirements. We're looking for people who are able to learn fast and tackle interesting problems. If you enjoy solving difficult problems, please shoot us your application and we'll followup with next steps.

网络安全包络万象，掌握根本，有兴趣，才能快速分析问题，解决问题。
:::

## 题目

Coding Challenge

This is the runtime bytecode of a contract using EIP-3855.

6181935f351415600b57005b5f80fd

Please provide the calldata of a transaction that will not revert. Submit your answer as a hex string. If there are multiple answers, submit the shortest answer. If there are multiple shortest answers, submit the unique lexicographically first answer.

<DocsAD/>

## 分析思路

* [ETH Opcode](https://www.evm.codes/)

* 什么是[EIP-3855](https://eips.ethereum.org/EIPS/eip-3855)

引入新的操作码：PUSH0

操作码：0x5f

功能：将一个常量零值（0）推送到堆栈上。
目的：减少合约字节码的长度和复杂度，提升执行效率。

为什么引入 PUSH0 操作码？
在当前的以太坊虚拟机中，如果合约需要将零值推送到堆栈上，通常会使用 PUSH1 操作码，然后提供一个字节的零值（PUSH1 0x00），这需要两个字节的空间。

通过引入 PUSH0 操作码，只需一个字节即可完成相同的操作，从而节省空间和降低 gas 成本。这对大量使用零值的智能合约特别有利，可以显著提升它们的执行效率。

* 反编译 Opcode 静态分析

6181935f351415600b57005b5f80fd

618193 5f 35 14 15 600b 57 00 5b 5f 80 fd

```Disassembly
0x0: PUSH2     0x8193  // Push the value 0x8193 onto the stack
0x3: PUSH0             // Push the value 0 (zero) onto the stack
0x4: CALLDATALOAD      // Load the first 32 bytes of calldata into the stack
0x5: EQ                // Compare if the two top stack values are equal
0x6: ISZERO            // Check if the top stack value is zero
0x7: PUSH1     0xb     // Push the value 0xb (address of the jump destination) onto the stack
0x9: JUMPI             // Conditionally jump to address 0xb if the top stack value is non-zero
0xa: STOP              // Halt execution
0xb: JUMPDEST          // Jump destination (address 0xb)
0xc: PUSH0             // Push the value 0 (zero) onto the stack
0xd: DUP1              // Duplicate the top stack value
0xe: REVERT            // Revert the transaction

PUSH2 0x8193：将常量 0x8193 推入堆栈。
PUSH0：将零推入堆栈。
CALLDATALOAD：将调用数据的前32个字节加载到堆栈。
EQ：比较两个堆栈顶值是否相等。
ISZERO：检查堆栈顶值是否为零。
PUSH1 0xb, JUMPI：如果堆栈顶值非零，则跳转到地址 0xb。
STOP：停止执行。
JUMPDEST：跳转目标。
PUSH0：将零推入堆栈。
DUP1：复制堆栈顶值。
REVERT：回滚事务
```

* 伪代码还原

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EIP3855Example {
    function test(uint256 _input) public pure returns (bool) {
        // The following inline assembly mimics the provided bytecode
        assembly {
            // Equivalent to PUSH2 0x8193
            let pushedValue := 0x8193
            // Equivalent to PUSH0, CALLDATALOAD
            let callDataValue := calldataload(0)
            // Equivalent to EQ
            let isEqual := eq(pushedValue, callDataValue)
            // Equivalent to ISZERO
            if iszero(isEqual) {
                // Equivalent to PUSH1 0xb, JUMPI
                // Jump destination
                revert(0, 0)
            }
            // Equivalent to STOP
            stop()
        }
    }
}
```

* 分析结论

用户输入的内容与0x8193进行对比，错误则Revert，我们只需构造输入参数使之匹配正确即可

相比于我们以前逆向分析二进制程序要简单很多

* [动态调试](https://www.evm.codes/playground)

![er](/imgs/web3/analyse/1.png)

* 答案

```hex
0x0000000000000000000000000000000000000000000000000000000000008193
```