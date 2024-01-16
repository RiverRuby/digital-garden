🚧 This is a work-in-progress 🚧

A combined signature, anon sign-in, and pseudonym protocol that is newly enabled by binary-field systems like [[Binius]]. This reuses the primary components of [[Semaphore]], the first useful consumer ZK tool, but replaces the need for Poseidon with battle-tested and beloved SHA-256. The entire proving process is also done via SHA-256, making this highly client-friendly.

## Simplified API

I personally view Semaphore as it breaks down into 3 different gadgets -- `HashSignature`, `AnonSignIn`, and `Plume` -- which I introduce in my [[Semaphore]] explainer. The definition of SHAmaphore is based on the same gadgets, but the hash function is specified to always be SHA-256. This uses pseudocode defined in [[zkSNARKs]].

```
proof HashSignature:
	public:
		int publicKey
		int messageHash
	private:
		int password
	checks:
		publicKey === sha(password)
```

```
proof AnonSignIn:
	public:
		int groupMerkleRoot
	private:
		int password
		int siblings
		int pathIndices
	checks:
		int publicKey === sha(password)
		root === shaMerkleCheck(
			leaf=publicKey,
			siblings,
			pathIndices
		)
```

```
proof Plume:
	public:
		int groupId
		int plume
	private:
		int password
	checks:
		plume === sha(
			password,
			groupId
		)
```

