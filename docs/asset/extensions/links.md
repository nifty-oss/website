---
sidebar_label: 'Links'
sidebar_position: 5
---

# Links

The `Links` extension represents a generic way to point to off-chain data. It consists of a list of link pairs, each of which contains a `name` and a `uri`. This can be used to point to any additional off-chain data or resources.

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
            <td>List of <code>Link</code> objects.</td>
        </tr>
        <tr>
            <td colspan="2"><i>Each <code>Link</code> object is represented by:</i></td>
        </tr>
        <tr>
            <td><code>name</code></td>
            <td>Name of the link.</td>
        </tr>
        <tr>
            <td><code>uri</code></td>
            <td>URI value.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Creating Links

The `Links` extension can be created using either the `allocate` or `create` instruction.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { allocate, links } from '@nifty-oss/asset';

    await allocate(umi, {
      asset,
      payer,
      extension: links([
        { name: 'homepage', value: 'https://nifty-oss.org' },
        { name: 'twitter', value: 'https://twitter.com/nifty_oss' }
      ]),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{Attributes, LinksBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut links = LinksBuilder::default();
    links.add("homepage", "https://nifty-oss.org");
    links.add("twitter", "https://twitter.com/nifty_oss");

    let ix = AllocateBuilder::new()
      .asset(asset.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Links,
        length: links.len() as u32,
        data: Some(links),
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

    let mut links = LinksBuilder::default();
    links.add("homepage", "https://nifty-oss.org");
    links.add("twitter", "https://twitter.com/nifty_oss");

    AllocateCpiBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.group)
      .payer(Some(ctx.accounts.payer))
      .system_program(Some(ctx.accounts.system_program))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Attributes,
        length: links.len() as u32,
        data: Some(links),
    })
    .invoke();
    ```
  </TabItem>
</Tabs>

## Fetching Links

Given an asset account, it is possible to retrieve the links of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const links = getExtension(asset, ExtensionType.Links);

    if (links) {
        links.values.forEach(({ name, uri }) => {
            console.log(name + '=' + uri);
        });
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Links,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(links) = Asset::get::<Links>(account_data) {
      println!("links: {:?}", links);
    }
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::Links,
      state::Asset,
    };

    let data = (*ctx.accounts.asset.data).borrow();

    if let Some(links) = Asset::get::<Links>(&data) {
      msg!("links: {:?}", links);
    }
    ```
  </TabItem>
</Tabs>