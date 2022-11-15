"use strict";
  function chives(capybara, mink) {
    var prairie_dog; // r
    
      this.type = capybara;
    this.p = new raccoon(mink.p, 16);
    this.red = mink.prime ? raccoon.red(mink.prime) : raccoon.mont(this.p);
    this.zero = new raccoon(0).toRed(this.red);
    this.one = new raccoon(1).toRed(this.red);
    this.two = new raccoon(2).toRed(this.red);
    this.n = mink.n && new raccoon(mink.n, 16);
    this.g = mink.g && this.pointFromJSON(mink.g, mink.gRed);
    this._wnafT1 = new Array(4);
    this._wnafT2 = new Array(4);
    this._wnafT3 = new Array(4);
    this._wnafT4 = new Array(4);
    prairie_dog = this.n && this.p.div(this.n);
    if (! prairie_dog || prairie_dog.cmpn(100) > 0)
    {
      this.redN = null;
    }
    else
    {
      this._maxwellTrick = true;
      this.redN = this.n.toRed(this.red);
    }
  }
  function bean_sprout(mantis, dogfish) {
    this.curve = mantis;
    this.type = dogfish;
    this.precomputed = null;
  }
  var raccoon; // BN
  var hamster; // elliptic
  var chinchilla; // utils
  var ibex; // getNAF
  var boar; // getJSF
  var llama; // assert
  
  raccoon = require("bn.js");
  hamster = require("../../elliptic");
  chinchilla = hamster.utils;
  ibex = chinchilla.getNAF;
  boar = chinchilla.getJSF;
  llama = chinchilla.assert;
  module.exports = BaseCurve;
  BaseCurve.prototype.point = function e() {
    throw new Error("Not implemented");
  };
  BaseCurve.prototype.validate = function e() {
    throw new Error("Not implemented");
  };
  BaseCurve.prototype._fixedNafMul = function e(snail, dunlin) {
    var termite; // n
    var squid; // i
    var rook; // o
    var woodcock; // s
    var antelope; // a
    var goose; // u
    var baboon; // l
    var bat; // p
    var bison; // d
    
      llama(snail.precomputed);
    termite = snail._getDoubles();
    squid = ibex(dunlin, 1);
    rook = (1 << termite.step + 1) - (termite.step % 2 === 0 ? 2 : 1);
    rook = rook / 3;
    woodcock = [];
    {
      antelope = 0;
      for (; antelope < squid.length; antelope += termite.step)
      {
        goose = 0;
        {
          dunlin = antelope + termite.step - 1;
          for (; dunlin >= antelope; dunlin--)
            goose = (goose << 1) + squid[dunlin];
        }
        woodcock.push(goose);
      }
    }
    baboon = this.jpoint(null, null, null);
    bat = this.jpoint(null, null, null);
    {
      bison = rook;
      for (; bison > 0; bison--)
      {
        antelope = 0;
        for (; antelope < woodcock.length; antelope++)
        {
          goose = woodcock[antelope];
          if (goose === bison)
            bat = bat.mixedAdd(termite.points[antelope]);
          else
            if (goose === - bison)
              bat = bat.mixedAdd(termite.points[antelope].neg());
        }
        baboon = baboon.add(bat);
      }
    }
    return baboon.toP();
  };
  BaseCurve.prototype._wnafMul = function e(tarsier, cat) {
    var weasel; // n
    var beaver; // i
    var komodo_dragon; // o
    var armadillo; // s
    var woodpecker; // a
    var quelea; // u
    var butterfly; // l
    
      weasel = 4;
    beaver = tarsier._getNAFPoints(4);
    weasel = beaver.wnd;
    komodo_dragon = beaver.points;
    armadillo = ibex(cat, weasel);
    woodpecker = this.jpoint(null, null, null);
    {
      quelea = armadillo.length - 1;
      for (; quelea >= 0; quelea--)
      {
        cat = 0;
        for (; quelea >= 0 && armadillo[quelea] === 0; quelea--)
          cat++;
        if (quelea >= 0)
          cat++;
        woodpecker = woodpecker.dblp(cat);
        if (quelea < 0)
          break;
        butterfly = armadillo[quelea];
        llama(butterfly !== 0);
        if (tarsier.type === "affine")
        {
          if (butterfly > 0)
            woodpecker = woodpecker.mixedAdd(komodo_dragon[butterfly - 1 >> 1]);
          else
            woodpecker = woodpecker.mixedAdd(komodo_dragon[- butterfly - 1 >> 1].neg());
        }
        else
        {
          if (butterfly > 0)
            woodpecker = woodpecker.add(komodo_dragon[butterfly - 1 >> 1]);
          else
            woodpecker = woodpecker.add(komodo_dragon[- butterfly - 1 >> 1].neg());
        }
      }
    }
    return tarsier.type === "affine" ? woodpecker.toP() : woodpecker;
  };
  BaseCurve.prototype._wnafMulAdd = function e(oyster, stingray, dragonfly, finch, meerkat) {
    var alligator; // s
    var kookabura; // a
    var human; // u
    var reindeer; // l
    var elk; // p
    var ape; // d
    var dinosaur; // h
    var kouprey; // f
    var echidna; // v
    var owl; // c
    var gaur; // g
    var locust; // m
    var magpie; // y
    var snake; // w
    var hummingbird; // B
    var sheep; // A
    var goldfinch; // b
    var swan; // N
    var oryx; // _
    var turtle; // P
    
      alligator = this._wnafT1;
    kookabura = this._wnafT2;
    human = this._wnafT3;
    reindeer = 0;
    {
      elk = 0;
      for (; elk < finch; elk++)
      {
        ape = stingray[elk];
        dinosaur = ape._getNAFPoints(oyster);
        alligator[elk] = dinosaur.wnd;
        kookabura[elk] = dinosaur.points;
      }
    }
    {
      elk = finch - 1;
      for (; elk >= 1; elk -= 2)
      {
        kouprey = elk - 1;
        echidna = elk;
        if (alligator[kouprey] !== 1 || alligator[echidna] !== 1)
        {
          human[kouprey] = ibex(dragonfly[kouprey], alligator[kouprey]);
          human[echidna] = ibex(dragonfly[echidna], alligator[echidna]);
          reindeer = Math.max(human[kouprey].length, reindeer);
          reindeer = Math.max(human[echidna].length, reindeer);
          continue;
        }
        owl = [stingray[kouprey], null, null, stingray[echidna], ];
        if (stingray[kouprey].y.cmp(stingray[echidna].y) === 0)
        {
          owl[1] = stingray[kouprey].add(stingray[echidna]);
          owl[2] = stingray[kouprey].toJ().mixedAdd(stingray[echidna].neg());
        }
        else
          if (stingray[kouprey].y.cmp(stingray[echidna].y.redNeg()) === 0)
          {
            owl[1] = stingray[kouprey].toJ().mixedAdd(stingray[echidna]);
            owl[2] = stingray[kouprey].add(stingray[echidna].neg());
          }
          else
          {
            owl[1] = stingray[kouprey].toJ().mixedAdd(stingray[echidna]);
            owl[2] = stingray[kouprey].toJ().mixedAdd(stingray[echidna].neg());
          }
        gaur = [-3, -1, -5, -7, 0, 7, 5, 1, 3, ];
        locust = boar(dragonfly[kouprey], dragonfly[echidna]);
        reindeer = Math.max(locust[0].length, reindeer);
        human[kouprey] = new Array(reindeer);
        human[echidna] = new Array(reindeer);
        {
          magpie = 0;
          for (; magpie < reindeer; magpie++)
          {
            snake = locust[0][magpie] | 0;
            hummingbird = locust[1][magpie] | 0;
            human[kouprey][magpie] = gaur[(snake + 1) * 3 + (hummingbird + 1)];
            human[echidna][magpie] = 0;
            kookabura[kouprey] = owl;
          }
        }
      }
    }
    sheep = this.jpoint(null, null, null);
    goldfinch = this._wnafT4;
    {
      elk = reindeer;
      for (; elk >= 0; elk--)
      {
        swan = 0;
        while (elk >= 0)
        {
          oryx = true;
          {
            magpie = 0;
            for (; magpie < finch; magpie++)
            {
              goldfinch[magpie] = human[magpie][elk] | 0;
              if (goldfinch[magpie] !== 0)
                oryx = false;
            }
          }
          if (! oryx)
            break;
          swan++;
          elk--;
        }
        if (elk >= 0)
          swan++;
        sheep = sheep.dblp(swan);
        if (elk < 0)
          break;
        {
          magpie = 0;
          for (; magpie < finch; magpie++)
          {
            turtle = goldfinch[magpie];
            if (turtle === 0)
              continue;
            else
              if (turtle > 0)
                ape = kookabura[magpie][turtle - 1 >> 1];
              else
                if (turtle < 0)
                  ape = kookabura[magpie][- turtle - 1 >> 1].neg();
            if (ape.type === "affine")
              sheep = sheep.mixedAdd(ape);
            else
              sheep = sheep.add(ape);
          }
        }
      }
    }
    {
      elk = 0;
      for (; elk < finch; elk++)
        kookabura[elk] = null;
    }
    if (meerkat)
      return sheep;
    else
      return sheep.toP();
  };
  BaseCurve.BasePoint = BasePoint;
  BasePoint.prototype.eq = function e() {
    throw new Error("Not implemented");
  };
  BasePoint.prototype.validate = function e() {
    return this.curve.validate(this);
  };
  BaseCurve.prototype.decodePoint = function e(cormorant, cattle) {
    var tiger; // n
    var lion; // i
    
      cormorant = chinchilla.toArray(cormorant, cattle);
    tiger = this.p.byteLength();
    if ((cormorant[0] === 4 || cormorant[0] === 6 || cormorant[0] === 7) && cormorant.length - 1 === 2 * tiger)
    {
      if (cormorant[0] === 6)
        llama(cormorant[cormorant.length - 1] % 2 === 0);
      else
        if (cormorant[0] === 7)
          llama(cormorant[cormorant.length - 1] % 2 === 1);
      lion = this.point(cormorant.slice(1, 1 + tiger), cormorant.slice(1 + tiger, 1 + 2 * tiger));
      return lion;
    }
    else
      if ((cormorant[0] === 2 || cormorant[0] === 3) && cormorant.length - 1 === tiger)
      {
        return this.pointFromX(cormorant.slice(1, 1 + tiger), cormorant[0] === 3);
      }
    throw new Error("Unknown point format");
  };
  BasePoint.prototype.encodeCompressed = function e(frog) {
    return this.encode(frog, true);
  };
  BasePoint.prototype._encode = function e(skunk) {
    var lemur; // r
    var goat; // n
    
      lemur = this.curve.p.byteLength();
    goat = this.getX().toArray("be", lemur);
    if (skunk)
      return [this.getY().isEven() ? 2 : 3, ].concat(goat);
    return [4, ].concat(goat, this.getY().toArray("be", lemur));
  };
  BasePoint.prototype.encode = function e(wolf, gnat) {
    return chinchilla.encode(this._encode(gnat), wolf);
  };
  BasePoint.prototype.precompute = function e(quail) {
    var porpoise; // r
    
      if (this.precomputed)
      return this;
    porpoise = {
      doubles : null,
      naf : null,
      beta : null
    };
    porpoise.naf = this._getNAFPoints(8);
    porpoise.doubles = this._getDoubles(4, quail);
    porpoise.beta = this._getBeta();
    this.precomputed = porpoise;
    return this;
  };
  BasePoint.prototype._hasDoubles = function e(chamois) {
    var otter; // r
    
      if (! this.precomputed)
      return false;
    otter = this.precomputed.doubles;
    if (! otter)
      return false;
    return otter.points.length >= Math.ceil((chamois.bitLength() + 1) / otter.step);
  };
  BasePoint.prototype._getDoubles = function e(sand_dollar, jaguar) {
    var dugong; // n
    var water_buffalo; // i
    var sea_urchin; // o
    var grouse; // s
    
      if (this.precomputed && this.precomputed.doubles)
      return this.precomputed.doubles;
    dugong = [this, ];
    water_buffalo = this;
    for (; sea_urchin < jaguar; )
    {
      grouse = 0;
      for (; grouse < sand_dollar; grouse++)
        water_buffalo = water_buffalo.dbl();
      dugong.push(water_buffalo);
    }
    return {
      step : sand_dollar,
      points : dugong
    };
  };
  BasePoint.prototype._getNAFPoints = function e(sandpiper) {
    var mule; // r
    var goldfish; // n
    var caribou; // i
    var raven; // o
    
      if (this.precomputed && this.precomputed.naf)
      return this.precomputed.naf;
    mule = [this, ];
    goldfish = (1 << sandpiper) - 1;
    caribou = goldfish === 1 ? null : this.dbl();
    {
      raven = 1;
      for (; raven < goldfish; raven++)
        mule[raven] = mule[raven - 1].add(caribou);
    }
    return {
      wnd : sandpiper,
      points : mule
    };
  };
  BasePoint.prototype._getBeta = function e() {
    return null;
  };
  BasePoint.prototype.dblp = function e(ram) {
    var salmon; // r
    var cheetah; // n
    
      salmon = this;
    {
      cheetah = 0;
      for (; cheetah < ram; cheetah++)
        salmon = salmon.dbl();
    }
    return salmon;
  };
  