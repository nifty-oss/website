---
sidebar_label: 'Grouping'
sidebar_position: 4
---

# Grouping

Assets can be part of an on-chain group (collection). A group asset is created using the `Grouping` extension, which specify the maximum size of the group (or indicates that the group has no upper limit) and its current size. Member assets of a group point to the group asset in their `group` account field.

The group extension can be added to an asset either at creation time or after. It can also be removed as long as the group is empty (`size` equal to `0`).

The extension consists of:

<!-- Begin table -->
<table class="account-layout-table">
    <thead>
        <tr>
            <th><i>Field</i></th>
            <th colspan="2"><i>Description</i></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>size</code></td>
            <td colspan="2">Number of assest on the group. This value is updated every time an asset is added or removed from the group.</td>
        </tr>
        <tr>
            <td><code>max_size</code></td>
            <td>The permitted maximum size of the group. When the group is unlimited, this value is <code>0</code>.</td>
        </tr>
        <tr>
            <td><code>delegate</code></td>
            <td>An optional delegate authorised to add assets to this group.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Creating a Group

The `Grouping` extension is used to create group assets. The extension can be added using either the `allocate` or `create` instruction when creating an asset.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { allocate, grouping } from '@nifty-oss/asset';

    await allocate(umi, {
      asset,
      payer,
      extension: grouping(10),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{Attributes, GroupingBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };

    let mut grouping = GroupingBuilder::default();
    grouping.set(10, None);

    let ix = AllocateBuilder::new()
      .asset(asset.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Grouping,
        length: grouping.len() as u32,
        data: Some(grouping),
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

    let mut grouping = GroupingBuilder::default();
    grouping.set(10, None);

    AllocateCpiBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.group)
      .payer(Some(ctx.accounts.payer))
      .system_program(Some(ctx.accounts.system_program))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Grouping,
        length: grouping.len() as u32,
        data: Some(grouping),
    })
    .invoke();
    ```
  </TabItem>
</Tabs>

## Fetching a Group

A group is an asset with the `Grouping` extension. Given an asset account, it is possible to retrieve the grouping extension to determine whether the asset represents a group or not. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const grouping = getExtension(asset, ExtensionType.Grouping);

    if (grouping) {
        console.log("size=" + grouping.size);
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Grouping,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(grouping) = Asset::get::<Grouping>(account_data) {
      println!("size: {}", grouping.size);
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

    if let Some(grouping) = Asset::get::<Grouping>(&data) {
      msg!("size: {}", grouping.size);
    }
    ```
  </TabItem>
</Tabs>