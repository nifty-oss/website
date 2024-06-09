---
sidebar_label: 'Handover'
sidebar_position: 7
---

# `handover`

Handovers an asset to a new authority.

## Accounts

Below is the list of accounts expected by the `handover` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Initialized asset account |
| authority        |          | ✅     |          | Authority of the asset |
| new authority    |          | ✅     |          | New authority of the assets to set |

:::info

The requirement of the `new authority` to be a signer is to ensure that the new authority is the intended one.

:::

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { handover } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - authority: KeypairSigner
    //   - newAuthority: KeypairSigner
    await handover(umi, {
      asset,
      authority,
      newAuthority,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
