(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"013f":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{attrs:{padding:""}},[t("q-card",{staticClass:"login-card"},[t("form",{on:{submit:function(a){return a.preventDefault(),e.submitForm(a)}}},[t("div",{staticClass:"row q-mb-md"},[t("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:e._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[e._v("\n          "+e._s(e.$t("app_log_dialog_Title"))+"\n        ")])],1),t("div",{staticClass:"row q-mb-md",attrs:{"v-if":e.settings.featureDemo}},[t("div",{staticClass:"text-body2"},[e._v("\n          "+e._s(e.$t("app_log_demouser_label"))+"\n            "),e._l(e.demoUser,(function(a){return t("q-chip",{key:a,attrs:{clickable:"",color:"blue-2"},on:{click:function(t){return e.onDemoNameClicked(a)}}},[e._v("\n              "+e._s(a)+"\n            ")])}))],2)]),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"email",staticClass:"col",attrs:{autofocus:"",rules:[function(a){return e.isValidEmailAddress(a)||e.$t("app_log_err_email_invalid")}],"lazy-rules":"",outlined:"",label:e.$t("app_log_label_Email"),"stack-label":""},on:{keyup:e.onChangeFormData},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"password",staticClass:"col",attrs:{rules:[function(a){return a.length>=6||e.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})}],"lazy-rules":"",type:e.passwordVisible?"text":"password",outlined:"",label:e.$t("app_log_label_Password"),"stack-label":""},on:{keyup:e.onChangeFormData},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.passwordVisible?"visibility":"visibility_off"},on:{click:function(a){e.passwordVisible=!e.passwordVisible}}})]},proxy:!0}]),model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),t("div",{staticClass:"row"},[t("q-space"),t("q-btn",{attrs:{color:"primary",label:e.$t("app_log_label_Login"),type:"submit"}})],1),e.getErrorlist.length?t("div",{staticClass:"row"},[t("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[t("q-toolbar",{staticClass:"bg-red-1"},[t("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),t("q-toolbar-title",[e._v(e._s(e.$t("backend_error_header")))])],1),t("q-list",{attrs:{bordered:""}},e._l(e.getErrorlist,(function(a){return t("q-item",{key:a,staticClass:"q-my-xs error-item"},[t("q-item-section",[t("q-item-label",[e._v(" "+e._s(a)+" ")])],1)],1)})),1)],1)],1):e._e()])])],1)},s=[],o=(t("5319"),t("ded3")),i=t.n(o),l=t("2f62"),n=t("7429"),c=t("b405"),d=t("9cb2"),u={data(){return{formData:{email:"ColinPowell@example.com",password:"!123456!"},passwordVisible:!1,settings:d["a"],demoUser:["Aaron Eckhart","Angela Merkel","Anna Kournikova","Donald Trump","Vladimir Putin"]}},methods:i()(i()(i()({isValidEmailAddress(e){const a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(String(e).toLowerCase())},submitForm(){this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||this[c["a"]](i()(i()({},this.formData),{},{router:this.$router,redirectTo:this.$route.query.redirect}))}},Object(l["b"])(["userBackendCallInitialize"])),Object(n["b"])([c["a"]])),{},{onChangeFormData(){this.getErrorlist.length&&this.userBackendCallInitialize()},onDemoNameClicked(e){this.formData.email=`${e.replace(" ","")}@example.com`,this.formData.password="!123456!",this.submitForm()}}),computed:i()({},Object(l["c"])(["getErrorlist"])),created(){this.userBackendCallInitialize()}},m=u,p=(t("da41"),t("2877")),f=t("9989"),b=t("f09f"),_=t("54e1"),h=t("0016"),g=t("b047"),C=t("27f9"),w=t("2c91"),k=t("9c40"),q=t("65c6"),v=t("6ac5"),y=t("1c1c"),D=t("66e5"),$=t("4074"),Q=t("0170"),x=t("eebe"),E=t.n(x),V=Object(p["a"])(m,r,s,!1,null,null,null);a["default"]=V.exports;E()(V,"components",{QPage:f["a"],QCard:b["a"],QBanner:_["a"],QIcon:h["a"],QChip:g["a"],QInput:C["a"],QSpace:w["a"],QBtn:k["a"],QToolbar:q["a"],QToolbarTitle:v["a"],QList:y["a"],QItem:D["a"],QItemSection:$["a"],QItemLabel:Q["a"]})},"9cb2":function(e,a,t){"use strict";a["a"]={featureDevelopment:!0,featureChat:!0,featureDemo:!0,featureProfileDetailView:!0,featureVideoChat:!0}},da41:function(e,a,t){"use strict";t("e196")},e196:function(e,a,t){}}]);