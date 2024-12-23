import{_ as i,K as l,L as s,a5 as a,M as e,N as d,W as r,F as c}from"./framework-edebdfe1.js";const t={},v=e("h1",{id:"helloworld",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#helloworld","aria-hidden":"true"},"#"),d(" HelloWorld")],-1),u=r(`<div class="language-cairo line-numbers-mode" data-ext="cairo"><pre class="language-cairo"><code>#[starknet::interface]
trait IBalance&lt;T&gt; {
    // Returns the current balance.
    fn get(self: @T) -&gt; u128;
    // Increases the balance by the given amount.
    fn increase(ref self: T, a: u128);
}

#[starknet::contract]
mod Balance {
    use traits::Into;

    #[storage]
    struct Storage {
        value: u128,
    }

    #[constructor]
    fn constructor(ref self: ContractState, value_: u128) {
        self.value.write(value_);
    }

    #[abi(embed_v0)]
    impl Balance of super::IBalance&lt;ContractState&gt; {
        fn get(self: @ContractState) -&gt; u128 {
            self.value.read()
        }
        fn increase(ref self: ContractState, a: u128)  {
            self.value.write( self.value.read() + a );
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function o(m,b){const n=c("DocsAD");return l(),s("div",null,[v,a(n),u])}const _=i(t,[["render",o],["__file","helloworld.html.vue"]]);export{_ as default};
