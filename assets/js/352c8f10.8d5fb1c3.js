"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[4915],{6738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(6070),s=n(5710),i=n(6911),a=n(2405);const o={sidebar_label:"Remove",sidebar_position:9},l="remove",c={id:"asset/instructions/remove",title:"remove",description:"Removes an extension from an asset.",source:"@site/docs/asset/instructions/remove.md",sourceDirName:"asset/instructions",slug:"/asset/instructions/remove",permalink:"/docs/asset/instructions/remove",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Remove",sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Lock",permalink:"/docs/asset/instructions/lock"},next:{title:"Resize",permalink:"/docs/asset/instructions/resize"}},u={},d=[{value:"Accounts",id:"accounts",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"remove",children:(0,r.jsx)(t.code,{children:"remove"})}),"\n",(0,r.jsx)(t.p,{children:"Removes an extension from an asset."}),"\n",(0,r.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,r.jsxs)(t.p,{children:["Below is the list of accounts expected by the ",(0,r.jsx)(t.code,{children:"remove"})," instruction."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Writable"}),(0,r.jsx)(t.th,{children:"Signer"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"asset"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Uninitialized asset account"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authority"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Authority of the asset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"group"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Group asset account of the asset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"recipient"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Account paying for the storage fees"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"recipient"})," is the address that receives the refunded rent from the extension allocation."]}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"remove"})," instruction expects the information of the extension to remove."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Offset"}),(0,r.jsx)(t.th,{children:"Size"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"extension type"})}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Type of the extension."})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["The type of the extension is defined by one of the values of the ",(0,r.jsx)(t.code,{children:"ExtensionType"})," enum."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["It is not possible to remove a ",(0,r.jsx)(t.code,{children:"Manager"})," or ",(0,r.jsx)(t.code,{children:"Proxy"})," entensions. A ",(0,r.jsx)(t.code,{children:"Grouping"})," extension can only be removed if the group is empty \u2014 its ",(0,r.jsx)(t.code,{children:"size"})," is ",(0,r.jsx)(t.code,{children:"0"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(a.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { remove, ExtensionType } from '@nifty-oss/asset';\n\n// Accounts:\n//   - asset: PublicKey\n//   - authority: KeypairSigner\n//   - recipient: PublicKey\nawait remove(umi, {\n  asset,\n  authority,\n  recipient,\n  extensionType: ExtensionType.Attributes,\n}).sendAndConfirm(umi);\n"})})})})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2405:(e,t,n)=>{n.d(t,{A:()=>a});n(758);var r=n(3526);const s={tabItem:"tabItem_r0H8"};var i=n(6070);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},6911:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(758),s=n(3526),i=n(192),a=n(5557),o=n(3777),l=n(1997),c=n(7650),u=n(1607);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=p({queryString:n,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),b=(()=>{const e=c??m;return x({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(6883);const b={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var j=n(6070);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(y,{...t,...e})]})}function A(e){const t=(0,f.A)();return(0,j.jsx)(g,{...e,children:d(e.children)},String(t))}},5710:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(758);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);