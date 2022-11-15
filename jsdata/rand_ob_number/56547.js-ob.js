'use strict';
require('../common');
const assert = require('assert'), util = require('util');
function findInGraph(_0x1ce997, _0x16432d, _0x2697ff) {
    let _0x4d881b = 0x74c + 0xe13 + 0x155f * -0x1;
    for (let _0x18d178 = -0x282 * -0x4 + -0x3 * -0x8a0 + -0x3 * 0xbf8; _0x18d178 < _0x1ce997['length']; _0x18d178++) {
        const _0x4a3597 = _0x1ce997[_0x18d178];
        if (_0x4a3597['type'] === _0x16432d)
            _0x4d881b++;
        if (_0x4d881b === _0x2697ff)
            return _0x4a3597;
    }
}
function pruneTickObjects(_0x342803) {
    const _0x298239 = {
        'found': !![],
        'index': null,
        'data': null
    };
    if (!Array['isArray'](_0x342803))
        return _0x342803;
    while (_0x298239['found']) {
        for (let _0x39b3c9 = -0x2635 + 0xa9f * 0x1 + 0x1b96; _0x39b3c9 < _0x342803['length']; _0x39b3c9++) {
            if (_0x342803[_0x39b3c9]['type'] === 'TickObject') {
                _0x298239['index'] = _0x39b3c9;
                break;
            } else
                _0x39b3c9 + (0xa79 * 0x2 + 0x9a2 + -0x1e93) >= _0x342803['length'] && (_0x298239['found'] = ![]);
        }
        if (_0x298239['found']) {
            _0x298239['data'] = _0x342803[_0x298239['index']];
            const _0x1922be = {
                'new': _0x298239['data']['triggerAsyncId'],
                'old': _0x298239['data']['uid']
            };
            _0x342803['forEach'](function _0x231ddc(_0x51be14) {
                if (_0x51be14['triggerAsyncId'] === _0x1922be['old'])
                    _0x51be14['triggerAsyncId'] = _0x1922be['new'];
            }), _0x342803['splice'](_0x298239['index'], -0x18d5 + 0x625 * -0x1 + -0x67 * -0x4d);
        }
    }
    return _0x342803;
}
module['exports'] = function verifyGraph(_0x2f4739, _0x2b3acb) {
    pruneTickObjects(_0x2f4739);
    const _0xd9aa1e = {}, _0x249e93 = {}, _0x3e95de = {}, _0x574318 = [], _0xc912f3 = pruneTickObjects(_0x2f4739['activities']);
    _0xc912f3['forEach'](_0x30a6a8);
    function _0x30a6a8(_0x2cb065) {
        if (!_0x3e95de[_0x2cb065['type']])
            _0x3e95de[_0x2cb065['type']] = -0x2 * 0x33f + -0x1721 + 0x1d9f;
        _0x3e95de[_0x2cb065['type']]++;
        const _0xe2841d = findInGraph(_0x2b3acb, _0x2cb065['type'], _0x3e95de[_0x2cb065['type']]);
        if (_0xe2841d == null)
            return;
        _0xd9aa1e[_0xe2841d['id']] = _0x2cb065['uid'], _0x249e93[_0x2cb065['uid']] = _0xe2841d['id'];
        if (_0xe2841d['triggerAsyncId'] == null)
            return;
        const _0x33eb8d = _0xd9aa1e[_0xe2841d['triggerAsyncId']];
        if (_0x2cb065['triggerAsyncId'] === _0x33eb8d)
            return;
        _0x574318['push']({
            'id': _0xe2841d['id'],
            'expectedTid': _0xe2841d['triggerAsyncId'],
            'actualTid': _0x249e93[_0x2cb065['triggerAsyncId']]
        });
    }
    _0x574318['length'] && _0x574318['forEach'](_0x5aef3b => console['error']('\x27' + _0x5aef3b['id'] + '\x27\x20expected\x20to\x20be\x20triggered\x20by\x20\x27' + _0x5aef3b['expectedTid'] + '\x27,\x20' + ('but\x20was\x20triggered\x20by\x20\x27' + _0x5aef3b['actualTid'] + '\x27\x20instead.')));
    assert['strictEqual'](_0x574318['length'], -0x1 * -0x2593 + -0x1f31 + -0x2b * 0x26);
    const _0x213da1 = Object['create'](null);
    for (let _0x2dabf6 = -0x2 * -0xe5d + -0x5 * 0x3c5 + -0x34b * 0x3; _0x2dabf6 < _0x2b3acb['length']; _0x2dabf6++) {
        if (_0x213da1[_0x2b3acb[_0x2dabf6]['type']] == null)
            _0x213da1[_0x2b3acb[_0x2dabf6]['type']] = -0x1 * -0x737 + -0x11 * 0x83 + 0x17c;
        _0x213da1[_0x2b3acb[_0x2dabf6]['type']]++;
    }
    for (const _0xd3008c in _0x213da1) {
        assert['ok'](_0x3e95de[_0xd3008c] >= _0x213da1[_0xd3008c], 'Type\x20\x27' + _0xd3008c + '\x27:\x20expecting:\x20' + _0x213da1[_0xd3008c] + '\x20' + ('found:\x20' + _0x3e95de[_0xd3008c]));
    }
};
function inspect(_0x3ec7de, _0x170297) {
    console['error'](util['inspect'](_0x3ec7de, ![], _0x170297 || 0x1210 + 0xf * 0x283 + 0x2 * -0x1bdc, !![]));
}
module['exports']['printGraph'] = function printGraph(_0x35516e) {
    const _0x211780 = {}, _0x580435 = {}, _0x5912ee = pruneTickObjects(_0x35516e['activities']), _0x53fdde = [];
    _0x5912ee['forEach'](_0x30bc87);
    function _0x30bc87(_0x58b91b) {
        const _0x29ed7b = _0x58b91b['type']['replace'](/WRAP/, '')['toLowerCase']();
        if (!_0x211780[_0x29ed7b])
            _0x211780[_0x29ed7b] = 0x22ea * 0x1 + -0x1e1a + 0x1 * -0x4cf;
        const _0x4d9c88 = _0x29ed7b + ':' + _0x211780[_0x29ed7b]++;
        _0x580435[_0x58b91b['uid']] = _0x4d9c88;
        const _0x3f94ad = _0x580435[_0x58b91b['triggerAsyncId']] || null;
        _0x53fdde['push']({
            'type': _0x58b91b['type'],
            'id': _0x4d9c88,
            'triggerAsyncId': _0x3f94ad
        });
    }
    inspect(_0x53fdde);
};
