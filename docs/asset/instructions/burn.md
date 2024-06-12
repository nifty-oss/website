---
sidebar_label: 'Burn'
sidebar_position: 3
---

# `burn`

Burns an asset by closing its account and returning the rent funds.

:::info

It is only possible to burn as asset that represent a group if the group is empty &mdash; i.e., there are no assets associated with the group.

:::

## Accounts

Below is the list of accounts expected by the `burn` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Initialized asset account |
| signer           | ✅       | ✅     |          | The owner or burn delegate of the asset |
| recipient        | ✅       |        | ✅        | The address to approve as delegate |
| group            | ✅       |        | ✅        | Asset account of the group |

The `recipient` is the address that will receive the rent funds; when not specified, the funds will be returned to the `signer`. The `group` is required when the asset is part of a group (collection) &mdash; the size of the group will decrese once the asset is burned.

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { burn } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - signer: KeypairSigner
    //   - recipient: PublicKey
    //   - group: PublicKey
    await burn(umi, {
      asset,
      signer,
      recipient: destination.publicKey,
      group: group.publicKey,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
