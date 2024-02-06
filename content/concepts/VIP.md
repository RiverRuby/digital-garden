🚧 This is a work-in-progress 🚧

VIP = verifiable, interoperable, portable. Used in a sentence: [[signatures]] and [[zkSNARKs]] are VIP data. Like VIP tickets, VIP data give the owner many more benefits than stinky data (defined formally as data stuck in a DB without any attached [[CG]]).

I think these are three equivalent notions, that all follow from each other. In different contexts, it is best to use one of the three terms over the others. I personally resonate most with **portability** over the others, partially also because it has less of its own brand within web3.

## Verifiability
Verifiability means that a claim a data makes can be verified. This often entails some sort of metadata called a [[verification key]] that the verifier needs to output true or false.

In the case of [[signatures]], this is essentially the claim that “a user with a specific public/private key pair attested to some message”. The verifying key here is the user’s public key, which can be shared broadly. 

## Interoperability
Interoperability is a common

## Portability
VIP data is highly portable. Once created, it can exist in any platform with roughly the same level of importance (given easy, understandable access to a [[verification key]] and verifying software). This is an excellent fit for [[identity]] data, which becomes far less powerful to the user if it is stuck in one place (but also gives far more power to the platform, so we're going to have a hard time making this transition).

As mentioned earlier, 

## Related terms

- [[authenticity]]
	- Authenticity is often what we are looking to "verify" when we are leveraging verifiability. 
- [[ownership]]
	- If you have private VIP data, you own it in a meaningful way
	- Don't need anyone else to store and attest to it; you can make those proofs yourself and hide the core elements
- [[signatures]]
	- Signatures are the smallest/simplest unit of VIP data
- [[ZK]]
	- ZK proofs are a significant up-level of VIP data, where we can selectively disclose information and make the proof highly succinct