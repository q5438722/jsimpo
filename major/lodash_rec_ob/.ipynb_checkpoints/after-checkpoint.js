/**
 * The opposite of `before`. This method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
;
function after(_0x14c587, _0x3bcf6d) {
    if (typeof _0x3bcf6d !== 'function') {
        throw new TypeError('Expected a function');
    }
    _0x14c587 = _0x14c587 || 0;
    return function (..._0x314eea) {
        if (--_0x14c587 < 1) {
            return _0x3bcf6d['apply'](this, _0x314eea);
        }
    };
}
export default after

