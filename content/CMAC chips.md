---
date: 2024-02-12
tags:
  - hardware
---
## How are they defined?
- The [NTAG424](https://nfcdeveloper.com/blog/2021/12/01/how-does-dynamic-url-work.html) that produces a CMAC (Cipher-based Message Authentication Code) which cost about $0.50 per chip
- CMACs are based on block ciphers like AES
    - There is a shared secret key on the chip and on the verification server that can verify authenticity of data
- Data included: **UID of the chip** + **incrementing counter**
- Similar to digital signatures, but cannot be verified against a public key
- As a result, they are somewhat “dead” — their validity can only be checked with a centralized server, if that goes down or stops getting maintained the chip is useless

## Where to get them?
I have primarily sourced CMAC chips and related software to use them from my friends at [IYK](https://iyk.app)! They are also cheaply available for mass purchase on sites like Amazon and Alibaba.