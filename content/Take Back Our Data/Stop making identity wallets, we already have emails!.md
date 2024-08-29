---
date: 2024-08-24
draft: true
---
I'll define identity wallets quite simply as "stores of personal information that is signed". There's no requirements on ZK-friendliness of this data, I think that will be solved in the near future with tools like [[Binius]]. And no requirements on a "data access API" -- that can be built later, the more crucial component is stores of signatures that others can verify.

There's been many different attempts at identity wallets over the past few years, and a sizeable graveyard of projects that haven't reached much adoption or stopped altogether. And I think we have two important reasons to not try much more.

## (1) We already have an amazing identity wallet in email!
Guess what tool matches the above description, already has 4+ billion users, and is quite censorship resistant because it's key infrastructure for all of society? Emails! Emails all come with DKIM signatures from the outgoing mailserver (find details from the lovely folks at [ZKEmail](https://prove.email/blog/zkemail)).



## (2) Apple and Google will have unbeatable UX, DevX, and distribution for standalone solutions

I think the ultimate winner when it comes to a standalone wallet of your most important personal data will be Apple and Google. In fact, Apple and Google Wallet are **already identity wallets** by my definition above. Both require signatures on all data (Apple has a custom format with RSA signatures, Google Wallet uses JWTs also with RSA signatures) so you can technically already use this data in other situations or make ZKPs about it.

The folks that control our mobile OSes will be able to deliver a better UX and DevX than any single app, and obviously will have better distribution than any single company. And Apple and Google have the funds and motivation to lobby major governments to add their IDs and have them be accepted by TSA:
- Apple
	- States that support adding ID to Apple Wallet: https://learn.wallet.apple/id#states-list
	- California IDs soon, as of 08/15/25: https://www.apple.com/newsroom/2024/08/drivers-licenses-and-state-ids-in-apple-wallet-are-coming-soon-to-california/
- Google
	- State IDs: https://support.google.com/wallet/answer/12436402?hl=en
	- General expansion: https://www.androidpolice.com/additional-states-google-wallet-digital-id/

I think interesting experiments can still be done before Apple/Google really deliver on these product directions (see [Sismo](https://github.com/sismo-core), [Zupass](https://github.com/proofcarryingdata/zupass), [QuarkID](https://quarkid.org/),  [PrivadoID](https://www.privado.id/), etc) but I don't see a promising long-term for the current attempts.

#### Personal assistant trends



#### Possible competitors
What companies or organizations do have a compelling path to alternatives? Here's some that come to mind:
1. Meta
2. Worldcoin
3. Password managers (Bitwarden, 1Password, etc.)
4. Metamask
5. Honey/Rakuten




