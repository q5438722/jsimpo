const _0x57d6 = [
    'created',
    'beforeMount',
    '_isMounted',
    'mounted',
    'onReady',
    '185oFWlRJ',
    '2815bGBHVd',
    '87470yocAXi',
    '652718fAoTyN',
    '642188GkQhmd',
    '323319aQtJET',
    '8913UcBuZy',
    '12xziHED',
    '10102qQQxal',
    '7OCZAOG',
    '__nodeid__',
    '__nodeId__',
    '$scope',
    'getSystemInfoSync',
    'split',
    'defineProperty',
    '$refs',
    '.vue-ref',
    'forEach',
    'dataset',
    'ref',
    'selectAllComponents',
    '.vue-ref-in-for',
    'push',
    '$vm',
    'create',
    'triggerEvent',
    '__l',
    '$parent',
    '$root',
    '$children',
    '__call_hook'
];
const _0x21d1f2 = _0x378e;
(function (_0x3dae70, _0x294d2f) {
    const _0x9b558e = _0x378e;
    while (!![]) {
        try {
            const _0x1eab3e = parseInt(_0x9b558e(0x1dc)) * -parseInt(_0x9b558e(0x1dd)) + -parseInt(_0x9b558e(0x1de)) + parseInt(_0x9b558e(0x1df)) + parseInt(_0x9b558e(0x1e0)) + -parseInt(_0x9b558e(0x1e1)) + -parseInt(_0x9b558e(0x1e2)) * parseInt(_0x9b558e(0x1e3)) + parseInt(_0x9b558e(0x1e4)) * parseInt(_0x9b558e(0x1e5));
            if (_0x1eab3e === _0x294d2f)
                break;
            else
                _0x3dae70['push'](_0x3dae70['shift']());
        } catch (_0x2ac51c) {
            _0x3dae70['push'](_0x3dae70['shift']());
        }
    }
}(_0x57d6, 0x4fdbc));
import { findVmByVueId } from '../../../mp-weixin/runtime/wrapper/util';
export const mocks = [
    '__route__',
    '__webviewId__',
    _0x21d1f2(0x1e6),
    _0x21d1f2(0x1e7)
];
export function isPage() {
    const _0x479e77 = _0x21d1f2;
    return this['__nodeid__'] === 0x0 || this[_0x479e77(0x1e7)] === 0x0;
}
export function initRefs(_0x6438f0) {
    const _0x45c8ba = _0x21d1f2, _0x16d3d6 = _0x6438f0[_0x45c8ba(0x1e8)], _0x2995ab = parseInt(tt[_0x45c8ba(0x1e9)]()['SDKVersion'][_0x45c8ba(0x1ea)]('.')[0x1]);
    _0x2995ab > 0x10 ? Object[_0x45c8ba(0x1eb)](_0x6438f0, _0x45c8ba(0x1ec), {
        'get'() {
            const _0xf8970a = _0x45c8ba, _0x1c1287 = {}, _0x517d61 = _0x16d3d6['selectAllComponents'](_0xf8970a(0x1ed));
            _0x517d61[_0xf8970a(0x1ee)](_0xcca5b0 => {
                const _0x505dd3 = _0xf8970a, _0x4a8010 = _0xcca5b0[_0x505dd3(0x1ef)][_0x505dd3(0x1f0)];
                _0x1c1287[_0x4a8010] = _0xcca5b0['$vm'] || _0xcca5b0;
            });
            const _0x5962ef = _0x16d3d6[_0xf8970a(0x1f1)](_0xf8970a(0x1f2));
            return _0x5962ef['forEach'](_0x5a7635 => {
                const _0x2123ce = _0xf8970a, _0x2c077d = _0x5a7635[_0x2123ce(0x1ef)]['ref'];
                !_0x1c1287[_0x2c077d] && (_0x1c1287[_0x2c077d] = []), _0x1c1287[_0x2c077d][_0x2123ce(0x1f3)](_0x5a7635[_0x2123ce(0x1f4)] || _0x5a7635);
            }), _0x1c1287;
        }
    }) : (_0x16d3d6[_0x45c8ba(0x1f1)](_0x45c8ba(0x1ed), _0x1d727f => {
        const _0x47236a = _0x45c8ba;
        _0x1d727f[_0x47236a(0x1ee)](_0x5895ac => {
            const _0x1f33d0 = _0x47236a, _0x3299ac = _0x5895ac['dataset']['ref'];
            _0x6438f0['$refs'][_0x3299ac] = _0x5895ac[_0x1f33d0(0x1f4)] || _0x5895ac;
        });
    }), _0x16d3d6[_0x45c8ba(0x1f1)](_0x45c8ba(0x1f2), _0x198070 => {
        const _0xaa91b3 = _0x45c8ba;
        _0x198070[_0xaa91b3(0x1ee)](_0x306224 => {
            const _0x284e3a = _0xaa91b3, _0x273428 = _0x306224[_0x284e3a(0x1ef)][_0x284e3a(0x1f0)];
            !_0x6438f0[_0x284e3a(0x1ec)][_0x273428] && (_0x6438f0['$refs'][_0x273428] = []), _0x6438f0[_0x284e3a(0x1ec)][_0x273428][_0x284e3a(0x1f3)](_0x306224[_0x284e3a(0x1f4)] || _0x306224);
        });
    }));
}
export const instances = Object[_0x21d1f2(0x1f5)](null);
export function initRelation({
    vuePid: _0x55d39f,
    mpInstance: _0x297176
}) {
    const _0x4879a9 = _0x21d1f2, _0x382dc5 = (_0x297176[_0x4879a9(0x1e7)] || _0x297176[_0x4879a9(0x1e6)]) + '', _0x16b7fc = _0x297176['__webviewId__'] + '';
    instances[_0x16b7fc + '_' + _0x382dc5] = _0x297176[_0x4879a9(0x1f4)], this[_0x4879a9(0x1f6)](_0x4879a9(0x1f7), {
        'vuePid': _0x55d39f,
        'nodeId': _0x382dc5,
        'webviewId': _0x16b7fc
    });
}
function _0x378e(_0x41e5d1, _0x21dfac) {
    return _0x378e = function (_0x57d697, _0x378e97) {
        _0x57d697 = _0x57d697 - 0x1dc;
        let _0xc8b17d = _0x57d6[_0x57d697];
        return _0xc8b17d;
    }, _0x378e(_0x41e5d1, _0x21dfac);
}
export function handleLink({
    detail: {
        vuePid: _0x42585b,
        nodeId: _0x9f2d22,
        webviewId: _0x811aef
    }
}) {
    const _0x39b2bd = _0x21d1f2, _0x436fa9 = instances[_0x811aef + '_' + _0x9f2d22];
    if (!_0x436fa9)
        return;
    let _0x2eec81;
    _0x42585b && (_0x2eec81 = findVmByVueId(this[_0x39b2bd(0x1f4)], _0x42585b)), !_0x2eec81 && (_0x2eec81 = this['$vm']), _0x436fa9[_0x39b2bd(0x1f8)] = _0x2eec81, _0x436fa9['$root'] = _0x2eec81[_0x39b2bd(0x1f9)], _0x2eec81[_0x39b2bd(0x1fa)][_0x39b2bd(0x1f3)](_0x436fa9), _0x436fa9[_0x39b2bd(0x1fb)](_0x39b2bd(0x1fc)), _0x436fa9[_0x39b2bd(0x1fb)](_0x39b2bd(0x1fd)), _0x436fa9[_0x39b2bd(0x1fe)] = !![], _0x436fa9[_0x39b2bd(0x1fb)](_0x39b2bd(0x1ff)), _0x436fa9[_0x39b2bd(0x1fb)](_0x39b2bd(0x200));
}