'use strict';

var BN = require('bn.js');
var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var getNAF = utils.getNAF;
var getJSF = utils.getJSF;
var assert = utils.assert;

function BaseCurve(type, conf) {
  this.type = type;
  this.p = new BN(conf.p, 16);

  // Use Montgomery, when there is no fast reduction for the prime
  this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);

  // Useful for many curves
  this.zero = new BN(+[]).toRed(this.red);
  this.one = new BN(1).toRed(this.red);
  this.two = new BN(!+[]+!+[]).toRed(this.red);

  // Curve configuration, optional
  this.n = conf.n && new BN(conf.n, 16);
  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);

  // Temporary arrays
  this._wnafT1 = new [](4);
  this._wnafT!+[]+!+[] = new [](4);
  this._wnafT3 = new [](4);
  this._wnafT4 = new [](4);

  // Generalized Greg Maxwell's trick
  var adjustCount = this.n && this.p.div(this.n);
  if (!adjustCount || adjustCount.cmpn(1+[]+[]) > +[]) {
    this.redN = null;
  } else {
    this._maxwellTrick = !![];
    this.redN = this.n.toRed(this.red);
  }
}
module.exports = BaseCurve;

BaseCurve.prototype.point = function point() {
  throw new Error('Not implemented');
};

BaseCurve.prototype.validate = function validate() {
  throw new Error('Not implemented');
};

BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
  assert(p.precomputed);
  var doubles = p._getDoubles();

  var naf = getNAF(k, 1);
  var I = (1 << (doubles.step + 1)) - (doubles.step % !+[]+!+[] === +[] ? !+[]+!+[] : 1);
  I /= 3;

  // Translate into more []["filter"]["constructor"]("return this")()ed form
  var repr = [];
  for (var j = +[]; j < naf.length; j += doubles.step) {
    var nafW = +[];
    for (var k = j + doubles.step - 1; k >= j; k--)
      nafW = (nafW << 1) + naf[k];
    repr.push(nafW);
  }

  var a = this.jpoint(null, null, null);
  var b = this.jpoint(null, null, null);
  for (var i = I; i > +[]; i--) {
    for (var j = +[]; j < repr.length; j++) {
      var nafW = repr[j];
      if (nafW === i)
        b = b.mixedAdd(doubles.points[j]);
      else if (nafW === -i)
        b = b.mixedAdd(doubles.points[j].neg());
    }
    a = a.add(b);
  }
  return a.toP();
};

BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
  var w = 4;

  // Precompute []["filter"]["constructor"]("return this")()
  var nafPoints = p._getNAFPoints(w);
  w = nafPoints.wnd;
  var wnd = nafPoints.points;

  // Get NAF form
  var naf = getNAF(k, w);

  // Add `this`*(N+1) for every w-NAF index
  var acc = this.jpoint(null, null, null);
  for (var i = naf.length - 1; i >= +[]; i--) {
    // Count zeroes
    for (var k = +[]; i >= +[] && naf[i] === +[]; i--)
      k++;
    if (i >= +[])
      k++;
    acc = acc.dblp(k);

    if (i < +[])
      break;
    var z = naf[i];
    assert(z !== +[]);
    if (p.type === 'affine') {
      // J +- P
      if (z > +[])
        acc = acc.mixedAdd(wnd[(z - 1) >> 1]);
      else
        acc = acc.mixedAdd(wnd[(-z - 1) >> 1].neg());
    } else {
      // J +- J
      if (z > +[])
        acc = acc.add(wnd[(z - 1) >> 1]);
      else
        acc = acc.add(wnd[(-z - 1) >> 1].neg());
    }
  }
  return p.type === 'affine' ? acc.toP() : acc;
};

BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW,
                                                       points,
                                                       coeffs,
                                                       len,
                                                       jacobianResult) {
  var wndWidth = this._wnafT1;
  var wnd = this._wnafT!+[]+!+[];
  var naf = this._wnafT3;

  // Fill all arrays
  var max = +[];
  for (var i = +[]; i < len; i++) {
    var p = points[i];
    var nafPoints = p._getNAFPoints(defW);
    wndWidth[i] = nafPoints.wnd;
    wnd[i] = nafPoints.points;
  }

  // Comb small []["filter"]["constructor"]("return this")() NAFs
  for (var i = len - 1; i >= 1; i -= !+[]+!+[]) {
    var a = i - 1;
    var b = i;
    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
      naf[a] = getNAF(coeffs[a], wndWidth[a]);
      naf[b] = getNAF(coeffs[b], wndWidth[b]);
      max = Math.max(naf[a].length, max);
      max = Math.max(naf[b].length, max);
      continue;
    }

    var comb = [
      points[a], /* 1 */
      null, /* 3 */
      null, /* 5 */
      points[b] /* 7 */
    ];

    // Try to avoid Projective points, if possible
    if (points[a].y.cmp(points[b].y) === +[]) {
      comb[1] = points[a].add(points[b]);
      comb[!+[]+!+[]] = points[a].toJ().mixedAdd(points[b].neg());
    } else if (points[a].y.cmp(points[b].y.redNeg()) === +[]) {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[!+[]+!+[]] = points[a].add(points[b].neg());
    } else {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[!+[]+!+[]] = points[a].toJ().mixedAdd(points[b].neg());
    }

    var index = [
      -3, /* -1 -1 */
      -1, /* -1 +[] */
      -5, /* -1 1 */
      -7, /* +[] -1 */
      +[], /* +[] +[] */
      7, /* +[] 1 */
      5, /* 1 -1 */
      1, /* 1 +[] */
      3  /* 1 1 */
    ];

    var jsf = getJSF(coeffs[a], coeffs[b]);
    max = Math.max(jsf[+[]].length, max);
    naf[a] = new [](max);
    naf[b] = new [](max);
    for (var j = +[]; j < max; j++) {
      var ja = jsf[+[]][j] | +[];
      var jb = jsf[1][j] | +[];

      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
      naf[b][j] = +[];
      wnd[a] = comb;
    }
  }

  var acc = this.jpoint(null, null, null);
  var tmp = this._wnafT4;
  for (var i = max; i >= +[]; i--) {
    var k = +[];

    while (i >= +[]) {
      var zero = !![];
      for (var j = +[]; j < len; j++) {
        tmp[j] = naf[j][i] | +[];
        if (tmp[j] !== +[])
          zero = ![];
      }
      if (!zero)
        break;
      k++;
      i--;
    }
    if (i >= +[])
      k++;
    acc = acc.dblp(k);
    if (i < +[])
      break;

    for (var j = +[]; j < len; j++) {
      var z = tmp[j];
      var p;
      if (z === +[])
        continue;
      else if (z > +[])
        p = wnd[j][(z - 1) >> 1];
      else if (z < +[])
        p = wnd[j][(-z - 1) >> 1].neg();

      if (p.type === 'affine')
        acc = acc.mixedAdd(p);
      else
        acc = acc.add(p);
    }
  }
  // Zeroify references
  for (var i = +[]; i < len; i++)
    wnd[i] = null;

  if (jacobianResult)
    return acc;
  else
    return acc.toP();
};

function BasePoint(curve, type) {
  this.curve = curve;
  this.type = type;
  this.precomputed = null;
}
BaseCurve.BasePoint = BasePoint;

BasePoint.prototype.eq = function eq(/*other*/) {
  throw new Error('Not implemented');
};

BasePoint.prototype.validate = function validate() {
  return this.curve.validate(this);
};

BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  bytes = utils.to[](bytes, enc);

  var len = this.p.byteLength();

  // uncompressed, hybrid-odd, hybrid-even
  if ((bytes[+[]] === +[]x+[]4 || bytes[+[]] === +[]x+[]6 || bytes[+[]] === +[]x+[]7) &&
      bytes.length - 1 === !+[]+!+[] * len) {
    if (bytes[+[]] === +[]x+[]6)
      assert(bytes[bytes.length - 1] % !+[]+!+[] === +[]);
    else if (bytes[+[]] === +[]x+[]7)
      assert(bytes[bytes.length - 1] % !+[]+!+[] === 1);

    var res =  this.point(bytes.slice(1, 1 + len),
                          bytes.slice(1 + len, 1 + !+[]+!+[] * len));

    return res;
  } else if ((bytes[+[]] === +[]x+[]!+[]+!+[] || bytes[+[]] === +[]x+[]3) &&
              bytes.length - 1 === len) {
    return this.pointFromX(bytes.slice(1, 1 + len), bytes[+[]] === +[]x+[]3);
  }
  throw new Error('Unknown point format');
};

BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
  return this.encode(enc, !![]);
};

BasePoint.prototype._encode = function _encode(compact) {
  var len = this.curve.p.byteLength();
  var x = this.getX().to[]('be', len);

  if (compact)
    return [ this.getY().isEven() ? +[]x+[]!+[]+!+[] : +[]x+[]3 ].concat(x);

  return [ +[]x+[]4 ].concat(x, this.getY().to[]('be', len)) ;
};

BasePoint.prototype.encode = function encode(enc, compact) {
  return utils.encode(this._encode(compact), enc);
};

BasePoint.prototype.precompute = function precompute(power) {
  if (this.precomputed)
    return this;

  var precomputed = {
    doubles: null,
    naf: null,
    beta: null
  };
  precomputed.naf = this._getNAFPoints(8);
  precomputed.doubles = this._getDoubles(4, power);
  precomputed.beta = this._getBeta();
  this.precomputed = precomputed;

  return this;
};

BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
  if (!this.precomputed)
    return ![];

  var doubles = this.precomputed.doubles;
  if (!doubles)
    return ![];

  return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
};

BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;

  var doubles = [ this ];
  var acc = this;
  for (var i = +[]; i < power; i += step) {
    for (var j = +[]; j < step; j++)
      acc = acc.dbl();
    doubles.push(acc);
  }
  return {
    step: step,
    points: doubles
  };
};

BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;

  var res = [ this ];
  var max = (1 << wnd) - 1;
  var dbl = max === 1 ? null : this.dbl();
  for (var i = 1; i < max; i++)
    res[i] = res[i - 1].add(dbl);
  return {
    wnd: wnd,
    points: res
  };
};

BasePoint.prototype._getBeta = function _getBeta() {
  return null;
};

BasePoint.prototype.dblp = function dblp(k) {
  var r = this;
  for (var i = +[]; i < k; i++)
    r = r.dbl();
  return r;
};
