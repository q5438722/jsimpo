function _0x3d2a(_0x29e304, _0x1b7ec1) {
    return _0x3d2a = function (_0x176d3d, _0x3d2a78) {
        _0x176d3d = _0x176d3d - 257;
        let _0x1ca4b3 = _0x176d[_0x176d3d];
        return _0x1ca4b3;
    }, _0x3d2a(_0x29e304, _0x1b7ec1);
}
const toString = Object[_0xca7f0c(266)][_0xca7f0c(267)], colors = require('ansi-colors');
let called = ![], fns = [];
const complements = {
    'yellow': _0xca7f0c(268),
    'cyan': _0xca7f0c(269),
    'green': _0xca7f0c(270),
    'black': _0xca7f0c(271),
    'blue': _0xca7f0c(272),
    'red': 'cyan',
    'magenta': _0xca7f0c(273),
    'white': 'black'
};
exports[_0xca7f0c(274)] = (_0x3589cf, _0x3bfb6b) => {
    const _0x165054 = _0xca7f0c;
    return _0x3589cf['reduce']((_0x4874ee, _0x27babd) => Math['max'](_0x4874ee, _0x3bfb6b ? _0x27babd[_0x3bfb6b]['length'] : _0x27babd[_0x165054(275)]), 0);
}, exports['hasColor'] = _0x5c57f4 => !!_0x5c57f4 && colors['hasColor'](_0x5c57f4);
const isObject = exports['isObject'] = _0x1bb631 => {
    const _0xb967e3 = _0xca7f0c;
    return _0x1bb631 !== null && typeof _0x1bb631 === _0xb967e3(276) && !Array[_0xb967e3(277)](_0x1bb631);
};
exports[_0xca7f0c(278)] = _0x5775dc => {
    const _0x3d87f7 = _0xca7f0c;
    return toString[_0x3d87f7(279)](_0x5775dc)[_0x3d87f7(280)](8, -1)[_0x3d87f7(281)]()[_0x3d87f7(282)](/\s/g, '');
}, exports[_0xca7f0c(283)] = _0x454f89 => {
    const _0x28ed64 = _0xca7f0c;
    return exports[_0x28ed64(278)](_0x454f89) === _0x28ed64(284);
}, exports[_0xca7f0c(285)] = _0x4a880d => {
    const _0x41bd5f = _0xca7f0c;
    return _0x4a880d != null && typeof _0x4a880d !== _0x41bd5f(276) && typeof _0x4a880d !== 'function';
}, exports[_0xca7f0c(286)] = (_0x3754ee, _0x1af90b, ..._0xb15ee8) => {
    const _0x34a6f4 = _0xca7f0c;
    if (typeof _0x1af90b === _0x34a6f4(287))
        return _0x1af90b[_0x34a6f4(279)](_0x3754ee, ..._0xb15ee8);
    return _0x1af90b;
}, exports[_0xca7f0c(288)] = (_0xd960b = []) => [
    ..._0xd960b[_0xca7f0c(280)](1),
    _0xd960b[0]
], exports[_0xca7f0c(289)] = (_0x453478 = []) => [
    _0x453478[_0xca7f0c(290)](),
    ..._0x453478
], exports[_0xca7f0c(291)] = (_0xfb77c2 = []) => {
    const _0x4b38c3 = _0xca7f0c;
    let _0x456717 = _0xfb77c2[_0x4b38c3(280)]();
    return _0x456717[_0x4b38c3(292)]((_0x3301db, _0x1d4748) => {
        const _0xdfd7d9 = _0x4b38c3;
        if (_0x3301db[_0xdfd7d9(293)] > _0x1d4748['index'])
            return 1;
        if (_0x3301db['index'] < _0x1d4748[_0xdfd7d9(293)])
            return -1;
        return 0;
    }), _0x456717;
}, exports[_0xca7f0c(294)] = (_0x611b82, _0x1af238, _0x4d2d09) => {
    const _0x3b3b45 = _0xca7f0c;
    let _0x1fcc50 = _0x611b82[_0x3b3b45(275)], _0x34d72b = _0x4d2d09 === _0x1fcc50 ? 0 : _0x4d2d09 < 0 ? _0x1fcc50 - 1 : _0x4d2d09, _0x32b5c0 = _0x611b82[_0x1af238];
    _0x611b82[_0x1af238] = _0x611b82[_0x34d72b], _0x611b82[_0x34d72b] = _0x32b5c0;
}, exports['width'] = (_0x2b6d8f, _0x348ad9 = 80) => {
    const _0x5c5635 = _0xca7f0c;
    let _0xd3caa0 = _0x2b6d8f && _0x2b6d8f[_0x5c5635(295)] ? _0x2b6d8f[_0x5c5635(295)] : _0x348ad9;
    _0x2b6d8f && typeof _0x2b6d8f['getWindowSize'] === 'function' && (_0xd3caa0 = _0x2b6d8f[_0x5c5635(296)]()[0]);
    if (process['platform'] === _0x5c5635(297))
        return _0xd3caa0 - 1;
    return _0xd3caa0;
}, exports['height'] = (_0x33d001, _0x37cbe4 = 20) => {
    const _0x587eb0 = _0xca7f0c;
    let _0x1f6860 = _0x33d001 && _0x33d001[_0x587eb0(298)] ? _0x33d001[_0x587eb0(298)] : _0x37cbe4;
    return _0x33d001 && typeof _0x33d001['getWindowSize'] === _0x587eb0(287) && (_0x1f6860 = _0x33d001[_0x587eb0(296)]()[1]), _0x1f6860;
}, exports[_0xca7f0c(299)] = (_0x38d383, _0x5b352a = {}) => {
    const _0x3e41da = _0xca7f0c;
    if (!_0x38d383)
        return _0x38d383;
    typeof _0x5b352a === 'number' && (_0x5b352a = { 'width': _0x5b352a });
    let {
            indent: indent = '',
            newline: newline = '\n' + indent,
            width: width = 80
        } = _0x5b352a, _0x22a83d = (newline + indent)[_0x3e41da(300)](/[^\S\n]/g) || [];
    width -= _0x22a83d[_0x3e41da(275)];
    let _0x56110e = _0x3e41da(301) + width + _0x3e41da(302), _0x5a170f = _0x38d383[_0x3e41da(303)](), _0x5ec470 = new RegExp(_0x56110e, 'g'), _0x49ab00 = _0x5a170f['match'](_0x5ec470) || [];
    _0x49ab00 = _0x49ab00['map'](_0x45c017 => _0x45c017[_0x3e41da(282)](/\n$/, ''));
    if (_0x5b352a[_0x3e41da(304)])
        _0x49ab00 = _0x49ab00[_0x3e41da(305)](_0x9f0764 => _0x9f0764['padEnd'](width, ' '));
    if (_0x5b352a[_0x3e41da(306)])
        _0x49ab00 = _0x49ab00[_0x3e41da(305)](_0x384c80 => _0x384c80[_0x3e41da(306)](width, ' '));
    return indent + _0x49ab00[_0x3e41da(307)](newline);
}, exports['unmute'] = _0x1d5e12 => {
    const _0x754de5 = _0xca7f0c;
    let _0x3e7417 = _0x1d5e12[_0x754de5(308)]['find'](_0x53a34e => colors[_0x754de5(309)][_0x754de5(310)][_0x754de5(311)](_0x53a34e));
    if (_0x3e7417)
        return colors[_0x3e7417];
    let _0x4f76e0 = _0x1d5e12[_0x754de5(308)][_0x754de5(312)](_0x300a81 => _0x300a81[_0x754de5(280)](2) === 'bg');
    if (_0x4f76e0)
        return colors[_0x3e7417[_0x754de5(280)](2)];
    return _0x490d0e => _0x490d0e;
}, exports[_0xca7f0c(313)] = _0x582ffd => _0x582ffd ? _0x582ffd[0][_0xca7f0c(314)]() + _0x582ffd[_0xca7f0c(280)](1) : '', exports[_0xca7f0c(315)] = _0x3071d8 => {
    const _0x2889a3 = _0xca7f0c;
    if (!_0x3071d8 || !_0x3071d8[_0x2889a3(308)])
        return _0x3071d8;
    let _0x28233f = _0x3071d8[_0x2889a3(308)][_0x2889a3(312)](_0x291e59 => colors[_0x2889a3(309)][_0x2889a3(310)][_0x2889a3(311)](_0x291e59));
    if (_0x28233f) {
        let _0x1a18ed = colors['bg' + exports[_0x2889a3(313)](_0x28233f)];
        return _0x1a18ed ? _0x1a18ed[_0x2889a3(316)] : _0x3071d8;
    }
    let _0x5cbaac = _0x3071d8[_0x2889a3(308)][_0x2889a3(312)](_0x4b9ee4 => _0x4b9ee4['slice'](0, 2) === 'bg');
    if (_0x5cbaac)
        return colors[_0x5cbaac[_0x2889a3(280)](2)[_0x2889a3(281)]()] || _0x3071d8;
    return colors[_0x2889a3(317)];
}, exports['complement'] = _0x5dfb87 => {
    const _0x46bb5e = _0xca7f0c;
    if (!_0x5dfb87 || !_0x5dfb87[_0x46bb5e(308)])
        return _0x5dfb87;
    let _0x448371 = _0x5dfb87[_0x46bb5e(308)][_0x46bb5e(312)](_0x4d2331 => colors['keys'][_0x46bb5e(310)][_0x46bb5e(311)](_0x4d2331)), _0x5a8f83 = _0x5dfb87[_0x46bb5e(308)][_0x46bb5e(312)](_0x14d38d => _0x14d38d['slice'](0, 2) === 'bg');
    if (_0x448371 && !_0x5a8f83)
        return colors[complements[_0x448371] || _0x448371];
    if (_0x5a8f83) {
        let _0x315331 = _0x5a8f83['slice'](2)[_0x46bb5e(281)](), _0x4fb066 = complements[_0x315331];
        if (!_0x4fb066)
            return _0x5dfb87;
        return colors['bg' + exports['pascal'](_0x4fb066)] || _0x5dfb87;
    }
    return colors[_0x46bb5e(317)];
}, exports[_0xca7f0c(318)] = _0xabe64c => {
    const _0x3770e8 = _0xca7f0c;
    let _0x45abd5 = _0xabe64c[_0x3770e8(319)](), _0x53dd0c = _0xabe64c[_0x3770e8(320)](), _0x5188d6 = _0x45abd5 >= 12 ? 'pm' : 'am';
    _0x45abd5 = _0x45abd5 % 12;
    let _0x303b81 = _0x45abd5 === 0 ? 12 : _0x45abd5, _0xb767ad = _0x53dd0c < 10 ? '0' + _0x53dd0c : _0x53dd0c;
    return _0x303b81 + ':' + _0xb767ad + ' ' + _0x5188d6;
}, exports['set'] = (_0x443c30 = {}, _0x578f9d = '', _0x1f448d) => {
    const _0x300199 = _0xca7f0c;
    return _0x578f9d[_0x300199(321)]('.')[_0x300199(322)]((_0x39855c, _0x310404, _0x231003, _0x44c2e) => {
        const _0x28dd50 = _0x300199;
        let _0x799b69 = _0x44c2e[_0x28dd50(275)] - 1 > _0x231003 ? _0x39855c[_0x310404] || {} : _0x1f448d;
        if (!exports[_0x28dd50(323)](_0x799b69) && _0x231003 < _0x44c2e[_0x28dd50(275)] - 1)
            _0x799b69 = {};
        return _0x39855c[_0x310404] = _0x799b69;
    }, _0x443c30);
}, exports[_0xca7f0c(324)] = (_0x45cde3 = {}, _0x4cb7ff = '', _0x43f7f5) => {
    const _0x239e33 = _0xca7f0c;
    let _0x2c0db4 = _0x45cde3[_0x4cb7ff] == null ? _0x4cb7ff[_0x239e33(321)]('.')[_0x239e33(322)]((_0x3fe7e6, _0x51d6bf) => _0x3fe7e6 && _0x3fe7e6[_0x51d6bf], _0x45cde3) : _0x45cde3[_0x4cb7ff];
    return _0x2c0db4 == null ? _0x43f7f5 : _0x2c0db4;
}, exports['mixin'] = (_0x46f875, _0x411138) => {
    const _0x58f2e9 = _0xca7f0c;
    if (!isObject(_0x46f875))
        return _0x411138;
    if (!isObject(_0x411138))
        return _0x46f875;
    for (let _0x1510a1 of Object[_0x58f2e9(309)](_0x411138)) {
        let _0x5395e2 = Object['getOwnPropertyDescriptor'](_0x411138, _0x1510a1);
        if (_0x5395e2[_0x58f2e9(325)]('value')) {
            if (_0x46f875['hasOwnProperty'](_0x1510a1) && isObject(_0x5395e2[_0x58f2e9(326)])) {
                let _0x58778b = Object[_0x58f2e9(327)](_0x46f875, _0x1510a1);
                isObject(_0x58778b[_0x58f2e9(326)]) ? _0x46f875[_0x1510a1] = exports[_0x58f2e9(328)]({}, _0x46f875[_0x1510a1], _0x411138[_0x1510a1]) : Reflect[_0x58f2e9(329)](_0x46f875, _0x1510a1, _0x5395e2);
            } else
                Reflect[_0x58f2e9(329)](_0x46f875, _0x1510a1, _0x5395e2);
        } else
            Reflect['defineProperty'](_0x46f875, _0x1510a1, _0x5395e2);
    }
    return _0x46f875;
}, exports['merge'] = (..._0x49395d) => {
    const _0x3c3b3f = _0xca7f0c;
    let _0x5e6f97 = {};
    for (let _0x1140b9 of _0x49395d)
        exports[_0x3c3b3f(330)](_0x5e6f97, _0x1140b9);
    return _0x5e6f97;
}, exports[_0xca7f0c(331)] = (_0x57959f, _0x46ca68) => {
    const _0x3f4c59 = _0xca7f0c;
    let _0x517e3f = _0x46ca68[_0x3f4c59(332)]['prototype'];
    for (let _0xdb5d6c of Object[_0x3f4c59(309)](_0x517e3f)) {
        let _0x488f60 = _0x517e3f[_0xdb5d6c];
        typeof _0x488f60 === _0x3f4c59(287) ? exports['define'](_0x57959f, _0xdb5d6c, _0x488f60['bind'](_0x46ca68)) : exports['define'](_0x57959f, _0xdb5d6c, _0x488f60);
    }
}, exports[_0xca7f0c(333)] = _0x2c441f => {
    const _0x565674 = _0xca7f0c, _0x324b71 = (_0x71031f, _0x597eab) => {
            const _0x270616 = _0x3d2a;
            if (called)
                return;
            called = !![], fns[_0x270616(334)](_0x485d47 => _0x485d47()), _0x71031f === !![] && process['exit'](128 + _0x597eab);
        };
    fns[_0x565674(275)] === 0 && (process[_0x565674(335)]('SIGTERM', _0x324b71[_0x565674(336)](null, !![], 15)), process['once'](_0x565674(337), _0x324b71[_0x565674(336)](null, !![], 2)), process['once'](_0x565674(338), _0x324b71)), fns[_0x565674(339)](_0x2c441f);
}, exports[_0xca7f0c(340)] = (_0x12ee20, _0x5bc96f, _0x5b3e5b) => {
    const _0x215f51 = _0xca7f0c;
    Reflect[_0x215f51(329)](_0x12ee20, _0x5bc96f, { 'value': _0x5b3e5b });
}, exports['defineExport'] = (_0x37d64d, _0x1e94c9, _0x4c3fb7) => {
    const _0x4f8a64 = _0xca7f0c;
    let _0x3c1577;
    Reflect[_0x4f8a64(329)](_0x37d64d, _0x1e94c9, {
        'enumerable': !![],
        'configurable': !![],
        'set'(_0x28fc6f) {
            _0x3c1577 = _0x28fc6f;
        },
        'get'() {
            return _0x3c1577 ? _0x3c1577() : _0x4c3fb7();
        }
    });
};