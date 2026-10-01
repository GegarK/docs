# 欧拉函数

欧拉函数（Euler's Totient Function）$\phi(n)$，表示**小于等于 \( n \)** 且**与 \( n \) 互素**的正整数的个数。

数学定义为：
$$
\phi(n) = |\{x \in \mathbb{Z}^+ \mid 1 \leq x \leq n, \gcd(x, n) = 1\}|
$$

$$
\gcd(x, n) 表示 x  和 n 的最大公约数。
$$

---

## 欧拉函数的性质

### 1. 质数 p 的欧拉函数
如果  n = p  是质数，则：
$$
\phi(p) = p - 1
$$
因为小于  p 的所有正整数都与 p 互素。

**例子：**
- p = 7：小于 7 的正整数有 1, 2, 3, 4, 5, 6 ，它们都与 7 互素，因此 $\phi(7) = 6$。

---

### 2. 两个互素数 m 和 n 的乘积
如果 $\gcd(m, n) = 1$，则：
$$
\phi(m \cdot n) = \phi(m) \cdot \phi(n)
$$

**例子：**
- m = 4, n = 5：$\gcd(4, 5) = 1$
- $\phi(4) = 2$（与 4 互素的数为 1, 3）；
- $\phi(5) = 4$（与 5 互素的数为 1, 2, 3, 4）；
- $\phi(4 \cdot 5) = \phi(20) = \phi(4) \cdot \phi(5) = 2 \cdot 4 = 8$


---

### 3. 任意整数 n 的欧拉函数
如果 n 的质因数分解为：
$$
n = p_1^{e_1} \cdot p_2^{e_2} \cdot \dots \cdot p_k^{e_k}
$$
则：
$$
\phi(n) = n \cdot \left(1 - \frac{1}{p_1}\right) \cdot \left(1 - \frac{1}{p_2}\right) \cdot \dots \cdot \left(1 - \frac{1}{p_k}\right)
$$

---

## 欧拉函数计算例子

### 例子 1：计算 $\phi(12)$
质因数分解：$12 = 2^2 \cdot 3$，因此：
$$
\phi(12) = 12 \cdot \left(1 - \frac{1}{2}\right) \cdot \left(1 - \frac{1}{3}\right)
$$
计算：
$$
\phi(12) = 12 \cdot \frac{1}{2} \cdot \frac{2}{3} = 12 \cdot \frac{1}{3} = 4
$$
验证：小于 12 且与 12 互素的数有 \( 1, 5, 7, 11 \)，共 4 个。

---

### 例子 2：计算$\phi(30)$
质因数分解：$30 = 2 \cdot 3 \cdot 5$，因此：
$$
\phi(30) = 30 \cdot \left(1 - \frac{1}{2}\right) \cdot \left(1 - \frac{1}{3}\right) \cdot \left(1 - \frac{1}{5}\right)
$$
计算：
$$
\phi(30) = 30 \cdot \frac{1}{2} \cdot \frac{2}{3} \cdot \frac{4}{5} = 30 \cdot \frac{8}{30} = 8
$$
验证：小于 30 且与 30 互素的数有 \( 1, 7, 11, 13, 17, 19, 23, 29 \)，共 8 个。
