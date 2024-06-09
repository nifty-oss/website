---
sidebar_label: "Royalties"
sidebar_position: 11
---

# Royalties

Nifty Asset offers the ability to encode royalty enforcement directly into its transfer instruction using the `Royalties` extension, where creators can specify transfer constraints and royalties percentage.

The royalty extension uses a system of composable `Constraint`s to create restrictions such as an allow or deny lists &mdash; these can be used to include or exclude specific programs as valid owners of asset accounts, preventing tranferring them.

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
            <td><code>basis_points</code></td>
            <td>Royalty percentage to be paid on secondary sales, a value between `0` and `10000` representing `0%` to `100%` with two precision digits.</td>
        </tr>
        <tr>
            <td><code>constraint</code></td>
            <td>Constraint object to be checked during transfer. A failing constraint will block the transfer.</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

:::info

Royalties constraints are validated on `transfer` and the transfer will only be completed if the validation is successful.

:::


## Constraints

Constraints are a way to enforce rules on the asset. They are composable and can be combined to create complex rules. The following constraints are available:

- [`And`](#and)
- [`Or`](#or)
- [`Not`](#not)
- [`Empty`](#empty)
- [`PubkeyMatch`](#pubkeymatch)
- [`OwnedBy`](#ownedby)

### `And`

The `And` constraint is a composite contraint that requires all of its sub-contraints to pass.

Example:

```json
{
  "type": "And",
  "constraints": [
    {
      "type": "OwnedBy",
      "account": "Recipient",
      "owners": ["11111111111111111111111111111111"]
    },
    {
      "type": "PubkeyMatch",
      "account": "Recipient",
      "pubkeys": ["CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"]
    }
  ]
}
```

This constraint requires the recipient to be owned by the System Program (program address `11111111111111111111111111111111`) and transferred to a specific public key (`CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8`). This simple example could be used to enforce that the asset can only be transferred to a specific address owned by a specific program.

### `Or`

The `Or` constraint is a composite contraint that requires at least one of its sub-contraints to pass.

Example:

```json
{
  "type": "Or",
  "constraints": [
    {
      "type": "OwnedBy",
      "account": "Recipient",
      "owners": ["11111111111111111111111111111111"]
    },
    {
      "type": "PubkeyMatch",
      "account": "Recipient",
      "pubkeys": ["CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"]
    }
  ]
}
```

This constraint requires the recipient to be owned by the System Program (program address `11111111111111111111111111111111`) or transferred to a specific public key (`CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8`). This simple example could be used to enforce that the asset can only be transferred to a specific address or any other address owner by a specific program.

### `Not`

The `Not` constraint is a composite contraint that requires its sub-constraint to fail &mdash; it inverts the result of it.

Example:

```json
{
  "type": "Not",
  "constraint": {
    "type": "OwnedBy",
    "account": "Recipient",
    "owners": ["11111111111111111111111111111111"]
  }
}
```

This constraint requires the recipient to **not** be owned by the System Program (program address `11111111111111111111111111111111`).

### `Empty`

The `Empty` constraint is a placeholder constraint that always passes.

Example:

```json
{
  "type": "Empty"
}
```

### `PubkeyMatch`

The `PubkeyMatch` constraint requires the specified account to match one of the public keys in its list.

Example:

```json
{
  "type": "PubkeyMatch",
  "account": "Asset",
  "pubkeys": ["CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"]
}
```

This simple example restricts transfers to a single specific asset public key (`CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8`). Any other asset with a different public key cannot be transferred.

### `OwnedBy`

The `OwnedBy` constraint requires that the specified account is owned by one of the specified public keys (address of a program).

Example:

```json
{
  "type": "OwnedBy",
  "account": "Recipient",
  "pubkeys": ["11111111111111111111111111111111"]
}
```

In this example, the recipient account in the transfer must be owned by the System program (`11111111111111111111111111111111`).

## Adding Royalties

The `Royalties` extension can be created using either the `allocate`, `create` or `update` instructions.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { allocate, royalties } from '@nifty-oss/asset';

    const constraint = {
      type: 'OwnedBy',
      account: 'Recipient',
      owners: [
        publicKey('11111111111111111111111111111111'),
      ],
    };
    // 5% royalty fee
    const basisPoints = 500;

    await allocate(umi, {
      asset,
      payer,
      extension: royalties(basisPoints, constraint),
    }).sendAndConfirm(umi);
    ```

    <Admonition type="tip">
        <p>
            You can specify your constraints using a JSON syntax:
            ```js
            const constraint: Constraint = JSON.parse(
              '{ \
                "type": "OwnedBy", \
                "account": "Recipient", \
                "pubkeys": ["11111111111111111111111111111111"] \

              }'
            );
            ```
        </p>
    </Admonition>
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      constraints::{Account, OperatorType, OwnedByBuilder},
      extensions::{ExtensionBuilder, Royalties, RoyaltiesBuilder},
      instructions::CreateBuilder,
      types::{ExtensionInput, ExtensionType},
    };
    use solana_program::{system_program, pubkey::Pubkey};

    let mut owned_by = OwnedByBuilder::default();
    owned_by.set(Account::Recipient, &[system_program::ID]);

    let mut royalties = RoyaltiesBuilder::default();
    royalties.set(500, &mut owned_by);
    let data = royalties.data();

    let ix = CreateBuilder::new()
      .asset(asset.pubkey())
      .authority(context.payer.pubkey(), false)
      .owner(context.payer.pubkey())
      .payer(Some(context.payer.pubkey()))
      .system_program(Some(system_program::id()))
      .name("name".to_string())
      .extensions(vec![ExtensionInput {
        extension_type: ExtensionType::Royalties,
        length: data.len() as u32,
        data: Some(data),
      }])
      .instruction();
    ```

  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      constraints::{Account, OperatorType, OwnedByBuilder},
      extensions::{ExtensionBuilder, Royalties, RoyaltiesBuilder},
      instructions::CreateBuilder,
      types::{ExtensionInput, ExtensionType},
    };
    use solana_program::{system_program, pubkey::Pubkey};

    let mut owned_by = OwnedByBuilder::default();
    owned_by.set(Account::Recipient, &[system_program::ID]);

    let mut royalties = RoyaltiesBuilder::default();
    royalties.set(500, &mut owned_by);
    let data = royalties.data();

    CreateBuilder::new(ctx.accounts.nifty_asset_program)
      .asset(ctx.accounts.group)
      .authority(ctx.accounts.authority, false)
      .owner(ctx.accounts.owner)
      .payer(Some(ctx.accounts.payer))
      .system_program(Some(ctx.accounts.system_program))
      .name("name".to_string())
      .extension(vec![ExtensionInput {
        extension_type: ExtensionType::Royalties,
        length: data.len() as u32,
        data: Some(data),
    }])
    .invoke();
    ```

  </TabItem>
</Tabs>

## Fetching Royalties

Given an asset account, it is possible to retrieve the royalties of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import {
      ExtensionType,
      fetchAsset,
      getExtension
    } from '@nifty-oss/asset';

    const asset = await fetchAsset(umi, address);
    const royalties = getExtension(asset, ExtensionType.Royalties);

    if (royalties) {
        console.log('basisPoint=', royalties.basisPoint);
        console.log('constraint=', royalties.constraint);
    }
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    use nifty_asset::{
      extensions::Royalties,
      state::Asset,
    };

    let account = get_account(address)
      .await
      .unwrap();
    let account_data = account.data.as_ref();

    if let Some(royalties) = Asset::get::<Royalties>(account_data) {
      println!("basis_points: {}", royalties.basis_points);
      println!(
        "operator type: {}",
        royalties.constraint.operator.operator_type()
      );
    }
    ```
  </TabItem>
  <TabItem value="rust on-chain" label="Rust (on-chain)">
    ```rust
    use nifty_asset::{
      extensions::Royalties,
      state::Asset,
    };

    let data = (*ctx.accounts.asset.data).borrow();

    if let Some(royalties) = Asset::get::<Royalties>(&data) {
      msg!("basis_points: {}", royalties.basis_points);
      msg!(
        "operator type: {}",
        royalties.constraint.operator.operator_type()
      );
    }
    ```
  </TabItem>
</Tabs>