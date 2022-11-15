angular[_0x492a00(430)](_0x492a00(431), [])['controller'](_0x492a00(432), function (_0x1c7eaa, _0x4f0230) {
    const _0x553866 = _0x492a00;
    _0x1c7eaa[_0x553866(433)] = [], _0x1c7eaa[_0x553866(434)] = [];
    for (col of _0x146f50('A', 'H')) {
        _0x1c7eaa[_0x553866(433)][_0x553866(435)](col);
    }
    for (row of _0x146f50(1, 20)) {
        _0x1c7eaa[_0x553866(434)][_0x553866(435)](row);
    }
    function* _0x146f50(_0x3c06e5, _0x2172a9) {
        const _0x45a206 = _0x553866;
        while (_0x3c06e5 <= _0x2172a9) {
            yield _0x3c06e5, _0x3c06e5 = isNaN(_0x3c06e5) ? String[_0x45a206(436)](_0x3c06e5[_0x45a206(437)]() + 1) : _0x3c06e5 + 1;
        }
    }
    _0x1c7eaa['keydown'] = ({which: _0x4567bb}, _0x49d5d6, _0x336b56) => {
        switch (_0x4567bb) {
        case 38:
        case 40:
        case 13:
            _0x4f0230(() => {
                const _0x36e22c = _0x123e, _0x2c5d32 = _0x4567bb === 38 ? -1 : +1, _0x133065 = document[_0x36e22c(438)]('#' + _0x49d5d6 + (_0x336b56 + _0x2c5d32));
                _0x133065 && _0x133065[_0x36e22c(439)]();
            });
        }
    }, _0x1c7eaa[_0x553866(440)] = () => {
        _0x1c7eaa['sheet'] = {
            'A1': 1874,
            'B1': '+',
            'C1': 2046,
            'D1': '\u21D2',
            'E1': '=A1+C1'
        };
    }, (_0x1c7eaa['init'] = () => {
        const _0x241ae7 = _0x553866;
        _0x1c7eaa['sheet'] = angular[_0x241ae7(441)](localStorage[_0x241ae7(442)]('')), !_0x1c7eaa[_0x241ae7(443)] && _0x1c7eaa['reset'](), _0x1c7eaa[_0x241ae7(444)] = new Worker(_0x241ae7(445));
    })[_0x553866(446)](), [_0x1c7eaa[_0x553866(447)], _0x1c7eaa[_0x553866(448)]] = [
        {},
        {}
    ], _0x1c7eaa[_0x553866(449)] = () => {
        const _0xf75150 = _0x553866, _0x40be70 = angular[_0xf75150(450)](_0x1c7eaa[_0xf75150(443)]), _0x1e23b9 = _0x4f0230(() => {
                const _0x13a6cd = _0xf75150;
                _0x1c7eaa['worker'][_0x13a6cd(451)](), _0x1c7eaa[_0x13a6cd(452)](), _0x1c7eaa[_0x13a6cd(449)]();
            }, 99);
        _0x1c7eaa['worker'][_0xf75150(453)] = ({data: _0x4fd873}) => {
            const _0x2350a1 = _0xf75150;
            _0x4f0230[_0x2350a1(454)](_0x1e23b9), localStorage[_0x2350a1(455)]('', _0x40be70), _0x4f0230(() => {
                const _0x38ab94 = _0x2350a1;
                [_0x1c7eaa[_0x38ab94(447)], _0x1c7eaa[_0x38ab94(448)]] = _0x4fd873;
            });
        }, _0x1c7eaa[_0xf75150(444)][_0xf75150(456)](_0x1c7eaa[_0xf75150(443)]);
    }, _0x1c7eaa[_0x553866(444)]['onmessage'] = _0x1c7eaa[_0x553866(449)], _0x1c7eaa[_0x553866(444)][_0x553866(456)](null);
});