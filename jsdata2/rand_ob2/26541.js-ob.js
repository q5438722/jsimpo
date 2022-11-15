const _0x52e9 = [
    'sort',
    'forEach',
    '172481pccinT',
    '1446934eCxTIc',
    '247914chDFBo',
    '1qYEBqr',
    '1403761qVYrSc',
    '35857claAJR',
    '1pStMZi',
    '941644ommlZk',
    '125oCsJFz',
    '24919iwlAEY',
    'length',
    'keys'
];
(function (_0x32838c, _0x4efd48) {
    const _0x27ef4d = _0x5d7e;
    while (!![]) {
        try {
            const _0x4b425b = -parseInt(_0x27ef4d(0x9a)) + -parseInt(_0x27ef4d(0x9b)) + -parseInt(_0x27ef4d(0x9c)) + parseInt(_0x27ef4d(0x9d)) * -parseInt(_0x27ef4d(0x9e)) + parseInt(_0x27ef4d(0x9f)) * -parseInt(_0x27ef4d(0xa0)) + parseInt(_0x27ef4d(0xa1)) + -parseInt(_0x27ef4d(0xa2)) * -parseInt(_0x27ef4d(0xa3));
            if (_0x4b425b === _0x4efd48)
                break;
            else
                _0x32838c['push'](_0x32838c['shift']());
        } catch (_0x9472b9) {
            _0x32838c['push'](_0x32838c['shift']());
        }
    }
}(_0x52e9, 0xb7004));
import { unstable_capitalize as _0x2623c5 } from '@material-ui/utils';
function _0x5d7e(_0x2011fc, _0x548744) {
    return _0x5d7e = function (_0x52e93a, _0x5d7eb6) {
        _0x52e93a = _0x52e93a - 0x9a;
        let _0x500709 = _0x52e9[_0x52e93a];
        return _0x500709;
    }, _0x5d7e(_0x2011fc, _0x548744);
}
function isEmpty(_0xeed9ae) {
    const _0xa49d28 = _0x5d7e;
    return _0xeed9ae[_0xa49d28(0xa4)] === 0x0;
}
export default function propsToClassKey(_0x522f00) {
    const _0x495ec3 = _0x5d7e, {
            variant: _0x2e2023,
            ..._0x59234d
        } = _0x522f00;
    let _0x5db826 = _0x2e2023 || '';
    return Object[_0x495ec3(0xa5)](_0x59234d)[_0x495ec3(0xa6)]()[_0x495ec3(0xa7)](_0x2ca3ad => {
        _0x2ca3ad === 'color' ? _0x5db826 += isEmpty(_0x5db826) ? _0x522f00[_0x2ca3ad] : _0x2623c5(_0x522f00[_0x2ca3ad]) : _0x5db826 += '' + (isEmpty(_0x5db826) ? _0x2ca3ad : _0x2623c5(_0x2ca3ad)) + _0x2623c5(_0x522f00[_0x2ca3ad]['toString']());
    }), _0x5db826;
}
