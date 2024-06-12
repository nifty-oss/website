---
sidebar_label: 'Write'
sidebar_position: 18
---

# `write`

Writes data to an extension. This is used when the extension data is greater than the transaction size (`~1232 bytes`), which requires the data to be sent over multiple transactions. The `write` instruction is used after allocating the extension.

## Accounts

Below is the list of accounts expected by the `write` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       | ✅      |          | Uninitialized asset account |
| payer            | ✅       | ✅      |          | Account paying for the storage fees |
| system program   |          |        |          | System Program account |

## Arguments

The `allocate` instruction expects the information of the extension to be added to the asset.

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `overwrite     `  | 0      | 1    | Indicates whether to overwrite the existing data or not. |
| `bytes `          | 1      | ~    | The data to write. |

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { write } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: KeypairSigner
    //   - payer: KeypairSigner
    await write(umi, {
      asset,
      payer,
      overwrite: false,
      bytes,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
