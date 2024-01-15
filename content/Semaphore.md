🚧 This is a work-in-progress post. All the core content is finished but I need to get some questions answer and clean up the flow. 🚧

Semaphore is a ZK gadget [invented](https://github.com/barryWhiteHat/semaphore) and built by [[PSE]], hosted at https://semaphore.pse.dev. It is a core tool behind many projects I've worked on, like [[heyanon!]], [[In-person heyanon]], [[heyauthn!]], [Zupass](https://zupass.org), and [Zupoll](https://zupoll.org).

## Gadgets
Semaphore takes many of the simplest and most powerful ZK tricks and combines them into one proof. This diagram most succinctly explains Semaphore. I first was shown this from [cedoor](https://github.com/cedoor) at DevConnect Amsterdam in April 2022, thank you to him for first explaining me the protocol!

![scheme.png](https://github.com/semaphore-protocol/semaphore/blob/main/packages/circuits/scheme.png?raw=true)


I am in favor of breaking Semaphore up into 3 gadgets, which could be linked very easily but also used separately in different apps that don't need all of Semaphore. The following sections will break these gadgets up using the same terminology and private key structure that Semaphore does. I also introduce a simplified API using new terms. I re-use this API and set the hash function to be SHA-256 in my proposal for [[SHAmaphore]].

### `HashSignature`
The first and perhaps most powerful gadget within Semaphore is to build a signature algorithm out of just a hash function and ZKPs. 

```
proof SemaphoreHashSignature:
	public:
		int identityCommitment
		int signal
	private:
		int identityNullifier
		int identityTrapdoor
	checks:
		secret === poseidon(
			identityNullifier,
			identityTrapdoor
		)
		identityCommitment === poseidon(
			secret
		)
```

Note that we use Poseidon here because the checks we have need to be done in ZK, and we need ZK-friendly hash functions for this to be doable on client devices. I have no idea what this intermediate `secret` variable accomplishes?

A much more simplified API when we use standard hash functions is:
```
proof HashSignature:
	public:
		int publicKey
		int messageHash
	private:
		int password
	checks:
		publicKey === hash(password)
```

### `AnonSignIn`

One way I love to think about Semaphore is that it takes traditional Web2 password-based auth, and moves that auth check entirely into the user's hands.

When you enter your password into a website, that password is sent through an encrypted channel with the website's server (given you're using HTTPS) and is hashed along with a salt and compared against the saved hash that is linked to your username. If they are equal, you are logged-in (and usually sent a [[JWT]] to cache that log-in check) and you're ready to go!

On the other hand, in Semaphore, you're basically sent the entire list of hashed passwords, and told to make a proof that you're in that list without revealing which one! Via the Merkle tree lookup! Thus, we can break the Merkle tree lookup argument into what is essentially an anonymous, client-side sign-in proof. 

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
		secret === poseidon(
			identityNullifier,
			identityTrapdoor
		)
		identityCommitment === poseidon(
			secret
		)
		root === poseidonMerkleCheck(
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
		publicKey === hash(password)
		groupMerkleRoot === hashMerkleCheck(
			leaf=publicKey,
			siblings,
			pathIndices
		)
```


### `Plume`

The other superpower of Semaphore is to generate a unique and unlinkable second identity from your private key while proving membership in a specific group. This is what I term a `plume`, after the French expression `nom de plume`.

This is equivalent to the `nullifierHash` used in Semaphore, but with less confusing names. Here's what that API looks like with the terminology of Semaphore:

```
proof SemaphorePlume:
	public:
		int externalNullifier
		int nullifierHash
	private:
		int identityNullifier
	checks:
		nullifierHash === poseidon(
			identityNullifier,
			externalNullifier
		)
```

One strange thing here is you only use the `identityNullifier` and not also the `identityTrapdoor` which forms your overall private key in `AnonSignIn` and `HashSignature`. Why? I have no idea LOL. There's also 3 different words all with nullifier, and it's totally unclear why each is called each.

I propose renaming each of these as:
```
proof Plume:
	public:
		int groupId
		int plume
	private:
		int password
	checks:
		plume === hash(
			password,
			groupId
		)
```

This makes it more clear that the plume is a secondary identity based on whatever group they're participating.

## Connecting them
These gadgets are not necessarily powerful on their own. For example, a `Plume` proof is not useful unless we know something about the user with a specific `password`. The easiest way to get some reputation there is to link the `Plume` proof with an `AnonSignIn` proof. This enables private speech and also private voting, if the message you send is a vote in some poll (cc [Zupoll](https://zupoll.org)).