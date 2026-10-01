# 前缀篡改攻击

[https://github.com/elikaski/ECC_Attacks](https://github.com/elikaski/ECC_Attacks)

## 攻击原理：
前缀篡改攻击（Prefix Collision Attack）在签名过程中，通常的做法是先对消息进行哈希处理，然后将哈希值的高位部分用于签名。这个哈希步骤的作用是将消息压缩成固定长度，并且确保签名只能对应特定的消息内容。如果跳过哈希步骤，直接用消息的原始内容来计算签名（如示例代码中所做的那样），攻击者就能在不修改签名的情况下篡改消息内容。

具体来说，在这种情况下，签名仅仅是基于消息的开头部分（即消息的前缀）。因此，攻击者可以修改消息的后续部分，而不影响签名的有效性，只要消息的开头部分与原始消息一致，签名就会继续有效。这就会导致签名无法正确保证消息的完整性。

## 攻击后果：
这种攻击方式的后果可能非常严重，尤其是在金融交易或敏感数据处理的场景中。攻击者能够篡改消息的内容（例如转账金额或收款方）而不需要知道私钥，签名仍然是有效的，这可能导致资金的错误转账或其他恶意行为。

## 防范措施：
为了避免这种攻击，签名过程中的哈希步骤不可省略，应该对消息进行完整的哈希处理后再进行签名。这样，即使攻击者改变消息的后半部分，签名也会失效，因为哈希值会完全改变，无法匹配原始签名。

另外，使用标准的签名方案（如带有严格哈希处理的ECDSA或RSA）来确保消息的完整性和签名的不可篡改性，也可以有效防止此类攻击。

```py
from ecdsa import SigningKey, NIST256p

# 创建签名和验证的密钥
signing_key = SigningKey.generate(NIST256p)
verifying_key = signing_key.verifying_key

# 自定义的哈希函数（不进行实际哈希，直接返回原始数据）
class MyHash:
    def __init__(self, data):
        self.data = data

    def digest(self):
        return self.data

# 签名消息并验证签名
message = "Please transfer 1,000$ to GitHub"
signature = signing_key.sign(message.encode(), hashfunc=MyHash)
print(verifying_key.verify(signature, message.encode(), hashfunc=MyHash))

# 构造恶意消息并验证原始消息的签名是否仍然有效
evil_message = "Please transfer 1,000$ to GitHub and 1,000,000$ to Eli Kaski"
print(verifying_key.verify(signature, evil_message.encode(), hashfunc=MyHash))
```