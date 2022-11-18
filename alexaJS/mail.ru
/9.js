
					!function(){"use strict";var r,a,o;const e={verbose:mr._.XRAY_VERBOSE,split:mr._.EXPERIMENTID||"",xrayRadarUrl:mr.switches.xrayRadarUrl||"//xray.mail.ru",defaultParams:{p:"resplash",email:mr._.EMAIL,dwh:{id:mr._.UFID||""}},beforeSend:(r,a)=>!0,o_v:"".concat(null===(r=mr.omicronConfig)||void 0===r?void 0:r.config_v),o_ss:null===(a=mr.omicronConfig)||void 0===a?void 0:a.short_segments};"/search"===new URL(window.location.href).pathname&&(e.defaultParams.p="resplash-serp"),null===(o=window.xray)||void 0===o||o.setConfig(e),xray.send("pk-xray-ready")}();
					
					//# sourceURL=xray.init.js
				