!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) const n = jQuery.fn.select2.amd;n.define("select2/i18n/ru", [], function () {
    function u(n, e, r, u) {
      return n % 10 < 5 && n % 10 > 0 && n % 100 < 5 || n % 100 > 20 ? n % 10 > 1 ? r : e : u;
    }return { errorLoading: function () {
        return "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B";
      }, inputTooLong: function (n) {
        const e = n.input.length - n.maximum;
        var r = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 " + e + " \u0441\u0438\u043C\u0432\u043E\u043B";
        return r += u(e, "", "a", "\u043E\u0432"), r += " \u043C\u0435\u043D\u044C\u0448\u0435";
      }, inputTooShort: function (n) {
        const e = n.minimum - n.input.length;
        var r = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0449\u0451 \u0445\u043E\u0442\u044F \u0431\u044B " + e + " \u0441\u0438\u043C\u0432\u043E\u043B";
        return r += u(e, "", "a", "\u043E\u0432");
      }, loadingMore: function () {
        return "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445\u2026";
      }, maximumSelected: function (n) {
        var e = "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 " + n.maximum + " \u044D\u043B\u0435\u043C\u0435\u043D\u0442";
        return e += u(n.maximum, "", "a", "\u043E\u0432");
      }, noResults: function () {
        return "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E";
      }, searching: function () {
        return "\u041F\u043E\u0438\u0441\u043A\u2026";
      }, removeAllItems: function () {
        return "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B";
      } };
  }), n.define, n.require;
}();
