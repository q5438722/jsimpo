const _0x4f02 = ['IbSxz', 'number', 'XsQfx', '65231ONarWc', '4JWIfcd', '276290IULZhJ', '3DzIyHd', '781839BfRNtM', '4bJNCQB', '212692hunxGk', '1101940sgVsRY', '931003jZvHmj', '1krsuDw', '5329570RhQhIL', '&amp;', '&lt;', 'exec', 'index', 'length', 'charCodeAt', '&quot;', 'lpQfY', 'LhZnT', 'upXDs', '&gt;', 'substring', 'xoJDF', 'boolean'];

(function (_0x13b1ab, _0x3b2bc6) {
    const _0x5bf2fc = _0x580d;

    while (true) {
        try {
            const _0x347885 = -parseInt(_0x5bf2fc(0x7a)) * parseInt(_0x5bf2fc(0x7b)) + -parseInt(_0x5bf2fc(0x7c)) * parseInt(_0x5bf2fc(0x7d)) + -parseInt(_0x5bf2fc(0x7e)) + parseInt(_0x5bf2fc(0x7f)) * -parseInt(_0x5bf2fc(0x80)) + -parseInt(_0x5bf2fc(0x81)) + parseInt(_0x5bf2fc(0x82)) * -parseInt(_0x5bf2fc(0x83)) + parseInt(_0x5bf2fc(0x84));

            if (_0x347885 === _0x3b2bc6) break;else _0x13b1ab.push(_0x13b1ab.shift());
        } catch (_0xbba175) {
            _0x13b1ab.push(_0x13b1ab.shift());
        }
    }
})(_0x4f02, 574226);
const matchHtmlRegExp = /["'&<>]/;

function _0x580d(_0x493bbe, _0xc8dda8) {
    return _0x580d = function (_0x1d9055, _0x295aab) {
        _0x1d9055 = _0x1d9055 - 122;
        const _0xd76694 = _0x4f02[_0x1d9055];

        return _0xd76694;
    }, _0x580d(_0x493bbe, _0xc8dda8);
}
function escapeHtml(_0x515835) {
    const _0x22cd96 = _0x580d;
    const _0x429c0c = {
        'jBfMW': function (_0x215d90, _0x55b593) {
            return _0x215d90 + _0x55b593;
        },
        'gZfde': function (_0x577d73, _0x27e689) {
            return _0x577d73 < _0x27e689;
        },
        'lpQfY': _0x22cd96(0x85),
        'LhZnT': '&#x27;',
        'upXDs': _0x22cd96(0x86),
        'yMuEz': function (_0x107319, _0x19c17c) {
            return _0x107319 !== _0x19c17c;
        },
        'xoJDF': function (_0x216400, _0x716f8e) {
            return _0x216400 + _0x716f8e;
        },
        'LcvON': function (_0x4b1f94, _0x272a42) {
            return _0x4b1f94 + _0x272a42;
        }
    };

    const _0x43b610 = _0x429c0c.jBfMW('', _0x515835);

    const _0x301ca3 = matchHtmlRegExp[_0x22cd96(0x87)](_0x43b610);

    if (!_0x301ca3) return _0x43b610;

    var _0x177f26;

    var _0x3ab8be = '';

    var _0x23e12a;

    var _0x12071d = 0;

    for (_0x23e12a = _0x301ca3[_0x22cd96(0x88)]; _0x429c0c.gZfde(_0x23e12a, _0x43b610[_0x22cd96(0x89)]); _0x23e12a++) {
        switch (_0x43b610[_0x22cd96(0x8a)](_0x23e12a)) {
            case 34:
                _0x177f26 = _0x22cd96(0x8b);
                break;
            case 38:
                _0x177f26 = _0x429c0c[_0x22cd96(0x8c)];
                break;
            case 39:
                _0x177f26 = _0x429c0c[_0x22cd96(0x8d)];
                break;
            case 60:
                _0x177f26 = _0x429c0c[_0x22cd96(0x8e)];
                break;
            case 62:
                _0x177f26 = _0x22cd96(0x8f);
                break;
            default:
                continue;
        }
        _0x429c0c.yMuEz(_0x12071d, _0x23e12a) && (_0x3ab8be += _0x43b610[_0x22cd96(0x90)](_0x12071d, _0x23e12a)), _0x12071d = _0x429c0c[_0x22cd96(0x91)](_0x23e12a, 1), _0x3ab8be += _0x177f26;
    }
    return _0x12071d !== _0x23e12a ? _0x429c0c.LcvON(_0x3ab8be, _0x43b610[_0x22cd96(0x90)](_0x12071d, _0x23e12a)) : _0x3ab8be;
}
function escapeTextForBrowser(_0x311118) {
    const _0x183a9c = _0x580d;
    const _0x53c622 = {
        'IbSxz': _0x183a9c(0x92),
        'XsQfx': function (_0x13b228, _0x31af00) {
            return _0x13b228(_0x31af00);
        }
    };

    if (typeof _0x311118 === _0x53c622[_0x183a9c(0x93)] || typeof _0x311118 === _0x183a9c(0x94)) return '' + _0x311118;
    return _0x53c622[_0x183a9c(0x95)](escapeHtml, _0x311118);
}
export default escapeTextForBrowser;
