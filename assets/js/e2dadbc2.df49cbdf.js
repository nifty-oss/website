"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[1826],{338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var r=n(6070),s=n(5710),a=n(6911),o=n(2405);const u={sidebar_label:"Ungroup",sidebar_position:13},i="ungroup",l={id:"asset/instructions/ungroup",title:"ungroup",description:"Removes an asset from a group.",source:"@site/docs/asset/instructions/ungroup.md",sourceDirName:"asset/instructions",slug:"/asset/instructions/ungroup",permalink:"/docs/asset/instructions/ungroup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"Ungroup",sidebar_position:13},sidebar:"docsSidebar",previous:{title:"Transfer",permalink:"/docs/asset/instructions/transfer"},next:{title:"Unlock",permalink:"/docs/asset/instructions/unlock"}},c={},d=[{value:"Accounts",id:"accounts",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ungroup",children:(0,r.jsx)(t.code,{children:"ungroup"})}),"\n",(0,r.jsx)(t.p,{children:"Removes an asset from a group."}),"\n",(0,r.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,r.jsxs)(t.p,{children:["Below is the list of accounts expected by the ",(0,r.jsx)(t.code,{children:"ungroup"})," instruction."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Writable"}),(0,r.jsx)(t.th,{children:"Signer"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"asset"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Initialized asset account"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"group"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Asset account of the group"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authority"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Authority of the assets"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The instruction expects that both asset and group authorities match and it will fail otherwise. The signing ",(0,r.jsx)(t.code,{children:"authority"})," must be the authority of the group or the ",(0,r.jsx)(t.code,{children:"Grouping"})," extension delegate."]}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsx)(t.p,{children:"None."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(o.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { ungroup } from '@nifty-oss/asset';\n\n// Accounts:\n//   - asset: PublicKey\n//   - group: PublicKey\n//   - authority: KeypairSigner\nawait ungroup(umi, {\n  asset,\n  group,\n  authority\n}).sendAndConfirm(umi);\n"})})})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2405:(e,t,n)=>{n.d(t,{A:()=>o});n(758);var r=n(3526);const s={tabItem:"tabItem_r0H8"};var a=n(6070);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},6911:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(758),s=n(3526),a=n(192),o=n(5557),u=n(3777),i=n(1997),l=n(7650),c=n(1607);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=f({queryString:n,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=l??b;return p({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(6883);const x={tabList:"tabList_m2iM",tabItem:"tabItem_yoA2"};var g=n(6070);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=u[n].value;s!==r&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},5710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>u});var r=n(758);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);