---
sidebar_label: 'Group'
sidebar_position: 6
---

# `group`

Adds an asset to a group. A group is represented by an asset with the `Grouping` extension.

## Accounts

Below is the list of accounts expected by the `group` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Initialized asset account |
| group            | ✅       |        |          | Asset account of the group |
| authority        |          | ✅     |          | Authority of the assets |

The instruction expects that both asset and group authorities match and it will fail otherwise. The signing `authority` must be the authority of the group or the `Grouping` extension delegate.

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { group } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - group: PublicKey
    //   - authority: KeypairSigner
    await group(umi, {
      asset,
      group,
      authority
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
