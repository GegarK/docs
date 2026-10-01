# CRC

CRC32 是一种循环冗余校验算法，用于检测数据传输或存储中的错误。它将输入数据处理为一个 32 位的校验码，广泛应用于网络通信、文件校验等场景。

## 工作原理

1. **定义生成多项式**：
   通常使用 `0x04C11DB7` 作为标准生成多项式。
2. **初始化 CRC 值**：
   将初始 CRC 值设为 `0xFFFFFFFF`。
3. **逐字节处理数据**：
   - 将每个数据字节与当前 CRC 值进行异或操作。
   - 按位移位，根据生成多项式更新 CRC 值。
4. **最终异或**：
   计算完成后，将 CRC 值与 `0xFFFFFFFF` 再次异或。

## CRC32 生成多项式

100000 100110000010001110110110111

x^30 + x^26 + x^23 + x^22 + x^16 + x^12 + x^11 + x^10 + x^8 + x^7 + x^5 + x^4 + x^2 + x + 1

标准形式：0x04C11DB7（MSB 优先）

逆序形式：0xEDB88320（LSB 优先）

## Python

```py
def reverse_bits(x, n=32):
    result = 0
    for i in range(n):
        result = (result << 1) | (x & 1)
        x >>= 1
    return result

# CRC32 标准形式
standard = 0x04C11DB7  # 标准形式的多项式
reversed_polynomial = reverse_bits(standard, 32)
print(f"逆序形式：0x{reversed_polynomial:08X}")

def crc32(data):
    # 初始值，通常为全1
    crc = 0xFFFFFFFF
    # CRC32多项式：0xEDB88320
    polynomial = 0xEDB88320

    for byte in data:
        # 取当前字节与当前的CRC值进行异或
        crc ^= byte
        for _ in range(8):
            # 检查最低位是否为1
            if crc & 1:
                # 如果是1，则进行异或操作
                crc = (crc >> 1) ^ polynomial
            else:
                # 如果是0，则简单右移
                crc >>= 1

    # 最终结果通常需要与全1异或
    return crc ^ 0xFFFFFFFF

# 使用示例
data = b"Hello, CRC32!"
result = crc32(data)
print(f"CRC32 of '{data.decode()}' is: {result:08X}")
```