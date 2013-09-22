(function(e){if(!navigator.geolocation){var t=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},n=0,i=webshims.cfg.geolocation||{};navigator.geolocation=function(){var a,r={getCurrentPosition:function(n,r,o){var s,l,u,c=2,p=function(){if(!u)if(a){if(u=!0,n(e.extend({timestamp:(new Date).getTime()},a)),h(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(a))}catch(t){}}else r&&!c&&(u=!0,h(),r({code:2,message:"POSITION_UNAVAILABLE"}))},d=function(){c--,f(),p()},h=function(){e(document).unbind("google-loader",h),clearTimeout(l),clearTimeout(s)},f=function(){if(a||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var t=google.loader.ClientLocation;return a={coords:{latitude:t.latitude,longitude:t.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:e.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},t.address)},!0},m=function(){if(!a&&(f(),!a&&window.JSON&&window.sessionStorage))try{a=sessionStorage.getItem("storedGeolocationData654321"),a=a?JSON.parse(a):!1,a.coords||(a=!1)}catch(e){a=!1}};return m(),a?(setTimeout(p,1),void 0):i.confirmText&&!confirm(i.confirmText.replace("{location}",location.hostname))?(r&&r({code:1,message:"PERMISSION_DENIED"}),void 0):(e.ajax({url:"http://freegeoip.net/json/",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(e){c--,e&&(a=a||{coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:e.city,country:e.country_name,countryCode:e.country_code,county:"",postalCode:e.zipcode,premises:"",region:e.region_name,street:"",streetNumber:""}},p())},error:function(){c--,p()}}),clearTimeout(l),window.google&&window.google.loader?c--:l=setTimeout(function(){i.destroyWrite&&(document.write=t,document.writeln=t),e(document).one("google-loader",d),webshims.loader.loadScript("http://www.google.com/jsapi",!1,"google-loader")},800),s=o&&o.timeout?setTimeout(function(){h(),r&&r({code:3,message:"TIMEOUT"})},o.timeout):setTimeout(function(){c=0,p()},1e4),void 0)},clearWatch:e.noop};return r.watchPosition=function(e,t,i){return r.getCurrentPosition(e,t,i),n++,n},r}(),webshims.isReady("geolocation",!0)}})(webshims.$),webshims.register("details",function(e,t,n,i,a,r){var o=function(t){var n=e(t).parent("details");return n[0]&&n.children(":first").get(0)===t?n:a},s=function(t,n){t=e(t),n=e(n);var i=e.data(n[0],"summaryElement");e.data(t[0],"detailsElement",n),i&&t[0]===i[0]||(i&&(i.hasClass("fallback-summary")?i.remove():i.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(n[0],"summaryElement",t),n.prop("open",n.prop("open")))},l=function(t){var n=e.data(t,"summaryElement");return n||(n=e("> summary:first-child",t),n[0]?s(n,t):(e(t).prependPolyfill('<summary class="fallback-summary">'+r.text+"</summary>"),n=e.data(t,"summaryElement"))),n};t.createElement("summary",function(){var n=o(this);if(n&&!e.data(this,"detailsElement")){var i,a,r=e.attr(this,"tabIndex")||"0";s(this,n),e(this).on({"focus.summaryPolyfill":function(){e(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){e(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){e(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){e(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(t){var n=o(this);if(n){if(!a&&t.originalEvent)return a=!0,t.stopImmediatePropagation(),t.preventDefault(),e(this).trigger("click"),a=!1,!1;clearTimeout(i),i=setTimeout(function(){t.isDefaultPrevented()||n.prop("open",!n.prop("open"))},0)}},"keydown.summaryPolyfill":function(t){13!=t.keyCode&&32!=t.keyCode||t.isDefaultPrevented()||(a=!0,t.preventDefault(),e(this).trigger("click"),a=!1)}}).attr({tabindex:r,role:"button"}).prepend('<span class="details-open-indicator" />'),t.moveToFirstEvent(this,"click")}});var u;t.defineNodeNamesBooleanProperty("details","open",function(t){var n=e(e.data(this,"summaryElement"));if(n){var i=t?"removeClass":"addClass",a=e(this);if(!u&&r.animate){a.stop().css({width:"",height:""});var o={width:a.width(),height:a.height()}}if(n.attr("aria-expanded",""+t),a[i]("closed-details-summary").children().not(n[0])[i]("closed-details-child"),!u&&r.animate){var s={width:a.width(),height:a.height()};a.css(o).animate(s,{complete:function(){e(this).css({width:"",height:""})}})}}}),t.createElement("details",function(){u=!0,l(this),e.prop(this,"open",e.prop(this,"open")),u=!1})}),webshims.register("mediaelement-jaris",function(e,t,n,i,a,r){"use strict";var o=t.mediaelement,s=n.swfmini,l=Modernizr.audio&&Modernizr.video,u=s.hasFlashPlayerVersion("9.0.115"),c=0,p="ActiveXObject"in n&&l,d={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,seeking:!1,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},h=Object.keys(d),f={currentTime:0,volume:1,muted:!1};Object.keys(f);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:a,_calledMeta:!1,lastDuration:0},d,f),v=function(e){try{e.nodeName}catch(n){return null}var i=t.data(e,"mediaelement");return i&&"third"==i.isActive?i:null},g=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,a,t)},y=r.playerPath||t.cfg.basePath+"swf/"+(r.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(r.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(r.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(r.attrs,{bgcolor:"#000000"});var b=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){b(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e},w=function(t){t.seeking&&2>Math.abs(t.currentTime-t._lastSeektime)&&(t.seeking=!1,e(t._elem).triggerHandler("seeked"))};o.jarisEvent={};var T,x={onPlayPause:function(e,t,n){var i,a;if(null==n)try{i=t.api.api_get("isPlaying")}catch(r){}else i=n;i==t.paused&&(t.paused=!i,a=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,a),3>t.readyState&&b(3,t),t.paused||g(t._elem,"playing"))},onSeek:function(t,n){n._lastSeektime=t.seekTime,n.seeking=!0,e(n._elem).triggerHandler("seeking"),clearTimeout(n._seekedTimer),n._seekedTimer=setTimeout(function(){w(n),n.seeking=!1},300)},onConnectionFailed:function(){t.error("media error")},onNotBuffering:function(e,t){b(3,t)},onDataInitialized:function(e,t){var n,i=t.duration;t.duration=e.duration,i==t.duration||isNaN(t.duration)||t._calledMeta&&2>(n=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&b(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},n>50?0:n>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),b(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(b(3,t),g(t._elem,"playing")),t.seeking&&w(t),g(t._elem,"timeupdate")},onProgress:function(t,n){if(n.ended&&(n.ended=!1),n.duration&&!isNaN(n.duration)){var i=t.loaded/t.total;i>.02&&.2>i?b(3,n):i>.2&&(i>.99&&(n.networkState=1),b(4,n)),n._bufferedEnd&&n._bufferedEnd>i&&(n._bufferedStart=n.currentTime||0),n._bufferedEnd=i,n.buffered.length=1,e.event.trigger("progress",a,n._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&b(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var n=function(e){var t=!0;try{e.api.api_get("volume")}catch(n){t=!1}return t};return function(i,r){var o=0,s=function(){return o>9?(r.tryedReframeing=0,a):(o++,r.tryedReframeing++,n(r)?(r.wasSwfReady=!0,r.tryedReframeing=0,k(r),N(r)):6>r.tryedReframeing?3>r.tryedReframeing?(r.reframeTimer=setTimeout(s,9),r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},1)):(r.shadowElem.css({overflow:"hidden"}),e(r._elem).mediaLoad()):(clearTimeout(r.reframeTimer),t.error("reframing error")),a)};r&&r.api&&(r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(T),clearTimeout(r.reframeTimer),r.shadowElem.removeClass("flashblocker-assumed"),o?r.reframeTimer=setTimeout(s,9):s())}}()};x.onMute=x.onVolumeChange;var N=function(e){var n,i=e.actionQueue.length,a=0;if(i&&"third"==e.isActive)for(;e.actionQueue.length&&i>a;){a++,n=e.actionQueue.shift();try{e.api[n.fn].apply(e.api,n.args)}catch(r){t.warn(r)}}e.actionQueue.length&&(e.actionQueue=[])},k=function(t){t&&((t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(n){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},E=e.noop;if(l){var A={play:1,playing:1},C=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],S=C.map(function(e){return e+".webshimspolyfill"}).join(" "),_=function(n){var i=t.data(n.target,"mediaelement");if(i){var a=n.originalEvent&&n.originalEvent.type===n.type;a==("third"==i.activating)&&(n.stopImmediatePropagation(),A[n.type]&&(i.isActive!=i.activating?e(n.target).pause():a&&(e.prop(n.target,"pause")._supvalue||e.noop).apply(n.target)))}};E=function(n){e(n).off(S).on(S,_),C.forEach(function(e){t.moveToFirstEvent(n,e)})},E(i)}o.setActive=function(n,i,a){if(a||(a=t.data(n,"mediaelement")),a&&a.isActive!=i){"html5"!=i&&"third"!=i&&t.warn("wrong type for mediaelement activating: "+i);var r=t.data(n,"shadowData");a.activating=i,e(n).pause(),a.isActive=i,"third"==i?(r.shadowElement=r.shadowFocusElement=a.shadowElem[0],e(n).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(n).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")}};var M=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","seeking","videoHeight","videoWidth"],t=e.length;return function(n){if(n){clearTimeout(n._seekedTimer);var i=t,a=n.networkState;for(b(0,n),clearTimeout(n._durationChangeTimer);--i>-1;)delete n[e[i]];n.actionQueue=[],n.buffered.length=0,a&&g(n._elem,"emptied")}}}(),D=function(){var t={},n=function(n){var a,r,o;return t[n.currentSrc]?a=t[n.currentSrc]:n.videoHeight&&n.videoWidth?(t[n.currentSrc]={width:n.videoWidth,height:n.videoHeight},a=t[n.currentSrc]):(r=e.attr(n._elem,"poster"))&&(a=t[r],a||(o=i.createElement("img"),o.onload=function(){t[r]={width:this.width,height:this.height},t[r].height&&t[r].width?P(n,e.prop(n._elem,"controls")):delete t[r]},o.src=r,o.complete&&o.onload())),a||{width:300,height:"video"==n._elemNodeName?150:50}};return function(t){var i,a,r=t.elemDimensions;return("auto"==r.width||"auto"==r.height)&&(r=e.extend({},t.elemDimensions),i=n(t),a=i.width/i.height,"auto"==r.width&&"auto"==r.height?r=i:"auto"==r.width?(t.shadowElem.css({height:r.height}),r.width=t.shadowElem.height()*a):(t.shadowElem.css({width:r.width}),r.height=t.shadowElem.width()/a)),r}}(),P=function(t,n){var i,a=t._elem,r=t.shadowElem;e(a)[n?"addClass":"removeClass"]("webshims-controls"),"third"==t.isActive&&("audio"!=t._elemNodeName||n?(t.elemDimensions={width:a.style.width||e.attr(a,"width")||e(a).width(),height:a.style.height||e.attr(a,"height")||e(a).height()},i=D(t),i.minWidth=a.style.minWidth,i.minHeight=a.style.minHeight,r.css(i)):r.css({width:0,height:0}))},O=function(){var t={"":1,auto:1};return function(n){var i=e.attr(n,"preload");return null==i||"none"==i||e.prop(n,"autoplay")?!1:(i=e.prop(n,"preload"),!!(t[i]||"metadata"==i&&e(n).is(".preload-in-doubt, video:not([poster])")))}}(),F={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},I=function(e){return e.replace?e.replace(F.A,"%26").replace(F.a,"%26").replace(F.e,"%3D").replace(F.q,"%3F"):e};if("matchMedia"in n){var j=!1;try{j=n.matchMedia("only all").matches}catch(L){}j&&(o.sortMedia=function(e,t){try{e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches}catch(n){return 0}return e==t?0:e?-1:1})}o.createSWF=function(n,i,p){if(!u)return setTimeout(function(){e(n).mediaLoad()},1),a;1>c?c=1:c++,p||(p=t.data(n,"mediaelement")),(e.attr(n,"height")||e.attr(n,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var d,h="audio/rtmp"==i.type||"video/rtmp"==i.type,f=e.extend({},r.vars,{poster:I(e.attr(n,"poster")&&e.prop(n,"poster")||""),source:I(i.streamId||i.srcProp),server:I(i.server||"")}),v=e(n).data("vars")||{},g=e.prop(n,"controls"),b="jarisplayer-"+t.getID(n),w=e.extend({},r.params,e(n).data("params")),N=n.nodeName.toLowerCase(),k=e.extend({},r.attrs,{name:b,id:b},e(n).data("attrs")),A=function(){"third"==p.isActive&&P(p,e.prop(n,"controls"))};p&&p.swfCreated?(o.setActive(n,"third",p),p.currentSrc=i.srcProp,p.shadowElem.html('<div id="'+b+'">'),p.api=!1,p.actionQueue=[],d=p.shadowElem,M(p)):(d=e('<div class="polyfill-'+N+' polyfill-mediaelement" id="wrapper-'+b+'"><div id="'+b+'"></div>').css({position:"relative",overflow:"hidden"}),p=t.data(n,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:d},_elemNodeName:{value:N},_elem:{value:n},currentSrc:{value:i.srcProp},swfCreated:{value:!0},id:{value:b.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),a):(p.duration-p._bufferedStart)*p._bufferedEnd+p._bufferedStart},length:0}}})),d.insertBefore(n),l&&e.extend(p,{volume:e.prop(n,"volume"),muted:e.prop(n,"muted"),paused:e.prop(n,"paused")}),t.addShadowDom(n,d),t.data(n,"mediaelement")||t.data(n,"mediaelement",p),E(n),o.setActive(n,"third",p),P(p,g),e(n).on({"updatemediaelementdimensions loadedmetadata emptied":A,remove:function(e){!e.originalEvent&&o.jarisEvent[p.id]&&o.jarisEvent[p.id].elem==n&&(delete o.jarisEvent[p.id],clearTimeout(T),clearTimeout(p.flashBlock))}}).onWSOff("updateshadowdom",A)),o.jarisEvent[p.id]&&o.jarisEvent[p.id].elem==n||(o.jarisEvent[p.id]=function(e){if("ready"==e.type){var t=function(){p.api&&(O(n)&&p.api.api_preload(),x.ready(e,p))};p.api?t():setTimeout(t,9)}else p.currentTime=e.position,p.api&&(!p._calledMeta&&isNaN(e.duration)&&p.duration!=e.duration&&isNaN(p.duration)&&x.onDataInitialized(e,p),p._ppFlag||"onPlayPause"==e.type||x.onPlayPause(e,p),x[e.type]&&x[e.type](e,p)),p.duration=e.duration},o.jarisEvent[p.id].elem=n),e.extend(f,{id:b,evtId:p.id,controls:""+g,autostart:"false",nodename:N},v),h?f.streamtype="rtmp":"audio/mpeg"==i.type||"audio/mp3"==i.type?(f.type="audio",f.streamtype="file"):"video/youtube"==i.type&&(f.streamtype="youtube"),r.changeSWF(f,n,i,p,"embed"),clearTimeout(p.flashBlock),s.embedSWF(y,b,"100%","100%","9.0.115",!1,f,w,k,function(i){if(i.success){var a=function(){(!i.ref.parentNode&&d[0].parentNode||"none"==i.ref.style.display)&&(d.addClass("flashblocker-assumed"),e(n).trigger("flashblocker"),t.warn("flashblocker assumed")),e(i.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};p.api=i.ref,g||e(i.ref).attr("tabindex","-1").css("outline","none"),p.flashBlock=setTimeout(a,99),T||(clearTimeout(T),T=setTimeout(function(){a();var n=e(i.ref);n[0].offsetWidth>1&&n[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>n[0].offsetWidth||2>n[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),n=null},8e3))}})};var V=function(e,t,n,i){return i=i||v(e),i?(i.api&&i.api[t]?i.api[t].apply(i.api,n||[]):(i.actionQueue.push({fn:t,args:n}),i.actionQueue.length>10&&setTimeout(function(){i.actionQueue.length>5&&i.actionQueue.shift()},99)),i):!1};if(["audio","video"].forEach(function(n){var i,a={},r=function(e){("audio"!=n||"videoHeight"!=e&&"videoWidth"!=e)&&(a[e]={get:function(){var t=v(this);return t?t[e]:l&&i[e].prop._supget?i[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){r(e),delete a[e].writeable,a[e].set=t};o("seeking"),o("volume",function(e){var n=v(this);if(n)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),V(this,"api_volume",[e],n),n.volume!=e&&(n.volume=e,g(n._elem,"volumechange")),n=null);else if(i.volume.prop._supset)return i.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,V(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(i.muted.prop._supset)return i.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||V(this,"api_seek",[e],t);else if(i.currentTime.prop._supset)return i.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){a[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),V(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(i[e].prop._supvalue)return i[e].prop._supvalue.apply(this,arguments)}}}),h.forEach(r),t.onNodeNamesPropertyModify(n,"controls",function(t,i){var a=v(this);e(this)[i?"addClass":"removeClass"]("webshims-controls"),a&&("audio"==n&&P(a,i),V(this,"api_controls",[i],a))}),t.onNodeNamesPropertyModify(n,"preload",function(){var n,i,a;O(this)&&(n=v(this),n?V(this,"api_preload",[],n):!p||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(a=this,i=t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){e(a).mediaLoad()},9)))}),i=t.defineNodeNameProperties(n,a,"prop"),Modernizr.mediaDefaultMuted||t.defineNodeNameProperties(n,{defaultMuted:{get:function(){return null!=e.attr(this,"muted")},set:function(t){t?e.attr(this,"muted",""):e(this).removeAttr("muted")}}},"prop")}),u&&e.cleanData){var W=e.cleanData,z={object:1,OBJECT:1};e.cleanData=function(e){var t,n;if(e&&(n=e.length)&&c)for(t=0;n>t;t++)if(z[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(i){}}return W.apply(this,arguments)}}l?"media"in i.createElement("source")||t.reflectProperties("source",["media"]):(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),t.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))}),webshims.register("track",function(e,t,n,i){"use strict";var a=t.mediaelement;(new Date).getTime(),e.fn.addBack?"addBack":"andSelf";var r={subtitles:1,captions:1,descriptions:1},o=e("<track />"),s=Modernizr.ES5&&Modernizr.objectAccessor,l=function(e){var n={};return e.addEventListener=function(e,i){n[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+i),n[e]=i},e.removeEventListener=function(e,i){n[e]&&n[e]!=i&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+i),n[e]&&delete n[e]},e},u={getCueById:function(e){for(var t=null,n=0,i=this.length;i>n;n++)if(this[n].id===e){t=this[n];break}return t}},c={0:"disabled",1:"hidden",2:"showing"},p={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var n=this.cues[this.cues.length-1];n&&n.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=a.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var n=this.cues||[],i=0,a=n.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;a>i;i++)if(n[i]===e){n.splice(i,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined}},d=["kind","label","srclang"],h={srclang:"language"},f=Function.prototype.call.bind(Object.prototype.hasOwnProperty),m=function(n,i){var a,r,o=[],s=[],l=[];if(n||(n=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),i||(n.blockTrackListUpdate=!0,i=e.prop(this,"textTracks"),n.blockTrackListUpdate=!1),clearTimeout(n.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");l.push(t),-1==i.indexOf(t)&&s.push(t)}),n.scriptedTextTracks)for(a=0,r=n.scriptedTextTracks.length;r>a;a++)l.push(n.scriptedTextTracks[a]),-1==i.indexOf(n.scriptedTextTracks[a])&&s.push(n.scriptedTextTracks[a]);for(a=0,r=i.length;r>a;a++)-1==l.indexOf(i[a])&&o.push(i[a]);if(o.length||s.length){for(i.splice(0),a=0,r=l.length;r>a;a++)i.push(l[a]);for(a=0,r=o.length;r>a;a++)e([i]).triggerHandler(e.Event({type:"removetrack",track:o[a]}));for(a=0,r=s.length;r>a;a++)e([i]).triggerHandler(e.Event({type:"addtrack",track:s[a]}));(n.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},v=function(n,i){i||(i=t.data(n,"trackData")),i&&!i.isTriggering&&(i.isTriggering=!0,setTimeout(function(){e(n).closest("audio, video").triggerHandler("updatetrackdisplay"),i.isTriggering=!1},1))},g=function(){var n={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return n.captions=n.subtitles,function(i){var a,r,o=e.prop(i,"default");return o&&"metadata"!=(a=e.prop(i,"kind"))&&(r=e(i).parent().find("track[default]").filter(function(){return!!n[a][e.prop(this,"kind")]})[0],r!=i&&(o=!1,t.error("more than one default track of a specific kind detected. Fall back to default = false"))),o}}(),y=e("<div />")[0];n.TextTrackCue=function(e,n,i){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=n,this.text=i,l(this)},n.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",n="",r=i.createDocumentFragment();return f(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,i;if(t!=this.text)for(t=this.text,n=a.parseCueTextToHTML(t),y.innerHTML=n,e=0,i=y.childNodes.length;i>e;e++)r.appendChild(y.childNodes[e].cloneNode(!0));return r.cloneNode(!0)}),e?e.apply(this,arguments):r.cloneNode(!0)},track:null,id:""},a.createCueList=function(){return e.extend([],u)},a.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,n=/\<\s*\//,i=function(e,t,i,a){var r;return n.test(a)?r="</"+e+">":(i.splice(0,1),r="<"+e+" "+t+'="'+i.join(" ").replace(/\"/g,"&#34;")+'">'),r},a=function(e){var n=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return n[0]&&(n[0]=n[0].toLowerCase(),t.test(n[0])?"c"==n[0]?e=i("span","class",n,e):"v"==n[0]&&(e=i("q","title",n,e)):e=""),e};return function(t){return t.replace(e,a)}}(),a.loadTextTrack=function(n,i,o,s){var l="play playing updatetrackdisplay",u=o.track,c=function(){var r,s,p;if("disabled"!=u.mode&&e.attr(i,"src")&&(p=e.prop(i,"src"))&&(e(n).unbind(l,c),!o.readyState)){r=function(){o.readyState=3,u.cues=null,u.activeCues=u.shimActiveCues=u._shimActiveCues=null,e(i).triggerHandler("error")},o.readyState=1;try{u.cues=a.createCueList(),u.activeCues=u.shimActiveCues=u._shimActiveCues=a.createCueList(),s=e.ajax({dataType:"text",url:p,success:function(l){"text/vtt"!=s.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),a.parseCaptions(l,u,function(t){t&&"length"in t?(o.readyState=2,e(i).triggerHandler("load"),e(n).triggerHandler("updatetrackdisplay")):r()})},error:r})}catch(d){r(),t.error(d)}}};o.readyState=0,u.shimActiveCues=null,u._shimActiveCues=null,u.activeCues=null,u.cues=null,e(n).unbind(l,c),e(n).on(l,c),s&&(u.mode=r[u.kind]?"showing":"hidden",c())},a.createTextTrack=function(n,i){var r,o;return i.nodeName&&(o=t.data(i,"trackData"),o&&(v(i,o),r=o.track)),r||(r=l(t.objectCreate(p)),s||d.forEach(function(t){var n=e.prop(i,t);n&&(r[h[t]||t]=n)}),i.nodeName?(s&&d.forEach(function(n){t.defineProperty(r,h[n]||n,{get:function(){return e.prop(i,n)}})}),r.id=e(i).prop("id"),o=t.data(i,"trackData",{track:r}),a.loadTextTrack(n,i,o,g(i))):(s&&d.forEach(function(e){t.defineProperty(r,h[e]||e,{value:i[e],writeable:!1})}),r.cues=a.createCueList(),r.activeCues=r._shimActiveCues=r.shimActiveCues=a.createCueList(),r.mode="hidden",r.readyState=2),r.__wsmode=r.mode),r},a.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,n=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,i=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,a=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(r){var o,s,l,u,c,p,d,h,f,m;if(h=n.exec(r))return null;if(h=i.exec(r))return null;if(h=a.exec(r))return null;for(o=r.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(d=o.shift().replace(/\s*/gi,"")+""),p=0;o.length>p;p++){var v=o[p];(f=e.exec(v))&&(c=f.slice(1),s=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),l=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),o=o.slice(0,p).concat(o.slice(p+1));break}return s||l?(u=o.join("\n"),m=new TextTrackCue(s,l,u),d&&(m.id=d),m):(t.warn("couldn't extract time information: "+[s,l,o.join("\n"),d].join(" ; ")),null)}}(),a.parseCaptions=function(e,n,i){a.createCueList();var r,o,s,l,u;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(c,p){for(;p>c;c++){if(r=e[c],s.test(r))u=!0;else if(r.replace(/\s*/gi,"").length){if(!u){t.error("please use WebVTT format. This is the standard"),i(null);break}r=a.parseCaptionChunk(r,c),r&&n.addCue(r)}if((new Date).getTime()-30>l){c++,setTimeout(function(){l=(new Date).getTime(),o(c,p)},90);break}}c>=p&&(u||t.error("please use WebVTT format. This is the standard"),i(n.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){l=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},a.createTrackList=function(n,i){return i=i||t.data(n,"mediaelementBase")||t.data(n,"mediaelementBase",{}),i.textTracks||(i.textTracks=[],t.defineProperties(i.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(e){for(var t=null,n=0;i.textTracks.length>n;n++)if(e==i.textTracks[n].id){t=i.textTracks[n];break}return t}}}),l(i.textTracks),e(n).on("updatetrackdisplay",function(){for(var t,n=0;i.textTracks.length>n;n++)t=i.textTracks[n],t.__wsmode!=t.mode&&(t.__wsmode=t.mode,e([i.textTracks]).triggerHandler("change"))})),i.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var n=t.data(this,"trackData");this.setAttribute("data-kind",e),n&&(n.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(d,function(n,i){var a=h[i]||i;t.onNodeNamesPropertyModify("track",i,function(){var n=t.data(this,"trackData");n&&("kind"==i&&v(this,n),s||(n.track[a]=e.prop(this,i)))})}),t.onNodeNamesPropertyModify("track","src",function(n){if(n){var i,r=t.data(this,"trackData");r&&(i=e(this).closest("video, audio"),i[0]&&a.loadTextTrack(i,this,r))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(t.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return a.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),i=a.createTrackList(e,n);return n.blockTrackListUpdate||m.call(e,n,i),i},writeable:!1},addTextTrack:{value:function(e,n,i){var r=a.createTextTrack(this,{kind:o.prop("kind",e||"").prop("kind"),label:n||"",srclang:i||""}),s=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return s.scriptedTextTracks||(s.scriptedTextTracks=[]),s.scriptedTextTracks.push(r),m.call(this),r}}},"prop"),e(i).on("emptied ended updatetracklist",function(n){if(e(n.target).is("audio, video")){var i=t.data(n.target,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){m.call(n.target,i)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},T=function(){if(t.implement(this,"track")){var n,i,a=e.prop(this,"track"),r=this.track;r&&(n=e.prop(this,"kind"),i=b(this,r),(r.mode||i)&&(a.mode=c[r.mode]||r.mode),"descriptions"!=n&&(r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:n}))),e(this).on("load error",w)}};t.addReady(function(n,i){var a=i.filter("video, audio, track").closest("audio, video");e("video, audio",n).add(a).each(function(){m.call(this)}).each(function(){if(Modernizr.track){var n=e.prop(this,"textTracks"),i=this.textTracks;n.length!=i.length&&t.error("textTracks couldn't be copied"),e("track",this).each(T)}}),a.each(function(){var e=this,n=t.data(e,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){m.call(e,n)},9))})}),Modernizr.texttrackapi&&e("video, audio").trigger("trackapichange")});