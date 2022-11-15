'use strict';
import{
  addNumber as addNumber
}from "./wasm.wat";
var result = addNumber(22);
export{
  result as result
};
function setToSystem() {
  return 20;
}
export{
  setToSystem as getNumber
};

