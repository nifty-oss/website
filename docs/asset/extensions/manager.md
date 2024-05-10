---
sidebar_label: 'Manager'
sidebar_position: 6
---

# Manager

For use cases where the asset needs to be controlled (managed) by a third-party address, Nifty Asset allows the creation of "managed" assets. These assets have the `Manager` extension enabled, which defines a delegate address with customizable permissions.

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
            <td><code>delegate</code></td>
            <td>Address that controls the asset.</td>
        </tr>
        <tr>
            <td colspan="2"><i>A delegate is specified by:</i></td>
        </tr>
        <tr>
            <td><code>address</code></td>
            <td>Address of the delegate.</td>
        </tr>
        <tr>
            <td><code>roles</code></td>
            <td>Bitmask of the roles enabled (`Transfer`, `Lock` and `Burn`).</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

The delegate can perform any of the actions specified on the `roles` field. Therefore, when the `Manager` extension is present on an asset, the ownership of the asset is **shared** &mdash; both the owner and the delegate will be able to transfer, lock and burn the asset.

Since the presence of the `Manager` extension significantly changes the nature of the asset, the extension can only be added to assets with the `Standard` set to `Managed`.

:::info

The `Manager` extension must be specified at the point of creation of the asset. It is not possible to add or remove the extension after its creation. It is possible, however, to update the `address` and the `roles` enabled.

:::

## Using a Manager

The `Manager` extension is used to create `Managed` assets. The extension can be added using either the `allocate` or `create` instruction.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { DelegateRole, Standard, create, manager } from '@nifty-oss/asset';

    await create(umi, {
      asset,
      owner,
      name: 'Managed Asset',
      standard: Standard.Managed,
      payer,
      extension: manager(delegate, [DelegateRole.Transfer]),
    }).sendAndConfirm(umi);
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::{ManagerBuilder, ExtensionBuilder},
      instructions::CreateBuilder,
      types::{
        Delegate,
        DelegateRole,
        ExtensionInput,
        ExtensionType,
        Standard
      },
    };

    let mut manager = ManagerBuilder::default();
    manager.set(&Delegate {
        address: delegate.pubkey().into(),
        roles: Delegate::encode_roles(vec![DelegateRole::Transfer]),
    });

    let ix = CreateBuilder::new()
      .asset(asset.pubkey())
      .authority(authority.pubkey(), false)
      .owner(owner.pubkey())
      .payer(Some(payer.pubkey()))
      .system_program(Some(system_program::id()))
      .name("Managed Asset".to_string())
      .standard(Standard::Managed)
      .extension(ExtensionInput {
        extension_type: ExtensionType::Manager,
        length: manager.len() as u32,
        data: Some(manager),
    })
    .instruction();
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::{ManagerBuilder, ExtensionBuilder},
      instructions::CreateCpiBuilder,
      types::{
        Delegate,
        DelegateRole,
        ExtensionInput,
        ExtensionType,
        Standard
      },
    };

    let mut manager = ManagerBuilder::default();
    manager.set(&Delegate {
        address: delegate.pubkey().into(),
        roles: Delegate::encode_roles(vec![DelegateRole::Transfer]),
    });

    CreateCpiBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.group)
      .authority(ctx.accounts.authority)
      .owner(ctx.accounts.owner)
      .payer(Some(ctx.accounts.payer))
      .system_program(Some(ctx.accounts.system_program))
      .name("Managed Asset".to_string())
      .standard(Standard::Managed)
      .extension(ExtensionInput {
        extension_type: ExtensionType::Manager,
        length: manager.len() as u32,
        data: Some(manager),
    })
    .invoke();
    ```
  </TabItem>
</Tabs>

## Fetching a Manager

Given an asset account, it is possible to retrieve the manager information of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const manager = getExtension(asset, ExtensionType.Manager);

    if (manager) {
        console.log("Delegate: " + manager.address);
        console.log("Roles: " + manager.roles);
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Manager,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(manager) = Asset::get::<Manager>(account_data) {
      println!("manager: {:?}", manager);
    }
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::Manager,
      state::Asset,
    };

    let data = (*ctx.accounts.asset.data).borrow();

    if let Some(manager) = Asset::get::<Attributes>(&data) {
      msg!("manager: {:?}", manager);
    }
    ```
  </TabItem>
</Tabs>