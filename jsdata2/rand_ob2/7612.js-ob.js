const _0x10e7 = [
    'test',
    'No\x20Template!',
    'exec',
    'recyclable',
    'test_case_',
    'random',
    'toFixed',
    '\x0a\x20\x20\x20\x20\x20\x20try\x20{\x20weex.document.registerStyleSheets(\x22',
    '\x22,\x20[',
    '])\x20}\x20catch(e)\x20{};\x0a\x20\x20\x20\x20\x20\x20var\x20',
    '\x20=\x20Object.assign({\x0a\x20\x20\x20\x20\x20\x20\x20\x20_scopeId:\x20\x22',
    'stringify',
    ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20render:\x20function\x20()\x20{\x20',
    'render',
    '@render',
    '\x22@render\x22:\x20function\x20()\x20{',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20staticRenderFns:\x20',
    'staticRenderFns',
    'Vue.component(\x27',
    '\x27,\x20',
    'parse',
    'jsonStyle',
    'isArray',
    'path',
    'name',
    'catch',
    'then',
    'object',
    'length',
    '@styleScope',
    '@templateId',
    'bindingExpression',
    'charAt',
    'event',
    'forEach',
    'push',
    'ref',
    'children',
    'getRef',
    'document',
    'fireEvent',
    'frameworks',
    'config',
    'registerModules',
    'setTimeout',
    'createInstance',
    '//\x20{\x20\x22framework\x22:\x20\x22Vue\x22\x20}\x0a',
    'getDocument',
    '$getRoot',
    'getRoot',
    '$refresh',
    'refreshInstance',
    '$destroy',
    'destroyInstance',
    'taskCenter',
    'lifecycle',
    '\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20staticRenderFns:\x20',
    ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    'callNative',
    'function',
    '71562lOcXzz',
    '9hiHikQ',
    '27659lYfbNk',
    '17231moAREz',
    '19oRzwFL',
    '4SXhpJv',
    '8243IJOxhZ',
    '137205gbzVKL',
    '383178FiJCtT',
    '12NeFHQl',
    '712TcGiEw',
    'readFileSync',
    'resolve',
    '../cases/',
    'utf8',
    'return\x20',
    'debug',
    'replace',
    '\x5c$&',
    'map',
    'function\x20()\x20{\x20',
    'join'
];
const _0xfced32 = _0xceda;
function _0xceda(_0x23bb16, _0x16bc79) {
    return _0xceda = function (_0x10e754, _0xceda53) {
        _0x10e754 = _0x10e754 - 0x18d;
        let _0x51536a = _0x10e7[_0x10e754];
        return _0x51536a;
    }, _0xceda(_0x23bb16, _0x16bc79);
}
(function (_0x37987c, _0x5074d7) {
    const _0x24bc4a = _0xceda;
    while (!![]) {
        try {
            const _0x35a9c8 = -parseInt(_0x24bc4a(0x18d)) + -parseInt(_0x24bc4a(0x18e)) * parseInt(_0x24bc4a(0x18f)) + -parseInt(_0x24bc4a(0x190)) * -parseInt(_0x24bc4a(0x191)) + parseInt(_0x24bc4a(0x192)) * -parseInt(_0x24bc4a(0x193)) + -parseInt(_0x24bc4a(0x194)) + parseInt(_0x24bc4a(0x195)) + -parseInt(_0x24bc4a(0x196)) * parseInt(_0x24bc4a(0x197));
            if (_0x35a9c8 === _0x5074d7)
                break;
            else
                _0x37987c['push'](_0x37987c['shift']());
        } catch (_0x1054c6) {
            _0x37987c['push'](_0x37987c['shift']());
        }
    }
}(_0x10e7, 0x33999));
import _0xfecdd3 from 'fs';
import _0x1fd509 from 'path';
import * as _0x168feb from '../../../packages/weex-vue-framework';
import { compile } from '../../../packages/weex-template-compiler';
import _0xcf6e0e from 'weex-js-runtime';
import _0x22fa6b from 'weex-styler';
const styleRE = /<\s*style\s*\w*>([^(<\/)]*)<\/\s*style\s*>/g, scriptRE = /<\s*script.*>([^]*)<\/\s*script\s*>/, templateRE = /<\s*template\s*([^>]*)>([^]*)<\/\s*template\s*>/;
export function readFile(_0x26e55f) {
    const _0x8f5fa5 = _0xceda;
    return _0xfecdd3[_0x8f5fa5(0x198)](_0x1fd509[_0x8f5fa5(0x199)](__dirname, _0x8f5fa5(0x19a), _0x26e55f), _0x8f5fa5(0x19b));
}
export function readObject(_0xff351d) {
    const _0x55a690 = _0xceda;
    return new Function(_0x55a690(0x19c) + readFile(_0xff351d))();
}
console[_0xfced32(0x19d)] = () => {
};
const matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
export function strToRegExp(_0x147767) {
    const _0xe31237 = _0xfced32;
    return new RegExp(_0x147767[_0xe31237(0x19e)](matchOperatorsRe, _0xe31237(0x19f)));
}
function parseStatic(_0x485934) {
    const _0x231018 = _0xfced32;
    return '[' + _0x485934[_0x231018(0x1a0)](_0x3183d7 => _0x231018(0x1a1) + _0x3183d7 + '\x20}')[_0x231018(0x1a2)](',') + ']';
}
export function compileAndStringify(_0x408d9b) {
    const _0x7a6b56 = _0xfced32, {
            render: _0x58da05,
            staticRenderFns: _0x31bdea
        } = compile(_0x408d9b);
    return {
        'render': _0x7a6b56(0x1a1) + _0x58da05 + '\x20}',
        'staticRenderFns': parseStatic(_0x31bdea)
    };
}
export function compileVue(_0x482f59, _0x32046d) {
    return new Promise((_0x3827cf, _0x2b55ba) => {
        const _0x4b9059 = _0xceda;
        if (!templateRE[_0x4b9059(0x1a3)](_0x482f59))
            return _0x2b55ba(_0x4b9059(0x1a4));
        const _0x557e7c = scriptRE[_0x4b9059(0x1a5)](_0x482f59), _0x54b1e8 = _0x557e7c ? _0x557e7c[0x1] : '', _0x2e61ce = templateRE[_0x4b9059(0x1a5)](_0x482f59), _0x5d950a = {};
        /\s*recyclable\=?/i[_0x4b9059(0x1a3)](_0x2e61ce[0x1]) && (_0x5d950a[_0x4b9059(0x1a6)] = !![]);
        const _0x5861aa = compile(_0x2e61ce[0x2], _0x5d950a), _0x3bf51b = _0x4b9059(0x1a7) + (Math[_0x4b9059(0x1a8)]() * 0x5f5e0ff)[_0x4b9059(0x1a9)](0x0), _0x4fb30a = _0x3ce981 => _0x4b9059(0x1aa) + _0x3bf51b + _0x4b9059(0x1ab) + JSON['stringify'](_0x3ce981) + _0x4b9059(0x1ac) + _0x3bf51b + _0x4b9059(0x1ad) + _0x3bf51b + '\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20style:\x20' + JSON[_0x4b9059(0x1ae)](_0x3ce981) + _0x4b9059(0x1af) + _0x5861aa[_0x4b9059(0x1b0)] + '\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x5861aa[_0x4b9059(0x1b1)] ? _0x4b9059(0x1b2) + _0x5861aa[_0x4b9059(0x1b1)] + '},' : '') + _0x4b9059(0x1b3) + parseStatic(_0x5861aa[_0x4b9059(0x1b4)]) + ',\x0a\x20\x20\x20\x20\x20\x20},\x20(function(){\x0a\x20\x20\x20\x20\x20\x20\x20\x20var\x20module\x20=\x20{\x20exports:\x20{}\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x54b1e8 + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20module.exports;\x0a\x20\x20\x20\x20\x20\x20})());\x0a\x20\x20\x20\x20' + (_0x32046d ? _0x4b9059(0x1b5) + _0x32046d + _0x4b9059(0x1b6) + _0x3bf51b + ');\x0a' : _0x3bf51b + '.el\x20=\x20\x27body\x27;new\x20Vue(' + _0x3bf51b + ');');
        let _0x2b1b0a = '', _0xe4a476 = null;
        while (_0xe4a476 = styleRE[_0x4b9059(0x1a5)](_0x482f59)) {
            _0x2b1b0a += '\x0a' + _0xe4a476[0x1] + '\x0a';
        }
        _0x22fa6b[_0x4b9059(0x1b7)](_0x2b1b0a, (_0x36cc87, _0x1f08ec) => {
            const _0x288137 = _0x4b9059;
            if (_0x36cc87)
                return _0x2b55ba(_0x36cc87);
            _0x3827cf(_0x4fb30a(_0x1f08ec[_0x288137(0x1b8)]));
        }), _0x3827cf(_0x4fb30a({}));
    });
}
export function compileWithDeps(_0x19ab9a, _0x1154e2) {
    return new Promise((_0x4f4254, _0xa77fd4) => {
        const _0xdab87c = _0xceda;
        Array[_0xdab87c(0x1b9)](_0x1154e2) && Promise['all'](_0x1154e2[_0xdab87c(0x1a0)](_0x262f6f => {
            const _0x3dfbad = _0xdab87c;
            return compileVue(readFile(_0x262f6f[_0x3dfbad(0x1ba)]), _0x262f6f[_0x3dfbad(0x1bb)])[_0x3dfbad(0x1bc)](_0xa77fd4);
        }))[_0xdab87c(0x1bd)](_0x580b8b => {
            const _0x25639c = _0xdab87c;
            compileVue(readFile(_0x19ab9a))[_0x25639c(0x1bd)](_0x3826c4 => {
                const _0x4c4a84 = _0x25639c;
                _0x4f4254(_0x580b8b[_0x4c4a84(0x1a2)]('\x0a') + _0x3826c4);
            })[_0x25639c(0x1bc)](_0xa77fd4);
        })[_0xdab87c(0x1bc)](_0xa77fd4);
    });
}
function isObject(_0x1743b7) {
    const _0x3e248d = _0xfced32;
    return _0x1743b7 !== null && typeof _0x1743b7 === _0x3e248d(0x1be);
}
function isEmptyObject(_0x336e10) {
    const _0x92f79 = _0xfced32;
    return isObject(_0x336e10) && Object['keys'](_0x336e10)[_0x92f79(0x1bf)] < 0x1;
}
function omitUseless(_0x5080d1) {
    const _0x136703 = _0xfced32;
    if (isObject(_0x5080d1)) {
        delete _0x5080d1['ref'];
        for (const _0x4e5cc3 in _0x5080d1) {
            omitUseless(_0x5080d1[_0x4e5cc3]), (_0x4e5cc3 === _0x136703(0x1c0) || _0x4e5cc3 === _0x136703(0x1c1) || _0x4e5cc3 === _0x136703(0x1c2)) && delete _0x5080d1[_0x4e5cc3], _0x4e5cc3[_0x136703(0x1c3)](0x0) !== '@' && (isEmptyObject(_0x5080d1[_0x4e5cc3]) || _0x5080d1[_0x4e5cc3] === undefined) && delete _0x5080d1[_0x4e5cc3];
        }
    }
    return _0x5080d1;
}
export function getRoot(_0x58558f) {
    return omitUseless(_0x58558f['$getRoot']());
}
export function getEvents(_0x213841) {
    const _0x321197 = [], _0x75ef73 = _0x24df07 => {
            const _0x4482a2 = _0xceda;
            if (!_0x24df07)
                return;
            Array[_0x4482a2(0x1b9)](_0x24df07['event']) && _0x24df07[_0x4482a2(0x1c4)][_0x4482a2(0x1c5)](_0x113c7d => {
                const _0x3d936e = _0x4482a2;
                _0x321197[_0x3d936e(0x1c6)]({
                    'ref': _0x24df07[_0x3d936e(0x1c7)],
                    'type': _0x113c7d
                });
            }), Array['isArray'](_0x24df07[_0x4482a2(0x1c8)]) && _0x24df07['children']['forEach'](_0x75ef73);
        };
    return _0x75ef73(_0x213841['$getRoot']()), _0x321197;
}
export function fireEvent(_0x502c7b, _0x4aacb8, _0x150eef, _0x5effc1 = {}) {
    const _0x418b95 = _0xfced32, _0x36fdb2 = _0x502c7b['document'][_0x418b95(0x1c9)](_0x4aacb8);
    _0x36fdb2 && _0x502c7b[_0x418b95(0x1ca)][_0x418b95(0x1cb)](_0x36fdb2, _0x150eef, _0x5effc1);
}
export function createInstance(_0x3e34fa, _0x100da6, ..._0x49ab01) {
    const _0x5ea1dd = _0xfced32;
    _0xcf6e0e['config'][_0x5ea1dd(0x1cc)] = { 'Vue': _0x168feb };
    const _0x4cf43f = _0xcf6e0e['init'](_0xcf6e0e[_0x5ea1dd(0x1cd)]);
    _0x4cf43f[_0x5ea1dd(0x1ce)]({
        'timer': [
            _0x5ea1dd(0x1cf),
            'setInterval'
        ]
    });
    const _0x5d0cf5 = _0x4cf43f[_0x5ea1dd(0x1d0)](_0x3e34fa, _0x5ea1dd(0x1d1) + _0x100da6, ..._0x49ab01) || {};
    return _0x5d0cf5[_0x5ea1dd(0x1ca)] = _0x4cf43f[_0x5ea1dd(0x1d2)](_0x3e34fa), _0x5d0cf5[_0x5ea1dd(0x1d3)] = () => _0x4cf43f[_0x5ea1dd(0x1d4)](_0x3e34fa), _0x5d0cf5[_0x5ea1dd(0x1d5)] = _0x4b6314 => _0x4cf43f[_0x5ea1dd(0x1d6)](_0x3e34fa, _0x4b6314), _0x5d0cf5[_0x5ea1dd(0x1d7)] = () => {
        const _0x32ae87 = _0x5ea1dd;
        delete _0x5d0cf5['document'], _0x4cf43f[_0x32ae87(0x1d8)](_0x3e34fa);
    }, _0x5d0cf5['$triggerHook'] = (_0xc0fcaa, _0x2def3b, _0x296b31) => {
        const _0x1f5f1d = _0x5ea1dd;
        _0x5d0cf5[_0x1f5f1d(0x1ca)][_0x1f5f1d(0x1d9)]['triggerHook'](_0xc0fcaa, _0x1f5f1d(0x1da), _0x2def3b, { 'args': _0x296b31 });
    }, _0x5d0cf5;
}
export function compileAndExecute(_0x519142, _0x2fa1ea = '') {
    return new Promise(_0x4adb4a => {
        const _0x159a3b = _0xceda, _0x4a99de = String(Date['now']() * Math[_0x159a3b(0x1a8)]()), {
                render: _0x47a53c,
                staticRenderFns: _0x270900
            } = compile(_0x519142), _0x33338c = createInstance(_0x4a99de, '\x0a\x20\x20\x20\x20\x20\x20new\x20Vue({\x0a\x20\x20\x20\x20\x20\x20\x20\x20el:\x20\x27#whatever\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20render:\x20function\x20()\x20{\x20' + _0x47a53c + _0x159a3b(0x1db) + parseStatic(_0x270900) + _0x159a3b(0x1dc) + _0x2fa1ea + '\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20');
        setTimeout(() => _0x4adb4a(_0x33338c), 0xa);
    });
}
export function syncPromise(_0x28baab) {
    const _0x498b6d = _0xfced32;
    let _0x68b57e = Promise[_0x498b6d(0x199)]();
    return _0x28baab[_0x498b6d(0x1c5)](_0x48224e => {
        const _0x25c3fa = _0x498b6d;
        _0x68b57e = _0x68b57e[_0x25c3fa(0x1bd)](_0x48224e);
    }), _0x68b57e;
}
export function checkRefresh(_0x426e10, _0x1e595c, _0x1b4ec8) {
    return () => new Promise(_0xd0722e => {
        const _0x29f663 = _0xceda;
        _0x426e10[_0x29f663(0x1d5)](_0x1e595c), setTimeout(() => {
            _0x1b4ec8(getRoot(_0x426e10)), _0xd0722e();
        });
    });
}
export function addTaskHook(_0x55aa96) {
    const _0x4340b4 = _0xfced32;
    global[_0x4340b4(0x1dd)] = function _0x293fa2(_0x304d5d, _0xd55d0) {
        const _0x594985 = _0x4340b4;
        Array[_0x594985(0x1b9)](_0xd55d0) && typeof _0x55aa96 === _0x594985(0x1de) && _0xd55d0['forEach'](_0x5bee62 => {
            _0x55aa96(_0x304d5d, {
                'module': _0x5bee62['module'],
                'method': _0x5bee62['method'],
                'args': Array['from'](_0x5bee62['args'])
            });
        });
    };
}
export function resetTaskHook() {
    const _0x4d9b53 = _0xfced32;
    delete global[_0x4d9b53(0x1dd)];
}
