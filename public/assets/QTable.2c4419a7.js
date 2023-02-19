import{c as Q,e as n,x as fe,h as ct,y as Le,f as p,k as be,n as me,d as u,r as N,w as A,b8 as dt,D as vt,ba as ft,b9 as gt,o as bt,aE as mt,at as xe,O as Ve,aY as St,aZ as yt,bM as ge,bV as Be,bN as ht,F as Me,c8 as wt,c9 as ve,ca as E,a0 as Z,Q as _t}from"./index.d82235c1.js";import{Q as qt}from"./QList.1db696b4.js";import{u as Pt,a as Ct,c as $e,Q as kt}from"./QSelect.a8e6501d.js";import{u as Rt,a as Tt,b as xt}from"./use-fullscreen.f843078f.js";var Bt=Q({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:r}){const g=p(),{proxy:{$q:i}}=g,b=s=>{r("click",s)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:b},fe(l.default));let s,v;const c=g.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const a=s.align==="right"?"unshift":"push";v=ct(l.default,[]),v[a](n(Le,{class:s.__iconClass,name:i.iconSet.table.arrowUp}))}else v=fe(l.default);const y={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:a=>{s.sortable===!0&&e.props.sort(s),b(a)}};return n("th",y,v)}}});const Ot=["horizontal","vertical","cell","none"];var Ft=Q({name:"QMarkupTable",props:{...be,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ot.includes(e)}},setup(e,{slots:l}){const r=p(),g=me(e,r.proxy.$q),i=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(g.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:i.value},[n("table",{class:"q-table"},fe(l.default))])}});function je(e,l){return n("div",e,[n("table",{class:"q-table"},l)])}const Dt={list:qt,table:Ft},Lt=["list","table","__qtable"];var Vt=Q({name:"QVirtualScroll",props:{...Pt,type:{type:String,default:"list",validator:e=>Lt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:r}){let g;const i=N(null),b=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:v,padVirtualScroll:c,onVirtualScrollEvt:y}=Ct({virtualScrollLength:b,getVirtualScrollTarget:P,getVirtualScrollEl:q}),a=u(()=>{if(b.value===0)return[];const O=(F,R)=>({index:s.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),S=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});A(b,()=>{v()}),A(()=>e.scrollTarget,()=>{w(),h()});function q(){return i.value.$el||i.value}function P(){return g}function h(){g=mt(q(),e.scrollTarget),g.addEventListener("scroll",y,xe.passive)}function w(){g!==void 0&&(g.removeEventListener("scroll",y,xe.passive),g=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ve(l.after,O)}return dt(()=>{v()}),vt(()=>{h()}),ft(()=>{h()}),gt(()=>{w()}),bt(()=>{w()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?je({ref:i,class:"q-table__middle "+S.value},B()):n(Dt[e.type],{...r,ref:i,class:[r.class,S.value],..._.value},B)}}});const Mt={xs:2,sm:4,md:6,lg:10,xl:14};function Oe(e,l,r){return{transform:l===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var $t=Q({name:"QLinearProgress",props:{...be,...St,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:r}=p(),g=me(e,r.$q),i=yt(e,Mt),b=u(()=>e.indeterminate===!0||e.query===!0),s=u(()=>e.reverse!==e.query),v=u(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),y=u(()=>Oe(e.buffer!==void 0?e.buffer:1,s.value,r.$q)),a=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${g.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),S=u(()=>Oe(b.value===!0?1:e.value,s.value,r.$q)),_=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${b.value===!0?"in":""}determinate`),q=u(()=>({width:`${e.value*100}%`})),P=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[n("div",{class:a.value,style:y.value}),n("div",{class:_.value,style:S.value})];return e.stripe===!0&&b.value===!1&&h.push(n("div",{class:P.value,style:q.value})),n("div",{class:c.value,style:v.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ve(l.default,h))}}});function jt(e,l){return new Date(e)-new Date(l)}const At={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Et(e,l,r,g){const i=u(()=>{const{sortBy:v}=l.value;return v&&r.value.find(c=>c.name===v)||null}),b=u(()=>e.sortMethod!==void 0?e.sortMethod:(v,c,y)=>{const a=r.value.find(q=>q.name===c);if(a===void 0||a.field===void 0)return v;const S=y===!0?-1:1,_=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return v.sort((q,P)=>{let h=_(q),w=_(P);return h==null?-1*S:w==null?1*S:a.sort!==void 0?a.sort(h,w,q,P)*S:ge(h)===!0&&ge(w)===!0?(h-w)*S:Be(h)===!0&&Be(w)===!0?jt(h,w)*S:typeof h=="boolean"&&typeof w=="boolean"?(h-w)*S:([h,w]=[h,w].map(B=>(B+"").toLocaleString().toLowerCase()),h<w?-1*S:h===w?0:S)})});function s(v){let c=e.columnSortOrder;if(ht(v)===!0)v.sortOrder&&(c=v.sortOrder),v=v.name;else{const S=r.value.find(_=>_.name===v);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:y,descending:a}=l.value;y!==v?(y=v,a=c==="da"):e.binaryStateSort===!0?a=!a:a===!0?c==="ad"?y=null:a=!1:c==="ad"?a=!0:y=null,g({sortBy:y,descending:a,page:1})}return{columnToSort:i,computedSortMethod:b,sort:s}}const Nt={filter:[String,Object],filterMethod:Function};function Qt(e,l){const r=u(()=>e.filterMethod!==void 0?e.filterMethod:(g,i,b,s)=>{const v=i?i.toLowerCase():"";return g.filter(c=>b.some(y=>{const a=s(y,c)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(v)!==-1}))});return A(()=>e.filter,()=>{Me(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:r}}function zt(e,l){for(const r in l)if(l[r]!==e[r])return!1;return!0}function Fe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Ht={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Ut(e,l){const{props:r,emit:g}=e,i=N(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:r.rowsPerPageOptions.length>0?r.rowsPerPageOptions[0]:5},r.pagination)),b=u(()=>{const a=r["onUpdate:pagination"]!==void 0?{...i.value,...r.pagination}:i.value;return Fe(a)}),s=u(()=>b.value.rowsNumber!==void 0);function v(a){c({pagination:a,filter:r.filter})}function c(a={}){Me(()=>{g("request",{pagination:a.pagination||b.value,filter:a.filter||r.filter,getCellValue:l})})}function y(a,S){const _=Fe({...b.value,...a});if(zt(b.value,_)===!0){s.value===!0&&S===!0&&v(_);return}if(s.value===!0){v(_);return}r.pagination!==void 0&&r["onUpdate:pagination"]!==void 0?g("update:pagination",_):i.value=_}return{innerPagination:i,computedPagination:b,isServerSide:s,requestServerInteraction:c,setPagination:y}}function It(e,l,r,g,i,b){const{props:s,emit:v,proxy:{$q:c}}=e,y=u(()=>g.value===!0?r.value.rowsNumber||0:b.value),a=u(()=>{const{page:R,rowsPerPage:T}=r.value;return(R-1)*T}),S=u(()=>{const{page:R,rowsPerPage:T}=r.value;return R*T}),_=u(()=>r.value.page===1),q=u(()=>r.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/r.value.rowsPerPage))),P=u(()=>S.value===0?!0:r.value.page>=q.value),h=u(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(T=>({label:T===0?c.lang.table.allRows:""+T,value:T})));A(q,(R,T)=>{if(R===T)return;const z=r.value.page;R&&!z?i({page:1}):R<z&&i({page:R})});function w(){i({page:1})}function B(){const{page:R}=r.value;R>1&&i({page:R-1})}function O(){const{page:R,rowsPerPage:T}=r.value;S.value>0&&R*T<y.value&&i({page:R+1})}function F(){i({page:q.value})}return s["onUpdate:pagination"]!==void 0&&v("update:pagination",{...r.value}),{firstRowIndex:a,lastRowIndex:S,isFirstPage:_,isLastPage:P,pagesNumber:q,computedRowsPerPageOptions:h,computedRowsNumber:y,firstPage:w,prevPage:B,nextPage:O,lastPage:F}}const Kt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Wt=["update:selected","selection"];function Gt(e,l,r,g){const i=u(()=>{const P={};return e.selected.map(g.value).forEach(h=>{P[h]=!0}),P}),b=u(()=>e.selection!=="none"),s=u(()=>e.selection==="single"),v=u(()=>e.selection==="multiple"),c=u(()=>r.value.length>0&&r.value.every(P=>i.value[g.value(P)]===!0)),y=u(()=>c.value!==!0&&r.value.some(P=>i.value[g.value(P)]===!0)),a=u(()=>e.selected.length);function S(P){return i.value[P]===!0}function _(){l("update:selected",[])}function q(P,h,w,B){l("selection",{rows:h,added:w,keys:P,evt:B});const O=s.value===!0?w===!0?h:[]:w===!0?e.selected.concat(h):e.selected.filter(F=>P.includes(g.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:b,singleSelection:s,multipleSelection:v,allRowsSelected:c,someRowsSelected:y,rowsSelectedNumber:a,isRowSelected:S,clearSelection:_,updateSelection:q}}function De(e){return Array.isArray(e)?e.slice():[]}const Xt={expanded:Array},Yt=["update:expanded"];function Zt(e,l){const r=N(De(e.expanded));A(()=>e.expanded,s=>{r.value=De(s)});function g(s){return r.value.includes(s)}function i(s){e.expanded!==void 0?l("update:expanded",s):r.value=s}function b(s,v){const c=r.value.slice(),y=c.indexOf(s);v===!0?y===-1&&(c.push(s),i(c)):y!==-1&&(c.splice(y,1),i(c))}return{isRowExpanded:g,setExpanded:i,updateExpanded:b}}const Jt={visibleColumns:Array};function pt(e,l,r){const g=u(()=>{if(e.columns!==void 0)return e.columns;const v=e.rows[0];return v!==void 0?Object.keys(v).map(c=>({name:c,label:c.toUpperCase(),field:c,align:ge(v[c])?"right":"left",sortable:!0})):[]}),i=u(()=>{const{sortBy:v,descending:c}=l.value;return(e.visibleColumns!==void 0?g.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):g.value).map(a=>{const S=a.align||"right",_=`text-${S}`;return{...a,align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:_+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===v?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>_+" "+a.classes:q=>_+" "+a.classes(q):()=>_}})}),b=u(()=>{const v={};return i.value.forEach(c=>{v[c.name]=c}),v}),s=u(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(r.value===!0?1:0));return{colList:g,computedCols:i,computedColsMap:b,computedColspan:s}}const J="q-table__bottom row items-center",Ae={};$e.forEach(e=>{Ae[e]={}});var nl=Q({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ae,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...be,...Rt,...Jt,...Nt,...Ht,...Xt,...Kt,...At},emits:["request","virtual-scroll",...Tt,...Yt,...Wt],setup(e,{slots:l,emit:r}){const g=p(),{proxy:{$q:i}}=g,b=me(e,i),{inFullscreen:s,toggleFullscreen:v}=xt(),c=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),y=N(null),a=N(null),S=u(()=>e.grid!==!0&&e.virtualScroll===!0),_=u(()=>" q-table__card"+(b.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(b.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),P=u(()=>q.value+(e.loading===!0?" q-table--loading":""));A(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{S.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:h,computedPagination:w,isServerSide:B,requestServerInteraction:O,setPagination:F}=Ut(g,$),{computedFilterMethod:R}=Qt(e,F),{isRowExpanded:T,setExpanded:z,updateExpanded:Ee}=Zt(e,r),ee=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:o,descending:d}=w.value;return e.filter&&(t=R.value(t,e.filter,D.value,$)),Ue.value!==null&&(t=Ie.value(e.rows===t?t.slice():t,o,d)),t}),Se=u(()=>ee.value.length),V=u(()=>{let t=ee.value;if(B.value===!0)return t;const{rowsPerPage:o}=w.value;return o!==0&&(U.value===0&&e.rows!==t?t.length>I.value&&(t=t.slice(0,I.value)):t=t.slice(U.value,I.value)),t}),{hasSelectionMode:M,singleSelection:Ne,multipleSelection:ye,allRowsSelected:Qe,someRowsSelected:he,rowsSelectedNumber:te,isRowSelected:le,clearSelection:ze,updateSelection:H}=Gt(e,r,V,c),{colList:He,computedCols:D,computedColsMap:we,computedColspan:_e}=pt(e,w,M),{columnToSort:Ue,computedSortMethod:Ie,sort:ae}=Et(e,w,He,F),{firstRowIndex:U,lastRowIndex:I,isFirstPage:ne,isLastPage:re,pagesNumber:K,computedRowsPerPageOptions:Ke,computedRowsNumber:W,firstPage:oe,prevPage:ie,nextPage:se,lastPage:ue}=It(g,h,w,B,F,Se),We=u(()=>V.value.length===0),Ge=u(()=>{const t={};return $e.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Xe(){S.value===!0&&a.value.reset()}function Ye(){if(e.grid===!0)return st();const t=e.hideHeader!==!0?Re:null;if(S.value===!0){const d=l["top-row"],f=l["bottom-row"],m={default:k=>Pe(k.item,l.body,k.index)};if(d!==void 0){const k=n("tbody",d({cols:D.value}));m.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(m.before=t);return f!==void 0&&(m.after=()=>n("tbody",f({cols:D.value}))),n(Vt,{ref:a,class:e.tableClass,style:e.tableStyle,...Ge.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:_e.value,onVirtualScroll:Je},m)}const o=[pe()];return t!==null&&o.unshift(t()),je({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function Ze(t,o){if(a.value!==null){a.value.scrollTo(t,o);return}t=parseInt(t,10);const d=y.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(d!==null){const f=y.value.querySelector(".q-table__middle.scroll"),{offsetTop:m}=d,k=m<f.scrollTop?"decrease":"increase";f.scrollTop=m,r("virtual-scroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:k})}}function Je(t){r("virtual-scroll",t)}function qe(){return[n($t,{class:"q-table__linear-progress",color:e.color,dark:b.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,o,d){const f=c.value(t),m=le(f);if(o!==void 0)return o(Ce({key:f,row:t,pageIndex:d,__trClass:m?"selected":""}));const k=l["body-cell"],C=D.value.map(x=>{const X=l[`body-cell-${x.name}`],Y=X!==void 0?X:k;return Y!==void 0?Y(et({key:f,row:t,pageIndex:d,col:x})):n("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},$(x,t))});if(M.value===!0){const x=l["body-selection"],X=x!==void 0?x(tt({key:f,row:t,pageIndex:d})):[n(ve,{modelValue:m,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(Y,ut)=>{H([f],[t],Y,ut)}})];C.unshift(n("td",{class:"q-table--col-auto-width"},X))}const L={key:f,class:{selected:m}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=x=>{r("RowClick",x,t,d)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=x=>{r("RowDblclick",x,t,d)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=x=>{r("RowContextmenu",x,t,d)}),n("tr",L,C)}function pe(){const t=l.body,o=l["top-row"],d=l["bottom-row"];let f=V.value.map((m,k)=>Pe(m,t,k));return o!==void 0&&(f=o({cols:D.value}).concat(f)),d!==void 0&&(f=f.concat(d({cols:D.value}))),n("tbody",f)}function Ce(t){return ce(t),t.cols=t.cols.map(o=>{const d={...o};return E(d,"value",()=>$(o,t.row)),d}),t}function et(t){return ce(t),E(t,"value",()=>$(t.col,t.row)),t}function tt(t){return ce(t),t}function ce(t){Object.assign(t,{cols:D.value,colsMap:we.value,sort:ae,rowIndex:U.value+t.pageIndex,color:e.color,dark:b.value,dense:e.dense}),M.value===!0&&E(t,"selected",()=>le(t.key),(o,d)=>{H([t.key],[t.row],o,d)}),E(t,"expand",()=>T(t.key),o=>{Ee(t.key,o)})}function $(t,o){const d=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(d,o):d}const j=u(()=>({pagination:w.value,pagesNumber:K.value,isFirstPage:ne.value,isLastPage:re.value,firstPage:oe,prevPage:ie,nextPage:se,lastPage:ue,inFullscreen:s.value,toggleFullscreen:v}));function lt(){const t=l.top,o=l["top-left"],d=l["top-right"],f=l["top-selection"],m=M.value===!0&&f!==void 0&&te.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(j.value)]);let C;if(m===!0?C=f(j.value).slice():(C=[],o!==void 0?C.push(n("div",{class:"q-table-control"},[o(j.value)])):e.title&&C.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),d!==void 0&&(C.push(n("div",{class:"q-table__separator col"})),C.push(n("div",{class:"q-table__control"},[d(j.value)]))),C.length!==0)return n("div",{class:k},C)}const ke=u(()=>he.value===!0?null:Qe.value);function Re(){const t=at();return e.loading===!0&&l.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:_e.value},qe())])),n("thead",t)}function at(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(de({header:!0})).slice();const d=D.value.map(f=>{const m=l[`header-cell-${f.name}`],k=m!==void 0?m:o,C=de({col:f});return k!==void 0?k(C):n(Bt,{key:f.name,props:C},()=>f.label)});if(Ne.value===!0&&e.grid!==!0)d.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(ye.value===!0){const f=l["header-selection"],m=f!==void 0?f(de({})):[n(ve,{color:e.color,modelValue:ke.value,dark:b.value,dense:e.dense,"onUpdate:modelValue":Te})];d.unshift(n("th",{class:"q-table--col-auto-width"},m))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},d)]}function de(t){return Object.assign(t,{cols:D.value,sort:ae,colsMap:we.value,color:e.color,dark:b.value,dense:e.dense}),ye.value===!0&&E(t,"selected",()=>ke.value,Te),t}function Te(t){he.value===!0&&(t=!1),H(V.value.map(c.value),V.value,t)}const G=u(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function nt(){if(e.hideBottom===!0)return;if(We.value===!0){if(e.hideNoData===!0)return;const d=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,f=l["no-data"],m=f!==void 0?[f({message:d,icon:i.iconSet.table.warning,filter:e.filter})]:[n(Le,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),d];return n("div",{class:J+" q-table__bottom--nodata"},m)}const t=l.bottom;if(t!==void 0)return n("div",{class:J},[t(j.value)]);const o=e.hideSelectedBanner!==!0&&M.value===!0&&te.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(te.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:J+" justify-end"},ot(o));if(o.length>0)return n("div",{class:J},o)}function rt(t){F({page:1,rowsPerPage:t.value})}function ot(t){let o;const{rowsPerPage:d}=w.value,f=e.paginationLabel||i.lang.table.pagination,m=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),n(kt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:d,options:Ke.value,displayValue:d===0?i.lang.table.allRows:d,dark:b.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":rt})])),m!==void 0)o=m(j.value);else if(o=[n("span",d!==0?{class:"q-table__bottom-item"}:{},[d?f(U.value+1,Math.min(I.value,W.value),W.value):f(1,Se.value,W.value)])],d!==0&&K.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),K.value>2&&o.push(n(Z,{key:"pgFirst",...C,icon:G.value[0],disable:ne.value,onClick:oe})),o.push(n(Z,{key:"pgPrev",...C,icon:G.value[1],disable:ne.value,onClick:ie}),n(Z,{key:"pgNext",...C,icon:G.value[2],disable:re.value,onClick:se})),K.value>2&&o.push(n(Z,{key:"pgLast",...C,icon:G.value[3],disable:re.value,onClick:ue}))}return t.push(n("div",{class:"q-table__control"},o)),t}function it(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Re()])]:e.loading===!0&&l.loading===void 0?qe():void 0;return n("div",{class:"q-table__middle"},t)}function st(){const t=l.item!==void 0?l.item:o=>{const d=o.cols.map(m=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[m.label]),n("div",{class:"q-table__grid-item-value"},[m.value])]));if(M.value===!0){const m=l["body-selection"],k=m!==void 0?m(o):[n(ve,{modelValue:o.selected,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(C,L)=>{H([o.key],[o.row],C,L)}})];d.unshift(n("div",{class:"q-table__grid-item-row"},k),n(_t,{dark:b.value}))}const f={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(f.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(f.onClick=m=>{r("RowClick",m,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(f.onDblclick=m=>{r("RowDblclick",m,o.row,o.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[n("div",f,d)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((o,d)=>t(Ce({key:c.value(o),row:o,pageIndex:d}))))}return Object.assign(g.proxy,{requestServerInteraction:O,setPagination:F,firstPage:oe,prevPage:ie,nextPage:se,lastPage:ue,isRowSelected:le,clearSelection:ze,isRowExpanded:T,setExpanded:z,sort:ae,resetVirtualScroll:Xe,scrollTo:Ze,getCellValue:$}),wt(g.proxy,{filteredSortedRows:()=>ee.value,computedRows:()=>V.value,computedRowsNumber:()=>W.value}),()=>{const t=[lt()],o={ref:y,class:P.value};return e.grid===!0?t.push(it()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(Ye(),nt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),n("div",o,t)}}});export{nl as Q};
