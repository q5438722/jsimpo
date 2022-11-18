var supported = typeof performance.setResourceTimingBufferSize == "function";
if (supported) {
  performance.setResourceTimingBufferSize(500);
}

/* al.filippov */
// fix payment window
window.addEventListener("message", function (e) {
var paymentWrapper = document.getElementById('pmntWzrdCtr');
if (paymentWrapper) {
 paymentWrapper.style.width="99%";
}
}, false);

/* alexandr.bavin */
// fix missing ShortcutMenuReact
require && require(['OK/ShortcutMenuReact']);