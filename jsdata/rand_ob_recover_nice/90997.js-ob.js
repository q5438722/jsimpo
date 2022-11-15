'use strict';
const {
  Potrace : Potrace
} = require(_0x15174e(456));
exports["pluginOptionsSchema"] = function({
  Joi : randValueTable
}) {
  const _extends = _0x15174e;
  return randValueTable[_extends(457)]({
    "maxWidth" : randValueTable[_extends(458)]()[_extends(459)](-7994 + 5062 + -6 * -597)[_extends(460)](_extends(461)),
    "linkImagesToOriginal" : randValueTable["boolean"]()[_extends(459)](!![])[_extends(460)](_extends(462)),
    "showCaptions" : randValueTable[_extends(463)]()["try"](randValueTable["boolean"](), randValueTable[_extends(464)]()[_extends(465)](randValueTable["string"]()[_extends(466)]("title"), randValueTable[_extends(467)]()[_extends(466)](_extends(468))))[_extends(459)](![])[_extends(460)](_extends(469)),
    "markdownCaptions" : randValueTable[_extends(470)]()[_extends(459)](![])[_extends(460)](_extends(471)),
    "sizeByPixelDensity" : randValueTable["boolean"]()[_extends(459)](![])[_extends(460)](_extends(472)),
    "wrapperStyle" : randValueTable["alternatives"]()[_extends(473)](randValueTable[_extends(457)]({})[_extends(474)](!![]), randValueTable["function"]()[_extends(475)](183 + 3139 + -3321), randValueTable[_extends(467)]()),
    "backgroundColor" : randValueTable[_extends(467)]()["default"]("white")[_extends(460)](_extends(476)),
    "quality" : randValueTable[_extends(458)]()[_extends(459)](3181 * -1 + -456 + 1 * 3687)["description"]("The quality level of the generated files."),
    "withWebp" : randValueTable[_extends(463)]()[_extends(473)](randValueTable[_extends(457)]({
      "quality" : randValueTable[_extends(458)]()
    }), randValueTable[_extends(470)]())[_extends(459)](![])[_extends(460)](_extends(477)),
    "tracedSVG" : randValueTable[_extends(463)]()[_extends(473)](randValueTable[_extends(470)](), randValueTable[_extends(457)]({
      "turnPolicy" : randValueTable[_extends(467)]()["valid"](_extends(478), "TURNPOLICY_WHITE", "TURNPOLICY_LEFT", _extends(479), _extends(480), _extends(481), Potrace[_extends(478)], Potrace[_extends(482)], Potrace[_extends(483)], Potrace[_extends(479)], Potrace["TURNPOLICY_MINORITY"], Potrace["TURNPOLICY_MAJORITY"])["default"](Potrace[_extends(481)]),
      "turdSize" : randValueTable[_extends(458)]()[_extends(459)](6280 + -6 * -1279 + -13854),
      "alphaMax" : randValueTable[_extends(458)](),
      "optCurve" : randValueTable["boolean"]()[_extends(459)](!![]),
      "optTolerance" : randValueTable[_extends(458)]()[_extends(459)](-4966 + -1163 * 5 + 1 * 10781 + 0.4),
      "threshold" : randValueTable[_extends(463)]()[_extends(473)](randValueTable[_extends(458)]()[_extends(484)](8624 + 9595 + -1 * 18219)[_extends(485)](8159 + 9610 * -1 + 1706), randValueTable["number"]()[_extends(466)](Potrace[_extends(486)]))[_extends(459)](Potrace[_extends(486)]),
      "blackOnWhite" : randValueTable["boolean"]()[_extends(459)](!![]),
      "color" : randValueTable["string"]()[_extends(459)](_extends(487)),
      "background" : randValueTable[_extends(467)]()["default"](_extends(488))
    }))["default"](![])["description"](_extends(489)),
    "loading" : randValueTable[_extends(467)]()[_extends(466)](_extends(490), _extends(491), _extends(492))["default"]("lazy")[_extends(460)](_extends(493)),
    "decoding" : randValueTable[_extends(467)]()[_extends(466)](_extends(494), _extends(495), _extends(492))["default"](_extends(494))[_extends(460)](_extends(496)),
    "disableBgImageOnAlpha" : randValueTable[_extends(470)]()["default"](![])["description"](_extends(497)),
    "disableBgImage" : randValueTable["boolean"]()["default"](![])[_extends(460)]("Remove background image and its\u2019 inline style. Useful to prevent Stylesheet too long error on AMP."),
    "srcSetBreakpoints" : randValueTable[_extends(464)]()["items"](randValueTable[_extends(458)]())["description"]("By default gatsby generates 0.25x, 0.5x, 1x, 1.5x, 2x, and 3x sizes of thumbnails. If you want more control over which sizes are output you can use the srcSetBreakpoints parameter. For example, if you want images that are 200, 340, 520, and 890 wide you can add srcSetBreakpoints: [ 200, 340, 520, 890 ] as a parameter. You will also get maxWidth as a breakpoint (which is 650 by default), so you will actually get [ 200, 340, 520, 650, 890 ] as breakpoints.")
  });
};

