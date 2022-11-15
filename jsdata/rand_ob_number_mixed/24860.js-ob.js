angular['module']('500lines', [])['controller']('Spreadsheet', function (_0x303c09, _0x36d8e5) {
    _0x303c09['Cols'] = [], _0x303c09['Rows'] = [];
    for (col of _0x5130e3('A', 'H')) {
        _0x303c09['Cols']['push'](col);
    }
    for (row of _0x5130e3(-0xed7 + 0xa94 + 0x34 * 0x15, -0x8 * -0x194 + 0x867 + -0x14f3)) {
        _0x303c09['Rows']['push'](row);
    }
    function* _0x5130e3(_0x335e83, _0x4889fd) {
        while (_0x335e83 <= _0x4889fd) {
            yield _0x335e83, _0x335e83 = isNaN(_0x335e83) ? String['fromCodePoint'](_0x335e83['codePointAt']() + (0x1 * -0x1deb + -0x9a8 + 0x13ca * 0x2)) : _0x335e83 + (0x210c + 0x1 * 0x1a97 + -0x382 * 0x11);
        }
    }
    _0x303c09['keydown'] = ({which: _0x270579}, _0x1ac7e9, _0x371ac4) => {
        switch (_0x270579) {
        case 0x8a5 * -0x3 + 0x3 * -0x6cd + 0x2e7c:
        case 0xf05 + 0x1 * 0x13c6 + -0x1 * 0x22a3:
        case 0x7df + 0x2 * 0x381 + -0xed4:
            _0x36d8e5(() => {
                const _0x194426 = _0x270579 === -0x1c1e + 0x1 * 0x349 + 0x4ff * 0x5 ? -(-0x2347 * 0x1 + 0x1ceb + 0x65d) : +(-0x1ae1 + 0x143 + 0x3a9 * 0x7), _0x1ac29e = document['querySelector']('#' + _0x1ac7e9 + (_0x371ac4 + _0x194426));
                _0x1ac29e && _0x1ac29e['focus']();
            });
        }
    }, _0x303c09['reset'] = () => {
        _0x303c09['sheet'] = {
            'A1': 0x752,
            'B1': '+',
            'C1': 0x7fe,
            'D1': '⇒',
            'E1': '=A1+C1'
        };
    }, (_0x303c09['init'] = () => {
        _0x303c09['sheet'] = angular['fromJson'](localStorage['getItem']('')), !_0x303c09['sheet'] && _0x303c09['reset'](), _0x303c09['worker'] = new Worker('worker.js');
    })['call'](), [_0x303c09['errs'], _0x303c09['vals']] = [
        {},
        {}
    ], _0x303c09['calc'] = () => {
        const _0x493bdc = angular['toJson'](_0x303c09['sheet']), _0x1e7d82 = _0x36d8e5(() => {
                _0x303c09['worker']['terminate'](), _0x303c09['init'](), _0x303c09['calc']();
            }, -0x94 + -0x2 * -0xbf5 + -0x16f3);
        _0x303c09['worker']['onmessage'] = ({data: _0x498a27}) => {
            _0x36d8e5['cancel'](_0x1e7d82), localStorage['setItem']('', _0x493bdc), _0x36d8e5(() => {
                [_0x303c09['errs'], _0x303c09['vals']] = _0x498a27;
            });
        }, _0x303c09['worker']['postMessage'](_0x303c09['sheet']);
    }, _0x303c09['worker']['onmessage'] = _0x303c09['calc'], _0x303c09['worker']['postMessage'](null);
});
