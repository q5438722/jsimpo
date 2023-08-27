import _0x1d3018 from'./.internal/castPath.js';
import _0x4557fa from'./last.js';
import _0x3959a1 from'./.internal/parent.js';
import _0x91d019 from'./.internal/toKey.js';
;
function invoke(object, path, args) {
    path = _0x1d3018(path, object);
    object = _0x3959a1(object, path);
    const func = object == null ? object : object[_0x91d019(_0x4557fa(path))];
    return func == null ? undefined : func['apply'](object, args);
}
export default invoke;