---
sidebar_label: 'Unverify'
sidebar_position: 15
---

# `unverify`

Unverifies a creator.

## Accounts

Below is the list of accounts expected by the `unverify` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Asset account |
| creator          |          | ✅     |          | Creator account to unverify |

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { unverify } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - creator: KeypairSigner
    await unverify(umi, {
      asset,
      creator,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
