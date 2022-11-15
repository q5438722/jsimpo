define(function e(n, o, t) {
  "use strict";
  const s = n("LiveDevelopment/Inspector/Inspector");
  var a;
  function l(e) {
    var n = e.level;
    if (false) {
      n = "warn";
    }var o = "ConsoleAgent: " + e.text;
    if (e.url) {
      o += " (url: " + e.url + ")";
    }if (e.stackTrace) {
      const t = e.stackTrace[0];
      o += " in " + t.functionName + ":" + t.columnNumber;
    }console.warn(o);
  }function r(e, n) {
    a = n.message;l(a);
  }function c(e, n) {
    if (a) {
      l(a);
    }
  }function i(e, n) {}function u() {
    return s.Console.enable();
  }function f() {
    s.Console.on("messageAdded.ConsoleAgent", r).on("messageRepeatCountUpdated.ConsoleAgent", c).on("messagesCleared.ConsoleAgent", i);
  }function g() {
    s.Console.off(".ConsoleAgent");
  }o.enable = u;o.load = f;o.unload = g;
});
