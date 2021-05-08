(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{544:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"WindowsSetup",data:function(){return{step:1}}}),o=n(76),v=n(136),c=n.n(v),d=n(223),l=n(197),_=n(114),m=n(520),h=n(203),w=n(198),C=n(164),f=n(521),V=n(522),k=n(523),x=n(519),y=n(524),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-card",{staticClass:"mt-3 pb-3",attrs:{width:"1000"}},[n("v-card-title",{staticClass:"text-h5"},[n("v-icon",[t._v("mdi-microsoft-windows")]),t._v("\n        Windows Setup\n      ")],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"subtitle-1 text-center mb-3"},[t._v("\n          Additional steps after installing are required to get it working properly on Windows:\n        ")]),t._v(" "),n("v-stepper",{attrs:{"non-linear":""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{editable:"",step:"1"}},[t._v("Recording devices")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{editable:"",step:"2"}},[t._v("Enable microphone")]),t._v(" "),n("v-divider"),t._v(" "),n("v-stepper-step",{attrs:{editable:"",step:"3"}},[t._v("\n              Improve quality\n              "),n("small",[t._v("Optional")])]),t._v(" "),n("v-stepper-step",{attrs:{editable:"",step:"4"}},[t._v("Select in Soundux")])],1),t._v(" "),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-3"},[n("v-card-text",[n("div",{staticClass:"mb-3"},[n("v-icon",{attrs:{left:""}},[t._v("mdi-microphone-settings")]),t._v("\n                    Open the recording devices screen\n                  ")],1),t._v(" "),n("v-img",{attrs:{src:"/screenshots/windows-recording-devices.png",contain:"",height:"455",alt:"Recording devices"}})],1)],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.step=2}}},[t._v("Continue")])],1),t._v(" "),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-3"},[n("v-card-text",[n("div",{staticClass:"mb-3"},[n("v-icon",{attrs:{left:""}},[t._v("mdi-ear-hearing")]),t._v("\n                    Open the properties of your mic, enable "),n("kbd",[t._v("Listen to this device")]),t._v(" and select\n                    "),n("kbd",[t._v("CABLE Input")]),t._v(" under "),n("kbd",[t._v("Playback through this device")])],1),t._v(" "),n("v-img",{attrs:{src:"/screenshots/windows-mic-properties.png",contain:"",height:"455",alt:"Mic properties"}})],1)],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.step=3}}},[t._v("Continue")])],1),t._v(" "),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-3"},[n("v-card-text",[n("div",{staticClass:"mb-3"},[n("v-icon",{attrs:{left:""}},[t._v("mdi-quality-high")]),t._v("\n                    For better audio quality open the properties of the "),n("kbd",[t._v("CABLE Output")]),t._v(" and set\n                    the sample rate to the same as your microphone\n                  ")],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-img",{attrs:{src:"/screenshots/windows-sample-rate.png",contain:"",width:"455",alt:"Sample rate"}})],1)],1)],1)],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.step=4}}},[t._v("Continue")])],1),t._v(" "),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card",{staticClass:"mb-3"},[n("v-card-text",[n("div",{staticClass:"mb-3"},[n("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-down-drop-circle")]),t._v("\n                    In Soundux select "),n("kbd",[t._v("CABLE Input")]),t._v(" in the top right selection\n                  ")],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-img",{attrs:{src:"/screenshots/windows-selection.png",contain:"",width:"350",alt:"Selection"}})],1)],1)],1)],1),t._v(" "),n("v-btn",{attrs:{disabled:!0}},[t._v("Finished")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:l.a,VCardText:_.b,VCardTitle:_.c,VCol:m.a,VDivider:h.a,VIcon:w.a,VImg:C.a,VRow:f.a,VStepper:V.a,VStepperContent:k.a,VStepperHeader:x.a,VStepperItems:x.b,VStepperStep:y.a})}}]);