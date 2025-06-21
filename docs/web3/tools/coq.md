# FV

形式化验证（Formal Verification）是一种通过数学方法对程序的正确性进行证明的技术。它不依赖于测试样例，而是通过形式化规范（Specification）和自动/交互式工具，验证程序是否在所有可能执行路径下都满足这些规范。

<DocsAD/>

## 语言工具

| 工具 / 语言                   | 适用平台            | 说明                                     |
|------------------------------|---------------------|------------------------------------------|
| **Coq**                      | 多领域，支持建模     | 交互式定理证明器，基于高阶逻辑             |
| **Isabelle/HOL**             | 多领域              | 功能类似 Coq，更偏重自动化推理              |
| **Certora Prover**           | Solidity            | 商用级规则式验证，语法接近自然语言           |
| **KEVM**                     | Ethereum / EVM      | EVM 的形式化语义实现                         |
| **Move Prover**              | Move（Aptos / Sui） | 用于 Move 合约的自动验证                    |
| **F\***                      | 多用途安全验证语言   | 微软开发，适合高安全场景                     |
| **Michelson + Mi-Cho-Coq**   | Tezos               | 支持形式化验证 Michelson 合约                |

## Coq

* coqc wallet.v

```coqc
(* Wallet.v *)

(* 导入自然数库 *)
Require Import Nat.

(* 定义钱包的状态：仅用一个余额来表示 *)
Record Wallet := {
  balance : nat (* Coq 中的 nat 是非负整数 *)
}.

(* 定义转账函数，尝试从钱包中扣除 n 元 *)
Definition withdraw (w : Wallet) (n : nat) : option Wallet :=
  if leb n (balance w) then
    Some {| balance := (balance w) - n |}
  else
    None.

(* 定理：如果成功扣款，余额永远不为负（在 Coq 中一定成立） *)
Theorem withdraw_preserves_nonnegative :
  forall (w : Wallet) (n : nat) (w': Wallet),
    withdraw w n = Some w' ->
    exists b, balance w' = b.
Proof.
  intros w n w' H.
  unfold withdraw in H.
  destruct (leb n (balance w)) eqn:Hle.
  - (* 成功取款 *)
    inversion H. subst.
    exists (balance w - n). reflexivity.
  - (* 不可能，因为返回值是 Some，但我们构造的是 None *)
    discriminate H.
Qed.
```