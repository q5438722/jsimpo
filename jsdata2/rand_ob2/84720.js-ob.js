var _0x6cb6 = [
    'triggerReady',
    'src',
    'trigger',
    'loadstart',
    'tech_.play\x20was\x20called',
    'tech\x20ready\x20+\x20no\x20source\x20=\x20wait\x20for\x20loadstart',
    'xyz.mp4',
    'tech\x20ready\x20+\x20has\x20source\x20+\x20changing\x20source\x20=\x20wait\x20for\x20loadstart',
    'tech_.play\x20was\x20not\x20called\x20because\x20the\x20source\x20was\x20changing',
    '641lPaLVe',
    '526eGRYEY',
    '158441UPdAnk',
    '2xJzSdX',
    '275582PClwLf',
    '409eqnMHa',
    '897kNVXdS',
    '67619iMRPcL',
    '1ejwuBG',
    '79867TJFdwZ',
    '2jhoHWI',
    '1336207PbTTUj',
    'module',
    'Player#play',
    'clock',
    'useFakeTimers',
    'techPlayCallCount',
    'techCurrentTimeCallCount',
    'initTime',
    'player',
    'tech_',
    'setCurrentTime',
    'dispose',
    'restore',
    'test',
    'tech\x20not\x20ready\x20+\x20no\x20source\x20=\x20wait\x20for\x20ready,\x20then\x20loadstart',
    'isReady_',
    'play',
    'tick',
    'strictEqual',
    'tech_.play\x20was\x20not\x20called\x20because\x20the\x20tech\x20was\x20not\x20ready'
];
var _0x4f798f = _0x4bc1;
(function (_0x4ddf37, _0x548cef) {
    var _0x47ee68 = _0x4bc1;
    while (!![]) {
        try {
            var _0x156d38 = -parseInt(_0x47ee68(0x17d)) * -parseInt(_0x47ee68(0x17e)) + -parseInt(_0x47ee68(0x17f)) * -parseInt(_0x47ee68(0x180)) + parseInt(_0x47ee68(0x181)) + parseInt(_0x47ee68(0x182)) * parseInt(_0x47ee68(0x183)) + -parseInt(_0x47ee68(0x184)) * -parseInt(_0x47ee68(0x185)) + parseInt(_0x47ee68(0x186)) * parseInt(_0x47ee68(0x187)) + -parseInt(_0x47ee68(0x188));
            if (_0x156d38 === _0x548cef)
                break;
            else
                _0x4ddf37['push'](_0x4ddf37['shift']());
        } catch (_0x581bda) {
            _0x4ddf37['push'](_0x4ddf37['shift']());
        }
    }
}(_0x6cb6, 0x2dd01));
import _0xdbf24e from 'sinon';
function _0x4bc1(_0x576a6a, _0x4103cf) {
    return _0x4bc1 = function (_0x6cb6fc, _0x4bc105) {
        _0x6cb6fc = _0x6cb6fc - 0x17d;
        var _0xda6b48 = _0x6cb6[_0x6cb6fc];
        return _0xda6b48;
    }, _0x4bc1(_0x576a6a, _0x4103cf);
}
import { silencePromise } from '../../src/js/utils/promise';
import _0x1b12fb from './test-helpers';
QUnit[_0x4f798f(0x189)](_0x4f798f(0x18a), {
    'beforeEach'() {
        var _0x276a31 = _0x4f798f;
        this[_0x276a31(0x18b)] = _0xdbf24e[_0x276a31(0x18c)](), this['player'] = _0x1b12fb['makePlayer']({}), this[_0x276a31(0x18d)] = 0x0, this[_0x276a31(0x18e)] = 0x0, this[_0x276a31(0x18f)] = 0x0, this[_0x276a31(0x190)][_0x276a31(0x191)]['play'] = () => {
            var _0x1e12f5 = _0x276a31;
            this[_0x1e12f5(0x18d)]++;
        }, this[_0x276a31(0x190)]['tech_'][_0x276a31(0x192)] = _0x5a66a2 => {
            var _0x107ba8 = _0x276a31;
            this[_0x107ba8(0x18e)]++, this[_0x107ba8(0x18f)] = _0x5a66a2;
        };
    },
    'afterEach'() {
        var _0x3fcc67 = _0x4f798f;
        this['player'][_0x3fcc67(0x193)](), this[_0x3fcc67(0x18b)][_0x3fcc67(0x194)]();
    }
}), QUnit[_0x4f798f(0x195)](_0x4f798f(0x196), function (_0x839265) {
    var _0x19c202 = _0x4f798f;
    this[_0x19c202(0x190)][_0x19c202(0x197)] = ![], this[_0x19c202(0x190)][_0x19c202(0x198)](), this[_0x19c202(0x18b)][_0x19c202(0x199)](0x64), _0x839265[_0x19c202(0x19a)](this[_0x19c202(0x18d)], 0x0, _0x19c202(0x19b)), this[_0x19c202(0x190)][_0x19c202(0x19c)](), this['clock']['tick'](0x64), _0x839265[_0x19c202(0x19a)](this['techPlayCallCount'], 0x0, 'tech_.play\x20was\x20not\x20called\x20because\x20there\x20was\x20no\x20source'), this[_0x19c202(0x190)][_0x19c202(0x19d)]('xyz.mp4'), this[_0x19c202(0x18b)][_0x19c202(0x199)](0x64), this[_0x19c202(0x190)][_0x19c202(0x19e)](_0x19c202(0x19f)), _0x839265[_0x19c202(0x19a)](this[_0x19c202(0x18d)], 0x1, _0x19c202(0x1a0));
}), QUnit[_0x4f798f(0x195)]('tech\x20not\x20ready\x20+\x20has\x20source\x20=\x20wait\x20for\x20ready', function (_0x475b8c) {
    var _0x247f4d = _0x4f798f;
    this[_0x247f4d(0x190)]['isReady_'] = ![], this[_0x247f4d(0x190)][_0x247f4d(0x19d)]('xyz.mp4'), this[_0x247f4d(0x18b)][_0x247f4d(0x199)](0x64), this[_0x247f4d(0x190)][_0x247f4d(0x198)](), this[_0x247f4d(0x18b)][_0x247f4d(0x199)](0x64), _0x475b8c[_0x247f4d(0x19a)](this[_0x247f4d(0x18d)], 0x0, _0x247f4d(0x19b)), this['player'][_0x247f4d(0x19c)](), this[_0x247f4d(0x18b)][_0x247f4d(0x199)](0x64), _0x475b8c['strictEqual'](this[_0x247f4d(0x18d)], 0x1, _0x247f4d(0x1a0));
}), QUnit['test'](_0x4f798f(0x1a1), function (_0x4d3014) {
    var _0x4d199a = _0x4f798f;
    this[_0x4d199a(0x190)][_0x4d199a(0x198)](), this['clock'][_0x4d199a(0x199)](0x64), _0x4d3014[_0x4d199a(0x19a)](this[_0x4d199a(0x18d)], 0x0, _0x4d199a(0x19b)), this[_0x4d199a(0x190)][_0x4d199a(0x19d)]('xyz.mp4'), this[_0x4d199a(0x18b)][_0x4d199a(0x199)](0x64), this[_0x4d199a(0x190)][_0x4d199a(0x19e)](_0x4d199a(0x19f)), _0x4d3014[_0x4d199a(0x19a)](this[_0x4d199a(0x18d)], 0x1, _0x4d199a(0x1a0));
}), QUnit[_0x4f798f(0x195)]('tech\x20ready\x20+\x20has\x20source\x20=\x20play\x20immediately!', function (_0x472988) {
    var _0x29d612 = _0x4f798f;
    this[_0x29d612(0x190)][_0x29d612(0x19d)](_0x29d612(0x1a2)), this[_0x29d612(0x18b)]['tick'](0x64), silencePromise(this[_0x29d612(0x190)][_0x29d612(0x198)]()), _0x472988[_0x29d612(0x19a)](this['techPlayCallCount'], 0x1, _0x29d612(0x1a0));
}), QUnit[_0x4f798f(0x195)](_0x4f798f(0x1a3), function (_0x1055d1) {
    var _0x1309ef = _0x4f798f;
    this[_0x1309ef(0x190)][_0x1309ef(0x19d)]('xyz.mp4'), this[_0x1309ef(0x18b)][_0x1309ef(0x199)](0x64), this[_0x1309ef(0x190)][_0x1309ef(0x19d)]('abc.mp4'), this[_0x1309ef(0x190)][_0x1309ef(0x198)](), this[_0x1309ef(0x18b)][_0x1309ef(0x199)](0x64), _0x1055d1['strictEqual'](this[_0x1309ef(0x18d)], 0x0, _0x1309ef(0x1a4)), this[_0x1309ef(0x190)][_0x1309ef(0x19e)]('loadstart'), _0x1055d1[_0x1309ef(0x19a)](this['techPlayCallCount'], 0x1, 'tech_.play\x20was\x20called');
});