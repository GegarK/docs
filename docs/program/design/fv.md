# 形式化检验

## 形式化检验 (Formal Verification) VS [代码审计 (Code Audit)](../../pentest/audit/) VS 软件测试

1. **定义**：形式化检验是使用数学和逻辑方法来证明软件系统是否满足特定的属性或规范是否有BUG。
2. **方法**：它通常使用形式化的模型和证明技术，如模型检测、定理证明、抽象解释等。
3. **应用场景**：形式化检验多用于对安全性、可靠性要求极高的系统，如航空航天、医疗设备、银行金融系统等。
4. **优点**：
   - 可以提供严格的数学证明，确保系统在所有可能的情况下都满足特定的属性。
   - 能够在开发的早期阶段发现设计缺陷。
5. **缺点**：
   - 实施成本高，需要专业知识和技能。
   - 难以应用于大规模或复杂的系统，因为模型的构建和验证可能非常复杂。
   - 主要适用于静态分析，即在代码运行前进行。

<DocsAD/>

## 实例

1. 下载[TLA+](https://github.com/tlaplus/tlaplus) 或者 VSCODE TLA+ 插件 或者 [COL](https://coq.inria.fr/)

```cfg
SynSent(local, remote) ==
    /\ local # remote
    /\ connstate[local] = "SYN-SENT"
    /\ UNCHANGED tcb
    /\ \/ /\ IsPrefix(<<"SYN">>, network[local])
          /\ network' = [ network EXCEPT ![remote] = Append(@, "SYN,ACK"),
                                         ![local] = Tail(network[local])]
          /\ connstate' = [connstate EXCEPT ![local] = "SYN-RECEIVED"]
       \/ /\ IsPrefix(<<"SYN,ACK">>, network[local])
          /\ network' = [ network EXCEPT ![remote] = Append(@, "ACK"),
                                         ![local] = Tail(network[local])]
          /\ connstate' = [connstate EXCEPT ![local] = "ESTABLISHED"]
```

## 总结

- **形式化检验**更关注于理论上的正确性，通过数学证明确保系统符合规范，适用于高安全性要求的系统。
- **代码审计**更实际和灵活，通过检查实际代码发现问题，适用于各种类型的软件开发项目。