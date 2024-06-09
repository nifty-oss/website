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
