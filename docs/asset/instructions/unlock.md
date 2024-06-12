---
sidebar_label: 'Unlock'
sidebar_position: 14
---

# `unlock`

Unlocks an asset previously locked.

:::info

When the asset is locked by a delegate, only the delegate can unlock the asset. Likewise, when the asset is locked by the owner, only the owner can unlocked it.

:::

## Accounts

Below is the list of accounts expected by the `unlock` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Initialized asset account |
| authority        |          | ✅     |          | Delegate or owner account |

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { unlock } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - sugner: KeypairSigner (either owner of delegte)
    await unlock(umi, {
      asset,
      signer,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
