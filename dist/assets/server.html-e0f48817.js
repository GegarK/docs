import{_ as s,K as a,L as l,a5 as d,M as e,N as n,W as c,F as r}from"./framework-edebdfe1.js";const t={},v=e("h1",{id:"eos-c-sol",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eos-c-sol","aria-hidden":"true"},"#"),n(" EOS C/SOL")],-1),u=e("h2",{id:"native-c",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#native-c","aria-hidden":"true"},"#"),n(" Native C++")],-1),o=c(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;eosio/eosio.hpp&gt;
using namespace eosio;

CONTRACT mycontract : public contract {
   public:
      using contract::contract;

      // This is a database model definition
      TABLE user {
         name     eos_account;
         uint8_t  is_admin;

         uint64_t primary_key() const { 
            return eos_account.value; 
         }
      };

      // This is a table constructor which we will instantiate later
      using user_table = eosio::multi_index&lt;&quot;users&quot;_n, user&gt;;

      // Every ACTION you define can be called from outside the blockchain
      ACTION newuser( name eos_account ){
         // Only the account calling this can add themselves
         require_auth(eos_account);

         // We&#39;re instantiating the user table
         user_table users(get_self(), get_self().value);

         // Finally, we&#39;re putting that user into the database
         users.emplace(get_self(), [&amp;](auto&amp; row) {
            row = user {
               .eos_account = eos_account,
               .is_admin = 0
            };
         });
      }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solidity" tabindex="-1"><a class="header-anchor" href="#solidity" aria-hidden="true">#</a> Solidity</h2>`,2);function m(b,_){const i=r("DocsAD");return a(),l("div",null,[v,u,d(i),o])}const p=s(t,[["render",m],["__file","server.html.vue"]]);export{p as default};
