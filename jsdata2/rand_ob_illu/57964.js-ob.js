'use strict';

const _0x1e5a = ['_destroy', 'zQIyx', 'CGocf', 'destroy', '1hDinNW', '223061xRLIBQ', '462849kYaNrC', '36677cWPzfw', '23HYfFWZ', '42737ahNsyv', '1YSwdDD', '1hQWeZZ', '420679XRadYi', '3hKxgue', '233861vlliCL', '1271531Tkjpto', 'stream', '2|4|1|3|0', 'SbBlH', 'split', 'autoClose', 'hZcCC', 'JwrIn', 'readable', 'undtX', 'prototype', 'length', 'UUUux'];
const _0x6739bb = _0x3537;

(function (_0xb2b891, _0x4f9a3b) {
    const _0xf1b6d5 = _0x3537;

    while (true) {
        try {
            const _0x666753 = -parseInt(_0xf1b6d5(0x1b9)) * -parseInt(_0xf1b6d5(0x1ba)) + parseInt(_0xf1b6d5(0x1bb)) + -parseInt(_0xf1b6d5(0x1bc)) * -parseInt(_0xf1b6d5(0x1bd)) + parseInt(_0xf1b6d5(0x1be)) * parseInt(_0xf1b6d5(0x1bf)) + -parseInt(_0xf1b6d5(0x1c0)) * parseInt(_0xf1b6d5(0x1c1)) + -parseInt(_0xf1b6d5(0x1c2)) * -parseInt(_0xf1b6d5(0x1c3)) + -parseInt(_0xf1b6d5(0x1c4));

            if (_0x666753 === _0x4f9a3b) break;else _0xb2b891.push(_0xb2b891.shift());
        } catch (_0x337c65) {
            _0xb2b891.push(_0xb2b891.shift());
        }
    }
})(_0x1e5a, 581591);
function _0x3537(_0x4fbb05, _0x3fc8cb) {
    return _0x3537 = function (_0x27adf3, _0x5db81a) {
        _0x27adf3 = _0x27adf3 - 441;
        const _0xd3cfcd = _0x1e5a[_0x27adf3];

        return _0xd3cfcd;
    }, _0x3537(_0x4fbb05, _0x3fc8cb);
}
var { ObjectSetPrototypeOf, ReflectApply } = primordials;

var { Writable } = require(_0x6739bb(0x1c5));

var { closeSync, writeSync } = require('fs');

function SyncWriteStream(_0x33921e, _0x354641) {
    const _0x275997 = _0x6739bb;
    const _0x557440 = {
        'SbBlH': _0x275997(0x1c6),
        'hZcCC': function (_0x41fbaf, _0x1d7d63) {
            return _0x41fbaf === _0x1d7d63;
        },
        'JwrIn': function (_0x1667b1, _0x4f516a, _0x5bd56d, _0x78f2ce) {
            return _0x1667b1(_0x4f516a, _0x5bd56d, _0x78f2ce);
        },
        'undtX': function (_0x5b5830, _0x11991e) {
            return _0x5b5830 || _0x11991e;
        }
    };

    const _0xbc4ca8 = _0x557440[_0x275997(0x1c7)][_0x275997(0x1c8)]('|');

    var _0x4ec419 = 0;

    while (true) {
        switch (_0xbc4ca8[_0x4ec419++]) {
            case '0':
                this[_0x275997(0x1c9)] = _0x557440[_0x275997(0x1ca)](_0x354641[_0x275997(0x1c9)], undefined) ? true : _0x354641.autoClose;
                continue;
            case '1':
                this['fd'] = _0x33921e;
                continue;
            case '2':
                _0x557440[_0x275997(0x1cb)](ReflectApply, Writable, this, [{ 'autoDestroy': true }]);
                continue;
            case '3':
                this[_0x275997(0x1cc)] = false;
                continue;
            case '4':
                _0x354641 = _0x557440[_0x275997(0x1cd)](_0x354641, {});
                continue;
        }
        break;
    }
}
ObjectSetPrototypeOf(SyncWriteStream[_0x6739bb(0x1ce)], Writable[_0x6739bb(0x1ce)]), ObjectSetPrototypeOf(SyncWriteStream, Writable), SyncWriteStream[_0x6739bb(0x1ce)]['_write'] = function (_0x2e9228, _0xee00ce, _0x3e236b) {
    const _0x133ff0 = _0x6739bb;
    const _0x129e6b = {
        'jxMeY': function (_0x328a65, _0x39bf4d, _0x3ff19e, _0x40913c, _0x463af3) {
            return _0x328a65(_0x39bf4d, _0x3ff19e, _0x40913c, _0x463af3);
        },
        'UUUux': function (_0x3d58dc) {
            return _0x3d58dc();
        }
    };

    return _0x129e6b.jxMeY(writeSync, this.fd, _0x2e9228, 0, _0x2e9228[_0x133ff0(0x1cf)]), _0x129e6b[_0x133ff0(0x1d0)](_0x3e236b), true;
}, SyncWriteStream.prototype[_0x6739bb(0x1d1)] = function (_0x4b7e0d, _0x46c531) {
    const _0x2fbe82 = _0x6739bb;
    const _0xc7a672 = {
        'zQIyx': function (_0x1355ff, _0x42dfbb) {
            return _0x1355ff === _0x42dfbb;
        },
        'CGocf': function (_0x322369, _0x3f4088) {
            return _0x322369(_0x3f4088);
        }
    };

    if (_0xc7a672[_0x2fbe82(0x1d2)](this.fd, null)) return _0x46c531(_0x4b7e0d);
    if (this[_0x2fbe82(0x1c9)]) _0xc7a672[_0x2fbe82(0x1d3)](closeSync, this.fd);
    this['fd'] = null, _0x46c531(_0x4b7e0d);
}, SyncWriteStream[_0x6739bb(0x1ce)]['destroySoon'] = SyncWriteStream[_0x6739bb(0x1ce)][_0x6739bb(0x1d4)], module['exports'] = SyncWriteStream;
