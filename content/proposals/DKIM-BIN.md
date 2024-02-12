---
draft: false
tags: []
---
🚧 This is a work-in-progress 🚧

DKIM-BIN is a technical architecture that I believe is one of the best plays at importing useful private data for average people make proofs about. It would leverage [zk-email](https://github.com/zkemail/zk-email-verify) tooling to privately and automatically parse incoming emails of any useful proofs. It would not look like an inbox however, but closer to an automatic sorter and compiler of useful data.

## Motivations

### UX of zk-email is poor
Right now, the UX of extracting the DKIM signatures present in your email is a multi-step, confusing process that will be too difficult for average users to go through each time they want to use their emails as reputation. Here's an analysis of other existing zk-email apps:
- [Email wallet](https://emailwallet.org/) doesn't deal with this since the relayer can automatically handle the DKIM parsing
	- In that sense, the email wallet relayer is the first real implementation of a DKIM-BIN system
- [[ZKP2P]] onboarding is unfortunately pretty poor unless you're okay with them reading all of your emails (suboptimal)

### Improvements in zk-SHA

A key advance we will need to power large zk-email proofs on the client (which is where this will need to happen to maintain privacy, unless FHE-ZK pops off) is [[Binius]] and binary-field SNARKs. This is because the primary operation we will need to prove in ZK is repeated SHA-256 hashes.

