---
sidebar_label: 'Creators'
sidebar_position: 3
---

# Creators

The `Creators` extension allows adding a list of creators to an asset, specifying their status (`verified` or not) and a percentage share. In most cases, this extension is used in combination with `Royalties` to determine the addresses that should received royalties. There is no limit on how many creators can be added to an asset.

The extension consists of a list of `Creator`s:

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
            <td><code>values[0..n]</code></td>
            <td colspan="2">List of <code>Creator</code> objects.</td>
        </tr>
        <tr>
            <td colspan="3"><i>Each <code>Creator</code> object is represented by:</i></td>
        </tr>
        <tr>
            <td><code>address</code></td>
            <td>Address of the creator.</td>
        </tr>
        <tr>
            <td><code>verified</code></td>
            <td>Indicates if the creator is verified or not.</td>
        </tr>
        <tr>
            <td><code>share</code></td>
            <td>Percentage share of the royalties (between `0` and `100`).</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Adding Creators

The `Creators` extension can be created using either the `allocate` or `create` instruction.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { allocate, creators } from '@nifty-oss/asset';

    const creator1 = publicKey("...");
    const creator2 = publicKey("...");

    await allocate(umi, {
      asset,
      payer,
      extension: creators([
        { address: creator1, share: 50 },
        { address: creator2, share: 50 }
      ]),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{CreatorsBuilder, ExtensionBuilder},
      instructions::AllocateBuilder,
      types::{ExtensionInput, ExtensionType},
    };
    use solana_progra::pubkey::Pubkey;

    let creator1 = Pubkey::default();
    let creator2 = Pubkey::default();

    let mut creators = CreatorsBuilder::default();
    creators.add(&creator1, 50);
    creators.add(&creator2, 50);

    let ix = AllocateBuilder::new()
      .asset(asset.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Creators,
        length: creators.len() as u32,
        data: Some(creators),
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
    use solana_progra::pubkey::Pubkey;

    let creator1 = Pubkey::default();
    let creator2 = Pubkey::default();

    let mut creators = CreatorsBuilder::default();
    creators.add(&creator1, 50);
    creators.add(&creator2, 50);

    AllocateCpiBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.group)
      .payer(Some(ctx.accounts.payer))
      .system_program(Some(ctx.accounts.system_program))
      .extension(ExtensionInput {
        extension_type: ExtensionType::Creators,
        length: creators.len() as u32,
        data: Some(creators),
    })
    .invoke();
    ```
  </TabItem>
</Tabs>

## Fetching Creators

Given an asset account, it is possible to retrieve the creators of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const creators = getExtension(asset, ExtensionType.Creators);

    if (creators) {
        creators.values.forEach(({ address, share }) => {
            console.log(address + '=' + share);
        });
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Creators,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(creators) = Asset::get::<Creators>(account_data) {
      println!("creators: {:?}", creators);
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

    if let Some(creators) = Asset::get::<Creators>(&data) {
      msg!("creators: {:?}", creators);
    }
    ```
  </TabItem>
</Tabs>