---
sidebar_label: 'Attributes'
sidebar_position: 1
---

# Attributes

The Attributes extension allows creating a list of on-chain "traits" (key/value pairs) for an asset. The on-chain aspect means these values can be read by other Solana programs and therefore be used by them, e.g., for gaming.

The extension consists of a list of `Trait`s, where each trait has a `name` and a `value` field:

<!-- Begin table -->
<table class="account-layout-table">
    <thead>
        <tr>
            <th><i>Field</i></th>
            <th><i>Description</i></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>traits[0..n]</code></td>
            <td>List of <code>Trait</code> objects.</td>
        </tr>
        <tr>
            <td colspan="2"><i>Each <code>Trait</code> object is represented by:</i></td>
        </tr>
        <tr>
            <td><code>name</code></td>
            <td>Name of the trait.</td>
        </tr>
        <tr>
            <td><code>value</code></td>
            <td>The value associated with the trait.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Creating Attributes

The `Attributes` extension can be created using either the `allocate` or `create` instruction.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { allocate, attributes } from '@nifty-oss/asset';

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
        length: attributes.len() as u32,
        data: Some(attributes),
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
        length: attributes.len() as u32,
        data: Some(attributes),
    })
    .invoke();
    ```
  </TabItem>
</Tabs>

## Fetching Attributes

Given an asset account, it is possible to retrieve the attributes of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const attributes = getExtension(asset, ExtensionType.Attributes);

    if (attributes) {
        attributes.traits.forEach(({ name, value }) => {
            console.log(name + '=' + value);
        });
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Attributes,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(attributes) = Asset::get::<Attributes>(account_data) {
      println!("attributes: {:?}", attributes);
    }
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::Attributes,
      state::Asset,
    };

    let data = (*ctx.accounts.asset.data).borrow();

    if let Some(attributes) = Asset::get::<Attributes>(&data) {
      msg!("attributes: {:?}", attributes);
    }
    ```
  </TabItem>
</Tabs>