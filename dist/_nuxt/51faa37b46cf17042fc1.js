(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(t,e,o){var content=o(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("bdba3f0c",content,!0,{sourceMap:!1})},199:function(t,e,o){var content=o(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("7368116d",content,!0,{sourceMap:!1})},204:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},205:function(t,e,o){"use strict";var n=o(198);o.n(n).a},206:function(t,e,o){var n=o(19),r=o(204),c=o(207);e=n(!1);var d=r(c);e.push([t.i,".post-preview[data-v-4a04a8ca]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}a[data-v-4a04a8ca]{text-decoration:none;color:#000}@media (min-width:850px){.post-preview[data-v-4a04a8ca]{width:400px;margin:10px}}.post-thumbnail[data-v-4a04a8ca]{width:100%;height:200px;background-position:50%;background-size:cover;background-image:url("+d+")}.post-content[data-v-4a04a8ca]{padding:10px;text-align:center}a:active .post-content[data-v-4a04a8ca],a:hover .post-content[data-v-4a04a8ca]{background-color:#ccc}",""]),t.exports=e},207:function(t,e,o){t.exports=o.p+"img/f94bbfe.jpg"},208:function(t,e,o){"use strict";var n=o(199);o.n(n).a},209:function(t,e,o){(e=o(19)(!1)).push([t.i,".featured-posts[data-v-e118a88c]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=e},212:function(t,e,o){"use strict";var n={name:"PostPreview",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},previewText:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postlink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},r=(o(205),o(8)),c={components:{PostPreview:Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{attrs:{to:t.postlink}},[o("article",{staticClass:"post-preview"},[o("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+")"}}),t._v(" "),o("div",{staticClass:"post-content"},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.previewText))])])])])}),[],!1,null,"4a04a8ca",null).exports},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!0}}},d=(o(208),Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"featured-posts"},t._l(t.posts,(function(e){return o("PostPreview",{key:e.id,attrs:{id:e.id,"is-admin":t.isAdmin,thumbnail:e.thumbnail,title:e.title,previewText:e.previewText}})})),1)}),[],!1,null,"e118a88c",null));e.a=d.exports},221:function(t,e,o){var content=o(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("541bfc6f",content,!0,{sourceMap:!1})},238:function(t,e,o){"use strict";var n=o(221);o.n(n).a},239:function(t,e,o){var n=o(19),r=o(204),c=o(240);e=n(!1);var d=r(c);e.push([t.i,".intro[data-v-635e2db6]{height:300px;position:relative;padding:30px;background-position:50%;background-size:cover;background-image:url("+d+")}.intro[data-v-635e2db6],.intro h1[data-v-635e2db6]{box-sizing:border-box}.intro h1[data-v-635e2db6]{position:absolute;top:10%;left:5%;width:90%;font-size:1.5rem;color:#000;background-color:#d3d3d3;padding:10px;border-radius:10px;box-shadow:3px 3px 3px #000;border:1px solid #000}@media (min-width:768px){.intro h1[data-v-635e2db6]{font-size:2rem}}",""]),t.exports=e},240:function(t,e,o){t.exports=o.p+"img/f94bbfe.jpg"},247:function(t,e,o){"use strict";o.r(e);var n={components:{PostList:o(212).a},computed:{loadedPosts:function(){return this.$store.getters.loadedPosts}}},r=(o(238),o(8)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page"},[this._m(0),this._v(" "),e("PostList",{attrs:{posts:this.loadedPosts}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"intro"},[e("h1",[this._v("Get the latest Tech News")])])}],!1,null,"635e2db6",null);e.default=component.exports}}]);