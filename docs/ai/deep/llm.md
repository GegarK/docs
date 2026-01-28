# LLM

1. **数据准备**
   - 收集语料（通用文本、领域文本、指令数据）
   - 数据清洗（去重、脱敏、格式化）
   - 划分数据集（Pretrain / SFT / Eval）

2. **Tokenizer 训练**
   - 训练 BPE / SentencePiece / WordPiece
   - 生成 vocab 和 model 文件
   - 测试 tokenizer 正确性

3. **预训练（Pretrain）**
   - 初始化 Transformer 模型权重（随机或加载预训练）
   - 配置模型参数（层数、hidden size、seq_len）
   - 数据加载与 batching
   - 模型训练（CrossEntropy Loss，自监督）
   - 保存中间和最终权重

4. **监督微调（SFT）**
   - 使用指令数据或人类示范数据
   - 仅微调输出头或全模型
   - CrossEntropy Loss 对 assistant 输出计算
   - 保存 SFT 权重

5. **奖励模型训练（可选）**
   - 收集对比数据（好/差回答）
   - 训练 reward 模型预测人类偏好
   - 用于 RLHF / DPO

6. **强化学习微调（RLHF / DPO / PPO）**
   - 加载 SFT 模型作为 reference policy
   - 通过 reward 最大化进行微调
   - KL 正则约束模型不偏离 SFT
   - 保存 RL 微调权重

7. **评估与测试**
   - 指令遵循测试
   - 对话质量评估
   - 安全和拒答测试
   - 性能和推理速度测试

8. **部署**
   - 转换模型格式（GGUF / ONNX / TorchScript）
   - 构建推理接口（API / Web UI）
   - 上线监控和日志采集

<DocsAD/>