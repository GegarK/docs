import{_ as a,K as e,L as t,a5 as p,M as n,N as o,W as i,F as c}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"erc721",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#erc721","aria-hidden":"true"},"#"),o(" ERC721")],-1),r=i(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token comment">// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC721/ERC721.sol)</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.20</span><span class="token punctuation">;</span>


<span class="token keyword">interface</span> <span class="token class-name">IERC721Receiver</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Whenever an {IERC721} \`tokenId\` token is transferred to this contract via {IERC721-safeTransferFrom}
     * by \`operator\` from \`from\`, this function is called.
     *
     * It must return its Solidity selector to confirm the token transfer.
     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be
     * reverted.
     *
     * The selector can be obtained in Solidity with \`IERC721Receiver.onERC721Received.selector\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">onERC721Received</span><span class="token punctuation">(</span>
        <span class="token builtin">address</span> operator<span class="token punctuation">,</span>
        <span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> data
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IERC165</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Returns true if this contract implements the interface defined by
     * \`interfaceId\`. See the corresponding
     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
     * to learn more about how these ids are created.
     *
     * This function call must use less than 30 000 gas.
     */</span>
    <span class="token keyword">function</span> <span class="token function">supportsInterface</span><span class="token punctuation">(</span><span class="token builtin">bytes4</span> interfaceId<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

abstract <span class="token keyword">contract</span> <span class="token class-name">ERC165</span> <span class="token keyword">is</span> IERC165 <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev See {IERC165-supportsInterface}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">supportsInterface</span><span class="token punctuation">(</span><span class="token builtin">bytes4</span> interfaceId<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> interfaceId <span class="token operator">==</span> <span class="token function">type</span><span class="token punctuation">(</span>IERC165<span class="token punctuation">)</span><span class="token punctuation">.</span>interfaceId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IERC721</span> <span class="token keyword">is</span> IERC165 <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Emitted when \`tokenId\` token is transferred from \`from\` to \`to\`.
     */</span>
    <span class="token keyword">event</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> <span class="token keyword">indexed</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Emitted when \`owner\` enables \`approved\` to manage the \`tokenId\` token.
     */</span>
    <span class="token keyword">event</span> <span class="token function">Approval</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> approved<span class="token punctuation">,</span> <span class="token builtin">uint256</span> <span class="token keyword">indexed</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Emitted when \`owner\` enables or disables (\`approved\`) \`operator\` to manage all of its assets.
     */</span>
    <span class="token keyword">event</span> <span class="token function">ApprovalForAll</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> operator<span class="token punctuation">,</span> <span class="token builtin">bool</span> approved<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the number of tokens in \`\`owner\`\`&#39;s account.
     */</span>
    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> balance<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the owner of the \`tokenId\` token.
     *
     * Requirements:
     *
     * - \`tokenId\` must exist.
     */</span>
    <span class="token keyword">function</span> <span class="token function">ownerOf</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Safely transfers \`tokenId\` token from \`from\` to \`to\`.
     *
     * Requirements:
     *
     * - \`from\` cannot be the zero address.
     * - \`to\` cannot be the zero address.
     * - \`tokenId\` token must exist and be owned by \`from\`.
     * - If the caller is not \`from\`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
     * - If \`to\` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon
     *   a safe transfer.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">safeTransferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">calldata</span> data<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Safely transfers \`tokenId\` token from \`from\` to \`to\`, checking first that contract recipients
     * are aware of the ERC721 protocol to prevent tokens from being forever locked.
     *
     * Requirements:
     *
     * - \`from\` cannot be the zero address.
     * - \`to\` cannot be the zero address.
     * - \`tokenId\` token must exist and be owned by \`from\`.
     * - If the caller is not \`from\`, it must have been allowed to move this token by either {approve} or
     *   {setApprovalForAll}.
     * - If \`to\` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon
     *   a safe transfer.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">safeTransferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Transfers \`tokenId\` token from \`from\` to \`to\`.
     *
     * WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721
     * or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must
     * understand this adds an external call which potentially creates a reentrancy vulnerability.
     *
     * Requirements:
     *
     * - \`from\` cannot be the zero address.
     * - \`to\` cannot be the zero address.
     * - \`tokenId\` token must be owned by \`from\`.
     * - If the caller is not \`from\`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Gives permission to \`to\` to transfer \`tokenId\` token to another account.
     * The approval is cleared when the token is transferred.
     *
     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.
     *
     * Requirements:
     *
     * - The caller must own the token or be an approved operator.
     * - \`tokenId\` must exist.
     *
     * Emits an {Approval} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Approve or remove \`operator\` as an operator for the caller.
     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.
     *
     * Requirements:
     *
     * - The \`operator\` cannot be the address zero.
     *
     * Emits an {ApprovalForAll} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">setApprovalForAll</span><span class="token punctuation">(</span><span class="token builtin">address</span> operator<span class="token punctuation">,</span> <span class="token builtin">bool</span> approved<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the account approved for \`tokenId\` token.
     *
     * Requirements:
     *
     * - \`tokenId\` must exist.
     */</span>
    <span class="token keyword">function</span> <span class="token function">getApproved</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span> operator<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns if the \`operator\` is allowed to manage all of the assets of \`owner\`.
     *
     * See {setApprovalForAll}
     */</span>
    <span class="token keyword">function</span> <span class="token function">isApprovedForAll</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> operator<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IERC721Metadata</span> <span class="token keyword">is</span> IERC721 <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Returns the token collection name.
     */</span>
    <span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the token collection symbol.
     */</span>
    <span class="token keyword">function</span> <span class="token function">symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Returns the Uniform Resource Identifier (URI) for \`tokenId\` token.
     */</span>
    <span class="token keyword">function</span> <span class="token function">tokenURI</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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

<span class="token comment">/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * The initial owner is set to the address provided by the deployer. This can
 * later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * \`onlyOwner\`, which can be applied to your functions to restrict their use to
 * the owner.
 */</span>
abstract <span class="token keyword">contract</span> <span class="token class-name">Ownable</span> <span class="token keyword">is</span> Context <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">private</span> _owner<span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev The caller account is not authorized to perform an operation.
     */</span>
    error <span class="token function">OwnableUnauthorizedAccount</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev The owner is not a valid owner account. (eg. \`address(0)\`)
     */</span>
    error <span class="token function">OwnableInvalidOwner</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">event</span> <span class="token function">OwnershipTransferred</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> previousOwner<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> newOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.
     */</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> initialOwner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialOwner <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">OwnableInvalidOwner</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">_transferOwnership</span><span class="token punctuation">(</span>initialOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Throws if called by any account other than the owner.
     */</span>
    <span class="token keyword">modifier</span> <span class="token function">onlyOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_checkOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the address of the current owner.
     */</span>
    <span class="token keyword">function</span> <span class="token function">owner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _owner<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Throws if the sender is not the owner.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_checkOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">owner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">OwnableUnauthorizedAccount</span><span class="token punctuation">(</span><span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Leaves the contract without owner. It will not be possible to call
     * \`onlyOwner\` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby disabling any functionality that is only available to the owner.
     */</span>
    <span class="token keyword">function</span> <span class="token function">renounceOwnership</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> virtual onlyOwner <span class="token punctuation">{</span>
        <span class="token function">_transferOwnership</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Transfers ownership of the contract to a new account (\`newOwner\`).
     * Can only be called by the current owner.
     */</span>
    <span class="token keyword">function</span> <span class="token function">transferOwnership</span><span class="token punctuation">(</span><span class="token builtin">address</span> newOwner<span class="token punctuation">)</span> <span class="token keyword">public</span> virtual onlyOwner <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newOwner <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">OwnableInvalidOwner</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">_transferOwnership</span><span class="token punctuation">(</span>newOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Transfers ownership of the contract to a new account (\`newOwner\`).
     * Internal function without access restriction.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_transferOwnership</span><span class="token punctuation">(</span><span class="token builtin">address</span> newOwner<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token builtin">address</span> oldOwner <span class="token operator">=</span> _owner<span class="token punctuation">;</span>
        _owner <span class="token operator">=</span> newOwner<span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">OwnershipTransferred</span><span class="token punctuation">(</span>oldOwner<span class="token punctuation">,</span> newOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
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

<span class="token keyword">library</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Muldiv operation overflow.
     */</span>
    error <span class="token function">MathOverflowedMulDiv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">enum</span> <span class="token class-name">Rounding</span> <span class="token punctuation">{</span>
        Floor<span class="token punctuation">,</span> <span class="token comment">// Toward negative infinity</span>
        Ceil<span class="token punctuation">,</span> <span class="token comment">// Toward positive infinity</span>
        Trunc<span class="token punctuation">,</span> <span class="token comment">// Toward zero</span>
        Expand <span class="token comment">// Away from zero</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the addition of two unsigned integers, with an overflow flag.
     */</span>
    <span class="token keyword">function</span> <span class="token function">tryAdd</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token builtin">uint256</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">&lt;</span> a<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the subtraction of two unsigned integers, with an overflow flag.
     */</span>
    <span class="token keyword">function</span> <span class="token function">trySub</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&gt;</span> a<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.
     */</span>
    <span class="token keyword">function</span> <span class="token function">tryMul</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token comment">// Gas optimization: this is cheaper than requiring &#39;a&#39; not being zero, but the</span>
            <span class="token comment">// benefit is lost if &#39;b&#39; is also tested.</span>
            <span class="token comment">// See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token builtin">uint256</span> c <span class="token operator">=</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">/</span> a <span class="token operator">!=</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the division of two unsigned integers, with a division by zero flag.
     */</span>
    <span class="token keyword">function</span> <span class="token function">tryDiv</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> a <span class="token operator">/</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.
     */</span>
    <span class="token keyword">function</span> <span class="token function">tryMod</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the largest of two numbers.
     */</span>
    <span class="token keyword">function</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token punctuation">:</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the smallest of two numbers.
     */</span>
    <span class="token keyword">function</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b <span class="token operator">?</span> a <span class="token punctuation">:</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the average of two numbers. The result is rounded towards
     * zero.
     */</span>
    <span class="token keyword">function</span> <span class="token function">average</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// (a + b) / 2 can overflow.</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">^</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the ceiling of the division of two numbers.
     *
     * This differs from standard division with \`/\` in that it rounds towards infinity instead
     * of rounding towards zero.
     */</span>
    <span class="token keyword">function</span> <span class="token function">ceilDiv</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> <span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Guarantee the same behavior as in a regular Solidity division.</span>
            <span class="token keyword">return</span> a <span class="token operator">/</span> b<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// (a + b - 1) / b can overflow on addition, so we distribute.</span>
        <span class="token keyword">return</span> a <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> b <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or
     * denominator == 0.
     * @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv) with further edits by
     * Uniswap Labs also under MIT license.
     */</span>
    <span class="token keyword">function</span> <span class="token function">mulDiv</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> x<span class="token punctuation">,</span> <span class="token builtin">uint256</span> y<span class="token punctuation">,</span> <span class="token builtin">uint256</span> denominator<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token comment">// 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use</span>
            <span class="token comment">// use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256</span>
            <span class="token comment">// variables such that product = prod1 * 2^256 + prod0.</span>
            <span class="token builtin">uint256</span> prod0 <span class="token operator">=</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span> <span class="token comment">// Least significant 256 bits of the product</span>
            <span class="token builtin">uint256</span> prod1<span class="token punctuation">;</span> <span class="token comment">// Most significant 256 bits of the product</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> mm <span class="token operator">:=</span> <span class="token function">mulmod</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token function">not</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                prod1 <span class="token operator">:=</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token function">sub</span><span class="token punctuation">(</span>mm<span class="token punctuation">,</span> prod0<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">lt</span><span class="token punctuation">(</span>mm<span class="token punctuation">,</span> prod0<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// Handle non-overflow cases, 256 by 256 division.</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>prod1 <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Solidity will revert if denominator == 0, unlike the div opcode on its own.</span>
                <span class="token comment">// The surrounding unchecked block does not change this fact.</span>
                <span class="token comment">// See https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic.</span>
                <span class="token keyword">return</span> prod0 <span class="token operator">/</span> denominator<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// Make sure the result is less than 2^256. Also prevents denominator == 0.</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>denominator <span class="token operator">&lt;=</span> prod1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">revert</span> <span class="token function">MathOverflowedMulDiv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">///////////////////////////////////////////////</span>
            <span class="token comment">// 512 by 256 division.</span>
            <span class="token comment">///////////////////////////////////////////////</span>

            <span class="token comment">// Make division exact by subtracting the remainder from [prod1 prod0].</span>
            <span class="token builtin">uint256</span> remainder<span class="token punctuation">;</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                <span class="token comment">// Compute remainder using mulmod.</span>
                remainder <span class="token operator">:=</span> <span class="token function">mulmod</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span>

                <span class="token comment">// Subtract 256 bit number from 512 bit number.</span>
                prod1 <span class="token operator">:=</span> <span class="token function">sub</span><span class="token punctuation">(</span>prod1<span class="token punctuation">,</span> <span class="token function">gt</span><span class="token punctuation">(</span>remainder<span class="token punctuation">,</span> prod0<span class="token punctuation">)</span><span class="token punctuation">)</span>
                prod0 <span class="token operator">:=</span> <span class="token function">sub</span><span class="token punctuation">(</span>prod0<span class="token punctuation">,</span> remainder<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// Factor powers of two out of denominator and compute largest power of two divisor of denominator.</span>
            <span class="token comment">// Always &gt;= 1. See https://cs.stackexchange.com/q/138556/92363.</span>

            <span class="token builtin">uint256</span> twos <span class="token operator">=</span> denominator <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">-</span> denominator<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                <span class="token comment">// Divide denominator by twos.</span>
                denominator <span class="token operator">:=</span> <span class="token function">div</span><span class="token punctuation">(</span>denominator<span class="token punctuation">,</span> twos<span class="token punctuation">)</span>

                <span class="token comment">// Divide [prod1 prod0] by twos.</span>
                prod0 <span class="token operator">:=</span> <span class="token function">div</span><span class="token punctuation">(</span>prod0<span class="token punctuation">,</span> twos<span class="token punctuation">)</span>

                <span class="token comment">// Flip twos such that it is 2^256 / twos. If twos is zero, then it becomes one.</span>
                twos <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> twos<span class="token punctuation">)</span><span class="token punctuation">,</span> twos<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// Shift in bits from prod1 into prod0.</span>
            prod0 <span class="token operator">|=</span> prod1 <span class="token operator">*</span> twos<span class="token punctuation">;</span>

            <span class="token comment">// Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such</span>
            <span class="token comment">// that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for</span>
            <span class="token comment">// four bits. That is, denominator * inv = 1 mod 2^4.</span>
            <span class="token builtin">uint256</span> inverse <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> denominator<span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token number">2</span><span class="token punctuation">;</span>

            <span class="token comment">// Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel&#39;s lifting lemma, this also</span>
            <span class="token comment">// works in modular arithmetic, doubling the correct bits in each step.</span>
            inverse <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">-</span> denominator <span class="token operator">*</span> inverse<span class="token punctuation">;</span> <span class="token comment">// inverse mod 2^8</span>
            inverse <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">-</span> denominator <span class="token operator">*</span> inverse<span class="token punctuation">;</span> <span class="token comment">// inverse mod 2^16</span>
            inverse <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">-</span> denominator <span class="token operator">*</span> inverse<span class="token punctuation">;</span> <span class="token comment">// inverse mod 2^32</span>
            inverse <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">-</span> denominator <span class="token operator">*</span> inverse<span class="token punctuation">;</span> <span class="token comment">// inverse mod 2^64</span>
            inverse <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">-</span> denominator <span class="token operator">*</span> inverse<span class="token punctuation">;</span> <span class="token comment">// inverse mod 2^128</span>
            inverse <span class="token operator">*=</span> <span class="token number">2</span> <span class="token operator">-</span> denominator <span class="token operator">*</span> inverse<span class="token punctuation">;</span> <span class="token comment">// inverse mod 2^256</span>

            <span class="token comment">// Because the division is now exact we can divide by multiplying with the modular inverse of denominator.</span>
            <span class="token comment">// This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is</span>
            <span class="token comment">// less than 2^256, this is the final result. We don&#39;t need to compute the high bits of the result and prod1</span>
            <span class="token comment">// is no longer required.</span>
            result <span class="token operator">=</span> prod0 <span class="token operator">*</span> inverse<span class="token punctuation">;</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @notice Calculates x * y / denominator with full precision, following the selected rounding direction.
     */</span>
    <span class="token keyword">function</span> <span class="token function">mulDiv</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> x<span class="token punctuation">,</span> <span class="token builtin">uint256</span> y<span class="token punctuation">,</span> <span class="token builtin">uint256</span> denominator<span class="token punctuation">,</span> Rounding rounding<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token function">mulDiv</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">unsignedRoundsUp</span><span class="token punctuation">(</span>rounding<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mulmod</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> denominator<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded
     * towards zero.
     *
     * Inspired by Henry S. Warren, Jr.&#39;s &quot;Hacker&#39;s Delight&quot; (Chapter 11).
     */</span>
    <span class="token keyword">function</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// For our first guess, we get the biggest power of 2 which is smaller than the square root of the target.</span>
        <span class="token comment">//</span>
        <span class="token comment">// We know that the &quot;msb&quot; (most significant bit) of our target number \`a\` is a power of 2 such that we have</span>
        <span class="token comment">// \`msb(a) &lt;= a &lt; 2*msb(a)\`. This value can be written \`msb(a)=2**k\` with \`k=log2(a)\`.</span>
        <span class="token comment">//</span>
        <span class="token comment">// This can be rewritten \`2**log2(a) &lt;= a &lt; 2**(log2(a) + 1)\`</span>
        <span class="token comment">// → \`sqrt(2**k) &lt;= sqrt(a) &lt; sqrt(2**(k+1))\`</span>
        <span class="token comment">// → \`2**(k/2) &lt;= sqrt(a) &lt; 2**((k+1)/2) &lt;= 2**(k/2 + 1)\`</span>
        <span class="token comment">//</span>
        <span class="token comment">// Consequently, \`2**(log2(a) / 2)\` is a good first approximation of \`sqrt(a)\` with at least 1 correct bit.</span>
        <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token function">log2</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// At this point \`result\` is an estimation with one bit of precision. We know the true value is a uint128,</span>
        <span class="token comment">// since it is the square root of a uint256. Newton&#39;s method converges quadratically (precision doubles at</span>
        <span class="token comment">// every iteration). We thus need at most 7 iteration to turn our partial result with one bit of precision</span>
        <span class="token comment">// into the expected uint128 result.</span>
        unchecked <span class="token punctuation">{</span>
            result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> a <span class="token operator">/</span> result<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> a <span class="token operator">/</span> result<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> a <span class="token operator">/</span> result<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> a <span class="token operator">/</span> result<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> a <span class="token operator">/</span> result<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> a <span class="token operator">/</span> result<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> a <span class="token operator">/</span> result<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> a <span class="token operator">/</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @notice Calculates sqrt(a), following the selected rounding direction.
     */</span>
    <span class="token keyword">function</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> a<span class="token punctuation">,</span> Rounding rounding<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> result <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">unsignedRoundsUp</span><span class="token punctuation">(</span>rounding<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> result <span class="token operator">*</span> result <span class="token operator">&lt;</span> a <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Return the log in base 2 of a positive value rounded towards zero.
     * Returns 0 if given 0.
     */</span>
    <span class="token keyword">function</span> <span class="token function">log2</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">128</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">128</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">128</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">64</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">64</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">64</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">32</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">32</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">16</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">16</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">16</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">8</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">8</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">4</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">4</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Return the log in base 2, following the selected rounding direction, of a positive value.
     * Returns 0 if given 0.
     */</span>
    <span class="token keyword">function</span> <span class="token function">log2</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">,</span> Rounding rounding<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token function">log2</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> result <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">unsignedRoundsUp</span><span class="token punctuation">(</span>rounding<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;</span> value <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Return the log in base 10 of a positive value rounded towards zero.
     * Returns 0 if given 0.
     */</span>
    <span class="token keyword">function</span> <span class="token function">log10</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">/=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">64</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">64</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">/=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">32</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">32</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">/=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">16</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">16</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">/=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">8</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">8</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">/=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">4</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">/=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Return the log in base 10, following the selected rounding direction, of a positive value.
     * Returns 0 if given 0.
     */</span>
    <span class="token keyword">function</span> <span class="token function">log10</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">,</span> Rounding rounding<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token function">log10</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> result <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">unsignedRoundsUp</span><span class="token punctuation">(</span>rounding<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token number">10</span> <span class="token operator">**</span> result <span class="token operator">&lt;</span> value <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Return the log in base 256 of a positive value rounded towards zero.
     * Returns 0 if given 0.
     *
     * Adding one to the result gives the number of pairs of hex symbols needed to represent \`value\` as a hex string.
     */</span>
    <span class="token keyword">function</span> <span class="token function">log256</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">128</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">128</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">16</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">64</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">64</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">8</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">32</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">32</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">16</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                value <span class="token operator">&gt;&gt;=</span> <span class="token number">16</span><span class="token punctuation">;</span>
                result <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Return the log in base 256, following the selected rounding direction, of a positive value.
     * Returns 0 if given 0.
     */</span>
    <span class="token keyword">function</span> <span class="token function">log256</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">,</span> Rounding rounding<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token builtin">uint256</span> result <span class="token operator">=</span> <span class="token function">log256</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> result <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">unsignedRoundsUp</span><span class="token punctuation">(</span>rounding<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>result <span class="token operator">&lt;&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> value <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns whether a provided rounding mode is considered rounding up for unsigned integers.
     */</span>
    <span class="token keyword">function</span> <span class="token function">unsignedRoundsUp</span><span class="token punctuation">(</span>Rounding rounding<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">uint8</span><span class="token punctuation">(</span>rounding<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">library</span> <span class="token class-name">SignedMath</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * @dev Returns the largest of two signed numbers.
     */</span>
    <span class="token keyword">function</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token builtin">int256</span> a<span class="token punctuation">,</span> <span class="token builtin">int256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">int256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token punctuation">:</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the smallest of two signed numbers.
     */</span>
    <span class="token keyword">function</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token builtin">int256</span> a<span class="token punctuation">,</span> <span class="token builtin">int256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">int256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b <span class="token operator">?</span> a <span class="token punctuation">:</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the average of two signed numbers without overflow.
     * The result is rounded towards zero.
     */</span>
    <span class="token keyword">function</span> <span class="token function">average</span><span class="token punctuation">(</span><span class="token builtin">int256</span> a<span class="token punctuation">,</span> <span class="token builtin">int256</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">int256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Formula from the book &quot;Hacker&#39;s Delight&quot;</span>
        <span class="token builtin">int256</span> x <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">^</span> b<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token builtin">int256</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>a <span class="token operator">^</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the absolute unsigned value of a signed value.
     */</span>
    <span class="token keyword">function</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token builtin">int256</span> n<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token comment">// must be unchecked in order to support \`n = type(int256).min\`</span>
            <span class="token keyword">return</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span>n <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> n <span class="token punctuation">:</span> <span class="token operator">-</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">library</span> <span class="token class-name">Strings</span> <span class="token punctuation">{</span>
    <span class="token builtin">bytes16</span> <span class="token keyword">private</span> <span class="token keyword">constant</span> HEX_DIGITS <span class="token operator">=</span> <span class="token string">&quot;0123456789abcdef&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin">uint8</span> <span class="token keyword">private</span> <span class="token keyword">constant</span> ADDRESS_LENGTH <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev The \`value\` string doesn&#39;t fit in the specified \`length\`.
     */</span>
    error <span class="token function">StringsInsufficientHexLength</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">,</span> <span class="token builtin">uint256</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Converts a \`uint256\` to its ASCII \`string\` decimal representation.
     */</span>
    <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token builtin">uint256</span> length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">log10</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token builtin">string</span> <span class="token keyword">memory</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">string</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token builtin">uint256</span> ptr<span class="token punctuation">;</span>
            <span class="token comment">/// @solidity memory-safe-assembly</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token comment">/// @solidity memory-safe-assembly</span>
                <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                    <span class="token function">mstore8</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span> <span class="token builtin">byte</span><span class="token punctuation">(</span><span class="token function">mod</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> HEX_DIGITS<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                value <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> buffer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Converts a \`int256\` to its ASCII \`string\` decimal representation.
     */</span>
    <span class="token keyword">function</span> <span class="token function">toStringSigned</span><span class="token punctuation">(</span><span class="token builtin">int256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;-&quot;</span> <span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token function">toString</span><span class="token punctuation">(</span>SignedMath<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Converts a \`uint256\` to its ASCII \`string\` hexadecimal representation.
     */</span>
    <span class="token keyword">function</span> <span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">toHexString</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">log256</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Converts a \`uint256\` to its ASCII \`string\` hexadecimal representation with fixed length.
     */</span>
    <span class="token keyword">function</span> <span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">,</span> <span class="token builtin">uint256</span> length<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> localValue <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> length <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        buffer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
        buffer<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            buffer<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> HEX_DIGITS<span class="token punctuation">[</span>localValue <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            localValue <span class="token operator">&gt;&gt;=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>localValue <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">StringsInsufficientHexLength</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Converts an \`address\` with fixed length of 20 bytes to its not checksummed ASCII \`string\` hexadecimal
     * representation.
     */</span>
    <span class="token keyword">function</span> <span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token builtin">address</span> addr<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token builtin">uint160</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ADDRESS_LENGTH<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns true if the two strings are equal.
     */</span>
    <span class="token keyword">function</span> <span class="token function">equal</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> a<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> b<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token builtin">bytes</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token builtin">bytes</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

abstract <span class="token keyword">contract</span> <span class="token class-name">ERC721</span> <span class="token keyword">is</span> Context<span class="token punctuation">,</span>Ownable<span class="token punctuation">,</span> ERC165<span class="token punctuation">,</span> IERC721<span class="token punctuation">,</span> IERC721Metadata<span class="token punctuation">,</span> IERC721Errors <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token class-name">Strings</span> <span class="token keyword">for</span> <span class="token builtin">uint256</span><span class="token punctuation">;</span>

    <span class="token comment">// Token name</span>
    <span class="token builtin">string</span> <span class="token keyword">private</span> _name<span class="token punctuation">;</span>

    <span class="token comment">// Token symbol</span>
    <span class="token builtin">string</span> <span class="token keyword">private</span> _symbol<span class="token punctuation">;</span>

    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId <span class="token operator">=&gt;</span> <span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token keyword">private</span> _owners<span class="token punctuation">;</span>

    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">private</span> _balances<span class="token punctuation">;</span>

    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId <span class="token operator">=&gt;</span> <span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token keyword">private</span> _tokenApprovals<span class="token punctuation">;</span>

    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner <span class="token operator">=&gt;</span> <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> operator <span class="token operator">=&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">private</span> _operatorApprovals<span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Initializes the contract by setting a \`name\` and a \`symbol\` to the token collection.
     */</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> name_<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> symbol_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _name <span class="token operator">=</span> name_<span class="token punctuation">;</span>
        _symbol <span class="token operator">=</span> symbol_<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC165-supportsInterface}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">supportsInterface</span><span class="token punctuation">(</span><span class="token builtin">bytes4</span> interfaceId<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token function">override</span><span class="token punctuation">(</span>ERC165<span class="token punctuation">,</span> IERC165<span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
            interfaceId <span class="token operator">==</span> <span class="token function">type</span><span class="token punctuation">(</span>IERC721<span class="token punctuation">)</span><span class="token punctuation">.</span>interfaceId <span class="token operator">||</span>
            interfaceId <span class="token operator">==</span> <span class="token function">type</span><span class="token punctuation">(</span>IERC721Metadata<span class="token punctuation">)</span><span class="token punctuation">.</span>interfaceId <span class="token operator">||</span>
            super<span class="token punctuation">.</span><span class="token function">supportsInterface</span><span class="token punctuation">(</span>interfaceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-balanceOf}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>owner <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721InvalidOwner</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> _balances<span class="token punctuation">[</span>owner<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-ownerOf}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">ownerOf</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">_requireOwned</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721Metadata-name}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721Metadata-symbol}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _symbol<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721Metadata-tokenURI}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">tokenURI</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_requireOwned</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">string</span> <span class="token keyword">memory</span> baseURI <span class="token operator">=</span> <span class="token function">_baseURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>baseURI<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token builtin">string</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>baseURI<span class="token punctuation">,</span> tokenId<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the \`baseURI\` and the \`tokenId\`. Empty
     * by default, can be overridden in child contracts.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_baseURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-approve}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token punctuation">{</span>
        <span class="token function">_approve</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-getApproved}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">getApproved</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_requireOwned</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">_getApproved</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-setApprovalForAll}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">setApprovalForAll</span><span class="token punctuation">(</span><span class="token builtin">address</span> operator<span class="token punctuation">,</span> <span class="token builtin">bool</span> approved<span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token punctuation">{</span>
        <span class="token function">_setApprovalForAll</span><span class="token punctuation">(</span><span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> operator<span class="token punctuation">,</span> approved<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-isApprovedForAll}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">isApprovedForAll</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> operator<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _operatorApprovals<span class="token punctuation">[</span>owner<span class="token punctuation">]</span><span class="token punctuation">[</span>operator<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-transferFrom}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721InvalidReceiver</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Setting an &quot;auth&quot; arguments enables the \`_isAuthorized\` check which verifies that the token exists</span>
        <span class="token comment">// (from != 0). Therefore, it is not needed to verify that the return value is not 0 here.</span>
        <span class="token builtin">address</span> previousOwner <span class="token operator">=</span> <span class="token function">_update</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>previousOwner <span class="token operator">!=</span> <span class="token keyword">from</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721IncorrectOwner</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> previousOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-safeTransferFrom}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">safeTransferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token function">safeTransferFrom</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev See {IERC721-safeTransferFrom}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">safeTransferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token keyword">public</span> virtual <span class="token punctuation">{</span>
        <span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_checkOnERC721Received</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the owner of the \`tokenId\`. Does NOT revert if token doesn&#39;t exist
     *
     * IMPORTANT: Any overrides to this function that add ownership of tokens not tracked by the
     * core ERC721 logic MUST be matched with the use of {_increaseBalance} to keep balances
     * consistent with ownership. The invariant to preserve is that for any address \`a\` the value returned by
     * \`balanceOf(a)\` must be equal to the number of tokens such that \`_ownerOf(tokenId)\` is \`a\`.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_ownerOf</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _owners<span class="token punctuation">[</span>tokenId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns the approved address for \`tokenId\`. Returns 0 if \`tokenId\` is not minted.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_getApproved</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _tokenApprovals<span class="token punctuation">[</span>tokenId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Returns whether \`spender\` is allowed to manage \`owner\`&#39;s tokens, or \`tokenId\` in
     * particular (ignoring whether it is owned by \`owner\`).
     *
     * WARNING: This function assumes that \`owner\` is the actual owner of \`tokenId\` and does not verify this
     * assumption.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_isAuthorized</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
            spender <span class="token operator">!=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span>owner <span class="token operator">==</span> spender <span class="token operator">||</span> <span class="token function">isApprovedForAll</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">_getApproved</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span> <span class="token operator">==</span> spender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Checks if \`spender\` can operate on \`tokenId\`, assuming the provided \`owner\` is the actual owner.
     * Reverts if \`spender\` does not have approval from the provided \`owner\` for the given token or for all its assets
     * the \`spender\` for the specific \`tokenId\`.
     *
     * WARNING: This function assumes that \`owner\` is the actual owner of \`tokenId\` and does not verify this
     * assumption.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_checkAuthorized</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> virtual <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">_isAuthorized</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>owner <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">revert</span> <span class="token function">ERC721NonexistentToken</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">revert</span> <span class="token function">ERC721InsufficientApproval</span><span class="token punctuation">(</span>spender<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Unsafe write access to the balances, used by extensions that &quot;mint&quot; tokens using an {ownerOf} override.
     *
     * NOTE: the value is limited to type(uint128).max. This protect against _balance overflow. It is unrealistic that
     * a uint256 would ever overflow from increments when these increments are bounded to uint128 values.
     *
     * WARNING: Increasing an account&#39;s balance using this function tends to be paired with an override of the
     * {_ownerOf} function to resolve the ownership of the corresponding tokens so that balances and ownership
     * remain consistent with one another.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_increaseBalance</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">,</span> <span class="token builtin">uint128</span> value<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        unchecked <span class="token punctuation">{</span>
            _balances<span class="token punctuation">[</span>account<span class="token punctuation">]</span> <span class="token operator">+=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Transfers \`tokenId\` from its current owner to \`to\`, or alternatively mints (or burns) if the current owner
     * (or \`to\`) is the zero address. Returns the owner of the \`tokenId\` before the update.
     *
     * The \`auth\` argument is optional. If the value passed is non 0, then this function will check that
     * \`auth\` is either the owner of the token, or approved to operate on the token (by the owner).
     *
     * Emits a {Transfer} event.
     *
     * NOTE: If overriding this function in a way that tracks balances, see also {_increaseBalance}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_update</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">address</span> auth<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> <span class="token keyword">from</span> <span class="token operator">=</span> <span class="token function">_ownerOf</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Perform (optional) operator check</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>auth <span class="token operator">!=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">_checkAuthorized</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> auth<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Execute the update</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">from</span> <span class="token operator">!=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Clear approval. No need to re-authorize or emit the Approval event</span>
            <span class="token function">_approve</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            unchecked <span class="token punctuation">{</span>
                _balances<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">!=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            unchecked <span class="token punctuation">{</span>
                _balances<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        _owners<span class="token punctuation">[</span>tokenId<span class="token punctuation">]</span> <span class="token operator">=</span> to<span class="token punctuation">;</span>

        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">from</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Mints \`tokenId\` and transfers it to \`to\`.
     *
     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible
     *
     * Requirements:
     *
     * - \`tokenId\` must not exist.
     * - \`to\` cannot be the zero address.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_mint</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721InvalidReceiver</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">address</span> previousOwner <span class="token operator">=</span> <span class="token function">_update</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>previousOwner <span class="token operator">!=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721InvalidSender</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Mints \`tokenId\`, transfers it to \`to\` and checks for \`to\` acceptance.
     *
     * Requirements:
     *
     * - \`tokenId\` must not exist.
     * - If \`to\` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_safeMint</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token function">_safeMint</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[\`_safeMint\`], with an additional \`data\` parameter which is
     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_safeMint</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token function">_mint</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_checkOnERC721Received</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Destroys \`tokenId\`.
     * The approval is cleared when the token is burned.
     * This is an internal function that does not check if the sender is authorized to operate on the token.
     *
     * Requirements:
     *
     * - \`tokenId\` must exist.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_burn</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> previousOwner <span class="token operator">=</span> <span class="token function">_update</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>previousOwner <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721NonexistentToken</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Transfers \`tokenId\` from \`from\` to \`to\`.
     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.
     *
     * Requirements:
     *
     * - \`to\` cannot be the zero address.
     * - \`tokenId\` token must be owned by \`from\`.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721InvalidReceiver</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">address</span> previousOwner <span class="token operator">=</span> <span class="token function">_update</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>previousOwner <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721NonexistentToken</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>previousOwner <span class="token operator">!=</span> <span class="token keyword">from</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721IncorrectOwner</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> previousOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Safely transfers \`tokenId\` token from \`from\` to \`to\`, checking that contract recipients
     * are aware of the ERC721 standard to prevent tokens from being forever locked.
     *
     * \`data\` is additional data, it has no specified format and it is sent in call to \`to\`.
     *
     * This internal function is like {safeTransferFrom} in the sense that it invokes
     * {IERC721Receiver-onERC721Received} on the receiver, and can be used to e.g.
     * implement alternative mechanisms to perform token transfer, such as signature-based.
     *
     * Requirements:
     *
     * - \`tokenId\` token must exist and be owned by \`from\`.
     * - \`to\` cannot be the zero address.
     * - \`from\` cannot be the zero address.
     * - If \`to\` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_safeTransfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token function">_safeTransfer</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Same as {xref-ERC721-_safeTransfer-address-address-uint256-}[\`_safeTransfer\`], with an additional \`data\` parameter which is
     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_safeTransfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token function">_transfer</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_checkOnERC721Received</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Approve \`to\` to operate on \`tokenId\`
     *
     * The \`auth\` argument is optional. If the value passed is non 0, then this function will check that \`auth\` is
     * either the owner of the token, or approved to operate on all tokens held by this owner.
     *
     * Emits an {Approval} event.
     *
     * Overrides to this logic should be done to the variant with an additional \`bool emitEvent\` argument.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">address</span> auth<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token function">_approve</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> auth<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Variant of \`_approve\` with an optional flag to enable or disable the {Approval} event. The event is not
     * emitted in the context of transfers.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">address</span> auth<span class="token punctuation">,</span> <span class="token builtin">bool</span> emitEvent<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token comment">// Avoid reading the owner unless necessary</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>emitEvent <span class="token operator">||</span> auth <span class="token operator">!=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">address</span> owner <span class="token operator">=</span> <span class="token function">_requireOwned</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// We do not use _isAuthorized because single-token approvals should not be able to call approve</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>auth <span class="token operator">!=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> owner <span class="token operator">!=</span> auth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isApprovedForAll</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> auth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">revert</span> <span class="token function">ERC721InvalidApprover</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>emitEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">emit</span> <span class="token function">Approval</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> to<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        _tokenApprovals<span class="token punctuation">[</span>tokenId<span class="token punctuation">]</span> <span class="token operator">=</span> to<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Approve \`operator\` to operate on all of \`owner\` tokens
     *
     * Requirements:
     * - operator can&#39;t be the address zero.
     *
     * Emits an {ApprovalForAll} event.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_setApprovalForAll</span><span class="token punctuation">(</span><span class="token builtin">address</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> operator<span class="token punctuation">,</span> <span class="token builtin">bool</span> approved<span class="token punctuation">)</span> <span class="token keyword">internal</span> virtual <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>operator <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721InvalidOperator</span><span class="token punctuation">(</span>operator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        _operatorApprovals<span class="token punctuation">[</span>owner<span class="token punctuation">]</span><span class="token punctuation">[</span>operator<span class="token punctuation">]</span> <span class="token operator">=</span> approved<span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">ApprovalForAll</span><span class="token punctuation">(</span>owner<span class="token punctuation">,</span> operator<span class="token punctuation">,</span> approved<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Reverts if the \`tokenId\` doesn&#39;t have a current owner (it hasn&#39;t been minted, or it has been burned).
     * Returns the owner.
     *
     * Overrides to ownership logic should be done to {_ownerOf}.
     */</span>
    <span class="token keyword">function</span> <span class="token function">_requireOwned</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> owner <span class="token operator">=</span> <span class="token function">_ownerOf</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>owner <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">ERC721NonexistentToken</span><span class="token punctuation">(</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> owner<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Private function to invoke {IERC721Receiver-onERC721Received} on a target address. This will revert if the
     * recipient doesn&#39;t accept the token transfer. The call is not executed if the target address is not a contract.
     *
     * @param from address representing the previous owner of the given token ID
     * @param to target address that will receive the tokens
     * @param tokenId uint256 ID of the token to be transferred
     * @param data bytes optional data to send along with the call
     */</span>
    <span class="token keyword">function</span> <span class="token function">_checkOnERC721Received</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>code<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            try <span class="token function">IERC721Receiver</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onERC721Received</span><span class="token punctuation">(</span><span class="token function">_msgSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> tokenId<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes4</span> retval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>retval <span class="token operator">!=</span> IERC721Receiver<span class="token punctuation">.</span>onERC721Received<span class="token punctuation">.</span>selector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">revert</span> <span class="token function">ERC721InvalidReceiver</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> catch <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>reason<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">revert</span> <span class="token function">ERC721InvalidReceiver</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">/// @solidity memory-safe-assembly</span>
                    <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                        <span class="token keyword">revert</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span> reason<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">GKBNFT</span> <span class="token keyword">is</span> ERC721 <span class="token punctuation">{</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> initialOwner<span class="token punctuation">)</span> <span class="token function">ERC721</span><span class="token punctuation">(</span><span class="token string">&quot;GKBNFT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GKB&quot;</span><span class="token punctuation">)</span> <span class="token function">Ownable</span><span class="token punctuation">(</span>initialOwner<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">_baseURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> override <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;https://deelmind.com/&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">safeMint</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> tokenId<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOwner<span class="token punctuation">{</span>
        <span class="token function">_safeMint</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(k,v){const s=c("DocsAD");return e(),t("div",null,[u,p(s),r])}const b=a(l,[["render",d],["__file","nft.html.vue"]]);export{b as default};
