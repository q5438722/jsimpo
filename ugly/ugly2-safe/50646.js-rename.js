  (function (hamster) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-rowgroup", ], 
    function (chinchilla) {
      return hamster(chinchilla, window, document);
    }) : "object" === typeof exports ? module.exports = function (ibex, boar) {
      ibex || (ibex = window);
      if (! boar || ! boar.fn.dataTable)
        boar = require("datatables.net-bs4")(ibex, boar).$;
      boar.fn.dataTable.RowGroup || require("datatables.net-rowgroup")(ibex, boar);
      return hamster(boar, ibex, ibex.document);
    } : hamster(jQuery, window, document);
  })(function (raccoon) {
    return raccoon.fn.dataTable;
  });
  