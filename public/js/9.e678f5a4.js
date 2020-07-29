(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0eea":function(a,r,t){},"56b4":function(a,r,t){"use strict";t.r(r);var e=function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("q-page",{attrs:{padding:""}},[t("q-card",{staticClass:"login-card"},[t("form",{on:{submit:function(r){return r.preventDefault(),a.submitForm(r)}}},[t("div",{staticClass:"row q-mb-md"},[t("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:a._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[a._v("\n          "+a._s(a.$t("app_register_dialog_Title"))+"\n        ")])],1),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"name",staticClass:"col",attrs:{autofocus:"",rules:[function(r){return r.length>=2||a.$t("app_log_err_enter_minNumOfChars",{numOfChars:2})}],"lazy-rules":"",outlined:"",label:a.$t("app_log_label_Name"),"stack-label":""},on:{keyup:a.onChangeFormData},scopedSlots:a._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"account_circle"}})]},proxy:!0}]),model:{value:a.formData.name,callback:function(r){a.$set(a.formData,"name",r)},expression:"formData.name"}})],1),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"email",staticClass:"col",attrs:{rules:[function(r){return a.isValidEmailAddress(r)||a.$t("app_log_err_email_invalid")}],"lazy-rules":"",outlined:"",label:a.$t("app_log_label_Email"),"stack-label":""},on:{keyup:a.onChangeFormData},scopedSlots:a._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:a.formData.email,callback:function(r){a.$set(a.formData,"email",r)},expression:"formData.email"}})],1),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"password",staticClass:"col",attrs:{rules:[function(r){return r.length>=6||a.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})}],"lazy-rules":"",type:a.passwordVisible?"text":"password",outlined:"",label:a.$t("app_log_label_Password"),"stack-label":""},on:{keyup:function(r){return a.onChangeFormData("password")}},scopedSlots:a._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.passwordVisible?"visibility":"visibility_off"},on:{click:function(r){a.passwordVisible=!a.passwordVisible}}})]},proxy:!0}]),model:{value:a.formData.password,callback:function(r){a.$set(a.formData,"password",r)},expression:"formData.password"}})],1),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"confirmPassword",staticClass:"col",attrs:{rules:[function(r){return r.length>=6||a.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})},a.isConfirmpasswordEqualPassword],"lazy-rules":"",type:a.passwordVisible?"text":"password",outlined:"",label:a.$t("app_log_label_Confirm_Password"),"stack-label":""},on:{keyup:a.onChangeFormData},scopedSlots:a._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.passwordVisible?"visibility":"visibility_off"},on:{click:function(r){a.passwordVisible=!a.passwordVisible}}})]},proxy:!0}]),model:{value:a.formData.confirmPassword,callback:function(r){a.$set(a.formData,"confirmPassword",r)},expression:"formData.confirmPassword"}})],1),t("div",{staticClass:"row"},[t("q-space"),t("q-btn",{attrs:{color:"primary",label:a.$t("app_log_label_Register"),type:"submit"}})],1),a.getErrorlist.length?t("div",{staticClass:"row"},[t("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[t("q-toolbar",{staticClass:"bg-red-1"},[t("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),t("q-toolbar-title",[a._v(a._s(a.$t("backend_error_header")))])],1),t("q-list",{attrs:{bordered:""}},a._l(a.getErrorlist,(function(r){return t("q-item",{key:r,staticClass:"q-my-xs error-item"},[t("q-item-section",[t("q-item-label",[a._v(" "+a._s(r)+" ")])],1)],1)})),1)],1)],1):a._e()])])],1)},s=[],o=t("ded3"),i=t.n(o),n=t("2f62"),l=t("7429"),c=t("b405"),d={data(){return{formData:{name:"Testname",email:"test@test.de",password:"123456",confirmPassword:"123456"},passwordVisible:!1}},methods:i()(i()(i()({isValidEmailAddress(a){const r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r.test(String(a).toLowerCase())},isConfirmpasswordEqualPassword(a){const r=!this.formData.password||a===this.formData.password;return!!r||this.$t("app_register_err_Passwords_do_not_match")},submitForm(){this.$refs.name.validate(),this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.confirmPassword.validate(),this.$refs.name.hasError||this.$refs.email.hasError||this.$refs.password.hasError||this.$refs.confirmPassword.hasError||this[c["c"]](i()(i()({},this.formData),{},{languageLocale:this.getUserLanguageLocale,router:this.$router,redirectTo:this.$route.query.redirect}))}},Object(n["b"])(["userBackendCallInitialize"])),Object(l["b"])([c["c"]])),{},{onChangeFormData(a){this.getErrorlist.length&&this.userBackendCallInitialize(),a&&"password"===a&&this.$refs.confirmPassword.value&&this.$refs.confirmPassword.validate()}}),computed:i()({},Object(n["c"])(["getErrorlist","getUserLanguageLocale"])),created(){this.userBackendCallInitialize()}},u=d,m=(t("ac59"),t("2877")),p=t("9989"),f=t("f09f"),b=t("54e1"),_=t("0016"),w=t("27f9"),h=t("2c91"),g=t("9c40"),C=t("65c6"),y=t("6ac5"),q=t("1c1c"),k=t("66e5"),v=t("4074"),$=t("0170"),D=t("eebe"),x=t.n(D),P=Object(m["a"])(u,e,s,!1,null,null,null);r["default"]=P.exports;x()(P,"components",{QPage:p["a"],QCard:f["a"],QBanner:b["a"],QIcon:_["a"],QInput:w["a"],QSpace:h["a"],QBtn:g["a"],QToolbar:C["a"],QToolbarTitle:y["a"],QList:q["a"],QItem:k["a"],QItemSection:v["a"],QItemLabel:$["a"]})},ac59:function(a,r,t){"use strict";var e=t("0eea"),s=t.n(e);s.a}}]);