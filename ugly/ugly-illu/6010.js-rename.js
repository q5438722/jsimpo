define(["./object", "./string", "./date", "./array", "./function", "./json", "./xhr"], function (e, t, s) {
  var i;
  i = /^define|^prevent|descriptor$/i;function a(e) {
    return i.test(e);
  }e.failIfShimmed(a);t.setWhitespaceChars("\\s");return { failIfShimmed: e.failIfShimmed, setWhitespaceChars: t.setWhitespaceChars, setIsoCompatTest: s.setIsoCompatTest };
});
