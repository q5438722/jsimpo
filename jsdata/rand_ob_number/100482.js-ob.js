const PDF_ROLE_TO_HTML_ROLE = {
        'Document': null,
        'DocumentFragment': null,
        'Part': 'group',
        'Sect': 'group',
        'Div': 'group',
        'Aside': 'note',
        'NonStruct': 'none',
        'P': null,
        'H': 'heading',
        'Title': null,
        'FENote': 'note',
        'Sub': 'group',
        'Lbl': null,
        'Span': null,
        'Em': null,
        'Strong': null,
        'Link': 'link',
        'Annot': 'note',
        'Form': 'form',
        'Ruby': null,
        'RB': null,
        'RT': null,
        'RP': null,
        'Warichu': null,
        'WT': null,
        'WP': null,
        'L': 'list',
        'LI': 'listitem',
        'LBody': null,
        'Table': 'table',
        'TR': 'row',
        'TH': 'columnheader',
        'TD': 'cell',
        'THead': 'columnheader',
        'TBody': null,
        'TFoot': null,
        'Caption': null,
        'Figure': 'figure',
        'Formula': null,
        'Artifact': null
    }, HEADING_PATTERN = /^H(\d+)$/;
class StructTreeLayerBuilder {
    constructor({pdfPage: _0x453e45}) {
        this['pdfPage'] = _0x453e45;
    }
    ['render'](_0x240784) {
        return this['_walk'](_0x240784);
    }
    ['_setAttributes'](_0x59527c, _0x2bfabd) {
        _0x59527c['alt'] !== undefined && _0x2bfabd['setAttribute']('aria-label', _0x59527c['alt']), _0x59527c['id'] !== undefined && _0x2bfabd['setAttribute']('aria-owns', _0x59527c['id']);
    }
    ['_walk'](_0x3711ce) {
        if (!_0x3711ce)
            return null;
        const _0x4ef14d = document['createElement']('span');
        if ('role' in _0x3711ce) {
            const {role: _0x483b6b} = _0x3711ce, _0x3b5e21 = _0x483b6b['match'](HEADING_PATTERN);
            if (_0x3b5e21)
                _0x4ef14d['setAttribute']('role', 'heading'), _0x4ef14d['setAttribute']('aria-level', _0x3b5e21[-0xb7c + -0xb2f * 0x2 + -0x3 * -0xb49]);
            else
                PDF_ROLE_TO_HTML_ROLE[_0x483b6b] && _0x4ef14d['setAttribute']('role', PDF_ROLE_TO_HTML_ROLE[_0x483b6b]);
        }
        this['_setAttributes'](_0x3711ce, _0x4ef14d);
        if (_0x3711ce['children']) {
            if (_0x3711ce['children']['length'] === -0x1591 + 0x1da7 + -0x815 && 'id' in _0x3711ce['children'][-0x1b3c + -0x1df3 + -0x1 * -0x392f])
                this['_setAttributes'](_0x3711ce['children'][0x35a + -0x2 * 0x125 + -0x11 * 0x10], _0x4ef14d);
            else
                for (const _0x37b5f2 of _0x3711ce['children']) {
                    _0x4ef14d['appendChild'](this['_walk'](_0x37b5f2));
                }
        }
        return _0x4ef14d;
    }
}
class DefaultStructTreeLayerFactory {
    ['createStructTreeLayerBuilder'](_0x29915d) {
        return new StructTreeLayerBuilder({ 'pdfPage': _0x29915d });
    }
}
export {
    DefaultStructTreeLayerFactory,
    StructTreeLayerBuilder
};
