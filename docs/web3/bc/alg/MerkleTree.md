# Merkle Tree

Merkle Tree（默克尔树）是一种用于数据校验和完整性验证的树形数据结构，广泛应用于区块链和分布式系统中。其主要作用是通过哈希计算，将大量数据组织成一棵树，以确保数据的安全性和完整性。

## 1. 什么是 [Merkle Tree？](https://blockchain-academy.hs-mittweida.de/merkle-tree/)

Merkle Tree 是一种 **二叉树**，每个叶子节点存储数据块的哈希值，而非叶子节点存储其子节点的哈希值。根节点被称为 **Merkle Root**，它代表了整棵树的哈希值。

## 2. Merkle Tree 的组成部分

- **叶子节点（Leaf Node）**: 数据块的哈希值。
- **中间节点（Intermediate Node）**: 叶子节点哈希值的组合（父节点），表示两个子节点的哈希值。
- **根节点（Root Node）**: 整棵树的根部哈希值，也称为 Merkle Root。

## 3. Merkle Tree 的构建过程

1. 对每个数据块进行哈希计算，生成叶子节点。
2. 将相邻的两个叶子节点组合，并计算它们哈希值的哈希，生成父节点。
3. 重复步骤 2，直到只剩一个节点（根节点）。

### 例子

假设我们有四个数据块 `A`, `B`, `C`, `D`：

1. 对每个数据块进行哈希：
   - `Hash(A)`，`Hash(B)`，`Hash(C)`，`Hash(D)`

2. 组合相邻的哈希值，生成父节点：
   - `Hash(Hash(A) + Hash(B)) = H1`
   - `Hash(Hash(C) + Hash(D)) = H2`

3. 最后计算根节点：
   - `Hash(H1 + H2) = Merkle Root`

```ascii
         Merkle Root
        /           \
     H1              H2
    /  \            /  \
Hash(A) Hash(B)  Hash(C) Hash(D)
```
<DocsAD/>

## 4. Merkle Tree 的优势

- **数据完整性验证**：通过 Merkle Root，可以快速验证某个数据块是否在树中。
- **数据一致性检查**：通过对比不同设备上的 Merkle Root 来判断数据是否一致。
- **高效**：只需提供叶子节点的哈希值及其验证路径即可证明数据的完整性，而无需提供所有数据块。

## 5. Merkle Proof 示例

为了验证某个数据块是否属于 Merkle Tree，通常只需要：
- 该数据块的哈希值。
- 从该数据块到 Merkle Root 的路径上的其他哈希值。

例如，要验证 `A` 是否在 Merkle Tree 中，我们需要提供：
- `Hash(A)`
- `Hash(B)` (与 `A` 的同级兄弟节点)
- `H2` (与 `H1` 的同级兄弟节点)

通过以下步骤，可以验证 `A` 是否存在：
1. 计算 `Hash(A) + Hash(B)`。
2. 计算 `Hash(H1 + H2)` 并与 Merkle Root 进行对比。

## 6. Merkle Tree 的应用

- **区块链**: 比特币、以太坊等区块链系统使用 Merkle Tree 来验证交易的有效性，保证数据的完整性。
- **文件系统**: 用于大文件或文件集合的完整性验证。

## 7. 实现 Merkle Tree 的代码示例

```js
// 引入 Node.js 的加密库
const crypto = require('crypto');

// 使用 SHA-256 计算哈希值的函数
function hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

// 构建 Merkle Tree 类
class MerkleTree {
    constructor(leaves) {
        // 将数据块进行哈希并存储为叶子节点
        this.leaves = leaves.map(leaf => hash(leaf));
        this.tree = [this.leaves]; // 初始化树

        // 构建 Merkle Tree
        this.buildTree();
    }

    // 构建整棵 Merkle Tree
    buildTree() {
        let currentLevel = this.leaves;

        // 按照二叉树方式逐层构建
        while (currentLevel.length > 1) {
            currentLevel = this.buildNextLevel(currentLevel);
            this.tree.push(currentLevel);
        }
    }

    // 构建每一层的节点
    buildNextLevel(currentLevel) {
        let nextLevel = [];

        for (let i = 0; i < currentLevel.length; i += 2) {
            // 如果是奇数个节点，最后一个节点直接复制
            if (i + 1 === currentLevel.length) {
                nextLevel.push(currentLevel[i]);
            } else {
                const combinedHash = hash(currentLevel[i] + currentLevel[i + 1]);
                nextLevel.push(combinedHash);
            }
        }

        return nextLevel;
    }

    // 获取 Merkle Tree 的根节点（Merkle Root）
    getRoot() {
        return this.tree[this.tree.length - 1][0];
    }

    // 获取 Merkle Proof 用于验证某个叶子节点
    getProof(leaf) {
        let index = this.leaves.indexOf(hash(leaf));
        if (index === -1) {
            throw new Error('叶子节点不在树中');
        }

        let proof = [];
        for (let i = 0; i < this.tree.length - 1; i++) {
            const level = this.tree[i];
            const pairIndex = index % 2 === 0 ? index + 1 : index - 1;

            if (pairIndex < level.length) {
                proof.push({
                    hash: level[pairIndex],
                    position: index % 2 === 0 ? 'right' : 'left'
                });
            }

            // 计算下一个层级的索引
            index = Math.floor(index / 2);
        }

        return proof;
    }

    // 验证某个叶子节点的 Merkle Proof
    verifyProof(leaf, proof, root) {
        let hashValue = hash(leaf);

        // 遍历 Merkle Proof，逐步验证
        for (const proofElement of proof) {
            hashValue = proofElement.position === 'left' 
                ? hash(proofElement.hash + hashValue) 
                : hash(hashValue + proofElement.hash);
        }

        return hashValue === root;
    }

    // 打印树中的所有节点哈希值
    printTree() {
        this.tree.forEach((level, index) => {
            console.log(`Level ${index}:`);
            level.forEach((node, nodeIndex) => {
                console.log(`  Node ${nodeIndex}: ${node}`);
            });
        });
    }
}

// 示例：创建一个 Merkle Tree
const leaves = ['A', 'B', 'C', 'D']; // 示例数据块
const merkleTree = new MerkleTree(leaves);

// 输出 Merkle Root
console.log('Merkle Root:', merkleTree.getRoot());

// 打印所有节点的哈希值
merkleTree.printTree();

// 获取某个叶子节点的 Merkle Proof
const proof = merkleTree.getProof('A');
console.log('Merkle Proof for leaf "A":', proof);

// 验证某个叶子节点是否存在于 Merkle Tree 中
const isValid = merkleTree.verifyProof('A', proof, merkleTree.getRoot());
console.log('Is valid proof for leaf "A"?', isValid);
```