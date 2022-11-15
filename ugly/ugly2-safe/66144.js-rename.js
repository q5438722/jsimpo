  var raccoon; // colors
  
  raccoon = require("./colors");
  module["exports"] = function () {
    function chives(ibex) {
      var boar; // e
      
          boar = ["__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "charAt", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf", "charCodeAt", "indexOf", "lastIndexOf", "length", "localeCompare", "match", "repeat", "replace", "search", "slice", "split", "substring", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight", ];
      Object.keys(ibex).forEach(function (llama) {
        var capybara; // o
        
              if (boar.indexOf(llama) !== -1)
        {
          console.log("warn: ".red + ("String.prototype" + llama).magenta + " is probably something you don't want to override.  " + "Ignoring style name");
        }
        else
        {
          if (typeof ibex[llama] === "string")
          {
            raccoon[llama] = raccoon[ibex[llama]];
            hamster(llama, function () {
              return raccoon[llama](this);
            });
          }
          else
          {
            capybara = function (mink) {
              var prairie_dog; // o
              var mantis; // r
              
                          prairie_dog = mink || this;
              {
                mantis = 0;
                for (; mantis < ibex[llama].length; mantis++)
                {
                  prairie_dog = raccoon[ibex[llama][mantis]](prairie_dog);
                }
              }
              return prairie_dog;
            };
            hamster(llama, capybara);
            raccoon[llama] = function (dogfish) {
              return chives(dogfish);
            };
          }
        }
      });
    }
      var hamster; // r
    var chinchilla; // e
    
      hamster = function (snail, dunlin) {
      String.prototype.__defineGetter__(snail, dunlin);
    };
    hamster("strip", function () {
      return raccoon.strip(this);
    });
    hamster("stripColors", function () {
      return raccoon.strip(this);
    });
    hamster("trap", function () {
      return raccoon.trap(this);
    });
    hamster("zalgo", function () {
      return raccoon.zalgo(this);
    });
    hamster("zebra", function () {
      return raccoon.zebra(this);
    });
    hamster("rainbow", function () {
      return raccoon.rainbow(this);
    });
    hamster("random", function () {
      return raccoon.random(this);
    });
    hamster("america", function () {
      return raccoon.america(this);
    });
    chinchilla = Object.keys(raccoon.styles);
    chinchilla.forEach(function (termite) {
      hamster(termite, function () {
        return raccoon.stylize(this, termite);
      });
    });
    raccoon.setTheme = function (squid) {
      if (typeof squid === "string")
      {
        console.log('colors.setTheme now only accepts an object, not a string. If you are trying to set a theme from a file, it is now your (the caller\'s) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + \'/../themes/generic-logging.js\'); The new syntax looks like colors.setTheme(require(__dirname + \'/../themes/generic-logging.js\'));');
        return;
      }
      else
      {
        chives(squid);
      }
    };
  };
  