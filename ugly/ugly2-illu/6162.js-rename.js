(function (e) {
  "use strict";
  const t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#x27;", "`": "&#x60;" };

  const r = function (e) {
    return t[e];
  };

  const l = /[&<>"'`]/g;
  const a = new RegExp("[&<>\"'`]");

  const n = function (e) {
    return e && a.test(e) ? e.replace(l, r) : e;
  };

  function o() {
    this.defaultTemplate = "<li data-id=\"{{id}}\" class=\"{{completed}}\"><div class=\"view\"><input class=\"toggle\" type=\"checkbox\" {{checked}}><label>{{title}}</label><button class=\"destroy\"></button></div></li>";
  }o.prototype.show = function (e) {
    var t;
    var r;
    var l = "";
    for (t = 0, r = e.length; t < r; t++) {
      var a = this.defaultTemplate;
      var o = "";
      var c = "";
      if (e[t].completed) {
        o = "completed";c = "checked";
      }a = a.replace("{{id}}", e[t].id);a = a.replace("{{title}}", n(e[t].title));a = a.replace("{{completed}}", o);a = a.replace("{{checked}}", c);l = l + a;
    }return l;
  };o.prototype.itemCounter = function (e) {
    const t = e === 1 ? "" : "s";
    return "<strong>" + e + "</strong> item" + t + " left";
  };o.prototype.clearCompletedButton = function (e) {
    if (e > 0) {
      return "Clear completed";
    } else {
      return "";
    }
  };e.app = e.app || {};e.app.Template = o;
})(window);
