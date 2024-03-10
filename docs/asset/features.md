---
sidebar_label: 'Features'
sidebar_position: 1
---

# Features

Nifty is designed as a fully-featured digital asset standard for Solana, while also being lightweight and efficient. It is designed to be a minimalistic and flexible standard for representing non-fungible assets on Solana.

It has the following features:

* On-chain traits via the Attributes extension
* On-chain generic data (image, gif, etc.) via the Blob extension
* On-chain metadata via the Metadata extension
* Royalty enforcement via the Royalty and Creators extensions
* On-chain grouping/collections via the Collection extension
* Pointer to off-chain data via the Link extension
* A delegate system with various roles
* Locking and unlocking of assets (e.g. for escrowless marketplaces)

Nifty extensions can be combined to create a wide variety of non-fungible assets, from simple to complex. The standard is designed to be as flexible as possible, allowing for a wide range of use cases and 
you only pay rent for the data you actually need.

## Description of Features

### On-Chain Traits

The Nifty `Attributes` extension allows creating a list of on-chain "traits" -- key/value pairs -- for an asset. The on-chain aspect means these values can be read by other Solana programs and therefore be used by them, e.g. for gaming.
Off-chain attributes are also supported via the `Metadata` or `Links` extensions which allow pointing to external data, similar to other NFT standards on Solana.

### On-Chain Generic Data

The Nifty `Blob` extension allows storing generic data on-chain, such as images, gifs, etc. This data can be read by other Solana programs and therefore be used by them, e.g. for displaying the asset in a marketplace.
Storing large amounts of data in Solana account data is quite expensive, but this extension gives the ability for Fully On Chain (FOC) collections for those who wish for them.

### On-Chain Metadata

The `Metadata` extension allows for the NFT to have a symbol and uri pointing to off-chain metadata, for compatibility with existing NFT standards.
This is one way to attach external data (e.g. image, description, traits) to a Nifty asset. In addition, the `Links` extension is a more generic way to do this.

### Royalty Enforcement

Nifty encodes royalty enforcement directly into its transfer instruction, ensuring that creators receive a portion of the proceeds from secondary sales. This is done via the `Royalty` and `Creators` extensions.
The `Creators` extension specifies the recipients and share of any royalties. The `Royalty` extension is a system of composable `Constraints` that can be used to create restrictions such as an Allowlist or Denylist.
This can be used to exclude or include specific programs as valid owners of the asset, similar to the approach used by pNFTs in the Metaplex standard.

### On-Chain Grouping/Collections

Nifty Assets can be part of an on-chain group or collection using the `Group` field on the Asset. A group asset is created and the members of the group point to the asset in their `Group` field.
This can be used to specify attributes that are common to all assets in the group, such as Royalties or specific Traits. Transfers of members of a group also require the Group asset to be passed in so any potential royalties constraints can be evaluated.

### Pointer to Off-Chain Data

In addition to the `Metadata` extension discussed above, the `Link` extension allows for a more generic way to point to off-chain data. This can be used to point to any off-chain data, not just metadata.
The `Links` extension consists of a list of `Link` structs, each of which contains a `Name` and a `Uri`.

### Delegate System

Nifty assets include a delegate system with the following roles:

* Burn
* Lock
* Transfer

This allows creating a delegate for a Nifty asset that can perform specific actions on behalf of the owner. This is useful for escrowless marketplaces, for example.

### Locking and Unlocking of Assets

Nifty assets can be locked and unlocked. This is useful for applications such as escrowless marketplaces. When an asset is locked, it cannot be transferred. When an asset is unlocked, it can be transferred again.
