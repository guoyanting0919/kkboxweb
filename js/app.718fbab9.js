(function(t){function a(a){for(var s,i,n=a[0],o=a[1],u=a[2],h=0,p=[];h<n.length;h++)i=n[h],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(a);while(p.length)p.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var o=e[n];0!==c[o]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},c={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/kkboxweb/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=a,n=n.slice();for(var u=0;u<n.length;u++)a(n[u]);var d=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},1245:function(t,a,e){"use strict";var s=e("7387"),c=e.n(s);c.a},"3b77":function(t,a,e){"use strict";var s=e("b040"),c=e.n(s);c.a},"56d1":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"login"},[t.getCode?e("a",{staticClass:"wasLoginContainer"},[e("i",{staticClass:"fas fa-user wasLogin"}),e("a",{staticClass:"spanGreen"},[t._v("已登入")]),e("p",{staticClass:"get_favorite",on:{click:t.getMyFavoriteTrack}},[t._v(" 取得我的 "),e("br"),t._v("蒐藏歌曲 ")])]):e("a",{staticClass:"wasNotLoginContainer",attrs:{href:"https://account.kkbox.com/oauth2/authorize?redirect_uri=https%3a%2f%2fguoyanting0919.github.io%2fkkboxweb&client_id=fb254aff20b31017a2e84e34ed896523&response_type=code&state=123"}},[e("i",{staticClass:"fas fa-user wasNotLogin"}),e("a",{staticClass:"spanRed"},[t._v("未登入")]),t._m(0)])]),e("div",[t.searchItems?e("div",{staticClass:"bgRotate"}):t._e()]),e("myIframe",{attrs:{kkboxIframeId:t.iframeId,youtubeIframeId:t.YTTrackId,youtubeSearchName:t.YTSearchName}}),e("navBar",{on:{setSearchInput:t.getSearchInput,setSearchType:t.getsearchType,setsearchItems:t.getsearchItems,setkkboxData:t.getkkboxData,setIsLoading:t.getIsLoading}}),t.isLoading?e("isLoading"):t._e(),e("router-view",{attrs:{myKkboxData:t.kkboxData,mysearchItems:t.searchItems,myAccessToken:t.accessToken,myCode:t.getCode},on:{setIframeId:t.getIframeId,setYTTrackId:t.getYTTrackId,setIsLoading:t.getIsLoading}})],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"to_open"},[t._v(" 登入開啟 "),e("br"),t._v("更多功能 ")])}],i=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav_bar"},[e("div",{staticClass:"nav_container"},[e("router-link",{staticClass:"routermargin",attrs:{to:"/home"}},[e("h1",{staticClass:"nav_title"},[e("span",[t._v("B")]),e("span",[t._v("r")]),e("span",[t._v("o.")]),e("span",[t._v("M")]),e("span",[t._v("u")]),e("span",[t._v("s")]),e("span",[t._v("i")]),e("span",[t._v("c")])])]),e("ul",[e("router-link",{staticClass:"routermargin",attrs:{to:"/track"}},[e("a",{staticClass:"routerBtn",class:{activeRouter:"單曲搜尋"===this.activeRoute},on:{click:function(a){return t.activeRouter("單曲搜尋")}}},[t._v("單曲搜尋")])]),e("router-link",{attrs:{to:"/charts"}},[e("a",{staticClass:"routerBtn",class:{activeRouter:"熱門音榜"===this.activeRoute},on:{click:function(a){return t.activeRouter("熱門音榜")}}},[t._v("熱門音榜")])])],1),e("div",{staticClass:"search_container"},[e("div",{staticClass:"search_radio"},[e("div",{staticClass:"radio_container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchType,expression:"searchType"}],attrs:{type:"radio",id:"track",value:"track"},domProps:{checked:"track"==t.searchType,checked:t._q(t.searchType,"track")},on:{change:[function(a){t.searchType="track"},t.radioChange]}}),e("label",{staticClass:"search_label",attrs:{for:"track"}},[t._v("歌曲")])]),e("div",{staticClass:"radio_container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchType,expression:"searchType"}],attrs:{type:"radio",id:"artist",value:"artist"},domProps:{checked:"artist"==t.searchType,checked:t._q(t.searchType,"artist")},on:{change:[function(a){t.searchType="artist"},t.radioChange]}}),e("label",{staticClass:"search_label",attrs:{for:"artist"}},[t._v("歌手")])])]),e("div",{staticClass:"search_input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],attrs:{type:"text",placeholder:"請輸入關鍵字"},domProps:{value:t.searchInput},on:{change:t.setSearchInput,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.searchHandler(a)},input:function(a){a.target.composing||(t.searchInput=a.target.value)}}}),e("button",{attrs:{type:"button"},on:{click:t.searchHandler}},[e("i",{staticClass:"fas fa-search"})])])])],1)])}),n=[],o=(e("99af"),{name:"navBar",data:function(){return{token:"",searchInput:"房東的貓",searchType:"artist",artistID:"",searchItems:"",kkboxData:"",activeRoute:"單曲搜尋",isLoading:!1}},created:function(){this.getToken(),this.$emit("setSearchInput",this.searchInput),this.$emit("setSearchType",this.searchType)},methods:{getToken:function(){var t=this,a="https://cors-anywhere.herokuapp.com/https://account.kkbox.com/oauth2/token",e={headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"}},s={grant_type:"client_credentials",client_id:"fb254aff20b31017a2e84e34ed896523",client_secret:"d2f7853d7a7e2afd98bc4751f1b3c81a"};this.$http.post(a,this.$qs.stringify(s),e).then((function(a){t.token=a.data.access_token,t.getSearch()}))},getSearch:function(){var t=this;t.isLoading=!0,t.$emit("setIsLoading",t.isLoading);var a={headers:{Authorization:" Bearer ".concat(t.token)}};this.$http.get("https://api.kkbox.com/v1.1/search?q=".concat(t.searchInput,"&type=").concat(t.searchType,"&territory=TW"),a).then((function(e){t.kkboxData=e.data,t.$emit("setkkboxData",t.kkboxData),"artist"===t.searchType?(t.artistID=t.kkboxData.artists.data[0].id,t.$http.get("https://api.kkbox.com/v1.1/artists/".concat(t.artistID,"/top-tracks?territory=TW&limit=20"),a).then((function(a){t.searchItems=a.data.data,t.$emit("setsearchItems",t.searchItems),t.isLoading=!1,t.$emit("setIsLoading",t.isLoading)}))):"track"===t.searchType&&t.$http.get("https://api.kkbox.com/v1.1/search?q=".concat(t.searchInput,"&type=").concat(t.searchType,"&territory=TW&limit=20"),a).then((function(a){t.searchItems=a.data.tracks.data,t.$emit("setsearchItems",t.searchItems),t.isLoading=!1,t.$emit("setIsLoading",t.isLoading)}))}))},searchHandler:function(){var t=this,a=t.$router.history.current.path;"/track"===a?t.getSearch():(t.activeRoute="單曲搜尋",t.$router.push("/track"))},setSearchInput:function(){this.$emit("setSearchInput",this.searchInput)},radioChange:function(){this.$emit("setSearchType",this.searchType)},activeRouter:function(t){this.activeRoute=t}}}),u=o,d=(e("3b77"),e("2877")),h=Object(d["a"])(u,i,n,!1,null,null,null),p=h.exports,l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"iframe"},[e("div",{staticClass:"KK_iframe_container"},[t.myKkboxIframeId?e("div",{staticClass:"close_kkbox"},[e("span",{on:{click:t.kkboxClose}},[e("i",{staticClass:"fas fa-times-circle"})])]):t._e(),t.myKkboxIframeId?e("iframe",{staticClass:"kkboxIframe",attrs:{allow:"autoplay",src:"https://widget.kkbox.com/v1/?id="+t.myKkboxIframeId+"&type="+t.iframeType+"&terr=TW&lang=TC&autoplay=true",frameborder:"0"}}):t._e()]),e("div",{staticClass:"TY_iframe_container"},[t.myyoutubeIframeId?e("div",{staticClass:"close_YT"},[e("span",{on:{click:t.YTClose}},[e("i",{staticClass:"fas fa-times-circle"})])]):t._e(),t.myyoutubeIframeId?e("iframe",{attrs:{id:"player",type:"text/html",width:"300",height:"200",src:"https://www.youtube.com/embed/"+t.myyoutubeIframeId+"?autoplay=1",frameborder:"0"}}):t._e()])])},f=[],m={props:["kkboxIframeId","youtubeIframeId"],data:function(){return{iframeType:"song",myKkboxIframeId:this.kkboxIframeId,myyoutubeIframeId:this.youtubeIframeId}},watch:{kkboxIframeId:function(t){this.myKkboxIframeId=t},youtubeIframeId:function(t){this.myyoutubeIframeId=t}},methods:{kkboxClose:function(){var t=this;t.myKkboxIframeId=!1},YTClose:function(){var t=this;t.myyoutubeIframeId=""}}},k=m,v=(e("87be"),Object(d["a"])(k,l,f,!1,null,null,null)),_=v.exports,b=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"isLoading"},[e("div",{staticClass:"loader"})])}],T={name:"isLoading"},I=T,g=(e("81da"),Object(d["a"])(I,b,y,!1,null,null,null)),C=g.exports,x={name:"index",components:{navBar:p,myIframe:_,isLoading:C},data:function(){return{token:"",kkboxData:"",searchInput:"",searchType:"",kkboxCharts:[],artistID:"",searchItems:"",iframeId:"",iframeType:"song",YTSearchName:"",YTTrackId:"",isLoading:!0,accessToken:"",userId:""}},computed:{getCode:function(){var t=new URL(document.location).searchParams,a=t.get("code");return a}},methods:{getAccessToken:function(){var t=this;if(!t.getCode)return console.log("noCODE"),!1;var a="https://cors-anywhere.herokuapp.com/https://account.kkbox.com/oauth2/token",e={headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"}},s={grant_type:"authorization_code",code:this.getCode,client_id:"fb254aff20b31017a2e84e34ed896523",client_secret:"d2f7853d7a7e2afd98bc4751f1b3c81a"};this.$http.post(a,this.$qs.stringify(s),e).then((function(a){t.accessToken=a.data.access_token}))},getMyFavoriteTrack:function(){var t=this,a=t.$router.history.current.path;if("/track"===a){t.isLoading=!0;var e="https://api.kkbox.com/v1.1/me/favorite?limit=100",s={headers:{Authorization:" Bearer ".concat(t.accessToken)}};t.$http.get(e,s).then((function(a){t.searchItems=a.data.data,t.isLoading=!1}))}else{t.activeRoute="單曲搜尋",t.$router.push("/track");var c="https://api.kkbox.com/v1.1/me/favorite?limit=100",r={headers:{Authorization:" Bearer ".concat(t.accessToken)}};t.$http.get(c,r).then((function(a){t.searchItems=a.data.data}))}},getSearchInput:function(t){this.searchInput=t},getsearchType:function(t){this.searchType=t},getsearchItems:function(t){this.searchItems=t},getkkboxData:function(t){this.kkboxData=t},getIframeId:function(t){this.iframeId=t},getYTTrackId:function(t){this.YTTrackId=t},getIsLoading:function(t){this.isLoading=t},getCharts:function(){var t=this,a={headers:{Authorization:" Bearer ".concat(t.token)}};this.$http.get("https://api.kkbox.com/v1.1/charts?territory=TW",a).then((function(a){console.log(a),t.kkboxCharts=a.data.data}))}},created:function(){this.getSearchInput(),this.getsearchItems(),this.getAccessToken()}},K=x,w=(e("abb8"),Object(d["a"])(K,c,r,!1,null,null,null)),Y=w.exports,$=e("8c4f"),L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tracks_container"},[e("div",{staticClass:"track_list"},[e("ul",{staticClass:"track"},t._l(t.searchItems,(function(a,s){return e("li",{key:s,staticClass:"track_name",class:{YTcurrentTrack:t.YTcurrentTrack===a.id,KKcurrentTrack:t.KKcurrentTrack===a.id},attrs:{"data-text":a.name}},[t._v(" "+t._s(a.name)+" "),e("div",{staticClass:"play_btn_container"},[e("button",{staticClass:"playBtn playYoutube",on:{click:function(e){return t.playYT(a)}}},[e("i",{staticClass:"fab fa-youtube track_YT_icon"})]),e("button",{staticClass:"playBtn playKKbox",on:{click:function(e){return t.playKkbox(a)}}},[e("i",{staticClass:"fab fa-kickstarter track_KK_icon"})]),t.code?e("button",{staticClass:"playBtn playKKbox",on:{click:function(e){return t.addToFavorite(a)}}},[e("i",{staticClass:"far fa-star favorite_icon"})]):t._e()])])})),0)])])},S=[],D=(e("b0c0"),{props:["myKkboxData","mysearchItems","myCode"],data:function(){return{token:"",kkboxData:this.myKkboxData,searchItems:this.mysearchItems,accessToken:"",code:this.myCode,iframeId:"",YTTrackId:"",YTcurrentTrack:"",KKcurrentTrack:""}},watch:{myKkboxData:function(t){this.kkboxData=t},mysearchItems:function(t){this.searchItems=t},myCode:function(t){this.code=t}},computed:{creatItem:function(){var t=Math.floor(4*Math.random()),a=this.searchItems[t];return a}},methods:{playKkbox:function(t){var a=this;a.YTcurrentTrack="",a.KKcurrentTrack="",a.YTTrackId="",a.iframeId="",a.$emit("setIframeId",a.iframeId),a.$emit("setYTTrackId",a.YTTrackId),a.KKcurrentTrack=t.id,setTimeout((function(){a.iframeId=t.id,a.$emit("setIframeId",a.iframeId);var e=document.querySelector(".KK_iframe_container");e.style.opacity=.9}),10)},playYT:function(t){var a=this;a.YTcurrentTrack="",a.KKcurrentTrack="",a.iframeId="",a.YTSearchName="",a.YTTrackId="",a.$emit("setIframeId",a.iframeId),a.$emit("setYTTrackId",a.YTTrackId),a.YTcurrentTrack=t.id,setTimeout((function(){a.YTSearchName=t.name;var e=document.querySelector(".TY_iframe_container");e.style.opacity=.9,a.$http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyD5X4wGGRG0IyiFPYt66UXKAg-An0ystvQ&part=snippet&type=video&q=".concat(a.YTSearchName)).then((function(t){a.YTTrackId=t.data.items[0].id.videoId,a.$emit("setYTTrackId",a.YTTrackId)}))}),100)},addToFavorite:function(t){var a=this,e=(t.id,{headers:{Authorization:" Bearer ".concat(a.accessToken),"Content-Type":"application/json"}}),s={track_id:t.id};a.$http.post("https://cors-anywhere.herokuapp.com/https://api.kkbox.com/v1.1/me/favorite",s,e).then((function(t){alert(t.data.message)}))},getAccessToken:function(){var t=this;if(!t.code)return console.log("noCODE"),!1;var a="https://cors-anywhere.herokuapp.com/https://account.kkbox.com/oauth2/token",e={headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"}},s={grant_type:"authorization_code",code:this.code,client_id:"fb254aff20b31017a2e84e34ed896523",client_secret:"d2f7853d7a7e2afd98bc4751f1b3c81a"};this.$http.post(a,this.$qs.stringify(s),e).then((function(a){t.accessToken=a.data.access_token}))}},mounted:function(){var t=this;this.getAccessToken(),t.isLoading=!0,t.$emit("setIsLoading",t.isLoading),window.setTimeout((function(){t.isLoading=!1,t.$emit("setIsLoading",t.isLoading)}),1500),window.setTimeout((function(){var a=t.creatItem;t.playKkbox(a)}),3e3)}}),A=D,O=(e("7c5f"),Object(d["a"])(A,L,S,!1,null,null,null)),B=O.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart"},[e("div",{staticClass:"charts_container"},t._l(t.chartsData,(function(a){return e("div",{key:a.id,staticClass:"square",on:{click:function(e){return t.getChartId(a)}}},[e("span",{staticClass:"circle",class:{activeChart:t.activeChart===a.id}}),e("span",{class:{activeChart:t.activeChart===a.id}}),e("span",{class:{activeChart:t.activeChart===a.id}}),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(a.title))])])])})),0),e("div",{staticClass:"charts_tracks_container"},[e("div",{staticClass:"title_container"},[e("span",{staticClass:"chart_title"},[t._v(t._s(t.chartTitle))])]),t.chartTracks?e("div",{staticClass:"top3_tracks"},t._l(t.top3tracks,(function(a,s){return e("div",{key:s,staticClass:"top3_bg_border",class:{top3_bg_noborder:t.activeKKbox===a.id,top3_bg_noborder2:t.activeYT===a.id}},[e("span",{class:{active_span_kk:t.activeKKbox===a.id,active_span_yt:t.activeYT===a.id}}),e("span",{class:{active_span_kk:t.activeKKbox===a.id,active_span_yt:t.activeYT===a.id}}),e("span",{class:{active_span_kk:t.activeKKbox===a.id,active_span_yt:t.activeYT===a.id}}),e("span",{class:{active_span_kk:t.activeKKbox===a.id,active_span_yt:t.activeYT===a.id}}),e("div",{staticClass:"top3_track_container"},[e("div",{staticClass:"top3_rank"},[t._v(t._s(s+1))]),e("div",{staticClass:"to3_track_txt"},[e("div",{staticClass:"top3_track_name",attrs:{"data-text":a.name}},[t._v(t._s(a.name))]),e("div",{staticClass:"top3_track_artist"},[t._v(t._s(a.album.artist.name))])]),e("div",{staticClass:"top3_btn_container"},[e("button",{staticClass:"top3_btn_playBtn top3_btn_playYoutube",on:{click:function(e){return t.playYT(a)}}},[e("i",{staticClass:"fab fa-youtube top3_YT_icon"})]),e("button",{staticClass:"top3_btn_playBtn top3_btn_playKKbox",on:{click:function(e){return t.playKkbox(a)}}},[e("i",{staticClass:"fab fa-kickstarter top_KK_icon"})])])])])})),0):t._e(),t.chartTracks?e("div",{staticClass:"top4to25_tracks"},t._l(t.chart4to25Tracks,(function(a,s){return e("div",{key:a.id,staticClass:"chart_track_container",class:{top3_bg_noborder:t.activeKKbox===a.id,top3_bg_noborder2:t.activeYT===a.id},attrs:{"data-text":s+4}},[e("span",{class:{active_span_kk:t.activeKKbox===a.id,active_span_yt:t.activeYT===a.id}}),e("span",{class:{active_span_kk:t.activeKKbox===a.id,active_span_yt:t.activeYT===a.id}}),e("span",{class:{active_span_kk:t.activeKKbox===a.id,active_span_yt:t.activeYT===a.id}}),e("span",{class:{active_span_kk:t.activeKKbox===a.id,active_span_yt:t.activeYT===a.id}}),e("div",{staticClass:"top4to25_container"},[e("h3",{staticClass:"chart_number_h3"},[t._v(t._s(s+4))]),e("h4",{staticClass:"chart_name_h4",attrs:{"data-text":a.name}},[t._v(t._s(a.name))]),e("h5",{staticClass:"chart_artist_h5"},[t._v(t._s(a.album.artist.name))]),e("button",{staticClass:"top4to25_btn_playBtn top4to25_btn_playYoutube",on:{click:function(e){return t.playYT(a)}}},[e("i",{staticClass:"fab fa-youtube top4to25_YT_icon"})]),e("button",{staticClass:"top4to25_btn_playBtn top4to25_btn_playKKbox",on:{click:function(e){return t.playKkbox(a)}}},[e("i",{staticClass:"fab fa-kickstarter top4to25_KK_icon"})])])])})),0):t._e()])])},j=[],q=(e("159b"),{props:["myKkboxData","mysearchItems"],data:function(){return{token:"",chartsData:"",chartId:"DZdxFB2dciOFbRCAuy",chartTracks:"",chartTitle:"",kkboxData:this.myKkboxData,searchItems:this.mysearchItems,iframeId:"",YTTrackId:"",isLoading:"",activeChart:"",activeKKbox:"",activeYT:""}},computed:{chart4to25Tracks:function(){var t=this,a=[];return t.chartTracks.forEach((function(t,e){a.length<=21&&e>2&&a.push(t)})),a},top3tracks:function(){var t=this,a=[];return t.chartTracks.forEach((function(t){a.length<=2&&a.push(t)})),a}},methods:{getToken:function(){var t=this,a=this;a.isLoading=!0,a.$emit("setIsLoading",a.isLoading);var e="https://cors-anywhere.herokuapp.com/https://account.kkbox.com/oauth2/token",s={headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"}},c={grant_type:"client_credentials",client_id:"fb254aff20b31017a2e84e34ed896523",client_secret:"d2f7853d7a7e2afd98bc4751f1b3c81a"};this.$http.post(e,this.$qs.stringify(c),s).then((function(a){t.token=a.data.access_token,t.getChartsData();var e=t;e.isLoading=!1,e.$emit("setIsLoading",e.isLoading)}))},getChartsData:function(){var t=this,a={headers:{Authorization:" Bearer ".concat(t.token)}};this.$http.get("https://api.kkbox.com/v1.1/charts?territory=TW",a).then((function(a){t.chartsData=a.data.data}))},getChartId:function(t){var a=this;a.activeChart=t.id;var e={headers:{Authorization:" Bearer ".concat(a.token)}};a.chartId=t.id,this.$http.get("https://api.kkbox.com/v1.1/charts/".concat(a.chartId,"?territory=TW"),e).then((function(t){a.chartTracks=t.data.tracks.data,a.chartTitle=t.data.title}))},playKkbox:function(t){var a=this;a.activeKKbox="",a.activeYT="",a.YTTrackId="",a.iframeId="",a.$emit("setIframeId",a.iframeId),a.$emit("setYTTrackId",a.YTTrackId),a.activeKKbox=t.id,setTimeout((function(){a.iframeId=t.id,a.$emit("setIframeId",a.iframeId);var e=document.querySelector(".KK_iframe_container");e.style.opacity=.9}),10)},playYT:function(t){var a=this;a.activeKKbox="",a.activeYT="",a.iframeId="",a.YTSearchName="",a.YTTrackId="",a.$emit("setIframeId",a.iframeId),a.$emit("setYTTrackId",a.YTTrackId),a.activeYT=t.id,setTimeout((function(){a.YTSearchName=t.name;var e=document.querySelector(".TY_iframe_container");e.style.opacity=.9,a.$http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyD5X4wGGRG0IyiFPYt66UXKAg-An0ystvQ&part=snippet&type=video&q=".concat(a.YTSearchName)).then((function(t){a.YTTrackId=t.data.items[0].id.videoId,a.$emit("setYTTrackId",a.YTTrackId)}))}),100)}},created:function(){this.getToken()}}),E=q,N=(e("1245"),Object(d["a"])(E,R,j,!1,null,null,null)),P=N.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home_container"},[t._m(0),e("router-link",{staticClass:"homeRouter",attrs:{to:"/track"}},[e("h2",{staticClass:"home_open"},[e("span",[t._v("O")]),e("span",[t._v("p")]),e("span",[t._v("e")]),e("span",[t._v("n")])])])],1)},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"home_title"},[e("span",[t._v("B")]),e("span",[t._v("r")]),e("span",[t._v("o.")]),e("span",[t._v("M")]),e("span",[t._v("u")]),e("span",[t._v("s")]),e("span",[t._v("i")]),e("span",[t._v("c")])])}],F={},G=F,W=(e("cccb"),Object(d["a"])(G,z,M,!1,null,null,null)),H=W.exports;s["a"].use($["a"]);var X=[{path:"*",redirect:"home"},{path:"/home",name:"Home",component:H},{path:"/track",name:"Track",component:B},{path:"/charts",name:"Charts",component:P}],U=new $["a"]({routes:X}),J=U,Q=e("2f62");s["a"].use(Q["a"]);var Z=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),V=e("bc3a"),tt=e.n(V),at=e("a7fe"),et=e.n(at),st=e("4328"),ct=e.n(st);s["a"].prototype.$qs=ct.a,s["a"].use(et.a,tt.a),s["a"].config.productionTip=!1,new s["a"]({router:J,store:Z,render:function(t){return t(Y)}}).$mount("#app")},"5ced":function(t,a,e){},"69e3":function(t,a,e){},7387:function(t,a,e){},"7c5f":function(t,a,e){"use strict";var s=e("b603"),c=e.n(s);c.a},"81da":function(t,a,e){"use strict";var s=e("69e3"),c=e.n(s);c.a},"87be":function(t,a,e){"use strict";var s=e("f66d"),c=e.n(s);c.a},abb8:function(t,a,e){"use strict";var s=e("56d1"),c=e.n(s);c.a},b040:function(t,a,e){},b603:function(t,a,e){},cccb:function(t,a,e){"use strict";var s=e("5ced"),c=e.n(s);c.a},f66d:function(t,a,e){}});
//# sourceMappingURL=app.718fbab9.js.map