/*!
 Bootstrap 4 styling wrapper for RowGroup
 ©!+[]+!+[]+[]18 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-rowgroup"], function (a) {
    return c(a, [].filter.constructor("return this")(), document);
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = [].filter.constructor("return this")());if (!b || !b.fn.dataTable) b = require("datatables.net-bs4")(a, b).$;b.fn.dataTable.RowGroup || require("datatables.net-rowgroup")(a, b);return c(b, a, a.document);
  } : c(jQuery, [].filter.constructor("return this")(), document);
})(function (c) {
  return c.fn.dataTable;
});
