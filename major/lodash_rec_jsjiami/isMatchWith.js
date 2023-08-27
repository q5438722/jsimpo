import _0x4334d4 from'./.internal/baseIsMatch.js';
import _0x111c3d from'./.internal/getMatchData.js';
;
function isMatchWith(object, source, customizer) {
    customizer = typeof customizer === 'function' ? customizer : undefined;
    return _0x4334d4(object, source, _0x111c3d(source), customizer);
}
export default isMatchWith;