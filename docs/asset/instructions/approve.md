---
sidebar_label: 'Approve'
sidebar_position: 2
---

# `approve`

Approves a delegate to manage an asset. It is possible to specify which operations a delegate can perform.

## Accounts

Below is the list of accounts expected by the `approve` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Initialized asset account |
| owner            |          | ✅     |          | The owner of the asset |
| delegate         |          |        |          | The address to approve as delegate |

## Arguments

The `approve` instruction expects the information of roles to be enabled.

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `delegate_input`  | 0      | ~    | A value from the `DelegateInput` enum. |

The input accepts either an `All` value, which means that all roles will be enabled, or an array of `DelegateRole` values. The `DelegateRole` specify the valid roles of a delegate:
- `Transfer`: the delegate is allowed to transfer the asset;
- `Lock`: the delegate is allowed to lock the asset;
- `Burn`: the delegate is allowed to burn the asset.

:::info

A delegate can have more than one role active at the same time.

:::

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { DelegateRole, approve, delegateInput } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - owner: KeypairSigner
    //   - delegate: PublicKey
    await approve(umi, {
      asset,
      owner,
      delegate,
      delegateInput: delegateInput('Some', { roles: [DelegateRole.Transfer] }),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
