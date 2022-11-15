import _0xcc0e89 from 'mockdate';
import _0x6249e8 from 'moment';
import _0x122042 from '../../src';
import '../../src/locale/fr';
import '../../src/locale/ru';
import '../../src/locale/zh-cn';
import _0x122fb1 from '../../src/plugin/localeData';
import _0x1b174f from '../../src/plugin/localizedFormat';
_0x122042['extend'](_0x1b174f), _0x122042['extend'](_0x122fb1), beforeEach(() => {
    _0xcc0e89['set'](new Date());
}), afterEach(() => {
    _0xcc0e89['reset']();
}), describe('Instance\x20localeData', () => {
    const _0x46e6b1 = {
        'HXZle': function (_0x4dac3a, _0x835dc) {
            return _0x4dac3a(_0x835dc);
        },
        'KCPiD': function (_0xd673af) {
            return _0xd673af();
        },
        'rFdSa': function (_0x495b8c) {
            return _0x495b8c();
        },
        'gQXXO': function (_0x42aa04, _0x1b4075) {
            return _0x42aa04(_0x1b4075);
        },
        'phwrR': function (_0x344322, _0x4a3bf0) {
            return _0x344322(_0x4a3bf0);
        },
        'WaBwh': function (_0x10f49b, _0x2a9aa5) {
            return _0x10f49b(_0x2a9aa5);
        },
        'fpdQv': function (_0x2402b8, _0xad48c7) {
            return _0x2402b8(_0xad48c7);
        },
        'LDFwp': function (_0x1e69ba, _0x2ef6d3) {
            return _0x1e69ba(_0x2ef6d3);
        },
        'zTFIK': 'LTS',
        'ykWXj': 'LLL',
        'jkwzf': 'LLLL',
        'dgaFs': 'lll',
        'Iafsc': 'llll',
        'fEwuv': function (_0x2d8771, _0x88530b, _0x1ede69) {
            return _0x2d8771(_0x88530b, _0x1ede69);
        },
        'hprXq': 'zh-cn'
    };
    [
        _0x46e6b1['hprXq'],
        'en',
        'fr'
    ]['forEach'](_0x3e253f => {
        _0x46e6b1['fEwuv'](it, 'Locale:\x20' + _0x3e253f, () => {
            const _0xf381c6 = {
                'AhTQA': function (_0x1b2f0a, _0x117604) {
                    return _0x46e6b1['HXZle'](_0x1b2f0a, _0x117604);
                }
            };
            _0x122042['locale'](_0x3e253f), _0x6249e8['locale'](_0x3e253f);
            const _0x7ce182 = _0x46e6b1['KCPiD'](_0x122042), _0x3f7132 = _0x46e6b1['rFdSa'](_0x6249e8), _0xcd719e = _0x46e6b1['rFdSa'](_0x122042)['localeData'](), _0x40ae78 = _0x46e6b1['rFdSa'](_0x6249e8)['localeData']();
            _0x46e6b1['HXZle'](expect, _0xcd719e['firstDayOfWeek']())['toBe'](_0x40ae78['firstDayOfWeek']()), _0x46e6b1['gQXXO'](expect, _0xcd719e['months'](_0x7ce182))['toBe'](_0x40ae78['months'](_0x3f7132)), _0x46e6b1['gQXXO'](expect, _0xcd719e['months']())['toEqual'](_0x40ae78['months']()), _0x46e6b1['gQXXO'](expect, _0xcd719e['monthsShort'](_0x7ce182))['toBe'](_0x40ae78['monthsShort'](_0x3f7132)), _0x46e6b1['phwrR'](expect, _0xcd719e['monthsShort']())['toEqual'](_0x40ae78['monthsShort']()), _0x46e6b1['phwrR'](expect, _0xcd719e['weekdays'](_0x7ce182))['toBe'](_0x40ae78['weekdays'](_0x3f7132)), _0x46e6b1['phwrR'](expect, _0xcd719e['weekdays']())['toEqual'](_0x40ae78['weekdays']()), _0x46e6b1['phwrR'](expect, _0xcd719e['weekdaysMin'](_0x7ce182))['toBe'](_0x40ae78['weekdaysMin'](_0x3f7132)), _0x46e6b1['WaBwh'](expect, _0xcd719e['weekdaysMin']())['toEqual'](_0x40ae78['weekdaysMin']()), _0x46e6b1['fpdQv'](expect, _0xcd719e['weekdaysShort'](_0x7ce182))['toBe'](_0x40ae78['weekdaysShort'](_0x3f7132)), _0x46e6b1['LDFwp'](expect, _0xcd719e['weekdaysShort']())['toEqual'](_0x40ae78['weekdaysShort']());
            const _0x29d3b8 = [
                'LT',
                _0x46e6b1['zTFIK'],
                'L',
                'LL',
                _0x46e6b1['ykWXj'],
                _0x46e6b1['jkwzf'],
                'l',
                'll',
                _0x46e6b1['dgaFs'],
                _0x46e6b1['Iafsc']
            ];
            _0x29d3b8['forEach'](_0x47ff81 => {
                _0xf381c6['AhTQA'](expect, _0xcd719e['longDateFormat'](_0x47ff81))['toEqual'](_0x40ae78['longDateFormat'](_0x47ff81));
            });
        });
    }), _0x122042['locale']('en'), _0x6249e8['locale']('en');
}), it('Global\x20localeData', () => {
    const _0x1ea384 = {
        'KDmSy': function (_0x556ddb, _0xe21201) {
            return _0x556ddb(_0xe21201);
        },
        'JJquX': function (_0x4b75a9, _0x45e91a) {
            return _0x4b75a9(_0x45e91a);
        },
        'HnAXz': function (_0x5405dd, _0x411481) {
            return _0x5405dd(_0x411481);
        },
        'Sfwco': 'LTS',
        'gHkmm': 'LLL',
        'Ewdwl': 'LLLL',
        'LEWKZ': 'lll',
        'gEKuM': 'llll',
        'WGCRX': 'zh-cn'
    };
    [
        _0x1ea384['WGCRX'],
        'en',
        'fr'
    ]['forEach'](_0x31bce4 => {
        const _0x2ec6c4 = {
            'mfiRf': function (_0x4c86d7, _0x1810a8) {
                return _0x1ea384['KDmSy'](_0x4c86d7, _0x1810a8);
            }
        };
        _0x122042['locale'](_0x31bce4), _0x6249e8['locale'](_0x31bce4);
        const _0x36cdc4 = _0x122042['localeData'](), _0x55c593 = _0x6249e8['localeData']();
        _0x1ea384['KDmSy'](expect, _0x36cdc4['firstDayOfWeek']())['toBe'](_0x55c593['firstDayOfWeek']()), _0x1ea384['KDmSy'](expect, _0x36cdc4['months']())['toEqual'](_0x55c593['months']()), _0x1ea384['KDmSy'](expect, _0x36cdc4['monthsShort']())['toEqual'](_0x55c593['monthsShort']()), _0x1ea384['KDmSy'](expect, _0x36cdc4['weekdays']())['toEqual'](_0x55c593['weekdays']()), _0x1ea384['JJquX'](expect, _0x36cdc4['weekdaysShort']())['toEqual'](_0x55c593['weekdaysShort']()), _0x1ea384['HnAXz'](expect, _0x36cdc4['weekdaysMin']())['toEqual'](_0x55c593['weekdaysMin']());
        const _0x38a811 = [
            'LT',
            _0x1ea384['Sfwco'],
            'L',
            'LL',
            _0x1ea384['gHkmm'],
            _0x1ea384['Ewdwl'],
            'l',
            'll',
            _0x1ea384['LEWKZ'],
            _0x1ea384['gEKuM']
        ];
        _0x38a811['forEach'](_0x5ef842 => {
            _0x2ec6c4['mfiRf'](expect, _0x36cdc4['longDateFormat'](_0x5ef842))['toEqual'](_0x55c593['longDateFormat'](_0x5ef842));
        });
    });
}), it('Listing\x20the\x20months\x20and\x20weekdays', () => {
    const _0x56c36f = {
        'NMnxa': '2|5|0|3|4|6|1',
        'jNOTm': function (_0x2ef809, _0x4e7c35) {
            return _0x2ef809(_0x4e7c35);
        },
        'VFRzP': function (_0x5a36e2, _0x2443a0) {
            return _0x5a36e2(_0x2443a0);
        },
        'KRLKA': function (_0x1c21a6, _0x276507) {
            return _0x1c21a6(_0x276507);
        },
        'hGHBb': 'zh-cn'
    };
    [
        _0x56c36f['hGHBb'],
        'en',
        'fr'
    ]['forEach'](_0x34ae80 => {
        const _0x116b18 = _0x56c36f['NMnxa']['split']('|');
        let _0x2f850b = 0x0;
        while (!![]) {
            switch (_0x116b18[_0x2f850b++]) {
            case '0':
                _0x56c36f['jNOTm'](expect, _0x122042['months']())['toEqual'](_0x6249e8['months']());
                continue;
            case '1':
                _0x56c36f['VFRzP'](expect, _0x122042['weekdaysMin']())['toEqual'](_0x6249e8['weekdaysMin']());
                continue;
            case '2':
                _0x122042['locale'](_0x34ae80);
                continue;
            case '3':
                _0x56c36f['VFRzP'](expect, _0x122042['monthsShort']())['toEqual'](_0x6249e8['monthsShort']());
                continue;
            case '4':
                _0x56c36f['VFRzP'](expect, _0x122042['weekdays']())['toEqual'](_0x6249e8['weekdays']());
                continue;
            case '5':
                _0x6249e8['locale'](_0x34ae80);
                continue;
            case '6':
                _0x56c36f['KRLKA'](expect, _0x122042['weekdaysShort']())['toEqual'](_0x6249e8['weekdaysShort']());
                continue;
            }
            break;
        }
    });
}), it('Month\x20function', () => {
    const _0x1a4f51 = {
            'XnXwH': function (_0x227062) {
                return _0x227062();
            },
            'VVPvW': function (_0x2f9624, _0x2de91a) {
                return _0x2f9624(_0x2de91a);
            },
            'tiIOQ': function (_0x6d232e, _0x5a3595) {
                return _0x6d232e(_0x5a3595);
            }
        }, _0x10458c = _0x1a4f51['XnXwH'](_0x122042)['locale']('ru')['localeData'](), _0x87db45 = _0x1a4f51['XnXwH'](_0x6249e8)['locale']('ru')['localeData']();
    _0x1a4f51['VVPvW'](expect, _0x10458c['months']())['toEqual'](_0x87db45['months']()), _0x1a4f51['VVPvW'](expect, _0x10458c['monthsShort']())['toEqual'](_0x87db45['monthsShort']()), _0x122042['locale']('ru'), _0x6249e8['locale']('ru'), _0x1a4f51['tiIOQ'](expect, _0x122042['months']())['toEqual'](_0x6249e8['months']()), _0x1a4f51['tiIOQ'](expect, _0x122042['monthsShort']())['toEqual'](_0x6249e8['monthsShort']());
}), it('Locale\x20order', () => {
    const _0x1493dc = {
            'icfcF': '0|3|8|4|1|7|6|5|2',
            'DXppb': function (_0x39e0a8, _0xf9dfe9) {
                return _0x39e0a8(_0xf9dfe9);
            }
        }, _0x3972d5 = _0x1493dc['icfcF']['split']('|');
    let _0x47746a = 0x0;
    while (!![]) {
        switch (_0x3972d5[_0x47746a++]) {
        case '0':
            _0x122042['locale']('fr');
            continue;
        case '1':
            _0x1493dc['DXppb'](expect, _0x122042['weekdaysMin'](!![]))['toEqual'](_0x6249e8['weekdaysMin'](!![]));
            continue;
        case '2':
            _0x1493dc['DXppb'](expect, _0x122042['weekdays'](!![]))['toEqual'](_0x6249e8['weekdays'](!![]));
            continue;
        case '3':
            _0x6249e8['locale']('fr');
            continue;
        case '4':
            _0x1493dc['DXppb'](expect, _0x122042['weekdaysShort'](!![]))['toEqual'](_0x6249e8['weekdaysShort'](!![]));
            continue;
        case '5':
            _0x6249e8['locale']('en');
            continue;
        case '6':
            _0x122042['locale']('en');
            continue;
        case '7':
            _0x1493dc['DXppb'](expect, _0x122042['weekdays']())['not']['toEqual'](_0x122042['weekdays'](!![]));
            continue;
        case '8':
            _0x1493dc['DXppb'](expect, _0x122042['weekdays'](!![]))['toEqual'](_0x6249e8['weekdays'](!![]));
            continue;
        }
        break;
    }
}), it('meridiem', () => {
    const _0x28c833 = {
        'ukThe': 'zh-cn',
        'uWlcc': function (_0x2dfdb8, _0x33533c) {
            return _0x2dfdb8(_0x33533c);
        },
        'lJwVs': 'function',
        'WODnU': function (_0x308d34, _0x3207e3) {
            return _0x308d34(_0x3207e3);
        },
        'zcIsj': function (_0x417ffe) {
            return _0x417ffe();
        }
    };
    _0x122042['locale'](_0x28c833['ukThe']), _0x28c833['uWlcc'](expect, typeof _0x122042['localeData']()['meridiem'])['toEqual'](_0x28c833['lJwVs']), _0x28c833['WODnU'](expect, typeof _0x28c833['zcIsj'](_0x122042)['localeData']()['meridiem'])['toEqual'](_0x28c833['lJwVs']), _0x122042['locale']('en');
}), it('ordinal', () => {
    const _0x5cbc0e = {
        'coVuh': 'zh-cn',
        'xaUhz': function (_0x5c50a5, _0x279709) {
            return _0x5c50a5(_0x279709);
        },
        'pidfH': 'function',
        'eBclD': function (_0x1f0cbb) {
            return _0x1f0cbb();
        }
    };
    _0x122042['locale'](_0x5cbc0e['coVuh']), _0x5cbc0e['xaUhz'](expect, typeof _0x122042['localeData']()['ordinal'])['toEqual'](_0x5cbc0e['pidfH']), _0x5cbc0e['xaUhz'](expect, typeof _0x5cbc0e['eBclD'](_0x122042)['localeData']()['ordinal'])['toEqual'](_0x5cbc0e['pidfH']), _0x122042['locale']('en');
});
