import{_ as h,ab as w,P as g,R as b,c5 as p,c6 as _,S as Q,V as l,W as m,X as o,ah as S,Y as a,Z as n,y as u,ai as E,aj as q,aW as c,al as C,ak as d,a0 as y,aX as I,aR as k}from"./index.bf56c37c.js";import{Q as v}from"./QBanner.e0798eec.js";import{Q as D}from"./QSpace.1a43b779.js";import{Q as V}from"./QPage.87d29655.js";import{E as R}from"./ErrorRowCard.afd9eb8d.js";import{i as B}from"./validators.bab940ba.js";import"./QToolbar.724cb3f3.js";import"./QItemLabel.7710578a.js";import"./QList.a60f2ba5.js";const U={name:"RequestTemporaryPassword",components:{"error-row-card":R},data(){return{formData:{email:this.$store.state.user.user&&!this.$store.state.user.user.guest?this.$store.state.user.user.email:"",answerSecurityQuestion:""},mode:"enterEmail",isValidEmailAddress:B,m:w}},methods:{...g(["userBackendCallInitialize"]),...b([p,_]),onChangeFormData(){this.getErrorlist.length&&this.userBackendCallInitialize()},submitForm(){this.mode==="enterEmail"?(this.$refs.email.validate(),this.$refs.email.hasError||(this.userBackendCallInitialize(),this[p]({email:this.formData.email}))):(this.$refs.answerSecurityQuestion.validate(),this.$refs.answerSecurityQuestion.hasError?this.$refs.answerSecurityQuestion.focus():(this.userBackendCallInitialize(),this[_]({email:this.formData.email,securityQuestionKey:this.getUserSecurityQuestionKey,answerSecurityQuestion:this.formData.answerSecurityQuestion})))}},computed:{...Q(["getErrorlist","getIsLoggedIn","getUserSecurityQuestionKey"])},watch:{getUserSecurityQuestionKey(e){this.mode=e?"enterAnswer":"enterEmail"}},created(){this.userBackendCallInitialize()}},A={class:"row q-mb-md"},K={class:"row q-mb-xs"},T={key:0,class:"row q-my-xs"},N={class:"row q-mt-xs q-mb-md"};function z(e,t,P,F,r,i){const f=S("error-row-card");return l(),m(V,{padding:""},{default:o(()=>[a(k,{class:"input-card"},{default:o(()=>[n("form",{onSubmit:t[2]||(t[2]=I((...s)=>i.submitForm&&i.submitForm(...s),["prevent"]))},[n("div",A,[a(v,{class:"bg-grey-3 col"},{avatar:o(()=>[a(u,{name:"mdi-lock-reset",color:"primary"})]),default:o(()=>[E(" "+q(e.$t("request_temporary_pw_title")),1)]),_:1})]),n("div",K,[a(c,{modelValue:r.formData.email,"onUpdate:modelValue":t[0]||(t[0]=s=>r.formData.email=s),onKeyup:i.onChangeFormData,autofocus:"",rules:[s=>r.isValidEmailAddress(s)||e.$t("app_log_err_email_invalid")],disable:e.getIsLoggedIn||r.mode!=="enterEmail",ref:"email","lazy-rules":"",outlined:"",class:"col",label:e.$t("app_log_label_Email"),"stack-label":""},{prepend:o(()=>[a(u,{name:"email"})]),_:1},8,["modelValue","onKeyup","rules","disable","label"])]),r.mode==="enterAnswer"?(l(),C("div",T,[a(c,{modelValue:r.formData.answerSecurityQuestion,"onUpdate:modelValue":t[1]||(t[1]=s=>r.formData.answerSecurityQuestion=s),onKeyup:i.onChangeFormData,rules:[s=>s.length>=2||e.$t("app_log_err_enter_minNumOfChars",{numOfChars:2})],ref:"answerSecurityQuestion","lazy-rules":"",outlined:"",class:"col",label:r.m("request_temporary_pw_label_answer_security_question",{question:e.$t(`security_question_${e.getUserSecurityQuestionKey}`)}),"stack-label":""},{prepend:o(()=>[a(u,{name:"question_answer"})]),_:1},8,["modelValue","onKeyup","rules","label"])])):d("",!0),n("div",N,[a(D),r.mode==="enterEmail"?(l(),m(y,{key:0,color:"primary",label:e.$t("request_temporary_pw_label_on_to_security_question"),type:"submit"},null,8,["label"])):d("",!0),r.mode==="enterAnswer"?(l(),m(y,{key:1,color:"primary",label:e.$t("request_temporary_pw_label_submit_request"),type:"submit"},null,8,["label"])):d("",!0)]),a(f,{errorList:e.getErrorlist},null,8,["errorList"])],32)]),_:1})]),_:1})}var Z=h(U,[["render",z],["__scopeId","data-v-07af8369"]]);export{Z as default};
