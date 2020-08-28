(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"013f":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{attrs:{padding:""}},[e("q-card",{staticClass:"login-card"},[e("form",{on:{submit:function(t){return t.preventDefault(),a.submitForm(t)}}},[e("div",{staticClass:"row q-mb-md"},[e("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:a._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[a._v("\n          "+a._s(a.$t("app_log_dialog_Title"))+"\n        ")])],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"email",staticClass:"col",attrs:{autofocus:"",rules:[function(t){return a.isValidEmailAddress(t)||a.$t("app_log_err_email_invalid")}],"lazy-rules":"",outlined:"",label:a.$t("app_log_label_Email"),"stack-label":""},on:{keyup:a.onChangeFormData},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:a.formData.email,callback:function(t){a.$set(a.formData,"email",t)},expression:"formData.email"}})],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"password",staticClass:"col",attrs:{rules:[function(t){return t.length>=6||a.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})}],"lazy-rules":"",type:a.passwordVisible?"text":"password",outlined:"",label:a.$t("app_log_label_Password"),"stack-label":""},on:{keyup:a.onChangeFormData},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.passwordVisible?"visibility":"visibility_off"},on:{click:function(t){a.passwordVisible=!a.passwordVisible}}})]},proxy:!0}]),model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}})],1),e("div",{staticClass:"row"},[e("q-space"),e("q-btn",{attrs:{color:"primary",label:a.$t("app_log_label_Login"),type:"submit"}})],1),a.getErrorlist.length?e("div",{staticClass:"row"},[e("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[e("q-toolbar",{staticClass:"bg-red-1"},[e("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),e("q-toolbar-title",[a._v(a._s(a.$t("backend_error_header")))])],1),e("q-list",{attrs:{bordered:""}},a._l(a.getErrorlist,(function(t){return e("q-item",{key:t,staticClass:"q-my-xs error-item"},[e("q-item-section",[e("q-item-label",[a._v(" "+a._s(t)+" ")])],1)],1)})),1)],1)],1):a._e()])])],1)},s=[],i=e("ded3"),o=e.n(i),l=e("2f62"),n=e("7429"),c=e("b405"),d={data(){return{formData:{email:"test@test.de",password:"123456"},passwordVisible:!1}},methods:o()(o()(o()({isValidEmailAddress(a){const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(a).toLowerCase())},submitForm(){this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||this[c["a"]](o()(o()({},this.formData),{},{router:this.$router,redirectTo:this.$route.query.redirect}))}},Object(l["b"])(["userBackendCallInitialize"])),Object(n["b"])([c["a"]])),{},{onChangeFormData(){this.getErrorlist.length&&this.userBackendCallInitialize()}}),computed:o()({},Object(l["c"])(["getErrorlist"])),created(){this.userBackendCallInitialize()}},u=d,p=(e("da41"),e("2877")),m=e("9989"),b=e("f09f"),f=e("54e1"),_=e("0016"),g=e("27f9"),w=e("2c91"),h=e("9c40"),q=e("65c6"),C=e("6ac5"),y=e("1c1c"),v=e("66e5"),k=e("4074"),$=e("0170"),Q=e("eebe"),D=e.n(Q),x=Object(p["a"])(u,r,s,!1,null,null,null);t["default"]=x.exports;D()(x,"components",{QPage:m["a"],QCard:b["a"],QBanner:f["a"],QIcon:_["a"],QInput:g["a"],QSpace:w["a"],QBtn:h["a"],QToolbar:q["a"],QToolbarTitle:C["a"],QList:y["a"],QItem:v["a"],QItemSection:k["a"],QItemLabel:$["a"]})},da41:function(a,t,e){"use strict";var r=e("e196"),s=e.n(r);s.a},e196:function(a,t,e){}}]);