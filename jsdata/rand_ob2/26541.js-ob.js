const _0x2e4e = [
    'keys',
    'color',
    'toString',
    '287305rDkfZB',
    '199kHfGKS',
    '979nGkDXm',
    '2ReCWRb',
    '515924JrvdGR',
    '5EnMKVj',
    '234622EflLeo',
    '1096847bIIVIc',
    '1286898SgHTlK',
    '1rSaSdP',
    '916198HhJeAx',
    'length'
];
function _0x5d24(_0x4a9223, _0x43bb36) {
    return _0x5d24 = function (_0x2e4ed7, _0x5d2415) {
        _0x2e4ed7 = _0x2e4ed7 - 0xa3;
        let _0x953728 = _0x2e4e[_0x2e4ed7];
        return _0x953728;
    }, _0x5d24(_0x4a9223, _0x43bb36);
}
(function (_0x35ef64, _0x3504e2) {
    const _0x4be33a = _0x5d24;
    while (!![]) {
        try {
            const _0x50a064 = -parseInt(_0x4be33a(0xa3)) + -parseInt(_0x4be33a(0xa4)) * -parseInt(_0x4be33a(0xa5)) + parseInt(_0x4be33a(0xa6)) * -parseInt(_0x4be33a(0xa7)) + parseInt(_0x4be33a(0xa8)) * parseInt(_0x4be33a(0xa9)) + parseInt(_0x4be33a(0xaa)) + -parseInt(_0x4be33a(0xab)) * parseInt(_0x4be33a(0xac)) + parseInt(_0x4be33a(0xad));
            if (_0x50a064 === _0x3504e2)
                break;
            else
                _0x35ef64['push'](_0x35ef64['shift']());
        } catch (_0x18a156) {
            _0x35ef64['push'](_0x35ef64['shift']());
        }
    }
}(_0x2e4e, 0xbd30d));
import { unstable_capitalize as _0x2a1147 } from '@material-ui/utils';
function isEmpty(_0x1b1aa9) {
    const _0xbcdd6e = _0x5d24;
    return _0x1b1aa9[_0xbcdd6e(0xae)] === 0x0;
}
export default function propsToClassKey(_0x57a219) {
    const _0x4c7c9d = _0x5d24, {
            variant: _0x181dee,
            ..._0x2384c8
        } = _0x57a219;
    let _0x298292 = _0x181dee || '';
    return Object[_0x4c7c9d(0xaf)](_0x2384c8)['sort']()['forEach'](_0x53632e => {
        const _0x543636 = _0x4c7c9d;
        _0x53632e === _0x543636(0xb0) ? _0x298292 += isEmpty(_0x298292) ? _0x57a219[_0x53632e] : _0x2a1147(_0x57a219[_0x53632e]) : _0x298292 += '' + (isEmpty(_0x298292) ? _0x53632e : _0x2a1147(_0x53632e)) + _0x2a1147(_0x57a219[_0x53632e][_0x543636(0xb1)]());
    }), _0x298292;
}
