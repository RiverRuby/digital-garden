---
date: 2024-01-16
---

🚧 This is a work in progress 🚧

[[WebAuthn]] is in the progress of adding a [PRF extension](https://w3c.github.io/webauthn/#prf-extension) to its standard, which in my opinion opens up a huge new design space for applications to explore.

## Encrypting data
Bygone are the days of master passwords, and maybe of ever putting plaintext personal data onto different website's DBs. All we need is FaceID baby!

This is best explained in Matt's article here: https://blog.millerti.me/2023/01/22/encrypting-data-in-the-browser-using-webauthn/. Matt is a badass, his [SimpleWebAuthn](https://simplewebauthn.dev/) library is (in my experience) the easiest developer experience for WebAuthn integration!

It's also worth noting that password managers have taken notice and are looking to integrate this into their setups to be even more secure! You can see interest from 1Password (and me lol) in this [thread](https://groups.google.com/a/chromium.org/g/blink-dev/c/iTNOgLwD2bI/m/lhOBx7_CCAAJ) as well as a writeup from Bitwarden [here](https://bitwarden.com/blog/prf-webauthn-and-its-role-in-passkeys/).

What do we gain here? For software companies (which will definitely be the driving force here, unless legislation catches up), **compliance** becomes far easier. If all the data they keep is encrypted by client-stored encryption keys, the company and any malicious attackers are very limited in their capabilities.

## Broader key management
We are no longer tied to the P-256 ECDSA standard that WebAuthn/Passkeys use. We can use different curves like secp256k1 that Ethereum defaults to, or [[Baby jubjub]] for ZK specific applications.

