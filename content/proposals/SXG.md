---
title: Signed exchange (SXG)
---
🚧 This is a work-in-progress 🚧

> Disclaimer: this is very different from Intel SGX or other TEE (trusted execution environments) methods! I discuss my thoughts on that here: [[Trusted execution]]

[Signed exchanges](https://web.dev/articles/signed-exchanges), or SXGs for short, are one of the most promising methods for getting interesting [[signatures]] from the web. In fact, this site is deployed with automatic, easy to set-up [SXG from Cloudflare](https://developers.cloudflare.com/speed/optimization/other/signed-exchanges/enable-signed-exchange/) hosting![^1] From Cloudflare's [article](https://blog.cloudflare.com/automatic-signed-exchanges/):

> [Introduced by Google](https://web.dev/signed-exchanges/), a Signed Exchange (SXG) is an open standard delivery mechanism that makes it possible to authenticate the origin of a resource, independent of how it was delivered. This decoupling advances a variety of use cases, such as prefetching, offline Internet experiences, and serving from third-party caches. It does so in a secure and privacy-preserving manner.

As suggested by this passage and Google's creation, **it is primarily built / intended for speeding up & securing pre-fetching of data by a search browser** (like Google).The article continues with an explanation of the entire pipeline needed for SXG, if you are interested! I include the high-level diagram here:

![](http://blog.cloudflare.com/content/images/2021/09/image3-7.png)

The article also suggest the portable (aka [[VIP]]) content being provided here could long-term be used to power completely off-line experiences! Which is a fascinating non-ZK technology that I'd love to experiment with.

## ZK integrations

Making proofs on top of SXG is an idea originally from Jason Morton of [EZKL](https://ezkl.xyz) at SBC 2022. He was interested in them as inputs for ZKML models, which I think is very promising and I'm excited to see projects in that direction in 2024!

Combining the signatures of SXG with ZK allows us to **potentially make proofs about publicly accessible information**, which can be super useful for applications building on top of [[VIP]] data:

- If Substack signs its pages,
	- Proving an author said something on a specific date
- If NYT signs its page,
	- Proving a specific journalist said something
	- Proving an election went a specific way from an election article
	- Prove a much more complex ML predicate (cc [EZKL](https://ezkl.xyz))
- If stock exchanges signed their price data page,
	- Proving a stock had a price at a specific time
- Email me@vivs.wiki with more ideas! I will add them here and we can collaborate!

These sorts of proofs could then be taken to platforms like Twitter and Farcaster to provide verifiable information flow onto those platforms. At the very least, we can have proofs that certain screenshots are real. At the other extreme, in a world where AI becomes more powerful + spammy, we can filter our feeds to only display information with signatures.

### Technical implementation
As far as I can tell, the data is actually signed in SXG is a [Merkle root](https://datatracker.ietf.org/doc/html/draft-thomson-http-mice-03), built using the exchange's response headers as leaves and SHA-256 as a hash function. Thus, to make efficient and succinct proofs about the data, we need a SNARK that can handle repeated SHA-256 proofs efficiently. Thankfully, we have [[Binius]] and (the hopefully coming soon) binary-field SNARK line of work to look forward to here in 2024!

## Private information
From `Signed exchanges caveats` from Cloudflare:

> Signed exchanges remove cookies and headers from HTTP requests, which can create problems with dynamic or personalized content. This is intentional since signed exchanges can be distributed to multiple browsers. Therefore, packaging any personalized or dynamic content into a signed exchange could be a security risk.

It them proceeds to list the set of request headers that is not removed from the HTTP request. This needs to be taken into account when designing proofs and applications on top of SXG data. 

[^1]: Well at least, I am trying to. I think it's broken right now, as of 01/14/24. I am getting Cloudflare support's help to fix this right now!