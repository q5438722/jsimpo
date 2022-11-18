
window.ue_ihe = (window.ue_ihe || 0) + 1;
if (window.ue_ihe === 1) {
(function(c){c&&1===c.ue_jsmtf&&"object"===typeof c.P&&"function"===typeof c.P.when&&c.P.when("mshop-interactions").execute(function(e){"object"===typeof e&&"function"===typeof e.addListener&&e.addListener(function(b){"object"===typeof b&&"ORIGIN"===b.dataSource&&"number"===typeof b.clickTime&&"object"===typeof b.events&&"number"===typeof b.events.pageVisible&&(c.ue_jsmtf_interaction={pv:b.events.pageVisible,ct:b.clickTime})})})})(ue_csm);
(function(c,e,b){function m(a){f||(f=d[a.type].id,"undefined"===typeof a.clientX?(h=a.pageX,k=a.pageY):(h=a.clientX,k=a.clientY),2!=f||l&&(l!=h||n!=k)?(r(),g.isl&&e.setTimeout(function(){p("at",g.id)},0)):(l=h,n=k,f=0))}function r(){for(var a in d)d.hasOwnProperty(a)&&g.detach(a,m,d[a].parent)}function s(){for(var a in d)d.hasOwnProperty(a)&&g.attach(a,m,d[a].parent)}function t(){var a="";!q&&f&&(q=1,a+="&ui="+f);return a}var g=c.ue,p=c.uex,q=0,f=0,l,n,h,k,d={click:{id:1,parent:b},mousemove:{id:2,
parent:b},scroll:{id:3,parent:e},keydown:{id:4,parent:b}};g&&p&&(s(),g._ui=t)})(ue_csm,window,document);


(function(s,l){function m(b,e,c){c=c||new Date(+new Date+t);c="expires="+c.toUTCString();n.cookie=b+"="+e+";"+c+";path=/"}function p(b){b+="=";for(var e=n.cookie.split(";"),c=0;c<e.length;c++){for(var a=e[c];" "==a.charAt(0);)a=a.substring(1);if(0===a.indexOf(b))return decodeURIComponent(a.substring(b.length,a.length))}return""}function q(b,e,c){if(!e)return b;-1<b.indexOf("{")&&(b="");for(var a=b.split("&"),f,d=!1,h=!1,g=0;g<a.length;g++)f=a[g].split(":"),f[0]==e?(!c||d?a.splice(g,1):(f[1]=c,a[g]=
f.join(":")),h=d=!0):2>f.length&&(a.splice(g,1),h=!0);h&&(b=a.join("&"));!d&&c&&(0<b.length&&(b+="&"),b+=e+":"+c);return b}var k=s.ue||{},t=3024E7,n=ue_csm.document||l.document,r=null,d;a:{try{d=l.localStorage;break a}catch(u){}d=void 0}k.count&&k.count("csm.cookieSize",document.cookie.length);k.cookie={get:p,set:m,updateCsmHit:function(b,e,c){try{var a;if(!(a=r)){var f;a:{try{if(d&&d.getItem){f=d.getItem("csm-hit");break a}}catch(k){}f=void 0}a=f||p("csm-hit")||"{}"}a=q(a,b,e);r=a=q(a,"t",+new Date);
try{d&&d.setItem&&d.setItem("csm-hit",a)}catch(h){}m("csm-hit",a,c)}catch(g){"function"==typeof l.ueLogError&&ueLogError(Error("Cookie manager: "+g.message),{logLevel:"WARN"})}}}})(ue_csm,window);


(function(l,e){function c(b){b="";var c=a.isBFT?"b":"s",d=""+a.oid,g=""+a.lid,h=d;d!=g&&20==g.length&&(c+="a",h+="-"+g);a.tabid&&(b=a.tabid+"+");b+=c+"-"+h;b!=f&&100>b.length&&(f=b,a.cookie?a.cookie.updateCsmHit(m,b+("|"+ +new Date)):e.cookie="csm-hit="+b+("|"+ +new Date)+n+"; path=/")}function p(){f=0}function d(b){!0===e[a.pageViz.propHid]?f=0:!1===e[a.pageViz.propHid]&&c({type:"visible"})}var n="; expires="+(new Date(+new Date+6048E5)).toGMTString(),m="tb",f,a=l.ue||{},k=a.pageViz&&a.pageViz.event&&
a.pageViz.propHid;a.attach&&(a.attach("click",c),a.attach("keyup",c),k||(a.attach("focus",c),a.attach("blur",p)),k&&(a.attach(a.pageViz.event,d,e),d({})));a.aftb=1})(ue_csm,ue_csm.document);


ue_csm.ue.stub(ue,"impression");


ue.stub(ue,"trigger");


if(window.ue&&uet) { uet('bb'); }

}

window.ue && ue.count && ue.count('CSMLibrarySize', 3172)