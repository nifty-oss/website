"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[1946],{2770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(6070),r=t(5710),a=t(6911),i=t(2405);const o={sidebar_label:"Grouping",sidebar_position:5},u="Grouping",l={id:"asset/extensions/grouping",title:"Grouping",description:"Assets can be part of an on-chain group (collection). A group asset is created using the Grouping extension, which specify the maximum size of the group (or indicates that the group has no upper limit) and its current size. Member assets of a group point to the group asset in their group account field.",source:"@site/docs/asset/extensions/grouping.md",sourceDirName:"asset/extensions",slug:"/asset/extensions/grouping",permalink:"/docs/asset/extensions/grouping",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Grouping",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Creators",permalink:"/docs/asset/extensions/creators"},next:{title:"Links",permalink:"/docs/asset/extensions/links"}},c={},d=[{value:"Creating a Group",id:"creating-a-group",level:2},{value:"Fetching a Group",id:"fetching-a-group",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"grouping",children:"Grouping"}),"\n",(0,s.jsxs)(n.p,{children:["Assets can be part of an on-chain group (collection). A group asset is created using the ",(0,s.jsx)(n.code,{children:"Grouping"})," extension, which specify the maximum size of the group (or indicates that the group has no upper limit) and its current size. Member assets of a group point to the group asset in their ",(0,s.jsx)(n.code,{children:"group"})," account field."]}),"\n",(0,s.jsxs)(n.p,{children:["The group extension can be added to an asset either at creation time or after. It can also be removed as long as the group is empty (",(0,s.jsx)(n.code,{children:"size"})," equal to ",(0,s.jsx)(n.code,{children:"0"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"The extension consists of:"}),"\n",(0,s.jsxs)("table",{class:"account-layout-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)("i",{children:"Field"})}),(0,s.jsx)("th",{colspan:"2",children:(0,s.jsx)("i",{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"size"})}),(0,s.jsx)("td",{colspan:"2",children:"Number of assest on the group. This value is updated every time an asset is added or removed from the group."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"max_size"})}),(0,s.jsxs)("td",{children:["The permitted maximum size of the group. When the group is unlimited, this value is ",(0,s.jsx)("code",{children:"0"}),"."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"delegate"})}),(0,s.jsx)("td",{children:"An optional delegate authorised to add assets to this group."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-group",children:"Creating a Group"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Grouping"})," extension is used to create group assets. The extension can be added using either the ",(0,s.jsx)(n.code,{children:"allocate"}),", ",(0,s.jsx)(n.code,{children:"create"})," or ",(0,s.jsx)(n.code,{children:"update"})," instructions."]}),"\n","\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { allocate, grouping } from '@nifty-oss/asset';\n\nawait allocate(umi, {\n  asset,\n  payer,\n  extension: grouping(10),\n}).sendAndConfirm(umi);\n"})})}),(0,s.jsx)(i.A,{value:"rust",label:"Rust",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use nifty_asset::{\n  extensions::{Attributes, GroupingBuilder, ExtensionBuilder},\n  instructions::AllocateBuilder,\n  types::{ExtensionInput, ExtensionType},\n};\n\nlet mut grouping = GroupingBuilder::default();\ngrouping.set(10, None);\n\nlet ix = AllocateBuilder::new()\n  .asset(asset.pubkey())\n  .payer(Some(payer.pubkey()))\n  .system_program(Some(system_program::id()))\n  .extension(ExtensionInput {\n    extension_type: ExtensionType::Grouping,\n    length: grouping.len() as u32,\n    data: Some(grouping),\n})\n.instruction();\n"})})}),(0,s.jsx)(i.A,{value:"rust on-chain",label:"Rust (on-chain)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use nifty_asset::{\n  extensions::{Attributes, AllocateCpiBuilder, ExtensionBuilder},\n  instructions::AllocateBuilder,\n  types::{ExtensionInput, ExtensionType},\n};\n\nlet mut grouping = GroupingBuilder::default();\ngrouping.set(10, None);\n\nAllocateCpiBuilder::new(ctx.accounts.nifty_asset_program)\n  .asset(ctx.accounts.group)\n  .payer(Some(ctx.accounts.payer))\n  .system_program(Some(ctx.accounts.system_program))\n  .extension(ExtensionInput {\n    extension_type: ExtensionType::Grouping,\n    length: grouping.len() as u32,\n    data: Some(grouping),\n})\n.invoke();\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"fetching-a-group",children:"Fetching a Group"}),"\n",(0,s.jsxs)(n.p,{children:["A group is an asset with the ",(0,s.jsx)(n.code,{children:"Grouping"})," extension. Given an asset account, it is possible to retrieve the grouping extension to determine whether the asset represents a group or not. Note that not all assets might have the extension, therefore it is necessary to assert if the extension was found."]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import {\n  ExtensionType,\n  fetchAsset,\n  getExtension\n} from '@nifty-oss/asset';\n\nconst asset = await fetchAsset(umi, address);\nconst grouping = getExtension(asset, ExtensionType.Grouping);\n\nif (grouping) {\n    console.log(\"size=\" + grouping.size);\n}\n"})})}),(0,s.jsx)(i.A,{value:"rust",label:"Rust",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use nifty_asset::{\n  extensions::Grouping,\n  state::Asset,\n};\n\nlet account = get_account(address)\n  .await\n  .unwrap();\nlet account_data = account.data.as_ref();\n\nif let Some(grouping) = Asset::get::<Grouping>(account_data) {\n  println!("size: {}", grouping.size);\n}\n'})})}),(0,s.jsx)(i.A,{value:"rust on-chain",label:"Rust (on-chain)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use nifty_asset::{\n  extensions::Attributes,\n  state::Asset,\n};\n\nlet data = (*ctx.accounts.asset.data).borrow();\n\nif let Some(grouping) = Asset::get::<Grouping>(&data) {\n  msg!("size: {}", grouping.size);\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2405:(e,n,t)=>{t.d(n,{A:()=>i});t(758);var s=t(3526);const r={tabItem:"tabItem_r0H8"};var a=t(6070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:n})}},6911:(e,n,t)=>{t.d(n,{A:()=>A});var s=t(758),r=t(3526),a=t(192),i=t(5557),o=t(3777),u=t(1997),l=t(7650),c=t(1607);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[i,u]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[l,d]=g({queryString:t,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=l??x;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(6883);const f={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var b=t(6070);function j(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),r=o[t].value;r!==s&&(l(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function A(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},5710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(758);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);