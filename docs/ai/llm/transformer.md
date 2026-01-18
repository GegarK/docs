# Transformer

# 什么是 Transformer

Transformer 是一种**基于注意力机制（Attention）**的深度学习模型架构，最早由 Google 在 2017 年论文 **《Attention Is All You Need》** 中提出。它彻底改变了自然语言处理（NLP），并成为当今大模型（如 GPT、BERT、Claude 等）的**基础算法框架**。

<DocsAD/>

一句话定义：

> **Transformer 是一种通过自注意力机制，对序列数据进行全局建模、并行计算的神经网络架构。**

---

## 一、Transformer 解决了什么问题？

在 Transformer 之前，序列建模主要依赖：

* RNN / LSTM / GRU

这些模型存在明显瓶颈：

* ❌ **无法并行计算**（必须按时间步顺序处理）
* ❌ **长距离依赖困难**（梯度消失 / 记忆衰减）
* ❌ **训练效率低、难以规模化**

Transformer 的核心突破是：

> **完全抛弃递归结构，用注意力机制直接建模任意位置之间的关系**。

---

## 二、Transformer 的核心思想

### 自注意力（Self-Attention）

自注意力机制的本质是：

> **序列中的每一个元素，都可以“关注”序列中的所有其他元素，并根据相关性动态加权。**

例如在句子中：

> “The animal didn’t cross the street because **it** was too tired.”

模型需要知道 **it** 指代的是 *animal*，而不是 *street*。

Self-Attention 正是为了解决这种**全局依赖建模**问题。

### 可视化

* [https://bbycroft.net/llm](https://bbycroft.net/llm)
* [https://poloclub.github.io/transformer-explainer/](https://poloclub.github.io/transformer-explainer/)

---

## Transformer 算法讲解

## Transformer 代码开发