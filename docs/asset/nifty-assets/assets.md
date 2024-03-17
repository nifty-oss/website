---
sidebar_label: 'Nifty Assets'
sidebar_position: 1
---

# Nifty Assets

Nifty Assets are the single-account non-fungible digital assets that are the heart of the Nifty standard. They are designed to be a minimalistic and flexible standard for representing non-fungible assets on Solana.

Here we examine their make up and features in-depth.

Nifty Assets are composed of two parts:

* Base Metadata, which is common to every Nifty Asset and
* Extensions, which are optional and can be combined to create a wide variety of non-fungible assets, from simple to complex.



## Base Metadata

The base metadata of a Nifty Asset is composed of the following fields:

| Field    | Description |
|----------|-------------|
|   Discriminator   |   Represents the type of account. Currently: `Unitialized` or `Asset`      |
|   State   |   The state of the asset: `Locked` or `Unlocked`      |
| Standard | The standard of the asset, to allow differnt types of Nifty Assets. Currently: `NonFungible`, `Subscription` and `Soulbound`      |
| Mutable | Whether or not the asset can be modified |
| Owner  | The owner of the asset. Owners can approve delegates, transfer, and burn the asset. |
| Group  | What group, if any, the asset belongs to. |
| Authority  | The authority of the asset. Authorities can update assets and verify them as a member of a group.  |
| Delegate  |  The delegate of the asset. Delegates can burn, lock or transfer the asset, depending on the roles assigned  to them. |
| Name  | The name of the asset, up to 35 characters in length. |

These 168 bytes are the minimum required to represent a Nifty Asset and are common to every Nifty Asset. Any additional data is optional and stored in extensions.

## Extensions

Extensions are optional chunks of data that are stored on the asset after the base metadata. They are used to add additional functionality to the asset, such as on-chain traits, on-chain generic data, on-chain metadata, royalty enforcement, on-chain grouping/collections, pointers to off-chain data, and more.

The following extensions are currently available:

* Attributes
* Blob
* Creators
* Grouping
* Links
* Metadata
* Royalty

Extensions must be allocated at the time of the asset creation in order to fix their location in the account data. This is done to aid in the zero-copy deserialization of the data and keep the program efficient. Once allocate, extensions cannot be removed, but can be updated by the `authority` as long as the asset is mutable.

For more information on each extension, see the [Extensions](/docs/asset/nifty-assets/extensions) page.