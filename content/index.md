---
title: Welcome!
---
My name is [[River Ruby]] or [[🔺]] for short. This digital garden contains my thoughts on technology, primarily those concerning [[cryptography]] and [[autonomous worlds]]. I will occasionally write about other topics, so stay tuned!

Everything in this garden is a work-in-progress, and very open to feedback! I will occasionally publish specific pieces, but expect those pieces to be changed over time as I learn more. And there will certainly be pages that are incomplete or just have a sentence that ends abruptly -- I get distracted easily and hop around many pages when I write. If you want to discuss something further or suggest a correction, please email me@riverruby.xyz and I would love to chat or

I am on a mission to never lose touch with my [[inner child]]. I am a huge nerd and easily excitable. My favorite activity is to listen to other nerds nerd out about random shit they love. Doesn't have to be anything I know about, I just feed off of genuine passion. If that resonates, reach out! Let's be nerds together.

## Projects

### In-flight

- (**12/23 to present**) [[ZK Quests]] and [[jubsignal]]
	- Funded by PSE
	- 2024 activation at ETHDenver using e2e encrypted baby jubjub signatures
	- Uses NFC cards to share an ECDH public key to send encrypted

- **(07/23 to present)** [[Data guilds]]
	- Using ZK to take back data ownership & ad revenue in a privacy-preserving and public goods-oriented way
	- Looking for collaborators and aligned funding!
	- Joint work with [[yush]] and Lily Jordan

### Proposals

- [[DKIM-BIN]]
	- Expanding zk-email into a more substantial identity platform
	- In my eyes, zk-email is the best capture mechanism we have of existing reputation (for now)
	- Will likely require use of [[Binius]] or other binary-field SNARKs for large zk-SHA proofs that will be necessary to mask/reveal data

- [[SXG]] proofs & lobbying
	- This website signs all of its data with SXG!
	- I want to make proofs about what River says on other parts of the web!
	- And then let's do it for your website (and Medium, Substack, Mirror, and all major media sites...once we lobby them all to also add SXG!)
	- I think SHA is becoming ZK-friendly with [[Binius]] and follow-up works, so we should be able to make these proofs efficiently!
	  
- SHAmaphore
	- Application of [[Binius]]
	- Using SHA256 + Semaphore as a signature algorithm
		- Personally I am a SHA256 fan
		- Not sure why
	- Quantum resistant, using standard hash functions, recursion friendly, hell yes
	- Good bye Poseidon!!
	  
- ZK extension to This Cursed Machine
	- Users can create "secret materials" by uploading a hash of a material/machine path
	- Users can unlock secret material by ZK proving knowledge of the path's pre-image

### Past

- **(08/23 to present)** [[Jubmoji]]
	- Funded by PSE, project & design led by Rachel, technology led by me
	- 2023 activation at Zu/Devconnect using NFC cards that produce unique baby jubjub signatures upon tap to privately digitize in-person experiences
	- Signatures were represented as "jubmojis"
		- Jub = baby jubjub elliptic curve (the main advancement this project made, and a shoutout to PSE team lead Barry)
		- Emoji = succinct representation of card public key, akin to ENS for ethereum address
	- Developed a "quests" feature where users could make proofs about their collection of "jubmojis"
	- Unlocked "powers" upon completing quests
		- Event tickets, access to group chats, in-person prizes if redeemed
	
- (**06/23 to 08/23**) [[Project Vinyl]]
	- Independent exploration into continuations of NFC projects
	- Ideas were converted into the [[Jubmoji]] PSE grant proposal!
	
- **(05/23 to 06/23)** [[ZuStamps]]
	- Funded by 0xPARC, project led by me
	- First deployment of NFC chips
	
- **(04/23 to 05/23)** [Zupoll](https://zupoll.org)
	- Funded by 0xPARC, collaborated with Sampriti
	- [Developed a polling app](https://github.com/proofcarryingdata/zupoll) built on Semaphore for Zuzalu citizens to use for polls
	- Don't think the privacy benefits outweigh the UX costs unfortunately
	
- (**02/23 to 04/23**) [Zupass](https://github.com/proofcarryingdata/zupass) and PCD SDK
	- Funded by 0xPARC, led by Brian and working with Ivan & DC
	- One of three full-time developers on the (cracked) Zupass team
	
- (**02/23 to 04/23**) [[WebAuthn]] Halo2 ZK wrapper
	- Funded by 0xPARC/PSE, project led by Richard and proposed/supported by me
	- Creating [ZK circuits](https://github.com/zkwebauthn/webauthn-halo2) to prove knowledge of a valid WebAuthn signature
	- Applied for use in an [AA wallet](https://www.noseedphrases.xyz/) by [Know Nothing Labs](https://www.knownothinglabs.xyz/)
	- Researched if WebAuthn keys could be a reasonable nullifier; the guarantees are not very strong unfortunately
	
- (**11/22 to 02/23**) [[heyauthn!]]
	- Demo using [[WebAuthn]] to power Semaphore identities
	- Also used NFC chips to create Semaphore groups, first documented use of NFC for ZK
	- Posted to a ZK IAP class Discord channel
	
- (**01/23 to 02/23**) MIT [ZK IAP](https://zkiap.com) instructor and TA
	- Funded by 0xPARC
	- Lecturer for Session 4 and partial lecturer for Session 11
	- TA for office hours and mentored a few end-of-course projects

Earlier work can be found here: [[Projects before 2022]]

