---
sidebar_label: 'Blob'
sidebar_position: 2
---

# Blob

The Binary Large Object (Blob) extension allows storing generic data on-chain, such as images and documents. This data can be read by other Solana programs and therefore be used by them, e.g., for displaying the asset in a marketplace. While storing large amounts of data in a Solana account data is quite expensive, this extension gives the ability to create fully on-chain (FOC) assets for those who wish for them.

The extension consists of a `content type` and `data` fields.

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
            <td><code>content type</code></td>
            <td>The content type of the blob.</td>
        </tr>
        <tr>
            <td><code>data</code></td>
            <td>The raw data of the extension.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Creating a Blob

Depending on the size of the `Blob`, there are different way you can create the extension. For blobs that fit in one transaction, you can use `allocate` or `create` instructions directly. For cases where the blob does not fit in a single transaction, it is necessary to use a combination of a single `allocate` and multiple `write` instructions.

The SDKs offer helpers to facilitate the creation of larger blobs. For example, the JS SDK offers an `initialize` helper that returns a list of instructions necessary to create a blob, given its data; the Rust SDK offers a [⎘`mint`](https://docs.rs/nifty-asset/0.4.0/nifty_asset/fn.mint.html) helper that creates an asset with any number of extensions.

For on-chain use, the Nifty Asset crate offers macros that facilitate the manipulation of the extension data to avoid issues with stack/heap size: [⎘`allocate_and_write`](https://docs.rs/nifty-asset/0.4.0/nifty_asset/macro.allocate_and_write.html). The macro will invoke `allocate` and any number of `write` CPIs to create the blob.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { blob, initialize } from '@nifty-oss/asset';

    const response = await fetch(
      'https://arweave.net/Y8MBS8tqo9XJ_Z1l9V6BIMvhknWxhzP0UxSNBk1OXSs'
    );
    const image = new Uint8Array(await response.arrayBuffer());
    const contentType = response.headers.get('content-type') ?? 'image/png';

    await initialize(umi, {
      asset,
      payer,
      extension: blob(contentType, image),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
  <TabItem value="orange" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{BlobBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut data = Vec::with_capacity(5000);
    generate_image(&mut data);

    let mut blob = BlobBuilder::default();
    blob.set_data("image/png", &data);

    let ix = AllocateBuilder::new()
      .asset(asset.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Blob,
        length: blob.len() as u32,
        data: Some(blob),
    })
    .instruction();
    ```
  </TabItem>
  <TabItem value="banana" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{allocate_and_write, types::ExtensionType};

    let mut data = Vec::with_capacity(5000);
    generate_image(&mut data);

    allocate_and_write!(
        ctx.accounts.nifty_asset_program,
        ctx.accounts.asset,
        ctx.accounts.payer,
        ctx.accounts.system_program,
        ExtensionType::Blob,
        &data
    );
    ```
  </TabItem>
</Tabs>

## Fetching a Blob

Given an asset account, it is possible to retrieve the blob of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const blob = getExtension(asset, ExtensionType.Blob);

    if (blob) {
        console.log("content-type=" + blob.contentType);
        console.log("bytes=" + blob.data.length);
    }
    ```
  </TabItem>
  <TabItem value="orange" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Blob,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(blob) = Asset::get::<Blob>(account_data) {
      msg!("content-type: {:?}", blob.content_type);
      msg!("bytes: {:?}", blob.data.len());
    }
    ```
  </TabItem>
  <TabItem value="banana" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::Blob,
      state::Asset,
    };

    let data = (*ctx.accounts.asset.data).borrow();

    if let Some(blob) = Asset::get::<Blob>(&data) {
      msg!("content-type: {:?}", blob.content_type);
      msg!("bytes: {:?}", blob.data.len());
    }
    ```
  </TabItem>
</Tabs>