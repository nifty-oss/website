---
sidebar_label: 'Create'
sidebar_position: 5
---

# `create`

Creates a new asset by initializing an account. The asset can be initialized with or without extensions. To create an asset with extension data greater than the transaction size (`~1232 bytes`), you can use `allocate` instruction to add the data prior to `create` or update the asset after creation.

## Accounts

Below is the list of accounts expected by the `create` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       | ✅     |          | Uninitialized asset account |
| authority        |          | (optional)       |          | Authority of the asset |
| owner            |          |        |          | Owner of the asset |
| group            | ✅       |        | ✅        | Asset account of the group |
| group authority  |          | ✅     | ✅        | Group authority for creating an asset into a group |
| payer            | ✅       | ✅     | ✅        | Account paying for the storage fees |
| system program   |          |        | ✅        | System program |

When creating an asset into a group, either the `authority` must be a signer and be the authority of the group or the `group authority` must be provided.

The `payer` and `system program` are only needed if the account has not being allocated; when the `allocate` is used to initialize extension data and no other extension is added during creation, these are not needed.

## Arguments

The `create` instruction expects the information of the asset, including an optional list of extensions.

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `name`            | 0      | ~    | Name of the asset (up to 35 characters). |
| `standard`        | ~      | 1    | The standard of the asset. |
| `mutable`         | ~      | 1    | Indicates whether the asset is mutable or not. |
| `extensions`      | ~      | ~    | **(optional)** List of extensions. |

It is possible to specify a list of `ExtensionInput` objects to create an asset with extensions. Alternatively, extensions can be added though the `allocate` instruction  beforehand or usingt he `update`.

The `standard` is one of the values of:
- `NonFugible`
- `Managed`
- `Soulbound`
- `Proxied`

`Proxied` is reserved to be used by proxy programs.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { create, Standard } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: KeypairSigner
    //   - authority: PublicKey
    //   - owner: PublicKey
    //   - payer: KeypairSigner
    await create(umi, {
      asset,
      authority,
      owner,
      payer,
      name: 'Soulbound Asset',
      standard: Standard.Soulbound,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
