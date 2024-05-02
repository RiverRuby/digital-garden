---
title: cryptography
tags:
  - concepts
---
In my mind, **cryptography** or **CG**[^b] is a discipline combining ideas from math and CS to **make stuff hard to break**. In this framing, it is inherently a [[defensive]] technology.

I've been lucky enough to work in cryptography since early 2016, working on an early PoW alternative called Proof-of-Space as a part of a research program called [MIT Primes](https://math.mit.edu/research/highschool/primes/index.php). The scheme involved [Merkle queries on a large **hard-to-pebble graph**](https://math.mit.edu/research/highschool/primes/materials/2016/Bhupatiraju-Kuszmaul-Vale.pdf) to prove that you'd stored a significant portion of the graph on your hard drive.

I now work primarily on [[ZK]] and [[FHE]] tech, supported by the [[PSE]] (Privacy & Scaling Explorations) team at the Ethereum Foundation, exploring how to bring private data [[ownership]] and programmability to regular people.

## Why do I like cryptography?

Cryptography is the art of taking precisely articulated primitives and assumptions and building overpowered superstructures on top of them. This starts with ideas as simple as OTPs (one time pads) but can also yield juggernauts like [[ZK]] and [[FHE]].  My experience taking [6.875](https://mit6875.github.io/fall2021.html) in 2019 illuminated this best for me, but I feel it every time I learn about a newly developed cryptosystem. 

Cryptography is ideal for brains that endeavor to understand every building block of what they're using. And it rewards those able to get deep enough into the weeds with novel insights and practical ways to wield the technology.

Cryptography is also [[open-source]] by nature, which I love. If your cryptography can't be scrutinized and attacked and critiqued, it isn't real. This necessitates your math and code being open source and ready for anyone to use. This creates a naturally open and positive-sum ecosystem, which feels very good.

It's also super math heavy, and I fucking love math. It's the purest art form humans have found. Every day I get to learn new math is a great one.

## Cryptography project proposals

> [[SXG]] proofs & lobbying
- This website signs its data with SXG!
- I want to make proofs about what I say on other parts of the web!
- And then let's do it for your website (and Medium, Substack, Mirror, and all major media sites...once we lobby them all to also add SXG!)
- If the Internet Archive adds SXG, we can do proofs on all webpages + on a time axis 😯

> [[SHAmaphore]]
- SHA256[^a] + [[Semaphore]] for 3 gadgets: `HashSignature`, `AnonSignIn`, `Plume`
- Quantum resistant, using standard hash functions, recursion friendly, hell yes
- Good bye Poseidon!!

> Signed webpages via VPNs for easier TLSNotary
- If we get VPNs to sign direction of traffic, we can make proofs about our internet data in a lighter weight way than TLSNotary 
- Doesn't reveal anything to VPNs, we already trust them to deliver traffic to us correctly
- Harder to MITM attack than proxy based solutions (I think?)

I have many, many other project proposals are either not ready to be public, or too good to give away for free. DM me on [Twitter](https://twitter.com/viv_boop) to jam and collaborate!


[^a]: I am a SHA-256 lover over Keccak or BLAKE or Grostl. fight me
[^b]: I am trying to meme "CG" into existence, like "CS" for computer science. I absolutely hate saying I work on cryptography research and people asking me if that means cryptocurrency. Even though I'm (currently) totally funded by cryptocurrency (shoutout EF and [[PSE]]!) I would like some distance from [[blockchain]]. I think blockchain are okay.