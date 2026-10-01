# LLMHOOK

```
                    输入文本
                       │
                       ▼
             ┌──────────────────┐
             │    Tokenizer     │
             │ "This movie..."  │
             └────────┬─────────┘
                      │
                      ▼
             Token IDs / Embedding
                      │
                      ▼
        ┌─────────────────────────────┐
        │       BERT Encoder          │
        │                             │
        │  Layer 0                    │
        │    ↓                        │
        │  Layer 1                    │
        │    ↓                        │
        │  Layer 2                    │
        │    ↓                        │
        │  ...                        │
        │    ↓                        │
        │  最后一层 Layer N           │
        └──────────────┬──────────────┘
                       │
                 hidden_states
                       │
                       ▼
                  Pooler / [CLS]
                       │
                       ▼
                  Classifier
                       │
                       ▼
                ┌──────────────┐
                │   Logits      │
                │ [-1.47, 1.44] │
                └──────┬───────┘
                       │
                    Softmax
                       │
                       ▼
             Negative 5.14%
             Positive 94.86%
```

```
传统二进制：

function_B()
    │
    ├── JMP/CALL → Hook
    │
    ▼
original_function()

AI：

Transformer Layer 3
    │
    ├── forward_hook()
    │
    ▼
Pooler()
```