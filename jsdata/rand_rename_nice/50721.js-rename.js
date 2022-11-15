'use strict';
!function() {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var amd = jQuery.fn.select2.amd;
  }
  amd.define("select2/i18n/ru", [], function() {
    function ending(count, one, couple, more) {
      return count % 10 < 5 && count % 10 > 0 && count % 100 < 5 || count % 100 > 20 ? count % 10 > 1 ? couple : one : more;
    }
    return {
      errorLoading : function() {
        return "\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b";
      },
      inputTooLong : function(args) {
        var remainingChars = args.input.length - args.maximum;
        var message = "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430 " + remainingChars + " \u0441\u0438\u043c\u0432\u043e\u043b";
        return message = message + ending(remainingChars, "", "a", "\u043e\u0432"), message = message + " \u043c\u0435\u043d\u044c\u0448\u0435";
      },
      inputTooShort : function(args) {
        var remainingChars = args.minimum - args.input.length;
        var message = "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0449\u0451 \u0445\u043e\u0442\u044f \u0431\u044b " + remainingChars + " \u0441\u0438\u043c\u0432\u043e\u043b";
        return message = message + ending(remainingChars, "", "a", "\u043e\u0432");
      },
      loadingMore : function() {
        return "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445\u2026";
      },
      maximumSelected : function(args) {
        var message = "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 " + args.maximum + " \u044d\u043b\u0435\u043c\u0435\u043d\u0442";
        return message = message + ending(args.maximum, "", "a", "\u043e\u0432");
      },
      noResults : function() {
        return "\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e";
      },
      searching : function() {
        return "\u041f\u043e\u0438\u0441\u043a\u2026";
      },
      removeAllItems : function() {
        return "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b";
      }
    };
  });
  amd.define;
  amd.require;
}();

