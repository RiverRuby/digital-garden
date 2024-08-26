---
title: Half-server and half-client models
date: 2022-11-30
---

Originally from https://personaelabs.org/posts/efficient-ecdsa-1/

There's an alternate construction pursued by other folks in the space that leads to more efficient proofs, but sacrifices full anonymity and requires a trusted server with an baby jub jub EdDSA public key $pk_s$. What in the world is a "baby jub jub EdDSA public key" and why do these constructions use it? We will break down each of these mystery words one by one. Disclaimer: we are not professional number theorists, just some people who like math and want to share what we've learned recently! Please reach out if there's any mistakes below!

## Elliptic curve interlude

**Baby jub jub** is an elliptic curve defined in this [EIP](https://eips.ethereum.org/EIPS/eip-2494) by Barry WhiteHat, Marta Bellés, and Jordi Baylina. It is a twisted Edwards curve, which means we can use the Edwards-curve Digital Signature Algorithm (**EdDSA**) instead of ECDSA. But the reason we use this random ass curve is because it has the _same base field as the scalar field of BN254_, which is the curve used in snarkjs Groth16.

The base field can be thought of "where the elliptic curve math happens", and the scalar field "where the circuit math happens". More precisely, let's define an elliptic curve $E_p$ where addition and multiplication is all done modulo a prime $p$, or in the finite field $\mathbb{F}_p$. The number of points on the curve in $\mathbb{F}_p$ will be a different value $q$, which is related to $p$ by [Hasse's wonderful theorem on elliptic curves](https://en.wikipedia.org/wiki/Hasse%27s_theorem_on_elliptic_curves) (wonderful is not in the original name, we added that). Roughly, the witness variables are encoded into these elliptic curve points, and because these points form a [group](https://en.wikipedia.org/wiki/Elliptic_curve#Elliptic_curves_over_finite_fields) all of the circuit math is done modulo $q$ or the finite field $\mathbb{F}_q$.

Going back to baby jub jub, as its base field (where its elliptic curve math happens, like signature verification) is the same as BN254's scalar field (where the snarkjs circuit math happens), we can add and multiply curve points in the circuit without bigint math or range checks! Don't worry if this doesn't fully make sense, we're just trying to give you intuition for why EdDSA on this specific curve is fast in snarkjs. It'll be more important to understand this for future ECDSA research posts.

## Proving setup

Users send their public key $pk_u$ and a signature $s_u$ to a trusted server, which verifies $s_u$ manually and then gives you $C_u$. This is a signature from the server's EdDSA public key $pk_s$ of $pk_u$ (and usually a _nullifier_ $n$, but we'll ignore that for now). This $C_u$ can be thought of a **certification** from the trusted server, and can be used to efficiently "prove" you know the private key for $pk_u$. Prove is in quotation marks because this isn't a real _proof of knowledge_ in the cryptographic sense, you're just trusting a third party.

On the client-side, we use a circuit that privately inputs your $pk_u$ and the server's certification $C_u$, and then publicly inputs the server's public key $pk_s$ and the members of the group $G$. The circuit logic checks $C_u$ is indeed a signature of $pk_u$ by $pk_s$ AND that $pk_u$ is in $G$.

## Praise & criticism

This is really clever for a few reasons! First, the nullifier $n$: we mostly ignored it above (because it's a rich topic on its own!) but including $n$ essentially gives each user an unlinkable private ID. This is _necessary_ for any 1-signal-per member application like voting or airdrops, but unfortunately cannot be easily generated for ECDSA keys. Second, after the user signs up, each subsequent proof of private group membership is quick due to baby jub jub EdDSA verification being SNARK-friendly (which the above explanation hopefully gave you intuition for!). And finally, this "certification" technique isn't just restricted to making groups of Ethereum public keys. If you're okay trusting third parties, you can also create groups by logging in with web2 platforms like Twitter and GitHub and having the server verify your login and giving you the relevant certification.

What does this construction give up in exchange for these benefits? As covered in the main post, our view is that the biggest concession _is requiring a server at all_. Only when proving is done client-side can we start to use ZK to move identity and computation away from other institutions and into our own hands. But does that meaningfully change a user's privacy? After all, doesn't each post-signup proof keep your identity private? No, because the trusted server knows the **set of addresses and accounts it has given a certification to**. This means if people use their certification to anonymously speak or vote, they don't speak with the full anonymity of their group -- they speak under the anonymity set of addresses that have signed up on the server. The server can keep this sign-up set private (meaning they can doxx when the group is small) or public (meaning the first sign-ups have a small anonymity set). This works for lower-stakes applications, but a dealbreaker for any high-profile or sensitive groups.

In addition, we're trusting the server to correctly assign certifications to users, but these can be maliciously forged in the current model. In the case of Ethereum groups, the trusted server can maliciously sign a public key $pk_m$ and give the corresponding $C_m$ to anyone who wants to "prove" ownership of $pk_m$. This can be avoided if the server does the verification of the signature and computation of $C_m$ inside a zkSNARK to prove it was _actually_ given a valid signature from $pk_m$. But for non-Ethereum groups there isn't an easy way to SNARKify the validity, meaning it's fair game for the server or hacker to forge.

## Looking to the future

How necessary are the other benefits in the long-term? For the nullifier: although there is _currently_ no way to generate a nullifier from our ECDSA keys, a collaboration between [Personae and Geometry](https://eprint.iacr.org/2022/1255) has solved this problem and has implementations ready to be [deployed in wallets soon!](https://ethbogota-2022.netlify.app/) For the faster "subsequent" proofs, this is no longer an issue if ECDSA signature verification is fast enough to be done on client-side devices. These proofs also add a UX hurdle of getting and storing a certification for every address you want to prove properties about.

Due to these concerns, we don't see this approach being the long-term solution. Pure client-side proving is technically the most secure and aesthetically the cleanest, so we will continue to pursue solutions in that realm. But we deeply appreciate this creativity behind this method and its impact on the space!
