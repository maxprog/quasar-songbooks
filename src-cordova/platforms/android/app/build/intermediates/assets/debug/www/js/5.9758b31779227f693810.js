webpackJsonp([5],{r4T5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("T4f3"),i=a.n(r),s=a("aKwh"),o={name:"ShowcaseTabs",computed:Object(s.b)("showcase",["pageMeta"])},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.pageMeta.tabs.length>0?a("q-tabs",{class:{"within-iframe-hide":!e.pageMeta.iframeTabs},style:"ios"===e.$q.theme?{background:"rgba(255,255,255,0.95"}:null,attrs:{inverted:"ios"===e.$q.theme}},e._l(e.pageMeta.tabs,function(t){return a("q-route-tab",{key:t.hash,attrs:{slot:"title",icon:t.icon,to:e.pageMeta.hash+"/"+t.hash,label:t.label,exact:"",replace:"",alert:void 0!==t.status},slot:"title"})})):e._e()},l=[];n._withStripped=!0;var c=a("xRi5"),u=Object(c.a)(o,n,l,!1,null,null,null);u.options.__file="src/components/showcase-tabs.vue";var m=u.exports,h=a("bR6b"),d={components:{ShowcaseTabs:m},data:function(){return{categories:h.a}},computed:i()({drawerState:{get:function(){return this.$store.state.showcase.drawerState},set:function(e){this.$store.commit("showcase/updateDrawerState",e)}}},Object(s.b)("showcase",["pageMeta"])),methods:{toggleDroverState:function(){this.drawerState=!this.drawerState},exitApp:function(){navigator&&navigator.device?navigator.device.exitApp():navigator&&navigator.app&&navigator.app.exitApp()},toggleFullscreen:function(){this.$q.fullscreen.toggle()},resetScroll:function(e,t){document.documentElement.scrollTop=0,document.body.scrollTop=0,t()}}},p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"Lhh lpr lFf"}},[a("q-layout-header",{attrs:{reveal:""}},[a("q-toolbar",{attrs:{inverted:"ios"===e.$q.theme}},[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",value:e.pageMeta.backRoute,expression:"pageMeta.backRoute",modifiers:{single:!0}}],staticClass:"cordova-only electron-only",attrs:{flat:"",round:"",dense:"",icon:"arrow_back","aria-label":"Go back"}}),e._v(" "),a("q-toolbar-title",[a("q-icon",{directives:[{name:"show",rawName:"v-show",value:e.pageMeta.icon,expression:"pageMeta.icon"}],staticStyle:{"font-size":"2rem","margin-right":"5px"},attrs:{name:e.pageMeta.icon}}),e._v("\n         "+e._s(e.pageMeta.title)+"\n        ")],1),e._v(" "),e.$q.platform.within.iframe?e._e():a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",dense:"",icon:"home"},on:{click:function(t){e.$router.replace("/")}}}),e._v(" "),a("q-btn",{staticClass:"within-iframe-hide",attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.drawerState=!e.drawerState}}})],1),e._v(" "),"mat"===e.$q.theme?a("showcase-tabs"):e._e()],1),e._v(" "),"ios"===e.$q.theme?a("q-layout-footer",{attrs:{reveal:""}},[a("showcase-tabs")],1):e._e(),e._v(" "),a("q-layout-drawer",{directives:[{name:"show",rawName:"v-show",value:e.drawerState,expression:"drawerState"}],model:{value:e.drawerState,callback:function(t){e.drawerState=t},expression:"drawerState"}},[a("q-scroll-area",{class:"mat"===e.$q.theme?"bg-grey-3":null,staticStyle:{width:"100%",height:"100%"}},[a("div",{staticClass:"row flex-center bg-white",staticStyle:{height:"100px"}},[a("q-icon",{staticStyle:{"font-size":"54px"},attrs:{name:"ion-ios-musical-note",color:"primary"}}),e._v(" "),a("div",{staticClass:"caption q-ml-md"},[e._v("\n       Śpiewniki Chrześcijańskie\n"),a("br")])],1),e._v(" "),a("q-list",{attrs:{"no-border":""}},[a("q-item",{attrs:{to:"/",exact:"",replace:""},on:{click:function(t){e.drawerState=!e.drawerState}}},[a("q-item-side",{attrs:{icon:"home"}}),e._v(" "),a("q-item-main",{attrs:{label:"Strona główna"}})],1),e._v(" "),a("q-item-separator"),e._v(" "),e._l(e.categories,function(t){return[a("q-list-header",{key:"header-"+t.title},[e._v("\n              "+e._s(t.title)+"\n            ")]),e._v(" "),e._l(t.features,function(r){return a("q-item",{key:r.hash,attrs:{to:"/"+t.hash+"/"+r.hash,replace:!t.extract}},[a("q-item-side",{attrs:{icon:r.icon}}),e._v(" "),a("q-item-main",{attrs:{label:r.title}}),e._v(" "),r.status?a("q-item-side",{attrs:{right:""}},[a("q-chip",{attrs:{small:"",color:"secondary"}},[e._v(e._s(r.status))])],1):e._e()],1)}),e._v(" "),a("q-item-separator",{key:"separator-"+t.title})]}),e._v(" "),a("q-item",{nativeOn:{click:function(t){e.exitApp()}}},[a("q-item-side",[a("q-item-tile",{attrs:{icon:"ion-android-exit"}})],1),e._v(" "),a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[e._v("Zamknij")])],1)],1)],2)],1)],1),e._v(" "),a("q-page-container",[a("router-view")],1)],1)},v=[];p._withStripped=!0;var _=Object(c.a)(d,p,v,!1,null,null,null);_.options.__file="src/layouts/default.vue";t.default=_.exports}});