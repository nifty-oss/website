---
sidebar_label: 'Proxy'
sidebar_position: 10
---

# Proxy

In addition to extensions, Nifty Asset implements the [⎘Proxy Pattern](/blog/proxy-pattern) to allow developers extend the program behaviour. The `Proxy` extension is used to identify accounts that are "proxied" &mdash; these accounts will be required to be a signer on instructions that manipulate them. Since only the proxy program can add the signature for the account &mdash; the asset address is a PDA of the proxy program &mdash; it guarantees that it is always called on every instruction and it is allowed to perform custom logic.

The extension stores the information for clients to determine the address of the proxy program; it also includes the `seeds` and `bump` information for a proxy program to add a signature for the account.

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
            <td><code>program</code></td>
            <td>Proxy program address.</td>
        </tr>
        <tr>
            <td><code>seeds</code></td>
            <td>Seeds for the PDA derivation.</td>
        </tr>
        <tr>
            <td><code>bump</code></td>
            <td>Bump for the PDA derivation.</td>
        </tr>
        <tr>
            <td><code>authority</code></td>
            <td>(optional) Authority of the proxy extension. This can be used to specify an address to act as the authority of the asset since in most cases the `authority` on the asset is set to be itself.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Creating a "Proxied" Asset

A "proxied" asset must be created through a program, since it must be a PDA and the program needs to sign the account creation. On the program, the following steps must be completed:

1. Create the `Proxy` extension for the asset.
2. Set the standard of the asset to `Standard::Proxied`.
3. Sign the instruction to create the asset.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset_interface::{
      extensions::ProxyBuilder,
      instructions::CreateCpiBuilder,
      types::ExtensionInput,
      ExtensionType, Standard,
    };
    use solana_program::pubkey::Pubkey;

    // validation: derived_key == *ctx.accounts.asset.key
    let (derived_key, bump) = Pubkey::find_program_address(
      &[ctx.accounts.stub.key.as_ref()],
      program_id
    );
    let signer = [ctx.accounts.stub.key.as_ref(), &[bump]];

    // proxy extension data
    let data = ProxyBuilder::with_capacity(100)
      .set(
        program_id,
        &ctx.accounts.stub.key.to_bytes(),
        bump,
        // "proxy" authority
        Some(ctx.accounts.authority.key),
      )
      .data();

    // creates the asset
    CreateCpiBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.asset)
      // keeps the authority so we can update the asset
      .authority(ctx.accounts.asset, true)
      .owner(ctx.accounts.owner)
      .payer(ctx.accounts.payer)
      .system_program(ctx.accounts.system_program)
      .name(metadata.name)
      .standard(Standard::Proxied)
      .extensions(vec![ExtensionInput {
        extension_type: ExtensionType::Proxy,
        length: data.len() as u32,
        data: Some(data),
      }])
      .invoke_signed(&[&signer])
    ```
  </TabItem>
</Tabs>

Programs that create "proxied" assets are dubbed "Proxy" programs. They will always be involved in any transaction that manipulate the "proxied" asset, since they need to (at least) sign the instruction on behalf of the asset. As a result, they can perform any custom action, providing an easy way to add custom behaviour to Nifty Asset.

The <u>[⎘Nifty Asset Interface](https://crates.io/crates/nifty-asset-interface)</u> crate provides the program interface and helpers to support the development of "Proxy" programs. The Nifty Asset repository contains an <u>[⎘example "Proxy" program](https://github.com/nifty-oss/asset/tree/main/programs/proxy)</u> showing how to use this crate to add custom behaviour to `transfer` and `update` instructions.

:::info

The `Proxy` extension must be specified at the point of creation of the asset. It is not possible to add or remove the extension after its creation. It is possible, however, to update its `authority`.

:::

## Fetching a "Proxied" Asset

Given an asset account, it is possible to retrieve the proxy information of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const proxy = getExtension(asset, ExtensionType.Proxy);

    if (proxy) {
        console.log("Proxy program: " + proxy.program);
        console.log("Authority: " + proxy.authority);
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Proxy,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(proxy) = Asset::get::<Proxy>(account_data) {
      println!("proxy program: {:?}", proxy.program);
      println!("authority: {:?}", proxy.authority);
    }
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::Proxy,
      state::Asset,
    };

    let data = (*ctx.accounts.asset.data).borrow();

    if let Some(proxy) = Asset::get::<Proxy>(&data) {
      msg!("proxy program: {:?}", proxy.program);
      msg!("authority: {:?}", proxy.authority);
    }
    ```
  </TabItem>
</Tabs>

## Using a "Proxied" Asset

"Proxied" assets are a special category of assets, since they asset account must be a signer on every transaction that manipulates the asset. Since the asset is created from a PDA of the "Proxy" program, the proxy program must be the one to add the signature for the asset account. Therefore, it is necessary to "proxy" instructions through it &mdash; that is the reason why they are called "Proxy" programs.

Since all the information needed for this is stored on the `Proxy` extension, it is easy to determine whether we are handling a "proxied" asset and its proxy program.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension,
      transfer,
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const proxy = getExtension(asset, ExtensionType.Proxy);

    await transfer (umi, {
      asset: address,
      signer: owner,
      recipient,
      proxy: proxy?.program,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>