  + function (raccoon) {
  "use strict";
    function chives(ibex) {
      return this.each(function () {
        var boar; // t
        var llama; // e
        var capybara; // i
        
              boar = raccoon(this);
        llama = boar.data("bs.button");
        capybara = typeof ibex == "object" && ibex;
        if (! llama)
          boar.data("bs.button", llama = new hamster(this, capybara));
        if (ibex == "toggle")
          llama.toggle();
        else
          if (ibex)
            llama.setState(ibex);
      });
    }
      var hamster; // a
    var chinchilla; // t
    
      hamster = function (mink, prairie_dog) {
      this.$element = raccoon(mink);
      this.options = raccoon.extend({
        
      }, hamster.DEFAULTS, prairie_dog);
      this.isLoading = false;
    };
    hamster.VERSION = "3.2.0";
    hamster.DEFAULTS = {
      loadingText : "loading..."
    };
    hamster.prototype.setState = function (mantis) {
      var dogfish; // i
      var snail; // n
      var dunlin; // a
      
          dogfish = this.$element;
      snail = dogfish.is("input") ? "val" : "html";
      dunlin = dogfish.data();
      mantis = mantis + "Text";
      if (dunlin.resetText == null)
        dogfish.data("resetText", dogfish[snail]());
      dogfish[snail](dunlin[mantis] == null ? this.options[mantis] : dunlin[mantis]);
      setTimeout(raccoon.proxy(function () {
        if (mantis == "loadingText")
        {
          this.isLoading = true;
          dogfish.addClass("disabled").attr("disabled", "disabled");
        }
        else
          if (this.isLoading)
          {
            this.isLoading = false;
            dogfish.removeClass("disabled").removeAttr("disabled");
          }
      }, 
      this), 
      0);
    };
    hamster.prototype.toggle = function () {
      var termite; // t
      var squid; // e
      var rook; // i
      
          termite = true;
      squid = this.$element.closest('[data-toggle="buttons"]');
      if (squid.length)
      {
        rook = this.$element.find("input");
        if (rook.prop("type") == "radio")
        {
          if (rook.prop("checked") && this.$element.hasClass("active"))
            termite = false;
          else
            squid.find(".active").removeClass("active");
        }
        if (termite)
          rook.prop("checked", ! this.$element.hasClass("active")).trigger("change");
      }
      if (termite)
        this.$element.toggleClass("active");
    };
    chinchilla = raccoon.fn.button;
    raccoon.fn.button = i;
    raccoon.fn.button.Constructor = hamster;
    raccoon.fn.button.noConflict = function () {
      raccoon.fn.button = chinchilla;
      return this;
    };
    raccoon(document).on("click.bs.button.data-api", '[data-toggle^="button"]', 
    function (woodcock) {
      var antelope; // e
      
          antelope = raccoon(woodcock.target);
      if (! antelope.hasClass("btn"))
        antelope = antelope.closest(".btn");
      i.call(antelope, "toggle");
      woodcock.preventDefault();
    });
  }(jQuery);
  