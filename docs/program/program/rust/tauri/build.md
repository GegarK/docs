# 编译生成

## 编译优化

* tauri build --release

<DocsAD/>

```toml
[profile.release]
# 优化等级为 z 会更专注于大小而非速度
opt-level = "z"
# 移除调试信息
debug = false
# 省略不常用的符号
lto = true  # 启用链式时间优化 (Link-Time Optimization)
codegen-units = 1  # 减少代码生成单位数
panic = "abort"  # 减小错误处理部分的大小
```