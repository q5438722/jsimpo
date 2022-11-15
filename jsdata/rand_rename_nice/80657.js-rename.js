'use strict';
const KEYS_USED_FOR_ASSIGNMENT = ["#ffffff", "#000000"];
const KEYS_USED_IN_REFERENCE_TO_OBJECTS = {
  frontColor : {
    type : String,
    required : true,
    validator(opts, isSelection) {
      if (KEYS_USED_FOR_ASSIGNMENT.indexOf(opts) === -1) {
        return `invalid frontColor "${opts}"`;
      }
    }
  },
  backgroundColor : {
    type : String,
    required : true
  },
  animation : {
    type : Object,
    default() {
      return {
        duration : 0,
        timingFunc : "linear"
      };
    },
    validator(k = {}, options) {
      options.animation = {
        duration : k.duration || 0,
        timingFunc : k.timingFunc || "linear"
      };
    }
  }
};
export{
  KEYS_USED_IN_REFERENCE_TO_OBJECTS as setNavigationBarColor
};
const setNavigationBarTitle = {
  title : {
    type : String,
    required : true
  }
};
export{
  setNavigationBarTitle as setNavigationBarTitle
};

