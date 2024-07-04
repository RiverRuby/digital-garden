---
tags:
  - projects
---

This is a fairly complete record of my technical projects that are relevant to current lines of work.

## 2024
- **(03/24 to 06/24)** [Signature Singularity Residency](https://sigsing.com) Organizer
	- Alongside [[yush]], organized a residency bringing teams taking **useful signed data** and **wrapping it in ZK proofs** for succinctness (on-chain use cases), ownership (raw signature never revealed to server), and selective disclosure (only revealing relevant info)
	- Supported primarily by [PSE](https://pse.dev)
	- Demo day here: https://demo.sigsing.com, and full list of projects here: https://lu.ma/k4t26qch

- **(03/24 to 04/24)** [ZK Summit NFC app](https://github.com/cursive-team/zk-summit)
	- Tech showcase of cutting edge cryptography for all 500 attendees of ZKSummit11 in Athens
	- Made NFC cards for all attendees and talks to verifiably prove meeting and attendance
	- Allowed attendees to perform a private set intersection with each other to see common contacts/talks using a combination of [2PC+FHE](https://github.com/cursive-team/2P-PSI)
	- Allowed users to use **Nova folding proofs** to get a succinct summary of their entire conference experience
	- Allowed users to make ZKP proofs of deep engagement (meeting speakers, attending talks) to share on Twitter

- **(01/24 to 03/24)** [[Denver ZK Quests]]
	- Launched an NFC activation for ETHDenver attendees by chipping all entrance badges
	- Experience focused on loyalty/engagement -- rewarding participants who could make ZKPs of deeper engagement with certain brands or events with better prizes 
	- ZKPs were wrapped as "quests" that attendees could finish
	- Gave out 12,000 badges for 50,000 total taps and 3,000 quests finished

## 2023
- (**08/23 to 01/24**) [[Jubmoji]] 
	- Funded by [[PSE]], project & design led by Rachel, technology led by me
	- 2023 activation at Zu/Devconnect using NFC cards that produce unique [[Baby jubjub]] [[signatures]] upon tap
	- Privately digitize [[In-person cryptography]] experiences into [[VIP]] data

- (**06/23 to 08/23**) [[Project Vinyl]]
	- Independent exploration into continuations of NFC projects
	- Ideas were converted into the [[Jubmoji grant proposal]] [[PSE]] grant proposal!
	
- **(05/23 to 06/23)** [[ZuStamps]]
	- Funded by [[0xPARC]], led by me and collaborated with Rachel & Althea
	- First deployment of signature-producing NFC chips for ZK applications
	
- **(04/23 to 05/23)** [Zupoll](https://zupoll.org)
	- Funded by [[0xPARC]], collaborated with Sampriti
	- [Developed a polling app](https://github.com/proofcarryingdata/zupoll) built on Semaphore for Zuzalu citizens to use for polls
	- Don't think the privacy benefits outweigh the UX costs unfortunately
	
- (**02/23 to 04/23**) [Zupass](https://github.com/proofcarryingdata/zupass) and PCD SDK
	- Funded by [[0xPARC]], led by Brian and collaborated with Ivan & DC
	- One of three full-time developers on the (cracked) Zupass team
	
- (**02/23 to 04/23**) [[WebAuthn]] Halo2 ZK wrapper
	- Funded by [[0xPARC]]/[[PSE]], project led by Richard and proposed/supported by me
	- Creating [ZK circuits](https://github.com/zkwebauthn/webauthn-halo2) to prove knowledge of a valid WebAuthn signature
	- Applied for use in an [AA wallet](https://www.noseedphrases.xyz/) by [Know Nothing Labs](https://www.knownothinglabs.xyz/)
	- Researched if WebAuthn keys could be a reasonable nullifier; the guarantees are not very strong unfortunately

- (**01/23 to 03/23**) [Nozee](https://nozee.xyz), or ZK-Blind
	- Collaborated with Emma, Sehyun, [[yush]]
	- Using zk-[[JWT]] to build an anonymous proof of organization
	- Built on top of [[zk-email]]
	
- (**11/22 to 02/23**) [[heyauthn!]]
	- Funded by [[Personae Labs]], collaborated with Sehyun and Emma
	- Demo using [[WebAuthn]] to power [[Semaphore]] identities
		- Later upstreamed to [main Semaphore repo](https://github.com/semaphore-protocol/semaphore/tree/main/packages/heyauthn) by Richard!
	- Used NFC [[CMAC chips]] to create Semaphore groups, first documented use of NFC for ZK
	- Posted to a ZK IAP class Discord channel
	
- (**01/23 to 02/23**) MIT [ZK IAP](https://zkiap.com) instructor and TA
	- Funded by [[0xPARC]]
	- Lecturer for Session 4 and partial lecturer for Session 11
	- TA for office hours and mentored a few end-of-course projects

## 2022
- **(11/22 to 01/23)** [Right-field secp256k1 ECDSA research](https://personaelabs.org/posts/spartan-ecdsa/)
  - Funded by [[Personae Labs]], collaborated with Dan Tehrani
  - Iteration of work started with [[efficient-ecdsa]]
  - Avoiding wrong-field arithmetic all together by using a zkSNARK that operates on finite fields that aren't FFT friendly
  - Focused on [Halo2-IPA combined with ECFFT](https://github.com/personaelabs/halo2-secp), unfortunately this was quite difficult and Dan's work with Spartan ended up being successful
  
- **(09/22 to 11/22)** [[efficient-ecdsa]]
  - Funded by [[Personae Labs]], collaborated with Dan Tehrani
  - Developed in an [ETH research post](https://ethresear.ch/t/efficient-ecdsa-signature-verification-using-circom/13629)
  
- **(08/22 to 10/22)** [[In-person heyanon]]
  - Funded by [[0xPARC]] and [[Personae Labs]]
  - Used heyanon to build a demo of in-person anonymous speech at SBC '22
  - Used [[Semaphore]] identities, given out as QR codes
  - First ZK demo to involve multiple roles which I find 
  
- **(03/22 to 11/22)** [[heyanon!]]
  - Funded by [[0xPARC]] and [[Personae Labs]], collaborated with Lakshman Sankar
  - Anon twitter posting with ETH reputation
  - ECDSA proving was way too slow for this to be useful/fun, I was laser focused on improving that in later projects

## 2021
- (**09/20 to 06/21**) Adversarial learning & image model research
	- Researcher in Madry Lab, initially investigating adversarial learning as an ML application of my cryptography/security interests
	- Researched effect of "hidden augmentations" to learning models on ImageNet performance compared to actual architectural differences
	- Researched sample complexity of OOD performance for SoTA ImageNet models, as a follow-up to ["Do Adversarially Robust ImageNet Models Transfer Better?"](https://arxiv.org/pdf/2007.08489.pdf)
	- Got sniped or had inconclusive results on all explorations 😅

## 2020
2020 was a year of creative self-exploration. Lifelong interests in music, fashion, and decor intensified this year as I figured out more about what made me Vivek. No significant technical projects, except for aforementioned image model research.

## 2019 and before
- (**12/18 to 04/19**) Cryptography Quant Research
	- Job at a (now defunct, lol) crypto hedge fund called Virgil Capital
	- Researched underlying cryptoeconomics of prominent DeFi platforms like MakerDAO and Compound to develop trading strategies
	
- **(01/17 to 08/18)** [Authenticated data structures research](https://eprint.iacr.org/2018/721) with MIT PRIMES
	- Member of Devadas Lab at MIT, advised by Alin Tomescu
	- Researched and developed efficient append-only authenticated dictionaries, published in [ACM CCS '19](https://dl.acm.org/doi/10.1145/3319535.3345652)
	- Applications to certificate authorities and public-key directories
	- Clever combination of KZG polynomial commitments and binary tree structures
	
- (**01/16 to 12/16**) [Consensus research](https://math.mit.edu/research/highschool/primes/materials/2016/Bhupatiraju-Kuszmaul-Vale.pdf) with MIT PRIMES
	- Member of Devadas Lab at MIT, advised by Albert Kwon and Ling Ren
	- Investigated the viability of distributed consensus using a Proof of Space protocol that merged [graph pebbling](https://en.wikipedia.org/wiki/Graph_pebblinghttps://en.wikipedia.org/wiki/Graph_pebbling) with [merkle trees](https://en.wikipedia.org/wiki/Merkle_tree)
	- Alternative to expensive Proof of Work protocols used in products like Bitcoin

I found out about MIT PRIMES (and math, and CS, and MIT, and basically everything on this blog) through my older brother [[Surya]], who was in the very first cohort back in 2011 and did abstract algebra research!