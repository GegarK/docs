# 签名钓鱼

<DocsAD/>

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SignatureVerifier {
    function verify(
        bytes32 messageHash,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public pure returns (address) {
        // 构造带有前缀的以太坊签名消息哈希
        bytes32 ethSignedMessageHash = prefixed(messageHash);

        // 使用 ecrecover 恢复签名者地址
        address signer = ecrecover(ethSignedMessageHash, v, r, s);

        return signer;
    }

    // 将消息哈希进行前缀处理，符合以太坊的标准签名格式
    function prefixed(bytes32 hash) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }
}
```