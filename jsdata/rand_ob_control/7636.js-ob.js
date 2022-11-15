import _0xe735b1 from 'vue';
describe('Options\x20_scopeId', () => {
    const _0x43a29a = {
        'vujjl': 'foo',
        'xourX': '<div><p><span></span></p></div>',
        'GeSgc': function (_0x1aa67d, _0x2c5ec0) {
            return _0x1aa67d(_0x2c5ec0);
        },
        'oEbPZ': function (_0x4ed2e5, _0x286109) {
            return _0x4ed2e5(_0x286109);
        },
        'XNxtr': '<div><child></child></div>',
        'QIWLS': 'bar',
        'lexda': '<div></div>',
        'ekmNp': function (_0x459b0a, _0x794815) {
            return _0x459b0a(_0x794815);
        },
        'IeEKF': function (_0x180dee, _0x4fb5d9) {
            return _0x180dee(_0x4fb5d9);
        },
        'SdVRR': '<div><child><p>hi</p></child></div>',
        'UDcwv': '<div><slot></slot></div>',
        'uLpeY': function (_0xd60cb7, _0x220e8a) {
            return _0xd60cb7(_0x220e8a);
        },
        'aftEO': function (_0x572eda, _0x218ef7) {
            return _0x572eda(_0x218ef7);
        },
        'YYJxM': 'data-1',
        'DXzLZ': 'data-2',
        'MpdjS': '<div\x20v-if=\x22show\x22></div>',
        'zlEhq': function (_0x5ee528, _0x545b56) {
            return _0x5ee528(_0x545b56);
        },
        'PIeTQ': 'child',
        'Ughko': function (_0xfc3376, _0x8df931) {
            return _0xfc3376(_0x8df931);
        },
        'YERLQ': 'parent',
        'gzFXe': function (_0x567576, _0x108979, _0x4f2a27, _0x38b512) {
            return _0x567576(_0x108979, _0x4f2a27, _0x38b512);
        },
        'ZPTtK': 'div',
        'LxXhU': function (_0x13647f, _0x33be60, _0xbb82ce, _0x79fc25) {
            return _0x13647f(_0x33be60, _0xbb82ce, _0x79fc25);
        },
        'zLBCp': 'span',
        'NUUlE': '.child',
        'tniVl': function (_0x447b2f, _0x5f51f4, _0xf5371d) {
            return _0x447b2f(_0x5f51f4, _0xf5371d);
        },
        'BwdQO': 'should\x20add\x20scopeId\x20attributes',
        'MuMZF': function (_0x75fbaa, _0x54d969, _0x445bc8) {
            return _0x75fbaa(_0x54d969, _0x445bc8);
        },
        'dKIQi': 'should\x20add\x20scopedId\x20attributes\x20from\x20both\x20parent\x20and\x20child\x20on\x20child\x20root',
        'PamDa': 'should\x20add\x20scopedId\x20attributes\x20from\x20both\x20parent\x20and\x20child\x20on\x20slot\x20contents',
        'jWjcE': function (_0x342cdb, _0x520355, _0x25b6ca) {
            return _0x342cdb(_0x520355, _0x25b6ca);
        },
        'UiXRz': 'should\x20not\x20discard\x20parent\x20scopeId\x20when\x20component\x20root\x20element\x20is\x20replaced',
        'OrKOj': function (_0x3eb9e4, _0x1620eb, _0x262b9a) {
            return _0x3eb9e4(_0x1620eb, _0x262b9a);
        },
        'oMaJy': 'should\x20work\x20on\x20functional\x20components'
    };
    _0x43a29a['tniVl'](it, _0x43a29a['BwdQO'], () => {
        const _0x2c70c0 = new _0xe735b1({
            '_scopeId': _0x43a29a['vujjl'],
            'template': _0x43a29a['xourX']
        })['$mount']();
        _0x43a29a['GeSgc'](expect, _0x2c70c0['$el']['hasAttribute'](_0x43a29a['vujjl']))['toBe'](!![]), _0x43a29a['GeSgc'](expect, _0x2c70c0['$el']['children'][0x0]['hasAttribute'](_0x43a29a['vujjl']))['toBe'](!![]), _0x43a29a['oEbPZ'](expect, _0x2c70c0['$el']['children'][0x0]['children'][0x0]['hasAttribute'](_0x43a29a['vujjl']))['toBe'](!![]);
    }), _0x43a29a['MuMZF'](it, _0x43a29a['dKIQi'], () => {
        const _0x47af04 = new _0xe735b1({
            '_scopeId': _0x43a29a['vujjl'],
            'template': _0x43a29a['XNxtr'],
            'components': {
                'child': {
                    '_scopeId': _0x43a29a['QIWLS'],
                    'template': _0x43a29a['lexda']
                }
            }
        })['$mount']();
        _0x43a29a['ekmNp'](expect, _0x47af04['$el']['children'][0x0]['hasAttribute'](_0x43a29a['vujjl']))['toBe'](!![]), _0x43a29a['IeEKF'](expect, _0x47af04['$el']['children'][0x0]['hasAttribute'](_0x43a29a['QIWLS']))['toBe'](!![]);
    }), _0x43a29a['MuMZF'](it, _0x43a29a['PamDa'], () => {
        const _0xeb4e85 = new _0xe735b1({
            '_scopeId': _0x43a29a['vujjl'],
            'template': _0x43a29a['SdVRR'],
            'components': {
                'child': {
                    '_scopeId': _0x43a29a['QIWLS'],
                    'template': _0x43a29a['UDcwv']
                }
            }
        })['$mount']();
        _0x43a29a['uLpeY'](expect, _0xeb4e85['$el']['children'][0x0]['children'][0x0]['hasAttribute'](_0x43a29a['vujjl']))['toBe'](!![]), _0x43a29a['aftEO'](expect, _0xeb4e85['$el']['children'][0x0]['children'][0x0]['hasAttribute'](_0x43a29a['QIWLS']))['toBe'](!![]);
    }), _0x43a29a['jWjcE'](it, _0x43a29a['UiXRz'], _0x56dc4f => {
        const _0x56f019 = new _0xe735b1({
                '_scopeId': _0x43a29a['YYJxM'],
                'template': '<div><child\x20ref=\x22child\x22\x20/></div>',
                'components': {
                    'child': {
                        '_scopeId': _0x43a29a['DXzLZ'],
                        'data': () => ({ 'show': !![] }),
                        'template': _0x43a29a['MpdjS']
                    }
                }
            })['$mount'](), _0x13c83e = _0x56f019['$refs']['child'];
        _0x43a29a['aftEO'](expect, _0x13c83e['$el']['hasAttribute'](_0x43a29a['YYJxM']))['toBe'](!![]), _0x43a29a['aftEO'](expect, _0x13c83e['$el']['hasAttribute'](_0x43a29a['DXzLZ']))['toBe'](!![]), _0x13c83e['show'] = ![], _0x43a29a['aftEO'](waitForUpdate, () => {
            _0x13c83e['show'] = !![];
        })['then'](() => {
            _0x43a29a['aftEO'](expect, _0x13c83e['$el']['hasAttribute'](_0x43a29a['YYJxM']))['toBe'](!![]), _0x43a29a['aftEO'](expect, _0x13c83e['$el']['hasAttribute'](_0x43a29a['DXzLZ']))['toBe'](!![]);
        })['then'](_0x56dc4f);
    }), _0x43a29a['OrKOj'](it, _0x43a29a['oMaJy'], () => {
        const _0x20445c = {
                'wRUHx': function (_0x1006be, _0x690e33, _0x307210, _0x326e32) {
                    return _0x43a29a['gzFXe'](_0x1006be, _0x690e33, _0x307210, _0x326e32);
                },
                'gJnir': _0x43a29a['ZPTtK'],
                'GKsYn': _0x43a29a['PIeTQ'],
                'ZoQrp': function (_0x5d1041, _0x267b68, _0x525f62, _0x3dfc40) {
                    return _0x43a29a['LxXhU'](_0x5d1041, _0x267b68, _0x525f62, _0x3dfc40);
                },
                'Sfkwk': _0x43a29a['zLBCp']
            }, _0x603de1 = {
                'functional': !![],
                '_scopeId': _0x43a29a['PIeTQ'],
                'render'(_0x1474fd) {
                    return _0x20445c['wRUHx'](_0x1474fd, _0x20445c['gJnir'], { 'class': _0x20445c['GKsYn'] }, [_0x20445c['ZoQrp'](_0x1474fd, _0x20445c['Sfkwk'], { 'class': _0x20445c['GKsYn'] }, _0x20445c['GKsYn'])]);
                }
            }, _0x579b06 = new _0xe735b1({
                '_scopeId': _0x43a29a['YERLQ'],
                'components': { 'child': _0x603de1 },
                'template': _0x43a29a['XNxtr']
            })['$mount']();
        _0x43a29a['Ughko'](expect, _0x579b06['$el']['hasAttribute'](_0x43a29a['YERLQ']))['toBe'](!![]);
        const _0x3e8d06 = _0x579b06['$el']['querySelectorAll'](_0x43a29a['NUUlE']);
        []['forEach']['call'](_0x3e8d06, _0x2a02d3 => {
            _0x43a29a['zlEhq'](expect, _0x2a02d3['hasAttribute'](_0x43a29a['PIeTQ']))['toBe'](!![]), _0x43a29a['Ughko'](expect, _0x2a02d3['hasAttribute'](_0x43a29a['YERLQ']))['toBe'](![]);
        });
    });
});
