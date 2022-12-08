(self["webpackChunkbase"]=self["webpackChunkbase"]||[]).push([[925],{7183:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>D});t(71);var a=t(3673),s=t(8880),i=t(2323);const l=(0,a.HX)("data-v-abb8e65e");(0,a.dD)("data-v-abb8e65e");const o={class:"row q-mb-md"},n={class:"row q-mb-xs"},u={key:0,class:"row q-my-xs"},m={class:"row q-mt-xs q-mb-md"};(0,a.Cn)();const d=l(((e,r,t,d,c,p)=>{const y=(0,a.up)("q-icon"),_=(0,a.up)("q-banner"),b=(0,a.up)("q-input"),h=(0,a.up)("q-space"),w=(0,a.up)("q-btn"),g=(0,a.up)("error-row-card"),f=(0,a.up)("q-card"),q=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(q,{padding:""},{default:l((()=>[(0,a.Wm)(f,{class:"input-card"},{default:l((()=>[(0,a.Wm)("form",{onSubmit:r[3]||(r[3]=(0,s.iM)(((...e)=>p.submitForm&&p.submitForm(...e)),["prevent"]))},[(0,a.Wm)("div",o,[(0,a.Wm)(_,{class:"bg-grey-3 col"},{avatar:l((()=>[(0,a.Wm)(y,{name:"mdi-lock-reset",color:"primary"})])),default:l((()=>[(0,a.Uk)(" "+(0,i.zw)(e.$t("request_temporary_pw_title")),1)])),_:1})]),(0,a.Wm)("div",n,[(0,a.Wm)(b,{modelValue:c.formData.email,"onUpdate:modelValue":r[1]||(r[1]=e=>c.formData.email=e),onKeyup:p.onChangeFormData,autofocus:"",rules:[r=>c.isValidEmailAddress(r)||e.$t("app_log_err_email_invalid")],disable:e.getIsLoggedIn||"enterEmail"!==c.mode,ref:"email","lazy-rules":"",outlined:"",class:"col",label:e.$t("app_log_label_Email"),"stack-label":""},{prepend:l((()=>[(0,a.Wm)(y,{name:"email"})])),_:1},8,["modelValue","onKeyup","rules","disable","label"])]),"enterAnswer"===c.mode?((0,a.wg)(),(0,a.j4)("div",u,[(0,a.Wm)(b,{modelValue:c.formData.answerSecurityQuestion,"onUpdate:modelValue":r[2]||(r[2]=e=>c.formData.answerSecurityQuestion=e),onKeyup:p.onChangeFormData,rules:[r=>r.length>=2||e.$t("app_log_err_enter_minNumOfChars",{numOfChars:2})],ref:"answerSecurityQuestion","lazy-rules":"",outlined:"",class:"col",label:c.m("request_temporary_pw_label_answer_security_question",{question:e.$t(`security_question_${e.getUserSecurityQuestionKey}`)}),"stack-label":""},{prepend:l((()=>[(0,a.Wm)(y,{name:"question_answer"})])),_:1},8,["modelValue","onKeyup","rules","label"])])):(0,a.ry)("",!0),(0,a.Wm)("div",m,[(0,a.Wm)(h),"enterEmail"===c.mode?((0,a.wg)(),(0,a.j4)(w,{key:0,color:"primary",label:e.$t("request_temporary_pw_label_on_to_security_question"),type:"submit"},null,8,["label"])):(0,a.ry)("",!0),"enterAnswer"===c.mode?((0,a.wg)(),(0,a.j4)(w,{key:1,color:"primary",label:e.$t("request_temporary_pw_label_submit_request"),type:"submit"},null,8,["label"])):(0,a.ry)("",!0)]),(0,a.Wm)(g,{errorList:e.getErrorlist},null,8,["errorList"])],32)])),_:1})])),_:1})}));var c=t(515),p=t.n(c),y=t(7874),_=t(816),b=t(7476),h=t(6630),w=t(7816),g=t(6401);const f={name:"RequestTemporaryPassword",components:{"error-row-card":_.Z},data(){return{formData:{email:this.$store.state.user.user&&!this.$store.state.user.user.guest?this.$store.state.user.user.email:"",answerSecurityQuestion:""},mode:"enterEmail",isValidEmailAddress:w.X,m:g.m}},methods:p()(p()(p()({},(0,y.nv)(["userBackendCallInitialize"])),(0,b.$R)([h.rj,h.dW])),{},{onChangeFormData(){this.getErrorlist.length&&this.userBackendCallInitialize()},submitForm(){"enterEmail"===this.mode?(this.$refs.email.validate(),this.$refs.email.hasError||(this.userBackendCallInitialize(),this[h.rj]({email:this.formData.email}))):(this.$refs.answerSecurityQuestion.validate(),this.$refs.answerSecurityQuestion.hasError?this.$refs.answerSecurityQuestion.focus():(this.userBackendCallInitialize(),this[h.dW]({email:this.formData.email,securityQuestionKey:this.getUserSecurityQuestionKey,answerSecurityQuestion:this.formData.answerSecurityQuestion})))}}),computed:p()({},(0,y.Se)(["getErrorlist","getIsLoggedIn","getUserSecurityQuestionKey"])),watch:{getUserSecurityQuestionKey(e){this.mode=e?"enterAnswer":"enterEmail"}},created(){this.userBackendCallInitialize()}};var q=t(4379),Q=t(151),$=t(5607),k=t(4554),v=t(4842),S=t(2025),W=t(8240),C=t(7518),E=t.n(C);f.render=d,f.__scopeId="data-v-abb8e65e";const D=f;E()(f,"components",{QPage:q.Z,QCard:Q.Z,QBanner:$.Z,QIcon:k.Z,QInput:v.Z,QSpace:S.Z,QBtn:W.Z})}}]);