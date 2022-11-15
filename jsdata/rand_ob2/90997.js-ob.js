const _0x4c37 = [
    'TURNPOLICY_MAJORITY',
    'TURNPOLICY_BLACK',
    'min',
    'THRESHOLD_AUTO',
    'lightgray',
    'transparent',
    'Use\x20traced\x20SVGs\x20for\x20placeholder\x20images\x20instead\x20of\x20the\x20“blur\x20up”\x20effect.\x20Pass\x20true\x20for\x20traced\x20SVGs\x20with\x20the\x20default\x20settings\x20(seen\x20here),\x20or\x20an\x20object\x20of\x20options\x20to\x20override\x20the\x20default.\x20For\x20example,\x20pass\x20{\x20color:\x20\x22#F00\x22,\x20turnPolicy:\x20\x22TURNPOLICY_MAJORITY\x22\x20}\x20to\x20change\x20the\x20color\x20of\x20the\x20trace\x20to\x20red\x20and\x20the\x20turn\x20policy\x20to\x20TURNPOLICY_MAJORITY.\x20See\x20node-potrace\x20parameter\x20documentation\x20for\x20a\x20full\x20listing\x20and\x20explanation\x20of\x20the\x20available\x20options.',
    'lazy',
    'eager',
    'Set\x20the\x20browser’s\x20native\x20lazy\x20loading\x20attribute.\x20One\x20of\x20lazy,\x20eager\x20or\x20auto.',
    'async',
    'sync',
    'auto',
    'Set\x20the\x20browser’s\x20native\x20decoding\x20attribute.\x20One\x20of\x20async,\x20sync\x20or\x20auto.',
    'Images\x20containing\x20transparent\x20pixels\x20around\x20the\x20edges\x20results\x20in\x20images\x20with\x20blurry\x20edges.\x20As\x20a\x20result,\x20these\x20images\x20do\x20not\x20work\x20well\x20with\x20the\x20“blur\x20up”\x20technique\x20used\x20in\x20this\x20plugin.\x20As\x20a\x20workaround\x20to\x20disable\x20background\x20images\x20with\x20blurry\x20edges\x20on\x20images\x20containing\x20transparent\x20pixels,\x20enable\x20this\x20setting.',
    'By\x20default\x20gatsby\x20generates\x200.25x,\x200.5x,\x201x,\x201.5x,\x202x,\x20and\x203x\x20sizes\x20of\x20thumbnails.\x20If\x20you\x20want\x20more\x20control\x20over\x20which\x20sizes\x20are\x20output\x20you\x20can\x20use\x20the\x20srcSetBreakpoints\x20parameter.\x20For\x20example,\x20if\x20you\x20want\x20images\x20that\x20are\x20200,\x20340,\x20520,\x20and\x20890\x20wide\x20you\x20can\x20add\x20srcSetBreakpoints:\x20[\x20200,\x20340,\x20520,\x20890\x20]\x20as\x20a\x20parameter.\x20You\x20will\x20also\x20get\x20maxWidth\x20as\x20a\x20breakpoint\x20(which\x20is\x20650\x20by\x20default),\x20so\x20you\x20will\x20actually\x20get\x20[\x20200,\x20340,\x20520,\x20650,\x20890\x20]\x20as\x20breakpoints.',
    '2645vLwjpe',
    '26deOlVP',
    '242229nPxlns',
    '1omoGAL',
    '1INrLZL',
    '317671YAUlld',
    '2zpDykc',
    '179017GLWzlv',
    '231571CdpKxB',
    '1wqnixD',
    '447852nPJrpu',
    '1112952ClORih',
    'potrace',
    'pluginOptionsSchema',
    'object',
    'number',
    'boolean',
    'description',
    'Add\x20a\x20link\x20to\x20each\x20image\x20to\x20the\x20original\x20image.\x20Sometimes\x20people\x20want\x20to\x20see\x20a\x20full-sized\x20version\x20of\x20an\x20image\x20e.g.\x20to\x20see\x20extra\x20detail\x20on\x20a\x20part\x20of\x20the\x20image\x20and\x20this\x20is\x20a\x20convenient\x20and\x20common\x20pattern\x20for\x20enabling\x20this.\x20Set\x20this\x20option\x20to\x20false\x20to\x20disable\x20this\x20behavior.',
    'alternatives',
    'try',
    'array',
    'items',
    'string',
    'valid',
    'title',
    'default',
    'Add\x20a\x20caption\x20to\x20each\x20image\x20with\x20the\x20contents\x20of\x20the\x20title\x20attribute,\x20when\x20this\x20is\x20not\x20empty.\x20If\x20the\x20title\x20attribute\x20is\x20empty\x20but\x20the\x20alt\x20attribute\x20is\x20not,\x20it\x20will\x20be\x20used\x20instead.\x20Set\x20this\x20option\x20to\x20true\x20to\x20enable\x20this\x20behavior.\x20You\x20can\x20also\x20pass\x20an\x20array\x20instead\x20to\x20specify\x20which\x20value\x20should\x20be\x20used\x20for\x20the\x20caption\x20—\x20for\x20example,\x20passing\x20[\x27alt\x27,\x20\x27title\x27]\x20would\x20use\x20the\x20alt\x20attribute\x20first,\x20and\x20then\x20the\x20title.\x20When\x20this\x20is\x20set\x20to\x20true\x20it\x20is\x20the\x20same\x20as\x20passing\x20[\x27title\x27,\x20\x27alt\x27].\x20If\x20you\x20just\x20want\x20to\x20use\x20the\x20title\x20(and\x20omit\x20captions\x20for\x20images\x20that\x20have\x20alt\x20attributes\x20but\x20no\x20title),\x20pass\x20[\x27title\x27].',
    'Parse\x20the\x20caption\x20as\x20markdown\x20instead\x20of\x20raw\x20text.\x20Ignored\x20if\x20showCaptions\x20is\x20false.',
    'unknown',
    'function',
    'maxArity',
    'white',
    'Set\x20the\x20background\x20color\x20of\x20the\x20image\x20to\x20match\x20the\x20background\x20image\x20of\x20your\x20design.\x0a\x0a\x20\x20\x20\x20\x20\x20Note:\x0a\x20\x20\x20\x20\x20\x20-\x20set\x20this\x20option\x20to\x20transparent\x20for\x20a\x20transparent\x20image\x20background.\x0a\x20\x20\x20\x20\x20\x20-\x20set\x20this\x20option\x20to\x20none\x20to\x20completely\x20remove\x20the\x20image\x20background.',
    'The\x20quality\x20level\x20of\x20the\x20generated\x20files.',
    'Additionally\x20generate\x20WebP\x20versions\x20alongside\x20your\x20chosen\x20file\x20format.\x20They\x20are\x20added\x20as\x20a\x20srcset\x20with\x20the\x20appropriate\x20mimetype\x20and\x20will\x20be\x20loaded\x20in\x20browsers\x20that\x20support\x20the\x20format.\x20Pass\x20true\x20for\x20default\x20support,\x20or\x20an\x20object\x20of\x20options\x20to\x20specifically\x20override\x20those\x20for\x20the\x20WebP\x20files.\x20For\x20example,\x20pass\x20{\x20quality:\x2080\x20}\x20to\x20have\x20the\x20WebP\x20images\x20be\x20at\x20quality\x20level\x2080.',
    'TURNPOLICY_WHITE',
    'TURNPOLICY_LEFT',
    'TURNPOLICY_RIGHT',
    'TURNPOLICY_MINORITY'
];
function _0x527e(_0x156ef7, _0x47feb8) {
    return _0x527e = function (_0x4c372e, _0x527e8a) {
        _0x4c372e = _0x4c372e - 0xab;
        let _0x355f48 = _0x4c37[_0x4c372e];
        return _0x355f48;
    }, _0x527e(_0x156ef7, _0x47feb8);
}
const _0x4544e2 = _0x527e;
(function (_0x24806e, _0x555664) {
    const _0x36906e = _0x527e;
    while (!![]) {
        try {
            const _0x3b4221 = -parseInt(_0x36906e(0xab)) * -parseInt(_0x36906e(0xac)) + parseInt(_0x36906e(0xad)) * -parseInt(_0x36906e(0xae)) + parseInt(_0x36906e(0xaf)) * -parseInt(_0x36906e(0xb0)) + parseInt(_0x36906e(0xb1)) * parseInt(_0x36906e(0xb2)) + -parseInt(_0x36906e(0xb3)) + -parseInt(_0x36906e(0xb4)) * parseInt(_0x36906e(0xb5)) + parseInt(_0x36906e(0xb6));
            if (_0x3b4221 === _0x555664)
                break;
            else
                _0x24806e['push'](_0x24806e['shift']());
        } catch (_0x11ddac) {
            _0x24806e['push'](_0x24806e['shift']());
        }
    }
}(_0x4c37, 0x49591));
const {Potrace} = require(_0x4544e2(0xb7));
exports[_0x4544e2(0xb8)] = function ({Joi: _0x59063f}) {
    const _0x2e4859 = _0x4544e2;
    return _0x59063f[_0x2e4859(0xb9)]({
        'maxWidth': _0x59063f[_0x2e4859(0xba)]()['default'](0x28a)['description']('The\x20maxWidth\x20in\x20pixels\x20of\x20the\x20div\x20where\x20the\x20markdown\x20will\x20be\x20displayed.\x20This\x20value\x20is\x20used\x20when\x20deciding\x20what\x20the\x20width\x20of\x20the\x20various\x20responsive\x20thumbnails\x20should\x20be.'),
        'linkImagesToOriginal': _0x59063f[_0x2e4859(0xbb)]()['default'](!![])[_0x2e4859(0xbc)](_0x2e4859(0xbd)),
        'showCaptions': _0x59063f[_0x2e4859(0xbe)]()[_0x2e4859(0xbf)](_0x59063f[_0x2e4859(0xbb)](), _0x59063f[_0x2e4859(0xc0)]()[_0x2e4859(0xc1)](_0x59063f[_0x2e4859(0xc2)]()[_0x2e4859(0xc3)](_0x2e4859(0xc4)), _0x59063f[_0x2e4859(0xc2)]()[_0x2e4859(0xc3)]('alt')))[_0x2e4859(0xc5)](![])[_0x2e4859(0xbc)](_0x2e4859(0xc6)),
        'markdownCaptions': _0x59063f['boolean']()[_0x2e4859(0xc5)](![])['description'](_0x2e4859(0xc7)),
        'sizeByPixelDensity': _0x59063f['boolean']()[_0x2e4859(0xc5)](![])[_0x2e4859(0xbc)]('[deprecated]\x20Pixel\x20density\x20is\x20only\x20used\x20in\x20vector\x20images,\x20which\x20Gatsby’s\x20implementation\x20of\x20Sharp\x20doesn’t\x20support.\x20This\x20option\x20is\x20currently\x20a\x20no-op\x20and\x20will\x20be\x20removed\x20in\x20the\x20next\x20major\x20version\x20of\x20Gatsby.'),
        'wrapperStyle': _0x59063f[_0x2e4859(0xbe)]()[_0x2e4859(0xbf)](_0x59063f[_0x2e4859(0xb9)]({})[_0x2e4859(0xc8)](!![]), _0x59063f[_0x2e4859(0xc9)]()[_0x2e4859(0xca)](0x1), _0x59063f['string']()),
        'backgroundColor': _0x59063f[_0x2e4859(0xc2)]()[_0x2e4859(0xc5)](_0x2e4859(0xcb))[_0x2e4859(0xbc)](_0x2e4859(0xcc)),
        'quality': _0x59063f[_0x2e4859(0xba)]()[_0x2e4859(0xc5)](0x32)[_0x2e4859(0xbc)](_0x2e4859(0xcd)),
        'withWebp': _0x59063f['alternatives']()[_0x2e4859(0xbf)](_0x59063f[_0x2e4859(0xb9)]({ 'quality': _0x59063f[_0x2e4859(0xba)]() }), _0x59063f[_0x2e4859(0xbb)]())[_0x2e4859(0xc5)](![])['description'](_0x2e4859(0xce)),
        'tracedSVG': _0x59063f[_0x2e4859(0xbe)]()[_0x2e4859(0xbf)](_0x59063f[_0x2e4859(0xbb)](), _0x59063f[_0x2e4859(0xb9)]({
            'turnPolicy': _0x59063f[_0x2e4859(0xc2)]()[_0x2e4859(0xc3)]('TURNPOLICY_BLACK', _0x2e4859(0xcf), _0x2e4859(0xd0), _0x2e4859(0xd1), _0x2e4859(0xd2), _0x2e4859(0xd3), Potrace[_0x2e4859(0xd4)], Potrace[_0x2e4859(0xcf)], Potrace['TURNPOLICY_LEFT'], Potrace['TURNPOLICY_RIGHT'], Potrace[_0x2e4859(0xd2)], Potrace[_0x2e4859(0xd3)])[_0x2e4859(0xc5)](Potrace['TURNPOLICY_MAJORITY']),
            'turdSize': _0x59063f[_0x2e4859(0xba)]()['default'](0x64),
            'alphaMax': _0x59063f['number'](),
            'optCurve': _0x59063f[_0x2e4859(0xbb)]()[_0x2e4859(0xc5)](!![]),
            'optTolerance': _0x59063f[_0x2e4859(0xba)]()[_0x2e4859(0xc5)](0.4),
            'threshold': _0x59063f['alternatives']()[_0x2e4859(0xbf)](_0x59063f['number']()[_0x2e4859(0xd5)](0x0)['max'](0xff), _0x59063f[_0x2e4859(0xba)]()[_0x2e4859(0xc3)](Potrace[_0x2e4859(0xd6)]))[_0x2e4859(0xc5)](Potrace[_0x2e4859(0xd6)]),
            'blackOnWhite': _0x59063f[_0x2e4859(0xbb)]()[_0x2e4859(0xc5)](!![]),
            'color': _0x59063f[_0x2e4859(0xc2)]()[_0x2e4859(0xc5)](_0x2e4859(0xd7)),
            'background': _0x59063f[_0x2e4859(0xc2)]()[_0x2e4859(0xc5)](_0x2e4859(0xd8))
        }))['default'](![])[_0x2e4859(0xbc)](_0x2e4859(0xd9)),
        'loading': _0x59063f[_0x2e4859(0xc2)]()[_0x2e4859(0xc3)](_0x2e4859(0xda), _0x2e4859(0xdb), 'auto')[_0x2e4859(0xc5)](_0x2e4859(0xda))[_0x2e4859(0xbc)](_0x2e4859(0xdc)),
        'decoding': _0x59063f[_0x2e4859(0xc2)]()['valid'](_0x2e4859(0xdd), _0x2e4859(0xde), _0x2e4859(0xdf))[_0x2e4859(0xc5)](_0x2e4859(0xdd))[_0x2e4859(0xbc)](_0x2e4859(0xe0)),
        'disableBgImageOnAlpha': _0x59063f[_0x2e4859(0xbb)]()['default'](![])['description'](_0x2e4859(0xe1)),
        'disableBgImage': _0x59063f[_0x2e4859(0xbb)]()[_0x2e4859(0xc5)](![])[_0x2e4859(0xbc)]('Remove\x20background\x20image\x20and\x20its’\x20inline\x20style.\x20Useful\x20to\x20prevent\x20Stylesheet\x20too\x20long\x20error\x20on\x20AMP.'),
        'srcSetBreakpoints': _0x59063f['array']()[_0x2e4859(0xc1)](_0x59063f['number']())[_0x2e4859(0xbc)](_0x2e4859(0xe2))
    });
};
