'use strict';
const {ConcatSource} = require('webpack-sources');
const extractFragmentIndex = (_0x2c4a94, _0x15c6e9) => [
    _0x2c4a94,
    _0x15c6e9
];
const sortFragmentWithIndex = ([_0x59e9c6, _0x89668f], [_0x260185, _0x35bd16]) => {
    const _0x469a60 = _0x59e9c6['stage'] - _0x260185['stage'];
    if (_0x469a60 !== 0)
        return _0x469a60;
    const _0xcd33b3 = _0x59e9c6['position'] - _0x260185['position'];
    if (_0xcd33b3 !== 0)
        return _0xcd33b3;
    return _0x89668f - _0x35bd16;
};
class InitFragment {
    constructor(_0x52a5f1, _0x431bc4, _0x334b62, _0x503860, _0x5434cc) {
        var _0x27e627 = '1|3|2|4|0'['split']('|'), _0x64e7b8 = 0;
        while (!![]) {
            switch (_0x27e627[_0x64e7b8++]) {
            case '0':
                this['endContent'] = _0x5434cc;
                continue;
            case '1':
                this['content'] = _0x52a5f1;
                continue;
            case '2':
                this['position'] = _0x334b62;
                continue;
            case '3':
                this['stage'] = _0x431bc4;
                continue;
            case '4':
                this['key'] = _0x503860;
                continue;
            }
            break;
        }
    }
    ['getContent'](_0x32da24) {
        return this['content'];
    }
    ['getEndContent'](_0x2b46f5) {
        return this['endContent'];
    }
    static ['addToSource'](_0x403f93, _0x16d413, _0x417e97) {
        if (_0x16d413['length'] > 0) {
            const _0xfa3393 = _0x16d413['map'](extractFragmentIndex)['sort'](sortFragmentWithIndex);
            const _0x18573f = new Map();
            for (const [_0x203c57] of _0xfa3393) {
                if ('BBzxE' === 'QfHqw') {
                    _0x203c57 = _0x203c57[0]['mergeAll'](_0x203c57);
                } else {
                    if (typeof _0x203c57['mergeAll'] === 'function') {
                        if (!_0x203c57['key']) {
                            throw new Error('InitFragment with mergeAll function must have a valid key: ' + _0x203c57['constructor']['name']);
                        }
                        const _0x52036e = _0x18573f['get'](_0x203c57['key']);
                        if (_0x52036e === undefined) {
                            if ('KvNQZ' === 'ijoMP') {
                                return this['endContent'];
                            } else {
                                _0x18573f['set'](_0x203c57['key'], _0x203c57);
                            }
                        } else if (Array['isArray'](_0x52036e)) {
                            if ('clPTS' === 'clPTS') {
                                _0x52036e['push'](_0x203c57);
                            } else {
                                _0x20c31b['push'](endContent);
                            }
                        } else {
                            if ('Wmots' === 'Wmots') {
                                _0x18573f['set'](_0x203c57['key'], [
                                    _0x52036e,
                                    _0x203c57
                                ]);
                            } else {
                                return _0x403f93;
                            }
                        }
                        continue;
                    } else if (typeof _0x203c57['merge'] === 'function') {
                        const _0x3ad318 = _0x18573f['get'](_0x203c57['key']);
                        if (_0x3ad318 !== undefined) {
                            if ('zNopW' !== 'zNopW') {
                                _0x3ad318['push'](_0x203c57);
                            } else {
                                _0x18573f['set'](_0x203c57['key'], _0x203c57['merge'](_0x3ad318));
                                continue;
                            }
                        }
                    }
                    _0x18573f['set'](_0x203c57['key'] || Symbol(), _0x203c57);
                }
            }
            const _0xf20c27 = new ConcatSource();
            const _0x20c31b = [];
            for (let _0x4d08b7 of _0x18573f['values']()) {
                if ('AXZUg' !== 'AXZUg') {
                    _0x18573f['set'](_0x4d08b7['key'], _0x4d08b7);
                } else {
                    if (Array['isArray'](_0x4d08b7)) {
                        if ('YLBGJ' !== 'YQadB') {
                            _0x4d08b7 = _0x4d08b7[0]['mergeAll'](_0x4d08b7);
                        } else {
                            const _0x2fd2f3 = a['stage'] - b['stage'];
                            if (_0x2fd2f3 !== 0)
                                return _0x2fd2f3;
                            const _0x548cef = a['position'] - b['position'];
                            if (_0x548cef !== 0)
                                return _0x548cef;
                            return i - j;
                        }
                    }
                    _0xf20c27['add'](_0x4d08b7['getContent'](_0x417e97));
                    const _0x43c49c = _0x4d08b7['getEndContent'](_0x417e97);
                    if (_0x43c49c) {
                        _0x20c31b['push'](_0x43c49c);
                    }
                }
            }
            _0xf20c27['add'](_0x403f93);
            for (const _0x17e31d of _0x20c31b['reverse']()) {
                _0xf20c27['add'](_0x17e31d);
            }
            return _0xf20c27;
        } else {
            if ('dCpkg' === 'QFvYB') {
                concatSource['add'](content);
            } else {
                return _0x403f93;
            }
        }
    }
}
InitFragment['prototype']['merge'] = undefined;
InitFragment['STAGE_CONSTANTS'] = 10;
InitFragment['STAGE_ASYNC_BOUNDARY'] = 20;
InitFragment['STAGE_HARMONY_EXPORTS'] = 30;
InitFragment['STAGE_HARMONY_IMPORTS'] = 40;
InitFragment['STAGE_PROVIDES'] = 50;
InitFragment['STAGE_ASYNC_DEPENDENCIES'] = 60;
InitFragment['STAGE_ASYNC_HARMONY_IMPORTS'] = 70;
module['exports'] = InitFragment;