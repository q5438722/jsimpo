(function (n) {
  n(function (n) {
    "use strict";
    const r = n("./../SortedMap");
    function t(t, i) {
      var e;
      var u;
      var f;
      var o;
      var c;
      if (i && a(i)) {
        e = t.get;u = t.add;f = t.update;o = t.forEach;c = new r(t.identifier, t.comparator);if (e) {
          t.get = function n(r) {
            return l(e.call(t, r), i, c);
          };
        }if (u) {
          t.add = function n(r) {
            return u.call(t, d(r, i, c));
          };
        }if (f) {
          t.update = function n(r) {
            return f.call(t, d(r, i, c));
          };
        }if (o) {
          t.forEach = function n(e) {
            function r(n, r) {
              const t = l(n, i, c);
              return e(t, r);
            }return o.call(t, r);
          };
        }
      }return t;
    }return t;function f(n) {
      return n;
    }function a(n) {
      for (var r in n) return true;
    }function d(n, r, t) {
      var e;
      var i;
      var u;
      e = {};for (i in n) {
        u = r[i] || f;e[i] = u(n[i], i, n);
      }for (i in r) {
        if (!(i in n)) {
          e[i] = r[i](null, i, n);
        }
      }t.remove(e);t.add(e, n);return e;
    }function l(n, r, t) {
      var e;
      var i;
      var u;
      e = t.get(n);for (i in e) {
        u = r[i] && r[i].inverse;if (u) {
          e[i] = u(n[i], i, n);
        }
      }return e;
    }
  });
})(typeof define == "function" ? define : function (n) {
  module.exports = n(require);
});
