!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) const e = jQuery.fn.select2.amd;e.define("select2/i18n/af", [], function () {
    return { errorLoading: function () {
        return "Die resultate kon nie gelaai word nie.";
      }, inputTooLong: function (e) {
        const n = e.input.length - e.maximum;
        var r = "Verwyders asseblief " + n + " character";
        return 1 != n && (r += "s"), r;
      }, inputTooShort: function (e) {
        return "Voer asseblief " + (e.minimum - e.input.length) + " of meer karakters";
      }, loadingMore: function () {
        return "Meer resultate word gelaai\u2026";
      }, maximumSelected: function (e) {
        var n = "Kies asseblief net " + e.maximum + " item";
        return 1 != e.maximum && (n += "s"), n;
      }, noResults: function () {
        return "Geen resultate gevind";
      }, searching: function () {
        return "Besig\u2026";
      }, removeAllItems: function () {
        return "Verwyder alle items";
      } };
  }), e.define, e.require;
}();
