import{_ as u,V as c,W as m,X as s,Y as e,aS as d,bo as b,Z as f,aj as g,bm as h,t as l,a0 as r,aR as B,bk as C}from"./index.d82235c1.js";import{C as i}from"./ClosePopup.48686298.js";const _={props:{propShow:Boolean,propConfirmMessage:String,propIconMessage:String,propOkButtonLabel:String,propCancelButtonLabel:String},emits:["hide","confirmed"],data(){return{okButtonLabel:this.propOkButtonLabel||this.$t("app_button_Yes"),cancelButtonLabel:this.propCancelButtonLabel||this.$t("app_button_No"),iconMessage:this.propIconMessage||"mdi-account-question-outline",show:this.propShow}}},w={class:"q-ml-sm"};function S(n,o,p,k,t,L){return c(),m(C,{modelValue:t.show,"onUpdate:modelValue":o[1]||(o[1]=a=>t.show=a),onHide:o[2]||(o[2]=a=>n.$emit("hide")),persistent:""},{default:s(()=>[e(B,null,{default:s(()=>[e(d,{class:"row items-center"},{default:s(()=>[e(b,{icon:t.iconMessage,color:"primary","text-color":"white"},null,8,["icon"]),f("span",w,g(p.propConfirmMessage),1)]),_:1}),e(h,{align:"right"},{default:s(()=>[l(e(r,{flat:"",label:t.okButtonLabel,color:"negative",onClick:o[0]||(o[0]=a=>n.$emit("confirmed"))},null,8,["label"]),[[i]]),l(e(r,{flat:"",label:t.cancelButtonLabel,color:"positive"},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var Q=u(_,[["render",S]]);export{Q as C};
