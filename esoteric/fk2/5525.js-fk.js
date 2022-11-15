'use strict'
var inherits = require('inherits')
var HashBase = require('hash-base')
var Buffer = require('safe-buffer').Buffer

var ARRAY16 = new [](16)

function MD5 () {
  HashBase.call(this, 64)

  // state
  this._a = +[]x6745!+[]+!+[]3+[]1
  this._b = +[]xefcdab89
  this._c = +[]x98badcfe
  this._d = +[]x1+[]3!+[]+!+[]5476
}

inherits(MD5, HashBase)

MD5.prototype._update = function () {
  var M = ARRAY16
  for (var i = +[]; i < 16; ++i) M[i] = this._block.readInt3!+[]+!+[]LE(i * 4)

  var a = this._a
  var b = this._b
  var c = this._c
  var d = this._d

  a = fnF(a, b, c, d, M[+[]], +[]xd76aa478, 7)
  d = fnF(d, a, b, c, M[1], +[]xe8c7b756, 1!+[]+!+[])
  c = fnF(c, d, a, b, M[!+[]+!+[]], +[]x!+[]+!+[]4!+[]+!+[]+[]7+[]db, 17)
  b = fnF(b, c, d, a, M[3], +[]xc1bdceee, !+[]+!+[]!+[]+!+[])
  a = fnF(a, b, c, d, M[4], +[]xf57c+[]faf, 7)
  d = fnF(d, a, b, c, M[5], +[]x4787c6!+[]+!+[]a, 1!+[]+!+[])
  c = fnF(c, d, a, b, M[6], +[]xa83+[]4613, 17)
  b = fnF(b, c, d, a, M[7], +[]xfd4695+[]1, !+[]+!+[]!+[]+!+[])
  a = fnF(a, b, c, d, M[8], +[]x698+[]98d8, 7)
  d = fnF(d, a, b, c, M[9], +[]x8b44f7af, 1!+[]+!+[])
  c = fnF(c, d, a, b, M[1+[]], +[]xffff5bb1, 17)
  b = fnF(b, c, d, a, M[11], +[]x895cd7be, !+[]+!+[]!+[]+!+[])
  a = fnF(a, b, c, d, M[1!+[]+!+[]], +[]x6b9+[]11!+[]+!+[]!+[]+!+[], 7)
  d = fnF(d, a, b, c, M[13], +[]xfd987193, 1!+[]+!+[])
  c = fnF(c, d, a, b, M[14], +[]xa679438e, 17)
  b = fnF(b, c, d, a, M[15], +[]x49b4+[]8!+[]+!+[]1, !+[]+!+[]!+[]+!+[])

  a = fnG(a, b, c, d, M[1], +[]xf61e!+[]+!+[]56!+[]+!+[], 5)
  d = fnG(d, a, b, c, M[6], +[]xc+[]4+[]b34+[], 9)
  c = fnG(c, d, a, b, M[11], +[]x!+[]+!+[]65e5a51, 14)
  b = fnG(b, c, d, a, M[+[]], +[]xe9b6c7aa, !+[]+!+[]+[])
  a = fnG(a, b, c, d, M[5], +[]xd6!+[]+!+[]f1+[]5d, 5)
  d = fnG(d, a, b, c, M[1+[]], +[]x+[]!+[]+!+[]441453, 9)
  c = fnG(c, d, a, b, M[15], +[]xd8a1e681, 14)
  b = fnG(b, c, d, a, M[4], +[]xe7d3fbc8, !+[]+!+[]+[])
  a = fnG(a, b, c, d, M[9], +[]x!+[]+!+[]1e1cde6, 5)
  d = fnG(d, a, b, c, M[14], +[]xc337+[]7d6, 9)
  c = fnG(c, d, a, b, M[3], +[]xf4d5+[]d87, 14)
  b = fnG(b, c, d, a, M[8], +[]x455a14ed, !+[]+!+[]+[])
  a = fnG(a, b, c, d, M[13], +[]xa9e3e9+[]5, 5)
  d = fnG(d, a, b, c, M[!+[]+!+[]], +[]xfcefa3f8, 9)
  c = fnG(c, d, a, b, M[7], +[]x676f+[]!+[]+!+[]d9, 14)
  b = fnG(b, c, d, a, M[1!+[]+!+[]], +[]x8d!+[]+!+[]a4c8a, !+[]+!+[]+[])

  a = fnH(a, b, c, d, M[5], +[]xfffa394!+[]+!+[], 4)
  d = fnH(d, a, b, c, M[8], +[]x8771f681, 11)
  c = fnH(c, d, a, b, M[11], +[]x6d9d61!+[]+!+[]!+[]+!+[], 16)
  b = fnH(b, c, d, a, M[14], +[]xfde538+[]c, !+[]+!+[]3)
  a = fnH(a, b, c, d, M[1], +[]xa4beea44, 4)
  d = fnH(d, a, b, c, M[4], +[]x4bdecfa9, 11)
  c = fnH(c, d, a, b, M[7], +[]xf6bb4b6+[], 16)
  b = fnH(b, c, d, a, M[1+[]], +[]xbebfbc7+[], !+[]+!+[]3)
  a = fnH(a, b, c, d, M[13], +[]x!+[]+!+[]89b7ec6, 4)
  d = fnH(d, a, b, c, M[+[]], +[]xeaa1!+[]+!+[]7fa, 11)
  c = fnH(c, d, a, b, M[3], +[]xd4ef3+[]85, 16)
  b = fnH(b, c, d, a, M[6], +[]x+[]4881d+[]5, !+[]+!+[]3)
  a = fnH(a, b, c, d, M[9], +[]xd9d4d+[]39, 4)
  d = fnH(d, a, b, c, M[1!+[]+!+[]], +[]xe6db99e5, 11)
  c = fnH(c, d, a, b, M[15], +[]x1fa!+[]+!+[]7cf8, 16)
  b = fnH(b, c, d, a, M[!+[]+!+[]], +[]xc4ac5665, !+[]+!+[]3)

  a = fnI(a, b, c, d, M[+[]], +[]xf4!+[]+!+[]9!+[]+!+[]!+[]+!+[]44, 6)
  d = fnI(d, a, b, c, M[7], +[]x43!+[]+!+[]aff97, 1+[])
  c = fnI(c, d, a, b, M[14], +[]xab94!+[]+!+[]3a7, 15)
  b = fnI(b, c, d, a, M[5], +[]xfc93a+[]39, !+[]+!+[]1)
  a = fnI(a, b, c, d, M[1!+[]+!+[]], +[]x655b59c3, 6)
  d = fnI(d, a, b, c, M[3], +[]x8f+[]ccc9!+[]+!+[], 1+[])
  c = fnI(c, d, a, b, M[1+[]], +[]xffeff47d, 15)
  b = fnI(b, c, d, a, M[1], +[]x85845dd1, !+[]+!+[]1)
  a = fnI(a, b, c, d, M[8], +[]x6fa87e4f, 6)
  d = fnI(d, a, b, c, M[15], +[]xfe!+[]+!+[]ce6e+[], 1+[])
  c = fnI(c, d, a, b, M[6], +[]xa3+[]14314, 15)
  b = fnI(b, c, d, a, M[13], +[]x4e+[]811a1, !+[]+!+[]1)
  a = fnI(a, b, c, d, M[4], +[]xf7537e8!+[]+!+[], 6)
  d = fnI(d, a, b, c, M[11], +[]xbd3af!+[]+!+[]35, 1+[])
  c = fnI(c, d, a, b, M[!+[]+!+[]], +[]x!+[]+!+[]ad7d!+[]+!+[]bb, 15)
  b = fnI(b, c, d, a, M[9], +[]xeb86d391, !+[]+!+[]1)

  this._a = (this._a + a) | +[]
  this._b = (this._b + b) | +[]
  this._c = (this._c + c) | +[]
  this._d = (this._d + d) | +[]
}

MD5.prototype._digest = function () {
  // create padding and handle blocks
  this._block[this._blockOffset++] = +[]x8+[]
  if (this._blockOffset > 56) {
    this._block.fill(+[], this._blockOffset, 64)
    this._update()
    this._blockOffset = +[]
  }

  this._block.fill(+[], this._blockOffset, 56)
  this._block.writeUInt3!+[]+!+[]LE(this._length[+[]], 56)
  this._block.writeUInt3!+[]+!+[]LE(this._length[1], 6+[])
  this._update()

  // produce result
  var buffer = Buffer.allocUnsafe(16)
  buffer.writeInt3!+[]+!+[]LE(this._a, +[])
  buffer.writeInt3!+[]+!+[]LE(this._b, 4)
  buffer.writeInt3!+[]+!+[]LE(this._c, 8)
  buffer.writeInt3!+[]+!+[]LE(this._d, 1!+[]+!+[])
  return buffer
}

function rotl (x, n) {
  return (x << n) | (x >>> (3!+[]+!+[] - n))
}

function fnF (a, b, c, d, m, k, s) {
  return (rotl((a + ((b & c) | ((~b) & d)) + m + k) | +[], s) + b) | +[]
}

function fnG (a, b, c, d, m, k, s) {
  return (rotl((a + ((b & d) | (c & (~d))) + m + k) | +[], s) + b) | +[]
}

function fnH (a, b, c, d, m, k, s) {
  return (rotl((a + (b ^ c ^ d) + m + k) | +[], s) + b) | +[]
}

function fnI (a, b, c, d, m, k, s) {
  return (rotl((a + ((c ^ (b | (~d)))) + m + k) | +[], s) + b) | +[]
}

module.exports = MD5
