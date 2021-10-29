(function(t){function e(e){for(var a,i,u=e[0],c=e[1],o=e[2],d=0,h=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("html",{attrs:{lang:"en"}},[t._m(0),n("body",[n("calculation")],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("head",[n("meta",{attrs:{charset:"UTF-8"}}),n("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"IE=edge"}}),n("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),n("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}}),n("link",{attrs:{href:"https://use.fontawesome.com/releases/v5.13.0/css/all.css",rel:"stylesheet"}}),n("title",[t._v("Calculation App")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column align-items-center bg-gray mt-5",attrs:{id:"app"}},[n("div",{staticClass:"vh-75 calculation-box d-flex flex-column bg-dark p-1"},[n("div",{staticClass:"d-flex flex-row-reverse mt-1 mr-4 pr-3"},[t.isDecimal()?n("h1",[t._v(t._s(t.decOutput))]):n("h1",[t._v("0x"+t._s(t.hexOutput))])]),n("div",{staticClass:"d-flex justify-content-center mt-1"},[n("div",{staticClass:"btn-group"},[t.isDecimal()?n("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"}},[t._v("10")]):n("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.switchDecimal()}}},[t._v("10")]),t.isHex()?n("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"}},[t._v("16")]):n("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.switchHex()}}},[t._v("16")])])]),n("div",{staticClass:"col-12 d-flex justify-content-around flex-wrap mt-2"},t._l(t.binaryArray,(function(e,a){return n("div",{key:a,staticClass:"binary col-1 mr-3 my-2"},[t._v(t._s(e))])})),0),t.decOutput>=Math.pow(2,64)?[n("div",{staticClass:"buttons d-flex justify-content-center flex-wrap pt-1"},[t._m(0),t._m(1),t._m(2),n("button",{staticClass:"button bg-darkgray",attrs:{value:"AC"},on:{click:t.allClear}},[n("h4",[t._v("AC")])]),t._m(3),t._m(4),t._m(5),n("button",{staticClass:"button bg-orange",attrs:{value:"/"},on:{click:function(e){return t.addCurrentOperator("/")}}},[n("h4",[t._v("÷")])]),t._m(6),t._m(7),t._m(8),n("button",{staticClass:"button bg-orange",attrs:{value:"*"},on:{click:function(e){return t.addCurrentOperator("*")}}},[n("h4",[t._v("x")])]),t._m(9),t._m(10),t._m(11),n("button",{staticClass:"button bg-orange",attrs:{value:"-"},on:{click:function(e){return t.addCurrentOperator("-")}}},[n("h4",[t._v("-")])]),t._m(12),t._m(13),t._m(14),n("button",{staticClass:"button bg-orange",attrs:{value:"+"},on:{click:function(e){return t.addCurrentOperator("+")}}},[n("h4",[t._v("+")])]),t._m(15),t._m(16),t._m(17),n("button",{staticClass:"button bg-orange",on:{click:function(e){return t.showEqual()}}},[n("h4",[t._v("=")])])])]:[n("div",{staticClass:"buttons d-flex justify-content-center flex-wrap pt-1"},[t.isDecimal()?n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"D"}},[n("h4",[t._v("D")])]):n("button",{staticClass:"button bg-secondary",attrs:{value:"D"},on:{click:function(e){return t.addCurrentOperand("D")}}},[n("h4",[t._v("D")])]),t.isDecimal()?n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"E"}},[n("h4",[t._v("E")])]):n("button",{staticClass:"button bg-secondary",attrs:{value:"E"},on:{click:function(e){return t.addCurrentOperand("E")}}},[n("h4",[t._v("E")])]),t.isDecimal()?n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"F"}},[n("h4",[t._v("F")])]):n("button",{staticClass:"button bg-secondary",attrs:{value:"F"},on:{click:function(e){return t.addCurrentOperand("F")}}},[n("h4",[t._v("F")])]),n("button",{staticClass:"button bg-darkgray",attrs:{value:"AC"},on:{click:t.allClear}},[n("h4",[t._v("AC")])]),t.isDecimal()?n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"A"}},[n("h4",[t._v("A")])]):n("button",{staticClass:"button bg-secondary",attrs:{value:"A"},on:{click:function(e){return t.addCurrentOperand("A")}}},[n("h4",[t._v("A")])]),t.isDecimal()?n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"B"}},[n("h4",[t._v("B")])]):n("button",{staticClass:"button bg-secondary",attrs:{value:"B"},on:{click:function(e){return t.addCurrentOperand("B")}}},[n("h4",[t._v("B")])]),t.isDecimal()?n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"C"}},[n("h4",[t._v("C")])]):n("button",{staticClass:"button bg-secondary",attrs:{value:"C"},on:{click:function(e){return t.addCurrentOperand("C")}}},[n("h4",[t._v("C")])]),n("button",{staticClass:"button bg-orange",attrs:{value:"/"},on:{click:function(e){return t.addCurrentOperator("/")}}},[n("h4",[t._v("÷")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"7"},on:{click:function(e){return t.addCurrentOperand("7")}}},[n("h4",[t._v("7")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"8"},on:{click:function(e){return t.addCurrentOperand("8")}}},[n("h4",[t._v("8")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"9"},on:{click:function(e){return t.addCurrentOperand("9")}}},[n("h4",[t._v("9")])]),n("button",{staticClass:"button bg-orange",attrs:{value:"*"},on:{click:function(e){return t.addCurrentOperator("*")}}},[n("h4",[t._v("x")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"4"},on:{click:function(e){return t.addCurrentOperand("4")}}},[n("h4",[t._v("4")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"5"},on:{click:function(e){return t.addCurrentOperand("5")}}},[n("h4",[t._v("5")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"6"},on:{click:function(e){return t.addCurrentOperand("6")}}},[n("h4",[t._v("6")])]),n("button",{staticClass:"button bg-orange",attrs:{value:"-"},on:{click:function(e){return t.addCurrentOperator("-")}}},[n("h4",[t._v("-")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"1"},on:{click:function(e){return t.addCurrentOperand("1")}}},[n("h4",[t._v("1")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"2"},on:{click:function(e){return t.addCurrentOperand("2")}}},[n("h4",[t._v("2")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"3"},on:{click:function(e){return t.addCurrentOperand("3")}}},[n("h4",[t._v("3")])]),n("button",{staticClass:"button bg-orange",attrs:{value:"+"},on:{click:function(e){return t.addCurrentOperator("+")}}},[n("h4",[t._v("+")])]),t.isDecimal()?n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"FF"}},[n("h4",[t._v("FF")])]):n("button",{staticClass:"button bg-secondary",attrs:{value:"FF"},on:{click:function(e){return t.addCurrentOperand("FF")}}},[n("h4",[t._v("FF")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"0"},on:{click:function(e){return t.addCurrentOperand("0")}}},[n("h4",[t._v("0")])]),n("button",{staticClass:"button bg-secondary",attrs:{value:"00"},on:{click:function(e){return t.addCurrentOperand("00")}}},[n("h4",[t._v("00")])]),n("button",{staticClass:"button bg-orange",on:{click:function(e){return t.showEqual()}}},[n("h4",[t._v("=")])])])]],2)])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"D"}},[n("h4",[t._v("D")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"E"}},[n("h4",[t._v("E")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"F"}},[n("h4",[t._v("F")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"A"}},[n("h4",[t._v("A")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"B"}},[n("h4",[t._v("B")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"C"}},[n("h4",[t._v("C")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"7"}},[n("h4",[t._v("7")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"8"}},[n("h4",[t._v("8")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"9"}},[n("h4",[t._v("9")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"4"}},[n("h4",[t._v("4")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"5"}},[n("h4",[t._v("5")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"6"}},[n("h4",[t._v("6")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"1"}},[n("h4",[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"2"}},[n("h4",[t._v("2")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"3"}},[n("h4",[t._v("3")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"FF"}},[n("h4",[t._v("FF")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"0"}},[n("h4",[t._v("0")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"disabledButton",attrs:{disabled:"",value:"00"}},[n("h4",[t._v("00")])])}],c=(n("a434"),n("a630"),n("3ca3"),n("a15b"),{name:"calculator",data:function(){return{decOutput:"0",hexOutput:"0",currentOperand:"",currentOperator:"",mode:"decimal",nums:[],ops:[],binaryArray:["0000","0000","0000","0000","0000","0000","0000","0000","0000","0000","0000","0000","0000","0000","0000","0000"],hexMap:{A:10,B:11,C:12,D:13,E:14,F:15,FF:255},hexArray:["A","B","C","D","E","F","FF"]}},methods:{addCurrentOperand:function(t){this.currentOperand+=t,this.decOutput="hex"===this.mode?this.hexToDecimal(this.currentOperand):this.currentOperand,this.hexOutput="decimal"===this.mode?this.decimalToHexadecimal(this.currentOperand):this.currentOperand,this.insert4bitsBinary()},addOperandDecimal:function(){-1!=this.hexArray.indexOf(this.currentOperand)?this.nums.push(parseInt(this.hexMap[this.currentOperand])):this.nums.push(parseInt(this.currentOperand)),this.currentOperand=""},addCurrentOperator:function(t){this.currentOperator=t,this.addOperandDecimal(),this.control(),this.addOperator();var e=this.nums[this.nums.length-1];e<0?this.decOutput=this.turnOverMinus(e):e>Math.pow(2,64)?this.decOutput=this.turnOverPlus(e):this.decOutput=e,this.insert4bitsBinary(),this.hexOutput=this.decimalToHexadecimal(e)},control:function(){var t=this.ops[this.ops.length-1],e=this.currentOperator;""!==this.currentOperand||""===this.currentOperator||1===this.nums.length||0===this.ops.length||this.getPriority(t)<this.getPriority(e)||(this.calcurator(),this.control())},addOperator:function(){this.ops.push(this.currentOperator),this.currentOperator=""},calcurator:function(){if(1!==this.nums.length){var t=this.ops[this.ops.length-1],e=this.nums[this.nums.length-2],n=this.nums[this.nums.length-1],a=0;switch(t){case"+":a=e+n;break;case"-":a=e-n;break;case"*":a=e*n;break;case"/":a=Math.floor(e/n);break}this.nums.splice(this.nums.length-2,1,a),this.nums.pop(),this.ops.pop(),this.calcurator()}},showEqual:function(){this.addOperandDecimal(),this.calcurator();var t=this.nums[this.nums.length-1];t<0?this.decOutput=this.turnOverMinus(t):t>=Math.pow(2,64)?this.decOutput=this.turnOverPlus(t):this.decOutput=t,this.hexOutput=this.decimalToHexadecimal(t),this.insert4bitsBinary()},turnOverMinus:function(t){var e=0;return e=Math.pow(2,64)+t,e},turnOverPlus:function(t){var e=0;return e=Math.pow(2,64)-t,e},allClear:function(){this.decOutput="0",this.hexOutput="0",this.currentOperand="",this.currentOperator="",this.nums=[],this.ops=[],this.clearBinaryArray()},clearBinaryArray:function(){for(var t=0;t<this.binaryArray.length;t++)this.binaryArray[t]="0000"},getPriority:function(t){return"+"==t||"-"==t?1:"*"==t||"/"==t?2:void 0},isDecimal:function(){return"decimal"===this.mode},isHex:function(){return"hex"===this.mode},switchDecimal:function(){this.mode="decimal",this.decOutput=this.hexToDecimal(this.hexOutput),this.currentOperand=""===this.currentOperand?this.currentOperand="":this.hexToDecimal(this.currentOperand)},switchHex:function(){this.mode="hex",this.hexOutput=this.decimalToHexadecimal(this.decOutput),this.currentOperand=""===this.currentOperand?this.currentOperand="":this.decimalToHexadecimal(this.currentOperand)},decimalToHexadecimal:function(t){var e=parseInt(t),n="0123456789ABCDEF",a="",r=0;while(e>0)r=e%16,a=n[r]+a,e=Math.floor(e/16);return""===a?"0":a},hexToDecimal:function(t){for(var e=Array.from(t).reverse(),n=0,a=0;a<e.length;a++)-1!=this.hexArray.indexOf(e[a])?n+=this.hexMap[e[a]]*Math.pow(16,a):n+=e[a]*Math.pow(16,a);return n},decimalToBinary:function(t){var e=parseInt(t),n="";while(e>1)n=e%2+n,e=Math.floor(e/2);return e+n},insert4bitsBinary:function(){for(var t=Array.from(this.hexOutput).reverse(),e=this.binaryArray.length-1,n=0;n<t.length;n++){this.binaryArray[e-n]=-1==this.hexArray.indexOf(t[n])?this.decimalToBinary(t[n]):this.decimalToBinary(this.hexMap[t[n]]);var a=this.binaryArray[e-n],r=this.binaryArray[e-n].length;r<4&&(this.binaryArray[e-n]=Array(5-r).join("0")+a)}}},computed:{}}),o=c,l=(n("8860"),n("2877")),d=Object(l["a"])(o,i,u,!1,null,null,null),h=d.exports,b={name:"App",components:{calculation:h}},p=b,v=(n("034f"),Object(l["a"])(p,r,s,!1,null,null,null)),f=v.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(f)}}).$mount("#app")},"624b":function(t,e,n){},"85ec":function(t,e,n){},8860:function(t,e,n){"use strict";n("624b")}});
//# sourceMappingURL=app.1d740692.js.map