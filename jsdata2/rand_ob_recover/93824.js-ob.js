const _ = require(_0x2f44b6(328)), $jquery = require(_0x2f44b6(329)), $document = require(_0x2f44b6(330)), $elements = require(_0x2f44b6(331)), $coordinates = require('./coordinates'), $transform = require(_0x2f44b6(332)), fixedOrAbsoluteRe = /(fixed|absolute)/, OVERFLOW_PROPS = [
        _0x2f44b6(333),
        _0x2f44b6(334),
        _0x2f44b6(335)
    ], isVisible = _0xf5d96b => {
        const _0x1b18d3 = _0x2f44b6, _0x4db6d8 = {
                'XAWJE': function (_0x4b5c28, _0x2b3bdf, _0x4b1240) {
                    return _0x4b5c28(_0x2b3bdf, _0x4b1240);
                },
                'cvmCk': _0x1b18d3(336)
            };
        return !_0x4db6d8['XAWJE'](isHidden, _0xf5d96b, _0x4db6d8['cvmCk']);
    }, isHidden = (_0x62fbd7, _0x371a45 = 'isHidden()', _0x3bd108 = { 'checkOpacity': !![] }) => {
        const _0xd65a89 = _0x2f44b6, _0x624413 = {
                'nQPhh': _0xd65a89(337),
                'wgfsV': function (_0x158c1d, _0x5fb24b) {
                    return _0x158c1d(_0x5fb24b);
                },
                'VAhnA': function (_0x2a92ab, _0x4b4f4e) {
                    return _0x2a92ab(_0x4b4f4e);
                },
                'ZHBnH': function (_0x381a39, _0x111c01) {
                    return _0x381a39(_0x111c01);
                },
                'nHEfS': function (_0x323b98, _0x9ba1f8) {
                    return _0x323b98 !== _0x9ba1f8;
                },
                'sBcsP': _0xd65a89(338),
                'OuiCy': function (_0x1f9c2d, _0x14de64) {
                    return _0x1f9c2d(_0x14de64);
                },
                'jAJiD': function (_0x5d8efc, _0x14fa69, _0x33ff8e) {
                    return _0x5d8efc(_0x14fa69, _0x33ff8e);
                },
                'WkxAc': function (_0x22c400, _0x214c66) {
                    return _0x22c400(_0x214c66);
                },
                'SsqMC': function (_0x6842a8, _0x3cdbed) {
                    return _0x6842a8(_0x3cdbed);
                }
            };
        if (!$elements[_0xd65a89(339)](_0x62fbd7))
            throw new Error(_0xd65a89(340) + _0x371a45 + _0xd65a89(341) + _0x62fbd7 + '`');
        const _0x36817f = $jquery[_0xd65a89(342)](_0x62fbd7);
        if ($elements[_0xd65a89(343)](_0x62fbd7) || $elements['isHTML'](_0x62fbd7))
            return ![];
        if ($elements[_0xd65a89(344)](_0x62fbd7) || $elements[_0xd65a89(345)](_0x62fbd7)) {
            if (elHasDisplayNone(_0x36817f))
                return !![];
            const _0x4ef102 = $elements[_0xd65a89(346)](_0x36817f, _0x624413['nQPhh']);
            if (_0x4ef102 && _0x4ef102[_0xd65a89(347)])
                return isHidden(_0x4ef102[-9611 + -21 * -222 + 4949], _0x371a45);
        }
        if (elHasNoEffectiveWidthOrHeight(_0x36817f)) {
            if (_0x624413[_0xd65a89(348)](elHasDisplayInline, _0x36817f))
                return !_0x624413[_0xd65a89(349)](elHasVisibleChild, _0x36817f);
            return !![];
        }
        if (_0x624413['ZHBnH'](elHasVisibilityHiddenOrCollapse, _0x36817f))
            return !![];
        if (_0x624413[_0xd65a89(350)]($transform[_0xd65a89(351)](_0x36817f), _0x624413[_0xd65a89(352)]))
            return !![];
        if (_0x624413[_0xd65a89(353)](elHasOpacityZero, _0x36817f) && _0x3bd108[_0xd65a89(354)])
            return !![];
        if (_0x624413[_0xd65a89(355)](elIsHiddenByAncestors, _0x36817f, _0x3bd108[_0xd65a89(354)]))
            return !![];
        if (_0x624413[_0xd65a89(356)](elOrAncestorIsFixedOrSticky, _0x36817f))
            return _0x624413[_0xd65a89(356)](elIsNotElementFromPoint, _0x36817f);
        return _0x624413['SsqMC'](elIsOutOfBoundsOfAncestorsOverflow, _0x36817f);
    }, elHasNoEffectiveWidthOrHeight = _0xa12bf9 => {
        const _0x59d5d2 = _0x2f44b6, _0x338150 = {
                'ixMlv': function (_0xf436de, _0x2a25d8) {
                    return _0xf436de(_0x2a25d8);
                },
                'UhllK': function (_0x129b23, _0x33bc4f) {
                    return _0x129b23(_0x33bc4f);
                },
                'lLtXc': function (_0x1c9d35, _0x5ac0b5, _0x6356c6, _0x336321) {
                    return _0x1c9d35(_0x5ac0b5, _0x6356c6, _0x336321);
                }
            }, _0x164672 = _0xa12bf9[4 * -2350 + 1826 + 3787 * 2], _0xe15e37 = _0x338150[_0x59d5d2(357)](getComputedStyle, _0x164672), _0x57df60 = _0xe15e37['getPropertyValue']('transform'), _0x319eef = elOffsetWidth(_0xa12bf9), _0x1909b6 = _0x338150['UhllK'](elOffsetHeight, _0xa12bf9), _0x4f2c6d = _0x338150[_0x59d5d2(358)](elHasOverflowHidden, _0xa12bf9);
        return isZeroLengthAndTransformNone(_0x319eef, _0x1909b6, _0x57df60) || _0x338150[_0x59d5d2(359)](isZeroLengthAndOverflowHidden, _0x319eef, _0x1909b6, _0x4f2c6d) || _0x164672[_0x59d5d2(360)]()[_0x59d5d2(347)] <= -2431 + 6142 + -3711;
    }, isZeroLengthAndTransformNone = (_0x1b5613, _0x419852, _0x5b0d11) => {
        const _0x16b557 = _0x2f44b6, _0x293675 = {
                'mWyMP': function (_0x58de66, _0x507e9b) {
                    return _0x58de66 === _0x507e9b;
                },
                'UKkxY': 'none',
                'qpMTO': function (_0x5c867e, _0x37e66c) {
                    return _0x5c867e <= _0x37e66c;
                },
                'TqblW': function (_0x57aff4, _0x8043bc) {
                    return _0x57aff4 === _0x8043bc;
                }
            };
        return _0x1b5613 <= 3906 + -7 * -491 + -7343 && _0x293675[_0x16b557(361)](_0x5b0d11, _0x293675['UKkxY']) || _0x293675[_0x16b557(362)](_0x419852, -1 * 6416 + 3282 + 3134) && _0x293675['TqblW'](_0x5b0d11, _0x293675['UKkxY']);
    }, isZeroLengthAndOverflowHidden = (_0x12c69f, _0x92244b, _0x4a3e50) => {
        const _0x3105b0 = _0x2f44b6, _0x4f928f = {
                'yPCai': function (_0x2ba942, _0x5a5f01) {
                    return _0x2ba942 <= _0x5a5f01;
                },
                'pelQm': function (_0x90ac45, _0x49309e) {
                    return _0x90ac45 <= _0x49309e;
                }
            };
        return _0x4f928f[_0x3105b0(363)](_0x12c69f, 268 * 28 + 9838 + 667 * -26) && _0x4a3e50 || _0x4f928f[_0x3105b0(364)](_0x92244b, -6520 + 7594 + -537 * 2) && _0x4a3e50;
    }, elHasNoOffsetWidthOrHeight = _0xdbe219 => {
        const _0x104fc2 = _0x2f44b6, _0x246f9e = {
                'uScLI': function (_0x2304b2, _0x5d40f9) {
                    return _0x2304b2 <= _0x5d40f9;
                },
                'vhhYG': function (_0x25812b, _0x1b8d4f) {
                    return _0x25812b(_0x1b8d4f);
                }
            };
        return _0x246f9e[_0x104fc2(365)](_0x246f9e['vhhYG'](elOffsetWidth, _0xdbe219), 4 * 2477 + 6271 + -16179) || elOffsetHeight(_0xdbe219) <= -9265 + 4259 + 1 * 5006;
    }, elOffsetWidth = _0xa7b5fc => {
        const _0x1f0fc9 = _0x2f44b6;
        return _0xa7b5fc[7595 + -1 * 4839 + -2756][_0x1f0fc9(366)];
    }, elOffsetHeight = _0x142a75 => {
        return _0x142a75[7479 + 1 * -4518 + -329 * 9]['offsetHeight'];
    }, elHasVisibilityHiddenOrCollapse = _0x5c3453 => {
        const _0x255f7c = _0x2f44b6, _0x3468bb = {
                'AQFpR': function (_0x17d9b2, _0x3b1f3f) {
                    return _0x17d9b2(_0x3b1f3f);
                },
                'ViAym': function (_0x1a6782, _0x1a8da4) {
                    return _0x1a6782(_0x1a8da4);
                }
            };
        return _0x3468bb['AQFpR'](elHasVisibilityHidden, _0x5c3453) || _0x3468bb[_0x255f7c(367)](elHasVisibilityCollapse, _0x5c3453);
    }, elHasVisibilityHidden = _0x67df40 => {
        const _0x1c2ce1 = _0x2f44b6, _0x39db1b = {
                'UxsbJ': function (_0x16ee3e, _0x318409) {
                    return _0x16ee3e === _0x318409;
                },
                'HXFyS': 'visibility'
            };
        return _0x39db1b[_0x1c2ce1(368)](_0x67df40[_0x1c2ce1(369)](_0x39db1b[_0x1c2ce1(370)]), _0x1c2ce1(333));
    }, elHasVisibilityCollapse = _0x37519b => {
        const _0x218448 = _0x2f44b6, _0x577431 = {
                'RoXmJ': function (_0x3c1c52, _0x682e1b) {
                    return _0x3c1c52 === _0x682e1b;
                },
                'KANbl': _0x218448(371)
            };
        return _0x577431[_0x218448(372)](_0x37519b[_0x218448(369)](_0x218448(373)), _0x577431[_0x218448(374)]);
    }, elHasOpacityZero = _0x63bd59 => {
        const _0x10fe40 = _0x2f44b6, _0x53b37d = {
                'voaFW': function (_0x3c76f1, _0xe16f06) {
                    return _0x3c76f1 === _0xe16f06;
                }
            };
        return _0x53b37d[_0x10fe40(375)](_0x63bd59[_0x10fe40(369)]('opacity'), '0');
    }, elHasDisplayNone = _0x308f52 => {
        const _0x6e8de2 = _0x2f44b6, _0x5519f6 = {
                'RGBgl': function (_0x5e808f, _0x587dd4) {
                    return _0x5e808f === _0x587dd4;
                },
                'kXpos': _0x6e8de2(376)
            };
        return _0x5519f6[_0x6e8de2(377)](_0x308f52[_0x6e8de2(369)](_0x5519f6[_0x6e8de2(378)]), _0x6e8de2(379));
    }, elHasDisplayInline = _0x3c21f9 => {
        const _0x10c0b7 = _0x2f44b6, _0x3fc615 = {
                'bEctC': function (_0x225569, _0xce2e01) {
                    return _0x225569 === _0xce2e01;
                },
                'aNQlD': _0x10c0b7(380)
            };
        return _0x3fc615[_0x10c0b7(381)](_0x3c21f9[_0x10c0b7(369)](_0x10c0b7(376)), _0x3fc615[_0x10c0b7(382)]);
    }, elHasOverflowHidden = function (_0x5d1f16) {
        const _0x56ab2d = _0x2f44b6, _0x1f7475 = {
                'JlrlX': _0x56ab2d(383),
                'EJXjq': _0x56ab2d(384),
                'NCFJP': _0x56ab2d(333)
            }, _0x366e8f = [
                _0x5d1f16[_0x56ab2d(369)](_0x56ab2d(385)),
                _0x5d1f16[_0x56ab2d(369)](_0x1f7475['JlrlX']),
                _0x5d1f16[_0x56ab2d(369)](_0x1f7475['EJXjq'])
            ];
        return _0x366e8f[_0x56ab2d(386)](_0x1f7475['NCFJP']);
    }, elHasPositionRelative = _0x25a025 => {
        const _0x11c78a = _0x2f44b6, _0x4aaa65 = {
                'ETRif': function (_0x1cbfc6, _0xf903bb) {
                    return _0x1cbfc6 === _0xf903bb;
                },
                'aJrgO': _0x11c78a(387),
                'iScuz': 'relative'
            };
        return _0x4aaa65[_0x11c78a(388)](_0x25a025[_0x11c78a(369)](_0x4aaa65[_0x11c78a(389)]), _0x4aaa65['iScuz']);
    }, elHasPositionAbsolute = _0x44d6de => {
        const _0x3794ec = _0x2f44b6, _0xbd8ac1 = {
                'gQqKl': function (_0xf11979, _0xf62d14) {
                    return _0xf11979 === _0xf62d14;
                },
                'FgPtI': _0x3794ec(387),
                'JkSAx': 'absolute'
            };
        return _0xbd8ac1['gQqKl'](_0x44d6de[_0x3794ec(369)](_0xbd8ac1[_0x3794ec(390)]), _0xbd8ac1[_0x3794ec(391)]);
    }, elHasClippableOverflow = function (_0x46de8e) {
        const _0x4b19eb = _0x2f44b6, _0x3f7fd7 = {
                'fVnQY': _0x4b19eb(385),
                'PfAXS': 'overflow-y',
                'aZpGA': _0x4b19eb(384)
            };
        return OVERFLOW_PROPS[_0x4b19eb(386)](_0x46de8e[_0x4b19eb(369)](_0x3f7fd7['fVnQY'])) || OVERFLOW_PROPS[_0x4b19eb(386)](_0x46de8e['css'](_0x3f7fd7[_0x4b19eb(392)])) || OVERFLOW_PROPS[_0x4b19eb(386)](_0x46de8e[_0x4b19eb(369)](_0x3f7fd7[_0x4b19eb(393)]));
    }, canClipContent = function (_0x264f8, _0x8f490e) {
        const _0x3ef9e7 = _0x2f44b6, _0x3b208b = {
                'DPrkp': function (_0xb9e653, _0x453606) {
                    return _0xb9e653(_0x453606);
                }
            };
        if (!_0x3b208b[_0x3ef9e7(394)](elHasClippableOverflow, _0x8f490e))
            return ![];
        const _0x41ad3a = _0x264f8[_0x3ef9e7(395)]();
        if (!_0x3b208b['DPrkp'](elHasPositionRelative, _0x264f8) && $elements['isAncestor'](_0x8f490e, _0x41ad3a))
            return ![];
        if (_0x3b208b['DPrkp'](elHasPositionAbsolute, _0x41ad3a) && $elements[_0x3ef9e7(396)](_0x8f490e, _0x41ad3a))
            return ![];
        return !![];
    }, elOrAncestorIsFixedOrSticky = function (_0x11138c) {
        return !!$elements['getFirstFixedOrStickyPositionParent'](_0x11138c);
    }, elAtCenterPoint = function (_0x5b81e7) {
        const _0x15912a = _0x2f44b6, _0x5eed85 = $document['getDocumentFromElement'](_0x5b81e7[_0x15912a(397)](9143 + -6515 * 1 + -2628)), _0x15c459 = $coordinates[_0x15912a(398)](_0x5b81e7), {
                topCenter: _0x18f577,
                leftCenter: _0x27cbcc
            } = _0x15c459['fromElViewport'], _0x22085d = $coordinates[_0x15912a(399)](_0x5eed85, _0x27cbcc, _0x18f577);
        if (_0x22085d)
            return $jquery[_0x15912a(342)](_0x22085d);
    }, elDescendentsHavePositionFixedOrAbsolute = function (_0x59de66, _0x362b6a) {
        const _0x10611a = _0x2f44b6, _0x1f99cc = $elements[_0x10611a(400)](_0x362b6a[192 * 46 + 4468 + 1330 * -10], _0x59de66), _0x255e2a = $jquery[_0x10611a(342)](_0x1f99cc)['add'](_0x362b6a);
        return _[_0x10611a(401)](_0x255e2a[_0x10611a(397)](), _0x477303 => {
            const _0x16493c = _0x10611a;
            return fixedOrAbsoluteRe['test']($jquery[_0x16493c(342)](_0x477303)[_0x16493c(369)]('position'));
        });
    }, elHasVisibleChild = function (_0x5495f4) {
        const _0x5dab54 = _0x2f44b6;
        return _[_0x5dab54(401)](_0x5495f4[_0x5dab54(402)](), _0x577784 => {
            return isVisible(_0x577784);
        });
    }, elIsNotElementFromPoint = function (_0x38ba96) {
        const _0x2eb2ad = _0x2f44b6, _0x5487c8 = {
                'eDttL': function (_0x52aa47, _0x1883ea) {
                    return _0x52aa47(_0x1883ea);
                },
                'PZvih': function (_0x24a73a, _0x3d8895) {
                    return _0x24a73a === _0x3d8895;
                },
                'vEIpz': 'none'
            }, _0x384f8b = _0x5487c8[_0x2eb2ad(403)](elAtCenterPoint, _0x38ba96);
        if ($elements[_0x2eb2ad(404)](_0x38ba96, _0x384f8b))
            return ![];
        if ((_0x5487c8[_0x2eb2ad(405)](_0x38ba96[_0x2eb2ad(369)](_0x2eb2ad(406)), _0x5487c8['vEIpz']) || _0x5487c8[_0x2eb2ad(405)](_0x38ba96[_0x2eb2ad(407)]()[_0x2eb2ad(369)]('pointer-events'), _0x5487c8[_0x2eb2ad(408)])) && (_0x384f8b && $elements[_0x2eb2ad(409)](_0x38ba96, _0x384f8b)))
            return ![];
        return !![];
    }, elIsOutOfBoundsOfAncestorsOverflow = function (_0x198e82, _0x14f1ea = $elements[_0x2f44b6(410)](_0x198e82)) {
        const _0x5b5958 = _0x2f44b6, _0x1d70db = {
                'ctmik': function (_0xd71687, _0x439ba1, _0x37b126) {
                    return _0xd71687(_0x439ba1, _0x37b126);
                },
                'EDNFD': function (_0x3f42ac, _0x1eb277) {
                    return _0x3f42ac > _0x1eb277;
                },
                'TYlTe': function (_0x40c935, _0x18ad27) {
                    return _0x40c935 < _0x18ad27;
                },
                'gkyCz': function (_0x16017c, _0x3fa0a1) {
                    return _0x16017c + _0x3fa0a1;
                },
                'EYHPr': function (_0x350e2e, _0x3b2c98) {
                    return _0x350e2e + _0x3b2c98;
                }
            };
        if ($elements[_0x5b5958(411)](_0x14f1ea))
            return ![];
        const _0x560261 = $coordinates[_0x5b5958(398)](_0x198e82);
        if (_0x1d70db['ctmik'](canClipContent, _0x198e82, _0x14f1ea)) {
            const _0x2fbc89 = $coordinates[_0x5b5958(398)](_0x14f1ea);
            if (_0x1d70db[_0x5b5958(412)](_0x560261[_0x5b5958(413)][_0x5b5958(414)], _0x2fbc89[_0x5b5958(415)] + _0x2fbc89[_0x5b5958(413)][_0x5b5958(414)]) || _0x1d70db[_0x5b5958(416)](_0x1d70db[_0x5b5958(417)](_0x560261[_0x5b5958(413)]['left'], _0x560261[_0x5b5958(415)]), _0x2fbc89[_0x5b5958(413)]['left']) || _0x1d70db[_0x5b5958(412)](_0x560261[_0x5b5958(413)][_0x5b5958(418)], _0x1d70db[_0x5b5958(419)](_0x2fbc89[_0x5b5958(420)], _0x2fbc89['fromElWindow']['top'])) || _0x1d70db[_0x5b5958(416)](_0x560261['fromElWindow'][_0x5b5958(418)] + _0x560261[_0x5b5958(420)], _0x2fbc89['fromElWindow'][_0x5b5958(418)]))
                return !![];
        }
        return elIsOutOfBoundsOfAncestorsOverflow(_0x198e82, $elements[_0x5b5958(410)](_0x14f1ea));
    }, elIsHiddenByAncestors = function (_0x31782a, _0xbb8cad, _0x3988d2 = _0x31782a) {
        const _0x22f29a = _0x2f44b6, _0xa2d3b9 = {
                'TnGbq': function (_0x39553d, _0x2bd157) {
                    return _0x39553d(_0x2bd157);
                },
                'gJWbW': function (_0x1873cc, _0x46a797, _0x5a07e5) {
                    return _0x1873cc(_0x46a797, _0x5a07e5);
                },
                'hJnci': function (_0x4799cb, _0x188193, _0x12918a, _0x3bd45b) {
                    return _0x4799cb(_0x188193, _0x12918a, _0x3bd45b);
                }
            }, _0x12d921 = $elements[_0x22f29a(410)](_0x31782a);
        if ($elements[_0x22f29a(411)](_0x12d921))
            return ![];
        if (_0xa2d3b9['TnGbq'](elHasOpacityZero, _0x12d921) && _0xbb8cad)
            return !![];
        if (_0xa2d3b9[_0x22f29a(421)](elHasOverflowHidden, _0x12d921) && _0xa2d3b9[_0x22f29a(421)](elHasNoEffectiveWidthOrHeight, _0x12d921))
            return !_0xa2d3b9[_0x22f29a(422)](elDescendentsHavePositionFixedOrAbsolute, _0x12d921, _0x3988d2);
        return _0xa2d3b9[_0x22f29a(423)](elIsHiddenByAncestors, _0x12d921, _0xbb8cad, _0x3988d2);
    }, parentHasNoOffsetWidthOrHeightAndOverflowHidden = function (_0x72b509) {
        const _0x133610 = _0x2f44b6, _0x58a0b4 = {
                'XhWuU': function (_0x204f09, _0x2a8bce) {
                    return _0x204f09(_0x2a8bce);
                },
                'svvOK': function (_0x2a82e0, _0x337d23) {
                    return _0x2a82e0(_0x337d23);
                },
                'FcmvE': function (_0x101aa6, _0x411cc2) {
                    return _0x101aa6(_0x411cc2);
                }
            };
        if ($elements[_0x133610(411)](_0x72b509))
            return ![];
        if (_0x58a0b4['XhWuU'](elHasOverflowHidden, _0x72b509) && _0x58a0b4[_0x133610(424)](elHasNoEffectiveWidthOrHeight, _0x72b509))
            return _0x72b509;
        return _0x58a0b4[_0x133610(425)](parentHasNoOffsetWidthOrHeightAndOverflowHidden, $elements[_0x133610(410)](_0x72b509));
    }, parentHasDisplayNone = function (_0x44a13c) {
        const _0x3232c9 = _0x2f44b6, _0x4747ac = {
                'gsySB': function (_0x4eb466, _0x598b98) {
                    return _0x4eb466(_0x598b98);
                }
            };
        if (!_0x44a13c['length'] || $document[_0x3232c9(426)](_0x44a13c))
            return ![];
        if (_0x4747ac['gsySB'](elHasDisplayNone, _0x44a13c))
            return _0x44a13c;
        return parentHasDisplayNone($elements[_0x3232c9(410)](_0x44a13c));
    }, parentHasVisibilityHidden = function (_0x366dd8) {
        const _0x4187cb = _0x2f44b6, _0x1e54cb = {
                'pvwnj': function (_0x5c95cd, _0x1de6b1) {
                    return _0x5c95cd(_0x1de6b1);
                },
                'safGr': function (_0x4a0eb7, _0x1eaffd) {
                    return _0x4a0eb7(_0x1eaffd);
                }
            };
        if (!_0x366dd8[_0x4187cb(347)] || $document[_0x4187cb(426)](_0x366dd8))
            return ![];
        if (_0x1e54cb[_0x4187cb(427)](elHasVisibilityHidden, _0x366dd8))
            return _0x366dd8;
        return _0x1e54cb[_0x4187cb(428)](parentHasVisibilityHidden, $elements[_0x4187cb(410)](_0x366dd8));
    }, parentHasVisibilityCollapse = function (_0x5d5c7d) {
        const _0x11cca8 = _0x2f44b6, _0x5e30ce = {
                'dsbzg': function (_0x1e5475, _0x45df5e) {
                    return _0x1e5475(_0x45df5e);
                }
            };
        if (!_0x5d5c7d['length'] || $document[_0x11cca8(426)](_0x5d5c7d))
            return ![];
        if (_0x5e30ce['dsbzg'](elHasVisibilityCollapse, _0x5d5c7d))
            return _0x5d5c7d;
        return _0x5e30ce[_0x11cca8(429)](parentHasVisibilityCollapse, $elements[_0x11cca8(410)](_0x5d5c7d));
    }, parentHasOpacityZero = function (_0x40809e) {
        const _0x5157a5 = _0x2f44b6, _0x48120b = {
                'yIvzS': function (_0x3f84ac, _0x59e787) {
                    return _0x3f84ac(_0x59e787);
                }
            };
        if (!_0x40809e[_0x5157a5(347)] || $document[_0x5157a5(426)](_0x40809e))
            return ![];
        if (_0x48120b[_0x5157a5(430)](elHasOpacityZero, _0x40809e))
            return _0x40809e;
        return _0x48120b[_0x5157a5(430)](parentHasOpacityZero, _0x40809e[_0x5157a5(407)]());
    }, getReasonIsHidden = function (_0x5250d8, _0x9d0a18 = { 'checkOpacity': !![] }) {
        const _0x3fadf0 = _0x2f44b6, _0x1a8281 = {
                'ZNHRd': function (_0x509c76, _0x1ca3a8) {
                    return _0x509c76(_0x1ca3a8);
                },
                'sEJfj': _0x3fadf0(431),
                'UHfmz': function (_0x18d382, _0x3746a9) {
                    return _0x18d382(_0x3746a9);
                },
                'TZQIt': function (_0xaa40ca, _0x1ff06b) {
                    return _0xaa40ca(_0x1ff06b);
                },
                'kmUzZ': function (_0x50e202, _0x48c580) {
                    return _0x50e202(_0x48c580);
                },
                'ZbCsx': function (_0x2e8817, _0x1fda5b) {
                    return _0x2e8817(_0x1fda5b);
                },
                'CiuhA': function (_0x2d36d4, _0x514d58) {
                    return _0x2d36d4 === _0x514d58;
                },
                'CFHGj': _0x3fadf0(432),
                'MXEMl': function (_0x3f8caf, _0x4b2267) {
                    return _0x3f8caf === _0x4b2267;
                },
                'UZCvU': _0x3fadf0(433),
                'uIoPO': function (_0x1d6773, _0x1cab3d) {
                    return _0x1d6773(_0x1cab3d);
                },
                'ReMfZ': function (_0x41a2c3, _0x502869) {
                    return _0x41a2c3(_0x502869);
                },
                'vPSbf': function (_0x15d5f2, _0xb90bf5) {
                    return _0x15d5f2(_0xb90bf5);
                }
            }, _0x1f073d = $elements[_0x3fadf0(434)](_0x5250d8, _0x3fadf0(431));
        let _0x9b58a2 = elOffsetWidth(_0x5250d8), _0x3dd37d = _0x1a8281[_0x3fadf0(435)](elOffsetHeight, _0x5250d8), _0x569d0d, _0x176d95;
        if (elHasDisplayNone(_0x5250d8))
            return 'This element `' + _0x1f073d + _0x3fadf0(436);
        if (_0x569d0d = parentHasDisplayNone($elements[_0x3fadf0(410)](_0x5250d8)))
            return _0x176d95 = $elements[_0x3fadf0(434)](_0x569d0d, _0x1a8281['sEJfj']), _0x3fadf0(437) + _0x1f073d + '` is not visible because its parent `' + _0x176d95 + _0x3fadf0(438);
        if (_0x569d0d = _0x1a8281[_0x3fadf0(439)](parentHasVisibilityHidden, $elements[_0x3fadf0(410)](_0x5250d8)))
            return _0x176d95 = $elements['stringify'](_0x569d0d, _0x3fadf0(431)), _0x3fadf0(437) + _0x1f073d + _0x3fadf0(440) + _0x176d95 + _0x3fadf0(441);
        if (_0x569d0d = _0x1a8281[_0x3fadf0(439)](parentHasVisibilityCollapse, $elements[_0x3fadf0(410)](_0x5250d8)))
            return _0x176d95 = $elements[_0x3fadf0(434)](_0x569d0d, _0x1a8281[_0x3fadf0(442)]), _0x3fadf0(437) + _0x1f073d + _0x3fadf0(440) + _0x176d95 + '` has CSS property: `visibility: collapse`';
        if ($elements[_0x3fadf0(443)](_0x5250d8))
            return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(444);
        if (_0x1a8281[_0x3fadf0(445)](elHasVisibilityHidden, _0x5250d8))
            return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(446);
        if (_0x1a8281[_0x3fadf0(445)](elHasVisibilityCollapse, _0x5250d8))
            return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(447);
        if (_0x1a8281[_0x3fadf0(448)](elHasOpacityZero, _0x5250d8) && _0x9d0a18[_0x3fadf0(354)])
            return 'This element `' + _0x1f073d + _0x3fadf0(449);
        if ((_0x569d0d = _0x1a8281['kmUzZ'](parentHasOpacityZero, _0x5250d8['parent']())) && _0x9d0a18[_0x3fadf0(354)])
            return _0x176d95 = $elements[_0x3fadf0(434)](_0x569d0d, _0x1a8281[_0x3fadf0(442)]), _0x3fadf0(437) + _0x1f073d + _0x3fadf0(440) + _0x176d95 + _0x3fadf0(450);
        if (_0x1a8281['ZbCsx'](elHasNoOffsetWidthOrHeight, _0x5250d8))
            return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(451) + _0x9b58a2 + _0x3fadf0(452) + _0x3dd37d + _0x3fadf0(453);
        const _0x13bb16 = $transform[_0x3fadf0(351)](_0x5250d8);
        if (_0x1a8281['CiuhA'](_0x13bb16, _0x1a8281[_0x3fadf0(454)]))
            return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(455);
        if (_0x1a8281[_0x3fadf0(456)](_0x13bb16, _0x1a8281[_0x3fadf0(457)]))
            return _0x3fadf0(437) + _0x1f073d + '` is not visible because it is rotated and its backface is hidden.';
        if (_0x569d0d = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements[_0x3fadf0(410)](_0x5250d8)))
            return _0x176d95 = $elements['stringify'](_0x569d0d, _0x1a8281[_0x3fadf0(442)]), _0x9b58a2 = _0x1a8281[_0x3fadf0(458)](elOffsetWidth, _0x569d0d), _0x3dd37d = _0x1a8281['uIoPO'](elOffsetHeight, _0x569d0d), _0x3fadf0(437) + _0x1f073d + _0x3fadf0(440) + _0x176d95 + _0x3fadf0(459) + _0x9b58a2 + _0x3fadf0(452) + _0x3dd37d + _0x3fadf0(453);
        if (_0x1a8281[_0x3fadf0(460)](elOrAncestorIsFixedOrSticky, _0x5250d8)) {
            if (_0x1a8281[_0x3fadf0(460)](elIsNotElementFromPoint, _0x5250d8)) {
                const _0x7f7f36 = $elements[_0x3fadf0(434)](_0x1a8281['ReMfZ'](elAtCenterPoint, _0x5250d8));
                if (_0x7f7f36)
                    return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(461) + _0x7f7f36 + '`';
                return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(462);
            }
        } else {
            if (_0x1a8281['vPSbf'](elIsOutOfBoundsOfAncestorsOverflow, _0x5250d8))
                return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(463);
        }
        return _0x3fadf0(437) + _0x1f073d + _0x3fadf0(464);
    };
module[_0x2f44b6(465)] = {
    'isVisible': isVisible,
    'isHidden': isHidden,
    'parentHasDisplayNone': parentHasDisplayNone,
    'getReasonIsHidden': getReasonIsHidden
};