---
tags:
  - software
---
> This blog covers Semaphore v3, which I used in a number of projects. The Semaphore team independently implemented many of the improvements I discuss here for their v4 so this is slightly out of date! Great minds think alike? You can learn more about their decisions here! https://github.com/semaphore-protocol/research
> 
> I think this overview is still educational, but I will publish an updated version later.

Semaphore is a ZK tool [invented](https://github.com/barryWhiteHat/semaphore) and built by [[PSE]], hosted at https://semaphore.pse.dev. Semaphore combines many of the simplest and most powerful ZK primitives into a single tool. It is the core tech behind many projects I've worked on, like [[heyanon!]], [[In-person heyanon]], [[heyauthn!]], [Zupass](https://zupass.org), and [Zupoll](https://zupoll.org). 

It is designed to be computationally inexpensive, and can be run on basically all modern mobile devices and laptops in a few seconds. I would argue it is (at the time of this post's writing) the most useful and successful consumer ZK infrastructure.

For any folks getting into ZK, non-technical or technical, understanding Semaphore deeply is one of the best ways to get started! This post breaks Semaphore down into 3 (opinionated) gadgets that can be understood and used separately. The main pre-requisite is a high-level understanding of hash functions. It will also help if you're familiar with signatures and public/private key pairs, as used in Ethereum.

## Gadgets
This section will alternate between Semaphore terminology, and personal terminology that I think is less confusing and more concise. The diagram below most succinctly explains all Semaphore terminology, which you should hopefully understand by the end of this post! I was first shown this diagram by [cedoor](https://github.com/cedoor), one of the lead devs of Semaphore, at DevConnect Amsterdam in April 2022. Thank you to him for first explaining Semaphore to me!

![scheme.png](https://raw.githubusercontent.com/semaphore-protocol/semaphore/8cf04ddb98e6840ad4643b73edffeb557c66118c/packages/circuits/scheme.png)


I am in favor of breaking Semaphore up into 3 gadgets, which can be linked easily but also used separately in different apps that don't need all of Semaphore. I re-use this API and set the hash function to be SHA-256 in my proposal for [[SHAmaphore]]. I also use proof notation introduced in my short [[zkSNARKs]] writeup.

### `HashSignature`
The first and perhaps most powerful gadget within Semaphore is to build a signature algorithm out of just hash functions and ZKPs.

```
proof SemaphoreHashSignature:
	public:
		int identityCommitment
		int signal
	private:
		int identityNullifier
		int identityTrapdoor
	checks:
		secret == poseidon(
			identityNullifier,
			identityTrapdoor
		)
		identityCommitment == poseidon(
			secret
		)
```

What is Poseidon? It is a [ZK-friendly hash function](https://www.poseidon-hash.info/). This means it is less computationally expensive to prove statements about Poseidon hashes than about standard hash functions. I think we will do away with this notion of "ZK-friendly hash functions" in 2024 and onwards with innovations like [[Binius]]. But Poseidon is the best we've had so far, and current Semaphore uses it.

Despite using Semaphore in many different projects, I'm not quite sure what this intermediate `secret` accomplishes. I think there's some connections to RLN, which only uses the identityNullifier. But I am unsure, and no Semaphore doc I've found explains this. I also am not sure why we need an `identityTrapdoor`, and I also have found no docs that explain this.

Thankfully, we can get much of the same value with a much simpler API:
```
proof HashSignature:
	public:
		int publicKey
		int messageHash
	private:
		int password
	checks:
		publicKey == hash(password)
```

It's worth noting that for security, the password here should be randomly generated and stored by a password manager or something like [WebAuthn PRF](https://github.com/w3c/webauthn/wiki/Explainer:-PRF-extension). But this is basically all you need for a signature algorithm, which proves that you know some private info linked to a public key, and attest to the hash of some message. This proof does all of those things! Even though we're making no checks about the messageHash, the proof made from attaching it here as a public input would only verify if we also know the `password` that hashes to the `publicKey`.

### `AnonSignIn`
One way I love to think about Semaphore is that it moves traditional Web2 password-based auth entirely into the user's hands.

When you enter your password into a website with HTTPS, that password is sent through an encrypted channel with the website's server. However, this password is never stored on the server! Instead the hash of the password is stored, which means hackers can't figure out your password if they ever get into the server. So when the server receives your password, they hash it, and then look that up against their storage in order to log you in.[^a]

In Semaphore however, you're basically sent the entire list of hashed passwords, and told to make a proof that you're in that list without revealing which one! You can do this trivially by just proving it's one element in the list without revealing the element, or you can do this more efficiently with a `hashMerkleCheck`. We skip explanation of that for now, but you can refer to [this post](https://decentralizedthoughts.github.io/2020-12-22-what-is-a-merkle-tree/) from Alin Tomescu to understand more! Just know that it verifies a string is a member of a list efficiently.

Here's that API in the language of Semaphore:

```
proof SemaphoreAnonSignIn:
	public:
		int root
	private:
		int identityNullifier
		int identityTrapdoor
		int treeSiblings
		int treePathIndices
	checks:
		secret == poseidon(
			identityNullifier,
			identityTrapdoor
		)
		identityCommitment == poseidon(
			secret
		)
		root == poseidonMerkleCheck(
			leaf=identityCommitment,
			siblings=treeSiblings,
			pathIndices=treePathIndices
		)
```


Let's clean this up, and rename some things:
```
proof AnonSignIn:
	public:
		int groupMerkleRoot
	private:
		int password
		int siblings
		int pathIndices
	checks:
		publicKey == hash(password)
		groupMerkleRoot == hashMerkleCheck(
			leaf=publicKey,
			siblings,
			pathIndices
		)
```

It's basically a combination of the `HashSignature` gadget with this "element in a list" check performed by the `hashMerkleCheck`. However, we don't reveal our `publicKey`, which means this is fully anonymous! Magical!

### `Plume`

The other main superpower of Semaphore is to generate a unique and unlinkable second identity from your private key while proving membership in a specific group. This is what I term a `plume`, after the French expression `nom de plume`.[^b]

This is equivalent to the `nullifierHash` used in Semaphore, but with less confusing names. Here's what that API looks like with the terminology of Semaphore:

```
proof SemaphorePlume:
	public:
		int externalNullifier
		int nullifierHash
	private:
		int identityNullifier
	checks:
		nullifierHash == poseidon(
			identityNullifier,
			externalNullifier
		)
```

One strange thing here is you only use the `identityNullifier` and not also the `identityTrapdoor` which forms your overall private key in `AnonSignIn` and `HashSignature`. Why? I have no idea LOL. There's also 3 different words that all include "nullifier", and it's totally unclear why each is called each.

I propose renaming each of these as:
```
proof Plume:
	public:
		int groupId
		int plume
	private:
		int password
	checks:
		plume == hash(
			password,
			groupId
		)
```

This makes it more clear that the plume is a secondary identity, linked to whatever group you're participating in. It also means it's impossible to link a user's publicKey (`hash(password)`) to this plume, as including the groupId in the hash will totally scramble the output!

## Connecting them
`HashSignature` and `AnonSignIn` are already highly useful gadgets on their own. However, a `Plume` proof is not useful unless we know something else about the user with a specific `plume`; otherwise it's just some anonymous identity.

However, if you link a plume with an `AnonSignIn`, you can create an anonymous identity that's 1-1 linked with a member in a specific group. This is super useful for voting, where you can ensure each member votes once without revealing who you are. I explored this in [Zupoll](https://zupoll.org), a project I built for Zuzalu Montenegro 2023!

This is also very useful for private speech, as it gives you a verifiable anonymous identity within a group that you can accrue reputation to. If you have no consistent identity and are just posting as some anonymous member, it's very easy for people to start saying horrific things without any accountability and bring the overall reputation of the group down. I explored this in [[In-person heyanon]] at SBC 2022!

## Conclusion
That's it, that's Semaphore! The largest group of people using Semaphore is by far [Worldcoin](https://worldcoin.org), which has 3.3 million members at the time of this post's writing. If you code or design, the [docs](https://semaphore.pse.dev/learn) are super easy to read and there's tons of [example apps](https://semaphore.pse.dev/projects) to get inspiration from. Go out there and cook!


[^a]: There's also a notion of a cryptographic [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)) that is included in the hash to prevent hackers from creating huge precomputed list of hashes called [rainbow tables](https://en.wikipedia.org/wiki/Rainbow_table). We skip that detail in this explanation, but it is very important when building password logins, as users tend to use the same few passwords over and over again!
[^b]: This is also the name used by a similar project for ETH wallets built by [[yush]] that you can find [here](https://github.com/plume-sig/zk-nullifier-sig/tree/main). I came up with the name, while [Chance](https://github.com/vimwitch) from PSE came up with the backronym: "Privately Linked Unique Message Entities"!