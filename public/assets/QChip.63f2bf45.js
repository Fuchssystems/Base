import{c as _,k as C,aY as x,n as y,aZ as B,d as l,G as R,f as z,e as a,y as o,a_ as I,a$ as w,z as D}from"./index.7938054f.js";const Q={xs:8,sm:10,md:14,lg:20,xl:24};var $=_({name:"QChip",props:{...C,...x,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:i}){const{proxy:{$q:n}}=z(),h=y(e,n),v=B(e,Q),b=l(()=>e.selected===!0||e.icon!==void 0),f=l(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),m=l(()=>e.iconRemove||n.iconSet.chip.remove),c=l(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),q=l(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(c.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(h.value===!0?" q-chip--dark q-dark":"")}),u=l(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function g(t){t.keyCode===13&&s(t)}function s(t){e.disable||(i("update:selected",!e.selected),i("click",t))}function d(t){(t.keyCode===void 0||t.keyCode===13)&&(D(t),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function k(){const t=[];c.value===!0&&t.push(a("div",{class:"q-focus-helper"})),b.value===!0&&t.push(a(o,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const S=e.label!==void 0?[a("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(a("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},I(r.default,S))),e.iconRight&&t.push(a(o,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(a(o,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:m.value,...u.value,onClick:d,onKeyup:d})),t}return()=>{if(e.modelValue===!1)return;const t={class:q.value,style:v.value};return c.value===!0&&Object.assign(t,u.value,{onClick:s,onKeyup:g}),R("div",t,k(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[w,e.ripple]])}}});export{$ as Q};
