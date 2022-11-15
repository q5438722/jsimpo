const _0x4239 = ['sync', 'Set the browser\u2019s native decoding attribute. One of async, sync or auto.', 'Images containing transparent pixels around the edges results in images with blurry edges. As a result, these images do not work well with the \u201Cblur up\u201D technique used in this plugin. As a workaround to disable background images with blurry edges on images containing transparent pixels, enable this setting.', 'array', '49492qLSPSL', '391TaJfip', '1063omqpVp', '149585DnbaTa', '72438AsWteC', '1DKuaQk', '576653AYZQDz', '8310HKHyio', '89dnrSxa', '659166drYLUC', 'pluginOptionsSchema', 'object', 'number', 'default', 'The maxWidth in pixels of the div where the markdown will be displayed. This value is used when deciding what the width of the various responsive thumbnails should be.', 'alternatives', 'try', 'items', 'string', 'valid', 'alt', 'description', 'Parse the caption as markdown instead of raw text. Ignored if showCaptions is false.', '[deprecated] Pixel density is only used in vector images, which Gatsby\u2019s implementation of Sharp doesn\u2019t support. This option is currently a no-op and will be removed in the next major version of Gatsby.', 'white', 'Set the background color of the image to match the background image of your design.\n\n      Note:\n      - set this option to transparent for a transparent image background.\n      - set this option to none to completely remove the image background.', 'The quality level of the generated files.', 'boolean', 'Additionally generate WebP versions alongside your chosen file format. They are added as a srcset with the appropriate mimetype and will be loaded in browsers that support the format. Pass true for default support, or an object of options to specifically override those for the WebP files. For example, pass { quality: 80 } to have the WebP images be at quality level 80.', 'TURNPOLICY_BLACK', 'TURNPOLICY_LEFT', 'TURNPOLICY_MAJORITY', 'TURNPOLICY_WHITE', 'TURNPOLICY_RIGHT', 'TURNPOLICY_MINORITY', 'min', 'max', 'THRESHOLD_AUTO', 'lightgray', 'Use traced SVGs for placeholder images instead of the \u201Cblur up\u201D effect. Pass true for traced SVGs with the default settings (seen here), or an object of options to override the default. For example, pass { color: "#F00", turnPolicy: "TURNPOLICY_MAJORITY" } to change the color of the trace to red and the turn policy to TURNPOLICY_MAJORITY. See node-potrace parameter documentation for a full listing and explanation of the available options.', 'lazy', 'eager', 'auto', 'Set the browser\u2019s native lazy loading attribute. One of lazy, eager or auto.', 'async'];
const _0x1ab182 = _0x4a27;

(function (_0x536761, _0x3f70df) {
    const _0x29b6f7 = _0x4a27;

    while (true) {
        try {
            const _0x8e7f89 = -parseInt(_0x29b6f7(0x14f)) + -parseInt(_0x29b6f7(0x150)) * parseInt(_0x29b6f7(0x151)) + parseInt(_0x29b6f7(0x152)) + parseInt(_0x29b6f7(0x153)) * -parseInt(_0x29b6f7(0x154)) + -parseInt(_0x29b6f7(0x155)) + -parseInt(_0x29b6f7(0x156)) * -parseInt(_0x29b6f7(0x157)) + parseInt(_0x29b6f7(0x158));

            if (_0x8e7f89 === _0x3f70df) break;else _0x536761.push(_0x536761.shift());
        } catch (_0x4e7442) {
            _0x536761.push(_0x536761.shift());
        }
    }
})(_0x4239, 434125);
function _0x4a27(_0x499d46, _0x42d5ab) {
    return _0x4a27 = function (_0x352d7d, _0x51ca91) {
        _0x352d7d = _0x352d7d - 335;
        const _0x3c94fa = _0x4239[_0x352d7d];

        return _0x3c94fa;
    }, _0x4a27(_0x499d46, _0x42d5ab);
}

var { Potrace } = require('potrace');

exports[_0x1ab182(0x159)] = function ({ Joi: _0x6e21e4 }) {
    const _0x4814bc = _0x1ab182;

    return _0x6e21e4[_0x4814bc(0x15a)]({
        'maxWidth': _0x6e21e4[_0x4814bc(0x15b)]()[_0x4814bc(0x15c)](650).description(_0x4814bc(0x15d)),
        'linkImagesToOriginal': _0x6e21e4.boolean()[_0x4814bc(0x15c)](true).description('Add a link to each image to the original image. Sometimes people want to see a full-sized version of an image e.g. to see extra detail on a part of the image and this is a convenient and common pattern for enabling this. Set this option to false to disable this behavior.'),
        'showCaptions': _0x6e21e4[_0x4814bc(0x15e)]()[_0x4814bc(0x15f)](_0x6e21e4.boolean(), _0x6e21e4.array()[_0x4814bc(0x160)](_0x6e21e4[_0x4814bc(0x161)]()[_0x4814bc(0x162)]('title'), _0x6e21e4.string().valid(_0x4814bc(0x163))))[_0x4814bc(0x15c)](false)[_0x4814bc(0x164)]('Add a caption to each image with the contents of the title attribute, when this is not empty. If the title attribute is empty but the alt attribute is not, it will be used instead. Set this option to true to enable this behavior. You can also pass an array instead to specify which value should be used for the caption \u2014 for example, passing [\'alt\', \'title\'] would use the alt attribute first, and then the title. When this is set to true it is the same as passing [\'title\', \'alt\']. If you just want to use the title (and omit captions for images that have alt attributes but no title), pass [\'title\'].'),
        'markdownCaptions': _0x6e21e4.boolean().default(false)[_0x4814bc(0x164)](_0x4814bc(0x165)),
        'sizeByPixelDensity': _0x6e21e4.boolean()[_0x4814bc(0x15c)](false)[_0x4814bc(0x164)](_0x4814bc(0x166)),
        'wrapperStyle': _0x6e21e4[_0x4814bc(0x15e)]().try(_0x6e21e4[_0x4814bc(0x15a)]({}).unknown(true), _0x6e21e4.function().maxArity(1), _0x6e21e4[_0x4814bc(0x161)]()),
        'backgroundColor': _0x6e21e4[_0x4814bc(0x161)]().default(_0x4814bc(0x167)).description(_0x4814bc(0x168)),
        'quality': _0x6e21e4[_0x4814bc(0x15b)]()[_0x4814bc(0x15c)](50)[_0x4814bc(0x164)](_0x4814bc(0x169)),
        'withWebp': _0x6e21e4[_0x4814bc(0x15e)]()[_0x4814bc(0x15f)](_0x6e21e4[_0x4814bc(0x15a)]({ 'quality': _0x6e21e4[_0x4814bc(0x15b)]() }), _0x6e21e4[_0x4814bc(0x16a)]())[_0x4814bc(0x15c)](false)[_0x4814bc(0x164)](_0x4814bc(0x16b)),
        'tracedSVG': _0x6e21e4[_0x4814bc(0x15e)]()[_0x4814bc(0x15f)](_0x6e21e4.boolean(), _0x6e21e4.object({
            'turnPolicy': _0x6e21e4[_0x4814bc(0x161)]()[_0x4814bc(0x162)](_0x4814bc(0x16c), 'TURNPOLICY_WHITE', _0x4814bc(0x16d), 'TURNPOLICY_RIGHT', 'TURNPOLICY_MINORITY', _0x4814bc(0x16e), Potrace[_0x4814bc(0x16c)], Potrace[_0x4814bc(0x16f)], Potrace[_0x4814bc(0x16d)], Potrace[_0x4814bc(0x170)], Potrace[_0x4814bc(0x171)], Potrace[_0x4814bc(0x16e)])[_0x4814bc(0x15c)](Potrace[_0x4814bc(0x16e)]),
            'turdSize': _0x6e21e4[_0x4814bc(0x15b)]()[_0x4814bc(0x15c)](100),
            'alphaMax': _0x6e21e4.number(),
            'optCurve': _0x6e21e4[_0x4814bc(0x16a)]()[_0x4814bc(0x15c)](true),
            'optTolerance': _0x6e21e4.number()[_0x4814bc(0x15c)](0.4),
            'threshold': _0x6e21e4.alternatives()[_0x4814bc(0x15f)](_0x6e21e4.number()[_0x4814bc(0x172)](0)[_0x4814bc(0x173)](255), _0x6e21e4.number()[_0x4814bc(0x162)](Potrace[_0x4814bc(0x174)]))[_0x4814bc(0x15c)](Potrace[_0x4814bc(0x174)]),
            'blackOnWhite': _0x6e21e4[_0x4814bc(0x16a)]().default(true),
            'color': _0x6e21e4[_0x4814bc(0x161)]()[_0x4814bc(0x15c)](_0x4814bc(0x175)),
            'background': _0x6e21e4.string()[_0x4814bc(0x15c)]('transparent')
        }))[_0x4814bc(0x15c)](false)[_0x4814bc(0x164)](_0x4814bc(0x176)),
        'loading': _0x6e21e4[_0x4814bc(0x161)]()[_0x4814bc(0x162)](_0x4814bc(0x177), _0x4814bc(0x178), _0x4814bc(0x179))[_0x4814bc(0x15c)]('lazy').description(_0x4814bc(0x17a)),
        'decoding': _0x6e21e4[_0x4814bc(0x161)]()[_0x4814bc(0x162)](_0x4814bc(0x17b), _0x4814bc(0x17c), _0x4814bc(0x179))[_0x4814bc(0x15c)](_0x4814bc(0x17b))[_0x4814bc(0x164)](_0x4814bc(0x17d)),
        'disableBgImageOnAlpha': _0x6e21e4[_0x4814bc(0x16a)]()[_0x4814bc(0x15c)](false).description(_0x4814bc(0x17e)),
        'disableBgImage': _0x6e21e4.boolean()[_0x4814bc(0x15c)](false)[_0x4814bc(0x164)]('Remove background image and its\u2019 inline style. Useful to prevent Stylesheet too long error on AMP.'),
        'srcSetBreakpoints': _0x6e21e4[_0x4814bc(0x17f)]()[_0x4814bc(0x160)](_0x6e21e4[_0x4814bc(0x15b)]())[_0x4814bc(0x164)]('By default gatsby generates 0.25x, 0.5x, 1x, 1.5x, 2x, and 3x sizes of thumbnails. If you want more control over which sizes are output you can use the srcSetBreakpoints parameter. For example, if you want images that are 200, 340, 520, and 890 wide you can add srcSetBreakpoints: [ 200, 340, 520, 890 ] as a parameter. You will also get maxWidth as a breakpoint (which is 650 by default), so you will actually get [ 200, 340, 520, 650, 890 ] as breakpoints.')
    });
};
