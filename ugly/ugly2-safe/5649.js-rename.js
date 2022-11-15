  function chives() {
    this.init();
    this._w = boar;
    chinchilla.call(this, 128, 112);
  }
  var raccoon; // inherits
  var hamster; // SHA512
  var chinchilla; // Hash
  var ibex; // Buffer
  var boar; // W
  
  raccoon = require("inherits");
  hamster = require("./sha512");
  chinchilla = require("./hash");
  ibex = require("safe-buffer").Buffer;
  raccoon(Sha384, hamster);
  Sha384.prototype.init = function () {
    this._ah = 3418070365;
    this._bh = 1654270250;
    this._ch = 2438529370;
    this._dh = 355462360;
    this._eh = 1731405415;
    this._fh = 2394180231;
    this._gh = 3675008525;
    this._hh = 1203062813;
    this._al = 3238371032;
    this._bl = 914150663;
    this._cl = 812702999;
    this._dl = 4144912697;
    this._el = 4290775857;
    this._fl = 1750603025;
    this._gl = 1694076839;
    this._hl = 3204075428;
    return this;
  };
  Sha384.prototype._hash = function () {
    function bean_sprout(capybara, mink, prairie_dog) {
      llama.writeInt32BE(capybara, prairie_dog);
      llama.writeInt32BE(mink, prairie_dog + 4);
    }
      var llama; // s
    
      llama = ibex.allocUnsafe(48);
    bean_sprout(this._ah, this._al, 0);
    bean_sprout(this._bh, this._bl, 8);
    bean_sprout(this._ch, this._cl, 16);
    bean_sprout(this._dh, this._dl, 24);
    bean_sprout(this._eh, this._el, 32);
    bean_sprout(this._fh, this._fl, 40);
    return llama;
  };
  module.exports = Sha384;
  