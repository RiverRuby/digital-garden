---
title: Signed web pages with SXG
---
> Disclaimer: this is very different from Intel SGX or other TEE (trusted execution environments) methods! I discuss my thoughts on that here: [[Trusted execution]]

[Signed exchanges](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html), or SXG for short, is one of the most promising methods for getting interesting [[signatures]] from the web. From Google's introductory [article](https://web.dev/articles/signed-exchanges):
> As its primary use case, SXG uses a cache to prefetch and serve content that has been cryptographically signed by the origin. This helps speed cross origin navigations from referrer sites while also ensuring that pages remain unaltered and properly attributed to their origin. Any potentially identifying information is hidden until after the user navigates to a site thereby protecting the user’s privacy.

It is primarily built for speeding up & securing pre-fetching of data by a search browser. But in this article, we will explore its potential use cases with [[ZK]] cryptography and blockchain apps.

## [[CG]] integrations
Making proofs on top of signatures from SXG is an idea originally from Jason Morton of [EZKL](https://ezkl.xyz) at SBC 2022. He was interested in them as inputs for ZKML models, which I think is very promising and I'm excited to see projects in that direction in 2024!

Combining the signatures of SXG with ZK allows us to **potentially make proofs about publicly accessible information**, which can be super useful for applications building on top of [[VIP]] data, or bringing more real-world data on-chain:

- If Substack signs its pages,
	- Proving an author said something on a specific date
- If NYT (or other news org) signs its pages,
	- Proving a specific journalist said something to cite in social media
	- Proving an election went a specific way from an election article, for an on-chain prediction market
	- Prove a much more complex ML predicate (cc [EZKL](https://ezkl.xyz)) like "Is the US economy is doing well, based on this article?"
	- Prove that an article was edited in a certain way
- If stock exchanges signed their price data page,
	- Proving a stock had a price at a specific time
- If social medias signed their pages (unlikely),
	- Port over posts to another site verifiably
	- Prove how many followers someone has
	- Prove how much someone's following has grown
- Email me@vivs.wiki with more ideas! I will add them here and we can collaborate!

These sorts of proofs could then be taken to platforms like Twitter and Farcaster to provide verifiable information flow onto those platforms. At the very least, we can have proofs that certain screenshots are real. At the other extreme, in a world where AI becomes more powerful + spammy, we can filter our feeds to only display information with signatures.

### Technical implementation
As far as I can tell, the data actually signed in SXG is a [Merkle root](https://datatracker.ietf.org/doc/html/draft-thomson-http-mice-03). The root is built from a right-skewed tree, which is built to enable **progressive integrity proofs**. This is different from the common setup in [[zkSNARK]] land where the tree is balanced and used to prove membership in a large set.

The actual leaves of this tree consist of the HTTP content broken into equal size chunks, as per the MICE IETF standard. So if we want to prove the content at some part of the website, we find the specific chunks including the data and open them up. We can then prove they were part of the signed digest by hashing the rest of the data inside of a SNARK. And with binary field SNARKs like [[Binius]], we actually should be able to do this computation inside of SNARK fairly efficiently!

Note that if we don't need a succinct proof and there's no private data, then we can always just do this hashing outside of a SNARK.

## SXG in practice
How does a website enable SXG? The easiest way is to use Cloudflare Hosting, which has an easy [one-click set up for SXG](https://developers.cloudflare.com/speed/optimization/other/signed-exchanges/enable-signed-exchange/). In fact, this site is deployed with SXG from Cloudflare![^1] There's also a library from Google for NGINX based servers [here](https://github.com/google/nginx-sxg-module).

Cloudflare has a number of excellent resources on the entire set up of SXG in this [article](https://blog.cloudflare.com/automatic-signed-exchanges/). One interesting use case they bring up is that signed payloads can **power completely off-line experiences**, but it's unclear how deeply this has been investigated or used. They also have a wonderful system diagram that I'll include here for reference:

![](http://blog.cloudflare.com/content/images/2021/09/image3-7.png)

### Getting more SXG usage
Unfortunately, most sites do not enable SXG right now. It's a fairly new technology, and it seems there isn't widespread understanding of its speed benefits.

One strategy to change this is to lobby specific high-value sites to add SXG so we can use those signatures, likely starting with news outlets. Another strategy is to lobby Cloudflare to turn this on by default, and allow sites to turn it off if they don't want signatures to be generated.

However, the widest reach we can get is likely by lobbying the [Internet Archive](archive.org) to add this to the Wayback Machine that they run. [[yush]] and I have already reached out, but it seems like this will be a slow process. If you know anyone at the Internet Archive who can expedite this, please reach out to me or Aayush on Twitter!

### Private information
I'm not 100% sure how SXG handles private information. I would love more help in determining this. Any related caveats need to be taken into account when designing proofs and applications on top of SXG data.

From Claude on the prompt "Can signed exchanges be used on pages with private data?", followed by another prompt to be more succinct:

>Signed exchanges can be used with pages containing private data, but care must be taken. The main challenges are privacy concerns around publicly caching sensitive user data, and the inability to personalize pre-cached content. A common approach is to use signed exchanges for static page components, while fetching and rendering private user data client-side. Cookie-based authentication can enable "private" signed exchanges, but reduces performance gains. Ultimately, there is a tradeoff between performance benefits and privacy/personalization limitations that must be evaluated based on the specific use case and data sensitivity.

From Google Search [docs](https://developers.google.com/search/docs/appearance/signed-exchange): 
> [Signed exchanges](https://web.dev/signed-exchanges/) (SXG) allow Google Search to prefetch your content while preserving the user's privacy. In practice, this means that both AMP and non-AMP results shown on Google Search may prefetch a few key resources (such as HTML, JavaScript, CSS, images, or fonts) in a privacy-preserving manner, if the associated website supports SXG.

From Cloudflare's `Signed exchanges caveats` [here](https://developers.cloudflare.com/speed/optimization/other/signed-exchanges/signed-exchanges-caveats/):
> Signed exchanges remove cookies and headers from HTTP requests, which can create problems with dynamic or personalized content. This is intentional since signed exchanges can be distributed to multiple browsers. Therefore, packaging any personalized or dynamic content into a signed exchange could be a security risk.

It them proceeds to list the set of request headers that is not removed from the HTTP request, and a list of request headers in which a signed exchange will not be generated.

## Conclusions
Having signed webpages would enable a lot more information to be [[VIP]], which can enable interesting blockchain and ZK apps. The main blocker to this is enabling SXG in more places. If you are interested in expanding SXG across the internet, or want to dig deep into how it works to see how it deals with public/private information, let's collaborate!


[^1]: Well at least, I am trying to. I think it's broken right now, as of 04/15/24. I am getting Cloudflare support's help to fix this right now!