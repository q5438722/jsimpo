  ! function () {
    var raccoon; // e
    
      if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
      raccoon = jQuery.fn.select2.amd;
    raccoon.define("select2/i18n/af", [], function () {
      return {
        errorLoading : function () {
          return "Die resultate kon nie gelaai word nie.";
        },
        inputTooLong : function (hamster) {
          var chinchilla; // n
          var ibex; // r
          
                  {
            chinchilla = hamster.input.length - hamster.maximum;
            ibex = "Verwyders asseblief " + chinchilla + " character";
          }
          return 1 != chinchilla && (ibex = ibex + "s"), ibex;
        },
        inputTooShort : function (boar) {
          return "Voer asseblief " + (boar.minimum - boar.input.length) + " of meer karakters";
        },
        loadingMore : function () {
          return "Meer resultate word gelaai…";
        },
        maximumSelected : function (llama) {
          var capybara; // n
          
                  capybara = "Kies asseblief net " + llama.maximum + " item";
          return 1 != llama.maximum && (capybara = capybara + "s"), capybara;
        },
        noResults : function () {
          return "Geen resultate gevind";
        },
        searching : function () {
          return "Besig…";
        },
        removeAllItems : function () {
          return "Verwyder alle items";
        }
      };
    }), 
    raccoon.define, 
    raccoon.require;
  }();
  