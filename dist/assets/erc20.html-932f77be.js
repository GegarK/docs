import{_ as a,K as e,L as t,a5 as i,M as n,N as p,W as l,F as o}from"./framework-edebdfe1.js";const c={},u=n("h1",{id:"erc20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#erc20","aria-hidden":"true"},"#"),p(" ERC20")],-1),r=l(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.24</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">IERC20</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Emitted when \`value\` tokens are moved from one account (\`from\`) to
     * another (\`to\`).
     *
     * Note that \`value\` may be zero.
     */</span>
    <span class="token keyword">event</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Emitted when the allowance of a \`spender\` for an \`owner\` is set by
     * a call to {approve}. \`value\` is the new allowance.
     */</span>
    <span class="token keyword">event</span> <span class="token function">Approval</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the value of tokens in existence.
     */</span>
    <span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the value of tokens owned by \`account\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Moves a \`value\` amount of tokens from the caller&#39;s account to \`to\`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the remaining number of tokens that \`spender\` will be
     * allowed to spend on behalf of \`owner\` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */</span>
    <span class="token keyword">function</span> <span class="token function">allowance</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Sets a \`value\` amount of tokens as the allowance of \`spender\` over the
     * caller&#39;s tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender&#39;s allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Moves a \`value\` amount of tokens from \`from\` to \`to\` using the
     * allowance mechanism. \`value\` is then deducted from the caller&#39;s
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IERC20Errors</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Indicates an error related to the current \`balance\` of a \`sender\`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param balance Current balance for the interacting account.
     * @param needed Minimum amount required to perform a transfer.
     */</span>
    error <span class="token function">ERC20InsufficientBalance</span><span class="token punctuation">(</span><span class="token builtin">address</span> sender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> balance<span class="token punctuation">,</span> <span class="token builtin">uint256</span> needed<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the token \`sender\`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */</span>
    error <span class="token function">ERC20InvalidSender</span><span class="token punctuation">(</span><span class="token builtin">address</span> sender<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the token \`receiver\`. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */</span>
    error <span class="token function">ERC20InvalidReceiver</span><span class="token punctuation">(</span><span class="token builtin">address</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`spender\`’s \`allowance\`. Used in transfers.
     * @param spender Address that may be allowed to operate on tokens without being their owner.
     * @param allowance Amount of tokens a \`spender\` is allowed to operate with.
     * @param needed Minimum amount required to perform a transfer.
     */</span>
    error <span class="token function">ERC20InsufficientAllowance</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> allowance<span class="token punctuation">,</span> <span class="token builtin">uint256</span> needed<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`approver\` of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */</span>
    error <span class="token function">ERC20InvalidApprover</span><span class="token punctuation">(</span><span class="token builtin">address</span> approver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`spender\` to be approved. Used in approvals.
     * @param spender Address that may be allowed to operate on tokens without being their owner.
     */</span>
    error <span class="token function">ERC20InvalidSpender</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @dev Standard ERC721 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens.
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">IERC721Errors</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Indicates that an address can&#39;t be an owner. For example, \`address(0)\` is a forbidden owner in EIP-20.
     * Used in balance queries.
     * @param owner Address of the current owner of a token.
     */</span>
    error <span class="token function">ERC721InvalidOwner</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a \`tokenId\` whose \`owner\` is the zero address.
     * @param tokenId Identifier number of a token.
     */</span>
    error <span class="token function">ERC721NonexistentToken</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates an error related to the ownership over a particular token. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param tokenId Identifier number of a token.
     * @param owner Address of the current owner of a token.
     */</span>
    error <span class="token function">ERC721IncorrectOwner</span><span class="token punctuation">(</span><span class="token builtin">address</span> sender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">address</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the token \`sender\`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */</span>
    error <span class="token function">ERC721InvalidSender</span><span class="token punctuation">(</span><span class="token builtin">address</span> sender<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the token \`receiver\`. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */</span>
    error <span class="token function">ERC721InvalidReceiver</span><span class="token punctuation">(</span><span class="token builtin">address</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`operator\`’s approval. Used in transfers.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     * @param tokenId Identifier number of a token.
     */</span>
    error <span class="token function">ERC721InsufficientApproval</span><span class="token punctuation">(</span><span class="token builtin">address</span> operator<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`approver\` of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */</span>
    error <span class="token function">ERC721InvalidApprover</span><span class="token punctuation">(</span><span class="token builtin">address</span> approver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`operator\` to be approved. Used in approvals.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     */</span>
    error <span class="token function">ERC721InvalidOperator</span><span class="token punctuation">(</span><span class="token builtin">address</span> operator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @dev Standard ERC1155 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">IERC1155Errors</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Indicates an error related to the current \`balance\` of a \`sender\`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param balance Current balance for the interacting account.
     * @param needed Minimum amount required to perform a transfer.
     * @param tokenId Identifier number of a token.
     */</span>
    error <span class="token function">ERC1155InsufficientBalance</span><span class="token punctuation">(</span><span class="token builtin">address</span> sender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> balance<span class="token punctuation">,</span> <span class="token builtin">uint256</span> needed<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the token \`sender\`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */</span>
    error <span class="token function">ERC1155InvalidSender</span><span class="token punctuation">(</span><span class="token builtin">address</span> sender<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the token \`receiver\`. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */</span>
    error <span class="token function">ERC1155InvalidReceiver</span><span class="token punctuation">(</span><span class="token builtin">address</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`operator\`’s approval. Used in transfers.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     * @param owner Address of the current owner of a token.
     */</span>
    error <span class="token function">ERC1155MissingApprovalForAll</span><span class="token punctuation">(</span><span class="token builtin">address</span> operator<span class="token punctuation">,</span> <span class="token builtin">address</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`approver\` of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */</span>
    error <span class="token function">ERC1155InvalidApprover</span><span class="token punctuation">(</span><span class="token builtin">address</span> approver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates a failure with the \`operator\` to be approved. Used in approvals.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     */</span>
    error <span class="token function">ERC1155InvalidOperator</span><span class="token punctuation">(</span><span class="token builtin">address</span> operator<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.
     * Used in batch transfers.
     * @param idsLength Length of the array of token identifiers
     * @param valuesLength Length of the array of token amounts
     */</span>
    error <span class="token function">ERC1155InvalidArrayLength</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> idsLength<span class="token punctuation">,</span> <span class="token builtin">uint256</span> valuesLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

abstract <span class="token keyword">contract</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">_msgData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">calldata</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">_contextSuffixLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">interface</span> <span class="token class-name">IERC20Metadata</span> <span class="token keyword">is</span> IERC20 <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Returns the name of the token.
     */</span>
    <span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the symbol of the token.
     */</span>
    <span class="token keyword">function</span> <span class="token function">symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the decimals places of the token.
     */</span>
    <span class="token keyword">function</span> <span class="token function">decimals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

abstract <span class="token keyword">contract</span> <span class="token class-name">ERC20</span> <span class="token keyword">is</span> Context<span class="token punctuation">,</span> IERC20<span class="token punctuation">,</span> IERC20Metadata<span class="token punctuation">,</span> IERC20Errors <span class="token punctuation">{</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> account <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">private</span> _balances<span class="token punctuation">;</span>

    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> account <span class="token operator">=&gt;</span> <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">private</span> _allowances<span class="token punctuation">;</span>

    <span class="token builtin">uint256</span> <span class="token keyword">private</span> _totalSupply<span class="token punctuation">;</span>

    <span class="token builtin">string</span> <span class="token keyword">private</span> _name<span class="token punctuation">;</span>
    <span class="token builtin">string</span> <span class="token keyword">private</span> _symbol<span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Sets the values for {name} and {symbol}.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> name_<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> symbol_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _name <span class="token operator">=</span> name_<span class="token punctuation">;</span>
        _symbol <span class="token operator">=</span> symbol_<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the name of the token.
     */</span>
    <span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */</span>
    <span class="token keyword">function</span> <span class="token function">symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _symbol<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if \`decimals\` equals \`2\`, a balance of \`505\` tokens should
     * be displayed to a user as \`5.05\` (\`505 / 10 ** 2\`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the default value returned by this function, unless
     * it&#39;s overridden.
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">decimals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC20-totalSupply}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _totalSupply<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC20-balanceOf}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _balances<span class="token punctuation">[</span>account<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - \`to\` cannot be the zero address.
     * - the caller must have a balance of at least \`value\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> owner <span class="token operator">=</span> <span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_transfer</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC20-allowance}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">allowance</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _allowances<span class="token punctuation">[</span>owner<span class="token punctuation">]</span><span class="token punctuation">[</span>spender<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If \`value\` is the maximum \`uint256\`, the allowance is not updated on
     * \`transferFrom\`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - \`spender\` cannot be the zero address.
     */</span>
    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> owner <span class="token operator">=</span> <span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_approve</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum \`uint256\`.
     *
     * Requirements:
     *
     * - \`from\` and \`to\` cannot be the zero address.
     * - \`from\` must have a balance of at least \`value\`.
     * - the caller must have allowance for \`\`from\`\`&#39;s tokens of at least
     * \`value\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> spender <span class="token operator">=</span> <span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_spendAllowance</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> spender<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_transfer</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Moves a \`value\` amount of tokens from \`from\` to \`to\`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * NOTE: This function is not virtual, {_update} should be overridden instead.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">from</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC20InvalidSender</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC20InvalidReceiver</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">_update</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Transfers a \`value\` amount of tokens from \`from\` to \`to\`, or alternatively mints (or burns) if \`from\`
     * (or \`to\`) is the zero address. All customizations to transfers, mints, and burns should be done by overriding
     * this function.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_update</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">from</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Overflow check required: The rest of the code assumes that totalSupply never overflows</span>
            _totalSupply <span class="token operator">+=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token builtin">uint256</span> fromBalance <span class="token operator">=</span> _balances<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fromBalance <span class="token operator">&lt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">revert</span> <span class="token function">ERC20InsufficientBalance</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> fromBalance<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            unchecked <span class="token punctuation">{</span>
                <span class="token comment">// Overflow not possible: value &lt;= fromBalance &lt;= totalSupply.</span>
                _balances<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span> <span class="token operator">=</span> fromBalance <span class="token operator">-</span> value<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            unchecked <span class="token punctuation">{</span>
                <span class="token comment">// Overflow not possible: value &lt;= totalSupply or value &lt;= fromBalance &lt;= totalSupply.</span>
                _totalSupply <span class="token operator">-=</span> value<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            unchecked <span class="token punctuation">{</span>
                <span class="token comment">// Overflow not possible: balance + value is at most totalSupply, which we know fits into a uint256.</span>
                _balances<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+=</span> value<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Creates a \`value\` amount of tokens and assigns them to \`account\`, by transferring it from address(0).
     * Relies on the \`_update\` mechanism
     *
     * Emits a {Transfer} event with \`from\` set to the zero address.
     *
     * NOTE: This function is not virtual, {_update} should be overridden instead.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_mint</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>account <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC20InvalidReceiver</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">_update</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> account<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Destroys a \`value\` amount of tokens from \`account\`, lowering the total supply.
     * Relies on the \`_update\` mechanism.
     *
     * Emits a {Transfer} event with \`to\` set to the zero address.
     *
     * NOTE: This function is not virtual, {_update} should be overridden instead
     */</span>
    <span class="token keyword">function</span> <span class="token function">_burn</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>account <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC20InvalidSender</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">_update</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Sets \`value\` as the allowance of \`spender\` over the \`owner\` s tokens.
     *
     * This internal function is equivalent to \`approve\`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - \`owner\` cannot be the zero address.
     * - \`spender\` cannot be the zero address.
     *
     * Overrides to this logic should be done to the variant with an additional \`bool emitEvent\` argument.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token function">_approve</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Variant of {_approve} with an optional flag to enable or disable the {Approval} event.
     *
     * By default (when calling {_approve}) the flag is set to true. On the other hand, approval changes made by
     * \`_spendAllowance\` during the \`transferFrom\` operation set the flag to false. This saves gas by not emitting any
     * \`Approval\` event during \`transferFrom\` operations.
     *
     * Anyone who wishes to continue emitting \`Approval\` events on the\`transferFrom\` operation can force the flag to
     * true using the following override:
     * \`\`\`
     * function _approve(address owner, address spender, uint256 value, bool) internal virtual override {
     *     super._approve(owner, spender, value, true);
     * }
     * \`\`\`
     *
     * Requirements are the same as {_approve}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">,</span> <span class="token builtin">bool</span> emitEvent<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>owner <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC20InvalidApprover</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>spender <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC20InvalidSpender</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        _allowances<span class="token punctuation">[</span>owner<span class="token punctuation">]</span><span class="token punctuation">[</span>spender<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>emitEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">emit</span> <span class="token function">Approval</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Updates \`owner\` s allowance for \`spender\` based on spent \`value\`.
     *
     * Does not update the allowance value in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Does not emit an {Approval} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_spendAllowance</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> currentAllowance <span class="token operator">=</span> <span class="token function">allowance</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentAllowance <span class="token operator">!=</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>currentAllowance <span class="token operator">&lt;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">revert</span> <span class="token function">ERC20InsufficientAllowance</span><span class="token punctuation">(</span>spender<span class="token punctuation">,</span> currentAllowance<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            unchecked <span class="token punctuation">{</span>
                <span class="token function">_approve</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> currentAllowance <span class="token operator">-</span> value<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">contract</span> <span class="token class-name">GKBToken</span> <span class="token keyword">is</span> ERC20 <span class="token punctuation">{</span>
    <span class="token comment">// 初始化生成代币</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> initialSupply<span class="token punctuation">)</span> <span class="token function">ERC20</span><span class="token punctuation">(</span><span class="token string">&quot;GKBToken&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GKB&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_mint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> initialSupply<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,k){const s=o("DocsAD");return e(),t("div",null,[u,i(s),r])}const b=a(c,[["render",d],["__file","erc20.html.vue"]]);export{b as default};
