"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[6728],{677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(6070),a=n(5710),s=n(6911),o=n(2405);const i={sidebar_label:"Handover",sidebar_position:7},l="handover",u={id:"asset/instructions/handover",title:"handover",description:"Handovers an asset to a new authority.",source:"@site/docs/asset/instructions/handover.md",sourceDirName:"asset/instructions",slug:"/asset/instructions/handover",permalink:"/docs/asset/instructions/handover",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Handover",sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Group",permalink:"/docs/asset/instructions/group"},next:{title:"Lock",permalink:"/docs/asset/instructions/lock"}},c={},d=[{value:"Accounts",id:"accounts",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"handover",children:(0,r.jsx)(t.code,{children:"handover"})}),"\n",(0,r.jsx)(t.p,{children:"Handovers an asset to a new authority."}),"\n",(0,r.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,r.jsxs)(t.p,{children:["Below is the list of accounts expected by the ",(0,r.jsx)(t.code,{children:"handover"})," instruction."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Writable"}),(0,r.jsx)(t.th,{children:"Signer"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"asset"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Initialized asset account"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authority"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Authority of the asset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"new authority"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"New authority of the assets to set"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The requirement of the ",(0,r.jsx)(t.code,{children:"new authority"})," to be a signer is to ensure that the new authority is the intended one."]})}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsx)(t.p,{children:"None."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { handover } from '@nifty-oss/asset';\n\n// Accounts:\n//   - asset: PublicKey\n//   - authority: KeypairSigner\n//   - newAuthority: KeypairSigner\nawait handover(umi, {\n  asset,\n  authority,\n  newAuthority,\n}).sendAndConfirm(umi);\n"})})})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2405:(e,t,n)=>{n.d(t,{A:()=>o});n(758);var r=n(3526);const a={tabItem:"tabItem_r0H8"};var s=n(6070);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},6911:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(758),a=n(3526),s=n(192),o=n(5557),i=n(3777),l=n(1997),u=n(7650),c=n(1607);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=b({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(6883);const v={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var x=n(6070);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(t))}},5710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(758);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);