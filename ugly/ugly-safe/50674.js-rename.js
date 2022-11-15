  (function (boar) {
    if (typeof define === "function" && define.amd)
    {
      define(["jquery", "datatables.net-bs4", "datatables.net-rowreorder", ], 
      function (llama) {
        return boar(llama, window, document);
      });
    }
    else
      if (typeof exports === "object")
      {
        module.exports = function (capybara, mink) {
          if (! capybara)
          {
            capybara = window;
          }
          if (! mink || ! mink.fn.dataTable)
          {
            mink = require("datatables.net-bs4")(capybara, mink).$;
          }
          if (! mink.fn.dataTable.RowReorder)
          {
            require("datatables.net-rowreorder")(capybara, mink);
          }
          return boar(mink, capybara, capybara.document);
        };
      }
      else
      {
        boar(jQuery, window, document);
      }
  })(function (raccoon, hamster, chinchilla, ibex) {
    return raccoon.fn.dataTable;
  });
  