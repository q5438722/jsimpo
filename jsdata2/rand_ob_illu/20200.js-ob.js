const _0x153b = ['5kDXDex', '304489xgjsof', '261262dnposT', '369949kEqRkk', 'boolean', 'The \'runtime\' option must be boolean', 'namedCaptureGroups', '154462HzETkz', '4bSjQge', '416837Lpnqyp', '717DRSBht', '2283eYeRFC', '608995vsfDhm'];

(function (_0x35b94f, _0x5ad4ce) {
    const _0x313c8f = _0x2bab;

    while (true) {
        try {
            const _0x55f896 = parseInt(_0x313c8f(0x171)) + parseInt(_0x313c8f(0x172)) * -parseInt(_0x313c8f(0x173)) + -parseInt(_0x313c8f(0x174)) * -parseInt(_0x313c8f(0x175)) + -parseInt(_0x313c8f(0x176)) + parseInt(_0x313c8f(0x177)) * parseInt(_0x313c8f(0x178)) + parseInt(_0x313c8f(0x179)) + -parseInt(_0x313c8f(0x17a));

            if (_0x55f896 === _0x5ad4ce) break;else _0x35b94f.push(_0x35b94f.shift());
        } catch (_0x115919) {
            _0x35b94f.push(_0x35b94f.shift());
        }
    }
})(_0x153b, 928788);
import { createRegExpFeaturePlugin } from '@babel/helper-create-regexp-features-plugin';
function _0x2bab(_0x308952, _0x5cc4a3) {
    return _0x2bab = function (_0x51f380, _0x5037e1) {
        _0x51f380 = _0x51f380 - 369;
        const _0x35c747 = _0x153b[_0x51f380];

        return _0x35c747;
    }, _0x2bab(_0x308952, _0x5cc4a3);
}
export default function (core, options) {
    const _0x40478f = _0x2bab;
    var {
        runtime = true
    } = options;

    if (typeof runtime !== _0x40478f(0x17b)) throw new Error(_0x40478f(0x17c));
    return createRegExpFeaturePlugin({
        'name': 'transform-named-capturing-groups-regex',
        'feature': _0x40478f(0x17d),
        'options': { 'runtime': runtime }
    });
}
