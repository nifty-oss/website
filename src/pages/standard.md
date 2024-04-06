<p align="center">
    <figure>
        <img
        src={require('/img/standard/nifty-asset.jpg').default}
        alt="Nifty Asset"
        width="300"
        />
    </figure>
    <h1>Nifty Asset: a lightweight non-fungible standard</h1>
</p>


The choice of non-fungible (NFT) protocol matters. It lays the foundations for future ecosystem developments and needs to be free and fair for all. Commercialisation at the lowest protocol levels introduces unnecessary friction to the system and undermines the key principles of decentralization in Web3.

Even though Nifty is not the only NFT standard in the Solana space, we believe it is the way forward for NFTs, enabling a more open and fair Solana and also a solid technological investment for any project contemplating alternatives.

Nifty Asset has been carefully designed to have minimal footprint, in terms of both cost and compute units consumption. It is a lightweight protocol that favours composibility and provides a fully extensible architecture. Nifty Asset implements the [⎘proxy pattern](./blog/proxy-pattern), so developers can customize every aspect of the protocol without requiring direct changes to it.

Choice is good and it is up to the community to decide which solutions are most appropriate for their use-case The table below summarises how Nifty Asset compares to other popular metadata standards on Solana.

<p align="center">
    <figure>
        <img
        src={require('/img/standard/cost-table.png').default}
        alt="Cost Table"
        />
    </figure>
</p>

The values on the table have been determined by executing the equivalent transactions on-chain using the same asset. On the NFT case, it shows the costs using a standard configuration of an existing collection item. In all cases, the costs do not include the cost of the asset representing the collection. Protocols fees are already included on the cost values.

The costs for rent are fully refundable in the case Nifty Asset, which does not charge any protocol fees. In the case of Metaplex assets, the protocol fees are non-refundable and charged at the point of creation.

There are other standards based on Token Extensions (SPL Token-2022) and we will update this table accordingly once the same evaluation is completed.