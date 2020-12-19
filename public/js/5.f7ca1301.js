(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"064b":function(e,t,a){"use strict";a("e826")},"363f":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.errorList.length?a("div",{staticClass:"row"},[a("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[a("q-toolbar",{staticClass:"bg-red-1"},[a("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),a("q-toolbar-title",[e._v(e._s(e.$t("backend_error_header")))])],1),a("q-list",{attrs:{bordered:""}},e._l(e.errorList,(function(t){return a("q-item",{key:t,staticClass:"q-my-xs error-item"},[a("q-item-section",[a("q-item-label",[e._v(" "+e._s(t)+" ")])],1)],1)})),1)],1)],1):e._e()},i=[],r={props:{errorList:Array}},o=r,l=(a("4ffb"),a("2877")),n=a("f09f"),c=a("65c6"),d=a("0016"),h=a("6ac5"),g=a("1c1c"),f=a("66e5"),u=a("4074"),m=a("0170"),p=a("eebe"),b=a.n(p),C=Object(l["a"])(o,s,i,!1,null,null,null);t["a"]=C.exports;b()(C,"components",{QCard:n["a"],QToolbar:c["a"],QIcon:d["a"],QToolbarTitle:h["a"],QList:g["a"],QItem:f["a"],QItemSection:u["a"],QItemLabel:m["a"]})},"4ffb":function(e,t,a){"use strict";a("af64")},"76fd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["info"===e.tabsValue?a("profile-detail-info"):e._e(),"chat"===e.tabsValue?a("profile-detail-chat"):e._e(),a("q-page",[a("q-page-sticky",{attrs:{expand:"",position:"top"}},[a("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[a("q-tabs",{staticClass:"bg-teal text-white shadow-2",attrs:{"no-caps":"","inline-label":"",align:"left",breakpoint:0},model:{value:e.tabsValue,callback:function(t){e.tabsValue=t},expression:"tabsValue"}},[a("q-tab",{attrs:{name:"info",label:e.$t("chatProfileDetail_tab_Info")}}),a("q-tab",{attrs:{name:"chat",label:e.$t("chatProfileDetail_tab_Chat")}})],1)],1)])],1),a("q-page",[a("q-page-sticky",{attrs:{expand:"",position:"bottom"}},[a("div",{staticClass:"bg-primary",staticStyle:{width:"100%",height:"34px"}},[a("q-btn",{staticStyle:{margin:"5px 0px 5px 16px"},attrs:{push:"",round:"",dense:"",color:"black","text-color":"white",icon:"navigate_before",size:"sm"},on:{click:function(t){return e.$router.go(-1)}}})],1)])],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticStyle:{"margin-top":"30px","margin-right":"6px","margin-left":"-19px",width:"100%","max-width":"600px"}},[a("q-carousel",{ref:"carouselProfiles",attrs:{swipeable:"",animated:"",value:e.getChatSelectedProfileId,height:"210px"},on:{input:e.onProfileInput},scopedSlots:e._u([{key:"control",fn:function(){return[a("q-carousel-control",{staticClass:"q-gutter-xs",attrs:{position:"bottom-right",offset:[70,10]}},[a("q-btn",{staticClass:"gt-xs",staticStyle:{"margin-right":"10px"},attrs:{push:"",round:"",dense:"",color:"black","text-color":"white",icon:"navigate_before"},on:{click:function(t){return e.$router.go(-1)}}}),a("q-btn",{attrs:{push:"",round:"",dense:"",color:"primary","text-color":"black",icon:"arrow_left",disabled:0===e.getChatSelectedProfileIndex},on:{click:function(t){return e.onButtonGotoPanel("previous")}}}),a("q-btn",{attrs:{push:"",round:"",dense:"",color:"primary","text-color":"black",icon:"arrow_right",disabled:e.getChatSelectedProfileIndex>=e.getChatProfiles.length-1},on:{click:function(t){return e.onButtonGotoPanel("next")}}}),a("q-slider",{staticClass:"vertical-top",staticStyle:{width:"60px",display:"inline-block","margin-left":"20px"},attrs:{min:1,max:e.getChatProfiles.length,color:"primary",value:e.getChatSelectedProfileIndex+1,step:1,label:"","label-value":e.getChatSelectedProfileIndex+1+"/"+e.getChatProfiles.length,"label-always":""},on:{input:e.onSliderProfileIndex}})],1)]},proxy:!0}])},e._l(e.getChatProfiles,(function(t){return a("q-carousel-slide",{key:t.id,attrs:{name:t.id}},[a("div",{staticClass:"row q-pa-sm",staticStyle:{width:"100%","max-width":"600px"}},[a("div",{staticClass:"col-3",staticStyle:{width:"170px"}},[a("q-img",{staticClass:"rounded-borders",attrs:{src:t.profile_image.filecontent}})],1),a("div",{staticClass:"col",staticStyle:{"margin-left":"12px"}},[a("div",{staticClass:"text-h6"},[e._v(e._s(t.name)+" ")]),a("div",{staticClass:"text-body2",staticStyle:{"margin-top":"-6px","margin-left":"-6px"}},[a("q-icon",{attrs:{name:e.attributeOptions[t.gender_male_female_diverse_null].icon,color:e.attributeOptions[t.gender_male_female_diverse_null].color,size:"sm"}}),e._v("\n              "+e._s(t.ageYears+" "+e.$t("app_word_years"))+"\n              "),a("q-toggle",{attrs:{value:!!t.is_contact,icon:e.attributeOptions.is_contact.icon,color:e.attributeOptions.is_contact.color},on:{input:function(a){return e.onToggleIsContact(t)}}})],1),t.online?a("div",{staticStyle:{"margin-top":"-2px"}},[a("q-badge",{attrs:{color:"red"}},[e._v("\n                  "+e._s(e.$t("profile_onlineStatus_online"))+"\n              ")])],1):e._e(),!t.online&&t.last_online?a("div",{staticClass:"text-body2",staticStyle:{"margin-top":"-2px"}},[e._v("\n              "+e._s(e.$t("profile_onlineStatus_last_online")+" "+e.serverDateToLocalDateTimeString(t.last_online))+"\n            ")]):e._e(),a("div",{staticClass:"text-body2 q-mt-sm",staticStyle:{"margin-top":"5px"}},[e._v("\n              "+e._s(t.country_code_iso_3166_alpha_2+"-"+t.areacode+" "+t.city)+"\n            ")]),a("div",{staticClass:"text-bod2"},[e._v("\n              "+e._s(e.$t("app_word_distance")+": "+t.distance+" km")+"\n            ")])])])])})),1)],1),a("div",{staticStyle:{"margin-left":"5px",width:"100%","max-width":"600px"}},[e.getChatProfileImages.length?a("div",{staticClass:"div-carousel"},[a("q-carousel",{attrs:{swipeable:"",animated:"",arrows:e.getChatProfileImages.length>1,thumbnails:e.getChatProfileImages.length>1,value:e.getChatProfileImagesSelectedId,fullscreen:e.carouselProfileImagesFullscreen,infinite:"",height:"480px"},on:{"update:fullscreen":function(t){e.carouselProfileImagesFullscreen=t},input:e.chatSetSelectedProfileImageId},scopedSlots:e._u([{key:"control",fn:function(){return[a("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:e.carouselProfileImagesFullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(t){e.carouselProfileImagesFullscreen=!e.carouselProfileImagesFullscreen}}})],1)]},proxy:!0}],null,!1,1421924752)},e._l(e.getChatProfileImages,(function(e){return a("q-carousel-slide",{key:e.id,attrs:{image:e,name:e.id,"img-src":e.filecontent}})})),1)],1):e._e()]),e.getChatProfileImagesIsFetching?a("q-skeleton",{staticClass:"q-ma-sm",staticStyle:{width:"100%","max-width":"600px"},attrs:{height:"120px"}}):e._e(),e.getChatProfileImagesShowNoImagesFound?a("div",{staticClass:"text-h6 q-mx-md text-blue-grey-8"},[e._v("\n      "+e._s(e.m("app_search_message_no_recordnames",{recordname:"picture"}))+"\n  ")]):e._e(),a("error-row-card",{attrs:{errorList:e.getChatProfileImagesErrorList}})],1)},o=[],l=a("ded3"),n=a.n(l),c=a("2ef0"),d=a("2f62"),h=a("7429"),g=a("363f"),f=a("ee20"),u=a("eb5d"),m=a("82ab");const p=function(e){const t=new Date(`${e} UTC`);let a=t.toLocaleDateString(this.$t("app_locale_browser"),{day:"2-digit",month:"2-digit",year:"2-digit"});return a+=" ",a+=t.toLocaleTimeString(this.$t("app_locale_browser"),{hourCycle:"h23",hour:"2-digit",minute:"2-digit"}),a};var b={name:"ProfileDetailInfo",components:{"error-row-card":g["a"]},data(){return{carouselProfileImagesFullscreen:!1,attributeOptions:u["a"],m:m["a"],serverDateToLocalDateTimeString:p}},methods:n()(n()({fetchSelectedProfileIdImages:Object(c["throttle"])((function(){this.chatClearProfileImagesFetchResult(),this.getChatProfileImagesErrorList.length&&this.chatProfileImagesResetErrorlist(),this[f["f"]]({profileId:this.getChatSelectedProfileId,token:this.getUserToken})}),100),onProfileInput(e){this.chatSetSelectedProfileId(e),this.fetchSelectedProfileIdImages()},onButtonGotoPanel(e){const t="next"===e?this.getChatSelectedProfileIndex+1:this.getChatSelectedProfileIndex-1;this.chatSetSelectedProfileId(this.getChatProfiles[t].id),this.fetchSelectedProfileIdImages()},onSliderProfileIndex(e){this.chatSetSelectedProfileId(this.getChatProfiles[e-1].id),this.fetchSelectedProfileIdImages()},onToggleIsContact(e){this[f["g"]]({thisProfileId:this.getUserActiveProfileId,profile:n()(n()({},e),{},{is_contact:!e.is_contact}),token:this.getUserToken})}},Object(d["b"])(["chatSetSelectedProfileId","chatSetSelectedProfileImageId","chatClearProfileImagesFetchResult","chatProfileImagesResetErrorlist"])),Object(h["b"])([f["f"],f["b"],f["g"]])),computed:n()({},Object(d["c"])(["getChatProfiles","getChatSelectedProfileId","getChatSelectedProfileIndex","getChatProfileImages","getChatProfileImagesIsFetching","getChatProfileImagesProfileIdSet","getChatProfileImagesSelectedId","getChatProfileImagesErrorList","getChatProfileImagesShowNoImagesFound","getUserActiveProfileId","getUserToken"])),mounted(){this.getChatSelectedProfileId!==this.getChatProfileImagesProfileIdSet&&this.fetchSelectedProfileIdImages()},beforeDestroy(){this[f["b"]]()}},C=b,S=a("2877"),I=a("9989"),_=a("880c"),P=a("62cd"),x=a("068f"),v=a("0016"),y=a("9564"),q=a("58a81"),w=a("32a7"),k=a("9c40"),T=a("c1d0"),Q=a("293e"),M=a("eebe"),D=a.n(M),$=Object(S["a"])(C,r,o,!1,null,null,null),L=$.exports;D()($,"components",{QPage:I["a"],QCarousel:_["a"],QCarouselSlide:P["a"],QImg:x["a"],QIcon:v["a"],QToggle:y["a"],QBadge:q["a"],QCarouselControl:w["a"],QBtn:k["a"],QSlider:T["a"],QSkeleton:Q["a"]});var O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-sm",staticStyle:{"margin-top":"50px"}},[a("div",{staticClass:"row"},[a("q-carousel",{ref:"carouselProfiles",staticClass:"col",staticStyle:{margin:"-20px -30px",width:"100%","max-width":"400px"},attrs:{swipeable:"",animated:"",value:e.getChatSelectedProfileId,height:"100px"},on:{input:e.chatSetSelectedProfileId}},e._l(e.getChatProfiles,(function(t){return a("q-carousel-slide",{key:t.id,attrs:{name:t.id}},[a("q-item",[a("q-item-section",{attrs:{side:"",left:""}},[a("q-btn",{attrs:{push:"",round:"",dense:"",color:"primary","text-color":"black",icon:"arrow_left",disabled:0===e.getChatSelectedProfileIndex},on:{click:function(t){return e.onButtonGotoPanel("previous")}}})],1),a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{rounded:""}},[a("img",{attrs:{src:t.profile_image.filecontent}})])],1),a("q-item-section",[a("q-item-label",[e._v("\n              "+e._s(t.name)+"\n            ")]),!t.online&&t.last_online?a("q-item-label",{staticClass:"text-body2 q-mt-sm",attrs:{caption:""}},[e._v("\n              "+e._s(e.$t("profile_onlineStatus_last_online")+" "+e.serverDateToLocalDateTimeString(t.last_online))+"\n            ")]):e._e()],1),t.online?a("q-item-section",{attrs:{side:"",top:""}},[a("q-badge",{staticClass:"q-mb-sm",attrs:{color:"red"}},[e._v("\n                "+e._s(e.$t("profile_onlineStatus_online"))+"\n            ")]),a("transition",{attrs:{name:"fade"}},[e.getChatProfileSetIsWriting?a("q-item-label",{staticClass:"text-body2 text-green"},[e._v("\n                "+e._s(e.$t("chat_message_isWriting"))+"\n              ")]):e._e()],1)],1):e._e(),a("q-item-section",{attrs:{side:"",right:""}},[a("q-btn",{attrs:{push:"",round:"",dense:"",color:"primary","text-color":"black",icon:"arrow_right",disabled:e.getChatSelectedProfileIndex>=e.getChatProfiles.length-1},on:{click:function(t){return e.onButtonGotoPanel("next")}}})],1)],1)],1)})),1)],1),a("div",{staticClass:"row"},[e.getChatChatMessagesIsFetching?e._e():a("q-scroll-area",{ref:"messages",staticClass:"col q-mb-md q-pa-sm col bg-light-blue-1",staticStyle:{height:"calc(100vh - 362px)",width:"100%","max-width":"340px"},attrs:{"thumb-style":e.thumbStyle,"bar-style":e.barStyle}},e._l(e.getChatChatMessages,(function(t){return a("div",{key:t.id,staticClass:"q-pa-xs"},[a("q-chat-message",{attrs:{text:[t.messageText],stamp:t.send_at?e.serverDateToLocalDateTimeString(t.send_at):"",sent:t.profile_id_sender==e.getUserActiveProfileId,"bg-color":t.profile_id_sender===e.getUserActiveProfileId?"amber-2":"light-green-2"}})],1)})),0),e.getChatChatMessagesIsFetching?a("q-skeleton",{staticClass:"q-mb-md q-pa-sm",staticStyle:{width:"100%","max-width":"340px"},attrs:{height:"calc(100vh - 362px)"}}):e._e()],1),a("error-row-card",{attrs:{errorList:e.getChatChatMessagesErrorList}}),a("div",{staticClass:"row"},[a("q-input",{staticClass:"col",staticStyle:{widht:"100%","max-width":"340px"},attrs:{type:"textarea",filled:"",placeholder:e.$t("chat_field_messageToSend_placeholder")},on:{keydown:e.onKeyDownMessageToSend},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"send",disabled:!e.messageToSend},on:{click:e.onChatMessageSend}})]},proxy:!0}]),model:{value:e.messageToSend,callback:function(t){e.messageToSend=t},expression:"messageToSend"}})],1)],1)},F=[],E={name:"ProfileDetailChat",components:{"error-row-card":g["a"]},data(){return{messageToSend:"",thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},attributeOptions:u["a"],serverDateToLocalDateTimeString:p}},methods:n()(n()({fetchSelectedProfileIdChatMessages(){this.chatClearChatMessagesFetchResult(),this.getChatChatMessagesErrorList.length&&this.chatchatMessagesResetErrorlist(),this[f["e"]]({profileIdSender:this.getUserActiveProfileId,profileIdReceiver:this.getChatSelectedProfileId,token:this.getUserToken})},onButtonGotoPanel(e){const t="next"===e?this.getChatSelectedProfileIndex+1:this.getChatSelectedProfileIndex-1;this.chatSetSelectedProfileId(this.getChatProfiles[t].id),this.fetchSelectedProfileIdChatMessages()},onChatMessageSend(){const e=(new Date).getTime();this.chatChatMessageSend({type:"chatChatMessageSend",profileIdSender:this.getUserActiveProfileId,profileIdReceiver:this.getChatSelectedProfileId,messageText:this.messageToSend,temporaryMessageId:e}),this.getChatChatMessagesErrorList.length&&this.chatchatMessagesResetErrorlist(),this[f["d"]]({message:{profileIdSender:this.getUserActiveProfileId,profileIdReceiver:this.getChatSelectedProfileId,messageText:this.messageToSend},temporaryMessageId:e,token:this.getUserToken}),this.messageToSend=""},onKeyDownMessageToSend(){this.getChatSelectedProfile&&this.getChatSelectedProfile.online&&this.debouncedSendIsWriting()}},Object(d["b"])(["chatSetSelectedProfileId","chatClearChatMessagesFetchResult","chatchatMessagesResetErrorlist","chatChatMessageSend","chatSetScrollMessagesDown"])),Object(h["b"])([f["d"],f["e"],f["a"],f["o"]])),computed:n()({},Object(d["c"])(["getChatChatMessagesErrorList","getChatChatMessages","getChatChatMessagesIsFetching","getChatChatMessagesProfileIdSet","getChatSelectedProfile","getChatSetScrollMessagesDown","getChatProfiles","getChatSelectedProfileId","getChatSelectedProfileIndex","getChatProfileSetIsWriting","getUserActiveProfileId","getUserToken"])),updated(){this.getChatSetScrollMessagesDown&&setTimeout((()=>{this.$refs.messages&&(this.$refs.messages.setScrollPercentage(1),this.chatSetScrollMessagesDown({scrollDownValue:!1}))}),500)},mounted(){this.getChatSelectedProfileId!==this.getChatChatMessagesProfileIdSet&&this.fetchSelectedProfileIdChatMessages(),this.debouncedSendIsWriting=Object(c["debounce"])((()=>{this[f["o"]]({type:"isWriting",profileIdSender:this.getUserActiveProfileId,profileIdReceiver:this.getChatSelectedProfileId})}),3e3,{leading:!0,trailing:!1})},beforeDestroy(){this[f["a"]]()}},U=E,R=(a("064b"),a("66e5")),j=a("4074"),A=a("cb32"),B=a("0170"),V=a("4983"),G=a("8169"),W=a("27f9"),z=Object(S["a"])(U,O,F,!1,null,null,null),J=z.exports;D()(z,"components",{QPage:I["a"],QCarousel:_["a"],QCarouselSlide:P["a"],QItem:R["a"],QItemSection:j["a"],QBtn:k["a"],QAvatar:A["a"],QItemLabel:B["a"],QBadge:q["a"],QScrollArea:V["a"],QChatMessage:G["a"],QSkeleton:Q["a"],QInput:W["a"]});var K={name:"ProfileDetailMain",components:{"profile-detail-info":L,"profile-detail-chat":J},data(){return{tabsValue:this.getTabsValue()}},methods:{getTabsValue(){let e="info";const{selectedProfileIndex:t}=this.$store.state.chat;if(-1!==t){const a=this.$store.state.chat.profiles[t];(a.is_contact||a.unread_messages_counter)&&(e="chat")}return e}}},N=K,Y=a("de5e"),H=a("429b"),X=a("7460"),Z=Object(S["a"])(N,s,i,!1,null,null,null);t["default"]=Z.exports;D()(Z,"components",{QPage:I["a"],QPageSticky:Y["a"],QTabs:H["a"],QTab:X["a"],QBtn:k["a"]})},af64:function(e,t,a){},e826:function(e,t,a){},eb5d:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));const s={male:{icon:"fas fa-male",color:"light-blue-12"},female:{icon:"fas fa-female",color:"pink-4"},diverse:{icon:"fas fa-genderless",color:"lime-7"},is_contact:{icon:"grade",color:"orange"}}}}]);