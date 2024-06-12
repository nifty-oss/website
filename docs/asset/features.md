---
sidebar_label: 'Features'
sidebar_position: 1
---

# Features

Nifty Asset is a fully-featured digital asset standard for Solana. It is lightweight and efficient, designed to offer a small footprint (compute units consumption) and be highly flexible. The main features of the standard are:

- Single account to represent a digital asset.
- Flexible on-chain representation: store as much or as little data using optional extensions.
- Efficient zero-copy de-/serialization to minimize compute units utilization.
- Full-featured standard, including royalty enforcement, delegates, lock/unlock, inscriptions and groups (collections).
- Rust and JavaScript client SDKs.

Extensions can be combined to create a wide variety of non-fungible assets, from simple assets with links to off-chain data to fully on-chain assets. In addition to extensions, Nifty Asset follows the [⎘Proxy Pattern](/blog/proxy-pattern) to provide developers a program interface to customize every aspect of the protocol – and it enables that without requiring direct changes to the program. The advantage of that is that developers have full flexibility to extend its behaviour in an non-opiniated way. The only requirement is to implement the [⎘program interface](https://crates.io/crates/nifty-asset-interface).

## Single Account

The `Asset` account consists of a fixed length (header) section followed by an optional variable length section (extensions). The header section contains the basic information of an asset, such as the `state`, `standard`, `name`, and `owner`. The extensions section contains additional data that can be attached to the asset.

Extensions can either represent additional on-chain data or used to include pointers to external data. For example, an asset can include its image on-chain as an extension or a pointer to an external image.

## Delegate System

Nifty Asset include a delegate system with the following roles:

* `Burn`
* `Lock`
* `Transfer`

A delegate can have more than one role active at the same time. This allows creating a delegate for an asset that can perform specific actions on behalf of the owner. This is useful for escrowless marketplaces, for example.

## Locking Assets

Asset accounts can be locked and unlocked. This is useful for applications such as escrowless marketplaces and staking. When an asset is locked, it cannot be burned or transferred. Locking can be performed either by the asset owner or a delegate. Once the asset is unlocked, all instruction are permitted.

## Soulbound Assets

Nifty Asset allows the creation of assets that cannot be transferred – these are called "soulbound" assets. These assets are created with the `Soulbound` standard, which cannot be changed after creation.


## Extensions

Extensions represent additional data and behaviour that can be attached to assets. Most extensions can be added/removed from assets at any point, as long as the asset is mutable. Extensions that define the "nature" of the assets (e.g., `manager` extension) must be added when the asset is created.

One of the main advatage of having on-chain extensions is that this data can be read and manipulated by programs.

### Attributes

The `Attributes` extension allows creating a list of on-chain "traits" (key/value pairs) for an asset. The on-chain aspect means these values can be read by other Solana programs and therefore be used by them, e.g., for gaming.

Off-chain attributes are also supported via the `Metadata` or `Links` extensions, which allow pointing to external data, similar to other NFT standards on Solana.

### Binary Large Object (Blob)

The `Blob` extension allows storing generic data on-chain, such as images and documents. This data can be read by other Solana programs and therefore be used by them, e.g., for displaying the asset in a marketplace.
While storing large amounts of data in a Solana account data is quite expensive, this extension gives the ability to create fully on-chain (FOC) assets for those who wish for them.

### Bucket

The `Bucket` extension allows storing generic data on-chain, similarly to a `Blob` extension. The main difference is that it is not necessary to specify its content type. The data can be read by other Solana programs, making it useful to store serialized ("object") data.

### Creators

The `Creators` extension allows adding a list of creators to an asset, specifying their status (`verified` or not) and a percentage share. In most cases, this extension is used in combination with `Royalties` to determine the addresses that should received royalties. There is no limit on how many creators can be added to an asset.

### Grouping

Assets can be part of an on-chain group (collection). A group asset is created using the `Grouping` extension, which specify the maximum size of the group (or indicates that the group has no upper limit) and its current size. Member assets of the group point to the group asset in their `group` account field.

A group asset can be used to specify configuration values that are common to all assets in the group, such as creators, royalties or specific attributes. This provides a cost-effective way to store information on-chain that applies to multiple assets.

### Links

The `Links` extension enables a generic way to point to off-chain data. It consists of a list of link pairs, each of which contains a `name` and a `uri`. This can be used to point to any additional off-chain data or resources.

### Manager

For use cases where the asset needs to be controlled (managed) by a third-party address, Nifty Asset allows the creation of "managed" assets. These assets have the `Manager` extension enabled, which defines a delegate address with customizable permissions.

Since the `Manager` extension changes the nature of the asset, given that the owner does not have full ownership of the asset, the extension must be enabled at the creation point and cannot be removed. To clearly distinguish "managed" assets from the others, the `standard` account field is set to `Managed` in this case. 

### Metadata

The `Metadata` extension allows for assets to have on-chain description, symbol and uri pointing to off-chain metadata, for compatibility with existing NFT standards.

### Properties

The `Properties` extension allows creating a list of on-chain "typed" values (key/value pairs) for an asset. It currently supports three different types: `text` (as a `String` value), `number` (as an `u64` value) and `boolean`. The on-chain aspect means these values can be read by other Solana programs and therefore be used by them (e.g., for gaming).

### Proxy

In addition to extensions, Nifty Asset implements the [⎘Proxy Pattern](/blog/proxy-pattern) to allow developers extens the program behaviour. The `Proxy` extension is used to identify accounts that are "proxied" – these accounts will be required to be a signer on instructions that manipulate them. The extension stores the information for clients to determine the address of the proxy program; it also includes the `seeds` and `bump` information for a proxy program to add a signature for the account.

Since "proxied" accounts need to be created by a proxy program, the extension must be enabled at the creation point and cannot be removed. To clearly distinguish "proxied" assets from the others, the `standard` account field is set to `Proxied` in this case. 

### Royalties

Nifty Asset encodes royalty enforcement directly into its transfer instruction using a system of composable `Constraint`s that can be used to create restrictions such as an Allowlist or Denylist, ensuring creators receive a portion of the proceeds from secondary sales. This is done via the `Royalties` extension, where creators can configure the royalties percentage and constraints. These can be used to exclude or include specific programs as valid owners of the asset, similar to the approach used by Programmable NFTs in the Metaplex standard.

The `Royalties` extension is used in combination with the `Creators` extension in most cases, where the `Creators` extension specifies the recipients and share of any royalties.
