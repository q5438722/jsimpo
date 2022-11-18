
                        /* global: ensemble is from dws-ensemble-appshell. */
                        ensemble.processChunk("embedded-app", "jsfragment-1", function(){(function(){if(!!!(null===window||void 0===window?void 0:window.chrome))return;const t=!!document.documentElement.getAttribute("data-cms-lang")&&void 0!==(null===window||void 0===window?void 0:window.sandbox_verifier);let n=!1;try{sessionStorage}catch(t){n=!0}const e=location.toString();let o="",s=e;const i=e.indexOf("#");-1!==i&&(o=e.substr(i),s=e.substr(0,i));let l="",r=s;const d=s.indexOf("?");-1!==d&&(l=s.substr(d),r=s.substr(0,d));const c="?_&"===(l+"&").substr(0,"?_&".length),u=(l+"&").indexOf("&_&"),w=-1!==u||c;if(t===n||w){if(w){let t=l;if(c)t="?"+l.substr("?_&".length);else{const n=l.substr(u+"&_&".length);t=l.substr(0,u)+(n?"&"+n:"")}"?"===t&&(t=""),history.replaceState(null,"",r+t+o)}}else location.replace(r+(l?l+"&":"?")+"_"+o)})();

});
                        