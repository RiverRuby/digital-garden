---
tags:
  - projects
---

This a curated list of projects I no longer work on that I am proud of and/or display my research and product interests. A less curated but more complete list can be found here: [[All past projects]]

### 2023

> August '23 to January '24: [[Jubmoji]]
- Funded by [[PSE]], project & design led by Rachel, technology led by me
- 2023 activation at Zu/Devconnect using NFC cards that produce unique [[Baby jubjub]] [[signatures]] upon tap
- Privately digitize [[In-person cryptography]] experiences into [[VIP]] data

> **April '23 to July '23**: [[ZuStamps]]
- Funded by [[0xPARC]], led by me and collaborated with Rachel & Althea
- Part of a long line of [[In-person cryptography]] projects I have done
- First deployment of signature-producing NFC chips for ZK applications
- Featured on [[Vitalik]]'s blog [here](https://vitalik.eth.limo/general/2023/06/09/three_transitions.html#:~:text=But%20the%20Zupass%20system%20also%20began%20to%20have%20other%20apps%20built%20on%20top)

> **September '22 to February '23**: [[WebAuthn]] and ZK research
- Funded by [[Personae Labs]], led by me and collaborated with Aayush and Richard
- Culminated in [[heyauthn!]]
	- Demo using WebAuthn/Passkeys to power [[Semaphore]] identities
	- Later upstreamed to [main Semaphore repo](https://github.com/semaphore-protocol/semaphore/tree/main/packages/heyauthn) by Richard!
	- Used NFC [[CMAC chips]] to create Semaphore groups, first documented use of NFC for ZK
	- Posted to a ZK IAP class Discord channel
- Supported work to create ZK circuits to prove knowledge of [valid WebAuthn signature](https://github.com/zkwebauthn/webauthn-halo2)

### 2022

> **August '22 to January '23**: Speeding up client-side zk-ECDSA
- Funded by [[Personae Labs]], collaborated with Dan Tehrani
- Culminated in [spartan-ecdsa](https://personaelabs.org/posts/spartan-ecdsa/), developed after I learned about the secp-secq cycle
- I focused on [Halo2-IPA combined with ECFFT](https://github.com/personaelabs/halo2-secp), unfortunately this was quite difficult and Dan's work with Spartan ended up being successful
- [[efficient-ecdsa]] research and implementation in [heyanoun](https://github.com/personaelabs/heyanoun)

> **March '22 to November '22**: [[heyanon!]]
- Funded by [[0xPARC]] and [[Personae Labs]], collaborated with Lakshman Sankar
- Anon twitter posting with ETH reputation
- ECDSA proving was way too slow for this to be useful/fun, I was laser focused on improving that in later projects

### 2021 and before

>  **September '20 to June '21**: Adversarial learning & image model research
- Researcher in [Madry Lab](https://madrylab.mit.edu/), initially investigating adversarial learning as an ML application of my cryptography/security interests
- Researched effect of "hidden augmentations" to learning models on ImageNet performance compared to actual architectural differences
- Researched sample complexity of OOD performance for SoTA ImageNet models, as a follow-up to ["Do Adversarially Robust ImageNet Models Transfer Better?"](https://arxiv.org/pdf/2007.08489.pdf)

 > **December '18 to April '19**: Blockchain quantitative research
- Job at a (now defunct, lol) crypto hedge fund called Virgil Capital
- Researched underlying cryptoeconomics of prominent DeFi platforms like MakerDAO and Compound to develop trading strategies

> **January '17 to August '18**: [Authenticated data structures research](https://eprint.iacr.org/2018/721)
- Member of [Devadas Lab](https://people.csail.mit.edu/devadas/) at MIT, advised by [Alin Tomescu](https://alinush.github.io/)
- Researched and developed efficient append-only authenticated dictionaries, published in [ACM CCS '19](https://dl.acm.org/doi/10.1145/3319535.3345652)
- Applications to certificate authorities and public-key directories
- Clever combination of KZG polynomial commitments and binary tree structures