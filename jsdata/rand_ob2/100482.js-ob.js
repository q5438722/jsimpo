const _0x32f7 = [
    'length',
    'appendChild',
    '_walk',
    'createStructTreeLayerBuilder',
    '6279TWkxnC',
    '1QSUOYd',
    '32MaIjZU',
    '4722pXZdbF',
    '2InJdyV',
    '14401RMHdii',
    '54847lHjoWb',
    '1GEobDH',
    '3BuxEKH',
    '59669axlOeK',
    '17378StHZsX',
    '15YsVLdo',
    '151654tKryeb',
    'group',
    'none',
    'note',
    'link',
    'list',
    'listitem',
    'table',
    'row',
    'columnheader',
    'cell',
    'pdfPage',
    'render',
    '_setAttributes',
    'alt',
    'setAttribute',
    'aria-label',
    'createElement',
    'span',
    'role',
    'match',
    'children'
];
function _0x5993(_0x2922b2, _0x459684) {
    return _0x5993 = function (_0x32f70b, _0x599308) {
        _0x32f70b = _0x32f70b - 0x1dd;
        let _0x4113b2 = _0x32f7[_0x32f70b];
        return _0x4113b2;
    }, _0x5993(_0x2922b2, _0x459684);
}
const _0x132697 = _0x5993;
(function (_0x521eaa, _0x3d19b8) {
    const _0x3072db = _0x5993;
    while (!![]) {
        try {
            const _0x2101ce = -parseInt(_0x3072db(0x1dd)) * -parseInt(_0x3072db(0x1de)) + -parseInt(_0x3072db(0x1df)) * parseInt(_0x3072db(0x1e0)) + parseInt(_0x3072db(0x1e1)) * -parseInt(_0x3072db(0x1e2)) + parseInt(_0x3072db(0x1e3)) * parseInt(_0x3072db(0x1e4)) + -parseInt(_0x3072db(0x1e5)) * -parseInt(_0x3072db(0x1e6)) + -parseInt(_0x3072db(0x1e7)) * -parseInt(_0x3072db(0x1e8)) + -parseInt(_0x3072db(0x1e9));
            if (_0x2101ce === _0x3d19b8)
                break;
            else
                _0x521eaa['push'](_0x521eaa['shift']());
        } catch (_0x1cb981) {
            _0x521eaa['push'](_0x521eaa['shift']());
        }
    }
}(_0x32f7, 0x2951b));
const PDF_ROLE_TO_HTML_ROLE = {
        'Document': null,
        'DocumentFragment': null,
        'Part': _0x132697(0x1ea),
        'Sect': _0x132697(0x1ea),
        'Div': _0x132697(0x1ea),
        'Aside': 'note',
        'NonStruct': _0x132697(0x1eb),
        'P': null,
        'H': 'heading',
        'Title': null,
        'FENote': _0x132697(0x1ec),
        'Sub': _0x132697(0x1ea),
        'Lbl': null,
        'Span': null,
        'Em': null,
        'Strong': null,
        'Link': _0x132697(0x1ed),
        'Annot': _0x132697(0x1ec),
        'Form': 'form',
        'Ruby': null,
        'RB': null,
        'RT': null,
        'RP': null,
        'Warichu': null,
        'WT': null,
        'WP': null,
        'L': _0x132697(0x1ee),
        'LI': _0x132697(0x1ef),
        'LBody': null,
        'Table': _0x132697(0x1f0),
        'TR': _0x132697(0x1f1),
        'TH': _0x132697(0x1f2),
        'TD': _0x132697(0x1f3),
        'THead': _0x132697(0x1f2),
        'TBody': null,
        'TFoot': null,
        'Caption': null,
        'Figure': 'figure',
        'Formula': null,
        'Artifact': null
    }, HEADING_PATTERN = /^H(\d+)$/;
class StructTreeLayerBuilder {
    constructor({pdfPage: _0x214a75}) {
        const _0x4d7c25 = _0x132697;
        this[_0x4d7c25(0x1f4)] = _0x214a75;
    }
    [_0x132697(0x1f5)](_0x1f7656) {
        return this['_walk'](_0x1f7656);
    }
    [_0x132697(0x1f6)](_0x1bdfae, _0x2f7568) {
        const _0x46a604 = _0x132697;
        _0x1bdfae[_0x46a604(0x1f7)] !== undefined && _0x2f7568[_0x46a604(0x1f8)](_0x46a604(0x1f9), _0x1bdfae[_0x46a604(0x1f7)]), _0x1bdfae['id'] !== undefined && _0x2f7568['setAttribute']('aria-owns', _0x1bdfae['id']);
    }
    ['_walk'](_0xa5f6be) {
        const _0x10410e = _0x132697;
        if (!_0xa5f6be)
            return null;
        const _0x2c1087 = document[_0x10410e(0x1fa)](_0x10410e(0x1fb));
        if (_0x10410e(0x1fc) in _0xa5f6be) {
            const {role: _0x476b7d} = _0xa5f6be, _0x1b2c9f = _0x476b7d[_0x10410e(0x1fd)](HEADING_PATTERN);
            if (_0x1b2c9f)
                _0x2c1087[_0x10410e(0x1f8)]('role', 'heading'), _0x2c1087[_0x10410e(0x1f8)]('aria-level', _0x1b2c9f[0x1]);
            else
                PDF_ROLE_TO_HTML_ROLE[_0x476b7d] && _0x2c1087[_0x10410e(0x1f8)](_0x10410e(0x1fc), PDF_ROLE_TO_HTML_ROLE[_0x476b7d]);
        }
        this[_0x10410e(0x1f6)](_0xa5f6be, _0x2c1087);
        if (_0xa5f6be['children']) {
            if (_0xa5f6be[_0x10410e(0x1fe)][_0x10410e(0x1ff)] === 0x1 && 'id' in _0xa5f6be[_0x10410e(0x1fe)][0x0])
                this[_0x10410e(0x1f6)](_0xa5f6be[_0x10410e(0x1fe)][0x0], _0x2c1087);
            else
                for (const _0x21d539 of _0xa5f6be['children']) {
                    _0x2c1087[_0x10410e(0x200)](this[_0x10410e(0x201)](_0x21d539));
                }
        }
        return _0x2c1087;
    }
}
class DefaultStructTreeLayerFactory {
    [_0x132697(0x202)](_0x3afe51) {
        return new StructTreeLayerBuilder({ 'pdfPage': _0x3afe51 });
    }
}
export {
    DefaultStructTreeLayerFactory,
    StructTreeLayerBuilder
};
