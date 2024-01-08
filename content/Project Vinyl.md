---
date: 2023-07-15
title: Project Vinyl Technical Roadmap
---
> Based on conversations with Rachel, Althea, Richard, Barry, and Aayush
> Originally from https://hackmd.io/@RiverRuby/project-vinyl-roadmap

An attempt to return to private ownership of content, but still digital-native. A world in between **vinyl records** and Spotify. A future enabled by **signatures and ZK**. A tactile and smooth interaction powered by **NFC chips**.

Things in bold are deliverables we need to perform initial user research at SBC.

## Reasons for existing
1. Enables more intimate, human interactions in an increasingly digital and artificial world
2. Tactile representation of private data ownership and the capability of ZK
3. Efficient & folding friendly ZK proofs with Baby jub jub signatures
4. Improves on-boarding experience to Ethereum
    - Can make a wallet once you collect enough of these signatures to do useful/interesting things on-chain
    - Don't need to already have a wallet to start collecting, but get similar guarantees
5. Operational security & liveness
    - Many NFC solutions use AES encryption chips as they are cheaper
    - They no longer need to maintain security of 100 symmetric encryption keys + make sure their server is up
    - Can have a smart contract that handles logic


## Use cases
These are the main use cases we have identified for these cards:

1. **Private POAPs that don't require a wallet + gas**
    - Can be used for
        - Pure joy of collection, like digital merchandise
        - Loyalty programs (restaurants, artists)
        - Proof of connection in physical world
    - Events to be dployed at
        - Conferences (talks, subevents)
        - Concerts / festivals
        - Parties
        - Government events (town halls)

2. Zupass replacement / Semaphore-equivalent identity
    - Cards with BJJ curve + PLUME + encryption key storage can do all functionality of Zupass
        - PLUME gives you Semaphore-equivalent nullifiers
        - Encryption key can encrypt/decrypt your data from some external storage, likely cloud
    - Can also have ECDH functionality for encrypted communication

3. Private digital art / NFT replacement
    - Enable collectors to have private yet digitally meaningful pieces of digital art
    - Each signature comes with an RNG value, which if combined with generative art could give collectors their own unique pieces that no one else sees
    - No more "copy paste your NFT jpeg" meme
4. Private dynamic signature image, using encryption
    - Allow users to upload an encrypted version of their signature image that is private
        - Receivers need to be able to decrypt; perhaps encryption key to image is also passed along
    - Can be used for contact cards / business cards at conferences
    - Can make a privacy focused version of a "close friends story"
    - Upcoming event notifications to people that went to a venue or bar or house
5. Artist evangelism with merch that generates signatures
    - Fans have merch that gives out signatures to anyone that taps
    - Can give friends of fans a unique gift or video, or just a link to an album or the fan's favorite song
    - Can be used to grant other permissions
        - Early access to new song
        - Early access to tickets
        - License to use an AI speech model of the artist to say a specific phrase :O

## Project components

We break the project into a few key components: 
1. Where the signatures are stored
2. Auxiliary infrastructure to the signatures like ZK proofs/verificatins
3. Applied ZK research we need


### (1) Storage solutions

Here are a few storage options for securely storing signatures on mobile phones, which is the primary interface users will use to interact with the NFC technology:

1. **Apple Passes**
   - Stored in the Wallet app for iOS devices using the the PKPass file format.
   - Signatures sync across user's Apple account, so that e.g. passes are also available on Apple Watch.
   - Apps are able to [query for passes](https://developer.apple.com/documentation/passkit/pkpasslibrary/1617109-passes) to generate ZK proofs on the private signatures.
2. **Google Wallet**
   - Constraints are similar to Apple wallet, except needs more testing across the different Android architectures.
   - Need to move private service account key to within the browser to prevent sending signatures to a (potentially) malicious server.
3. **Cloud-based password managers**
   - Comes default with most devices, and easily interoperates with mobile browsers to generate ZK proofs.
   - Can just store the list of signatures as a "password" in the password manager
       - Bit of a hijacking, but provides a decent backup
       - Don't need to deal with setting up a secure store
4. In-app storage
   - Non-cloud app storage is local-only and is removed with deletion of the app.
   - If on phone, can encrypt data with [secure enclave ECDH](https://developer.apple.com/documentation/cryptokit/secureenclave/p256/keyagreement)
   - If on watch, can use more easily (similar to NYC metro)
5. Cloud storage with end-to-end encryption key
   a. Key stored in single-write card
   b. Key derived from master password
   c. Key derived with WebAuthn PRF
      - Only available on Chrome canary right now
      - Would be great to keep an eye on as PRF expands as a framework
6. Data stored in accessories
   - Smart accessories just as rings, chip wristbands, etc.
   - Purest solution; akin to self-custody; no storing on any server


### (2) Auxiliary infrastructure

Additional components are necessary to support an end-to-end working version of Project Vinyl.

1. **ZK verifier on smart contract that gates behavior such as minting soulbound NFT**
   - This could be useful for crypto conferences, for attendees to get a SBT for each of the NFC signatures they collect
   - Shows how this tech enables chain onboarding
2. **Map from public key to signature image**
   - To start off, we can use a persistent database such as Postgres or Airtable.
   - For more high-stakes use cases, we'll want to use storage on a smart contract.
3. Web app for updating the public key to signature map
   - A simple version of this could just be the Airtable UI.
   - More complex version looks more like a custom web app that makes ethers.js calls to the smart contract.
4. Mobile app that mimics the ability of cards, with secure enclave option
    - Can allow people to give out signatures with an incrementing nonce without cards, using QR codes initially
    - Easier to collect user feedback, maybe we don't need cards at all
    - Worse security; if user can access private key can forge the nonce
    - If iPhones / Androids can be an NFC sender, we can mimic the exact flow of cards with phones
5. FHE PIR lookup of images using blyss.dev
    - Otherwise, service hosting the images can see what images a user is requesting and break their privacy slightly 


### (3) Applied ZK Research
These are projects in applied ZK research that the project will require in order to generate the most interesting NFC setups.

1. **Generate Groth16 proofs for baby jub jub ECDSA signatures from the cards.**
    * From spartan-ecdsa, we know takes **3,039 R1CS constraints** for [Efficient ECDSA verification](https://personaelabs.org/posts/efficient-ecdsa-1/) and **17,544** for full ECDSA verification
    * This compares to **5,544** constraints in a Semaphore signalling circuit with Merkle tree depth 20
2. Nova proofs to count and/or compute properties over multiple distinct signatures
    * Can use the bn254/grumpkin cycle to efficiently verify baby jub jub signatures
3. Signature witness encryption to allow signature collectors to decrypt a private image
    * Could enable dynamic signature images that are private, without having to encrypt to different private keys


## Scattered thoughts

From Lakshman:
- Artists are community leaders these days
    - Online mediums have allowed them to scale their audiences faster
- This technology allows them to interact more closely with their people
- An important social signal is "being part of the same tribe"
    - This often boils down to "being in the same place at the same time"
    - These sorts of attestations can power that
- "iykyk" is an exclusive energy but also a connective one
