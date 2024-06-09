---
sidebar_label: 'Close'
sidebar_position: 4
---

# `close`

Closes an uninitialized (buffer) asset account, returning the rent funds. This instruction is used to close an account created by `allocate`, either because the asset was not created or the account was only used as a buffer for `update`.

## Accounts

Below is the list of accounts expected by the `close` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       | ✅      |          | Uninitialized (buffer) asset account |
| recipient        | ✅       |        |          | Account receiving refunded rent |

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { close } from '@nifty-oss/asset';

    // Accounts:
    //   - buffer: KeypairSigner
    //   - recipient: PublicKey
    await close(umi, {
      buffer,
      recipient,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
