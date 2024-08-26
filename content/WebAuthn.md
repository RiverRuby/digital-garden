---
date: 2024-02-12
tags:
  - software
---

WebAuthn is a browser-native public key cryptography layer. I first learned about WebAuthn from [[Ludens]] in the 0xPARC discord here:

![[Pasted image 20240111020759.png]]

Justin ahead of the curve as always. I've been doing deep dives into WebAuthn's applications to ZK and cryptography in general since then, and I have been able to advance the state of the art in a number of places!

My first e2e project with WebAuthn was [[heyauthn!]] This used parts of the WebAuthn protocol to generate/store/persist a Semaphore identity safely for use in anonymous ZK applications.

I am super excited about its applications to:

- Passkeys
	- Giving everyone public keys everywhere!

- [Semaphore](https://github.com/semaphore-protocol/semaphore/tree/main/packages/heyauthn)
	- Using WebAuthn to store semaphore identities for easier access to ZK applications
	- Security is equivalent to guessing a UUID, which should be secure enough for initial applications until better support
	- Can make much better with PRF

- [[The Wonders of WebAuthn PRF]]
	- The upcoming PRF extension can power so many cool things!
