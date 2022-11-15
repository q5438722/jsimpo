'use strict';
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "datatables.net-bs4", "datatables.net-rowreorder"], function(jqlite) {
      return factory(jqlite, window, document);
    });
  } else {
    if (typeof exports === "object") {
      module.exports = function(root, $) {
        if (!root) {
          root = window;
        }
        if (!$ || !$.fn.dataTable) {
          $ = require("datatables.net-bs4")(root, $).$;
        }
        if (!$.fn.dataTable.RowReorder) {
          require("datatables.net-rowreorder")(root, $);
        }
        return factory($, root, root.document);
      };
    } else {
      factory(jQuery, window, document);
    }
  }
})(function($, t, selector, canCreateDiscussions) {
  return $.fn.dataTable;
});

