webshims.register("form-shim-extend",function(e,t,i,n,a){"use strict";t.inputTypes=t.inputTypes||{};var r,o=t.cfg.forms,s=t.bugs,u=t.inputTypes,l={radio:1,checkbox:1},c=function(e){return(e.getAttribute("type")||e.type||"").toLowerCase()};(function(){if("querySelector"in n){try{s.findRequired=!e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /></form>')[0].querySelector("select:required")}catch(t){s.findRequired=!1}(s.bustedValidity||s.findRequired)&&function(){var t=e.find,i=e.find.matchesSelector,a=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/gi,r=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,i=function(i){var n=arguments;return n=e.call(n,1,n.length),n.unshift(i.replace(a,r)),t.apply(this,n)};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i}(),(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",n.documentElement))&&(e.find.matchesSelector=function(e,t){return t=t.replace(a,r),i.call(this,e,t)})}()}})(),t.addInputType=function(e,t){u[e]=t};var p={customError:!1,typeMismatch:!1,badInput:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},d=function(t){if("select-one"==t.type&&2>t.size){var i=e("> option:first-child",t);return!!i.prop("selected")}return!1},f=e([]),h=function(t){t=e(t);var i,a,r=f;return"radio"==t[0].type&&(a=t.prop("form"),i=t[0].name,r=i?a?e(a[i]):e(n.getElementsByName(i)).filter(function(){return!e.prop(this,"form")}):t,r=r.filter('[type="radio"]')),r},m={valueMissing:function(e,t,i){if(!e.prop("required"))return!1;var n=!1;return"type"in i||(i.type=c(e[0])),n="select"==i.nodeName?!t&&(0>e[0].selectedIndex||d(e[0])):l[i.type]?"checkbox"==i.type?!e.is(":checked"):!h(e).filter(":checked")[0]:!t},tooLong:function(){return!1},patternMismatch:function(e,i,n){if(""===i||"select"==n.nodeName)return!1;var a=e.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(r){t.error('invalid pattern value: "'+a+'" | '+r),a=!1}return a?!a.test(i):!1}};e.each({typeMismatch:"mismatch",badInput:"bad"},function(e,t){m[e]=function(i,n,a){if(""===n||"select"==a.nodeName)return!1;var r=!1;return"type"in a||(a.type=c(i[0])),u[a.type]&&u[a.type][t]?r=u[a.type][t](n,i):"validity"in i[0]&&"name"in i[0].validity&&(r=i[0].validity[e]||!1),r}}),t.addValidityRule=function(e,t){m[e]=t},e.event.special.invalid={add:function(){e.event.special.invalid.setup.call(this.form||this)},setup:function(){var i=this.form||this;return e.data(i,"invalidEventShim")?(i=null,a):(e(i).data("invalidEventShim",!0).on("submit",e.event.special.invalid.handler),t.moveToFirstEvent(i,"submit"),t.bugs.bustedValidity&&e.nodeName(i,"form")&&function(){var e=i.getAttribute("novalidate");i.setAttribute("novalidate","novalidate"),t.data(i,"bustedNoValidate",null==e?null:e)}(),i=null,a)},teardown:e.noop,handler:function(t){if("submit"==t.type&&!t.testedValidity&&t.originalEvent&&e.nodeName(t.target,"form")&&!e.prop(t.target,"noValidate")){r=!0,t.testedValidity=!0;var i=!e(t.target).checkValidity();return i?(t.stopImmediatePropagation(),r=!1,!1):(r=!1,a)}}},e.event.special.submit=e.event.special.submit||{setup:function(){return!1}};var v=e.event.special.submit.setup;e.extend(e.event.special.submit,{setup:function(){return e.nodeName(this,"form")?e(this).on("invalid",e.noop):e("form",this).on("invalid",e.noop),v.apply(this,arguments)}}),t.ready("form-shim-extend2 WINDOWLOAD",function(){e(i).on("invalid",e.noop)}),t.addInputType("email",{mismatch:function(){var e=o.emailReg||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return function(t){if(i.punycode&&punycode.toASCII)try{if(e.test(punycode.toASCII(t)))return!1}catch(n){}return!e.test(t)}}()}),t.addInputType("url",{mismatch:function(){var e=o.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return function(t){return!e.test(t)}}()}),t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,i=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[i]?i:e.type}}}),t.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:e.noop},validity:{writeable:!1,get:function(){return e.extend({},p)}}},"prop");var g=function(i){var n,a=e.prop(i,"validity");if(!a)return!0;if(e.data(i,"cachedValidity",a),!a.valid){n=e.Event("invalid");var o=e(i).trigger(n);!r||g.unhandledInvalids||n.isDefaultPrevented()||(t.validityAlert.showFor(o),g.unhandledInvalids=!0)}return e.removeData(i,"cachedValidity"),a.valid},y=/^(?:select|textarea|input)/i;t.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var i=!0,n=e(e.prop(this,"elements")).filter(function(){if(!y.test(this.nodeName))return!1;var e=t.data(this,"shadowData");return!e||!e.nativeElement||e.nativeElement===this});g.unhandledInvalids=!1;for(var a=0,r=n.length;r>a;a++)g(n[a])||(i=!1);return i}}}),t.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){return g.unhandledInvalids=!1,g(e(this).getNativeElement()[0])}},setCustomValidity:{value:function(i){e.removeData(this,"cachedValidity"),t.data(this,"customvalidationMessage",""+i)}},willValidate:{writeable:!1,get:function(){var t={button:1,reset:1,hidden:1,image:1};return function(){var i=e(this).getNativeElement()[0];return!(i.disabled||i.readOnly||t[i.type])}}()},validity:{writeable:!1,get:function(){var i=e(this).getNativeElement(),n=i[0],a=e.data(n,"cachedValidity");if(a)return a;if(a=e.extend({},p),!e.prop(n,"willValidate")||"submit"==n.type)return a;var r=i.val(),o={nodeName:n.nodeName.toLowerCase()};return a.customError=!!t.data(n,"customvalidationMessage"),a.customError&&(a.valid=!1),e.each(m,function(e,t){t(i,r,o)&&(a[e]=!0,a.valid=!1)}),e(this).getShadowFocusElement().attr("aria-invalid",a.valid?"false":"true"),i=null,n=null,a}}},"prop"),t.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(t){e(this).getShadowFocusElement().attr("aria-required",!!t+"")},initAttr:Modernizr.localstorage}),t.bugs.bustedValidity&&(t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){t.data(this,"bustedNoValidate",""+e)},get:function(){var e=t.data(this,"bustedNoValidate");return null==e?a:e}},removeAttr:{value:function(){t.data(this,"bustedNoValidate",null)}}}),e.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(e,t){m[t]=function(e){return(e[0].validity||{})[t]||!1}})),t.defineNodeNameProperty("form","noValidate",{prop:{set:function(t){t=!!t,t?e.attr(this,"novalidate","novalidate"):e(this).removeAttr("novalidate")},get:function(){return null!=e.attr(this,"novalidate")}}}),Modernizr.inputtypes.date&&/webkit/i.test(navigator.userAgent)&&function(){var t={updateInput:1,input:1},i={date:1,time:1,month:1,week:1,"datetime-local":1},a={focusout:1,blur:1},r={updateInput:1,change:1},o=function(e){var i,n,o=!0,s=e.prop("value"),u=s,l=function(i){if(e){var n=e.prop("value");n!==s&&(s=n,i&&t[i.type]||e.trigger("input")),i&&r[i.type]&&(u=n),o||n===u||e.trigger("change")}},c=function(){clearTimeout(n),n=setTimeout(l,9)},p=function(t){clearInterval(i),setTimeout(function(){t&&a[t.type]&&(o=!1),e&&(e.unbind("focusout blur",p).unbind("input change updateInput",l),l()),e=null},1)};clearInterval(i),i=setInterval(l,160),c(),e.off({"focusout blur":p,"input change updateInput":l}).on({"focusout blur":p,"input updateInput change":l})};e(n).on("focusin",function(t){t.target&&i[t.target.type]&&!t.target.readOnly&&!t.target.disabled&&o(e(t.target))})}(),t.addReady(function(t,i){var a;e("form",t).add(i.filter("form")).bind("invalid",e.noop);try{t!=n||"form"in(n.activeElement||{})||(a=e("input[autofocus], select[autofocus], textarea[autofocus]",t).eq(0).getShadowFocusElement()[0],a&&a.offsetHeight&&a.offsetWidth&&a.focus())}catch(r){}}),Modernizr.input.list||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var i,n=this,a=e("select",n);return a[0]?i=e.makeArray(a[0].options||[]):(i=e("option",n).get(),i.length&&t.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),i}}});var b={submit:1,button:1,image:1},w={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(t){var i="form"+(t.propName||t.name).replace(/^[a-z]/,function(e){return e.toUpperCase()}),a="form"+t.name,r=t.name,o="click.webshimssubmittermutate"+r,s=function(){var n=this;if("form"in n&&b[n.type]){var o=e.prop(n,"form");if(o){var s=e.attr(n,a);if(null!=s&&(!t.limitedTo||s.toLowerCase()===e.prop(n,i))){var u=e.attr(o,r);e.attr(o,r,s),setTimeout(function(){if(null!=u)e.attr(o,r,u);else try{e(o).removeAttr(r)}catch(t){o.removeAttribute(r)}},9)}}}};switch(t.proptype){case"url":var u=n.createElement("form");w[i]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var t=e.attr(this,a);return null==t?"":(u.setAttribute("action",t),u.action)}}};break;case"boolean":w[i]={prop:{set:function(t){t=!!t,t?e.attr(this,"formnovalidate","formnovalidate"):e(this).removeAttr("formnovalidate")},get:function(){return null!=e.attr(this,"formnovalidate")}}};break;case"enum":w[i]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var i=e.attr(this,a);return!i||(i=i.toLowerCase())&&!t.limitedTo[i]?t.defaultProp:i}}};break;default:w[i]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var t=e.attr(this,a);return null!=t?t:""}}}}w[a]||(w[a]={}),w[a].attr={set:function(t){w[a].attr._supset.call(this,t),e(this).unbind(o).on(o,s)},get:function(){return w[a].attr._supget.call(this)}},w[a].initAttr=!0,w[a].removeAttr={value:function(){e(this).unbind(o),w[a].removeAttr._supvalue.call(this)}}}),t.defineNodeNamesProperties(["input","button"],w)});