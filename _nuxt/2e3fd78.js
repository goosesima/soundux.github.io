(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{445:function(t,e,r){var content=r(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3ab84706",content,!0,{sourceMap:!1})},453:function(t,e,r){"use strict";r(445)},454:function(t,e,r){var n=r(15)(!1);n.push([t.i,".markdown-render,.markdown-render>*,.markdown-render>*>*{max-width:100%}",""]),t.exports=n},468:function(t,e,r){"use strict";r.r(e),r.d(e,"Options",(function(){return o.Options}));var n=r(1),o=r(444),l=r.n(o),d=n.a.extend({name:"VueMarkdown",props:{source:{type:String,required:!0},options:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{md:null}},computed:{content:function(){var t,e=this.source;return null===(t=this.md)||void 0===t?void 0:t.render(e)}},created:function(){this.md=new l.a(this.options)}}),c=(r(453),r(96)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"markdown-render",domProps:{innerHTML:t._s(t.content)}})}),[],!1,null,null,null);e.default=component.exports},542:function(t,e,r){"use strict";r.r(e);var n=r(62),o=r(20),l=(r(77),r(39),r(34),r(76),r(26),r(29),r(35),r(219),r(21),r(7),r(1).a.extend({name:"Download",data:function(){return{releases:[],oldToNewReleases:[],error:""}},computed:{downloadsPerRelease:function(){return this.oldToNewReleases.map((function(t){var e=t.assets.map((function(t){return t.download_count}));return e?e.reduce((function(a,b){return a+b})):0}))},releaseTags:function(){return this.oldToNewReleases.map((function(t){return t.tag_name}))},latestRelease:function(){return this.releases[0]},oldReleases:function(){return this.releases.slice(1,this.releases.length)},windowSetup:function(){if(this.latestRelease){var t=this.latestRelease.assets.find((function(t){return t.name.includes("windows-setup")}));if(t)return t.browser_download_url}return"https://github.com/Soundux/Soundux/releases/latest"},windowsPortable:function(){if(this.latestRelease){var t=this.latestRelease.assets.find((function(t){return t.name.includes("windows-portable")}));if(t)return t.browser_download_url}return"https://github.com/Soundux/Soundux/releases/latest"},debPackage:function(){if(this.latestRelease){var t=this.latestRelease.assets.find((function(t){return t.name.endsWith(".deb")}));if(t)return t.browser_download_url}return"https://github.com/Soundux/Soundux/releases/latest"},rpmPackage:function(){if(this.latestRelease){var t=this.latestRelease.assets.find((function(t){return t.name.endsWith(".rpm")}));if(t)return t.browser_download_url}return"https://github.com/Soundux/Soundux/releases/latest"}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/repos/Soundux/Soundux/releases");case 3:if(!(r=e.sent)){e.next=10;break}return e.next=7,r.json();case 7:t.releases=e.sent,t.releases=t.releases.filter((function(t){return!t.prerelease})),t.oldToNewReleases=Object(n.a)(t.releases).reverse();case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),t.error=e.t0.message;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}})),d=r(96),c=r(135),v=r.n(c),f=r(549),_=r(218),h=r(192),m=r(113),w=r(448),x=r(198),y=r(193),S=r(195),k=r(126),R=r(73),C=r(449),V=r(540),j=r(437),D=r(547),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"mt-3 pb-3"},[r("v-card-title",[r("v-icon",{attrs:{left:""}},[t._v("mdi-download")]),t._v("\n        Download Soundux now\n      ")],1),t._v(" "),r("v-card-text",[r("v-alert",{attrs:{value:!!t.error,text:"",type:"error",elevation:"5",dense:"",transition:"scale-transition"}},[r("h3",{staticClass:"text-h5"},[t._v("Failed to fetch information from GitHub")]),t._v(" "),r("div",[t._v("\n            "+t._s(t.error)+"\n          ")]),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-spacer"),t._v(" "),r("v-col",{staticClass:"shrink"},[r("v-btn",{attrs:{color:"orange darken-3",href:"https://github.com/Soundux/Soundux/releases",target:"_blank"}},[t._v("\n                Visit our GitHub\n              ")])],1),t._v(" "),r("v-spacer")],1)],1),t._v(" "),t.latestRelease?[r("span",{staticClass:"text-h6"},[t._v("Latest version: "+t._s(t.latestRelease.tag_name))]),t._v(" "),r("br"),t._v(" "),r("span",[t._v("Released "+t._s(new Date(t.latestRelease.published_at).toLocaleString()))])]:r("v-skeleton-loader",{attrs:{type:"article, actions"}}),t._v(" "),t.$store.getters.selectedOS?["macOS"===t.$store.getters.selectedOS.name?r("div",{staticClass:"mt-5"},[t._v("\n            Soundux is currently not supported on your operating system\n          ")]):r("div",{staticClass:"mt-5"},[t._v("\n            Soundux is offered as different flavors for your operating system.\n          ")]),t._v(" "),r("div",[t._v("If we have detected the wrong operating system just change it on the top right.")]),t._v(" "),r("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},["Windows"===t.$store.getters.selectedOS.name?[r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary","x-large":"",href:t.windowSetup,width:"250"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-wizard-hat")]),t._v(" "),r("div",[t._v("Download Setup")])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary","x-large":"",href:t.windowsPortable,width:"250"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-briefcase-outline")]),t._v(" "),r("div",[t._v("Download Portable")])],1)],1),t._v(" "),r("v-alert",{staticClass:"text-center mt-3 mx-4",attrs:{type:"info",dense:""}},[t._v("\n                We highly recommend you downloading the Setup as it automatically downloads and\n                installs the required dependencies (WebView2 Runtime and VB-Cable).\n              ")]),t._v(" "),r("v-alert",{staticClass:"mx-5",attrs:{outlined:"",color:"warning",elevation:"5",dense:"",transition:"scale-transition"}},[r("h3",{staticClass:"text-h5"},[t._v("Important!")]),t._v(" "),r("div",[t._v("\n                  Please click the button below for important information about Windows support\n                ")]),t._v(" "),r("v-row",{staticClass:"my-2",attrs:{align:"center"}},[r("v-spacer"),t._v(" "),r("v-col",{staticClass:"shrink"},[r("v-btn",{attrs:{color:"red",nuxt:"",to:"/windows-setup"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-right")]),t._v("\n                      Additional Setup steps\n                      "),r("v-icon",{attrs:{right:""}},[t._v("mdi-alert")])],1)],1),t._v(" "),r("v-spacer")],1)],1)]:"macOS"===t.$store.getters.selectedOS.name?[r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{staticClass:"text-none",attrs:{disabled:!0,color:"primary","x-large":""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-download")]),t._v(" "),r("div",[t._v("Download for macOS"),r("br"),t._v("(coming soon™)")])],1)],1)]:[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"auto"}},[r("v-row",{attrs:{justify:"center","no-gutters":"",dense:""}},[r("a",{attrs:{href:"https://flathub.org/apps/details/io.github.Soundux",target:"_blank"}},[r("img",{attrs:{width:"240",alt:"Download on Flathub",src:"https://flathub.org/assets/badges/flathub-badge"+(t.$vuetify.theme.dark?"":"-i")+"-en.png"}})])]),t._v(" "),r("v-row",{attrs:{justify:"center",dense:""}},[t._v("For all distros with Flatpak support")])],1),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-row",{attrs:{justify:"center","align-content":"center",align:"center","no-gutters":"",dense:""}},[r("a",{attrs:{href:"https://snapcraft.io/soundux",target:"_blank"}},[r("img",{attrs:{height:"80",alt:"Get it from the Snap Store",src:"https://snapcraft.io/static/images/badges/en/snap-store-"+(t.$vuetify.theme.dark?"black":"white")+".svg"}})])]),t._v(" "),r("v-row",{attrs:{justify:"center",dense:""}},[t._v("For all distros with Snap support")])],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"auto"}},[r("v-row",{attrs:{justify:"center","no-gutters":"",dense:""}},[r("v-btn",{attrs:{color:"primary","x-large":"",href:"https://aur.archlinux.org/packages/soundux/",target:"_blank"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-arch")]),t._v(" "),r("div",[t._v("Download AUR")])],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",dense:""}},[t._v("For Arch Linux")])],1),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-row",{attrs:{justify:"center","no-gutters":"",dense:""}},[r("v-btn",{attrs:{color:"primary","x-large":"",href:t.debPackage}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-debian")]),t._v(" "),r("div",[t._v("Download DEB")])],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",dense:""}},[t._v("For Ubuntu 20.04+ / Debian sid")])],1),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-row",{attrs:{justify:"center","no-gutters":"",dense:""}},[r("v-btn",{attrs:{color:"primary","x-large":"",href:t.rpmPackage}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-fedora")]),t._v(" "),r("div",[t._v("Download RPM")])],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",dense:""}},[t._v("For Fedora 33+")])],1)],1)]],2)]:t._e(),t._v(" "),t.latestRelease?r("details",[r("summary",{staticClass:"text-h6 cursor-pointer mt-6",attrs:{role:"button"}},[t._v("Changelog")]),t._v(" "),r("RenderMarkdown",{attrs:{source:t.latestRelease.body,options:{html:!0}}})],1):t._e()],2)],1),t._v(" "),r("v-card",{staticClass:"mt-3 pb-3",attrs:{rounded:""}},[r("v-card-title",[r("v-icon",{attrs:{left:""}},[t._v("mdi-chart-line")]),t._v("\n        Downloads per version\n      ")],1),t._v(" "),r("v-card-text",[r("v-sparkline",{attrs:{value:t.downloadsPerRelease,gradient:["#f72047","#ffd200","#1feaea"],smooth:10,"line-width":2,"stroke-linecap":"round","auto-draw":"","show-labels":"",padding:15},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(t._s(t.releaseTags[e.index]))]}}])})],1)],1),t._v(" "),r("v-card",{staticClass:"mt-3 pb-3",attrs:{rounded:""}},[r("v-card-title",[r("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-down-bold-circle-outline")]),t._v("\n        Old versions\n      ")],1),t._v(" "),r("v-card-text",[t._v("\n        If you have problems with the latest version they might not occur in an old version. You can\n        try out older versions here:\n        "),t.oldReleases.length>0?r("v-list",{staticClass:"text-center"},t._l(t.oldReleases,(function(e){return r("v-list-item",{key:e.id},[r("v-list-item-content",[r("v-list-item-title",[r("a",{attrs:{href:e.html_url,target:"_blank"}},[t._v("Version "+t._s(e.tag_name))])]),t._v(" "),r("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("\n                Released "+t._s(new Date(e.published_at).toLocaleString())+"\n              ")])],1)],1)})),1):r("v-skeleton-loader",{attrs:{type:"list-item-two-line, list-item-two-line, list-item-two-line"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{RenderMarkdown:r(468).default}),v()(component,{VAlert:f.a,VBtn:_.a,VCard:h.a,VCardText:m.b,VCardTitle:m.c,VCol:w.a,VDivider:x.a,VIcon:y.a,VList:S.a,VListItem:k.a,VListItemContent:R.a,VListItemSubtitle:R.b,VListItemTitle:R.c,VRow:C.a,VSkeletonLoader:V.a,VSpacer:j.a,VSparkline:D.a})}}]);