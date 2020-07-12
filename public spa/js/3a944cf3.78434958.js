(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3a944cf3"],{"1aad":function(r,s,t){"use strict";t.r(s);var a=function(){var r=this,s=r.$createElement,t=r._self._c||s;return t("q-page",{attrs:{padding:""}},[t("q-card",{staticClass:"input-card"},[t("form",{on:{submit:function(s){return s.preventDefault(),r.submitFormEmail(s)}}},[t("div",{staticClass:"row q-mb-md"},[t("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:r._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[r._v("\n          "+r._s(r.$t("user_credentials_group_email_title"))+"\n        ")])],1),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"email",staticClass:"col",attrs:{rules:[function(s){return!!s||r.m("app_error_fieldname_required",{field:"fieldName_user_email"})},function(s){return r.isValidEmailAddress(s)||r.$t("app_log_err_email_invalid")}],"lazy-rules":"",outlined:"",label:r.$t("user_field_email_label"),"stack-label":""},on:{keyup:function(s){return r.onKeyupFormData("email")}},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:r.formDataEmail.email,callback:function(s){r.$set(r.formDataEmail,"email",s)},expression:"formDataEmail.email"}})],1),t("div",{staticClass:"row q-mb-md row-submit"},[t("q-space"),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{attrs:{color:"primary",label:r.$t("user_credentials_group_email_button_save"),type:"submit",disable:r.submitButtonEmailDisabled}})],1)],1),r.getErrorGroup("email").length?t("div",{staticClass:"row"},[t("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[t("q-toolbar",{staticClass:"bg-red-1"},[t("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),t("q-toolbar-title",[r._v(r._s(r.$t("backend_error_header")))])],1),t("q-list",{attrs:{bordered:""}},r._l(r.getErrorGroup("email"),(function(s){return t("q-item",{key:s,staticClass:"q-my-xs error-item"},[t("q-item-section",[t("q-item-label",[r._v(" "+r._s(s)+" ")])],1)],1)})),1)],1)],1):r._e()])]),t("q-card",{staticClass:"input-card"},[t("form",{on:{submit:function(s){return s.preventDefault(),r.submitFormPassword(s)}}},[t("div",{staticClass:"row q-mb-md"},[t("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:r._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[r._v("\n          "+r._s(r.$t("user_credentials_group_password_title"))+"\n        ")])],1),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"password",staticClass:"col",attrs:{rules:[function(s){return s.length>=6||r.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})}],"lazy-rules":"",type:r.passwordVisible?"text":"password",outlined:"",label:r.$t("app_log_label_Password"),"stack-label":""},on:{keyup:function(s){return r.onKeyupFormData("password")}},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:r.passwordVisible?"visibility":"visibility_off"},on:{click:function(s){r.passwordVisible=!r.passwordVisible}}})]},proxy:!0}]),model:{value:r.formDataPassword.password,callback:function(s){r.$set(r.formDataPassword,"password",s)},expression:"formDataPassword.password"}})],1),t("div",{staticClass:"row q-mb-md"},[t("q-input",{ref:"confirmPassword",staticClass:"col",attrs:{rules:[function(s){return s.length>=6||r.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})},r.isConfirmpasswordEqualPassword],"lazy-rules":"",type:r.passwordVisible?"text":"password",outlined:"",label:r.$t("app_log_label_Confirm_Password"),"stack-label":""},on:{keyup:function(s){return r.onKeyupFormData("confirmPassword")}},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:r.passwordVisible?"visibility":"visibility_off"},on:{click:function(s){r.passwordVisible=!r.passwordVisible}}})]},proxy:!0}]),model:{value:r.formDataPassword.confirmPassword,callback:function(s){r.$set(r.formDataPassword,"confirmPassword",s)},expression:"formDataPassword.confirmPassword"}})],1),t("div",{staticClass:"row q-mb-md row-submit"},[t("q-space"),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{attrs:{color:"primary",label:r.$t("user_credentials_group_password_button_save"),type:"submit",disable:r.submitButtonPasswordDisabled}})],1)],1),r.getErrorGroup("password").length?t("div",{staticClass:"row"},[t("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[t("q-toolbar",{staticClass:"bg-red-1"},[t("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),t("q-toolbar-title",[r._v(r._s(r.$t("backend_error_header")))])],1),t("q-list",{attrs:{bordered:""}},r._l(r.getErrorGroup("password"),(function(s){return t("q-item",{key:s,staticClass:"q-my-xs error-item"},[t("q-item-section",[t("q-item-label",[r._v(" "+r._s(s)+" ")])],1)],1)})),1)],1)],1):r._e()])])],1)},e=[],i=(t("8e6e"),t("8a81"),t("ac6a"),t("cadf"),t("06db"),t("456d"),t("c47a")),o=t.n(i),n=t("2f62"),l=t("7429"),c=t("b405"),d=t("82ab");function u(r,s){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),t.push.apply(t,a)}return t}function m(r){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?u(t,!0).forEach((function(s){o()(r,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))}))}return r}var p={name:"UserEmailPassword",data:function(){return{formDataEmail:{email:this.$store.state.user.user.email},submitButtonEmailDisabled:!0,formDataPassword:{password:"",confirmPassword:""},passwordVisible:!1,submitButtonPasswordDisabled:!0}},methods:m({isValidEmailAddress:function(r){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(String(r).toLowerCase())},isConfirmpasswordEqualPassword:function(r){var s=!this.formDataPassword.password||r===this.formDataPassword.password;return!!s||this.$t("app_register_err_Passwords_do_not_match")},submitFormEmail:function(){this.userBackendCallInitialize("email"),this.$refs.email.validate(),this.$refs.email.hasError||this[c["g"]]({fields:{user:this.formDataEmail},token:this.getUserToken,errorGroup:"email",onSuccessNotificationId:"user_credentials_group_email_notification_safe_successful"})},submitFormPassword:function(){this.userBackendCallInitialize("password"),this.$refs.password.validate(),this.$refs.confirmPassword.validate(),this.$refs.password.hasError||this.$refs.confirmPassword.hasError||this[c["g"]]({fields:{user:this.formDataPassword},token:this.getUserToken,errorGroup:"password",onSuccessNotificationId:"user_credentials_group_password_notification_safe_successful"})}},Object(n["b"])(["userBackendCallInitialize"]),{},Object(l["b"])([c["g"]]),{onKeyupFormData:function(r){r&&"email"===r&&(this.getErrorGroup("email").length&&this.userBackendCallInitialize("email"),this.submitButtonEmailDisabled=!this.$refs.email.validate()||this.formDataEmail.email===this.getUser.email),!r||"password"!==r&&"confirmPassword"!==r||(this.userBackendCallInitialize("password"),this.$refs.confirmPassword.value&&this.$refs.confirmPassword.validate(),this.submitButtonPasswordDisabled=!(this.$refs.password.validate()&&this.$refs.confirmPassword.validate()))},m:d["a"]}),computed:m({},Object(n["c"])(["getErrorGroup","getUser","getUserToken"])),created:function(){this.userBackendCallInitialize()}},f=p,b=(t("503d"),t("2877")),_=Object(b["a"])(f,a,e,!1,null,null,null);s["default"]=_.exports},"503d":function(r,s,t){"use strict";var a=t("60be"),e=t.n(a);e.a},"60be":function(r,s,t){}}]);