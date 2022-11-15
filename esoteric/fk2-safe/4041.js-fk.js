  + function (raccoon) {
  "use strict";
    function chives(ibex) {
      return this.each(function () {
        var boar; // $this
        var llama; // data
        var capybara; // options
        
              boar = raccoon(this);
        llama = boar.data('bs.button');
        capybara = typeof ibex == 'object' && ibex;
        if (! llama)
          boar.data('bs.button', (llama = new hamster(this, capybara)));
        if (ibex == 'toggle')
          llama.toggle();
        else
          if (ibex)
            llama.setState(ibex);
      });
    }
      var hamster; // Button
    var chinchilla; // old
    
      hamster = function (mink, prairie_dog) {
      this.$element = raccoon(mink);
      this.options = raccoon.extend({
        
      }, hamster.DEFAULTS, prairie_dog);
      this.isLoading = ! [];
    };
    hamster.VERSION = '3.!+[]+!+[].+[]';
    hamster.DEFAULTS = {
      loadingText : 'loading...'
    };
    hamster.prototype.setState = function (mantis) {
      var dogfish; // $el
      var snail; // val
      var dunlin; // data
      
          dogfish = this.$element;
      snail = dogfish.is('input') ? 'val' : 'html';
      dunlin = dogfish.data();
      mantis = mantis + 'Text';
      if (dunlin.resetText == null)
        dogfish.data('resetText', dogfish[snail]());
      dogfish[snail](dunlin[mantis] == null ? this.options[mantis] : dunlin[mantis]);
      setTimeout(raccoon.proxy(function () {
        if (mantis == 'loadingText')
        {
          this.isLoading = ! ! [];
          dogfish.addClass('disabled').attr('disabled', 'disabled');
        }
        else
          if (this.isLoading)
          {
            this.isLoading = ! [];
            dogfish.removeClass('disabled').removeAttr('disabled');
          }
      }, 
      this), 
      + []);
    };
    hamster.prototype.toggle = function () {
      var termite; // changed
      var squid; // $parent
      var rook; // $input
      
          termite = ! ! [];
      squid = this.$element.closest('[data-toggle="buttons"]');
      if (squid.length)
      {
        rook = this.$element.find('input');
        if (rook.prop('type') == 'radio')
        {
          if (rook.prop('checked') && this.$element.hasClass('active'))
            termite = ! [];
          else
            squid.find('.active').removeClass('active');
        }
        if (termite)
          rook.prop('checked', ! this.$element.hasClass('active')).trigger('change');
      }
      if (termite)
        this.$element.toggleClass('active');
    };
    chinchilla = raccoon.fn.button;
    raccoon.fn.button = Plugin;
    raccoon.fn.button.Constructor = hamster;
    raccoon.fn.button.noConflict = function () {
      raccoon.fn.button = chinchilla;
      return this;
    };
    raccoon(document).on('click.bs.button.data-api', '[data-toggle^="button"]', 
    function (woodcock) {
      var antelope; // $btn
      
          antelope = raccoon(woodcock.target);
      if (! antelope.hasClass('btn'))
        antelope = antelope.closest('.btn');
      Plugin.call(antelope, 'toggle');
      woodcock.preventDefault();
    });
  }(jQuery);
  