webshims.register("form-validators",function(e,t,i,n){"use strict";(function(){t.refreshCustomValidityRules&&t.error("form-validators already included. please remove custom-validity.js");var i,a,r={},o=!1,s=function(e){t.refreshCustomValidityRules(e.target)};t.customErrorMessages={},t.addCustomValidityRule=function(i,n,a){r[i]=n,t.customErrorMessages[i]||(t.customErrorMessages[i]=[],t.customErrorMessages[i][""]=a||i),e.isReady&&o&&e("input, select, textarea").each(function(){l(this)})},t.refreshCustomValidityRules=function(n){if(a||e.prop(n,"willValidate")){i=!0;var o=e.data(n,"customMismatchedRule"),s=e.prop(n,"validity")||{},l="";if(o||!s.customError){var u=e(n).val();e.each(r,function(i,a){return l=a(n,u)||"",o=i,l?("string"!=typeof l&&(l=e(n).data("errormessage")||n.getAttribute("x-moz-errormessage")||t.customErrorMessages[i][t.activeLang()]||t.customErrorMessages[i][""]),"object"==typeof l&&(l=l[i]||l.customError||l.defaultMessage),!1):undefined}),l&&e.data(n,"customMismatchedRule",o),e(n).setCustomValidity(l)}i=!1}};var l=t.refreshCustomValidityRules;t.ready("forms form-validation",function(){var r=e.fn.setCustomValidity;e.fn.setCustomValidity=function(){return i||this.data("customMismatchedRule",""),r.apply(this,arguments)},setTimeout(function(){t.addReady(function(t,i){a=!0,e("input, select, textarea",t).add(i.filter("input, select, textarea")).each(function(){l(this)}),a=!1,o=!0}),e(n).on("refreshCustomValidityRules change",s)},9)})})(),function(){var t=e.webshims.addCustomValidityRule;t("partialPattern",function(t,i){if(i&&t.getAttribute("data-partial-pattern")){var n=e(t).data("partial-pattern");if(n)return!RegExp("("+n+")","i").test(i)}},"This format is not allowed here."),t("tooShort",function(t,i){return i&&t.getAttribute("data-minlength")?e(t).data("minlength")>i.length:undefined},"Entered value is too short.");var i={};t("group-required",function(t){var a=t.name;if(a&&"checkbox"===t.type&&e(t).hasClass("group-required")){var r=e(t.form&&t.form[a]||n.getElementsByName(a)),o=r.filter(":checked:enabled");return i[a]&&clearTimeout(i[a]),i[a]=setTimeout(function(){r.addClass("group-required").unbind("click.groupRequired").bind("click.groupRequired",function(){r.filter(".group-required").each(function(){e.webshims.refreshCustomValidityRules(this)})})},9),!o[0]}},"Please check one of these checkboxes."),t("creditcard",function(t,i){if(i&&e(t).hasClass("creditcard-input")){if(i=i.replace(/\-/g,""),i!=1*i)return!0;for(var n,a=i.length,r=0,o=1;a--;)n=parseInt(i.charAt(a),10)*o,r+=n-9*(n>9),o^=3;return!(0===r%10&&r>0)}},"Please enter a valid credit card number");var a={prop:"value","from-prop":"value",toggle:!1},r=function(t){return e(t.form[t.name]).filter('[type="radio"]')};e.webshims.ready("form-validation",function(){e.webshims.modules&&(r=e.webshims.modules["form-core"].getGroupElements||r)}),t("dependent",function(t,i){if(t.getAttribute("data-dependent-validation")){var o,s=e(t).data("dependentValidation");if(s){var l=function(i){var n=e.prop(s.masterElement,s["from-prop"]);o&&(n=-1!==e.inArray(n,o)),s.toggle&&(n=!n),e.prop(t,s.prop,n),i&&e(t).getShadowElement().filter(".user-error, .user-success").trigger("refreshvalidityui")};if(!s._init||!s.masterElement){if("string"==typeof s&&(s={from:s}),s.masterElement=n.getElementById(s.from)||n.getElementsByName(s.from||[])[0],!s.masterElement||!s.masterElement.form)return;/radio|checkbox/i.test(s.masterElement.type)?(s["from-prop"]||(s["from-prop"]="checked"),s.prop||"checked"!=s["from-prop"]||(s.prop="disabled")):s["from-prop"]||(s["from-prop"]="value"),0===s["from-prop"].indexOf("value:")&&(o=s["from-prop"].replace("value:","").split("||"),s["from-prop"]="value"),s=e.data(t,"dependentValidation",e.extend({_init:!0},a,s)),"value"!==s.prop||o?e("radio"===s.masterElement.type&&r(s.masterElement)||s.masterElement).bind("change",l):e(s.masterElement).bind("change",function(){e.webshims.refreshCustomValidityRules(t),e(t).getShadowElement().filter(".user-error, .user-success").trigger("refreshvalidityui")})}return"value"!=s.prop||o?(l(),""):e.prop(s.masterElement,"value")!=i}}},"The value of this field does not repeat the value of the other field")}()});