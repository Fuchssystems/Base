(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"713b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",{staticClass:"lt-md"},[e._v("\n        "+e._s()+"\n      ")]),a("q-toolbar-title",{staticClass:"gt-sm"},[e._v("\n        "+e._s(e.$t("app_applicationName"))+"\n      ")]),a("user-language-menu"),e.getIsLoggedIn?e._e():a("q-btn",{attrs:{to:"/login",flat:"",label:e.$t("app_log_label_Login")}}),e.getIsLoggedIn?a("q-btn",{attrs:{flat:"",label:e.$t("app_log_label_Logout")},on:{click:e.logout}}):a("q-btn",{attrs:{to:"/register",flat:"",label:e.$t("app_log_label_Register")}}),e.getUserToken?a("q-btn",{staticClass:"toolbar-username toolbar-button-text",attrs:{flat:"",icon:"account_circle",label:e.getUserName}},[e.getIsLoggedIn?a("q-menu",{attrs:{"auto-close":""}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:"",to:"/credentials"}},[a("q-item-section",[e._v(e._s(e.$t("menu_user_menu_account_item_credentials")))])],1)],1)],1):e._e()],1):e._e()],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-primary"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{dark:""}},[a("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("menu_navigation_title")))]),e._l(e.navs,(function(t){return a("div",{key:t.label},[t.to&&!t.hide?a("q-item",{staticClass:"text-grey-4",attrs:{to:t.to,exact:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1)],1):e._e(),t.to||t.hide?e._e():a("q-expansion-item",{attrs:{"expand-separator":"",icon:t.icon,label:t.label}},e._l(t.menuItems,(function(t){return a("div",{key:t.label},[a("q-item",{staticClass:"text-grey-4",attrs:{to:t.to,exact:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1)],1)],1)})),0)],1)}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],i=a("ded3"),l=a.n(i),o=a("b06b"),r=a("2a19"),c=a("2f62"),g=a("7429"),u=a("2ef0"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-btn",{staticStyle:{"max-width":"32px"},attrs:{flat:"",icon:"language"}},[a("q-menu",{ref:"languageMenu",attrs:{"auto-close":""}},[a("div",{staticStyle:{"min-width":"110px"}},[a("q-option-group",{attrs:{options:e.languageOptions},model:{value:e.languageGroup,callback:function(t){e.languageGroup=t},expression:"languageGroup"}})],1)])],1)},h=[],d=a("b405"),_={data(){return{languageOptions:[{label:"Deutsch",value:"de-de"},{label:"Englisch",value:"en-us"},{label:"Español",value:"es-es"}]}},methods:l()(l()({},Object(c["b"])(["setLanguageLocale"])),Object(g["b"])([d["e"]])),computed:l()(l()({},Object(c["c"])(["getUserId","getUserLanguageLocale","getUserToken"])),{},{languageGroup:{get(){return this.$store.getters.getUserLanguageLocale},set(e){this.setLanguageLocale(e),this.$root.$i18n.locale=e,this[d["e"]]({userId:this.getUserId,language:this.getUserLanguageLocale,token:this.getUserToken})}}}),watch:{languageGroup(){this.$refs.languageMenu.hide()}}},b=_,p=a("2877"),f=a("9c40"),I=a("4e73"),q=a("9f0a"),v=a("eebe"),$=a.n(v),L=Object(p["a"])(b,m,h,!1,null,null,null),w=L.exports;$()(L,"components",{QBtn:f["a"],QMenu:I["a"],QOptionGroup:q["a"]});var k=a("ee20"),y=a("9cb2"),U={name:"MyLayout",data(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:l()(l()({openURL:o["a"],logout(){this[d["b"]]({token:this.getUserToken,sessionId:this.getUserSessionId})},listen(){this.getUserActiveProfileId&&this.$echo.channel(`profile.${this.getUserActiveProfileId}`).listen("MessageToProfile",(e=>{if("isWriting"!==e.message.type&&(this[k["m"]](e.message),"newChatmessage"===e.message.type))if(e.message.senderProfile.id===this.getChatChatMessagesProfileIdSet)this[k["n"]]({chatMessageId:e.message.chatmessage.id,token:this.getUserToken});else{let t=e.message.chatmessage.messageText;t.length>100&&(t+="…"),r["a"].create({message:`${this.$t("chat_message_newMessageFrom")} ${e.message.senderProfile.name}`,caption:t,color:"teal",textColor:"white",icon:"email"})}"isWriting"===e.message.type&&(this.chatSetProfileSetIsWriting({isWriting:!0}),this.resetIsWriting())}))}},Object(c["b"])(["chatSetProfileSetIsWriting"])),Object(g["b"])([d["b"],k["m"],k["n"]])),computed:l()(l()({},Object(c["c"])(["getChatChatMessagesProfileIdSet","getIsLoggedIn","getUserToken","getUserSessionId","getUserName","getUserActiveProfileId"])),{},{navs(){return[{label:this.$t("menu_navigation_home"),icon:"mdi-home",to:"/"},{label:this.$t("menu_chat_title"),hide:!this.getIsLoggedIn||!y["a"].featureChat,icon:"chat",to:"/chat"},{label:this.$t("menu_user_menu_account_title_acountSettings"),hide:!this.getIsLoggedIn,icon:"account_circle",menuItems:[{label:this.$t("menu_user_menu_account_item_credentials"),to:"/credentials"},{label:this.$t("menu_user_menu_account_item_deleteAccount"),to:"/deleteAccount"}]},{label:this.$t("menu_profile_title"),hide:!this.getIsLoggedIn,icon:"mdi-account-card-details",menuItems:[{label:this.$t("menu_profile_item_personalData"),to:"/profilePersonalData"},{label:this.$t("menu_profile_item_profilePicture"),to:"/profilePicture"},{label:this.$t("menu_profile_item_images"),to:"/profileImages"}]},{label:this.$t("menu_payments_title"),hide:!this.getIsLoggedIn,icon:"euro_symbol",menuItems:[{label:this.$t("menu_payments_makeTransfer"),to:"/payments"},{label:this.$t("menu_payments_transactions"),to:"/transactions"}]},{label:this.$t("menu_contact_title"),icon:"contact_support",to:"/contact"},{label:"Protected",icon:"security",to:"/protected"}]}}),watch:{getUserActiveProfileId(){this.listen()}},mounted(){this.listen(),this.resetIsWriting=Object(u["debounce"])((()=>{this.chatSetProfileSetIsWriting({isWriting:!1})}),5e3,{leading:!1,trailing:!0})},components:{"user-language-menu":w}},x=U,O=(a("89d3"),a("4d5a")),P=a("e359"),Q=a("65c6"),S=a("0016"),C=a("6ac5"),D=a("1c1c"),T=a("66e5"),M=a("4074"),j=a("9404"),W=a("0170"),A=a("3b73"),G=a("09e3"),E=Object(p["a"])(x,s,n,!1,null,null,null);t["default"]=E.exports;$()(E,"components",{QLayout:O["a"],QHeader:P["a"],QToolbar:Q["a"],QBtn:f["a"],QIcon:S["a"],QToolbarTitle:C["a"],QMenu:I["a"],QList:D["a"],QItem:T["a"],QItemSection:M["a"],QDrawer:j["a"],QItemLabel:W["a"],QExpansionItem:A["a"],QPageContainer:G["a"]})},"89d3":function(e,t,a){"use strict";a("e87e")},"9cb2":function(e,t,a){"use strict";t["a"]={featureChat:!0,featureDemo:!0,featureProfileDetailView:!0}},e87e:function(e,t,a){}}]);