const matchHtmlRegExp = /["'&<>]/;
function escapeHtml(e) {
  const t = "" + e;
  const r = matchHtmlRegExp.exec(t);
  if (!r) {
    return t;
  }var a;
  var c = "";
  var n;
  var s = 0;
  for (n = r.index; n < t.length; n++) {
    switch (t.charCodeAt(n)) {case 34:
        a = "&quot;";break;case 38:
        a = "&amp;";break;case 39:
        a = "&#x27;";break;case 60:
        a = "&lt;";break;case 62:
        a = "&gt;";break;default:
        continue;}if (s !== n) {
      c += t.substring(s, n);
    }s = n + 1;c += a;
  }return s !== n ? c + t.substring(s, n) : c;
}function escapeTextForBrowser(e) {
  if (typeof e === "boolean" || typeof e === "number") {
    return "" + e;
  }return escapeHtml(e);
}export default escapeTextForBrowser;