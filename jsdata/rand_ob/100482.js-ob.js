const _0x49ae = [
    '9094DHYJrS',
    '20YVQBDl',
    '50593nYBaLh',
    '253585OvjBGP',
    '235737ODJZmO',
    '5714QJEbNo',
    '17iOrhwH',
    '3719sKpaZm',
    '73xfTaOa',
    'group',
    'note',
    'heading',
    'link',
    'form',
    'list',
    'listitem',
    'columnheader',
    'cell',
    'pdfPage',
    'render',
    '_walk',
    '_setAttributes',
    'aria-label',
    'aria-owns',
    'alt',
    'SxsYK',
    'cBzSE',
    'Skiri',
    'aria-level',
    'createElement',
    'MBrYZ',
    'role',
    'match',
    'EsXJi',
    'setAttribute',
    'children',
    'JOimg',
    'ZaWvU',
    'appendChild',
    'createStructTreeLayerBuilder',
    '1086EhoZkS',
    '291BeOSaB'
];
const _0x452f47 = _0xc564;
(function (_0x15d704, _0xf78b24) {
    const _0x4a1a12 = _0xc564;
    while (!![]) {
        try {
            const _0x500aef = parseInt(_0x4a1a12(0x70)) * -parseInt(_0x4a1a12(0x71)) + parseInt(_0x4a1a12(0x72)) * parseInt(_0x4a1a12(0x73)) + -parseInt(_0x4a1a12(0x74)) + parseInt(_0x4a1a12(0x75)) + -parseInt(_0x4a1a12(0x76)) + -parseInt(_0x4a1a12(0x77)) * -parseInt(_0x4a1a12(0x78)) + parseInt(_0x4a1a12(0x79)) * parseInt(_0x4a1a12(0x7a));
            if (_0x500aef === _0xf78b24)
                break;
            else
                _0x15d704['push'](_0x15d704['shift']());
        } catch (_0x134fe4) {
            _0x15d704['push'](_0x15d704['shift']());
        }
    }
}(_0x49ae, -0x1 * 0x5f611 + 0x35 * -0x559 + -0x94 * -0x118d));
function _0xc564(_0x4c673a, _0x1f3204) {
    return _0xc564 = function (_0x1f77b7, _0x3f48cb) {
        _0x1f77b7 = _0x1f77b7 - (-0x42 * 0x1 + -0xa69 + 0x1 * 0xb1b);
        let _0x4d7431 = _0x49ae[_0x1f77b7];
        return _0x4d7431;
    }, _0xc564(_0x4c673a, _0x1f3204);
}
const PDF_ROLE_TO_HTML_ROLE = {
        'Document': null,
        'DocumentFragment': null,
        'Part': _0x452f47(0x7b),
        'Sect': _0x452f47(0x7b),
        'Div': _0x452f47(0x7b),
        'Aside': _0x452f47(0x7c),
        'NonStruct': 'none',
        'P': null,
        'H': _0x452f47(0x7d),
        'Title': null,
        'FENote': _0x452f47(0x7c),
        'Sub': _0x452f47(0x7b),
        'Lbl': null,
        'Span': null,
        'Em': null,
        'Strong': null,
        'Link': _0x452f47(0x7e),
        'Annot': 'note',
        'Form': _0x452f47(0x7f),
        'Ruby': null,
        'RB': null,
        'RT': null,
        'RP': null,
        'Warichu': null,
        'WT': null,
        'WP': null,
        'L': _0x452f47(0x80),
        'LI': _0x452f47(0x81),
        'LBody': null,
        'Table': 'table',
        'TR': 'row',
        'TH': _0x452f47(0x82),
        'TD': _0x452f47(0x83),
        'THead': 'columnheader',
        'TBody': null,
        'TFoot': null,
        'Caption': null,
        'Figure': 'figure',
        'Formula': null,
        'Artifact': null
    }, HEADING_PATTERN = /^H(\d+)$/;
class StructTreeLayerBuilder {
    constructor({pdfPage: _0x44379a}) {
        const _0x1f3ebb = _0x452f47;
        this[_0x1f3ebb(0x84)] = _0x44379a;
    }
    [_0x452f47(0x85)](_0x2a3673) {
        const _0x641f3c = _0x452f47;
        return this[_0x641f3c(0x86)](_0x2a3673);
    }
    [_0x452f47(0x87)](_0x23b5d5, _0x1b9016) {
        const _0x35e2d8 = _0x452f47, _0x252ffa = {
                'BQlZA': function (_0x56ec18, _0x49af57) {
                    return _0x56ec18 !== _0x49af57;
                },
                'SxsYK': _0x35e2d8(0x88),
                'cBzSE': function (_0x53acd4, _0x5eeea8) {
                    return _0x53acd4 !== _0x5eeea8;
                },
                'Skiri': _0x35e2d8(0x89)
            };
        _0x252ffa['BQlZA'](_0x23b5d5[_0x35e2d8(0x8a)], undefined) && _0x1b9016['setAttribute'](_0x252ffa[_0x35e2d8(0x8b)], _0x23b5d5[_0x35e2d8(0x8a)]), _0x252ffa[_0x35e2d8(0x8c)](_0x23b5d5['id'], undefined) && _0x1b9016['setAttribute'](_0x252ffa[_0x35e2d8(0x8d)], _0x23b5d5['id']);
    }
    [_0x452f47(0x86)](_0x395a6c) {
        const _0x5c265a = _0x452f47, _0x3fe856 = {
                'ksdqz': 'span',
                'MBrYZ': function (_0x341327, _0x264413) {
                    return _0x341327 in _0x264413;
                },
                'TYAjw': 'role',
                'xPwBL': _0x5c265a(0x7d),
                'EsXJi': _0x5c265a(0x8e),
                'JOimg': function (_0x3ad082, _0x570d11) {
                    return _0x3ad082 === _0x570d11;
                },
                'ZaWvU': function (_0x43aa0c, _0x4b286c) {
                    return _0x43aa0c in _0x4b286c;
                }
            };
        if (!_0x395a6c)
            return null;
        const _0x5920f7 = document[_0x5c265a(0x8f)](_0x3fe856['ksdqz']);
        if (_0x3fe856[_0x5c265a(0x90)](_0x5c265a(0x91), _0x395a6c)) {
            const {role: _0x3f9fae} = _0x395a6c, _0x2325b4 = _0x3f9fae[_0x5c265a(0x92)](HEADING_PATTERN);
            if (_0x2325b4)
                _0x5920f7['setAttribute'](_0x3fe856['TYAjw'], _0x3fe856['xPwBL']), _0x5920f7['setAttribute'](_0x3fe856[_0x5c265a(0x93)], _0x2325b4[-0x4 * -0x63a + 0x7 * -0x277 + -0x7a6]);
            else
                PDF_ROLE_TO_HTML_ROLE[_0x3f9fae] && _0x5920f7[_0x5c265a(0x94)]('role', PDF_ROLE_TO_HTML_ROLE[_0x3f9fae]);
        }
        this[_0x5c265a(0x87)](_0x395a6c, _0x5920f7);
        if (_0x395a6c[_0x5c265a(0x95)]) {
            if (_0x3fe856[_0x5c265a(0x96)](_0x395a6c[_0x5c265a(0x95)]['length'], -0x1a82 + -0x1360 * 0x2 + 0x4143) && _0x3fe856[_0x5c265a(0x97)]('id', _0x395a6c[_0x5c265a(0x95)][0x1ff6 + 0x2215 + -0x420b]))
                this[_0x5c265a(0x87)](_0x395a6c[_0x5c265a(0x95)][-0x92 * 0x1c + 0x5 * -0x101 + 0x14fd], _0x5920f7);
            else
                for (const _0xd667be of _0x395a6c[_0x5c265a(0x95)]) {
                    _0x5920f7[_0x5c265a(0x98)](this[_0x5c265a(0x86)](_0xd667be));
                }
        }
        return _0x5920f7;
    }
}
class DefaultStructTreeLayerFactory {
    [_0x452f47(0x99)](_0x3c16b8) {
        return new StructTreeLayerBuilder({ 'pdfPage': _0x3c16b8 });
    }
}
export {
    DefaultStructTreeLayerFactory,
    StructTreeLayerBuilder
};
