# Cargo.toml

<DocsAD/>

## 主要部分

```toml
[package]
name = "project_name"       # 项目名称
version = "0.1.0"           # 项目版本
authors = ["Author Name"]   # 作者
edition = "2021"            # Rust 版次

[dependencies]
serde = "1.0"       # 依赖 serde crate，版本为 1.0.x
regex = "1"         # 依赖 regex crate，版本为 1.x

[dev-dependencies]
tempdir = "0.7"   # 仅在开发时使用的依赖

[build-dependencies]
cc = "1.0"        # 用于构建脚本的依赖

[features]
default = ["serde"]   # 默认启用的功能

[workspace]
members = [
    "src/package1",
    "src/package2",
]

[package.metadata]
documentation = "https://docs.example.com"
```