---
date: 2023-08-15
title: Jubmoji PSE Grant Proposal
---
> Originally from the PSE grant proposal for Jubmoji
> Costs and salary redacted, but happy to discuss how much I was awarded in DMs
> Primary evaluator and champion of this work was Althea as coordinator of bridge team!

## Project Overview 📄

### Overview

Alongside Althea and Rachel of PSE, I am working on a project to be deployed at Devconnect that utilizes NFC chips to give out ZK-friendly signatures to attendees as a form of **private POAP**. It is primarily aiming to be an educational experience about the possibility of personal control over private data using ZK proofs. We also want it to be an activation that is fun outside of the technical innovations and enhances the overall conference-going experience.

I will be leading the technical implementation of the necessary infrastructure for the project. This will include the website to display the signatures, storage infrastructure to back them up, ability to generate proofs of ownerships on top of the signatures, and experiences that intake the proofs for further experiences.

Here is a work-in-progress PSE document written by Rachel describing the overall Devconnect project (including non-technical work): https://www.notion.so/pse-team/Devcollections-3f6e21493c7442a1802961bf91a0004a. And here is a more complete document describing technical deliverables for this line of work, including after Devconnect: https://hackmd.io/@vb7401/project-vinyl-roadmap.

### Project Details

#### PoC/MVP or other relevant work
This project is an iteration upon a previous project that the team of Althea/Rachel/Vivek executed at Zuzalu called Zupass Stamps. A retrospective can be found here: https://pse-team.notion.site/Zupass-Stamps-v1-Retrospective-6bd7aa223f4d41cdb59b4ecf8aafb130, and the work was highlighted on Vitalik’s blog here: https://vitalik.ca/general/2023/06/09/three_transitions.html#:~:text=Wallets%20will%20need%20to%20secure%20both%20assets%20and%20data

The code for this project lived in the Zupass repository, maintained by 0xPARC. The code to add signatures and display them lived in https://github.com/proofcarryingdata/zupass/tree/main/packages/halo-nonce-pcd. 
#### Work already completed
1. Leading the writing of https://pse-team.notion.site/Zupass-Stamps-v1-Retrospective-6bd7aa223f4d41cdb59b4ecf8aafb130, a retrospective on our Zuzalu experiments
2. Leading the creation of new NFC cards that generate ZK-friendly ECDSA signatures using the Baby Jub Jub curve
    - Idea **initially seeded & invented by Barry!**
        - https://github.com/barryWhiteHat/baby_jubjub_ecc
    - Work done alongside Cameron from arx.org and Marcus from semaphore.network
4. Exploring other extensions of the NFC cards here https://vi-institute.notion.site/ZK-friendly-HaLo-chips-ddb64598eb17450898758bc536121a8c?pvs=4
5. Working with Rachel and Althea to scope out a concept for Devconnect that iterates upon the Zuzalu experience, as well as prep an initial test order for SBC: https://pse-team.notion.site/NFC-Card-Design-Tests-ce1ef5492d1d4e8fb88fbc891b87a242?pvs=4
6. Scoping out a longer term technical roadmap, including use cases and infrastructure we’ll need to build out to maximally understand the space of possibilities: https://hackmd.io/@vb7401/project-vinyl-roadmap


#### Core upcoming components
1. Website to display the signatures
    - This website is ideally an interesting experience on its own
    - Leading concept is dressing a virtual avatar with “digital merch” you receive at different booths
    - Also can be used educationally as a visual representation for what ZK enables
        - Can show people your avatar with a specific shirt but not the rest of your wardrobe 
2. Storage infrastructure to back them up
    - The signatures need to backed up to some sort of storage so people don’t lose them
    - Exploring a number of different options, including Apple/Android wallet, cloud storage with an e2e encryption key
3. Ability to generate proofs of ownership on top of the signatures
    - Proof of owning a single signature using Groth16 or Halo2-KZG
    - Proof of owning a set using Nova-based schemes for a constant sized proof for all different queries
4. Experiences that intake the proofs for further experiences
    - Claiming an NFT on-chain to mimic POAP experience
    - Leaderboard for collecting the most signatures
    - Prizes and merch for top performers
    - Seeing what POAPs you share with someone else as a form of contact collection
5. Further extensions to cards
    - Exploring generating BN254 BLS signatures
        - Can do signature witness encryption with https://eprint.iacr.org/2022/433.pdf
        - Can have simpler signature aggregation schemes!
    - Exploring cards with PLUME as a replacement for Semaphore
    - Exploring storage in cards or accessories


## Team 👥

### Team members
This grant will just be focused on funding myself as an individual contributor. 

There is a separate PSE grant in flight for Marcus of semaphore.network who has been helping on the hardware side of the ZK-friendly NFC cards. Further technical contributors may be brought on later in the project, at which point further grant proposals will be written.

This project is in collaboration with Althea and Rachel of PSE. Operational and communication efforts will be lead by Althea. Design efforts will be lead by Rachel, and aided by the PSE design team consisting of Mari and Kat.

### Team's experience
As Althea and Rachel are already employed by PSE, I am leaving out a description of their experience.

### Team Code Repos
Code for this project will be hosted at https://github.com/project-vinyl. This is a tentative name for NFC technical work, including the activation at Devconnect and future work.
* https://github.com/project-vinyl

## Development Roadmap 🔩

### Overview
* **Total Estimated Duration:** 4 months of total full-time work. Part time from 6/15-8/15 (approximately 10hrs/week) whose scope was covered above. Full-time from 8/15 - 12/1 (40hrs/week).
* **Full-time equivalent (FTE):**  6/15-8/15 is 0.25, and 8/15-12/1 is 1.0

### Milestone 0: Initial set of ZK-friendly cards ordered ✅
* **Estimated Duration:** 6/15 - 8/1 (1.5 months)
* **FTE:**  0.25
* **Estimated delivery date**: 8/1

This milestone consists of the research and coordination efforts necessary to get an initial set of ZK-friendly signature producing NFC cards into our hands. This has already been completed, in collaboration with Marcus/Cameron from arx.org and Rachel & the design team at PSE.

### Milestone 1: Demo MVP Application for SBC + Devconnect concept finalized
* **Estimated Duration:** 8/1 - 9/1
* **FTE:**  0.625
* **Estimated delivery date**: 9/1

#### Demo MVP Application for SBC

We want to demo an MVP version of the Devconnect project at SBC to perform user research and iterate upon that for Devconnect. This will use the test cards we have ordered, which allow users to collect an initial limited collection of **emojis** to demonstrate the core concepts.    

Here are things we want to test:
- Collect precise data on how different devices respond to NFC taps including
    - How many people can do 
        - Background taps easily
        - Background taps with some effort
        - Foreground taps easily
        - Need to turn on NFC in settings
    - Android vs iPhone
- Testing adding to Apple and Android wallet vs encryption key called a master password
- Time to generate Groth16/PLONK proof of ownership on different devices

To do these tests, we need to build:
1. A website that can parse signatures from the new cards and allow users to add to either Apple Wallet, Android Wallet, or an external encrypted store
2. Code that updates each of these storage options when a user adds a new emoji
3. A website that allows users to generate proof of ownerships of these signatures
4. A simple leaderboard of collection that is private to motivate generation of proofs
5. (Optional) Website and contracts to allow users to claim an NFT based on how many emojis they are able to collect.

On the design/communications end we will need:
1. Designs for the passes in wallets or the encrypted store
2. Overall logo and concept for the collection
3. A website explaining the significance / importance of the collection

Each of these applications must also come with significant data logging capabilities so we can collect and analyze the necessary user data.

#### Devconnect concept finalized

By 8/15, we should have the Devconnect concept finalized and start scoping out the necessary design work we'll need for that. By the end of the month, we should have discussed with the Devconnect team and gotten their green light with our concept, and likely started reaching out to various subevent hosts to get their interest.


### Milestone 2: Devconnect cards ordered + feature-complete MVP application
* **Estimated Duration:** 1 month (9/1 - 10/1)
* **FTE:**  1
* **Estimated delivery date**: 10/1


#### Devconnect cards ordered

By 9/15, we should have been able to finalize the designs we want for the various Devconnect cards based on our learnings from distributing the emoji cards. We should also have some confirmed interest from Devconnect subevent hosts and started getting their ideas for what sorts of digital merch / signatures they would want to give out.

At that point, we should place a large order of cards for Devconnect. If we have the necessary time and interest, we should also make some cards for Zuconnect specifically. We should have all the cards in our possession by 10/15 to avoid any last-minute delays and shipping headaches.

#### Feature-complete MVP application

We should complete all of the raw software necessary for the Devconnect experience, with limited attention to design and UX. **This includes everything under 1, 2, and 3 of the "Core components" section above.** The code should be well written and well tested, but we don't need 100% confidence that everything works -- we will build that with user testing over the next few months.

While this is being done, the specific user flows should be communicated to the design team so they can start preparing design mocks in parallel with software development.

We need to have initiated all the audits for the most important pieces of the operation (circuits and contracts). We can use auditing difficulty to prioritize tasks; we finish the features that take longer to audit first. 


### Milestone 3: Design iterations on MVP + additional experiences completed
* **Estimated Duration:** 1 month (10/1 - 11/1)
* **FTE:**  1
* **Estimated delivery date**: 11/1

#### Design iterations on MVP

Now that the initial software has been written, we will now implement the initial design mocks and start performing user tests and iterations to get to a really smooth experience. I don't have specifics on what this process will look like yet; I will need to coordinate and discuss further with Rachel and the design team.

#### Additional experiences completed

In parallel with cleaning up the collection experience, we will finish implementing the additional experiences that will intake the proofs. Hopefully through discussions over the next 2 months, we will ideate more experiences that the stamps can be a part of, and recruit more help for implementing cool things.


### Milestone 4: Deployments at Zuconnect/Devconnect + retrospective write-up
* **Estimated Duration:** 1 month (11/1 - 12/1)
* **FTE:**  1
* **Estimated delivery date**: 12/1

#### Deployments at Zuconnect

We will deploy a small version of the Devconnect experiment at Zuconnect, a mini-Zuzalu event that is occurring before Devconnect. We will do this in the first few days of the event, and spend the remaining time iterating on any feedback and learnings we have.


#### Deployments at Devconnect

We will deploy the full experience at Devconnect, which starts on 11/13. We will likely have to be in Istanbul a few days earlier and distribute all the cards to people who are interested in making the experience amazing. This will include education and debugging work, and we will likely need to set up some sort of system to get questions/feedback upstreamed to the folks running the experience.


#### Retrospective write-up

After Devconnect ends, we will take 1-2 weeks to closely reflect on the experience and make an informative report on our learnings and our plans for iteration. This was a highly useful experience for Zuzalu, and we hope to get even more out of the retro for Devconnect.