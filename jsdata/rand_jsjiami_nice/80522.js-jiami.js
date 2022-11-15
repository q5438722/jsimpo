'use strict';
import{
  parseLifecycle as parseLifecycle
}from "./lifecycle-parser";
function handleBufferUpdate(message, buffer) {
  var DeserializationMethods = {
    "xzYhP" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  if (!message) {
    return;
  }
  DeserializationMethods["xzYhP"](parseLifecycle, message, buffer);
}
export{
  handleBufferUpdate as parseLifetimes
};

