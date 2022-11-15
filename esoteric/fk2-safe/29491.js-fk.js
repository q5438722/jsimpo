"use strict";
  function chives(llama) {
    if (typeof WeakMap !== "function")
      return null;
    return (llama);
  }
  function bean_sprout(capybara, mink) {
    var prairie_dog; // cache
    var mantis; // newObj
    var dogfish; // hasPropertyDescriptor
    var snail; // key
    var dunlin; // desc
    
      if (! mink && capybara && capybara.__esModule)
    {
      return capybara;
    }
    if (capybara === null || typeof capybara !== "object" && typeof capybara !== "function")
    {
      return {
        default : capybara
      };
    }
    prairie_dog = chives(mink);
    if (prairie_dog && prairie_dog.has(capybara))
    {
      return prairie_dog.get(capybara);
    }
    mantis = {
      
    };
    dogfish = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (snail in capybara)
    {
      if (snail !== "default" && Object.prototype.hasOwnProperty.call(capybara, snail))
      {
        dunlin = dogfish ? Object.getOwnPropertyDescriptor(capybara, snail) : null;
        if (dunlin && (dunlin.get || dunlin.set))
        {
          Object.defineProperty(mantis, snail, dunlin);
        }
        else
        {
          mantis[snail] = capybara[snail];
        }
      }
    }
    mantis.default = capybara;
    if (prairie_dog)
    {
      prairie_dog.set(capybara, mantis);
    }
    return mantis;
  }
  var raccoon; // _interopRequireDefault
  var hamster; // React
  var chinchilla; // _createSvgIcon
  var ibex; // _jsxRuntime
  var boar; // _default
  
  raccoon = require("@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value : ! ! []
  });
  exports.default = void + [];
  hamster = bean_sprout(require("react"));
  chinchilla = raccoon(require("./utils/createSvgIcon"));
  ibex = require("react/jsx-runtime");
  boar = (+ [], chinchilla.default)((+ [], ibex.jsxs)(hamster.Fragment, {
    children : [(+ [], ibex.jsx)("path", {
      d : "M11 !+[]+!+[]+[]v-3H7v3.67C7 !+[]+!+[]1.4 7.6 !+[]+!+[]!+[]+!+[] 8.33 !+[]+!+[]!+[]+!+[]h7.33c.74 +[] 1.34-.6 1.34-1.33V17h-4.4L11 !+[]+!+[]+[]z"
    }), (+ [], ibex.jsx)("path", {
      fillOpacity : ".3",
      d : "M15.67 4H14V!+[]+!+[]h-4v!+[]+!+[]H8.33C7.6 4 7 4.6 7 5.33V17h4v-!+[]+!+[].5H9L13 7v5.5h!+[]+!+[]L1!+[]+!+[].6 17H17V5.33C17 4.6 16.4 4 15.67 4z"
    }), ]
  }), 
  'BatteryCharging!+[]+!+[]+[]TwoTone');
  exports.default = boar;
  