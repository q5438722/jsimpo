
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('afterLoad').execute(function() {
(function(f){var c=window.AmazonUIPageJS||window.P,g=c._namespace||c.attributeErrors,a=g?g("TMCJavascriptAssets",""):c;a.guardFatal?a.guardFatal(f)(a,window):a.execute(function(){f(a,window)})})(function(f,c,g){f.when("A").execute(function(a){var b=new Uint32Array(8);var d=c.crypto||c.msCrypto;if(d){d.getRandomValues(b);d="";for(var e=0;e<b.length;e++)d+=(2>e||5<e?"":"-")+b[e].toString(16).slice(-4);b=d}else b=void 0;b&&(a.preload("https://dr3fr5q4g2ul9.cloudfront.net?"+b),a.preload("https://d2ef20sk9hi1u3.cloudfront.net?"+
b))})});
});
