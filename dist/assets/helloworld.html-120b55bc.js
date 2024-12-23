import{_ as n,K as s,L as a,W as e}from"./framework-edebdfe1.js";const t={},p=e(`<h1 id="helloworld" tabindex="-1"><a class="header-anchor" href="#helloworld" aria-hidden="true">#</a> HelloWorld</h1><h2 id="native" tabindex="-1"><a class="header-anchor" href="#native" aria-hidden="true">#</a> Native</h2><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cargo</span> init helloworld <span class="token parameter variable">--lib</span>
<span class="token function">cargo</span> <span class="token function">add</span> solana-program@1.18.26
<span class="token function">cargo</span> build-sbf
solana program deploy hellworld.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Cargo.toml</li></ul><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;helloworld&quot;</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.0&quot;</span>
<span class="token key property">edition</span> <span class="token punctuation">=</span> <span class="token string">&quot;2021&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
<span class="token key property">solana-program</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.18.26&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">lib</span><span class="token punctuation">]</span>
<span class="token key property">crate-type</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;cdylib&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lib&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>lib.rs</li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">solana_program<span class="token punctuation">::</span></span><span class="token punctuation">{</span>
    <span class="token namespace">account_info<span class="token punctuation">::</span></span><span class="token class-name">AccountInfo</span><span class="token punctuation">,</span> entrypoint<span class="token punctuation">,</span> <span class="token namespace">entrypoint<span class="token punctuation">::</span></span><span class="token class-name">ProgramResult</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> <span class="token namespace">pubkey<span class="token punctuation">::</span></span><span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Tells Solana that the entrypoint to this program</span>
<span class="token comment">//  is the &quot;process_instruction&quot; function.</span>
<span class="token comment">//</span>
<span class="token macro property">entrypoint!</span><span class="token punctuation">(</span>process_instruction<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Our entrypoint&#39;s parameters have to match the</span>
<span class="token comment">//  anatomy of a transaction instruction (see README).</span>
<span class="token comment">//</span>
<span class="token keyword">fn</span> <span class="token function-definition function">process_instruction</span><span class="token punctuation">(</span>
    program_id<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    _accounts<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token class-name">AccountInfo</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    _instruction_data<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">ProgramResult</span> <span class="token punctuation">{</span>
    <span class="token macro property">msg!</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, Solana!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token macro property">msg!</span><span class="token punctuation">(</span><span class="token string">&quot;Our program&#39;s Program ID: {}&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>program_id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Connection<span class="token punctuation">,</span>
  PublicKey<span class="token punctuation">,</span>
  Transaction<span class="token punctuation">,</span>
  SystemProgram<span class="token punctuation">,</span>
  Keypair<span class="token punctuation">,</span>
  sendAndConfirmTransaction<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@solana/web3.js&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 设置连接到 Devnet（也可以替换为 mainnet 或 testnet）</span>
<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.devnet.solana.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;confirmed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 你的程序的 PublicKey（Rust 程序的 ID）</span>
<span class="token keyword">const</span> programId <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&#39;5Jo7Zp3yA4v3VLVN9WFDSUDWTb61R9Hpjr5GGEdqVzJP&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个新的 Keypair 作为交易的签署者（payer）</span>
<span class="token keyword">const</span> payer <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">fromSecretKey</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span>私钥<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个简单的指令数据，这里我们可以传递一个空的字节数组或自定义的数据</span>
<span class="token keyword">const</span> instructionData <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建交易指令</span>
<span class="token keyword">const</span> instruction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">keys</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">pubkey</span><span class="token operator">:</span> payer<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>  <span class="token comment">// 使用 payer 账户的公钥</span>
      <span class="token literal-property property">isSigner</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>           <span class="token comment">// 该账户需要签署交易</span>
      <span class="token literal-property property">isWritable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>        <span class="token comment">// 如果交易不涉及修改账户数据，设置为 false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">programId</span><span class="token operator">:</span> programId<span class="token punctuation">,</span>        <span class="token comment">// 目标程序的 Program ID</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> instructionData<span class="token punctuation">,</span>       <span class="token comment">// 附带的数据</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建并发送交易</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">callSolanaProgram</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将交易发送到网络并等待确认</span>
    <span class="token keyword">const</span> txId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">sendAndConfirmTransaction</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> instruction<span class="token punctuation">,</span> <span class="token punctuation">[</span>payer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Transaction successful with ID:&quot;</span><span class="token punctuation">,</span> txId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Transaction failed:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">callSolanaProgram</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="anchor" tabindex="-1"><a class="header-anchor" href="#anchor" aria-hidden="true">#</a> Anchor</h2><h3 id="rust-1" tabindex="-1"><a class="header-anchor" href="#rust-1" aria-hidden="true">#</a> Rust</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>anchor init hellworld
anchor build
anchor deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-anchor.toml line-numbers-mode" data-ext="anchor.toml"><pre class="language-anchor.toml"><code>[toolchain]

[features]
resolution = true
skip-lint = false

[programs.localnet]
anchro_helloworld = &quot;6be4ZEKUf8KjoKvsRmSs1Ls4vXqn9mLe3qkZu7GNp15&quot;

[registry]
url = &quot;https://api.devnet.solana.com&quot;

[provider]
cluster = &quot;https://api.devnet.solana.com&quot;
wallet = &quot;~/.config/solana/id.json&quot;

[scripts]
test = &quot;yarn run ts-mocha -p ./tsconfig.json -t 1000000 tests/**/*.ts&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">anchor_lang<span class="token punctuation">::</span>prelude<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token macro property">declare_id!</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[program]</span>
<span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">anchro_helloworld</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>

    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">initialize</span><span class="token punctuation">(</span>ctx<span class="token punctuation">:</span> <span class="token class-name">Context</span><span class="token operator">&lt;</span><span class="token class-name">Initialize</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token macro property">msg!</span><span class="token punctuation">(</span><span class="token string">&quot;Greetings from: {:?}&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>program_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[derive(Accounts)]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Initialize</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-idl" tabindex="-1"><a class="header-anchor" href="#js-idl" aria-hidden="true">#</a> JS IDL</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","helloworld.html.vue"]]);export{r as default};
