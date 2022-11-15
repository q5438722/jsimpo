angular.module("500lines", []).controller("Spreadsheet", function (t, s) {
  t.Cols = [], t.Rows = [];e(t.Cols, "A", "H");e(t.Rows, 1, 20);function e(e, o, r) {
    while (o <= r) {
      e.push(o);o = isNaN(o) ? String.fromCharCode(o.charCodeAt() + 1) : o + 1;
    }
  }t.keydown = function (r, t, n) {
    switch (r.which) {case 38:case 40:case 13:
        s(function () {
          const e = r.which === 38 ? -1 : 1;
          const o = document.querySelector("#" + t + (n + e));
          if (o) {
            o.focus();
          }
        });}
  };t.reset = function () {
    t.sheet = { A1: 1874, B1: "+", C1: 2046, D1: "\u21D2", E1: "=A1+C1" };
  };(t.init = function () {
    t.sheet = angular.fromJson(localStorage.getItem(""));if (!t.sheet) {
      t.reset();
    }t.worker = new Worker("worker.js");
  }).call();t.errs = {}, t.vals = {};t.calc = function () {
    const o = angular.toJson(t.sheet);
    const r = s(function () {
      t.worker.terminate();t.init();t.calc();
    }, 99);
    t.worker.onmessage = function (e) {
      s.cancel(r);localStorage.setItem("", o);s(function () {
        t.errs = e.data[0], t.vals = e.data[1];
      });
    };t.worker.postMessage(t.sheet);
  };t.worker.onmessage = t.calc;t.worker.postMessage(null);
});
