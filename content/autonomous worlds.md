In my mind, **autonomous worlds** are eternal backends, free of exclusive [[ownership]] and maximally [[VIP]]. They were first [introduced](https://0xparc.org/blog/autonomous-worlds) by [[Ludens]] in 2022 , and were developed as a spiritual successor to **fully on-chain games** like Dark Forest that used the chain for genuinely new affordances and not just adding an NFT here and there.

I use AW here as an _umbrella term for any technology built on Ethereum_. In my understanding of the blockchain ecosystem and AWs, basically all the 'core' novel building blocks can be reframed as AWs (Uniswap, MakerDAO, Aave, etc).

Even though there's a fairly precise definition of AWs laid out by [[Ludens]] in the above piece, the concept is still taking form, and it's very unclear where it will end up. It could power the infinite internet casino that web3 has found PMF for, or it could enable the ideal metaverse playground we all dream of. To be determined, and I'm hopeful that it's the latter!

### Past work

My focus is mostly on advanced [[cryptography]], and I have not been able to spend as much time building and researching AWs as I would like. However, I believe the two areas are very synergistic and I am excited to see them merge over the next few years as infrastructure and tooling improves across the entire stack.

My main (and very small) contribution thus far was championing the use of early AW infrastructure (MUD v1 with ECS) for any type of project that needed an open & composable backend, instead of the more standard use case of on-chain games. This was done as a drop-in resident at the London AW Residency & Symposium in Fall 2022, which I was lucky to attend despite having very little on-chain gaming interest or background.

Instead of using MUD for games, I sketched out an architecture that used it to manage the backend of [[heyanon!]], the main project I was working on at the time. This would include group creation & storage, proof verification, message storage, and any other extensions we wanted to build to make heyanon's backend maximally open.

This approach of using MUD for non-game backends resonated with the project leads of MUD, the premier AW framework, resulting in a shift in focus away from games and towards all "ambitious on-chain applications"! For the time being it seems like that mostly consists of games, but I'm planning on using MUD as the backend of my new ZK projects in the near future!

### Upcoming work

In Q1 2024, I will be collaborating with TCM to build a ZK integration that allows for hidden material creation paths. Super simple setup:

1. Users can create "secret materials" in the game by uploading a hash of a material/machine path to a smart contract
2. Users can prove they have unlocked this secret material by proving knowledge of the path's pre-image in ZK, using ZK-friendly hashes like Poseidon (for now)

### Other thoughts

Here are other framings about AW that I find compelling and interesting:

- **From [[Ludens]]/Fraser**: deploying stuff on-chain is eventually going to be the smoothest developer experience. You put up the backend and it can all function regardless of developer support. It might be more expensive, or data might need to be moved to a better fork, but those are surmountable. And the API comes out of the box, fully ready for developers to plug into.
- **From David**: https://aw.network/posts/lively-worlds
- AWs are the only way to build a truly open metaverse. If you want to build a metaverse that is not owned by a single entity, you need to build it on-chain. Otherwise, you're just building a game that is open to the extent that the game developers allow it to be

### Resources

I would recommend the essays provided by [AW Network](https://aw.network) as a primer for the space, starting with [[gubsheep]] and [[Ludens]]'s original pieces. I also recommend the [MUD docs](https://mud.dev/introduction) for a more developer focused introduction.
