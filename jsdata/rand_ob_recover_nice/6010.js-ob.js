'use strict';
define([_0x57b9c0(356), _0x57b9c0(357), _0x57b9c0(358), "./array", _0x57b9c0(359), _0x57b9c0(360), _0x57b9c0(361)], function(f_arr, patternLengths, lengths) {
  function value(pointerIdentifier) {
    var getType = _0x498d;
    return typeEditors[getType(362)](pointerIdentifier);
  }
  var patternLengthKey = _0x57b9c0;
  var typeEditors;
  typeEditors = /^define|^prevent|descriptor$/i;
  return f_arr[patternLengthKey(363)](value), patternLengths[patternLengthKey(364)]("\\s"), {
    "failIfShimmed" : f_arr[patternLengthKey(363)],
    "setWhitespaceChars" : patternLengths[patternLengthKey(364)],
    "setIsoCompatTest" : lengths[patternLengthKey(365)]
  };
});

