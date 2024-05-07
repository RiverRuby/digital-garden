---
title: autoworlds
tags:
  - concepts
---
In my mind, **autonomous worlds** (autoworlds or AW) are eternal backends, free of exclusive [[ownership]] and maximally [[VIP]]. They were first [introduced](https://0xparc.org/blog/autonomous-worlds) by [[Ludens]] in 2022 , and were developed as a spiritual successor to **fully on-chain games** like Dark Forest that used the chain for genuinely new affordances and not just adding an NFT here and there.

In my understanding of the blockchain ecosystem, basically all the 'core' novel building blocks can be more effectively reframed as AWs (Uniswap, MakerDAO, Aave, on-chain [[Semaphore]] etc). Thus, throughout this wiki I will use AW to refer to all on-chain technologies that benefit from global consensus, decentralization, and [[VIP]].

Even though there's a fairly precise definition of AWs laid out by [[Ludens]] in the above piece, the concept is still taking form, and it's very unclear where it will end up. It could power the infinite internet casino that web3 has found PMF for, or it could enable the ideal metaverse playground we all dream of. To be determined, and I'm hopeful that it's the latter!

## Framings from others

Here are other framings about AW that I find compelling and interesting:

- **From [[Ludens]]/Fraser**: deploying stuff on-chain is eventually going to be the smoothest developer experience. You put up the backend and it can all function regardless of developer support. It might be more expensive, or data might need to be moved to a better fork, but those are surmountable. And the API comes out of the box, fully ready for developers to plug into.
- **From David**: https://aw.network/posts/lively-worlds
- AWs are the only way to build a truly open metaverse. If you want to build a metaverse that is not owned by a single entity, you need to build it on-chain. Otherwise, you're just building a game that is open to the extent that the game developers allow it to be
- Re: https://vitalik.eth.limo/general/2024/03/29/memecoins.html, we need more non-financial explorations of blockchains. Autoworlds are an excellent playground for this! Although all the ERC20s involved might just end up being new fodder for airdrop farmers. Sigh

I would also recommend the essays provided by [AW Network](https://aw.network) as a primer for the space, starting with [[gubsheep]] and [[Ludens]]'s original pieces. I also recommend the [MUD docs](https://mud.dev/introduction) for a more developer focused introduction.

## AW project proposals

> ZK integration that allows for hidden material creation paths in This Cursed Machine
1. Users can create "secret materials" in the game by uploading a hash of a material/machine path to a smart contract
2. Users can prove they have unlocked this secret material by proving knowledge of the path's pre-image in ZK, using ZK-friendly hashes like Poseidon (for now)

 > Using [NFC hardware wallets](https://github.com/arx-research/libhalo/tree/master) as a tangible "game disk" for [[AW]]
- Preload NFC hardware wallets with some starter ETH on whatever fucked up L2 your AW or on-chain game is using + some cool game specific NFTs worth $X
- Sell the chip in a disk form factor for $X+10 (+25? +0.02ETH?) at conferences
- Avoids painful bridging, which was the largest dropoff in activation according to [Small Brain Games](https://twitter.com/0xsmallbrain) for https://draw.tech
- Can design the flow to completely abstract the wallet away for non-crypto audiences
- Sort of like Amazon gift cards in a mall!

> Use MUD to build backend of any experience using [[ECDSA chips]] 
- One of the really special things about using ECDSA chips (which are already full wallets) is that we don't need any trusted backend to manage state
- Because everything is signed and can be efficiently ZKP-d about, we can do all the verification and storage logic on chain!
- All private data is kept with the user, or backed up somewhere
- Would love to see an E2E implementation of this by end of 2024

## Past work

My focus is mostly on advanced [[CG]], and I have not been able to spend as much time building and researching AWs as I would like. However, I believe the two areas are very synergistic and I am excited to see them merge over the next few years as infrastructure and tooling improves across the entire stack.

My main (and very small) contribution thus far was championing the use of early AW infrastructure (MUD v1 with ECS) for any type of project that needed an open & composable backend, instead of the more standard use case of on-chain games. This was done as a drop-in resident at the London AW Residency & Symposium in Fall 2022, which I was lucky to attend despite having very little on-chain gaming interest or background.

Instead of using MUD for games, I sketched out an architecture that used it to manage the backend of [[heyanon!]], the main project I was working on at the time. This would include group creation & storage, proof verification, message storage, and any other extensions we wanted to build to make heyanon's backend maximally open.

This approach of using MUD for non-game backends resonated with the project leads of MUD, the premier AW framework, resulting in a shift in focus away from games and towards all "ambitious on-chain applications"! For the time being it seems like that mostly consists of games, but I'm planning on using MUD as the backend of my new ZK projects in the near future!
