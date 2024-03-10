---
sidebar_label: 'Overview'
sidebar_position: 0
---


# Overview

Current NFT standards on Solana are built on top of SPL Token, which is a fungible token program. A non-fungible is created by adding restrictions to fungible mints – i.e., for a mint to be considered "non-fungible", it must have supply 1, decimals 0 and no mint authority. As a consequence, NFT standards carry "baggage" from the requirements of fungibles to represent non-fungibles. For example, non-fungibles have a supply of 1 by definition, but you still need a separate mint and token accounts.

Requiring a separate mint and token accounts is wasteful and adds complexity (e.g., more accounts validation) to a standard. In the vast majority of the cases, the only information required from a non-fungible token account is the holder (owner) address, given that the amount is always expected to be 1. At the same time, a token account takes 165 bytes of storage. Additionally, SPL Token - even including Token Extensions (a.k.a., SPL Token 2022) - does not enforce constraints to define different token standards.

Since different token standards will usually be defined in separate programs, the end result is a bloated standard with multiple accounts – e.g., mint, token and (potentially) metadata accounts, in addition to SPL Token and a Metadata programs. For most operations, all 5 accounts would be needed to interact with a non-fungible – and there are standards that the number of accounts is even higher.

Nifty Asset takes a different approach and re-imagines how non-fungibles are represented on Solana. In essense, a non-fungible asset is a unique slab of bytes on the blockchain identified by an address and it has an specific holder. When you transfer the "ownership" of this slab of bytes, you are changing the holder information of it. The contents of a non-fungible is as flexible as possible, given that they are "just" a slab of bytes – all data can be on-chain, or it can have "pointers" to external resources.

Following this approach, Nifty Asset was created to represent non-fungible assets with performance and composability in mind:

The program is lightweight and uses a minimal set of accounts (singe account to represent an asset).
All design decisions were made to optimize compute units consumption.
Zero-copy (bytemuck) is used to avoid (de-)serialization overheads.

