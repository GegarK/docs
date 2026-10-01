# 生成器阶数太小

在椭圆曲线Diffie-Hellman（ECDH）中，选择一个生成元的阶数过小是容易遭受攻击的方式之一。如果生成元的阶数过小（比如32位），就容易通过求解离散对数问题（ECDLP）来攻击。因为当阶数n很小时，求解ECDLP的复杂度为O(n)，比如使用Baby-Step Giant-Step、Pollard's Rho、Pollard's Lambda等算法，可以快速求解。

```py

```