this.gbar_=this.gbar_||{};(function(_){var window=this;
try{
_.te=function(a,b,c){if(!a.o)if(c instanceof Array){c=_.jb(c);for(var d=c.next();!d.done;d=c.next())_.te(a,b,d.value)}else{d=(0,_.z)(a.F,a,b);var e=a.B+c;a.B++;b.setAttribute("data-eqid",e);a.D[e]=d;b&&b.addEventListener?b.addEventListener(c,d,!1):b&&b.attachEvent?b.attachEvent("on"+c,d):a.A.log(Error("D`"+b))}};

}catch(e){_._DumpException(e)}
try{
_.ue=function(){if(!_.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{_.n.addEventListener("test",function(){},b),_.n.removeEventListener("test",function(){},b)}catch(c){}return a}();
_.ve=_.Pb?"webkitTransitionEnd":"transitionend";

}catch(e){_._DumpException(e)}
try{
var we=document.querySelector(".gb_z .gb_A"),xe=document.querySelector("#gb.gb_Kc");we&&!xe&&_.te(_.ke,we,"click");

}catch(e){_._DumpException(e)}
try{
var fi=function(a){_.I.call(this);this.C=a;this.A=null;this.o={};this.D={};this.j={};this.B=null};_.w(fi,_.I);_.gi=function(a){if(a.A)return a.A;for(var b in a.j)if(a.j[b].Oe()&&a.j[b].Kb())return a.j[b];return null};_.k=fi.prototype;_.k.mf=function(a){a&&_.gi(this)&&a!=_.gi(this)&&_.gi(this).Jd(!1);this.A=a};_.k.ng=function(a){a=this.j[a]||a;return _.gi(this)==a};_.k.ye=function(a,b){b=b.Rc();if(this.o[a]&&this.o[a][b])for(var c=0;c<this.o[a][b].length;c++)try{this.o[a][b][c]()}catch(d){this.C.log(d)}};
_.k.Ah=function(a){return!this.D[a.Rc()]};_.k.Gg=function(a){this.j[a]&&(_.gi(this)&&_.gi(this).Rc()==a||this.j[a].Jd(!0))};_.k.Wa=function(a){this.B=a;for(var b in this.j)this.j[b].Oe()&&this.j[b].Wa(a)};_.k.hf=function(a){this.j[a.Rc()]=a};_.k.Ic=function(a){return a in this.j?this.j[a]:null};var hi=new fi(_.K);_.Kd("dd",hi);

}catch(e){_._DumpException(e)}
try{
var Ij=document.querySelector(".gb_Na .gb_A"),Jj=document.querySelector("#gb.gb_Kc");Ij&&!Jj&&_.te(_.ke,Ij,"click");

}catch(e){_._DumpException(e)}
})(this.gbar_);
// Google Inc.
this.gbar_=this.gbar_||{};(function(_){var window=this;
try{
_.ye=function(a,b){return 0<=(0,_.Fb)(a,b)};_.ze=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};_.Ae=function(a){var b=_.ze(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.Be=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}_.Ce=_.C||_.Pb;
_.De=function(a,b){this.width=a;this.height=b};_.k=_.De.prototype;_.k.aspectRatio=function(){return this.width/this.height};_.k.hc=function(){return!(this.width*this.height)};_.k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};_.k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_.k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
var Fe,Ie;_.Ee=function(a,b){return(b||document).getElementsByTagName(String(a))};_.Ge=function(a,b){_.ab(b,function(c,d){c&&"object"==typeof c&&c.Qb&&(c=c.wb());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Fe.hasOwnProperty(d)?a.setAttribute(Fe[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})};
Fe={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};_.Je=function(a,b){var c=b[1],d=_.He(a,String(b[0]));c&&("string"===typeof c?d.className=c:Array.isArray(c)?d.className=c.join(" "):_.Ge(d,c));2<b.length&&Ie(a,d,b);return d};
Ie=function(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!_.Ae(f)||_.wb(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(_.wb(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}_.Gb(g?_.ma(f):f,d)}}};_.Ke=function(a){return _.He(document,a)};
_.He=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};_.Le=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};_.Me=function(a){return _.wb(a)&&1==a.nodeType};_.Ne=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};_.Oe=function(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null};

}catch(e){_._DumpException(e)}
try{
_.bf=function(a){return/^[\s\xa0]*$/.test(a)};_.cf=function(a){_.H.call(this,a)};_.w(_.cf,_.H);_.df=function(a){return _.Md(_.Id.j(),a)};

}catch(e){_._DumpException(e)}
try{
_.Nj=function(a,b,c){a.rel=c;-1!=c.toLowerCase().indexOf("stylesheet")?(a.href=_.ad(b),(b=_.zd(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)):a.href=b instanceof _.Zc?_.ad(b):b instanceof _.cd?_.dd(b):_.dd(_.jd(b))};

}catch(e){_._DumpException(e)}
try{
/*

 SPDX-License-Identifier: Apache-2.0
*/
var Oj;try{new URL("s://g"),Oj=!0}catch(a){Oj=!1}_.Pj=Oj;

}catch(e){_._DumpException(e)}
try{
_.Qj=function(a){var b=_.Uc();a=b?b.createScriptURL(a):a;return new _.Zc(a,_.Yc)};

}catch(e){_._DumpException(e)}
try{
_.Rj=function(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};

}catch(e){_._DumpException(e)}
try{
var Sj=function(a,b,c){_.je.log(46,{att:a,max:b,url:c})},Uj=function(a,b,c){_.je.log(47,{att:a,max:b,url:c});a<b?Tj(a+1,b):_.K.log(Error("ga`"+a+"`"+b),{url:c})},Tj=function(a,b){if(Vj){var c=_.Ke("SCRIPT");c.async=!0;c.type="text/javascript";c.charset="UTF-8";c.src=_.$c(Vj);_.Rj(c);c.onload=_.Be(Sj,a,b,c.src);c.onerror=_.Be(Uj,a,b,c.src);_.je.log(45,{att:a,max:b,url:c.src});_.Ee("HEAD")[0].appendChild(c)}},Wj=function(a){_.H.call(this,a)};_.w(Wj,_.H);
var Xj=_.F(_.fe,Wj,17)||new Wj,Yj,Vj=(Yj=_.F(Xj,_.Ic,1))?_.Qj(_.D(Yj,4)||""):null,Zj,ak=(Zj=_.F(Xj,_.Ic,2))?_.Qj(_.D(Zj,4)||""):null,bk=function(){Tj(1,2);if(ak){var a=_.Ke("LINK");a.setAttribute("type","text/css");_.Nj(a,ak,"stylesheet");var b=_.zd();b&&a.setAttribute("nonce",b);_.Ee("HEAD")[0].appendChild(a)}};
(function(){var a=_.ge();if(_.E(a,18))bk();else{var b=_.D(a,19)||0;window.addEventListener("load",function(){window.setTimeout(bk,b)})}})();

}catch(e){_._DumpException(e)}
})(this.gbar_);
// Google Inc.
