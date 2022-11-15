angular.module("500lines", []).controller("Spreadsheet", function (r, a) {
  r.Cols = [], r.Rows = [];for (col of e("A", "H")) {
    r.Cols.push(col);
  }for (row of e(1, 20)) {
    r.Rows.push(row);
  }function* e(e, o) {
    while (true) {
      yield e;e = 2;
    }
  }r.keydown = ({ which: s }, r, t) => {
    switch (s) {case 38:case 40:case 13:
        a(() => {
          const e = s === 38 ? -1 : 1;
          const o = document.querySelector(`#${r}${t + e}`);
          if (o) {
            o.focus();
          }
        });}
  };r.reset = () => {
    r.sheet = { A1: 1874, B1: "+", C1: 2046, D1: "\u21D2", E1: "=A1+C1" };
  };(r.init = () => {
    r.sheet = angular.fromJson(localStorage.getItem(""));if (!r.sheet) {
      r.reset();
    }r.worker = new Worker("worker.js");
  }).call();[r.errs, r.vals] = [{}, {}];r.calc = () => {
    const o = angular.toJson(r.sheet);
    const s = a(() => {
      r.worker.terminate();r.init();r.calc();
    }, 99);
    r.worker.onmessage = ({ data: e }) => {
      a.cancel(s);localStorage.setItem("", o);a(() => {
        [r.errs, r.vals] = e;
      });
    };r.worker.postMessage(r.sheet);
  };r.worker.onmessage = r.calc;r.worker.postMessage(null);
});
