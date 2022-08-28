import{c as P,d as R,e as z,x as K,bb as ge,a0 as U,O as Ce,bO as ye,f as ce,r as g,ca as he,F as Se,be as we,av as xe,ch as Ve,ci as Be,cj as i,w as ze,V as ne,W as ae,X as S,ck as ke,ab as F,Y as m,Z as h,y as qe,ai as Z,aj as O,cl as d,bv as J,aW as se,cm as De,cn as Te,aR as Re,a4 as ie}from"./index.7938054f.js";import{Q as Qe}from"./QBanner.77ae7398.js";import{Q as $e}from"./QSpace.7ed4d632.js";import{Q as Oe}from"./QMenu.2d0c7e79.js";import{Q as Ue}from"./QTable.e0ad20ac.js";import{Q as je}from"./QPage.f1dcf01a.js";import{C as Ie}from"./ConfirmYesNo.63f8e2f5.js";import"./selection.d1bc92c3.js";import"./QList.983ed313.js";import"./QSelect.56829590.js";import"./QChip.63f2bf45.js";import"./QItemLabel.3dccd102.js";import"./rtl.4b414a6d.js";import"./use-fullscreen.b5860bac.js";import"./ClosePopup.43e935a1.js";function E(e,a=new WeakMap){if(Object(e)!==e)return e;if(a.has(e))return a.get(e);const s=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const o=e.valueOf();if(Object(o)!==o){const v=new e.constructor(o);return a.set(e,v),v}}return a.set(e,s),e instanceof Set?e.forEach(o=>{s.add(E(o,a))}):e instanceof Map&&e.forEach((o,v)=>{s.set(v,E(o,a))}),Object.assign(s,...Object.keys(e).map(o=>({[o]:E(e[o],a)})))}function Me(e){const a=document.createElement("textarea");a.value=e,a.contentEditable="true",a.style.position="fixed",document.body.appendChild(a),a.focus(),a.select();const s=document.execCommand("copy");return a.remove(),s}function Fe(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((a,s)=>{const o=Me(e);o?a(!0):s(o)})}var Ee=P({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:a}){const s=R(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(v=>e[v]===!0).map(v=>`q-btn-group--${v}`).join(" ");return`q-btn-group row no-wrap${o.length>0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>z("div",{class:s.value},K(a.default))}}),ue=P({name:"QBtnToggle",props:{...ge,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(a=>("label"in a||"icon"in a||"slot"in a)&&"value"in a)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:a,emit:s}){const o=R(()=>e.options.find(c=>c.value===e.modelValue)!==void 0),v=R(()=>({type:"hidden",name:e.name,value:e.modelValue})),b=ye(v),C=R(()=>e.options.map((c,p)=>{const{attrs:B,value:k,slot:D,..._}=c;return{slot:D,props:{key:p,onClick(j){u(k,c,j)},"aria-pressed":k===e.modelValue?"true":"false",...B,..._,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,unelevated:e.unelevated,dense:e.dense,disable:e.disable===!0||_.disable===!0,color:k===e.modelValue?f(_,"toggleColor"):f(_,"color"),textColor:k===e.modelValue?f(_,"toggleTextColor"):f(_,"textColor"),noCaps:f(_,"noCaps")===!0,noWrap:f(_,"noWrap")===!0,size:f(_,"size"),padding:f(_,"padding"),ripple:f(_,"ripple"),stack:f(_,"stack")===!0,stretch:f(_,"stretch")===!0}}}));function u(c,p,B){e.readonly!==!0&&(e.modelValue===c?e.clearable===!0&&(s("update:modelValue",null,null),s("clear")):s("update:modelValue",c,p),s("click",B))}function f(c,p){return c[p]===void 0?e[p]:c[p]}function Q(){const c=C.value.map(p=>z(U,p.props,p.slot!==void 0?a[p.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&o.value===!0&&b(c,"push"),Ce(a.default,c)}return()=>z(Ee,{class:"q-btn-toggle",outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,stretch:e.stretch,unelevated:e.unelevated,glossy:e.glossy,spread:e.spread},Q)}}),ee=P({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const s=ce(),o=R(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return z("td",{class:o.value},K(a.default));const v=s.vnode.key,b=(e.props.colsMap!==void 0?e.props.colsMap[v]:null)||e.props.col;if(b===void 0)return;const{row:C}=e.props;return z("td",{class:o.value+b.__tdClass(C),style:b.__tdStyle(C)},K(a.default))}}}),Pe=P({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","before-show","show","before-hide","hide"],setup(e,{slots:a,emit:s}){const{proxy:o}=ce(),{$q:v}=o,b=g(null),C=g(""),u=g("");let f=!1;const Q=R(()=>{const x={initialValue:C.value,validate:e.validate,set:c,cancel:p,updatePosition:B};return he(x,"value",()=>u.value,Y=>{u.value=Y}),x});function c(){e.validate(u.value)!==!1&&(k()===!0&&(s("save",u.value,C.value),s("update:modelValue",u.value)),D())}function p(){k()===!0&&s("cancel",u.value,C.value),D()}function B(){Se(()=>{b.value.updatePosition()})}function k(){return we(u.value,C.value)===!1}function D(){f=!0,b.value.hide()}function _(){f=!1,C.value=E(e.modelValue),u.value=E(e.modelValue),s("before-show")}function j(){s("show")}function I(){f===!1&&k()===!0&&(e.autoSave===!0&&e.validate(u.value)===!0?(s("save",u.value,C.value),s("update:modelValue",u.value)):s("cancel",u.value,C.value)),s("before-hide")}function H(){s("hide")}Object.assign(o,{set:c,cancel:p,show(x){b.value!==null&&b.value.show(x)},hide(x){b.value!==null&&b.value.hide(x)},updatePosition:B});function w(){const x=a.default!==void 0?[].concat(a.default(Q.value)):[];return e.title&&x.unshift(z("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&x.push(z("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[z(U,{flat:!0,color:e.color,label:e.labelCancel||v.lang.label.cancel,onClick:p}),z(U,{flat:!0,color:e.color,label:e.labelSet||v.lang.label.set,onClick:c})])),x}return()=>{if(e.disable!==!0)return z(Oe,{ref:b,class:"q-popup-edit",cover:e.cover,onBeforeShow:_,onShow:j,onBeforeHide:I,onHide:H,onEscapeKey:p},w)}}}),He=P({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:a}){const s=R(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>z("tr",{class:s.value},K(a.default))}});const de=xe.has.webStorage===!1?Ve():Be("local"),le={install({$q:e}){e.localStorage=de}};Object.assign(le,de);var re=["135/70/13","135/80/13","145/70/13","145/80/13","155/65/13","155/70/13","155/80/13","165/65/13","165/70/13","165/80/13","175/60/13","175/65/13","175/70/13","185/60/13","145/80/14","155/65/14","165/55/14","165/60/14","165/65/14","165/70/14","165/80/14","175/60/14","175/65/14","175/65/14 C","175/70/14","175/80/14","185/55/14","185/60/14","185/65/14","185/70/14","185/80/14","195/60/14","195/65/14","195/70/14","195/80/14","165/65/15","175/55/15","175/60/15","175/65/15","185/55/15","185/60/15","185/65/15","195/45/15","195/50/15","195/55/15","195/60/15","195/65/15","195/70/15","195/70/15 C","195/80/15","195/80/15","205/50/15","205/55/15","205/60/15","205/65/15","215/60/15","215/65/15","215/70/15 C","215/75/15 C","215/75/15","225/70/15 C","225/70/15 C","235/70/15 C","235/70/15 C","245/60/15","255/60/15","255/70/15","265/50/15","175/60/16","175/60/16","185/50/16","185/55/16","185/60/16","185/70/16","185/70/16","195/45/16","195/50/16","195/55/16","195/60/16","195/60/16 C","195/65/16","195/65/16 C","205/40/16","205/45/16","205/50/16","205/55/16","205/60/16","205/60/16 C","205/65/16","205/65/16 C","205/70/16","205/80/16","215/40/16","215/45/16","215/50/16","215/55/16","215/60/16","215/65/16","215/65/16 C","215/70/16","225/40/16","225/45/16","225/50/16","225/55/16","225/60/16","225/60/16 C","225/65/16","225/65/16 C","225/70/16","235/55/16","235/60/16 C","235/65/16 C","235/70/16","245/70/16","245/70/16","255/65/16","255/70/16","265/70/16","195/40/17","195/45/17","205/40/17","205/45/17","205/50/17","205/55/17","215/40/17","215/45/17","215/50/17","215/55/17","215/60/17","215/60/17 C","215/65/17","215/65/17 C","225/45/17","225/50/17","225/55/17","225/60/17","225/65/17","235/40/17","235/45/17","235/50/17","235/55/17","235/60/17","235/65/17","235/65/17","245/40/17","245/45/17","245/50/17","245/55/17","245/60/17","245/65/17","245/70/17","255/40/17","255/45/17","255/55/17","255/60/17","255/65/17","265/65/17","205/40/18","205/45/18","215/35/18","215/55/18","225/35/18","225/40/18","225/45/18","225/50/18","225/55/18","225/60/18","225/60/18","235/35/18","235/40/18","235/45/18","235/50/18","235/55/18","235/60/18","235/65/18","245/35/18","245/40/18","245/45/18","245/50/18","255/40/18","255/45/18","255/55/18","265/35/18","265/60/18","275/35/18","275/40/18","285/50/18","215/35/19","225/35/19","225/40/19","225/45/19","235/35/19","235/40/19","235/45/19","235/50/19","235/55/19","245/30/19","245/35/19","245/40/19","245/45/19","255/30/19","255/35/19","255/40/19","255/45/19","255/50/19","255/55/19","265/30/19","265/35/19","275/40/19","275/45/19","285/45/19","225/35/20","235/30/20","235/35/20","245/30/20","245/35/20","245/40/20","245/45/20","255/35/20","255/45/20","255/50/20","265/45/20","275/35/20","275/40/20","275/45/20","275/55/20","295/40/20","295/35/21","265/35/22","305/40/22"];const Ae={class:"row q-mb-md"},We={class:"row items-start",style:{"margin-top":"-6px"}},Le={class:"col q-ml-lg text-subtitle2"},Ne={class:"row items-start",style:{"margin-top":"-8px"}},Ke={class:"row q-mb-md items-start",style:{"margin-top":"-6px"}},Ye={class:"row items-start",style:{"margin-top":"-6px"}},Ge={class:"row items-start q-mt-sm q-mb-md"},Xe={class:"row q-mb-md items-start"},Ze={class:"q-table__title"},Je={class:"q-ml-xs text-subtitle2"},el={class:"row items-start q-pb-sm",style:{"margin-top":"-20px"}},ll={name:"VoiceControlDemo"},bl=Object.assign(ll,{setup(e){const a=ke(),s=R(()=>a.getters.getUserLanguageBCP47format);let o=[];const v=le.getItem("voiceRecognitionDemo");if(v&&v.allSizesTableRows)o=v.allSizesTableRows;else for(let t=0;t<re.length;t+=1)o.push({label:re[t],yes:!1,counted:0});const b=g("all"),C=g("all"),u=g([]),f=g([]),Q=g(null),c=g(!1);function p(){u.value=[];let t=!1;for(let l=0;l<o.length;l+=1)t=!0,b.value==="yes"?t=o[l].yes:b.value==="no"&&(t=!o[l].yes),t&&C.value!=="all"&&(t=!!o[l].counted),t&&u.value.push(o[l]);f.value=[];for(let l=0;l<u.value.length;l+=1)u.value[l].yes&&f.value.push(u.value[l])}p();const B=g([]);B.value=[{name:"size",label:i("voiceControlDemo_tableSizes_col_sizes_title"),align:"left",field:t=>t.label,style:"max-width: 70px",headerStyle:"max-width: 70px"},{name:"counted",label:i("voiceControlDemo_tableSizes_col_counted_title"),align:"right",field:t=>t.counted}];function k(){c.value=!c.value,Q.value.toggleFullscreen()}const D=g(!1),_=g("");function j(t){return D.value=!1,_.value="",t&&(t<0||t>1e4)&&(D.value=!0,_.value=F("app_std_err_enter_number_in_range",{min:0,max:1e4})),!D.value}const I=g("");function H(){var t=0,l=0,n=0;for(let r=0,V=0;r<o.length;r+=1)V=o[r].counted,V>0&&(o[r].yes?t+=V:l+=V),n+=V;I.value=F("voiceControlDemo_text_summaryCounted",{yes:t,no:l,total:n})}H();function w(){let t=-1;for(let l=0;l<u.value.length;l+=1)t=o.findIndex(n=>n.label===u.value[l]),t!==-1&&(o[t].yes=u.value[l]);p(),H(),le.set("voiceRecognitionDemo",{allSizesTableRows:o})}function x(t){j(t),w()}function Y(t){const l=u.value.findIndex(n=>n.label===t);l!==-1&&(u.value[l].yes=!u.value[l].yes,w())}function me(t){u.value.forEach(l=>{l.yes=t}),w()}const fe=window.SpeechRecognition||window.webkitSpeechRecognition,q=new fe;console.log("getUserLanguageBCP47format.value"),console.log(s.value),q.language=s.value;const ve=window.speechSynthesis,G=(t,l)=>{const n=l&&l.stopAfterSpeak||!1,r=new SpeechSynthesisUtterance(t);r.lang=s.value,n||(r.onend=()=>{q.start()}),q.stop(),ve.speak(r)},$=g(""),X=g(""),A=g(!1);function oe(){A.value=!A.value,A.value?q.start():q.stop()}function te(){if($.value){const t=u.value.findIndex(l=>l.label===$.value);t!==-1&&(u.value[t].counted-=1,w(),G(i("voiceControlDemo_confirmation_storno",{size:$.value})),$.value="")}}function pe(){o.forEach(t=>{t.counted=0}),w(),ie.create(i("voiceControlDemo_notification_counters_reset"))}q.onstart=()=>{q.continuous=!0},q.onend=()=>{},q.onresult=t=>{if(t.results.length){const l=t.results[t.results.length-1];if(l.isFinal){let{transcript:n}=l[0];n=n.replace("/"," "),X.value=n;const r=n.split(" "),{length:V}=r;if(V)if(r[0]===i("voiceControlDemo_command_stop"))oe(),$.value="",G(i("voiceControlDemo_confirmation_stop"),{stopAfterSpeak:!0});else if(r[0]===i("voiceControlDemo_command_storno"))te();else{let T=V>=3||V<=4;const y={};T&&(y.width=parseInt(r[0],10),y.series=parseInt(r[1],10),y.inch=parseInt(r[2],10),y.c=!1,T=y.width>=125&&y.width<=335&&y.series>=35&&y.series<=80&&y.series%5===0&&y.inch>=12&&y.inch<=22),T&&V===4&&(r[3]==="C"?y.c=!0:T=!1);let L="",M=-1;T&&(L=`${y.width}/${y.series}/${y.inch}`,y.c&&(L+=" C"),M=o.findIndex(be=>be.label===L),M!==-1?(o[M].counted+=1,w()):T=!1);let N="";T?o[M].yes?N=`${i("voiceControlDemo_speak_yes_for_size")} ${n}`:N=`${i("voiceControlDemo_speak_no_for_size")} ${n}`:N=`${i("voiceControlDemo_speak_size_does_not_exist")} ${n}`,G(N),T&&(Q.value.scrollTo(M-1),w()),$.value=T?L:""}}}};function _e(){let t=`${i("voiceControlDemo_clipboardHeader_sizes_yes")}
`;for(let l=0;l<o.length;l+=1)o[l].yes&&o[l].counted&&(t+=`${o[l].label}	${o[l].counted}
`);t+=`
${i("voiceControlDemo_clipboardHeader_sizes_no")}
`;for(let l=0;l<o.length;l+=1)!o[l].yes&&o[l].counted&&(t+=`${o[l].label}	${o[l].counted}
`);Fe(t).then(()=>{ie.create(i("voiceControlDemo_notification_list_copied_to_clipboard"))})}const W=g(!1);return ze(s,t=>{q.language=t,console.log("newValue"),console.log(t),w(),B.value[0].label=i("voiceControlDemo_tableSizes_col_sizes_title"),B.value[1].label=i("voiceControlDemo_tableSizes_col_counted_title")}),(t,l)=>(ne(),ae(je,{padding:""},{default:S(()=>[m(Re,{class:"input-card"},{default:S(()=>[h("form",null,[h("div",Ae,[m(Qe,{class:"bg-grey-3 col"},{avatar:S(()=>[m(qe,{name:"mic",color:"primary"})]),default:S(()=>[Z(" "+O(d(i)("voiceControlDemo_title")),1)]),_:1})]),h("div",We,[h("div",Le,[h("div",null,O(d(i)("voiceControlDemo_helpText_tireSizes")),1),h("div",null,O(d(i)("voiceControlDemo_helpText_Commands")),1)])]),h("div",Ne,[m(J,{size:"xl","model-value":A.value,"onUpdate:modelValue":oe,label:d(i)("voiceControlDemo_recognition_toggle_label"),color:"secondery","checked-icon":"mdi-text-to-speech","unchecked-icon":"mdi-text-to-speech-off"},null,8,["model-value","label"])]),h("div",Ke,[m(se,{class:"col-3 q-ml-md",style:{"max-width":"150px"},outlined:"",readonly:"",modelValue:X.value,"onUpdate:modelValue":l[0]||(l[0]=n=>X.value=n),label:d(i)("voiceControlDemo_lastRecognizedText_label")},null,8,["modelValue","label"]),m(U,{class:"q-ml-md q-mt-sm col",style:{"max-width":"140px"},color:"secondary",icon:"mdi-undo",label:d(i)("app_button_Storno"),disable:!$.value,onClick:te},null,8,["label","disable"])]),h("div",Ye,[m(ue,{class:"q-ml-md",modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=n=>b.value=n),"toggle-color":"primary",onClick:w,options:[{label:d(i)("voiceControlDemo_button_filterSelected_yes"),value:"yes"},{label:d(i)("voiceControlDemo_button_filterSelected_no"),value:"no"},{label:d(i)("voiceControlDemo_button_filterSelected_all"),value:"all"}]},null,8,["modelValue","options"])]),h("div",Ge,[m(ue,{class:"q-ml-md",modelValue:C.value,"onUpdate:modelValue":l[2]||(l[2]=n=>C.value=n),"toggle-color":"primary",onClick:w,options:[{label:d(i)("voiceControlDemo_button_filterCounted_counted"),value:"counted"},{label:d(i)("voiceControlDemo_button_filterCounted_all"),value:"all"}]},null,8,["modelValue","options"])]),h("div",Xe,[m(Ue,{style:{"max-width":"260px"},class:De(["q-ml-md q-mb-md sticky-header-table",{displayedSizesTableIsFullscreen:c.value,displayedSizesTableIsNotFullscreen:!c.value}]),title:d(i)("voiceControlDemo_tableSizes_title"),dense:"","no-data-label":I.value,rows:u.value,columns:B.value,"row-key":"label",selection:"multiple",selected:f.value,"onUpdate:selected":l[3]||(l[3]=n=>f.value=n),"rows-per-page-options":[0],ref_key:"displayedSizesTableRef",ref:Q},{top:S(n=>[h("div",Ze,O(d(i)("voiceControlDemo_tableSizes_title")),1),m($e),m(U,{flat:"",round:"",dense:"",icon:n.inFullscreen?"fullscreen_exit":"fullscreen",onClick:k,class:"q-ml-md"},null,8,["icon"])]),"header-selection":S(n=>[m(J,{modelValue:n.selected,"onUpdate:modelValue":[r=>n.selected=r,me]},null,8,["modelValue","onUpdate:modelValue"])]),body:S(n=>[m(He,{props:n},{default:S(()=>[m(ee,null,{default:S(()=>[m(J,{modelValue:n.selected,"onUpdate:modelValue":[r=>n.selected=r,r=>Y(n.row.label)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),m(ee,{key:"size",props:n},{default:S(()=>[Z(O(n.row.label),1)]),_:2},1032,["props"]),m(ee,{key:"counted",props:n},{default:S(()=>[Z(O(n.row.counted)+" ",1),m(Pe,{modelValue:n.row.counted,"onUpdate:modelValue":r=>n.row.counted=r,modelModifiers:{number:!0},title:d(F)("app_std_update_fieldname",{fieldname:d(i)("voiceControlDemo_fieldname_sizes_counted")}),buttons:"","auto-save":"","label-set":d(i)("app_button_Update"),"label-cancel":d(i)("app_button_Cancel"),validate:j,onHide:x},{default:S(r=>[m(se,{type:"number",modelValue:r.value,"onUpdate:modelValue":V=>r.value=V,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:Te(r.set,["enter"]),hint:d(F)("app_std_hint_enter_number_in_range",{min:0,max:1e4}),error:D.value,"error-message":_.value},null,8,["modelValue","onUpdate:modelValue","onKeyup","hint","error","error-message"])]),_:2},1032,["modelValue","onUpdate:modelValue","title","label-set","label-cancel"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),bottom:S(()=>[h("div",Je,O(I.value),1)]),_:1},8,["class","title","no-data-label","rows","columns","selected"])]),h("div",el,[m(U,{class:"q-ml-md",label:d(i)("voiceControlDemo_button_resetCounter"),color:"warning",icon:"clear_all",onClick:l[4]||(l[4]=n=>W.value=!0)},null,8,["label"]),m(U,{class:"q-ml-md",label:d(i)("app_button_Clipboard"),color:"brown-2",icon:"assignment",onClick:_e},null,8,["label"])]),(ne(),ae(Ie,{propShow:W.value,propConfirmMessage:d(F)("voiceControlDemo_question_really_reset_counters"),propIconMessage:"mdi-account-question-outline",propOkButtonLabel:d(i)("app_button_Reset"),onConfirmed:pe,onHide:l[5]||(l[5]=n=>W.value=!1),key:W.value},null,8,["propShow","propConfirmMessage","propOkButtonLabel"]))])]),_:1})]),_:1}))}});export{bl as default};
