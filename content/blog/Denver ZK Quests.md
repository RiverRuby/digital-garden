---
date: 2024-03-17
---

> Originally from the PSE grant proposal for ZK Quests and Denver
> Costs and salary redacted, but happy to discuss how much I was awarded in DMs

## 📑 Project Overview

### Abstract

Our team aims to do an iteration of the "quests" feature first developed at Devconnect for https://jubmoji.quest. This will take place at ETHDenver, which runs from 2/23 - 3/4. 2/23 - 2/28 is the "buidl week" and 2/29 - 3/4 is the main event. We will also be experimenting with a new ZK architecture called jubsignal to accommodate a new type of NFC chips that will be used at the event.

### Project Details

The ZK Quest project will be in collaboration with IYK (https://iyk.app), a VC-backed company focusing on immersive digiphysical experiences powered by NFC chips. They secured a partnership with ETHDenver where each of the roughly 12,000 to 18,000 attendees will receive a CMAC NFC chip, which are different from the chips we worked with before on [Jubmoji](https://github.com/jubmoji/jubmoji.quest). **Our team (also including Kali, a bridge team grantee) is leading development of the entire app experience on top of these chips**. This involves some standard web2 features like logins, contact sharing, and a leaderboard of taps.

The main cryptography portion that we are requesting this grant for is integration of a "ZK Quests" feature at the event. This first involves ETHDenver attendees collecting ZK-friendly signatures from different people and locations at the event using NFC cards. **Proving ownership of certain signatures can then be used to complete different quests**, which are being set up by partners and sponsors to increase attendee engagement with their brands. Upon valid proofs of completion, attendees will earn $BUIDL, a non-economic internal ETHDenver token, which can be exchanged for partner benefits, merchandise, and other NFC gear.

In order to get full ETHDenver buy-in, we were required to issue $BUIDL and integrate with other ETHDenver sponsors, including [Summon](https://summon.xyz/), [Clave](https://www.getclave.io/), and [ZKSync](https://zksync.io/). We will make every attempt to ensure **any featuring of these brands is entirely ETHDenver's decision, and is not being endorsed by our team, or PSE, or the EF at large**. We are happy to set further boundaries with our partners as required by EF grant mandates.

### Motivations & relevance to PSE

We believe that using ZK proofs of signature ownership gives quests the same interoperability as NFT-based experiences, but additionally **gives users full privacy of their activities** at ETHDenver and **full consent over when they share it**. We also believe **signatures are easier to use than NFTs**, as they don't require any notion of a wallet or gas to mint.

In the vein of user consent, we will also be giving users the option to self-custody their signatures or store them plaintext on servers (as is the web2 standard). This is also an exciting **opportunity to understand how much web3 attendees of ETHDenver prioritize privacy**, when given clear explanations of what self-custody vs server-custody offer them.

An exciting innovation we invented and are integrating with the experience is **[jubsignal](https://pse-team.notion.site/jubsignal-b7af2183c52a420e9601d9a2e65bfa31?pvs=74), a lightweight client-side protocol that sends signatures P2P via E2E encrypted channels**. We need this protocol primarily because the NFC chips we're working with no longer produce signatures directly on tap. And we still need signatures in order to make useful ZK proofs for quests. However, if these signatures come from a server private key, then we lose the privacy and data ownership guarantees of signatures/ZK. Thus, all signatures are created client-side using a self-custodied private key, and sent encrypted to the receipient so that the server can't access your data! 

However, this only works for signatures that are sent by attendees who have a device to custody a private key. This does not work for NFC chips being used to prove that you visited a location. We will instead use 600 Jubmoji-like cards for those signatures!

Finally, we are hoping to use ETHDenver to **raise visibility and increase partnerships for our team and PSE projects at large**. In parallel with the efforts described in this grant, we are collaborating with the PSE design team to create an overall brand for the explorations our larger team is interested in exploring. This larger team includes Andrew and Vivek, as well as Kali and Althea from PSE bridge team, and Rachel, Kat, and Mari from PSE design team. We will be using this overall brand at ETHDenver, and will have a website and Discord to refer people to!


## 👥 Team 

### Team members

This grant will be supporting two full-time members of the team:

* Vivek Bhupatiraju, working on primarily on cryptography, design, and software
    * Email: vb7401@gmail.com
    * GitHub: github.com/RiverRuby
    * Discord: @vivboop
    * Telegram: @vivboop

* Andrew Lu, working primarily on software, cryptography, outreach
    * Email: andrewclu98@gmail.com
    * GitHub: github.com/AndrewCLu
    * Discord: @chilledlemonade
    * Telegram: @andrewclu

### Team Website

The best website that exists so far is https://jubmoji.quest, which is where our previous experience was hosted.  One of the goals over the course of this project is to determine a more cohesive overall brand for our project. This will be **done in collaboration with the PSE design team, and led by Rachel**. This new brand and related website will serve as our new team website when completed!

### Team's experience

Vivek and Andrew were on previous grants to develop Jubmoji at Devconnect. This project was successfully completed & well received. As a result, PSE has expressed strong interest in supporting further explorations. Both of us have completed prior projects in the ZK and cryptography space, and have a strong track record of high quality open source work.

### Team Code Repos

For this experience, the code will live at https://github.com/nfc-denver/nfc-denver. For past experiences, the code lives at https://github.com/jubmoji.


## 🔩 Development Roadmap

### Overview
* **Total Estimated Duration:** 3 months of total full-time work, from 12/15 to 3/15.
* **Full-time equivalent (FTE):**  2.0

This includes a monthly grant for development/design/operational time, for both Andrew and Vivek. This also includes funds for a 600 card order with our baby jubjub technology from Jubmoji, some DevOps costs for deploying our site, and travel funds for Denver.

### Milestone 0: Finalizing collaboration details, application mocked, cards finalized & ordered, travel & flights booked, DevOps purchases
* **Estimated Duration:** 12/15 to 1/15
* **FTE:** 2.0

#### Finalizing collaboration details

We learned of this activation prior to Devconnect, but only started finalizing details with IYK in mid December. This took significant back and forth, as well as reaching internal alignment on everyone's availabilites and interests that was involved in the Jubmoji effort. Overall planning efforts can be found in this [ETHDenver PSE Notion document](https://www.notion.so/pse-team/ETHDenver-24-Overall-630071bcccfd4df7b2f26a8afde3280c). Some early documentation of our various collaboration/technical/design goals can be found [in this Notion doc](https://www.notion.so/pse-team/ETHDenver-Priorities-2f778ae1269f4a7e8b8840637393efa5).

In addition, we needed to understand how we could make our experience fully private and ZK when we had to use different NFC chips from IYK that didn't produce signatures. This led to the formulation of [jubmail](https://pse-team.notion.site/jubmail-sending-jubmojis-to-encrypted-inboxes-8273ba90830e498e8b0fd9a32eb4d730?pvs=74), a precursor to jubsignal with far more detail and complexity. This was then simplified to [jubsignal](https://pse-team.notion.site/jubsignal-b7af2183c52a420e9601d9a2e65bfa31?pvs=74).

#### Application frontend/backend mocked

After the core details were solidified, we worked on ironing out the overall end-to-end app experience. First we started with design mocks, which were based off of the [jubmoji](https://jubmoji.quest) application we had built for Devconnect. The UX design production was finished by IYK, with significant feedback and participation from our team. The final versions can be found at this [Figma file](https://www.figma.com/file/ZK57L2ggJTgva9Hl65JdGU/ETH-Denver?type=design&node-id=0%3A1&mode=design&t=rV8OJ1snPkBzLe2o-1), we feature two screens here for reference:

 Social tab |  Quest tab
:-------------------------:|:-------------------------:
![image](https://hackmd.io/_uploads/ryaX8ciYa.png) |  ![image](https://hackmd.io/_uploads/rJuHI5oFa.png)

We then mocked the entire software backend required to make everything work, including the jubsignal and ZK proof portions. This can be found at this [Figma file](https://www.figma.com/file/zbCxOpEoll2XzE68KjIAvT/NFC%2FZK-%40-Eth-Denver-Tech-Architecture?type=whiteboard&node-id=0-1). This was entirely led by our team, and included integration of jubsignal, full e2e ZK proofs for quests, and other social features of the application.

#### Cards finalized & ordered

We decided to order 600 of our own chip technology that we built as part of the Jubmoji grant proposal. This is in collaboration with [ARX](https://arx.org), a VC-backed NFC company specializing in NFC chips with ECDSA signature technology. The total cost here is **$3,144.70**, including shipping costs and slightly higher unit costs due to specialized and diverse print options.

![image](https://hackmd.io/_uploads/rJXGeciKp.png)

The designs for these cards were done in collaboration with Rachel and Kat of the PSE Design Team, and the total collection can be found in this [Figma file](https://www.figma.com/file/H0aGlvwtJIebT1HXi3yMIg/Jan-2024-card-order?type=design&node-id=8%3A308&mode=design&t=tPBjvlCSKhgT1FRV-1). Here are some of the designs for reference, they are gorgeous! We are also experimenting with new holographic print options to see how those turn out and how users interact with them.

6 packs of public domain art for quests |  General cards
:-------------------------:|:-------------------------:
![image](https://hackmd.io/_uploads/H1zKg5it6.png)  |  ![image](https://hackmd.io/_uploads/SJjpgqsYp.png)


#### Travel booked

Andrew and I will both be traveling round-trip from NYC to Denver, from the dates 2/16 to 3/5.

#### DevOps costs

We are using Vercel for deployment and database management ($65/month). We are also using the Twitter API for social experiments ($100/month).

### Milestone 1: E2E application finished, physical quests finalized, application is heavily tested
* **Estimated Duration:** 1/15-2/15
* **FTE:**  2

#### E2E application finished

By February 1st, the full end to end app should be functional with real chips from IYK. We have already made significant progress; the technical core of the app was finished by 1/22. We need to do further integration, testing, and improvement, which will all be finished by 2/1 in time to start integrating with quest providers and other partners.

#### Physical quests finalized

By February 1st, we should have all the main quest partners finalized. We will present them with a succinct write-up on what quests entail, and how they can easily set them up.

By February 15th, we should have finalized all quest details including any new features that specific partners request. After this point, we will not accept any further quests to ensure that the quality of the existing ones is high.


#### Application heavily tested

This application will be used by up to 25,000 participants, each of whom may be tapping 100+ times per day. We will be running mock reliability tests prior to 2/15 to ensure our backend is robust to different event conditions:
- Poor internet connection (offline mode, service workers)
- Lots of taps (more efficient server and DB)
- Weird syncing situations (multiple taps and multiple devices)
- Many more...


### Milestone 2: MVP app launched, experiences ran, retrospectives write-up
* **Estimated Duration:** 2/15-3/15
* **FTE:**  2


#### MVP app launched

We will launch the MVP app on 2/16, upon landing in Denver. At that point we will start testing with quest partners and other interested parties to ensure stability for the 2/23 ETHDenver start date.

#### Experiences ran

Starting on 2/23, we will be engaged in significant operational work to ensure smooth experiences for participants. This will include software support as well as on-the-ground debugging of cards and quests.

We will also be doing significant user research to learn more about how users interact with our technology. We were not able to do as much of this at Devconnect, and are collaborating with the design team to have a more substantial research system for this experience.

#### Retrospective write-up

After Denver ends, we will take 1-2 weeks to closely reflect on the experience and make an informative report on our learnings and our plans for iteration. This was a highly useful experience for Zuzalu and Devconnect, and we hope to get even more out of the retro for Denver.
