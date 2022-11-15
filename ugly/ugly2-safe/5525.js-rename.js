"use strict";
  function chives() {
    hamster.call(this, 64);
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
  }
  function bean_sprout(boar, llama) {
    return boar << llama | boar >>> 32 - llama;
  }
  function broccoflower(capybara, mink, prairie_dog, mantis, dogfish, snail, 
  dunlin) {
    return bean_sprout(capybara + (mink & prairie_dog | ~ mink & mantis) + dogfish + snail | 0, 
    dunlin) + mink | 0;
  }
  function green_bean(termite, squid, rook, woodcock, antelope, goose, baboon) {
    return bean_sprout(termite + (squid & woodcock | rook & ~ woodcock) + antelope + goose | 0, 
    baboon) + squid | 0;
  }
  function amaranth(bat, bison, tarsier, cat, weasel, beaver, komodo_dragon) {
    return bean_sprout(bat + (bison ^ tarsier ^ cat) + weasel + beaver | 0, 
    komodo_dragon) + bison | 0;
  }
  function nopale(armadillo, woodpecker, quelea, butterfly, oyster, stingray, 
  dragonfly) {
    return bean_sprout(armadillo + (quelea ^ (woodpecker | ~ butterfly)) + oyster + stingray | 0, 
    dragonfly) + woodpecker | 0;
  }
  var raccoon; // inherits
  var hamster; // HashBase
  var chinchilla; // Buffer
  var ibex; // ARRAY16
  
  raccoon = require("inherits");
  hamster = require("hash-base");
  chinchilla = require("safe-buffer").Buffer;
  ibex = new Array(16);
  raccoon(MD5, hamster);
  MD5.prototype._update = function () {
    var finch; // n
    var meerkat; // f
    var alligator; // t
    var kookabura; // i
    var human; // s
    var reindeer; // r
    
      finch = ibex;
    {
      meerkat = 0;
      for (; meerkat < 16; ++ meerkat)
        finch[meerkat] = this._block.readInt32LE(meerkat * 4);
    }
    alligator = this._a;
    kookabura = this._b;
    human = this._c;
    reindeer = this._d;
    alligator = broccoflower(alligator, kookabura, human, reindeer, finch[0], 3614090360, 
    7);
    reindeer = broccoflower(reindeer, alligator, kookabura, human, finch[1], 3905402710, 
    12);
    human = broccoflower(human, reindeer, alligator, kookabura, finch[2], 606105819, 
    17);
    kookabura = broccoflower(kookabura, human, reindeer, alligator, finch[3], 3250441966, 
    22);
    alligator = broccoflower(alligator, kookabura, human, reindeer, finch[4], 4118548399, 
    7);
    reindeer = broccoflower(reindeer, alligator, kookabura, human, finch[5], 1200080426, 
    12);
    human = broccoflower(human, reindeer, alligator, kookabura, finch[6], 2821735955, 
    17);
    kookabura = broccoflower(kookabura, human, reindeer, alligator, finch[7], 4249261313, 
    22);
    alligator = broccoflower(alligator, kookabura, human, reindeer, finch[8], 1770035416, 
    7);
    reindeer = broccoflower(reindeer, alligator, kookabura, human, finch[9], 2336552879, 
    12);
    human = broccoflower(human, reindeer, alligator, kookabura, finch[10], 4294925233, 
    17);
    kookabura = broccoflower(kookabura, human, reindeer, alligator, finch[11], 2304563134, 
    22);
    alligator = broccoflower(alligator, kookabura, human, reindeer, finch[12], 1804603682, 
    7);
    reindeer = broccoflower(reindeer, alligator, kookabura, human, finch[13], 4254626195, 
    12);
    human = broccoflower(human, reindeer, alligator, kookabura, finch[14], 2792965006, 
    17);
    kookabura = broccoflower(kookabura, human, reindeer, alligator, finch[15], 1236535329, 
    22);
    alligator = green_bean(alligator, kookabura, human, reindeer, finch[1], 4129170786, 
    5);
    reindeer = green_bean(reindeer, alligator, kookabura, human, finch[6], 3225465664, 
    9);
    human = green_bean(human, reindeer, alligator, kookabura, finch[11], 643717713, 
    14);
    kookabura = green_bean(kookabura, human, reindeer, alligator, finch[0], 3921069994, 
    20);
    alligator = green_bean(alligator, kookabura, human, reindeer, finch[5], 3593408605, 
    5);
    reindeer = green_bean(reindeer, alligator, kookabura, human, finch[10], 38016083, 
    9);
    human = green_bean(human, reindeer, alligator, kookabura, finch[15], 3634488961, 
    14);
    kookabura = green_bean(kookabura, human, reindeer, alligator, finch[4], 3889429448, 
    20);
    alligator = green_bean(alligator, kookabura, human, reindeer, finch[9], 568446438, 
    5);
    reindeer = green_bean(reindeer, alligator, kookabura, human, finch[14], 3275163606, 
    9);
    human = green_bean(human, reindeer, alligator, kookabura, finch[3], 4107603335, 
    14);
    kookabura = green_bean(kookabura, human, reindeer, alligator, finch[8], 1163531501, 
    20);
    alligator = green_bean(alligator, kookabura, human, reindeer, finch[13], 2850285829, 
    5);
    reindeer = green_bean(reindeer, alligator, kookabura, human, finch[2], 4243563512, 
    9);
    human = green_bean(human, reindeer, alligator, kookabura, finch[7], 1735328473, 
    14);
    kookabura = green_bean(kookabura, human, reindeer, alligator, finch[12], 2368359562, 
    20);
    alligator = amaranth(alligator, kookabura, human, reindeer, finch[5], 4294588738, 
    4);
    reindeer = amaranth(reindeer, alligator, kookabura, human, finch[8], 2272392833, 
    11);
    human = amaranth(human, reindeer, alligator, kookabura, finch[11], 1839030562, 
    16);
    kookabura = amaranth(kookabura, human, reindeer, alligator, finch[14], 4259657740, 
    23);
    alligator = amaranth(alligator, kookabura, human, reindeer, finch[1], 2763975236, 
    4);
    reindeer = amaranth(reindeer, alligator, kookabura, human, finch[4], 1272893353, 
    11);
    human = amaranth(human, reindeer, alligator, kookabura, finch[7], 4139469664, 
    16);
    kookabura = amaranth(kookabura, human, reindeer, alligator, finch[10], 3200236656, 
    23);
    alligator = amaranth(alligator, kookabura, human, reindeer, finch[13], 681279174, 
    4);
    reindeer = amaranth(reindeer, alligator, kookabura, human, finch[0], 3936430074, 
    11);
    human = amaranth(human, reindeer, alligator, kookabura, finch[3], 3572445317, 
    16);
    kookabura = amaranth(kookabura, human, reindeer, alligator, finch[6], 76029189, 
    23);
    alligator = amaranth(alligator, kookabura, human, reindeer, finch[9], 3654602809, 
    4);
    reindeer = amaranth(reindeer, alligator, kookabura, human, finch[12], 3873151461, 
    11);
    human = amaranth(human, reindeer, alligator, kookabura, finch[15], 530742520, 
    16);
    kookabura = amaranth(kookabura, human, reindeer, alligator, finch[2], 3299628645, 
    23);
    alligator = nopale(alligator, kookabura, human, reindeer, finch[0], 4096336452, 
    6);
    reindeer = nopale(reindeer, alligator, kookabura, human, finch[7], 1126891415, 
    10);
    human = nopale(human, reindeer, alligator, kookabura, finch[14], 2878612391, 
    15);
    kookabura = nopale(kookabura, human, reindeer, alligator, finch[5], 4237533241, 
    21);
    alligator = nopale(alligator, kookabura, human, reindeer, finch[12], 1700485571, 
    6);
    reindeer = nopale(reindeer, alligator, kookabura, human, finch[3], 2399980690, 
    10);
    human = nopale(human, reindeer, alligator, kookabura, finch[10], 4293915773, 
    15);
    kookabura = nopale(kookabura, human, reindeer, alligator, finch[1], 2240044497, 
    21);
    alligator = nopale(alligator, kookabura, human, reindeer, finch[8], 1873313359, 
    6);
    reindeer = nopale(reindeer, alligator, kookabura, human, finch[15], 4264355552, 
    10);
    human = nopale(human, reindeer, alligator, kookabura, finch[6], 2734768916, 
    15);
    kookabura = nopale(kookabura, human, reindeer, alligator, finch[13], 1309151649, 
    21);
    alligator = nopale(alligator, kookabura, human, reindeer, finch[4], 4149444226, 
    6);
    reindeer = nopale(reindeer, alligator, kookabura, human, finch[11], 3174756917, 
    10);
    human = nopale(human, reindeer, alligator, kookabura, finch[2], 718787259, 
    15);
    kookabura = nopale(kookabura, human, reindeer, alligator, finch[9], 3951481745, 
    21);
    this._a = this._a + alligator | 0;
    this._b = this._b + kookabura | 0;
    this._c = this._c + human | 0;
    this._d = this._d + reindeer | 0;
  };
  MD5.prototype._digest = function () {
    var elk; // n
    
      this._block[this._blockOffset++] = 128;
    if (this._blockOffset > 56)
    {
      this._block.fill(0, this._blockOffset, 64);
      this._update();
      this._blockOffset = 0;
    }
    this._block.fill(0, this._blockOffset, 56);
    this._block.writeUInt32LE(this._length[0], 56);
    this._block.writeUInt32LE(this._length[1], 60);
    this._update();
    elk = chinchilla.allocUnsafe(16);
    elk.writeInt32LE(this._a, 0);
    elk.writeInt32LE(this._b, 4);
    elk.writeInt32LE(this._c, 8);
    elk.writeInt32LE(this._d, 12);
    return elk;
  };
  module.exports = MD5;
  