"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[1192],{2493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(6070),s=r(5710),a=r(6911),i=r(2405);const o={sidebar_label:"Transfer",sidebar_position:12},l="transfer",c={id:"asset/instructions/transfer",title:"transfer",description:"Transfers ownership of the aseet to a new public key. When the asset or the group asset has royalty constraints associated, these are validated during the transfer.",source:"@site/docs/asset/instructions/transfer.md",sourceDirName:"asset/instructions",slug:"/asset/instructions/transfer",permalink:"/docs/asset/instructions/transfer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_label:"Transfer",sidebar_position:12},sidebar:"docsSidebar",previous:{title:"Revoke",permalink:"/docs/asset/instructions/revoke"},next:{title:"Ungroup",permalink:"/docs/asset/instructions/ungroup"}},u={},d=[{value:"Accounts",id:"accounts",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"transfer",children:(0,n.jsx)(t.code,{children:"transfer"})}),"\n",(0,n.jsx)(t.p,{children:"Transfers ownership of the aseet to a new public key. When the asset or the group asset has royalty constraints associated, these are validated during the transfer."}),"\n",(0,n.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,n.jsxs)(t.p,{children:["Below is the list of accounts expected by the ",(0,n.jsx)(t.code,{children:"transfer"})," instruction."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Writable"}),(0,n.jsx)(t.th,{children:"Signer"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Asset account"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"signer"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Current owner of the asset or transfer delegate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"recipient"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Recipient of the asset"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"group"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Group asset account of the asset"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"group"})," is required when the asset is part of a group. The rationale is that royalties can be set at the group level and they need to be validated."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"For assets with associated royalties, the transfer will fail if the royalties constraint is not satisfied."})}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsx)(t.p,{children:"None."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(i.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { transfer } from '@nifty-oss/asset';\n\n// Accounts:\n//   - asset: PublicKey\n//   - signer: KeypairSigner\n//   - recipient: PublicKey\nawait transfer(umi, {\n  asset,\n  signer,\n  recipient,\n}).sendAndConfirm(umi);\n"})})})})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2405:(e,t,r)=>{r.d(t,{A:()=>i});r(758);var n=r(3526);const s={tabItem:"tabItem_r0H8"};var a=r(6070);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},6911:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(758),s=r(3526),a=r(192),i=r(5557),o=r(3777),l=r(1997),c=r(7650),u=r(1607);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=p({queryString:r,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),x=(()=>{const e=c??b;return f({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=r(6883);const x={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var j=r(6070);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==n&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(g,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},5710:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(758);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);