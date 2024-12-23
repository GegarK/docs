# 注入流程

::: warning DeeLMind 推荐
SQLI注入流程思路很简单，但是新手要多测试
:::

```flow
op1=>operation: 寻找与后端交互点
op2=>operation: payload注入测试
op3=>operation: 免杀payload测试

op1->op2->op3
```

## 寻找与后端交互点
WEB、APP、客户端，无论什么，只要有向后端提交数据的接口都可以测试

## payload注入测试
手工测试，或者，工具测试都可

## 免杀payload测试
因为WAF很多，需要免杀payload也很合理