---
sidebar_label: 'Revoke'
sidebar_position: 11
---

# `revoke`

Revokes a delegate. It is possible to specify which operations should be revoked.

## Accounts

Below is the list of accounts expected by the `approve` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Initialized asset account |
| signer            |          | ✅     |         | Owner of the asset or current delegate |

## Arguments

The `revoke` instruction expects the information of roles to be revoked.

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `delegate_input`  | 0      | ~    | A value from the `DelegateInput` enum. |

The input accepts either an `All` value, which means that all roles will be revokes, or an array of `DelegateRole` values. The `DelegateRole` specify the valid roles of a delegate:
- `Transfer`: revokes the ability of the delegate to transfer the asset;
- `Lock`: revokes the ability of the delegate to lock the asset;
- `Burn`: revokes the ability of the delegate to burn the asset.

:::info

If the delegate has no active roles, then it is completely revoked &mdash; the `delegate` field on the asset account is cleared.

:::

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { DelegateRole, delegateInput, revoke } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - signer: KeypairSigner
    await revoke(umi, {
      asset: asset,
      signer,
      delegateInput: delegateInput('Some', {
        roles: [DelegateRole.Transfer],
      }),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
