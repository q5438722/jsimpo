const {Potrace} = require(_0x4544e2(183));
exports[_0x4544e2(184)] = function ({Joi: _0x59063f}) {
    const _0x2e4859 = _0x4544e2;
    return _0x59063f[_0x2e4859(185)]({
        'maxWidth': _0x59063f[_0x2e4859(186)]()['default'](650)['description']('The maxWidth in pixels of the div where the markdown will be displayed. This value is used when deciding what the width of the various responsive thumbnails should be.'),
        'linkImagesToOriginal': _0x59063f[_0x2e4859(187)]()['default'](!![])[_0x2e4859(188)](_0x2e4859(189)),
        'showCaptions': _0x59063f[_0x2e4859(190)]()[_0x2e4859(191)](_0x59063f[_0x2e4859(187)](), _0x59063f[_0x2e4859(192)]()[_0x2e4859(193)](_0x59063f[_0x2e4859(194)]()[_0x2e4859(195)](_0x2e4859(196)), _0x59063f[_0x2e4859(194)]()[_0x2e4859(195)]('alt')))[_0x2e4859(197)](![])[_0x2e4859(188)](_0x2e4859(198)),
        'markdownCaptions': _0x59063f['boolean']()[_0x2e4859(197)](![])['description'](_0x2e4859(199)),
        'sizeByPixelDensity': _0x59063f['boolean']()[_0x2e4859(197)](![])[_0x2e4859(188)]('[deprecated] Pixel density is only used in vector images, which Gatsby\u2019s implementation of Sharp doesn\u2019t support. This option is currently a no-op and will be removed in the next major version of Gatsby.'),
        'wrapperStyle': _0x59063f[_0x2e4859(190)]()[_0x2e4859(191)](_0x59063f[_0x2e4859(185)]({})[_0x2e4859(200)](!![]), _0x59063f[_0x2e4859(201)]()[_0x2e4859(202)](1), _0x59063f['string']()),
        'backgroundColor': _0x59063f[_0x2e4859(194)]()[_0x2e4859(197)](_0x2e4859(203))[_0x2e4859(188)](_0x2e4859(204)),
        'quality': _0x59063f[_0x2e4859(186)]()[_0x2e4859(197)](50)[_0x2e4859(188)](_0x2e4859(205)),
        'withWebp': _0x59063f['alternatives']()[_0x2e4859(191)](_0x59063f[_0x2e4859(185)]({ 'quality': _0x59063f[_0x2e4859(186)]() }), _0x59063f[_0x2e4859(187)]())[_0x2e4859(197)](![])['description'](_0x2e4859(206)),
        'tracedSVG': _0x59063f[_0x2e4859(190)]()[_0x2e4859(191)](_0x59063f[_0x2e4859(187)](), _0x59063f[_0x2e4859(185)]({
            'turnPolicy': _0x59063f[_0x2e4859(194)]()[_0x2e4859(195)]('TURNPOLICY_BLACK', _0x2e4859(207), _0x2e4859(208), _0x2e4859(209), _0x2e4859(210), _0x2e4859(211), Potrace[_0x2e4859(212)], Potrace[_0x2e4859(207)], Potrace['TURNPOLICY_LEFT'], Potrace['TURNPOLICY_RIGHT'], Potrace[_0x2e4859(210)], Potrace[_0x2e4859(211)])[_0x2e4859(197)](Potrace['TURNPOLICY_MAJORITY']),
            'turdSize': _0x59063f[_0x2e4859(186)]()['default'](100),
            'alphaMax': _0x59063f['number'](),
            'optCurve': _0x59063f[_0x2e4859(187)]()[_0x2e4859(197)](!![]),
            'optTolerance': _0x59063f[_0x2e4859(186)]()[_0x2e4859(197)](0.4),
            'threshold': _0x59063f['alternatives']()[_0x2e4859(191)](_0x59063f['number']()[_0x2e4859(213)](0)['max'](255), _0x59063f[_0x2e4859(186)]()[_0x2e4859(195)](Potrace[_0x2e4859(214)]))[_0x2e4859(197)](Potrace[_0x2e4859(214)]),
            'blackOnWhite': _0x59063f[_0x2e4859(187)]()[_0x2e4859(197)](!![]),
            'color': _0x59063f[_0x2e4859(194)]()[_0x2e4859(197)](_0x2e4859(215)),
            'background': _0x59063f[_0x2e4859(194)]()[_0x2e4859(197)](_0x2e4859(216))
        }))['default'](![])[_0x2e4859(188)](_0x2e4859(217)),
        'loading': _0x59063f[_0x2e4859(194)]()[_0x2e4859(195)](_0x2e4859(218), _0x2e4859(219), 'auto')[_0x2e4859(197)](_0x2e4859(218))[_0x2e4859(188)](_0x2e4859(220)),
        'decoding': _0x59063f[_0x2e4859(194)]()['valid'](_0x2e4859(221), _0x2e4859(222), _0x2e4859(223))[_0x2e4859(197)](_0x2e4859(221))[_0x2e4859(188)](_0x2e4859(224)),
        'disableBgImageOnAlpha': _0x59063f[_0x2e4859(187)]()['default'](![])['description'](_0x2e4859(225)),
        'disableBgImage': _0x59063f[_0x2e4859(187)]()[_0x2e4859(197)](![])[_0x2e4859(188)]('Remove background image and its\u2019 inline style. Useful to prevent Stylesheet too long error on AMP.'),
        'srcSetBreakpoints': _0x59063f['array']()[_0x2e4859(193)](_0x59063f['number']())[_0x2e4859(188)](_0x2e4859(226))
    });
};