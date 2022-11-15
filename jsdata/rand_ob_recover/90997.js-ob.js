const {Potrace} = require(_0x15174e(456));
exports['pluginOptionsSchema'] = function ({Joi: _0xb0b509}) {
    const _0x1c5dfa = _0x15174e;
    return _0xb0b509[_0x1c5dfa(457)]({
        'maxWidth': _0xb0b509[_0x1c5dfa(458)]()[_0x1c5dfa(459)](-7994 + 5062 + -6 * -597)[_0x1c5dfa(460)](_0x1c5dfa(461)),
        'linkImagesToOriginal': _0xb0b509['boolean']()[_0x1c5dfa(459)](!![])[_0x1c5dfa(460)](_0x1c5dfa(462)),
        'showCaptions': _0xb0b509[_0x1c5dfa(463)]()['try'](_0xb0b509['boolean'](), _0xb0b509[_0x1c5dfa(464)]()[_0x1c5dfa(465)](_0xb0b509['string']()[_0x1c5dfa(466)]('title'), _0xb0b509[_0x1c5dfa(467)]()[_0x1c5dfa(466)](_0x1c5dfa(468))))[_0x1c5dfa(459)](![])[_0x1c5dfa(460)](_0x1c5dfa(469)),
        'markdownCaptions': _0xb0b509[_0x1c5dfa(470)]()[_0x1c5dfa(459)](![])[_0x1c5dfa(460)](_0x1c5dfa(471)),
        'sizeByPixelDensity': _0xb0b509['boolean']()[_0x1c5dfa(459)](![])[_0x1c5dfa(460)](_0x1c5dfa(472)),
        'wrapperStyle': _0xb0b509['alternatives']()[_0x1c5dfa(473)](_0xb0b509[_0x1c5dfa(457)]({})[_0x1c5dfa(474)](!![]), _0xb0b509['function']()[_0x1c5dfa(475)](183 + 3139 + -3321), _0xb0b509[_0x1c5dfa(467)]()),
        'backgroundColor': _0xb0b509[_0x1c5dfa(467)]()['default']('white')[_0x1c5dfa(460)](_0x1c5dfa(476)),
        'quality': _0xb0b509[_0x1c5dfa(458)]()[_0x1c5dfa(459)](3181 * -1 + -456 + 1 * 3687)['description']('The quality level of the generated files.'),
        'withWebp': _0xb0b509[_0x1c5dfa(463)]()[_0x1c5dfa(473)](_0xb0b509[_0x1c5dfa(457)]({ 'quality': _0xb0b509[_0x1c5dfa(458)]() }), _0xb0b509[_0x1c5dfa(470)]())[_0x1c5dfa(459)](![])[_0x1c5dfa(460)](_0x1c5dfa(477)),
        'tracedSVG': _0xb0b509[_0x1c5dfa(463)]()[_0x1c5dfa(473)](_0xb0b509[_0x1c5dfa(470)](), _0xb0b509[_0x1c5dfa(457)]({
            'turnPolicy': _0xb0b509[_0x1c5dfa(467)]()['valid'](_0x1c5dfa(478), 'TURNPOLICY_WHITE', 'TURNPOLICY_LEFT', _0x1c5dfa(479), _0x1c5dfa(480), _0x1c5dfa(481), Potrace[_0x1c5dfa(478)], Potrace[_0x1c5dfa(482)], Potrace[_0x1c5dfa(483)], Potrace[_0x1c5dfa(479)], Potrace['TURNPOLICY_MINORITY'], Potrace['TURNPOLICY_MAJORITY'])['default'](Potrace[_0x1c5dfa(481)]),
            'turdSize': _0xb0b509[_0x1c5dfa(458)]()[_0x1c5dfa(459)](6280 + -6 * -1279 + -13854),
            'alphaMax': _0xb0b509[_0x1c5dfa(458)](),
            'optCurve': _0xb0b509['boolean']()[_0x1c5dfa(459)](!![]),
            'optTolerance': _0xb0b509[_0x1c5dfa(458)]()[_0x1c5dfa(459)](-4966 + -1163 * 5 + 1 * 10781 + 0.4),
            'threshold': _0xb0b509[_0x1c5dfa(463)]()[_0x1c5dfa(473)](_0xb0b509[_0x1c5dfa(458)]()[_0x1c5dfa(484)](8624 + 9595 + -1 * 18219)[_0x1c5dfa(485)](8159 + 9610 * -1 + 1706), _0xb0b509['number']()[_0x1c5dfa(466)](Potrace[_0x1c5dfa(486)]))[_0x1c5dfa(459)](Potrace[_0x1c5dfa(486)]),
            'blackOnWhite': _0xb0b509['boolean']()[_0x1c5dfa(459)](!![]),
            'color': _0xb0b509['string']()[_0x1c5dfa(459)](_0x1c5dfa(487)),
            'background': _0xb0b509[_0x1c5dfa(467)]()['default'](_0x1c5dfa(488))
        }))['default'](![])['description'](_0x1c5dfa(489)),
        'loading': _0xb0b509[_0x1c5dfa(467)]()[_0x1c5dfa(466)](_0x1c5dfa(490), _0x1c5dfa(491), _0x1c5dfa(492))['default']('lazy')[_0x1c5dfa(460)](_0x1c5dfa(493)),
        'decoding': _0xb0b509[_0x1c5dfa(467)]()[_0x1c5dfa(466)](_0x1c5dfa(494), _0x1c5dfa(495), _0x1c5dfa(492))['default'](_0x1c5dfa(494))[_0x1c5dfa(460)](_0x1c5dfa(496)),
        'disableBgImageOnAlpha': _0xb0b509[_0x1c5dfa(470)]()['default'](![])['description'](_0x1c5dfa(497)),
        'disableBgImage': _0xb0b509['boolean']()['default'](![])[_0x1c5dfa(460)]('Remove background image and its\u2019 inline style. Useful to prevent Stylesheet too long error on AMP.'),
        'srcSetBreakpoints': _0xb0b509[_0x1c5dfa(464)]()['items'](_0xb0b509[_0x1c5dfa(458)]())['description']('By default gatsby generates 0.25x, 0.5x, 1x, 1.5x, 2x, and 3x sizes of thumbnails. If you want more control over which sizes are output you can use the srcSetBreakpoints parameter. For example, if you want images that are 200, 340, 520, and 890 wide you can add srcSetBreakpoints: [ 200, 340, 520, 890 ] as a parameter. You will also get maxWidth as a breakpoint (which is 650 by default), so you will actually get [ 200, 340, 520, 650, 890 ] as breakpoints.')
    });
};