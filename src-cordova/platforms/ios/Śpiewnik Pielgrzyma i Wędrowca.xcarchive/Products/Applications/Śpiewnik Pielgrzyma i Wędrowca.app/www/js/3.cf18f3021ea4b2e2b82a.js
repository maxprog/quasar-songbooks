webpackJsonp([3],{EIwa:function(t,a,n){(t.exports=n("lcwS")(!1)).push([t.i,"\n.page-showcase img {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 15px;\n}\n.page-showcase .showcase-top {\n  margin-bottom: 35px;\n}\n.page-showcase .showcase-top .q-alert {\n  max-width: 500px;\n}\n.page-showcase .card {\n  cursor: pointer;\n  position: relative;\n  padding: 16px;\n}\n.page-showcase .card .q-icon {\n  font-size: 56px;\n}\n.page-showcase .card p {\n  color: rgba(0,0,0,0.87);\n  margin: 15px 0 0 0 !important;\n}\n.page-showcase .card:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 2px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  background: currentColor;\n}\n.page-showcase .card:hover:before {\n  opacity: 0.4;\n}\n",""])},cvka:function(t,a,n){var s=n("EIwa");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n("X/Wc").default)("4baa040e",s,!1,{})},lNuB:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("T4f3"),e=n.n(s),o=n("bR6b"),i=n("aKwh"),c={data:function(){return{category:!1,hash:""}},computed:e()({list:function(){return this.category||[].concat(o.a[0].features,o.a[1])}},Object(i.b)("showcase",["pageMeta"])),methods:{show:function(t){if(this.link=t,t.features)return this.category=t.features,void(this.hash=t.hash);this.$router.push((t.tabs?t.parent_hash:this.hash)+"/"+t.hash)}}},r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("q-page",{staticClass:"page-showcase",attrs:{padding:""}},[n("div",{staticClass:"showcase-top text-center"},[n("p",{staticClass:"caption"},[t._v("\n  Witamy w aplikacji Śpiewniki\n      "),n("br")])]),t._v(" "),n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"row",staticStyle:{width:"850px","max-width":"90vw"}},t._l(t.list,function(a){return n("div",{key:a.hash,staticClass:"col-xs-6 col-sm-4 col-lg-3"},[n("div",{staticClass:"card text-center category-link text-primary",on:{click:function(n){t.show(a)}}},[n("q-icon",{attrs:{name:a.icon}}),t._v(" "),n("p",{staticClass:"caption"},[t._v(t._s(a.title))])],1)])}))]),t._v(" "),n("q-page-sticky",{directives:[{name:"show",rawName:"v-show",value:t.category,expression:"category"}],attrs:{position:"bottom-right",offset:[18,18]}},[n("q-btn",{staticClass:"animate-pop",attrs:{round:"",color:"secondary"},on:{click:function(a){t.category=!1}}},[n("q-icon",{attrs:{name:"ion-reply"}})],1)],1)],1)},p=[];r._withStripped=!0;var h=n("xRi5"),l=!1;var u=function(t){l||n("cvka")},d=Object(h.a)(c,r,p,!1,u,null,null);d.options.__file="src/pages/index.vue";a.default=d.exports}});