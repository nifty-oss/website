---
sidebar_label: 'Lock'
sidebar_position: 8
---

# `lock`

Locks an asset. When the asset is locked, it is not possible to execute an `Approve`, `Burn`, `Revoke` and `Transfer` instructions.

:::info

An asset can be locked by either the owner or delegate. When the asset has a delegate set, it can only be locked by the delegate. In order to locked with an owner, the delegate needs to be revoked first.

:::

## Accounts

Below is the list of accounts expected by the `lock` instruction.

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
    import { lock } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - sugner: KeypairSigner (either owner of delegte)
    await lock(umi, {
      asset,
      signer,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
