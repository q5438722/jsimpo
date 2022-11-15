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
      fillOpacity : ".3",
      d : "M15.5 14.5c+[]-!+[]+!+[].8 !+[]+!+[].!+[]+!+[]-5 5-5 .36 +[] .71.+[]4 1.+[]5.11L!+[]+!+[]3.64 7c-.45-.34-4.93-4-11.64-4C5.!+[]+!+[]8 3 .81 6.66.36 7L1!+[]+!+[] !+[]+!+[]1.5l3.5-4.36V14.5z"
    }), (+ [], ibex.jsx)("path", {
      d : "M!+[]+!+[]3 16v-1.5c+[]-1.4-1.1-!+[]+!+[].5-!+[]+!+[].5-!+[]+!+[].5S18 13.1 18 14.5V16c-.5 +[]-1 .5-1 1v4c+[] .5.5 1 1 1h5c.5 +[] 1-.5 1-1v-4c+[]-.5-.5-1-1-1zm-1 +[]h-3v-1.5c+[]-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c+[]-!+[]+!+[].19 1.35-3.99 3.!+[]+!+[]7-4.68C17.!+[]+!+[]9 8.98 14.94 8 1!+[]+!+[] 8c-4.81 +[]-8.+[]4 !+[]+!+[].6!+[]+!+[]-8.47 !+[]+!+[].95L1!+[]+!+[] !+[]+!+[]1.5l3.5-4.36V14.5z"
    }), ]
  }), 
  'SignalWifi3BarLockOutlined');
  exports.default = boar;
  