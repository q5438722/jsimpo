function strictFunctionArrowEval(s) {
  "use strict";
  return eval(s);
}assertEquals(strictFunctionArrowEval("42"), 42);
