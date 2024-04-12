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

<p align="center">
    <figcaption><b>A comparison of different non-fungible protocols on Solana.</b></figcaption>
    <figure>
        <img
        src={require('/img/standard/comparison.png').default}
        alt="Comparison"
        />
    </figure>
</p>

The values on the table have been determined by executing the equivalent transactions on-chain using the same asset configuration. The "basic" case represents the minimal asset that can be created with the protocol; the "nft" case represents an asset with a standard configuration found in the majority of existing collections. In all cases, the costs shown already include any protocol fees, if applicable.

The costs are fully refundable in the case of Nifty Asset and Token Extensions since they represent account rent costs only – these protocols do not charge any protocol fees. In the case of Metaplex assets, the protocol fees are non-refundable and charged at the point of creation. There are use-cases where this is important – e.g., the ability to fully recover the costs of an asset enables use-cases where NFTs are utilized as receipts/markers, which can eventually be redeemed to recover the full cost of them.

It is worth nothing that Token Extensions (a.k.a. SPL Token 2022) is primarily a fungible protocol. It can be used as a non-fungible by adding restrictions to the supply of the mint account, but still requires the use of a token account to represent the owner of the non-fungible.