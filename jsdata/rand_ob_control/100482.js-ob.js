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
    constructor({pdfPage: _0x49f88b}) {
        this['pdfPage'] = _0x49f88b;
    }
    ['render'](_0x1b3656) {
        return this['_walk'](_0x1b3656);
    }
    ['_setAttributes'](_0xb499b0, _0x4c836d) {
        const _0x3c08ac = {
            'xWrIb': function (_0x1be325, _0x215091) {
                return _0x1be325 !== _0x215091;
            },
            'LQsZR': 'aria-label',
            'FqKRE': 'aria-owns'
        };
        _0x3c08ac['xWrIb'](_0xb499b0['alt'], undefined) && _0x4c836d['setAttribute'](_0x3c08ac['LQsZR'], _0xb499b0['alt']), _0x3c08ac['xWrIb'](_0xb499b0['id'], undefined) && _0x4c836d['setAttribute'](_0x3c08ac['FqKRE'], _0xb499b0['id']);
    }
    ['_walk'](_0x54691e) {
        const _0x35bc30 = {
            'llvgJ': 'span',
            'WaZDT': function (_0x44e4f7, _0x47d203) {
                return _0x44e4f7 in _0x47d203;
            },
            'CcTMW': 'role',
            'VvgoL': 'heading',
            'qiefD': 'aria-level',
            'llcnr': function (_0x3d475b, _0x237f61) {
                return _0x3d475b === _0x237f61;
            }
        };
        if (!_0x54691e)
            return null;
        const _0x33b416 = document['createElement'](_0x35bc30['llvgJ']);
        if (_0x35bc30['WaZDT'](_0x35bc30['CcTMW'], _0x54691e)) {
            const {role: _0x277102} = _0x54691e, _0x7471be = _0x277102['match'](HEADING_PATTERN);
            if (_0x7471be)
                _0x33b416['setAttribute'](_0x35bc30['CcTMW'], _0x35bc30['VvgoL']), _0x33b416['setAttribute'](_0x35bc30['qiefD'], _0x7471be[0x1]);
            else
                PDF_ROLE_TO_HTML_ROLE[_0x277102] && _0x33b416['setAttribute'](_0x35bc30['CcTMW'], PDF_ROLE_TO_HTML_ROLE[_0x277102]);
        }
        this['_setAttributes'](_0x54691e, _0x33b416);
        if (_0x54691e['children']) {
            if (_0x35bc30['llcnr'](_0x54691e['children']['length'], 0x1) && _0x35bc30['WaZDT']('id', _0x54691e['children'][0x0]))
                this['_setAttributes'](_0x54691e['children'][0x0], _0x33b416);
            else
                for (const _0x13cc88 of _0x54691e['children']) {
                    _0x33b416['appendChild'](this['_walk'](_0x13cc88));
                }
        }
        return _0x33b416;
    }
}
class DefaultStructTreeLayerFactory {
    ['createStructTreeLayerBuilder'](_0x89d8a5) {
        return new StructTreeLayerBuilder({ 'pdfPage': _0x89d8a5 });
    }
}
export {
    DefaultStructTreeLayerFactory,
    StructTreeLayerBuilder
};
