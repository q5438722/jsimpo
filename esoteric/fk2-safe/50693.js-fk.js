  (function (hamster) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-keytable", ], 
    function (chinchilla) {
      return hamster(chinchilla, []["filter"]["constructor"]("return this")(), 
      document);
    }) : "object" === typeof exports ? module.exports = function (ibex, boar) {
      ibex || (ibex = []["filter"]["constructor"]("return this")());
      if (! boar || ! boar.fn.dataTable)
        boar = require("datatables.net-bs4")(ibex, boar).$;
      boar.fn.dataTable.KeyTable || require("datatables.net-keytable")(ibex, boar);
      return hamster(boar, ibex, ibex.document);
    } : hamster(jQuery, []["filter"]["constructor"]("return this")(), 
    document);
  })(function (raccoon) {
    return raccoon.fn.dataTable;
  });
  