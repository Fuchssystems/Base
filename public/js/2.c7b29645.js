(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"363f":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.errorList.length?i("div",{staticClass:"row"},[i("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[i("q-toolbar",{staticClass:"bg-red-1"},[i("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),i("q-toolbar-title",[e._v(e._s(e.$t("backend_error_header")))])],1),i("q-list",{attrs:{bordered:""}},e._l(e.errorList,(function(t){return i("q-item",{key:t,staticClass:"q-my-xs error-item"},[i("q-item-section",[i("q-item-label",[e._v(" "+e._s(t)+" ")])],1)],1)})),1)],1)],1):e._e()},a=[],o={props:{errorList:Array}},r=o,l=(i("4ffb"),i("2877")),n=i("f09f"),c=i("65c6"),d=i("0016"),h=i("6ac5"),g=i("1c1c"),f=i("66e5"),m=i("4074"),u=i("0170"),p=i("eebe"),S=i.n(p),C=Object(l["a"])(r,s,a,!1,null,null,null);t["a"]=C.exports;S()(C,"components",{QCard:n["a"],QToolbar:c["a"],QIcon:d["a"],QToolbarTitle:h["a"],QList:g["a"],QItem:f["a"],QItemSection:m["a"],QItemLabel:u["a"]})},"4ffb":function(e,t,i){"use strict";i("af64")},"5e11":function(e,t){function i(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id="5e11"},"76fd":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",["info"===e.tabsValue?i("profile-detail-info"):e._e(),"chat"===e.tabsValue?i("profile-detail-chat"):e._e(),"videochat"===e.tabsValue?i("profile-detail-videochat"):e._e(),i("q-page",[i("q-page-sticky",{attrs:{expand:"",position:"top"}},[i("div",{staticStyle:{width:"100%"}},[i("q-tabs",{staticClass:"bg-teal text-white shadow-2",attrs:{"no-caps":"","inline-label":"",align:"left",breakpoint:0},model:{value:e.tabsValue,callback:function(t){e.tabsValue=t},expression:"tabsValue"}},[i("q-tab",{attrs:{name:"info",label:e.$t("chatProfileDetail_tab_Info")}}),i("q-tab",{attrs:{name:"chat",label:e.$t("chatProfileDetail_tab_Chat")}}),e.settings.featureVideoChat?i("q-tab",{attrs:{name:"videochat",label:e.$t("chatProfileDetail_tab_Videochat")}}):e._e()],1)],1)])],1)],1)},a=[],o=i("ded3"),r=i.n(o),l=i("2f62"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("div",{staticStyle:{"margin-top":"30px","margin-right":"6px","margin-left":"-19px",width:"100%","max-width":"600px"}},[i("q-carousel",{ref:"carouselProfiles",attrs:{swipeable:"",animated:"",value:e.getChatSelectedProfileId,height:"197px"},on:{input:e.onProfileInput}},e._l(e.getChatProfiles,(function(t){return i("q-carousel-slide",{key:t.id,attrs:{name:t.id}},[i("div",{staticClass:"row q-pa-sm",staticStyle:{width:"100%","max-width":"600px"}},[i("div",{staticClass:"col-3",staticStyle:{width:"160px"}},[i("q-img",{staticClass:"rounded-borders",attrs:{src:t.profile_image.filecontent}})],1),i("div",{staticClass:"col",staticStyle:{"margin-left":"12px"}},[i("div",{staticClass:"text-h6"},[e._v(e._s(t.name)+" ")]),i("div",{staticClass:"text-body2",staticStyle:{"margin-top":"-4px","margin-left":"-6px"}},[i("q-icon",{attrs:{name:e.attributeOptions[t.gender_male_female_diverse_null].icon,color:e.attributeOptions[t.gender_male_female_diverse_null].color,size:"sm"}}),e._v("\n              "+e._s(t.ageYears+" "+e.$t("app_word_years"))+"\n              "),i("q-toggle",{attrs:{value:!!t.is_contact,icon:e.attributeOptions.is_contact.icon,color:e.attributeOptions.is_contact.color},on:{input:function(i){return e.onToggleIsContact(t)}}})],1),t.online?i("div",{staticStyle:{"margin-top":"-2px"}},[i("q-badge",{attrs:{color:"red"}},[e._v("\n                  "+e._s(e.$t("profile_onlineStatus_online"))+"\n              ")])],1):e._e(),!t.online&&t.last_online?i("div",{staticClass:"text-body2",staticStyle:{"margin-top":"-2px"}},[e._v("\n              "+e._s(e.$t("profile_onlineStatus_last_online")+" "+e.serverDateToLocalDateTimeString(t.last_online))+"\n            ")]):e._e(),t.online||t.last_online?e._e():i("div",{staticStyle:{"margin-top":"-2px",height:"21px"}}),i("div",{staticClass:"text-body2 q-mt-sm",staticStyle:{"margin-top":"5px"}},[e._v("\n              "+e._s(t.country_code_iso_3166_alpha_2+"-"+t.areacode+" "+t.city)+"\n            ")]),i("div",{staticClass:"text-bod2"},[e._v("\n              "+e._s(e.$t("app_word_distance")+": "+t.distance+" km")+"\n            ")])])])])})),1),i("div",{staticClass:"row",staticStyle:{width:"100%","max-width":"600px"}},[i("div",{staticClass:"col",staticStyle:{"margin-top":"6px","margin-left":"152px"}},[i("q-btn",{staticStyle:{"margin-right":"10px"},attrs:{push:"",round:"",dense:"",color:"black","text-color":"white",icon:"navigate_before"},on:{click:function(t){return e.$router.go(-1)}}}),i("q-btn",{staticStyle:{"margin-right":"5px"},attrs:{push:"",round:"",dense:"",color:"primary","text-color":"black",icon:"arrow_left",disabled:0===e.getChatSelectedProfileIndex},on:{click:function(t){return e.onButtonGotoPanel("previous")}}}),i("q-btn",{attrs:{push:"",round:"",dense:"",color:"primary","text-color":"black",icon:"arrow_right",disabled:e.getChatSelectedProfileIndex>=e.getChatProfiles.length-1},on:{click:function(t){return e.onButtonGotoPanel("next")}}}),i("q-slider",{staticClass:"vertical-top",staticStyle:{width:"60px",display:"inline-block",margin:"6px -30px -6px 20px","padding-right":"0px"},attrs:{min:1,max:e.getChatProfiles.length,color:"primary",value:e.getChatSelectedProfileIndex+1,step:1,label:"","label-value":e.getChatSelectedProfileIndex+1+"/"+e.getChatProfiles.length,"label-always":""},on:{input:e.onSliderProfileIndex}})],1)])],1),i("div",{staticClass:"q-pr-sm",staticStyle:{"margin-left":"5px",width:"100%","max-width":"600px"}},[e.getChatProfileImages.length?i("div",{staticClass:"div-carousel"},[i("q-carousel",{attrs:{swipeable:"",animated:"",arrows:e.getChatProfileImages.length>1,thumbnails:e.getChatProfileImages.length>1,value:e.getChatProfileImagesSelectedId,fullscreen:e.carouselProfileImagesFullscreen,infinite:"",height:"480px"},on:{"update:fullscreen":function(t){e.carouselProfileImagesFullscreen=t},input:e.chatSetSelectedProfileImageId},scopedSlots:e._u([{key:"control",fn:function(){return[i("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,18]}},[i("q-btn",{attrs:{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:e.carouselProfileImagesFullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(t){e.carouselProfileImagesFullscreen=!e.carouselProfileImagesFullscreen}}})],1)]},proxy:!0}],null,!1,1421924752)},e._l(e.getChatProfileImages,(function(e){return i("q-carousel-slide",{key:e.id,attrs:{image:e,name:e.id,"img-src":e.filecontent}})})),1)],1):e._e()]),e.getChatProfileImagesIsFetching?i("q-skeleton",{staticClass:"q-ma-sm",staticStyle:{width:"100%","max-width":"600px"},attrs:{height:"120px"}}):e._e(),e.getChatProfileImagesShowNoImagesFound?i("div",{staticClass:"text-h6 q-mx-md text-blue-grey-8"},[e._v("\n      "+e._s(e.m("app_search_message_no_recordnames",{recordname:"picture"}))+"\n  ")]):e._e(),i("error-row-card",{attrs:{errorList:e.getChatProfileImagesErrorList}}),i("q-page-sticky",{attrs:{expand:"",position:"bottom"}},[i("div",{staticClass:"bg-primary",staticStyle:{width:"100%",height:"34px"}},[i("q-btn",{staticStyle:{margin:"5px 0px 5px 16px"},attrs:{push:"",round:"",dense:"",color:"black","text-color":"white",icon:"navigate_before",size:"sm"},on:{click:function(t){return e.$router.go(-1)}}})],1)])],1)},c=[],d=(i("a434"),i("2ef0")),h=i("7429"),g=i("363f"),f=i("ee20"),m=i("eb5d"),u=i("82ab");const p=function(e){const t=new Date(`${e} UTC`);let i=t.toLocaleDateString(this.$t("app_locale_browser"),{day:"2-digit",month:"2-digit",year:"2-digit"});return i+=" ",i+=t.toLocaleTimeString(this.$t("app_locale_browser"),{hourCycle:"h23",hour:"2-digit",minute:"2-digit"}),i};var S={name:"ProfileDetailInfo",components:{"error-row-card":g["a"]},data(){return{profileIdsToRemoveFromSelection:[],carouselProfileImagesFullscreen:!1,attributeOptions:m["a"],m:u["a"],serverDateToLocalDateTimeString:p}},methods:r()(r()({fetchSelectedProfileIdImages:Object(d["throttle"])((function(){this.chatClearProfileImagesFetchResult(),this.getChatProfileImagesErrorList.length&&this.chatProfileImagesResetErrorlist(),this[f["f"]]({profileId:this.getChatSelectedProfileId,token:this.getUserToken})}),100),onProfileInput(e){this.chatSetSelectedProfileId(e),this.fetchSelectedProfileIdImages()},onButtonGotoPanel(e){const t="next"===e?this.getChatSelectedProfileIndex+1:this.getChatSelectedProfileIndex-1;this.chatSetSelectedProfileId(this.getChatProfiles[t].id),this.fetchSelectedProfileIdImages()},onSliderProfileIndex(e){this.chatSetSelectedProfileId(this.getChatProfiles[e-1].id),this.fetchSelectedProfileIdImages()},onToggleIsContact(e){if(this[f["g"]]({thisProfileId:this.getUserActiveProfileId,profile:r()(r()({},e),{},{is_contact:!e.is_contact}),token:this.getUserToken}),!this.getUserPreferenceChatSearchModeIsProfiles)if(e.is_contact)this.profileIdsToRemoveFromSelection.push(e.id);else{const t=this.profileIdsToRemoveFromSelection.findIndex((t=>t===e.id));-1!==t&&this.profileIdsToRemoveFromSelection.splice(t,1)}}},Object(l["b"])(["chatRemoveProfilesFromSelection","chatSetSelectedProfileId","chatSetSelectedProfileImageId","chatClearProfileImagesFetchResult","chatProfileImagesResetErrorlist"])),Object(h["b"])([f["f"],f["b"],f["g"]])),computed:r()({},Object(l["c"])(["getChatProfiles","getChatSelectedProfileId","getChatSelectedProfileIndex","getChatProfileImages","getChatProfileImagesIsFetching","getChatProfileImagesProfileIdSet","getChatProfileImagesSelectedId","getChatProfileImagesErrorList","getChatProfileImagesShowNoImagesFound","getUserActiveProfileId","getUserToken","getUserPreferenceChatSearchModeIsProfiles"])),mounted(){this.getChatSelectedProfileId!==this.getChatProfileImagesProfileIdSet&&this.fetchSelectedProfileIdImages()},beforeDestroy(){console.log("before destroy: this.profileIdsToRemoveFromSelection"),console.log(this.profileIdsToRemoveFromSelection),this.chatRemoveProfilesFromSelection(this.profileIdsToRemoveFromSelection),this[f["b"]]()}},C=S,b=i("2877"),P=i("9989"),v=i("880c"),y=i("62cd"),_=i("068f"),I=i("0016"),x=i("9564"),w=i("58a81"),V=i("9c40"),k=i("c1d0"),M=i("32a7"),q=i("293e"),T=i("de5e"),$=i("eebe"),U=i.n($),R=Object(b["a"])(C,n,c,!1,null,null,null),D=R.exports;U()(R,"components",{QPage:P["a"],QCarousel:v["a"],QCarouselSlide:y["a"],QImg:_["a"],QIcon:I["a"],QToggle:x["a"],QBadge:w["a"],QBtn:V["a"],QSlider:k["a"],QCarouselControl:M["a"],QSkeleton:q["a"],QPageSticky:T["a"]});var O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"q-pa-sm",staticStyle:{"margin-top":"50px"}},[i("div",{staticClass:"row"},[i("q-carousel",{ref:"carouselProfiles",staticClass:"col",staticStyle:{margin:"-20px -30px",width:"100%","max-width":"400px"},attrs:{swipeable:"",animated:"",value:e.getChatSelectedProfileId,height:"100px"},on:{input:e.onProfileInput}},e._l(e.getChatProfiles,(function(t){return i("q-carousel-slide",{key:t.id,attrs:{name:t.id}},[i("q-item",[i("q-item-section",{attrs:{side:"",left:""}},[i("q-btn",{attrs:{push:"",round:"",dense:"",color:"primary","text-color":"black",icon:"arrow_left",disabled:0===e.getChatSelectedProfileIndex},on:{click:function(t){return e.onButtonGotoPanel("previous")}}})],1),i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{rounded:""}},[i("img",{attrs:{src:t.profile_image.filecontent}})])],1),i("q-item-section",[i("q-item-label",[e._v("\n              "+e._s(t.name)+"\n            ")]),!t.online&&t.last_online?i("q-item-label",{staticClass:"text-body2 q-mt-sm",attrs:{caption:""}},[e._v("\n              "+e._s(e.$t("profile_onlineStatus_last_online")+" "+e.serverDateToLocalDateTimeString(t.last_online))+"\n            ")]):e._e()],1),t.online?i("q-item-section",{attrs:{side:"",top:""}},[i("q-badge",{staticClass:"q-mb-sm",attrs:{color:"red"}},[e._v("\n                "+e._s(e.$t("profile_onlineStatus_online"))+"\n            ")]),i("transition",{attrs:{name:"fade"}},[e.getChatProfileSetIsWriting?i("q-item-label",{staticClass:"text-body2 text-green"},[e._v("\n                "+e._s(e.$t("chat_message_isWriting"))+"\n              ")]):e._e()],1)],1):e._e(),i("q-item-section",{attrs:{side:"",right:""}},[i("q-btn",{attrs:{push:"",round:"",dense:"",color:"primary","text-color":"black",icon:"arrow_right",disabled:e.getChatSelectedProfileIndex>=e.getChatProfiles.length-1},on:{click:function(t){return e.onButtonGotoPanel("next")}}})],1)],1)],1)})),1)],1),i("div",{staticClass:"row"},[e.getChatChatMessagesIsFetching?e._e():i("q-scroll-area",{ref:"messages",staticClass:"col q-mb-md q-pa-sm col bg-light-blue-1",staticStyle:{height:"calc(100vh - 372px)",width:"100%","max-width":"340px"},attrs:{"thumb-style":e.thumbStyle,"bar-style":e.barStyle}},e._l(e.getChatChatMessages,(function(t){return i("div",{key:t.id,staticClass:"q-pa-xs"},[i("q-chat-message",{attrs:{text:[t.messageText],stamp:t.send_at?e.serverDateToLocalDateTimeString(t.send_at):"",sent:t.profile_id_sender==e.getUserActiveProfileId,"bg-color":t.profile_id_sender===e.getUserActiveProfileId?"amber-2":"light-green-2"}})],1)})),0),e.getChatChatMessagesIsFetching?i("q-skeleton",{staticClass:"q-mb-md q-pa-sm",staticStyle:{width:"100%","max-width":"340px"},attrs:{height:"calc(100vh - 372px)"}}):e._e()],1),i("error-row-card",{attrs:{errorList:e.getChatChatMessagesErrorList}}),i("div",{staticClass:"row"},[i("q-input",{staticClass:"col",staticStyle:{width:"100%","max-width":"340px"},attrs:{type:"textarea",filled:"",placeholder:e.$t("chat_field_messageToSend_placeholder")},on:{keydown:e.onKeyDownMessageToSend},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"send",disabled:!e.messageToSend},on:{click:e.onChatMessageSend}})]},proxy:!0}]),model:{value:e.messageToSend,callback:function(t){e.messageToSend=t},expression:"messageToSend"}})],1),i("q-page-sticky",{attrs:{expand:"",position:"bottom"}},[i("div",{staticClass:"bg-primary",staticStyle:{width:"100%",height:"44px"}},[i("q-btn",{staticStyle:{margin:"5px 0px 5px 16px"},attrs:{push:"",round:"",dense:"",color:"black","text-color":"white",icon:"navigate_before",size:"md"},on:{click:function(t){return e.$router.go(-1)}}})],1)])],1)},Q=[],F={name:"ProfileDetailChat",components:{"error-row-card":g["a"]},data(){return{messageToSend:"",thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},attributeOptions:m["a"],serverDateToLocalDateTimeString:p}},methods:r()(r()({fetchSelectedProfileIdChatMessages(){this.chatClearChatMessagesFetchResult(),this.getChatChatMessagesErrorList.length&&this.chatchatMessagesResetErrorlist(),this[f["e"]]({profileIdSender:this.getUserActiveProfileId,profileIdReceiver:this.getChatSelectedProfileId,token:this.getUserToken})},onProfileInput(e){this.chatSetSelectedProfileId(e),this.fetchSelectedProfileIdChatMessages()},onButtonGotoPanel(e){const t="next"===e?this.getChatSelectedProfileIndex+1:this.getChatSelectedProfileIndex-1;this.chatSetSelectedProfileId(this.getChatProfiles[t].id),this.fetchSelectedProfileIdChatMessages()},onChatMessageSend(){const e=(new Date).getTime();this.chatChatMessageSend({type:"chatChatMessageSend",profileIdSender:this.getUserActiveProfileId,profileIdReceiver:this.getChatSelectedProfileId,messageText:this.messageToSend,temporaryMessageId:e}),this.getChatChatMessagesErrorList.length&&this.chatchatMessagesResetErrorlist(),this[f["d"]]({message:{profileIdSender:this.getUserActiveProfileId,profileIdReceiver:this.getChatSelectedProfileId,messageText:this.messageToSend},temporaryMessageId:e,token:this.getUserToken}),this.messageToSend=""},onKeyDownMessageToSend(){this.getChatSelectedProfile&&this.getChatSelectedProfile.online&&this.debouncedSendIsWriting()}},Object(l["b"])(["chatSetSelectedProfileId","chatClearChatMessagesFetchResult","chatchatMessagesResetErrorlist","chatChatMessageSend","chatSetScrollMessagesDown"])),Object(h["b"])([f["d"],f["e"],f["a"],f["o"]])),computed:r()({},Object(l["c"])(["getChatChatMessagesErrorList","getChatChatMessages","getChatChatMessagesIsFetching","getChatChatMessagesProfileIdSet","getChatSelectedProfile","getChatSetScrollMessagesDown","getChatProfiles","getChatSelectedProfileId","getChatSelectedProfileIndex","getChatProfileSetIsWriting","getUserActiveProfileId","getUserToken"])),updated(){this.getChatSetScrollMessagesDown&&setTimeout((()=>{this.$refs.messages&&(this.$refs.messages.setScrollPercentage(1),this.chatSetScrollMessagesDown({scrollDownValue:!1}))}),500)},mounted(){this.getChatSelectedProfileId!==this.getChatChatMessagesProfileIdSet&&this.fetchSelectedProfileIdChatMessages(),this.debouncedSendIsWriting=Object(d["debounce"])((()=>{this[f["o"]]({type:"isWriting",profileIdSender:this.getUserActiveProfileId,profileIdReceiver:this.getChatSelectedProfileId})}),3e3,{leading:!0,trailing:!1})},beforeDestroy(){this[f["a"]](),this.chatClearChatMessagesFetchResult()}},E=F,j=(i("d8b5"),i("66e5")),L=i("4074"),A=i("cb32"),B=i("0170"),Y=i("4983"),z=i("8169"),W=i("27f9"),X=Object(b["a"])(E,O,Q,!1,null,"25afc752",null),G=X.exports;U()(X,"components",{QPage:P["a"],QCarousel:v["a"],QCarouselSlide:y["a"],QItem:j["a"],QItemSection:L["a"],QBtn:V["a"],QAvatar:A["a"],QItemLabel:B["a"],QBadge:w["a"],QScrollArea:Y["a"],QChatMessage:z["a"],QSkeleton:q["a"],QInput:W["a"],QPageSticky:T["a"]});var N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[e.getChatSelectedProfile?i("q-item",{staticStyle:{"margin-top":"48px"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{rounded:""}},[i("img",{attrs:{src:e.getChatSelectedProfile.profile_image.filecontent}})])],1),i("q-item-section",[i("q-item-label",[e._v("\n        "+e._s(e.getChatSelectedProfile.name)+"\n      ")]),!e.getChatSelectedProfile.online&&e.getChatSelectedProfile.last_online?i("q-item-label",{staticClass:"text-body2 q-mt-sm",attrs:{caption:""}},[e._v("\n        "+e._s(e.$t("profile_onlineStatus_last_online")+" "+e.serverDateToLocalDateTimeString(e.getChatSelectedProfile.last_online))+"\n      ")]):e._e()],1),e.getChatSelectedProfile.online?i("q-item-section",{attrs:{side:"",top:""}},[i("q-badge",{staticClass:"q-mb-sm",attrs:{color:"red"}},[e._v("\n          "+e._s(e.$t("profile_onlineStatus_online"))+"\n      ")])],1):e._e(),i("q-item-section",{attrs:{side:"",top:""}},[e.getVCcallerStatus===e.VC_STATUS_FREE?i("q-btn",{attrs:{push:"",round:"",dense:"",color:"green",icon:"call",disabled:e.getVCcallerStatus!==e.VC_STATUS_FREE||!e.getChatSelectedProfile.online||!e.getUserVCPreferenceShowMyVideo,size:"md"},on:{click:e.onCallButton}}):e._e(),e.getVCcallerStatus!==e.VC_STATUS_FREE?i("q-btn",{attrs:{push:"",round:"",dense:"",color:"red",icon:"call_end",size:"md"},on:{click:e.onEndCallButton}}):e._e(),i("q-item-label",{staticClass:"text-body2",staticStyle:{"margin-top":"5px"},attrs:{caption:""}},[e._v("\n        "+e._s(e.vcReceiverStatusDisplay)+"\n      ")])],1)],1):e._e(),i("div",{staticStyle:{width:"100%, height: 100%"}},[i("video",{ref:"remoteStream",attrs:{width:"100%",height:"100%",autoPlay:"true"},domProps:{muted:e.getUserVCPreferenceRemoteAudioMuted}})]),e.getUserVCPreferenceShowMyVideo?i("div",{ref:"myVideo",staticClass:"myVideo",style:"top: "+e.myVideoPosition.top+"px;\n      left: "+e.myVideoPosition.left+"px;\n      z-index: 100;",attrs:{draggable:"false"}},[i("video",{directives:[{name:"touch-pan",rawName:"v-touch-pan.prevent.mouse",value:e.onMyVideoDrag,expression:"onMyVideoDrag",modifiers:{prevent:!0,mouse:!0}}],ref:"videoMyStream",attrs:{muted:"",width:e.myVideoWidth,height:e.myVideoHeight,display:"block",autoPlay:"true",draggable:"false"},domProps:{muted:!0}})]):e._e(),i("error-row-card",{attrs:{errorList:e.getVCerrorList}}),i("q-page-sticky",{attrs:{expand:"",position:"bottom"}},[i("div",{staticClass:"bg-primary",staticStyle:{width:"100%",height:"44px"}},[i("q-btn",{staticStyle:{margin:"5px 0px 5px 16px"},attrs:{push:"",round:"",dense:"",color:"black","text-color":"white",icon:"navigate_before",size:"md"},on:{click:function(t){return e.$router.go(-1)}}}),i("q-btn",{staticStyle:{margin:"5px 0px 5px 16px"},attrs:{push:"",round:"",dense:"",color:"black","text-color":"white",icon:e.getUserVCPreferenceShowMyVideo?"videocam":"videocam_off",size:"md"},on:{click:e.onCameraToggle}}),i("q-btn",{staticStyle:{margin:"5px 0px 5px 16px"},attrs:{push:"",round:"",dense:"",color:"black","text-color":"white",icon:e.getUserVCPreferenceRemoteAudioMuted?"volume_off":"volume_mute",size:"md"},on:{click:e.onRemoteAudioToggle}})],1)])],1)},H=[],J=i("a0bc"),K=i.n(J),Z=i("b405"),ee=i("596b"),te=i("0fcc"),ie={name:"ProfileDetailVideochat",components:{"error-row-card":g["a"]},data(){return{myVideoPosition:{top:40,left:20},myVideoWidth:"0px",myVideoHeight:"0px",dragPositions:{},ringbacktone:new Audio("sounds/ringbacktone.mp3"),backtoneIsPlaying:!1,loadingIsShowing:!1,serverDateToLocalDateTimeString:p,VC_STATUS_FREE:ee["l"],myMediaStream:null,peer:null,peerCall:null,peerOptions:{constraints:{mandatory:{OfferToReceiveAudio:!0,OfferToReceiveVideo:!0}}}}},methods:r()(r()({onCallButton(){this.vcInitComponent(),this.vcSetCallerStatus(ee["m"]),this[ee["j"]]({profileIdReceiver:this.getChatSelectedProfile.id,token:this.getUserToken})},onEndCallButton(){this.backtoneIsPlaying&&(this.ringbacktone.pause(),this.ringbacktone.currentTime=0,this.backtoneIsPlaying=!1),this.vcSetCallerStatus(ee["l"]),this[ee["h"]]({id:this.getVCcallEntity.id,status:ee["c"],token:this.getUserToken}),this.call&&this.call.open&&this.call.close()},getUserMediaMyCamera(){navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:"user"}}).then((e=>{if(this.myMediaStream=e,this.$refs.videoMyStream){const e=this.$refs.videoMyStream;e.srcObject=this.myMediaStream,e.onloadedmetadata=()=>{e.play()};const t=this.myMediaStream.getVideoTracks()[0].getSettings();t.width>=t.height?(this.myVideoWidth="120px",this.myVideoHeight=`${Math.round(t.height/t.width*120)}px`):(this.myVideoWidth=`${Math.round(t.height/t.width*120)}px`,this.myVideoHeight="120px")}})).catch((e=>{console.log(`${e.name}: ${e.message}`),this.userPrefenceSet({key:"showMyVido",value:!1})}))},getUserMediaIncomingCall(){navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:"user"}}).then((e=>{this.peerCall.answer(e),this.peerCall.on("stream",(e=>{console.log("getUserMediaIncomingCall: this.peerCall.on stream");const t=this.$refs.remoteStream;t.srcObject=e,t.onloadedmetadata=()=>{t.play()}}))})).catch((e=>{console.log(`${e.name}: ${e.message}`)}))},getUserMediaOutgoingCall(){navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:"user"}}).then((e=>{console.log("getUserMediaOutgoingCall mediaStream"),console.log(`calling peer: ${te["b"].substr(8,2)}-fc-profile-${this.getChatSelectedProfile.id}`),this.peerCall=this.peer.call(`${te["b"].substr(8,2)}-fc-profile-${this.getChatSelectedProfile.id}`,e,this.peerOptions),this.peerCall.on("stream",(e=>{console.log("outgoing call: this.peerCall.on stream");const t=this.$refs.remoteStream;t.srcObject=e,t.onloadedmetadata=()=>{t.play()}}))})).catch((e=>{console.log(`${e.name}: ${e.message}`)}))},onCameraToggle(){this.userPrefenceSet({key:"showMyVido",value:!this.getUserVCPreferenceShowMyVideo}),this.getUserVCPreferenceShowMyVideo?this.getUserMediaMyCamera():this.myMediaStream&&this.$refs.videoMyStream&&this.$refs.videoMyStream.srcObject&&(this.$refs.videoMyStream.srcObject=null),this[Z["g"]]({fields:{user:{preferences:this.getUserPreferenceObject}},token:this.getUserToken})},onMyVideoDrag(e){e.isFirst&&(this.dragPositions.clientX=e.evt.clientX,this.dragPositions.clientY=e.evt.clientY),this.debouncedMoveMyCamera(e.evt),e.isFinal&&this.onMyVideoDragEnd()},onMyVideoDragEnd(){this.userPrefenceSet({key:`divPositionMyVideo_${window.screen.width}x${window.screen.height}`,value:this.myVideoPosition}),this[Z["g"]]({fields:{user:{preferences:this.getUserPreferenceObject}},token:this.getUserToken})},onRemoteAudioToggle(){this.userPrefenceSet({key:"remoteAudioMuted",value:!this.getUserVCPreferenceRemoteAudioMuted}),this[Z["g"]]({fields:{user:{preferences:this.getUserPreferenceObject}},token:this.getUserToken})},newPeer(e){console.log(`newPeer: peerId: ${e}`),this.peer=new K.a(e,{config:{iceServers:[{url:"stun:stun.l.google.com:19302"},{url:"turn:turn.bistri.com:80",credential:"homeo",username:"homeo"}]},debug:3}),this.peer.on("error",(e=>{this.vcSetError({errorTextArray:[e]})})),this.peer.on("call",(e=>{console.log("incoming call: this.peer.on call"),this.peerCall=e,this.getUserMediaIncomingCall()}))}},Object(l["b"])(["userPrefenceSet","vcInitComponent","vcResetErrorlist","vcSetCallerStatus","vcSetError"])),Object(h["b"])([Z["g"],ee["h"],ee["j"]])),computed:r()({vcReceiverStatusDisplay(){return this.getChatVCReceiverOnlineStatus?this.getChatVCReceiverOnlineStatus:this.getVCReceiverStatusDisplay?this.getVCReceiverStatusDisplay:this.myMediaStream?"":this.$t("vcReceiverStatusDisplay_no_mediastream")}},Object(l["c"])(["getChatSelectedProfile","getChatVCReceiverOnlineStatus","getUserActiveProfileId","getUserPreferenceObject","getUserToken","getUserVCPostionMyVideo","getUserVCPreferenceRemoteAudioMuted","getUserVCPreferenceShowMyVideo","getVCcallEntity","getVCplayRingbacktone","getVCcallerStatus","getVCerrorList","getVCcallIsOutgoing","getVCcallStatusIsConnected","getVCisFetchingReceiverProfile","getVCmodeUseReceivedProfile","getVCReceiverStatusDisplay"])),watch:{getVCplayRingbacktone(e){e?(this.ringbacktone.play(),this.backtoneIsPlaying=!0):this.ringbacktone&&(this.ringbacktone.pause(),this.ringbacktone.currentTime=0,this.backtoneIsPlaying=!1)},getVCcallStatusIsConnected(e){console.log(`getVCcallStatusIsConnected: ${this.getVCcallStatusIsConnected}`),e?this.getVCcallIsOutgoing&&this.getUserMediaOutgoingCall():(console.log("watch: getVCcallStatusIsConnected: change to not connected"),this.$refs.remoteStream.srcObject&&(this.$refs.remoteStream.srcObject=null),this.call&&this.call.open&&this.call.close())},getVCisFetchingReceiverProfile(e){e?this.loadingIsShowing||(this.$q.loading.show(),this.loadingIsShowing=!0):this.loadingIsShowing&&(this.$q.loading.hide(),this.loadingIsShowing=!1)}},mounted(){this.vcInitComponent(),this.getVCisFetchingReceiverProfile&&(this.$q.loading.show(),this.loadingIsShowing=!0),this.myVideoPosition=this.getUserVCPostionMyVideo,this.debouncedMoveMyCamera=Object(d["debounce"])((e=>{e.touches?e.touches[0]&&(this.dragPositions.left=this.dragPositions.clientX-e.touches[0].clientX,this.dragPositions.top=this.dragPositions.clientY-e.touches[0].clientY,this.dragPositions.clientX=e.touches[0].clientX,this.dragPositions.clientY=e.touches[0].clientY):(this.dragPositions.left=this.dragPositions.clientX-e.clientX,this.dragPositions.top=this.dragPositions.clientY-e.clientY,this.dragPositions.clientX=e.clientX,this.dragPositions.clientY=e.clientY),this.$refs.myVideo.offsetTop-this.dragPositions.top>0&&(this.myVideoPosition.top=this.$refs.myVideo.offsetTop-this.dragPositions.top,this.myVideoPosition.left=this.$refs.myVideo.offsetLeft-this.dragPositions.left)}),1,{leading:!1,trailing:!0}),this.getUserVCPreferenceShowMyVideo&&this.getUserMediaMyCamera(),this.newPeer(`${te["b"].substr(8,2)}-fc-profile-${this.getUserActiveProfileId}`)},beforeDestroy(){this.getVCcallerStatus!==ee["l"]&&this.onEndCallButton(),this.peer&&this.peer.destroy()}},se=ie,ae=(i("c775"),i("75c3")),oe=Object(b["a"])(se,N,H,!1,null,"442b3423",null),re=oe.exports;U()(oe,"components",{QPage:P["a"],QItem:j["a"],QItemSection:L["a"],QAvatar:A["a"],QItemLabel:B["a"],QBadge:w["a"],QBtn:V["a"],QPageSticky:T["a"]}),U()(oe,"directives",{TouchPan:ae["a"]});var le=i("9cb2"),ne={name:"ProfileDetailMain",components:{"profile-detail-info":D,"profile-detail-chat":G,"profile-detail-videochat":re},data(){return{tabsValue:this.getTabsValue(),settings:le["a"]}},methods:r()({getTabsValue(){let e="info";const{selectedProfileIndex:t}=this.$store.state.chat;if(-1!==t){const i=this.$store.state.chat.profiles[t];(i.is_contact||i.unread_messages_counter)&&(e="chat")}return this.$route.params.tab&&"videochat"===this.$route.params.tab&&(e="videochat"),e}},Object(l["b"])(["vcSetModeUseReceivedProfile"])),computed:r()({},Object(l["c"])(["getVCisFetchingReceiverProfile"])),watch:{getVCisFetchingReceiverProfile(e){e&&(this.tabsValue="videochat")}}},ce=ne,de=i("429b"),he=i("7460"),ge=Object(b["a"])(ce,s,a,!1,null,null,null);t["default"]=ge.exports;U()(ge,"components",{QPage:P["a"],QPageSticky:T["a"],QTabs:de["a"],QTab:he["a"]})},"9cb2":function(e,t,i){"use strict";t["a"]={featureDevelopment:!0,featureChat:!0,featureDemo:!0,featureProfileDetailView:!0,featureVideoChat:!0}},af64:function(e,t,i){},be5e:function(e,t,i){},c775:function(e,t,i){"use strict";i("ee84")},d8b5:function(e,t,i){"use strict";i("be5e")},eb5d:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));const s={male:{icon:"fas fa-male",color:"light-blue-12"},female:{icon:"fas fa-female",color:"pink-4"},diverse:{icon:"fas fa-genderless",color:"lime-7"},is_contact:{icon:"grade",color:"orange"},profiles:{icon:"fas fa-globe-europe",color:"black"},messages:{icon:"email",color:"red"}}},ee84:function(e,t,i){}}]);