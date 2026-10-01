# 同态加密

同态加密（Homomorphic Encryption）是一种加密方式，允许对密文进行操作而无需解密，且结果解密后与直接对明文进行相同操作的结果一致。换句话说，同态加密使得对加密数据进行计算变得可能，而不需要访问或暴露原始数据。这一特性在许多隐私保护计算场景中非常重要，例如隐私计算、云计算和安全多方计算等。

<DocsAD/>

## 同态加密的类型

同态加密可以分为以下几种类型：

1. **部分同态加密（Partially Homomorphic Encryption，PHE）**：只支持某一类操作，比如加法或乘法。
   - 例如，RSA和ElGamal就是部分同态加密算法，RSA支持加法同态，而ElGamal支持乘法同态。

2. **全同态加密（Fully Homomorphic Encryption，FHE）**：支持任意的加法和乘法操作，可以进行复杂的计算。
   - 比如Gentry提出的全同态加密方案。

3. **一些同态加密（Somewhat Homomorphic Encryption，SHE）**：支持有限次数的加法和乘法操作。

## 同态加密的工作原理

同态加密的基本思想是，数据在加密后仍然可以执行计算，并且计算结果可以解密得到正确的答案。这个过程通常包括以下几个步骤：

1. **加密**：将明文数据通过加密算法转换成密文。
2. **计算**：在密文上执行某些操作（加法、乘法等）。
3. **解密**：将计算后的密文结果解密，得到最终结果。

## 同态加密的具体例子

假设我们有两个明文数字 `a = 3` 和 `b = 5`，并希望计算它们的加法和乘法，同时保持隐私。

### 加密过程

假设我们使用一种简单的同态加密方案（例如加法同态加密），我们将 `a` 和 `b` 分别加密成 `Enc(a)` 和 `Enc(b)`。

由于加密算法的具体细节依赖于加密库的实现，具体的加密过程我们可以略过，但可以假设我们得到了加密后的密文 `Enc(a)` 和 `Enc(b)`。

### 密文操作

由于同态加密允许对密文进行操作，我们可以直接对加密后的数据执行加法和乘法。

- 对密文进行加法：`Enc(a) + Enc(b)`（结果是加密后的和）。
- 对密文进行乘法：`Enc(a) * Enc(b)`（结果是加密后的积）。

### 解密过程

最后，我们将加密的结果解密得到明文的计算结果。

- 解密加法结果：`Dec(Enc(a) + Enc(b)) = a + b = 8`。
- 解密乘法结果：`Dec(Enc(a) * Enc(b)) = a * b = 15`。

## 同态加密的应用场景

1. **隐私计算**：在不泄露数据内容的前提下对加密数据进行处理。例如，在医疗数据分析中，医院可以将患者的敏感信息加密后交给第三方进行分析，第三方可以对加密数据进行计算，最后返回结果给医院，而无需查看患者的私人数据。
   
2. **安全云计算**：用户可以将加密数据存储在云端，云服务器可以在不解密的情况下处理数据并返回结果，避免数据泄露的风险。

3. **分布式计算**：通过同态加密，可以在多个不信任的方之间进行计算，而无需担心中间方查看或篡改数据。

## 同态加密的挑战与发展

1. **计算开销大**：同态加密特别是全同态加密，目前的计算开销远高于常规加密，仍然是一个难题。
2. **效率提升**：近年来，很多研究人员致力于提高同态加密的计算效率，减少延迟和资源消耗。
3. **应用限制**：同态加密目前尚未广泛应用于所有领域，尤其是大规模数据处理和实时计算场景，还需要进一步优化。

```py
import tenseal as ts

# Setup TenSEAL context
context = ts.context(
            ts.SCHEME_TYPE.CKKS,
            poly_modulus_degree=8192,
            coeff_mod_bit_sizes=[60, 40, 40, 60]
          )
context.generate_galois_keys()
context.global_scale = 2**40

v1 = [0, 1, 2, 3, 4]
v2 = [4, 3, 2, 1, 0]

print(v1,v2)

# encrypted vectors
enc_v1 = ts.ckks_vector(context, v1)
enc_v2 = ts.ckks_vector(context, v2)

print(enc_v1,enc_v2)

result = enc_v1 + enc_v2
v3 = result.decrypt() # ~ [4, 4, 4, 4, 4]

print(v3)
```

# Paillier 加密算法

**Paillier加密算法**是一种**加法同态加密**方案，它允许在加密数据上执行加法运算，而无需解密数据即可进行计算。Paillier加密方案特别适用于需要隐私保护并对加密数据进行操作的场景，如电子投票、隐私保护计算等。

## Paillier 加密算法的基本概念

Paillier加密是一种基于整数的同态加密方案，支持以下特性：

1. **加法同态性**：Paillier加密支持加法操作，即：
   $$
   E(a + b) = E(a) \cdot E(b)
   $$
   其中$E(a)$是对$a$的加密值。
   
2. **不可知性**：Paillier加密是不可知的，意味着加密后的密文没有泄漏任何关于原文的明显信息。

3. **安全性**：Paillier加密基于大整数分解问题，其安全性建立在对大整数分解的困难性基础上。

## Paillier 加密算法的工作原理

Paillier加密方案基于**模运算**和**大整数的分解问题**。它由以下步骤组成：密钥生成、加密、解密和加法同态。

### 1. 密钥生成（Key Generation）

Paillier的密钥生成算法如下：

1. 选择两个大素数$p$和$q$，并计算$n = p \cdot q$。
2. 计算$\lambda = \text{lcm}(p-1, q-1)$，其中$\text{lcm}(a, b)$是$a$和$b$的最小公倍数。
3. 选择一个$g$（满足$g$是$n^2$的模幂中的生成元，通常选择$g = n+1$）。
4. 计算$\mu = (L(g^\lambda \mod n^2))^{-1} \mod n$，其中$L(x) = \frac{x-1}{n}$是一个函数。

最终，密钥对为：
- **公钥**：$(n, g)$
- **私钥**：$(\lambda, \mu)$

### 2. 加密（Encryption）

给定明文消息$m$（其中$m$是一个整数，满足$0 \leq m < n$），加密过程如下：

1. 选择一个随机数$r$（其中$r$满足$0 < r < n$且$\gcd(r, n) = 1$）。
2. 计算密文：
   $$
   c = g^m \cdot r^n \mod n^2
   $$
   其中$c$是加密后的密文。

### 3. 解密（Decryption）

给定密文$c$，解密过程如下：

1. 计算：
   $$
   t = c^\lambda \mod n^2
   $$
2. 计算：
   $$
   L(t) = \frac{t-1}{n} \mod n
   $$
3. 最后，得到明文消息$m$：
   $$
   m = L(t) \cdot \mu \mod n
   $$

### 4. 加法同态性（Additive Homomorphism）

Paillier加密的一个重要特性是**加法同态性**，即可以在密文上直接进行加法计算。给定两个密文$c_1 = E(a)$和$c_2 = E(b)$，它们分别是明文$a$和$b$的加密：

- $c_1 = g^a \cdot r_1^n \mod n^2$
- $c_2 = g^b \cdot r_2^n \mod n^2$

加法同态性允许直接计算两个加密值的和。计算方式为：
$$
c_1 \cdot c_2 = g^a \cdot r_1^n \mod n^2 \cdot g^b \cdot r_2^n \mod n^2 = g^{a+b} \cdot (r_1 r_2)^n \mod n^2
$$
因此，密文$c_1 \cdot c_2$对应的解密结果是$a + b$，即：
$$
D(c_1 \cdot c_2) = a + b
$$

## Paillier 加密的安全性

Paillier加密的安全性基于**大整数分解问题**，尤其是基于**同态攻击的难度**。虽然其在加密过程中能够执行加法操作，但其计算难度主要来源于对$n$和$n^2$的因数分解的难度。

### 安全性概念

- **选择明文攻击（CPA）**：Paillier加密是**选择明文攻击安全**的，意味着即使攻击者能够选择要加密的明文并获取其加密值，仍然无法从密文中恢复出明文。

- **同态攻击**：Paillier加密的同态性使得在密文上执行加法时不会泄漏有关加密数据的任何信息。

```py
from phe import paillier

# 密钥生成
public_key, private_key = paillier.generate_paillier_keypair()

# 加密明文
m1 = 5
m2 = 7
ciphertext1 = public_key.encrypt(m1)
ciphertext2 = public_key.encrypt(m2)

# 同态加法
ciphertext_sum = ciphertext1 + ciphertext2
print(ciphertext1,ciphertext2,ciphertext_sum)

# 解密
decrypted_sum = private_key.decrypt(ciphertext_sum)
print(f"Decrypted sum: {decrypted_sum}")  # 输出: 12
```