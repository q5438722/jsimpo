const _0x408f = ['alternatives', 'array', 'items', 'valid', 'string', 'alt', 'Add a caption to each image with the contents of the title attribute, when this is not empty. If the title attribute is empty but the alt attribute is not, it will be used instead. Set this option to true to enable this behavior. You can also pass an array instead to specify which value should be used for the caption \u2014 for example, passing [\'alt\', \'title\'] would use the alt attribute first, and then the title. When this is set to true it is the same as passing [\'title\', \'alt\']. If you just want to use the title (and omit captions for images that have alt attributes but no title), pass [\'title\'].', 'boolean', 'Parse the caption as markdown instead of raw text. Ignored if showCaptions is false.', '[deprecated] Pixel density is only used in vector images, which Gatsby\u2019s implementation of Sharp doesn\u2019t support. This option is currently a no-op and will be removed in the next major version of Gatsby.', 'try', 'unknown', 'maxArity', 'Set the background color of the image to match the background image of your design.\n\n      Note:\n      - set this option to transparent for a transparent image background.\n      - set this option to none to completely remove the image background.', 'Additionally generate WebP versions alongside your chosen file format. They are added as a srcset with the appropriate mimetype and will be loaded in browsers that support the format. Pass true for default support, or an object of options to specifically override those for the WebP files. For example, pass { quality: 80 } to have the WebP images be at quality level 80.', 'TURNPOLICY_BLACK', 'TURNPOLICY_RIGHT', 'TURNPOLICY_MINORITY', 'TURNPOLICY_MAJORITY', 'TURNPOLICY_WHITE', 'TURNPOLICY_LEFT', 'min', 'max', 'THRESHOLD_AUTO', 'lightgray', 'transparent', 'Use traced SVGs for placeholder images instead of the \u201Cblur up\u201D effect. Pass true for traced SVGs with the default settings (seen here), or an object of options to override the default. For example, pass { color: "#F00", turnPolicy: "TURNPOLICY_MAJORITY" } to change the color of the trace to red and the turn policy to TURNPOLICY_MAJORITY. See node-potrace parameter documentation for a full listing and explanation of the available options.', 'lazy', 'eager', 'auto', 'Set the browser\u2019s native lazy loading attribute. One of lazy, eager or auto.', 'async', 'sync', 'Set the browser\u2019s native decoding attribute. One of async, sync or auto.', 'Images containing transparent pixels around the edges results in images with blurry edges. As a result, these images do not work well with the \u201Cblur up\u201D technique used in this plugin. As a workaround to disable background images with blurry edges on images containing transparent pixels, enable this setting.', '216681JFYUSw', '11EgtUja', '15487rKZGHj', '116969zIoWNS', '2qjXnwf', '71582LSkdle', '242587vDHfoK', '39548hQyWuO', '1ehgulE', '175396ePHrHS', '5Xumlmm', 'potrace', 'object', 'number', 'default', 'description', 'The maxWidth in pixels of the div where the markdown will be displayed. This value is used when deciding what the width of the various responsive thumbnails should be.', 'Add a link to each image to the original image. Sometimes people want to see a full-sized version of an image e.g. to see extra detail on a part of the image and this is a convenient and common pattern for enabling this. Set this option to false to disable this behavior.'];

function _0x45d0(_0x247955, _0x332b51) {
    return _0x45d0 = function (_0xde2d6f, _0x325b82) {
        _0xde2d6f = _0xde2d6f - 445;
        const _0x1d29bb = _0x408f[_0xde2d6f];

        return _0x1d29bb;
    }, _0x45d0(_0x247955, _0x332b51);
}
const _0x15174e = _0x45d0;

(function (_0x21f41b, _0x2de4b0) {
    const _0x119323 = _0x45d0;

    while (true) {
        try {
            const _0x433f94 = -parseInt(_0x119323(0x1bd)) + parseInt(_0x119323(0x1be)) * -parseInt(_0x119323(0x1bf)) + parseInt(_0x119323(0x1c0)) * -parseInt(_0x119323(0x1c1)) + parseInt(_0x119323(0x1c2)) + -parseInt(_0x119323(0x1c3)) + parseInt(_0x119323(0x1c4)) * parseInt(_0x119323(0x1c5)) + -parseInt(_0x119323(0x1c6)) * -parseInt(_0x119323(0x1c7));

            if (_0x433f94 === _0x2de4b0) break;else _0x21f41b.push(_0x21f41b.shift());
        } catch (_0x33747f) {
            _0x21f41b.push(_0x21f41b.shift());
        }
    }
})(_0x408f, 124547);

var { Potrace } = require(_0x15174e(0x1c8));

exports['pluginOptionsSchema'] = function ({ Joi: _0xb0b509 }) {
    const _0x1c5dfa = _0x15174e;

    return _0xb0b509[_0x1c5dfa(0x1c9)]({
        'maxWidth': _0xb0b509[_0x1c5dfa(0x1ca)]()[_0x1c5dfa(0x1cb)](650)[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1cd)),
        'linkImagesToOriginal': _0xb0b509.boolean()[_0x1c5dfa(0x1cb)](true)[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1ce)),
        'showCaptions': _0xb0b509[_0x1c5dfa(0x1cf)]().try(_0xb0b509.boolean(), _0xb0b509[_0x1c5dfa(0x1d0)]()[_0x1c5dfa(0x1d1)](_0xb0b509.string()[_0x1c5dfa(0x1d2)]('title'), _0xb0b509[_0x1c5dfa(0x1d3)]()[_0x1c5dfa(0x1d2)](_0x1c5dfa(0x1d4))))[_0x1c5dfa(0x1cb)](false)[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1d5)),
        'markdownCaptions': _0xb0b509[_0x1c5dfa(0x1d6)]()[_0x1c5dfa(0x1cb)](false)[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1d7)),
        'sizeByPixelDensity': _0xb0b509.boolean()[_0x1c5dfa(0x1cb)](false)[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1d8)),
        'wrapperStyle': _0xb0b509.alternatives()[_0x1c5dfa(0x1d9)](_0xb0b509[_0x1c5dfa(0x1c9)]({})[_0x1c5dfa(0x1da)](true), _0xb0b509.function()[_0x1c5dfa(0x1db)](1), _0xb0b509[_0x1c5dfa(0x1d3)]()),
        'backgroundColor': _0xb0b509[_0x1c5dfa(0x1d3)]().default('white')[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1dc)),
        'quality': _0xb0b509[_0x1c5dfa(0x1ca)]()[_0x1c5dfa(0x1cb)](50).description('The quality level of the generated files.'),
        'withWebp': _0xb0b509[_0x1c5dfa(0x1cf)]()[_0x1c5dfa(0x1d9)](_0xb0b509[_0x1c5dfa(0x1c9)]({ 'quality': _0xb0b509[_0x1c5dfa(0x1ca)]() }), _0xb0b509[_0x1c5dfa(0x1d6)]())[_0x1c5dfa(0x1cb)](false)[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1dd)),
        'tracedSVG': _0xb0b509[_0x1c5dfa(0x1cf)]()[_0x1c5dfa(0x1d9)](_0xb0b509[_0x1c5dfa(0x1d6)](), _0xb0b509[_0x1c5dfa(0x1c9)]({
            'turnPolicy': _0xb0b509[_0x1c5dfa(0x1d3)]().valid(_0x1c5dfa(0x1de), 'TURNPOLICY_WHITE', 'TURNPOLICY_LEFT', _0x1c5dfa(0x1df), _0x1c5dfa(0x1e0), _0x1c5dfa(0x1e1), Potrace[_0x1c5dfa(0x1de)], Potrace[_0x1c5dfa(0x1e2)], Potrace[_0x1c5dfa(0x1e3)], Potrace[_0x1c5dfa(0x1df)], Potrace.TURNPOLICY_MINORITY, Potrace.TURNPOLICY_MAJORITY).default(Potrace[_0x1c5dfa(0x1e1)]),
            'turdSize': _0xb0b509[_0x1c5dfa(0x1ca)]()[_0x1c5dfa(0x1cb)](100),
            'alphaMax': _0xb0b509[_0x1c5dfa(0x1ca)](),
            'optCurve': _0xb0b509.boolean()[_0x1c5dfa(0x1cb)](true),
            'optTolerance': _0xb0b509[_0x1c5dfa(0x1ca)]()[_0x1c5dfa(0x1cb)](0.4),
            'threshold': _0xb0b509[_0x1c5dfa(0x1cf)]()[_0x1c5dfa(0x1d9)](_0xb0b509[_0x1c5dfa(0x1ca)]()[_0x1c5dfa(0x1e4)](0)[_0x1c5dfa(0x1e5)](255), _0xb0b509.number()[_0x1c5dfa(0x1d2)](Potrace[_0x1c5dfa(0x1e6)]))[_0x1c5dfa(0x1cb)](Potrace[_0x1c5dfa(0x1e6)]),
            'blackOnWhite': _0xb0b509.boolean()[_0x1c5dfa(0x1cb)](true),
            'color': _0xb0b509.string()[_0x1c5dfa(0x1cb)](_0x1c5dfa(0x1e7)),
            'background': _0xb0b509[_0x1c5dfa(0x1d3)]().default(_0x1c5dfa(0x1e8))
        })).default(false).description(_0x1c5dfa(0x1e9)),
        'loading': _0xb0b509[_0x1c5dfa(0x1d3)]()[_0x1c5dfa(0x1d2)](_0x1c5dfa(0x1ea), _0x1c5dfa(0x1eb), _0x1c5dfa(0x1ec)).default('lazy')[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1ed)),
        'decoding': _0xb0b509[_0x1c5dfa(0x1d3)]()[_0x1c5dfa(0x1d2)](_0x1c5dfa(0x1ee), _0x1c5dfa(0x1ef), _0x1c5dfa(0x1ec)).default(_0x1c5dfa(0x1ee))[_0x1c5dfa(0x1cc)](_0x1c5dfa(0x1f0)),
        'disableBgImageOnAlpha': _0xb0b509[_0x1c5dfa(0x1d6)]().default(false).description(_0x1c5dfa(0x1f1)),
        'disableBgImage': _0xb0b509.boolean().default(false)[_0x1c5dfa(0x1cc)]('Remove background image and its\u2019 inline style. Useful to prevent Stylesheet too long error on AMP.'),
        'srcSetBreakpoints': _0xb0b509[_0x1c5dfa(0x1d0)]().items(_0xb0b509[_0x1c5dfa(0x1ca)]()).description('By default gatsby generates 0.25x, 0.5x, 1x, 1.5x, 2x, and 3x sizes of thumbnails. If you want more control over which sizes are output you can use the srcSetBreakpoints parameter. For example, if you want images that are 200, 340, 520, and 890 wide you can add srcSetBreakpoints: [ 200, 340, 520, 890 ] as a parameter. You will also get maxWidth as a breakpoint (which is 650 by default), so you will actually get [ 200, 340, 520, 650, 890 ] as breakpoints.')
    });
};
