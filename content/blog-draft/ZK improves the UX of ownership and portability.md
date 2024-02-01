🚧 This is a work in progress 🚧

This is part of a longer series called “[[CG]] as [[offensive]] technology”, an exploration of how we can use cryptography to **enable new affordances for users** instead of just protecting against bad outcomes. Defense for offense.

## Why do these properties matter?
[[Ownership]] and portability (equivalent to [[VIP]]) are some of the key ideas and unlocks discussed around web3/crypto. These are genuinely new affordances of this field, and are areas where our modern technological landscape is severely lacking.

Ownership of our data and identity is almost nonexistent in the modern paradigms of data selling and massive ad-based revenue models for the internet. Upon signing up for a platform, every single piece of our data is kept in a closed server in a closed platform. Everything except our password is known to the service, and they are usually given full access to its powers and knowledge. (Even with our password they store a hash, so they basically know everything).

This was in many ways pursued for ease-of-use: with the advent of cloud technologies, it became easier and easier for users to maintain complex profiles on a number of different websites by just offloading most of the storage to propeitary servers. And each of these services has good incentives to not remove your data or misrepresent it publicly: that would be very bad UX and very confusing for users, likely driving them to competitor platforms. However, they have no incentive to not do whatever they want with your data without you noticing, which they do freely to the tune of billions of dollars.

Similarly, portability of our data is not designed into any of the modern web. When we build a footprint within a social media or content platform, that content is entirely kept in the premises of that platform. There are some tiny attempts at bridging, like "Sign in with Google/Facebook" logins that different sites have. But that's just using large tech companies as trusted login and other access providers.

## Web3's leading solution: NFTs

For the general public, NFTs are some of the most visible usages of the blockchain. Unfortunately (and perhaps rightfully), much of that perception has been negative, with naysayers quipping “lol lemme copy paste your JPEG” to a multi-million picture of a fucking monkey.

But despite the proliferation of shallow “bragging rights” use-cases, NFTs are a solid technology with meaningful ownership and portability affordances.

### Where do NFTs fall short?

The adoption of NFTs is difficult on many fronts. For one, their publicity thus far hasn’t been great, with many consumers associating NFTs with financial scams or twitter spam.

NFTs also require use of a wallet and some minimal understanding of blockchains. It also usually requires some starter ETH in order to mint and actually use your NFTs, which is its own nightmare to acquire. This is a *major* bottleneck for existing applications, and is getting tackled by solutions like [[AA]], paymasters, and embedded wallets like Privy.

NFTs are also default public. In many ways, NFTs (and all on-chain assets) are the most public pieces of data ever created by mankind. I believe this undermines the ownership of the asset in many meaningful ways. There is of course still ownership in the sense that no one can take away your NFT unless you give them your private key or sign a transaction giving it away. But the knowledge of your ownership is available to everyone, and can be linked to all of your other activity.

NFTs are also default transferable (if they are not soulbound) which inherently makes them far more speculative and financial. This is not strictly a bad thing, it just means the scope of applications is a bit more limited when using NFTs. When designing some sort of ownership-based asset that should be transfered, NFTs and ERC20s are actually pretty much perfect solutions. This is a big short coming of ZK based solutions discussed later in this post.

## Signatures are all you need
It turns out we can actually simplify 

## With ZK, signatures are even better


