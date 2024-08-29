---
date: 2024-05-09
tags:
  - concepts
---
VIP = verifiable, interoperable, portable. Used in a sentence: [[signatures]] and [[zkSNARKs]] are VIP data. Like VIP tickets, VIP data give the owner many more benefits than standard/dead data (defined formally as data stuck in a DB without any attached [[CG]]).

I think these are three equivalent notions, that all follow from each other. In different contexts, it feels best to use one of the three terms over the others. I personally resonate most with **portability** over the others, because it has less of its own brand within web3.

## Verifiability
If data makes a specific claim, it is **verifiable** if the claim can be checked by an external party using the data and some claim-specific metadata. This metadata is usually called a [[verification key]].

Data that is signed implicitly makes the claim that “a user with a specific public/private key pair attested to a message”. The verifying key here is the user’s public key, which can be shared broadly. Thus, signatures are verifiable.

[[zkSNARKs]] are so fascinating because they make the space of claims that can be verified be literally anything. We can turn a hash function into a signature scheme, instead of using any fancy cryptography (cc [[Semaphore]]). We can prove you're an 18 year old French citizen without revealing anything else (cc [proof-of-passport](https://github.com/zk-passport/proof-of-passport)).

## Interoperability
Data is interoperable if it can be equally interpreted and operated on multiple platforms. Interoperability is commonly cited as one of the key affordances of web3 technologies like NFTs. And many [[AW]] theses are built on the potential positive-sum effects of having full interoperability on all game mechanics from building on chain. 

## Portability
Data is portable if it can be exported from one platform to another in a trust-minimized way. A great example of portable data is being built by [TLSNotary](https://tlsnotary.org).

This is an excellent fit for [[identity]] data, which becomes far less powerful to the user if it is stuck in one place. However, siloed data also gives far more power to the platform, so we're going to have a hard time making this transition. 

Full portability means it can be exported and used on all platforms, which is basically the same as interoperability. This does not apply to TLSNotary data, but it does apply to [[signatures]] and [[zkSNARKs]].

## Related terms
VIP closely interacts with a number of other concepts, but each are slightly different in my mind. Even if they encompass similar technical concepts, their English usage mean they're more easily associated with different projects and goals.

- [[authenticity]]
	- Authenticity is often what we are looking to "verify" when we are leveraging verifiability. 
- [[ownership]]
	- If you have private VIP data, you own it in a meaningful way
	- Don't need anyone else to store and attest to it; you can make those proofs yourself and hide the core elements
- [[signatures]]
	- Signatures are the smallest/simplest unit of VIP data
- [[ZK]]
	- ZK proofs are a significant up-level of VIP data, where we can selectively disclose information and make the proof very small via [[zkSNARKs]]