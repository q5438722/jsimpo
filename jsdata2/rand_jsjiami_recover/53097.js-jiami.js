'use strict';
const toString = Object['prototype']['toString'];
const colors = require('ansi-colors');
let called = ![];
let fns = [];
const complements = {};
exports['longest'] = (_0x1c9844, _0x19f562) => {
    return _0x1c9844['reduce']((_0x212e03, _0x6caa69) => Math['max'](_0x212e03, _0x19f562 ? _0x6caa69[_0x19f562]['length'] : _0x6caa69['length']), 0);
};
exports['hasColor'] = _0xf041ac => !!_0xf041ac && colors['hasColor'](_0xf041ac);
const isObject = exports['isObject'] = _0x530388 => {
    return _0x530388 !== null && typeof _0x530388 === 'object' && !Array['isArray'](_0x530388);
};
exports['nativeType'] = _0x1170b3 => {
    return toString['call'](_0x1170b3)['slice'](8, -1)['toLowerCase']()['replace'](/\s/g, '');
};
exports['isAsyncFn'] = _0x35168e => {
    return exports['nativeType'](_0x35168e) === 'asyncfunction';
};
exports['isPrimitive'] = _0x25ebfb => {
    return _0x25ebfb != null && typeof _0x25ebfb !== 'object' && typeof _0x25ebfb !== 'function';
};
exports['resolve'] = (_0xb02558, _0x5ea403, ..._0x103ea3) => {
    if (typeof _0x5ea403 === 'function') {
        return _0x5ea403['call'](_0xb02558, ..._0x103ea3);
    }
    return _0x5ea403;
};
exports['scrollDown'] = (_0x19eb2e = []) => [
    ..._0x19eb2e['slice'](1),
    _0x19eb2e[0]
];
exports['scrollUp'] = (_0x3235e2 = []) => [
    _0x3235e2['pop'](),
    ..._0x3235e2
];
exports['reorder'] = (_0x26b02 = []) => {
    let _0x134fd6 = _0x26b02['slice']();
    _0x134fd6['sort']((_0x2d6790, _0x56bb41) => {
        if ('jjHBn' !== 'JVlpA') {
            if (_0x2d6790['index'] > _0x56bb41['index'])
                return 1;
            if (_0x2d6790['index'] < _0x56bb41['index'])
                return -1;
            return 0;
        } else {
            options = { 'width': options };
        }
    });
    return _0x134fd6;
};
exports['swap'] = (_0x5e91ae, _0x25887c, _0x3a22f0) => {
    let _0x2c28e5 = _0x5e91ae['length'];
    let _0x50bd09 = _0x3a22f0 === _0x2c28e5 ? 0 : _0x3a22f0 < 0 ? _0x2c28e5 - 1 : _0x3a22f0;
    let _0x2c77ec = _0x5e91ae[_0x25887c];
    _0x5e91ae[_0x25887c] = _0x5e91ae[_0x50bd09];
    _0x5e91ae[_0x50bd09] = _0x2c77ec;
};
exports['width'] = (_0x823319, _0x4b2709 = 80) => {
    let _0x5eae96 = _0x823319 && _0x823319['columns'] ? _0x823319['columns'] : _0x4b2709;
    if (_0x823319 && typeof _0x823319['getWindowSize'] === 'function') {
        if ('NllEP' === 'NllEP') {
            _0x5eae96 = _0x823319['getWindowSize']()[0];
        } else {
            for (let _0x4dd292 of args)
                exports['mixin'](_0x2f7b81, _0x4dd292);
            return _0x2f7b81;
        }
    }
    if (process['platform'] === 'win32') {
        if ('WgqgD' === 'dqcCX') {
            Reflect['defineProperty'](target, key, desc);
        } else {
            return _0x5eae96 - 1;
        }
    }
    return _0x5eae96;
};
exports['height'] = (_0x43dc95, _0x4c6104 = 20) => {
    let _0x2a2a12 = _0x43dc95 && _0x43dc95['rows'] ? _0x43dc95['rows'] : _0x4c6104;
    if (_0x43dc95 && typeof _0x43dc95['getWindowSize'] === 'function') {
        _0x2a2a12 = _0x43dc95['getWindowSize']()[1];
    }
    return _0x2a2a12;
};
exports['wordWrap'] = (_0x429523, _0x21d23f = {}) => {
    if (!_0x429523)
        return _0x429523;
    if (typeof _0x21d23f === 'number') {
        if ('PtUIW' === 'zbVer') {
            columns = stream['getWindowSize']()[0];
        } else {
            _0x21d23f = { 'width': _0x21d23f };
        }
    }
    let {indent = '', newline = '\n' + indent, width = 80} = _0x21d23f;
    let _0x4857aa = (newline + indent)['match'](/[^\S\n]/g) || [];
    width -= _0x4857aa['length'];
    let _0x54c898 = '.{1,' + width + '}([\\s\\u200B]+|$)|[^\\s\\u200B]+?([\\s\\u200B]+|$)';
    let _0x38b715 = _0x429523['trim']();
    let _0x293b64 = new RegExp(_0x54c898, 'g');
    let _0x5a1027 = _0x38b715['match'](_0x293b64) || [];
    _0x5a1027 = _0x5a1027['map'](_0x175c29 => _0x175c29['replace'](/\n$/, ''));
    if (_0x21d23f['padEnd'])
        _0x5a1027 = _0x5a1027['map'](_0x2bbdfc => _0x2bbdfc['padEnd'](width, ' '));
    if (_0x21d23f['padStart'])
        _0x5a1027 = _0x5a1027['map'](_0x4bc417 => _0x4bc417['padStart'](width, ' '));
    return indent + _0x5a1027['join'](newline);
};
exports['unmute'] = _0x310cd2 => {
    let _0x59b047 = _0x310cd2['stack']['find'](_0x3874bf => colors['keys']['color']['includes'](_0x3874bf));
    if (_0x59b047) {
        return colors[_0x59b047];
    }
    let _0xbd13c6 = _0x310cd2['stack']['find'](_0x5d6895 => _0x5d6895['slice'](2) === 'bg');
    if (_0xbd13c6) {
        return colors[_0x59b047['slice'](2)];
    }
    return _0x14aca9 => _0x14aca9;
};
exports['pascal'] = _0x31bce3 => _0x31bce3 ? _0x31bce3[0]['toUpperCase']() + _0x31bce3['slice'](1) : '';
exports['inverse'] = _0x56b78f => {
    if (!_0x56b78f || !_0x56b78f['stack'])
        return _0x56b78f;
    let _0x12788b = _0x56b78f['stack']['find'](_0xbf60e6 => colors['keys']['color']['includes'](_0xbf60e6));
    if (_0x12788b) {
        if ('RmTbq' === 'RmTbq') {
            let _0x5b4767 = colors['bg' + exports['pascal'](_0x12788b)];
            return _0x5b4767 ? _0x5b4767['black'] : _0x56b78f;
        } else {
            let _0x2e7e96 = Object['getOwnPropertyDescriptor'](target, key);
            if (isObject(_0x2e7e96['value'])) {
                target[key] = exports['merge']({}, target[key], b[key]);
            } else {
                Reflect['defineProperty'](target, key, desc);
            }
        }
    }
    let _0x547889 = _0x56b78f['stack']['find'](_0x2ce282 => _0x2ce282['slice'](0, 2) === 'bg');
    if (_0x547889) {
        return colors[_0x547889['slice'](2)['toLowerCase']()] || _0x56b78f;
    }
    return colors['none'];
};
exports['complement'] = _0x31196e => {
    if (!_0x31196e || !_0x31196e['stack'])
        return _0x31196e;
    let _0x529e57 = _0x31196e['stack']['find'](_0x462f59 => colors['keys']['color']['includes'](_0x462f59));
    let _0x584e9f = _0x31196e['stack']['find'](_0x3367fc => _0x3367fc['slice'](0, 2) === 'bg');
    if (_0x529e57 && !_0x584e9f) {
        if ('PYDdR' !== 'CqfTr') {
            return colors[complements[_0x529e57] || _0x529e57];
        } else {
            if (a['index'] > b['index'])
                return 1;
            if (a['index'] < b['index'])
                return -1;
            return 0;
        }
    }
    if (_0x584e9f) {
        let _0x3a3e97 = _0x584e9f['slice'](2)['toLowerCase']();
        let _0x5e66e3 = complements[_0x3a3e97];
        if (!_0x5e66e3)
            return _0x31196e;
        return colors['bg' + exports['pascal'](_0x5e66e3)] || _0x31196e;
    }
    return colors['none'];
};
exports['meridiem'] = _0x173266 => {
    let _0x452be7 = _0x173266['getHours']();
    let _0x546123 = _0x173266['getMinutes']();
    let _0x4cb9bc = _0x452be7 >= 12 ? 'pm' : 'am';
    _0x452be7 = _0x452be7 % 12;
    let _0x2ffde9 = _0x452be7 === 0 ? 12 : _0x452be7;
    let _0x1f5207 = _0x546123 < 10 ? '0' + _0x546123 : _0x546123;
    return _0x47848d['KBQCM'](_0x2ffde9, ':') + _0x1f5207 + ' ' + _0x4cb9bc;
};
exports['set'] = (_0x50c7a6 = {}, _0x1b1523 = '', _0x952a02) => {
    return _0x1b1523['split']('.')['reduce']((_0x440ece, _0x508ffc, _0x37b483, _0x1a0d93) => {
        if ('CZkxc' !== 'HzoKa') {
            let _0x47c57e = _0x1a0d93['length'] - 1 > _0x37b483 ? _0x440ece[_0x508ffc] || {} : _0x952a02;
            if (!exports['isObject'](_0x47c57e) && _0x37b483 < _0x1a0d93['length'] - 1)
                _0x47c57e = {};
            return _0x440ece[_0x508ffc] = _0x47c57e;
        } else {
            let _0x2e3a5d = _0x1a0d93['length'] - 1 > _0x37b483 ? _0x440ece[_0x508ffc] || {} : _0x952a02;
            if (!exports['isObject'](_0x2e3a5d) && _0x37b483 < _0x1a0d93['length'] - 1)
                _0x2e3a5d = {};
            return _0x440ece[_0x508ffc] = _0x2e3a5d;
        }
    }, _0x50c7a6);
};
exports['get'] = (_0x7a4e42 = {}, _0x2fcfc5 = '', _0x301e8d) => {
    let _0x5d63e5 = _0x7a4e42[_0x2fcfc5] == null ? _0x2fcfc5['split']('.')['reduce']((_0x69582c, _0x4686b0) => _0x69582c && _0x69582c[_0x4686b0], _0x7a4e42) : _0x7a4e42[_0x2fcfc5];
    return _0x5d63e5 == null ? _0x301e8d : _0x5d63e5;
};
exports['mixin'] = (_0x395249, _0x19809c) => {
    if (!isObject(_0x395249))
        return _0x19809c;
    if (!isObject(_0x19809c))
        return _0x395249;
    for (let _0x4792bd of Object['keys'](_0x19809c)) {
        if ('ZJPxn' === 'ZJPxn') {
            let _0x32785c = Object['getOwnPropertyDescriptor'](_0x19809c, _0x4792bd);
            if (_0x32785c['hasOwnProperty']('value')) {
                if (_0x395249['hasOwnProperty'](_0x4792bd) && isObject(_0x32785c['value'])) {
                    let _0x1a268c = Object['getOwnPropertyDescriptor'](_0x395249, _0x4792bd);
                    if (isObject(_0x1a268c['value'])) {
                        _0x395249[_0x4792bd] = exports['merge']({}, _0x395249[_0x4792bd], _0x19809c[_0x4792bd]);
                    } else {
                        Reflect['defineProperty'](_0x395249, _0x4792bd, _0x32785c);
                    }
                } else {
                    if ('GtRgF' !== 'GtRgF') {
                        if (!color || !color['stack'])
                            return color;
                        let _0x36d743 = color['stack']['find'](_0x1cf57b => colors['keys']['color']['includes'](_0x1cf57b));
                        let _0x42c8c7 = color['stack']['find'](_0x585c7e => _0x585c7e['slice'](0, 2) === 'bg');
                        if (_0x36d743 && !_0x42c8c7) {
                            return colors[complements[_0x36d743] || _0x36d743];
                        }
                        if (_0x42c8c7) {
                            let _0x32f9a7 = _0x42c8c7['slice'](2)['toLowerCase']();
                            let _0x157c07 = complements[_0x32f9a7];
                            if (!_0x157c07)
                                return color;
                            return colors['bg' + exports['pascal'](_0x157c07)] || color;
                        }
                        return colors['none'];
                    } else {
                        Reflect['defineProperty'](_0x395249, _0x4792bd, _0x32785c);
                    }
                }
            } else {
                Reflect['defineProperty'](_0x395249, _0x4792bd, _0x32785c);
            }
        } else {
            let _0x2e5f7e = color['stack']['find'](_0x1127ea => colors['keys']['color']['includes'](_0x1127ea));
            if (_0x2e5f7e) {
                return colors[_0x2e5f7e];
            }
            let _0x3d0f8b = color['stack']['find'](_0x3aead3 => _0x3aead3['slice'](2) === 'bg');
            if (_0x3d0f8b) {
                return colors[_0x2e5f7e['slice'](2)];
            }
            return _0x37d6d7 => _0x37d6d7;
        }
    }
    return _0x395249;
};
exports['merge'] = (..._0x5f5b1d) => {
    let _0x2c89db = {};
    for (let _0x4443df of _0x5f5b1d)
        exports['mixin'](_0x2c89db, _0x4443df);
    return _0x2c89db;
};
exports['mixinEmitter'] = (_0x1a00e4, _0x133ea3) => {
    let _0x1ad918 = _0x133ea3['constructor']['prototype'];
    for (let _0x23d826 of Object['keys'](_0x1ad918)) {
        let _0x36dc68 = _0x1ad918[_0x23d826];
        if (typeof _0x36dc68 === 'function') {
            exports['define'](_0x1a00e4, _0x23d826, _0x36dc68['bind'](_0x133ea3));
        } else {
            if ('Uccde' !== 'Uccde') {
                return colors[bg['slice'](2)['toLowerCase']()] || color;
            } else {
                exports['define'](_0x1a00e4, _0x23d826, _0x36dc68);
            }
        }
    }
};
exports['onExit'] = _0x3094a2 => {
    const _0x3ef816 = (_0x5085e0, _0x3fb515) => {
        if (called)
            return;
        called = !![];
        fns['forEach'](_0xb6df6d => _0xb6df6d());
        if (_0x5085e0 === !![]) {
            process['exit'](128 + _0x3fb515);
        }
    };
    if (fns['length'] === 0) {
        if ('SBVhQ' === 'SBVhQ') {
            process['once']('SIGTERM', _0x3ef816['bind'](null, !![], 15));
            process['once']('SIGINT', _0x3ef816['bind'](null, !![], 2));
            process['once']('exit', _0x3ef816);
        } else {
            return columns - 1;
        }
    }
    fns['push'](_0x3094a2);
};
exports['define'] = (_0x345f75, _0x4e79ec, _0x3b30c6) => {
    Reflect['defineProperty'](_0x345f75, _0x4e79ec, { 'value': _0x3b30c6 });
};
exports['defineExport'] = (_0x54b97a, _0x4a5ded, _0xb9759e) => {
    let _0x486927;
    Reflect['defineProperty'](_0x54b97a, _0x4a5ded, {
        'enumerable': !![],
        'configurable': !![],
        'set'(_0x352888) {
            if ('qtzSP' !== 'RKRpH') {
                _0x486927 = _0x352888;
            } else {
                return colors[complements[name] || name];
            }
        },
        'get'() {
            if ('uBucW' === 'Doaqr') {
                let _0x43c7ee = bg['slice'](2)['toLowerCase']();
                let _0x1df73f = complements[_0x43c7ee];
                if (!_0x1df73f)
                    return color;
                return colors['bg' + exports['pascal'](_0x1df73f)] || color;
            } else {
                return _0x486927 ? _0x486927() : _0xb9759e();
            }
        }
    });
};