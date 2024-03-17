---
sidebar_label: 'Extensions'
sidebar_position: 2
---

# Extensions

Nifty Assets are composed of two parts: Base Metadata and Extensions. Extensions are optional chunks of data that are stored on the asset after the base metadata. They are used to add additional functionality to the asset, such as on-chain traits, on-chain generic data, on-chain metadata, royalty enforcement, on-chain grouping/collections, pointers to off-chain data, and more.

The following extensions are currently available:

## Attributes

The attributes extension consists of a list of `Trait`s, where each trait has a name and a value field.

| Field    | Description |
|----------|-------------|
|   Name   |   Name of the trait.      |
|   Value   |   The value associated with the trait.      |

Example: 

```json
{
  "attributes": [
    {
      "name": "Color",
      "value": "Red"
    },
    {
      "name": "Size",
      "value": "Large"
    }
  ]
}
```

This allows assigning on-chain traits to digital assets. The benefit of traits being on-chain in Solana accounts is they can be read directly by other Solana programs and used by them, e.g. for gaming, calculating NFT rarity, etc.

## Blob

The blob extension allows storing generic data on-chain, such as images, gifs, etc. This data can be read by other Solana programs and therefore be used by them, e.g. for displaying the asset in a marketplace.

| Field    | Description |
|----------|-------------|
|   Content Type   |   The mime type of the data in the extension, e.g: image/jpg      |
|   Data   |   The binary data of the extension.      |

Example: 

```json
{
  "content_type": "image/jpg",
  "data": "base64 encoded image data"
}
```

This extension can be used to store any arbitrary data on a Nifty Asset but a typical example would be to store the image of the asset in order to have a fully-on-chain asset.

## Creators

The creators extension specifies the recipients and share of any royalties. This extension is used to inform marketplaces and other programs of the royalties that should be paid to the creators of the asset.

The creators extension consists of a list of `Creator`s, where each creator has an address, verified, and share field.

| Field    | Description |
|----------|-------------|
|   Address   |   The Solana address of the creator.      |
|   Verified   |   Whether or not the creator has been verified.      |
|   Share   |   The share of the royalties that the creator should receive.      |

Example: 

```json
{
  "creators": [
   {
        "address": "AaSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8",
        "verified": true,
        "share": 70
    },
    {
        "address": "8UWRNwLHxD5DmEJ2cjVFdVpCNhfxL7bLkYpXG1o9srEN",
        "verified": false,
        "share": 30
    },
  ]
}
```

Shares are denoted as percentages and therefor must add up to 100. The verified field indicates whether the creator itself has signed to verify the address as their own. This can be useful as a way to prevent impersonation and to indicate that the creator is actually involved in the project.

## Grouping

The grouping extension allows for the Nifty Asset to be part of an on-chain group or collection. A group asset is created and the members of the group point to the asset in their `Group` field in the base metadata. This group parent must have a `Grouping` extension with some additional group information.


| Field    | Description |
|----------|-------------|
|   Size   |   The *current* size of the group.      |
|   Max Size   |   The *maximum* size of the group.      |

Every time an asset is added to the group, the size is incremented. The size is decremented when an asset is removed from the group, or when it is burned. The maximum size is the maximum number of assets that can be in the group at any one time.

Because Nifty solely controls the lifecycle of assets, it is able to accurately track and enforce the constraints.

## Links

The links extension consists of a list of `Link` structs, where each of which contains a `Name` and a `Uri`.

| Field    | Description |
|----------|-------------|
|   Name   |   The name of the link.      |
|   Uri   |   The uri of the link.      |

Example: 

```json
{
  "links": [
    {
      "name": "Website",
      "uri": "https://niftyassets.org"
    },
    {
      "name": "Twitter",
      "uri": "https://twitter.com/niftyassets"
    }
  ]
}
```

These can be used to point to any off-chain data, not just metadata. This can be useful for pointing to a website, a twitter account, or any other off-chain data that is relevant to the asset.

## Metadata

The metadata extension allows for the NFT to have a symbol and uri pointing to off-chain metadata, for compatibility with existing NFT standards.

| Field    | Description |
|----------|-------------|
|   Symbol   |   The symbol of the asset.      |
|   Uri   |   The uri of the asset.      |

Example: 

```json
{
  "symbol": "NFTY",
  "uri": "https://niftyassets.org/assets/1"
}
```

This is one way to attach external data (e.g. image, description, traits) to a Nifty asset. In addition, the `Links` extension is a more generic way to do this.

## Royalty

The royalty extension is a system of composable `Constraints` that can be used to create restrictions such as an Allowlist or Denylist. This can be used to exclude or include specific programs as valid owners of the asset, similar to the approach used by pNFTs in the Metaplex standard.

| Field    | Description |
|----------|-------------|
|   Basis Points   |   The fee, in basis points, that should be paid for royalties in every appropriate transfer.      |
|   Constraint   |   A constraint to be checked during transfer. A failing constraint will block the transfer.  |

### Constraints

Constraints are a way to enforce rules on the asset. They are composable and can be combined to create complex rules. The following constraints are available:

* And 
* Or
* Not
* Empty
* PubkeyMatch
* OwnedBy

### And

The `And` constraint is a composite constraint that requires all of its sub-constraints to pass.

Example: 

```json
{
  "constraint": {
    "And": [
      {
      "PubkeyMatch": {
          "account": "Recipient",
          "pubkeys": [
              "AaSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"
            ]
        }
      },
      {
      "OwnedBy": {
          "account": "Recipient",
          "owners": [
              "8UWRNwLHxD5DmEJ2cjVFdVpCNhfxL7bLkYpXG1o9srEN"
            ]
        }
      }
    ]
  }
}
```

This constraint requires that the recipient is owned by the specified pubkey and that the transfer is to a specific pubkey. This simple example could be used to enforce that the asset can only be transferred to a specific program and a specific address owned by that program.

### Or

The `Or` constraint is a composite constraint that requires at least one of its sub-constraints to pass.

Example: 

```json
{
  "constraint": {
    "Or": [
      {
      "PubkeyMatch": {
          "account": "Recipient",
          "pubkeys": [
              "AaSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"
            ]
        }
      },
      {
      "OwnedBy": {
          "account": "Recipient",
          "owners": [
              "8UWRNwLHxD5DmEJ2cjVFdVpCNhfxL7bLkYpXG1o9srEN"
            ]
        }
      }
    ]
  }
}
```

This constraint requires that the recipient is owned by the specified pubkey or that the transfer is to a specific pubkey.

### Not

The `Not` constraint is a composite constraint that requires its sub-constraint to fail.

Example: 

```json
{
  "constraint": {
    "Not": {
      "PubkeyMatch": {
          "account": "Recipient",
          "pubkeys": [
              "AaSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"
            ]
        }
    }
  }
}
```

This constraint requires that the recipient is not owned by the specified pubkey.

### Empty

The `Empty` constraint is a placeholder constraint that always passes.

Example: 

```json
{
  "constraint": {
    "Empty": {}
  }
}
```

This constraint always passes.

### PubkeyMatch

The `PubkeyMatch` constraint requires that the specified account must match one of the pubkeys in the list.

Example: 

```json
{
  "constraint": {
    "PubkeyMatch": {
      "account": "Recipient",
      "pubkeys": [
          "AaSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"
        ]
    }
  }
}
```
In this example, the recipient account in the transfer must match one of the pubkeys in the pubkeys list.

### OwnedBy

The `OwnedBy` constraint requires that the specified account is owned by one of the specified pubkeys.


Example: 

```json
{
  "constraint": {
    "OwnedBy": {
      "account": "Recipient",
      "owners": [
          "8UWRNwLHxD5DmEJ2cjVFdVpCNhfxL7bLkYpXG1o9srEN","5Bw5EaQrCvgom3HFQ3ojUg2jd87nwzonPj4r5dVZKj7F"
        ]
    }
  }
}
```

In this example, the recipient account in the transfer must be owned by one of the programs in the owners list.
