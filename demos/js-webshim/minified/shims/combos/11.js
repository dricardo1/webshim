(function(e){var t=function(e){return"number"==typeof e||e&&e==1*e},i=function(e,t){return"number"==typeof e||e&&e==1*e?1*e:t},n=["step","min","max","readonly","title","disabled","tabindex"],a={_create:function(){var t;for(this.element.addClass("ws-range").attr({role:"slider"}).append('<span class="ws-range-min" /><span class="ws-range-rail"><span class="ws-range-thumb" /></span>'),this.trail=e(".ws-range-rail",this.element),this.range=e(".ws-range-min",this.element),this.thumb=e(".ws-range-thumb",this.trail),this.updateMetrics(),this.orig=this.options.orig,t=0;n.length>t;t++)this[n[t]](this.options[n[t]]);this.value=this._value,this.value(this.options.value),this.initDataList(),this.element.data("rangeUi",this),this.addBindings(),this._init=!0},value:e.noop,_value:function(t,i,n){var a,s,r=this.options,o=t,l={},u={};i||parseFloat(t,10)==t||(t=r.min+(r.max-r.min)/2),i||(t=this.normalizeVal(t)),a=100*((t-r.min)/(r.max-r.min)),this._init&&t==r.value&&o==t||(this.options.value=t,this.thumb.stop(),this.range.stop(),u[this.dirs.width]=a+"%",this.vertical&&(a=Math.abs(a-100)),l[this.dirs.left]=a+"%",n?(n="object"!=typeof n?{}:e.extend({},n),n.duration||(s=Math.abs(a-parseInt(this.thumb[0].style[this.dirs.left]||50,10)),n.duration=Math.max(Math.min(999,5*s),99)),this.thumb.animate(l,n),this.range.animate(u,n)):(this.thumb.css(l),this.range.css(u)),this.orig&&(o!=t||!this._init&&this.orig.value!=t)&&this.options._change(t),this.element.attr({"aria-valuenow":this.options.value,"aria-valuetext":this.options.textValue?this.options.textValue(this.options.value):this.options.options[this.options.value]||this.options.value}))},initDataList:function(){if(this.orig){var t,i=this,n=function(){e(i.orig).jProp("list").off("updateDatalist",n).on("updateDatalist",n),clearTimeout(t),t=setTimeout(function(){i.list&&i.list()},9)};e(this.orig).on("listdatalistchange",n),this.list()}},list:function(){var i=this.options,n=i.min,a=i.max,s=this.trail,r=this;this.element.attr({"aria-valuetext":i.options[i.value]||i.value}),e(".ws-range-ticks",s).remove(),e(this.orig).jProp("list").find("option:not([disabled])").each(function(){i.options[e.prop(this,"value")]=e.prop(this,"label")||""}),e.each(i.options,function(o,l){if(!(!t(o)||n>o||o>a)){var u=100*((o-n)/(a-n)),c=i.showLabels&&l?' title="'+l+'"':"";r.vertical&&(u=Math.abs(u-100)),r.posCenter(e('<span class="ws-range-ticks"'+c+' data-label="'+l+'" style="'+r.dirs.left+": "+u+'%;" />').appendTo(s))}})},readonly:function(e){e=!!e,this.options.readonly=e,this.element.attr("aria-readonly",""+e),this._init&&this.updateMetrics()},disabled:function(e){e=!!e,this.options.disabled=e,e?this.element.attr({tabindex:-1,"aria-disabled":"true"}):this.element.attr({tabindex:this.options.tabindex,"aria-disabled":"false"}),this._init&&this.updateMetrics()},tabindex:function(e){this.options.tabindex=e,this.options.disabled||this.element.attr({tabindex:e})},title:function(e){this.element.prop("title",e)},min:function(e){this.options.min=i(e,0),this.value(this.options.value,!0)},max:function(e){this.options.max=i(e,100),this.value(this.options.value,!0)},step:function(e){this.options.step="any"==e?"any":i(e,1),this.value(this.options.value)},normalizeVal:function(e){var t,i,n,a=this.options;return a.min>=e?e=a.min:e>=a.max?e=a.max:"any"!=a.step&&(n=a.step,t=(e-a.min)%n,i=e-t,2*Math.abs(t)>=n&&(i+=t>0?n:-n),e=1*i.toFixed(5)),e},doStep:function(e,t){var n=i(this.options.step,1);"any"==this.options.step&&(n=Math.min(n,(this.options.max-this.options.min)/10)),this.value(this.options.value+n*e,!1,t)},getStepedValueFromPos:function(e){var t,i,n,a;return 0>=e?t=this.options[this.dirs.min]:e>100?t=this.options[this.dirs.max]:(this.vertical&&(e=Math.abs(e-100)),t=(this.options.max-this.options.min)*(e/100)+this.options.min,a=this.options.step,"any"!=a&&(i=(t-this.options.min)%a,n=t-i,2*Math.abs(i)>=a&&(n+=i>0?a:-a),t=1*n.toFixed(5))),t},addRemoveClass:function(e,t){var i,n=-1!=this.element.prop("className").indexOf(e);!t&&n?(i="removeClass",this.element.removeClass(e),this.updateMetrics()):t&&!n&&(i="addClass"),i&&(this.element[i](e),this._init&&this.updateMetrics())},addBindings:function(){var t,i,n,a=this,s=this.options,r=function(){var t={};return{init:function(i,n,s){t[i]||(t[i]={fn:s},a.orig&&e(a.orig).on(i,function(){t[i].val=e.prop(a.orig,"value")})),t[i].val=n},call:function(e,i){t[e].val!=i&&(clearTimeout(t[e].timer),t[e].val=i,t[e].timer=setTimeout(function(){t[e].fn(i,a)},0))}}}(),o=function(e,n){var o=a.getStepedValueFromPos((e[a.dirs.mouse]-t)*i);o!=s.value&&(a.value(o,!1,n),r.call("input",o)),e&&"mousemove"==e.type&&e.preventDefault()},l=function(t){t&&"mouseup"==t.type&&(r.call("input",s.value),r.call("change",s.value)),a.addRemoveClass("ws-active"),e(document).off("mousemove",o).off("mouseup",l),e(window).off("blur",u)},u=function(e){e.target==window&&l()},c=function(n){var r;if(n.preventDefault(),e(document).off("mousemove",o).off("mouseup",l),e(window).off("blur",u),!s.readonly&&!s.disabled){if(a.element.focus(),a.addRemoveClass("ws-active",!0),t=a.element.focus().offset(),i=a.element[a.dirs.innerWidth](),!i||!t)return;r=a.thumb[a.dirs.outerWidth](),t=t[a.dirs.pos],i=100/i,o(n,s.animate),e(document).on({mouseup:l,mousemove:o}),e(window).on("blur",u),n.stopPropagation()}},p={mousedown:c,focus:function(){s.disabled||(r.init("input",s.value),r.init("change",s.value),a.addRemoveClass("ws-focus",!0),a.updateMetrics()),n=!0},blur:function(){a.element.removeClass("ws-focus ws-active"),a.updateMetrics(),n=!1,r.init("input",s.value),r.call("change",s.value)},keyup:function(){a.addRemoveClass("ws-active"),r.call("input",s.value),r.call("change",s.value)},keydown:function(e){var t=!0,i=e.keyCode;s.readonly||s.disabled||(39==i||38==i?a.doStep(1):37==i||40==i?a.doStep(-1):33==i?a.doStep(10,s.animate):34==i?a.doStep(-10,s.animate):36==i?a.value(a.options.max,!1,s.animate):35==i?a.value(a.options.min,!1,s.animate):t=!1,t&&(a.addRemoveClass("ws-active",!0),r.call("input",s.value),e.preventDefault()))}};r.init("input",s.value,this.options.input),r.init("change",s.value,this.options.change),p[e.fn.mwheelIntent?"mwheelIntent":"mousewheel"]=function(e,t){t&&n&&!s.readonly&&!s.disabled&&(a.doStep(t),e.preventDefault(),r.call("input",s.value))},this.element.on(p),this.thumb.on({mousedown:c}),window.webshims&&webshims.ready("WINDOWLOAD",function(){webshims.ready("dom-support",function(){e.fn.onWSOff&&a.element.onWSOff("updateshadowdom",function(){a.updateMetrics()})}),!e.fn.onWSOff&&webshims._polyfill&&webshims._polyfill(["dom-support"])})},posCenter:function(e,t){var i;!this.options.calcCenter||this._init&&!this.element[0].offsetWidth||(e||(e=this.thumb),t||(t=e[this.dirs.outerWidth]()),t/=-2,e.css(this.dirs.marginLeft,t),this.options.calcTrail&&e[0]==this.thumb[0]&&(i=this.element[this.dirs.innerHeight](),e.css(this.dirs.marginTop,(e[this.dirs.outerHeight]()-i)/-2),this.range.css(this.dirs.marginTop,(this.range[this.dirs.outerHeight]()-i)/-2),t*=-1,this.trail.css(this.dirs.left,t).css(this.dirs.right,t)))},updateMetrics:function(){var e=this.element.innerWidth();this.vertical=e&&this.element.innerHeight()-e>10,this.dirs=this.vertical?{mouse:"pageY",pos:"top",min:"max",max:"min",left:"top",right:"bottom",width:"height",innerWidth:"innerHeight",innerHeight:"innerWidth",outerWidth:"outerHeight",outerHeight:"outerWidth",marginTop:"marginLeft",marginLeft:"marginTop"}:{mouse:"pageX",pos:"left",min:"min",max:"max",left:"left",right:"right",width:"width",innerWidth:"innerWidth",innerHeight:"innerHeight",outerWidth:"outerWidth",outerHeight:"outerHeight",marginTop:"marginTop",marginLeft:"marginLeft"},this.element[this.vertical?"addClass":"removeClass"]("vertical-range")[this.vertical?"addClass":"removeClass"]("horizontal-range"),this.posCenter()}},s=function(e){function t(){}return t.prototype=e,new t};e.fn.rangeUI=function(t){return t=e.extend({readonly:!1,disabled:!1,tabindex:0,min:0,step:1,max:100,value:50,input:e.noop,change:e.noop,_change:e.noop,showLabels:!0,options:{},calcCenter:!0,calcTrail:!0},t),this.each(function(){var i=e.extend(s(a),{element:e(this)});i.options=t,i._create.call(i)})},window.webshims&&webshims.isReady&&(webshims.ready("es5",function(){webshims.isReady("range-ui",!0)}),webshims._polyfill&&webshims._polyfill(["es5"]))})(window.webshims?webshims.$:jQuery),webshims.register("form-number-date-ui",function(e,t,i,n,a,s){"use strict";var r,o=t.formcfg,l=["01","02","03","04","05","06","07","08","09","10","11","12"],u=function(e){e.stopImmediatePropagation()},c=function(){var t;return function(){return t||(t="<option></option>"+e.map(l,function(e){return"<option>"+e+"</option>"}).join("")),t}}(),p=function(t){if(!r.patterns[t+"Obj"]){var i={};e.each(r.patterns[t].split(r[t+"Format"]),function(e,t){i[t]=e}),r.patterns[t+"Obj"]=i}},h={date:{_create:function(t){var i={splits:[e('<input type="text" class="yy" size="4" inputmode="numeric" />')[0]]};return t.monthSelect?i.splits.push(e('<select class="mm">'+c()+"</select>")[0]):i.splits.push(e('<input type="text" class="mm" inputmode="numeric" maxlength="2" size="2" />')[0]),i.splits.push(e('<input type="text" class="dd ws-spin" inputmode="numeric" maxlength="2" size="2" />')[0]),i.elements=[i.splits[0],e('<span class="ws-input-seperator" />')[0],i.splits[1],e('<span class="ws-input-seperator" />')[0],i.splits[2]],i},sort:function(t){p("d");var i=0,n=e(".ws-input-seperator",t).html(r.dFormat),a=e("input, select",t);e.each(r.patterns.dObj,function(e){var s=a.filter("."+e);s[0]&&(s.appendTo(t),n.length>i&&n.eq(i).insertAfter(s),i++)})}},month:{_create:function(t){var i={splits:[e('<input type="text" class="yy" inputmode="numeric" size="4" />')[0]]};return t.monthSelect?i.splits.push(e('<select class="mm ws-spin">'+c()+"</select>")[0]):(i.splits.push(e('<input type="text" class="mm ws-spin" />')[0]),t.onlyMonthDigits&&e(i.splits[1]).attr({inputmode:"numeric",size:2,maxlength:2})),i.elements=[i.splits[0],e('<span class="ws-input-seperator" />')[0],i.splits[1]],i},sort:function(t){var i,n=e(".ws-input-seperator",t).html(r.dFormat),a=e("input.mm, select.mm",t);r.date.showMonthAfterYear?(a.appendTo(t),i="insertBefore"):(a.prependTo(t),i="insertAfter"),n[i](a)}}},d=new Date((new Date).getTime()-1e3*60*(new Date).getTimezoneOffset());d=new Date(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours()).getTime();var f={number:{step:1},"datetime-local":{step:60,start:new Date(d).getTime()},time:{step:60},month:{step:1,start:new Date(d)},date:{step:1,start:new Date(d)}},m=function(){var i=function(){return t.getID(this)};return function(t,n,a){e(t).attr({"aria-labelledby":n.map(i).get().join(" ")}),a||n.on("click",function(e){return t.getShadowFocusElement().focus(),e.preventDefault(),!1})}}(),v=function(e){return e?(e+="",1==e.length?"0"+e:e):""};(function(){o.de=e.extend(!0,{numberFormat:{",":".",".":","},timeSigns:":. ",numberSigns:",",dateSigns:".",dFormat:".",patterns:{d:"dd.mm.yy"},month:{currentText:"Aktueller Monat"},date:{close:"schlie\u00dfen",clear:"L\u00f6schen",prevText:"Zur\u00fcck",nextText:"Vor",currentText:"Heute",monthNames:["Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","M\u00e4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},o.de||{}),o.en=e.extend(!0,{numberFormat:{".":".",",":","},numberSigns:".",dateSigns:"/",timeSigns:":. ",dFormat:"/",patterns:{d:"mm/dd/yy"},meridian:["AM","PM"],month:{currentText:"This month"},date:{closeText:"Done",clear:"Clear",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},o.en||{}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en,{date:{firstDay:1},patterns:{d:"dd/mm/yy"}})),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o["en-GB"])),o[""]||(o[""]=o["en-US"]),r=o[""];var i=function(t){if(!t.date.monthkeys){var i=function(e,i){var n,a=e+1;n=10>a?"0"+a:""+a,t.date.monthkeys[a]=n,t.date.monthkeys[i]=n,t.date.monthkeys[i.toLowerCase()]=n};t.date.monthkeys={},t.date.monthDigits=l,t.numberSigns+="-",t.meridian&&(t.timeSigns+=t.meridian[0]+t.meridian[1]),e.each(t.date.monthNames,i),e.each(t.date.monthNamesShort,i)}t.colorSigns||(t.colorSigns="#abcdefABCDEF"),t["datetime-localSigns"]||(t["datetime-localSigns"]=t.dateSigns+t.timeSigns)},s=function(){i(r),e(n).triggerHandler("wslocalechange")};s(),t.activeLang({register:"form-core",callback:function(){e.each(arguments,function(e,t){return o[t]?(o[t]!=r&&(r=o[t],s()),!1):a})}}),t.activeLang({langObj:o,module:"form-core",callback:function(e){r!=e&&(r=e,s())}})})(),function(){var i=function(t){e(this)["mousepressstart"==t.type?"addClass":"removeClass"]("mousepress-ui")},n=function(e,t){return"number"==typeof e||e&&e==1*e?1*e:t},s={number:function(e){return(e+"").replace(/\,/g,"").replace(/\./,r.numberFormat["."])},time:function(t){var i;return t&&r.meridian&&(t=t.split(":"),i=1*t[0],i&&i>=12?(t[0]=v(i-12+""),i=1):i=0,t=e.trim(t.join(":"))+" "+r.meridian[i]),t},"datetime-local":function(t,i){var n=e.trim(t||"").split("T");return 2==n.length&&(t=this.date(n[0],i)+" "+this.time(n[1],i)),t},month:function(e,t){var i,n=e.split("-");return n[0]&&n[1]?(i=r.date[t.formatMonthNames]||r.date[t.monthNames]||r.date.monthNames,n[1]=i[1*n[1]-1],t&&t.splitInput?e=[n[0]||"",n[1]||""]:n[1]&&(e=r.date.showMonthAfterYear?n.join(" "):n[1]+" "+n[0])):t&&t.splitInput&&(e=[n[0]||"",n[1]||""]),e},date:function(e,t){var i=(e+"").split("-");return i[2]&&i[1]&&i[0]?t&&t.splitInput?e=i:(e=r.patterns.d.replace("yy",i[0]||""),e=e.replace("mm",i[1]||""),e=e.replace("dd",i[2]||"")):t&&t.splitInput&&(e=[i[0]||"",i[1]||"",i[2]||""]),e},color:function(e){var t="#000000";return e&&(e=e.toLowerCase(),7==e.length&&c("color").isValid(e)&&(t=e)),t}},o={number:function(e){return(e+"").replace(r.numberFormat[","],"").replace(r.numberFormat["."],".")},"datetime-local":function(t,i){var n,a=e.trim(t||"").split(/\s+/);return 2==a.length&&(-1!=a[0].indexOf(":")&&-1==a[1].indexOf(":")&&(n=a[1],a[1]=a[0],a[0]=n),t=this.date(a[0],i)+"T"+this.time(a[1],i)),t},time:function(t){var i;return t&&r.meridian&&(-1!=t.indexOf(r.meridian[1])&&(t=t.split(":"),i=1*t[0],isNaN(i)||(t[0]=i+12),t=t.join(":")),t=e.trim(t.replace(r.meridian[0],"").replace(r.meridian[1],""))),t},month:function(e,t,i){var n=t.splitInput?e:e.trim().split(/[\.\s-\/\\]+/);return 2==n.length&&n[0]&&n[1]?(n[0]=!i&&r.date.monthkeys[n[0]]||n[0],n[1]=!i&&r.date.monthkeys[n[1]]||n[1],e=2==n[1].length&&n[0].length>3?n[0]+"-"+n[1]:2==n[0].length&&n[1].length>3?n[1]+"-"+n[0]:""):t.splitInput&&(e=""),e},date:function(e,t,i){p("d");var n;return t.splitInput?n={yy:0,mm:1,dd:2}:(n=r.patterns.dObj,e=e.split(r.dFormat)),3==e.length&&e[0]&&e[1]&&e[2]&&(!i||e[n.yy].length>3&&2==e[n.mm].length&&2==e[n.dd].length)?[v(e[n.yy]),v(e[n.mm]),v(e[n.dd])].join("-"):""},color:function(e){var t="#000000";return e&&(e=e.toLowerCase(),0!==e.indexOf("#")&&(e="#"+e),4==e.length&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),7==e.length&&c("color").isValid(e)&&(t=e)),t}},l={date:function(e,t){var i=(e||"").split("-");return i=3==i.length?t.splitInput?i:r.patterns.d.replace("yy",i[0]).replace("mm",i[1]).replace("dd",i[2]):t.splitInput?[e,e,e]:e},month:function(e,t){var i=(e||"").split("-");return i=2==i.length?t.splitInput?i:r.patterns.d.replace("yy",i[0]).replace("mm",i[1]):t.splitInput?[e,e]:e}},c=function(){var t={};return function(i){var n;return t[i]||(n=e('<input type="'+i+'" step="any" />'),t[i]={asNumber:function(e){var t="object"==typeof e?"valueAsDate":"value";return n.prop(t,e).prop("valueAsNumber")},asValue:function(e){var t="object"==typeof e?"valueAsDate":"valueAsNumber";return n.prop(t,e).prop("value")},isValid:function(t,i){return i&&(i.nodeName||i.jquery)&&(i={min:e(i).prop("min")||"",max:e(i).prop("max")||"",step:e(i).prop("step")||"any"}),i=e.extend({step:"any",min:"",max:""},i||{}),n.attr(i).prop("value",t).is(":valid")&&n.prop("value")==t}}),t[i]}}();f.range=f.number;var d={_create:function(){var i,n,a,s=this.options,r=this.createOpts;for(this.type=s.type,this.orig=s.orig,this.buttonWrapper=e('<span class="input-buttons '+this.type+'-input-buttons"></span>').insertAfter(this.element),this.options.containerElements.push(this.buttonWrapper[0]),s.mirrorValidity=s.mirrorValidity&&this.orig&&Modernizr.formvalidation&&!t.bugs.bustedValidity,s.splitInput&&this._addSplitInputs?(s.monthSelect&&this.element.addClass("ws-month-select"),this._addSplitInputs()):this.inputElements=this.element,f[this.type]&&"object"==typeof f[this.type].start&&(f[this.type].start=this.asNumber(f[this.type].start)),t.picker[this.type]||(s.buttonOnly=!1),i=0;r.length>i;i++)null!=s[r[i]]&&this[r[i]](s[r[i]],s[r[i]]);"color"==this.type&&this.inputElements.prop("maxLength",7),this.addBindings(),e(this.element).data("wsWidget"+s.type,this),s.buttonOnly&&this.inputElements.prop({readOnly:!0}),this._init=!0,s.mirrorValidity&&(n=this,a=function(){clearTimeout(a._timerDealy),a._timerDealy=setTimeout(a._wsexec,9)},a._wsexec=function(){clearTimeout(a._timerDealy),n.mirrorValidity(!0)},a(),e(this.orig).on("change input",function(e){"input"==e.type?a():a._wsexec()}))},mirrorValidity:function(t){if(this._init&&this.options.mirrorValidity){t||e.prop(this.orig,"validity");var i=e(this.orig).getErrorMessage();i!==this.lastErrorMessage&&(this.inputElements.prop("setCustomValidity",function(e,t){t._supvalue&&t._supvalue.call(this,i)}),this.lastErrorMessage=i)}},addBindings:function(){var t,n=this,s=this.options,o=function(){var t={};return{init:function(i,a,s){t[i]||(t[i]={fn:s},e(n.orig).on(i,function(){t[i].val=e.prop(n.orig,"value")})),t[i].val=a},call:function(e,i){t[e]&&t[e].val!=i&&(clearTimeout(t[e].timer),t[e].val=i,t[e].timer=setTimeout(function(){t[e].fn(i,n)},9))}}}(),c=function(){o.init("input",e.prop(n.orig,"value"),n.options.input),o.init("change",e.prop(n.orig,"value"),n.options.change)},p={},h=function(e){return h.prevent?(e.preventDefault(),(t||n.element.getShadowFocusElement()).focus(),u(e),!0):a};(function(){var t,i=function(i){var a;clearTimeout(t),a=n.parseValue(),"color"==n.type&&n.inputElements.val(a),e.prop(n.orig,"value",a),o.call("input",a),i&&"wsupdatevalue"==i.type||o.call("change",a)},a=function(){clearTimeout(t)},r=function(e){clearTimeout(t),t=setTimeout(i,0),"change"==e.type&&(u(e),s.splitInput||i())};n.element.on("wsupdatevalue",i),n.inputElements.add(n.buttonWrapper).add(n.element).on({"focus focusin":a,"blur focusout change":r}),setTimeout(function(){n.popover&&(n.popover.element.on("wspopoverhide",r),e("> *",n.popover.element).on({focusin:a,focusout:r}))},0)})();var d={},m=s.splitInput?this.inputElements.filter(".ws-spin"):this.inputElements.eq(0),v={blur:function(e){h(e)||s.disabled||s.readonly||h.prevent||(t=!1),u(e)},focus:function(){t||(c(),t=this)},keypress:function(e){if(!e.isDefaultPrevented()){var t,i=!0,a=e.keyCode;e.ctrlKey||e.metaKey||!r[n.type+"Signs"]?i=!1:(t=String.fromCharCode(null==e.charCode?a:e.charCode),i=!(" ">t||(r[n.type+"Signs"]+"0123456789").indexOf(t)>-1)),i&&e.preventDefault()}},input:"color"==this.type&&this.isValid?e.noop:function(){var e,t=function(){var e=n.parseValue(!0);e&&n.isValid(e)&&n.setInput(e)};return function(){clearTimeout(e),e=setTimeout(t,200)}}(),"input keydown keypress":function(){var t,i=!1,n=function(){i===!0?(i="semi",t=setTimeout(n,250)):i=!1},a=function(){i=!0,clearTimeout(t),t=setTimeout(n,300)},r=function(){var e=this;setTimeout(function(){e.focus(),e.select()},4),a()};return function(t){if(s.splitInput&&s.jumpInputs)if("input"==t.type){if(e.prop(this,"value").length===e.prop(this,"maxLength"))try{e(this).next().next("input, select").each(r)}catch(n){}}else t.shiftKey||t.crtlKey||9!=t.keyCode||i!==!0&&(!i||e.prop(this,"value"))||t.preventDefault()}}()},g=function(){return s.disabled||t||n.element.getShadowFocusElement().focus(),h.set(),!1};h.set=function(){var e,t=function(){h.prevent=!1};return function(){clearTimeout(e),h.prevent=!0,setTimeout(t,9)}}(),this.buttonWrapper.on("mousedown",g),this.setInput=function(e){n.value(e),o.call("input",e)},this.setChange=function(e){n.setInput(e),o.call("change",e)},this.inputElements.on(v),f[this.type]&&(["stepUp","stepDown"].forEach(function(e){p[e]=function(i){if(!s.disabled&&!s.readonly){t||g();var a=!1;i||(i=1);try{n.elemHelper[e](i),a=n.elemHelper.prop("value"),n.value(a),o.call("input",a)}catch(r){}return a}}}),s.noSpinbtn||(d[e.fn.mwheelIntent?"mwheelIntent":"mousewheel"]=function(e,i){i&&t&&!s.disabled&&(p[i>0?"stepUp":"stepDown"](),e.preventDefault())},d.keydown=function(t){if(!(s.list||t.isDefaultPrevented()||t.altKey&&40==t.keyCode||e.attr(this,"list"))){var i=!0,n=t.keyCode;38==n?p.stepUp():40==n?p.stepDown():i=!1,i&&t.preventDefault()}},m.attr({autocomplete:"off",role:"spinbutton"}).on(d)),e(this.buttonWrapper).on("mousepressstart mousepressend",".step-up, .step-down",i).on("mousedown mousepress",".step-up",function(){p.stepUp()}).on("mousedown mousepress",".step-down",function(){p.stepDown()})),"color"!=this.type&&function(){var t;s.splitInput?(t=function(){n.reorderInputs()},n.reorderInputs()):t=function(){s.value&&n.value(s.value,!0),l[n.type]&&s.placeholder&&n.placeholder(s.placeholder)},e(n.orig).onWSOff("wslocalechange",t)}(),c()},value:function(e,t){(!this._init||t||e!==this.options.value)&&(this.element.val(this.formatValue(e)),this.options.value=e,this._propertyChange("value"),this.mirrorValidity())},required:function(e,t){this.inputElements.attr({"aria-required":""+t}),this.mirrorValidity()},parseValue:function(t){var i=this.inputElements.map(function(){return e.prop(this,"value")}).get();return this.options.splitInput||(i=i[0]),o[this.type](i,this.options,t)},formatValue:function(e,t){return s[this.type](e,t===!1?!1:this.options)},createOpts:["readonly","title","disabled","tabindex","placeholder","value","required"],placeholder:function(t){var i=this.options;i.placeholder=t;var n=t;l[this.type]&&(n=l[this.type](t,this.options)),i.splitInput&&"object"==typeof n?e.each(this.splits,function(t,i){e.prop(i,"placeholder",n[t])}):this.element.prop("placeholder",n)},initDataList:function(){var t,i=this,n=function(){e(i.orig).jProp("list").off("updateDatalist",n).on("updateDatalist",n),clearTimeout(t),t=setTimeout(function(){i.list&&i.list()},9)};e(this.orig).onTrigger("listdatalistchange",n)},getOptions:function(){var t={},i=e(this.orig).jProp("list");return i.find("option").each(function(){t[e.prop(this,"value")]=e.prop(this,"label")}),[t,i.data("label")]},list:function(t){"number"==this.type&&this.element.attr("list",e.attr(this.orig,"list")),this.options.list=t,this._propertyChange("list")},_propertyChange:e.noop,tabindex:function(t){this.options.tabindex=t,this.inputElements.prop("tabindex",this.options.tabindex),e("button",this.buttonWrapper).prop("tabindex",this.options.tabindex)},title:function(t){!t&&this.orig&&null==e.attr(this.orig,"title")&&(t=null),this.options.title=t,null==t?this.inputElements.removeAttr("title"):this.inputElements.prop("title",this.options.title)}};["readonly","disabled"].forEach(function(t){var i="disabled"==t;d[t]=function(n,a){var s=this.options;s[t]==a&&this._init||(s[t]=!!a,!i&&s.buttonOnly?this.inputElements.attr({"aria-readonly":s[t]}):this.inputElements.prop(t,s[t]),this.buttonWrapper[s[t]?"addClass":"removeClass"]("ws-"+t),i&&e("button",this.buttonWrapper).prop("disabled",s[t]))}});var m=e.extend({},d,{_create:function(){var t=this.options,i=c(t.type);this.elemHelper=e('<input type="'+t.type+'" />'),this.asNumber=i.asNumber,this.asValue=i.asValue,this.isValid=i.isValid,d._create.apply(this,arguments),this._init=!1,this.buttonWrapper.html('<span unselectable="on" class="step-controls"><span class="step-up"></span><span class="step-down"></span></span>'),"number"==this.type&&this.inputElements.attr("inputmode","numeric"),t.min||"number"!=typeof t.relMin||(t.min=this.asValue(this.getRelNumber(t.relMin)),e.prop(this.orig,"min",t.min)),t.max||"number"!=typeof t.relMax||(t.max=this.asValue(this.getRelNumber(t.relMax)),e.prop(this.orig,"max",t.max)),this._init=!0},createOpts:["step","min","max","readonly","title","disabled","tabindex","placeholder","value","required"],_addSplitInputs:function(){if(!this.inputElements){var t=h[this.type]._create(this.options);this.splits=t.splits,this.inputElements=e(t.elements).prependTo(this.element).filter("input, select")}},getRelNumber:function(e){var t=f[this.type].start||0;return e&&(t+=e),t},addZero:v,_setStartInRange:function(){var e=this.getRelNumber(this.options.relDefaultValue);!isNaN(this.minAsNumber)&&this.minAsNumber>e?e=this.minAsNumber:!isNaN(this.maxAsNumber)&&e>this.maxAsNumber&&(e=this.maxAsNumber),this.elemHelper.prop("valueAsNumber",e),this.options.defValue=this.elemHelper.prop("value")},reorderInputs:function(){if(h[this.type]){var e=this.element;h[this.type].sort(e,this.options),setTimeout(function(){var i=t.data(e);i&&i.shadowData&&(i.shadowData.shadowFocusElement=e.find("input, select")[0]||e[0])},9)}},value:function(t,i){(!this._init||i||this.options.value!==t)&&(this.valueAsNumber=this.asNumber(t),this.options.value=t,isNaN(this.valueAsNumber)||!isNaN(this.minAsNumber)&&this.valueAsNumber<this.minAsNumber||!isNaN(this.maxAsNumber)&&this.valueAsNumber>this.maxAsNumber?this._setStartInRange():(this.elemHelper.prop("value",t),this.options.defValue=""),t=s[this.type](t,this.options),this.options.splitInput?e.each(this.splits,function(i,n){e.prop(n,"value",t[i])}):this.element.prop("value",t),this._propertyChange("value"),this.mirrorValidity())},step:function(e){var t=f[this.type];this.options.step=e,this.elemHelper.prop("step",n(e,t.step)),this.mirrorValidity()}});e.each({min:1,max:-1},function(e,t){var i=e+"AsNumber";m[e]=function(n){this.elemHelper.prop(e,n),this[i]=this.asNumber(n),null!=this.valueAsNumber&&(isNaN(this.valueAsNumber)||!isNaN(this[i])&&this.valueAsNumber*t<this[i]*t)&&this._setStartInRange(),this.options[e]=n,this._propertyChange(e),this.mirrorValidity()}}),e.fn.wsBaseWidget=function(t){return t=e.extend({},t),this.each(function(){e.webshims.objectCreate(d,{element:{value:e(this)}},t)})},e.fn.spinbtnUI=function(t){return t=e.extend({monthNames:"monthNames",size:1,startView:0},t),this.each(function(){e.webshims.objectCreate(m,{element:{value:e(this)}},t)})}}(),function(){var i={},a=function(e,i){return e=("color"==e?"color":"forms")+"-picker",a[i+"Loaded"+e]||(a[i+"Loaded"+e]=!0,t.ready(i,function(){t.loader.loadList([e])})),e};s.addZero=v,t.loader.addModule("forms-picker",{noAutoCallback:!0,options:s}),t.loader.addModule("color-picker",{noAutoCallback:!0,css:"jpicker/jpicker.css",options:s}),t.inlinePopover={_create:function(){this.element=e('<div class="ws-inline-picker"><div class="ws-po-box" /></div>').data("wspopover",this),this.contentElement=e(".ws-po-box",this.element),this.element.insertAfter(this.options.prepareFor)},show:e.noop,hide:e.noop,preventBlur:e.noop,isVisible:!0},i._genericSetFocus=function(t,i){if(t=e(t||this.activeButton),!this.popover.openedByFocus&&!i){var n=this,a=function(e){clearTimeout(n.timer),n.timer=setTimeout(function(){t[0]&&(t[0].focus(),e===!0||t.is(":focus")||a(!0))},n.popover.isVisible?99:360)};this.popover.activateElement(t),a()}},i._actions={changeInput:function(e,t,n){n.options.noChangeDismiss||i._actions.cancel(e,t,n),n.setChange(e)},cancel:function(e,t,i){i.options.inlinePicker||(t.stopOpen=!0,i.element.getShadowFocusElement().focus(),setTimeout(function(){t.stopOpen=!1},9),t.hide())}},i.commonInit=function(t,i){var a;i.isDirty=!0,i.element.on("updatepickercontent pickerchange",function(){a=!1}),t.options.inlinePicker||i.contentElement.on({keydown:function(n){if(9==n.keyCode){a||(a=e('input:not(:disabled), [tabindex="0"]:not(:disabled)',this).filter(":visible"));var s=a.index(n.target);if(n.shiftKey&&0>=s)return a.last().focus(),!1;if(!n.shiftKey&&s>=a.length-1)return a.first().focus(),!1}else if(27==n.keyCode)return t.element.getShadowFocusElement().focus(),i.hide(),!1}}),t._propertyChange=function(){var e,n=function(){i.isVisible&&i.element.triggerHandler("updatepickercontent")};return function(a){("value"!=a||t.options.inlinePicker)&&(i.isDirty=!0,i.isVisible&&(clearTimeout(e),e=setTimeout(n,9)))}}(),i.activeElement=e([]),i.activateElement=function(t){t=e(t),t[0]!=i.activeElement[0]&&(i.activeElement.removeClass("ws-focus"),t.addClass("ws-focus")),i.activeElement=t},i.element.on({wspopoverbeforeshow:function(){t.element.triggerHandler("wsupdatevalue"),i.element.triggerHandler("updatepickercontent")}}),e(t.orig).on("remove",function(i){i.originalEvent||e(n).off("wslocalechange",t._propertyChange)})},i._common=function(n){var s=n.options,r=t.objectCreate(s.inlinePicker?t.inlinePopover:t.wsPopover,{},{prepareFor:s.inlinePicker?n.buttonWrapper:n.element,position:s.widgetPosition}),o=e('<button type="button" class="ws-popover-opener"><span /></button>').appendTo(n.buttonWrapper),l=function(){(i[n.type].showPickerContent||i.showPickerContent)(n,r)},c=function(){var e=a(n.type,"DOM");s.disabled||s.readonly||!s.inlinePicker&&r.isVisible||(t.ready(e,l),r.show(n.element))},p=function(){(s.inlinePicker||r.isVisible)&&r.activeElement&&(r.openedByFocus=!1,r.activeElement.focus()),c()};s.containerElements.push(r.element[0]),"color"!=n.type&&(s.yearButtons&&(s.startView=2),s.startView||(s.startView=0),"time"==n.type&&(s.minView=3,s.startView=3),s.minView||(s.minView=0),s.startView<s.minView&&(s.startView=s.minView,t.warn("wrong config for minView/startView.")),s.size||(s.size=1)),r.element.addClass(n.type+"-popover input-picker").attr({role:"application"}).on({wspopoverhide:function(){r.openedByFocus=!1},focusin:function(e){r.activateElement&&(r.openedByFocus=!1,r.activateElement(e.target))},focusout:function(){r.activeElement&&r.activeElement.removeClass("ws-focus"),s.inlinePicker&&(r.openedByFocus=!0)}}),m(r.element.children("div.ws-po-outerbox").attr({role:"group"}),s.labels,!0),m(o,s.labels,!0),null!=s.tabindex&&o.attr({tabindex:s.tabindex}),s.disabled&&o.prop({disabled:!0}),o.on({click:p}),s.inlinePicker?r.openedByFocus=!0:(o.on({mousedown:function(){u.apply(this,arguments),r.preventBlur()},focus:function(){r.preventBlur()}}),function(){var e=!1,t=function(){e=!1};n.inputElements.on({keydown:function(e){40==e.keyCode&&e.altKey&&p()},focus:function(){!r.stopOpen&&(s.buttonOnly||s.openOnFocus||e&&s.openOnMouseFocus)?(r.openedByFocus=s.buttonOnly?!1:!s.noInput,c()):r.preventBlur()},mousedown:function(){e=!0,setTimeout(t,9),s.buttonOnly&&r.isVisible&&r.activeElement&&(r.openedByFocus=!1,setTimeout(function(){r.openedByFocus=!1,r.activeElement.focus()},4)),n.element.is(":focus")&&(r.openedByFocus=s.buttonOnly?!1:!s.noInput,c()),r.preventBlur()}})}()),n.popover=r,n.opener=o,e(n.orig).on("remove",function(e){e.originalEvent||setTimeout(function(){o.remove(),r.element.remove()},4)}),s.inlinePicker&&c(),a(n.type,"WINDOWLOAD")},i.month=i._common,i.date=i._common,i.time=i._common,i["datetime-local"]=i._common,i.color=function(t){var n=i._common.apply(this,arguments),a=e(t.orig).data("alphacontrol"),s=t.opener.prepend('<span class="ws-color-indicator-bg"><span class="ws-color-indicator" /></span>').find(".ws-color-indicator"),r=function(){s.css({backgroundColor:e.prop(this,"value")||"#000"})},o=function(){var e,i=function(){try{var e=t.alpha.prop("valueAsNumber")/(t.alpha.prop("max")||1);
isNaN(e)||s.css({opacity:e})}catch(i){}};return function(t){clearTimeout(e),e=setTimeout(i,t&&"change"!=t.type?40:4)}}();return t.alpha=a?e("#"+a):e([]),e(t.orig).on("wsupdatevalue change",r).each(r),t.alpha.on("wsupdatevalue change input",o).each(o),n},t.picker=i}(),function(){var i,a,r=Modernizr.inputtypes,o={},l=["disabled","readonly","value","min","max","step","title","required","placeholder"],c=["data-placeholder","tabindex"];if(e.each(l.concat(c),function(e,n){var a=n.replace(/^data\-/,"");t.onNodeNamesPropertyModify("input",n,function(e,n){if(!i){var s=t.data(this,"shadowData");s&&s.data&&s.nativeElement===this&&s.data[a]&&s.data[a](e,n)}})}),s.replaceUI&&"valueAsNumber"in n.createElement("input")){var p=function(){t.data(this,"hasShadow")&&e.prop(this,"value",e.prop(this,"value"))};t.onNodeNamesPropertyModify("input","valueAsNumber",p),t.onNodeNamesPropertyModify("input","valueAsDate",p)}var d=function(){return function(t,i){o[t]=i,i.attrs=e.merge([],c,i.attrs),i.props=e.merge([],l,i.props)}}(),v=function(){return"none"!=e.css(this,"display")},g=function(t){var i,n=function(){e(t.orig).removeClass("ws-important-hide"),e.style(t.orig,"display","");var n,a,s,r=.6;(!i||t.orig.offsetWidth)&&(n=t.buttonWrapper&&t.buttonWrapper.filter(v).length,a=e.css(t.orig,"marginRight"),t.element.css({marginLeft:e.css(t.orig,"marginLeft"),marginRight:n?0:a}),n&&(s=parseInt(t.buttonWrapper.css("marginLeft"),10)||0,t.element.css({paddingRight:""}),0>s?(a=(parseInt(a,10)||0)+-1*(t.buttonWrapper.outerWidth()+s),t.buttonWrapper.css("marginRight",a),t.element.css({paddingRight:""}).css({paddingRight:(parseInt(t.element.css("paddingRight"),10)||0)+t.buttonWrapper.outerWidth()})):(t.buttonWrapper.css("marginRight",a),r=t.buttonWrapper.outerWidth(!0)+.6)),t.element.outerWidth(e(t.orig).outerWidth()-r)),i=!0,e(t.orig).addClass("ws-important-hide")};t.element.onWSOff("updateshadowdom",n,!0)},y=function(){var n,r,p,h,d,f=e.prop(this,"type");if(o[f]&&t.implement(this,"inputwidgets")){for(p={},h=f,d=e(this).jProp("labels"),r=e.extend({},s.widgets,s[f],e(e.prop(this,"form")).data(f)||{},e(this).data(f)||{},{orig:this,type:f,labels:d,options:{},input:function(e){r._change(e,"input")},change:function(e){r._change(e,"change")},_change:function(t,n){i=!0,e.prop(r.orig,"value",t),i=!1,n&&e(r.orig).trigger(n)},containerElements:[]}),n=0;l.length>n;n++)r[l[n]]=e.prop(this,l[n]);for(n=0;c.length>n;n++)h=c[n].replace(/^data\-/,""),"placeholder"!=h&&r[h]||(r[h]=e.attr(this,c[n])||r[h]);r.monthSelect&&(r.onlyMonthDigits=!0),r.onlyMonthDigits&&(r.formatMonthNames="monthDigits"),p.shim=o[f]._create(r),t.addShadowDom(this,p.shim.element,{data:p.shim||{}}),p.shim.options.containerElements.push(p.shim.element[0]),m(e(this).getShadowFocusElement(),d),e(this).on("change",function(){i||p.shim.value(e.prop(this,"value"))}),function(){var t,i={focusin:!0,focus:!0},n=!1,a=!1;e(p.shim.options.containerElements).on({"focusin focus focusout blur":function(s){s.stopImmediatePropagation(),a=i[s.type],clearTimeout(t),t=setTimeout(function(){a!=n&&(n=a,e(r.orig).triggerHandler(a?"focus":"blur"),e(r.orig).trigger(a?"focusin":"focusout")),n=a},0)}})}(),p.shim.element.on("change input",u),Modernizr.formvalidation&&e(r.orig).on("firstinvalid",function(i){(t.fromSubmit||!a)&&e(r.orig).off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(n){i.isInvalidUIPrevented()||n.isDefaultPrevented()||(t.validityAlert.showFor(i.target),i.preventDefault(),n.preventDefault()),e(r.orig).off("invalid.replacedwidgetbubble")})}),p.shim.buttonWrapper&&p.shim.buttonWrapper.filter(v).length&&p.shim.element.addClass("has-input-buttons"),p.shim.element.addClass(e.prop(this,"className")),r.calculateWidth?g(p.shim):e(this).addClass("ws-important-hide")}};Modernizr.formvalidation&&["input","form"].forEach(function(e){var i=t.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){a=!0;var e=i.prop._supvalue.apply(this,arguments);return a=!1,e}}})}),(!r.range||s.replaceUI)&&d("range",{_create:function(t){var i=e("<span />").insertAfter(t.orig).rangeUI(t).data("rangeUi");return i}});var b=r.number&&-1==navigator.userAgent.indexOf("Touch")&&(/MSIE 1[0|1]\.\d/.test(navigator.userAgent)||/Trident\/7\.0/.test(navigator.userAgent));["number","time","month","date","color","datetime-local"].forEach(function(i){(!r[i]||s.replaceUI||"number"==i&&b)&&d(i,{_create:function(n){n.monthSelect&&(n.splitInput=!0),n.splitInput&&!h[i]&&(t.warn("splitInput not supported for "+i),n.splitInput=!1);var a=n.splitInput?'<span class="ws-'+i+' ws-input" role="group"></span>':'<input class="ws-'+i+'" type="text" />',s=e(a).insertAfter(n.orig);return s=f[i]?s.spinbtnUI(n).data("wsWidget"+i):s.wsBaseWidget(n).data("wsWidget"+i),t.picker&&t.picker[i]&&t.picker[i](s),s.buttonWrapper.addClass("input-button-size-"+s.buttonWrapper.children().filter(v).length),s}})}),t.addReady(function(t,i){e("input",t).add(i.filter("input")).each(y)})}()});