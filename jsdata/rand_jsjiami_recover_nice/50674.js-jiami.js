'use strict';
(function(factory) {
  if (typeof define === "function" && define["amd"]) {
    if ("kscfI" !== _0x11beab["hPVuH"]) {
      require("datatables.net-rowreorder")(root, $);
    } else {
      define([_0x11beab["IAOtR"], _0x11beab["jPmNr"], _0x11beab["AWPHT"]], function(jqlite) {
        return factory(jqlite, window, document);
      });
    }
  } else {
    if (typeof exports === _0x11beab["WlyMR"]) {
      module["exports"] = function(root, signal) {
        if (_0x11beab["nbBKG"] === _0x11beab["nbBKG"]) {
          if (!root) {
            if ("mMHcq" === "mMHcq") {
              root = window;
            } else {
              return factory(signal, window, document);
            }
          }
          if (!signal || !signal["fn"]["dataTable"]) {
            signal = require(_0x11beab["jPmNr"])(root, signal)["$"];
          }
          if (!signal["fn"]["dataTable"]["RowReorder"]) {
            require(_0x11beab["AWPHT"])(root, signal);
          }
          return factory(signal, root, root["document"]);
        } else {
          define([_0x11beab["IAOtR"], "datatables.net-bs4", _0x11beab["AWPHT"]], function(jqlite) {
            return factory(jqlite, window, document);
          });
        }
      };
    } else {
      if (_0x11beab["RtFFU"] !== _0x11beab["RtFFU"]) {
        $ = require(_0x11beab["jPmNr"])(root, $)["$"];
      } else {
        factory(jQuery, window, document);
      }
    }
  }
})(function($, metaWindow, selector, canCreateDiscussions) {
  return $["fn"]["dataTable"];
});

