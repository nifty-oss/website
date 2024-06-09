---
sidebar_label: 'Update'
sidebar_position: 16
---

# `update`

Updates an asset. The `update` instruction can be used to add or update extensions of an asset.

To update an asset with extension data greater than the transaction size (`~1232 bytes`), you can use `allocate` instruction to create a buffer (uninitialized asset) account, which can then be passed to the update.

:::info

It is not possible to update an immutable asset.

:::

## Accounts

Below is the list of accounts expected by the `update` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Asset account |
| authority        |          | ✅     |          | Authority of the asset |
| buffer           | ✅       |        | ✅        | Extension buffer (uninitialized asset) account |
| group            |          |        | ✅        | Asset account of the group |
| payer            | ✅       | ✅     | ✅        | Account paying for the storage fees |
| system program   |          |        | ✅        | System program |

When a `buffer` account is used to pass the extension data and there are mutiple extensions on the buffer account, only the first extension is used.

The `payer` and `system program` are only needed if adding a new externsion.

## Arguments

The `create` instruction expects the information of the asset, including an optional list of extensions.

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `name`            | 0      | ~    | **(optional)** Updated name of the asset (up to 35 characters). |
| `mutable`         | ~      | 1    | **(optional)** Indicates whether the asset is mutable or not. |
| `extension`       | ~      | ~    | **(optional)** Extension to add or update. |

All three fields of the `update` are optional, meaning that they are only updated if a new value is set. In the case of an `extension`, when the extension is already present on the asset, its data is updated; otherwise, the extension is added to the asset.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { attributes, update } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - authority: KeypairSigner
    //   - payer: KeypairSigner
    await update(umi, {
      asset,
      authority,
      payer,
      extension: attributes([{ name: 'Clothes', value: 'Purple Shirt' }]),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
