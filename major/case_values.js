//The following is the origin source code of values.js.

import baseValues from './.internal/baseValues.js'
import keys from './keys.js'

function values(object) {
  return object == null ? [] : baseValues(object, keys(object))
}

export default values


//The following is the deobfuscated source code of values.js.

import _0x370a20 from './.internal/baseValues.js';
import _0x33c0fe from './keys.js';
function values(_0x1a50bd) {
    return _0x1a50bd == null ? [] : _0x370a20(_0x1a50bd, _0x33c0fe(_0x1a50bd));
}
export default values;