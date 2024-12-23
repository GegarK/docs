import{_ as o,K as c,L as r,M as n,N as s,a5 as a,W as l,F as t}from"./framework-edebdfe1.js";const d={},u=n("h1",{id:"预言机chainlink-link",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#预言机chainlink-link","aria-hidden":"true"},"#"),s(" 预言机Chainlink(LINK)")],-1),p={href:"https://chain.link/",target:"_blank",rel:"noopener noreferrer"},h=l('<h2 id="_2-1-chainlink-v1" tabindex="-1"><a class="header-anchor" href="#_2-1-chainlink-v1" aria-hidden="true">#</a> 2.1 Chainlink V1</h2><ul><li><strong>发布日期</strong>: 2017年9月</li><li><strong>主要特性</strong>: <ul><li>提供去中心化的预言机服务。</li><li>支持基本的智能合约数据请求。</li></ul></li></ul><h2 id="_2-2-chainlink-v2" tabindex="-1"><a class="header-anchor" href="#_2-2-chainlink-v2" aria-hidden="true">#</a> 2.2 Chainlink V2</h2><ul><li><strong>发布日期</strong>: 2020年6月</li><li><strong>主要特性</strong>: <ul><li>引入了 Chainlink 数据源的标准化和多数据源聚合功能。</li><li>支持更多数据类型和请求形式。</li><li>改进了链上合约与链下数据源的交互机制。</li></ul></li></ul><h2 id="_2-3-chainlink-v3" tabindex="-1"><a class="header-anchor" href="#_2-3-chainlink-v3" aria-hidden="true">#</a> 2.3 Chainlink V3</h2><ul><li><strong>发布日期</strong>: 2021年11月</li><li><strong>主要特性</strong>: <ul><li>引入了“去中心化的预言机网络”（DPN）模型。</li><li>支持更复杂的智能合约和数据请求。</li><li>增强了安全性和可靠性。</li><li>提供了改进的链上和链下数据处理功能。</li></ul></li></ul><h2 id="_3-关键事件" tabindex="-1"><a class="header-anchor" href="#_3-关键事件" aria-hidden="true">#</a> 3. 关键事件</h2><h2 id="_3-1-主网启动" tabindex="-1"><a class="header-anchor" href="#_3-1-主网启动" aria-hidden="true">#</a> 3.1 主网启动</h2><ul><li><strong>日期</strong>: 2019年5月</li><li><strong>描述</strong>: Chainlink 的主网正式上线，标志着去中心化预言机服务的全面推出。</li></ul><h2 id="_3-2-合约升级" tabindex="-1"><a class="header-anchor" href="#_3-2-合约升级" aria-hidden="true">#</a> 3.2 合约升级</h2><ul><li><strong>日期</strong>: 2020年12月</li><li><strong>描述</strong>: Chainlink 进行了一次重要的合约升级，引入了新的功能和改进，增强了合约的灵活性和安全性。</li></ul><h2 id="_3-3-与-google-cloud-的合作" tabindex="-1"><a class="header-anchor" href="#_3-3-与-google-cloud-的合作" aria-hidden="true">#</a> 3.3 与 Google Cloud 的合作</h2><ul><li><strong>日期</strong>: 2021年3月</li><li><strong>描述</strong>: Chainlink 与 Google Cloud 达成合作，通过 Chainlink 预言机提供 Google Cloud 上的数据和计算能力。</li></ul><h2 id="_5-链接和参考" tabindex="-1"><a class="header-anchor" href="#_5-链接和参考" aria-hidden="true">#</a> 5. 链接和参考</h2>',14),k={href:"https://chain.link",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.chain.link/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/smartcontractkit/chainlink",target:"_blank",rel:"noopener noreferrer"},b={id:"chainlink例子",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#chainlink例子","aria-hidden":"true"},"#",-1),_={href:"https://docs.chain.link/data-feeds/getting-started",target:"_blank",rel:"noopener noreferrer"},f=l(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.7</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>AggregatorV3Interface<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED
 * VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */</span>

<span class="token comment">/**
 * If you are reading data feeds on L2 networks, you must
 * check the latest answer from the L2 Sequencer Uptime
 * Feed to ensure that the data is accurate in the event
 * of an L2 sequencer outage. See the
 * https://docs.chain.link/data-feeds/l2-sequencer-feeds
 * page for details.
 */</span>

<span class="token keyword">contract</span> <span class="token class-name">DataConsumerV3</span> <span class="token punctuation">{</span>
    AggregatorV3Interface <span class="token keyword">internal</span> dataFeed<span class="token punctuation">;</span>

    <span class="token comment">/**
     * Network: Sepolia
     * Aggregator: BTC/USD
     * Address: 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
     */</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dataFeed <span class="token operator">=</span> <span class="token function">AggregatorV3Interface</span><span class="token punctuation">(</span>
            <span class="token number">0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * Returns the latest answer.
     */</span>
    <span class="token keyword">function</span> <span class="token function">getChainlinkDataFeedLatestAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// prettier-ignore</span>
        <span class="token punctuation">(</span>
            <span class="token comment">/* uint80 roundID */</span><span class="token punctuation">,</span>
            <span class="token builtin">int</span> answer<span class="token punctuation">,</span>
            <span class="token comment">/*uint startedAt*/</span><span class="token punctuation">,</span>
            <span class="token comment">/*uint timeStamp*/</span><span class="token punctuation">,</span>
            <span class="token comment">/*uint80 answeredInRound*/</span>
        <span class="token punctuation">)</span> <span class="token operator">=</span> dataFeed<span class="token punctuation">.</span><span class="token function">latestRoundData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> answer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function C(A,D){const e=t("ExternalLinkIcon"),i=t("DocsAD");return c(),r("div",null,[u,n("p",null,[n("a",p,[s("Chainlink"),a(e)]),s(" 是一个去中心化的预言机网络，用于将外部数据安全地传递到区块链。它允许智能合约与现实世界的数据源、APIs 和支付系统进行交互。")]),a(i),h,n("ul",null,[n("li",null,[n("a",k,[s("Chainlink 官方网站"),a(e)])]),n("li",null,[n("a",v,[s("Chainlink 文档"),a(e)])]),n("li",null,[n("a",m,[s("Chainlink GitHub"),a(e)])])]),a(i),n("h2",b,[g,s(),n("a",_,[s("Chainlink例子"),a(e)])]),f])}const w=o(d,[["render",C],["__file","index.html.vue"]]);export{w as default};
