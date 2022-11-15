const _0xfcc5 = [
    'object',
    'TURNPOLICY_BLACK',
    'TURNPOLICY_WHITE',
    'TURNPOLICY_LEFT',
    'TURNPOLICY_RIGHT',
    'TURNPOLICY_MINORITY',
    'TURNPOLICY_MAJORITY',
    'max',
    'THRESHOLD_AUTO',
    'transparent',
    'Use\x20traced\x20SVGs\x20for\x20placeholder\x20images\x20instead\x20of\x20the\x20“blur\x20up”\x20effect.\x20Pass\x20true\x20for\x20traced\x20SVGs\x20with\x20the\x20default\x20settings\x20(seen\x20here),\x20or\x20an\x20object\x20of\x20options\x20to\x20override\x20the\x20default.\x20For\x20example,\x20pass\x20{\x20color:\x20\x22#F00\x22,\x20turnPolicy:\x20\x22TURNPOLICY_MAJORITY\x22\x20}\x20to\x20change\x20the\x20color\x20of\x20the\x20trace\x20to\x20red\x20and\x20the\x20turn\x20policy\x20to\x20TURNPOLICY_MAJORITY.\x20See\x20node-potrace\x20parameter\x20documentation\x20for\x20a\x20full\x20listing\x20and\x20explanation\x20of\x20the\x20available\x20options.',
    'eager',
    'auto',
    'lazy',
    'async',
    'Set\x20the\x20browser’s\x20native\x20decoding\x20attribute.\x20One\x20of\x20async,\x20sync\x20or\x20auto.',
    'Images\x20containing\x20transparent\x20pixels\x20around\x20the\x20edges\x20results\x20in\x20images\x20with\x20blurry\x20edges.\x20As\x20a\x20result,\x20these\x20images\x20do\x20not\x20work\x20well\x20with\x20the\x20“blur\x20up”\x20technique\x20used\x20in\x20this\x20plugin.\x20As\x20a\x20workaround\x20to\x20disable\x20background\x20images\x20with\x20blurry\x20edges\x20on\x20images\x20containing\x20transparent\x20pixels,\x20enable\x20this\x20setting.',
    'Remove\x20background\x20image\x20and\x20its’\x20inline\x20style.\x20Useful\x20to\x20prevent\x20Stylesheet\x20too\x20long\x20error\x20on\x20AMP.',
    'items',
    'By\x20default\x20gatsby\x20generates\x200.25x,\x200.5x,\x201x,\x201.5x,\x202x,\x20and\x203x\x20sizes\x20of\x20thumbnails.\x20If\x20you\x20want\x20more\x20control\x20over\x20which\x20sizes\x20are\x20output\x20you\x20can\x20use\x20the\x20srcSetBreakpoints\x20parameter.\x20For\x20example,\x20if\x20you\x20want\x20images\x20that\x20are\x20200,\x20340,\x20520,\x20and\x20890\x20wide\x20you\x20can\x20add\x20srcSetBreakpoints:\x20[\x20200,\x20340,\x20520,\x20890\x20]\x20as\x20a\x20parameter.\x20You\x20will\x20also\x20get\x20maxWidth\x20as\x20a\x20breakpoint\x20(which\x20is\x20650\x20by\x20default),\x20so\x20you\x20will\x20actually\x20get\x20[\x20200,\x20340,\x20520,\x20650,\x20890\x20]\x20as\x20breakpoints.',
    '1031411ojGrSP',
    '1mAPXLA',
    '549630ATuNUU',
    '611345mqwaZy',
    '271811vnRiJw',
    '540980sEyfsT',
    '1PjuOZK',
    '827588ndpxlr',
    '2819577guaqGa',
    'pluginOptionsSchema',
    'number',
    'default',
    'description',
    'The\x20maxWidth\x20in\x20pixels\x20of\x20the\x20div\x20where\x20the\x20markdown\x20will\x20be\x20displayed.\x20This\x20value\x20is\x20used\x20when\x20deciding\x20what\x20the\x20width\x20of\x20the\x20various\x20responsive\x20thumbnails\x20should\x20be.',
    'boolean',
    'Add\x20a\x20link\x20to\x20each\x20image\x20to\x20the\x20original\x20image.\x20Sometimes\x20people\x20want\x20to\x20see\x20a\x20full-sized\x20version\x20of\x20an\x20image\x20e.g.\x20to\x20see\x20extra\x20detail\x20on\x20a\x20part\x20of\x20the\x20image\x20and\x20this\x20is\x20a\x20convenient\x20and\x20common\x20pattern\x20for\x20enabling\x20this.\x20Set\x20this\x20option\x20to\x20false\x20to\x20disable\x20this\x20behavior.',
    'alternatives',
    'array',
    'string',
    'valid',
    'title',
    'Add\x20a\x20caption\x20to\x20each\x20image\x20with\x20the\x20contents\x20of\x20the\x20title\x20attribute,\x20when\x20this\x20is\x20not\x20empty.\x20If\x20the\x20title\x20attribute\x20is\x20empty\x20but\x20the\x20alt\x20attribute\x20is\x20not,\x20it\x20will\x20be\x20used\x20instead.\x20Set\x20this\x20option\x20to\x20true\x20to\x20enable\x20this\x20behavior.\x20You\x20can\x20also\x20pass\x20an\x20array\x20instead\x20to\x20specify\x20which\x20value\x20should\x20be\x20used\x20for\x20the\x20caption\x20—\x20for\x20example,\x20passing\x20[\x27alt\x27,\x20\x27title\x27]\x20would\x20use\x20the\x20alt\x20attribute\x20first,\x20and\x20then\x20the\x20title.\x20When\x20this\x20is\x20set\x20to\x20true\x20it\x20is\x20the\x20same\x20as\x20passing\x20[\x27title\x27,\x20\x27alt\x27].\x20If\x20you\x20just\x20want\x20to\x20use\x20the\x20title\x20(and\x20omit\x20captions\x20for\x20images\x20that\x20have\x20alt\x20attributes\x20but\x20no\x20title),\x20pass\x20[\x27title\x27].',
    '[deprecated]\x20Pixel\x20density\x20is\x20only\x20used\x20in\x20vector\x20images,\x20which\x20Gatsby’s\x20implementation\x20of\x20Sharp\x20doesn’t\x20support.\x20This\x20option\x20is\x20currently\x20a\x20no-op\x20and\x20will\x20be\x20removed\x20in\x20the\x20next\x20major\x20version\x20of\x20Gatsby.',
    'try',
    'unknown',
    'white',
    'Set\x20the\x20background\x20color\x20of\x20the\x20image\x20to\x20match\x20the\x20background\x20image\x20of\x20your\x20design.\x0a\x0a\x20\x20\x20\x20\x20\x20Note:\x0a\x20\x20\x20\x20\x20\x20-\x20set\x20this\x20option\x20to\x20transparent\x20for\x20a\x20transparent\x20image\x20background.\x0a\x20\x20\x20\x20\x20\x20-\x20set\x20this\x20option\x20to\x20none\x20to\x20completely\x20remove\x20the\x20image\x20background.',
    'Additionally\x20generate\x20WebP\x20versions\x20alongside\x20your\x20chosen\x20file\x20format.\x20They\x20are\x20added\x20as\x20a\x20srcset\x20with\x20the\x20appropriate\x20mimetype\x20and\x20will\x20be\x20loaded\x20in\x20browsers\x20that\x20support\x20the\x20format.\x20Pass\x20true\x20for\x20default\x20support,\x20or\x20an\x20object\x20of\x20options\x20to\x20specifically\x20override\x20those\x20for\x20the\x20WebP\x20files.\x20For\x20example,\x20pass\x20{\x20quality:\x2080\x20}\x20to\x20have\x20the\x20WebP\x20images\x20be\x20at\x20quality\x20level\x2080.'
];
const _0x51de91 = _0x2d38;
(function (_0x2830c3, _0x2c4458) {
    const _0x2ea152 = _0x2d38;
    while (!![]) {
        try {
            const _0x2fd940 = -parseInt(_0x2ea152(0xa0)) * parseInt(_0x2ea152(0xa1)) + -parseInt(_0x2ea152(0xa2)) + -parseInt(_0x2ea152(0xa3)) + parseInt(_0x2ea152(0xa4)) + parseInt(_0x2ea152(0xa5)) + -parseInt(_0x2ea152(0xa6)) * parseInt(_0x2ea152(0xa7)) + parseInt(_0x2ea152(0xa8));
            if (_0x2fd940 === _0x2c4458)
                break;
            else
                _0x2830c3['push'](_0x2830c3['shift']());
        } catch (_0x3dc7da) {
            _0x2830c3['push'](_0x2830c3['shift']());
        }
    }
}(_0xfcc5, 0x9582a));
function _0x2d38(_0x31d4fa, _0x277671) {
    return _0x2d38 = function (_0xfcc50f, _0x2d3899) {
        _0xfcc50f = _0xfcc50f - 0xa0;
        let _0x40f7a0 = _0xfcc5[_0xfcc50f];
        return _0x40f7a0;
    }, _0x2d38(_0x31d4fa, _0x277671);
}
const {Potrace} = require('potrace');
exports[_0x51de91(0xa9)] = function ({Joi: _0x4225ac}) {
    const _0x2847dc = _0x51de91;
    return _0x4225ac['object']({
        'maxWidth': _0x4225ac[_0x2847dc(0xaa)]()[_0x2847dc(0xab)](0x28a)[_0x2847dc(0xac)](_0x2847dc(0xad)),
        'linkImagesToOriginal': _0x4225ac[_0x2847dc(0xae)]()[_0x2847dc(0xab)](!![])[_0x2847dc(0xac)](_0x2847dc(0xaf)),
        'showCaptions': _0x4225ac[_0x2847dc(0xb0)]()['try'](_0x4225ac['boolean'](), _0x4225ac[_0x2847dc(0xb1)]()['items'](_0x4225ac[_0x2847dc(0xb2)]()[_0x2847dc(0xb3)](_0x2847dc(0xb4)), _0x4225ac[_0x2847dc(0xb2)]()[_0x2847dc(0xb3)]('alt')))[_0x2847dc(0xab)](![])[_0x2847dc(0xac)](_0x2847dc(0xb5)),
        'markdownCaptions': _0x4225ac['boolean']()['default'](![])['description']('Parse\x20the\x20caption\x20as\x20markdown\x20instead\x20of\x20raw\x20text.\x20Ignored\x20if\x20showCaptions\x20is\x20false.'),
        'sizeByPixelDensity': _0x4225ac['boolean']()[_0x2847dc(0xab)](![])[_0x2847dc(0xac)](_0x2847dc(0xb6)),
        'wrapperStyle': _0x4225ac[_0x2847dc(0xb0)]()[_0x2847dc(0xb7)](_0x4225ac['object']({})[_0x2847dc(0xb8)](!![]), _0x4225ac['function']()['maxArity'](0x1), _0x4225ac[_0x2847dc(0xb2)]()),
        'backgroundColor': _0x4225ac['string']()[_0x2847dc(0xab)](_0x2847dc(0xb9))[_0x2847dc(0xac)](_0x2847dc(0xba)),
        'quality': _0x4225ac[_0x2847dc(0xaa)]()['default'](0x32)['description']('The\x20quality\x20level\x20of\x20the\x20generated\x20files.'),
        'withWebp': _0x4225ac[_0x2847dc(0xb0)]()[_0x2847dc(0xb7)](_0x4225ac['object']({ 'quality': _0x4225ac[_0x2847dc(0xaa)]() }), _0x4225ac[_0x2847dc(0xae)]())[_0x2847dc(0xab)](![])['description'](_0x2847dc(0xbb)),
        'tracedSVG': _0x4225ac['alternatives']()[_0x2847dc(0xb7)](_0x4225ac[_0x2847dc(0xae)](), _0x4225ac[_0x2847dc(0xbc)]({
            'turnPolicy': _0x4225ac['string']()[_0x2847dc(0xb3)](_0x2847dc(0xbd), _0x2847dc(0xbe), _0x2847dc(0xbf), _0x2847dc(0xc0), _0x2847dc(0xc1), _0x2847dc(0xc2), Potrace['TURNPOLICY_BLACK'], Potrace['TURNPOLICY_WHITE'], Potrace[_0x2847dc(0xbf)], Potrace[_0x2847dc(0xc0)], Potrace[_0x2847dc(0xc1)], Potrace[_0x2847dc(0xc2)])[_0x2847dc(0xab)](Potrace[_0x2847dc(0xc2)]),
            'turdSize': _0x4225ac['number']()[_0x2847dc(0xab)](0x64),
            'alphaMax': _0x4225ac[_0x2847dc(0xaa)](),
            'optCurve': _0x4225ac[_0x2847dc(0xae)]()[_0x2847dc(0xab)](!![]),
            'optTolerance': _0x4225ac[_0x2847dc(0xaa)]()[_0x2847dc(0xab)](0.4),
            'threshold': _0x4225ac[_0x2847dc(0xb0)]()[_0x2847dc(0xb7)](_0x4225ac[_0x2847dc(0xaa)]()['min'](0x0)[_0x2847dc(0xc3)](0xff), _0x4225ac[_0x2847dc(0xaa)]()[_0x2847dc(0xb3)](Potrace[_0x2847dc(0xc4)]))['default'](Potrace[_0x2847dc(0xc4)]),
            'blackOnWhite': _0x4225ac[_0x2847dc(0xae)]()['default'](!![]),
            'color': _0x4225ac[_0x2847dc(0xb2)]()[_0x2847dc(0xab)]('lightgray'),
            'background': _0x4225ac[_0x2847dc(0xb2)]()['default'](_0x2847dc(0xc5))
        }))[_0x2847dc(0xab)](![])['description'](_0x2847dc(0xc6)),
        'loading': _0x4225ac[_0x2847dc(0xb2)]()[_0x2847dc(0xb3)]('lazy', _0x2847dc(0xc7), _0x2847dc(0xc8))[_0x2847dc(0xab)](_0x2847dc(0xc9))[_0x2847dc(0xac)]('Set\x20the\x20browser’s\x20native\x20lazy\x20loading\x20attribute.\x20One\x20of\x20lazy,\x20eager\x20or\x20auto.'),
        'decoding': _0x4225ac['string']()[_0x2847dc(0xb3)](_0x2847dc(0xca), 'sync', _0x2847dc(0xc8))[_0x2847dc(0xab)](_0x2847dc(0xca))['description'](_0x2847dc(0xcb)),
        'disableBgImageOnAlpha': _0x4225ac[_0x2847dc(0xae)]()[_0x2847dc(0xab)](![])[_0x2847dc(0xac)](_0x2847dc(0xcc)),
        'disableBgImage': _0x4225ac[_0x2847dc(0xae)]()[_0x2847dc(0xab)](![])[_0x2847dc(0xac)](_0x2847dc(0xcd)),
        'srcSetBreakpoints': _0x4225ac[_0x2847dc(0xb1)]()[_0x2847dc(0xce)](_0x4225ac[_0x2847dc(0xaa)]())[_0x2847dc(0xac)](_0x2847dc(0xcf))
    });
};
