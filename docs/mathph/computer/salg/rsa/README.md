# RSA


RSA（Rivest-Shamir-Adleman）是一种非对称加密算法，它利用两个不同的密钥进行加密和解密：公钥和私钥。RSA 是基于数论中的大整数分解问题，广泛应用于数据加密、数字签名和身份认证等领域。

## RSA 加密算法的原理

RSA 算法的安全性基于大数分解的困难性，即给定一个大整数，难以分解其质因数。

### 1. 密钥生成

1. **选择两个大质数** `p` 和 `q`。
   
2. 计算 `n = p * q`，`n` 用作公钥和私钥的一部分。`n` 的大小决定了加密的强度。大多数情况下，`n` 是一个非常大的数（例如 2048 位或更大）。

3. 计算 `φ(n)`，即欧拉函数 `φ(n) = (p-1)(q-1)`。这个值用于后续计算私钥。

4. 选择一个公钥指数 `e`，满足 `1 < e < φ(n)` 且 `e` 和 `φ(n)` 互质。常用的公钥指数值为 `e = 65537`，因为它通常是一个质数且计算效率较高。

5. 计算私钥指数 `d`，使得 `d * e ≡ 1 (mod φ(n))`。换句话说，`d` 是 `e` 的模 `φ(n)` 逆元。可以通过[扩展欧几里得算法](../../../nt/ent/eea.md)来计算 `d`。

最终，公钥由 `(n, e)` 组成，私钥由 `(n, d)` 组成。

### 2. 加密过程

1. **加密公式**：使用接收方的公钥 `(n, e)` 对消息 `M` 进行加密，得到密文 `C`。加密公式为：

$$
C = M^e \mod n
$$
   
其中 `M` 是消息，`e` 是公钥指数，`n` 是模数。

2. **密文范围**：消息 `M` 必须满足 `0 ≤ M < n`，如果消息较大，需要对消息进行分块处理。

### 3. 解密过程

1. **解密公式**：使用私钥 `(n, d)` 对密文 `C` 进行解密，得到明文 `M`。解密公式为：

$$
M = C^d \mod n
$$
   
其中 `C` 是密文，`d` 是私钥指数，`n` 是模数。

### 4. 安全性

RSA 算法的安全性依赖于大数分解问题的困难性。即使知道 `n` 和 `e`，也很难从中推算出 `p` 和 `q`，从而无法计算出私钥 `d`。如果 `p` 和 `q` 选择得足够大，RSA 的加密是非常安全的。

## RSA 算法示例

假设我们有两个质数 `p = 61` 和 `q = 53`，通过这些步骤可以生成一个简单的 RSA 密钥对。

1. **计算 `n = p * q`**：

$$
n = 61 * 53 = 3233
$$

2. **计算 `φ(n) = (p-1)(q-1)`**：

$$
φ(n) = (61-1)(53-1) = 60 * 52 = 3120
$$

3. **选择公钥指数 `e = 17`**（一个常用的值），满足 `1 < e < φ(n)` 且 `e` 与 `3120` 互质。

4. **计算私钥指数 `d`**：我们需要找到一个 `d`，使得 `d * 17 ≡ 1 (mod 3120)`。通过扩展欧几里得算法，得到 `d = 2753`。

因此，公钥为 `(n, e) = (3233, 17)`，私钥为 `(n, d) = (3233, 2753)`。

### 加密

假设我们要加密消息 `M = 65`，则使用公钥 `(3233, 17)` 进行加密：

$$
C = 65^{17} \mod 3233 = 2790
$$

### 解密

使用私钥 `(3233, 2753)` 解密密文 `C = 2790`：

$$
M = 2790^{2753} \mod 3233 = 65
$$

最终解密回到原始消息 `M = 65`。

```py
# 快速幂算法：计算 (base^exp) % mod
def mod_exp(base, exp, mod):
    result = 1
    base = base % mod  # 确保 base 在 mod 下不大
    while exp > 0:
        if exp % 2 == 1:  # 如果 exp 的当前最低位为 1
            result = (result * base) % mod
        exp = exp >> 1  # exp 除以 2
        base = (base * base) % mod  # base 自己平方
    return result

# 计算最大公约数 (gcd)
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

# 扩展欧几里得算法：求解 d * e ≡ 1 (mod φ(n))
def extended_gcd(a, b):
    old_r, r = a, b
    old_s, s = 1, 0
    old_t, t = 0, 1
    while r != 0:
        quotient = old_r // r
        old_r, r = r, old_r - quotient * r
        old_s, s = s, old_s - quotient * s
        old_t, t = t, old_t - quotient * t
    return old_s, old_t  # 返回 s 和 t，其中 s 是逆元

# RSA 密钥生成
def rsa_keypair(p, q):
    n = p * q  # 计算 n
    phi_n = (p - 1) * (q - 1)  # 计算 φ(n)
    
    # 选择公钥 e
    e = 17  # 选择常见的公钥指数 e
    while gcd(e, phi_n) != 1:  # 确保 e 与 φ(n) 互质
        e += 1

    # 使用扩展欧几里得算法计算私钥 d
    d, _ = extended_gcd(e, phi_n)
    if d < 0:
        d += phi_n  # 确保 d 是正数
    
    return (n, e), (n, d)

# RSA 加密
def rsa_encrypt(message, public_key):
    n, e = public_key
    return mod_exp(message, e, n)  # C = M^e % n

# RSA 解密
def rsa_decrypt(ciphertext, private_key):
    n, d = private_key
    return mod_exp(ciphertext, d, n)  # M = C^d % n

# 示例：使用 p = 61 和 q = 53 生成 RSA 密钥对
p = 61
q = 53
public_key, private_key = rsa_keypair(p, q)

# 加密
message = 65  # 原始消息
ciphertext = rsa_encrypt(message, public_key)
print(f"加密后的密文: {ciphertext}")

# 解密
decrypted_message = rsa_decrypt(ciphertext, private_key)
print(f"解密后的消息: {decrypted_message}")
```

# RSA破解

```py
import math

# 辗转相除法求最大公约数
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

# 扩展欧几里得算法计算模逆元
def extended_gcd(a, b):
    old_r, r = a, b
    old_s, s = 1, 0
    old_t, t = 0, 1
    while r != 0:
        quotient = old_r // r
        old_r, r = r, old_r - quotient * r
        old_s, s = s, old_s - quotient * s
        old_t, t = t, old_t - quotient * t
    return old_s, old_t

# 快速幂算法：计算 (base^exp) % mod
def mod_exp(base, exp, mod):
    result = 1
    base = base % mod
    while exp > 0:
        if exp % 2 == 1:
            result = (result * base) % mod
        exp = exp >> 1
        base = (base * base) % mod
    return result

# 分解 n 为 p 和 q
def factorize_n(n):
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return i, n // i
    raise ValueError("Failed to factorize n")

# 破解 RSA
def crack_rsa(n, e, ciphertext):
    # 1. 分解 n
    p, q = factorize_n(n)
    print(f"分解结果: p = {p}, q = {q}")

    # 2. 计算 φ(n)
    phi_n = (p - 1) * (q - 1)

    # 3. 计算私钥 d
    d, _ = extended_gcd(e, phi_n)
    if d < 0:
        d += phi_n

    print(f"计算出的私钥: d = {d}")

    # 4. 解密密文
    plaintext = mod_exp(ciphertext, d, n)
    return plaintext

# 示例数据
n = 3233  # 公钥模数
e = 17    # 公钥指数
ciphertext = 2790  # 密文

# 破解 RSA
plaintext = crack_rsa(n, e, ciphertext)
print(f"破解后的明文: {plaintext}")
```


# 快速幂算法

在 RSA 加密过程中，解密操作通常需要对密文进行非常大的指数运算。这个问题通过使用 **模重复平方法**（也叫 **二进制指数法** 或 **快速幂算法**）来高效地解决。模重复平方法可以在对非常大的次方进行运算时，显著减少计算量。

## 解密过程

假设我们有以下数据：

- \( C = 2790 \)（密文）
- \( d = 2753 \)（私钥指数）
- \( n = 3233 \)（模数）

我们需要计算：

$$
M = C^d \mod n
$$

直接计算 C^d 涉及非常大的指数，但我们可以使用 **快速幂算法** 来有效计算大次方模运算。

## 快速幂算法步骤

1. **将指数 \(d\) 转换为二进制形式**，例如 \( 2753 \) 的二进制表示是 \( 101010111001 \)。
2. **按二进制位进行逐步计算**：
   - 从最低位开始，如果当前位是 1，则将当前的结果与底数相乘。
   - 每步将底数平方，并更新指数。

通过快速幂算法，可以在较短时间内完成大指数的模运算。

## 示例：Python 实现快速幂算法

```python
def mod_exp(base, exp, mod):
    result = 1
    base = base % mod  # 确保 base 在 mod 下不大
    while exp > 0:
        if exp % 2 == 1:  # 如果 exp 的当前最低位为 1
            result = (result * base) % mod
        exp = exp >> 1  # exp 除以 2
        base = (base * base) % mod  # base 自己平方
    return result

# 示例：计算 2790^2753 mod 3233
C = 2790
d = 2753
n = 3233
M = mod_exp(C, d, n)
print(f"M = {M}")
```