webpackJsonp([5],{r4T5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("T4f3"),r=a.n(i),s=a("aKwh"),o={name:"ShowcaseTabs",computed:Object(s.b)("showcase",["pageMeta"])},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pageMeta.tabs.length>0?a("q-tabs",{class:{"within-iframe-hide":!t.pageMeta.iframeTabs},style:"ios"===t.$q.theme?{background:"rgba(255,255,255,0.95"}:null,attrs:{inverted:"ios"===t.$q.theme}},t._l(t.pageMeta.tabs,function(e){return a("q-route-tab",{key:e.hash,attrs:{slot:"title",icon:e.icon,to:t.pageMeta.hash+"/"+e.hash,label:e.label,exact:"",replace:"",alert:void 0!==e.status},slot:"title"})})):t._e()},l=[];n._withStripped=!0;var c=a("xRi5"),u=Object(c.a)(o,n,l,!1,null,null,null);u.options.__file="src/components/showcase-tabs.vue";var m=u.exports,p=a("bR6b"),h={components:{ShowcaseTabs:m},data:function(){return{categories:p.a}},computed:r()({drawerState:{get:function(){return this.$store.state.showcase.drawerState},set:function(t){this.$store.commit("showcase/updateDrawerState",t)}}},Object(s.b)("showcase",["pageMeta"])),methods:{exitApp:function(){navigator&&navigator.device?navigator.device.exitApp():navigator&&navigator.app&&navigator.app.exitApp()},toggleFullscreen:function(){this.$q.fullscreen.toggle()},resetScroll:function(t,e){document.documentElement.scrollTop=0,document.body.scrollTop=0,e()}}},v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"Lhh lpr lFf"}},[a("q-layout-header",{attrs:{reveal:""}},[a("q-toolbar",{attrs:{inverted:"ios"===t.$q.theme}},[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",value:t.pageMeta.backRoute,expression:"pageMeta.backRoute",modifiers:{single:!0}}],staticClass:"cordova-only electron-only",attrs:{flat:"",round:"",dense:"",icon:"arrow_back","aria-label":"Go back"}}),t._v(" "),a("q-toolbar-title",[a("q-icon",{directives:[{name:"show",rawName:"v-show",value:t.pageMeta.icon,expression:"pageMeta.icon"}],staticStyle:{"font-size":"2rem","margin-right":"5px"},attrs:{name:t.pageMeta.icon}}),t._v("\n          "+t._s(t.pageMeta.title)+"\n        ")],1),t._v(" "),t.$q.platform.within.iframe?t._e():a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",dense:"",icon:"home"},on:{click:function(e){t.$router.replace("/")}}}),t._v(" "),a("q-btn",{staticClass:"within-iframe-hide",attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.drawerState=!t.drawerState}}})],1),t._v(" "),"mat"===t.$q.theme?a("showcase-tabs"):t._e()],1),t._v(" "),"ios"===t.$q.theme?a("q-layout-footer",{attrs:{reveal:""}},[a("showcase-tabs")],1):t._e(),t._v(" "),a("q-layout-drawer",{model:{value:t.drawerState,callback:function(e){t.drawerState=e},expression:"drawerState"}},[a("q-scroll-area",{class:"mat"===t.$q.theme?"bg-grey-3":null,staticStyle:{width:"100%",height:"100%"}},[a("div",{staticClass:"row flex-center bg-white",staticStyle:{height:"100px"}},[a("q-icon",{staticStyle:{"font-size":"54px"},attrs:{name:"library music",color:"primary"}}),t._v(" "),a("div",{staticClass:"caption q-ml-md"},[t._v("\n       Śpiewniki Chrześcijańskie\n          ")])],1),t._v(" "),a("q-list",{attrs:{"no-border":""}},[a("q-item",{attrs:{to:"/",exact:"",replace:""}},[a("q-item-side",{attrs:{icon:"home"}}),t._v(" "),a("q-item-main",{attrs:{label:"Strona główna"}})],1),t._v(" "),a("q-item-separator"),t._v(" "),t._l(t.categories,function(e){return[a("q-list-header",{key:"header-"+e.title},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),t._l(e.features,function(i){return a("q-item",{key:i.hash,attrs:{to:"/"+e.hash+"/"+i.hash,replace:!e.extract}},[a("q-item-side",{attrs:{icon:i.icon}}),t._v(" "),a("q-item-main",{attrs:{label:i.title}}),t._v(" "),i.status?a("q-item-side",{attrs:{right:""}},[a("q-chip",{attrs:{small:"",color:"secondary"}},[t._v(t._s(i.status))])],1):t._e()],1)}),t._v(" "),a("q-item-separator",{key:"separator-"+e.title})]}),t._v(" "),a("q-item",{nativeOn:{click:function(e){t.exitApp()}}},[a("q-item-side",[a("q-item-tile",{attrs:{icon:"exit to app"}})],1),t._v(" "),a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("Zamknij")])],1)],1)],2)],1)],1),t._v(" "),a("q-page-container",[a("router-view")],1)],1)},d=[];v._withStripped=!0;var _=Object(c.a)(h,v,d,!1,null,null,null);_.options.__file="src/layouts/default.vue";e.default=_.exports}});