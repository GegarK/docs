# 零知识证明

## 零知识证明（Zero-Knowledge Proof，简称 ZKP）

- **保密性**: 证明过程中不泄露关键信息，证明者仅向验证者展示所需的证据，而非详细信息。
  
- **有效性**: 验证者可以使用证明验证断言的真实性，确保证明者提供的证据是有效的。

- **不可伪造性**: 除非证明者拥有相关的真实信息，否则无法伪造出有效的零知识证明。

<DocsAD/>

## 类型

### 1. 交互式零知识证明（Interactive Zero-Knowledge Proofs, IZKPs）
- **定义**：交互式零知识证明需要证明者和验证者多轮交互来完成证明过程。
- **典型应用**：交互式证明通常用于更传统的零知识协议中，例如Fiat-Shamir协议。
- **优缺点**：交互式证明在协议中较为灵活，但其多轮交互使得其不适用于需要高效率的系统。

### 2. 非交互式零知识证明（Non-Interactive Zero-Knowledge Proofs, NIZKs）
- **定义**：非交互式零知识证明只需要证明者一次性地向验证者提供证明，而不需要多次往返交互。
- **典型应用**：zk-SNARKs、zk-STARKs等非交互式证明协议。
- **优缺点**：这种证明更适合区块链等分布式系统，但通常需要可信设置（例如zk-SNARKs）或特定的密码学假设。

### 3. zk-SNARKs（Zero-Knowledge Succinct Non-Interactive Argument of Knowledge）
- **定义**：zk-SNARKs是一种简洁的、非交互式的零知识证明，通常具有较小的证明大小和较快的验证时间。
- **应用领域**：zk-SNARKs广泛应用于区块链（例如Zcash）中的隐私保护。
- **特性**：zk-SNARKs需要可信设置，具有高度的计算效率，但设置阶段的信任假设可能成为安全风险。

### 4. zk-STARKs（Zero-Knowledge Scalable Transparent Argument of Knowledge）
- **定义**：zk-STARKs是一种透明的、可扩展的非交互式零知识证明，不需要可信设置。
- **应用领域**：适用于无需可信设置的场景，例如去中心化的隐私保护应用。
- **特性**：相比zk-SNARKs，zk-STARKs具有更高的透明性和可扩展性，但生成和验证的证明体积较大。

### 5. Bulletproofs
- **定义**：Bulletproofs是一种无需可信设置的非交互式零知识证明，主要用于区块链隐私保护，尤其是保密交易。
- **应用领域**：广泛应用于加密货币（例如Monero）中的隐私保护。
- **特性**：适用于较小规模的证明和验证，具有更小的证明大小，但验证时间比zk-SNARKs稍慢。

### 6. 交互式证明系统（Interactive Proof Systems）
- **定义**：由经典的交互式证明系统发展而来，包含多个不同的子类，例如多重证明者零知识证明。
- **典型应用**：用于更复杂的多方计算协议。

## 使用场景

* 隐私保护的加密货币如 Zcash 利用了 zk-SNARKs 来隐藏交易的发送方、接收方和交易金额。通过零知识证明，用户可以证明他们拥有一定数量的资金并进行交易，而无需公开具体的交易细节。
* ZKP 可以用于去中心化身份验证系统，用户可以证明他们拥有某种属性或资格（如年龄超过18岁、拥有某个证书等），而无需透露更多的个人信息。
* ZKP 可以用于验证数据的完整性和正确性，而不需要暴露数据本身。这在跨链数据共享和数据市场中非常有用。

## 数学基础

### 1. 群论（Group Theory）
- **群的定义和性质**：理解群的结构及其四种运算属性：闭合性、结合性、单位元、逆元。
- **循环群**：理解生成元以及其在密码学中的应用。
- **椭圆曲线群**：在密码学中非常重要，尤其是在零知识证明中应用广泛。

### 2. 数论（Number Theory）
- **素数与分解**：素数在加密算法的安全性上至关重要。
- **模运算**：模运算是很多密码学算法的基础，如RSA、DSA。
- **欧拉定理和费马小定理**：帮助理解模运算下的指数运算性质。
  
### 3. 线性代数（Linear Algebra）
- **矩阵和向量运算**：用于多方计算和零知识证明协议设计。
- **线性变换和秩**：帮助理解和证明线性系统的独立性和依赖性。
  
### 4. 概率论和统计学（Probability and Statistics）
- **随机性和概率分布**：零知识证明中常用到随机数生成和概率分析。
- **独立性和条件概率**：理解条件概率在协议中的应用，确保证明过程中的隐私性。
  
### 5. 复杂性理论（Complexity Theory）
- **计算复杂性类**：了解P、NP、NP完备问题。
- **NP问题与多项式时间可验证性**：帮助理解零知识证明协议中的可验证性。

### 6. 椭圆曲线密码学（Elliptic Curve Cryptography）
- **椭圆曲线方程**：理解椭圆曲线的数学结构。
- **加法和数乘运算**：掌握椭圆曲线上的点运算是实现零知识证明的基础。

### 7. 多项式和代数结构（Polynomial and Algebraic Structures）
- **拉格朗日插值**：在多项式证明和SNARK（简洁非交互知识论证）中有应用。
- **有限域**：有限域上的运算是构建零知识证明的核心。

### 8. 复数和傅里叶变换（Complex Numbers and Fourier Transforms）
- **快速傅里叶变换（FFT）**：在零知识证明的多项式计算中会使用FFT来加速计算。

## 简单例子

```JS
const crypto = require('crypto');

// 生成随机数
function getRandomInt(max) {
    return crypto.randomInt(max);
}

// 计算 (base ^ exp) % mod
function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }
    return result;
}

// 零知识证明协议
class ZeroKnowledgeProof {
    constructor(p, g, x) {
        this.p = p; // 大素数
        this.g = g; // 生成元
        this.x = x; // 私钥
        this.y = modPow(g, x, p); // 公钥
    }

    // 生成承诺
    generateCommitment() {
        this.r = getRandomInt(this.p - 1); // 随机数
        this.C = modPow(this.g, this.r, this.p); // 承诺
        return this.C;
    }

    // 提出挑战
    generateChallenge() {
        return getRandomInt(2); // 返回 0 或 1 的随机挑战
    }

    // 生成响应
    generateResponse(challenge) {
        if (challenge === 0) {
            return (this.x + this.r) % (this.p - 1);
        } else {
            return this.r;
        }
    }

    // 验证证明
    verifyProof(C, challenge, response) {
        if (challenge === 0) {
            const lhs = (C * this.y) % this.p;
            const rhs = modPow(this.g, response, this.p);
            return lhs === rhs;
        } else {
            const lhs = C;
            const rhs = modPow(this.g, response, this.p);
            return lhs === rhs;
        }
    }
}

// 使用示例
const p = 23; // 素数
const g = 5; // 生成元
const x = 6; // 私钥

const zkProof = new ZeroKnowledgeProof(p, g, x);

// 生成承诺
const C = zkProof.generateCommitment();
console.log('Commitment:', C);

// 提出挑战
const challenge = zkProof.generateChallenge();
console.log('Challenge:', challenge);

// 生成响应
const response = zkProof.generateResponse(challenge);
console.log('Response:', response);

// 验证证明
const isValid = zkProof.verifyProof(C, challenge, response);
console.log('Proof is valid:', isValid);
```