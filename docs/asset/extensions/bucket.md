---
sidebar_label: 'Bucket'
sidebar_position: 3
---

# Bucket

The `Bucket` extension allows storing generic data on-chain, similarly to a `Blob` extension. The main difference is that it is not necessary to specify its content type. The data can be read by other Solana programs, making it useful to store serialized ("object") data.

The extension consists of a `data` field:

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
            <td><code>data</code></td>
            <td>The raw data of the extension.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Creating a Bucket

Depending on the size of the data to be stored in a `Bucket`, there are different way you can create the extension. For data that fit in one transaction, you can use `allocate`, `create` or `update` instructions directly. For cases where the data does not fit in a single transaction, it is necessary to use a combination of a single `allocate` and multiple `write` instructions.

The SDKs offer helpers to facilitate the creation of larger bluckets. For example, the JS SDK offers an `initialize` helper that returns a list of instructions necessary to create a bucket, given its data; the Rust SDK offers a [⎘`mint`](https://docs.rs/nifty-asset/0.4.0/nifty_asset/fn.mint.html) helper that creates an asset with any number of extensions.

For on-chain use, the Nifty Asset crate offers macros that facilitate the manipulation of the extension data to avoid issues with stack/heap size: [⎘`allocate_and_write`](https://docs.rs/nifty-asset/0.4.0/nifty_asset/macro.allocate_and_write.html). The macro will invoke `allocate` and any number of `write` CPIs to create the bucket.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { bucket, initialize } from '@nifty-oss/asset';

    const response = await fetch(
      'https://arweave.net/Y8MBS8tqo9XJ_Z1l9V6BIMvhknWxhzP0UxSNBk1OXSs'
    );
    const data = new Uint8Array(await response.arrayBuffer());

    await initialize(umi, {
      asset,
      payer,
      extension: bucket(data),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{BucketBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut data = Vec::with_capacity(5000);
    generate_image(&mut data);

    let mut bucket = BucketBuilder::default();
    bucket.set_data(&data);

    let ix = AllocateBuilder::new()
      .asset(asset.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Bucket,
        length: bucket.len() as u32,
        data: Some(bucket),
    })
    .instruction();
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{allocate_and_write, types::ExtensionType};

    let mut data = Vec::with_capacity(5000);
    generate_image(&mut data);

    allocate_and_write!(
        ctx.accounts.nifty_asset_program,
        ctx.accounts.asset,
        ctx.accounts.payer,
        ctx.accounts.system_program,
        ExtensionType::Bucket,
        &data
    );
    ```
  </TabItem>
</Tabs>

## Fetching a Bucket

Given an asset account, it is possible to retrieve the bucket of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const bucket = getExtension(asset, ExtensionType.Bucket);

    if (bucket) {
        console.log("bytes=" + bucket.data.length);
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Bucket,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(bucket) = Asset::get::<Bucket>(account_data) {
      println!("bytes: {:?}", bucket.data.len());
    }
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::Bucket,
      state::Asset,
    };

    let data = (*ctx.accounts.asset.data).borrow();

    if let Some(bucket) = Asset::get::<Bucket>(&data) {
      msg!("bytes: {:?}", bucket.data.len());
    }
    ```
  </TabItem>
</Tabs>