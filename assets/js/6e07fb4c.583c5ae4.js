"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[5328],{5011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var s=n(6070),r=n(5710),a=n(6911),i=n(2405);const l={sidebar_label:"Update",sidebar_position:16},o="update",d={id:"asset/instructions/update",title:"update",description:"Updates an asset. The update instruction can be used to add or update extensions of an asset.",source:"@site/docs/asset/instructions/update.md",sourceDirName:"asset/instructions",slug:"/asset/instructions/update",permalink:"/docs/asset/instructions/update",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_label:"Update",sidebar_position:16},sidebar:"docsSidebar",previous:{title:"Unverify",permalink:"/docs/asset/instructions/unverify"},next:{title:"Verify",permalink:"/docs/asset/instructions/verify"}},c={},u=[{value:"Accounts",id:"accounts",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"update",children:(0,s.jsx)(t.code,{children:"update"})}),"\n",(0,s.jsxs)(t.p,{children:["Updates an asset. The ",(0,s.jsx)(t.code,{children:"update"})," instruction can be used to add or update extensions of an asset."]}),"\n",(0,s.jsxs)(t.p,{children:["To update an asset with extension data greater than the transaction size (",(0,s.jsx)(t.code,{children:"~1232 bytes"}),"), you can use ",(0,s.jsx)(t.code,{children:"allocate"})," instruction to create a buffer (uninitialized asset) account, which can then be passed to the update."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"It is not possible to update an immutable asset."})}),"\n",(0,s.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,s.jsxs)(t.p,{children:["Below is the list of accounts expected by the ",(0,s.jsx)(t.code,{children:"update"})," instruction."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Writable"}),(0,s.jsx)(t.th,{children:"Signer"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"asset"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Asset account"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"authority"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Authority of the asset"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"buffer"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"Extension buffer (uninitialized asset) account"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"group"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"Asset account of the group"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"payer"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"Account paying for the storage fees"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"system program"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"System program"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["When a ",(0,s.jsx)(t.code,{children:"buffer"})," account is used to pass the extension data and there are mutiple extensions on the buffer account, only the first extension is used."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"payer"})," and ",(0,s.jsx)(t.code,{children:"system program"})," are only needed if adding a new externsion."]}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"create"})," instruction expects the information of the asset, including an optional list of extensions."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Offset"}),(0,s.jsx)(t.th,{children:"Size"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"name"})}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"~"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"(optional)"})," Updated name of the asset (up to 35 characters)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"mutable"})}),(0,s.jsx)(t.td,{children:"~"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"(optional)"})," Indicates whether the asset is mutable or not."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"extension"})}),(0,s.jsx)(t.td,{children:"~"}),(0,s.jsx)(t.td,{children:"~"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"(optional)"})," Extension to add or update."]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["All three fields of the ",(0,s.jsx)(t.code,{children:"update"})," are optional, meaning that they are only updated if a new value is set. In the case of an ",(0,s.jsx)(t.code,{children:"extension"}),", when the extension is already present on the asset, its data is updated; otherwise, the extension is added to the asset."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(i.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { attributes, update } from '@nifty-oss/asset';\n\n// Accounts:\n//   - asset: PublicKey\n//   - authority: KeypairSigner\n//   - payer: KeypairSigner\nawait update(umi, {\n  asset,\n  authority,\n  payer,\n  extension: attributes([{ name: 'Clothes', value: 'Purple Shirt' }]),\n}).sendAndConfirm(umi);\n"})})})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2405:(e,t,n)=>{n.d(t,{A:()=>i});n(758);var s=n(3526);const r={tabItem:"tabItem_r0H8"};var a=n(6070);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},6911:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(758),r=n(3526),a=n(192),i=n(5557),l=n(3777),o=n(1997),d=n(7650),c=n(1607);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[d,u]=p({queryString:n,groupId:r}),[j,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=d??j;return x({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=n(6883);const b={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var m=n(6070);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(d(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=j(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...t,...e}),(0,m.jsx)(y,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,m.jsx)(g,{...e,children:u(e.children)},String(t))}},5710:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(758);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);