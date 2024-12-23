# 压缩包破解

## 暴力破解

<DocsAD/>

```python
# 导入压缩包解压模块zipfile
import zipfile
# 导入时间模块
import timeit

# 加密zip文件路径
zFile = zipfile.ZipFile("test.zip")

# 字典路径
dictionary_attack = "dictionary.txt"
# 以下是字典内容，方便观看
"""
123
123456789
3124
adfadf
33
"""

# 破解函数
def Cracker():
    # 破解次数统计
    attempts = 0
    # 成功标志位
    flag = 0
    # 打开破解字典
    with open(dictionary_attack, 'r') as attack:
        print("Cracking password...one sec")
        print("------------------------------")
        for line in attack:
            try:
                # 去除回车符号
                passwd = line.strip('\n')
                # 尝试解压
                zFile.extractall(pwd=str.encode(passwd))
            except Exception:
                # 如果解压失败，则破解次数统计加以
                attempts += 1
                pass
            else:
                # 如果解压成功则标志位置1表示成功，并且打印出密码
                print("Password is %s" % (passwd))
                flag = 1
                break
        print("Attempted %d passwords from %s wordlist" %
              (attempts, dictionary_attack))
        if flag == 0:
            print("Password Cracking Failed!")


if __name__ == "__main__":
    # 开始计时
    start = timeit.default_timer()
    Cracker()
    # 停止计时
    stop = timeit.default_timer()
    # 打印计算破解时间
    print("crack it in %d secs" % (stop - start))
```

## 伪加密破解

```python
# 修改文件内容
def modified(filename):
    with open(filename, 'rb') as f:
        r_all = f.read()
        r_all = bytearray(r_all)
        #  504B0304后的第3、4个byte改成0000
        index = r_all.find(b'PK\x03\x04')
        if not index:
            i = index + 4
            r_all[i + 2:i + 4] = b'\x00\x00'
         #  504B0102后的第5、6个byte改成0000
        index1 = r_all.find(b'PK\x01\x02')
        if index1:
            print()
            i = index1 + 4
            r_all[i + 4:i + 6] = b'\x00\x00'
    # 保持文件，命名为test.zip
    with open('test.zip', 'wb') as f1:
        f1.write(r_all)

if __name__ == '__main__':
    # 存在伪加密的压缩包路径
    filename = 'File.zip'
    modified(filename)
```