---
sidebar_position: 3
---

# Quickstart

## CLI

You can install the bundled Nifty CLI to start playing around with Nift assets.

### Download Pre-Built Binary

**Todo**

### Install from Source

Requires [Rust to be installed](https://www.rust-lang.org/learn/get-started):

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Now you can install with `pnpm` from the root directory of the `nifty-asset` respository:

```bash
pnpm clients:cli:install
```

With Rust's `cargo`:

```bash
cd clients/cli
cargo install --path .
```

Directly from crates.io:

```bash
cargo install nifty-cli
```

To see all the available commands and usage suggestions run:

```bash
nifty --help
```

```
Usage: nifty [OPTIONS] <COMMAND>

Commands:
  burn      Burn an asset
  mint      Create an asset with extensions
  create    Create a basic asset without extensions
  decode    Get an asset account's data and decode it
  approve   Set a delegate on an asset with specific roles
  lock      Lock an asset, preventing any actions to be performed on it
  revoke    Revoke a delegate from an asset
  transfer  Transfer an asset to a new owner
  unlock    Unlock an asset, allowing actions to be performed on it
  help      Print this message or the help of the given subcommand(s)

Options:
  -k, --keypair-path <KEYPAIR_PATH>  Path to the keypair file
  -r, --rpc-url <RPC_URL>            RPC URL for the Solana cluster
  -h, --help                         Print help
  -V, --version                      Print version
```

To see the help for a specific command, run the command with the `--help` option, e.g.:

```bash
nifty create --help
```

```
Create a basic asset without extensions

Usage: nifty create [OPTIONS] --name <NAME>

Options:
  -k, --keypair-path <KEYPAIR_PATH>
          Path to the keypair file
  -n, --name <NAME>
          The name of the asset
  -a, --asset-keypair-path <ASSET_KEYPAIR_PATH>
          Path to the mint keypair file
  -r, --rpc-url <RPC_URL>
          RPC URL for the Solana cluster
      --immutable
          Create the asset as immutable
  -o, --owner <OWNER>
          Owner of the created asset, defaults to authority pubkey
  -h, --help
          Print help
```



We install the Solana CLI which we use to set and configure both a default keypair and RPC node URL:

```
sh -c "$(curl -sSfL https://release.solana.com/v1.16.25/install)"
```

Now we can set the default keypair and RPC node URL:

```bash
solana config set --url https://api.devnet.solana.com
solana-keygen new
```

Nifty will use these values by default, but you can also pass them as options to the commands.


### Example: Create a basic Nifty Asset

We can create a basic Nifty Asset using the `create` command. 
```bash
nifty create -n "My Nifty Asset"
```
You will see the transaction signature and the asset account address similar to this output:

```
Asset 5to4wpbDE1KkBHKgFYFVEBz3UBFRqpovSgQYJzSbTe85 created in tx: EizjhztpEZfnqD8zccLEybF1L3qtbGRQXhmjMQi6wA15Sege3pv6giy8ErsjAu65W6tGC83UU185CEt4tYAkGP8
```

You can use the [Solana Explorer](https://explorer.solana.com/) to see the asset account details.


### Example: Decode an asset account

```bash
nifty decode 5to4wpbDE1KkBHKgFYFVEBz3UBFRqpovSgQYJzSbTe85
```

This will print the asset account data and the decoded data:

```
Asset: Asset {
    discriminator: Asset,
    state: Unlocked,
    standard: NonFungible,
    mutable: true,
    holder: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8,
    group: 11111111111111111111111111111111,
    authority: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8,
    delegate: Delegate {
        address: 11111111111111111111111111111111,
        roles: 0,
    },
    name: [
        77,
        121,
        32,
        65,
        115,
        115,
        101,
        116,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
    ],
}
```

To print a specific field, you can use the `--field` option:

```bash
nifty decode 5to4wpbDE1KkBHKgFYFVEBz3UBFRqpovSgQYJzSbTe85 --field name
```

## JS Client

You can also use the Nifty JS client to interact with Nifty Assets. First, generate it with `pnpm` from the root directory of the `nifty-asset` respository:

Build the programs:

```bash
pnpm programs:build
```

Generate the JS and Rust clients:

```bash
pnpm generate:clients
```

or generate both the clients and the IDL:

```bash
pnpm generate
```

This will generate the JS client in the `clients/js` directory. You can use it to interact with the Nifty Asset program.

In this example we use the "mint" helper function to allocate a new asset with some extensions, write the extension data and then
create the asset.

```typescript
import { Connection, PublicKey } from '@solana/web3.js';
import {
  Asset,
  Discriminator,
  ExtensionType,
  Standard,
  State,
  attributes,
  fetchAsset,
  links,
  niftyAsset,
  mint,
} from '@nifty-oss/asset';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';

const umi = (await createUmi()).use(niftyAsset());
const connection = new Connection(umi);

const asset = generateSigner(umi);
const holder = generateSigner(umi);

await mint(umi, {
asset,
holder: holder.publicKey,
payer: umi.identity,
name: 'Digital Asset',
extensions: [
    attributes([
    { traitType: 'Attributes Count', value: '2' },
    { traitType: 'Type', value: 'Dark' },
    { traitType: 'Clothes', value: 'Purple Shirt' },
    { traitType: 'Ears', value: 'None' },
    { traitType: 'Mouth', value: 'None' },
    { traitType: 'Eyes', value: 'None' },
    { traitType: 'Hat', value: 'Blue Cap' },
    ]),
    links([
    {
        name: 'metadata',
        uri: 'https://arweave.net/ebBV1qEYt65AKmM2J5wH_Vg-gjBa9YcwSYWFVt0rw9w',
    },
    ]),
],
}).sendAndConfirm(umi);
```
