jQuery.webshims.register("dom-extend",function(d,g,j,m,l){var v=g.modules,s=/\s*,\s*/,p={},t={},n={},z={},q={},o=d.fn.val,k=function(c,a,b,f,e){return e?o.call(d(c)):o.call(d(c),b)};d.fn.val=function(c){var a=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!a||1!==a.nodeType?o.call(this):d.prop(a,"value",c,"val",!0);if(d.isArray(c))return o.apply(this,arguments);var b=d.isFunction(c);return this.each(function(f){a=this;1===a.nodeType&&(b?(f=c.call(a,f,d.prop(a,"value",l,"val",
!0)),null==f&&(f=""),d.prop(a,"value",f,"val")):d.prop(a,"value",c,"val"))})};var r="_webshimsLib"+Math.round(1E3*Math.random()),w=function(c,a,b){c=c.jquery?c[0]:c;if(!c)return b||{};var f=d.data(c,r);b!==l&&(f||(f=d.data(c,r,{})),a&&(f[a]=b));return a?f&&f[a]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){d.fn[c.name]=function(){return this.map(function(){var a=w(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){p[c]=d[c];d[c]=function(a,b,f,e,h){var g="val"==e,u=!g?p[c]:k;if(!a||!t[b]||1!==a.nodeType||!g&&e&&"attr"==c&&d.attrFn[b])return u(a,b,f,e,h);var x=(a.nodeName||"").toLowerCase(),A=n[x],i="attr"==c&&(!1===f||null===f)?"removeAttr":c,o,j,r;A||(A=n["*"]);A&&(A=A[b]);A&&(o=A[i]);if(o){if("value"==b)j=o.isVal,o.isVal=g;if("removeAttr"===i)return o.value.call(a);if(f===l)return o.get?o.get.call(a):o.value;o.set&&
("attr"==c&&!0===f&&(f=b),r=o.set.call(a,f));if("value"==b)o.isVal=j}else r=u(a,b,f,e,h);if((f!==l||"removeAttr"===i)&&q[x]&&q[x][b]){var m;m="removeAttr"==i?!1:"prop"==i?!!f:!0;q[x][b].forEach(function(b){if(!b.only||(b.only="prop"==c)||"attr"==b.only&&"prop"!=c)b.call(a,f,m,g?"val":i,c)})}return r};z[c]=function(a,b,f){n[a]||(n[a]={});n[a][b]||(n[a][b]={});var e=n[a][b][c],h=function(a,e,x){return e&&e[a]?e[a]:x&&x[a]?x[a]:"prop"==c&&"value"==b?function(a){return f.isVal?k(this,b,a,!1,0===arguments.length):
p[c](this,b,a)}:"prop"==c&&"value"==a&&f.value.apply?function(a){var f=p[c](this,b);f&&f.apply&&(f=f.apply(this,arguments));return f}:function(a){return p[c](this,b,a)}};n[a][b][c]=f;if(f.value===l){if(!f.set)f.set=f.writeable?h("set",f,e):g.cfg.useStrict&&"prop"==b?function(){throw b+" is readonly on "+a;}:d.noop;if(!f.get)f.get=h("get",f,e)}["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=h(a,e))})}});var y=!d.browser.msie||8<parseInt(d.browser.version,10),h=function(){var c=g.getPrototypeOf(m.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(b,f,d){var h=m.createElement(b),i=g.getPrototypeOf(h);if(y&&i&&c!==i&&(!h[f]||!a.call(h,f))){var u=h[f];d._supvalue=function(){return u&&u.apply?u.apply(this,arguments):u};i[f]=d.value}else d._supvalue=function(){var a=w(this,"propValue");return a&&a[f]&&a[f].apply?a[f].apply(this,arguments):a&&a[f]},e.extendValue(b,f,d.value);d.value._supvalue=d._supvalue}}(),e=function(){var c={};g.addReady(function(a,b){var f={},e=function(c){f[c]||(f[c]=d(a.getElementsByTagName(c)),
b[0]&&d.nodeName(b[0],c)&&(f[c]=f[c].add(b)))};d.each(c,function(a,b){e(a);!b||!b.forEach?g.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){f[a].each(b)})});f=null});var a,b=d([]),f=function(b,f){c[b]?c[b].push(f):c[b]=[f];d.isDOMReady&&(a||d(m.getElementsByTagName(b))).each(f)};return{createTmpCache:function(c){d.isDOMReady&&(a=a||d(m.getElementsByTagName(c)));return a||b},flushTmpCache:function(){a=null},content:function(a,b){f(a,function(){var a=d.attr(this,b);null!=a&&d.attr(this,
b,a)})},createElement:function(a,b){f(a,b)},extendValue:function(a,b,c){f(a,function(){d(this).each(function(){w(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),i=function(c,a){if(c.defaultValue===l)c.defaultValue="";if(!c.removeAttr)c.removeAttr={value:function(){c[a||"prop"].set.call(this,c.defaultValue);c.removeAttr._supvalue.call(this)}};if(!c.attr)c.attr={}};d.extend(g,{getID:function(){var c=(new Date).getTime();return function(a){var a=d(a),b=a.attr("id");b||(c++,b="ID-"+c,a.attr("id",b));
return b}}(),extendUNDEFProp:function(c,a){d.each(a,function(a,f){a in c||(c[a]=f)})},createPropDefault:i,data:w,moveToFirstEvent:function(){var c=d._data?"_data":"data";return function(a,b,f){if((a=(d[c](a,"events")||{})[b])&&1<a.length)b=a.pop(),f||(f="bind"),"bind"==f&&a.delegateCount?a.splice(a.delegateCount,0,b):a.unshift(b)}}(),addShadowDom:function(){var c,a,b,f={init:!1,runs:0,test:function(){var a=f.getHeight(),b=f.getWidth();a!=f.height||b!=f.width?(f.height=a,f.width=b,f.handler({type:"docresize"}),
f.runs++,30>f.runs&&setTimeout(f.test,30)):f.runs=0},handler:function(e){clearTimeout(c);c=setTimeout(function(){if("resize"==e.type){var c=d(j).width(),h=d(j).width();if(h==a&&c==b)return;a=h;b=c;f.height=f.getHeight();f.width=f.getWidth()}d.event.trigger("updateshadowdom")},"resize"==e.type?50:9)},_create:function(){d.each({Height:"getHeight",Width:"getWidth"},function(a,b){var c=m.body,e=m.documentElement;f[b]=function(){return Math.max(c["scroll"+a],e["scroll"+a],c["offset"+a],e["offset"+a],e["client"+
a])}})},start:function(){if(!this.init&&m.body)this.init=!0,this._create(),this.height=f.getHeight(),this.width=f.getWidth(),setInterval(this.test,400),d(this.test),d(j).bind("load",this.test),d(j).bind("resize",this.handler),function(){var a=d.fn.animate,b;d.fn.animate=function(){clearTimeout(b);b=setTimeout(function(){f.test();f.handler({type:"animationstart"})},19);return a.apply(this,arguments)}}()}};d.event.customEvent.updateshadowdom=!0;g.docObserve=function(){g.ready("DOM",function(){f.start()})};
return function(a,b,c){c=c||{};a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);var f=d.data(a,r)||d.data(a,r,{}),e=d.data(b,r)||d.data(b,r,{}),h={};if(c.shadowFocusElement){if(c.shadowFocusElement){if(c.shadowFocusElement.jquery)c.shadowFocusElement=c.shadowFocusElement[0];h=d.data(c.shadowFocusElement,r)||d.data(c.shadowFocusElement,r,h)}}else c.shadowFocusElement=b;f.hasShadow=b;h.nativeElement=e.nativeElement=a;h.shadowData=e.shadowData=f.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:c.shadowFocusElement};
c.shadowChilds&&c.shadowChilds.each(function(){w(this,"shadowData",e.shadowData)});if(c.data)h.shadowData.data=e.shadowData.data=f.shadowData.data=c.data;c=null;g.docObserve()}}(),propTypes:{standard:function(c){i(c);if(!c.prop)c.prop={set:function(a){c.attr.set.call(this,""+a)},get:function(){return c.attr.get.call(this)||c.defaultValue}}},"boolean":function(c){i(c);if(!c.prop)c.prop={set:function(a){a?c.attr.set.call(this,""):c.removeAttr.value.call(this)},get:function(){return null!=c.attr.get.call(this)}}},
src:function(){var c=m.createElement("a");c.style.display="none";return function(a,b){i(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var a=this.getAttribute(b),e;if(null==a)return"";c.setAttribute("href",a+"");if(!d.support.hrefNormalized){try{d(c).insertAfter(this),e=c.getAttribute("href",4)}catch(h){e=c.getAttribute("href",4)}d(c).detach()}return e||c.href}}}}(),enumarated:function(c){i(c);if(!c.prop)c.prop={set:function(a){c.attr.set.call(this,a)},get:function(){var a=
(c.attr.get.call(this)||"").toLowerCase();if(!a||-1==c.limitedTo.indexOf(a))a=c.defaultValue;return a}}}},reflectProperties:function(c,a){"string"==typeof a&&(a=a.split(s));a.forEach(function(a){g.defineNodeNamesProperty(c,a,{prop:{set:function(c){d.attr(this,a,c)},get:function(){return d.attr(this,a)||""}}})})},defineNodeNameProperty:function(c,a,b){t[a]=!0;if(b.reflect)g.propTypes[b.propType||"standard"](b,a);["prop","attr","removeAttr"].forEach(function(f){var e=b[f];e&&(e="prop"===f?d.extend({writeable:!0},
e):d.extend({},e,{writeable:!0}),z[f](c,a,e),"*"!=c&&g.cfg.extendNative&&"prop"==f&&e.value&&d.isFunction(e.value)&&h(c,a,e),b[f]=e)});b.initAttr&&e.content(c,a);return b},defineNodeNameProperties:function(c,a,b,f){for(var h in a)!f&&a[h].initAttr&&e.createTmpCache(c),b&&!a[h][b]&&(a[h][b]={},["value","set","get"].forEach(function(c){c in a[h]&&(a[h][b][c]=a[h][c],delete a[h][c])})),a[h]=g.defineNodeNameProperty(c,h,a[h]);f||e.flushTmpCache();return a},createElement:function(c,a,b){var f;d.isFunction(a)&&
(a={after:a});e.createTmpCache(c);a.before&&e.createElement(c,a.before);b&&(f=g.defineNodeNameProperties(c,b,!1,!0));a.after&&e.createElement(c,a.after);e.flushTmpCache();return f},onNodeNamesPropertyModify:function(c,a,b,f){"string"==typeof c&&(c=c.split(s));d.isFunction(b)&&(b={set:b});c.forEach(function(c){q[c]||(q[c]={});"string"==typeof a&&(a=a.split(s));b.initAttr&&e.createTmpCache(c);a.forEach(function(a){q[c][a]||(q[c][a]=[],t[a]=!0);if(b.set){if(f)b.set.only=f;q[c][a].push(b.set)}b.initAttr&&
e.content(c,a)});e.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,a,b){b||(b={});if(d.isFunction(b))b.set=b;g.defineNodeNamesProperty(c,a,{attr:{set:function(c){this.setAttribute(a,c);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?l:a}},removeAttr:{value:function(){this.removeAttribute(a);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},contentAttr:function(c,a,b){if(c.nodeName){if(b===l)return c=c.attributes[a]||{},
b=c.specified?c.value:null,null==b?l:b;"boolean"==typeof b?b?c.setAttribute(a,a):c.removeAttribute(a):c.setAttribute(a,b)}},activeLang:function(){var c=[],a={},b,f,e=/:\/\/|^\.*\//,h=function(a,c,b){return c&&b&&-1!==d.inArray(c,b.availabeLangs||[])?(a.loading=!0,b=b.langSrc,e.test(b)||(b=g.cfg.basePath+b),g.loader.loadScript(b+c+".js",function(){a.langObj[c]?(a.loading=!1,u(a,!0)):d(function(){a.langObj[c]&&u(a,!0);a.loading=!1})}),!0):!1},i=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},
u=function(a,c){if(a.activeLang!=b&&a.activeLang!==f){var e=v[a.module].options;if(a.langObj[b]||f&&a.langObj[f])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[f],b),i(a.module);else if(!c&&!h(a,b,e)&&!h(a,f,e)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),i(a.module)}};return function(e){if("string"==typeof e&&e!==b)b=e,f=b.split("-")[0],b==f&&(f=!1),d.each(c,function(a,b){u(b)});else if("object"==typeof e)if(e.register)a[e.register]||(a[e.register]=[]),a[e.register].push(e),
e.callback();else{if(!e.activeLang)e.activeLang="";c.push(e);u(e)}return b}}()});d.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(c,a){g[c]=function(b,c,e,h){"string"==typeof b&&(b=b.split(s));var d={};b.forEach(function(b){d[b]=g[a](b,c,e,h)});return d}});g.isReady("webshimLocalization",!0)});
(function(d,g){var j=d.webshims.browserVersion;if(!(d.browser.mozilla&&5<j)&&(!d.browser.msie||12>j&&7<j)){var m={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},l=function(d,g){d.getAttribute("role")||d.setAttribute("role",g)};d.webshims.addReady(function(j,s){d.each(m,function(g,m){for(var o=d(g,j).add(s.filter(g)),k=0,r=o.length;k<r;k++)l(o[k],m)});if(j===g){var p=g.getElementsByTagName("header")[0],t=g.getElementsByTagName("footer"),n=t.length;
p&&!d(p).closest("section, article")[0]&&l(p,"banner");n&&(p=t[n-1],d(p).closest("section, article")[0]||l(p,"contentinfo"))}})}})(jQuery,document);
(function(d,g,j){var m=g.audio&&g.video,l=!1,v=j.cfg.mediaelement,s=j.bugs,p="jwplayer"==v.player?"mediaelement-swf":"mediaelement-jaris",t=function(){j.ready(p,function(){if(!j.mediaelement.createSWF)j.mediaelement.loadSwf=!0,j.reTest([p],m)})},n;if(m){var z=document.createElement("video");g.videoBuffered="buffered"in z;l="loop"in z;j.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));g.videoBuffered||(j.addPolyfill("mediaelement-native-fix",
{f:"mediaelement",test:g.videoBuffered,d:["dom-support"]}),j.reTest("mediaelement-native-fix"))}if(m&&!v.preferFlash){var q=function(g){var k=g.target.parentNode;!v.preferFlash&&(d(g.target).is("audio, video")||k&&d("source:last",k)[0]==g.target)&&j.ready("DOM mediaelement",function(){n&&t();j.ready("WINDOWLOAD "+p,function(){setTimeout(function(){n&&!v.preferFlash&&j.mediaelement.createSWF&&!d(g.target).closest("audio, video").is(".nonnative-api-active")?(v.preferFlash=!0,document.removeEventListener("error",
q,!0),d("audio, video").mediaLoad(),j.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+g.target.src)):n||document.removeEventListener("error",q,!0)},20)})})};document.addEventListener("error",q,!0);d("audio, video").each(function(){this.error&&q({target:this})})}s.track=!1;g.track&&function(){if(!s.track)s.track="number"!=typeof d("<track />")[0].readyState;if(!s.track)try{new TextTrackCue(2,3,"")}catch(g){s.track=!0}var k=j.cfg.track,l=function(h){d(h.target).filter("track").each(m)},
m=function(){if(s.track||!k.override&&3==d.prop(this,"readyState"))k.override=!0,j.reTest("track"),document.removeEventListener("error",l,!0),this&&d.nodeName(this,"track")?j.error("track support was overwritten. Please check your vtt including your vtt mime-type"):j.info("track support was overwritten. due to bad browser support")},n=function(){document.addEventListener("error",l,!0);s.track?m():d("track").each(m)};k.override||(j.isReady("track")?n():d(n))}();j.register("mediaelement-core",function(d,
k,j,q,y){n=swfobject.hasFlashPlayerVersion("9.0.115");var h=k.mediaelement,e=function(a,b){var a=d(a),c={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!c.src)return c;var e=a.attr("type");if(e)c.type=e,c.container=d.trim(e.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=h.getTypeForSrc(c.src,b))c.type=e,c.container=e;if(e=a.attr("media"))c.media=e;return c},i=!n&&"postMessage"in j&&m,c=
function(){var a;return function(){!a&&i&&(a=!0,k.loader.loadScript("https://www.youtube.com/player_api"),d(function(){k.polyfill("mediaelement-yt")}))}}(),a=function(){n?t():c();d(function(){k.loader.loadList(["track-ui"])})};k.addPolyfill("mediaelement-yt",{test:!i,d:["dom-support"]});h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp",
"3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=d.extend({},h.mimeTypes.audio,h.mimeTypes.video);
h.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],c;d.each(h.mimeTypes[b],function(b,e){if(-1!==e.indexOf(a))return c=b,!1});return c};h.srces=function(a,b){a=d(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),d.isArray(b)||(b=[b]),b.forEach(function(b){var c=q.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",
b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var b=[],c=a[0].nodeName.toLowerCase(),f=e(a,c);f.src?b.push(f):d("source",a).each(function(){f=e(this,c);f.src&&b.push(f)});return b}};d.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==y&&(d(this).removeAttr("poster"),b&&d.attr(this,"poster",b));h.srces(this,a);d(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
h.canThirdPlaySrces=function(a,b){var c="";if(n||i)a=d(a),b=b||h.srces(a),d.each(b,function(a,b){if(b.container&&b.src&&(n&&-1!=h.swfMimeTypes.indexOf(b.container)||i&&"video/youtube"==b.container))return c=b,!1});return c};var b={};h.canNativePlaySrces=function(a,c){var e="";if(m){var a=d(a),f=(a[0].nodeName||"").toLowerCase();if(!b[f])return e;c=c||h.srces(a);d.each(c,function(c,d){if(d.type&&b[f].prop._supvalue.call(a[0],d.type))return e=d,!1})}return e};h.setError=function(a,b){b||(b="can't play sources");
d(a).pause().data("mediaerror",b);k.warn("mediaelementError: "+b);setTimeout(function(){d(a).data("mediaerror")&&d(a).trigger("mediaerror")},1)};var f=function(){var b;return function(e,g,j){k.ready(n?p:"mediaelement-yt",function(){h.createSWF?h.createSWF(e,g,j):b||(b=!0,a(),f(e,g,j))});!b&&i&&!h.createSWF&&c();d(function(){k.loader.loadList(["track-ui"])})}}(),B=function(a,b,c,e,d){c||!1!==c&&b&&"third"==b.isActive?(c=h.canThirdPlaySrces(a,e))?f(a,c,b):d?h.setError(a,!1):B(a,b,!1,e,!0):(c=h.canNativePlaySrces(a,
e))?b&&"third"==b.isActive&&h.setActive(a,"html5",b):d?(h.setError(a,!1),b&&"third"==b.isActive&&h.setActive(a,"html5",b)):B(a,b,!0,e,!0)},D=/^(?:embed|object|datalist)$/i,C=function(a,b){var c=k.data(a,"mediaelementBase")||k.data(a,"mediaelementBase",{}),e=h.srces(a),f=a.parentNode;clearTimeout(c.loadTimer);d.data(a,"mediaerror",!1);if(e.length&&f&&!(1!=f.nodeType||D.test(f.nodeName||"")))b=b||k.data(a,"mediaelement"),B(a,b,v.preferFlash||y,e)};d(q).bind("ended",function(a){var b=k.data(a.target,
"mediaelement");(!l||b&&"html5"!=b.isActive||d.prop(a.target,"loop"))&&setTimeout(function(){!d.prop(a.target,"paused")&&d.prop(a.target,"loop")&&d(a.target).prop("currentTime",0).play()},1)});l||k.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var c=k.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=k.data(this,"mediaelement");C(this,a);m&&(!a||"html5"==a.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});b[a]=k.defineNodeNameProperty(a,
"canPlayType",{prop:{value:function(c){var e="";m&&b[a].prop._supvalue&&(e=b[a].prop._supvalue.call(this,c),"no"==e&&(e=""));!e&&n&&(c=d.trim((c||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(c)&&(e="maybe"));return e}}})});k.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=k.data(a,"mediaelementBase")||k.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){C(a);a=null},9)}});j=function(){k.addReady(function(a,b){d("video, audio",
a).add(b.filter("video, audio")).each(function(){d.browser.msie&&8<k.browserVersion&&d.prop(this,"paused")&&!d.prop(this,"readyState")&&d(this).is('audio[preload="none"][controls]:not([autoplay])')?d(this).prop("preload","metadata").mediaLoad():C(this);if(m){var a,b,c=this,e=function(){var a=d.prop(c,"buffered");if(a){for(var b="",e=0,f=a.length;e<f;e++)b+=a.end(e);return b}},f=function(){var a=e();a!=b&&(b=a,d(c).triggerHandler("progress"))};d(this).bind("play loadstart progress",function(c){"progress"==
c.type&&(b=e());clearTimeout(a);a=setTimeout(f,999)}).bind("emptied stalled mediaerror abort suspend",function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};g.track&&!s.track&&k.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});m?(k.isReady("mediaelement-core",!0),j(),k.ready("WINDOWLOAD mediaelement",a)):k.ready(p,j);d(function(){q.getElementsByTagName("track")[0]&&k.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("track",function(d,g,j,m){var l=g.mediaelement;(new Date).getTime();var v={subtitles:1,captions:1,descriptions:1},s=d("<track />"),p=Modernizr.ES5&&Modernizr.objectAccessor,t=function(d){var e={};d.addEventListener=function(d,c){e[d]&&g.error("always use $.bind to the shimed event: "+d+" already bound fn was: "+e[d]+" your fn was: "+c);e[d]=c};d.removeEventListener=function(d,c){e[d]&&e[d]!=c&&g.error("always use $.bind/$.unbind to the shimed event: "+d+" already bound fn was: "+
e[d]+" your fn was: "+c);e[d]&&delete e[d]};return d},n={getCueById:function(d){for(var e=null,g=0,c=this.length;g<c;g++)if(this[g].id===d){e=this[g];break}return e}},z={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(d){if(this.cues){var e=this.cues[this.cues.length-1];e&&e.startTime>d.startTime&&g.error("cue startTime higher than previous cue's startTime")}else this.cues=
l.createCueList();d.track&&d.track.removeCue&&d.track.removeCue(d);d.track=this;this.cues.push(d)},removeCue:function(d){var e=this.cues||[],i=0,c=e.length;if(d.track!=this)g.error("cue not part of track");else{for(;i<c;i++)if(e[i]===d){e.splice(i,1);d.track=null;break}d.track&&g.error("cue not part of track")}},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},q=["kind","label","srclang"],o={srclang:"language"},k=Function.prototype.call.bind(Object.prototype.hasOwnProperty),
r=function(h,e){var i=[],c=[],a=[],b,f;h||(h=g.data(this,"mediaelementBase")||g.data(this,"mediaelementBase",{}));if(!e)h.blockTrackListUpdate=!0,e=d.prop(this,"textTracks"),h.blockTrackListUpdate=!1;clearTimeout(h.updateTrackListTimer);d("track",this).each(function(){var b=d.prop(this,"track");a.push(b);-1==e.indexOf(b)&&c.push(b)});if(h.scriptedTextTracks)for(b=0,f=h.scriptedTextTracks.length;b<f;b++)a.push(h.scriptedTextTracks[b]),-1==e.indexOf(h.scriptedTextTracks[b])&&c.push(h.scriptedTextTracks[b]);
for(b=0,f=e.length;b<f;b++)-1==a.indexOf(e[b])&&i.push(e[b]);if(i.length||c.length){e.splice(0);for(b=0,f=a.length;b<f;b++)e.push(a[b]);for(b=0,f=i.length;b<f;b++)d([e]).triggerHandler(d.Event({type:"removetrack",track:e,track:i[b]}));for(b=0,f=c.length;b<f;b++)d([e]).triggerHandler(d.Event({type:"addtrack",track:e,track:c[b]}));(h.scriptedTextTracks||i.length)&&d(this).triggerHandler("updatetrackdisplay")}},w=function(h,e){e||(e=g.data(h,"trackData"));if(e&&!e.isTriggering)e.isTriggering=!0,setTimeout(function(){(e.track||
{}).readyState?d(h).closest("audio, video").triggerHandler("updatetrackdisplay"):d(h).triggerHandler("checktrackmode");e.isTriggering=!1},1)},y=d("<div />")[0];j.TextTrackCue=function(d,e,i){3!=arguments.length&&g.error("wrong arguments.length for TextTrackCue.constructor");this.startTime=d;this.endTime=e;this.text=i;this.id="";this.pauseOnExit=!1;t(this)};j.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var d="",e="",g=m.createDocumentFragment(),c;if(!k(this,
"getCueAsHTML"))c=this.getCueAsHTML=function(){var a,b;if(d!=this.text){d=this.text;e=l.parseCueTextToHTML(d);y.innerHTML=e;for(a=0,b=y.childNodes.length;a<b;a++)g.appendChild(y.childNodes[a].cloneNode(!0))}return g.cloneNode(!0)};return c?c.apply(this,arguments):g.cloneNode(!0)},track:null,id:""};l.createCueList=function(){return d.extend([],n)};l.parseCueTextToHTML=function(){var d=/(<\/?[^>]+>)/ig,e=/^(?:c|v|ruby|rt|b|i|u)/,g=/\<\s*\//,c=function(a,c,d,e){g.test(e)?a="</"+a+">":(d.splice(0,1),
a="<"+a+" "+c+'="'+d.join(" ").replace(/\"/g,"&#34;")+'">');return a},a=function(a){var d=a.replace(/[<\/>]+/ig,"").split(/[\s\.]+/);d[0]&&(d[0]=d[0].toLowerCase(),e.test(d[0])?"c"==d[0]?a=c("span","class",d,a):"v"==d[0]&&(a=c("q","title",d,a)):a="");return a};return function(b){return b.replace(d,a)}}();l.loadTextTrack=function(h,e,i,c){var a=i.track,b=function(){var c=d.prop(e,"src"),i,j;if("disabled"!=a.mode&&c&&d.attr(e,"src")&&(d(h).unbind("play playing timeupdate updatetrackdisplay",b),d(e).unbind("checktrackmode",
b),!a.readyState)){i=function(){a.readyState=3;a.cues=null;a.activeCues=a.shimActiveCues=a._shimActiveCues=null;d(e).triggerHandler("error")};a.readyState=1;try{a.cues=l.createCueList(),a.activeCues=a.shimActiveCues=a._shimActiveCues=l.createCueList(),j=d.ajax({dataType:"text",url:c,success:function(b){"text/vtt"!=j.getResponseHeader("content-type")&&g.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt");l.parseCaptions(b,a,function(b){b&&"length"in
b?(a.readyState=2,d(e).triggerHandler("load"),d(h).triggerHandler("updatetrackdisplay")):i()})},error:i})}catch(k){i(),g.warn(k)}}};a.readyState=0;a.shimActiveCues=null;a._shimActiveCues=null;a.activeCues=null;a.cues=null;d(h).unbind("play playing timeupdate updatetrackdisplay",b);d(e).unbind("checktrackmode",b);d(h).bind("play playing timeupdate updatetrackdisplay",b);d(e).bind("checktrackmode",b);if(c)a.mode=v[a.kind]?"showing":"hidden",b()};l.createTextTrack=function(h,e){var i,c;if(e.nodeName&&
(c=g.data(e,"trackData")))w(e,c),i=c.track;if(!i)i=t(g.objectCreate(z)),p||q.forEach(function(a){var b=d.prop(e,a);b&&(i[o[a]||a]=b)}),e.nodeName?(p&&q.forEach(function(a){g.defineProperty(i,o[a]||a,{get:function(){return d.prop(e,a)}})}),c=g.data(e,"trackData",{track:i}),l.loadTextTrack(h,e,c,d.prop(e,"default")&&d(e).siblings("track[default]").andSelf()[0]==e)):(p&&q.forEach(function(a){g.defineProperty(i,o[a]||a,{value:e[a],writeable:!1})}),i.cues=l.createCueList(),i.activeCues=i._shimActiveCues=
i.shimActiveCues=l.createCueList(),i.mode="hidden",i.readyState=2);return i};l.parseCaptionChunk=function(){var d=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,e=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,i=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,c=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(a){var b,f,j,k;if(e.exec(a)||i.exec(a)||c.exec(a))return null;for(a=a.split(/\n/g);!a[0].replace(/\s+/ig,"").length&&0<a.length;)a.shift();for(a[0].match(/^\s*[a-z0-9-\_]+\s*$/ig)&&
(j=""+a.shift().replace(/\s*/ig,""));0<a.length;){if(k=d.exec(a[0]))f=k.slice(1),b=parseInt(3600*(f[0]||0),10)+parseInt(60*(f[1]||0),10)+parseInt(f[2]||0,10)+parseFloat("0."+(f[3]||0)),f=parseInt(3600*(f[4]||0),10)+parseInt(60*(f[5]||0),10)+parseInt(f[6]||0,10)+parseFloat("0."+(f[7]||0));a=a.slice(0,0).concat(a.slice(1));break}if(!b&&!f)return g.warn("couldn't extract time information: "+[b,f,a.join("\n"),j].join(" ; ")),null;a=a.join("\n");b=new TextTrackCue(b,f,a);if(j)b.id=j;return b}}();l.parseCaptions=
function(d,e,i){l.createCueList();var c,a,b,f,j;d?(b=/^WEBVTT(\s*FILE)?/ig,a=function(k,m){for(;k<m;k++){c=d[k];if(b.test(c))j=!0;else if(c.replace(/\s*/ig,"").length){if(!j){g.error("please use WebVTT format. This is the standard");i(null);break}(c=l.parseCaptionChunk(c,k))&&e.addCue(c)}if(f<(new Date).getTime()-30){k++;setTimeout(function(){f=(new Date).getTime();a(k,m)},90);break}}k>=m&&(j||g.error("please use WebVTT format. This is the standard"),i(e.cues))},d=d.replace(/\r\n/g,"\n"),setTimeout(function(){d=
d.replace(/\r/g,"\n");setTimeout(function(){f=(new Date).getTime();d=d.split(/\n\n+/g);a(0,d.length)},9)},9)):g.error("Required parameter captionData not supplied.")};l.createTrackList=function(d,e){e=e||g.data(d,"mediaelementBase")||g.data(d,"mediaelementBase",{});if(!e.textTracks)e.textTracks=[],g.defineProperties(e.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),t(e.textTracks);return e.textTracks};Modernizr.track||(g.defineNodeNamesBooleanProperty(["track"],"default"),g.reflectProperties(["track"],
["srclang","label"]),g.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}}));g.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(d){var e=g.data(this,"trackData");this.setAttribute("data-kind",d);if(e)e.attrKind=d},get:function(){var d=g.data(this,"trackData");return d&&"attrKind"in d?d.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}});
d.each(q,function(h,e){var i=o[e]||e;g.onNodeNamesPropertyModify("track",e,function(){var c=g.data(this,"trackData"),a=this;if(c)"kind"==e&&w(this,c),p||(c.track[i]=d.prop(this,e)),clearTimeout(c.changedTrackPropTimer),c.changedTrackPropTimer=setTimeout(function(){d(a).trigger("updatesubtitlestate")},1)})});g.onNodeNamesPropertyModify("track","src",function(h){if(h){var h=g.data(this,"trackData"),e;h&&(e=d(this).closest("video, audio"),e[0]&&l.loadTextTrack(e,this,h))}});g.defineNodeNamesProperties(["track"],
{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(d.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return l.createTextTrack(d(this).closest("audio, video")[0],this)},writeable:!1}},"prop");g.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var d=g.data(this,"mediaelementBase")||g.data(this,"mediaelementBase",{}),e=l.createTrackList(this,d);d.blockTrackListUpdate||r.call(this,d,e);return e},
writeable:!1},addTextTrack:{value:function(d,e,i){d=l.createTextTrack(this,{kind:s.prop("kind",d||"").prop("kind"),label:e||"",srclang:i||""});e=g.data(this,"mediaelementBase")||g.data(this,"mediaelementBase",{});if(!e.scriptedTextTracks)e.scriptedTextTracks=[];e.scriptedTextTracks.push(d);r.call(this);return d}}},"prop");d(m).bind("emptied ended updatetracklist",function(h){if(d(h.target).is("audio, video")){var e=g.data(h.target,"mediaelementBase");if(e)clearTimeout(e.updateTrackListTimer),e.updateTrackListTimer=
setTimeout(function(){r.call(h.target,e)},0)}});g.addReady(function(h,e){var i=e.filter("video, audio, track").closest("audio, video");d("video, audio",h).add(i).each(function(){r.call(this)}).each(function(){if(Modernizr.track){var c=this.textTracks;d.prop(this,"textTracks").length!=c.length&&g.error("textTracks couldn't be copied");d("track",this).each(function(){var a=d.prop(this,"track"),b=this.track,c,e;if(b){c=d.prop(this,"kind");e=b.readyState||this.readyState;if(b.mode||e)a.mode=b.mode;if("descriptions"!=
c)b.mode="string"==typeof b.mode?"disabled":0,this.kind="metadata",d(this).attr({kind:c})}}).bind("load error",function(a){a.originalEvent&&a.stopImmediatePropagation()})}});i.each(function(){var c=this,a=g.data(c,"mediaelementBase");if(a)clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){r.call(c,a)},9)})});Modernizr.track&&d("video, audio").trigger("trackapichange");d(function(){g.loader.loadList(["track-ui"])})});
