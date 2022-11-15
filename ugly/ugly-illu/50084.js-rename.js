(function (e) {
  if (typeof exports == "object" && typeof module == "object") e(require("../../lib/codemirror"), require("../yaml/yaml"));else if (typeof define == "function" && define.amd) define(["../../lib/codemirror", "../yaml/yaml"], e);else e(CodeMirror);
})(function (o) {
  const f = 0;
  const s = 1;
  const u = 2;
  o.defineMode("yaml-frontmatter", function (e, t) {
    const i = o.getMode(e, "yaml");
    const a = o.getMode(e, t && t.base || "gfm");
    function n(e) {
      return e.state == u ? a : i;
    }return { startState: function () {
        return { state: f, inner: o.startState(i) };
      }, copyState: function (e) {
        return { state: e.state, inner: o.copyState(n(e), e.inner) };
      }, token: function (e, t) {
        if (t.state == f) {
          if (e.match("---", false)) {
            t.state = s;return i.token(e, t.inner);
          } else {
            t.state = u;t.inner = o.startState(a);return a.token(e, t.inner);
          }
        } else if (t.state == s) {
          const n = e.sol() && e.match(/(---|\.\.\.)/, false);
          const r = i.token(e, t.inner);
          if (n) {
            t.state = u;t.inner = o.startState(a);
          }return r;
        } else {
          return a.token(e, t.inner);
        }
      }, innerMode: function (e) {
        return { mode: n(e), state: e.inner };
      }, blankLine: function (e) {
        const t = n(e);
        if (t.blankLine) return t.blankLine(e.inner);
      } };
  });
});
