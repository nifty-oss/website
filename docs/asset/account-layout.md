---
sidebar_label: 'Asset Account'
sidebar_position: 2
---

# Asset Account

Nifty Asset accounts represent non-fungible digital assets that are the heart of the Nifty standard. Each asset is represented by a single account: `Asset`. Here we examine their make up and features in-depth.

An `Asset` account is composed of two parts:

* A fixed-size base section common to every Nifty Asset; and
* A variable sized extensions section &mdash; extensions are optional and can be combined to create a wide variety of non-fungible assets configurations.

The `Asset` account is the only account used by Nifty Asset. It is used to represent stand-alone assets, assets in a group and group assets.

## Account Layout

As a minimum, an asset is represented by an account with `168 bytes` of data. This stores common information for a non-fungible, such as the `owner`, `delegate`, `group`, `state` and `name`. In addition to this, an asset can have a variable number of extension attached to it.

<!-- Begin table -->
<table class="account-layout-table">
    <thead>
        <tr>
            <th colspan="1"><i>Fixed</i></th>
            <th colspan="3"><i>Optional</i></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Asset</td>
            <td>Extension 1 + Extension Data</td>
            <td>...</td>
            <td>Extension n + Extension Data</td>
        </tr>
        <tr>
            <td><code>168 bytes</code></td>
            <td><code>16 bytes</code> + variable bytes</td>
            <td>...</td>
            <td><code>16 bytes</code> + variable bytes</td>
        </tr>
    </tbody>
</table>
<!-- End table -->

## Asset Data

Every Nifty Asset contains the following information:

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `discriminator`   | 0      | 1    | Represents the type of account. Currently: `Unitialized` or `Asset`. |
| `state`           | 1      | 1    | The state of the asset: `Locked` or `Unlocked`. |
| `standard`        | 2      | 1    | The standard of the asset, to allow differnt types of Nifty Assets. Currently: `NonFungible`, `Managed`, `Soulbound` and `Proxied`. |
| `mutable`         | 3      | 1    | Indicates whether or not the asset can be modified. |
| `owner`           | 4      | 32   | The address of the owner of the asset. |
| `group`           | 36     | 32   | The address of the group the asset belongs to. If the asset is not part of a group, this field will have all zeros. |
| `authority`       | 68     | 32   | The address of the authority of the asset. Authorities can update assets and verify them as a member of a group. |
| `delegate`        | 100    | 33   | The delegate of the asset. Delegates can `burn`, `lock` or `transfer` the asset, depending on the roles assigned to them. If the asset does not have a delegate, this field will have all zeros. |
| `name`            | 133    | 35   | The name of the asset, up to 35 characters in length. |

These `168 bytes` are the minimum required to represent a Nifty Asset and are common to every Nifty Asset. Any additional data is optional and stored in extensions.

## Extensions

Extensions are optional "blocks" of data that are stored on the asset after the asset data section. They are used to add additional functionality to the asset, such as on-chain traits, binary data, metadata, royalty enforcement,  pointers to off-chain data, and more.

The following extensions are currently available:

* Attributes
* Blob
* Creators
* Grouping
* Links
* Manager
* Metadata
* Royalty
* Proxy

Extensions can either be allocated at the time of creation or added by updating an asset. They can also be stored on a group asset and shared among member assets to offer an easy way to store information that apply to mltiple assets in a cost-effective way. For more information on each extension, see the [Extensions](/docs/asset/features) page.

:::info

Both `Manager` and `Proxy` extensions are associated with a specific asset standard &mdash; `Managed` and `Proxied`, repectively &mdash; since they represent a different type of asset. In this case, these extensions cannot be added nor removed after creation.

:::