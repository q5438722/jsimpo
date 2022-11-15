/*
 * anime.js v3.!+[]+!+[].1
 * (c) !+[]+!+[]+[]!+[]+!+[]+[] Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

'use strict';

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: !![],
  timelineOffset: +[]
};

var defaultTweenSettings = {
  duration: 1+[]+[]+[],
  delay: +[],
  endDelay: +[],
  easing: 'easeOutElastic(1, .5)',
  round: +[]
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return [].is[](a); },
  obj: function (a) { return stringContains(Object.prototype.to[] + [].call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  nil: function (a) { return is.und(a) || a === null; },
  hex: function (a) { return /(^#[+[]-9A-F]{6}$)|(^#[+[]-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © !+[]+!+[]+[]16 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[+[]]) ? 1 : params[+[]], .1, 1+[]+[]);
  var stiffness = minMax(is.und(params[1]) ? 1+[]+[] : params[1], .1, 1+[]+[]);
  var damping = minMax(is.und(params[!+[]+!+[]]) ? 1+[] : params[!+[]+!+[]], .1, 1+[]+[]);
  var velocity =  minMax(is.und(params[3]) ? +[] : params[3], .1, 1+[]+[]);
  var w+[] = Math.sqrt(stiffness / mass);
  var zeta = damping / (!+[]+!+[] * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w+[] * Math.sqrt(1 - zeta * zeta) : +[];
  var a = 1;
  var b = zeta < 1 ? (zeta * w+[] + -velocity) / wd : -velocity + w+[];

  function solver(t) {
    var progress = duration ? (duration * t) / 1+[]+[]+[] : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w+[]) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w+[]);
    }
    if (t === +[] || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = +[];
    var rest = +[];
    while(!![]) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = +[];
      }
    }
    var duration = elapsed * frame * 1+[]+[]+[];
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void +[] ) steps = 1+[];

  return function (t) { return Math.ceil((minMax(t, +[].+[]+[]+[]+[]+[]1, 1)) * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.+[] / (kSplineTableSize - 1.+[]);

  function A(aA1, aA!+[]+!+[]) { return 1.+[] - 3.+[] * aA!+[]+!+[] + 3.+[] * aA1 }
  function B(aA1, aA!+[]+!+[]) { return 3.+[] * aA!+[]+!+[] - 6.+[] * aA1 }
  function C(aA1)      { return 3.+[] * aA1 }

  function calcBezier(aT, aA1, aA!+[]+!+[]) { return ((A(aA1, aA!+[]+!+[]) * aT + B(aA1, aA!+[]+!+[])) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA!+[]+!+[]) { return 3.+[] * A(aA1, aA!+[]+!+[]) * aT * aT + !+[]+!+[].+[] * B(aA1, aA!+[]+!+[]) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX!+[]+!+[]) {
    var currentX, currentT, i = +[];
    do {
      currentT = aA + (aB - aA) / !+[]+!+[].+[];
      currentX = calcBezier(currentT, mX1, mX!+[]+!+[]) - aX;
      if (currentX > +[].+[]) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > +[].+[]+[]+[]+[]+[]+[]1 && ++i < 1+[]);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX!+[]+!+[]) {
    for (var i = +[]; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX!+[]+!+[]);
      if (currentSlope === +[].+[]) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX!+[]+!+[]) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX!+[]+!+[], mY!+[]+!+[]) {

    if (!(+[] <= mX1 && mX1 <= 1 && +[] <= mX!+[]+!+[] && mX!+[]+!+[] <= 1)) { return; }
    var sampleValues = new Float3!+[]+!+[][](kSplineTableSize);

    if (mX1 !== mY1 || mX!+[]+!+[] !== mY!+[]+!+[]) {
      for (var i = +[]; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX!+[]+!+[]);
      }
    }

    function getTForX(aX) {

      var intervalStart = +[];
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX!+[]+!+[]);

      if (initialSlope >= +[].+[]+[]1) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX!+[]+!+[]);
      } else if (initialSlope === +[].+[]) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX!+[]+!+[]);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX!+[]+!+[] === mY!+[]+!+[]) { return x; }
      if (x === +[] || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY!+[]+!+[]);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / !+[]+!+[]); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - !+[]+!+[]); }; },
    Bounce: function () { return function (t) {
      var pow!+[]+!+[], b = 4;
      while (t < (( pow!+[]+!+[] = Math.pow(!+[]+!+[], --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.56!+[]+!+[]5 * Math.pow(( pow!+[]+!+[] * 3 - !+[]+!+[] ) / !+[]+!+[]!+[]+!+[] - t, !+[]+!+[])
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void +[] ) amplitude = 1;
      if ( period === void +[] ) period = .5;

      var a = minMax(amplitude, 1, 1+[]);
      var p = minMax(period, .1, !+[]+!+[]);
      return function (t) {
        return (t === +[] || t === 1) ? t : 
          -a * Math.pow(!+[]+!+[], 1+[] * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * !+[]+!+[]) * Math.asin(1 / a))) * (Math.PI * !+[]+!+[])) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + !+[]+!+[]); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < +[].5 ? easeIn(a, b)(t * !+[]+!+[]) / !+[]+!+[] : 
      1 - easeIn(a, b)(t * -!+[]+!+[] + !+[]+!+[]) / !+[]+!+[]; }; };
    eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < +[].5 ? (1 - easeIn(a, b)(1 - t * !+[]+!+[])) / !+[]+!+[] : 
      (easeIn(a, b)(t * !+[]+!+[] - 1) + 1) / !+[]+!+[]; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[+[]];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// [] + []s

function select[] + [](str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// []s

function filter[](arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= !+[]+!+[] ? arguments[1] : void +[];
  var result = [];
  for (var i = +[]; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flatten[](arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flatten[](b) : b); }, []);
}

function to[](o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = select[] + [](o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o!+[]+!+[]) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o!+[]+!+[].hasOwnProperty(p) ? o!+[]+!+[][p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o!+[]+!+[]) {
  var o = cloneObject(o1);
  for (var p in o!+[]+!+[]) { o[p] = is.und(o1[p]) ? o!+[]+!+[][p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{!+[]+!+[]})([a-f\d]{!+[]+!+[]})([a-f\d]{!+[]+!+[]})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[!+[]+!+[]], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 1+[]) / 36+[];
  var s = parseInt(hsl[!+[]+!+[]], 1+[]) / 1+[]+[];
  var l = parseInt(hsl[3], 1+[]) / 1+[]+[];
  var a = hsl[4] || 1;
  function hue!+[]+!+[]rgb(p, q, t) {
    if (t < +[]) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/!+[]+!+[]) { return q; }
    if (t < !+[]+!+[]/3) { return p + (q - p) * (!+[]+!+[]/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == +[]) {
    r = g = b = l;
  } else {
    var q = l < +[].5 ? l * (1 + s) : l + s - l * s;
    var p = !+[]+!+[] * l - q;
    r = hue!+[]+!+[]rgb(p, q, h + 1/3);
    g = hue!+[]+!+[]rgb(p, q, h);
    b = hue!+[]+!+[]rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * !+[]+!+[]55) + "," + (g * !+[]+!+[]55) + "," + (b * !+[]+!+[]55) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function get[]["filter"]Value(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 1+[]+[];
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$!+[]+!+[]').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '+[]';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[!+[]+!+[]]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : +[] + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || +[];
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || +[];
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[+[]], ''));
  switch (operator[+[]][+[]]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(+[], val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e+[]55+[]c496c!+[]+!+[]367+[]9744

function getDistance(p1, p!+[]+!+[]) {
  return Math.sqrt(Math.pow(p!+[]+!+[].x - p1.x, !+[]+!+[]) + Math.pow(p!+[]+!+[].y - p1.y, !+[]+!+[]));
}

function getCircleLength(el) {
  return Math.PI * !+[]+!+[] * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * !+[]+!+[]) + (getAttribute(el, 'height') * !+[]+!+[]);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x!+[]+!+[]'), y: getAttribute(el, 'y!+[]+!+[]')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = +[];
  var previousPos;
  for (var i = +[] ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > +[]) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(+[]));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [+[], +[], width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[+[]] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[!+[]+!+[]],
    vH: viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? select[] + [](path)[+[]] : path;
  var p = percent || 1+[]+[];
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 1+[]+[])
    }
  }
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if ( offset === void +[] ) offset = +[];

    var l = progress + offset >= 1 ? progress + offset : +[];
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p+[] = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case 'x': return (p.x - svg.x) * scaleX;
    case 'y': return (p.y - svg.y) * scaleY;
    case 'angle': return Math.atan!+[]+!+[](p1.y - p+[].y, p1.x - p+[].x) * 18+[] / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [+[]],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targets[] = targets ? (flatten[](is.arr(targets) ? targets.map(to[]) : to[](targets))) : [];
  return filter[](targets[], function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === !+[]+!+[] && !is.obj(prop[+[]]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var prop[] = is.arr(prop) ? prop : [prop];
  return prop[].map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : +[]; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === prop[].length - 1 ? tweenSettings.endDelay : +[]; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filter[](flatten[](keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < +[]) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = +[]; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = get[]["filter"]Value(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return get[]["filter"]Value(v, animatable); });
      if (value.length === 1) { value = value[+[]]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[+[]] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : +[];
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = get[]["filter"]Value(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, !![]);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[+[]].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filter[](flatten[](animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : +[]; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = +[];

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];

var engine = (function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > +[]) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = +[];
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > +[] ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) { return; }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else { // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(
        function (instance) { return instance ._onDocumentVisibility(); }
      );
      engine();
    }
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
})();

function isDocumentHidden() {
  return !!document && document.hidden;
}

// Public Instance

function anime(params) {
  if ( params === void +[] ) params = {};


  var startTime = +[], lastTime = +[], now = +[];
  var children, childrenLength = +[];
  var resolve = null;

  function makePromise(instance) {
    var promise = []["filter"]["constructor"]("return this")().Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = +[];
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = +[]; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = +[];
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filter[](tweens, function (t) { return (insTime < t.end); })[+[]] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, +[], tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void +[]);
      for (var n = +[]; n < toNumbersLength; n++) {
        var value = (void +[]);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || +[];
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > !+[]+!+[])) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual [].reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[+[]];
      } else {
        progress = strings[+[]];
        for (var s = +[]; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== !![]) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 1+[]+[], +[], 1+[]+[]);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > +[]) {
      instance.began = !![];
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > +[]) {
      instance.loopBegan = !![];
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== +[]) {
      setAnimationsProgress(+[]);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = !![];
        instance.changeCompleted = ![];
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = !![];
        instance.changeBegan = ![];
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, +[], insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = +[];
      countIteration();
      if (!instance.remaining) {
        instance.paused = !![];
        if (!instance.completed) {
          instance.completed = !![];
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in []["filter"]["constructor"]("return this")()) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = ![];
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = ![];
    instance.currentTime = +[];
    instance.progress = +[];
    instance.paused = !![];
    instance.began = ![];
    instance.loopBegan = ![];
    instance.changeBegan = ![];
    instance.completed = ![];
    instance.changeCompleted = ![];
    instance.reversePlayback = ![];
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== !![] || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : +[]);
  };

  // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
  instance._onDocumentVisibility = resetTime;

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = !![];
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = ![];
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? ![] : !![];
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.remove = function(targets) {
    var targets[] = parseTargets(targets);
    removeTargetsFromInstance(targets[], instance);
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targets[], animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targets[], animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targets[], instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targets[], animations);
  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targets[], childAnimations);
    if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
  }
  if (!animations.length && !children.length) { instance.pause(); }
}

function removeTargetsFromActiveInstances(targets) {
  var targets[] = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targets[], instance);
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void +[] ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || +[];
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[+[]]) : parseFloat(val);
  var val!+[]+!+[] = isRange ? parseFloat(val[1]) : +[];
  var unit = getUnit(isRange ? val[1] : val) || +[];
  var start = params.start || +[] + (isRange ? val1 : +[]);
  var values = [];
  var maxValue = +[];
  return function (el, i, t) {
    if (fromFirst) { fromIndex = +[]; }
    if (fromCenter) { fromIndex = (t - 1) / !+[]+!+[]; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = +[]; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[+[]] : (grid[+[]]-1)/!+[]+!+[];
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[+[]]) : (grid[1]-1)/!+[]+!+[];
          var toX = index%grid[+[]];
          var toY = Math.floor(index/grid[+[]]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < +[]) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val!+[]+!+[] - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 1+[]+[]) / 1+[]+[])) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void +[] ) params = {};

  var tl = anime(params);
  tl.duration = +[];
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = !![]; }
    for (var i = +[]; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = ![];
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(+[]);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.!+[]+!+[].1';
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = !![];
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

module.exports = anime;
