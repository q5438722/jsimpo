!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) const e = jQuery.fn.select2.amd;e.define("select2/i18n/ca", [], function () {
    return { errorLoading: function () {
        return "La c\xE0rrega ha fallat";
      }, inputTooLong: function (e) {
        const n = e.input.length - e.maximum;
        var r = "Si us plau, elimina " + n + " car";
        return r += 1 == n ? "\xE0cter" : "\xE0cters";
      }, inputTooShort: function (e) {
        const n = e.minimum - e.input.length;
        var r = "Si us plau, introdueix " + n + " car";
        return r += 1 == n ? "\xE0cter" : "\xE0cters";
      }, loadingMore: function () {
        return "Carregant m\xE9s resultats\u2026";
      }, maximumSelected: function (e) {
        var n = "Nom\xE9s es pot seleccionar " + e.maximum + " element";
        return 1 != e.maximum && (n += "s"), n;
      }, noResults: function () {
        return "No s'han trobat resultats";
      }, searching: function () {
        return "Cercant\u2026";
      }, removeAllItems: function () {
        return "Treu tots els elements";
      } };
  }), e.define, e.require;
}();
