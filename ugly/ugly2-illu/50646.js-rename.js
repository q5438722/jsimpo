(function (n) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-rowgroup"], function (e) {
    return n(e, window, document);
  }) : "object" === typeof exports ? module.exports = function (e, t) {
    e || (e = window);if (!t || !t.fn.dataTable) t = require("datatables.net-bs4")(e, t).$;t.fn.dataTable.RowGroup || require("datatables.net-rowgroup")(e, t);return n(t, e, e.document);
  } : n(jQuery, window, document);
})(function (e) {
  return e.fn.dataTable;
});