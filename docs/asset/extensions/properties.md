---
sidebar_label: 'Properties'
sidebar_position: 9
---

# Properties

The `Properties` extension allows creating a list of on-chain "typed" values (key/value pairs) for an asset. It currently supports three different "types": `text`, `number` (as an `u64` value) and `boolean`. The on-chain aspect means these values can be read by other Solana programs and therefore be used by them (e.g., for gaming).

The extension consists of a list of `name` and `value` pairs (`Property`):

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
            <td><code>values[0..n]</code></td>
            <td>List of <code>Property</code> objects.</td>
        </tr>
        <tr>
            <td colspan="2"><i>Each <code>Property</code> object is represented by:</i></td>
        </tr>
        <tr>
            <td><code>name</code></td>
            <td>Name of the property.</td>
        </tr>
        <tr>
            <td><code>value</code></td>
            <td>The "typed" value associated with the property.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Creating Properties

The `Properties` extension can be created using either the `allocate`, `create` or `update` instructions.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { allocate, properties } from '@nifty-oss/asset';

    await allocate(umi, {
      asset,
      payer,
      extension: properties([
        { name: 'name', value: 'nifty' },
        { name: 'version', value: 1n },
        { name: 'alpha', value: false }
      ]),
    }).sendAndConfirm(umi);
    ```

    <Admonition type="info">
        <p>
            The "type" of the property is determined by the type of the value &mdash; `name` is a text property; `version` is a number (`u64`) property; and `alpha` is a boolean property.
        </p>
    </Admonition>
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{Properties, PropertiesBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut properties = PropertiesBuilder::default();
    properties.add::<&str>("name", "asset");
    properties.add::<u64>("version", 1);
    properties.add::<bool>("alpha", false);

    let ix = AllocateBuilder::new()
      .asset(asset.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Properties,
        length: properties.len() as u32,
        data: Some(properties),
      })
      .instruction();
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::{Properties, PropertiesBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut properties = PropertiesBuilder::default();
    properties.add::<&str>("name", "asset");
    properties.add::<u64>("version", 1);
    properties.add::<bool>("alpha", false);

    AllocateCpiBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.group)
      .payer(Some(ctx.accounts.payer))
      .system_program(Some(ctx.accounts.system_program))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Properties,
        length: properties.len() as u32,
        data: Some(properties),
      })
      .invoke();
    ```
  </TabItem>
</Tabs>

## Fetching Properties

Given an asset account, it is possible to retrieve the properties of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);

    // retrieves all properties
    const properties = getExtension(asset, ExtensionType.Properties);

    if (properties) {
        properties.values.forEach(({ name, value }) => {
            console.log(name + '=' + value);
        });
    }

    // retrieves a single property by name
    const name = getProperty(assetAccount, 'name', Type.Text);
    console.log('name=' + name);
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Properties,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(properties) = Asset::get::<Properties>(account_data) {
      // retrieves all properties
      println!("properties: {:?}", properties);

      // retrieves a single property by name
      let name: &str = properties
        .get::<Text>("name")
        .unwrap();
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

    if let Some(properties) = Asset::get::<Properties>(&data) {
      // retrieves all properties
      msg!("properties: {:?}", properties);

      // retrieves a single property by name
      let name: &str = properties
        .get::<Text>("name")
        .ok_or(ProgramError::InvalidAccountData)?;
    }
    ```
  </TabItem>
</Tabs>

:::tip

Recall that property values are typed, so values are retrived into their original type.

:::