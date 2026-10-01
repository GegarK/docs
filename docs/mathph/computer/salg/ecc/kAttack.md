# 重复K攻击

在消息签名过程中，用户需要随机生成一个 $k$ 值并用于签名消息。重要的是，在不同的签名中必须使用不同的 $k$ 值。如果在签署两条不同的消息时使用相同的 $k$ 值，攻击者可以通过已签名的两条消息计算出用户的私钥。

在签名过程中，用户公开发送了：

$$
r = x_1 \ (\text{mod} \ p)
$$

$$
s = k^{-1} \cdot (z + r \cdot d_A) \ (\text{mod} \ n)
$$

其中，$r$ 是 $x_1$ 的 $x$ 坐标模 $p$，$s$ 是使用私钥 $d_A$ 和 $k$ 值计算出来的签名部分，$z$ 是消息的哈希值。

假设用户签署了两条不同的消息，分别对应于 $z_1$ 和 $z_2$，并且公开发送了两对签名值 $(r, s_1)$ 和 $(r, s_2)$，也就是说在这两条签名中使用了相同的 $k$ 值。我们可以得到如下推导：

$$
s_1 - s_2 = k^{-1} \cdot (z_1 + r \cdot d_A) - k^{-1} \cdot (z_2 + r \cdot d_A)
$$

由于 $r \cdot d_A$ 项相同，我们可以简化为：

$$
s_1 - s_2 = k^{-1} \cdot (z_1 - z_2)
$$

从这个公式中，攻击者可以计算出 $k$：

$$
k = \frac{z_1 - z_2}{s_1 - s_2} \ (\text{mod} \ n)
$$

一旦攻击者计算出 $k$，就可以利用其中一个签名来计算用户的私钥 $d_A$。假设我们选择签名 $(r, s_1)$，攻击者可以使用如下公式来计算私钥：

$$
d_A = r^{-1} \cdot (k \cdot s_1 - z_1) \ (\text{mod} \ n)
$$

从而获得签名者的私钥，进而可以签署任何消息。

### 代码实现

```python
from ecdsa.ecdsa import curve_256, generator_256, Public_key, Private_key
from Crypto.Util.number import bytes_to_long,  long_to_bytes
from hashlib import sha256
import random

# 扩展欧几里得算法，用于计算最大公约数，以及求解逆元
def extended_gcd(a, b):
    """返回 (g, x, y)，其中 a * x + b * y = g，g 是 a 和 b 的最大公约数。"""
    if b == 0:
        return a, 1, 0
    else:
        g, x, y = extended_gcd(b, a % b)
        return g, y, x - (a // b) * y

# 求 a 在模 m 下的逆元
def inverse_mod(a, m):
    """返回 a 在模 m 下的逆元。"""
    g, x, y = extended_gcd(a, m)
    if g != 1:
        raise ValueError(f"没有 a = {a} 和 m = {m} 的逆元")
    else:
        return x % m  # 确保结果是正数

# 选择曲线和生成元
curve = curve_256
generator = generator_256
n = generator.order()  # 生成元的阶

# 创建私钥和公钥
secret_key = int.from_bytes(b"DeeLMind")  # 私钥
print("secret_key",secret_key)
public_key = Public_key(generator, generator * secret_key)  # 公钥
private_key = Private_key(public_key, secret_key)  # 私钥对象

# 使用相同的 k 签名两条消息
k = random.randrange(curve.p())  # 随机选择一个 k 值
message1 = "Life is like a box of chocolates."
message2 = "You never know what you're gonna get."
# 将消息哈希化，转换为长整型
z1 = bytes_to_long(sha256(message1.encode()).digest())
z2 = bytes_to_long(sha256(message2.encode()).digest())

# 使用相同的 k 值分别对两条消息进行签名
signature1 = private_key.sign(z1, k)
signature2 = private_key.sign(z2, k)

# 利用两个签名，推导出 k 的值
found_k = (z1 - z2) * inverse_mod(signature1.s - signature2.s, n) % n

# 利用 k 和其中一条消息，恢复出私钥
found_key = inverse_mod(signature1.r, n) * (found_k * signature1.s - z1) % n

print("The secret is:", long_to_bytes(found_key).decode())
```