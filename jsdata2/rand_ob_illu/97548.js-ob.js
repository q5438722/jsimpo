const _0x29f7 = ['oKuIS', 'fhwlZ', 'number', 'tktkF', 'boolean', 'SFfDM', 'suGpn', '14939fqTMdL', '53LtHaPi', '112296olRiOp', '605228gcFKmS', '750043fiUVVq', '182112pSjLqF', '2IpUzzA', '252040GqATNN', '1240702jPZyCp', '&amp;', '&gt;', 'exec', 'index', 'KDigf', 'length', 'charCodeAt', 'xOnGY', 'UCmZy', 'OoUcX', '&lt;', 'ybZvy', 'substring'];

(function (_0x59fdac, _0x464744) {
    const _0x319dc1 = _0x589d;

    while (true) {
        try {
            const _0xcf2ca3 = -parseInt(_0x319dc1(0x156)) * -parseInt(_0x319dc1(0x157)) + -parseInt(_0x319dc1(0x158)) + parseInt(_0x319dc1(0x159)) + parseInt(_0x319dc1(0x15a)) + parseInt(_0x319dc1(0x15b)) + -parseInt(_0x319dc1(0x15c)) * parseInt(_0x319dc1(0x15d)) + -parseInt(_0x319dc1(0x15e));

            if (_0xcf2ca3 === _0x464744) break;else _0x59fdac.push(_0x59fdac.shift());
        } catch (_0xba8a9a) {
            _0x59fdac.push(_0x59fdac.shift());
        }
    }
})(_0x29f7, 472072);
const matchHtmlRegExp = /["'&<>]/;

function escapeHtml(_0x20a3a8) {
    const _0x503527 = _0x589d;
    const _0x4c75c0 = {
        'KDigf': function (_0x2bfd73, _0x5ae516) {
            return _0x2bfd73 < _0x5ae516;
        },
        'xOnGY': '&quot;',
        'UCmZy': _0x503527(0x15f),
        'OoUcX': '&#x27;',
        'rHWqP': _0x503527(0x160),
        'ybZvy': function (_0x3efdae, _0x5b517a) {
            return _0x3efdae !== _0x5b517a;
        },
        'fhwlZ': function (_0x412770, _0x58d30c) {
            return _0x412770 + _0x58d30c;
        },
        'oKuIS': function (_0x457b27, _0x1cb778) {
            return _0x457b27 !== _0x1cb778;
        }
    };

    const _0x427039 = '' + _0x20a3a8;

    const _0x4ed698 = matchHtmlRegExp[_0x503527(0x161)](_0x427039);

    if (!_0x4ed698) return _0x427039;

    var _0x1aba4e;

    var _0x4e8337 = '';

    var _0x21a627;

    var _0x197c4e = 0;

    for (_0x21a627 = _0x4ed698[_0x503527(0x162)]; _0x4c75c0[_0x503527(0x163)](_0x21a627, _0x427039[_0x503527(0x164)]); _0x21a627++) {
        switch (_0x427039[_0x503527(0x165)](_0x21a627)) {
            case 34:
                _0x1aba4e = _0x4c75c0[_0x503527(0x166)];
                break;
            case 38:
                _0x1aba4e = _0x4c75c0[_0x503527(0x167)];
                break;
            case 39:
                _0x1aba4e = _0x4c75c0[_0x503527(0x168)];
                break;
            case 60:
                _0x1aba4e = _0x503527(0x169);
                break;
            case 62:
                _0x1aba4e = _0x4c75c0.rHWqP;
                break;
            default:
                continue;
        }
        _0x4c75c0[_0x503527(0x16a)](_0x197c4e, _0x21a627) && (_0x4e8337 += _0x427039[_0x503527(0x16b)](_0x197c4e, _0x21a627)), _0x197c4e = _0x4c75c0.fhwlZ(_0x21a627, 1), _0x4e8337 += _0x1aba4e;
    }
    return _0x4c75c0[_0x503527(0x16c)](_0x197c4e, _0x21a627) ? _0x4c75c0[_0x503527(0x16d)](_0x4e8337, _0x427039[_0x503527(0x16b)](_0x197c4e, _0x21a627)) : _0x4e8337;
}
function _0x589d(_0x5cb684, _0x1d2f8f) {
    return _0x589d = function (_0x2ecb6b, _0x6f75a8) {
        _0x2ecb6b = _0x2ecb6b - 342;
        const _0x354d12 = _0x29f7[_0x2ecb6b];

        return _0x354d12;
    }, _0x589d(_0x5cb684, _0x1d2f8f);
}
function escapeTextForBrowser(_0x432e15) {
    const _0x415e45 = _0x589d;
    const _0x59041d = {
        'tktkF': function (_0x3bc23f, _0x5dc466) {
            return _0x3bc23f === _0x5dc466;
        },
        'SFfDM': _0x415e45(0x16e),
        'suGpn': function (_0x29dbc5, _0x1d44f1) {
            return _0x29dbc5(_0x1d44f1);
        }
    };

    if (_0x59041d[_0x415e45(0x16f)](typeof _0x432e15, _0x415e45(0x170)) || _0x59041d.tktkF(typeof _0x432e15, _0x59041d[_0x415e45(0x171)])) return '' + _0x432e15;
    return _0x59041d[_0x415e45(0x172)](escapeHtml, _0x432e15);
}
export default escapeTextForBrowser;
