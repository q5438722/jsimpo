function strictFunctionArrowEval(_0x24619f) {
    'use strict';
    return (() => eval(_0x24619f))();
}
;
assertEquals(strictFunctionArrowEval('42'), -5247 + -5251 + 17 * 620);