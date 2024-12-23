# 图像生成

```python
import os
import openai
openai.api_key = "OPENAI_API_KEY"

completion = openai.Image.create(
  prompt="A cute baby sea otter",
  n=2,
  size="1024x1024"
)

print(completion)
```

```json
{
  "created": 1589478378,
  "data": [
    {
      "url": "https://..."
    },
    {
      "url": "https://..."
    }
  ]
}

```

<DocsAD/>