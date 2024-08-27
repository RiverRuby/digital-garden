---
date: 2024-08-26
---
This is a list of hot takes that I will update over time as I gain more information. Some will be spicier than others. Most will be correct. I hope.

All past versions will be public on the [GitHub hosting this website](https://github.com/RiverRuby/wiki) to see how accurate I am and also hopefully for some legendary "I told you so!" moments on Twitter in like 5 years.

## Cryptography

Most of my takes will be focused on consumer uses of [[CG]], which is where most of my product thinking resides. There will be occasional focus on enterprise or blockchain uses of [[CG]] as well.

### General

**Full VM-level programmability is overrated.**  There's too much of an overhead in performance, and 80% of applications can be built with circuit-level programming.
- The most interesting uses of progcrypto are wrapping cryptography inside of cryptography
	- ZKEmail: wrapping RSA DKIM signatures inside of zkSNARKs
	- TLSNotary: wrapping TLS inside of 2PC
- Most of these primitives can be built 
- There's a great argument for cryptoVMs around auditablity + maintainabilty, especially with evolving systems like zkEVMs, but many cryptosystems are more static than that

**One of the highest-leverage and under-explored path for more cryptography adoption is using signatures as anti-monopoly tools**.
- [[Interoperability regulation to break Big Tech]]

### ZK-related

**In consumer settings, zkSNARKs only provide privacy-preserving access control and accountability.**
- Access control: selectively reveal parts of your personal information to prove you pass some "threshold" to get privileged access
- Accountability: prove a specific model or computation ran (but anything sufficiently complicated will get done by [[Trusted execution]] environments)

**In consumer settings, signatures are the game-changer, not zkSNARKs**. Signatures get 80% of the job done, and programmable claims like "salary > $X" are not useful in most cases.
- My intuition says most situations need verifiability more than privacy, and many financial opportunities need exact numbers of your salary/credit/health details to make the best deals

[[Stop making identity wallets, we already have emails!]]
- Our email inboxes are the best identity wallets we currently have

### MPC-related

**In consumer settings, 2PC will cover 80% of interesting use cases.** 
- 2PC is a much easier trust model + computation model to reason about
- For any more parties than 2, it will be much easier to do the 3PC + TEE solution detailed below
- Credit to [[Barry WhiteHat]]'s "2PC is for Lovers" [talk](https://www.youtube.com/watch?v=PzcDqegGoKI) for inspiring these realizations
- Secret sharing and garbled circuits perform much better in 2-party setting

**Most use cases of private server computation will be done in a 3PC kept within [[Trusted execution]] environments, not N-party computes** (where the parties are either servers or users)
- 3-party secret sharing MPC inside of TEEs is a remarkably strong model for privacy, and is already a very challenging systems problem to accomplish
	- See Signal's work distributed systems work here involving backups of decryption keys in case users lose theirs: https://www.usenix.org/conference/osdi24/presentation/connell
			- Split across AWS, GCP, and Azure hardware enclaves
- UX and DevX of larger MPC splits is too costly to make sense
	- Even with multi-party FHE, there are large key uploads and (currently) interactive decryption processes
- Thresholds are a promising solution, but make the trust model much more difficult as a malicious decryption can't be detected and might not involve you

### FHE-related

**In consumer settings, multi-party FHE is significantly more useful and interesting than single-party FHE.** 
- Having private computation done on private data seems only useful for highly-sensitive things like medical data, where the algorithms can't just be sent to you to run locally for proprietary reasons

**In enterprise settings, single-party FHE will be a frequently used alternative to storing consumer data on clouds or in hardware enclaves.**
- As the AI race grows, companies will be pushed to use more and more of their available data to train models
- We may have to grow less trustful of our cloud providers over time?