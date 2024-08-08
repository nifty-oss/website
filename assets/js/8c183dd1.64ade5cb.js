"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[835],{3013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=n(6070),a=n(5710),r=n(6911),i=n(2405);const l={sidebar_label:"Allocate",sidebar_position:1},o="allocate",c={id:"asset/instructions/allocate",title:"allocate",description:"Allocates an extension into an uninitialized asset (buffer) account. This is useful when the extension data is greater than the transaction size (~1232 bytes), which requires the data to be sent over multiple transactions.",source:"@site/docs/asset/instructions/allocate.md",sourceDirName:"asset/instructions",slug:"/asset/instructions/allocate",permalink:"/docs/asset/instructions/allocate",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Allocate",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Instructions",permalink:"/docs/category/instructions"},next:{title:"Approve",permalink:"/docs/asset/instructions/approve"}},d={},u=[{value:"Accounts",id:"accounts",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"allocate",children:(0,s.jsx)(t.code,{children:"allocate"})}),"\n",(0,s.jsxs)(t.p,{children:["Allocates an extension into an uninitialized asset (buffer) account. This is useful when the extension data is greater than the transaction size (",(0,s.jsx)(t.code,{children:"~1232 bytes"}),"), which requires the data to be sent over multiple transactions."]}),"\n",(0,s.jsxs)(t.p,{children:["The allocate instruction should be used once for each extension to be added to an asset. Alternatively, it is possible to specify a list of extensions on the ",(0,s.jsx)(t.code,{children:"create"})," instruction \u2014 this is the preferred method when all extension data fits into a single transaction."]}),"\n",(0,s.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,s.jsxs)(t.p,{children:["Below is the list of accounts expected by the ",(0,s.jsx)(t.code,{children:"allocate"})," instruction."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Writable"}),(0,s.jsx)(t.th,{children:"Signer"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"asset"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Uninitialized asset account"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"payer"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"Account paying for the storage fees"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"system program"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"System Program account"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"payer"})," and ",(0,s.jsx)(t.code,{children:"system program"})," are only required when the account space is not preallocated. In this case, the account will be resized to fit the required extension data."]}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"allocate"})," instruction expects the information of the extension to be added to the asset."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Offset"}),(0,s.jsx)(t.th,{children:"Size"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"extension_type"})}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsxs)(t.td,{children:["The type of the extension (a value from the ",(0,s.jsx)(t.code,{children:"ExtensionType"})," enum)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"length"})}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsxs)(t.td,{children:["The tota length of the extension as a ",(0,s.jsx)(t.code,{children:"u32"})," value."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data"})}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"~"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"(optional)"})," Extension data bytes or a slice of it."]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"length"})," represents the total length of the extension, even if it is over the transaction size limit. The ",(0,s.jsx)(t.code,{children:"data"})," is optional and can either represent the complete data for the extension, if the extension data fits on a single transaction, or a partial amount of the data if the extension is larger."]}),"\n",(0,s.jsxs)(t.p,{children:["When an extension data needs multiple transaction to be written, the ",(0,s.jsx)(t.code,{children:"allocate"})," instruction will be followed by one or more ",(0,s.jsx)(t.code,{children:"write"})," instructions."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(i.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { allocate, attributes } from '@nifty-oss/asset';\n\n// Accounts:\n//   - asset: KeypairSigner\n//   - payer: KeypairSigner\nawait allocate(umi, {\n  asset,\n  payer,\n  extension: attributes([{ name: 'head', value: 'hat' }]),\n}).sendAndConfirm(umi);\n"})})}),(0,s.jsx)(i.A,{value:"rust",label:"Rust",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use nifty_asset::{\n  extensions::{Attributes, AttributesBuilder, ExtensionBuilder},\n  instructions::AllocateBuilder,\n  types::{ExtensionInput, ExtensionType},\n};\n\nlet mut attributes = AttributesBuilder::default();\nattributes.add("head", "hat");\n\nlet ix = AllocateBuilder::new()\n  .asset(asset.pubkey())\n  .payer(Some(payer.pubkey()))\n  .system_program(Some(system_program::id()))\n  .extension(ExtensionInput {\n    extension_type: ExtensionType::Attributes,\n    length: data.len() as u32,\n    data: Some(data),\n})\n.instruction();\n'})})}),(0,s.jsx)(i.A,{value:"rust on-chain",label:"Rust (on-chain)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use nifty_asset::{\n  extensions::{Attributes, AllocateCpiBuilder, ExtensionBuilder},\n  instructions::AllocateBuilder,\n  types::{ExtensionInput, ExtensionType},\n};\n\nlet mut attributes = AttributesBuilder::default();\nattributes.add("head", "hat");\n\nAllocateCpiBuilder::new(ctx.accounts.nifty_asset_program)\n  .asset(ctx.accounts.group)\n  .payer(Some(ctx.accounts.payer))\n  .system_program(Some(ctx.accounts.system_program))\n  .extension(ExtensionInput {\n    extension_type: ExtensionType::Attributes,\n    length: data.len() as u32,\n    data: Some(data),\n})\n.invoke();\n'})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"For on-chain use, the Nifty Asset crate offers macros that facilitate the manipulation of the extension data to avoid issues with stack/heap size:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/nifty-asset/0.4.0/nifty_asset/macro.allocate_and_write.html",children:"allocate_and_write"}),": convenience macro to invoke ",(0,s.jsx)(t.code,{children:"allocate"})," and ",(0,s.jsx)(t.code,{children:"write"})," instructions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/nifty-asset/0.4.0/nifty_asset/macro.allocate_instruction_data.html",children:"allocate_instruction_data"}),": convenience macro to create the instruction data for the ",(0,s.jsx)(t.code,{children:"allocate"})," instruction."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.rs/nifty-asset/0.4.0/nifty_asset/macro.allocate_update_data_length.html",children:"allocate_update_data_length"}),": updates the length of the extension data in the ",(0,s.jsx)(t.code,{children:"allocate"})," instruction data."]}),"\n"]})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2405:(e,t,n)=>{n.d(t,{A:()=>i});n(758);var s=n(3526);const a={tabItem:"tabItem_r0H8"};var r=n(6070);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:n,children:t})}},6911:(e,t,n)=>{n.d(t,{A:()=>A});var s=n(758),a=n(3526),r=n(192),i=n(5557),l=n(3777),o=n(1997),c=n(7650),d=n(1607);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,u]=p({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),j=(()=>{const e=c??f;return x({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=n(6883);const j={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var b=n(6070);function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==s&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function A(e){const t=(0,m.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},5710:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(758);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);