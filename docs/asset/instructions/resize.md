---
sidebar_label: 'Resize'
sidebar_position: 10
---

# `resize`

Resizes an asset account. This instruction is used when adding extension data over the `10` kilobytes account resize limit to an asset via the `update` instruction. While it is possible to add the extension data to a buffer (uninitialized asset) account, executing an `update` with the buffer account will require resizing the asset account over the maximum realloc limit &mdash; using this instruction avoids this limitation, since the asset account can be resized multiple times up to the require size before the `update` instruction.

## Accounts

Below is the list of accounts expected by the `resize` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Initialized asset account |
| authority        |          | ✅     |          | Authority of the asset |
| payer            | ✅       | (optional) |       | Account paying for the storage fees |
| system program   |          |        | ✅        | System program |

The `payer` pays for storage fees when the account size is extended and needs to be a signer; in this case, the `system program` account is required. When the account is trimmed, the `payer` receives the refunded rent.

## Arguments

The `resize` instruction expects the type of the resize.

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `strategy`        | 0      | 1    | Type of the resize. |
| `size`            | 1      | 2    | Extend size. |

The resize strategy is specified as one of the values of the `Strategy` enum:
- `Trim`: the account is resized to the minimum required size;
- `Extend`: the account is resized by `size` bytes.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { resize, strategy } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - authority: KeypairSigner
    //   - payer: KeypairSigner
    await resize(umi, {
      asset,
      authority,
      payer,
      strategy: strategy('Extend', { value: 1000 }),
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
