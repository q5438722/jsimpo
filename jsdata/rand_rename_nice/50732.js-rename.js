'use strict';
!function() {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var amd = jQuery.fn.select2.amd;
  }
  amd.define("select2/i18n/af", [], function() {
    return {
      errorLoading : function() {
        return "Die resultate kon nie gelaai word nie.";
      },
      inputTooLong : function(args) {
        var Trident = args.input.length - args.maximum;
        var data = "Verwyders asseblief " + Trident + " character";
        return 1 != Trident && (data = data + "s"), data;
      },
      inputTooShort : function(args) {
        return "Voer asseblief " + (args.minimum - args.input.length) + " of meer karakters";
      },
      loadingMore : function() {
        return "Meer resultate word gelaai\u2026";
      },
      maximumSelected : function(args) {
        var stxt3 = "Kies asseblief net " + args.maximum + " item";
        return 1 != args.maximum && (stxt3 = stxt3 + "s"), stxt3;
      },
      noResults : function() {
        return "Geen resultate gevind";
      },
      searching : function() {
        return "Besig\u2026";
      },
      removeAllItems : function() {
        return "Verwyder alle items";
      }
    };
  });
  amd.define;
  amd.require;
}();

