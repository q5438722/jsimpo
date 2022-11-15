var Class = require('../utils/Class');
var NOOP = require('../utils/NOOP');
var RequestAnimationFrame = new Class({
    'initialize': function RequestAnimationFrame() {
        this['isRunning'] = ![];
        this['callback'] = NOOP;
        this['tick'] = 0;
        this['isSetTimeOut'] = ![];
        this['timeOutID'] = null;
        this['lastTime'] = 0;
        this['target'] = 0;
        var _0x13311d = this;
        this['step'] = function step() {
            var _0x42c906 = '4|0|2|1|3'['split']('|'), _0x1c6967 = 0;
            while (!![]) {
                switch (_0x42c906[_0x1c6967++]) {
                case '0':
                    _0x13311d['lastTime'] = _0x13311d['tick'];
                    continue;
                case '1':
                    _0x13311d['callback'](_0x46880f);
                    continue;
                case '2':
                    _0x13311d['tick'] = _0x46880f;
                    continue;
                case '3':
                    _0x13311d['timeOutID'] = window['requestAnimationFrame'](step);
                    continue;
                case '4':
                    var _0x46880f = window['performance']['now']();
                    continue;
                }
                break;
            }
        };
        this['stepTimeout'] = function stepTimeout() {
            var _0x1fad27 = '3|5|1|2|0|4'['split']('|'), _0x2caf17 = 0;
            while (!![]) {
                switch (_0x1fad27[_0x2caf17++]) {
                case '0':
                    _0x13311d['callback'](_0x552428);
                    continue;
                case '1':
                    _0x13311d['lastTime'] = _0x13311d['tick'];
                    continue;
                case '2':
                    _0x13311d['tick'] = _0x552428;
                    continue;
                case '3':
                    var _0x552428 = Date['now']();
                    continue;
                case '4':
                    _0x13311d['timeOutID'] = window['setTimeout'](stepTimeout, _0x113249);
                    continue;
                case '5':
                    var _0x113249 = Math['min'](Math['max'](_0x13311d['target'] * 2 + _0x13311d['tick'] - _0x552428, 0), _0x13311d['target']);
                    continue;
                }
                break;
            }
        };
    },
    'start': function (_0x23dfec, _0x2c5aae, _0x300df4) {
        var _0x3b9091 = '4|3|2|5|1|0'['split']('|'), _0x42ae23 = 0;
        while (!![]) {
            switch (_0x3b9091[_0x42ae23++]) {
            case '0':
                this['timeOutID'] = _0x2c5aae ? window['setTimeout'](this['stepTimeout'], 0) : window['requestAnimationFrame'](this['step']);
                continue;
            case '1':
                this['isRunning'] = !![];
                continue;
            case '2':
                this['isSetTimeOut'] = _0x2c5aae;
                continue;
            case '3':
                this['callback'] = _0x23dfec;
                continue;
            case '4':
                if (this['isRunning']) {
                    return;
                }
                continue;
            case '5':
                this['target'] = _0x300df4;
                continue;
            }
            break;
        }
    },
    'stop': function () {
        this['isRunning'] = ![];
        if (this['isSetTimeOut']) {
            clearTimeout(this['timeOutID']);
        } else {
            window['cancelAnimationFrame'](this['timeOutID']);
        }
    },
    'destroy': function () {
        this['stop']();
        this['callback'] = NOOP;
    }
});
module['exports'] = RequestAnimationFrame;