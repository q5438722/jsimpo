(function (n) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "datatables.net-bs4", "datatables.net-rowreorder"], function (e) {
      return n(e, window, document);
    });
  } else if (typeof exports === "object") {
    module.exports = function (e, t) {
      if (!e) {
        e = window;
      }if (!t || !t.fn.dataTable) {
        t = require("datatables.net-bs4")(e, t).$;
      }if (!t.fn.dataTable.RowReorder) {
        require("datatables.net-rowreorder")(e, t);
      }return n(t, e, e.document);
    };
  } else {
    n(jQuery, window, document);
  }
})(function (e, t, n, r) {
  return e.fn.dataTable;
});
