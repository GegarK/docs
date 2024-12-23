# FUNC开发

## [FUNC文档](https://docs.ton.org/develop/func/cookbook)

## [开发环境搭建](https://github.com/ton-blockchain/ton/releases)

<DocsAD/>

## HelloWorld

```func
() hello_world()  {
  int number = 2;
  int multiplier = number;
  int degree = 5;

  repeat(degree - 1) {
      number *= multiplier;
  }
}
func -o test.fif test.fc
```