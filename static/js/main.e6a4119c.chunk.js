(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{151:function(e,t,n){e.exports=n(246)},242:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),u=n(10),i=n(145),o=n.n(i),s=n(24),l=n(49),p=n(19),m=n(25),g=n(149),f=n(110),d={previewImageSrc:void 0,isLoading:!1,sharedImage:void 0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PREVIEW_IMAGE_SRC":var n=t.previewImageSrc;return Object(p.a)({},e,{previewImageSrc:n,sharedImage:void 0});case"SET_IS_LOADING":var r=t.isLoading;return Object(p.a)({},e,{isLoading:r});case"SET_SHARED_IMAGE":var a=t.sharedImage;return Object(p.a)({},e,{sharedImage:a});default:return e}},h=function(e){return e.previewReducer.previewImageSrc},b=function(e){return e.previewReducer.sharedImage},E=function(e){return e.previewReducer.isLoading},O=n(109),w={gallery:[],page:1,pageSize:10,lastLoadedPageNumber:0,isLoading:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GALLERY":var n=t.gallery;return Object(p.a)({},e,{gallery:[].concat(Object(O.a)(e.gallery),Object(O.a)(n))});case"SET_PAGE":var r=t.page;return Object(p.a)({},e,{page:r});case"SET_LAST_LOADED_PAGE":var a=t.lastLoadedPageNumber;return Object(p.a)({},e,{lastLoadedPageNumber:a});case"SET_GALLERY_IS_LOADING":var c=t.isLoading;return Object(p.a)({},e,{isLoading:c});default:return e}},j=function(e){var t=e.galleryReducer,n=t.page,r=t.pageSize;return e.galleryReducer.gallery.slice((n-1)*r,n*r)},x=function(e){return e.galleryReducer.gallery.length},y=function(e){return e.galleryReducer.page},S=function(e){return e.galleryReducer.pageSize},L=function(e){return e.galleryReducer.lastLoadedPageNumber},k=function(e){return e.galleryReducer.isLoading},_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,A=n(5),R=n.n(A),G=n(8),T=n(26),C=function(e){return!(!e||!e.success)},D=function(e){var t=new FileReader;return new Promise((function(n,r){t.onerror=function(){t.abort(),r(new DOMException("Error reading file."))},t.onload=function(){n(t.result)},t.readAsDataURL(e)}))},P=function(e){for(var t=e.data,n={red:0,green:0,blue:0},r=0;r<t.length;r+=4)n.red+=t[r],n.green+=t[r+1],n.blue+=t[r+2];var a=e.width*e.height;return{red:n.red/a,green:n.green/a,blue:n.blue/a}},M=function(){var e=Object(T.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new Image;n.crossOrigin="Anonymous",n.src=t,n.onload=function(){e(n)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){return{type:"SET_PREVIEW_IMAGE_SRC",previewImageSrc:e}},U=function(e){return{type:"SET_IS_LOADING",isLoading:e}},H=n(14);!function(e){e.home="/",e.selectImage="/select-image",e.upload="/upload",e.preview="/preview"}(r||(r={}));var Y=R.a.mark(F),z=R.a.mark(J);function F(e){var t,n;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.image,a.next=4,Object(G.a)(D,t);case 4:if(!(n=a.sent)){a.next=10;break}return a.next=8,Object(G.c)(N(n));case 8:return a.next=10,Object(G.c)(Object(H.d)(r.preview));case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.error(a.t0.message);case 15:case"end":return a.stop()}}),Y,null,[[0,12]])}function J(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)("UPLOAD_IMAGE",F);case 2:case"end":return e.stop()}}),z)}var V=J,W=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var r,a,c,u=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:{},a=u.length>3&&void 0!==u[3]?u[3]:null,e.next=4,fetch(t,{method:n,body:a?JSON.stringify(a):null,headers:Object(p.a)({"Content-Type":"application/json",Authorization:"Client-ID c525fc8bfedf07e"},r)});case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X="https://api.imgur.com/3",B=function(){var e=Object(T.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("".concat(X,"/gallery/r/aww/time/all/").concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(T.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("".concat(X,"/image"),"POST",{},{image:t,type:"jpg"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=R.a.mark(Z),Q=R.a.mark($);function Z(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(G.c)(U(!0));case 3:return n.next=5,Object(G.a)(K,e.base64Image);case 5:if(t=n.sent,!C(t)){n.next=9;break}return n.next=9,Object(G.c)({type:"SET_SHARED_IMAGE",sharedImage:t.data});case 9:return n.next=11,Object(G.c)(U(!1));case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0.message);case 16:case"end":return n.stop()}}),q,null,[[0,13]])}function $(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)("SHARE_IMAGE",Z);case 2:case"end":return e.stop()}}),Q)}var ee=$,te=function(e){return{type:"SET_GALLERY",gallery:e}},ne=function(){return{type:"FETCH_GALLERY"}},re=function(e){return{type:"SET_GALLERY_IS_LOADING",isLoading:e}},ae=R.a.mark(oe),ce=R.a.mark(se),ue=R.a.mark(le),ie=R.a.mark(pe);function oe(){var e,t,n,r;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(G.c)(re(!0));case 3:return a.next=5,Object(G.d)(L);case 5:return e=a.sent,t=e+1,a.next=9,Object(G.a)(B,t);case 9:if(n=a.sent,!C(n)){a.next=18;break}return a.next=13,Object(G.c)({type:"SET_LAST_LOADED_PAGE",lastLoadedPageNumber:t});case 13:return r=n.data.filter((function(e){return!e.animated})),a.next=16,Object(G.c)(te(r));case 16:return a.next=18,Object(G.c)(re(!1));case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(0),console.error(a.t0.message);case 23:case"end":return a.stop()}}),ae,null,[[0,20]])}function se(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(G.c)(N(e.imageUrl));case 3:return t.next=5,Object(G.c)(Object(H.d)(r.preview));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),ce,null,[[0,7]])}function le(e){var t,n,r;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.page,a.next=4,Object(G.d)(x);case 4:return n=a.sent,a.next=7,Object(G.d)(S);case 7:if(r=a.sent,!(n<=t*r)){a.next=11;break}return a.next=11,Object(G.c)({type:"FETCH_GALLERY"});case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.error(a.t0.message);case 16:case"end":return a.stop()}}),ue,null,[[0,13]])}function pe(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)("FETCH_GALLERY",oe);case 2:return e.next=4,Object(G.e)("SELECT_IMAGE",se);case 4:return e.next=6,Object(G.e)("SET_PAGE",le);case 6:case"end":return e.stop()}}),ie)}var me=pe,ge=n(86),fe=n(20),de=function(){return a.createElement("div",null,"Generate mosaic from picture. You can:",a.createElement("ul",null,a.createElement("li",null,"Select picture from imgur ",a.createElement("i",null,"/r/aww/")," gallery (newest first, animated posts filtered)"),a.createElement("li",null,"Upload your picture")))},ve=n(50),he=n(51),be=n(55),Ee=n(56),Oe=function(e){Object(Ee.a)(n,e);var t=Object(be.a)(n);function n(){var e;Object(ve.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){t.preventDefault();var n=t.target.image.files[0];e.props.uploadImage(n)},e}return Object(he.a)(n,[{key:"render",value:function(){return a.createElement("div",null,a.createElement("h1",null,"Upload your favourite picture"),a.createElement("form",{onSubmit:this.onSubmit},a.createElement("input",{type:"file",accept:"image/png, image/jpeg",name:"image"}),a.createElement("button",{type:"submit"},"Upload")))}}]),n}(a.Component),we=Object(s.c)((function(){return{}}),{uploadImage:function(e){return{type:"UPLOAD_IMAGE",image:e}}})(Oe),Ie=n(250),je=n(129),xe=function(e){Object(Ee.a)(n,e);var t=Object(be.a)(n);function n(){var e;Object(ve.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).canvas=null,e.state={loading:!1},e.setImageIntoCanvas=function(){var t=Object(T.a)(R.a.mark((function t(n){var r,a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.canvas){t.next=10;break}if(!(r=e.canvas.getContext("2d"))){t.next=10;break}return e.props.setIsLoading(!0),t.next=6,M(n);case 6:a=t.sent,e.canvas&&(e.canvas.width=16*Math.floor(a.width/16),e.canvas.height=16*Math.floor(a.height/16)),r.drawImage(a,0,0,a.width,a.height),e.props.setIsLoading(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setMosaicToCanvas=function(){if(e.canvas){var t=e.canvas.getContext("2d");if(t){for(var n=e.canvas,r=n.width,a=n.height,c=0,u=0,i=t.getImageData(c,16*u,16,16);Math.floor(a/16)>=u;){var o=P(i),s=t.createImageData(16,16);t.putImageData(s,c,16*u);t.beginPath(),t.arc(c+8,16*u+8,8,0,2*Math.PI),t.fillStyle="rgb(".concat(o.red,", ").concat(o.green,", ").concat(o.blue,")"),t.fill(),(c+=16)>=r&&(c=0,u+=1),i=t.getImageData(c,16*u,16,16)}e.setState({loading:!1})}}},e.share=function(){e.canvas&&(0,e.props.shareImage)(e.canvas.toDataURL().replace("data:image/png;base64,",""))},e.generate=function(){e.setState({loading:!0}),setTimeout(e.setMosaicToCanvas,0)},e}return Object(he.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.previewImageSrc)){e.next=4;break}return e.next=4,this.setImageIntoCanvas(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(T.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.previewImageSrc||t.previewImageSrc===this.props.previewImageSrc){e.next=3;break}return e.next=3,this.setImageIntoCanvas(t.previewImageSrc);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,n=t.previewImageSrc,r=t.sharedImage,c=t.shareIsLoading;return n?a.createElement(a.Fragment,null,a.createElement(Ie.a.Group,null,a.createElement(Ie.a,{loading:this.state.loading,onClick:function(){return e.generate()}},"Generate Mosaic"),a.createElement(Ie.a,{loading:c,onClick:function(){return e.share()}},"\u200b Share")),r&&a.createElement("span",null,"Shared on Imgur ",a.createElement("a",{href:r.link,target:"_blank",rel:"noopener noreferrer"},"HERE")),a.createElement(je.a,{spinning:this.state.loading},a.createElement("canvas",{ref:function(t){return e.canvas=t}}))):a.createElement("div",null,"There is nothing to see, first upload or select image.")}}]),n}(a.Component),ye=Object(s.c)((function(e){return{previewImageSrc:h(e),sharedImage:b(e),shareIsLoading:E(e)}}),{shareImage:function(e){return{type:"SHARE_IMAGE",base64Image:e}},setIsLoading:U})(xe),Se=function(){return a.createElement(ye,null)},Le=n(148),ke=function(e){var t=e.src,n=e.onClick,r=Object(a.useState)(!0),u=Object(Le.a)(r,2),i=u[0],o=u[1];return c.a.createElement(je.a,{spinning:i},c.a.createElement("div",{style:{overflow:"hidden",width:"200px",height:"200px"},onClick:n},c.a.createElement("img",{width:"100%",alt:"",src:t,onLoad:function(){o(!1)}})))},_e=n(248),Ae=function(e){Object(Ee.a)(n,e);var t=Object(be.a)(n);function n(){return Object(ve.a)(this,n),t.apply(this,arguments)}return Object(he.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchGallery()}},{key:"render",value:function(){var e=this.props,t=e.gallery,n=e.setPage,r=e.page,c=e.selectImage,u=e.isLoading;return a.createElement("div",null,a.createElement("h1",null,"Click on your favourite picture"),a.createElement(_e.a,{loading:u,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:t,renderItem:function(e){return a.createElement(_e.a.Item,null,a.createElement(ke,{key:e.id,src:e.link,onClick:function(){return c(e.link)}}))}}),a.createElement("div",null,a.createElement("button",{disabled:1===r,onClick:function(){return n(r-1)}},"Previous"),a.createElement("span",null,r),a.createElement("button",{onClick:function(){return n(r+1)}},"Next")))}}]),n}(a.Component),Re=Object(s.c)((function(e){return{gallery:j(e),page:y(e),isLoading:k(e)}}),{fetchGallery:ne,selectImage:function(e){return{type:"SELECT_IMAGE",imageUrl:e}},setPage:function(e){return{type:"SET_PAGE",page:e}}})(Ae),Ge=n(249),Te=function(){return a.createElement("div",null,a.createElement(Ge.a,{theme:"dark",selectedKeys:[],mode:"horizontal"},a.createElement(Ge.a.Item,null,a.createElement(ge.a,{to:r.home},"Home")),a.createElement(Ge.a.Item,null,a.createElement(ge.a,{to:r.selectImage},"Select Image")),a.createElement(Ge.a.Item,null,a.createElement(ge.a,{to:r.upload},"Upload"))),a.createElement("div",null,a.createElement(fe.c,null,a.createElement(fe.a,{exact:!0,path:r.home,component:de}),a.createElement(fe.a,{path:r.selectImage,component:Re}),a.createElement(fe.a,{path:r.upload,component:we}),a.createElement(fe.a,{path:r.preview,component:Se}))))},Ce=(n(241),n(242),o()()),De=function(e){var t=Object(g.a)(),n=Object(f.a)(e);return Object(p.a)({},Object(m.e)(function(e){return Object(m.c)({router:Object(l.b)(e),previewReducer:v,galleryReducer:I})}(e),_(Object(m.a)(t),Object(m.a)(n))),{runSaga:t.run})}(Ce);De.runSaga(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.b)(V);case 2:return e.t0=e.sent,e.next=5,Object(G.b)(ee);case 5:return e.t1=e.sent,e.next=8,Object(G.b)(me);case 8:return e.t2=e.sent,t=[e.t0,e.t1,e.t2],e.next=12,t;case 12:case"end":return e.stop()}}),e)}))),u.render(a.createElement(s.a,{store:De},a.createElement(l.a,{history:Ce},a.createElement(Te,null))),document.getElementById("root"),(function(){De.dispatch({type:"APP_MOUNTED"})}))}},[[151,1,2]]]);
//# sourceMappingURL=main.e6a4119c.chunk.js.map