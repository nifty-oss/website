---
sidebar_label: 'Allocate'
sidebar_position: 1
---

# `allocate`

Allocates an extension into an uninitialized asset (buffer) account. This is useful when the extension data is greater than the transaction size (`~1232 bytes`), which requires the data to be sent over multiple transactions.

The allocate instruction should be used once for each extension to be added to an asset. Alternatively, it is possible to specify a list of extensions on the `create` instruction &mdash; this is the preferred method when all extension data fits into a single transaction.

## Accounts

Below is the list of accounts expected by the `allocate` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       | ✅      |          | Uninitialized asset account |
| payer            | ✅       | ✅      | ✅       | Account paying for the storage fees |
| system program   |          |        | ✅       | System Program account |

The `payer` and `system program` are only required when the account space is not preallocated. In this case, the account will be resized to fit the required extension data.

## Arguments

The `allocate` instruction expects the information of the extension to be added to the asset.

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `extension_type`  | 0      | 1    | The type of the extension (a value from the `ExtensionType` enum). |
| `length`          | 1      | 4    | The tota length of the extension as a `u32` value. |
| `data`            | 5      | ~    | **(optional)** Extension data bytes or a slice of it. |

The `length` represents the total length of the extension, even if it is over the transaction size limit. The `data` is optional and can either represent the complete data for the extension, if the extension data fits on a single transaction, or a partial amount of the data if the extension is larger.

When an extension data needs multiple transaction to be written, the `allocate` instruction will be followed by one or more `write` instructions.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { allocate, attributes } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: KeypairSigner
    //   - payer: KeypairSigner
    await allocate(umi, {
      asset,
      payer,
      extension: attributes([{ name: 'head', value: 'hat' }]),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
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
  <TabItem value="rust on-chain" label="Rust (on-chain)">
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

:::tip

For on-chain use, the Nifty Asset crate offers macros that facilitate the manipulation of the extension data to avoid issues with stack/heap size:
- [allocate_and_write](https://docs.rs/nifty-asset/0.4.0/nifty_asset/macro.allocate_and_write.html): convenience macro to invoke `allocate` and `write` instructions.
- [allocate_instruction_data](https://docs.rs/nifty-asset/0.4.0/nifty_asset/macro.allocate_instruction_data.html): convenience macro to create the instruction data for the `allocate` instruction.
- [allocate_update_data_length](https://docs.rs/nifty-asset/0.4.0/nifty_asset/macro.allocate_update_data_length.html): updates the length of the extension data in the `allocate` instruction data.

:::