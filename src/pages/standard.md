import RentComparison from '@site/src/components/RentComparison';

<p align="center">
    <figure>
        <img
        src={require('/img/standard/nifty-asset.jpg').default}
        alt="Nifty Asset"
        width="200"
        />
    </figure>
    <h1>Nifty Asset: a lightweight non-fungible standard</h1>
</p>


A non-fungible (NFT) protocol guides future ecosystem developments for many use-cases, influencing both where and how NFTs are utilized. Minimizing friction then becomes important to not create unnecessary barriers that could hinder broader adoption. Even though Nifty Asset is not the only NFT standard in the Solana space, it was created to push NFTs on Solana forward, aiming to enable novel use-cases while improving existing ones.

Nifty Asset has been carefully designed to have a minimal footprint, in terms of both cost and compute units consumption. It is a lightweight protocol that favours composibility and provides a fully extensible architecture. In addition to a set of optional extensions that can be attached to digital assets, it follows the [⎘Proxy Pattern](./blog/proxy-pattern) to provide developers a program interface to customize every aspect of the protocol without requiring direct changes to it. The main features of the protocol are:

- Single account to represent a digital asset.
- Flexible on-chain representation: store as much or as little data using optional extensions.
- Efficient zero-copy de-/serialization to minimize compute units utilization.
- Full-featured standard, including royalty enforcement, delegates, lock/unlock, inscriptions and groups (collections).
- Rust and JavaScript client SDKs.

Choice is good and it is up to the community to decide which solutions are most appropriate for their use-case. The table below summarises how Nifty Asset compares to other popular non-fungible protocols on Solana.

<figcaption align="center"><b>A comparison of different non-fungible protocols on Solana.</b></figcaption>

<RentComparison />

The values on the table have been determined by executing the equivalent transactions on-chain using the same asset configuration. The "basic" case represents the minimal asset that can be created with the protocol; the "nft" case represents an asset with a standard configuration found in the majority of existing collections. In all cases, the costs shown already include any protocol fees, if applicable.

The **Cost** rows are the account rent an asset holds, which is set by the network's `lamports_per_byte_year` value. [SIMD-0437](https://github.com/solana-foundation/solana-improvement-documents/blob/main/proposals/0437-incremental-rent-reduction.md) lowers that value incrementally from 6960 to 696 – a 90% reduction rolled out in five feature-gated steps. Use the selector above the table to price each standard at any step of that schedule; the rent-driven Cost rows recalculate, while the compute-unit and structural rows stay fixed.

The costs are fully refundable in the case of Nifty Asset and Token Extensions since they represent account rent costs only – these protocols do not charge any protocol fees. In the case of Metaplex assets, the protocol fees are non-refundable and charged at the point of creation. There are use-cases where this is important – e.g., the ability to fully recover the costs of an asset enables use-cases where NFTs are utilized as receipts/markers, which can eventually be redeemed to recover the full cost of them.

The rent reduction sharpens this distinction. Because a protocol fee is a flat charge rather than a byte-priced deposit, it does not shrink as `lamports_per_byte_year` falls: it becomes a progressively larger share of an asset's cost, and eventually its floor. At the final 696 rate the fee is the dominant cost for the fee-charging protocols, while the rent-only protocols continue to track the byte size of the asset all the way down.

## Token Extensions or Metaplex? A note on the two incumbents

Before Nifty Asset, a project minting NFTs on Solana chose between two established options – and that choice is a good lens on the tradeoffs the table measures, because the two sit at opposite ends of the same spectrum.

**Token Extensions** (a.k.a. SPL Token 2022) is at heart a *fungible* protocol. It represents a non-fungible by capping a mint's supply at one and freezing the mint authority, so an asset always spans **two accounts** – the mint plus a token account for the owner – and its cost is **pure, fully-refundable rent** with no protocol fee. Metadata, royalties and delegation are opt-in extensions on the mint rather than a separate program, which keeps it minimal, permissively licensed (Apache 2.0), and maintained alongside the runtime. The catch is that it was never designed as an NFT standard: there is **no native royalty enforcement**, non-fungibility is a convention layered onto a fungible primitive, and the two-account model spends more rent and compute than a single-account asset.

**Metaplex** (Token Metadata, and the newer Core) makes the opposite trade: a purpose-built NFT protocol with a full feature set – royalties, creators, collections, editions – but it charges a **non-refundable creation fee** on top of rent, and Token Metadata spreads an asset across **four or more accounts** with the compute cost to match. Its license is commercial (Metaplex NFT Open Source), and – as the selector above makes plain – that fee is precisely the part of the cost the rent reduction cannot touch.

The same split shows up for *fungible* tokens, where Nifty Asset and Metaplex Core do not compete at all. The table's **Fungible** row prices a token that carries `name`/`symbol`/`uri`: Token Extensions keeps that metadata on the mint itself – one account, no fee – while the Metaplex route (a legacy SPL mint plus a Metaplex Token Metadata account) adds a second account and the same non-refundable fee. It is the clearest place to see why native metadata matters.

So the incumbent choice comes down to cost and refundability (Token Extensions) *versus* native NFT features (Metaplex). **Nifty Asset was built to refuse that tradeoff**: a single account, no protocol fee, fully-refundable rent and an open (Apache 2.0) license, *with* a complete NFT feature set – royalty enforcement, delegates, lock/unlock, inscriptions and collections. Step the selector through the SIMD-0437 schedule to see how each of those choices prices out as rent falls.