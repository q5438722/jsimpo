'use strict';
var _0x41dd = ["345073KFwqQf", "1Hbhynl", "388584sgFdgc", "108965lMSIoq", "878483DlhDgI", "jquery", "backbone", "collections/todos", "views/todos", "common", ".new-todo", ".todo-list", "change:completed", ".filters li a", "visible", "destroy", ".todoapp", "createOnEnter", "clearCompleted", "View", "extend", "template", "pADgB", "rpiRE", "allCheckbox", ".toggle-all", "CeCiT", "YuToh", "TODKt", "$todoList", "wChtr", "listenTo", "addOne", "reset", "addAll", "zMjTJ", "filterOne", "filterAll", "debounce", 
"render", "fetch", "completed", "length", "remaining", "show", "$footer", "html", "HlPTi", "removeClass", "KkSvL", "filter", "utoie", '[href="#/', "TodoFilter", "addClass", "hide", "each", "trigger", "ZKMJK", "$input", "trim", "nextOrder", "EYsuj", "which", "ENTER_KEY", "val", "create", "newAttributes", "invoke", "SuGGE", "139501TFTTQM", "1qYKoXu", "254756rJoXSz", "11BuLrCC", "32499fhiCYK"];
function _0x3ebb(totalExpectedResults, entrySelector) {
  return _0x3ebb = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (12 * 365 + 1 * -8922 + 4717);
    var _0x34bd1b = _0x41dd[hashOrKey];
    return _0x34bd1b;
  }, _0x3ebb(totalExpectedResults, entrySelector);
}
var _0x5d35f2 = _0x3ebb;
(function(data, val) {
  var toMonths = _0x3ebb;
  for (; !![];) {
    try {
      var nodeval = -parseInt(toMonths(175)) * -parseInt(toMonths(176)) + -parseInt(toMonths(177)) + parseInt(toMonths(178)) * parseInt(toMonths(179)) + -parseInt(toMonths(180)) * -parseInt(toMonths(181)) + parseInt(toMonths(182)) + parseInt(toMonths(183)) + -parseInt(toMonths(184));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x1ea64b) {
      data["push"](data["shift"]());
    }
  }
})(_0x41dd, -42 * -5846 + 1259 * 182 + -1 * 268297), define([_0x5d35f2(185), "underscore", _0x5d35f2(186), _0x5d35f2(187), _0x5d35f2(188), "text!templates/stats.html", _0x5d35f2(189)], function(isSlidingUp, f_arr, mmCoreSecondsYear, mem, ShareAdminRepoView, value, item) {
  var Dom7 = _0x5d35f2;
  var global = {
    "CeCiT" : Dom7(190),
    "YuToh" : ".footer",
    "TODKt" : ".main",
    "wChtr" : Dom7(191),
    "Fptsg" : "add",
    "zMjTJ" : Dom7(192),
    "PuQHH" : "all",
    "HlPTi" : Dom7(193),
    "KkSvL" : "selected",
    "utoie" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "ZKMJK" : Dom7(194),
    "EYsuj" : function(value, joiner) {
      return value !== joiner;
    },
    "SuGGE" : Dom7(195),
    "vCfZA" : Dom7(196),
    "pADgB" : Dom7(197),
    "rpiRE" : Dom7(198),
    "THAWd" : "toggleAllComplete"
  };
  var _0x5814a2 = mmCoreSecondsYear[Dom7(199)][Dom7(200)]({
    "el" : global["vCfZA"],
    "template" : f_arr[Dom7(201)](value),
    "events" : {
      "keypress .new-todo" : global[Dom7(202)],
      "click .clear-completed" : global[Dom7(203)],
      "click .toggle-all" : global["THAWd"]
    },
    "initialize" : function() {
      var $ = Dom7;
      this[$(204)] = this["$"]($(205))[-1 * 9473 + 2 * 2155 + 1 * 5163];
      this["$input"] = this["$"](global[$(206)]);
      this["$footer"] = this["$"](global[$(207)]);
      this["$main"] = this["$"](global[$(208)]);
      this[$(209)] = this["$"](global[$(210)]);
      this[$(211)](mem, global["Fptsg"], this[$(212)]);
      this[$(211)](mem, $(213), this[$(214)]);
      this[$(211)](mem, global[$(215)], this[$(216)]);
      this[$(211)](mem, "filter", this[$(217)]);
      this[$(211)](mem, global["PuQHH"], f_arr[$(218)](this[$(219)], 5303 * -1 + 623 * 4 + 1 * 2811));
      mem[$(220)]({
        "reset" : !![]
      });
    },
    "render" : function() {
      var $ = Dom7;
      var checked = mem[$(221)]()[$(222)];
      var length = mem[$(223)]()["length"];
      if (mem[$(222)]) {
        this["$main"][$(224)]();
        this[$(225)][$(224)]();
        this[$(225)][$(226)](this[$(201)]({
          "completed" : checked,
          "remaining" : length
        }));
        this["$"](global[$(227)])[$(228)](global[$(229)])[$(230)](global[$(231)](global[$(231)]($(232), item[$(233)] || ""), '"]'))[$(234)](global["KkSvL"]);
      } else {
        this["$main"][$(235)]();
        this[$(225)]["hide"]();
      }
      this[$(204)]["checked"] = !length;
    },
    "addOne" : function(dirent) {
      var $ = Dom7;
      var mem = new ShareAdminRepoView({
        "model" : dirent
      });
      this[$(209)]["append"](mem[$(219)]()["el"]);
    },
    "addAll" : function() {
      var $ = Dom7;
      this[$(209)]["empty"]();
      mem[$(236)](this[$(212)], this);
    },
    "filterOne" : function(myPreferences) {
      var getPreferenceKey = Dom7;
      myPreferences[getPreferenceKey(237)](global[getPreferenceKey(238)]);
    },
    "filterAll" : function() {
      var $ = Dom7;
      mem[$(236)](this[$(216)], this);
    },
    "newAttributes" : function() {
      var $ = Dom7;
      return {
        "title" : this[$(239)]["val"]()[$(240)](),
        "order" : mem[$(241)](),
        "completed" : ![]
      };
    },
    "createOnEnter" : function(event) {
      var $ = Dom7;
      if (global[$(242)](event[$(243)], item[$(244)]) || !this[$(239)][$(245)]()[$(240)]()) {
        return;
      }
      mem[$(246)](this[$(247)]());
      this["$input"][$(245)]("");
    },
    "clearCompleted" : function() {
      var $ = Dom7;
      return f_arr[$(248)](mem[$(221)](), global[$(249)]), ![];
    },
    "toggleAllComplete" : function() {
      var $$ = Dom7;
      var checked = this[$$(204)]["checked"];
      mem["each"](function(options) {
        options["save"]({
          "completed" : checked
        });
      });
    }
  });
  return _0x5814a2;
});

