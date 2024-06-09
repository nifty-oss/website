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
  <TabItem value="orange" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{Attributes, AttributesBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut attributes = AttributesBuilder::default();
    attributes.add("head", "hat");

    let ix = AllocateBuilder::new()
      .asset(asset.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Attributes,
        length: data.len() as u32,
        data: Some(data),
    })
    .instruction();
    ```
  </TabItem>
  <TabItem value="banana" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::{Attributes, AllocateCpiBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut attributes = AttributesBuilder::default();
    attributes.add("head", "hat");

    AllocateCpiBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.group)
      .payer(Some(ctx.accounts.payer))
      .system_program(Some(ctx.accounts.system_program))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Attributes,
        length: data.len() as u32,
        data: Some(data),
    })
    .invoke();
    ```
  </TabItem>
</Tabs>
