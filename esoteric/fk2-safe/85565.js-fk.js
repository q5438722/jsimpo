  var raccoon; // Class
  var hamster; // Events
  var chinchilla; // GetFastValue
  var ibex; // ProcessKeyCombo
  var boar; // ResetKeyCombo
  var llama; // KeyCombo
  
  raccoon = require('../../../utils/Class');
  hamster = require('../events');
  chinchilla = require('../../../utils/object/GetFastValue');
  ibex = require('./ProcessKeyCombo');
  boar = require('./ResetKeyCombo');
  llama = new raccoon({
    initialize : function KeyCombo(capybara, mink, prairie_dog) {
      var mantis; // i
      var dogfish; // char
      var snail; // onKeyDownHandler
      
          if (prairie_dog === undefined)
      {
        prairie_dog = {
          
        };
      }
      if (mink.length < ! + [] + ! + [])
      {
        return ! [];
      }
      this.manager = capybara;
      this.enabled = ! ! [];
      this.keyCodes = [];
      {
        mantis = + [];
        for (; mantis < mink.length; mantis++)
        {
          dogfish = mink[mantis];
          if (typeof dogfish === 'string')
          {
            this.keyCodes.push(dogfish.toUpperCase().charCodeAt(+ []));
          }
          else
            if (typeof dogfish === 'number')
            {
              this.keyCodes.push(dogfish);
            }
            else
              if (dogfish.hasOwnProperty('keyCode'))
              {
                this.keyCodes.push(dogfish.keyCode);
              }
        }
      }
      this.current = this.keyCodes[+ []];
      this.index = + [];
      this.size = this.keyCodes.length;
      this.timeLastMatched = + [];
      this.matched = ! [];
      this.timeMatched = + [];
      this.resetOnWrongKey = chinchilla(prairie_dog, 'resetOnWrongKey', ! ! []);
      this.maxKeyDelay = chinchilla(prairie_dog, 'maxKeyDelay', + []);
      this.resetOnMatch = chinchilla(prairie_dog, 'resetOnMatch', ! []);
      this.deleteOnMatch = chinchilla(prairie_dog, 'deleteOnMatch', ! []);
      snail = function (dunlin) {
        var termite; // matched
        
              if (this.matched || ! this.enabled)
        {
          return;
        }
        termite = ibex(dunlin, this);
        if (termite)
        {
          this.manager.emit(hamster.COMBO_MATCH, this, dunlin);
          if (this.resetOnMatch)
          {
            boar(this);
          }
          else
            if (this.deleteOnMatch)
            {
              this.destroy();
            }
        }
      };
      this.onKeyDown = snail;
      this.manager.on(hamster.ANY_KEY_DOWN, this.onKeyDown);
    },
    progress : {
      get : function () {
        return this.index / this.size;
      }
    },
    destroy : function () {
      this.enabled = ! [];
      this.keyCodes = [];
      this.manager.off(hamster.ANY_KEY_DOWN, this.onKeyDown);
      this.manager = null;
    }
  });
  module.exports = llama;
  