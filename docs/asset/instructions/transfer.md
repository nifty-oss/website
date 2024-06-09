---
sidebar_label: 'Transfer'
sidebar_position: 12
---

# `transfer`

Transfers ownership of the aseet to a new public key. When the asset or the group asset has royalty constraints associated, these are validated during the transfer.

## Accounts

Below is the list of accounts expected by the `transfer` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Asset account |
| signer           |          | ✅     |          | Current owner of the asset or transfer delegate |
| recipient        |          |        |          | Recipient of the asset |
| group            |          |        | ✅        | Group asset account of the asset  |

The `group` is required when the asset is part of a group. The rationale is that royalties can be set at the group level and they need to be validated.

:::info

For assets with associated royalties, the transfer will fail if the royalties constraint is not satisfied.

:::

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { transfer } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - signer: KeypairSigner
    //   - recipient: PublicKey
    await transfer(umi, {
      asset,
      signer,
      recipient,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
