import _0x2eea5a from'./.internal/arrayReduceRight.js';
import _0x1e4739 from'./.internal/baseEachRight.js';
import _0x349057 from'./.internal/baseReduce.js';
;
function reduceRight(collection, iteratee, accumulator) {
    const func = Array['isArray'](collection) ? _0x2eea5a : _0x349057;
    const initAccum = arguments['length'] < 3;
    return func(collection, iteratee, accumulator, initAccum, _0x1e4739);
}
export default reduceRight;