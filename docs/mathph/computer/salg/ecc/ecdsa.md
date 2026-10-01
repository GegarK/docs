# ECDSA

## 椭圆曲线数字签名算法（ECDSA）

椭圆曲线数字签名算法（ECDSA, Elliptic Curve Digital Signature Algorithm）是基于椭圆曲线数学的公钥加密算法，用于数字签名。

## 1. 生成密钥对

- **私钥**：是一个随机生成的整数 $d$，该整数必须小于椭圆曲线的阶 $n$（即私钥的范围是 $d \in [1, n-1]$）。
- **公钥**：是通过将私钥与椭圆曲线的基点 $G$ 相乘得到的结果，即 $Q = dG$，其中 $Q$ 是公钥，$d$ 是私钥，$G$ 是椭圆曲线的生成点（基点）。

## 2. 签名过程

假设你想要对消息 $m$ 进行签名，过程如下：

### 步骤 1：哈希消息

对消息 $m$ 进行哈希处理，使用安全的哈希算法（如SHA-256），得到消息的哈希值 $H(m)$，这个哈希值会作为签名的输入。

### 步骤 2：生成签名

生成签名的过程包括以下几个步骤：

1. **选择随机数 $k$**：选择一个随机数 $k$（它应该是一个私密的随机数，且 $k \in [1, n-1]$）。这是签名中的关键步骤，确保每个签名都是唯一的，即使是相同的消息。
   
2. **计算 $r$**：计算 $r = (k \cdot G)_x \mod n$，其中 $(k \cdot G)$ 是点乘操作，$G$ 是椭圆曲线的基点，$(k \cdot G)_x$ 是结果点的 x 坐标。注意，如果 $r = 0$，则需要重新选择一个 $k$。

3. **计算 $s$**：计算 $s = k^{-1} \cdot (H(m) + r \cdot d) \mod n$，其中：
   - $k^{-1}$ 是 $k$ 关于 $n$ 的模逆元（即 $k \cdot k^{-1} \equiv 1 \mod n$）。
   - $d$ 是私钥。

签名 $(r, s)$ 由这两个值组成。

## 3. 验证过程

接下来是验证签名的过程，假设接收者知道签名 $(r, s)$ 和公钥 $Q$，并且想要验证该签名是否有效：

### 步骤 1：哈希消息

接收者首先对收到的消息 $m$ 进行哈希处理，得到哈希值 $H(m)$。

### 步骤 2：验证签名

验证过程的关键是通过以下公式检查签名 $(r, s)$ 的有效性：

1. **计算 $w$**：计算 $w = s^{-1} \mod n$。

2. **计算 $u_1$ 和 $u_2$**：
   - $u_1 = H(m) \cdot w \mod n$
   - $u_2 = r \cdot w \mod n$

3. **计算椭圆曲线点 $P$**：计算 $P = u_1 \cdot G + u_2 \cdot Q$，其中 $Q$ 是公钥，$\cdot$ 表示椭圆曲线上的点乘。

4. **验证 $r$**：检查 $P_x \mod n = r$，其中 $P_x$ 是点 $P$ 的 x 坐标。如果等式成立，则验证通过；否则，验证失败。

## 举例说明

假设我们有以下参数：

- **椭圆曲线的阶 $n = 23$**
- **基点 $G = (1, 2)$**
- **私钥 $d = 6$**
- **消息 $m = "Hello, World!"$**

### 签名过程

1. **计算消息的哈希值**：假设通过哈希算法得到 $H(m) = 19$。

2. **选择随机数 $k = 7$**

3. **计算 $r$**：
   $$
   r = (7 \cdot G)_x \mod 23
   $$
   计算 $7 \cdot G$ 得到一个点 $P = (x, y)$，假设计算得到的 $x = 15$，则 $r = 15 \mod 23 = 15$。

4. **计算 $s$**：
   $$
   s = 7^{-1} \cdot (H(m) + r \cdot d) \mod 23
   $$
   计算 $7^{-1} \mod 23 = 10$，
   $$
   s = 10 \cdot (19 + 15 \cdot 6) \mod 23 = 10 \cdot (19 + 90) \mod 23 = 10 \cdot 109 \mod 23 = 10 \cdot 16 \mod 23 = 160 \mod 23 = 20
   $$

所以签名为 $(r, s) = (15, 20)$。

### 验证过程

1. **计算消息的哈希值**：同样，$H(m) = 19$。

2. **计算 $w$**：
   $$
   w = s^{-1} \mod 23 = 20^{-1} \mod 23 = 7
   $$

3. **计算 $u_1$ 和 $u_2$**：
   $$
   u_1 = H(m) \cdot w \mod 23 = 19 \cdot 7 \mod 23 = 133 \mod 23 = 17
   $$
   $$
   u_2 = r \cdot w \mod 23 = 15 \cdot 7 \mod 23 = 105 \mod 23 = 13
   $$

4. **计算椭圆曲线点 $P = u_1 \cdot G + u_2 \cdot Q$**

   假设计算得到点 $P = (15, y)$，然后验证 $P_x \mod 23 = r$，如果 $P_x = 15$，则验证通过，签名有效。

通过这个示例，你可以看到ECDSA的签名生成和验证过程的详细步骤。这些计算基于椭圆曲线上的点运算，确保了签名的安全性和唯一性。


```py
#!/usr/bin/env python3

import collections
import hashlib
import random

EllipticCurve = collections.namedtuple('EllipticCurve', 'name p a b g n h')

curve = EllipticCurve(
    'secp256k1',
    # Field characteristic.
    p=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f,
    # Curve coefficients.
    a=0,
    b=7,
    # Base point.
    g=(0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798,
       0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8),
    # Subgroup order.
    n=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141,
    # Subgroup cofactor.
    h=1,
)


# Modular arithmetic ##########################################################

def inverse_mod(k, p):
    """Returns the inverse of k modulo p.

    This function returns the only integer x such that (x * k) % p == 1.

    k must be non-zero and p must be a prime.
    """
    if k == 0:
        raise ZeroDivisionError('division by zero')

    if k < 0:
        # k ** -1 = p - (-k) ** -1  (mod p)
        return p - inverse_mod(-k, p)

    # Extended Euclidean algorithm.
    s, old_s = 0, 1
    t, old_t = 1, 0
    r, old_r = p, k

    while r != 0:
        quotient = old_r // r
        old_r, r = r, old_r - quotient * r
        old_s, s = s, old_s - quotient * s
        old_t, t = t, old_t - quotient * t

    gcd, x, y = old_r, old_s, old_t

    assert gcd == 1
    assert (k * x) % p == 1

    return x % p


# Functions that work on curve points #########################################

def is_on_curve(point):
    """Returns True if the given point lies on the elliptic curve."""
    if point is None:
        # None represents the point at infinity.
        return True

    x, y = point

    return (y * y - x * x * x - curve.a * x - curve.b) % curve.p == 0


def point_neg(point):
    """Returns -point."""
    assert is_on_curve(point)

    if point is None:
        # -0 = 0
        return None

    x, y = point
    result = (x, -y % curve.p)

    assert is_on_curve(result)

    return result


def point_add(point1, point2):
    """Returns the result of point1 + point2 according to the group law."""
    assert is_on_curve(point1)
    assert is_on_curve(point2)

    if point1 is None:
        # 0 + point2 = point2
        return point2
    if point2 is None:
        # point1 + 0 = point1
        return point1

    x1, y1 = point1
    x2, y2 = point2

    if x1 == x2 and y1 != y2:
        # point1 + (-point1) = 0
        return None

    if x1 == x2:
        # This is the case point1 == point2.
        m = (3 * x1 * x1 + curve.a) * inverse_mod(2 * y1, curve.p)
    else:
        # This is the case point1 != point2.
        m = (y1 - y2) * inverse_mod(x1 - x2, curve.p)

    x3 = m * m - x1 - x2
    y3 = y1 + m * (x3 - x1)
    result = (x3 % curve.p,
              -y3 % curve.p)

    assert is_on_curve(result)

    return result


def scalar_mult(k, point):
    """Returns k * point computed using the double and point_add algorithm."""
    assert is_on_curve(point)

    if k % curve.n == 0 or point is None:
        return None

    if k < 0:
        # k * point = -k * (-point)
        return scalar_mult(-k, point_neg(point))

    result = None
    addend = point

    while k:
        if k & 1:
            # Add.
            result = point_add(result, addend)

        # Double.
        addend = point_add(addend, addend)

        k >>= 1

    assert is_on_curve(result)

    return result


# Keypair generation and ECDSA ################################################

def make_keypair():
    """Generates a random private-public key pair."""
    private_key = random.randrange(1, curve.n)
    public_key = scalar_mult(private_key, curve.g)

    return private_key, public_key


def hash_message(message):
    """Returns the truncated SHA521 hash of the message."""
    message_hash = hashlib.sha512(message).digest()
    e = int.from_bytes(message_hash, 'big')

    # FIPS 180 says that when a hash needs to be truncated, the rightmost bits
    # should be discarded.
    z = e >> (e.bit_length() - curve.n.bit_length())

    assert z.bit_length() <= curve.n.bit_length()

    return z


def sign_message(private_key, message):
    z = hash_message(message)

    r = 0
    s = 0

    while not r or not s:
        k = random.randrange(1, curve.n)
        x, y = scalar_mult(k, curve.g)

        r = x % curve.n
        s = ((z + r * private_key) * inverse_mod(k, curve.n)) % curve.n

    return (r, s)


def verify_signature(public_key, message, signature):
    z = hash_message(message)

    r, s = signature

    w = inverse_mod(s, curve.n)
    u1 = (z * w) % curve.n
    u2 = (r * w) % curve.n

    x, y = point_add(scalar_mult(u1, curve.g),
                     scalar_mult(u2, public_key))

    if (r % curve.n) == (x % curve.n):
        return 'signature matches'
    else:
        return 'invalid signature'


print('Curve:', curve.name)

private, public = make_keypair()
print("Private key:", hex(private))
print("Public key: (0x{:x}, 0x{:x})".format(*public))

msg = b'Hello!'
signature = sign_message(private, msg)

print()
print('Message:', msg)
print('Signature: (0x{:x}, 0x{:x})'.format(*signature))
print('Verification:', verify_signature(public, msg, signature))

msg = b'Hi there!'
print()
print('Message:', msg)
print('Verification:', verify_signature(public, msg, signature))

private, public = make_keypair()

msg = b'Hello!'
print()
print('Message:', msg)
print("Public key: (0x{:x}, 0x{:x})".format(*public))
print('Verification:', verify_signature(public, msg, signature))
```