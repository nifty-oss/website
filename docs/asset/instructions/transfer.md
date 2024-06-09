---
sidebar_label: 'Transfer'
sidebar_position: 12
---

# `transfer`

Transfers ownership of the aseet to a new public key. When the asset or the group asset has royalty constraints associated, these are validated during the transfer.

## Accounts

Below is the list of accounts expected by the `transfer` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Asset account |
| signer           |          | ✅     |          | Current owner of the asset or transfer delegate |
| recipient        |          |        |          | Recipient of the asset |
| group            |          |        | ✅        | Group asset account of the asset  |

The `group` is required when the asset is part of a group. The rationale is that royalties can be set at the group level and they need to be validated.

:::info

For assets with associated royalties, the transfer will fail if the royalties constraint is not satisfied.

:::

## Arguments

None.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { transfer } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - signer: KeypairSigner
    //   - recipient: PublicKey
    await transfer(umi, {
      asset,
      signer,
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
