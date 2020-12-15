(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"0eea":function(a,t,r){},"56b4":function(a,t,r){"use strict";r.r(t);var e=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("q-page",{attrs:{padding:""}},[r("q-card",{staticClass:"login-card"},[r("form",{on:{submit:function(t){return t.preventDefault(),a.submitForm(t)}}},[r("div",{staticClass:"row q-mb-md"},[r("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:a._u([{key:"avatar",fn:function(){return[r("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[a._v("\n          "+a._s(a.$t("app_register_dialog_Title"))+"\n        ")])],1),r("div",{staticClass:"row q-mb-md"},[r("q-input",{ref:"name",staticClass:"col",attrs:{autofocus:"",rules:[function(t){return t.length>=2||a.$t("app_log_err_enter_minNumOfChars",{numOfChars:2})}],"lazy-rules":"",outlined:"",label:a.$t("app_log_label_Name"),"stack-label":""},on:{keyup:a.onChangeFormData},scopedSlots:a._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"account_circle"}})]},proxy:!0}]),model:{value:a.formData.name,callback:function(t){a.$set(a.formData,"name",t)},expression:"formData.name"}})],1),r("div",{staticClass:"row q-mb-md"},[r("q-input",{ref:"email",staticClass:"col",attrs:{rules:[function(t){return a.isValidEmailAddress(t)||a.$t("app_log_err_email_invalid")}],"lazy-rules":"",outlined:"",label:a.$t("app_log_label_Email"),"stack-label":""},on:{keyup:a.onChangeFormData},scopedSlots:a._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:a.formData.email,callback:function(t){a.$set(a.formData,"email",t)},expression:"formData.email"}})],1),r("div",{staticClass:"row q-mb-md"},[r("q-input",{ref:"password",staticClass:"col",attrs:{rules:[function(t){return t.length>=6||a.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})}],"lazy-rules":"",type:a.passwordVisible?"text":"password",outlined:"",label:a.$t("app_log_label_Password"),"stack-label":""},on:{keyup:function(t){return a.onChangeFormData("password")}},scopedSlots:a._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.passwordVisible?"visibility":"visibility_off"},on:{click:function(t){a.passwordVisible=!a.passwordVisible}}})]},proxy:!0}]),model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}})],1),r("div",{staticClass:"row q-mb-md"},[r("q-input",{ref:"confirmPassword",staticClass:"col",attrs:{rules:[function(t){return t.length>=6||a.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})},a.isConfirmpasswordEqualPassword],"lazy-rules":"",type:a.passwordVisible?"text":"password",outlined:"",label:a.$t("app_log_label_Confirm_Password"),"stack-label":""},on:{keyup:a.onChangeFormData},scopedSlots:a._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.passwordVisible?"visibility":"visibility_off"},on:{click:function(t){a.passwordVisible=!a.passwordVisible}}})]},proxy:!0}]),model:{value:a.formData.confirmPassword,callback:function(t){a.$set(a.formData,"confirmPassword",t)},expression:"formData.confirmPassword"}})],1),r("div",{staticClass:"row"},[r("q-space"),r("q-btn",{attrs:{color:"primary",label:a.$t("app_log_label_Register"),type:"submit"}})],1),a.getErrorlist.length?r("div",{staticClass:"row"},[r("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[r("q-toolbar",{staticClass:"bg-red-1"},[r("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),r("q-toolbar-title",[a._v(a._s(a.$t("backend_error_header")))])],1),r("q-list",{attrs:{bordered:""}},a._l(a.getErrorlist,(function(t){return r("q-item",{key:t,staticClass:"q-my-xs error-item"},[r("q-item-section",[r("q-item-label",[a._v(" "+a._s(t)+" ")])],1)],1)})),1)],1)],1):a._e()])])],1)},s=[],o=r("ded3"),i=r.n(o),n=r("2f62"),l=r("7429"),c=r("b405"),d={data(){return{formData:{name:"Testname",email:"test@test.de",password:"123456",confirmPassword:"123456"},passwordVisible:!1}},methods:i()(i()(i()({isValidEmailAddress(a){const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(a).toLowerCase())},isConfirmpasswordEqualPassword(a){const t=!this.formData.password||a===this.formData.password;return!!t||this.$t("app_register_err_Passwords_do_not_match")},submitForm(){this.$refs.name.validate(),this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.confirmPassword.validate(),this.$refs.name.hasError||this.$refs.email.hasError||this.$refs.password.hasError||this.$refs.confirmPassword.hasError||this[c["c"]](i()(i()({},this.formData),{},{languageLocale:this.getUserLanguageLocale,router:this.$router,redirectTo:this.$route.query.redirect}))}},Object(n["b"])(["userBackendCallInitialize"])),Object(l["b"])([c["c"]])),{},{onChangeFormData(a){this.getErrorlist.length&&this.userBackendCallInitialize(),a&&"password"===a&&this.$refs.confirmPassword.value&&this.$refs.confirmPassword.validate()}}),computed:i()({},Object(n["c"])(["getErrorlist","getUserLanguageLocale"])),created(){this.userBackendCallInitialize()}},u=d,m=(r("ac59"),r("2877")),p=r("9989"),f=r("f09f"),b=r("54e1"),_=r("0016"),w=r("27f9"),h=r("2c91"),g=r("9c40"),C=r("65c6"),y=r("6ac5"),q=r("1c1c"),k=r("66e5"),$=r("4074"),v=r("0170"),D=r("eebe"),x=r.n(D),P=Object(m["a"])(u,e,s,!1,null,null,null);t["default"]=P.exports;x()(P,"components",{QPage:p["a"],QCard:f["a"],QBanner:b["a"],QIcon:_["a"],QInput:w["a"],QSpace:h["a"],QBtn:g["a"],QToolbar:C["a"],QToolbarTitle:y["a"],QList:q["a"],QItem:k["a"],QItemSection:$["a"],QItemLabel:v["a"]})},ac59:function(a,t,r){"use strict";r("0eea")}}]);