# Base

Base编码（也称为Base-X编码）是一种用于将数据转换为可打印字符的编码方式，通常用于将二进制数据转换为文本表示。常见的Base编码包括Base64、Base32、Base16等，每种都有不同的用途和字符集。

## 1. Base64编码

Base64是最常见的一种编码方式，通常用于将二进制数据（如图片、文件等）转换为可打印的文本。它使用64个字符（字母、数字和一些符号）来表示数据。特点：使用字符集：`A-Z`, `a-z`, `0-9`, `+`, `/` 输出长度是输入数据长度的1.33倍（每3个字节转换为4个字符） 主要应用于邮件、URL编码、文件传输等

## 2. Base32编码

Base32编码是Base64的变种，使用32个字符来表示数据。它通常用于编码较短的二进制数据，适用于在不区分大小写的环境中进行编码。特点：使用字符集：`A-Z`, `2-7` 输出长度是输入数据长度的1.6倍 常用于生成短网址、验证码等

## 3. Base16编码（Hex编码）

Base16编码通常称为十六进制编码，它使用16个字符来表示数据：`0-9`, `A-F`。特点：使用字符集：`0-9`, `A-F` 输出长度是输入数据的2倍 常用于调试和表示二进制数据（如颜色、文件哈希）

## 4. Base58编码

Base58是一种减少了易混淆字符（如`0`, `O`, `I`, `l`）的编码方式，通常用于比特币等区块链中。特点：使用字符集：`1-9`, `A-Z`, `a-z`（排除了`0`, `O`, `I`, `l`） 用于生成较短、清晰的字符串 

## 5. Base85编码（Ascii85）

Base85编码是一种用于进一步压缩Base64编码输出的编码方式，使用85个字符来表示数据。它通常用于网络协议或某些数据传输格式中，旨在减少编码后的字符长度。特点：使用字符集：`!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~` 输出比Base64更短

## 应用场景

- **Base64**：用于电子邮件附件、数据嵌入（如图片文件在HTML中的嵌入）、URL参数传递等。
- **Base32**：常用于二维码、文件名中避免特殊字符、文件标识符等。
- **Base16**：广泛用于调试、查看二进制数据、表示哈希值（如SHA256）等。
- **Base58**：比特币地址生成、钱包密钥编码。
- **Base85**：通常用于特定的网络协议或者优化传输的场景。

## [Base64原理](https://aaronluna.dev/base64)

## Base64代码

```py
class b64:
    def __init__(self):
        self.table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

    def encode(self, text):
        bins = str()
        for c in text:
            bins += '{:0>8}'.format(str(bin(ord(c)))[2:])
        while len(bins) % 3:
            bins += '00000000'
        d = 1
        for i in range(6, len(bins) + int(len(bins) / 6), 7):
            bins = bins[:i] + ' ' + bins[i:]
        bins = bins.split(' ')
        if '' in bins:
            bins.remove('')
        base64 = str()
        for b in bins:
            if b == '000000':
                base64 += '='
            else:
                base64 += self.table[int(b, 2)]
        return base64

    def decode(self, text):
        bins = str()
        for c in text:
            if c == '=':
                bins += '000000'
            else:
                bins += '{:0>6}'.format(str(bin(self.table.index(c)))[2:])
        for i in range(8, len(bins) + int(len(bins) / 8), 9):
            bins = bins[:i] + ' ' + bins[i:]
        bins = bins.split(' ')
        if '' in bins:
            bins.remove('')
        text = str()
        for b in bins:
            if not b == '00000000':
                text += chr(int(b, 2))
        return text
    

print(b64().encode("123"))
```