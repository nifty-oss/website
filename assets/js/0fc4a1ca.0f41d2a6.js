"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[202],{9783:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=t(6070),i=t(5710),r=t(6911),a=t(2405),o=t(6850);const c={sidebar_label:"Royalties",sidebar_position:11},l="Royalties",d={id:"asset/extensions/royalties",title:"Royalties",description:"Nifty Asset offers the ability to encode royalty enforcement directly into its transfer instruction using the Royalties extension, where creators can specify transfer constraints and royalties percentage.",source:"@site/docs/asset/extensions/royalties.md",sourceDirName:"asset/extensions",slug:"/asset/extensions/royalties",permalink:"/docs/asset/extensions/royalties",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"Royalties",sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Proxy",permalink:"/docs/asset/extensions/proxy"},next:{title:"Instructions",permalink:"/docs/category/instructions"}},u={},h=[{value:"Constraints",id:"constraints",level:2},{value:"<code>And</code>",id:"and",level:3},{value:"<code>Or</code>",id:"or",level:3},{value:"<code>Not</code>",id:"not",level:3},{value:"<code>Empty</code>",id:"empty",level:3},{value:"<code>PubkeyMatch</code>",id:"pubkeymatch",level:3},{value:"<code>OwnedBy</code>",id:"ownedby",level:3},{value:"Adding Royalties",id:"adding-royalties",level:2},{value:"Fetching Royalties",id:"fetching-royalties",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"royalties",children:"Royalties"}),"\n",(0,s.jsxs)(n.p,{children:["Nifty Asset offers the ability to encode royalty enforcement directly into its transfer instruction using the ",(0,s.jsx)(n.code,{children:"Royalties"})," extension, where creators can specify transfer constraints and royalties percentage."]}),"\n",(0,s.jsxs)(n.p,{children:["The royalty extension uses a system of composable ",(0,s.jsx)(n.code,{children:"Constraint"}),"s to create restrictions such as an allow or deny lists \u2014 these can be used to include or exclude specific programs as valid owners of asset accounts, preventing tranferring them."]}),"\n",(0,s.jsx)(n.p,{children:"The extension consists of:"}),"\n",(0,s.jsxs)("table",{class:"account-layout-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)("i",{children:"Field"})}),(0,s.jsx)("th",{children:(0,s.jsx)("i",{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"basis_points"})}),(0,s.jsxs)("td",{children:["Royalty percentage to be paid on secondary sales, a value between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"10000"})," representing ",(0,s.jsx)(n.code,{children:"0%"})," to ",(0,s.jsx)(n.code,{children:"100%"})," with two precision digits."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"constraint"})}),(0,s.jsx)("td",{children:"Constraint object to be checked during transfer. A failing constraint will block the transfer."})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Royalties constraints are validated on ",(0,s.jsx)(n.code,{children:"transfer"})," and the transfer will only be completed if the validation is successful."]})}),"\n",(0,s.jsx)(n.h2,{id:"constraints",children:"Constraints"}),"\n",(0,s.jsx)(n.p,{children:"Constraints are a way to enforce rules on the asset. They are composable and can be combined to create complex rules. The following constraints are available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#and",children:(0,s.jsx)(n.code,{children:"And"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#or",children:(0,s.jsx)(n.code,{children:"Or"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#not",children:(0,s.jsx)(n.code,{children:"Not"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#empty",children:(0,s.jsx)(n.code,{children:"Empty"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#pubkeymatch",children:(0,s.jsx)(n.code,{children:"PubkeyMatch"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ownedby",children:(0,s.jsx)(n.code,{children:"OwnedBy"})})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"and",children:(0,s.jsx)(n.code,{children:"And"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"And"})," constraint is a composite contraint that requires all of its sub-contraints to pass."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "And",\n  "constraints": [\n    {\n      "type": "OwnedBy",\n      "account": "Recipient",\n      "owners": ["11111111111111111111111111111111"]\n    },\n    {\n      "type": "PubkeyMatch",\n      "account": "Recipient",\n      "pubkeys": ["CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This constraint requires the recipient to be owned by the System Program (program address ",(0,s.jsx)(n.code,{children:"11111111111111111111111111111111"}),") and transferred to a specific public key (",(0,s.jsx)(n.code,{children:"CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"}),"). This simple example could be used to enforce that the asset can only be transferred to a specific address owned by a specific program."]}),"\n",(0,s.jsx)(n.h3,{id:"or",children:(0,s.jsx)(n.code,{children:"Or"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Or"})," constraint is a composite contraint that requires at least one of its sub-contraints to pass."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "Or",\n  "constraints": [\n    {\n      "type": "OwnedBy",\n      "account": "Recipient",\n      "owners": ["11111111111111111111111111111111"]\n    },\n    {\n      "type": "PubkeyMatch",\n      "account": "Recipient",\n      "pubkeys": ["CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This constraint requires the recipient to be owned by the System Program (program address ",(0,s.jsx)(n.code,{children:"11111111111111111111111111111111"}),") or transferred to a specific public key (",(0,s.jsx)(n.code,{children:"CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"}),"). This simple example could be used to enforce that the asset can only be transferred to a specific address or any other address owner by a specific program."]}),"\n",(0,s.jsx)(n.h3,{id:"not",children:(0,s.jsx)(n.code,{children:"Not"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Not"})," constraint is a composite contraint that requires its sub-constraint to fail \u2014 it inverts the result of it."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "Not",\n  "constraint": {\n    "type": "OwnedBy",\n    "account": "Recipient",\n    "owners": ["11111111111111111111111111111111"]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This constraint requires the recipient to ",(0,s.jsx)(n.strong,{children:"not"})," be owned by the System Program (program address ",(0,s.jsx)(n.code,{children:"11111111111111111111111111111111"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"empty",children:(0,s.jsx)(n.code,{children:"Empty"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Empty"})," constraint is a placeholder constraint that always passes."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "Empty"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"pubkeymatch",children:(0,s.jsx)(n.code,{children:"PubkeyMatch"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"PubkeyMatch"})," constraint requires the specified account to match one of the public keys in its list."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "PubkeyMatch",\n  "account": "Asset",\n  "pubkeys": ["CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This simple example restricts transfers to a single specific asset public key (",(0,s.jsx)(n.code,{children:"CcSZHtdnHTcW4En23vJfmXxhZceoAfZnAjc8kYvherJ8"}),"). Any other asset with a different public key cannot be transferred."]}),"\n",(0,s.jsx)(n.h3,{id:"ownedby",children:(0,s.jsx)(n.code,{children:"OwnedBy"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"OwnedBy"})," constraint requires that the specified account is owned by one of the specified public keys (address of a program)."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "OwnedBy",\n  "account": "Recipient",\n  "pubkeys": ["11111111111111111111111111111111"]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the recipient account in the transfer must be owned by the System program (",(0,s.jsx)(n.code,{children:"11111111111111111111111111111111"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-royalties",children:"Adding Royalties"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Royalties"})," extension can be created using either the ",(0,s.jsx)(n.code,{children:"allocate"}),", ",(0,s.jsx)(n.code,{children:"create"})," or ",(0,s.jsx)(n.code,{children:"update"})," instructions."]}),"\n","\n",(0,s.jsxs)(r.A,{children:[(0,s.jsxs)(a.A,{value:"javascript",label:"JavaScript",default:!0,children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { allocate, royalties } from '@nifty-oss/asset';\n\nconst constraint = {\n  type: 'OwnedBy',\n  account: 'Recipient',\n  owners: [\n    publicKey('11111111111111111111111111111111'),\n  ],\n};\n// 5% royalty fee\nconst basisPoints = 500;\n\nawait allocate(umi, {\n  asset,\n  payer,\n  extension: royalties(basisPoints, constraint),\n}).sendAndConfirm(umi);\n"})}),(0,s.jsx)(o.A,{type:"tip",children:(0,s.jsxs)("p",{children:[(0,s.jsx)(n.p,{children:"You can specify your constraints using a JSON syntax:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const constraint: Constraint = JSON.parse(\n  \'{ \\\n    "type": "OwnedBy", \\\n    "account": "Recipient", \\\n    "pubkeys": ["11111111111111111111111111111111"] \\\n\n  }\'\n);\n'})})]})})]}),(0,s.jsx)(a.A,{value:"rust",label:"Rust",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use nifty_asset::{\n  constraints::{Account, OperatorType, OwnedByBuilder},\n  extensions::{ExtensionBuilder, Royalties, RoyaltiesBuilder},\n  instructions::CreateBuilder,\n  types::{ExtensionInput, ExtensionType},\n};\nuse solana_program::{system_program, pubkey::Pubkey};\n\nlet mut owned_by = OwnedByBuilder::default();\nowned_by.set(Account::Recipient, &[system_program::ID]);\n\nlet mut royalties = RoyaltiesBuilder::default();\nroyalties.set(500, &mut owned_by);\nlet data = royalties.data();\n\nlet ix = CreateBuilder::new()\n  .asset(asset.pubkey())\n  .authority(context.payer.pubkey(), false)\n  .owner(context.payer.pubkey())\n  .payer(Some(context.payer.pubkey()))\n  .system_program(Some(system_program::id()))\n  .name("name".to_string())\n  .extensions(vec![ExtensionInput {\n    extension_type: ExtensionType::Royalties,\n    length: data.len() as u32,\n    data: Some(data),\n  }])\n  .instruction();\n'})})}),(0,s.jsx)(a.A,{value:"rust on-chain",label:"Rust (on-chain)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use nifty_asset::{\n  constraints::{Account, OperatorType, OwnedByBuilder},\n  extensions::{ExtensionBuilder, Royalties, RoyaltiesBuilder},\n  instructions::CreateBuilder,\n  types::{ExtensionInput, ExtensionType},\n};\nuse solana_program::{system_program, pubkey::Pubkey};\n\nlet mut owned_by = OwnedByBuilder::default();\nowned_by.set(Account::Recipient, &[system_program::ID]);\n\nlet mut royalties = RoyaltiesBuilder::default();\nroyalties.set(500, &mut owned_by);\nlet data = royalties.data();\n\nCreateBuilder::new(ctx.accounts.nifty_asset_program)\n  .asset(ctx.accounts.group)\n  .authority(ctx.accounts.authority, false)\n  .owner(ctx.accounts.owner)\n  .payer(Some(ctx.accounts.payer))\n  .system_program(Some(ctx.accounts.system_program))\n  .name("name".to_string())\n  .extension(vec![ExtensionInput {\n    extension_type: ExtensionType::Royalties,\n    length: data.len() as u32,\n    data: Some(data),\n}])\n.invoke();\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"fetching-royalties",children:"Fetching Royalties"}),"\n",(0,s.jsx)(n.p,{children:"Given an asset account, it is possible to retrieve the royalties of an asset. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found."}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(a.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import {\n  ExtensionType,\n  fetchAsset,\n  getExtension\n} from '@nifty-oss/asset';\n\nconst asset = await fetchAsset(umi, address);\nconst royalties = getExtension(asset, ExtensionType.Royalties);\n\nif (royalties) {\n    console.log('basisPoint=', royalties.basisPoint);\n    console.log('constraint=', royalties.constraint);\n}\n"})})}),(0,s.jsx)(a.A,{value:"rust",label:"Rust",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use nifty_asset::{\n  extensions::Royalties,\n  state::Asset,\n};\n\nlet account = get_account(address)\n  .await\n  .unwrap();\nlet account_data = account.data.as_ref();\n\nif let Some(royalties) = Asset::get::<Royalties>(account_data) {\n  println!("basis_points: {}", royalties.basis_points);\n  println!(\n    "operator type: {}",\n    royalties.constraint.operator.operator_type()\n  );\n}\n'})})}),(0,s.jsx)(a.A,{value:"rust on-chain",label:"Rust (on-chain)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use nifty_asset::{\n  extensions::Royalties,\n  state::Asset,\n};\n\nlet data = (*ctx.accounts.asset.data).borrow();\n\nif let Some(royalties) = Asset::get::<Royalties>(&data) {\n  msg!("basis_points: {}", royalties.basis_points);\n  msg!(\n    "operator type: {}",\n    royalties.constraint.operator.operator_type()\n  );\n}\n'})})})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},6850:(e,n,t)=>{t.d(n,{A:()=>E});var s=t(758),i=t(6070);function r(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=s.Children.toArray(e),t=n.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,i.jsx)(i.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:t}}var a=t(3526),o=t(727),c=t(6535);const l={admonition:"admonition_aJuu",admonitionHeading:"admonitionHeading_vBIJ",admonitionIcon:"admonitionIcon_RVLs",admonitionContent:"admonitionContent_USyV"};function d(e){let{type:n,className:t,children:s}=e;return(0,i.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(n),l.admonition,t),children:s})}function u(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:l.admonitionHeading,children:[(0,i.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function h(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:l.admonitionContent,children:n}):null}function p(e){const{type:n,icon:t,title:s,children:r,className:a}=e;return(0,i.jsxs)(d,{type:n,className:a,children:[s||t?(0,i.jsx)(u,{title:s,icon:t}):null,(0,i.jsx)(h,{children:r})]})}function x(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const y={icon:(0,i.jsx)(x,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function m(e){return(0,i.jsx)(p,{...y,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,i.jsx)(f,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,i.jsx)(p,{...j,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function g(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const v={icon:(0,i.jsx)(g,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function w(e){return(0,i.jsx)(p,{...v,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,i.jsx)(A,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function T(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,i.jsx)(T,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const _={icon:(0,i.jsx)(A,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const R={...{note:m,tip:b,info:w,warning:function(e){return(0,i.jsx)(p,{...k,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(p,{...N,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(m,{title:"secondary",...e}),important:e=>(0,i.jsx)(w,{title:"important",...e}),success:e=>(0,i.jsx)(b,{title:"success",...e}),caution:function(e){return(0,i.jsx)(p,{..._,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function E(e){const n=r(e),t=(s=n.type,R[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),R.info));var s;return(0,i.jsx)(t,{...n})}},2405:(e,n,t)=>{t.d(n,{A:()=>a});t(758);var s=t(3526);const i={tabItem:"tabItem_r0H8"};var r=t(6070);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:t,children:n})}},6911:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(758),i=t(3526),r=t(192),a=t(5557),o=t(3777),c=t(1997),l=t(7650),d=t(1607);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[l,u]=x({queryString:t,groupId:i}),[y,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),f=(()=>{const e=l??y;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=t(6883);const f={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var j=t(6070);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==s&&(l(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=y(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},5710:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(758);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);