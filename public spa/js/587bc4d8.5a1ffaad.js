(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["587bc4d8"],{2497:function(e,t,r){},"363f":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.errorList.length?r("div",{staticClass:"row"},[r("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[r("q-toolbar",{staticClass:"bg-red-1"},[r("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),r("q-toolbar-title",[e._v(e._s(e.$t("backend_error_header")))])],1),r("q-list",{attrs:{bordered:""}},e._l(e.errorList,(function(t){return r("q-item",{key:t,staticClass:"q-my-xs error-item"},[r("q-item-section",[r("q-item-label",[e._v(" "+e._s(t)+" ")])],1)],1)})),1)],1)],1):e._e()},i=[],s={props:{errorList:Array}},o=s,l=(r("4ffb"),r("2877")),n=Object(l["a"])(o,a,i,!1,null,null,null);t["a"]=n.exports},"4ffb":function(e,t,r){"use strict";var a=r("2497"),i=r.n(a);i.a},"9e2f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},["administration"===e.getUserPreference("profileImagesTab")?r("div",{staticClass:"div-profile-images"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("input",{ref:"inputImageFilesSelection",style:{display:"none"},attrs:{id:"inputImageFilesSelection",type:"file",multiple:"",accept:"image/*"},on:{change:e.upload}}),r("div",{staticClass:"row q-mb-md items-start",staticStyle:{"margin-top":"30px"}},[r("q-btn",{staticClass:"col",staticStyle:{"max-width":"156px"},attrs:{color:"primary",icon:"cloud_upload",label:e.$t("profile_images_button_inputFiles")},on:{click:function(t){return e.$refs.inputImageFilesSelection.click()}}}),r("q-btn",{staticClass:"q-ml-md col",staticStyle:{"max-width":"120px"},attrs:{color:"secondary",icon:"mdi-check-all",label:e.$t("profile_images_button_selectAll"),disable:e.getNumberOfSelectedFiles===e.getProfileImages.length},on:{click:function(t){return e.fileSetSelectedAll(!0)}}}),r("q-btn",{staticClass:"q-ml-md col",staticStyle:{"max-width":"180px"},attrs:{color:"secondary",icon:"mdi-minus",label:e.$t("profile_images_button_deslectAll"),disable:!e.getNumberOfSelectedFiles},on:{click:function(t){return e.fileSetSelectedAll(!1)}}}),r("q-btn",{staticClass:"q-ml-md col",staticStyle:{"max-width":"160px"},attrs:{color:"warning",icon:"delete_forever",label:e.$t("app_button_Delete")+(e.getNumberOfSelectedFiles?" ("+e.getNumberOfSelectedFiles+")":""),disable:!e.getNumberOfSelectedFiles},on:{click:function(t){e.showConfirmDelete=!0}}})],1),r("error-row-card",{attrs:{errorList:e.getFileErrorlist}}),r("div",{staticClass:"row q-gutter-md items-start"},e._l(e.getProfileImages,(function(t,a){return r("q-img",{key:t.key,staticStyle:{"max-height":"180px","max-width":"180px"},attrs:{image:t,src:t.filecontent,"spinner-color":"white",draggable:""},on:{click:function(r){return e.onImageClicked({key:t.key,selected:t.selected})},dragstart:function(r){return e.dragStart(t.key,a,r)},dragover:function(e){e.preventDefault()},dragenter:function(r){return e.dragEnter(t.key,a,r)},dragleave:function(r){return e.dragLeave(t.key,a,r)},drop:function(r){return e.dragDrop(t.key,a,t.id,r)}}},[e.getFileProcessingStatusWithKey(t.key)?r("div",{staticClass:"absolute-full flex flex-center"},[r("q-spinner",{attrs:{color:"primary",size:"3em"}})],1):e._e(),e.getFileSelectedStatusWithKey(t.key)?r("div",{staticClass:"absolute-full flex flex-center"},[r("q-icon",{attrs:{name:"mdi-check-bold",size:"xl"}})],1):e._e()])})),1),r("confirm-yes-no",{key:e.showConfirmDelete,attrs:{propShow:e.showConfirmDelete,propConfirmMessage:e.m("app_confirm_Really_delete_number_of_recordnames",{recordname:"Picture",count:e.getNumberOfSelectedFiles}),propIconMessage:"mdi-account-question-outline",propOkButtonLabel:e.$t("app_button_Delete")},on:{confirmed:e.deleteImages,hide:function(t){e.showConfirmDelete=!1}}})],1)]):e._e(),"carousel"===e.getUserPreference("profileImagesTab")?r("div",{staticClass:"div-carousel"},[r("div",{staticClass:"q-pa-md"},[r("q-carousel",{attrs:{swipeable:"",animated:"",arrows:"",value:e.getImageCarouselSlideKey,fullscreen:e.carouselFullscreen,infinite:""},on:{"update:fullscreen":function(t){e.carouselFullscreen=t},input:e.fileSetimageCarouselSlideKey},scopedSlots:e._u([{key:"control",fn:function(){return[r("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,18]}},[r("q-btn",{attrs:{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:e.carouselFullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(t){e.carouselFullscreen=!e.carouselFullscreen}}})],1)]},proxy:!0}],null,!1,3998774607)},e._l(e.getProfileImages,(function(e){return r("q-carousel-slide",{key:e.key,attrs:{image:e,name:e.key,"img-src":e.filecontent}})})),1)],1)]):e._e(),r("q-page-sticky",{attrs:{expand:"",position:"top"}},[r("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[r("q-tabs",{staticClass:"bg-teal text-white shadow-2",attrs:{value:e.getUserPreference("profileImagesTab"),"no-caps":"","inline-label":"",align:"left",breakpoint:0},on:{input:e.onTabValueChange}},[r("q-tab",{attrs:{name:"administration",icon:"far fa-file-image",label:e.$t("profile_images_tab_admister")}}),r("q-tab",{attrs:{name:"carousel",icon:"far fa-image",label:e.$t("profile_images_tab_carousel"),disable:!e.getProfileImages.length}})],1)],1)])],1)},i=[],s=(r("8e6e"),r("8a81"),r("456d"),r("7f7f"),r("ac6a"),r("cadf"),r("06db"),r("8615"),r("c47a")),o=r.n(s),l=r("2f62"),n=r("7429"),c=r("363f"),d=r("d671"),u=r("a40e"),f=r("b405"),g=r("82ab");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={name:"Images",data:function(){return{carouselFullscreen:!1,showConfirmDelete:!1,dragStartImageKey:"",dragStartImageIndex:-1}},methods:p({upload:function(e){var t=this;if(e.target.files.length){this.fileUploadInitialize();var r=Object.values(e.target.files);r.forEach((function(e){e.temporaryFileId="".concat(e.name).concat(Date.now()),e.isProfileImage=!1;var r=new FileReader;r.readAsDataURL(e),r.onload=function(r){var a=e;a.temporaryFileId=e.temporaryFileId,a.nameWithExtension=e.name,a.filecontent=r.target.result,a.isProcessing=!0,a.isProfileImage=!1,t.fileAddTemporaryFile(a),t[u["f"]]({file:e,filecontent:r.target.result,profileId:t.$store.state.profile.activeProfile&&t.$store.state.profile.activeProfile.id,temporaryFileId:e.temporaryFileId,isProfileImage:!1,token:t.getUserToken,onSuccessNotification:t.m("backend_notification_recordname_uploaded_sucessfully",{recordname_singular:t.m("recordname_profilePicture_singular")}),onSuccessNotificationParameter:{recordname_profilePicture_singular:""}})}})),this.$refs.inputImageFilesSelection.value=null}},onTabValueChange:function(e){this.userPrefenceSet({key:"profileImagesTab",value:e}),this[f["h"]]({fields:{user:{preferences:this.getUserPreferenceObject}},token:this.getUserToken})},onImageClicked:function(e){this.fileSetSelected({key:e.key,selected:!e.selected})},deleteImages:function(){this.getSelectedFilesIds.length&&(this.fileUploadInitialize(),this[u["b"]]({arrayFileIds:this.getSelectedFilesIds,token:this.getUserToken,onSuccessNotificationId:"backend_notification_count_recordnames_deleted_sucessfully",onSuccessNotificationParameter:{recordname:"picture"}}),this.fileDeleteFileArrayIds(this.getSelectedFilesIds))},dragStart:function(e,t,r){r.dataTransfer.dropEffect="move",this.dragStartImageKey=e,this.dragStartImageIndex=t},dragEnter:function(e,t,r){e!==this.dragStartImageKey&&t!==this.dragStartImageIndex+1&&r.target.classList.add("drag-target")},dragLeave:function(e,t,r){e!==this.dragStartImageKey&&t!==this.dragStartImageIndex+1&&r.target.classList.remove("drag-target")},dragDrop:function(e,t,r,a){e!==this.dragStartImageKey&&t!==this.dragStartImageIndex+1&&(a.target.classList.remove("drag-target"),this.fileMoveArrayElements({fromKey:this.dragStartImageKey,toKey:e}),this[u["a"]]({fileId:this.dragStartImageKey,newSortValue:this.dragStartImageIndex<t?t-1:t,oldSortValue:this.dragStartImageIndex,token:this.getUserToken}))}},Object(n["b"])([u["f"],u["d"],f["h"],u["b"],u["a"]]),{},Object(l["b"])(["fileUploadInitialize","fileAddTemporaryFile","userPrefenceSet","fileSetimageCarouselSlideKey","fileSetSelected","fileSetSelectedAll","fileDeleteFileArrayIds","fileMoveArrayElements"]),{m:g["a"]}),computed:p({},Object(l["c"])(["getFileErrorlist","getUserToken","getProfileImages","getActiveProfileImageId","getFileProcessingStatusWithKey","getUserPreference","getUserPreferenceObject","getImageCarouselSlideKey","getFileSelectedStatusWithKey","getNumberOfSelectedFiles","getSelectedFilesIds"])),created:function(){this.fileUploadInitialize();var e=this.$store.state.profile.activeProfile&&this.$store.state.profile.activeProfile.id;e&&this[u["d"]]({profileId:e,activeProfileImageId:this.getActiveProfileImageId,token:this.getUserToken})},components:{"confirm-yes-no":d["a"],"error-row-card":c["a"]}},h=b,y=(r("d989"),r("2877")),S=Object(y["a"])(h,a,i,!1,null,null,null);t["default"]=S.exports},b2aa:function(e,t,r){},d671:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-dialog",{attrs:{persistent:""},on:{hide:function(t){return e.$emit("hide")}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("q-card",[r("q-card-section",{staticClass:"row items-center"},[r("q-avatar",{attrs:{icon:e.iconMessage,color:"primary","text-color":"white"}}),r("span",{staticClass:"q-ml-sm"},[e._v("\n        "+e._s(e.propConfirmMessage)+"\n      ")])],1),r("q-card-actions",{attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.okButtonLabel,color:"negative"},on:{click:function(t){return e.$emit("confirmed")}}}),r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.cancelButtonLabel,color:"positive"}})],1)],1)],1)},i=[],s={props:{propShow:Boolean,propConfirmMessage:String,propIconMessage:String,propOkButtonLabel:String,propCancelButtonLabel:String},data:function(){return{okButtonLabel:this.propOkButtonLabel||this.$t("app_button_Yes"),cancelButtonLabel:this.propCancelButtonLabel||this.$t("app_button_No"),iconMessage:this.propIconMessage||"mdi-account-question-outline",show:this.propShow}}},o=s,l=r("2877"),n=Object(l["a"])(o,a,i,!1,null,null,null);t["a"]=n.exports},d989:function(e,t,r){"use strict";var a=r("b2aa"),i=r.n(a);i.a}}]);