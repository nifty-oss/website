"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[822],{1685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(4848),a=t(8453);const i={sidebar_position:3},r="Quickstart",c={id:"quickstart",title:"Quickstart",description:"CLI",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Nifty vs Alternatives",permalink:"/docs/alternatives"}},o={},l=[{value:"CLI",id:"cli",level:2},{value:"Download Pre-Built Binary",id:"download-pre-built-binary",level:3},{value:"Install from Source",id:"install-from-source",level:3},{value:"Example: Create a basic Nifty Asset",id:"example-create-a-basic-nifty-asset",level:3},{value:"Example: Decode an asset account",id:"example-decode-an-asset-account",level:3},{value:"JS Client",id:"js-client",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,s.jsx)(n.p,{children:"You can install the bundled Nifty CLI to start playing around with Nift assets."}),"\n",(0,s.jsx)(n.h3,{id:"download-pre-built-binary",children:"Download Pre-Built Binary"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Todo"})}),"\n",(0,s.jsx)(n.h3,{id:"install-from-source",children:"Install from Source"}),"\n",(0,s.jsxs)(n.p,{children:["Requires ",(0,s.jsx)(n.a,{href:"https://www.rust-lang.org/learn/get-started",children:"Rust to be installed"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can install with ",(0,s.jsx)(n.code,{children:"pnpm"})," from the root directory of the ",(0,s.jsx)(n.code,{children:"nifty-asset"})," respository:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm clients:cli:install\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With Rust's ",(0,s.jsx)(n.code,{children:"cargo"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd clients/cli\ncargo install --path .\n"})}),"\n",(0,s.jsx)(n.p,{children:"Directly from crates.io:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo install nifty-cli\n"})}),"\n",(0,s.jsx)(n.p,{children:"To see all the available commands and usage suggestions run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nifty --help\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Usage: nifty [OPTIONS] <COMMAND>\n\nCommands:\n  burn      Burn an asset\n  mint      Create an asset with extensions\n  create    Create a basic asset without extensions\n  decode    Get an asset account's data and decode it\n  approve   Set a delegate on an asset with specific roles\n  lock      Lock an asset, preventing any actions to be performed on it\n  revoke    Revoke a delegate from an asset\n  transfer  Transfer an asset to a new owner\n  unlock    Unlock an asset, allowing actions to be performed on it\n  help      Print this message or the help of the given subcommand(s)\n\nOptions:\n  -k, --keypair-path <KEYPAIR_PATH>  Path to the keypair file\n  -r, --rpc-url <RPC_URL>            RPC URL for the Solana cluster\n  -h, --help                         Print help\n  -V, --version                      Print version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To see the help for a specific command, run the command with the ",(0,s.jsx)(n.code,{children:"--help"})," option, e.g.:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nifty create --help\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Create a basic asset without extensions\n\nUsage: nifty create [OPTIONS] --name <NAME>\n\nOptions:\n  -k, --keypair-path <KEYPAIR_PATH>\n          Path to the keypair file\n  -n, --name <NAME>\n          The name of the asset\n  -a, --asset-keypair-path <ASSET_KEYPAIR_PATH>\n          Path to the mint keypair file\n  -r, --rpc-url <RPC_URL>\n          RPC URL for the Solana cluster\n      --immutable\n          Create the asset as immutable\n  -o, --owner <OWNER>\n          Owner of the created asset, defaults to authority pubkey\n  -h, --help\n          Print help\n"})}),"\n",(0,s.jsx)(n.p,{children:"We install the Solana CLI which we use to set and configure both a default keypair and RPC node URL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'sh -c "$(curl -sSfL https://release.solana.com/v1.16.25/install)"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now we can set the default keypair and RPC node URL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"solana config set --url https://api.devnet.solana.com\nsolana-keygen new\n"})}),"\n",(0,s.jsx)(n.p,{children:"Nifty will use these values by default, but you can also pass them as options to the commands."}),"\n",(0,s.jsx)(n.h3,{id:"example-create-a-basic-nifty-asset",children:"Example: Create a basic Nifty Asset"}),"\n",(0,s.jsxs)(n.p,{children:["We can create a basic Nifty Asset using the ",(0,s.jsx)(n.code,{children:"create"})," command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'nifty create -n "My Nifty Asset"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You will see the transaction signature and the asset account address similar to this output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Asset 5to4wpbDE1KkBHKgFYFVEBz3UBFRqpovSgQYJzSbTe85 created in tx: EizjhztpEZfnqD8zccLEybF1L3qtbGRQXhmjMQi6wA15Sege3pv6giy8ErsjAu65W6tGC83UU185CEt4tYAkGP8\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.a,{href:"https://explorer.solana.com/",children:"Solana Explorer"})," to see the asset account details."]}),"\n",(0,s.jsx)(n.h3,{id:"example-decode-an-asset-account",children:"Example: Decode an asset account"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nifty decode 5to4wpbDE1KkBHKgFYFVEBz3UBFRqpovSgQYJzSbTe85\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will print the asset account data and the decoded data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Asset: Asset {\n    discriminator: Asset,\n    state: Unlocked,\n    standard: NonFungible,\n    mutable: true,\n    holder: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8,\n    group: 11111111111111111111111111111111,\n    authority: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8,\n    delegate: Delegate {\n        address: 11111111111111111111111111111111,\n        roles: 0,\n    },\n    name: [\n        77,\n        121,\n        32,\n        65,\n        115,\n        115,\n        101,\n        116,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n        0,\n    ],\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To print a specific field, you can use the ",(0,s.jsx)(n.code,{children:"--field"})," option:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nifty decode 5to4wpbDE1KkBHKgFYFVEBz3UBFRqpovSgQYJzSbTe85 --field name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"js-client",children:"JS Client"}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the Nifty JS client to interact with Nifty Assets. First, generate it with ",(0,s.jsx)(n.code,{children:"pnpm"})," from the root directory of the ",(0,s.jsx)(n.code,{children:"nifty-asset"})," respository:"]}),"\n",(0,s.jsx)(n.p,{children:"Build the programs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm programs:build\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate the JS and Rust clients:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm generate:clients\n"})}),"\n",(0,s.jsx)(n.p,{children:"or generate both the clients and the IDL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm generate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will generate the JS client in the ",(0,s.jsx)(n.code,{children:"clients/js"})," directory. You can use it to interact with the Nifty Asset program."]}),"\n",(0,s.jsx)(n.p,{children:'In this example we use the "mint" helper function to allocate a new asset with some extensions, write the extension data and then\ncreate the asset.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Connection, PublicKey } from '@solana/web3.js';\nimport {\n  Asset,\n  Discriminator,\n  ExtensionType,\n  Standard,\n  State,\n  attributes,\n  fetchAsset,\n  links,\n  niftyAsset,\n  mint,\n} from '@nifty-oss/asset';\nimport { createUmi } from '@metaplex-foundation/umi-bundle-defaults';\n\nconst umi = (await createUmi()).use(niftyAsset());\nconst connection = new Connection(umi);\n\nconst asset = generateSigner(umi);\nconst holder = generateSigner(umi);\n\nawait mint(umi, {\nasset,\nholder: holder.publicKey,\npayer: umi.identity,\nname: 'Digital Asset',\nextensions: [\n    attributes([\n    { traitType: 'Attributes Count', value: '2' },\n    { traitType: 'Type', value: 'Dark' },\n    { traitType: 'Clothes', value: 'Purple Shirt' },\n    { traitType: 'Ears', value: 'None' },\n    { traitType: 'Mouth', value: 'None' },\n    { traitType: 'Eyes', value: 'None' },\n    { traitType: 'Hat', value: 'Blue Cap' },\n    ]),\n    links([\n    {\n        name: 'metadata',\n        uri: 'https://arweave.net/ebBV1qEYt65AKmM2J5wH_Vg-gjBa9YcwSYWFVt0rw9w',\n    },\n    ]),\n],\n}).sendAndConfirm(umi);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);