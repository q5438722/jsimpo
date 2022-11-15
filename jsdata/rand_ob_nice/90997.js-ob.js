'use strict';
const _0x408f = ["alternatives", "array", "items", "valid", "string", "alt", "Add a caption to each image with the contents of the title attribute, when this is not empty. If the title attribute is empty but the alt attribute is not, it will be used instead. Set this option to true to enable this behavior. You can also pass an array instead to specify which value should be used for the caption \u2014 for example, passing ['alt', 'title'] would use the alt attribute first, and then the title. When this is set to true it is the same as passing ['title', 'alt']. If you just want to use the title (and omit captions for images that have alt attributes but no title), pass ['title'].", 
"boolean", "Parse the caption as markdown instead of raw text. Ignored if showCaptions is false.", "[deprecated] Pixel density is only used in vector images, which Gatsby\u2019s implementation of Sharp doesn\u2019t support. This option is currently a no-op and will be removed in the next major version of Gatsby.", "try", "unknown", "maxArity", "Set the background color of the image to match the background image of your design.\n\n      Note:\n      - set this option to transparent for a transparent image background.\n      - set this option to none to completely remove the image background.", 
"Additionally generate WebP versions alongside your chosen file format. They are added as a srcset with the appropriate mimetype and will be loaded in browsers that support the format. Pass true for default support, or an object of options to specifically override those for the WebP files. For example, pass { quality: 80 } to have the WebP images be at quality level 80.", "TURNPOLICY_BLACK", "TURNPOLICY_RIGHT", "TURNPOLICY_MINORITY", "TURNPOLICY_MAJORITY", "TURNPOLICY_WHITE", "TURNPOLICY_LEFT", "min", 
"max", "THRESHOLD_AUTO", "lightgray", "transparent", 'Use traced SVGs for placeholder images instead of the \u201cblur up\u201d effect. Pass true for traced SVGs with the default settings (seen here), or an object of options to override the default. For example, pass { color: "#F00", turnPolicy: "TURNPOLICY_MAJORITY" } to change the color of the trace to red and the turn policy to TURNPOLICY_MAJORITY. See node-potrace parameter documentation for a full listing and explanation of the available options.', 
"lazy", "eager", "auto", "Set the browser\u2019s native lazy loading attribute. One of lazy, eager or auto.", "async", "sync", "Set the browser\u2019s native decoding attribute. One of async, sync or auto.", "Images containing transparent pixels around the edges results in images with blurry edges. As a result, these images do not work well with the \u201cblur up\u201d technique used in this plugin. As a workaround to disable background images with blurry edges on images containing transparent pixels, enable this setting.", 
"216681JFYUSw", "11EgtUja", "15487rKZGHj", "116969zIoWNS", "2qjXnwf", "71582LSkdle", "242587vDHfoK", "39548hQyWuO", "1ehgulE", "175396ePHrHS", "5Xumlmm", "potrace", "object", "number", "default", "description", "The maxWidth in pixels of the div where the markdown will be displayed. This value is used when deciding what the width of the various responsive thumbnails should be.", "Add a link to each image to the original image. Sometimes people want to see a full-sized version of an image e.g. to see extra detail on a part of the image and this is a convenient and common pattern for enabling this. Set this option to false to disable this behavior."];
function _0x45d0(isBgroundImg, stgs) {
  return _0x45d0 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (1 * -347 + 345 + -149 * -3);
    let _0x1d29bb = _0x408f[isBgroundImg];
    return _0x1d29bb;
  }, _0x45d0(isBgroundImg, stgs);
}
const _0x15174e = _0x45d0;
(function(data, val) {
  const toMonths = _0x45d0;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(445)) + parseInt(toMonths(446)) * -parseInt(toMonths(447)) + parseInt(toMonths(448)) * -parseInt(toMonths(449)) + parseInt(toMonths(450)) + -parseInt(toMonths(451)) + parseInt(toMonths(452)) * parseInt(toMonths(453)) + -parseInt(toMonths(454)) * -parseInt(toMonths(455));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x33747f) {
      data["push"](data["shift"]());
    }
  }
})(_0x408f, 684 * 72 + 159215 + -1554 * 54);
const {
  Potrace : Potrace
} = require(_0x15174e(456));
exports["pluginOptionsSchema"] = function({
  Joi : $_constraints
}) {
  const _extends = _0x15174e;
  return $_constraints[_extends(457)]({
    "maxWidth" : $_constraints[_extends(458)]()[_extends(459)](-7994 + 5062 + -6 * -597)[_extends(460)](_extends(461)),
    "linkImagesToOriginal" : $_constraints["boolean"]()[_extends(459)](!![])[_extends(460)](_extends(462)),
    "showCaptions" : $_constraints[_extends(463)]()["try"]($_constraints["boolean"](), $_constraints[_extends(464)]()[_extends(465)]($_constraints["string"]()[_extends(466)]("title"), $_constraints[_extends(467)]()[_extends(466)](_extends(468))))[_extends(459)](![])[_extends(460)](_extends(469)),
    "markdownCaptions" : $_constraints[_extends(470)]()[_extends(459)](![])[_extends(460)](_extends(471)),
    "sizeByPixelDensity" : $_constraints["boolean"]()[_extends(459)](![])[_extends(460)](_extends(472)),
    "wrapperStyle" : $_constraints["alternatives"]()[_extends(473)]($_constraints[_extends(457)]({})[_extends(474)](!![]), $_constraints["function"]()[_extends(475)](183 + 3139 + -3321), $_constraints[_extends(467)]()),
    "backgroundColor" : $_constraints[_extends(467)]()["default"]("white")[_extends(460)](_extends(476)),
    "quality" : $_constraints[_extends(458)]()[_extends(459)](3181 * -1 + -456 + 1 * 3687)["description"]("The quality level of the generated files."),
    "withWebp" : $_constraints[_extends(463)]()[_extends(473)]($_constraints[_extends(457)]({
      "quality" : $_constraints[_extends(458)]()
    }), $_constraints[_extends(470)]())[_extends(459)](![])[_extends(460)](_extends(477)),
    "tracedSVG" : $_constraints[_extends(463)]()[_extends(473)]($_constraints[_extends(470)](), $_constraints[_extends(457)]({
      "turnPolicy" : $_constraints[_extends(467)]()["valid"](_extends(478), "TURNPOLICY_WHITE", "TURNPOLICY_LEFT", _extends(479), _extends(480), _extends(481), Potrace[_extends(478)], Potrace[_extends(482)], Potrace[_extends(483)], Potrace[_extends(479)], Potrace["TURNPOLICY_MINORITY"], Potrace["TURNPOLICY_MAJORITY"])["default"](Potrace[_extends(481)]),
      "turdSize" : $_constraints[_extends(458)]()[_extends(459)](6280 + -6 * -1279 + -13854),
      "alphaMax" : $_constraints[_extends(458)](),
      "optCurve" : $_constraints["boolean"]()[_extends(459)](!![]),
      "optTolerance" : $_constraints[_extends(458)]()[_extends(459)](-4966 + -1163 * 5 + 1 * 10781 + 0.4),
      "threshold" : $_constraints[_extends(463)]()[_extends(473)]($_constraints[_extends(458)]()[_extends(484)](8624 + 9595 + -1 * 18219)[_extends(485)](8159 + 9610 * -1 + 1706), $_constraints["number"]()[_extends(466)](Potrace[_extends(486)]))[_extends(459)](Potrace[_extends(486)]),
      "blackOnWhite" : $_constraints["boolean"]()[_extends(459)](!![]),
      "color" : $_constraints["string"]()[_extends(459)](_extends(487)),
      "background" : $_constraints[_extends(467)]()["default"](_extends(488))
    }))["default"](![])["description"](_extends(489)),
    "loading" : $_constraints[_extends(467)]()[_extends(466)](_extends(490), _extends(491), _extends(492))["default"]("lazy")[_extends(460)](_extends(493)),
    "decoding" : $_constraints[_extends(467)]()[_extends(466)](_extends(494), _extends(495), _extends(492))["default"](_extends(494))[_extends(460)](_extends(496)),
    "disableBgImageOnAlpha" : $_constraints[_extends(470)]()["default"](![])["description"](_extends(497)),
    "disableBgImage" : $_constraints["boolean"]()["default"](![])[_extends(460)]("Remove background image and its\u2019 inline style. Useful to prevent Stylesheet too long error on AMP."),
    "srcSetBreakpoints" : $_constraints[_extends(464)]()["items"]($_constraints[_extends(458)]())["description"]("By default gatsby generates 0.25x, 0.5x, 1x, 1.5x, 2x, and 3x sizes of thumbnails. If you want more control over which sizes are output you can use the srcSetBreakpoints parameter. For example, if you want images that are 200, 340, 520, and 890 wide you can add srcSetBreakpoints: [ 200, 340, 520, 890 ] as a parameter. You will also get maxWidth as a breakpoint (which is 650 by default), so you will actually get [ 200, 340, 520, 650, 890 ] as breakpoints.")
  });
};

