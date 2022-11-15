var parser = require('../'), test = require('tap')['test'], path = require('path'), files = {
        'foo': path['join'](__dirname, '/files/foo.js'),
        'bar': path['join'](__dirname, '/files/bar.js')
    }, sources = {
        'foo': 'notreal\x20foo',
        'bar': 'notreal\x20bar'
    }, cache = {};
cache[files['foo']] = {
    'source': sources['foo'],
    'deps': { './bar': files['bar'] }
}, cache[files['bar']] = {
    'source': sources['bar'],
    'deps': {}
}, test('cache\x20preserves\x20expose\x20and\x20entry', function (_0x167e33) {
    var _0x58863f = {
            'RrZCX': '7|3|6|1|2|0|4|5',
            'YZNxi': 'bar2',
            'OKpyM': 'foo',
            'EuAaY': 'foo2',
            'ZXqkG': 'data',
            'ppews': 'end',
            'LQERB': function (_0x330113, _0x185b76) {
                return _0x330113(_0x185b76);
            }
        }, _0x5f44d0 = _0x58863f['RrZCX']['split']('|'), _0x2f4e70 = 0x0;
    while (!![]) {
        switch (_0x5f44d0[_0x2f4e70++]) {
        case '0':
            var _0x4797c1 = [];
            continue;
        case '1':
            _0x37a0f1['write']({
                'id': files['bar'],
                'expose': _0x58863f['YZNxi'],
                'entry': ![]
            });
            continue;
        case '2':
            _0x37a0f1['end']({
                'id': _0x58863f['OKpyM'],
                'file': files['foo'],
                'entry': !![],
                'expose': _0x58863f['EuAaY']
            });
            continue;
        case '3':
            _0x167e33['plan'](0x1);
            continue;
        case '4':
            _0x37a0f1['on'](_0x58863f['ZXqkG'], function (_0x387f82) {
                _0x4797c1['push'](_0x387f82);
            });
            continue;
        case '5':
            _0x37a0f1['on'](_0x58863f['ppews'], function () {
                _0x167e33['same'](_0x4797c1['sort'](cmp), [
                    {
                        'id': _0x2d5c5f['QEREp'],
                        'expose': _0x2d5c5f['yoItk'],
                        'entry': !![],
                        'file': files['foo'],
                        'source': sources['foo'],
                        'deps': { './bar': files['bar'] }
                    },
                    {
                        'id': files['bar'],
                        'expose': _0x2d5c5f['ckbRI'],
                        'file': files['bar'],
                        'source': sources['bar'],
                        'deps': {}
                    }
                ]['sort'](cmp));
            });
            continue;
        case '6':
            var _0x37a0f1 = _0x58863f['LQERB'](parser, { 'cache': cache });
            continue;
        case '7':
            var _0x2d5c5f = {
                'QEREp': _0x58863f['OKpyM'],
                'yoItk': _0x58863f['EuAaY'],
                'ckbRI': _0x58863f['YZNxi']
            };
            continue;
        }
        break;
    }
});
function cmp(_0x58810a, _0x594ca1) {
    var _0x3b68da = {
        'FthYj': function (_0x5479d2, _0x593d1e) {
            return _0x5479d2 < _0x593d1e;
        }
    };
    return _0x3b68da['FthYj'](_0x58810a['id'], _0x594ca1['id']) ? -0x1 : 0x1;
}
