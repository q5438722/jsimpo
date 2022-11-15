  function chives(snail) {
    return snail.split("").reduce(function (dunlin, termite) {
      dunlin[termite] = true;
      return dunlin;
    }, 
    {
      
    });
  }
  function bean_sprout(squid, rook) {
    rook = rook || {
      
    };
    return function (woodcock, antelope, goose) {
      return green_bean(woodcock, squid, rook);
    };
  }
  function broccoflower(baboon, bat) {
    var bison; // i
    
      baboon = baboon || {
      
    };
    bat = bat || {
      
    };
    bison = {
      
    };
    Object.keys(bat).forEach(function (tarsier) {
      bison[tarsier] = bat[tarsier];
    });
    Object.keys(baboon).forEach(function (cat) {
      bison[cat] = baboon[cat];
    });
    return bison;
  }
  function green_bean(weasel, beaver, komodo_dragon) {
    if (typeof beaver !== "string")
    {
      throw new TypeError("glob pattern string required");
    }
    if (! komodo_dragon)
      komodo_dragon = {
        
      };
    if (! komodo_dragon.nocomment && beaver.charAt(0) === "#")
    {
      return false;
    }
    if (beaver.trim() === "")
      return weasel === "";
    return new amaranth(beaver, komodo_dragon).match(weasel);
  }
  function amaranth(armadillo, woodpecker) {
    if (! (this instanceof Minimatch))
    {
      return new amaranth(armadillo, woodpecker);
    }
    if (typeof armadillo !== "string")
    {
      throw new TypeError("glob pattern string required");
    }
    if (! woodpecker)
      woodpecker = {
        
      };
    armadillo = armadillo.trim();
    if (raccoon.sep !== "/")
    {
      armadillo = armadillo.split(raccoon.sep).join("/");
    }
    this.options = woodpecker;
    this.set = [];
    this.pattern = armadillo;
    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    this.make();
  }
  function nopale() {
    var quelea; // t
    var butterfly; // e
    var oyster; // r
    
      if (this._made)
      return;
    quelea = this.pattern;
    butterfly = this.options;
    if (! butterfly.nocomment && quelea.charAt(0) === "#")
    {
      this.comment = true;
      return;
    }
    if (! quelea)
    {
      this.empty = true;
      return;
    }
    this.parseNegate();
    oyster = this.globSet = this.braceExpand();
    if (butterfly.debug)
      this.debug = console.error;
    this.debug(this.pattern, oyster);
    oyster = this.globParts = oyster.map(function (stingray) {
      return stingray.split(mantis);
    });
    this.debug(this.pattern, oyster);
    oyster = oyster.map(function (dragonfly, finch, meerkat) {
      return dragonfly.map(this.parse, this);
    }, 
    this);
    this.debug(this.pattern, oyster);
    oyster = oyster.filter(function (alligator) {
      return alligator.indexOf(false) === -1;
    });
    this.debug(this.pattern, oyster);
    this.set = oyster;
  }
  function kohlrabi() {
    var kookabura; // t
    var human; // e
    var reindeer; // r
    var elk; // i
    var ape; // n
    var dinosaur; // a
    
      kookabura = this.pattern;
    human = false;
    reindeer = this.options;
    elk = 0;
    if (reindeer.nonegate)
      return;
    {
      {
        ape = 0;
        dinosaur = kookabura.length;
      }
      for (; ape < dinosaur && kookabura.charAt(ape) === "!"; ape++)
      {
        human = ! human;
        elk++;
      }
    }
    if (elk)
      this.pattern = kookabura.substr(elk);
    this.negate = human;
  }
  function tubers(kouprey, echidna) {
    if (! echidna)
    {
      if (this instanceof Minimatch)
      {
        echidna = this.options;
      }
      else
      {
        echidna = {
          
        };
      }
    }
    kouprey = typeof kouprey === "undefined" ? this.pattern : kouprey;
    if (typeof kouprey === "undefined")
    {
      throw new TypeError("undefined pattern");
    }
    if (echidna.nobrace || ! kouprey.match(new RegExp("\\{.*\\}", "")))
    {
      return [kouprey, ];
    }
    return chinchilla(kouprey);
  }
  function lima_bean(owl, gaur) {
    function azuki_bean() {
      if (swan)
      {
        switch (swan) {
          case "*":
            magpie = magpie + llama;
            snake = true;
            break;

          case "?":
            magpie = magpie + boar;
            snake = true;
            break;

          default:
            magpie = magpie + "\\" + swan;
            break;
          
        }
        tiger.debug("clearStateChar %j %j", swan, magpie);
      }
    }
      var locust; // r
    var magpie; // i
    var snake; // n
    var hummingbird; // a
    var sheep; // s
    var goldfinch; // h
    var swan; // c
    var oryx; // o
    var turtle; // u
    var cormorant; // f
    var cattle; // p
    var tiger; // l
    var lion; // g
    var frog; // v
    var skunk; // d
    var lemur; // b
    var goat; // y
    var wolf; // S
    var gnat; // w
    var quail; // E
    var porpoise; // x
    var chamois; // M
    var otter; // k
    var sand_dollar; // R
    var jaguar; // A
    var dugong; // O
    var water_buffalo; // j
    var sea_urchin; // T
    var grouse; // B
    var sandpiper; // $
    var mule; // L
    var goldfish; // q
    var caribou; // N
    
      if (owl.length > 65536)
    {
      throw new TypeError("pattern is too long");
    }
    locust = this.options;
    if (! locust.noglobstar && owl === "**")
      return hamster;
    if (owl === "")
      return "";
    magpie = "";
    snake = ! ! locust.nocase;
    hummingbird = false;
    sheep = [];
    goldfinch = [];
    oryx = false;
    turtle = -1;
    cormorant = -1;
    cattle = owl.charAt(0) === "." ? "" : locust.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
    tiger = this;
    {
      {
        lion = 0;
        frog = owl.length;
      }
      for (; lion < frog && (skunk = owl.charAt(lion)); lion++)
      {
        this.debug("%s\t%s %s %j", owl, lion, magpie, skunk);
        if (hummingbird && prairie_dog[skunk])
        {
          magpie += "\\" + skunk;
          hummingbird = false;
          continue;
        }
        switch (skunk) {
          case "/":
            return false;

          case "\\":
            azuki_bean();
            hummingbird = true;
            continue;

          case "?":
            

          case "*":
            

          case "+":
            

          case "@":
            

          case "!":
            this.debug("%s\t%s %s %j <-- stateChar", owl, lion, magpie, skunk);
            if (oryx)
            {
              this.debug("  in class");
              if (skunk === "!" && lion === cormorant + 1)
                skunk = "^";
              magpie += skunk;
              continue;
            }
            tiger.debug("call clearStateChar %j", swan);
            azuki_bean();
            if (locust.noext)
              azuki_bean();
            continue;

          case "(":
            if (oryx)
            {
              magpie += "(";
              continue;
            }
            if (! swan)
            {
              magpie += "\\(";
              continue;
            }
            sheep.push({
              type : swan,
              start : lion - 1,
              reStart : magpie.length,
              open : ibex[swan].open,
              close : ibex[swan].close
            });
            magpie += swan === "!" ? "(?:(?!(?:" : "(?:";
            this.debug("plType %j %j", swan, magpie);
            continue;

          case ")":
            if (oryx || ! sheep.length)
            {
              magpie += "\\)";
              continue;
            }
            azuki_bean();
            snake = true;
            lemur = sheep.pop();
            magpie += lemur.close;
            if (lemur.type === "!")
            {
              goldfinch.push(lemur);
            }
            lemur.reEnd = magpie.length;
            continue;

          case "|":
            if (oryx || ! sheep.length || hummingbird)
            {
              magpie += "\\|";
              hummingbird = false;
              continue;
            }
            azuki_bean();
            magpie += "|";
            continue;

          case "[":
            azuki_bean();
            if (oryx)
            {
              magpie += "\\" + skunk;
              continue;
            }
            oryx = true;
            cormorant = lion;
            turtle = magpie.length;
            magpie += skunk;
            continue;

          case "]":
            if (lion === cormorant + 1 || ! oryx)
            {
              magpie += "\\" + skunk;
              hummingbird = false;
              continue;
            }
            if (oryx)
            {
              goat = owl.substring(cormorant + 1, lion);
              try {
                RegExp("[" + goat + "]");
              }
              catch (t) {
                wolf = this.parse(goat, dogfish);
                magpie = magpie.substr(0, turtle) + "\\[" + wolf[0] + "\\]";
                snake = snake || wolf[1];
                oryx = false;
                continue;
              }
            }
            snake = true;
            oryx = false;
            magpie += skunk;
            continue;

          default:
            azuki_bean();
            if (hummingbird)
            {
              hummingbird = false;
            }
            else
              if (prairie_dog[skunk] && ! (skunk === "^" && oryx))
              {
                magpie += "\\";
              }
            magpie += skunk;
          
        }
      }
    }
    if (oryx)
    {
      goat = owl.substr(cormorant + 1);
      wolf = this.parse(goat, dogfish);
      magpie = magpie.substr(0, turtle) + "\\[" + wolf[0];
      snake = snake || wolf[1];
    }
    for (lemur = sheep.pop(); lemur; lemur = sheep.pop())
    {
      gnat = magpie.slice(lemur.reStart + lemur.open.length);
      this.debug("setting tail", magpie, lemur);
      gnat = gnat.replace(new RegExp("((?:\\\\{2}){0,64})(\\\\?)\\|", "g"), function (raven, ram, salmon) {
        if (! salmon)
        {
          salmon = "\\";
        }
        return ram + ram + salmon + "|";
      });
      this.debug("tail=%j\n   %s", gnat, gnat, lemur, magpie);
      quail = lemur.type === "*" ? llama : lemur.type === "?" ? boar : "\\" + lemur.type;
      snake = true;
      magpie = magpie.slice(0, lemur.reStart) + quail + "\\(" + gnat;
    }
    azuki_bean();
    if (hummingbird)
    {
      magpie = magpie + "\\\\";
    }
    porpoise = false;
    switch (magpie.charAt(0)) {
      case ".":
        

      case "[":
        

      case "(":
        porpoise = true;

      
    }
    {
      chamois = goldfinch.length - 1;
      for (; chamois > -1; chamois--)
      {
        otter = goldfinch[chamois];
        sand_dollar = magpie.slice(0, otter.reStart);
        jaguar = magpie.slice(otter.reStart, otter.reEnd - 8);
        dugong = magpie.slice(otter.reEnd - 8, otter.reEnd);
        water_buffalo = magpie.slice(otter.reEnd);
        dugong += water_buffalo;
        sea_urchin = sand_dollar.split("(").length - 1;
        grouse = water_buffalo;
        for (lion = 0; lion < sea_urchin; lion++)
        {
          grouse = grouse.replace(new RegExp("\\)[+*?]?", ""), "");
        }
        water_buffalo = grouse;
        sandpiper = "";
        if (water_buffalo === "" && gaur !== dogfish)
        {
          sandpiper = "$";
        }
        mule = sand_dollar + jaguar + water_buffalo + sandpiper + dugong;
        magpie = mule;
      }
    }
    if (magpie !== "" && snake)
    {
      magpie = "(?=.)" + magpie;
    }
    if (porpoise)
    {
      magpie = cattle + magpie;
    }
    if (gaur === dogfish)
    {
      return [magpie, snake, ];
    }
    if (! snake)
    {
      return spaghetti_squash(owl);
    }
    goldfish = locust.nocase ? "i" : "";
    try {
      caribou = new RegExp("^" + magpie + "$", goldfish);
    }
    catch (t) {
      return new RegExp("$.");
    }
    caribou._glob = owl;
    caribou._src = magpie;
    return caribou;
  }
  function white_radish() {
    var cheetah; // t
    var viper; // e
    var pheasant; // r
    var pony; // i
    var hawk; // n
    
      if (this.regexp || this.regexp === false)
      return this.regexp;
    cheetah = this.set;
    if (! cheetah.length)
    {
      this.regexp = false;
      return this.regexp;
    }
    viper = this.options;
    pheasant = viper.noglobstar ? llama : viper.dot ? capybara : mink;
    pony = viper.nocase ? "i" : "";
    hawk = cheetah.map(function (spoonbill) {
      return spoonbill.map(function (swallow) {
        return swallow === hamster ? pheasant : typeof swallow === "string" ? daikon(swallow) : swallow._src;
      }).join("\\/");
    }).join("|");
    hawk = "^(?:" + hawk + ")$";
    if (this.negate)
      hawk = "^(?!" + hawk + ").*$";
    try {
      this.regexp = new RegExp(hawk, pony);
    }
    catch (t) {
      this.regexp = false;
    }
    return this.regexp;
  }
  function basil(octopus, newt) {
    var caterpillar; // r
    var kingfisher; // i
    var nightingale; // n
    var wombat; // a
    var crane; // s
    var chough; // h
    var goshawk; // c
    
      this.debug("match", octopus, this.pattern);
    if (this.comment)
      return false;
    if (this.empty)
      return octopus === "";
    if (octopus === "/" && newt)
      return true;
    caterpillar = this.options;
    if (raccoon.sep !== "/")
    {
      octopus = octopus.split(raccoon.sep).join("/");
    }
    octopus = octopus.split(mantis);
    this.debug(this.pattern, "split", octopus);
    kingfisher = this.set;
    this.debug(this.pattern, "set", kingfisher);
    for (wombat = octopus.length - 1; wombat >= 0; wombat--)
    {
      nightingale = octopus[wombat];
      if (nightingale)
        break;
    }
    for (wombat = 0; wombat < kingfisher.length; wombat++)
    {
      crane = kingfisher[wombat];
      chough = octopus;
      if (caterpillar.matchBase && crane.length === 1)
      {
        chough = [nightingale, ];
      }
      goshawk = this.matchOne(chough, crane, newt);
      if (goshawk)
      {
        if (caterpillar.flipNegate)
          return true;
        return ! this.negate;
      }
    }
    if (caterpillar.flipNegate)
      return false;
    return this.negate;
  }
  function spaghetti_squash(monkey) {
    return monkey.replace(new RegExp("\\\\(.)", "g"), "$1");
  }
  function daikon(horse) {
    return horse.replace(new RegExp("[-[\\]{}()*+?.,\\\\^$|#\\s]", "g"), "\\$&");
  }
  var raccoon; // path
  var hamster; // GLOBSTAR
  var chinchilla; // expand
  var ibex; // plTypes
  var boar; // qmark
  var llama; // star
  var capybara; // twoStarDot
  var mink; // twoStarNoDot
  var prairie_dog; // reSpecials
  var mantis; // slashSplit
  var dogfish; // SUBPARSE
  
  module.exports = minimatch;
  minimatch.Minimatch = Minimatch;
  raccoon = {
    sep : "/"
  };
  try {
    raccoon = require("path");
  }
  catch (t) {
    
  }
  hamster = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {
    
  };
  chinchilla = require("brace-expansion");
  prairie_dog = chives("().*{}+?[]^$\\!");
  minimatch.filter = filter;
  minimatch.defaults = function (okapi) {
    var worm; // a
    var hornet; // t
    
      if (! okapi || ! Object.keys(okapi).length)
      return minimatch;
    worm = minimatch;
    hornet = function t(quetzal, seahorse, chicken) {
      return worm.minimatch(quetzal, seahorse, broccoflower(okapi, chicken));
    };
    hornet.Minimatch = function t(mallard, aardvark) {
      return new worm.Minimatch(mallard, broccoflower(okapi, aardvark));
    };
    return hornet;
  };
  Minimatch.defaults = function (albatross) {
    if (! albatross || ! Object.keys(albatross).length)
      return Minimatch;
    return minimatch.defaults(albatross).Minimatch;
  };
  Minimatch.prototype.debug = function () {
    
  };
  Minimatch.prototype.make = make;
  Minimatch.prototype.parseNegate = parseNegate;
  minimatch.braceExpand = function (cobra, walrus) {
    return tubers(cobra, walrus);
  };
  Minimatch.prototype.braceExpand = braceExpand;
  Minimatch.prototype.parse = parse;
  minimatch.makeRe = function (pelican, mosquito) {
    return new amaranth(pelican, mosquito || {
      
    }).makeRe();
  };
  Minimatch.prototype.makeRe = makeRe;
  minimatch.match = function (trout, whale, cassowary) {
    var guinea_fowl; // i
    
      cassowary = cassowary || {
      
    };
    guinea_fowl = new amaranth(whale, cassowary);
    trout = trout.filter(function (mouse) {
      return guinea_fowl.match(mouse);
    });
    if (guinea_fowl.options.nonull && ! trout.length)
    {
      trout.push(whale);
    }
    return trout;
  };
  Minimatch.prototype.match = match;
  Minimatch.prototype.matchOne = function (wolverine, koala, giant_panda) {
    var mongoose; // i
    var mandrill; // n
    var moose; // a
    var sea_lion; // s
    var leopard; // h
    var gerbil; // c
    var dog; // o
    var vicuña; // u
    var kangaroo; // f
    var shark; // p
    var wallaby; // l
    var crow; // m
    
      mongoose = this.options;
    this.debug("matchOne", {
      this : this,
      file : wolverine,
      pattern : koala
    });
    this.debug("matchOne", wolverine.length, koala.length);
    {
      {
        mandrill = 0;
        moose = 0;
        sea_lion = wolverine.length;
        leopard = koala.length;
      }
      for (; mandrill < sea_lion && moose < leopard; mandrill++, moose++)
      {
        this.debug("matchOne loop");
        gerbil = koala[moose];
        dog = wolverine[mandrill];
        this.debug(koala, gerbil, dog);
        if (gerbil === false)
          return false;
        if (gerbil === hamster)
        {
          this.debug("GLOBSTAR", [koala, gerbil, dog, ]);
          vicuña = mandrill;
          kangaroo = moose + 1;
          if (kangaroo === leopard)
          {
            this.debug("** at the end");
            for (; mandrill < sea_lion; mandrill++)
            {
              if (wolverine[mandrill] === "." || wolverine[mandrill] === ".." || ! mongoose.dot && wolverine[mandrill].charAt(0) === ".")
                return false;
            }
            return true;
          }
          while (vicuña < sea_lion)
          {
            shark = wolverine[vicuña];
            this.debug("\nglobstar while", wolverine, vicuña, koala, kangaroo, 
            shark);
            if (this.matchOne(wolverine.slice(vicuña), koala.slice(kangaroo), giant_panda))
            {
              this.debug("globstar found match!", vicuña, sea_lion, shark);
              return true;
            }
            else
            {
              if (shark === "." || shark === ".." || ! mongoose.dot && shark.charAt(0) === ".")
              {
                this.debug("dot detected!", wolverine, vicuña, koala, kangaroo);
                break;
              }
              this.debug("globstar swallow a segment, and continue");
              vicuña++;
            }
          }
          if (giant_panda)
          {
            this.debug("\n>>> no match, partial?", wolverine, vicuña, koala, 
            kangaroo);
            if (vicuña === sea_lion)
              return true;
          }
          return false;
        }
        if (typeof gerbil === "string")
        {
          if (mongoose.nocase)
          {
            wallaby = dog.toLowerCase() === gerbil.toLowerCase();
          }
          else
          {
            wallaby = dog === gerbil;
          }
          this.debug("string match", gerbil, dog, wallaby);
        }
        else
        {
          wallaby = dog.match(gerbil);
          this.debug("pattern match", gerbil, dog, wallaby);
        }
        if (! wallaby)
          return false;
      }
    }
    if (mandrill === sea_lion && moose === leopard)
    {
      return true;
    }
    else
      if (mandrill === sea_lion)
      {
        return giant_panda;
      }
      else
        if (moose === leopard)
        {
          crow = mandrill === sea_lion - 1 && wolverine[mandrill] === "";
          return crow;
        }
    throw new Error("wtf?");
  };
  