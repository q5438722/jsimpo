(function (t) {
  if (typeof exports == "object" && typeof module == "object") t(require("../../lib/codemirror"));else if (typeof define == "function" && define.amd) define(["../../lib/codemirror"], t);else t(CodeMirror);
})(function (n) {
  const h = /MSIE \d/.test(navigator.userAgent) && (document.documentMode == null || document.documentMode < 8);
  const v = n.Pos;
  const k = { "(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<" };
  function p(t) {
    return t && t.bracketRegex || /[(){}[\]]/;
  }function u(t, e, r) {
    const n = t.getLineHandle(e.line);
    var i = e.ch - 1;
    var a = r && r.afterCursor;
    if (a == null) a = /(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className);const c = p(r);
    const o = !a && i >= 0 && c.test(n.text.charAt(i)) && k[n.text.charAt(i)] || c.test(n.text.charAt(i + 1)) && k[n.text.charAt(++i)];
    if (!o) return null;const l = o.charAt(1) == ">" ? 1 : -1;
    if (r && r.strict && l > 0 != (i == e.ch)) return null;const f = t.getTokenTypeAt(v(e.line, i + 1));
    const s = m(t, v(e.line, i + (l > 0 ? 1 : 0)), l, f, r);
    if (s == null) return null;return { from: v(e.line, i), to: s && s.pos, match: s && s.ch == o.charAt(0), forward: l > 0 };
  }function m(t, e, r, n, i) {
    const a = i && i.maxScanLineLength || 1e4;
    const c = i && i.maxScanLines || 1e3;
    const o = [];
    const l = p(i);
    const f = r > 0 ? Math.min(e.line + c, t.lastLine() + 1) : Math.max(t.firstLine() - 1, e.line - c);
    for (var s = e.line; s != f; s += r) {
      const h = t.getLine(s);
      if (!h) continue;var u = r > 0 ? 0 : h.length - 1;
      const m = r > 0 ? h.length : -1;
      if (h.length > a) continue;if (s == e.line) u = e.ch - (r < 0 ? 1 : 0);for (; u != m; u += r) {
        const g = h.charAt(u);
        if (l.test(g) && (n === undefined || (t.getTokenTypeAt(v(s, u + 1)) || "") == (n || ""))) {
          const d = k[g];
          if (d && d.charAt(1) == ">" == r > 0) o.push(g);else if (!o.length) return { pos: v(s, u), ch: g };else o.pop();
        }
      }
    }return s - r == (r > 0 ? t.lastLine() : t.firstLine()) ? false : null;
  }function e(t, e, r) {
    const n = t.state.matchBrackets.maxHighlightLineLength || 1e3;
    const i = r && r.highlightNonMatching;
    const a = [];
    const c = t.listSelections();
    for (var o = 0; o < c.length; o++) {
      const l = c[o].empty() && u(t, c[o].head, r);
      if (l && (l.match || i !== false) && t.getLine(l.from.line).length <= n) {
        const f = l.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
        a.push(t.markText(l.from, v(l.from.line, l.from.ch + 1), { className: f }));if (l.to && t.getLine(l.to.line).length <= n) a.push(t.markText(l.to, v(l.to.line, l.to.ch + 1), { className: f }));
      }
    }if (a.length) {
      if (h && t.state.focused) t.focus();
      const s = function () {
        t.operation(function () {
          for (var t = 0; t < a.length; t++) a[t].clear();
        });
      };

      if (e) setTimeout(s, 800);else return s;
    }
  }function i(t) {
    t.operation(function () {
      if (t.state.matchBrackets.currentlyHighlighted) {
        t.state.matchBrackets.currentlyHighlighted();t.state.matchBrackets.currentlyHighlighted = null;
      }t.state.matchBrackets.currentlyHighlighted = e(t, false, t.state.matchBrackets);
    });
  }function a(t) {
    if (t.state.matchBrackets && t.state.matchBrackets.currentlyHighlighted) {
      t.state.matchBrackets.currentlyHighlighted();t.state.matchBrackets.currentlyHighlighted = null;
    }
  }n.defineOption("matchBrackets", false, function (t, e, r) {
    if (r && r != n.Init) {
      t.off("cursorActivity", i);t.off("focus", i);t.off("blur", a);a(t);
    }if (e) {
      t.state.matchBrackets = typeof e == "object" ? e : {};t.on("cursorActivity", i);t.on("focus", i);t.on("blur", a);
    }
  });n.defineExtension("matchBrackets", function () {
    e(this, true);
  });n.defineExtension("findMatchingBracket", function (t, e, r) {
    if (r || typeof e == "boolean") {
      if (!r) {
        e = e ? { strict: true } : null;
      } else {
        r.strict = e;e = r;
      }
    }return u(this, t, e);
  });n.defineExtension("scanForBracket", function (t, e, r, n) {
    return m(this, t, e, r, n);
  });
});
