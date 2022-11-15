var app = app || {};
(function () {
    'use strict';
    var _0x243942 = {
            'gXElx': '2|3|4|0|1',
            'htVJi': '.todoapp',
            'uwfZy': function (_0x29856b, _0x6a0fa5) {
                return _0x29856b(_0x6a0fa5);
            },
            'sQoue': '#stats-template',
            'tfSST': 'createOnEnter',
            'FZiwP': 'clearCompleted',
            'wYRde': 'toggleAllComplete',
            'rCrGN': 'none',
            'COXrH': function (_0x1c5842, _0x5dff13) {
                return _0x1c5842 === _0x5dff13;
            },
            'EIzes': '7|6|3|5|1|8|2|0|4|9',
            'AinFT': 'filter',
            'WVtvz': 'add',
            'RXdfM': 'change:completed',
            'sNPVQ': '.footer',
            'zlTVb': 'all',
            'TFSKO': '.main',
            'bEmTm': '.new-todo',
            'zQTfI': '.toggle-all',
            'ySUAY': 'reset',
            'UDgFM': '2|0|4|3|1|5',
            'UJTbw': function (_0x38e020, _0x308e5f, _0x550af2) {
                return _0x38e020(_0x308e5f, _0x550af2);
            },
            'mMLCU': '.filters\x20li\x20a',
            'KkDZm': 'selected',
            'Focbo': function (_0x577ca5, _0x57101b) {
                return _0x577ca5 + _0x57101b;
            },
            'TuNNv': '[href=\x22#/',
            'OYVMd': '.todo-list',
            'pUREs': 'visible',
            'DsOWO': function (_0x1f0230, _0x4794ce) {
                return _0x1f0230 !== _0x4794ce;
            }
        }, _0x17cac3 = _0x243942['gXElx']['split']('|'), _0x52dd7a = 0x0;
    while (!![]) {
        switch (_0x17cac3[_0x52dd7a++]) {
        case '0':
            var _0x19e64f = function (_0x2aa9d0, _0x155b2a) {
                return []['some']['call'](document['querySelectorAll'](_0x155b2a), function (_0x4414e2) {
                    return _0x3d1949['UkXLZ'](_0x4414e2, _0x2aa9d0);
                });
            };
            continue;
        case '1':
            app['AppView'] = Backbone['View']['extend']({
                'el': _0x243942['htVJi'],
                'statsTemplate': _0x243942['uwfZy'](microtemplate, document['querySelector'](_0x243942['sQoue'])['innerHTML']),
                'events': {
                    'keypress\x20.new-todo': _0x243942['tfSST'],
                    'click\x20.clear-completed': _0x243942['FZiwP'],
                    'click\x20.toggle-all': _0x243942['wYRde']
                },
                'initialize': function () {
                    var _0x572eea = _0x3d1949['elehF']['split']('|'), _0x3d42e3 = 0x0;
                    while (!![]) {
                        switch (_0x572eea[_0x3d42e3++]) {
                        case '0':
                            this['listenTo'](app['todos'], _0x3d1949['qJKzL'], this['filterAll']);
                            continue;
                        case '1':
                            this['listenTo'](app['todos'], _0x3d1949['yWeyl'], this['addOne']);
                            continue;
                        case '2':
                            this['listenTo'](app['todos'], _0x3d1949['KFMzj'], this['filterOne']);
                            continue;
                        case '3':
                            this['footer'] = this['$'](_0x3d1949['YeISW'])['item'](0x0);
                            continue;
                        case '4':
                            this['listenTo'](app['todos'], _0x3d1949['UvhWB'], this['render']);
                            continue;
                        case '5':
                            this['main'] = this['$'](_0x3d1949['VQtTn'])['item'](0x0);
                            continue;
                        case '6':
                            this['input'] = this['$'](_0x3d1949['DGyLs'])['item'](0x0);
                            continue;
                        case '7':
                            this['allCheckbox'] = this['$'](_0x3d1949['UwOJi'])['item'](0x0);
                            continue;
                        case '8':
                            this['listenTo'](app['todos'], _0x3d1949['KQMCr'], this['addAll']);
                            continue;
                        case '9':
                            app['todos']['fetch']({ 'reset': !![] });
                            continue;
                        }
                        break;
                    }
                },
                'render': function () {
                    var _0x37935d = _0x3d1949['SHEBi']['split']('|'), _0x4e258f = 0x0;
                    while (!![]) {
                        switch (_0x37935d[_0x4e258f++]) {
                        case '0':
                            var _0x4672ad = app['todos']['completed']()['length'];
                            continue;
                        case '1':
                            app['todos']['length'] ? (_0x3d1949['LQbtz'](_0x3056dd, this['main'], !![]), _0x3d1949['LQbtz'](_0x3056dd, this['footer'], !![]), this['footer']['innerHTML'] = this['statsTemplate']({
                                'completed': _0x4672ad,
                                'remaining': _0x473f49
                            }), []['forEach']['call'](this['$'](_0x3d1949['JIbfI']), function (_0x417949) {
                                _0x417949['classList']['remove'](_0x4cf017['zjKXj']), _0x4cf017['qObet'](_0x19e64f, _0x417949, _0xd9a90d) && _0x417949['classList']['add'](_0x4cf017['zjKXj']);
                            })) : (_0x3d1949['LQbtz'](_0x3056dd, this['main'], ![]), _0x3d1949['kfAry'](_0x3056dd, this['footer'], ![]));
                            continue;
                        case '2':
                            var _0x4cf017 = {
                                'zjKXj': _0x3d1949['sfyYw'],
                                'qObet': function (_0x14be10, _0x3b6459, _0x1f7793) {
                                    return _0x3d1949['kfAry'](_0x14be10, _0x3b6459, _0x1f7793);
                                }
                            };
                            continue;
                        case '3':
                            var _0xd9a90d = _0x3d1949['rWPlB'](_0x3d1949['ApvnW'](_0x3d1949['gvJIa'], app['TodoFilter'] || ''), '\x22]');
                            continue;
                        case '4':
                            var _0x473f49 = app['todos']['remaining']()['length'];
                            continue;
                        case '5':
                            this['allCheckbox']['checked'] = !_0x473f49;
                            continue;
                        }
                        break;
                    }
                },
                'addOne': function (_0x342a22) {
                    var _0x2bca93 = new app['TodoView']({ 'model': _0x342a22 });
                    document['querySelector'](_0x3d1949['EfwPS'])['appendChild'](_0x2bca93['render']()['el']);
                },
                'addAll': function () {
                    this['$'](_0x3d1949['EfwPS'])['item'](0x0)['innerHTML'] = '', app['todos']['forEach'](this['addOne'], this);
                },
                'filterOne': function (_0x37c3c0) {
                    _0x37c3c0['trigger'](_0x3d1949['ROICw']);
                },
                'filterAll': function () {
                    app['todos']['forEach'](this['filterOne'], this);
                },
                'newAttributes': function () {
                    return {
                        'title': this['input']['value']['trim'](),
                        'order': app['todos']['nextOrder'](),
                        'completed': ![]
                    };
                },
                'createOnEnter': function (_0x4a176c) {
                    if (_0x3d1949['fgoSD'](_0x4a176c['which'], ENTER_KEY) || !this['input']['value']['trim']())
                        return;
                    app['todos']['create'](this['newAttributes']()), this['input']['value'] = '';
                },
                'clearCompleted': function () {
                    return app['todos']['completed']()['forEach'](function (_0x210b37) {
                        _0x210b37['destroy']();
                    }), ![];
                },
                'toggleAllComplete': function () {
                    var _0x573eab = this['allCheckbox']['checked'];
                    app['todos']['forEach'](function (_0x38d3d9) {
                        _0x38d3d9['save']({ 'completed': _0x573eab });
                    });
                }
            });
            continue;
        case '2':
            var _0x3d1949 = {
                'OREtS': _0x243942['rCrGN'],
                'UkXLZ': function (_0x9ae41b, _0x5e6c6a) {
                    return _0x243942['COXrH'](_0x9ae41b, _0x5e6c6a);
                },
                'elehF': _0x243942['EIzes'],
                'qJKzL': _0x243942['AinFT'],
                'yWeyl': _0x243942['WVtvz'],
                'KFMzj': _0x243942['RXdfM'],
                'YeISW': _0x243942['sNPVQ'],
                'UvhWB': _0x243942['zlTVb'],
                'VQtTn': _0x243942['TFSKO'],
                'DGyLs': _0x243942['bEmTm'],
                'UwOJi': _0x243942['zQTfI'],
                'KQMCr': _0x243942['ySUAY'],
                'SHEBi': _0x243942['UDgFM'],
                'LQbtz': function (_0xa5a7d8, _0x2a7be1, _0x5497eb) {
                    return _0x243942['UJTbw'](_0xa5a7d8, _0x2a7be1, _0x5497eb);
                },
                'JIbfI': _0x243942['mMLCU'],
                'kfAry': function (_0x228c2b, _0x5ba0ec, _0x305d88) {
                    return _0x243942['UJTbw'](_0x228c2b, _0x5ba0ec, _0x305d88);
                },
                'sfyYw': _0x243942['KkDZm'],
                'rWPlB': function (_0xe0ca88, _0x9b2811) {
                    return _0x243942['Focbo'](_0xe0ca88, _0x9b2811);
                },
                'ApvnW': function (_0x3fc1da, _0x4ca8e4) {
                    return _0x243942['Focbo'](_0x3fc1da, _0x4ca8e4);
                },
                'gvJIa': _0x243942['TuNNv'],
                'EfwPS': _0x243942['OYVMd'],
                'ROICw': _0x243942['pUREs'],
                'fgoSD': function (_0x45aef2, _0x75ed06) {
                    return _0x243942['DsOWO'](_0x45aef2, _0x75ed06);
                }
            };
            continue;
        case '3':
            continue;
        case '4':
            var _0x3056dd = function (_0x221433, _0x4bb129) {
                _0x221433['style']['display'] = _0x4bb129 ? '' : _0x3d1949['OREtS'];
            };
            continue;
        }
        break;
    }
}());
