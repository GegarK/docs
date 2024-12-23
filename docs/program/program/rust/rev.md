# 逆向分析

## [Rust逆向分析](../../../reverse/README.md)

<DocsAD/>

## 逆向例子

```rust
use std::io::{self, Write};

/// 简单的加密函数（可以根据需要修改为更复杂的加密算法）
fn simple_encrypt(input: &str) -> String {
    let mut encrypted = String::new();
    for c in input.chars() {
        // 将字符的 ASCII 值加 1 来作为简单加密逻辑
        encrypted.push((c as u8 + 1) as char);
    }
    encrypted
}

/// 检查输入是否正确
fn check_flag(input: &str) -> bool {
    // 假设 "secret" 是加密后的正确答案
    let encrypted_flag = simple_encrypt("secret");
    simple_encrypt(input) == encrypted_flag
}

fn main() {
    // 提示用户输入
    println!("请输入你的flag：");

    // 获取用户输入
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("读取输入失败");
    let input = input.trim(); // 去除换行符

    // 验证flag是否正确
    if check_flag(input) {
        println!("恭喜你，flag正确！");
    } else {
        println!("错误的flag，请重试。");
    }
}
```

