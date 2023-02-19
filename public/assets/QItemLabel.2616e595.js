import{c as v,d as l,e as r,x as k,k as I,u as E,n as Q,ao as R,r as f,f as S,ap as K,z as P,h as $}from"./index.d82235c1.js";var D=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const a=l(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>r("div",{class:a.value},k(n.default))}}),N=v({name:"QItem",props:{...I,...E,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:a}){const{proxy:{$q:i}}=S(),c=Q(e,i),{hasRouterLink:q,hasLink:d,linkProps:h,linkClass:_,linkTag:y,navigateToRouterLink:g}=R(),s=f(null),o=f(null),m=l(()=>e.clickable===!0||d.value===!0||e.tag==="label"),u=l(()=>e.disable!==!0&&m.value===!0),B=l(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?_.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=l(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function L(t){u.value===!0&&(o.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===s.value?o.value.focus():document.activeElement===o.value&&s.value.focus()),q.value===!0&&g(t),a("click",t))}function C(t){if(u.value===!0&&K(t,13)===!0){P(t),t.qKeyEvent=!0;const b=new MouseEvent("click",t);b.qKeyEvent=!0,s.value.dispatchEvent(b)}a("keyup",t)}function w(){const t=$(n.default,[]);return u.value===!0&&t.unshift(r("div",{class:"q-focus-helper",tabindex:-1,ref:o})),t}return()=>{const t={ref:s,class:B.value,style:x.value,onClick:L,onKeyup:C};return u.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,h.value)):m.value===!0&&(t["aria-disabled"]="true"),r(y.value,t,w())}}}),T=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const a=l(()=>parseInt(e.lines,10)),i=l(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),c=l(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>r("div",{style:c.value,class:i.value},k(n.default))}});export{N as Q,T as a,D as b};
