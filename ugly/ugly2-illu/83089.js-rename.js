"use strict";
function $$CookieWriter(e, s, o) {
  const u = o.baseHref();
  const r = e[0];
  function n(e, o, i) {
    var r;
    var n;
    i = i || {};n = i.expires;r = angular.isDefined(i.path) ? i.path : u;if (angular.isUndefined(o)) {
      n = "Thu, 01 Jan 1970 00:00:00 GMT";o = "";
    }if (angular.isString(n)) {
      n = new Date(n);
    }var t = encodeURIComponent(e) + "=";
    t += r ? ";path=" + r : "";t += i.domain ? ";domain=" + i.domain : "";t += n ? ";expires=" + n.toUTCString() : "";t += i.secure ? ";secure" : "";t += i.samesite ? ";samesite=" + i.samesite : "";const a = t.length + 1;
    if (a > 4096) {
      s.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + a + " > 4096 bytes)!");
    }return t;
  }return function (e, o, i) {
    r.cookie = n(e, o, i);
  };
}$$CookieWriter.$inject = ["$document", "$log", "$browser"];angular.module("ngCookies").provider("$$cookieWriter", function e() {
  this.$get = $$CookieWriter;
});
