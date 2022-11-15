const _ = require('lodash'), $jquery = require(_0x3e7447(259)), $document = require('./document'), $elements = require(_0x3e7447(260)), $coordinates = require(_0x3e7447(261)), $transform = require('./transform'), fixedOrAbsoluteRe = /(fixed|absolute)/, OVERFLOW_PROPS = [
        'hidden',
        _0x3e7447(262),
        _0x3e7447(263)
    ], isVisible = _0x2b4e21 => {
        const _0x403807 = _0x3e7447, _0x4c1d20 = {
                'pfyvS': function (_0x67a635, _0x2507f7, _0x3ee93b) {
                    return _0x67a635(_0x2507f7, _0x3ee93b);
                },
                'vWWvi': _0x403807(264)
            };
        return !_0x4c1d20[_0x403807(265)](isHidden, _0x2b4e21, _0x4c1d20[_0x403807(266)]);
    }, isHidden = (_0x5d11d1, _0x4cb385 = _0x3e7447(267), _0x16d31e = { 'checkOpacity': !![] }) => {
        const _0x10f6d3 = _0x3e7447, _0x427eba = {
                'gjpKZ': function (_0xa83925, _0x45425a) {
                    return _0xa83925(_0x45425a);
                },
                'EpVkg': _0x10f6d3(268),
                'AFEXr': function (_0x20db66, _0x5ce49d, _0x291684) {
                    return _0x20db66(_0x5ce49d, _0x291684);
                },
                'aOoMu': function (_0x3f1a9c, _0x5987b5) {
                    return _0x3f1a9c(_0x5987b5);
                },
                'gMtkI': function (_0x145abf, _0x4c0d16) {
                    return _0x145abf(_0x4c0d16);
                },
                'Dcgwu': function (_0xf95be2, _0x3ee729) {
                    return _0xf95be2(_0x3ee729);
                },
                'oIjIh': function (_0xf2ae8, _0x510515) {
                    return _0xf2ae8 !== _0x510515;
                },
                'dMCIR': _0x10f6d3(269)
            };
        if (!$elements[_0x10f6d3(270)](_0x5d11d1))
            throw new Error('`Cypress.dom.' + _0x4cb385 + _0x10f6d3(271) + _0x5d11d1 + '`');
        const _0x4b8746 = $jquery['wrap'](_0x5d11d1);
        if ($elements[_0x10f6d3(272)](_0x5d11d1) || $elements[_0x10f6d3(273)](_0x5d11d1))
            return ![];
        if ($elements[_0x10f6d3(274)](_0x5d11d1) || $elements['isOptgroup'](_0x5d11d1)) {
            if (_0x427eba['gjpKZ'](elHasDisplayNone, _0x4b8746))
                return !![];
            const _0x4f2da2 = $elements['getFirstParentWithTagName'](_0x4b8746, _0x427eba['EpVkg']);
            if (_0x4f2da2 && _0x4f2da2[_0x10f6d3(275)])
                return _0x427eba[_0x10f6d3(276)](isHidden, _0x4f2da2[1819 + 157 * -46 + 5403], _0x4cb385);
        }
        if (_0x427eba[_0x10f6d3(277)](elHasNoEffectiveWidthOrHeight, _0x4b8746)) {
            if (_0x427eba[_0x10f6d3(278)](elHasDisplayInline, _0x4b8746))
                return !_0x427eba['gMtkI'](elHasVisibleChild, _0x4b8746);
            return !![];
        }
        if (_0x427eba['Dcgwu'](elHasVisibilityHiddenOrCollapse, _0x4b8746))
            return !![];
        if (_0x427eba['oIjIh']($transform[_0x10f6d3(279)](_0x4b8746), _0x427eba[_0x10f6d3(280)]))
            return !![];
        if (_0x427eba[_0x10f6d3(281)](elHasOpacityZero, _0x4b8746) && _0x16d31e[_0x10f6d3(282)])
            return !![];
        if (elIsHiddenByAncestors(_0x4b8746, _0x16d31e['checkOpacity']))
            return !![];
        if (elOrAncestorIsFixedOrSticky(_0x4b8746))
            return _0x427eba[_0x10f6d3(281)](elIsNotElementFromPoint, _0x4b8746);
        return _0x427eba[_0x10f6d3(281)](elIsOutOfBoundsOfAncestorsOverflow, _0x4b8746);
    }, elHasNoEffectiveWidthOrHeight = _0x5a3d04 => {
        const _0x2bd764 = _0x3e7447, _0x504a3e = {
                'KTJFu': function (_0x4f2700, _0x1fff4c) {
                    return _0x4f2700(_0x1fff4c);
                },
                'tmwfA': _0x2bd764(283),
                'OFytU': function (_0x4d5954, _0x2793e6, _0x5af397, _0x4283ef) {
                    return _0x4d5954(_0x2793e6, _0x5af397, _0x4283ef);
                },
                'rswFm': function (_0x3f295, _0x43c097) {
                    return _0x3f295 <= _0x43c097;
                }
            }, _0x3e3d9a = _0x5a3d04[-1 * -977 + -1046 * -2 + -3069], _0x273c7a = _0x504a3e[_0x2bd764(284)](getComputedStyle, _0x3e3d9a), _0x43124e = _0x273c7a['getPropertyValue'](_0x504a3e[_0x2bd764(285)]), _0x379b4d = _0x504a3e['KTJFu'](elOffsetWidth, _0x5a3d04), _0x4fa114 = _0x504a3e[_0x2bd764(284)](elOffsetHeight, _0x5a3d04), _0x5aca6a = elHasOverflowHidden(_0x5a3d04);
        return _0x504a3e['OFytU'](isZeroLengthAndTransformNone, _0x379b4d, _0x4fa114, _0x43124e) || isZeroLengthAndOverflowHidden(_0x379b4d, _0x4fa114, _0x5aca6a) || _0x504a3e[_0x2bd764(286)](_0x3e3d9a['getClientRects']()[_0x2bd764(275)], -5638 * 1 + -923 + 3 * 2187);
    }, isZeroLengthAndTransformNone = (_0xc10e01, _0x48df38, _0x255904) => {
        const _0x5d93d3 = _0x3e7447, _0x5f3e31 = {
                'AMxWo': function (_0x3bc592, _0x907065) {
                    return _0x3bc592 <= _0x907065;
                },
                'qkilx': _0x5d93d3(287),
                'NQQbb': function (_0x1a80c9, _0x293769) {
                    return _0x1a80c9 <= _0x293769;
                },
                'pTvcf': function (_0x40c784, _0x4984b3) {
                    return _0x40c784 === _0x4984b3;
                }
            };
        return _0x5f3e31[_0x5d93d3(288)](_0xc10e01, 332 + -1149 + 817) && _0x255904 === _0x5f3e31[_0x5d93d3(289)] || _0x5f3e31['NQQbb'](_0x48df38, -7492 + 2973 + -1 * -4519) && _0x5f3e31[_0x5d93d3(290)](_0x255904, _0x5d93d3(287));
    }, isZeroLengthAndOverflowHidden = (_0x576a7e, _0x324ce9, _0x1197a5) => {
        const _0x25abc1 = _0x3e7447, _0x2e6e93 = {
                'kRYML': function (_0xde50d4, _0x4f46f5) {
                    return _0xde50d4 <= _0x4f46f5;
                }
            };
        return _0x2e6e93[_0x25abc1(291)](_0x576a7e, -7 * -14 + 5848 + 6 * -991) && _0x1197a5 || _0x324ce9 <= -3435 * 1 + -3 * -2389 + -1866 * 2 && _0x1197a5;
    }, elHasNoOffsetWidthOrHeight = _0x4855b7 => {
        const _0x4264e8 = _0x3e7447, _0x45143b = {
                'sgPRN': function (_0x1fa152, _0x4127c1) {
                    return _0x1fa152 <= _0x4127c1;
                },
                'OIRGb': function (_0x4a932e, _0x5c6275) {
                    return _0x4a932e(_0x5c6275);
                }
            };
        return _0x45143b[_0x4264e8(292)](_0x45143b[_0x4264e8(293)](elOffsetWidth, _0x4855b7), -32 * -168 + 7326 + -87 * 146) || _0x45143b[_0x4264e8(292)](elOffsetHeight(_0x4855b7), -3930 + -2468 * -4 + 2 * -2971);
    }, elOffsetWidth = _0x2d9a3d => {
        const _0x5b6634 = _0x3e7447;
        return _0x2d9a3d[3113 + -1556 + -1557][_0x5b6634(294)];
    }, elOffsetHeight = _0x42e1f6 => {
        const _0x34d60c = _0x3e7447;
        return _0x42e1f6[-5272 + -106 * 53 + 10890][_0x34d60c(295)];
    }, elHasVisibilityHiddenOrCollapse = _0x439b89 => {
        const _0x2fc8bc = _0x3e7447, _0x3a9ff8 = {
                'BuAKS': function (_0x3aaa1d, _0x5231d6) {
                    return _0x3aaa1d(_0x5231d6);
                },
                'BPuiy': function (_0x2b133f, _0x44a236) {
                    return _0x2b133f(_0x44a236);
                }
            };
        return _0x3a9ff8[_0x2fc8bc(296)](elHasVisibilityHidden, _0x439b89) || _0x3a9ff8[_0x2fc8bc(297)](elHasVisibilityCollapse, _0x439b89);
    }, elHasVisibilityHidden = _0x34de9a => {
        const _0x16d84f = _0x3e7447, _0x42637f = {
                'wjXfv': _0x16d84f(298),
                'uIdiC': _0x16d84f(299)
            };
        return _0x34de9a[_0x16d84f(300)](_0x42637f[_0x16d84f(301)]) === _0x42637f[_0x16d84f(302)];
    }, elHasVisibilityCollapse = _0x33fc94 => {
        const _0x264ba6 = _0x3e7447, _0x139105 = { 'BtlpU': _0x264ba6(303) };
        return _0x33fc94[_0x264ba6(300)]('visibility') === _0x139105[_0x264ba6(304)];
    }, elHasOpacityZero = _0x1b41df => {
        const _0x495af3 = _0x3e7447, _0x2e7581 = {
                'zpOvP': function (_0x3c353e, _0x561651) {
                    return _0x3c353e === _0x561651;
                }
            };
        return _0x2e7581['zpOvP'](_0x1b41df[_0x495af3(300)]('opacity'), '0');
    }, elHasDisplayNone = _0x1852e6 => {
        const _0x49391f = _0x3e7447, _0x4fd66e = {
                'VANmp': function (_0x4ce436, _0x345cf2) {
                    return _0x4ce436 === _0x345cf2;
                },
                'HWyAy': 'display'
            };
        return _0x4fd66e[_0x49391f(305)](_0x1852e6['css'](_0x4fd66e[_0x49391f(306)]), _0x49391f(287));
    }, elHasDisplayInline = _0x495858 => {
        const _0x1164ce = _0x3e7447, _0x58cc58 = {
                'ilFwH': function (_0x55df2d, _0x354922) {
                    return _0x55df2d === _0x354922;
                },
                'HpTWY': _0x1164ce(307)
            };
        return _0x58cc58[_0x1164ce(308)](_0x495858['css'](_0x1164ce(309)), _0x58cc58[_0x1164ce(310)]);
    }, elHasOverflowHidden = function (_0x4f914f) {
        const _0x306e3d = _0x3e7447, _0x32cf01 = {
                'jaxQG': _0x306e3d(311),
                'JCxZo': _0x306e3d(312),
                'bWLun': _0x306e3d(313)
            }, _0x57a450 = [
                _0x4f914f['css'](_0x32cf01[_0x306e3d(314)]),
                _0x4f914f[_0x306e3d(300)](_0x32cf01['JCxZo']),
                _0x4f914f[_0x306e3d(300)](_0x32cf01[_0x306e3d(315)])
            ];
        return _0x57a450[_0x306e3d(316)]('hidden');
    }, elHasPositionRelative = _0x70dad3 => {
        const _0xbc65ec = _0x3e7447, _0x31ba50 = {
                'glLOb': function (_0x1825f3, _0x464633) {
                    return _0x1825f3 === _0x464633;
                }
            };
        return _0x31ba50[_0xbc65ec(317)](_0x70dad3[_0xbc65ec(300)]('position'), _0xbc65ec(318));
    }, elHasPositionAbsolute = _0x105465 => {
        const _0x3bdc60 = _0x3e7447, _0x2dbf48 = { 'jYslv': _0x3bdc60(319) };
        return _0x105465['css'](_0x3bdc60(320)) === _0x2dbf48[_0x3bdc60(321)];
    }, elHasClippableOverflow = function (_0x21d2fb) {
        const _0xbf266f = _0x3e7447, _0x16260a = {
                'wRHuK': _0xbf266f(311),
                'dAWjd': 'overflow-x'
            };
        return OVERFLOW_PROPS[_0xbf266f(316)](_0x21d2fb[_0xbf266f(300)](_0x16260a[_0xbf266f(322)])) || OVERFLOW_PROPS[_0xbf266f(316)](_0x21d2fb[_0xbf266f(300)](_0xbf266f(312))) || OVERFLOW_PROPS[_0xbf266f(316)](_0x21d2fb['css'](_0x16260a[_0xbf266f(323)]));
    }, canClipContent = function (_0x23c528, _0x39f743) {
        const _0x31bb91 = _0x3e7447, _0x4cfaea = {
                'dKPbw': function (_0xe5436d, _0x51c122) {
                    return _0xe5436d(_0x51c122);
                }
            };
        if (!_0x4cfaea['dKPbw'](elHasClippableOverflow, _0x39f743))
            return ![];
        const _0x3dd396 = _0x23c528[_0x31bb91(324)]();
        if (!_0x4cfaea[_0x31bb91(325)](elHasPositionRelative, _0x23c528) && $elements['isAncestor'](_0x39f743, _0x3dd396))
            return ![];
        if (elHasPositionAbsolute(_0x3dd396) && $elements[_0x31bb91(326)](_0x39f743, _0x3dd396))
            return ![];
        return !![];
    }, elOrAncestorIsFixedOrSticky = function (_0x3dbb26) {
        const _0xb77787 = _0x3e7447;
        return !!$elements[_0xb77787(327)](_0x3dbb26);
    }, elAtCenterPoint = function (_0x160ff8) {
        const _0x54c46f = _0x3e7447, _0x56fe2f = $document[_0x54c46f(328)](_0x160ff8[_0x54c46f(329)](4273 + -1 * 8382 + 4109 * 1)), _0x5b0f59 = $coordinates[_0x54c46f(330)](_0x160ff8), {
                topCenter: _0x43ba3a,
                leftCenter: _0x319a52
            } = _0x5b0f59[_0x54c46f(331)], _0x17f6fe = $coordinates[_0x54c46f(332)](_0x56fe2f, _0x319a52, _0x43ba3a);
        if (_0x17f6fe)
            return $jquery[_0x54c46f(333)](_0x17f6fe);
    }, elDescendentsHavePositionFixedOrAbsolute = function (_0x28423b, _0xc1b329) {
        const _0x40b4f0 = _0x3e7447, _0x25abf0 = $elements[_0x40b4f0(334)](_0xc1b329[7058 + 5272 + -12330], _0x28423b), _0x2d1716 = $jquery[_0x40b4f0(333)](_0x25abf0)[_0x40b4f0(335)](_0xc1b329);
        return _['some'](_0x2d1716['get'](), _0x3143f0 => {
            const _0x324b2b = _0x40b4f0;
            return fixedOrAbsoluteRe[_0x324b2b(336)]($jquery[_0x324b2b(333)](_0x3143f0)[_0x324b2b(300)](_0x324b2b(320)));
        });
    }, elHasVisibleChild = function (_0x4af3b5) {
        const _0x20caca = _0x3e7447;
        return _[_0x20caca(337)](_0x4af3b5[_0x20caca(338)](), _0x158503 => {
            return isVisible(_0x158503);
        });
    }, elIsNotElementFromPoint = function (_0x580f24) {
        const _0x51ad8c = _0x3e7447, _0x53c28b = {
                'gOnzq': function (_0x208123, _0x166acf) {
                    return _0x208123(_0x166acf);
                },
                'ZrDoL': function (_0x37b84f, _0x690e1c) {
                    return _0x37b84f === _0x690e1c;
                },
                'OxVwS': _0x51ad8c(339),
                'QJrOq': _0x51ad8c(287)
            }, _0x3a6fd6 = _0x53c28b['gOnzq'](elAtCenterPoint, _0x580f24);
        if ($elements['isDescendent'](_0x580f24, _0x3a6fd6))
            return ![];
        if ((_0x53c28b[_0x51ad8c(340)](_0x580f24[_0x51ad8c(300)](_0x53c28b[_0x51ad8c(341)]), _0x53c28b[_0x51ad8c(342)]) || _0x53c28b[_0x51ad8c(340)](_0x580f24['parent']()[_0x51ad8c(300)](_0x53c28b[_0x51ad8c(341)]), _0x51ad8c(287))) && (_0x3a6fd6 && $elements[_0x51ad8c(343)](_0x580f24, _0x3a6fd6)))
            return ![];
        return !![];
    }, elIsOutOfBoundsOfAncestorsOverflow = function (_0x473c01, _0x5b2528 = $elements['getParent'](_0x473c01)) {
        const _0x512ff0 = _0x3e7447, _0x1a8af1 = {
                'kwKdj': function (_0x41976d, _0x144759, _0x291f49) {
                    return _0x41976d(_0x144759, _0x291f49);
                },
                'gaETD': function (_0x16b762, _0x2f9e22) {
                    return _0x16b762 > _0x2f9e22;
                },
                'Bhhwd': function (_0x3e9659, _0x4bc3d4) {
                    return _0x3e9659 + _0x4bc3d4;
                },
                'QqBmm': function (_0x53f653, _0x398e45) {
                    return _0x53f653 < _0x398e45;
                },
                'nmOdH': function (_0x5a9def, _0x511f25) {
                    return _0x5a9def > _0x511f25;
                }
            };
        if ($elements[_0x512ff0(344)](_0x5b2528))
            return ![];
        const _0x1b19f9 = $coordinates[_0x512ff0(330)](_0x473c01);
        if (_0x1a8af1[_0x512ff0(345)](canClipContent, _0x473c01, _0x5b2528)) {
            const _0x531344 = $coordinates[_0x512ff0(330)](_0x5b2528);
            if (_0x1a8af1[_0x512ff0(346)](_0x1b19f9[_0x512ff0(347)][_0x512ff0(348)], _0x1a8af1[_0x512ff0(349)](_0x531344[_0x512ff0(350)], _0x531344[_0x512ff0(347)][_0x512ff0(348)])) || _0x1a8af1['QqBmm'](_0x1b19f9[_0x512ff0(347)][_0x512ff0(348)] + _0x1b19f9[_0x512ff0(350)], _0x531344[_0x512ff0(347)][_0x512ff0(348)]) || _0x1a8af1[_0x512ff0(351)](_0x1b19f9['fromElWindow'][_0x512ff0(352)], _0x1a8af1[_0x512ff0(349)](_0x531344[_0x512ff0(353)], _0x531344[_0x512ff0(347)][_0x512ff0(352)])) || _0x1a8af1[_0x512ff0(354)](_0x1b19f9[_0x512ff0(347)]['top'] + _0x1b19f9['height'], _0x531344[_0x512ff0(347)][_0x512ff0(352)]))
                return !![];
        }
        return _0x1a8af1[_0x512ff0(345)](elIsOutOfBoundsOfAncestorsOverflow, _0x473c01, $elements['getParent'](_0x5b2528));
    }, elIsHiddenByAncestors = function (_0x6658fb, _0x4d49ac, _0x1143d2 = _0x6658fb) {
        const _0x560915 = _0x3e7447, _0x15eceb = {
                'exeHt': function (_0x3bf844, _0x1686f5) {
                    return _0x3bf844(_0x1686f5);
                },
                'QLAzf': function (_0xb0beed, _0x432af7, _0x12232d, _0x32804b) {
                    return _0xb0beed(_0x432af7, _0x12232d, _0x32804b);
                }
            }, _0x243351 = $elements[_0x560915(355)](_0x6658fb);
        if ($elements[_0x560915(344)](_0x243351))
            return ![];
        if (_0x15eceb[_0x560915(356)](elHasOpacityZero, _0x243351) && _0x4d49ac)
            return !![];
        if (elHasOverflowHidden(_0x243351) && elHasNoEffectiveWidthOrHeight(_0x243351))
            return !elDescendentsHavePositionFixedOrAbsolute(_0x243351, _0x1143d2);
        return _0x15eceb[_0x560915(357)](elIsHiddenByAncestors, _0x243351, _0x4d49ac, _0x1143d2);
    }, parentHasNoOffsetWidthOrHeightAndOverflowHidden = function (_0x2b783e) {
        const _0x5ff05a = _0x3e7447, _0x52f78e = {
                'zitiO': function (_0xac1b, _0x36433a) {
                    return _0xac1b(_0x36433a);
                },
                'BvBmc': function (_0x2cc185, _0x164fd0) {
                    return _0x2cc185(_0x164fd0);
                }
            };
        if ($elements[_0x5ff05a(344)](_0x2b783e))
            return ![];
        if (_0x52f78e['zitiO'](elHasOverflowHidden, _0x2b783e) && elHasNoEffectiveWidthOrHeight(_0x2b783e))
            return _0x2b783e;
        return _0x52f78e[_0x5ff05a(358)](parentHasNoOffsetWidthOrHeightAndOverflowHidden, $elements[_0x5ff05a(355)](_0x2b783e));
    }, parentHasDisplayNone = function (_0x56938f) {
        const _0x37390c = _0x3e7447, _0x2f92e1 = {
                'PVUjL': function (_0x2f629f, _0x722e6) {
                    return _0x2f629f(_0x722e6);
                },
                'zHciL': function (_0x530d10, _0x66d4b1) {
                    return _0x530d10(_0x66d4b1);
                }
            };
        if (!_0x56938f[_0x37390c(275)] || $document[_0x37390c(359)](_0x56938f))
            return ![];
        if (_0x2f92e1[_0x37390c(360)](elHasDisplayNone, _0x56938f))
            return _0x56938f;
        return _0x2f92e1['zHciL'](parentHasDisplayNone, $elements['getParent'](_0x56938f));
    }, parentHasVisibilityHidden = function (_0x481aba) {
        const _0x343db4 = _0x3e7447, _0x2e8104 = {
                'bUWRf': function (_0x4efad9, _0x1b97fa) {
                    return _0x4efad9(_0x1b97fa);
                }
            };
        if (!_0x481aba[_0x343db4(275)] || $document[_0x343db4(359)](_0x481aba))
            return ![];
        if (_0x2e8104[_0x343db4(361)](elHasVisibilityHidden, _0x481aba))
            return _0x481aba;
        return parentHasVisibilityHidden($elements[_0x343db4(355)](_0x481aba));
    }, parentHasVisibilityCollapse = function (_0x389973) {
        const _0x10e36f = _0x3e7447, _0x2d1fb4 = {
                'zJRKE': function (_0x5eac6c, _0x299e7c) {
                    return _0x5eac6c(_0x299e7c);
                }
            };
        if (!_0x389973[_0x10e36f(275)] || $document['isDocument'](_0x389973))
            return ![];
        if (_0x2d1fb4[_0x10e36f(362)](elHasVisibilityCollapse, _0x389973))
            return _0x389973;
        return _0x2d1fb4['zJRKE'](parentHasVisibilityCollapse, $elements[_0x10e36f(355)](_0x389973));
    }, parentHasOpacityZero = function (_0x10d03b) {
        const _0x35da87 = _0x3e7447, _0x515d0b = {
                'kklmw': function (_0x36f955, _0x1b8ec9) {
                    return _0x36f955(_0x1b8ec9);
                }
            };
        if (!_0x10d03b[_0x35da87(275)] || $document[_0x35da87(359)](_0x10d03b))
            return ![];
        if (_0x515d0b[_0x35da87(363)](elHasOpacityZero, _0x10d03b))
            return _0x10d03b;
        return parentHasOpacityZero(_0x10d03b[_0x35da87(364)]());
    }, getReasonIsHidden = function (_0x5b3029, _0x5db87e = { 'checkOpacity': !![] }) {
        const _0x54c704 = _0x3e7447, _0x4b5be2 = {
                'yiVGR': function (_0x45f5ed, _0x3c1803) {
                    return _0x45f5ed(_0x3c1803);
                },
                'uPVdP': function (_0x14f1f9, _0x16662c) {
                    return _0x14f1f9(_0x16662c);
                },
                'lycIC': _0x54c704(365),
                'jztqi': function (_0x4599fd, _0x3d5a52) {
                    return _0x4599fd(_0x3d5a52);
                },
                'MmFax': function (_0xd66888, _0xc31104) {
                    return _0xd66888(_0xc31104);
                },
                'EwUdV': function (_0x922b2a, _0x2bfe8d) {
                    return _0x922b2a(_0x2bfe8d);
                },
                'bdsxp': function (_0x3b3fa8, _0x2934e3) {
                    return _0x3b3fa8(_0x2934e3);
                },
                'OECZj': function (_0x289c20, _0x4e964a) {
                    return _0x289c20(_0x4e964a);
                },
                'ogxrI': 'transformed',
                'SVbHW': _0x54c704(366),
                'kyQmJ': function (_0x2d0fad, _0x26ff08) {
                    return _0x2d0fad(_0x26ff08);
                },
                'QHoBI': function (_0x53d805, _0xf1759d) {
                    return _0x53d805(_0xf1759d);
                }
            }, _0x5f50d6 = $elements[_0x54c704(367)](_0x5b3029, 'short');
        let _0x2e1828 = _0x4b5be2['yiVGR'](elOffsetWidth, _0x5b3029), _0x324c88 = _0x4b5be2[_0x54c704(368)](elOffsetHeight, _0x5b3029), _0x3de5d3, _0x10bf3a;
        if (_0x4b5be2[_0x54c704(368)](elHasDisplayNone, _0x5b3029))
            return _0x54c704(369) + _0x5f50d6 + _0x54c704(370);
        if (_0x3de5d3 = parentHasDisplayNone($elements[_0x54c704(355)](_0x5b3029)))
            return _0x10bf3a = $elements[_0x54c704(367)](_0x3de5d3, _0x4b5be2['lycIC']), _0x54c704(369) + _0x5f50d6 + _0x54c704(371) + _0x10bf3a + _0x54c704(372);
        if (_0x3de5d3 = _0x4b5be2['jztqi'](parentHasVisibilityHidden, $elements[_0x54c704(355)](_0x5b3029)))
            return _0x10bf3a = $elements['stringify'](_0x3de5d3, 'short'), _0x54c704(369) + _0x5f50d6 + _0x54c704(371) + _0x10bf3a + _0x54c704(373);
        if (_0x3de5d3 = _0x4b5be2['MmFax'](parentHasVisibilityCollapse, $elements[_0x54c704(355)](_0x5b3029)))
            return _0x10bf3a = $elements[_0x54c704(367)](_0x3de5d3, _0x4b5be2[_0x54c704(374)]), _0x54c704(369) + _0x5f50d6 + _0x54c704(371) + _0x10bf3a + '` has CSS property: `visibility: collapse`';
        if ($elements[_0x54c704(375)](_0x5b3029))
            return _0x54c704(369) + _0x5f50d6 + _0x54c704(376);
        if (_0x4b5be2[_0x54c704(377)](elHasVisibilityHidden, _0x5b3029))
            return _0x54c704(369) + _0x5f50d6 + _0x54c704(378);
        if (_0x4b5be2[_0x54c704(379)](elHasVisibilityCollapse, _0x5b3029))
            return 'This element `' + _0x5f50d6 + _0x54c704(380);
        if (_0x4b5be2['OECZj'](elHasOpacityZero, _0x5b3029) && _0x5db87e['checkOpacity'])
            return 'This element `' + _0x5f50d6 + _0x54c704(381);
        if ((_0x3de5d3 = parentHasOpacityZero(_0x5b3029[_0x54c704(364)]())) && _0x5db87e[_0x54c704(282)])
            return _0x10bf3a = $elements[_0x54c704(367)](_0x3de5d3, _0x4b5be2[_0x54c704(374)]), _0x54c704(369) + _0x5f50d6 + '` is not visible because its parent `' + _0x10bf3a + '` has CSS property: `opacity: 0`';
        if (elHasNoOffsetWidthOrHeight(_0x5b3029))
            return _0x54c704(369) + _0x5f50d6 + _0x54c704(382) + _0x2e1828 + ' x ' + _0x324c88 + _0x54c704(383);
        const _0x26b050 = $transform[_0x54c704(279)](_0x5b3029);
        if (_0x26b050 === _0x4b5be2[_0x54c704(384)])
            return _0x54c704(369) + _0x5f50d6 + '` is not visible because it is hidden by transform.';
        if (_0x26b050 === _0x4b5be2[_0x54c704(385)])
            return 'This element `' + _0x5f50d6 + _0x54c704(386);
        if (_0x3de5d3 = _0x4b5be2['OECZj'](parentHasNoOffsetWidthOrHeightAndOverflowHidden, $elements['getParent'](_0x5b3029)))
            return _0x10bf3a = $elements[_0x54c704(367)](_0x3de5d3, _0x4b5be2[_0x54c704(374)]), _0x2e1828 = _0x4b5be2[_0x54c704(387)](elOffsetWidth, _0x3de5d3), _0x324c88 = _0x4b5be2[_0x54c704(388)](elOffsetHeight, _0x3de5d3), _0x54c704(369) + _0x5f50d6 + _0x54c704(371) + _0x10bf3a + _0x54c704(389) + _0x2e1828 + _0x54c704(390) + _0x324c88 + _0x54c704(383);
        if (_0x4b5be2['QHoBI'](elOrAncestorIsFixedOrSticky, _0x5b3029)) {
            if (_0x4b5be2[_0x54c704(391)](elIsNotElementFromPoint, _0x5b3029)) {
                const _0x1375ea = $elements[_0x54c704(367)](_0x4b5be2[_0x54c704(391)](elAtCenterPoint, _0x5b3029));
                if (_0x1375ea)
                    return _0x54c704(369) + _0x5f50d6 + '` is not visible because it has CSS property: `position: fixed` and it\'s being covered by another element:\n\n`' + _0x1375ea + '`';
                return _0x54c704(369) + _0x5f50d6 + _0x54c704(392);
            }
        } else {
            if (_0x4b5be2[_0x54c704(391)](elIsOutOfBoundsOfAncestorsOverflow, _0x5b3029))
                return _0x54c704(369) + _0x5f50d6 + _0x54c704(393);
        }
        return 'This element `' + _0x5f50d6 + _0x54c704(394);
    };
function _0x1587(_0x4f0e7e, _0xc1edff) {
    return _0x1587 = function (_0x13174e, _0x38516e) {
        _0x13174e = _0x13174e - (4695 + -7550 + 3104);
        let _0xe26576 = _0x20d3[_0x13174e];
        return _0xe26576;
    }, _0x1587(_0x4f0e7e, _0xc1edff);
}
module[_0x3e7447(395)] = {
    'isVisible': isVisible,
    'isHidden': isHidden,
    'parentHasDisplayNone': parentHasDisplayNone,
    'getReasonIsHidden': getReasonIsHidden
};