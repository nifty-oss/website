---
sidebar_label: 'Metadata'
sidebar_position: 8
---

# Metadata

The `Metadata` extension allows for assets to have on-chain description, symbol and uri pointing to off-chain metadata, for compatibility with existing NFT standards.

The extension consists of:

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
            <td><code>symbol</code></td>
            <td>(optional) Symbol of the asset.</td>
        </tr>
        <tr>
            <td><code>description</code></td>
            <td>(optional) Description of the asset.</td>
        </tr>
        <tr>
            <td><code>uri</code></td>
            <td>(optional) URI for external metadata information.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

Each of these fields is limited to `255` length, but their size is not fixed &mdash; data is stored on-chain only when a value is set.

## Creating Metadata

The `Metadata` extension can be created using either the `allocate`, `create` or `update` instructions.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { allocate, metadata } from '@nifty-oss/asset';

    await allocate(umi, {
      asset,
      payer,
      extension: metadata({
        symbol: 'SMB',
        description: 'A metadata extension',
        uri: 'https://arweave.net/62Z5yOFbIeFqvoOl-aq75EAGSDzS-GxpIKC2ws5LVDc',
      }),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{ExtensionBuilder, MetadataBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut metadata = MetadataBuilder::default();
    metadata.set(
        Some("SMB"),
        None,
        Some("https://arweave.net/62Z5yOFbIeFqvoOl-aq75EAGSDzS-GxpIKC2ws5LVDc"),
    );

    let ix = AllocateBuilder::new()
      .asset(asset.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Metadata,
        length: metadata.len() as u32,
        data: Some(metadata),
    })
    .instruction();
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::{ExtensionBuilder, MetadataBuilder},
      instructions::AllocateCpiBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut metadata = MetadataBuilder::default();
    metadata.set(
        Some("SMB"),
        None,
        Some("https://arweave.net/62Z5yOFbIeFqvoOl-aq75EAGSDzS-GxpIKC2ws5LVDc"),
    );

    AllocateCpiBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.group)
      .payer(Some(ctx.accounts.payer))
      .system_program(Some(ctx.accounts.system_program))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Metadata,
        length: metadata.len() as u32,
        data: Some(metadata),
    })
    .invoke();
    ```
  </TabItem>
</Tabs>

## Fetching Metadata

Given an asset account, it is possible to retrieve the metadata information of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const metadata = getExtension(asset, ExtensionType.Metadata);

    if (metadata) {
        console.log("Symbol: " + metadata.symbol);
        console.log("Description: " + metadata.description);
        console.log("URI: " + metadata.uri);
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Metadata,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(metadata) = Asset::get::<Metadata>(account_data) {
      println!("metadata: {:?}", metadata);
    }
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::Metadata,
      state::Asset,
    };

    let data = (*ctx.accounts.asset.data).borrow();

    if let Some(metadata) = Asset::get::<Metadata>(&data) {
      msg!("metadata: {:?}", metadata);
    }
    ```
  </TabItem>
</Tabs>