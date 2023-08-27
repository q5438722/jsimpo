import _0x17cf68 from'./.internal/arrayReduce.js';
import _0x56ca07 from'./.internal/baseEach.js';
import _0x408c7f from'./.internal/baseReduce.js';
;
function reduce(collection, iteratee, accumulator) {
    const func = Array['isArray'](collection) ? _0x17cf68 : _0x408c7f;
    const initAccum = arguments['length'] < 3;
    return func(collection, iteratee, accumulator, initAccum, _0x56ca07);
}
export default reduce;