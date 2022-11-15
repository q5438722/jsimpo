  var raccoon; // Class
  var hamster; // Events
  var chinchilla; // GetFastValue
  var ibex; // ProcessKeyCombo
  var boar; // ResetKeyCombo
  var llama; // KeyCombo
  
  raccoon = require("../../../utils/Class");
  hamster = require("../events");
  chinchilla = require("../../../utils/object/GetFastValue");
  ibex = require("./ProcessKeyCombo");
  boar = require("./ResetKeyCombo");
  llama = new raccoon({
    initialize : function e(capybara, mink, prairie_dog) {
      var mantis; // i
      var dogfish; // r
      var snail; // o
      
          if (prairie_dog === undefined)
      {
        prairie_dog = {
          
        };
      }
      if (mink.length < 2)
      {
        return false;
      }
      this.manager = capybara;
      this.enabled = true;
      this.keyCodes = [];
      {
        mantis = 0;
        for (; mantis < mink.length; mantis++)
        {
          dogfish = mink[mantis];
          if (typeof dogfish === "string")
          {
            this.keyCodes.push(dogfish.toUpperCase().charCodeAt(0));
          }
          else
            if (typeof dogfish === "number")
            {
              this.keyCodes.push(dogfish);
            }
            else
              if (dogfish.hasOwnProperty("keyCode"))
              {
                this.keyCodes.push(dogfish.keyCode);
              }
        }
      }
      this.current = this.keyCodes[0];
      this.index = 0;
      this.size = this.keyCodes.length;
      this.timeLastMatched = 0;
      this.matched = false;
      this.timeMatched = 0;
      this.resetOnWrongKey = chinchilla(prairie_dog, "resetOnWrongKey", true);
      this.maxKeyDelay = chinchilla(prairie_dog, "maxKeyDelay", 0);
      this.resetOnMatch = chinchilla(prairie_dog, "resetOnMatch", false);
      this.deleteOnMatch = chinchilla(prairie_dog, "deleteOnMatch", false);
      snail = function (dunlin) {
        var termite; // t
        
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
      this.enabled = false;
      this.keyCodes = [];
      this.manager.off(hamster.ANY_KEY_DOWN, this.onKeyDown);
      this.manager = null;
    }
  });
  module.exports = llama;
  