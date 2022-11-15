function _0x26ab(_0x2d67b6, _0x80a76f) {
    return _0x26ab = function (_0x26eab4, _0x26ab58) {
        _0x26eab4 = _0x26eab4 - 276;
        let _0x40bcbe = _0x26ea[_0x26eab4];
        return _0x40bcbe;
    }, _0x26ab(_0x2d67b6, _0x80a76f);
}
const common = require(_0x145b9d(285)), util = require(_0x145b9d(286)), bench = common[_0x145b9d(287)](main, {
        'len': [
            102400,
            1024 * 1024 * 16
        ],
        'type': [
            _0x145b9d(288),
            _0x145b9d(289),
            _0x145b9d(290)
        ],
        'dur': [5]
    }, {
        'test': { 'len': 1024 },
        'flags': [
            _0x145b9d(291),
            _0x145b9d(292)
        ]
    });
function main({
    dur: _0x3337a1,
    len: _0x129439,
    type: _0x4c7d1d
}) {
    const _0x534e09 = _0x145b9d, {
            TCP: _0x387b20,
            TCPConnectWrap: _0x4d02ea,
            constants: _0xa27120
        } = common[_0x534e09(293)](_0x534e09(294)), {WriteWrap: _0x202f48} = common[_0x534e09(293)](_0x534e09(295)), _0x5c2ce1 = common['PORT'];
    function _0x391825(_0x9ebf96, _0x587a08) {
        throw util['_errnoException'](_0x9ebf96, _0x587a08);
    }
    const _0x2cacbf = new _0x387b20(_0xa27120[_0x534e09(296)]);
    let _0x4c83e5 = _0x2cacbf[_0x534e09(297)](_0x534e09(298), _0x5c2ce1);
    if (_0x4c83e5)
        _0x391825(_0x4c83e5, _0x534e09(297));
    _0x4c83e5 = _0x2cacbf[_0x534e09(299)](511);
    if (_0x4c83e5)
        _0x391825(_0x4c83e5, _0x534e09(299));
    _0x2cacbf['onconnection'] = function (_0x3b8082, _0x54a7ab) {
        const _0x2c4379 = _0x534e09;
        if (_0x3b8082)
            _0x391825(_0x3b8082, _0x2c4379(300));
        _0x54a7ab[_0x2c4379(301)] = function (_0x4f293e) {
            const _0x3e0032 = _0x2c4379;
            if (!_0x4f293e)
                _0x391825('read');
            const _0x19cfe9 = new _0x202f48();
            _0x19cfe9[_0x3e0032(302)] = ![], _0x3b8082 = _0x54a7ab['writeBuffer'](_0x19cfe9, Buffer[_0x3e0032(303)](_0x4f293e));
            if (_0x3b8082)
                _0x391825(_0x3b8082, _0x3e0032(304));
            _0x19cfe9[_0x3e0032(305)] = function (_0xf25749, _0x5a7412, _0x14c7b7) {
                if (_0x14c7b7)
                    _0x391825(_0x14c7b7, 'write');
            };
        }, _0x54a7ab[_0x2c4379(306)]();
    };
    let _0x5a433d;
    switch (_0x4c7d1d) {
    case _0x534e09(290):
        _0x5a433d = Buffer[_0x534e09(307)](_0x129439, 'x');
        break;
    case _0x534e09(288):
        _0x5a433d = 'ü'[_0x534e09(308)](_0x129439 / 2);
        break;
    case _0x534e09(289):
        _0x5a433d = 'x'[_0x534e09(308)](_0x129439);
        break;
    default:
        throw new Error(_0x534e09(309) + _0x4c7d1d);
    }
    const _0x36f40e = new _0x387b20(_0xa27120[_0x534e09(310)]), _0x303f83 = new _0x4d02ea();
    let _0x5e71d9 = 0;
    _0x4c83e5 = _0x36f40e[_0x534e09(300)](_0x303f83, _0x534e09(298), _0x5c2ce1);
    if (_0x4c83e5)
        _0x391825(_0x4c83e5, _0x534e09(300));
    _0x36f40e[_0x534e09(301)] = function (_0x1667a1) {
        const _0x4728c9 = _0x534e09;
        if (!_0x1667a1)
            _0x391825(_0x4728c9(311));
        _0x5e71d9 += _0x1667a1[_0x4728c9(312)];
    }, _0x303f83['oncomplete'] = function (_0x4a5931) {
        const _0x5a481e = _0x534e09;
        if (_0x4a5931)
            _0x391825(_0x4a5931, _0x5a481e(300));
        bench[_0x5a481e(313)](), _0x36f40e[_0x5a481e(306)](), setTimeout(() => {
            const _0x3f1b23 = _0x5a481e;
            bench[_0x3f1b23(314)](2 * (_0x5e71d9 * 8) / (1024 * 1024 * 1024)), process[_0x3f1b23(315)](0);
        }, _0x3337a1 * 1000);
        while (_0x36f40e[_0x5a481e(316)] === 0)
            _0x1837c4();
    };
    function _0x1837c4() {
        const _0x1c645b = _0x534e09, _0x4fba69 = new _0x202f48();
        _0x4fba69['oncomplete'] = _0x2615f5;
        let _0xa1235;
        switch (_0x4c7d1d) {
        case 'buf':
            _0xa1235 = _0x36f40e[_0x1c645b(317)](_0x4fba69, _0x5a433d);
            break;
        case 'utf':
            _0xa1235 = _0x36f40e['writeUtf8String'](_0x4fba69, _0x5a433d);
            break;
        case _0x1c645b(289):
            _0xa1235 = _0x36f40e['writeAsciiString'](_0x4fba69, _0x5a433d);
            break;
        }
        if (_0xa1235)
            _0x391825(_0xa1235, _0x1c645b(304));
    }
    function _0x2615f5(_0x663411, _0x154ac6) {
        if (_0x663411)
            _0x391825(_0x663411, 'write');
        while (_0x36f40e['writeQueueSize'] === 0)
            _0x1837c4();
    }
}