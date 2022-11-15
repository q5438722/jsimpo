const r = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
module[_0x5c01dd(118)] = d, module['exports'][_0x5c01dd(119)] = d;
const t = {
        'exposes': { '$ref': _0x5c01dd(120) },
        'filename': {
            'type': _0x5c01dd(121),
            'absolutePath': !1
        },
        'library': { '$ref': _0x5c01dd(122) },
        'name': { 'type': 'string' },
        'remoteType': { 'oneOf': [{ '$ref': _0x5c01dd(123) }] },
        'remotes': { '$ref': _0x5c01dd(124) },
        'runtime': { '$ref': _0x5c01dd(125) },
        'shareScope': {
            'type': _0x5c01dd(121),
            'minLength': 1
        },
        'shared': { '$ref': '#/definitions/Shared' }
    }, e = Object[_0x5c01dd(126)][_0x5c01dd(127)];
function n(_0xd4193b, {
    instancePath: _0x17a7b5 = '',
    parentData: _0xd38548,
    parentDataProperty: _0x43150c,
    rootData: _0x2f2981 = _0xd4193b
} = {}) {
    const _0x295832 = _0x5c01dd;
    if (!Array[_0x295832(128)](_0xd4193b))
        return n[_0x295832(129)] = [{ 'params': { 'type': _0x295832(130) } }], !1;
    {
        const _0x285863 = _0xd4193b['length'];
        for (let _0x4fadbb = 0; _0x4fadbb < _0x285863; _0x4fadbb++) {
            let _0x434442 = _0xd4193b[_0x4fadbb];
            const _0x2d52f0 = 0;
            if (_0x295832(121) != typeof _0x434442)
                return n[_0x295832(129)] = [{ 'params': { 'type': 'string' } }], !1;
            if (_0x434442[_0x295832(131)] < 1)
                return n[_0x295832(129)] = [{ 'params': {} }], !1;
            if (0 !== _0x2d52f0)
                break;
        }
    }
    return n[_0x295832(129)] = null, !0;
}
function a(_0x3a05d4, {
    instancePath: _0x3c1d10 = '',
    parentData: _0x4a212b,
    parentDataProperty: _0x1a7757,
    rootData: _0x3962b9 = _0x3a05d4
} = {}) {
    const _0x551027 = _0x5c01dd;
    let _0x46ff5d = null, _0x5d1bc1 = 0;
    if (0 === _0x5d1bc1) {
        if (!_0x3a05d4 || _0x551027(132) != typeof _0x3a05d4 || Array['isArray'](_0x3a05d4))
            return a['errors'] = [{ 'params': { 'type': _0x551027(132) } }], !1;
        {
            let _0x4b0c61;
            if (void 0 === _0x3a05d4[_0x551027(133)] && (_0x4b0c61 = _0x551027(133)))
                return a[_0x551027(129)] = [{ 'params': { 'missingProperty': _0x4b0c61 } }], !1;
            {
                const _0x2b7729 = _0x5d1bc1;
                for (const _0x2fa253 in _0x3a05d4)
                    if (_0x551027(133) !== _0x2fa253 && _0x551027(134) !== _0x2fa253)
                        return a[_0x551027(129)] = [{ 'params': { 'additionalProperty': _0x2fa253 } }], !1;
                if (_0x2b7729 === _0x5d1bc1) {
                    if (void 0 !== _0x3a05d4['import']) {
                        let _0x3d621d = _0x3a05d4['import'];
                        const _0x5136c1 = _0x5d1bc1, _0xa59a5d = _0x5d1bc1;
                        let _0x925ac4 = !1;
                        const _0x5e4382 = _0x5d1bc1;
                        if (_0x5d1bc1 == _0x5d1bc1) {
                            if (_0x551027(121) == typeof _0x3d621d) {
                                if (_0x3d621d[_0x551027(131)] < 1) {
                                    const _0x557af9 = { 'params': {} };
                                    null === _0x46ff5d ? _0x46ff5d = [_0x557af9] : _0x46ff5d[_0x551027(135)](_0x557af9), _0x5d1bc1++;
                                }
                            } else {
                                const _0x252752 = { 'params': { 'type': 'string' } };
                                null === _0x46ff5d ? _0x46ff5d = [_0x252752] : _0x46ff5d['push'](_0x252752), _0x5d1bc1++;
                            }
                        }
                        var _0x56ebd9 = _0x5e4382 === _0x5d1bc1;
                        if (_0x925ac4 = _0x925ac4 || _0x56ebd9, !_0x925ac4) {
                            const _0x481486 = _0x5d1bc1;
                            n(_0x3d621d, {
                                'instancePath': _0x3c1d10 + _0x551027(136),
                                'parentData': _0x3a05d4,
                                'parentDataProperty': 'import',
                                'rootData': _0x3962b9
                            }) || (_0x46ff5d = null === _0x46ff5d ? n['errors'] : _0x46ff5d[_0x551027(137)](n[_0x551027(129)]), _0x5d1bc1 = _0x46ff5d[_0x551027(131)]), _0x56ebd9 = _0x481486 === _0x5d1bc1, _0x925ac4 = _0x925ac4 || _0x56ebd9;
                        }
                        if (!_0x925ac4) {
                            const _0x933237 = { 'params': {} };
                            return null === _0x46ff5d ? _0x46ff5d = [_0x933237] : _0x46ff5d[_0x551027(135)](_0x933237), _0x5d1bc1++, a[_0x551027(129)] = _0x46ff5d, !1;
                        }
                        _0x5d1bc1 = _0xa59a5d, null !== _0x46ff5d && (_0xa59a5d ? _0x46ff5d[_0x551027(131)] = _0xa59a5d : _0x46ff5d = null);
                        var _0x57e9a7 = _0x5136c1 === _0x5d1bc1;
                    } else
                        _0x57e9a7 = !0;
                    if (_0x57e9a7) {
                        if (void 0 !== _0x3a05d4[_0x551027(134)]) {
                            const _0x3ae162 = _0x5d1bc1;
                            if (_0x551027(121) != typeof _0x3a05d4[_0x551027(134)])
                                return a[_0x551027(129)] = [{ 'params': { 'type': _0x551027(121) } }], !1;
                            _0x57e9a7 = _0x3ae162 === _0x5d1bc1;
                        } else
                            _0x57e9a7 = !0;
                    }
                }
            }
        }
    }
    return a['errors'] = _0x46ff5d, 0 === _0x5d1bc1;
}
function s(_0x585360, {
    instancePath: _0x4dbc5a = '',
    parentData: _0x3a0326,
    parentDataProperty: _0x1d53fa,
    rootData: _0x4f5009 = _0x585360
} = {}) {
    const _0x7b62b9 = _0x5c01dd;
    let _0x3b0c30 = null, _0xf2e0d4 = 0;
    if (0 === _0xf2e0d4) {
        if (!_0x585360 || _0x7b62b9(132) != typeof _0x585360 || Array[_0x7b62b9(128)](_0x585360))
            return s[_0x7b62b9(129)] = [{ 'params': { 'type': _0x7b62b9(132) } }], !1;
        for (const _0x5d614f in _0x585360) {
            let _0x4e64eb = _0x585360[_0x5d614f];
            const _0x5319fb = _0xf2e0d4, _0x5e3ded = _0xf2e0d4;
            let _0x5bb82d = !1;
            const _0x4ab087 = _0xf2e0d4;
            a(_0x4e64eb, {
                'instancePath': _0x4dbc5a + '/' + _0x5d614f['replace'](/~/g, '~0')['replace'](/\//g, '~1'),
                'parentData': _0x585360,
                'parentDataProperty': _0x5d614f,
                'rootData': _0x4f5009
            }) || (_0x3b0c30 = null === _0x3b0c30 ? a['errors'] : _0x3b0c30['concat'](a['errors']), _0xf2e0d4 = _0x3b0c30[_0x7b62b9(131)]);
            var _0x529341 = _0x4ab087 === _0xf2e0d4;
            if (_0x5bb82d = _0x5bb82d || _0x529341, !_0x5bb82d) {
                const _0x5674d0 = _0xf2e0d4;
                if (_0xf2e0d4 == _0xf2e0d4) {
                    if (_0x7b62b9(121) == typeof _0x4e64eb) {
                        if (_0x4e64eb['length'] < 1) {
                            const _0x59a7f3 = { 'params': {} };
                            null === _0x3b0c30 ? _0x3b0c30 = [_0x59a7f3] : _0x3b0c30['push'](_0x59a7f3), _0xf2e0d4++;
                        }
                    } else {
                        const _0x23a0a7 = { 'params': { 'type': 'string' } };
                        null === _0x3b0c30 ? _0x3b0c30 = [_0x23a0a7] : _0x3b0c30['push'](_0x23a0a7), _0xf2e0d4++;
                    }
                }
                if (_0x529341 = _0x5674d0 === _0xf2e0d4, _0x5bb82d = _0x5bb82d || _0x529341, !_0x5bb82d) {
                    const _0x8c9c9e = _0xf2e0d4;
                    n(_0x4e64eb, {
                        'instancePath': _0x4dbc5a + '/' + _0x5d614f[_0x7b62b9(138)](/~/g, '~0')[_0x7b62b9(138)](/\//g, '~1'),
                        'parentData': _0x585360,
                        'parentDataProperty': _0x5d614f,
                        'rootData': _0x4f5009
                    }) || (_0x3b0c30 = null === _0x3b0c30 ? n['errors'] : _0x3b0c30[_0x7b62b9(137)](n['errors']), _0xf2e0d4 = _0x3b0c30[_0x7b62b9(131)]), _0x529341 = _0x8c9c9e === _0xf2e0d4, _0x5bb82d = _0x5bb82d || _0x529341;
                }
            }
            if (!_0x5bb82d) {
                const _0x2812fc = { 'params': {} };
                return null === _0x3b0c30 ? _0x3b0c30 = [_0x2812fc] : _0x3b0c30[_0x7b62b9(135)](_0x2812fc), _0xf2e0d4++, s[_0x7b62b9(129)] = _0x3b0c30, !1;
            }
            if (_0xf2e0d4 = _0x5e3ded, null !== _0x3b0c30 && (_0x5e3ded ? _0x3b0c30[_0x7b62b9(131)] = _0x5e3ded : _0x3b0c30 = null), _0x5319fb !== _0xf2e0d4)
                break;
        }
    }
    return s[_0x7b62b9(129)] = _0x3b0c30, 0 === _0xf2e0d4;
}
function o(_0x117c21, {
    instancePath: _0x4cd4d9 = '',
    parentData: _0x3efe44,
    parentDataProperty: _0x5cba05,
    rootData: _0x158382 = _0x117c21
} = {}) {
    const _0xac2224 = _0x5c01dd;
    let _0x101880 = null, _0x16620a = 0;
    const _0xe5a2e7 = _0x16620a;
    let _0x415067 = !1;
    const _0x36538d = _0x16620a;
    if (_0x16620a === _0x36538d) {
        if (Array[_0xac2224(128)](_0x117c21)) {
            const _0x120f9e = _0x117c21[_0xac2224(131)];
            for (let _0x1cc1a0 = 0; _0x1cc1a0 < _0x120f9e; _0x1cc1a0++) {
                let _0x4ef95b = _0x117c21[_0x1cc1a0];
                const _0x539c27 = _0x16620a, _0x281720 = _0x16620a;
                let _0x22037b = !1;
                const _0xdb3393 = _0x16620a;
                if (_0x16620a == _0x16620a) {
                    if (_0xac2224(121) == typeof _0x4ef95b) {
                        if (_0x4ef95b['length'] < 1) {
                            const _0x27d844 = { 'params': {} };
                            null === _0x101880 ? _0x101880 = [_0x27d844] : _0x101880[_0xac2224(135)](_0x27d844), _0x16620a++;
                        }
                    } else {
                        const _0x4a4c4b = { 'params': { 'type': _0xac2224(121) } };
                        null === _0x101880 ? _0x101880 = [_0x4a4c4b] : _0x101880['push'](_0x4a4c4b), _0x16620a++;
                    }
                }
                var _0x3f686c = _0xdb3393 === _0x16620a;
                if (_0x22037b = _0x22037b || _0x3f686c, !_0x22037b) {
                    const _0x33eabe = _0x16620a;
                    s(_0x4ef95b, {
                        'instancePath': _0x4cd4d9 + '/' + _0x1cc1a0,
                        'parentData': _0x117c21,
                        'parentDataProperty': _0x1cc1a0,
                        'rootData': _0x158382
                    }) || (_0x101880 = null === _0x101880 ? s[_0xac2224(129)] : _0x101880[_0xac2224(137)](s[_0xac2224(129)]), _0x16620a = _0x101880[_0xac2224(131)]), _0x3f686c = _0x33eabe === _0x16620a, _0x22037b = _0x22037b || _0x3f686c;
                }
                if (_0x22037b)
                    _0x16620a = _0x281720, null !== _0x101880 && (_0x281720 ? _0x101880[_0xac2224(131)] = _0x281720 : _0x101880 = null);
                else {
                    const _0x28fb86 = { 'params': {} };
                    null === _0x101880 ? _0x101880 = [_0x28fb86] : _0x101880[_0xac2224(135)](_0x28fb86), _0x16620a++;
                }
                if (_0x539c27 !== _0x16620a)
                    break;
            }
        } else {
            const _0x3e2a35 = { 'params': { 'type': _0xac2224(130) } };
            null === _0x101880 ? _0x101880 = [_0x3e2a35] : _0x101880['push'](_0x3e2a35), _0x16620a++;
        }
    }
    var _0x41fec0 = _0x36538d === _0x16620a;
    if (_0x415067 = _0x415067 || _0x41fec0, !_0x415067) {
        const _0xfb2f8d = _0x16620a;
        s(_0x117c21, {
            'instancePath': _0x4cd4d9,
            'parentData': _0x3efe44,
            'parentDataProperty': _0x5cba05,
            'rootData': _0x158382
        }) || (_0x101880 = null === _0x101880 ? s[_0xac2224(129)] : _0x101880['concat'](s[_0xac2224(129)]), _0x16620a = _0x101880[_0xac2224(131)]), _0x41fec0 = _0xfb2f8d === _0x16620a, _0x415067 = _0x415067 || _0x41fec0;
    }
    if (!_0x415067) {
        const _0x168b89 = { 'params': {} };
        return null === _0x101880 ? _0x101880 = [_0x168b89] : _0x101880[_0xac2224(135)](_0x168b89), _0x16620a++, o[_0xac2224(129)] = _0x101880, !1;
    }
    return _0x16620a = _0xe5a2e7, null !== _0x101880 && (_0xe5a2e7 ? _0x101880['length'] = _0xe5a2e7 : _0x101880 = null), o[_0xac2224(129)] = _0x101880, 0 === _0x16620a;
}
function l(_0x5be6b7, {
    instancePath: _0xc6d9b8 = '',
    parentData: _0x2e5681,
    parentDataProperty: _0x23d53a,
    rootData: _0x220819 = _0x5be6b7
} = {}) {
    const _0x480f51 = _0x5c01dd;
    let _0x2e2da1 = null, _0x1f5d88 = 0;
    const _0x29eec9 = _0x1f5d88;
    let _0xd2e9db = !1;
    const _0x1fb15c = _0x1f5d88;
    if ('string' != typeof _0x5be6b7) {
        const _0x1cc00f = { 'params': { 'type': 'string' } };
        null === _0x2e2da1 ? _0x2e2da1 = [_0x1cc00f] : _0x2e2da1[_0x480f51(135)](_0x1cc00f), _0x1f5d88++;
    }
    var _0x2810d3 = _0x1fb15c === _0x1f5d88;
    if (_0xd2e9db = _0xd2e9db || _0x2810d3, !_0xd2e9db) {
        const _0x11ace8 = _0x1f5d88;
        if (_0x1f5d88 == _0x1f5d88) {
            if (_0x5be6b7 && _0x480f51(132) == typeof _0x5be6b7 && !Array[_0x480f51(128)](_0x5be6b7)) {
                const _0x2a6248 = _0x1f5d88;
                for (const _0x47bfd5 in _0x5be6b7)
                    if (_0x480f51(139) !== _0x47bfd5 && _0x480f51(140) !== _0x47bfd5 && _0x480f51(141) !== _0x47bfd5 && 'root' !== _0x47bfd5) {
                        const _0x37d902 = { 'params': { 'additionalProperty': _0x47bfd5 } };
                        null === _0x2e2da1 ? _0x2e2da1 = [_0x37d902] : _0x2e2da1['push'](_0x37d902), _0x1f5d88++;
                        break;
                    }
                if (_0x2a6248 === _0x1f5d88) {
                    if (void 0 !== _0x5be6b7['amd']) {
                        const _0x322a84 = _0x1f5d88;
                        if (_0x480f51(121) != typeof _0x5be6b7[_0x480f51(139)]) {
                            const _0x1751f2 = { 'params': { 'type': _0x480f51(121) } };
                            null === _0x2e2da1 ? _0x2e2da1 = [_0x1751f2] : _0x2e2da1[_0x480f51(135)](_0x1751f2), _0x1f5d88++;
                        }
                        var _0xe3e473 = _0x322a84 === _0x1f5d88;
                    } else
                        _0xe3e473 = !0;
                    if (_0xe3e473) {
                        if (void 0 !== _0x5be6b7[_0x480f51(140)]) {
                            const _0x790b2f = _0x1f5d88;
                            if (_0x480f51(121) != typeof _0x5be6b7[_0x480f51(140)]) {
                                const _0x295685 = { 'params': { 'type': _0x480f51(121) } };
                                null === _0x2e2da1 ? _0x2e2da1 = [_0x295685] : _0x2e2da1[_0x480f51(135)](_0x295685), _0x1f5d88++;
                            }
                            _0xe3e473 = _0x790b2f === _0x1f5d88;
                        } else
                            _0xe3e473 = !0;
                        if (_0xe3e473) {
                            if (void 0 !== _0x5be6b7['commonjs2']) {
                                const _0x1adfa7 = _0x1f5d88;
                                if (_0x480f51(121) != typeof _0x5be6b7[_0x480f51(141)]) {
                                    const _0x5d5eef = { 'params': { 'type': _0x480f51(121) } };
                                    null === _0x2e2da1 ? _0x2e2da1 = [_0x5d5eef] : _0x2e2da1['push'](_0x5d5eef), _0x1f5d88++;
                                }
                                _0xe3e473 = _0x1adfa7 === _0x1f5d88;
                            } else
                                _0xe3e473 = !0;
                            if (_0xe3e473) {
                                if (void 0 !== _0x5be6b7[_0x480f51(142)]) {
                                    const _0x5062b0 = _0x1f5d88;
                                    if (_0x480f51(121) != typeof _0x5be6b7[_0x480f51(142)]) {
                                        const _0x237006 = { 'params': { 'type': _0x480f51(121) } };
                                        null === _0x2e2da1 ? _0x2e2da1 = [_0x237006] : _0x2e2da1[_0x480f51(135)](_0x237006), _0x1f5d88++;
                                    }
                                    _0xe3e473 = _0x5062b0 === _0x1f5d88;
                                } else
                                    _0xe3e473 = !0;
                            }
                        }
                    }
                }
            } else {
                const _0x270c5f = { 'params': { 'type': _0x480f51(132) } };
                null === _0x2e2da1 ? _0x2e2da1 = [_0x270c5f] : _0x2e2da1['push'](_0x270c5f), _0x1f5d88++;
            }
        }
        _0x2810d3 = _0x11ace8 === _0x1f5d88, _0xd2e9db = _0xd2e9db || _0x2810d3;
    }
    if (!_0xd2e9db) {
        const _0x275e8a = { 'params': {} };
        return null === _0x2e2da1 ? _0x2e2da1 = [_0x275e8a] : _0x2e2da1[_0x480f51(135)](_0x275e8a), _0x1f5d88++, l[_0x480f51(129)] = _0x2e2da1, !1;
    }
    return _0x1f5d88 = _0x29eec9, null !== _0x2e2da1 && (_0x29eec9 ? _0x2e2da1[_0x480f51(131)] = _0x29eec9 : _0x2e2da1 = null), l[_0x480f51(129)] = _0x2e2da1, 0 === _0x1f5d88;
}
function i(_0x4872f6, {
    instancePath: _0x30dcf1 = '',
    parentData: _0x4569e4,
    parentDataProperty: _0x10065e,
    rootData: _0x3137fd = _0x4872f6
} = {}) {
    const _0x104f0e = _0x5c01dd;
    let _0x9bbf02 = null, _0x2e66fa = 0;
    const _0x3de9ed = _0x2e66fa;
    let _0xbc370f = !1;
    const _0x46d26b = _0x2e66fa;
    if (_0x2e66fa === _0x46d26b) {
        if (Array['isArray'](_0x4872f6)) {
            if (_0x4872f6['length'] < 1) {
                const _0x1b13e9 = { 'params': { 'limit': 1 } };
                null === _0x9bbf02 ? _0x9bbf02 = [_0x1b13e9] : _0x9bbf02[_0x104f0e(135)](_0x1b13e9), _0x2e66fa++;
            } else {
                const _0x1476d0 = _0x4872f6[_0x104f0e(131)];
                for (let _0x388e4e = 0; _0x388e4e < _0x1476d0; _0x388e4e++) {
                    let _0x580ea1 = _0x4872f6[_0x388e4e];
                    const _0x376075 = _0x2e66fa;
                    if (_0x2e66fa === _0x376075) {
                        if (_0x104f0e(121) == typeof _0x580ea1) {
                            if (_0x580ea1['length'] < 1) {
                                const _0x223a5e = { 'params': {} };
                                null === _0x9bbf02 ? _0x9bbf02 = [_0x223a5e] : _0x9bbf02['push'](_0x223a5e), _0x2e66fa++;
                            }
                        } else {
                            const _0x54af75 = { 'params': { 'type': 'string' } };
                            null === _0x9bbf02 ? _0x9bbf02 = [_0x54af75] : _0x9bbf02[_0x104f0e(135)](_0x54af75), _0x2e66fa++;
                        }
                    }
                    if (_0x376075 !== _0x2e66fa)
                        break;
                }
            }
        } else {
            const _0x2a6e37 = { 'params': { 'type': _0x104f0e(130) } };
            null === _0x9bbf02 ? _0x9bbf02 = [_0x2a6e37] : _0x9bbf02[_0x104f0e(135)](_0x2a6e37), _0x2e66fa++;
        }
    }
    var _0x5973f4 = _0x46d26b === _0x2e66fa;
    if (_0xbc370f = _0xbc370f || _0x5973f4, !_0xbc370f) {
        const _0x1dddac = _0x2e66fa;
        if (_0x2e66fa === _0x1dddac) {
            if (_0x104f0e(121) == typeof _0x4872f6) {
                if (_0x4872f6['length'] < 1) {
                    const _0x4d8f0e = { 'params': {} };
                    null === _0x9bbf02 ? _0x9bbf02 = [_0x4d8f0e] : _0x9bbf02[_0x104f0e(135)](_0x4d8f0e), _0x2e66fa++;
                }
            } else {
                const _0x53c007 = { 'params': { 'type': _0x104f0e(121) } };
                null === _0x9bbf02 ? _0x9bbf02 = [_0x53c007] : _0x9bbf02['push'](_0x53c007), _0x2e66fa++;
            }
        }
        if (_0x5973f4 = _0x1dddac === _0x2e66fa, _0xbc370f = _0xbc370f || _0x5973f4, !_0xbc370f) {
            const _0x41d762 = _0x2e66fa;
            if (_0x2e66fa == _0x2e66fa) {
                if (_0x4872f6 && _0x104f0e(132) == typeof _0x4872f6 && !Array['isArray'](_0x4872f6)) {
                    const _0x22e1e4 = _0x2e66fa;
                    for (const _0x4c6cbc in _0x4872f6)
                        if ('amd' !== _0x4c6cbc && _0x104f0e(140) !== _0x4c6cbc && _0x104f0e(142) !== _0x4c6cbc) {
                            const _0x3f96c4 = { 'params': { 'additionalProperty': _0x4c6cbc } };
                            null === _0x9bbf02 ? _0x9bbf02 = [_0x3f96c4] : _0x9bbf02[_0x104f0e(135)](_0x3f96c4), _0x2e66fa++;
                            break;
                        }
                    if (_0x22e1e4 === _0x2e66fa) {
                        if (void 0 !== _0x4872f6[_0x104f0e(139)]) {
                            let _0x18482e = _0x4872f6[_0x104f0e(139)];
                            const _0x4a2be1 = _0x2e66fa;
                            if (_0x2e66fa === _0x4a2be1) {
                                if (_0x104f0e(121) == typeof _0x18482e) {
                                    if (_0x18482e[_0x104f0e(131)] < 1) {
                                        const _0x466a47 = { 'params': {} };
                                        null === _0x9bbf02 ? _0x9bbf02 = [_0x466a47] : _0x9bbf02[_0x104f0e(135)](_0x466a47), _0x2e66fa++;
                                    }
                                } else {
                                    const _0x4ee560 = { 'params': { 'type': _0x104f0e(121) } };
                                    null === _0x9bbf02 ? _0x9bbf02 = [_0x4ee560] : _0x9bbf02[_0x104f0e(135)](_0x4ee560), _0x2e66fa++;
                                }
                            }
                            var _0x292fc5 = _0x4a2be1 === _0x2e66fa;
                        } else
                            _0x292fc5 = !0;
                        if (_0x292fc5) {
                            if (void 0 !== _0x4872f6['commonjs']) {
                                let _0x2488a8 = _0x4872f6[_0x104f0e(140)];
                                const _0x35e75c = _0x2e66fa;
                                if (_0x2e66fa === _0x35e75c) {
                                    if (_0x104f0e(121) == typeof _0x2488a8) {
                                        if (_0x2488a8[_0x104f0e(131)] < 1) {
                                            const _0x3bb3e5 = { 'params': {} };
                                            null === _0x9bbf02 ? _0x9bbf02 = [_0x3bb3e5] : _0x9bbf02['push'](_0x3bb3e5), _0x2e66fa++;
                                        }
                                    } else {
                                        const _0x32ec2c = { 'params': { 'type': 'string' } };
                                        null === _0x9bbf02 ? _0x9bbf02 = [_0x32ec2c] : _0x9bbf02['push'](_0x32ec2c), _0x2e66fa++;
                                    }
                                }
                                _0x292fc5 = _0x35e75c === _0x2e66fa;
                            } else
                                _0x292fc5 = !0;
                            if (_0x292fc5) {
                                if (void 0 !== _0x4872f6[_0x104f0e(142)]) {
                                    let _0x57d17d = _0x4872f6[_0x104f0e(142)];
                                    const _0x28fefd = _0x2e66fa, _0x341e = _0x2e66fa;
                                    let _0x1b615c = !1;
                                    const _0x2beeff = _0x2e66fa;
                                    if (_0x2e66fa === _0x2beeff) {
                                        if (Array[_0x104f0e(128)](_0x57d17d)) {
                                            const _0x117633 = _0x57d17d['length'];
                                            for (let _0x1abfc4 = 0; _0x1abfc4 < _0x117633; _0x1abfc4++) {
                                                let _0xb7c5c8 = _0x57d17d[_0x1abfc4];
                                                const _0x4b42cb = _0x2e66fa;
                                                if (_0x2e66fa === _0x4b42cb) {
                                                    if (_0x104f0e(121) == typeof _0xb7c5c8) {
                                                        if (_0xb7c5c8[_0x104f0e(131)] < 1) {
                                                            const _0x5c1e14 = { 'params': {} };
                                                            null === _0x9bbf02 ? _0x9bbf02 = [_0x5c1e14] : _0x9bbf02[_0x104f0e(135)](_0x5c1e14), _0x2e66fa++;
                                                        }
                                                    } else {
                                                        const _0x15290a = { 'params': { 'type': 'string' } };
                                                        null === _0x9bbf02 ? _0x9bbf02 = [_0x15290a] : _0x9bbf02[_0x104f0e(135)](_0x15290a), _0x2e66fa++;
                                                    }
                                                }
                                                if (_0x4b42cb !== _0x2e66fa)
                                                    break;
                                            }
                                        } else {
                                            const _0x3a2ab6 = { 'params': { 'type': _0x104f0e(130) } };
                                            null === _0x9bbf02 ? _0x9bbf02 = [_0x3a2ab6] : _0x9bbf02['push'](_0x3a2ab6), _0x2e66fa++;
                                        }
                                    }
                                    var _0x136b75 = _0x2beeff === _0x2e66fa;
                                    if (_0x1b615c = _0x1b615c || _0x136b75, !_0x1b615c) {
                                        const _0x243b88 = _0x2e66fa;
                                        if (_0x2e66fa === _0x243b88) {
                                            if (_0x104f0e(121) == typeof _0x57d17d) {
                                                if (_0x57d17d[_0x104f0e(131)] < 1) {
                                                    const _0x2ebd70 = { 'params': {} };
                                                    null === _0x9bbf02 ? _0x9bbf02 = [_0x2ebd70] : _0x9bbf02[_0x104f0e(135)](_0x2ebd70), _0x2e66fa++;
                                                }
                                            } else {
                                                const _0x1f291f = { 'params': { 'type': _0x104f0e(121) } };
                                                null === _0x9bbf02 ? _0x9bbf02 = [_0x1f291f] : _0x9bbf02[_0x104f0e(135)](_0x1f291f), _0x2e66fa++;
                                            }
                                        }
                                        _0x136b75 = _0x243b88 === _0x2e66fa, _0x1b615c = _0x1b615c || _0x136b75;
                                    }
                                    if (_0x1b615c)
                                        _0x2e66fa = _0x341e, null !== _0x9bbf02 && (_0x341e ? _0x9bbf02['length'] = _0x341e : _0x9bbf02 = null);
                                    else {
                                        const _0x1f7788 = { 'params': {} };
                                        null === _0x9bbf02 ? _0x9bbf02 = [_0x1f7788] : _0x9bbf02[_0x104f0e(135)](_0x1f7788), _0x2e66fa++;
                                    }
                                    _0x292fc5 = _0x28fefd === _0x2e66fa;
                                } else
                                    _0x292fc5 = !0;
                            }
                        }
                    }
                } else {
                    const _0x1911cb = { 'params': { 'type': _0x104f0e(132) } };
                    null === _0x9bbf02 ? _0x9bbf02 = [_0x1911cb] : _0x9bbf02[_0x104f0e(135)](_0x1911cb), _0x2e66fa++;
                }
            }
            _0x5973f4 = _0x41d762 === _0x2e66fa, _0xbc370f = _0xbc370f || _0x5973f4;
        }
    }
    if (!_0xbc370f) {
        const _0x432ed3 = { 'params': {} };
        return null === _0x9bbf02 ? _0x9bbf02 = [_0x432ed3] : _0x9bbf02[_0x104f0e(135)](_0x432ed3), _0x2e66fa++, i[_0x104f0e(129)] = _0x9bbf02, !1;
    }
    return _0x2e66fa = _0x3de9ed, null !== _0x9bbf02 && (_0x3de9ed ? _0x9bbf02[_0x104f0e(131)] = _0x3de9ed : _0x9bbf02 = null), i['errors'] = _0x9bbf02, 0 === _0x2e66fa;
}
function p(_0x360a07, {
    instancePath: _0x1aa126 = '',
    parentData: _0x1fdaf2,
    parentDataProperty: _0x254664,
    rootData: _0xc937b7 = _0x360a07
} = {}) {
    const _0x153830 = _0x5c01dd;
    let _0x3500d8 = null, _0x25843e = 0;
    if (0 === _0x25843e) {
        if (!_0x360a07 || 'object' != typeof _0x360a07 || Array[_0x153830(128)](_0x360a07))
            return p['errors'] = [{ 'params': { 'type': _0x153830(132) } }], !1;
        {
            let _0xcbeb9c;
            if (void 0 === _0x360a07[_0x153830(143)] && (_0xcbeb9c = 'type'))
                return p[_0x153830(129)] = [{ 'params': { 'missingProperty': _0xcbeb9c } }], !1;
            {
                const _0x281ded = _0x25843e;
                for (const _0xf2cacf in _0x360a07)
                    if ('auxiliaryComment' !== _0xf2cacf && _0x153830(144) !== _0xf2cacf && _0x153830(134) !== _0xf2cacf && _0x153830(143) !== _0xf2cacf && _0x153830(145) !== _0xf2cacf)
                        return p[_0x153830(129)] = [{ 'params': { 'additionalProperty': _0xf2cacf } }], !1;
                if (_0x281ded === _0x25843e) {
                    if (void 0 !== _0x360a07['auxiliaryComment']) {
                        const _0x990e37 = _0x25843e;
                        l(_0x360a07['auxiliaryComment'], {
                            'instancePath': _0x1aa126 + _0x153830(146),
                            'parentData': _0x360a07,
                            'parentDataProperty': _0x153830(147),
                            'rootData': _0xc937b7
                        }) || (_0x3500d8 = null === _0x3500d8 ? l[_0x153830(129)] : _0x3500d8[_0x153830(137)](l[_0x153830(129)]), _0x25843e = _0x3500d8[_0x153830(131)]);
                        var _0x4907b9 = _0x990e37 === _0x25843e;
                    } else
                        _0x4907b9 = !0;
                    if (_0x4907b9) {
                        if (void 0 !== _0x360a07['export']) {
                            let _0x4c3d4e = _0x360a07[_0x153830(144)];
                            const _0x14294d = _0x25843e, _0x563dee = _0x25843e;
                            let _0x54c7a3 = !1;
                            const _0x3f991b = _0x25843e;
                            if (_0x25843e === _0x3f991b) {
                                if (Array['isArray'](_0x4c3d4e)) {
                                    const _0x2bcaa9 = _0x4c3d4e[_0x153830(131)];
                                    for (let _0x22070d = 0; _0x22070d < _0x2bcaa9; _0x22070d++) {
                                        let _0x4e1dc5 = _0x4c3d4e[_0x22070d];
                                        const _0x234748 = _0x25843e;
                                        if (_0x25843e === _0x234748) {
                                            if (_0x153830(121) == typeof _0x4e1dc5) {
                                                if (_0x4e1dc5[_0x153830(131)] < 1) {
                                                    const _0x32c4d6 = { 'params': {} };
                                                    null === _0x3500d8 ? _0x3500d8 = [_0x32c4d6] : _0x3500d8[_0x153830(135)](_0x32c4d6), _0x25843e++;
                                                }
                                            } else {
                                                const _0x1d09cd = { 'params': { 'type': _0x153830(121) } };
                                                null === _0x3500d8 ? _0x3500d8 = [_0x1d09cd] : _0x3500d8[_0x153830(135)](_0x1d09cd), _0x25843e++;
                                            }
                                        }
                                        if (_0x234748 !== _0x25843e)
                                            break;
                                    }
                                } else {
                                    const _0x4be1e4 = { 'params': { 'type': _0x153830(130) } };
                                    null === _0x3500d8 ? _0x3500d8 = [_0x4be1e4] : _0x3500d8[_0x153830(135)](_0x4be1e4), _0x25843e++;
                                }
                            }
                            var _0x1d431b = _0x3f991b === _0x25843e;
                            if (_0x54c7a3 = _0x54c7a3 || _0x1d431b, !_0x54c7a3) {
                                const _0x163d36 = _0x25843e;
                                if (_0x25843e === _0x163d36) {
                                    if (_0x153830(121) == typeof _0x4c3d4e) {
                                        if (_0x4c3d4e[_0x153830(131)] < 1) {
                                            const _0x22ff5b = { 'params': {} };
                                            null === _0x3500d8 ? _0x3500d8 = [_0x22ff5b] : _0x3500d8['push'](_0x22ff5b), _0x25843e++;
                                        }
                                    } else {
                                        const _0x119ae0 = { 'params': { 'type': _0x153830(121) } };
                                        null === _0x3500d8 ? _0x3500d8 = [_0x119ae0] : _0x3500d8['push'](_0x119ae0), _0x25843e++;
                                    }
                                }
                                _0x1d431b = _0x163d36 === _0x25843e, _0x54c7a3 = _0x54c7a3 || _0x1d431b;
                            }
                            if (!_0x54c7a3) {
                                const _0x580388 = { 'params': {} };
                                return null === _0x3500d8 ? _0x3500d8 = [_0x580388] : _0x3500d8['push'](_0x580388), _0x25843e++, p[_0x153830(129)] = _0x3500d8, !1;
                            }
                            _0x25843e = _0x563dee, null !== _0x3500d8 && (_0x563dee ? _0x3500d8['length'] = _0x563dee : _0x3500d8 = null), _0x4907b9 = _0x14294d === _0x25843e;
                        } else
                            _0x4907b9 = !0;
                        if (_0x4907b9) {
                            if (void 0 !== _0x360a07[_0x153830(134)]) {
                                const _0x30058f = _0x25843e;
                                i(_0x360a07[_0x153830(134)], {
                                    'instancePath': _0x1aa126 + _0x153830(148),
                                    'parentData': _0x360a07,
                                    'parentDataProperty': _0x153830(134),
                                    'rootData': _0xc937b7
                                }) || (_0x3500d8 = null === _0x3500d8 ? i[_0x153830(129)] : _0x3500d8[_0x153830(137)](i['errors']), _0x25843e = _0x3500d8[_0x153830(131)]), _0x4907b9 = _0x30058f === _0x25843e;
                            } else
                                _0x4907b9 = !0;
                            if (_0x4907b9) {
                                if (void 0 !== _0x360a07[_0x153830(143)]) {
                                    let _0x51179d = _0x360a07['type'];
                                    const _0x4b46fc = _0x25843e, _0x2ac960 = _0x25843e;
                                    let _0x1e65ee = !1;
                                    const _0x10fdc5 = _0x25843e;
                                    if (_0x153830(149) !== _0x51179d && _0x153830(150) !== _0x51179d && _0x153830(151) !== _0x51179d && _0x153830(152) !== _0x51179d && _0x153830(153) !== _0x51179d && _0x153830(154) !== _0x51179d && _0x153830(155) !== _0x51179d && _0x153830(156) !== _0x51179d && _0x153830(140) !== _0x51179d && 'commonjs2' !== _0x51179d && 'commonjs-module' !== _0x51179d && _0x153830(139) !== _0x51179d && _0x153830(157) !== _0x51179d && 'umd' !== _0x51179d && _0x153830(158) !== _0x51179d && _0x153830(159) !== _0x51179d && _0x153830(160) !== _0x51179d) {
                                        const _0x4c8535 = { 'params': {} };
                                        null === _0x3500d8 ? _0x3500d8 = [_0x4c8535] : _0x3500d8[_0x153830(135)](_0x4c8535), _0x25843e++;
                                    }
                                    var _0x288f76 = _0x10fdc5 === _0x25843e;
                                    if (_0x1e65ee = _0x1e65ee || _0x288f76, !_0x1e65ee) {
                                        const _0x47e25f = _0x25843e;
                                        if (_0x153830(121) != typeof _0x51179d) {
                                            const _0x515130 = { 'params': { 'type': _0x153830(121) } };
                                            null === _0x3500d8 ? _0x3500d8 = [_0x515130] : _0x3500d8[_0x153830(135)](_0x515130), _0x25843e++;
                                        }
                                        _0x288f76 = _0x47e25f === _0x25843e, _0x1e65ee = _0x1e65ee || _0x288f76;
                                    }
                                    if (!_0x1e65ee) {
                                        const _0x25b85d = { 'params': {} };
                                        return null === _0x3500d8 ? _0x3500d8 = [_0x25b85d] : _0x3500d8[_0x153830(135)](_0x25b85d), _0x25843e++, p[_0x153830(129)] = _0x3500d8, !1;
                                    }
                                    _0x25843e = _0x2ac960, null !== _0x3500d8 && (_0x2ac960 ? _0x3500d8[_0x153830(131)] = _0x2ac960 : _0x3500d8 = null), _0x4907b9 = _0x4b46fc === _0x25843e;
                                } else
                                    _0x4907b9 = !0;
                                if (_0x4907b9) {
                                    if (void 0 !== _0x360a07[_0x153830(145)]) {
                                        const _0xe5f71d = _0x25843e;
                                        if (_0x153830(161) != typeof _0x360a07[_0x153830(145)])
                                            return p[_0x153830(129)] = [{ 'params': { 'type': _0x153830(161) } }], !1;
                                        _0x4907b9 = _0xe5f71d === _0x25843e;
                                    } else
                                        _0x4907b9 = !0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return p['errors'] = _0x3500d8, 0 === _0x25843e;
}
function f(_0x73dbae, {
    instancePath: _0x5796b9 = '',
    parentData: _0x45b740,
    parentDataProperty: _0x4b8bb5,
    rootData: _0x55aa2d = _0x73dbae
} = {}) {
    const _0xbf62f4 = _0x5c01dd;
    if (!Array[_0xbf62f4(128)](_0x73dbae))
        return f[_0xbf62f4(129)] = [{ 'params': { 'type': _0xbf62f4(130) } }], !1;
    {
        const _0x13e9a4 = _0x73dbae[_0xbf62f4(131)];
        for (let _0x3dbc4a = 0; _0x3dbc4a < _0x13e9a4; _0x3dbc4a++) {
            let _0x28ccdc = _0x73dbae[_0x3dbc4a];
            const _0x5d26fd = 0;
            if (_0xbf62f4(121) != typeof _0x28ccdc)
                return f[_0xbf62f4(129)] = [{ 'params': { 'type': _0xbf62f4(121) } }], !1;
            if (_0x28ccdc[_0xbf62f4(131)] < 1)
                return f['errors'] = [{ 'params': {} }], !1;
            if (0 !== _0x5d26fd)
                break;
        }
    }
    return f[_0xbf62f4(129)] = null, !0;
}
function u(_0xcc1aea, {
    instancePath: _0x141609 = '',
    parentData: _0x51ea15,
    parentDataProperty: _0xefa2fd,
    rootData: _0x34e748 = _0xcc1aea
} = {}) {
    const _0x365829 = _0x5c01dd;
    let _0x5ab66c = null, _0x2d1034 = 0;
    if (0 === _0x2d1034) {
        if (!_0xcc1aea || _0x365829(132) != typeof _0xcc1aea || Array[_0x365829(128)](_0xcc1aea))
            return u[_0x365829(129)] = [{ 'params': { 'type': _0x365829(132) } }], !1;
        {
            let _0x3dddea;
            if (void 0 === _0xcc1aea[_0x365829(162)] && (_0x3dddea = _0x365829(162)))
                return u[_0x365829(129)] = [{ 'params': { 'missingProperty': _0x3dddea } }], !1;
            {
                const _0xbc01e = _0x2d1034;
                for (const _0x318786 in _0xcc1aea)
                    if (_0x365829(162) !== _0x318786 && 'shareScope' !== _0x318786)
                        return u[_0x365829(129)] = [{ 'params': { 'additionalProperty': _0x318786 } }], !1;
                if (_0xbc01e === _0x2d1034) {
                    if (void 0 !== _0xcc1aea['external']) {
                        let _0xe4ca79 = _0xcc1aea[_0x365829(162)];
                        const _0xe0378b = _0x2d1034, _0x347353 = _0x2d1034;
                        let _0x3769c1 = !1;
                        const _0x157c28 = _0x2d1034;
                        if (_0x2d1034 == _0x2d1034) {
                            if (_0x365829(121) == typeof _0xe4ca79) {
                                if (_0xe4ca79[_0x365829(131)] < 1) {
                                    const _0x21fcb4 = { 'params': {} };
                                    null === _0x5ab66c ? _0x5ab66c = [_0x21fcb4] : _0x5ab66c['push'](_0x21fcb4), _0x2d1034++;
                                }
                            } else {
                                const _0x4cd7f2 = { 'params': { 'type': _0x365829(121) } };
                                null === _0x5ab66c ? _0x5ab66c = [_0x4cd7f2] : _0x5ab66c[_0x365829(135)](_0x4cd7f2), _0x2d1034++;
                            }
                        }
                        var _0x1a1d28 = _0x157c28 === _0x2d1034;
                        if (_0x3769c1 = _0x3769c1 || _0x1a1d28, !_0x3769c1) {
                            const _0x367ee1 = _0x2d1034;
                            f(_0xe4ca79, {
                                'instancePath': _0x141609 + '/external',
                                'parentData': _0xcc1aea,
                                'parentDataProperty': 'external',
                                'rootData': _0x34e748
                            }) || (_0x5ab66c = null === _0x5ab66c ? f[_0x365829(129)] : _0x5ab66c[_0x365829(137)](f[_0x365829(129)]), _0x2d1034 = _0x5ab66c[_0x365829(131)]), _0x1a1d28 = _0x367ee1 === _0x2d1034, _0x3769c1 = _0x3769c1 || _0x1a1d28;
                        }
                        if (!_0x3769c1) {
                            const _0x43ea89 = { 'params': {} };
                            return null === _0x5ab66c ? _0x5ab66c = [_0x43ea89] : _0x5ab66c[_0x365829(135)](_0x43ea89), _0x2d1034++, u[_0x365829(129)] = _0x5ab66c, !1;
                        }
                        _0x2d1034 = _0x347353, null !== _0x5ab66c && (_0x347353 ? _0x5ab66c[_0x365829(131)] = _0x347353 : _0x5ab66c = null);
                        var _0x30ff31 = _0xe0378b === _0x2d1034;
                    } else
                        _0x30ff31 = !0;
                    if (_0x30ff31) {
                        if (void 0 !== _0xcc1aea['shareScope']) {
                            let _0x28b97a = _0xcc1aea[_0x365829(163)];
                            const _0x3bbb54 = _0x2d1034;
                            if (_0x2d1034 === _0x3bbb54) {
                                if (_0x365829(121) != typeof _0x28b97a)
                                    return u[_0x365829(129)] = [{ 'params': { 'type': _0x365829(121) } }], !1;
                                if (_0x28b97a[_0x365829(131)] < 1)
                                    return u[_0x365829(129)] = [{ 'params': {} }], !1;
                            }
                            _0x30ff31 = _0x3bbb54 === _0x2d1034;
                        } else
                            _0x30ff31 = !0;
                    }
                }
            }
        }
    }
    return u[_0x365829(129)] = _0x5ab66c, 0 === _0x2d1034;
}
function c(_0x59e032, {
    instancePath: _0x56fde4 = '',
    parentData: _0x3f7710,
    parentDataProperty: _0x338c4d,
    rootData: _0x1cfa69 = _0x59e032
} = {}) {
    const _0xbefd15 = _0x5c01dd;
    let _0xc2f3c1 = null, _0xb64f60 = 0;
    if (0 === _0xb64f60) {
        if (!_0x59e032 || _0xbefd15(132) != typeof _0x59e032 || Array[_0xbefd15(128)](_0x59e032))
            return c[_0xbefd15(129)] = [{ 'params': { 'type': 'object' } }], !1;
        for (const _0x545db1 in _0x59e032) {
            let _0x46f06f = _0x59e032[_0x545db1];
            const _0x5b4478 = _0xb64f60, _0x206a8b = _0xb64f60;
            let _0xe9c2ff = !1;
            const _0x56cf26 = _0xb64f60;
            u(_0x46f06f, {
                'instancePath': _0x56fde4 + '/' + _0x545db1['replace'](/~/g, '~0')[_0xbefd15(138)](/\//g, '~1'),
                'parentData': _0x59e032,
                'parentDataProperty': _0x545db1,
                'rootData': _0x1cfa69
            }) || (_0xc2f3c1 = null === _0xc2f3c1 ? u[_0xbefd15(129)] : _0xc2f3c1[_0xbefd15(137)](u[_0xbefd15(129)]), _0xb64f60 = _0xc2f3c1[_0xbefd15(131)]);
            var _0x35c884 = _0x56cf26 === _0xb64f60;
            if (_0xe9c2ff = _0xe9c2ff || _0x35c884, !_0xe9c2ff) {
                const _0x33fa8d = _0xb64f60;
                if (_0xb64f60 == _0xb64f60) {
                    if ('string' == typeof _0x46f06f) {
                        if (_0x46f06f[_0xbefd15(131)] < 1) {
                            const _0x2e075e = { 'params': {} };
                            null === _0xc2f3c1 ? _0xc2f3c1 = [_0x2e075e] : _0xc2f3c1[_0xbefd15(135)](_0x2e075e), _0xb64f60++;
                        }
                    } else {
                        const _0x394626 = { 'params': { 'type': 'string' } };
                        null === _0xc2f3c1 ? _0xc2f3c1 = [_0x394626] : _0xc2f3c1[_0xbefd15(135)](_0x394626), _0xb64f60++;
                    }
                }
                if (_0x35c884 = _0x33fa8d === _0xb64f60, _0xe9c2ff = _0xe9c2ff || _0x35c884, !_0xe9c2ff) {
                    const _0x1c000d = _0xb64f60;
                    f(_0x46f06f, {
                        'instancePath': _0x56fde4 + '/' + _0x545db1[_0xbefd15(138)](/~/g, '~0')[_0xbefd15(138)](/\//g, '~1'),
                        'parentData': _0x59e032,
                        'parentDataProperty': _0x545db1,
                        'rootData': _0x1cfa69
                    }) || (_0xc2f3c1 = null === _0xc2f3c1 ? f[_0xbefd15(129)] : _0xc2f3c1[_0xbefd15(137)](f[_0xbefd15(129)]), _0xb64f60 = _0xc2f3c1[_0xbefd15(131)]), _0x35c884 = _0x1c000d === _0xb64f60, _0xe9c2ff = _0xe9c2ff || _0x35c884;
                }
            }
            if (!_0xe9c2ff) {
                const _0x4914d0 = { 'params': {} };
                return null === _0xc2f3c1 ? _0xc2f3c1 = [_0x4914d0] : _0xc2f3c1['push'](_0x4914d0), _0xb64f60++, c[_0xbefd15(129)] = _0xc2f3c1, !1;
            }
            if (_0xb64f60 = _0x206a8b, null !== _0xc2f3c1 && (_0x206a8b ? _0xc2f3c1[_0xbefd15(131)] = _0x206a8b : _0xc2f3c1 = null), _0x5b4478 !== _0xb64f60)
                break;
        }
    }
    return c['errors'] = _0xc2f3c1, 0 === _0xb64f60;
}
function m(_0x5514cb, {
    instancePath: _0x37b801 = '',
    parentData: _0x2327b0,
    parentDataProperty: _0x3277c5,
    rootData: _0x58b851 = _0x5514cb
} = {}) {
    const _0x4fff39 = _0x5c01dd;
    let _0x5f5538 = null, _0x393903 = 0;
    const _0x2d57cc = _0x393903;
    let _0x11deec = !1;
    const _0x3adcc8 = _0x393903;
    if (_0x393903 === _0x3adcc8) {
        if (Array[_0x4fff39(128)](_0x5514cb)) {
            const _0x7f1e6c = _0x5514cb[_0x4fff39(131)];
            for (let _0x4a04ae = 0; _0x4a04ae < _0x7f1e6c; _0x4a04ae++) {
                let _0x24b533 = _0x5514cb[_0x4a04ae];
                const _0xcfeff5 = _0x393903, _0x4ba719 = _0x393903;
                let _0x299588 = !1;
                const _0x4ebce6 = _0x393903;
                if (_0x393903 == _0x393903) {
                    if (_0x4fff39(121) == typeof _0x24b533) {
                        if (_0x24b533[_0x4fff39(131)] < 1) {
                            const _0x3432cc = { 'params': {} };
                            null === _0x5f5538 ? _0x5f5538 = [_0x3432cc] : _0x5f5538[_0x4fff39(135)](_0x3432cc), _0x393903++;
                        }
                    } else {
                        const _0x5992d1 = { 'params': { 'type': _0x4fff39(121) } };
                        null === _0x5f5538 ? _0x5f5538 = [_0x5992d1] : _0x5f5538['push'](_0x5992d1), _0x393903++;
                    }
                }
                var _0xa2f124 = _0x4ebce6 === _0x393903;
                if (_0x299588 = _0x299588 || _0xa2f124, !_0x299588) {
                    const _0x43a5bb = _0x393903;
                    c(_0x24b533, {
                        'instancePath': _0x37b801 + '/' + _0x4a04ae,
                        'parentData': _0x5514cb,
                        'parentDataProperty': _0x4a04ae,
                        'rootData': _0x58b851
                    }) || (_0x5f5538 = null === _0x5f5538 ? c[_0x4fff39(129)] : _0x5f5538[_0x4fff39(137)](c[_0x4fff39(129)]), _0x393903 = _0x5f5538[_0x4fff39(131)]), _0xa2f124 = _0x43a5bb === _0x393903, _0x299588 = _0x299588 || _0xa2f124;
                }
                if (_0x299588)
                    _0x393903 = _0x4ba719, null !== _0x5f5538 && (_0x4ba719 ? _0x5f5538[_0x4fff39(131)] = _0x4ba719 : _0x5f5538 = null);
                else {
                    const _0x4ac62e = { 'params': {} };
                    null === _0x5f5538 ? _0x5f5538 = [_0x4ac62e] : _0x5f5538[_0x4fff39(135)](_0x4ac62e), _0x393903++;
                }
                if (_0xcfeff5 !== _0x393903)
                    break;
            }
        } else {
            const _0x20eb9c = { 'params': { 'type': _0x4fff39(130) } };
            null === _0x5f5538 ? _0x5f5538 = [_0x20eb9c] : _0x5f5538[_0x4fff39(135)](_0x20eb9c), _0x393903++;
        }
    }
    var _0x29df3f = _0x3adcc8 === _0x393903;
    if (_0x11deec = _0x11deec || _0x29df3f, !_0x11deec) {
        const _0x1efda4 = _0x393903;
        c(_0x5514cb, {
            'instancePath': _0x37b801,
            'parentData': _0x2327b0,
            'parentDataProperty': _0x3277c5,
            'rootData': _0x58b851
        }) || (_0x5f5538 = null === _0x5f5538 ? c[_0x4fff39(129)] : _0x5f5538[_0x4fff39(137)](c[_0x4fff39(129)]), _0x393903 = _0x5f5538['length']), _0x29df3f = _0x1efda4 === _0x393903, _0x11deec = _0x11deec || _0x29df3f;
    }
    if (!_0x11deec) {
        const _0x50b438 = { 'params': {} };
        return null === _0x5f5538 ? _0x5f5538 = [_0x50b438] : _0x5f5538['push'](_0x50b438), _0x393903++, m[_0x4fff39(129)] = _0x5f5538, !1;
    }
    return _0x393903 = _0x2d57cc, null !== _0x5f5538 && (_0x2d57cc ? _0x5f5538[_0x4fff39(131)] = _0x2d57cc : _0x5f5538 = null), m[_0x4fff39(129)] = _0x5f5538, 0 === _0x393903;
}
const y = {
    'eager': { 'type': _0x5c01dd(161) },
    'import': {
        'anyOf': [
            { 'enum': [!1] },
            { '$ref': _0x5c01dd(164) }
        ]
    },
    'packageName': {
        'type': _0x5c01dd(121),
        'minLength': 1
    },
    'requiredVersion': {
        'anyOf': [
            { 'enum': [!1] },
            { 'type': _0x5c01dd(121) }
        ]
    },
    'shareKey': {
        'type': _0x5c01dd(121),
        'minLength': 1
    },
    'shareScope': {
        'type': _0x5c01dd(121),
        'minLength': 1
    },
    'singleton': { 'type': 'boolean' },
    'strictVersion': { 'type': _0x5c01dd(161) },
    'version': {
        'anyOf': [
            { 'enum': [!1] },
            { 'type': _0x5c01dd(121) }
        ]
    }
};
function h(_0x1c7129, {
    instancePath: _0x277b66 = '',
    parentData: _0x466e3f,
    parentDataProperty: _0x2f3766,
    rootData: _0x29cf57 = _0x1c7129
} = {}) {
    const _0x4ede98 = _0x5c01dd;
    let _0x116741 = null, _0xbbc758 = 0;
    if (0 === _0xbbc758) {
        if (!_0x1c7129 || 'object' != typeof _0x1c7129 || Array['isArray'](_0x1c7129))
            return h[_0x4ede98(129)] = [{ 'params': { 'type': _0x4ede98(132) } }], !1;
        {
            const _0x4c4d9a = _0xbbc758;
            for (const _0x3951d7 in _0x1c7129)
                if (!e[_0x4ede98(165)](y, _0x3951d7))
                    return h[_0x4ede98(129)] = [{ 'params': { 'additionalProperty': _0x3951d7 } }], !1;
            if (_0x4c4d9a === _0xbbc758) {
                if (void 0 !== _0x1c7129[_0x4ede98(166)]) {
                    const _0x523ee5 = _0xbbc758;
                    if (_0x4ede98(161) != typeof _0x1c7129[_0x4ede98(166)])
                        return h['errors'] = [{ 'params': { 'type': 'boolean' } }], !1;
                    var _0xea2df7 = _0x523ee5 === _0xbbc758;
                } else
                    _0xea2df7 = !0;
                if (_0xea2df7) {
                    if (void 0 !== _0x1c7129['import']) {
                        let _0x22fb27 = _0x1c7129[_0x4ede98(133)];
                        const _0x29169c = _0xbbc758, _0x1619b7 = _0xbbc758;
                        let _0x3998c3 = !1;
                        const _0x33b5fc = _0xbbc758;
                        if (!1 !== _0x22fb27) {
                            const _0x18d913 = { 'params': {} };
                            null === _0x116741 ? _0x116741 = [_0x18d913] : _0x116741['push'](_0x18d913), _0xbbc758++;
                        }
                        var _0x53b470 = _0x33b5fc === _0xbbc758;
                        if (_0x3998c3 = _0x3998c3 || _0x53b470, !_0x3998c3) {
                            const _0x1e59e2 = _0xbbc758;
                            if (_0xbbc758 == _0xbbc758) {
                                if (_0x4ede98(121) == typeof _0x22fb27) {
                                    if (_0x22fb27[_0x4ede98(131)] < 1) {
                                        const _0xf3da9a = { 'params': {} };
                                        null === _0x116741 ? _0x116741 = [_0xf3da9a] : _0x116741['push'](_0xf3da9a), _0xbbc758++;
                                    }
                                } else {
                                    const _0x27b7e3 = { 'params': { 'type': 'string' } };
                                    null === _0x116741 ? _0x116741 = [_0x27b7e3] : _0x116741[_0x4ede98(135)](_0x27b7e3), _0xbbc758++;
                                }
                            }
                            _0x53b470 = _0x1e59e2 === _0xbbc758, _0x3998c3 = _0x3998c3 || _0x53b470;
                        }
                        if (!_0x3998c3) {
                            const _0x2bedd2 = { 'params': {} };
                            return null === _0x116741 ? _0x116741 = [_0x2bedd2] : _0x116741[_0x4ede98(135)](_0x2bedd2), _0xbbc758++, h[_0x4ede98(129)] = _0x116741, !1;
                        }
                        _0xbbc758 = _0x1619b7, null !== _0x116741 && (_0x1619b7 ? _0x116741[_0x4ede98(131)] = _0x1619b7 : _0x116741 = null), _0xea2df7 = _0x29169c === _0xbbc758;
                    } else
                        _0xea2df7 = !0;
                    if (_0xea2df7) {
                        if (void 0 !== _0x1c7129[_0x4ede98(167)]) {
                            let _0x104d4e = _0x1c7129[_0x4ede98(167)];
                            const _0x346376 = _0xbbc758;
                            if (_0xbbc758 === _0x346376) {
                                if ('string' != typeof _0x104d4e)
                                    return h['errors'] = [{ 'params': { 'type': _0x4ede98(121) } }], !1;
                                if (_0x104d4e[_0x4ede98(131)] < 1)
                                    return h['errors'] = [{ 'params': {} }], !1;
                            }
                            _0xea2df7 = _0x346376 === _0xbbc758;
                        } else
                            _0xea2df7 = !0;
                        if (_0xea2df7) {
                            if (void 0 !== _0x1c7129[_0x4ede98(168)]) {
                                let _0x5803c0 = _0x1c7129['requiredVersion'];
                                const _0x50308d = _0xbbc758, _0x301ab4 = _0xbbc758;
                                let _0x12432 = !1;
                                const _0x409873 = _0xbbc758;
                                if (!1 !== _0x5803c0) {
                                    const _0x3b196c = { 'params': {} };
                                    null === _0x116741 ? _0x116741 = [_0x3b196c] : _0x116741['push'](_0x3b196c), _0xbbc758++;
                                }
                                var _0x5a4ada = _0x409873 === _0xbbc758;
                                if (_0x12432 = _0x12432 || _0x5a4ada, !_0x12432) {
                                    const _0x1724ef = _0xbbc758;
                                    if (_0x4ede98(121) != typeof _0x5803c0) {
                                        const _0x735662 = { 'params': { 'type': _0x4ede98(121) } };
                                        null === _0x116741 ? _0x116741 = [_0x735662] : _0x116741[_0x4ede98(135)](_0x735662), _0xbbc758++;
                                    }
                                    _0x5a4ada = _0x1724ef === _0xbbc758, _0x12432 = _0x12432 || _0x5a4ada;
                                }
                                if (!_0x12432) {
                                    const _0x27e911 = { 'params': {} };
                                    return null === _0x116741 ? _0x116741 = [_0x27e911] : _0x116741['push'](_0x27e911), _0xbbc758++, h[_0x4ede98(129)] = _0x116741, !1;
                                }
                                _0xbbc758 = _0x301ab4, null !== _0x116741 && (_0x301ab4 ? _0x116741[_0x4ede98(131)] = _0x301ab4 : _0x116741 = null), _0xea2df7 = _0x50308d === _0xbbc758;
                            } else
                                _0xea2df7 = !0;
                            if (_0xea2df7) {
                                if (void 0 !== _0x1c7129[_0x4ede98(169)]) {
                                    let _0xf416f = _0x1c7129[_0x4ede98(169)];
                                    const _0x5ee8c8 = _0xbbc758;
                                    if (_0xbbc758 === _0x5ee8c8) {
                                        if (_0x4ede98(121) != typeof _0xf416f)
                                            return h[_0x4ede98(129)] = [{ 'params': { 'type': 'string' } }], !1;
                                        if (_0xf416f[_0x4ede98(131)] < 1)
                                            return h['errors'] = [{ 'params': {} }], !1;
                                    }
                                    _0xea2df7 = _0x5ee8c8 === _0xbbc758;
                                } else
                                    _0xea2df7 = !0;
                                if (_0xea2df7) {
                                    if (void 0 !== _0x1c7129['shareScope']) {
                                        let _0x8fc356 = _0x1c7129[_0x4ede98(163)];
                                        const _0x4969a4 = _0xbbc758;
                                        if (_0xbbc758 === _0x4969a4) {
                                            if (_0x4ede98(121) != typeof _0x8fc356)
                                                return h[_0x4ede98(129)] = [{ 'params': { 'type': _0x4ede98(121) } }], !1;
                                            if (_0x8fc356[_0x4ede98(131)] < 1)
                                                return h[_0x4ede98(129)] = [{ 'params': {} }], !1;
                                        }
                                        _0xea2df7 = _0x4969a4 === _0xbbc758;
                                    } else
                                        _0xea2df7 = !0;
                                    if (_0xea2df7) {
                                        if (void 0 !== _0x1c7129['singleton']) {
                                            const _0x309c5e = _0xbbc758;
                                            if (_0x4ede98(161) != typeof _0x1c7129[_0x4ede98(170)])
                                                return h[_0x4ede98(129)] = [{ 'params': { 'type': _0x4ede98(161) } }], !1;
                                            _0xea2df7 = _0x309c5e === _0xbbc758;
                                        } else
                                            _0xea2df7 = !0;
                                        if (_0xea2df7) {
                                            if (void 0 !== _0x1c7129[_0x4ede98(171)]) {
                                                const _0x5b1c67 = _0xbbc758;
                                                if ('boolean' != typeof _0x1c7129[_0x4ede98(171)])
                                                    return h[_0x4ede98(129)] = [{ 'params': { 'type': 'boolean' } }], !1;
                                                _0xea2df7 = _0x5b1c67 === _0xbbc758;
                                            } else
                                                _0xea2df7 = !0;
                                            if (_0xea2df7) {
                                                if (void 0 !== _0x1c7129[_0x4ede98(172)]) {
                                                    let _0x5cd9bc = _0x1c7129[_0x4ede98(172)];
                                                    const _0x6f9a9a = _0xbbc758, _0x277ade = _0xbbc758;
                                                    let _0x42f999 = !1;
                                                    const _0x5a53ee = _0xbbc758;
                                                    if (!1 !== _0x5cd9bc) {
                                                        const _0x55589c = { 'params': {} };
                                                        null === _0x116741 ? _0x116741 = [_0x55589c] : _0x116741[_0x4ede98(135)](_0x55589c), _0xbbc758++;
                                                    }
                                                    var _0x4a1b76 = _0x5a53ee === _0xbbc758;
                                                    if (_0x42f999 = _0x42f999 || _0x4a1b76, !_0x42f999) {
                                                        const _0x2df884 = _0xbbc758;
                                                        if (_0x4ede98(121) != typeof _0x5cd9bc) {
                                                            const _0x291072 = { 'params': { 'type': _0x4ede98(121) } };
                                                            null === _0x116741 ? _0x116741 = [_0x291072] : _0x116741[_0x4ede98(135)](_0x291072), _0xbbc758++;
                                                        }
                                                        _0x4a1b76 = _0x2df884 === _0xbbc758, _0x42f999 = _0x42f999 || _0x4a1b76;
                                                    }
                                                    if (!_0x42f999) {
                                                        const _0x1aab44 = { 'params': {} };
                                                        return null === _0x116741 ? _0x116741 = [_0x1aab44] : _0x116741[_0x4ede98(135)](_0x1aab44), _0xbbc758++, h[_0x4ede98(129)] = _0x116741, !1;
                                                    }
                                                    _0xbbc758 = _0x277ade, null !== _0x116741 && (_0x277ade ? _0x116741[_0x4ede98(131)] = _0x277ade : _0x116741 = null), _0xea2df7 = _0x6f9a9a === _0xbbc758;
                                                } else
                                                    _0xea2df7 = !0;
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
    return h[_0x4ede98(129)] = _0x116741, 0 === _0xbbc758;
}
function g(_0x54174b, {
    instancePath: _0x35dcb4 = '',
    parentData: _0x5458cc,
    parentDataProperty: _0x490fc1,
    rootData: _0x13bae7 = _0x54174b
} = {}) {
    const _0x13bae3 = _0x5c01dd;
    let _0x112238 = null, _0x42c293 = 0;
    if (0 === _0x42c293) {
        if (!_0x54174b || 'object' != typeof _0x54174b || Array[_0x13bae3(128)](_0x54174b))
            return g['errors'] = [{ 'params': { 'type': _0x13bae3(132) } }], !1;
        for (const _0xd1047 in _0x54174b) {
            let _0x460aa0 = _0x54174b[_0xd1047];
            const _0x3933b0 = _0x42c293, _0x193c07 = _0x42c293;
            let _0xf8c084 = !1;
            const _0x232eb5 = _0x42c293;
            h(_0x460aa0, {
                'instancePath': _0x35dcb4 + '/' + _0xd1047[_0x13bae3(138)](/~/g, '~0')[_0x13bae3(138)](/\//g, '~1'),
                'parentData': _0x54174b,
                'parentDataProperty': _0xd1047,
                'rootData': _0x13bae7
            }) || (_0x112238 = null === _0x112238 ? h[_0x13bae3(129)] : _0x112238['concat'](h[_0x13bae3(129)]), _0x42c293 = _0x112238[_0x13bae3(131)]);
            var _0x5b61e3 = _0x232eb5 === _0x42c293;
            if (_0xf8c084 = _0xf8c084 || _0x5b61e3, !_0xf8c084) {
                const _0x21e414 = _0x42c293;
                if (_0x42c293 == _0x42c293) {
                    if ('string' == typeof _0x460aa0) {
                        if (_0x460aa0[_0x13bae3(131)] < 1) {
                            const _0x4f3e13 = { 'params': {} };
                            null === _0x112238 ? _0x112238 = [_0x4f3e13] : _0x112238[_0x13bae3(135)](_0x4f3e13), _0x42c293++;
                        }
                    } else {
                        const _0x4e5c27 = { 'params': { 'type': 'string' } };
                        null === _0x112238 ? _0x112238 = [_0x4e5c27] : _0x112238['push'](_0x4e5c27), _0x42c293++;
                    }
                }
                _0x5b61e3 = _0x21e414 === _0x42c293, _0xf8c084 = _0xf8c084 || _0x5b61e3;
            }
            if (!_0xf8c084) {
                const _0x12f334 = { 'params': {} };
                return null === _0x112238 ? _0x112238 = [_0x12f334] : _0x112238['push'](_0x12f334), _0x42c293++, g[_0x13bae3(129)] = _0x112238, !1;
            }
            if (_0x42c293 = _0x193c07, null !== _0x112238 && (_0x193c07 ? _0x112238[_0x13bae3(131)] = _0x193c07 : _0x112238 = null), _0x3933b0 !== _0x42c293)
                break;
        }
    }
    return g[_0x13bae3(129)] = _0x112238, 0 === _0x42c293;
}
function D(_0x2c2871, {
    instancePath: _0xbcea8a = '',
    parentData: _0x2e2ce7,
    parentDataProperty: _0x353dec,
    rootData: _0x444f53 = _0x2c2871
} = {}) {
    const _0x506651 = _0x5c01dd;
    let _0xdea7e7 = null, _0x31cc8e = 0;
    const _0x3c8a9c = _0x31cc8e;
    let _0x30e0ca = !1;
    const _0x1a7c79 = _0x31cc8e;
    if (_0x31cc8e === _0x1a7c79) {
        if (Array[_0x506651(128)](_0x2c2871)) {
            const _0x57ebe4 = _0x2c2871[_0x506651(131)];
            for (let _0x4a2d03 = 0; _0x4a2d03 < _0x57ebe4; _0x4a2d03++) {
                let _0x391c41 = _0x2c2871[_0x4a2d03];
                const _0x2cddef = _0x31cc8e, _0x33a85e = _0x31cc8e;
                let _0x3245b5 = !1;
                const _0xa24357 = _0x31cc8e;
                if (_0x31cc8e == _0x31cc8e) {
                    if (_0x506651(121) == typeof _0x391c41) {
                        if (_0x391c41[_0x506651(131)] < 1) {
                            const _0x120078 = { 'params': {} };
                            null === _0xdea7e7 ? _0xdea7e7 = [_0x120078] : _0xdea7e7[_0x506651(135)](_0x120078), _0x31cc8e++;
                        }
                    } else {
                        const _0x1e687d = { 'params': { 'type': _0x506651(121) } };
                        null === _0xdea7e7 ? _0xdea7e7 = [_0x1e687d] : _0xdea7e7[_0x506651(135)](_0x1e687d), _0x31cc8e++;
                    }
                }
                var _0xe0a904 = _0xa24357 === _0x31cc8e;
                if (_0x3245b5 = _0x3245b5 || _0xe0a904, !_0x3245b5) {
                    const _0x184dd4 = _0x31cc8e;
                    g(_0x391c41, {
                        'instancePath': _0xbcea8a + '/' + _0x4a2d03,
                        'parentData': _0x2c2871,
                        'parentDataProperty': _0x4a2d03,
                        'rootData': _0x444f53
                    }) || (_0xdea7e7 = null === _0xdea7e7 ? g[_0x506651(129)] : _0xdea7e7[_0x506651(137)](g[_0x506651(129)]), _0x31cc8e = _0xdea7e7[_0x506651(131)]), _0xe0a904 = _0x184dd4 === _0x31cc8e, _0x3245b5 = _0x3245b5 || _0xe0a904;
                }
                if (_0x3245b5)
                    _0x31cc8e = _0x33a85e, null !== _0xdea7e7 && (_0x33a85e ? _0xdea7e7[_0x506651(131)] = _0x33a85e : _0xdea7e7 = null);
                else {
                    const _0x1dc783 = { 'params': {} };
                    null === _0xdea7e7 ? _0xdea7e7 = [_0x1dc783] : _0xdea7e7[_0x506651(135)](_0x1dc783), _0x31cc8e++;
                }
                if (_0x2cddef !== _0x31cc8e)
                    break;
            }
        } else {
            const _0x426dae = { 'params': { 'type': _0x506651(130) } };
            null === _0xdea7e7 ? _0xdea7e7 = [_0x426dae] : _0xdea7e7[_0x506651(135)](_0x426dae), _0x31cc8e++;
        }
    }
    var _0x26ab25 = _0x1a7c79 === _0x31cc8e;
    if (_0x30e0ca = _0x30e0ca || _0x26ab25, !_0x30e0ca) {
        const _0x24f46b = _0x31cc8e;
        g(_0x2c2871, {
            'instancePath': _0xbcea8a,
            'parentData': _0x2e2ce7,
            'parentDataProperty': _0x353dec,
            'rootData': _0x444f53
        }) || (_0xdea7e7 = null === _0xdea7e7 ? g[_0x506651(129)] : _0xdea7e7[_0x506651(137)](g['errors']), _0x31cc8e = _0xdea7e7['length']), _0x26ab25 = _0x24f46b === _0x31cc8e, _0x30e0ca = _0x30e0ca || _0x26ab25;
    }
    if (!_0x30e0ca) {
        const _0x5c4cf1 = { 'params': {} };
        return null === _0xdea7e7 ? _0xdea7e7 = [_0x5c4cf1] : _0xdea7e7[_0x506651(135)](_0x5c4cf1), _0x31cc8e++, D[_0x506651(129)] = _0xdea7e7, !1;
    }
    return _0x31cc8e = _0x3c8a9c, null !== _0xdea7e7 && (_0x3c8a9c ? _0xdea7e7[_0x506651(131)] = _0x3c8a9c : _0xdea7e7 = null), D[_0x506651(129)] = _0xdea7e7, 0 === _0x31cc8e;
}
function d(_0x5a4984, {
    instancePath: _0x413bd9 = '',
    parentData: _0xcc2c71,
    parentDataProperty: _0x4924f3,
    rootData: _0x5bb971 = _0x5a4984
} = {}) {
    const _0x162334 = _0x5c01dd;
    let _0x298027 = null, _0x4286a0 = 0;
    if (0 === _0x4286a0) {
        if (!_0x5a4984 || _0x162334(132) != typeof _0x5a4984 || Array[_0x162334(128)](_0x5a4984))
            return d[_0x162334(129)] = [{ 'params': { 'type': 'object' } }], !1;
        {
            const _0xda42ac = _0x4286a0;
            for (const _0x51ac7e in _0x5a4984)
                if (!e[_0x162334(165)](t, _0x51ac7e))
                    return d[_0x162334(129)] = [{ 'params': { 'additionalProperty': _0x51ac7e } }], !1;
            if (_0xda42ac === _0x4286a0) {
                if (void 0 !== _0x5a4984[_0x162334(173)]) {
                    const _0xd673d7 = _0x4286a0;
                    o(_0x5a4984[_0x162334(173)], {
                        'instancePath': _0x413bd9 + '/exposes',
                        'parentData': _0x5a4984,
                        'parentDataProperty': _0x162334(173),
                        'rootData': _0x5bb971
                    }) || (_0x298027 = null === _0x298027 ? o['errors'] : _0x298027[_0x162334(137)](o[_0x162334(129)]), _0x4286a0 = _0x298027['length']);
                    var _0x1cb588 = _0xd673d7 === _0x4286a0;
                } else
                    _0x1cb588 = !0;
                if (_0x1cb588) {
                    if (void 0 !== _0x5a4984[_0x162334(174)]) {
                        let _0x4e3054 = _0x5a4984[_0x162334(174)];
                        const _0x55e102 = _0x4286a0;
                        if (_0x4286a0 === _0x55e102) {
                            if ('string' != typeof _0x4e3054)
                                return d[_0x162334(129)] = [{ 'params': { 'type': _0x162334(121) } }], !1;
                            if (_0x4e3054[_0x162334(175)]('!') || !1 !== r[_0x162334(176)](_0x4e3054))
                                return d[_0x162334(129)] = [{ 'params': {} }], !1;
                        }
                        _0x1cb588 = _0x55e102 === _0x4286a0;
                    } else
                        _0x1cb588 = !0;
                    if (_0x1cb588) {
                        if (void 0 !== _0x5a4984[_0x162334(177)]) {
                            const _0x4883b6 = _0x4286a0;
                            p(_0x5a4984[_0x162334(177)], {
                                'instancePath': _0x413bd9 + '/library',
                                'parentData': _0x5a4984,
                                'parentDataProperty': _0x162334(177),
                                'rootData': _0x5bb971
                            }) || (_0x298027 = null === _0x298027 ? p['errors'] : _0x298027[_0x162334(137)](p[_0x162334(129)]), _0x4286a0 = _0x298027[_0x162334(131)]), _0x1cb588 = _0x4883b6 === _0x4286a0;
                        } else
                            _0x1cb588 = !0;
                        if (_0x1cb588) {
                            if (void 0 !== _0x5a4984[_0x162334(134)]) {
                                const _0x5b2aed = _0x4286a0;
                                if (_0x162334(121) != typeof _0x5a4984[_0x162334(134)])
                                    return d[_0x162334(129)] = [{ 'params': { 'type': 'string' } }], !1;
                                _0x1cb588 = _0x5b2aed === _0x4286a0;
                            } else
                                _0x1cb588 = !0;
                            if (_0x1cb588) {
                                if (void 0 !== _0x5a4984['remoteType']) {
                                    let _0x3a0c06 = _0x5a4984[_0x162334(178)];
                                    const _0x308a11 = _0x4286a0, _0x2c5d31 = _0x4286a0;
                                    let _0x19f567 = !1, _0x3bf5fc = null;
                                    const _0x228801 = _0x4286a0;
                                    if (_0x162334(149) !== _0x3a0c06 && _0x162334(150) !== _0x3a0c06 && _0x162334(151) !== _0x3a0c06 && 'this' !== _0x3a0c06 && _0x162334(154) !== _0x3a0c06 && _0x162334(155) !== _0x3a0c06 && _0x162334(156) !== _0x3a0c06 && _0x162334(140) !== _0x3a0c06 && _0x162334(141) !== _0x3a0c06 && _0x162334(179) !== _0x3a0c06 && _0x162334(139) !== _0x3a0c06 && _0x162334(157) !== _0x3a0c06 && _0x162334(180) !== _0x3a0c06 && 'umd2' !== _0x3a0c06 && _0x162334(159) !== _0x3a0c06 && _0x162334(160) !== _0x3a0c06 && _0x162334(181) !== _0x3a0c06 && _0x162334(133) !== _0x3a0c06 && _0x162334(182) !== _0x3a0c06 && _0x162334(183) !== _0x3a0c06) {
                                        const _0x3748ea = { 'params': {} };
                                        null === _0x298027 ? _0x298027 = [_0x3748ea] : _0x298027[_0x162334(135)](_0x3748ea), _0x4286a0++;
                                    }
                                    if (_0x228801 === _0x4286a0 && (_0x19f567 = !0, _0x3bf5fc = 0), !_0x19f567) {
                                        const _0x53fd10 = { 'params': { 'passingSchemas': _0x3bf5fc } };
                                        return null === _0x298027 ? _0x298027 = [_0x53fd10] : _0x298027['push'](_0x53fd10), _0x4286a0++, d['errors'] = _0x298027, !1;
                                    }
                                    _0x4286a0 = _0x2c5d31, null !== _0x298027 && (_0x2c5d31 ? _0x298027[_0x162334(131)] = _0x2c5d31 : _0x298027 = null), _0x1cb588 = _0x308a11 === _0x4286a0;
                                } else
                                    _0x1cb588 = !0;
                                if (_0x1cb588) {
                                    if (void 0 !== _0x5a4984[_0x162334(184)]) {
                                        const _0x253e7f = _0x4286a0;
                                        m(_0x5a4984[_0x162334(184)], {
                                            'instancePath': _0x413bd9 + _0x162334(185),
                                            'parentData': _0x5a4984,
                                            'parentDataProperty': _0x162334(184),
                                            'rootData': _0x5bb971
                                        }) || (_0x298027 = null === _0x298027 ? m[_0x162334(129)] : _0x298027[_0x162334(137)](m['errors']), _0x4286a0 = _0x298027[_0x162334(131)]), _0x1cb588 = _0x253e7f === _0x4286a0;
                                    } else
                                        _0x1cb588 = !0;
                                    if (_0x1cb588) {
                                        if (void 0 !== _0x5a4984['runtime']) {
                                            let _0x47c4b6 = _0x5a4984['runtime'];
                                            const _0x348630 = _0x4286a0, _0x3b337a = _0x4286a0;
                                            let _0x4b3b16 = !1;
                                            const _0x228fa8 = _0x4286a0;
                                            if (!1 !== _0x47c4b6) {
                                                const _0x2d64e6 = { 'params': {} };
                                                null === _0x298027 ? _0x298027 = [_0x2d64e6] : _0x298027['push'](_0x2d64e6), _0x4286a0++;
                                            }
                                            var _0x4e9d72 = _0x228fa8 === _0x4286a0;
                                            if (_0x4b3b16 = _0x4b3b16 || _0x4e9d72, !_0x4b3b16) {
                                                const _0x58a921 = _0x4286a0;
                                                if (_0x4286a0 === _0x58a921) {
                                                    if (_0x162334(121) == typeof _0x47c4b6) {
                                                        if (_0x47c4b6[_0x162334(131)] < 1) {
                                                            const _0x4d0066 = { 'params': {} };
                                                            null === _0x298027 ? _0x298027 = [_0x4d0066] : _0x298027[_0x162334(135)](_0x4d0066), _0x4286a0++;
                                                        }
                                                    } else {
                                                        const _0xdac834 = { 'params': { 'type': _0x162334(121) } };
                                                        null === _0x298027 ? _0x298027 = [_0xdac834] : _0x298027[_0x162334(135)](_0xdac834), _0x4286a0++;
                                                    }
                                                }
                                                _0x4e9d72 = _0x58a921 === _0x4286a0, _0x4b3b16 = _0x4b3b16 || _0x4e9d72;
                                            }
                                            if (!_0x4b3b16) {
                                                const _0x5a653e = { 'params': {} };
                                                return null === _0x298027 ? _0x298027 = [_0x5a653e] : _0x298027['push'](_0x5a653e), _0x4286a0++, d['errors'] = _0x298027, !1;
                                            }
                                            _0x4286a0 = _0x3b337a, null !== _0x298027 && (_0x3b337a ? _0x298027[_0x162334(131)] = _0x3b337a : _0x298027 = null), _0x1cb588 = _0x348630 === _0x4286a0;
                                        } else
                                            _0x1cb588 = !0;
                                        if (_0x1cb588) {
                                            if (void 0 !== _0x5a4984[_0x162334(163)]) {
                                                let _0x4d1d70 = _0x5a4984[_0x162334(163)];
                                                const _0x560648 = _0x4286a0;
                                                if (_0x4286a0 === _0x560648) {
                                                    if (_0x162334(121) != typeof _0x4d1d70)
                                                        return d[_0x162334(129)] = [{ 'params': { 'type': 'string' } }], !1;
                                                    if (_0x4d1d70[_0x162334(131)] < 1)
                                                        return d[_0x162334(129)] = [{ 'params': {} }], !1;
                                                }
                                                _0x1cb588 = _0x560648 === _0x4286a0;
                                            } else
                                                _0x1cb588 = !0;
                                            if (_0x1cb588) {
                                                if (void 0 !== _0x5a4984[_0x162334(186)]) {
                                                    const _0x42e459 = _0x4286a0;
                                                    D(_0x5a4984['shared'], {
                                                        'instancePath': _0x413bd9 + '/shared',
                                                        'parentData': _0x5a4984,
                                                        'parentDataProperty': _0x162334(186),
                                                        'rootData': _0x5bb971
                                                    }) || (_0x298027 = null === _0x298027 ? D[_0x162334(129)] : _0x298027[_0x162334(137)](D[_0x162334(129)]), _0x4286a0 = _0x298027[_0x162334(131)]), _0x1cb588 = _0x42e459 === _0x4286a0;
                                                } else
                                                    _0x1cb588 = !0;
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
    return d[_0x162334(129)] = _0x298027, 0 === _0x4286a0;
}