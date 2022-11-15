const Plugin = {
    'id': 'zoom',
    'init': function (_0x4d55db) {
        var _0x330150 = {
            'XgAoc': 'ctrl',
            'tADzP': 'alt',
            'ywRCU': function (_0x22f08e, _0x5893d) {
                return _0x22f08e + _0x5893d;
            },
            'UOkAZ': 'Key',
            'dYhpr': 'mousedown'
        };
        _0x4d55db['getRevealElement']()['addEventListener'](_0x330150['dYhpr'], function (_0x45e566) {
            var _0x5df0d4 = /Linux/['test'](window['navigator']['platform']) ? _0x330150['XgAoc'] : _0x330150['tADzP'], _0xccd671 = _0x330150['ywRCU'](_0x4d55db['getConfig']()['zoomKey'] ? _0x4d55db['getConfig']()['zoomKey'] : _0x5df0d4, _0x330150['UOkAZ']), _0x1dea82 = _0x4d55db['getConfig']()['zoomLevel'] ? _0x4d55db['getConfig']()['zoomLevel'] : 0x2;
            _0x45e566[_0xccd671] && !_0x4d55db['isOverview']() && (_0x45e566['preventDefault'](), zoom['to']({
                'x': _0x45e566['clientX'],
                'y': _0x45e566['clientY'],
                'scale': _0x1dea82,
                'pan': ![]
            }));
        });
    }
};
export default () => Plugin;
var zoom = function () {
    var _0x49a2e5 = {
            'sQEOT': function (_0x16fc3d, _0xe69875) {
                return _0x16fc3d !== _0xe69875;
            },
            'lUOHv': function (_0x1aa9c2, _0x4c2c64) {
                return _0x1aa9c2 === _0x4c2c64;
            },
            'mYHZB': '0|5|4|2|6|7|1|3',
            'eYwIW': function (_0x1bb961) {
                return _0x1bb961();
            },
            'pHJbK': function (_0x148204, _0x5ea51d) {
                return _0x148204 / _0x5ea51d;
            },
            'QTSiq': function (_0x16cdf4, _0x1d4452) {
                return _0x16cdf4 - _0x1d4452;
            },
            'vklgw': function (_0x21115b, _0x401074) {
                return _0x21115b * _0x401074;
            },
            'KkWDA': function (_0x1f5d62, _0x53ee76) {
                return _0x1f5d62 !== _0x53ee76;
            },
            'yTmAs': 'zoomed',
            'bhQlb': function (_0x5d830f, _0x54708d) {
                return _0x5d830f / _0x54708d;
            },
            'BKFfw': function (_0x50f30a, _0x2c9a2a) {
                return _0x50f30a === _0x2c9a2a;
            },
            'DriUt': '3|1|2|4|0',
            'mpyrd': '0|9|4|6|10|5|3|2|7|1|8',
            'iNhww': function (_0x4ee050, _0x32cc3a) {
                return _0x4ee050 + _0x32cc3a;
            },
            'tpNnf': function (_0x5ac853, _0x2dd630) {
                return _0x5ac853 + _0x2dd630;
            },
            'eFyxc': function (_0x3da5a2, _0x441819) {
                return _0x3da5a2 + _0x441819;
            },
            'UyzjD': 'px\x20',
            'pZyVN': function (_0x50d6dd, _0x5ad1ec) {
                return _0x50d6dd + _0x5ad1ec;
            },
            'dtghC': function (_0x41e9d5, _0x33fd63) {
                return _0x41e9d5 + _0x33fd63;
            },
            'QdoNI': function (_0x4dfffd, _0x3638c8) {
                return _0x4dfffd + _0x3638c8;
            },
            'EuXnP': 'translate(',
            'irhJJ': 'px,',
            'HdEwU': 'px)\x20scale(',
            'fsCki': function (_0x4bc430, _0xd2a3a2) {
                return _0x4bc430 === _0xd2a3a2;
            },
            'UKkYd': '5|1|0|4|3|2',
            'UpXBz': '4|3|0|5|2|1',
            'KPZej': function (_0x870ccc, _0x23898d) {
                return _0x870ccc * _0x23898d;
            },
            'BOaVQ': function (_0xcbd48b, _0x3ccffa) {
                return _0xcbd48b / _0x3ccffa;
            },
            'LFWOQ': 'relative',
            'msNhr': function (_0x387792, _0x33ef3f) {
                return _0x387792 * _0x33ef3f;
            },
            'toEHd': function (_0x2221c, _0x880898) {
                return _0x2221c * _0x880898;
            },
            'IKVJC': function (_0x443a07, _0x176832) {
                return _0x443a07 < _0x176832;
            },
            'ncVzV': function (_0x43eaf8, _0x37398c) {
                return _0x43eaf8 - _0x37398c;
            },
            'gbhbw': function (_0x18db18, _0x74e549) {
                return _0x18db18 / _0x74e549;
            },
            'lOKWT': function (_0x4052e2, _0x54fe01) {
                return _0x4052e2 > _0x54fe01;
            },
            'CADfs': function (_0x2d3e4b, _0x9b0c23) {
                return _0x2d3e4b * _0x9b0c23;
            },
            'Cbazh': function (_0x1b3ad3, _0x3237ee) {
                return _0x1b3ad3 - _0x3237ee;
            },
            'lThDl': function (_0x44c86c, _0x3730fe) {
                return _0x44c86c / _0x3730fe;
            },
            'rzQYg': function (_0x5611d6, _0x53b857) {
                return _0x5611d6 / _0x53b857;
            },
            'rZIWz': function (_0x2f89bf, _0x591b0e) {
                return _0x2f89bf - _0x591b0e;
            },
            'YvvuZ': function (_0x5afa90, _0x6360dd) {
                return _0x5afa90 / _0x6360dd;
            },
            'YnhsA': function (_0x10a04e, _0x277b4c) {
                return _0x10a04e / _0x277b4c;
            },
            'QSFHV': function (_0x870c, _0x4ce4f3) {
                return _0x870c > _0x4ce4f3;
            },
            'GYEKe': function (_0x3bab48, _0x46a05d) {
                return _0x3bab48 / _0x46a05d;
            },
            'COGqS': function (_0x5c663f, _0x57c830) {
                return _0x5c663f - _0x57c830;
            },
            'NVYjK': function (_0x24f8df, _0x3f14cb) {
                return _0x24f8df / _0x3f14cb;
            },
            'GgUhM': function (_0x4d6f0a, _0x4c069a) {
                return _0x4d6f0a !== _0x4c069a;
            },
            'TONas': function (_0x5740b0, _0xb3712e, _0x2457dd) {
                return _0x5740b0(_0xb3712e, _0x2457dd);
            },
            'TeGcz': function (_0x37d655, _0x32b410) {
                return _0x37d655 > _0x32b410;
            },
            'vxMHX': '4|2|3|1|5|0',
            'yBgAz': function (_0x3ab9a6, _0x4f23a6) {
                return _0x3ab9a6 * _0x4f23a6;
            },
            'ihwDf': function (_0x59427c, _0x4bc190) {
                return _0x59427c !== _0x4bc190;
            },
            'qikat': function (_0x3ebae3, _0x1f5481) {
                return _0x3ebae3 !== _0x1f5481;
            },
            'ZBKli': function (_0x12bb09, _0x130873) {
                return _0x12bb09(_0x130873);
            },
            'WpnQo': function (_0x33f570, _0x4e0d9a) {
                return _0x33f570 in _0x4e0d9a;
            },
            'oOKZh': 'WebkitTransform',
            'Lprno': function (_0x3ae795, _0x3215fc) {
                return _0x3ae795 in _0x3215fc;
            },
            'qbasw': 'MozTransform',
            'BqEFZ': 'msTransform',
            'QrDNB': 'OTransform',
            'XuYFi': 'transform',
            'FtPuI': '2|3|0|4|1',
            'AMMFl': '-ms-transform\x200.8s\x20ease',
            'bmgId': '-webkit-transform\x200.8s\x20ease',
            'BQSJg': 'transform\x200.8s\x20ease',
            'ruqGm': '-o-transform\x200.8s\x20ease',
            'nUuJy': '-moz-transform\x200.8s\x20ease',
            'wuDZg': 'keyup',
            'NpWhG': 'mousemove'
        }, _0x3e4250 = 0x1, _0x28f6fb = 0x0, _0x3d0aeb = 0x0, _0x562cc6 = -0x1, _0x3b4b81 = -0x1, _0x2524dc = _0x49a2e5['WpnQo'](_0x49a2e5['oOKZh'], document['body']['style']) || _0x49a2e5['Lprno'](_0x49a2e5['qbasw'], document['body']['style']) || _0x49a2e5['Lprno'](_0x49a2e5['BqEFZ'], document['body']['style']) || _0x49a2e5['Lprno'](_0x49a2e5['QrDNB'], document['body']['style']) || _0x49a2e5['Lprno'](_0x49a2e5['XuYFi'], document['body']['style']);
    if (_0x2524dc) {
        var _0x1dab54 = _0x49a2e5['FtPuI']['split']('|'), _0x3f3825 = 0x0;
        while (!![]) {
            switch (_0x1dab54[_0x3f3825++]) {
            case '0':
                document['body']['style']['msTransition'] = _0x49a2e5['AMMFl'];
                continue;
            case '1':
                document['body']['style']['WebkitTransition'] = _0x49a2e5['bmgId'];
                continue;
            case '2':
                document['body']['style']['transition'] = _0x49a2e5['BQSJg'];
                continue;
            case '3':
                document['body']['style']['OTransition'] = _0x49a2e5['ruqGm'];
                continue;
            case '4':
                document['body']['style']['MozTransition'] = _0x49a2e5['nUuJy'];
                continue;
            }
            break;
        }
    }
    document['addEventListener'](_0x49a2e5['wuDZg'], function (_0x31e30e) {
        _0x49a2e5['sQEOT'](_0x3e4250, 0x1) && _0x49a2e5['lUOHv'](_0x31e30e['keyCode'], 0x1b) && zoom['out']();
    }), document['addEventListener'](_0x49a2e5['NpWhG'], function (_0x53d23d) {
        _0x49a2e5['sQEOT'](_0x3e4250, 0x1) && (_0x28f6fb = _0x53d23d['clientX'], _0x3d0aeb = _0x53d23d['clientY']);
    });
    function _0xb88e49(_0xd8aaa2, _0x9d295e) {
        var _0x9b9c84 = _0x49a2e5['mYHZB']['split']('|'), _0x3fde72 = 0x0;
        while (!![]) {
            switch (_0x9b9c84[_0x3fde72++]) {
            case '0':
                var _0x4d52f0 = _0x49a2e5['eYwIW'](_0x4944d2);
                continue;
            case '1':
                _0x3e4250 = _0x9d295e;
                continue;
            case '2':
                _0xd8aaa2['x'] -= _0x49a2e5['pHJbK'](_0x49a2e5['QTSiq'](window['innerWidth'], _0x49a2e5['vklgw'](_0xd8aaa2['width'], _0x9d295e)), 0x2);
                continue;
            case '3':
                document['documentElement']['classList'] && (_0x49a2e5['KkWDA'](_0x3e4250, 0x1) ? document['documentElement']['classList']['add'](_0x49a2e5['yTmAs']) : document['documentElement']['classList']['remove'](_0x49a2e5['yTmAs']));
                continue;
            case '4':
                _0xd8aaa2['height'] = _0xd8aaa2['height'] || 0x1;
                continue;
            case '5':
                _0xd8aaa2['width'] = _0xd8aaa2['width'] || 0x1;
                continue;
            case '6':
                _0xd8aaa2['y'] -= _0x49a2e5['bhQlb'](_0x49a2e5['QTSiq'](window['innerHeight'], _0x49a2e5['vklgw'](_0xd8aaa2['height'], _0x9d295e)), 0x2);
                continue;
            case '7':
                if (_0x2524dc) {
                    if (_0x49a2e5['BKFfw'](_0x9d295e, 0x1)) {
                        var _0x1b1358 = _0x49a2e5['DriUt']['split']('|'), _0x21b003 = 0x0;
                        while (!![]) {
                            switch (_0x1b1358[_0x21b003++]) {
                            case '0':
                                document['body']['style']['WebkitTransform'] = '';
                                continue;
                            case '1':
                                document['body']['style']['OTransform'] = '';
                                continue;
                            case '2':
                                document['body']['style']['msTransform'] = '';
                                continue;
                            case '3':
                                document['body']['style']['transform'] = '';
                                continue;
                            case '4':
                                document['body']['style']['MozTransform'] = '';
                                continue;
                            }
                            break;
                        }
                    } else {
                        var _0x553b87 = _0x49a2e5['mpyrd']['split']('|'), _0x535c06 = 0x0;
                        while (!![]) {
                            switch (_0x553b87[_0x535c06++]) {
                            case '0':
                                var _0x461733 = _0x49a2e5['iNhww'](_0x49a2e5['tpNnf'](_0x49a2e5['eFyxc'](_0x4d52f0['x'], _0x49a2e5['UyzjD']), _0x4d52f0['y']), 'px'), _0x16f217 = _0x49a2e5['eFyxc'](_0x49a2e5['pZyVN'](_0x49a2e5['dtghC'](_0x49a2e5['dtghC'](_0x49a2e5['dtghC'](_0x49a2e5['QdoNI'](_0x49a2e5['EuXnP'], -_0xd8aaa2['x']), _0x49a2e5['irhJJ']), -_0xd8aaa2['y']), _0x49a2e5['HdEwU']), _0x9d295e), ')');
                                continue;
                            case '1':
                                document['body']['style']['MozTransform'] = _0x16f217;
                                continue;
                            case '2':
                                document['body']['style']['OTransform'] = _0x16f217;
                                continue;
                            case '3':
                                document['body']['style']['transform'] = _0x16f217;
                                continue;
                            case '4':
                                document['body']['style']['OTransformOrigin'] = _0x461733;
                                continue;
                            case '5':
                                document['body']['style']['WebkitTransformOrigin'] = _0x461733;
                                continue;
                            case '6':
                                document['body']['style']['msTransformOrigin'] = _0x461733;
                                continue;
                            case '7':
                                document['body']['style']['msTransform'] = _0x16f217;
                                continue;
                            case '8':
                                document['body']['style']['WebkitTransform'] = _0x16f217;
                                continue;
                            case '9':
                                document['body']['style']['transformOrigin'] = _0x461733;
                                continue;
                            case '10':
                                document['body']['style']['MozTransformOrigin'] = _0x461733;
                                continue;
                            }
                            break;
                        }
                    }
                } else {
                    if (_0x49a2e5['fsCki'](_0x9d295e, 0x1)) {
                        var _0x4326a5 = _0x49a2e5['UKkYd']['split']('|'), _0x5b5681 = 0x0;
                        while (!![]) {
                            switch (_0x4326a5[_0x5b5681++]) {
                            case '0':
                                document['body']['style']['top'] = '';
                                continue;
                            case '1':
                                document['body']['style']['left'] = '';
                                continue;
                            case '2':
                                document['body']['style']['zoom'] = '';
                                continue;
                            case '3':
                                document['body']['style']['height'] = '';
                                continue;
                            case '4':
                                document['body']['style']['width'] = '';
                                continue;
                            case '5':
                                document['body']['style']['position'] = '';
                                continue;
                            }
                            break;
                        }
                    } else {
                        var _0x48e8d5 = _0x49a2e5['UpXBz']['split']('|'), _0x3bf18a = 0x0;
                        while (!![]) {
                            switch (_0x48e8d5[_0x3bf18a++]) {
                            case '0':
                                document['body']['style']['top'] = _0x49a2e5['QdoNI'](_0x49a2e5['bhQlb'](-_0x49a2e5['QdoNI'](_0x4d52f0['y'], _0xd8aaa2['y']), _0x9d295e), 'px');
                                continue;
                            case '1':
                                document['body']['style']['zoom'] = _0x9d295e;
                                continue;
                            case '2':
                                document['body']['style']['height'] = _0x49a2e5['QdoNI'](_0x49a2e5['KPZej'](_0x9d295e, 0x64), '%');
                                continue;
                            case '3':
                                document['body']['style']['left'] = _0x49a2e5['QdoNI'](_0x49a2e5['BOaVQ'](-_0x49a2e5['QdoNI'](_0x4d52f0['x'], _0xd8aaa2['x']), _0x9d295e), 'px');
                                continue;
                            case '4':
                                document['body']['style']['position'] = _0x49a2e5['LFWOQ'];
                                continue;
                            case '5':
                                document['body']['style']['width'] = _0x49a2e5['QdoNI'](_0x49a2e5['msNhr'](_0x9d295e, 0x64), '%');
                                continue;
                            }
                            break;
                        }
                    }
                }
                continue;
            }
            break;
        }
    }
    function _0xe23f58() {
        var _0x5ce346 = 0.12, _0x598f0f = _0x49a2e5['toEHd'](window['innerWidth'], _0x5ce346), _0x2de6cf = _0x49a2e5['toEHd'](window['innerHeight'], _0x5ce346), _0x3bfc1b = _0x49a2e5['eYwIW'](_0x4944d2);
        if (_0x49a2e5['IKVJC'](_0x3d0aeb, _0x2de6cf))
            window['scroll'](_0x3bfc1b['x'], _0x49a2e5['QTSiq'](_0x3bfc1b['y'], _0x49a2e5['toEHd'](_0x49a2e5['ncVzV'](0x1, _0x49a2e5['gbhbw'](_0x3d0aeb, _0x2de6cf)), _0x49a2e5['gbhbw'](0xe, _0x3e4250))));
        else
            _0x49a2e5['lOKWT'](_0x3d0aeb, _0x49a2e5['ncVzV'](window['innerHeight'], _0x2de6cf)) && window['scroll'](_0x3bfc1b['x'], _0x49a2e5['QdoNI'](_0x3bfc1b['y'], _0x49a2e5['CADfs'](_0x49a2e5['Cbazh'](0x1, _0x49a2e5['lThDl'](_0x49a2e5['Cbazh'](window['innerHeight'], _0x3d0aeb), _0x2de6cf)), _0x49a2e5['rzQYg'](0xe, _0x3e4250))));
        if (_0x49a2e5['IKVJC'](_0x28f6fb, _0x598f0f))
            window['scroll'](_0x49a2e5['rZIWz'](_0x3bfc1b['x'], _0x49a2e5['CADfs'](_0x49a2e5['rZIWz'](0x1, _0x49a2e5['YvvuZ'](_0x28f6fb, _0x598f0f)), _0x49a2e5['YnhsA'](0xe, _0x3e4250))), _0x3bfc1b['y']);
        else
            _0x49a2e5['QSFHV'](_0x28f6fb, _0x49a2e5['rZIWz'](window['innerWidth'], _0x598f0f)) && window['scroll'](_0x49a2e5['QdoNI'](_0x3bfc1b['x'], _0x49a2e5['CADfs'](_0x49a2e5['rZIWz'](0x1, _0x49a2e5['GYEKe'](_0x49a2e5['COGqS'](window['innerWidth'], _0x28f6fb), _0x598f0f)), _0x49a2e5['NVYjK'](0xe, _0x3e4250))), _0x3bfc1b['y']);
    }
    function _0x4944d2() {
        return {
            'x': _0x49a2e5['KkWDA'](window['scrollX'], undefined) ? window['scrollX'] : window['pageXOffset'],
            'y': _0x49a2e5['GgUhM'](window['scrollY'], undefined) ? window['scrollY'] : window['pageYOffset']
        };
    }
    return {
        'to': function (_0x2515a7) {
            if (_0x49a2e5['GgUhM'](_0x3e4250, 0x1))
                zoom['out']();
            else {
                var _0x2f0ca7 = _0x49a2e5['DriUt']['split']('|'), _0x24ca9f = 0x0;
                while (!![]) {
                    switch (_0x2f0ca7[_0x24ca9f++]) {
                    case '0':
                        _0x49a2e5['TeGcz'](_0x2515a7['scale'], 0x1) && (_0x2515a7['x'] *= _0x2515a7['scale'], _0x2515a7['y'] *= _0x2515a7['scale'], _0x49a2e5['TONas'](_0xb88e49, _0x2515a7, _0x2515a7['scale']), _0x49a2e5['GgUhM'](_0x2515a7['pan'], ![]) && (_0x562cc6 = _0x49a2e5['TONas'](setTimeout, function () {
                            _0x3b4b81 = _0x49a2e5['TONas'](setInterval, _0xe23f58, _0x49a2e5['NVYjK'](0x3e8, 0x3c));
                        }, 0x320)));
                        continue;
                    case '1':
                        _0x2515a7['y'] = _0x2515a7['y'] || 0x0;
                        continue;
                    case '2':
                        if (!!_0x2515a7['element']) {
                            var _0x31585f = _0x49a2e5['vxMHX']['split']('|'), _0x3c80bb = 0x0;
                            while (!![]) {
                                switch (_0x31585f[_0x3c80bb++]) {
                                case '0':
                                    _0x2515a7['height'] = _0x49a2e5['QdoNI'](_0x365725['height'], _0x49a2e5['CADfs'](_0x5189c9, 0x2));
                                    continue;
                                case '1':
                                    _0x2515a7['y'] = _0x49a2e5['COGqS'](_0x365725['top'], _0x5189c9);
                                    continue;
                                case '2':
                                    var _0x365725 = _0x2515a7['element']['getBoundingClientRect']();
                                    continue;
                                case '3':
                                    _0x2515a7['x'] = _0x49a2e5['COGqS'](_0x365725['left'], _0x5189c9);
                                    continue;
                                case '4':
                                    var _0x5189c9 = 0x14;
                                    continue;
                                case '5':
                                    _0x2515a7['width'] = _0x49a2e5['QdoNI'](_0x365725['width'], _0x49a2e5['yBgAz'](_0x5189c9, 0x2));
                                    continue;
                                }
                                break;
                            }
                        }
                        continue;
                    case '3':
                        _0x2515a7['x'] = _0x2515a7['x'] || 0x0;
                        continue;
                    case '4':
                        _0x49a2e5['ihwDf'](_0x2515a7['width'], undefined) && _0x49a2e5['qikat'](_0x2515a7['height'], undefined) && (_0x2515a7['scale'] = Math['max'](Math['min'](_0x49a2e5['NVYjK'](window['innerWidth'], _0x2515a7['width']), _0x49a2e5['NVYjK'](window['innerHeight'], _0x2515a7['height'])), 0x1));
                        continue;
                    }
                    break;
                }
            }
        },
        'out': function () {
            _0x49a2e5['ZBKli'](clearTimeout, _0x562cc6), _0x49a2e5['ZBKli'](clearInterval, _0x3b4b81), _0x49a2e5['TONas'](_0xb88e49, {
                'x': 0x0,
                'y': 0x0
            }, 0x1), _0x3e4250 = 0x1;
        },
        'magnify': function (_0x1eb6c8) {
            this['to'](_0x1eb6c8);
        },
        'reset': function () {
            this['out']();
        },
        'zoomLevel': function () {
            return _0x3e4250;
        }
    };
}();
