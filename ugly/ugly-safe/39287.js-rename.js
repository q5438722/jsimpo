"use strict";
  function chives(llama) {
    if (typeof WeakMap !== "function")
      return null;
    return (llama);
  }
  function bean_sprout(capybara, mink) {
    var prairie_dog; // t
    var mantis; // i
    var dogfish; // a
    var snail; // u
    var dunlin; // c
    
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
    value : true
  });
  exports.default = void 0;
  hamster = bean_sprout(require("react"));
  chinchilla = raccoon(require("./utils/createSvgIcon"));
  ibex = require("react/jsx-runtime");
  boar = (0, chinchilla.default)((0, ibex.jsxs)(hamster.Fragment, {
    children : [(0, ibex.jsx)("path", {
      fillOpacity : ".3",
      d : "M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z"
    }), (0, ibex.jsx)("path", {
      d : "M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95L12 21.5l3.5-4.36V14.5z"
    }), ]
  }), 
  "SignalWifi3BarLockOutlined");
  exports.default = boar;
  