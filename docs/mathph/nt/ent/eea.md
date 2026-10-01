# 扩展欧几里得

扩展欧几里得算法用于计算同余方程 $d \cdot e \equiv 1 \pmod{\phi(n)}$ 中的 $d$，即求解 $d$ 使得 $d \cdot e - 1$ 是 $\phi(n)$ 的倍数。以下是详细的计算步骤。

## 步骤 1：计算最大公约数

首先，需要计算 $e$ 和 $\phi(n)$ 的最大公约数 $\gcd(e, \phi(n))$。如果 $\gcd(e, \phi(n)) = 1$，则说明 $e$ 和 $\phi(n)$ 互素，存在解；否则无法解出 $d$。

## 步骤 2：使用扩展欧几里得算法

扩展欧几里得算法用于求解线性方程：

$$
d \cdot e + k \cdot \phi(n) = 1
$$

其中，$d$ 就是我们需要找到的私钥指数。

### 扩展欧几里得算法步骤：

1. **初始化**: 给定 $e$ 和 $\phi(n)$，目标是找到 $d$ 和 $k$。
   
2. **迭代步骤**：使用欧几里得算法递归计算最大公约数，并逐步得到 $d$ 和 $k$ 的值。

3. **反向代入**：从最后的余数开始反推，得到系数 $d$ 和 $k$。

## 示例

假设我们要解以下方程：

$$
d \cdot 7 \equiv 1 \pmod{40}
$$

### 计算 $\gcd(7, 40)$：

使用欧几里得算法：

- $40 = 5 \cdot 7 + 5$
- $7 = 1 \cdot 5 + 2$
- $5 = 2 \cdot 2 + 1$
- $2 = 2 \cdot 1 + 0$

因为 $\gcd(7, 40) = 1$，可以继续。

### 反向代入：

从最后的余数开始反推：

- $1 = 5 - 2 \cdot 2$
- $1 = 5 - 2 \cdot (7 - 1 \cdot 5) = 3 \cdot 5 - 2 \cdot 7$
- $1 = 3 \cdot (40 - 5 \cdot 7) - 2 \cdot 7 = 3 \cdot 40 - 17 \cdot 7$

所以，$d = -17 \pmod{40}$。

将 $d$ 转换为正数：

$$
d = -17 + 40 = 23
$$

因此，$d = 23$，这是满足 $d \cdot 7 \equiv 1 \pmod{40}$ 的解。

## 代码示例（Python）

```python
def extended_gcd(a, b):
    if b == 0:
        return a, 1, 0
    gcd, x1, y1 = extended_gcd(b, a % b)
    x = y1
    y = x1 - (a // b) * y1
    return gcd, x, y

def mod_inverse(e, phi_n):
    gcd, x, y = extended_gcd(e, phi_n)
    if gcd != 1:
        raise Exception('No modular inverse exists')
    else:
        return x % phi_n

# 示例：求解 d * 7 ≡ 1 (mod 40)
e = 7
phi_n = 40
d = mod_inverse(e, phi_n)
print(f"d = {d}")
```