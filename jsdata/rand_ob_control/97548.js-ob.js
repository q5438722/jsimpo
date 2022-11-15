const matchHtmlRegExp = /["'&<>]/;
function escapeHtml(_0x2cbd5f) {
    const _0x306aa2 = {
            'cAfHa': function (_0x3b731e, _0x949cf5) {
                return _0x3b731e + _0x949cf5;
            },
            'IbacV': function (_0x23c8ec, _0x1d1717) {
                return _0x23c8ec < _0x1d1717;
            },
            'Bxqlf': '&quot;',
            'PQOLq': '&amp;',
            'diOWX': '&#x27;',
            'awCyj': '&lt;',
            'ABxDU': '&gt;',
            'MNMuo': function (_0x1ad199, _0x21208d) {
                return _0x1ad199 !== _0x21208d;
            },
            'lZWOv': function (_0x4a021e, _0x452da1) {
                return _0x4a021e + _0x452da1;
            }
        }, _0x31d518 = _0x306aa2['cAfHa']('', _0x2cbd5f), _0x5d6da6 = matchHtmlRegExp['exec'](_0x31d518);
    if (!_0x5d6da6)
        return _0x31d518;
    let _0x2b7ad3, _0x595061 = '', _0x54b945, _0x58af54 = 0x0;
    for (_0x54b945 = _0x5d6da6['index']; _0x306aa2['IbacV'](_0x54b945, _0x31d518['length']); _0x54b945++) {
        switch (_0x31d518['charCodeAt'](_0x54b945)) {
        case 0x22:
            _0x2b7ad3 = _0x306aa2['Bxqlf'];
            break;
        case 0x26:
            _0x2b7ad3 = _0x306aa2['PQOLq'];
            break;
        case 0x27:
            _0x2b7ad3 = _0x306aa2['diOWX'];
            break;
        case 0x3c:
            _0x2b7ad3 = _0x306aa2['awCyj'];
            break;
        case 0x3e:
            _0x2b7ad3 = _0x306aa2['ABxDU'];
            break;
        default:
            continue;
        }
        _0x306aa2['MNMuo'](_0x58af54, _0x54b945) && (_0x595061 += _0x31d518['substring'](_0x58af54, _0x54b945)), _0x58af54 = _0x306aa2['cAfHa'](_0x54b945, 0x1), _0x595061 += _0x2b7ad3;
    }
    return _0x306aa2['MNMuo'](_0x58af54, _0x54b945) ? _0x306aa2['lZWOv'](_0x595061, _0x31d518['substring'](_0x58af54, _0x54b945)) : _0x595061;
}
function escapeTextForBrowser(_0x5c6621) {
    const _0x34f967 = {
        'dpJri': function (_0x29f69b, _0x1f641a) {
            return _0x29f69b === _0x1f641a;
        },
        'UEutG': 'boolean',
        'Baafs': 'number',
        'fooQf': function (_0x4f9696, _0x48e613) {
            return _0x4f9696 + _0x48e613;
        },
        'OGJeg': function (_0x53cee0, _0x1207e7) {
            return _0x53cee0(_0x1207e7);
        }
    };
    if (_0x34f967['dpJri'](typeof _0x5c6621, _0x34f967['UEutG']) || _0x34f967['dpJri'](typeof _0x5c6621, _0x34f967['Baafs']))
        return _0x34f967['fooQf']('', _0x5c6621);
    return _0x34f967['OGJeg'](escapeHtml, _0x5c6621);
}
export default escapeTextForBrowser;
