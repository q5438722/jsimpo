'use strict';
import{
  parseLifecycle as parseLifecycle
}from "./lifecycle-parser";
function reportException(e, exceptionLevel) {
  if (!e) {
    return;
  }
  parseLifecycle(e, exceptionLevel);
}
export{
  reportException as parseLifetimes
};

