# MCP

[Model Context Protocol](https://modelcontextprotocol.io/introduction)（简称 **MCP**）是一个旨在提升大型语言模型（LLMs）上下文共享能力的协议。它通过在应用和模型之间建立一致、可共享的上下文表示方式，使得多个工具可以协同工作，共享对用户或任务的理解，从而带来更智能、更一致的体验。

---

## 核心目标

- **共享上下文**：在不同模型间共享对用户和任务的理解。
- **模块化扩展**：允许不同工具根据需求提供或消费上下文。
- **提高一致性**：让多种模型和工具具备统一理解用户意图的能力。

---

## 关键组件

### 1. Context Agents
负责构建和维护上下文的模块，可能是：
- 记忆系统（如：长期记忆、短期记忆）
- 日程管理器
- 知识库
- 实时数据抓取器等

这些 Agent 会提供上下文内容给模型使用。

### 2. Context Packs
- 是一种**结构化的上下文集合**，可以被共享、存储和传输。
- 每个 Pack 包含若干上下文条目（如：记忆、文档、用户偏好等），具备明确的语义标签。

### 3. Context API
- 定义了如何读取、写入、订阅上下文。
- 支持模型与 Agent 之间进行高效、标准化的上下文通信。

---

## 应用场景

- 多模型协作时共享用户状态（例如：聊天机器人 + 任务执行代理）
- 保持用户在不同设备或会话之间的一致体验
- 在企业或团队中部署统一的“组织记忆”系统

---

## 举例

例如一个 AI 助手可能使用以下多个 Context Agents：
- 日历 Agent 提供用户的会议信息
- 邮件 Agent 提供最新邮件摘要
- 项目管理 Agent 提供待办任务列表

所有这些信息通过 MCP 形成一个完整的上下文 pack，供 AI 模型参考，从而给出更精准的回应。