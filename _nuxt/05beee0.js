(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{442:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("21f7ded2",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n(442)},451:function(t,e,n){var o=n(9)(!1);o.push([t.i,"*[data-v-26f4a0d7]{margin:0;padding:0;box-sizing:border-box}.image-compare[data-v-26f4a0d7]{display:flex;align-items:center;justify-content:center;cursor:col-resize}.image-container[data-v-26f4a0d7]{position:absolute}.image-container.smooth[data-v-26f4a0d7]{transition:width .5s}.slider.smooth[data-v-26f4a0d7]{transition:left .5s}img[data-v-26f4a0d7]{-o-object-fit:cover;object-fit:cover;z-index:-100}.slider[data-v-26f4a0d7],img[data-v-26f4a0d7]{pointer-events:none}.slider[data-v-26f4a0d7]{position:absolute;top:0;left:50%;transform:translate(-50%);width:.25rem;background:grey;height:100%}",""]),t.exports=o},461:function(t,e,n){"use strict";n.r(e);n(38);var o=n(1).a.extend({name:"NeoImageCompare",props:{leftImgSrc:{type:String,required:!0},rightImgSrc:{type:String,required:!0},aspectRatio:{type:Object,required:!0}},data:function(){return{width:0,height:0,posX:0,dragActive:!1}},computed:{containerStyle:function(){return{position:"relative",width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},imageContainerBeforeStyle:function(){return{width:"".concat(this.posX,"px"),height:"".concat(this.height,"px"),overflow:"hidden"}},imageContainerAfterStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},imageStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},sliderStyle:function(){return{left:"".concat(this.posX,"px")}}},mounted:function(){var t=this,e=this.$refs.container;e.addEventListener("mouseenter",this.mouseEnter),e.addEventListener("mousemove",this.drag),e.addEventListener("mouseleave",this.mouseLeave),e.addEventListener("touchstart",this.touchStart),e.addEventListener("touchmove",this.touch),e.addEventListener("touchend",this.touchEnd),window.addEventListener("resize",this.onResize),window.setTimeout((function(){var e,n,o,r;t.width=(null===(r=null===(o=null===(n=null===(e=t.$el)||void 0===e?void 0:e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===r?void 0:r.clientWidth)||0,t.height=t.width/t.aspectRatio.width*t.aspectRatio.height,t.posX=t.width/2}),0)},beforeDestroy:function(){var t=this.$refs.container;t.removeEventListener("mouseenter",this.mouseEnter),t.removeEventListener("mousemove",this.drag),t.removeEventListener("mouseleave",this.mouseLeave),t.removeEventListener("touchstart",this.touchStart),t.removeEventListener("touchmove",this.touch),t.removeEventListener("touchend",this.touchEnd),window.removeEventListener("resize",this.onResize)},methods:{mouseEnter:function(){this.dragActive=!0},drag:function(t){this.posX=t.offsetX},mouseLeave:function(){this.posX=this.width/2,this.dragActive=!1},touchStart:function(){this.dragActive=!0},touchEnd:function(){this.posX=this.width/2,this.dragActive=!1},touch:function(t){var e,n;if(this.dragActive){t.preventDefault();var o=(null===(e=this.$el.querySelector(".slider"))||void 0===e?void 0:e.clientWidth)||0,r=(null===(n=this.$el.getBoundingClientRect())||void 0===n?void 0:n.left)||0;this.posX=t.touches[0].clientX-r+o/2}},onResize:function(){var t,e,n,o;this.width=(null===(o=null===(n=null===(e=null===(t=this.$el)||void 0===t?void 0:t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.clientWidth)||0,this.height=this.width/this.aspectRatio.width*this.aspectRatio.height,this.posX=this.width/2}}}),r=(n(450),n(89)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-compare"},[n("div",{ref:"container",style:t.containerStyle,attrs:{draggable:"true"}},[n("div",{staticClass:"image-container",style:t.imageContainerAfterStyle,attrs:{draggable:"true"}},[n("img",{style:t.imageStyle,attrs:{src:t.rightImgSrc,alt:"After"}})]),t._v(" "),n("div",{class:{smooth:!t.dragActive,"image-container":!0},style:t.imageContainerBeforeStyle,attrs:{draggable:"true"}},[n("img",{style:t.imageStyle,attrs:{src:t.leftImgSrc,alt:"Before"}})]),t._v(" "),n("div",{class:{smooth:!t.dragActive,slider:!0},style:t.sliderStyle,attrs:{draggable:"true"}})])])}),[],!1,null,"26f4a0d7",null);e.default=component.exports}}]);