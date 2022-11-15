/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = require('../utils/Class'), NOOP = require('../utils/NOOP'), RequestAnimationFrame = new Class({
        'initialize': function RequestAnimationFrame() {
            var _0x451886 = {
                    'bvpRK': '0|2|6|3|7|1|4|10|9|5|8',
                    'SMkXu': '4|2|0|1|3',
                    'hnyjO': '3|2|4|1|0|5',
                    'cszxi': function (_0x26bbd9, _0x23d705) {
                        return _0x26bbd9 - _0x23d705;
                    },
                    'WvpdG': function (_0x3fe3fd, _0x33f1ef) {
                        return _0x3fe3fd + _0x33f1ef;
                    },
                    'ahNlt': function (_0x2f7044, _0x231e61) {
                        return _0x2f7044 * _0x231e61;
                    }
                }, _0x526871 = _0x451886['bvpRK']['split']('|'), _0x4f2d12 = 0x0;
            while (!![]) {
                switch (_0x526871[_0x4f2d12++]) {
                case '0':
                    var _0x3defc8 = {
                        'PweuH': _0x451886['SMkXu'],
                        'wbRMS': _0x451886['hnyjO'],
                        'hvZZJ': function (_0x239aef, _0x47c4f0) {
                            return _0x451886['cszxi'](_0x239aef, _0x47c4f0);
                        },
                        'LRRWT': function (_0x53892a, _0x10e4d0) {
                            return _0x451886['WvpdG'](_0x53892a, _0x10e4d0);
                        },
                        'TVOEO': function (_0xf13651, _0x556b30) {
                            return _0x451886['ahNlt'](_0xf13651, _0x556b30);
                        }
                    };
                    continue;
                case '1':
                    this['timeOutID'] = null;
                    continue;
                case '2':
                    this['isRunning'] = ![];
                    continue;
                case '3':
                    this['tick'] = 0x0;
                    continue;
                case '4':
                    this['lastTime'] = 0x0;
                    continue;
                case '5':
                    this['step'] = function _0x137ded() {
                        var _0x4bfc8e = _0x3defc8['PweuH']['split']('|'), _0x1571a8 = 0x0;
                        while (!![]) {
                            switch (_0x4bfc8e[_0x1571a8++]) {
                            case '0':
                                _0x7eb72c['tick'] = _0x32fd45;
                                continue;
                            case '1':
                                _0x7eb72c['callback'](_0x32fd45);
                                continue;
                            case '2':
                                _0x7eb72c['lastTime'] = _0x7eb72c['tick'];
                                continue;
                            case '3':
                                _0x7eb72c['timeOutID'] = window['requestAnimationFrame'](_0x137ded);
                                continue;
                            case '4':
                                var _0x32fd45 = window['performance']['now']();
                                continue;
                            }
                            break;
                        }
                    };
                    continue;
                case '6':
                    this['callback'] = NOOP;
                    continue;
                case '7':
                    this['isSetTimeOut'] = ![];
                    continue;
                case '8':
                    this['stepTimeout'] = function _0x31e037() {
                        var _0x2975ef = _0x3defc8['wbRMS']['split']('|'), _0x5b8df7 = 0x0;
                        while (!![]) {
                            switch (_0x2975ef[_0x5b8df7++]) {
                            case '0':
                                _0x7eb72c['callback'](_0x1af162);
                                continue;
                            case '1':
                                _0x7eb72c['tick'] = _0x1af162;
                                continue;
                            case '2':
                                var _0x351ee4 = Math['min'](Math['max'](_0x3defc8['hvZZJ'](_0x3defc8['LRRWT'](_0x3defc8['TVOEO'](_0x7eb72c['target'], 0x2), _0x7eb72c['tick']), _0x1af162), 0x0), _0x7eb72c['target']);
                                continue;
                            case '3':
                                var _0x1af162 = Date['now']();
                                continue;
                            case '4':
                                _0x7eb72c['lastTime'] = _0x7eb72c['tick'];
                                continue;
                            case '5':
                                _0x7eb72c['timeOutID'] = window['setTimeout'](_0x31e037, _0x351ee4);
                                continue;
                            }
                            break;
                        }
                    };
                    continue;
                case '9':
                    var _0x7eb72c = this;
                    continue;
                case '10':
                    this['target'] = 0x0;
                    continue;
                }
                break;
            }
        },
        'start': function (_0x1c09cf, _0x12c9c4, _0x27b801) {
            var _0x42d98a = { 'kVguQ': '0|4|2|5|1|3' }, _0x4fd97c = _0x42d98a['kVguQ']['split']('|'), _0x35d9ab = 0x0;
            while (!![]) {
                switch (_0x4fd97c[_0x35d9ab++]) {
                case '0':
                    if (this['isRunning'])
                        return;
                    continue;
                case '1':
                    this['isRunning'] = !![];
                    continue;
                case '2':
                    this['isSetTimeOut'] = _0x12c9c4;
                    continue;
                case '3':
                    this['timeOutID'] = _0x12c9c4 ? window['setTimeout'](this['stepTimeout'], 0x0) : window['requestAnimationFrame'](this['step']);
                    continue;
                case '4':
                    this['callback'] = _0x1c09cf;
                    continue;
                case '5':
                    this['target'] = _0x27b801;
                    continue;
                }
                break;
            }
        },
        'stop': function () {
            var _0x2023be = {
                'wrwDx': function (_0x5313b3, _0x4d4c3e) {
                    return _0x5313b3(_0x4d4c3e);
                }
            };
            this['isRunning'] = ![], this['isSetTimeOut'] ? _0x2023be['wrwDx'](clearTimeout, this['timeOutID']) : window['cancelAnimationFrame'](this['timeOutID']);
        },
        'destroy': function () {
            this['stop'](), this['callback'] = NOOP;
        }
    });
module['exports'] = RequestAnimationFrame;
