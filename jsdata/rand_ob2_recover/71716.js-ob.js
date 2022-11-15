const r = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
module[_0x44d539(363)] = d, module[_0x44d539(363)]['default'] = d;
const t = {
        'exposes': { '$ref': _0x44d539(364) },
        'filename': {
            'type': _0x44d539(365),
            'absolutePath': !1
        },
        'library': { '$ref': _0x44d539(366) },
        'name': { 'type': _0x44d539(365) },
        'remoteType': { 'oneOf': [{ '$ref': _0x44d539(367) }] },
        'remotes': { '$ref': _0x44d539(368) },
        'runtime': { '$ref': _0x44d539(369) },
        'shareScope': {
            'type': _0x44d539(365),
            'minLength': 1
        },
        'shared': { '$ref': _0x44d539(370) }
    }, e = Object[_0x44d539(371)][_0x44d539(372)];
function n(_0x4d92e6, {
    instancePath: _0x24a1aa = '',
    parentData: _0x10e632,
    parentDataProperty: _0x261b84,
    rootData: _0x15ccf5 = _0x4d92e6
} = {}) {
    const _0x56512f = _0x44d539;
    if (!Array[_0x56512f(373)](_0x4d92e6))
        return n[_0x56512f(374)] = [{ 'params': { 'type': 'array' } }], !1;
    {
        const _0x37fa44 = _0x4d92e6[_0x56512f(375)];
        for (let _0x1f67b8 = 0; _0x1f67b8 < _0x37fa44; _0x1f67b8++) {
            let _0x5c6e42 = _0x4d92e6[_0x1f67b8];
            const _0x40f12c = 0;
            if (_0x56512f(365) != typeof _0x5c6e42)
                return n[_0x56512f(374)] = [{ 'params': { 'type': _0x56512f(365) } }], !1;
            if (_0x5c6e42[_0x56512f(375)] < 1)
                return n[_0x56512f(374)] = [{ 'params': {} }], !1;
            if (0 !== _0x40f12c)
                break;
        }
    }
    return n[_0x56512f(374)] = null, !0;
}
function _0x4f04(_0x3228cd, _0x15fa99) {
    return _0x4f04 = function (_0x566bad, _0x4f0475) {
        _0x566bad = _0x566bad - 352;
        let _0x2a8670 = _0x566b[_0x566bad];
        return _0x2a8670;
    }, _0x4f04(_0x3228cd, _0x15fa99);
}
function a(_0x1b2d63, {
    instancePath: _0x8e5fdf = '',
    parentData: _0x23f5eb,
    parentDataProperty: _0x3b8333,
    rootData: _0x77b4be = _0x1b2d63
} = {}) {
    const _0x1c02ce = _0x44d539;
    let _0x11caa4 = null, _0x18af6a = 0;
    if (0 === _0x18af6a) {
        if (!_0x1b2d63 || 'object' != typeof _0x1b2d63 || Array[_0x1c02ce(373)](_0x1b2d63))
            return a[_0x1c02ce(374)] = [{ 'params': { 'type': _0x1c02ce(376) } }], !1;
        {
            let _0x475686;
            if (void 0 === _0x1b2d63['import'] && (_0x475686 = _0x1c02ce(377)))
                return a[_0x1c02ce(374)] = [{ 'params': { 'missingProperty': _0x475686 } }], !1;
            {
                const _0x2c9d51 = _0x18af6a;
                for (const _0x16e4f8 in _0x1b2d63)
                    if ('import' !== _0x16e4f8 && _0x1c02ce(378) !== _0x16e4f8)
                        return a['errors'] = [{ 'params': { 'additionalProperty': _0x16e4f8 } }], !1;
                if (_0x2c9d51 === _0x18af6a) {
                    if (void 0 !== _0x1b2d63['import']) {
                        let _0x6136f3 = _0x1b2d63[_0x1c02ce(377)];
                        const _0x376162 = _0x18af6a, _0x2744b5 = _0x18af6a;
                        let _0x2df77b = !1;
                        const _0x1a4a37 = _0x18af6a;
                        if (_0x18af6a == _0x18af6a) {
                            if (_0x1c02ce(365) == typeof _0x6136f3) {
                                if (_0x6136f3[_0x1c02ce(375)] < 1) {
                                    const _0x2ee8e3 = { 'params': {} };
                                    null === _0x11caa4 ? _0x11caa4 = [_0x2ee8e3] : _0x11caa4['push'](_0x2ee8e3), _0x18af6a++;
                                }
                            } else {
                                const _0x17813d = { 'params': { 'type': _0x1c02ce(365) } };
                                null === _0x11caa4 ? _0x11caa4 = [_0x17813d] : _0x11caa4['push'](_0x17813d), _0x18af6a++;
                            }
                        }
                        var _0x4f3a22 = _0x1a4a37 === _0x18af6a;
                        if (_0x2df77b = _0x2df77b || _0x4f3a22, !_0x2df77b) {
                            const _0xed9c6a = _0x18af6a;
                            n(_0x6136f3, {
                                'instancePath': _0x8e5fdf + '/import',
                                'parentData': _0x1b2d63,
                                'parentDataProperty': _0x1c02ce(377),
                                'rootData': _0x77b4be
                            }) || (_0x11caa4 = null === _0x11caa4 ? n[_0x1c02ce(374)] : _0x11caa4['concat'](n['errors']), _0x18af6a = _0x11caa4[_0x1c02ce(375)]), _0x4f3a22 = _0xed9c6a === _0x18af6a, _0x2df77b = _0x2df77b || _0x4f3a22;
                        }
                        if (!_0x2df77b) {
                            const _0x244fb5 = { 'params': {} };
                            return null === _0x11caa4 ? _0x11caa4 = [_0x244fb5] : _0x11caa4['push'](_0x244fb5), _0x18af6a++, a['errors'] = _0x11caa4, !1;
                        }
                        _0x18af6a = _0x2744b5, null !== _0x11caa4 && (_0x2744b5 ? _0x11caa4[_0x1c02ce(375)] = _0x2744b5 : _0x11caa4 = null);
                        var _0x5a3220 = _0x376162 === _0x18af6a;
                    } else
                        _0x5a3220 = !0;
                    if (_0x5a3220) {
                        if (void 0 !== _0x1b2d63[_0x1c02ce(378)]) {
                            const _0x4eb6ae = _0x18af6a;
                            if (_0x1c02ce(365) != typeof _0x1b2d63[_0x1c02ce(378)])
                                return a[_0x1c02ce(374)] = [{ 'params': { 'type': _0x1c02ce(365) } }], !1;
                            _0x5a3220 = _0x4eb6ae === _0x18af6a;
                        } else
                            _0x5a3220 = !0;
                    }
                }
            }
        }
    }
    return a[_0x1c02ce(374)] = _0x11caa4, 0 === _0x18af6a;
}
function s(_0x4a0c70, {
    instancePath: _0x31502d = '',
    parentData: _0x1fb646,
    parentDataProperty: _0x9ae3b8,
    rootData: _0x166dfe = _0x4a0c70
} = {}) {
    const _0x3fccf7 = _0x44d539;
    let _0x5d3169 = null, _0x44c3f1 = 0;
    if (0 === _0x44c3f1) {
        if (!_0x4a0c70 || _0x3fccf7(376) != typeof _0x4a0c70 || Array[_0x3fccf7(373)](_0x4a0c70))
            return s[_0x3fccf7(374)] = [{ 'params': { 'type': _0x3fccf7(376) } }], !1;
        for (const _0x4a74d2 in _0x4a0c70) {
            let _0xab0603 = _0x4a0c70[_0x4a74d2];
            const _0x1816ea = _0x44c3f1, _0x1cc489 = _0x44c3f1;
            let _0x187426 = !1;
            const _0x11ca77 = _0x44c3f1;
            a(_0xab0603, {
                'instancePath': _0x31502d + '/' + _0x4a74d2['replace'](/~/g, '~0')[_0x3fccf7(379)](/\//g, '~1'),
                'parentData': _0x4a0c70,
                'parentDataProperty': _0x4a74d2,
                'rootData': _0x166dfe
            }) || (_0x5d3169 = null === _0x5d3169 ? a[_0x3fccf7(374)] : _0x5d3169[_0x3fccf7(380)](a[_0x3fccf7(374)]), _0x44c3f1 = _0x5d3169[_0x3fccf7(375)]);
            var _0x2debb2 = _0x11ca77 === _0x44c3f1;
            if (_0x187426 = _0x187426 || _0x2debb2, !_0x187426) {
                const _0x393f01 = _0x44c3f1;
                if (_0x44c3f1 == _0x44c3f1) {
                    if (_0x3fccf7(365) == typeof _0xab0603) {
                        if (_0xab0603['length'] < 1) {
                            const _0xd6663a = { 'params': {} };
                            null === _0x5d3169 ? _0x5d3169 = [_0xd6663a] : _0x5d3169[_0x3fccf7(381)](_0xd6663a), _0x44c3f1++;
                        }
                    } else {
                        const _0xfad382 = { 'params': { 'type': _0x3fccf7(365) } };
                        null === _0x5d3169 ? _0x5d3169 = [_0xfad382] : _0x5d3169[_0x3fccf7(381)](_0xfad382), _0x44c3f1++;
                    }
                }
                if (_0x2debb2 = _0x393f01 === _0x44c3f1, _0x187426 = _0x187426 || _0x2debb2, !_0x187426) {
                    const _0x196dfa = _0x44c3f1;
                    n(_0xab0603, {
                        'instancePath': _0x31502d + '/' + _0x4a74d2[_0x3fccf7(379)](/~/g, '~0')[_0x3fccf7(379)](/\//g, '~1'),
                        'parentData': _0x4a0c70,
                        'parentDataProperty': _0x4a74d2,
                        'rootData': _0x166dfe
                    }) || (_0x5d3169 = null === _0x5d3169 ? n[_0x3fccf7(374)] : _0x5d3169[_0x3fccf7(380)](n['errors']), _0x44c3f1 = _0x5d3169['length']), _0x2debb2 = _0x196dfa === _0x44c3f1, _0x187426 = _0x187426 || _0x2debb2;
                }
            }
            if (!_0x187426) {
                const _0x1cea3f = { 'params': {} };
                return null === _0x5d3169 ? _0x5d3169 = [_0x1cea3f] : _0x5d3169[_0x3fccf7(381)](_0x1cea3f), _0x44c3f1++, s[_0x3fccf7(374)] = _0x5d3169, !1;
            }
            if (_0x44c3f1 = _0x1cc489, null !== _0x5d3169 && (_0x1cc489 ? _0x5d3169[_0x3fccf7(375)] = _0x1cc489 : _0x5d3169 = null), _0x1816ea !== _0x44c3f1)
                break;
        }
    }
    return s[_0x3fccf7(374)] = _0x5d3169, 0 === _0x44c3f1;
}
function o(_0x6335ff, {
    instancePath: _0x4f1653 = '',
    parentData: _0x413abe,
    parentDataProperty: _0x363916,
    rootData: _0x49b3e9 = _0x6335ff
} = {}) {
    const _0x5906a0 = _0x44d539;
    let _0x47cd3e = null, _0x111068 = 0;
    const _0x2c8a6f = _0x111068;
    let _0x54b9be = !1;
    const _0x50fd84 = _0x111068;
    if (_0x111068 === _0x50fd84) {
        if (Array[_0x5906a0(373)](_0x6335ff)) {
            const _0x328d82 = _0x6335ff[_0x5906a0(375)];
            for (let _0x148b18 = 0; _0x148b18 < _0x328d82; _0x148b18++) {
                let _0x440614 = _0x6335ff[_0x148b18];
                const _0x41a6e1 = _0x111068, _0x36998a = _0x111068;
                let _0x716a6f = !1;
                const _0x40a0eb = _0x111068;
                if (_0x111068 == _0x111068) {
                    if (_0x5906a0(365) == typeof _0x440614) {
                        if (_0x440614['length'] < 1) {
                            const _0x315209 = { 'params': {} };
                            null === _0x47cd3e ? _0x47cd3e = [_0x315209] : _0x47cd3e['push'](_0x315209), _0x111068++;
                        }
                    } else {
                        const _0x230f88 = { 'params': { 'type': 'string' } };
                        null === _0x47cd3e ? _0x47cd3e = [_0x230f88] : _0x47cd3e[_0x5906a0(381)](_0x230f88), _0x111068++;
                    }
                }
                var _0x300dc7 = _0x40a0eb === _0x111068;
                if (_0x716a6f = _0x716a6f || _0x300dc7, !_0x716a6f) {
                    const _0x238972 = _0x111068;
                    s(_0x440614, {
                        'instancePath': _0x4f1653 + '/' + _0x148b18,
                        'parentData': _0x6335ff,
                        'parentDataProperty': _0x148b18,
                        'rootData': _0x49b3e9
                    }) || (_0x47cd3e = null === _0x47cd3e ? s['errors'] : _0x47cd3e[_0x5906a0(380)](s[_0x5906a0(374)]), _0x111068 = _0x47cd3e[_0x5906a0(375)]), _0x300dc7 = _0x238972 === _0x111068, _0x716a6f = _0x716a6f || _0x300dc7;
                }
                if (_0x716a6f)
                    _0x111068 = _0x36998a, null !== _0x47cd3e && (_0x36998a ? _0x47cd3e['length'] = _0x36998a : _0x47cd3e = null);
                else {
                    const _0x29a09e = { 'params': {} };
                    null === _0x47cd3e ? _0x47cd3e = [_0x29a09e] : _0x47cd3e[_0x5906a0(381)](_0x29a09e), _0x111068++;
                }
                if (_0x41a6e1 !== _0x111068)
                    break;
            }
        } else {
            const _0x35c076 = { 'params': { 'type': _0x5906a0(382) } };
            null === _0x47cd3e ? _0x47cd3e = [_0x35c076] : _0x47cd3e[_0x5906a0(381)](_0x35c076), _0x111068++;
        }
    }
    var _0x38eace = _0x50fd84 === _0x111068;
    if (_0x54b9be = _0x54b9be || _0x38eace, !_0x54b9be) {
        const _0x53014f = _0x111068;
        s(_0x6335ff, {
            'instancePath': _0x4f1653,
            'parentData': _0x413abe,
            'parentDataProperty': _0x363916,
            'rootData': _0x49b3e9
        }) || (_0x47cd3e = null === _0x47cd3e ? s[_0x5906a0(374)] : _0x47cd3e[_0x5906a0(380)](s[_0x5906a0(374)]), _0x111068 = _0x47cd3e[_0x5906a0(375)]), _0x38eace = _0x53014f === _0x111068, _0x54b9be = _0x54b9be || _0x38eace;
    }
    if (!_0x54b9be) {
        const _0x2ef210 = { 'params': {} };
        return null === _0x47cd3e ? _0x47cd3e = [_0x2ef210] : _0x47cd3e[_0x5906a0(381)](_0x2ef210), _0x111068++, o[_0x5906a0(374)] = _0x47cd3e, !1;
    }
    return _0x111068 = _0x2c8a6f, null !== _0x47cd3e && (_0x2c8a6f ? _0x47cd3e['length'] = _0x2c8a6f : _0x47cd3e = null), o[_0x5906a0(374)] = _0x47cd3e, 0 === _0x111068;
}
function l(_0x33a8dd, {
    instancePath: _0x128a35 = '',
    parentData: _0x244aa9,
    parentDataProperty: _0x3aec3d,
    rootData: _0x5765a0 = _0x33a8dd
} = {}) {
    const _0x1eaaf7 = _0x44d539;
    let _0x47dfb5 = null, _0x46ac15 = 0;
    const _0x8ba485 = _0x46ac15;
    let _0x1f72ae = !1;
    const _0x4a191c = _0x46ac15;
    if ('string' != typeof _0x33a8dd) {
        const _0x3c92c6 = { 'params': { 'type': _0x1eaaf7(365) } };
        null === _0x47dfb5 ? _0x47dfb5 = [_0x3c92c6] : _0x47dfb5['push'](_0x3c92c6), _0x46ac15++;
    }
    var _0x309e85 = _0x4a191c === _0x46ac15;
    if (_0x1f72ae = _0x1f72ae || _0x309e85, !_0x1f72ae) {
        const _0x2479b4 = _0x46ac15;
        if (_0x46ac15 == _0x46ac15) {
            if (_0x33a8dd && 'object' == typeof _0x33a8dd && !Array[_0x1eaaf7(373)](_0x33a8dd)) {
                const _0x2cd019 = _0x46ac15;
                for (const _0xbc960 in _0x33a8dd)
                    if (_0x1eaaf7(383) !== _0xbc960 && 'commonjs' !== _0xbc960 && _0x1eaaf7(384) !== _0xbc960 && _0x1eaaf7(385) !== _0xbc960) {
                        const _0x59f075 = { 'params': { 'additionalProperty': _0xbc960 } };
                        null === _0x47dfb5 ? _0x47dfb5 = [_0x59f075] : _0x47dfb5[_0x1eaaf7(381)](_0x59f075), _0x46ac15++;
                        break;
                    }
                if (_0x2cd019 === _0x46ac15) {
                    if (void 0 !== _0x33a8dd[_0x1eaaf7(383)]) {
                        const _0x13742b = _0x46ac15;
                        if (_0x1eaaf7(365) != typeof _0x33a8dd[_0x1eaaf7(383)]) {
                            const _0x122cef = { 'params': { 'type': _0x1eaaf7(365) } };
                            null === _0x47dfb5 ? _0x47dfb5 = [_0x122cef] : _0x47dfb5['push'](_0x122cef), _0x46ac15++;
                        }
                        var _0x449581 = _0x13742b === _0x46ac15;
                    } else
                        _0x449581 = !0;
                    if (_0x449581) {
                        if (void 0 !== _0x33a8dd['commonjs']) {
                            const _0x4f9767 = _0x46ac15;
                            if (_0x1eaaf7(365) != typeof _0x33a8dd[_0x1eaaf7(386)]) {
                                const _0x10b00f = { 'params': { 'type': _0x1eaaf7(365) } };
                                null === _0x47dfb5 ? _0x47dfb5 = [_0x10b00f] : _0x47dfb5['push'](_0x10b00f), _0x46ac15++;
                            }
                            _0x449581 = _0x4f9767 === _0x46ac15;
                        } else
                            _0x449581 = !0;
                        if (_0x449581) {
                            if (void 0 !== _0x33a8dd['commonjs2']) {
                                const _0x59462b = _0x46ac15;
                                if (_0x1eaaf7(365) != typeof _0x33a8dd[_0x1eaaf7(384)]) {
                                    const _0x50ef76 = { 'params': { 'type': _0x1eaaf7(365) } };
                                    null === _0x47dfb5 ? _0x47dfb5 = [_0x50ef76] : _0x47dfb5['push'](_0x50ef76), _0x46ac15++;
                                }
                                _0x449581 = _0x59462b === _0x46ac15;
                            } else
                                _0x449581 = !0;
                            if (_0x449581) {
                                if (void 0 !== _0x33a8dd[_0x1eaaf7(385)]) {
                                    const _0x509ec2 = _0x46ac15;
                                    if (_0x1eaaf7(365) != typeof _0x33a8dd[_0x1eaaf7(385)]) {
                                        const _0x4592da = { 'params': { 'type': _0x1eaaf7(365) } };
                                        null === _0x47dfb5 ? _0x47dfb5 = [_0x4592da] : _0x47dfb5[_0x1eaaf7(381)](_0x4592da), _0x46ac15++;
                                    }
                                    _0x449581 = _0x509ec2 === _0x46ac15;
                                } else
                                    _0x449581 = !0;
                            }
                        }
                    }
                }
            } else {
                const _0x36fbbd = { 'params': { 'type': 'object' } };
                null === _0x47dfb5 ? _0x47dfb5 = [_0x36fbbd] : _0x47dfb5[_0x1eaaf7(381)](_0x36fbbd), _0x46ac15++;
            }
        }
        _0x309e85 = _0x2479b4 === _0x46ac15, _0x1f72ae = _0x1f72ae || _0x309e85;
    }
    if (!_0x1f72ae) {
        const _0x5553a6 = { 'params': {} };
        return null === _0x47dfb5 ? _0x47dfb5 = [_0x5553a6] : _0x47dfb5['push'](_0x5553a6), _0x46ac15++, l[_0x1eaaf7(374)] = _0x47dfb5, !1;
    }
    return _0x46ac15 = _0x8ba485, null !== _0x47dfb5 && (_0x8ba485 ? _0x47dfb5[_0x1eaaf7(375)] = _0x8ba485 : _0x47dfb5 = null), l['errors'] = _0x47dfb5, 0 === _0x46ac15;
}
function i(_0x516d78, {
    instancePath: _0x36c978 = '',
    parentData: _0xef1d8,
    parentDataProperty: _0x351461,
    rootData: _0x1c2b10 = _0x516d78
} = {}) {
    const _0x5d88bb = _0x44d539;
    let _0xcfde60 = null, _0x37612d = 0;
    const _0x442477 = _0x37612d;
    let _0x1bdf08 = !1;
    const _0x3fc2b5 = _0x37612d;
    if (_0x37612d === _0x3fc2b5) {
        if (Array[_0x5d88bb(373)](_0x516d78)) {
            if (_0x516d78[_0x5d88bb(375)] < 1) {
                const _0x11fc28 = { 'params': { 'limit': 1 } };
                null === _0xcfde60 ? _0xcfde60 = [_0x11fc28] : _0xcfde60[_0x5d88bb(381)](_0x11fc28), _0x37612d++;
            } else {
                const _0x264c3c = _0x516d78[_0x5d88bb(375)];
                for (let _0x44855c = 0; _0x44855c < _0x264c3c; _0x44855c++) {
                    let _0x432cc2 = _0x516d78[_0x44855c];
                    const _0x426d23 = _0x37612d;
                    if (_0x37612d === _0x426d23) {
                        if (_0x5d88bb(365) == typeof _0x432cc2) {
                            if (_0x432cc2['length'] < 1) {
                                const _0x170f0c = { 'params': {} };
                                null === _0xcfde60 ? _0xcfde60 = [_0x170f0c] : _0xcfde60['push'](_0x170f0c), _0x37612d++;
                            }
                        } else {
                            const _0x5be8d7 = { 'params': { 'type': 'string' } };
                            null === _0xcfde60 ? _0xcfde60 = [_0x5be8d7] : _0xcfde60[_0x5d88bb(381)](_0x5be8d7), _0x37612d++;
                        }
                    }
                    if (_0x426d23 !== _0x37612d)
                        break;
                }
            }
        } else {
            const _0xa13562 = { 'params': { 'type': _0x5d88bb(382) } };
            null === _0xcfde60 ? _0xcfde60 = [_0xa13562] : _0xcfde60[_0x5d88bb(381)](_0xa13562), _0x37612d++;
        }
    }
    var _0x57a864 = _0x3fc2b5 === _0x37612d;
    if (_0x1bdf08 = _0x1bdf08 || _0x57a864, !_0x1bdf08) {
        const _0x379ee6 = _0x37612d;
        if (_0x37612d === _0x379ee6) {
            if ('string' == typeof _0x516d78) {
                if (_0x516d78['length'] < 1) {
                    const _0x519160 = { 'params': {} };
                    null === _0xcfde60 ? _0xcfde60 = [_0x519160] : _0xcfde60[_0x5d88bb(381)](_0x519160), _0x37612d++;
                }
            } else {
                const _0x523af2 = { 'params': { 'type': _0x5d88bb(365) } };
                null === _0xcfde60 ? _0xcfde60 = [_0x523af2] : _0xcfde60[_0x5d88bb(381)](_0x523af2), _0x37612d++;
            }
        }
        if (_0x57a864 = _0x379ee6 === _0x37612d, _0x1bdf08 = _0x1bdf08 || _0x57a864, !_0x1bdf08) {
            const _0x13fd67 = _0x37612d;
            if (_0x37612d == _0x37612d) {
                if (_0x516d78 && 'object' == typeof _0x516d78 && !Array[_0x5d88bb(373)](_0x516d78)) {
                    const _0x2eba5f = _0x37612d;
                    for (const _0x2c0b25 in _0x516d78)
                        if ('amd' !== _0x2c0b25 && _0x5d88bb(386) !== _0x2c0b25 && _0x5d88bb(385) !== _0x2c0b25) {
                            const _0x58a853 = { 'params': { 'additionalProperty': _0x2c0b25 } };
                            null === _0xcfde60 ? _0xcfde60 = [_0x58a853] : _0xcfde60[_0x5d88bb(381)](_0x58a853), _0x37612d++;
                            break;
                        }
                    if (_0x2eba5f === _0x37612d) {
                        if (void 0 !== _0x516d78[_0x5d88bb(383)]) {
                            let _0x1baf60 = _0x516d78[_0x5d88bb(383)];
                            const _0x32cfb1 = _0x37612d;
                            if (_0x37612d === _0x32cfb1) {
                                if (_0x5d88bb(365) == typeof _0x1baf60) {
                                    if (_0x1baf60[_0x5d88bb(375)] < 1) {
                                        const _0x3bcab1 = { 'params': {} };
                                        null === _0xcfde60 ? _0xcfde60 = [_0x3bcab1] : _0xcfde60[_0x5d88bb(381)](_0x3bcab1), _0x37612d++;
                                    }
                                } else {
                                    const _0x4dc991 = { 'params': { 'type': _0x5d88bb(365) } };
                                    null === _0xcfde60 ? _0xcfde60 = [_0x4dc991] : _0xcfde60[_0x5d88bb(381)](_0x4dc991), _0x37612d++;
                                }
                            }
                            var _0x130421 = _0x32cfb1 === _0x37612d;
                        } else
                            _0x130421 = !0;
                        if (_0x130421) {
                            if (void 0 !== _0x516d78['commonjs']) {
                                let _0x163511 = _0x516d78[_0x5d88bb(386)];
                                const _0x330f9c = _0x37612d;
                                if (_0x37612d === _0x330f9c) {
                                    if ('string' == typeof _0x163511) {
                                        if (_0x163511[_0x5d88bb(375)] < 1) {
                                            const _0x199a92 = { 'params': {} };
                                            null === _0xcfde60 ? _0xcfde60 = [_0x199a92] : _0xcfde60[_0x5d88bb(381)](_0x199a92), _0x37612d++;
                                        }
                                    } else {
                                        const _0xc79a6 = { 'params': { 'type': 'string' } };
                                        null === _0xcfde60 ? _0xcfde60 = [_0xc79a6] : _0xcfde60['push'](_0xc79a6), _0x37612d++;
                                    }
                                }
                                _0x130421 = _0x330f9c === _0x37612d;
                            } else
                                _0x130421 = !0;
                            if (_0x130421) {
                                if (void 0 !== _0x516d78[_0x5d88bb(385)]) {
                                    let _0x10c919 = _0x516d78[_0x5d88bb(385)];
                                    const _0x39bb7c = _0x37612d, _0x4db184 = _0x37612d;
                                    let _0x1e813e = !1;
                                    const _0x420b2c = _0x37612d;
                                    if (_0x37612d === _0x420b2c) {
                                        if (Array[_0x5d88bb(373)](_0x10c919)) {
                                            const _0x266f1f = _0x10c919[_0x5d88bb(375)];
                                            for (let _0x467374 = 0; _0x467374 < _0x266f1f; _0x467374++) {
                                                let _0x112418 = _0x10c919[_0x467374];
                                                const _0xd34b6d = _0x37612d;
                                                if (_0x37612d === _0xd34b6d) {
                                                    if (_0x5d88bb(365) == typeof _0x112418) {
                                                        if (_0x112418['length'] < 1) {
                                                            const _0x1b0035 = { 'params': {} };
                                                            null === _0xcfde60 ? _0xcfde60 = [_0x1b0035] : _0xcfde60[_0x5d88bb(381)](_0x1b0035), _0x37612d++;
                                                        }
                                                    } else {
                                                        const _0x4b7000 = { 'params': { 'type': _0x5d88bb(365) } };
                                                        null === _0xcfde60 ? _0xcfde60 = [_0x4b7000] : _0xcfde60[_0x5d88bb(381)](_0x4b7000), _0x37612d++;
                                                    }
                                                }
                                                if (_0xd34b6d !== _0x37612d)
                                                    break;
                                            }
                                        } else {
                                            const _0x8bee13 = { 'params': { 'type': 'array' } };
                                            null === _0xcfde60 ? _0xcfde60 = [_0x8bee13] : _0xcfde60[_0x5d88bb(381)](_0x8bee13), _0x37612d++;
                                        }
                                    }
                                    var _0x5252ed = _0x420b2c === _0x37612d;
                                    if (_0x1e813e = _0x1e813e || _0x5252ed, !_0x1e813e) {
                                        const _0x2613e5 = _0x37612d;
                                        if (_0x37612d === _0x2613e5) {
                                            if (_0x5d88bb(365) == typeof _0x10c919) {
                                                if (_0x10c919[_0x5d88bb(375)] < 1) {
                                                    const _0x45e116 = { 'params': {} };
                                                    null === _0xcfde60 ? _0xcfde60 = [_0x45e116] : _0xcfde60[_0x5d88bb(381)](_0x45e116), _0x37612d++;
                                                }
                                            } else {
                                                const _0x2391f0 = { 'params': { 'type': _0x5d88bb(365) } };
                                                null === _0xcfde60 ? _0xcfde60 = [_0x2391f0] : _0xcfde60[_0x5d88bb(381)](_0x2391f0), _0x37612d++;
                                            }
                                        }
                                        _0x5252ed = _0x2613e5 === _0x37612d, _0x1e813e = _0x1e813e || _0x5252ed;
                                    }
                                    if (_0x1e813e)
                                        _0x37612d = _0x4db184, null !== _0xcfde60 && (_0x4db184 ? _0xcfde60[_0x5d88bb(375)] = _0x4db184 : _0xcfde60 = null);
                                    else {
                                        const _0x8bb945 = { 'params': {} };
                                        null === _0xcfde60 ? _0xcfde60 = [_0x8bb945] : _0xcfde60[_0x5d88bb(381)](_0x8bb945), _0x37612d++;
                                    }
                                    _0x130421 = _0x39bb7c === _0x37612d;
                                } else
                                    _0x130421 = !0;
                            }
                        }
                    }
                } else {
                    const _0x53ce52 = { 'params': { 'type': 'object' } };
                    null === _0xcfde60 ? _0xcfde60 = [_0x53ce52] : _0xcfde60[_0x5d88bb(381)](_0x53ce52), _0x37612d++;
                }
            }
            _0x57a864 = _0x13fd67 === _0x37612d, _0x1bdf08 = _0x1bdf08 || _0x57a864;
        }
    }
    if (!_0x1bdf08) {
        const _0x3f9b2d = { 'params': {} };
        return null === _0xcfde60 ? _0xcfde60 = [_0x3f9b2d] : _0xcfde60[_0x5d88bb(381)](_0x3f9b2d), _0x37612d++, i['errors'] = _0xcfde60, !1;
    }
    return _0x37612d = _0x442477, null !== _0xcfde60 && (_0x442477 ? _0xcfde60[_0x5d88bb(375)] = _0x442477 : _0xcfde60 = null), i[_0x5d88bb(374)] = _0xcfde60, 0 === _0x37612d;
}
function p(_0x5cf1e3, {
    instancePath: _0x83297e = '',
    parentData: _0x1e750d,
    parentDataProperty: _0x11a050,
    rootData: _0x42c1ac = _0x5cf1e3
} = {}) {
    const _0x429b72 = _0x44d539;
    let _0x45cdae = null, _0x40a47d = 0;
    if (0 === _0x40a47d) {
        if (!_0x5cf1e3 || 'object' != typeof _0x5cf1e3 || Array[_0x429b72(373)](_0x5cf1e3))
            return p[_0x429b72(374)] = [{ 'params': { 'type': 'object' } }], !1;
        {
            let _0x1092af;
            if (void 0 === _0x5cf1e3[_0x429b72(387)] && (_0x1092af = _0x429b72(387)))
                return p['errors'] = [{ 'params': { 'missingProperty': _0x1092af } }], !1;
            {
                const _0x5de152 = _0x40a47d;
                for (const _0x42b491 in _0x5cf1e3)
                    if (_0x429b72(388) !== _0x42b491 && 'export' !== _0x42b491 && _0x429b72(378) !== _0x42b491 && _0x429b72(387) !== _0x42b491 && _0x429b72(389) !== _0x42b491)
                        return p['errors'] = [{ 'params': { 'additionalProperty': _0x42b491 } }], !1;
                if (_0x5de152 === _0x40a47d) {
                    if (void 0 !== _0x5cf1e3[_0x429b72(388)]) {
                        const _0x247030 = _0x40a47d;
                        l(_0x5cf1e3[_0x429b72(388)], {
                            'instancePath': _0x83297e + _0x429b72(390),
                            'parentData': _0x5cf1e3,
                            'parentDataProperty': _0x429b72(388),
                            'rootData': _0x42c1ac
                        }) || (_0x45cdae = null === _0x45cdae ? l['errors'] : _0x45cdae[_0x429b72(380)](l[_0x429b72(374)]), _0x40a47d = _0x45cdae['length']);
                        var _0x253e67 = _0x247030 === _0x40a47d;
                    } else
                        _0x253e67 = !0;
                    if (_0x253e67) {
                        if (void 0 !== _0x5cf1e3[_0x429b72(391)]) {
                            let _0x2ac383 = _0x5cf1e3[_0x429b72(391)];
                            const _0x47fe4f = _0x40a47d, _0x43c3bc = _0x40a47d;
                            let _0x10de86 = !1;
                            const _0x27e8d6 = _0x40a47d;
                            if (_0x40a47d === _0x27e8d6) {
                                if (Array[_0x429b72(373)](_0x2ac383)) {
                                    const _0x2298ef = _0x2ac383['length'];
                                    for (let _0x2b9c46 = 0; _0x2b9c46 < _0x2298ef; _0x2b9c46++) {
                                        let _0x497dde = _0x2ac383[_0x2b9c46];
                                        const _0x202eae = _0x40a47d;
                                        if (_0x40a47d === _0x202eae) {
                                            if (_0x429b72(365) == typeof _0x497dde) {
                                                if (_0x497dde['length'] < 1) {
                                                    const _0x142bd7 = { 'params': {} };
                                                    null === _0x45cdae ? _0x45cdae = [_0x142bd7] : _0x45cdae[_0x429b72(381)](_0x142bd7), _0x40a47d++;
                                                }
                                            } else {
                                                const _0x2e654f = { 'params': { 'type': _0x429b72(365) } };
                                                null === _0x45cdae ? _0x45cdae = [_0x2e654f] : _0x45cdae[_0x429b72(381)](_0x2e654f), _0x40a47d++;
                                            }
                                        }
                                        if (_0x202eae !== _0x40a47d)
                                            break;
                                    }
                                } else {
                                    const _0x328fdc = { 'params': { 'type': _0x429b72(382) } };
                                    null === _0x45cdae ? _0x45cdae = [_0x328fdc] : _0x45cdae[_0x429b72(381)](_0x328fdc), _0x40a47d++;
                                }
                            }
                            var _0x5561f4 = _0x27e8d6 === _0x40a47d;
                            if (_0x10de86 = _0x10de86 || _0x5561f4, !_0x10de86) {
                                const _0x557bba = _0x40a47d;
                                if (_0x40a47d === _0x557bba) {
                                    if (_0x429b72(365) == typeof _0x2ac383) {
                                        if (_0x2ac383[_0x429b72(375)] < 1) {
                                            const _0x434cef = { 'params': {} };
                                            null === _0x45cdae ? _0x45cdae = [_0x434cef] : _0x45cdae[_0x429b72(381)](_0x434cef), _0x40a47d++;
                                        }
                                    } else {
                                        const _0x1081ee = { 'params': { 'type': 'string' } };
                                        null === _0x45cdae ? _0x45cdae = [_0x1081ee] : _0x45cdae[_0x429b72(381)](_0x1081ee), _0x40a47d++;
                                    }
                                }
                                _0x5561f4 = _0x557bba === _0x40a47d, _0x10de86 = _0x10de86 || _0x5561f4;
                            }
                            if (!_0x10de86) {
                                const _0x4e1ab1 = { 'params': {} };
                                return null === _0x45cdae ? _0x45cdae = [_0x4e1ab1] : _0x45cdae[_0x429b72(381)](_0x4e1ab1), _0x40a47d++, p[_0x429b72(374)] = _0x45cdae, !1;
                            }
                            _0x40a47d = _0x43c3bc, null !== _0x45cdae && (_0x43c3bc ? _0x45cdae[_0x429b72(375)] = _0x43c3bc : _0x45cdae = null), _0x253e67 = _0x47fe4f === _0x40a47d;
                        } else
                            _0x253e67 = !0;
                        if (_0x253e67) {
                            if (void 0 !== _0x5cf1e3[_0x429b72(378)]) {
                                const _0x4a670e = _0x40a47d;
                                i(_0x5cf1e3[_0x429b72(378)], {
                                    'instancePath': _0x83297e + _0x429b72(392),
                                    'parentData': _0x5cf1e3,
                                    'parentDataProperty': _0x429b72(378),
                                    'rootData': _0x42c1ac
                                }) || (_0x45cdae = null === _0x45cdae ? i[_0x429b72(374)] : _0x45cdae[_0x429b72(380)](i[_0x429b72(374)]), _0x40a47d = _0x45cdae[_0x429b72(375)]), _0x253e67 = _0x4a670e === _0x40a47d;
                            } else
                                _0x253e67 = !0;
                            if (_0x253e67) {
                                if (void 0 !== _0x5cf1e3[_0x429b72(387)]) {
                                    let _0x5c2113 = _0x5cf1e3[_0x429b72(387)];
                                    const _0x1393fb = _0x40a47d, _0x3a32c4 = _0x40a47d;
                                    let _0x5d29e5 = !1;
                                    const _0x499fba = _0x40a47d;
                                    if (_0x429b72(393) !== _0x5c2113 && 'module' !== _0x5c2113 && _0x429b72(394) !== _0x5c2113 && _0x429b72(395) !== _0x5c2113 && _0x429b72(396) !== _0x5c2113 && _0x429b72(397) !== _0x5c2113 && _0x429b72(398) !== _0x5c2113 && _0x429b72(399) !== _0x5c2113 && 'commonjs' !== _0x5c2113 && _0x429b72(384) !== _0x5c2113 && _0x429b72(400) !== _0x5c2113 && _0x429b72(383) !== _0x5c2113 && 'amd-require' !== _0x5c2113 && _0x429b72(401) !== _0x5c2113 && _0x429b72(402) !== _0x5c2113 && _0x429b72(403) !== _0x5c2113 && _0x429b72(404) !== _0x5c2113) {
                                        const _0x57449b = { 'params': {} };
                                        null === _0x45cdae ? _0x45cdae = [_0x57449b] : _0x45cdae[_0x429b72(381)](_0x57449b), _0x40a47d++;
                                    }
                                    var _0xf3bb3 = _0x499fba === _0x40a47d;
                                    if (_0x5d29e5 = _0x5d29e5 || _0xf3bb3, !_0x5d29e5) {
                                        const _0x53105f = _0x40a47d;
                                        if (_0x429b72(365) != typeof _0x5c2113) {
                                            const _0x31f29a = { 'params': { 'type': _0x429b72(365) } };
                                            null === _0x45cdae ? _0x45cdae = [_0x31f29a] : _0x45cdae[_0x429b72(381)](_0x31f29a), _0x40a47d++;
                                        }
                                        _0xf3bb3 = _0x53105f === _0x40a47d, _0x5d29e5 = _0x5d29e5 || _0xf3bb3;
                                    }
                                    if (!_0x5d29e5) {
                                        const _0x55bb10 = { 'params': {} };
                                        return null === _0x45cdae ? _0x45cdae = [_0x55bb10] : _0x45cdae['push'](_0x55bb10), _0x40a47d++, p['errors'] = _0x45cdae, !1;
                                    }
                                    _0x40a47d = _0x3a32c4, null !== _0x45cdae && (_0x3a32c4 ? _0x45cdae[_0x429b72(375)] = _0x3a32c4 : _0x45cdae = null), _0x253e67 = _0x1393fb === _0x40a47d;
                                } else
                                    _0x253e67 = !0;
                                if (_0x253e67) {
                                    if (void 0 !== _0x5cf1e3[_0x429b72(389)]) {
                                        const _0x4c1f35 = _0x40a47d;
                                        if ('boolean' != typeof _0x5cf1e3[_0x429b72(389)])
                                            return p['errors'] = [{ 'params': { 'type': _0x429b72(405) } }], !1;
                                        _0x253e67 = _0x4c1f35 === _0x40a47d;
                                    } else
                                        _0x253e67 = !0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return p[_0x429b72(374)] = _0x45cdae, 0 === _0x40a47d;
}
function f(_0x28ee01, {
    instancePath: _0x8649fd = '',
    parentData: _0x178232,
    parentDataProperty: _0xdd56c1,
    rootData: _0x135a68 = _0x28ee01
} = {}) {
    const _0x9a1105 = _0x44d539;
    if (!Array[_0x9a1105(373)](_0x28ee01))
        return f[_0x9a1105(374)] = [{ 'params': { 'type': _0x9a1105(382) } }], !1;
    {
        const _0xa8439f = _0x28ee01['length'];
        for (let _0x397f92 = 0; _0x397f92 < _0xa8439f; _0x397f92++) {
            let _0x5d7db4 = _0x28ee01[_0x397f92];
            const _0x428f71 = 0;
            if (_0x9a1105(365) != typeof _0x5d7db4)
                return f[_0x9a1105(374)] = [{ 'params': { 'type': 'string' } }], !1;
            if (_0x5d7db4[_0x9a1105(375)] < 1)
                return f['errors'] = [{ 'params': {} }], !1;
            if (0 !== _0x428f71)
                break;
        }
    }
    return f[_0x9a1105(374)] = null, !0;
}
function u(_0x14b819, {
    instancePath: _0x2eb3f8 = '',
    parentData: _0x1b82f0,
    parentDataProperty: _0x3ddb1b,
    rootData: _0x32c517 = _0x14b819
} = {}) {
    const _0x166ff2 = _0x44d539;
    let _0x3ba581 = null, _0x140e58 = 0;
    if (0 === _0x140e58) {
        if (!_0x14b819 || _0x166ff2(376) != typeof _0x14b819 || Array[_0x166ff2(373)](_0x14b819))
            return u[_0x166ff2(374)] = [{ 'params': { 'type': _0x166ff2(376) } }], !1;
        {
            let _0x1655bb;
            if (void 0 === _0x14b819[_0x166ff2(406)] && (_0x1655bb = _0x166ff2(406)))
                return u[_0x166ff2(374)] = [{ 'params': { 'missingProperty': _0x1655bb } }], !1;
            {
                const _0xd4ca73 = _0x140e58;
                for (const _0x5530c0 in _0x14b819)
                    if ('external' !== _0x5530c0 && _0x166ff2(407) !== _0x5530c0)
                        return u[_0x166ff2(374)] = [{ 'params': { 'additionalProperty': _0x5530c0 } }], !1;
                if (_0xd4ca73 === _0x140e58) {
                    if (void 0 !== _0x14b819[_0x166ff2(406)]) {
                        let _0x20c2f0 = _0x14b819[_0x166ff2(406)];
                        const _0x2345f8 = _0x140e58, _0x240d5d = _0x140e58;
                        let _0x40b0c0 = !1;
                        const _0x2a0a5f = _0x140e58;
                        if (_0x140e58 == _0x140e58) {
                            if ('string' == typeof _0x20c2f0) {
                                if (_0x20c2f0[_0x166ff2(375)] < 1) {
                                    const _0x4a5eef = { 'params': {} };
                                    null === _0x3ba581 ? _0x3ba581 = [_0x4a5eef] : _0x3ba581[_0x166ff2(381)](_0x4a5eef), _0x140e58++;
                                }
                            } else {
                                const _0x196ac1 = { 'params': { 'type': _0x166ff2(365) } };
                                null === _0x3ba581 ? _0x3ba581 = [_0x196ac1] : _0x3ba581['push'](_0x196ac1), _0x140e58++;
                            }
                        }
                        var _0x95be2b = _0x2a0a5f === _0x140e58;
                        if (_0x40b0c0 = _0x40b0c0 || _0x95be2b, !_0x40b0c0) {
                            const _0x434729 = _0x140e58;
                            f(_0x20c2f0, {
                                'instancePath': _0x2eb3f8 + _0x166ff2(408),
                                'parentData': _0x14b819,
                                'parentDataProperty': _0x166ff2(406),
                                'rootData': _0x32c517
                            }) || (_0x3ba581 = null === _0x3ba581 ? f[_0x166ff2(374)] : _0x3ba581[_0x166ff2(380)](f[_0x166ff2(374)]), _0x140e58 = _0x3ba581['length']), _0x95be2b = _0x434729 === _0x140e58, _0x40b0c0 = _0x40b0c0 || _0x95be2b;
                        }
                        if (!_0x40b0c0) {
                            const _0xb822aa = { 'params': {} };
                            return null === _0x3ba581 ? _0x3ba581 = [_0xb822aa] : _0x3ba581['push'](_0xb822aa), _0x140e58++, u[_0x166ff2(374)] = _0x3ba581, !1;
                        }
                        _0x140e58 = _0x240d5d, null !== _0x3ba581 && (_0x240d5d ? _0x3ba581[_0x166ff2(375)] = _0x240d5d : _0x3ba581 = null);
                        var _0x57272f = _0x2345f8 === _0x140e58;
                    } else
                        _0x57272f = !0;
                    if (_0x57272f) {
                        if (void 0 !== _0x14b819[_0x166ff2(407)]) {
                            let _0x389299 = _0x14b819[_0x166ff2(407)];
                            const _0x29d309 = _0x140e58;
                            if (_0x140e58 === _0x29d309) {
                                if (_0x166ff2(365) != typeof _0x389299)
                                    return u['errors'] = [{ 'params': { 'type': _0x166ff2(365) } }], !1;
                                if (_0x389299[_0x166ff2(375)] < 1)
                                    return u[_0x166ff2(374)] = [{ 'params': {} }], !1;
                            }
                            _0x57272f = _0x29d309 === _0x140e58;
                        } else
                            _0x57272f = !0;
                    }
                }
            }
        }
    }
    return u['errors'] = _0x3ba581, 0 === _0x140e58;
}
function c(_0x1200ca, {
    instancePath: _0x41990c = '',
    parentData: _0x1739ac,
    parentDataProperty: _0x272665,
    rootData: _0x742729 = _0x1200ca
} = {}) {
    const _0x365d19 = _0x44d539;
    let _0x15c941 = null, _0x400684 = 0;
    if (0 === _0x400684) {
        if (!_0x1200ca || 'object' != typeof _0x1200ca || Array['isArray'](_0x1200ca))
            return c[_0x365d19(374)] = [{ 'params': { 'type': _0x365d19(376) } }], !1;
        for (const _0x2c5ad3 in _0x1200ca) {
            let _0x23553c = _0x1200ca[_0x2c5ad3];
            const _0x59c862 = _0x400684, _0x246d70 = _0x400684;
            let _0x373894 = !1;
            const _0xc632c3 = _0x400684;
            u(_0x23553c, {
                'instancePath': _0x41990c + '/' + _0x2c5ad3[_0x365d19(379)](/~/g, '~0')[_0x365d19(379)](/\//g, '~1'),
                'parentData': _0x1200ca,
                'parentDataProperty': _0x2c5ad3,
                'rootData': _0x742729
            }) || (_0x15c941 = null === _0x15c941 ? u['errors'] : _0x15c941[_0x365d19(380)](u[_0x365d19(374)]), _0x400684 = _0x15c941[_0x365d19(375)]);
            var _0x4168b6 = _0xc632c3 === _0x400684;
            if (_0x373894 = _0x373894 || _0x4168b6, !_0x373894) {
                const _0x4f5e6a = _0x400684;
                if (_0x400684 == _0x400684) {
                    if (_0x365d19(365) == typeof _0x23553c) {
                        if (_0x23553c['length'] < 1) {
                            const _0x43310b = { 'params': {} };
                            null === _0x15c941 ? _0x15c941 = [_0x43310b] : _0x15c941[_0x365d19(381)](_0x43310b), _0x400684++;
                        }
                    } else {
                        const _0x1ec94b = { 'params': { 'type': _0x365d19(365) } };
                        null === _0x15c941 ? _0x15c941 = [_0x1ec94b] : _0x15c941[_0x365d19(381)](_0x1ec94b), _0x400684++;
                    }
                }
                if (_0x4168b6 = _0x4f5e6a === _0x400684, _0x373894 = _0x373894 || _0x4168b6, !_0x373894) {
                    const _0x3eb406 = _0x400684;
                    f(_0x23553c, {
                        'instancePath': _0x41990c + '/' + _0x2c5ad3['replace'](/~/g, '~0')[_0x365d19(379)](/\//g, '~1'),
                        'parentData': _0x1200ca,
                        'parentDataProperty': _0x2c5ad3,
                        'rootData': _0x742729
                    }) || (_0x15c941 = null === _0x15c941 ? f[_0x365d19(374)] : _0x15c941[_0x365d19(380)](f['errors']), _0x400684 = _0x15c941['length']), _0x4168b6 = _0x3eb406 === _0x400684, _0x373894 = _0x373894 || _0x4168b6;
                }
            }
            if (!_0x373894) {
                const _0x527ee5 = { 'params': {} };
                return null === _0x15c941 ? _0x15c941 = [_0x527ee5] : _0x15c941[_0x365d19(381)](_0x527ee5), _0x400684++, c['errors'] = _0x15c941, !1;
            }
            if (_0x400684 = _0x246d70, null !== _0x15c941 && (_0x246d70 ? _0x15c941['length'] = _0x246d70 : _0x15c941 = null), _0x59c862 !== _0x400684)
                break;
        }
    }
    return c[_0x365d19(374)] = _0x15c941, 0 === _0x400684;
}
function m(_0x50cd19, {
    instancePath: _0x3bf7f4 = '',
    parentData: _0x258d3c,
    parentDataProperty: _0x37cba0,
    rootData: _0x57cd53 = _0x50cd19
} = {}) {
    const _0x29386d = _0x44d539;
    let _0x340a4c = null, _0x3c78bb = 0;
    const _0x39d8fe = _0x3c78bb;
    let _0x16cbff = !1;
    const _0x36dcf0 = _0x3c78bb;
    if (_0x3c78bb === _0x36dcf0) {
        if (Array['isArray'](_0x50cd19)) {
            const _0x5a2f4c = _0x50cd19[_0x29386d(375)];
            for (let _0x5b0c86 = 0; _0x5b0c86 < _0x5a2f4c; _0x5b0c86++) {
                let _0x3ef470 = _0x50cd19[_0x5b0c86];
                const _0x33e799 = _0x3c78bb, _0x4a9f2a = _0x3c78bb;
                let _0xbb177c = !1;
                const _0x586e5b = _0x3c78bb;
                if (_0x3c78bb == _0x3c78bb) {
                    if (_0x29386d(365) == typeof _0x3ef470) {
                        if (_0x3ef470[_0x29386d(375)] < 1) {
                            const _0x46f86a = { 'params': {} };
                            null === _0x340a4c ? _0x340a4c = [_0x46f86a] : _0x340a4c[_0x29386d(381)](_0x46f86a), _0x3c78bb++;
                        }
                    } else {
                        const _0x482ddc = { 'params': { 'type': 'string' } };
                        null === _0x340a4c ? _0x340a4c = [_0x482ddc] : _0x340a4c[_0x29386d(381)](_0x482ddc), _0x3c78bb++;
                    }
                }
                var _0x5cac74 = _0x586e5b === _0x3c78bb;
                if (_0xbb177c = _0xbb177c || _0x5cac74, !_0xbb177c) {
                    const _0x331387 = _0x3c78bb;
                    c(_0x3ef470, {
                        'instancePath': _0x3bf7f4 + '/' + _0x5b0c86,
                        'parentData': _0x50cd19,
                        'parentDataProperty': _0x5b0c86,
                        'rootData': _0x57cd53
                    }) || (_0x340a4c = null === _0x340a4c ? c[_0x29386d(374)] : _0x340a4c[_0x29386d(380)](c['errors']), _0x3c78bb = _0x340a4c['length']), _0x5cac74 = _0x331387 === _0x3c78bb, _0xbb177c = _0xbb177c || _0x5cac74;
                }
                if (_0xbb177c)
                    _0x3c78bb = _0x4a9f2a, null !== _0x340a4c && (_0x4a9f2a ? _0x340a4c['length'] = _0x4a9f2a : _0x340a4c = null);
                else {
                    const _0x137cac = { 'params': {} };
                    null === _0x340a4c ? _0x340a4c = [_0x137cac] : _0x340a4c[_0x29386d(381)](_0x137cac), _0x3c78bb++;
                }
                if (_0x33e799 !== _0x3c78bb)
                    break;
            }
        } else {
            const _0x51c5c8 = { 'params': { 'type': _0x29386d(382) } };
            null === _0x340a4c ? _0x340a4c = [_0x51c5c8] : _0x340a4c[_0x29386d(381)](_0x51c5c8), _0x3c78bb++;
        }
    }
    var _0x2b9868 = _0x36dcf0 === _0x3c78bb;
    if (_0x16cbff = _0x16cbff || _0x2b9868, !_0x16cbff) {
        const _0x3b4afc = _0x3c78bb;
        c(_0x50cd19, {
            'instancePath': _0x3bf7f4,
            'parentData': _0x258d3c,
            'parentDataProperty': _0x37cba0,
            'rootData': _0x57cd53
        }) || (_0x340a4c = null === _0x340a4c ? c[_0x29386d(374)] : _0x340a4c[_0x29386d(380)](c[_0x29386d(374)]), _0x3c78bb = _0x340a4c[_0x29386d(375)]), _0x2b9868 = _0x3b4afc === _0x3c78bb, _0x16cbff = _0x16cbff || _0x2b9868;
    }
    if (!_0x16cbff) {
        const _0xdbadf8 = { 'params': {} };
        return null === _0x340a4c ? _0x340a4c = [_0xdbadf8] : _0x340a4c[_0x29386d(381)](_0xdbadf8), _0x3c78bb++, m[_0x29386d(374)] = _0x340a4c, !1;
    }
    return _0x3c78bb = _0x39d8fe, null !== _0x340a4c && (_0x39d8fe ? _0x340a4c['length'] = _0x39d8fe : _0x340a4c = null), m['errors'] = _0x340a4c, 0 === _0x3c78bb;
}
const y = {
    'eager': { 'type': _0x44d539(405) },
    'import': {
        'anyOf': [
            { 'enum': [!1] },
            { '$ref': '#/definitions/SharedItem' }
        ]
    },
    'packageName': {
        'type': _0x44d539(365),
        'minLength': 1
    },
    'requiredVersion': {
        'anyOf': [
            { 'enum': [!1] },
            { 'type': _0x44d539(365) }
        ]
    },
    'shareKey': {
        'type': _0x44d539(365),
        'minLength': 1
    },
    'shareScope': {
        'type': 'string',
        'minLength': 1
    },
    'singleton': { 'type': _0x44d539(405) },
    'strictVersion': { 'type': _0x44d539(405) },
    'version': {
        'anyOf': [
            { 'enum': [!1] },
            { 'type': _0x44d539(365) }
        ]
    }
};
function h(_0x3a1a1e, {
    instancePath: _0x36b3b2 = '',
    parentData: _0x4a8a0d,
    parentDataProperty: _0x34bf6b,
    rootData: _0x431556 = _0x3a1a1e
} = {}) {
    const _0x2ca406 = _0x44d539;
    let _0x1900f0 = null, _0x462928 = 0;
    if (0 === _0x462928) {
        if (!_0x3a1a1e || 'object' != typeof _0x3a1a1e || Array['isArray'](_0x3a1a1e))
            return h['errors'] = [{ 'params': { 'type': _0x2ca406(376) } }], !1;
        {
            const _0xa73853 = _0x462928;
            for (const _0x1aa407 in _0x3a1a1e)
                if (!e['call'](y, _0x1aa407))
                    return h[_0x2ca406(374)] = [{ 'params': { 'additionalProperty': _0x1aa407 } }], !1;
            if (_0xa73853 === _0x462928) {
                if (void 0 !== _0x3a1a1e[_0x2ca406(409)]) {
                    const _0x4f9c0b = _0x462928;
                    if ('boolean' != typeof _0x3a1a1e[_0x2ca406(409)])
                        return h['errors'] = [{ 'params': { 'type': 'boolean' } }], !1;
                    var _0x34cb48 = _0x4f9c0b === _0x462928;
                } else
                    _0x34cb48 = !0;
                if (_0x34cb48) {
                    if (void 0 !== _0x3a1a1e[_0x2ca406(377)]) {
                        let _0x32f1fd = _0x3a1a1e['import'];
                        const _0x444d5a = _0x462928, _0x179d74 = _0x462928;
                        let _0x316724 = !1;
                        const _0x5bbe66 = _0x462928;
                        if (!1 !== _0x32f1fd) {
                            const _0x8fed06 = { 'params': {} };
                            null === _0x1900f0 ? _0x1900f0 = [_0x8fed06] : _0x1900f0[_0x2ca406(381)](_0x8fed06), _0x462928++;
                        }
                        var _0x34bf56 = _0x5bbe66 === _0x462928;
                        if (_0x316724 = _0x316724 || _0x34bf56, !_0x316724) {
                            const _0x352053 = _0x462928;
                            if (_0x462928 == _0x462928) {
                                if (_0x2ca406(365) == typeof _0x32f1fd) {
                                    if (_0x32f1fd['length'] < 1) {
                                        const _0x2445e7 = { 'params': {} };
                                        null === _0x1900f0 ? _0x1900f0 = [_0x2445e7] : _0x1900f0[_0x2ca406(381)](_0x2445e7), _0x462928++;
                                    }
                                } else {
                                    const _0x13a8bd = { 'params': { 'type': _0x2ca406(365) } };
                                    null === _0x1900f0 ? _0x1900f0 = [_0x13a8bd] : _0x1900f0[_0x2ca406(381)](_0x13a8bd), _0x462928++;
                                }
                            }
                            _0x34bf56 = _0x352053 === _0x462928, _0x316724 = _0x316724 || _0x34bf56;
                        }
                        if (!_0x316724) {
                            const _0x437a32 = { 'params': {} };
                            return null === _0x1900f0 ? _0x1900f0 = [_0x437a32] : _0x1900f0['push'](_0x437a32), _0x462928++, h[_0x2ca406(374)] = _0x1900f0, !1;
                        }
                        _0x462928 = _0x179d74, null !== _0x1900f0 && (_0x179d74 ? _0x1900f0[_0x2ca406(375)] = _0x179d74 : _0x1900f0 = null), _0x34cb48 = _0x444d5a === _0x462928;
                    } else
                        _0x34cb48 = !0;
                    if (_0x34cb48) {
                        if (void 0 !== _0x3a1a1e[_0x2ca406(410)]) {
                            let _0x767099 = _0x3a1a1e['packageName'];
                            const _0x60a3ef = _0x462928;
                            if (_0x462928 === _0x60a3ef) {
                                if (_0x2ca406(365) != typeof _0x767099)
                                    return h['errors'] = [{ 'params': { 'type': _0x2ca406(365) } }], !1;
                                if (_0x767099[_0x2ca406(375)] < 1)
                                    return h[_0x2ca406(374)] = [{ 'params': {} }], !1;
                            }
                            _0x34cb48 = _0x60a3ef === _0x462928;
                        } else
                            _0x34cb48 = !0;
                        if (_0x34cb48) {
                            if (void 0 !== _0x3a1a1e[_0x2ca406(411)]) {
                                let _0x49aab1 = _0x3a1a1e[_0x2ca406(411)];
                                const _0x5ce059 = _0x462928, _0x236821 = _0x462928;
                                let _0x525183 = !1;
                                const _0x528133 = _0x462928;
                                if (!1 !== _0x49aab1) {
                                    const _0x62cf36 = { 'params': {} };
                                    null === _0x1900f0 ? _0x1900f0 = [_0x62cf36] : _0x1900f0[_0x2ca406(381)](_0x62cf36), _0x462928++;
                                }
                                var _0x1e584b = _0x528133 === _0x462928;
                                if (_0x525183 = _0x525183 || _0x1e584b, !_0x525183) {
                                    const _0x43e487 = _0x462928;
                                    if (_0x2ca406(365) != typeof _0x49aab1) {
                                        const _0x355ab8 = { 'params': { 'type': _0x2ca406(365) } };
                                        null === _0x1900f0 ? _0x1900f0 = [_0x355ab8] : _0x1900f0['push'](_0x355ab8), _0x462928++;
                                    }
                                    _0x1e584b = _0x43e487 === _0x462928, _0x525183 = _0x525183 || _0x1e584b;
                                }
                                if (!_0x525183) {
                                    const _0x44e2f0 = { 'params': {} };
                                    return null === _0x1900f0 ? _0x1900f0 = [_0x44e2f0] : _0x1900f0['push'](_0x44e2f0), _0x462928++, h[_0x2ca406(374)] = _0x1900f0, !1;
                                }
                                _0x462928 = _0x236821, null !== _0x1900f0 && (_0x236821 ? _0x1900f0[_0x2ca406(375)] = _0x236821 : _0x1900f0 = null), _0x34cb48 = _0x5ce059 === _0x462928;
                            } else
                                _0x34cb48 = !0;
                            if (_0x34cb48) {
                                if (void 0 !== _0x3a1a1e[_0x2ca406(412)]) {
                                    let _0x167ad5 = _0x3a1a1e[_0x2ca406(412)];
                                    const _0x1cde52 = _0x462928;
                                    if (_0x462928 === _0x1cde52) {
                                        if ('string' != typeof _0x167ad5)
                                            return h[_0x2ca406(374)] = [{ 'params': { 'type': _0x2ca406(365) } }], !1;
                                        if (_0x167ad5['length'] < 1)
                                            return h['errors'] = [{ 'params': {} }], !1;
                                    }
                                    _0x34cb48 = _0x1cde52 === _0x462928;
                                } else
                                    _0x34cb48 = !0;
                                if (_0x34cb48) {
                                    if (void 0 !== _0x3a1a1e[_0x2ca406(407)]) {
                                        let _0xbf8c3a = _0x3a1a1e[_0x2ca406(407)];
                                        const _0x4c46f7 = _0x462928;
                                        if (_0x462928 === _0x4c46f7) {
                                            if (_0x2ca406(365) != typeof _0xbf8c3a)
                                                return h[_0x2ca406(374)] = [{ 'params': { 'type': _0x2ca406(365) } }], !1;
                                            if (_0xbf8c3a[_0x2ca406(375)] < 1)
                                                return h[_0x2ca406(374)] = [{ 'params': {} }], !1;
                                        }
                                        _0x34cb48 = _0x4c46f7 === _0x462928;
                                    } else
                                        _0x34cb48 = !0;
                                    if (_0x34cb48) {
                                        if (void 0 !== _0x3a1a1e[_0x2ca406(413)]) {
                                            const _0xb95a70 = _0x462928;
                                            if (_0x2ca406(405) != typeof _0x3a1a1e[_0x2ca406(413)])
                                                return h[_0x2ca406(374)] = [{ 'params': { 'type': 'boolean' } }], !1;
                                            _0x34cb48 = _0xb95a70 === _0x462928;
                                        } else
                                            _0x34cb48 = !0;
                                        if (_0x34cb48) {
                                            if (void 0 !== _0x3a1a1e['strictVersion']) {
                                                const _0x3f5368 = _0x462928;
                                                if ('boolean' != typeof _0x3a1a1e[_0x2ca406(414)])
                                                    return h[_0x2ca406(374)] = [{ 'params': { 'type': _0x2ca406(405) } }], !1;
                                                _0x34cb48 = _0x3f5368 === _0x462928;
                                            } else
                                                _0x34cb48 = !0;
                                            if (_0x34cb48) {
                                                if (void 0 !== _0x3a1a1e[_0x2ca406(415)]) {
                                                    let _0x1d913c = _0x3a1a1e['version'];
                                                    const _0x5eebc8 = _0x462928, _0x2125bf = _0x462928;
                                                    let _0x2f54c7 = !1;
                                                    const _0xf8897c = _0x462928;
                                                    if (!1 !== _0x1d913c) {
                                                        const _0x2e9769 = { 'params': {} };
                                                        null === _0x1900f0 ? _0x1900f0 = [_0x2e9769] : _0x1900f0[_0x2ca406(381)](_0x2e9769), _0x462928++;
                                                    }
                                                    var _0x54cdbe = _0xf8897c === _0x462928;
                                                    if (_0x2f54c7 = _0x2f54c7 || _0x54cdbe, !_0x2f54c7) {
                                                        const _0x258ee5 = _0x462928;
                                                        if (_0x2ca406(365) != typeof _0x1d913c) {
                                                            const _0x84dddb = { 'params': { 'type': _0x2ca406(365) } };
                                                            null === _0x1900f0 ? _0x1900f0 = [_0x84dddb] : _0x1900f0[_0x2ca406(381)](_0x84dddb), _0x462928++;
                                                        }
                                                        _0x54cdbe = _0x258ee5 === _0x462928, _0x2f54c7 = _0x2f54c7 || _0x54cdbe;
                                                    }
                                                    if (!_0x2f54c7) {
                                                        const _0x7cdfb8 = { 'params': {} };
                                                        return null === _0x1900f0 ? _0x1900f0 = [_0x7cdfb8] : _0x1900f0[_0x2ca406(381)](_0x7cdfb8), _0x462928++, h[_0x2ca406(374)] = _0x1900f0, !1;
                                                    }
                                                    _0x462928 = _0x2125bf, null !== _0x1900f0 && (_0x2125bf ? _0x1900f0[_0x2ca406(375)] = _0x2125bf : _0x1900f0 = null), _0x34cb48 = _0x5eebc8 === _0x462928;
                                                } else
                                                    _0x34cb48 = !0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return h[_0x2ca406(374)] = _0x1900f0, 0 === _0x462928;
}
function g(_0x4165a3, {
    instancePath: _0x5499cf = '',
    parentData: _0x1b8236,
    parentDataProperty: _0x2fc468,
    rootData: _0x56ff5d = _0x4165a3
} = {}) {
    const _0x3a2cef = _0x44d539;
    let _0x4c953e = null, _0x270099 = 0;
    if (0 === _0x270099) {
        if (!_0x4165a3 || _0x3a2cef(376) != typeof _0x4165a3 || Array[_0x3a2cef(373)](_0x4165a3))
            return g[_0x3a2cef(374)] = [{ 'params': { 'type': 'object' } }], !1;
        for (const _0x3e97af in _0x4165a3) {
            let _0x43b3ba = _0x4165a3[_0x3e97af];
            const _0xf26f11 = _0x270099, _0x54f263 = _0x270099;
            let _0x351589 = !1;
            const _0x17e98f = _0x270099;
            h(_0x43b3ba, {
                'instancePath': _0x5499cf + '/' + _0x3e97af[_0x3a2cef(379)](/~/g, '~0')[_0x3a2cef(379)](/\//g, '~1'),
                'parentData': _0x4165a3,
                'parentDataProperty': _0x3e97af,
                'rootData': _0x56ff5d
            }) || (_0x4c953e = null === _0x4c953e ? h[_0x3a2cef(374)] : _0x4c953e[_0x3a2cef(380)](h['errors']), _0x270099 = _0x4c953e[_0x3a2cef(375)]);
            var _0x22eebe = _0x17e98f === _0x270099;
            if (_0x351589 = _0x351589 || _0x22eebe, !_0x351589) {
                const _0x436422 = _0x270099;
                if (_0x270099 == _0x270099) {
                    if (_0x3a2cef(365) == typeof _0x43b3ba) {
                        if (_0x43b3ba[_0x3a2cef(375)] < 1) {
                            const _0x2b6385 = { 'params': {} };
                            null === _0x4c953e ? _0x4c953e = [_0x2b6385] : _0x4c953e[_0x3a2cef(381)](_0x2b6385), _0x270099++;
                        }
                    } else {
                        const _0x23cd90 = { 'params': { 'type': _0x3a2cef(365) } };
                        null === _0x4c953e ? _0x4c953e = [_0x23cd90] : _0x4c953e[_0x3a2cef(381)](_0x23cd90), _0x270099++;
                    }
                }
                _0x22eebe = _0x436422 === _0x270099, _0x351589 = _0x351589 || _0x22eebe;
            }
            if (!_0x351589) {
                const _0x11ad89 = { 'params': {} };
                return null === _0x4c953e ? _0x4c953e = [_0x11ad89] : _0x4c953e[_0x3a2cef(381)](_0x11ad89), _0x270099++, g['errors'] = _0x4c953e, !1;
            }
            if (_0x270099 = _0x54f263, null !== _0x4c953e && (_0x54f263 ? _0x4c953e[_0x3a2cef(375)] = _0x54f263 : _0x4c953e = null), _0xf26f11 !== _0x270099)
                break;
        }
    }
    return g['errors'] = _0x4c953e, 0 === _0x270099;
}
function D(_0x1c509f, {
    instancePath: _0x14fd36 = '',
    parentData: _0x81b459,
    parentDataProperty: _0x7a3365,
    rootData: _0x62492b = _0x1c509f
} = {}) {
    const _0x52d2b2 = _0x44d539;
    let _0x3cc8ba = null, _0x59c672 = 0;
    const _0x1d6576 = _0x59c672;
    let _0x17fa08 = !1;
    const _0x10eb72 = _0x59c672;
    if (_0x59c672 === _0x10eb72) {
        if (Array['isArray'](_0x1c509f)) {
            const _0x1dc234 = _0x1c509f[_0x52d2b2(375)];
            for (let _0x4f2eee = 0; _0x4f2eee < _0x1dc234; _0x4f2eee++) {
                let _0x15979f = _0x1c509f[_0x4f2eee];
                const _0x7e2efd = _0x59c672, _0x10817f = _0x59c672;
                let _0x1bdc5e = !1;
                const _0x15b404 = _0x59c672;
                if (_0x59c672 == _0x59c672) {
                    if ('string' == typeof _0x15979f) {
                        if (_0x15979f[_0x52d2b2(375)] < 1) {
                            const _0x5046e1 = { 'params': {} };
                            null === _0x3cc8ba ? _0x3cc8ba = [_0x5046e1] : _0x3cc8ba['push'](_0x5046e1), _0x59c672++;
                        }
                    } else {
                        const _0x2f9bc2 = { 'params': { 'type': _0x52d2b2(365) } };
                        null === _0x3cc8ba ? _0x3cc8ba = [_0x2f9bc2] : _0x3cc8ba['push'](_0x2f9bc2), _0x59c672++;
                    }
                }
                var _0x5831e8 = _0x15b404 === _0x59c672;
                if (_0x1bdc5e = _0x1bdc5e || _0x5831e8, !_0x1bdc5e) {
                    const _0x310d52 = _0x59c672;
                    g(_0x15979f, {
                        'instancePath': _0x14fd36 + '/' + _0x4f2eee,
                        'parentData': _0x1c509f,
                        'parentDataProperty': _0x4f2eee,
                        'rootData': _0x62492b
                    }) || (_0x3cc8ba = null === _0x3cc8ba ? g[_0x52d2b2(374)] : _0x3cc8ba[_0x52d2b2(380)](g[_0x52d2b2(374)]), _0x59c672 = _0x3cc8ba[_0x52d2b2(375)]), _0x5831e8 = _0x310d52 === _0x59c672, _0x1bdc5e = _0x1bdc5e || _0x5831e8;
                }
                if (_0x1bdc5e)
                    _0x59c672 = _0x10817f, null !== _0x3cc8ba && (_0x10817f ? _0x3cc8ba[_0x52d2b2(375)] = _0x10817f : _0x3cc8ba = null);
                else {
                    const _0x13dcc4 = { 'params': {} };
                    null === _0x3cc8ba ? _0x3cc8ba = [_0x13dcc4] : _0x3cc8ba[_0x52d2b2(381)](_0x13dcc4), _0x59c672++;
                }
                if (_0x7e2efd !== _0x59c672)
                    break;
            }
        } else {
            const _0x3bfb91 = { 'params': { 'type': 'array' } };
            null === _0x3cc8ba ? _0x3cc8ba = [_0x3bfb91] : _0x3cc8ba[_0x52d2b2(381)](_0x3bfb91), _0x59c672++;
        }
    }
    var _0xbf2fb9 = _0x10eb72 === _0x59c672;
    if (_0x17fa08 = _0x17fa08 || _0xbf2fb9, !_0x17fa08) {
        const _0x3bd378 = _0x59c672;
        g(_0x1c509f, {
            'instancePath': _0x14fd36,
            'parentData': _0x81b459,
            'parentDataProperty': _0x7a3365,
            'rootData': _0x62492b
        }) || (_0x3cc8ba = null === _0x3cc8ba ? g[_0x52d2b2(374)] : _0x3cc8ba['concat'](g[_0x52d2b2(374)]), _0x59c672 = _0x3cc8ba[_0x52d2b2(375)]), _0xbf2fb9 = _0x3bd378 === _0x59c672, _0x17fa08 = _0x17fa08 || _0xbf2fb9;
    }
    if (!_0x17fa08) {
        const _0x54c5b0 = { 'params': {} };
        return null === _0x3cc8ba ? _0x3cc8ba = [_0x54c5b0] : _0x3cc8ba[_0x52d2b2(381)](_0x54c5b0), _0x59c672++, D[_0x52d2b2(374)] = _0x3cc8ba, !1;
    }
    return _0x59c672 = _0x1d6576, null !== _0x3cc8ba && (_0x1d6576 ? _0x3cc8ba[_0x52d2b2(375)] = _0x1d6576 : _0x3cc8ba = null), D[_0x52d2b2(374)] = _0x3cc8ba, 0 === _0x59c672;
}
function d(_0x1ed88e, {
    instancePath: _0x4b5515 = '',
    parentData: _0x1fb204,
    parentDataProperty: _0x52f6d7,
    rootData: _0x2ca390 = _0x1ed88e
} = {}) {
    const _0x192290 = _0x44d539;
    let _0x4d3468 = null, _0x4bc392 = 0;
    if (0 === _0x4bc392) {
        if (!_0x1ed88e || 'object' != typeof _0x1ed88e || Array[_0x192290(373)](_0x1ed88e))
            return d[_0x192290(374)] = [{ 'params': { 'type': _0x192290(376) } }], !1;
        {
            const _0x4aff35 = _0x4bc392;
            for (const _0x2bf071 in _0x1ed88e)
                if (!e[_0x192290(416)](t, _0x2bf071))
                    return d[_0x192290(374)] = [{ 'params': { 'additionalProperty': _0x2bf071 } }], !1;
            if (_0x4aff35 === _0x4bc392) {
                if (void 0 !== _0x1ed88e['exposes']) {
                    const _0x2d373f = _0x4bc392;
                    o(_0x1ed88e[_0x192290(417)], {
                        'instancePath': _0x4b5515 + _0x192290(418),
                        'parentData': _0x1ed88e,
                        'parentDataProperty': _0x192290(417),
                        'rootData': _0x2ca390
                    }) || (_0x4d3468 = null === _0x4d3468 ? o[_0x192290(374)] : _0x4d3468['concat'](o['errors']), _0x4bc392 = _0x4d3468[_0x192290(375)]);
                    var _0x4005b3 = _0x2d373f === _0x4bc392;
                } else
                    _0x4005b3 = !0;
                if (_0x4005b3) {
                    if (void 0 !== _0x1ed88e['filename']) {
                        let _0x3a0278 = _0x1ed88e[_0x192290(419)];
                        const _0x5a3ef8 = _0x4bc392;
                        if (_0x4bc392 === _0x5a3ef8) {
                            if ('string' != typeof _0x3a0278)
                                return d[_0x192290(374)] = [{ 'params': { 'type': 'string' } }], !1;
                            if (_0x3a0278[_0x192290(420)]('!') || !1 !== r[_0x192290(421)](_0x3a0278))
                                return d[_0x192290(374)] = [{ 'params': {} }], !1;
                        }
                        _0x4005b3 = _0x5a3ef8 === _0x4bc392;
                    } else
                        _0x4005b3 = !0;
                    if (_0x4005b3) {
                        if (void 0 !== _0x1ed88e['library']) {
                            const _0xd632a6 = _0x4bc392;
                            p(_0x1ed88e[_0x192290(422)], {
                                'instancePath': _0x4b5515 + _0x192290(423),
                                'parentData': _0x1ed88e,
                                'parentDataProperty': _0x192290(422),
                                'rootData': _0x2ca390
                            }) || (_0x4d3468 = null === _0x4d3468 ? p['errors'] : _0x4d3468['concat'](p[_0x192290(374)]), _0x4bc392 = _0x4d3468[_0x192290(375)]), _0x4005b3 = _0xd632a6 === _0x4bc392;
                        } else
                            _0x4005b3 = !0;
                        if (_0x4005b3) {
                            if (void 0 !== _0x1ed88e[_0x192290(378)]) {
                                const _0xb77a8c = _0x4bc392;
                                if (_0x192290(365) != typeof _0x1ed88e[_0x192290(378)])
                                    return d[_0x192290(374)] = [{ 'params': { 'type': _0x192290(365) } }], !1;
                                _0x4005b3 = _0xb77a8c === _0x4bc392;
                            } else
                                _0x4005b3 = !0;
                            if (_0x4005b3) {
                                if (void 0 !== _0x1ed88e['remoteType']) {
                                    let _0x21704c = _0x1ed88e[_0x192290(424)];
                                    const _0x5b5b1d = _0x4bc392, _0x412bb1 = _0x4bc392;
                                    let _0x411064 = !1, _0x3e5614 = null;
                                    const _0x44148f = _0x4bc392;
                                    if (_0x192290(393) !== _0x21704c && _0x192290(425) !== _0x21704c && _0x192290(394) !== _0x21704c && _0x192290(396) !== _0x21704c && _0x192290(397) !== _0x21704c && _0x192290(398) !== _0x21704c && _0x192290(399) !== _0x21704c && _0x192290(386) !== _0x21704c && _0x192290(384) !== _0x21704c && _0x192290(400) !== _0x21704c && _0x192290(383) !== _0x21704c && 'amd-require' !== _0x21704c && _0x192290(401) !== _0x21704c && _0x192290(402) !== _0x21704c && _0x192290(403) !== _0x21704c && _0x192290(404) !== _0x21704c && _0x192290(426) !== _0x21704c && _0x192290(377) !== _0x21704c && 'script' !== _0x21704c && _0x192290(427) !== _0x21704c) {
                                        const _0x46d855 = { 'params': {} };
                                        null === _0x4d3468 ? _0x4d3468 = [_0x46d855] : _0x4d3468[_0x192290(381)](_0x46d855), _0x4bc392++;
                                    }
                                    if (_0x44148f === _0x4bc392 && (_0x411064 = !0, _0x3e5614 = 0), !_0x411064) {
                                        const _0x43b37d = { 'params': { 'passingSchemas': _0x3e5614 } };
                                        return null === _0x4d3468 ? _0x4d3468 = [_0x43b37d] : _0x4d3468['push'](_0x43b37d), _0x4bc392++, d[_0x192290(374)] = _0x4d3468, !1;
                                    }
                                    _0x4bc392 = _0x412bb1, null !== _0x4d3468 && (_0x412bb1 ? _0x4d3468[_0x192290(375)] = _0x412bb1 : _0x4d3468 = null), _0x4005b3 = _0x5b5b1d === _0x4bc392;
                                } else
                                    _0x4005b3 = !0;
                                if (_0x4005b3) {
                                    if (void 0 !== _0x1ed88e[_0x192290(428)]) {
                                        const _0x2c8362 = _0x4bc392;
                                        m(_0x1ed88e[_0x192290(428)], {
                                            'instancePath': _0x4b5515 + _0x192290(429),
                                            'parentData': _0x1ed88e,
                                            'parentDataProperty': _0x192290(428),
                                            'rootData': _0x2ca390
                                        }) || (_0x4d3468 = null === _0x4d3468 ? m[_0x192290(374)] : _0x4d3468['concat'](m['errors']), _0x4bc392 = _0x4d3468[_0x192290(375)]), _0x4005b3 = _0x2c8362 === _0x4bc392;
                                    } else
                                        _0x4005b3 = !0;
                                    if (_0x4005b3) {
                                        if (void 0 !== _0x1ed88e[_0x192290(430)]) {
                                            let _0x239274 = _0x1ed88e[_0x192290(430)];
                                            const _0x59c024 = _0x4bc392, _0x131d7f = _0x4bc392;
                                            let _0x3c9fc8 = !1;
                                            const _0xf95a3b = _0x4bc392;
                                            if (!1 !== _0x239274) {
                                                const _0x3bd53d = { 'params': {} };
                                                null === _0x4d3468 ? _0x4d3468 = [_0x3bd53d] : _0x4d3468[_0x192290(381)](_0x3bd53d), _0x4bc392++;
                                            }
                                            var _0x5d86b0 = _0xf95a3b === _0x4bc392;
                                            if (_0x3c9fc8 = _0x3c9fc8 || _0x5d86b0, !_0x3c9fc8) {
                                                const _0x2497f8 = _0x4bc392;
                                                if (_0x4bc392 === _0x2497f8) {
                                                    if (_0x192290(365) == typeof _0x239274) {
                                                        if (_0x239274[_0x192290(375)] < 1) {
                                                            const _0x2c01d8 = { 'params': {} };
                                                            null === _0x4d3468 ? _0x4d3468 = [_0x2c01d8] : _0x4d3468[_0x192290(381)](_0x2c01d8), _0x4bc392++;
                                                        }
                                                    } else {
                                                        const _0x24aa0f = { 'params': { 'type': _0x192290(365) } };
                                                        null === _0x4d3468 ? _0x4d3468 = [_0x24aa0f] : _0x4d3468['push'](_0x24aa0f), _0x4bc392++;
                                                    }
                                                }
                                                _0x5d86b0 = _0x2497f8 === _0x4bc392, _0x3c9fc8 = _0x3c9fc8 || _0x5d86b0;
                                            }
                                            if (!_0x3c9fc8) {
                                                const _0xadc982 = { 'params': {} };
                                                return null === _0x4d3468 ? _0x4d3468 = [_0xadc982] : _0x4d3468[_0x192290(381)](_0xadc982), _0x4bc392++, d[_0x192290(374)] = _0x4d3468, !1;
                                            }
                                            _0x4bc392 = _0x131d7f, null !== _0x4d3468 && (_0x131d7f ? _0x4d3468[_0x192290(375)] = _0x131d7f : _0x4d3468 = null), _0x4005b3 = _0x59c024 === _0x4bc392;
                                        } else
                                            _0x4005b3 = !0;
                                        if (_0x4005b3) {
                                            if (void 0 !== _0x1ed88e[_0x192290(407)]) {
                                                let _0x1d7fe5 = _0x1ed88e['shareScope'];
                                                const _0xb17c93 = _0x4bc392;
                                                if (_0x4bc392 === _0xb17c93) {
                                                    if (_0x192290(365) != typeof _0x1d7fe5)
                                                        return d[_0x192290(374)] = [{ 'params': { 'type': _0x192290(365) } }], !1;
                                                    if (_0x1d7fe5[_0x192290(375)] < 1)
                                                        return d['errors'] = [{ 'params': {} }], !1;
                                                }
                                                _0x4005b3 = _0xb17c93 === _0x4bc392;
                                            } else
                                                _0x4005b3 = !0;
                                            if (_0x4005b3) {
                                                if (void 0 !== _0x1ed88e[_0x192290(431)]) {
                                                    const _0x599a77 = _0x4bc392;
                                                    D(_0x1ed88e[_0x192290(431)], {
                                                        'instancePath': _0x4b5515 + _0x192290(432),
                                                        'parentData': _0x1ed88e,
                                                        'parentDataProperty': _0x192290(431),
                                                        'rootData': _0x2ca390
                                                    }) || (_0x4d3468 = null === _0x4d3468 ? D[_0x192290(374)] : _0x4d3468[_0x192290(380)](D[_0x192290(374)]), _0x4bc392 = _0x4d3468[_0x192290(375)]), _0x4005b3 = _0x599a77 === _0x4bc392;
                                                } else
                                                    _0x4005b3 = !0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return d['errors'] = _0x4d3468, 0 === _0x4bc392;
}