(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"363f":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.errorList.length?a("div",{staticClass:"row"},[a("q-card",{staticClass:"error-card q-mt-md bg-red-1",attrs:{flat:"",bordered:""}},[a("q-toolbar",{staticClass:"bg-red-1"},[a("q-icon",{attrs:{name:"error",size:"32px",color:"red"}}),a("q-toolbar-title",[e._v(e._s(e.$t("backend_error_header")))])],1),a("q-list",{attrs:{bordered:""}},e._l(e.errorList,(function(t){return a("q-item",{key:t,staticClass:"q-my-xs error-item"},[a("q-item-section",[a("q-item-label",[e._v(" "+e._s(t)+" ")])],1)],1)})),1)],1)],1):e._e()},i=[],s={props:{errorList:Array}},l=s,n=(a("4ffb"),a("2877")),c=a("f09f"),o=a("65c6"),h=a("0016"),g=a("6ac5"),m=a("1c1c"),S=a("66e5"),p=a("4074"),d=a("0170"),u=a("eebe"),C=a.n(u),_=Object(n["a"])(l,r,i,!1,null,null,null);t["a"]=_.exports;C()(_,"components",{QCard:c["a"],QToolbar:o["a"],QIcon:h["a"],QToolbarTitle:g["a"],QList:m["a"],QItem:S["a"],QItemSection:p["a"],QItemLabel:d["a"]})},"4ffb":function(e,t,a){"use strict";a("af64")},7680:function(e,t,a){},"9cb2":function(e,t,a){"use strict";t["a"]={featureChat:!0,featureDemo:!0,featureProfileDetailView:!0}},ab55:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"div-profiles"},[e.getChatIsFetching?e._e():a("q-list",{style:e.$q.screen.gt.xs?e.profileListStyles_gt_xs:e.profileListStyles_xs},e._l(e.getChatProfiles,(function(t,r){return a("div",{key:r},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.onProfileClicked(r)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{rounded:""}},[a("img",{attrs:{src:t.profile_image.filecontent}})])],1),a("q-item-section",[a("q-item-label",[e._v("\n              "+e._s(t.name)+"\n            ")]),a("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(t.city+" "+t.distance+" km")+"\n            ")])],1),t.online?a("q-item-section",{attrs:{side:"",top:""}},[a("q-badge",{staticClass:"q-mt-sm",attrs:{color:"red"}},[e._v("\n                "+e._s(e.$t("profile_onlineStatus_online"))+"\n            ")])],1):e._e(),a("q-item-section",{staticStyle:{width:"44px"},attrs:{side:"",top:""}},[t.is_contact?a("q-icon",{staticClass:"q-mr-sm",attrs:{name:e.attributeOptions.is_contact.icon,color:e.attributeOptions.is_contact.color}}):e._e(),t.unread_messages_counter?a("q-badge",{staticClass:"q-mt-sm",attrs:{color:"red"}},[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:"email",color:"white"}}),e._v("\n              "+e._s(t.unread_messages_counter)+"\n            ")],1):e._e()],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-icon",{attrs:{name:e.attributeOptions[t.gender_male_female_diverse_null].icon,color:e.attributeOptions[t.gender_male_female_diverse_null].color}}),a("q-item-label",{staticClass:"q-mt-xs",attrs:{caption:""}},[e._v(e._s("("+t.ageYears+")"))])],1)],1),a("q-separator",{attrs:{inset:""}})],1)})),0),e.getChatIsFetching?a("q-skeleton",{style:e.$q.screen.gt.xs?e.profileListStyles_gt_xs:e.profileListStyles_xs,attrs:{height:"480px"}}):e._e(),e.getChatSearchNothingFound?a("div",{staticClass:"text-h6 q-mx-md text-blue-grey-8"},[e._v("\n      "+e._s(e.m("app_search_message_no_recordnames_found",{recordname:"profile"}))+"\n    ")]):e._e(),a("error-row-card",{attrs:{errorList:e.getChatErrorList}}),a("q-page-sticky",{attrs:{expand:"",position:"top"}},[a("div",{staticClass:"row justify-start items-top bg-teal",staticStyle:{width:"100%"}},[a("div",{staticClass:"col-3 q-ma-sm q-pa-sm",staticStyle:{width:"170px"}},[a("q-input",{staticStyle:{width:"170px"},attrs:{borderless:"",value:e.getChatSearchFilter.name,"input-style":{color:"white"},placeholder:e.$t("app_placeholder_typeToStartSearching"),hint:e.getChatSearchFilter.name.length&&e.getChatSearchFilter.name.length<e.CHAT_SEARCH_NAME_LENGTH_MIN?e.m("chat_field_searchName_hint",{min:e.CHAT_SEARCH_NAME_LENGTH_MIN}):""},on:{input:e.onNameSearchInput},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.getChatSearchFilter.name?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close",color:"blue-grey-8"},on:{click:e.onNameSearchClear}}):e._e(),a("q-icon",{attrs:{name:"search",color:"blue-grey-2"}})]},proxy:!0}])}),a("q-toggle",{staticClass:"gender-toggle",staticStyle:{"margin-left":"-14px","margin-top":"0px"},attrs:{value:e.getChatSearchFilter.all,label:e.$t("app_search_label_Show_all"),color:"blue-grey-8","checked-icon":"check","unchecked-icon":"clear"},on:{input:e.onFilterAllToggle}}),e.getChatPaginationLastPage>1?a("q-slider",{staticClass:"xs",staticStyle:{"margin-left":"10px","margin-top":"34px","margin-bottom":"-12px"},attrs:{value:e.getChatPaginatePageNumberSelected,min:1,max:e.getChatPaginationLastPage,step:1,label:"","label-value":e.getChatPageSliderLabel,"label-always":"",color:"orange"},on:{input:e.onProfilePageInput,change:e.onProfilePageChange}}):e._e()],1),a("div",{staticClass:"col-3",staticStyle:{"margin-top":"16px",width:"48px"}},[a("q-toggle",{staticClass:"gender-toggle",attrs:{value:e.getChatSearchFilter.genders.male,icon:e.attributeOptions.male.icon,color:e.attributeOptions.male.color},on:{input:function(t){return e.onGenderToggle("male")}}}),a("q-toggle",{staticClass:"gender-toggle",attrs:{value:e.getChatSearchFilter.genders.female,icon:e.attributeOptions.female.icon,color:e.attributeOptions.female.color},on:{input:function(t){return e.onGenderToggle("female")}}}),a("q-toggle",{staticClass:"gender-toggle",attrs:{value:e.getChatSearchFilter.genders.diverse,icon:e.attributeOptions.diverse.icon,color:e.attributeOptions.diverse.color},on:{input:function(t){return e.onGenderToggle("diverse")}}})],1),a("div",{staticClass:"col-3 q-pa-sm justify-end",staticStyle:{"margin-top":"20px","margin-left":"10px","margin-bottom":"-10px",width:"100px"}},[a("q-slider",{staticStyle:{"margin-bottom":"12px"},attrs:{value:e.getChatSearchFilter.minAge,min:e.CHAT_SEARCH_AGE_MIN,max:e.CHAT_SEARCH_AGE_MAX,step:1,label:"","label-value":e.getChatSearchAgeMinLabel,"label-always":"",color:"blue-grey-8"},on:{input:e.chatSetSearchFilterMinAge,change:e.onAgeChange}}),a("q-slider",{attrs:{value:e.getChatSearchFilter.maxAge,min:e.CHAT_SEARCH_AGE_MIN,max:e.CHAT_SEARCH_AGE_MAX,step:1,label:"","label-value":e.getChatSearchAgeMaxLabel,"label-always":"",color:"blue-grey-8"},on:{input:e.chatSetSearchFilterMaxAge,change:e.onAgeChange}}),a("q-slider",{staticClass:"xs",staticStyle:{"margin-top":"12px"},attrs:{value:e.getChatSearchFilter.distance,min:0,max:e.CHAT_SEARCH_DISTANCE_MAX_KM,step:10,label:"","label-value":e.getChatSearchDistanceLabel,"label-always":"",color:"blue-grey-8"},on:{input:e.chatSetSearchFilterDistance,change:e.onDistanceChange}})],1),a("div",{staticClass:"col-3 gt-xs q-pa-sm",staticStyle:{"margin-top":"20px","margin-left":"10px","margin-bottom":"-10px",width:"100px"}},[a("q-slider",{staticStyle:{"margin-bottom":"12px"},attrs:{value:e.getChatSearchFilter.distance,min:0,max:e.CHAT_SEARCH_DISTANCE_MAX_KM,step:10,label:"","label-value":e.getChatSearchDistanceLabel,"label-always":"",color:"blue-grey-8"},on:{input:e.chatSetSearchFilterDistance,change:e.onDistanceChange}}),e.getChatPaginationLastPage>1?a("q-slider",{attrs:{value:e.getChatPaginatePageNumberSelected,min:1,max:e.getChatPaginationLastPage,step:1,label:"","label-value":e.getChatPageSliderLabel,"label-always":"",color:"orange"},on:{input:e.onProfilePageInput,change:e.onProfilePageChange}}):e._e(),!e.getChatIsFetching&&e.getChatPaginationLastPage<=1&&!e.nameSearchIsBouncing&&e.getChatProfiles.length?a("div",{staticClass:"text-orange text-weight-bold",staticStyle:{"margin-top":"17px"}},[e._v("\n              "+e._s(e.m("app_search_message_number_found",{count:e.getChatProfiles.length}))+"\n            ")]):e._e()],1)])])],1)])},i=[],s=a("ded3"),l=a.n(s),n=a("2ef0"),c=a("2f62"),o=a("7429"),h=a("363f"),g=a("ee20"),m=a("eb5d"),S=a("82ab"),p=a("9cb2"),d={data(){return{CHAT_SEARCH_AGE_MIN:g["j"],CHAT_SEARCH_AGE_MAX:g["i"],CHAT_SEARCH_DISTANCE_MAX_KM:g["k"],CHAT_SEARCH_NAME_LENGTH_MIN:g["l"],nameSearchIsBouncing:!1,m:S["a"],attributeOptions:m["a"],profileListStyles_gt_xs:{marginTop:"90px",marginRight:"-24px",marginBottom:"-10px",marginLeft:"-36px",width:"100%",maxWidth:"300px"},profileListStyles_xs:{marginTop:"150px",marginRight:"-24px",marginBottom:"-10px",marginLeft:"-36px",width:"100%",maxWidth:"300px"}}},name:"Chat",components:{"error-row-card":h["a"]},methods:l()(l()({postSearch(){(this.getChatSearchFilter.all||this.getChatSearchFilter.name||!this.getChatSearchFilter.genders.male||!this.getChatSearchFilter.genders.female||!this.getChatSearchFilter.genders.diverse||this.getChatSearchFilter.minAge>g["j"]||this.getChatSearchFilter.maxAge<g["i"]||this.getChatSearchFilter.distance<g["k"])&&this[g["h"]]({searchFilter:Object(n["cloneDeep"])(this.getChatSearchFilter),token:this.getUserToken,sessionId:this.getUserSessionId})},resetSearchFilter(){this.chatClearSearchByFilterResult(),this.getChatErrorList.length&&this.chatResetErrorlist()},onFilterAllToggle(){this.chatSetSearchFilterAll(!this.getChatSearchFilter.all),this.getChatSearchFilter.all&&(this.resetSearchFilter(),this.postSearch())},onAgeChange(){this.resetSearchFilter(),this.postSearch()},onNameSearchInput(e){this.nameSearchIsBouncing=!0,this.chatSetSearchFilterName(e),this.resetSearchFilter(),clearTimeout(this.debouncedSearch),this.debouncedSearch=setTimeout((()=>{this.nameSearchIsBouncing=!1,this.getChatSearchFilter.name.length>=g["l"]&&this.postSearch()}),600)},onNameSearchClear(){this.chatSetSearchFilterName(""),this.resetSearchFilter(),this.postSearch()},onGenderToggle(e){this.chatSetSearchFilterToggleGender(e),this.resetSearchFilter(),this.postSearch()},chatSetSearchFilterMinAge(e){const t={minAge:e};e>this.getChatSearchFilter.maxAge&&(t.maxAge=e),this.chatSetSearchFilterAges(t)},chatSetSearchFilterMaxAge(e){const t={maxAge:e};e<this.getChatSearchFilter.minAge&&(t.minAge=e),this.chatSetSearchFilterAges(t)},onDistanceChange(e){this.chatSetSearchFilterDistance(e),this.resetSearchFilter(),this.postSearch()},onProfileClicked(e){p["a"].featureProfileDetailView&&(this.chatSetSelectedProfileId(this.getChatProfiles[e].id),this.$router.push("/profileDetail"))},onProfilePageInput(e){this.chatSetProfilesPageNumberSelected(e)},onProfilePageChange(e){this.chatSetSearchFilterQueryPage(e),this.postSearch()}},Object(c["b"])(["chatSetSelectedProfileId","chatSetSearchFilterAll","chatSetSearchFilterName","chatSetSearchFilterToggleGender","chatSetSearchFilterDistance","chatSetSearchFilterAges","chatClearSearchByFilterResult","chatResetErrorlist","chatSetProfilesPageNumberSelected","chatSetSearchFilterQueryPage","chatClearProfileImagesFetchResult","chatProfileImagesResetErrorlist"])),Object(o["b"])([g["h"],g["c"],g["f"]])),computed:l()({},Object(c["c"])(["getChatProfiles","getChatSearchFilter","getChatSearchDistanceLabel","getChatSearchAgeMinLabel","getChatSearchAgeMaxLabel","getChatIsFetching","getChatSearchNothingFound","getChatErrorList","getUserToken","getUserSessionId","getChatPaginationMetaProfiles","getChatPaginatePageNumberSelected","getChatPaginationLastPage","getChatPageSliderLabel","getChatProfileImagesIsFetching","getChatProfileImagesErrorList"])),mounted(){console.log(this.$q.screen),this.chatSetSelectedProfileId(null)},beforeDestroy(){this[g["c"]]()}},u=d,C=(a("db68"),a("2877")),_=a("9989"),b=a("1c1c"),f=a("66e5"),x=a("4074"),A=a("cb32"),F=a("0170"),P=a("58a81"),q=a("0016"),v=a("eb85"),y=a("293e"),I=a("de5e"),L=a("27f9"),T=a("9564"),E=a("c1d0"),w=a("8572"),N=a("714f"),H=a("eebe"),M=a.n(H),k=Object(C["a"])(u,r,i,!1,null,"6c863ee4",null);t["default"]=k.exports;M()(k,"components",{QPage:_["a"],QList:b["a"],QItem:f["a"],QItemSection:x["a"],QAvatar:A["a"],QItemLabel:F["a"],QBadge:P["a"],QIcon:q["a"],QSeparator:v["a"],QSkeleton:y["a"],QPageSticky:I["a"],QInput:L["a"],QToggle:T["a"],QSlider:E["a"],QField:w["a"]}),M()(k,"directives",{Ripple:N["a"]})},af64:function(e,t,a){},db68:function(e,t,a){"use strict";a("7680")},eb5d:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={male:{icon:"fas fa-male",color:"light-blue-12"},female:{icon:"fas fa-female",color:"pink-4"},diverse:{icon:"fas fa-genderless",color:"lime-7"},is_contact:{icon:"grade",color:"orange"}}}}]);