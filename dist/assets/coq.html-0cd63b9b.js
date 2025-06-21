import{_ as i,K as t,L as d,a5 as s,M as e,N as a,W as l,F as r}from"./framework-edebdfe1.js";const o={},c=e("h1",{id:"fv",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fv","aria-hidden":"true"},"#"),a(" FV")],-1),v=e("p",null,"形式化验证（Formal Verification）是一种通过数学方法对程序的正确性进行证明的技术。它不依赖于测试样例，而是通过形式化规范（Specification）和自动/交互式工具，验证程序是否在所有可能执行路径下都满足这些规范。",-1),b=l(`<h2 id="语言工具" tabindex="-1"><a class="header-anchor" href="#语言工具" aria-hidden="true">#</a> 语言工具</h2><table><thead><tr><th>工具 / 语言</th><th>适用平台</th><th>说明</th></tr></thead><tbody><tr><td><strong>Coq</strong></td><td>多领域，支持建模</td><td>交互式定理证明器，基于高阶逻辑</td></tr><tr><td><strong>Isabelle/HOL</strong></td><td>多领域</td><td>功能类似 Coq，更偏重自动化推理</td></tr><tr><td><strong>Certora Prover</strong></td><td>Solidity</td><td>商用级规则式验证，语法接近自然语言</td></tr><tr><td><strong>KEVM</strong></td><td>Ethereum / EVM</td><td>EVM 的形式化语义实现</td></tr><tr><td><strong>Move Prover</strong></td><td>Move（Aptos / Sui）</td><td>用于 Move 合约的自动验证</td></tr><tr><td><strong>F*</strong></td><td>多用途安全验证语言</td><td>微软开发，适合高安全场景</td></tr><tr><td><strong>Michelson + Mi-Cho-Coq</strong></td><td>Tezos</td><td>支持形式化验证 Michelson 合约</td></tr></tbody></table><h2 id="coq" tabindex="-1"><a class="header-anchor" href="#coq" aria-hidden="true">#</a> Coq</h2><ul><li>coqc wallet.v</li></ul><div class="language-coqc line-numbers-mode" data-ext="coqc"><pre class="language-coqc"><code>(* Wallet.v *)

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
  forall (w : Wallet) (n : nat) (w&#39;: Wallet),
    withdraw w n = Some w&#39; -&gt;
    exists b, balance w&#39; = b.
Proof.
  intros w n w&#39; H.
  unfold withdraw in H.
  destruct (leb n (balance w)) eqn:Hle.
  - (* 成功取款 *)
    inversion H. subst.
    exists (balance w - n). reflexivity.
  - (* 不可能，因为返回值是 Some，但我们构造的是 None *)
    discriminate H.
Qed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function u(m,h){const n=r("DocsAD");return t(),d("div",null,[c,v,s(n),b])}const w=i(o,[["render",u],["__file","coq.html.vue"]]);export{w as default};
