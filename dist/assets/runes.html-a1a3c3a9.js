import{_ as r,K as a,L as t,W as i}from"./framework-edebdfe1.js";const n={},s=i('<h1 id="铭文-runes" tabindex="-1"><a class="header-anchor" href="#铭文-runes" aria-hidden="true">#</a> 铭文(Runes)</h1><h2 id="_1-ordinals" tabindex="-1"><a class="header-anchor" href="#_1-ordinals" aria-hidden="true">#</a> 1. Ordinals</h2><p>Ordinals 是一个基于比特币区块链的协议，允许将数据（如文本、图片、音频等）永久刻印到比特币的最小单位——聪（satoshi）上。这种技术扩展了比特币的功能，使得每个聪都可以携带额外的信息，从而赋予它类似 NFT（非同质化代币）的功能。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li><strong>铭文（Inscription）</strong>：在聪上刻印任意数据，数据不可篡改。</li><li><strong>绑定性</strong>：刻印数据与特定聪绑定，聪的转移会带着其铭文一起转移。</li><li><strong>无需侧链</strong>：直接使用比特币主网，不需要额外的区块链。</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li><strong>数字艺术</strong>：在比特币上创建类似 NFT 的数字艺术品。</li><li><strong>收藏品</strong>：每个铭文聪都可作为独特的收藏品。</li><li><strong>数据记录</strong>：记录永久性的信息，如证书或历史事件。</li></ul><h3 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h3><p>Ordinals 使用比特币的序列号系统，为每个聪分配一个唯一标识符，并通过 Taproot 脚本将铭文数据嵌入到比特币交易中。</p><h2 id="_2-atomicals" tabindex="-1"><a class="header-anchor" href="#_2-atomicals" aria-hidden="true">#</a> 2. Atomicals</h2><p>Atomicals 是一个基于比特币的协议，专注于创建和管理比特币上的数字资产和代币。它进一步扩展了 Ordinals 的功能，使用户能够创建更多种类的资产和互动。</p><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h3><ul><li><strong>数字资产支持</strong>：允许用户发行和管理自己的资产或代币。</li><li><strong>全生命周期管理</strong>：支持资产的创建、交易、转移和销毁。</li><li><strong>基于 Ordinals</strong>：Atomicals 使用 Ordinals 技术为每个资产提供唯一标识符。</li></ul><h3 id="应用场景-1" tabindex="-1"><a class="header-anchor" href="#应用场景-1" aria-hidden="true">#</a> 应用场景</h3><ul><li><strong>代币化物品</strong>：在比特币网络上创建代币，用于代表实物物品或权利。</li><li><strong>去中心化金融（DeFi）</strong>：支持基于比特币的去中心化金融产品，如稳定币、贷款协议等。</li><li><strong>数字身份</strong>：在比特币上创建去中心化身份（DID）。</li></ul><h3 id="工作原理-1" tabindex="-1"><a class="header-anchor" href="#工作原理-1" aria-hidden="true">#</a> 工作原理</h3><p>Atomicals 使用 Ordinals 机制，并添加额外的协议层，用于定义资产的属性、操作逻辑和生命周期管理。</p><h2 id="_3-fractal" tabindex="-1"><a class="header-anchor" href="#_3-fractal" aria-hidden="true">#</a> 3. Fractal</h2><p>Fractal 是一个旨在将智能合约和去中心化应用（DApps）带到比特币网络的协议。它通过增强比特币的功能，使其能够支持复杂的应用场景。</p><h3 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2" aria-hidden="true">#</a> 特点</h3><ul><li><strong>智能合约支持</strong>：通过 Fractal，开发者可以在比特币上编写和部署智能合约。</li><li><strong>去中心化应用（DApps）</strong>：允许开发者构建类似以太坊上的 DApps，但使用比特币作为底层。</li><li><strong>高安全性</strong>：利用比特币主网的安全性和稳定性。</li></ul><h3 id="应用场景-2" tabindex="-1"><a class="header-anchor" href="#应用场景-2" aria-hidden="true">#</a> 应用场景</h3><ul><li><strong>去中心化市场</strong>：在比特币网络上创建去中心化交易平台。</li><li><strong>区块链游戏</strong>：支持基于比特币的游戏和奖励系统。</li><li><strong>数据存储</strong>：在比特币上存储和管理去中心化数据。</li></ul><h3 id="工作原理-2" tabindex="-1"><a class="header-anchor" href="#工作原理-2" aria-hidden="true">#</a> 工作原理</h3><p>Fractal 扩展了比特币的原生功能，通过额外的协议层实现复杂的智能合约逻辑，同时确保与比特币主网的兼容性。</p><h2 id="_4-runes-铭文" tabindex="-1"><a class="header-anchor" href="#_4-runes-铭文" aria-hidden="true">#</a> 4. Runes (铭文)</h2><p><strong>Runes（铭文）</strong> 是 Ordinals 技术的一部分，强调在比特币上进行铭文操作，通过在聪中嵌入数据来实现数据的永久存储。</p><h3 id="特点-3" tabindex="-1"><a class="header-anchor" href="#特点-3" aria-hidden="true">#</a> 特点</h3><ul><li><strong>低门槛</strong>：不需要额外的工具即可使用比特币进行铭文。</li><li><strong>不可篡改</strong>：铭文数据一旦写入比特币区块链，就不可更改或删除。</li><li><strong>灵活性</strong>：可以用于多种类型的数据，如文本、图片、音频等。</li></ul><h3 id="应用场景-3" tabindex="-1"><a class="header-anchor" href="#应用场景-3" aria-hidden="true">#</a> 应用场景</h3><ul><li><strong>艺术创作</strong>：数字艺术作品的存储和交易。</li><li><strong>知识产权保护</strong>：记录创作者信息和版权。</li><li><strong>永久存证</strong>：用于法律文件、证书、历史记录的存档。</li></ul><h3 id="工作原理-3" tabindex="-1"><a class="header-anchor" href="#工作原理-3" aria-hidden="true">#</a> 工作原理</h3><p>Runes 使用比特币交易中的额外数据字段，通过 Ordinals 系统为每个铭文创建唯一标识符，并绑定到特定聪上。</p><table><thead><tr><th>协议/技术</th><th>核心功能</th><th>应用场景</th></tr></thead><tbody><tr><td><strong>Ordinals</strong></td><td>在聪上刻印数据，创建数字收藏品</td><td>数字艺术、收藏品、数据记录</td></tr><tr><td><strong>Atomicals</strong></td><td>创建和管理数字资产和代币</td><td>代币化物品、DeFi、数字身份</td></tr><tr><td><strong>Fractal</strong></td><td>提供智能合约支持和去中心化应用开发</td><td>DApps、去中心化市场、区块链游戏</td></tr><tr><td><strong>Runes</strong></td><td>Ordinals 的核心铭文功能</td><td>数字艺术、永久存证、知识产权保护</td></tr></tbody></table>',34),e=[s];function d(l,h){return a(),t("div",null,e)}const c=r(n,[["render",d],["__file","runes.html.vue"]]);export{c as default};
