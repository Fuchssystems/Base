import{_ as L,cb as A,cc as y,cd as F,ce as I,ab as R,cf as M,ag as k,af as N,bH as U,P as x,R as H,S as w,cg as E,V as l,W as n,X as s,ah as V,Z as m,bK as f,al as g,am as Q,an as D,ak as o,aj as c,Y as a,ai as d,aW as O,y as S,bv as C,bs as G,t as q,a$ as B,bo as X,Q as W}from"./index.7938054f.js";import{Q as j,b as p,a as P}from"./QItemLabel.3dccd102.js";import{a as K,b,Q as u}from"./attributeOptions.0069198e.js";import{Q as Y}from"./QList.983ed313.js";import{Q as z,a as Z,b as _}from"./QSkeleton.b7baa40b.js";import{Q as J}from"./QPageSticky.6bbf043b.js";import{Q as $}from"./QPage.f1dcf01a.js";import{E as ee}from"./ErrorRowCard.4ade862b.js";import"./TouchPan.e2b9a685.js";import"./touch.d521a8a2.js";import"./selection.d1bc92c3.js";import"./rtl.4b414a6d.js";import"./QToolbar.5e8661aa.js";const te={data(){return{CHAT_SEARCH_AGE_MIN:A,CHAT_SEARCH_AGE_MAX:y,CHAT_SEARCH_DISTANCE_MAX_KM:F,CHAT_SEARCH_NAME_LENGTH_MIN:I,nameSearchIsBouncing:!1,m:R,attributeOptions:K,profileListStyles_modeProfiles_gt_xs:{marginTop:"134px",marginRight:"-24px",marginBottom:"-10px",marginLeft:"-36px",width:"100%",maxWidth:"300px"},profileListStyles_modeProfiles_xs:{marginTop:"200px",marginRight:"-24px",marginBottom:"-10px",marginLeft:"-36px",width:"100%",maxWidth:"300px"},profileListStyles_modeNotProfiles:{marginTop:"100px",marginRight:"-24px",marginBottom:"-10px",marginLeft:"-36px",width:"100%",maxWidth:"300px"},searchModeOptions:{recordName:{profiles:"profile",contacts:"contact",messages:"profileWithnewMessage"}}}},name:"Chat",components:{"error-row-card":ee},methods:{postSearch(){console.log(`postsearch: this.getChatSearchFilter.mode
        :${this.getChatSearchFilter.mode}`),(!this.getUserPreferenceChatSearchModeIsProfiles||this.getChatSearchFilter.all||this.getChatSearchFilter.name||!this.getChatSearchFilter.genders.male||!this.getChatSearchFilter.genders.female||!this.getChatSearchFilter.genders.diverse||this.getChatSearchFilter.minAge>A||this.getChatSearchFilter.maxAge<y||this.getChatSearchFilter.distance<F)&&this[M]({searchFilter:k.exports.cloneDeep(this.getChatSearchFilter),token:this.getUserToken,sessionId:this.getUserSessionId})},resetSearchResult(){console.log("resetSearchResult"),this.chatClearSearchByFilterResult(),this.getChatErrorList.length&&this.chatResetErrorlist()},onFilterAllToggle(){this.chatSetSearchFilterAll(!this.getChatSearchFilter.all),this.getChatSearchFilter.all&&(this.resetSearchResult(),this.postSearch())},onAgeChange(){this.resetSearchResult(),this.postSearch()},onNameSearchInput(e){this.nameSearchIsBouncing=!0,this.chatSetSearchFilterName(e),this.resetSearchResult(),clearTimeout(this.debouncedSearch),this.debouncedSearch=setTimeout(()=>{this.nameSearchIsBouncing=!1,(this.getChatSearchFilter.name.length>=I||!this.getUserPreferenceChatSearchModeIsProfiles&&!this.getChatSearchFilter.name.length)&&this.postSearch()},600)},onNameSearchClear(){this.chatSetSearchFilterName(""),this.resetSearchResult(),this.postSearch()},onGenderToggle(e){this.chatSetSearchFilterToggleGender(e),this.resetSearchResult(),this.postSearch()},chatSetSearchFilterMinAge(e){const h={minAge:e};e>this.getChatSearchFilter.maxAge&&(h.maxAge=e),this.chatSetSearchFilterAges(h)},chatSetSearchFilterMaxAge(e){const h={maxAge:e};e<this.getChatSearchFilter.minAge&&(h.minAge=e),this.chatSetSearchFilterAges(h)},onDistanceChange(e){this.chatSetSearchFilterDistance(e),this.resetSearchResult(),this.postSearch()},onProfileClicked(e){N.featureProfileDetailView&&(this.chatSetSelectedProfileId(this.getChatProfiles[e].id),this.$router.push("/profileDetail"))},onProfilePageInput(e){this.chatSetProfilesPageNumberSelected(e)},onProfilePageChange(e){this.chatSetSearchFilterQueryPage(e),this.postSearch()},onTabValueChange(e){this.userPrefenceSet({key:"chatSearchModeTab",value:e}),this[U]({fields:{user:{preferences:this.getUserPreferenceObject}},mutateStateAfterResponse:!1,token:this.getUserToken}),this.chatSetSearchFilterName(""),this.chatSetSearchFilterMode(e),this.resetSearchResult(),this.postSearch()},profileListStyles(){return this.getUserPreferenceChatSearchModeIsProfiles?this.$q.screen.gt.xs?this.profileListStyles_modeProfiles_gt_xs:this.profileListStyles_modeProfiles_xs:this.profileListStyles_modeNotProfiles},...x(["chatSetSelectedProfileId","chatSetSearchFilterAll","chatSetSearchFilterName","chatSetSearchFilterMode","chatSetSearchFilterToggleGender","chatSetSearchFilterDistance","chatSetSearchFilterAges","chatClearSearchByFilterResult","chatResetErrorlist","chatSetProfilesPageNumberSelected","chatSetSearchFilterQueryPage","chatClearProfileImagesFetchResult","chatProfileImagesResetErrorlist","userPrefenceSet","vcSetModeUseReceivedProfile"]),...H([M,E,G,U])},computed:{...w(["getActiveProfileUnreadMessagesCount","getChatProfiles","getChatSearchFilter","getChatSearchDistanceLabel","getChatSearchAgeMinLabel","getChatSearchAgeMaxLabel","getChatIsFetching","getChatSearchNothingFound","getChatErrorList","getUserToken","getUserSessionId","getChatPaginationMetaProfiles","getChatPaginatePageNumberSelected","getChatPaginationLastPage","getChatPageSliderLabel","getChatProfileImagesIsFetching","getChatProfileImagesErrorList","getUserPreferenceChatSearchMode","getUserPreferenceChatSearchModeIsProfiles","getUserPreferenceObject","getVCmodeUseReceivedProfile"])},mounted(){this.chatSetSelectedProfileId(null),this.getVCmodeUseReceivedProfile?this.vcSetModeUseReceivedProfile({modeUseReceivedProfile:!1}):(this.chatSetSearchFilterMode(this.getUserPreferenceChatSearchMode),this.resetSearchResult()),this.postSearch()},beforeUnmount(){this[E]()}},ae={class:"div-profiles"},re=["src"],le={key:2,style:{"margin-top":"150px","margin-left":"-26px"},class:"text-h6 q-mx-md text-blue-grey-8"},se={style:{width:"100%"}},oe={class:"row justify-start items-top bg-teal",style:{width:"100%","max-height":"170px"}},ie={class:"col-3 q-ma-sm q-pa-sm",style:{width:"170px"}},ne={key:2,class:"text-orange text-weight-bold",style:{"margin-top":"17px"}},he={key:0,class:"col-3",style:{"margin-top":"16px",width:"48px"}},ce={key:1,class:"col-3 q-pa-sm justify-end",style:{"margin-top":"20px","margin-left":"10px","margin-bottom":"-10px",width:"100px"}},ge={key:2,class:"text-orange text-weight-bold",style:{"margin-top":"17px"}};function me(e,h,de,ue,t,r){const T=V("error-row-card");return l(),n($,{padding:""},{default:s(()=>[m("div",ae,[e.getChatIsFetching?o("",!0):(l(),n(Y,{key:0,style:f(r.profileListStyles())},{default:s(()=>[(l(!0),g(D,null,Q(e.getChatProfiles,(i,v)=>(l(),g("div",{key:v},[q((l(),n(j,{clickable:"",onClick:Se=>r.onProfileClicked(v)},{default:s(()=>[a(p,{avatar:""},{default:s(()=>[a(X,{rounded:""},{default:s(()=>[m("img",{src:i.profile_image.filecontent},null,8,re)]),_:2},1024)]),_:2},1024),a(p,null,{default:s(()=>[a(P,null,{default:s(()=>[d(c(i.name),1)]),_:2},1024),a(P,{caption:""},{default:s(()=>[d(c(`${i.city} ${i.distance} km`),1)]),_:2},1024)]),_:2},1024),i.online?(l(),n(p,{key:0,side:"",top:""},{default:s(()=>[a(b,{color:"red",class:"q-mt-sm"},{default:s(()=>[d(c(e.$t("profile_onlineStatus_online")),1)]),_:1})]),_:1})):o("",!0),a(p,{side:"",top:"",style:{width:"44px"}},{default:s(()=>[i.is_contact?(l(),n(S,{key:0,name:t.attributeOptions.is_contact.icon,color:t.attributeOptions.is_contact.color,class:"q-mr-sm"},null,8,["name","color"])):o("",!0),i.relation_unread_messages_count?(l(),n(b,{key:1,color:"red",class:"q-mt-sm"},{default:s(()=>[a(S,{name:"email",color:"white",class:"q-mr-xs"}),d(" "+c(i.relation_unread_messages_count),1)]),_:2},1024)):o("",!0)]),_:2},1024),a(p,{side:"",top:""},{default:s(()=>[a(S,{name:t.attributeOptions[i.gender_male_female_diverse_null].icon,color:t.attributeOptions[i.gender_male_female_diverse_null].color},null,8,["name","color"]),a(P,{caption:"",class:"q-mt-xs"},{default:s(()=>[d(c(`(${i.ageYears})`),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[B]]),a(W,{inset:""})]))),128))]),_:1},8,["style"])),e.getChatIsFetching?(l(),n(z,{key:1,height:"480px",style:f(r.profileListStyles())},null,8,["style"])):o("",!0),e.getChatSearchNothingFound?(l(),g("div",le,c(t.m("app_search_message_no_recordnames_found",{recordname:t.searchModeOptions.recordName[e.getUserPreferenceChatSearchMode]})),1)):o("",!0),a(T,{errorList:e.getChatErrorList},null,8,["errorList"]),a(J,{expand:"",position:"top"},{default:s(()=>[m("div",se,[a(Z,{"model-value":e.getUserPreferenceChatSearchMode,"no-caps":"","inline-label":"",align:"left",class:"bg-cyan-8 text-white shadow-2",breakpoint:0,"onUpdate:modelValue":r.onTabValueChange},{default:s(()=>[a(_,{name:"profiles",label:e.$t("chat_tab_profiles"),icon:t.attributeOptions.profiles.icon},null,8,["label","icon"]),a(_,{name:"contacts",label:e.$t("chat_tab_contacts"),icon:t.attributeOptions.is_contact.icon},null,8,["label","icon"]),a(_,{name:"messages",label:e.$t("chat_tab_messages"),icon:t.attributeOptions.messages.icon},{default:s(()=>[e.getActiveProfileUnreadMessagesCount?(l(),n(b,{key:0,style:{"margin-top":"1px"},color:"red",floating:""},{default:s(()=>[d(c(e.getActiveProfileUnreadMessagesCount),1)]),_:1})):o("",!0)]),_:1},8,["label","icon"])]),_:1},8,["model-value","onUpdate:modelValue"])]),m("div",oe,[m("div",ie,[a(O,{borderless:"","model-value":e.getChatSearchFilter.name,style:{width:"170px"},"input-style":{color:"white"},placeholder:e.$t("app_placeholder_typeToStartSearching"),hint:e.getChatSearchFilter.name.length&&e.getChatSearchFilter.name.length<t.CHAT_SEARCH_NAME_LENGTH_MIN?t.m("chat_field_searchName_hint",{min:t.CHAT_SEARCH_NAME_LENGTH_MIN}):"","onUpdate:modelValue":r.onNameSearchInput},{append:s(()=>[e.getChatSearchFilter.name!==""?(l(),n(S,{key:0,name:"close",color:"blue-grey-8",onClick:r.onNameSearchClear,class:"cursor-pointer"},null,8,["onClick"])):o("",!0),a(S,{name:"search",color:"blue-grey-2"})]),_:1},8,["model-value","placeholder","hint","onUpdate:modelValue"]),e.getUserPreferenceChatSearchModeIsProfiles?(l(),n(C,{key:0,class:"gender-toggle",style:{"margin-left":"-14px","margin-top":"0px"},"model-value":e.getChatSearchFilter.all,"onUpdate:modelValue":r.onFilterAllToggle,label:e.$t("app_search_label_Show_all"),color:"blue-grey-8","checked-icon":"check","unchecked-icon":"clear"},null,8,["model-value","onUpdate:modelValue","label"])):o("",!0),e.getChatPaginationLastPage>1&&e.getUserPreferenceChatSearchModeIsProfiles?(l(),n(u,{key:1,class:"xs",style:{"margin-left":"10px","margin-top":"34px","margin-bottom":"-12px"},"model-value":e.getChatPaginatePageNumberSelected,"onUpdate:modelValue":r.onProfilePageInput,onChange:r.onProfilePageChange,min:1,max:e.getChatPaginationLastPage,step:1,label:"","label-value":e.getChatPageSliderLabel,"label-always":"",color:"orange"},null,8,["model-value","onUpdate:modelValue","onChange","max","label-value"])):o("",!0),!e.getChatIsFetching&&e.getChatPaginationLastPage<=1&&!t.nameSearchIsBouncing&&e.getChatProfiles.length&&e.getUserPreferenceChatSearchModeIsProfiles&&!e.$q.screen.gt.xs?(l(),g("div",ne,c(t.m("app_search_message_number_found",{count:e.getChatProfiles.length})),1)):o("",!0)]),e.getUserPreferenceChatSearchModeIsProfiles?(l(),g("div",he,[a(C,{class:"gender-toggle","model-value":e.getChatSearchFilter.genders.male,"onUpdate:modelValue":h[0]||(h[0]=i=>r.onGenderToggle("male")),icon:t.attributeOptions.male.icon,color:t.attributeOptions.male.color},null,8,["model-value","icon","color"]),a(C,{class:"gender-toggle","model-value":e.getChatSearchFilter.genders.female,"onUpdate:modelValue":h[1]||(h[1]=i=>r.onGenderToggle("female")),icon:t.attributeOptions.female.icon,color:t.attributeOptions.female.color},null,8,["model-value","icon","color"]),a(C,{class:"gender-toggle","model-value":e.getChatSearchFilter.genders.diverse,"onUpdate:modelValue":h[2]||(h[2]=i=>r.onGenderToggle("diverse")),icon:t.attributeOptions.diverse.icon,color:t.attributeOptions.diverse.color},null,8,["model-value","icon","color"])])):o("",!0),e.getUserPreferenceChatSearchModeIsProfiles?(l(),g("div",ce,[a(u,{"model-value":e.getChatSearchFilter.minAge,"onUpdate:modelValue":r.chatSetSearchFilterMinAge,onChange:r.onAgeChange,min:t.CHAT_SEARCH_AGE_MIN,max:t.CHAT_SEARCH_AGE_MAX,step:1,label:"","label-value":e.getChatSearchAgeMinLabel,"label-always":"",color:"blue-grey-8",style:{"margin-bottom":"12px"}},null,8,["model-value","onUpdate:modelValue","onChange","min","max","label-value"]),a(u,{"model-value":e.getChatSearchFilter.maxAge,"onUpdate:modelValue":r.chatSetSearchFilterMaxAge,onChange:r.onAgeChange,min:t.CHAT_SEARCH_AGE_MIN,max:t.CHAT_SEARCH_AGE_MAX,step:1,label:"","label-value":e.getChatSearchAgeMaxLabel,"label-always":"",color:"blue-grey-8"},null,8,["model-value","onUpdate:modelValue","onChange","min","max","label-value"]),a(u,{class:"xs","model-value":e.getChatSearchFilter.distance,"onUpdate:modelValue":e.chatSetSearchFilterDistance,onChange:r.onDistanceChange,min:0,max:t.CHAT_SEARCH_DISTANCE_MAX_KM,step:10,label:"","label-value":e.getChatSearchDistanceLabel,"label-always":"",color:"blue-grey-8",style:{"margin-top":"12px"}},null,8,["model-value","onUpdate:modelValue","onChange","max","label-value"])])):o("",!0),m("div",{class:"col-3 q-pa-sm",style:f(e.getUserPreferenceChatSearchModeIsProfiles?"margin-top:20px; margin-left: 10px; margin-bottom:-10px; width:100px":"margin-top:30px; margin-left: 20px; margin-bottom:-10px; width:100px")},[e.getUserPreferenceChatSearchModeIsProfiles&&e.$q.screen.gt.xs?(l(),n(u,{key:0,"model-value":e.getChatSearchFilter.distance,"onUpdate:modelValue":e.chatSetSearchFilterDistance,onChange:r.onDistanceChange,min:0,max:t.CHAT_SEARCH_DISTANCE_MAX_KM,step:10,label:"","label-value":e.getChatSearchDistanceLabel,"label-always":"",color:"blue-grey-8",style:{"margin-bottom":"12px"}},null,8,["model-value","onUpdate:modelValue","onChange","max","label-value"])):o("",!0),e.getChatPaginationLastPage>1&&(!e.getUserPreferenceChatSearchModeIsProfiles||e.$q.screen.gt.xs)?(l(),n(u,{key:1,"model-value":e.getChatPaginatePageNumberSelected,"onUpdate:modelValue":r.onProfilePageInput,onChange:r.onProfilePageChange,min:1,max:e.getChatPaginationLastPage,step:1,label:"","label-value":e.getChatPageSliderLabel,"label-always":"",color:"orange"},null,8,["model-value","onUpdate:modelValue","onChange","max","label-value"])):o("",!0),!e.getChatIsFetching&&e.getChatPaginationLastPage<=1&&!t.nameSearchIsBouncing&&e.getChatProfiles.length&&(!e.getUserPreferenceChatSearchModeIsProfiles||e.$q.screen.gt.xs)?(l(),g("div",ge,c(t.m("app_search_message_number_found",{count:e.getChatProfiles.length})),1)):o("",!0)],4)])]),_:1})])]),_:1})}var Ee=L(te,[["render",me],["__scopeId","data-v-b71408a6"]]);export{Ee as default};
