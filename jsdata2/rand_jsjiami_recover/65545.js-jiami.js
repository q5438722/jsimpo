const t = require('tap');
const {fake: mockNpm} = require('../fixtures/mock-npm');
t['test']('pings', _0x2317c5 => {
    _0x2317c5['plan'](8);
    const _0x5e2d77 = 'https://registry.npmjs.org';
    let _0x3ed2b5 = 0;
    const _0x1875a3 = _0x2317c5['mock']('../../lib/ping.js', {
        '../../lib/utils/ping.js': function (_0x38a9b4) {
            _0x2317c5['equal'](_0x38a9b4['registry'], _0x5e2d77, 'passes flatOptions');
            return {};
        },
        'npmlog': {
            'notice': (_0x2617cb, _0x1f60e8) => {
                var _0x513ed9 = { 'czSrn': 'should log the elapsed milliseconds' };
                if ('EejLv' === 'EejLv') {
                    ++_0x3ed2b5;
                    if (_0x3ed2b5 === 1) {
                        if ('EdTEu' === 'EdTEu') {
                            _0x2317c5['equal'](_0x2617cb, 'PING', 'should log a PING');
                            _0x2317c5['equal'](_0x1f60e8, _0x5e2d77, 'should log the registry url');
                        } else {
                            _0x2317c5['equal'](_0x2617cb, 'PONG', 'should log a PONG');
                            _0x2317c5['match'](_0x1f60e8, /\d+ms/, _0x513ed9['czSrn']);
                        }
                    } else {
                        _0x2317c5['equal'](_0x2617cb, 'PONG', 'should log a PONG');
                        _0x2317c5['match'](_0x1f60e8, /\d+ms/, 'should log the elapsed milliseconds');
                    }
                } else {
                    ++_0x3ed2b5;
                    if (_0x3ed2b5 === 1) {
                        _0x2317c5['equal'](_0x2617cb, 'PING', 'should log a PING');
                        _0x2317c5['equal'](_0x1f60e8, _0x5e2d77, 'should log the registry url');
                    } else {
                        _0x2317c5['equal'](_0x2617cb, 'PONG', 'should log a PONG');
                        _0x2317c5['match'](_0x1f60e8, /\d+ms/, 'should log the elapsed milliseconds');
                    }
                }
            }
        }
    });
    const _0x2f6151 = mockNpm({
        'config': { 'registry': _0x5e2d77 },
        'flatOptions': { 'registry': _0x5e2d77 }
    });
    const _0x49799b = new _0x1875a3(_0x2f6151);
    _0x49799b['exec']([], _0x49cba9 => {
        _0x2317c5['equal'](_0x3ed2b5, 2, 'should have logged 2 lines');
        _0x2317c5['error'](_0x49cba9, 'npm ping');
        _0x2317c5['ok']('should be able to ping');
    });
});
t['test']('pings and logs details', _0x5f52a6 => {
    _0x5f52a6['plan'](10);
    const _0x28d324 = 'https://registry.npmjs.org';
    let _0x4d6f37 = 0;
    const _0x5e64ad = _0x5f52a6['mock']('../../lib/ping.js', {
        '../../lib/utils/ping.js': function (_0x9b0011) {
            if ('mXMds' === 'mXMds') {
                _0x5f52a6['equal'](_0x9b0011['registry'], _0x28d324, 'passes flatOptions');
                return _0x5f3d03;
            } else {
                _0x5f52a6['equal'](_0x4d6f37, 3, 'should have logged 3 lines');
                _0x5f52a6['error'](err, 'npm ping');
                _0x5f52a6['ok']('should be able to ping');
            }
        },
        'npmlog': {
            'notice': (_0x41787d, _0x4db8ec) => {
                ++_0x4d6f37;
                if (_0x4d6f37 === 1) {
                    if ('thlFR' !== 'Cemlp') {
                        _0x5f52a6['equal'](_0x41787d, 'PING', 'should log a PING');
                        _0x5f52a6['equal'](_0x4db8ec, _0x28d324, 'should log the registry url');
                    } else {
                        _0x5f52a6['equal'](_0x4db8ec['registry'], _0x28d324, 'passes flatOptions');
                        return _0x5f3d03;
                    }
                } else if (_0x4d6f37 === 2) {
                    if ('hhfUG' !== 'hhfUG') {
                        ++_0x4d6f37;
                        if (_0x4d6f37 === 1) {
                            _0x5f52a6['equal'](_0x41787d, 'PING', 'should log a PING');
                            _0x5f52a6['equal'](_0x4db8ec, _0x28d324, 'should log the registry url');
                        } else {
                            _0x5f52a6['equal'](_0x41787d, 'PONG', 'should log a PONG');
                            _0x5f52a6['match'](_0x4db8ec, /\d+ms/, 'should log the elapsed milliseconds');
                        }
                    } else {
                        _0x5f52a6['equal'](_0x41787d, 'PONG', 'should log a PONG');
                        _0x5f52a6['match'](_0x4db8ec, /\d+ms/, 'should log the elapsed milliseconds');
                    }
                } else {
                    _0x5f52a6['equal'](_0x41787d, 'PONG', 'should log a PONG');
                    const _0xc491a4 = JSON['parse'](_0x4db8ec);
                    _0x5f52a6['match'](_0xc491a4, _0x5f3d03, 'should log JSON stringified details');
                }
            }
        }
    });
    const _0x388f21 = mockNpm({
        'config': { 'registry': _0x28d324 },
        'flatOptions': { 'registry': _0x28d324 }
    });
    const _0x4e166c = new _0x5e64ad(_0x388f21);
    _0x4e166c['exec']([], _0x5068b7 => {
        _0x5f52a6['equal'](_0x4d6f37, 3, 'should have logged 3 lines');
        _0x5f52a6['error'](_0x5068b7, 'npm ping');
        _0x5f52a6['ok']('should be able to ping');
    });
});
t['test']('pings and returns json', _0x3dc062 => {
    _0x3dc062['plan'](11);
    const _0x3a8ff2 = 'https://registry.npmjs.org';
    const _0x2f6cbf = { 'extra': 'data' };
    let _0x1ceb76 = 0;
    const _0xa0e666 = _0x3dc062['mock']('../../lib/ping.js', {
        '../../lib/utils/ping.js': function (_0x7b03f6) {
            _0x3dc062['equal'](_0x7b03f6['registry'], _0x3a8ff2, 'passes flatOptions');
            return _0x2f6cbf;
        },
        'npmlog': {
            'notice': (_0x17d279, _0x526381) => {
                if ('Mwshl' === 'Mwshl') {
                    ++_0x1ceb76;
                    if (_0x1ceb76 === 1) {
                        _0x3dc062['equal'](_0x17d279, 'PING', 'should log a PING');
                        _0x3dc062['equal'](_0x526381, _0x3a8ff2, 'should log the registry url');
                    } else {
                        _0x3dc062['equal'](_0x17d279, 'PONG', 'should log a PONG');
                        _0x3dc062['match'](_0x526381, /\d+ms/, 'should log the elapsed milliseconds');
                    }
                } else {
                    _0x3dc062['equal'](_0x17d279, 'PONG', 'should log a PONG');
                    _0x3dc062['match'](_0x526381, /\d+ms/, 'should log the elapsed milliseconds');
                }
            }
        }
    });
    const _0x10f48f = mockNpm({
        'config': {
            'registry': _0x3a8ff2,
            'json': !![]
        },
        'flatOptions': { 'registry': _0x3a8ff2 },
        'output': function (_0x3fc8e4) {
            if ('dTvEm' === 'mEXRX') {
                _0x3dc062['equal'](type, 'PING', 'should log a PING');
                _0x3dc062['equal'](_0x3fc8e4, _0x3a8ff2, 'should log the registry url');
            } else {
                const _0x1afc37 = JSON['parse'](_0x3fc8e4);
                _0x3dc062['equal'](_0x1afc37['registry'], _0x3a8ff2, 'returns the correct registry url');
                _0x3dc062['match'](_0x1afc37['details'], _0x2f6cbf, 'prints returned details');
                _0x3dc062['type'](_0x1afc37['time'], 'number', 'returns time as a number');
            }
        }
    });
    const _0x399be8 = new _0xa0e666(_0x10f48f);
    _0x399be8['exec']([], _0x295b2d => {
        _0x3dc062['equal'](_0x1ceb76, 2, 'should have logged 2 lines');
        _0x3dc062['error'](_0x295b2d, 'npm ping');
        _0x3dc062['ok']('should be able to ping');
    });
});