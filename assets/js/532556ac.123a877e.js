"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[9689],{9496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(6070),s=n(5710),a=n(6911),l=n(2405);const i={sidebar_label:"Close",sidebar_position:4},o="close",c={id:"asset/instructions/close",title:"close",description:"Closes an uninitialized (buffer) asset account, returning the rent funds. This instruction is used to close an account created by allocate, either because the asset was not created or the account was only used as a buffer for update.",source:"@site/docs/asset/instructions/close.md",sourceDirName:"asset/instructions",slug:"/asset/instructions/close",permalink:"/docs/asset/instructions/close",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Close",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Burn",permalink:"/docs/asset/instructions/burn"},next:{title:"Create",permalink:"/docs/asset/instructions/create"}},u={},d=[{value:"Accounts",id:"accounts",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"close",children:(0,r.jsx)(t.code,{children:"close"})}),"\n",(0,r.jsxs)(t.p,{children:["Closes an uninitialized (buffer) asset account, returning the rent funds. This instruction is used to close an account created by ",(0,r.jsx)(t.code,{children:"allocate"}),", either because the asset was not created or the account was only used as a buffer for ",(0,r.jsx)(t.code,{children:"update"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,r.jsxs)(t.p,{children:["Below is the list of accounts expected by the ",(0,r.jsx)(t.code,{children:"close"})," instruction."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Writable"}),(0,r.jsx)(t.th,{children:"Signer"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"asset"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Uninitialized (buffer) asset account"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"recipient"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Account receiving refunded rent"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsx)(t.p,{children:"None."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(l.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { close } from '@nifty-oss/asset';\n\n// Accounts:\n//   - buffer: KeypairSigner\n//   - recipient: PublicKey\nawait close(umi, {\n  buffer,\n  recipient,\n}).sendAndConfirm(umi);\n"})})})})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2405:(e,t,n)=>{n.d(t,{A:()=>l});n(758);var r=n(3526);const s={tabItem:"tabItem_r0H8"};var a=n(6070);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},6911:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(758),s=n(3526),a=n(192),l=n(5557),i=n(3777),o=n(1997),c=n(7650),u=n(1607);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=b({queryString:n,groupId:s}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??p;return f({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(6883);const x={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var v=n(6070);function j(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=i[n].value;s!==r&&(c(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(g,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},5710:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(758);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);