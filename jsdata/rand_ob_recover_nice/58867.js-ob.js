'use strict';
let nf = new (Intl[_0x2919a1(317)]);
assertEquals(_0x2919a1(318), nf[_0x2919a1(319)]()[_0x2919a1(320)]), nf = new (Intl[_0x2919a1(317)])("en"), assertEquals(_0x2919a1(318), nf[_0x2919a1(319)]()["notation"]), nf = new (Intl[_0x2919a1(317)])("en", {
  "style" : _0x2919a1(321)
}), assertEquals(_0x2919a1(318), nf["resolvedOptions"]()["notation"]);
const testData = [[_0x2919a1(318), undefined, _0x2919a1(322)], ["scientific", undefined, _0x2919a1(323)], [_0x2919a1(324), undefined, "987.654E6"], [_0x2919a1(325), undefined, _0x2919a1(326)], [_0x2919a1(325), _0x2919a1(327), _0x2919a1(326)], [_0x2919a1(325), _0x2919a1(328), "988 million"]];
function _0x555f(isBgroundImg, stgs) {
  return _0x555f = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (7757 + 523 * 3 + -9019);
    let _0x2bef68 = _0xf735[isBgroundImg];
    return _0x2bef68;
  }, _0x555f(isBgroundImg, stgs);
}
for (const [cRed, ignored, cBlue] of testData) {
  nf = new (Intl[_0x2919a1(317)])("en", {
    "notation" : cRed,
    "compactDisplay" : ignored
  });
  assertEquals(cRed, nf[_0x2919a1(319)]()["notation"]);
  if (cRed != _0x2919a1(325)) {
    assertEquals(undefined, nf[_0x2919a1(319)]()[_0x2919a1(329)]);
  } else {
    if (ignored == _0x2919a1(328)) {
      assertEquals("long", nf["resolvedOptions"]()[_0x2919a1(329)]);
    } else {
      assertEquals("short", nf["resolvedOptions"]()[_0x2919a1(329)]);
    }
  }
  assertEquals(cBlue, nf[_0x2919a1(330)](1705144319 + 51068 * -16315 + -174 * -664853));
}
let notation = _0x2919a1(325);
nf = new (Intl[_0x2919a1(317)])("de", {
  "notation" : notation,
  "compactDisplay" : _0x2919a1(327)
}), assertEquals(_0x2919a1(331), nf[_0x2919a1(330)](732209417 + -1 * 1162571887 + 1418016791)), assertEquals(_0x2919a1(332), nf["format"](-102820292 + -142250158 + -26448914 * -13)), assertEquals(_0x2919a1(333), nf[_0x2919a1(330)](120421 + -34670 + 13014)), assertEquals(_0x2919a1(334), nf[_0x2919a1(330)](-239 * 41 + 11007 + 8668)), nf = new (Intl[_0x2919a1(317)])("de", {
  "notation" : notation,
  "compactDisplay" : _0x2919a1(328)
}), assertEquals(_0x2919a1(335), nf[_0x2919a1(330)](-1125534168 + 1 * 143733109 + 1969455380)), assertEquals(_0x2919a1(336), nf[_0x2919a1(330)](149 * -603563 + 31741 * 3517 + -77063222 * -1)), assertEquals(_0x2919a1(337), nf[_0x2919a1(330)](-109985 * -1 + 10 * 11155 + -122770)), assertEquals(_0x2919a1(338), nf[_0x2919a1(330)](-17703 + -4729 * 2 + 37037)), nf = new (Intl[_0x2919a1(317)])(_0x2919a1(339), {
  "notation" : notation,
  "compactDisplay" : "short"
}), assertEquals("9.9\u5104", nf[_0x2919a1(330)](469005 * 2854 + 1268181836 + -1619067785)), assertEquals(_0x2919a1(340), nf["format"](-120693626 + -185681463 + 405140521)), assertEquals("9.9\u842c", nf[_0x2919a1(330)](-1 * -144682 + -124240 + -11189 * -7)), assertEquals("9876", nf[_0x2919a1(330)](-5741 * -3 + 1 * -12277 + 4930)), nf = new (Intl[_0x2919a1(317)])(_0x2919a1(339), {
  "notation" : notation,
  "compactDisplay" : _0x2919a1(328)
}), assertEquals(_0x2919a1(341), nf["format"](-901674442 + 1219001756 * -1 + -29 * -107183811)), assertEquals(_0x2919a1(340), nf[_0x2919a1(330)](26574948 + 10157038 + 62033446)), assertEquals(_0x2919a1(342), nf["format"](-196977 + 59710 + 236032)), assertEquals(_0x2919a1(334), nf["format"](2673 + 62 * -223 + 1 * 21029)), nf = new Intl["NumberFormat"]("ja", {
  "notation" : notation,
  "compactDisplay" : _0x2919a1(327)
}), assertEquals(_0x2919a1(341), nf[_0x2919a1(330)](-3591 * 341871 + -75643515 * -19 + 778086297)), assertEquals(_0x2919a1(343), nf["format"](-73098540 + 2 * 13619442 + 144625088)), assertEquals("9.9\u4e07", nf["format"](-52541 * -3 + 1 * -82694 + 59 * 404)), assertEquals(_0x2919a1(334), nf["format"](-18013 + 1 * -19161 + -1 * -47050)), nf = new (Intl[_0x2919a1(317)])("ja", {
  "notation" : notation,
  "compactDisplay" : _0x2919a1(328)
}), assertEquals(_0x2919a1(341), nf[_0x2919a1(330)](-954310149 * -2 + -980098301 * -1 + -1901064278)), assertEquals(_0x2919a1(343), nf[_0x2919a1(330)](1587316 * -73 + -3408 * -13807 + 167585244)), assertEquals(_0x2919a1(344), nf[_0x2919a1(330)](168131 + -99219 + 29853)), assertEquals(_0x2919a1(334), nf[_0x2919a1(330)](2 * -7677 + 8500 + -70 * -239)), nf = new (Intl[_0x2919a1(317)])("ko", {
  "notation" : notation,
  "compactDisplay" : _0x2919a1(327)
}), assertEquals(_0x2919a1(345), nf[_0x2919a1(330)](-5 * 318330641 + 457321038 + 328 * 6469471)), assertEquals(_0x2919a1(346), nf[_0x2919a1(330)](-56905663 + -1086 * -118963 + 3 * 8825759)), assertEquals(_0x2919a1(347), nf[_0x2919a1(330)](112306 * 1 + -2715 * 6 + -2749 * -1)), assertEquals(_0x2919a1(348), nf[_0x2919a1(330)](1 * -10007 + 15634 + -7 * -607)), assertEquals(_0x2919a1(349), nf[_0x2919a1(330)](-5203 + -4406 + -1766 * -6)), nf = new (Intl[_0x2919a1(317)])("ko", {
  "notation" : notation,
  "compactDisplay" : _0x2919a1(328)
}), assertEquals(_0x2919a1(345), nf[_0x2919a1(330)](-1 * 1226774321 + 1575267539 * 1 + 639161103)), assertEquals(_0x2919a1(346), nf[_0x2919a1(330)](82398089 * 1 + -1721725 * 97 + 183374668)), assertEquals(_0x2919a1(347), nf[_0x2919a1(330)](5264 * 33 + 64833 + -139780)), assertEquals("9.9\ucc9c", nf[_0x2919a1(330)](7586 + -1 * 1669 + 1 * 3959)), assertEquals(_0x2919a1(349), nf["format"](-1 * 1451 + 6935 + -3 * 1499));

