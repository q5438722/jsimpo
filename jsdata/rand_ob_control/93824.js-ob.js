const _ = require('lodash'), $jquery = require('./jquery'), $document = require('./document'), $elements = require('./elements'), $coordinates = require('./coordinates'), $transform = require('./transform'), fixedOrAbsoluteRe = /(fixed|absolute)/, OVERFLOW_PROPS = [
        'hidden',
        'scroll',
        'auto'
    ], isVisible = _0x52c42e => {
        const _0x40974b = {
            'cXoMW': function (_0x3355c4, _0x48f263, _0x6467a3) {
                return _0x3355c4(_0x48f263, _0x6467a3);
            },
            'WWEia': 'isVisible()'
        };
        return !_0x40974b['cXoMW'](isHidden, _0x52c42e, _0x40974b['WWEia']);
    }, isHidden = (_0x2072f7, _0x69f9e9 = 'isHidden()', _0x2e37d5 = { 'checkOpacity': !![] }) => {
        const _0xfa1b7f = {
            'Geudg': function (_0x39bebe, _0x5cefff) {
                return _0x39bebe(_0x5cefff);
            },
            'CPASl': 'select',
            'wYtdN': function (_0x16091b, _0x2165fa, _0x217538) {
                return _0x16091b(_0x2165fa, _0x217538);
            },
            'HQMHU': function (_0x122fd3, _0x1dd006) {
                return _0x122fd3(_0x1dd006);
            },
            'WwCqI': function (_0x96ff5, _0x51e95c) {
                return _0x96ff5 !== _0x51e95c;
            },
            'NVBhY': 'visible',
            'SVwQM': function (_0x1ab043, _0x1cb103, _0x42ec51) {
                return _0x1ab043(_0x1cb103, _0x42ec51);
            },
            'qMvND': function (_0x2d5260, _0x157188) {
                return _0x2d5260(_0x157188);
            },
            'RHbuM': function (_0x1ded67, _0x3809a4) {
                return _0x1ded67(_0x3809a4);
            },
            'WQiuB': function (_0x5e7699, _0x396179) {
                return _0x5e7699(_0x396179);
            }
        };
        if (!$elements['isElement'](_0x2072f7))
            throw new Error('`Cypress.dom.' + _0x69f9e9 + '`\x20failed\x20because\x20it\x20requires\x20a\x20DOM\x20element.\x20The\x20subject\x20received\x20was:\x20`' + _0x2072f7 + '`');
        const _0x51cde0 = $jquery['wrap'](_0x2072f7);
        if ($elements['isBody'](_0x2072f7) || $elements['isHTML'](_0x2072f7))
            return ![];
        if ($elements['isOption'](_0x2072f7) || $elements['isOptgroup'](_0x2072f7)) {
            if (_0xfa1b7f['Geudg'](elHasDisplayNone, _0x51cde0))
                return !![];
            const _0xd5e755 = $elements['getFirstParentWithTagName'](_0x51cde0, _0xfa1b7f['CPASl']);
            if (_0xd5e755 && _0xd5e755['length'])
                return _0xfa1b7f['wYtdN'](isHidden, _0xd5e755[0x0], _0x69f9e9);
        }
        if (_0xfa1b7f['Geudg'](elHasNoEffectiveWidthOrHeight, _0x51cde0)) {
            if (_0xfa1b7f['Geudg'](elHasDisplayInline, _0x51cde0))
                return !_0xfa1b7f['Geudg'](elHasVisibleChild, _0x51cde0);
            return !![];
        }
        if (_0xfa1b7f['HQMHU'](elHasVisibilityHiddenOrCollapse, _0x51cde0))
            return !![];
        if (_0xfa1b7f['WwCqI']($transform['detectVisibility'](_0x51cde0), _0xfa1b7f['NVBhY']))
            return !![];
        if (_0xfa1b7f['HQMHU'](elHasOpacityZero, _0x51cde0) && _0x2e37d5['checkOpacity'])
            return !![];
        if (_0xfa1b7f['SVwQM'](elIsHiddenByAncestors, _0x51cde0, _0x2e37d5['checkOpacity']))
            return !![];
        if (_0xfa1b7f['qMvND'](elOrAncestorIsFixedOrSticky, _0x51cde0))
            return _0xfa1b7f['RHbuM'](elIsNotElementFromPoint, _0x51cde0);
        return _0xfa1b7f['WQiuB'](elIsOutOfBoundsOfAncestorsOverflow, _0x51cde0);
    }, elHasNoEffectiveWidthOrHeight = _0x1d1d9e => {
        const _0x43646e = {
                'eSPUA': function (_0x1a4de0, _0x290c6d) {
                    return _0x1a4de0(_0x290c6d);
                },
                'ozQbE': 'transform',
                'skBxA': function (_0x2b48c6, _0x3aad06) {
                    return _0x2b48c6(_0x3aad06);
                },
                'WNYYw': function (_0x50bc70, _0x20a379) {
                    return _0x50bc70(_0x20a379);
                },
                'yETnY': function (_0x33e97b, _0x18a009, _0x4b3b8a, _0x248ac0) {
                    return _0x33e97b(_0x18a009, _0x4b3b8a, _0x248ac0);
                },
                'hHCgx': function (_0x307ade, _0x574ee1) {
                    return _0x307ade <= _0x574ee1;
                }
            }, _0x17fff2 = _0x1d1d9e[0x0], _0x5a6e67 = _0x43646e['eSPUA'](getComputedStyle, _0x17fff2), _0x2bdf7d = _0x5a6e67['getPropertyValue'](_0x43646e['ozQbE']), _0x520fae = _0x43646e['eSPUA'](elOffsetWidth, _0x1d1d9e), _0x1083c6 = _0x43646e['skBxA'](elOffsetHeight, _0x1d1d9e), _0x56ebf3 = _0x43646e['WNYYw'](elHasOverflowHidden, _0x1d1d9e);
        return _0x43646e['yETnY'](isZeroLengthAndTransformNone, _0x520fae, _0x1083c6, _0x2bdf7d) || _0x43646e['yETnY'](isZeroLengthAndOverflowHidden, _0x520fae, _0x1083c6, _0x56ebf3) || _0x43646e['hHCgx'](_0x17fff2['getClientRects']()['length'], 0x0);
    }, isZeroLengthAndTransformNone = (_0x436897, _0x4730f2, _0x1d166a) => {
        const _0x507f96 = {
            'GvGsX': function (_0x3024c4, _0xaf889f) {
                return _0x3024c4 <= _0xaf889f;
            },
            'GkQln': function (_0x7d229, _0x41285d) {
                return _0x7d229 === _0x41285d;
            },
            'Djljh': 'none',
            'idBlC': function (_0x193c89, _0x240fe1) {
                return _0x193c89 === _0x240fe1;
            }
        };
        return _0x507f96['GvGsX'](_0x436897, 0x0) && _0x507f96['GkQln'](_0x1d166a, _0x507f96['Djljh']) || _0x507f96['GvGsX'](_0x4730f2, 0x0) && _0x507f96['idBlC'](_0x1d166a, _0x507f96['Djljh']);
    }, isZeroLengthAndOverflowHidden = (_0x428eef, _0x3c0cdb, _0x44c63f) => {
        const _0x440328 = {
            'BAVcV': function (_0x6658f1, _0x3358fb) {
                return _0x6658f1 <= _0x3358fb;
            },
            'fKThv': function (_0x4d318e, _0x353593) {
                return _0x4d318e <= _0x353593;
            }
        };
        return _0x440328['BAVcV'](_0x428eef, 0x0) && _0x44c63f || _0x440328['fKThv'](_0x3c0cdb, 0x0) && _0x44c63f;
    }, elHasNoOffsetWidthOrHeight = _0x112c19 => {
        const _0x2b6149 = {
            'IQNEV': function (_0x508014, _0x63d01) {
                return _0x508014 <= _0x63d01;
            },
            'oUAkT': function (_0xde0bb5, _0x5f0388) {
                return _0xde0bb5(_0x5f0388);
            },
            'CbUwH': function (_0x3dbc6a, _0x48fb5e) {
                return _0x3dbc6a(_0x48fb5e);
            }
        };
        return _0x2b6149['IQNEV'](_0x2b6149['oUAkT'](elOffsetWidth, _0x112c19), 0x0) || _0x2b6149['IQNEV'](_0x2b6149['CbUwH'](elOffsetHeight, _0x112c19), 0x0);
    }, elOffsetWidth = _0x49aad2 => {
        return _0x49aad2[0x0]['offsetWidth'];
    }, elOffsetHeight = _0x4cb0bd => {
        return _0x4cb0bd[0x0]['offsetHeight'];
    }, elHasVisibilityHiddenOrCollapse = _0xaa9bb1 => {
        const _0x1503cf = {
            'kaUNb': function (_0x42fde8, _0x407611) {
                return _0x42fde8(_0x407611);
            },
            'VAFtP': function (_0x2fd1c5, _0xfe0b14) {
                return _0x2fd1c5(_0xfe0b14);
            }
        };
        return _0x1503cf['kaUNb'](elHasVisibilityHidden, _0xaa9bb1) || _0x1503cf['VAFtP'](elHasVisibilityCollapse, _0xaa9bb1);
    }, elHasVisibilityHidden = _0x496ebb => {
        const _0x2365cf = {
            'dGrcx': function (_0x56ba4a, _0x188c55) {
                return _0x56ba4a === _0x188c55;
            },
            'UInHz': 'visibility',
            'aGUVk': 'hidden'
        };
        return _0x2365cf['dGrcx'](_0x496ebb['css'](_0x2365cf['UInHz']), _0x2365cf['aGUVk']);
    }, elHasVisibilityCollapse = _0x98fb25 => {
        const _0x315765 = {
            'tDJhr': function (_0x373dea, _0x24185a) {
                return _0x373dea === _0x24185a;
            },
            'lulbu': 'visibility',
            'oPXRL': 'collapse'
        };
        return _0x315765['tDJhr'](_0x98fb25['css'](_0x315765['lulbu']), _0x315765['oPXRL']);
    }, elHasOpacityZero = _0x1462a3 => {
        const _0x5e7484 = {
            'hsWmX': function (_0x34d790, _0x3a6dff) {
                return _0x34d790 === _0x3a6dff;
            },
            'xUbpB': 'opacity'
        };
        return _0x5e7484['hsWmX'](_0x1462a3['css'](_0x5e7484['xUbpB']), '0');
    }, elHasDisplayNone = _0xfe5a53 => {
        const _0x251f05 = {
            'NRZvU': function (_0x809bc8, _0x29e5b6) {
                return _0x809bc8 === _0x29e5b6;
            },
            'bNKuQ': 'display',
            'sqhmI': 'none'
        };
        return _0x251f05['NRZvU'](_0xfe5a53['css'](_0x251f05['bNKuQ']), _0x251f05['sqhmI']);
    }, elHasDisplayInline = _0x3529fa => {
        const _0x58a6cf = {
            'YACad': function (_0x2b8513, _0x404268) {
                return _0x2b8513 === _0x404268;
            },
            'OTupV': 'display',
            'wUqtP': 'inline'
        };
        return _0x58a6cf['YACad'](_0x3529fa['css'](_0x58a6cf['OTupV']), _0x58a6cf['wUqtP']);
    }, elHasOverflowHidden = function (_0x3f6da6) {
        const _0x130d8f = {
                'zggnC': 'overflow',
                'eErRy': 'overflow-y',
                'ScRZT': 'overflow-x',
                'ulaay': 'hidden'
            }, _0x4e7ca1 = [
                _0x3f6da6['css'](_0x130d8f['zggnC']),
                _0x3f6da6['css'](_0x130d8f['eErRy']),
                _0x3f6da6['css'](_0x130d8f['ScRZT'])
            ];
        return _0x4e7ca1['includes'](_0x130d8f['ulaay']);
    }, elHasPositionRelative = _0x1d5838 => {
        const _0x113960 = {
            'ssUrO': function (_0x3983be, _0x383e76) {
                return _0x3983be === _0x383e76;
            },
            'Sqjyx': 'position',
            'ZaWaK': 'relative'
        };
        return _0x113960['ssUrO'](_0x1d5838['css'](_0x113960['Sqjyx']), _0x113960['ZaWaK']);
    }, elHasPositionAbsolute = _0x2afd6c => {
        const _0x30e86b = {
            'lhACg': function (_0x42fcb4, _0x526f36) {
                return _0x42fcb4 === _0x526f36;
            },
            'QNPKV': 'position',
            'kDQhk': 'absolute'
        };
        return _0x30e86b['lhACg'](_0x2afd6c['css'](_0x30e86b['QNPKV']), _0x30e86b['kDQhk']);
    }, elHasClippableOverflow = function (_0x5a1ca9) {
        const _0x1f7fcf = {
            'qdLGC': 'overflow',
            'gaOCK': 'overflow-y',
            'ojaVq': 'overflow-x'
        };
        return OVERFLOW_PROPS['includes'](_0x5a1ca9['css'](_0x1f7fcf['qdLGC'])) || OVERFLOW_PROPS['includes'](_0x5a1ca9['css'](_0x1f7fcf['gaOCK'])) || OVERFLOW_PROPS['includes'](_0x5a1ca9['css'](_0x1f7fcf['ojaVq']));
    }, canClipContent = function (_0x5db00f, _0x518a5f) {
        const _0x4bd267 = {
            'ykanJ': function (_0x4f9c82, _0x172af0) {
                return _0x4f9c82(_0x172af0);
            },
            'aFBoK': function (_0x20601f, _0x5b7c98) {
                return _0x20601f(_0x5b7c98);
            }
        };
        if (!_0x4bd267['ykanJ'](elHasClippableOverflow, _0x518a5f))
            return ![];
        const _0x3ccaf5 = _0x5db00f['offsetParent']();
        if (!_0x4bd267['ykanJ'](elHasPositionRelative, _0x5db00f) && $elements['isAncestor'](_0x518a5f, _0x3ccaf5))
            return ![];
        if (_0x4bd267['aFBoK'](elHasPositionAbsolute, _0x3ccaf5) && $elements['isChild'](_0x518a5f, _0x3ccaf5))
            return ![];
        return !![];
    }, elOrAncestorIsFixedOrSticky = function (_0x50d826) {
        return !!$elements['getFirstFixedOrStickyPositionParent'](_0x50d826);
    }, elAtCenterPoint = function (_0x30937b) {
        const _0x2be5fb = $document['getDocumentFromElement'](_0x30937b['get'](0x0)), _0x38ca6b = $coordinates['getElementPositioning'](_0x30937b), {
                topCenter: _0x947c91,
                leftCenter: _0xfc3943
            } = _0x38ca6b['fromElViewport'], _0x5979c8 = $coordinates['getElementAtPointFromViewport'](_0x2be5fb, _0xfc3943, _0x947c91);
        if (_0x5979c8)
            return $jquery['wrap'](_0x5979c8);
    }, elDescendentsHavePositionFixedOrAbsolute = function (_0x107130, _0x29a766) {
        const _0x4159f0 = { 'mUnyp': 'position' }, _0x3f001c = $elements['getAllParents'](_0x29a766[0x0], _0x107130), _0x447a6c = $jquery['wrap'](_0x3f001c)['add'](_0x29a766);
        return _['some'](_0x447a6c['get'](), _0x314a30 => {
            return fixedOrAbsoluteRe['test']($jquery['wrap'](_0x314a30)['css'](_0x4159f0['mUnyp']));
        });
    }, elHasVisibleChild = function (_0x4e1616) {
        const _0x11fd5d = {
            'IsmRl': function (_0x5f4edc, _0xf90ca7) {
                return _0x5f4edc(_0xf90ca7);
            }
        };
        return _['some'](_0x4e1616['children'](), _0x37901b => {
            return _0x11fd5d['IsmRl'](isVisible, _0x37901b);
        });
    }, elIsNotElementFromPoint = function (_0x1a2499) {
        const _0x4a0ec9 = {
                'NFWPQ': function (_0x60e09d, _0x3a5c94) {
                    return _0x60e09d(_0x3a5c94);
                },
                'GrVhN': function (_0x2511d2, _0x1d9a73) {
                    return _0x2511d2 === _0x1d9a73;
                },
                'NWalu': 'pointer-events',
                'hhPaa': 'none'
            }, _0x1259c0 = _0x4a0ec9['NFWPQ'](elAtCenterPoint, _0x1a2499);
        if ($elements['isDescendent'](_0x1a2499, _0x1259c0))
            return ![];
        if ((_0x4a0ec9['GrVhN'](_0x1a2499['css'](_0x4a0ec9['NWalu']), _0x4a0ec9['hhPaa']) || _0x4a0ec9['GrVhN'](_0x1a2499['parent']()['css'](_0x4a0ec9['NWalu']), _0x4a0ec9['hhPaa'])) && (_0x1259c0 && $elements['isAncestor'](_0x1a2499, _0x1259c0)))
            return ![];
        return !![];
    }, elIsOutOfBoundsOfAncestorsOverflow = function (_0x443a7d, _0x571aab = $elements['getParent'](_0x443a7d)) {
        const _0x3cc4b6 = {
            'cLjrl': function (_0x14c27f, _0x1e0a65, _0x4406c9) {
                return _0x14c27f(_0x1e0a65, _0x4406c9);
            },
            'ELlAD': function (_0x3167f7, _0x58ddbc) {
                return _0x3167f7 > _0x58ddbc;
            },
            'ImPbg': function (_0x4af349, _0x1d51e0) {
                return _0x4af349 + _0x1d51e0;
            },
            'yNNdD': function (_0x3df5af, _0x619f51) {
                return _0x3df5af < _0x619f51;
            },
            'oquxS': function (_0x14ab37, _0x5727c3) {
                return _0x14ab37 + _0x5727c3;
            },
            'EmAnW': function (_0x36dc7c, _0x4cffd3) {
                return _0x36dc7c > _0x4cffd3;
            },
            'Kbbwp': function (_0x75b30, _0x4037e3) {
                return _0x75b30 + _0x4037e3;
            },
            'DTGMA': function (_0x3e8f0a, _0xc9d088) {
                return _0x3e8f0a + _0xc9d088;
            },
            'Isjvc': function (_0x5e7c20, _0x36addd, _0x5ce827) {
                return _0x5e7c20(_0x36addd, _0x5ce827);
            }
        };
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x571aab))
            return ![];
        const _0x1b0bf7 = $coordinates['getElementPositioning'](_0x443a7d);
        if (_0x3cc4b6['cLjrl'](canClipContent, _0x443a7d, _0x571aab)) {
            const _0x4baad4 = $coordinates['getElementPositioning'](_0x571aab);
            if (_0x3cc4b6['ELlAD'](_0x1b0bf7['fromElWindow']['left'], _0x3cc4b6['ImPbg'](_0x4baad4['width'], _0x4baad4['fromElWindow']['left'])) || _0x3cc4b6['yNNdD'](_0x3cc4b6['oquxS'](_0x1b0bf7['fromElWindow']['left'], _0x1b0bf7['width']), _0x4baad4['fromElWindow']['left']) || _0x3cc4b6['EmAnW'](_0x1b0bf7['fromElWindow']['top'], _0x3cc4b6['Kbbwp'](_0x4baad4['height'], _0x4baad4['fromElWindow']['top'])) || _0x3cc4b6['yNNdD'](_0x3cc4b6['DTGMA'](_0x1b0bf7['fromElWindow']['top'], _0x1b0bf7['height']), _0x4baad4['fromElWindow']['top']))
                return !![];
        }
        return _0x3cc4b6['Isjvc'](elIsOutOfBoundsOfAncestorsOverflow, _0x443a7d, $elements['getParent'](_0x571aab));
    }, elIsHiddenByAncestors = function (_0x157a8d, _0x1f0281, _0x57e1f7 = _0x157a8d) {
        const _0x216ac7 = {
                'froWV': function (_0x2cb196, _0x38fc32) {
                    return _0x2cb196(_0x38fc32);
                },
                'mnNZq': function (_0x9c12f9, _0x174ead) {
                    return _0x9c12f9(_0x174ead);
                },
                'qqRST': function (_0x4ba59b, _0x4a042c) {
                    return _0x4ba59b(_0x4a042c);
                },
                'eLtXr': function (_0x365c7c, _0xb57ece, _0x4159b7) {
                    return _0x365c7c(_0xb57ece, _0x4159b7);
                },
                'NJaiq': function (_0x517e7f, _0x15b492, _0x22b892, _0x144348) {
                    return _0x517e7f(_0x15b492, _0x22b892, _0x144348);
                }
            }, _0x5a460d = $elements['getParent'](_0x157a8d);
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x5a460d))
            return ![];
        if (_0x216ac7['froWV'](elHasOpacityZero, _0x5a460d) && _0x1f0281)
            return !![];
        if (_0x216ac7['mnNZq'](elHasOverflowHidden, _0x5a460d) && _0x216ac7['qqRST'](elHasNoEffectiveWidthOrHeight, _0x5a460d))
            return !_0x216ac7['eLtXr'](elDescendentsHavePositionFixedOrAbsolute, _0x5a460d, _0x57e1f7);
        return _0x216ac7['NJaiq'](elIsHiddenByAncestors, _0x5a460d, _0x1f0281, _0x57e1f7);
    }, parentHasNoOffsetWidthOrHeightAndOverflowHidden = function (_0x491de8) {
        const _0x11815a = {
            'GhuGD': function (_0x13d982, _0x133693) {
                return _0x13d982(_0x133693);
            },
            'Kuvlz': function (_0x45f0e1, _0x4a7ab7) {
                return _0x45f0e1(_0x4a7ab7);
            },
            'lyAHF': function (_0xeee6d0, _0x26ab23) {
                return _0xeee6d0(_0x26ab23);
            }
        };
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x491de8))
            return ![];
        if (_0x11815a['GhuGD'](elHasOverflowHidden, _0x491de8) && _0x11815a['Kuvlz'](elHasNoEffectiveWidthOrHeight, _0x491de8))
            return _0x491de8;
        return _0x11815a['lyAHF'](parentHasNoOffsetWidthOrHeightAndOverflowHidden, $elements['getParent'](_0x491de8));
    }, parentHasDisplayNone = function (_0x4bc92e) {
        const _0x2df941 = {
            'xdOpv': function (_0x126e8c, _0x2d7d8c) {
                return _0x126e8c(_0x2d7d8c);
            },
            'eDqWS': function (_0x24e610, _0x89e4b4) {
                return _0x24e610(_0x89e4b4);
            }
        };
        if (!_0x4bc92e['length'] || $document['isDocument'](_0x4bc92e))
            return ![];
        if (_0x2df941['xdOpv'](elHasDisplayNone, _0x4bc92e))
            return _0x4bc92e;
        return _0x2df941['eDqWS'](parentHasDisplayNone, $elements['getParent'](_0x4bc92e));
    }, parentHasVisibilityHidden = function (_0x200674) {
        const _0x41f197 = {
            'GRTNC': function (_0x530a8e, _0x211ef6) {
                return _0x530a8e(_0x211ef6);
            },
            'IjSAA': function (_0x59158c, _0x6897d6) {
                return _0x59158c(_0x6897d6);
            }
        };
        if (!_0x200674['length'] || $document['isDocument'](_0x200674))
            return ![];
        if (_0x41f197['GRTNC'](elHasVisibilityHidden, _0x200674))
            return _0x200674;
        return _0x41f197['IjSAA'](parentHasVisibilityHidden, $elements['getParent'](_0x200674));
    }, parentHasVisibilityCollapse = function (_0x3fa94a) {
        const _0x2bd106 = {
            'rQTwZ': function (_0x2bc09d, _0xc80887) {
                return _0x2bc09d(_0xc80887);
            },
            'yCNcH': function (_0x8b089a, _0x300186) {
                return _0x8b089a(_0x300186);
            }
        };
        if (!_0x3fa94a['length'] || $document['isDocument'](_0x3fa94a))
            return ![];
        if (_0x2bd106['rQTwZ'](elHasVisibilityCollapse, _0x3fa94a))
            return _0x3fa94a;
        return _0x2bd106['yCNcH'](parentHasVisibilityCollapse, $elements['getParent'](_0x3fa94a));
    }, parentHasOpacityZero = function (_0x4912d8) {
        const _0x1401fc = {
            'azQJR': function (_0x42cba0, _0x347ca6) {
                return _0x42cba0(_0x347ca6);
            }
        };
        if (!_0x4912d8['length'] || $document['isDocument'](_0x4912d8))
            return ![];
        if (_0x1401fc['azQJR'](elHasOpacityZero, _0x4912d8))
            return _0x4912d8;
        return _0x1401fc['azQJR'](parentHasOpacityZero, _0x4912d8['parent']());
    }, getReasonIsHidden = function (_0x8c8f12, _0x46e26a = { 'checkOpacity': !![] }) {
        const _0xf1011f = {
                'Vjsmo': 'short',
                'zlnsh': function (_0x4af1c9, _0x193fd4) {
                    return _0x4af1c9(_0x193fd4);
                },
                'CyyJl': function (_0x3e02d3, _0x2afa5d) {
                    return _0x3e02d3(_0x2afa5d);
                },
                'Khrff': function (_0x1d44ba, _0x4ecba9) {
                    return _0x1d44ba(_0x4ecba9);
                },
                'Vpumb': function (_0x5c14f0, _0x106a7b) {
                    return _0x5c14f0(_0x106a7b);
                },
                'UdTMs': function (_0x52cf13, _0x13aa54) {
                    return _0x52cf13(_0x13aa54);
                },
                'PkWrL': function (_0x59ee99, _0x126583) {
                    return _0x59ee99(_0x126583);
                },
                'ZJZvp': function (_0x56c9c6, _0xb97227) {
                    return _0x56c9c6 === _0xb97227;
                },
                'YbPpr': 'transformed',
                'OLvdq': function (_0x13f92c, _0x1c4f2b) {
                    return _0x13f92c === _0x1c4f2b;
                },
                'hqQrp': 'backface',
                'mbpqb': function (_0x4d1206, _0x417bb0) {
                    return _0x4d1206(_0x417bb0);
                },
                'vdGdx': function (_0x1c5a52, _0x1acc76) {
                    return _0x1c5a52(_0x1acc76);
                }
            }, _0x2b87f5 = $elements['stringify'](_0x8c8f12, _0xf1011f['Vjsmo']);
        let _0x1de62b = _0xf1011f['zlnsh'](elOffsetWidth, _0x8c8f12), _0x1e27da = _0xf1011f['zlnsh'](elOffsetHeight, _0x8c8f12), _0x43917a, _0x561083;
        if (_0xf1011f['zlnsh'](elHasDisplayNone, _0x8c8f12))
            return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`display:\x20none`';
        if (_0x43917a = _0xf1011f['zlnsh'](parentHasDisplayNone, $elements['getParent'](_0x8c8f12)))
            return _0x561083 = $elements['stringify'](_0x43917a, _0xf1011f['Vjsmo']), 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x561083 + '`\x20has\x20CSS\x20property:\x20`display:\x20none`';
        if (_0x43917a = _0xf1011f['CyyJl'](parentHasVisibilityHidden, $elements['getParent'](_0x8c8f12)))
            return _0x561083 = $elements['stringify'](_0x43917a, _0xf1011f['Vjsmo']), 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x561083 + '`\x20has\x20CSS\x20property:\x20`visibility:\x20hidden`';
        if (_0x43917a = _0xf1011f['Khrff'](parentHasVisibilityCollapse, $elements['getParent'](_0x8c8f12)))
            return _0x561083 = $elements['stringify'](_0x43917a, _0xf1011f['Vjsmo']), 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x561083 + '`\x20has\x20CSS\x20property:\x20`visibility:\x20collapse`';
        if ($elements['isDetached'](_0x8c8f12))
            return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20detached\x20from\x20the\x20DOM';
        if (_0xf1011f['Khrff'](elHasVisibilityHidden, _0x8c8f12))
            return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`visibility:\x20hidden`';
        if (_0xf1011f['Vpumb'](elHasVisibilityCollapse, _0x8c8f12))
            return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`visibility:\x20collapse`';
        if (_0xf1011f['UdTMs'](elHasOpacityZero, _0x8c8f12) && _0x46e26a['checkOpacity'])
            return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`opacity:\x200`';
        if ((_0x43917a = _0xf1011f['PkWrL'](parentHasOpacityZero, _0x8c8f12['parent']())) && _0x46e26a['checkOpacity'])
            return _0x561083 = $elements['stringify'](_0x43917a, _0xf1011f['Vjsmo']), 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x561083 + '`\x20has\x20CSS\x20property:\x20`opacity:\x200`';
        if (_0xf1011f['PkWrL'](elHasNoOffsetWidthOrHeight, _0x8c8f12))
            return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20an\x20effective\x20width\x20and\x20height\x20of:\x20`' + _0x1de62b + '\x20x\x20' + _0x1e27da + '`\x20pixels.';
        const _0x3ddffb = $transform['detectVisibility'](_0x8c8f12);
        if (_0xf1011f['ZJZvp'](_0x3ddffb, _0xf1011f['YbPpr']))
            return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20hidden\x20by\x20transform.';
        if (_0xf1011f['OLvdq'](_0x3ddffb, _0xf1011f['hqQrp']))
            return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20rotated\x20and\x20its\x20backface\x20is\x20hidden.';
        if (_0x43917a = _0xf1011f['mbpqb'](parentHasNoOffsetWidthOrHeightAndOverflowHidden, $elements['getParent'](_0x8c8f12)))
            return _0x561083 = $elements['stringify'](_0x43917a, _0xf1011f['Vjsmo']), _0x1de62b = _0xf1011f['mbpqb'](elOffsetWidth, _0x43917a), _0x1e27da = _0xf1011f['mbpqb'](elOffsetHeight, _0x43917a), 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x561083 + '`\x20has\x20CSS\x20property:\x20`overflow:\x20hidden`\x20and\x20an\x20effective\x20width\x20and\x20height\x20of:\x20`' + _0x1de62b + '\x20x\x20' + _0x1e27da + '`\x20pixels.';
        if (_0xf1011f['vdGdx'](elOrAncestorIsFixedOrSticky, _0x8c8f12)) {
            if (_0xf1011f['vdGdx'](elIsNotElementFromPoint, _0x8c8f12)) {
                const _0x42b09f = $elements['stringify'](_0xf1011f['vdGdx'](elAtCenterPoint, _0x8c8f12));
                if (_0x42b09f)
                    return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`position:\x20fixed`\x20and\x20it\x27s\x20being\x20covered\x20by\x20another\x20element:\x0a\x0a`' + _0x42b09f + '`';
                return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20its\x20ancestor\x20has\x20`position:\x20fixed`\x20CSS\x20property\x20and\x20it\x20is\x20overflowed\x20by\x20other\x20elements.\x20How\x20about\x20scrolling\x20to\x20the\x20element\x20with\x20`cy.scrollIntoView()`?';
            }
        } else {
            if (_0xf1011f['vdGdx'](elIsOutOfBoundsOfAncestorsOverflow, _0x8c8f12))
                return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible\x20because\x20its\x20content\x20is\x20being\x20clipped\x20by\x20one\x20of\x20its\x20parent\x20elements,\x20which\x20has\x20a\x20CSS\x20property\x20of\x20overflow:\x20`hidden`,\x20`scroll`\x20or\x20`auto`';
        }
        return 'This\x20element\x20`' + _0x2b87f5 + '`\x20is\x20not\x20visible.';
    };
module['exports'] = {
    'isVisible': isVisible,
    'isHidden': isHidden,
    'parentHasDisplayNone': parentHasDisplayNone,
    'getReasonIsHidden': getReasonIsHidden
};
