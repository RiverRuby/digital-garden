---
date: 2024-02-12
tags:
  - concepts
---

🚧 This is a work-in-progress 🚧

Zero-knowledge cryptography, primarily built from [[zkSNARKs]].

## Affordances

There are three main properties that we unlock with ZK, which I personally organize in the **SVP** acronym:

1. **S**uccinctness (the `S` in [[zkSNARKs]])
	- Usually used for scalability, as in zkRollups (which usually don't use any ZK)
	- Important for client/human verified proofs
1. **V**erifiability (the `NARK` in [[zkSNARKs]])
	- Equivalent to [[VIP]], explored further in that page
2. **P**rivacy (the `zk` in [[zkSNARKs]])
	- Can enable true data [[ownership]] in a way that hasn't been possible for the first few innings of the internet

### Succinctness

Succinctness, as far as I have understood, is only useful for on-chain applications. Storage is basically free on AWS and bandwidth is cheap. So a DB ID is basically always going to be more succinct to pass around than a proof, and then you can look up any size of data from there lol. Succinctness will begin to matter more for consumer applications when we need fast verification times, but for the most part server-side verification is most crucial.

### Verifiability

Verifiability, or equivalently [[VIP]], is fascinating and super nerdsnipey. But for VIP properties to be useful, a pretty brutal chicken and egg problem needs to be solved of building an ecosystem of platforms that data can interoperate between, in a format they all agree on. Ethereum is a great case study in how to do this; blockchains heavily support & benefit from [[VIP]].

### Privacy

Privacy, I believe, can allow us to take [[ownership]] of our data. I think we can make money off of this! cc [[Data guilds]]

## What do I care about

(This section is a WIP, gonna spend a lot more time fleshing this out)

I am mostly interested in ZK as it can benefit the average consumer. I would not consider myself a blockchain enthusiast, but I am long-term bullish. 

Instead I focus on applications that can entirely be built and understood within the confines of the existing internet & browser.