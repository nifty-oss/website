---
sidebar_label: 'Verify'
sidebar_position: 17
---

# `verify`

Verifies a creator. The list of creators of an asset is specified by the `Creators` extension.

## Accounts

Below is the list of accounts expected by the `verify` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Asset account |
| creator          |          | ✅     |          | Creator account to verify |

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { verify } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - creator: KeypairSigner
    await verify(umi, {
      asset,
      creator,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
