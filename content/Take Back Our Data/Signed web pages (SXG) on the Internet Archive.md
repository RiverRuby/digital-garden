---
date: 2024-08-24
draft: false
---
🚧 THIS IS A WORK IN PROGRESS 🚧 

This idea is building off of Althea Allen's idea to do TLSNotary proofs for the Internet Archive. 90% of credit goes to her, I just thought of extending it to use [[blog/SXG|SXG]]. Further developments on this idea happened with [[yush]] (classic).

If we had SXG or signed headers on the [Internet Archive](web.archive.org), we could make proofs about public data on
- All websites, ever
- On a time access, going back as far as the archive stored it

This feels enormous for getting more signatures on the web, and it only takes one website to turn on SXG instead of lobbying for dozens of sites to turn it on separately!

### Applications
1. Verified screenshots on social media
	- Social media sites can render signed HTML from news sites directly into the feed and have some sort of checkmark
	  
2. Prediction market finalization from verified outcome results in news articles
	- You can have a market settle on chain based on sentiment in a future news article (e.g. "Donald Trump ___ the 2024 election")
	  
3. Proving public accolades for use in identity wallets
	- Proving you're an award winner or a fellow from an SXG proof of a site
	  
4. Crypto-economic rewards for creators to publish on schedule
	- Fans put in a pool of money that writers/artists/influencers can claim from if they present an SXG proof of posting
	- If they don't, their previous pool of winnings gets slightly slashed to reward the sad fans
	- I'm not a crypto-economic wizard but I believe there's some aligned incentive structure here that requires full verifiability of "valid post"
	- Could also be built with ZKEmail notifications of posts, but this is more general
	  
5. Fully verified citations of information
	- All information you cite can come with a signature from the internet archive on the source
	  
6. Interesting sources for ZKML proofs on-chain
	- Can factor in signed financial news into DeFi protocols
	- This is probably quite economically viable but I don't care for the chain so this is lower on my personal list 😃

And probably lots more! Please hit me up if you think of any, I will happily add to this list!

Note that any potential applications can't require real-time data feeds. For example, getting live stock exchange prices won't work as the Internet Archive can take a while to snapshot a certain website or news feed.

### Progress so-far
So, [[yush]] the madman knows no bounds when he gets excited about an idea and went out of his way to message the archive developers about this idea.