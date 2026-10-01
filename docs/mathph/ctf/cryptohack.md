# CryptoHack

## 题目[https://cryptohack.org/](https://cryptohack.org/)

<DocsAD/>

## [https://cryptohack.org/challenges/introduction/](https://cryptohack.org/challenges/introduction/)简单

## [https://cryptohack.org/challenges/general/](https://cryptohack.org/challenges/general/)

* ASCII

```py
# 给定的整数数组
ascii_values = [99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125]

# 将每个整数转换为对应的 ASCII 字符
flag = ''.join(chr(value) for value in ascii_values)

# 打印结果crypto{ASCII_pr1nt4bl3}
print(flag)
```

## Hex

```py
# Given hex string
hex_string = "63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d"

# Decode the hex string into bytes
decoded_bytes = bytes.fromhex(hex_string)

# Convert the bytes to a string
flag = decoded_bytes.decode('utf-8')

# Print the flag crypto{You_will_be_working_with_hex_strings_a_lot}
print(flag)
```

## Base64

```py
import base64

# Given hex string
hex_string = "72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf"

# Step 1: Decode the hex string into bytes
decoded_bytes = bytes.fromhex(hex_string)

# Step 2: Encode the bytes into Base64
base64_encoded = base64.b64encode(decoded_bytes).decode('utf-8')

# Print the Base64 result crypto/Base+64+Encoding+is+Web+Safe/
print(base64_encoded) 
```

## Bytes and Big Integers

```py
from Crypto.Util.number import long_to_bytes

# Given integer
integer_value = 11515195063862318899931685488813747395775516287289682636499965282714637259206269

# Convert the integer back to bytes and decode into a string
message = long_to_bytes(integer_value).decode('utf-8')

# Print the message crypto{3nc0d1n6_4ll_7h3_w4y_d0wn}
print(message)
```

## XOR Starer

```py
label = "label"
new_string = "".join(chr(ord(c) ^ 13) for c in label)
flag = f"crypto{{{new_string}}}"
print(flag)  crypto{aloha}
```

## RSA Null or Never

```py
#!/usr/bin/env python3

from Crypto.PublicKey import RSA
from Crypto.Util.number import bytes_to_long

FLAG = b"crypto{???????????????????????????????????}"


def pad100(msg):
    return msg + b'\x00' * (100 - len(msg))


key = RSA.generate(1024, e=3)
n, e = key.n, key.e

m = bytes_to_long(pad100(FLAG))
c = pow(m, e, n)

print(f"n = {n}")
print(f"e = {e}")
print(f"c = {c}")

outputfile
n = 95341235345618011251857577682324351171197688101180707030749869409235726634345899397258784261937590128088284421816891826202978052640992678267974129629670862991769812330793126662251062120518795878693122854189330426777286315442926939843468730196970939951374889986320771714519309125434348512571864406646232154103
e = 3
c = 63476139027102349822147098087901756023488558030079225358836870725611623045683759473454129221778690683914555720975250395929721681009556415292257804239149809875424000027362678341633901036035522299395660255954384685936351041718040558055860508481512479599089561391846007771856837130233678763953257086620228436828
```

```py
from Crypto.Util.number import *

n = 95341235345618011251857577682324351171197688101180707030749869409235726634345899397258784261937590128088284421816891826202978052640992678267974129629670862991769812330793126662251062120518795878693122854189330426777286315442926939843468730196970939951374889986320771714519309125434348512571864406646232154103
e = 3
c = 63476139027102349822147098087901756023488558030079225358836870725611623045683759473454129221778690683914555720975250395929721681009556415292257804239149809875424000027362678341633901036035522299395660255954384685936351041718040558055860508481512479599089561391846007771856837130233678763953257086620228436828

B = b"crypto{" + (b"\x00"*35) + b"}" + (b"\x00"*57)

P.<x> = PolynomialRing(Zmod(n), implementation='NTL')
pol = (( (bytes_to_long(B) + (2**(58*8))*x) ) ^ e - c) // (2**(58*8*e))

roots = pol.small_roots(epsilon=1/30)

for root in roots:
    print(b"crypto{" + long_to_bytes(root) + b"}") 
```

## ECC Digestive

https://web.cryptohack.org/digestive/

```py
import requests
import json 

url_sign = "https://web.cryptohack.org/digestive/sign/"
url_verify = "https://web.cryptohack.org/digestive/verify/"

# Any username value works
username = "admin"
r = requests.get(url_sign + username)

# Forging a new message with the signature obtained
response = json.loads(r.text)

# Append admin = True to the dictionary, note that we can't use json.dumps here
# as it will shrink into {"admin": true, "username": "admin"}, which will have
# a different first 20 characters
msg = '{"admin": false, "username": "admin", "admin": true}' 
signature = response['signature'] # previously requested signature

r = requests.get(url_verify + msg + "/" + signature)
print(r.text)
```

## ZKP

* [https://cryptohack.org/challenges/zkp/](https://cryptohack.org/challenges/zkp/)

```py
import random

FLAG = "crypto{????????????????????????}"

# Diffie-Hellman group (512 bits)
# p = 2*q + 1 where p,q are both prime, and 2 modulo p generates a group of order q
p = 0x1ed344181da88cae8dc37a08feae447ba3da7f788d271953299e5f093df7aaca987c9f653ed7e43bad576cc5d22290f61f32680736be4144642f8bea6f5bf55ef
q = 0xf69a20c0ed4465746e1bd047f57223dd1ed3fbc46938ca994cf2f849efbd5654c3e4fb29f6bf21dd6abb662e911487b0f9934039b5f20a23217c5f537adfaaf7
g = 2


# w,y for the relation `g^w = y mod P` we want to prove knowledge of
# w = random.randint(0,q)
# y = pow(g,w,P)
w = 0x5a0f15a6a725003c3f65238d5f8ae4641f6bf07ebf349705b7f1feda2c2b051475e33f6747f4c8dc13cd63b9dd9f0d0dd87e27307ef262ba68d21a238be00e83
y = 0x514c8f56336411e75d5fa8c5d30efccb825ada9f5bf3f6eb64b5045bacf6b8969690077c84bea95aab74c24131f900f83adf2bfe59b80c5a0d77e8a9601454e5

assert (y%p) >= 1
assert pow(y, q, p) == 1

class Challenge:
    def __init__(self):
        self.before_input = "Prove to me that you know an w such that g^w = y mod p. Send me a = g^r mod p for some random r in range(q)\n"
        self.state = "CHALLENGE"

    def challenge(self, msg):
        if self.state == "CHALLENGE":
            # Prover sends a randomly sampled `A` value from Z_p* to verifier
            self.a = msg["a"]
            if (self.a%p) < 1 or pow(self.a, q, p) != 1:
                self.exit = True
                return {"error": "Invalid value"}

            # Verifier sends a random challenge sampled from range(0, 2^t) where 2^t <= q
            self.e = random.randint(0,2**511)
            self.state = "PROVE"
            return {"e": self.e, "message": "send me z = r + e*w mod q"}
        elif self.state == "PROVE":
            # Prover sends z = r + e*w mod q to the Verifier
            z = msg["z"]

            self.exit = True

            # Verifier checks g^z = A*h^e mod p
            if pow(g,z,p) == (self.a*pow(y,self.e,p)) % p:
                return {"flag": FLAG, "message": "You convinced me you know an `w` such that g^w = y mod p!"}
            else:
                return {"error": "something went wrong :("}

# c = Challenge()
# print(c.challenge({"a":"aa"}))

import socket
import json
import random

# 公共参数
p = 0x1ed344181da88cae8dc37a08feae447ba3da7f788d271953299e5f093df7aaca987c9f653ed7e43bad576cc5d22290f61f32680736be4144642f8bea6f5bf55ef
q = 0xf69a20c0ed4465746e1bd047f57223dd1ed3fbc46938ca994cf2f849efbd5654c3e4fb29f6bf21dd6abb662e911487b0f9934039b5f20a23217c5f537adfaaf7
g = 2
w = 0x5a0f15a6a725003c3f65238d5f8ae4641f6bf07ebf349705b7f1feda2c2b051475e33f6747f4c8dc13cd63b9dd9f0d0dd87e27307ef262ba68d21a238be00e83

# 连接到挑战服务器
HOST = "socket.cryptohack.org"
PORT = 13425

def main():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((HOST, PORT))
        
        # 接收欢迎信息
        response = s.recv(4096)
        print(response.decode())

        # Step 1: Prover sends a = g^r mod p
        r = random.randint(0, q - 1)
        a = pow(g, r, p)
        s.sendall(json.dumps({"a": a}).encode())
        
        # Step 2: Verifier sends e (challenge)
        response = s.recv(4096)
        data = json.loads(response.decode())
        e = data["e"]
        print(f"Challenge received: e = {e}")

        # Step 3: Prover sends z = (r + e * w) mod q
        z = (r + e * w) % q
        s.sendall(json.dumps({"z": z}).encode())
        
        # Step 4: Receive result
        response = s.recv(4096)
        data = json.loads(response.decode())
        print(data)

if __name__ == "__main__":
    main()
```