(self["webpackChunkbase"]=self["webpackChunkbase"]||[]).push([[302],{7982:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>F});r(71);var s=r(3673),l=r(8880),o=r(2323);const i=(0,s.HX)("data-v-3d8b3056");(0,s.dD)("data-v-3d8b3056");const t={class:"row q-mb-md"},n={class:"text-body2"},m={class:"row q-mb-md"},d={class:"row q-mb-md"},p={class:"row"},u={key:0};(0,s.Cn)();const c=i(((e,a,r,c,g,b)=>{const _=(0,s.up)("q-icon"),f=(0,s.up)("q-banner"),h=(0,s.up)("q-chip"),w=(0,s.up)("q-input"),k=(0,s.up)("q-space"),C=(0,s.up)("q-btn"),y=(0,s.up)("message-row-card"),v=(0,s.up)("error-row-card"),W=(0,s.up)("q-card"),U=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(U,{padding:""},{default:i((()=>[(0,s.Wm)(W,{class:"login-card"},{default:i((()=>[(0,s.Wm)("form",{onSubmit:a[5]||(a[5]=(0,l.iM)(((...e)=>b.submitForm&&b.submitForm(...e)),["prevent"]))},[(0,s.Wm)("div",t,[(0,s.Wm)(f,{class:"bg-grey-3 col"},{avatar:i((()=>[(0,s.Wm)(_,{name:"account_circle",color:"primary"})])),default:i((()=>[(0,s.Uk)(" "+(0,o.zw)(e.$t("app_log_dialog_Title")),1)])),_:1})]),(0,s.Wm)("div",{"v-if":g.settings.featureDemo,class:"row q-mb-md"},[(0,s.Wm)("div",n,[(0,s.Uk)((0,o.zw)(e.$t("app_log_demouser_label"))+" ",1),((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(g.demoUser,(e=>((0,s.wg)(),(0,s.j4)(h,{key:e,clickable:"",color:"blue-2",onClick:a=>b.onDemoNameClicked(e)},{default:i((()=>[(0,s.Uk)((0,o.zw)(e),1)])),_:2},1032,["onClick"])))),128))])],8,["v-if"]),(0,s.Wm)("div",m,[(0,s.Wm)(w,{modelValue:g.formData.email,"onUpdate:modelValue":a[1]||(a[1]=e=>g.formData.email=e),onKeyup:b.onChangeFormData,autofocus:"",rules:[a=>g.isValidEmailAddress(a)||e.$t("app_log_err_email_invalid")],ref:"email","lazy-rules":"",outlined:"",class:"col",label:e.$t("app_log_label_Email"),"stack-label":""},{prepend:i((()=>[(0,s.Wm)(_,{name:"email"})])),_:1},8,["modelValue","onKeyup","rules","label"])]),(0,s.Wm)("div",d,[(0,s.Wm)(w,{modelValue:g.formData.password,"onUpdate:modelValue":a[3]||(a[3]=e=>g.formData.password=e),onKeyup:b.onChangeFormData,rules:[a=>a.length>=6||e.$t("app_log_err_enter_minNumOfChars",{numOfChars:6})],ref:"password","lazy-rules":"",type:g.passwordVisible?"text":"password",outlined:"",class:"col",label:e.$t("app_log_label_Password"),"stack-label":""},{prepend:i((()=>[(0,s.Wm)(_,{name:"lock"})])),append:i((()=>[(0,s.Wm)(_,{name:g.passwordVisible?"visibility":"visibility_off",class:"cursor-pointer",onClick:a[2]||(a[2]=e=>g.passwordVisible=!g.passwordVisible)},null,8,["name"])])),_:1},8,["modelValue","onKeyup","rules","type","label"])]),(0,s.Wm)("div",p,[g.settings.featureResetPassword?((0,s.wg)(),(0,s.j4)("div",u,[(0,s.Wm)("a",{onClick:a[4]||(a[4]=a=>e.$router.push("/requestTemporaryPassword")),class:"cursor-pointer"},(0,o.zw)(e.$t("app_log_link_Forgot_password")),1)])):(0,s.ry)("",!0),(0,s.Wm)(k),e.getUserUnconfirmedUserId?((0,s.wg)(),(0,s.j4)(C,{key:1,style:{"margin-right":"10px"},label:e.$t("app_log_label_Resend_Confirmation_Email"),onClick:b.resendConfirmationEmail},null,8,["label","onClick"])):(0,s.ry)("",!0),(0,s.Wm)(C,{color:"primary",label:e.$t("app_log_label_Login"),type:"submit"},null,8,["label"])]),(0,s.Wm)(y,{messageList:e.getUserMessageList},null,8,["messageList"]),(0,s.Wm)(v,{errorList:e.getErrorlist},null,8,["errorList"])],32)])),_:1})])),_:1})}));var g=r(515),b=r.n(g),_=(r(5363),r(7874)),f=r(816),h=r(3976),w=r(7476),k=r(6630),C=r(7816),y=r(2920);const v={components:{"message-row-card":h.Z,"error-row-card":f.Z},data(){return{formData:{email:"",password:""},passwordVisible:!1,isValidEmailAddress:C.X,settings:y.Z,demoUser:["Anna Kournikova","Boris Becker","Michael Jackson","Natalie Coughlin","Serena Williams"]}},methods:b()(b()(b()({submitForm(e=!1){e||(this.$refs.email.validate(),this.$refs.password.validate()),(e||!this.$refs.email.hasError&&!this.$refs.password.hasError)&&this[k.kC](b()(b()({},this.formData),{},{router:this.$router,redirectTo:this.$route.query.redirect}))}},(0,_.nv)(["userBackendCallInitialize"])),(0,w.$R)([k.kC,k.Ti])),{},{onChangeFormData(){this.getErrorlist.length&&this.userBackendCallInitialize()},onDemoNameClicked(e){this.formData.email=`${e.replace(" ","")}@example.com`,this.formData.password="!123456!",this.submitForm(!0)},resendConfirmationEmail(){this[k.Ti]({unconfirmedUserId:this.getUserUnconfirmedUserId})}}),computed:b()({},(0,_.Se)(["getErrorlist","getUserMessageList","getUserUnconfirmedUserId"])),mounted(){console.log("mounted: this:"),console.log(this)},created(){this.userBackendCallInitialize({excludeErrorGroupsArray:["displayOnNextPageLoad"]})}};var W=r(4379),U=r(151),$=r(5607),D=r(4554),q=r(7030),V=r(4842),E=r(2025),Z=r(8240),I=r(7518),z=r.n(I);v.render=c,v.__scopeId="data-v-3d8b3056";const F=v;z()(v,"components",{QPage:W.Z,QCard:U.Z,QBanner:$.Z,QIcon:D.Z,QChip:q.Z,QInput:V.Z,QSpace:E.Z,QBtn:Z.Z})}}]);