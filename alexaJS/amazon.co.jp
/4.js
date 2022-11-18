
window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {

var ue_csm = window,
    ue_hob = +new Date();
(function(d){var e=d.ue=d.ue||{},f=Date.now||function(){return+new Date};e.d=function(b){return f()-(b?0:d.ue_t0)};e.stub=function(b,a){if(!b[a]){var c=[];b[a]=function(){c.push([c.slice.call(arguments),e.d(),d.ue_id])};b[a].replay=function(b){for(var a;a=c.shift();)b(a[0],a[1],a[2])};b[a].isStub=1}};e.exec=function(b,a){return function(){try{return b.apply(this,arguments)}catch(c){ueLogError(c,{attribution:a||"undefined",logLevel:"WARN"})}}}})(ue_csm);


    var ue_err_chan = 'jserr-rw';
(function(d,e){function h(f,b){if(!(a.ec>a.mxe)&&f){a.ter.push(f);b=b||{};var c=f.logLevel||b.logLevel;c&&c!==k&&c!==m&&c!==n&&c!==p||a.ec++;c&&c!=k||a.ecf++;b.pageURL=""+(e.location?e.location.href:"");b.logLevel=c;b.attribution=f.attribution||b.attribution;a.erl.push({ex:f,info:b})}}function l(a,b,c,e,g){d.ueLogError({m:a,f:b,l:c,c:""+e,err:g,fromOnError:1,args:arguments},g?{attribution:g.attribution,logLevel:g.logLevel}:void 0);return!1}var k="FATAL",m="ERROR",n="WARN",p="DOWNGRADED",a={ec:0,ecf:0,
pec:0,ts:0,erl:[],ter:[],mxe:50,startTimer:function(){a.ts++;setInterval(function(){d.ue&&a.pec<a.ec&&d.uex("at");a.pec=a.ec},1E4)}};l.skipTrace=1;h.skipTrace=1;h.isStub=1;d.ueLogError=h;d.ue_err=a;e.onerror=l})(ue_csm,window);


var ue_id = 'ZYHX15V20NGQN9PRYPJF',
    ue_url = '/rd/uedata',
    ue_navtiming = 1,
    ue_mid = 'A1VC38T7YXB528',
    ue_sid = '000-0000000-0000000',
    ue_sn = 'www.amazon.co.jp',
    ue_furl = 'fls-fe.amazon.co.jp',
    ue_surl = 'https://unagi-fe.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
    ue_int = 1,
    ue_fcsn = 1,
    ue_urt = 3,
    ue_rpl_ns = 'cel-rpl',
    ue_ddq = 1,
    ue_fpf = '//fls-fe.amazon.co.jp/1/batch/1/OP/A1VC38T7YXB528:000-0000000-0000000:ZYHX15V20NGQN9PRYPJF$uedata=s:',
    ue_sbuimp = 1,
    ue_bfd = 400,
    ue_fnt = 0,

    ue_swi = 1;
var ue_viz=function(){(function(c,e,a){function k(b){if(c.ue.viz.length<p&&!l){var a=b.type;b=b.originalEvent;/^focus./.test(a)&&b&&(b.toElement||b.fromElement||b.relatedTarget)||(a=e[m]||("blur"==a||"focusout"==a?"hidden":"visible"),c.ue.viz.push(a+":"+(+new Date-c.ue.t0)),"visible"==a&&(ue.isl&&uex("at"),l=1))}}for(var l=0,f,g,m,n=["","webkit","o","ms","moz"],d=0,p=20,h=0;h<n.length&&!d;h++)if(a=n[h],f=(a?a+"H":"h")+"idden",d="boolean"==typeof e[f])g=a+"visibilitychange",m=(a?a+"V":"v")+"isibilityState";
k({});d&&e.addEventListener(g,k,0);c.ue&&d&&(c.ue.pageViz={event:g,propHid:f})})(ue_csm,document,window)};

(function(d,k,L){function F(a){return a&&a.replace&&a.replace(/^\s+|\s+$/g,"")}function t(a){return"undefined"===typeof a}function B(a,b){for(var c in b)b[u](c)&&(a[c]=b[c])}function G(a){try{var b=L.cookie.match(RegExp("(^| )"+a+"=([^;]+)"));if(b)return b[2].trim()}catch(c){}}function M(n,b,c){var e=(v||{}).type;2!==e&&1!==e&&(n&&(d.ue_id=a.id=a.rid=n,w=w.replace(/((.*?:){2})(\w+)/,function(a,b){return b+n})),b&&(w=w.replace(/(.*?:)(\w|-)+/,function(a,c){return c+b}),d.ue_sid=b),c&&a.tag("page-source:"+
c),d.ue_fpf=w)}function N(){var a={};return function(b){b&&(a[b]=1);b=[];for(var c in a)a[u](c)&&b.push(c);return b}}function x(d,b,c,e){e=e||+new C;var h,p;if(b||t(c)){if(d)for(p in h=b?g("t",b)||g("t",b,{}):a.t,h[d]=e,c)c[u](p)&&g(p,b,c[p]);return e}}function g(d,b,c){var e=b&&b!=a.id?a.sc[b]:a;e||(e=a.sc[b]={});"id"===d&&c&&(O=1);return e[d]=c||e[d]}function P(d,b,c,e,h){c="on"+c;var g=b[c];"function"===typeof g?d&&(a.h[d]=g):g=function(){};b[c]=function(a){h?(e(a),g(a)):(g(a),e(a))};b[c]&&(b[c].isUeh=
1)}function Q(n,b,c,e){function r(b,c){var d=[b],e=0,f={},h,k;c?(d.push("m=1"),f[c]=1):f=a.sc;for(k in f)if(f[u](k)){var r=g("wb",k),l=g("t",k)||{},p=g("t0",k)||a.t0,m;if(c||2==r){r=r?e++:"";d.push("sc"+r+"="+k);for(m in l)3>=m.length&&!t(l[m])&&null!==l[m]&&d.push(m+r+"="+(l[m]-p));d.push("t"+r+"="+l[n]);if(g("ctb",k)||g("wb",k))h=1}}!H&&h&&d.push("ctb=1");return d.join("&")}function p(b,c,f,e){if(b){var g=d.ue_err;d.ue_url&&!e&&b&&0<b.length&&(e=new Image,a.iel.push(e),e.src=b,a.count&&a.count("postbackImageSize",
b.length));if(w){var h=k.encodeURIComponent;h&&b&&(e=new Image,b=""+d.ue_fpf+h(b)+":"+(+new C-d.ue_t0),a.iel.push(e),e.src=b)}else a.log&&(a.log(b,"uedata",{n:1}),a.ielf.push(b));g&&!g.ts&&g.startTimer();a.b&&(g=a.b,a.b="",p(g,c,f,1))}}function z(b){var c=v?v.type:D,d=2==c||a.isBFonMshop,c=c&&!d,e=a.bfini;O||(e&&1<e&&(b+="&bfform=1",c||(a.isBFT=e-1)),d&&(b+="&bfnt=1",a.isBFT=a.isBFT||1),a.ssw&&a.isBFT&&(a.isBFonMshop&&(a.isNRBF=0),t(a.isNRBF)&&(d=a.ssw(a.oid),d.e||t(d.val)||(a.isNRBF=1<d.val?0:1)),
t(a.isNRBF)||(b+="&nrbf="+a.isNRBF)),a.isBFT&&!a.isNRBF&&(b+="&bft="+a.isBFT));return b}if(!a.paused&&(b||t(c))){for(var m in c)c[u](m)&&g(m,b,c[m]);a.isBFonMshop||x("pc",b,c);m=g("id",b)||a.id;var s=g("id2",b),f=a.url+"?"+n+"&v="+a.v+"&id="+m,H=g("ctb",b)||g("wb",b),y;H&&(f+="&ctb="+H);s&&(f+="&id2="+s);1<d.ueinit&&(f+="&ic="+d.ueinit);if(!("ld"!=n&&"ul"!=n||b&&b!=m)){if("ld"==n){try{k[I]&&k[I].isUeh&&(k[I]=null)}catch(G){}if(k.chrome)for(s=0;s<J.length;s++)R(E,J[s]);(s=L.ue_backdetect)&&s.ue_back&&
s.ue_back.value++;d._uess&&(y=d._uess());a.isl=1}a._bf&&(f+="&bf="+a._bf());d.ue_navtiming&&h&&(g("ctb",m,"1"),a.isBFonMshop||x("tc",D,D,K));!A||a.isBFonMshop||S||(h&&B(a.t,{na_:h.navigationStart,ul_:h.unloadEventStart,_ul:h.unloadEventEnd,rd_:h.redirectStart,_rd:h.redirectEnd,fe_:h.fetchStart,lk_:h.domainLookupStart,_lk:h.domainLookupEnd,co_:h.connectStart,_co:h.connectEnd,sc_:h.secureConnectionStart,rq_:h.requestStart,rs_:h.responseStart,_rs:h.responseEnd,dl_:h.domLoading,di_:h.domInteractive,de_:h.domContentLoadedEventStart,
_de:h.domContentLoadedEventEnd,_dc:h.domComplete,ld_:h.loadEventStart,_ld:h.loadEventEnd,ntd:("function"!==typeof A.now||t(K)?0:new C(K+A.now())-new C)+a.t0}),v&&B(a.t,{ty:v.type+a.t0,rc:v.redirectCount+a.t0}),S=1);a.isBFonMshop||B(a.t,{hob:d.ue_hob,hoe:d.ue_hoe});a.ifr&&(f+="&ifr=1")}x(n,b,c,e);c="ld"==n&&b&&g("wb",b);var q,l;c||b&&b!==m||$(b);c||m==a.oid||aa(m,(g("t",b)||{}).tc||+g("t0",b),+g("t0",b));(e=d.ue_mbl)&&e.cnt&&!c&&(f+=e.cnt());c?g("wb",b,2):"ld"==n&&(a.lid=F(m));for(q in a.sc)if(1==
g("wb",q))break;if(c){if(a.s)return;f=r(f,null)}else e=r(f,null),e!=f&&(e=z(e),a.b=e),y&&(f+=y),f=r(f,b||a.id);f=z(f);if(a.b||c)for(q in a.sc)2==g("wb",q)&&delete a.sc[q];y=0;a._rt&&(f+="&rt="+a._rt());e=k.csa;if(!c&&e)for(l in q=g("t",b)||{},e=e("PageTiming"),q)q[u](l)&&e("mark",ba[l]||l,q[l]);c||(a.s=0,(l=d.ue_err)&&0<l.ec&&l.pec<l.ec&&(l.pec=l.ec,f+="&ec="+l.ec+"&ecf="+l.ecf),y=g("ctb",b),"ld"!==n||b||a.markers||(a.markers={},B(a.markers,g("t",b))),g("t",b,{}));a.tag&&a.tag().length&&(f+="&csmtags="+
a.tag().join("|"),a.tag=N());l=a.viz||[];(q=l.length)&&(f+="&viz="+l.splice(0,q).join("|"));t(d.ue_pty)||(f+="&pty="+d.ue_pty+"&spty="+d.ue_spty+"&pti="+d.ue_pti);a.tabid&&(f+="&tid="+a.tabid);a.aftb&&(f+="&aftb=1");!a._ui||b&&b!=m||(f+=a._ui());a.a=f;p(f,n,y,c)}}function $(a){var b=k.ue_csm_markers||{},c;for(c in b)b[u](c)&&x(c,a,D,b[c])}function z(a,b,c){c=c||k;if(c[T])c[T](a,b,!1);else if(c[U])c[U]("on"+a,b)}function R(a,b,c){c=c||k;if(c[V])c[V](a,b,!1);else if(c[W])c[W]("on"+a,b)}function X(){function a(){d.onUl()}
function b(a){return function(){c[a]||(c[a]=1,Q(a))}}var c={},e,g;d.onLd=b("ld");d.onLdEnd=b("ld");d.onUl=b("ul");e={stop:b("os")};k.chrome?(z(E,a),J.push(a)):e[E]=d.onUl;for(g in e)e[u](g)&&P(0,k,g,e[g]);d.ue_viz&&ue_viz();z("load",d.onLd);x("ue")}function aa(g,b,c){var e=d.ue_mbl,h=k.csa,p=h&&h("SPA"),h=h&&h("PageTiming");e&&e.ajax&&e.ajax(b,c);p&&h&&(p("newPage",{requestId:g,transitionType:"soft"}),h("mark","transitionStart",b));a.tag("ajax-transition")}d.ueinit=(d.ueinit||0)+1;var a=d.ue=d.ue||
{};a.t0=k.aPageStart||d.ue_t0;a.id=d.ue_id;a.url=d.ue_url;a.rid=d.ue_id;a.a="";a.b="";a.h={};a.s=1;a.t={};a.sc={};a.iel=[];a.ielf=[];a.viz=[];a.v="0.215061.0";a.paused=!1;var u="hasOwnProperty",E="beforeunload",I="on"+E,T="addEventListener",V="removeEventListener",U="attachEvent",W="detachEvent",ba={cf:"criticalFeature",af:"aboveTheFold",fn:"functional",fp:"firstPaint",fcp:"firstContentfulPaint",bb:"bodyBegin",be:"bodyEnd",ld:"loaded"},C=k.Date,A=k.performance||k.webkitPerformance,h=(A||{}).timing,
v=(A||{}).navigation,K=(h||{}).navigationStart,w=d.ue_fpf,O=0,S=0,J=[],D;a.oid=F(a.id);a.lid=F(a.id);a._t0=a.t0;a.tag=N();a.ifr=k.top!==k.self||k.frameElement?1:0;a.markers=null;a.attach=z;a.detach=R;if("000-0000000-0000000"===d.ue_sid){var Y=G("cdn-rid"),Z=G("session-id");Y&&Z&&M(Y,Z,"cdn")}d.uei=X;d.ueh=P;d.ues=g;d.uet=x;d.uex=Q;a.reset=M;a.pause=function(d){a.paused=d};X()})(ue_csm,window,ue_csm.document);


ue.stub(ue,"event");ue.stub(ue,"onSushiUnload");ue.stub(ue,"onSushiFlush");

ue.stub(ue,"log");ue.stub(ue,"onunload");ue.stub(ue,"onflush");
(function(c){var a=c.ue;a.cv={};a.cv.scopes={};a.count=function(d,c,b){var e={},f=a.cv,g=b&&0===b.c;e.counter=d;e.value=c;e.t=a.d();b&&b.scope&&(f=a.cv.scopes[b.scope]=a.cv.scopes[b.scope]||{},e.scope=b.scope);if(void 0===c)return f[d];f[d]=c;d=0;b&&b.bf&&(d=1);ue_csm.ue_sclog||!a.clog||0!==d||g?a.log&&a.log(e,"csmcount",{c:1,bf:d}):a.clog(e,"csmcount",{bf:d})};a.count("baselineCounter2",1);a&&a.event&&(a.event({requestId:c.ue_id||"rid",server:c.ue_sn||"sn",obfuscatedMarketplaceId:c.ue_mid||"mid"},
"csm","csm.CSMBaselineEvent.4"),a.count("nexusBaselineCounter",1,{bf:1}))})(ue_csm);



var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;
