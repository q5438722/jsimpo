  function chives(mink, prairie_dog) {
    this.flags = mink;
    this.required = ~ mink.indexOf("<");
    this.optional = ~ mink.indexOf("[");
    this.bool = ! ~ mink.indexOf("-no-");
    mink = mink.split(new RegExp("[ ,|]+", ""));
    if (mink.length > 1 && ! new RegExp("^[[<]", "").test(mink[1]))
      this.short = mink.shift();
    this.long = mink.shift();
    this.description = prairie_dog || "";
  }
  function bean_sprout(mantis) {
    this.commands = [];
    this.options = [];
    this._execs = {
      
    };
    this._allowUnknownOption = false;
    this._args = [];
    this._name = mantis || "";
  }
  function broccoflower(dogfish) {
    return dogfish.split("-").reduce(function (snail, dunlin) {
      return snail + dunlin[0].toUpperCase() + dunlin.slice(1);
    });
  }
  function green_bean(termite, squid) {
    var rook; // n
    
      rook = Math.max(0, squid - termite.length);
    return termite + Array(rook + 1).join(" ");
  }
  function amaranth(woodcock, antelope) {
    var goose; // n
    
      antelope = antelope || [];
    {
      goose = 0;
      for (; goose < antelope.length; goose++)
      {
        if (antelope[goose] == "--help" || antelope[goose] == "-h")
        {
          woodcock.outputHelp();
          process.exit(0);
        }
      }
    }
  }
  function nopale(baboon) {
    var bat; // e
    
      bat = baboon.name + (baboon.variadic === true ? "..." : "");
    return baboon.required ? "<" + bat + ">" : "[" + bat + "]";
  }
  function kohlrabi(bison) {
    try {
      if (capybara.statSync(bison).isFile())
      {
        return true;
      }
    }
    catch (t) {
      return false;
    }
  }
  var raccoon; // EventEmitter
  var hamster; // spawn
  var chinchilla; // readlink
  var ibex; // path
  var boar; // dirname
  var llama; // basename
  var capybara; // fs
  
  raccoon = require("events").EventEmitter;
  hamster = require("child_process").spawn;
  chinchilla = require("graceful-readlink").readlinkSync;
  ibex = require("path");
  boar = ibex.dirname;
  llama = ibex.basename;
  capybara = require("fs");
  exports = module.exports = new Command;
  exports.Command = Command;
  exports.Option = Option;
  Option.prototype.name = function () {
    return this.long.replace("--", "").replace("no-", "");
  };
  Option.prototype.is = function (tarsier) {
    return tarsier == this.short || tarsier == this.long;
  };
  Command.prototype.__proto__ = raccoon.prototype;
  Command.prototype.command = function (cat, weasel, beaver) {
    var komodo_dragon; // i
    var armadillo; // o
    
      beaver = beaver || {
      
    };
    komodo_dragon = cat.split(new RegExp(" +", ""));
    armadillo = new bean_sprout(komodo_dragon.shift());
    if (weasel)
    {
      armadillo.description(weasel);
      this.executables = true;
      this._execs[armadillo._name] = true;
      if (beaver.isDefault)
        this.defaultExecutable = armadillo._name;
    }
    armadillo._noHelp = ! ! beaver.noHelp;
    this.commands.push(armadillo);
    armadillo.parseExpectedArgs(komodo_dragon);
    armadillo.parent = this;
    if (weasel)
      return this;
    return armadillo;
  };
  Command.prototype.arguments = function (woodpecker) {
    return this.parseExpectedArgs(woodpecker.split(new RegExp(" +", "")));
  };
  Command.prototype.addImplicitHelpCommand = function () {
    this.command("help [cmd]", "display help for [cmd]");
  };
  Command.prototype.parseExpectedArgs = function (quelea) {
    if (! quelea.length)
      return;
    quelea.forEach(function (butterfly) {
      var oyster; // e
      
          oyster = {
        required : false,
        name : "",
        variadic : false
      };
      switch (butterfly[0]) {
        case "<":
          oyster.required = true;
          oyster.name = butterfly.slice(1, -1);
          break;

        case "[":
          oyster.name = butterfly.slice(1, -1);
          break;

        
      }
      if (oyster.name.length > 3 && oyster.name.slice(-3) === "...")
      {
        oyster.variadic = true;
        oyster.name = oyster.name.slice(0, -3);
      }
      if (oyster.name)
      {
        this._args.push(oyster);
      }
    });
    return this;
  };
  Command.prototype.action = function (stingray) {
    var dragonfly; // t
    var finch; // e
    var meerkat; // n
    
      dragonfly = function (alligator, kookabura) {
      var human; // e
      
          alligator = alligator || [];
      kookabura = kookabura || [];
      human = this.parseOptions(kookabura);
      amaranth(this, human.unknown);
      if (human.unknown.length > 0)
      {
        this.unknownOption(human.unknown[0]);
      }
      if (human.args.length)
        alligator = human.args.concat(alligator);
      this._args.forEach(function (reindeer, elk) {
        if (reindeer.required && null == alligator[elk])
        {
          this.missingArgument(reindeer.name);
        }
        else
          if (reindeer.variadic)
          {
            if (elk !== this._args.length - 1)
            {
              this.variadicArgNotLast(reindeer.name);
            }
            alligator[elk] = alligator.splice(elk);
          }
      });
      if (this._args.length)
      {
        alligator[this._args.length] = this;
      }
      else
      {
        alligator.push(this);
      }
      stingray.apply(this, alligator);
    };
    finch = this.parent || this;
    meerkat = finch === this ? "*" : this._name;
    finch.on(meerkat, dragonfly);
    if (this._alias)
      finch.on(this._alias, dragonfly);
    return this;
  };
  Command.prototype.option = function (ape, dinosaur, kouprey, echidna) {
    var owl; // o
    var gaur; // r
    var locust; // s
    var magpie; // a
    var snake; // p
    
      {
      owl = this;
      gaur = new chives(ape, dinosaur);
      locust = gaur.name();
      magpie = broccoflower(locust);
    }
    if (typeof kouprey != "function")
    {
      if (kouprey instanceof RegExp)
      {
        snake = kouprey;
        kouprey = function (hummingbird, sheep) {
          var goldfinch; // n
          
                  goldfinch = snake.exec(hummingbird);
          return goldfinch ? goldfinch[0] : sheep;
        };
      }
      else
      {
        echidna = kouprey;
        kouprey = null;
      }
    }
    if (false == gaur.bool || gaur.optional || gaur.required)
    {
      if (false == gaur.bool)
        echidna = true;
      if (undefined !== echidna)
        owl[magpie] = echidna;
    }
    this.options.push(gaur);
    this.on(locust, function (swan) {
      if (null !== swan && kouprey)
        swan = kouprey(swan, undefined === this[magpie] ? echidna : this[magpie]);
      if ("boolean" == typeof this[magpie] || "undefined" == typeof this[magpie])
      {
        if (null == swan)
        {
          owl[magpie] = gaur.bool ? true : false;
        }
        else
        {
          owl[magpie] = swan;
        }
      }
      else
        if (null !== swan)
        {
          owl[magpie] = swan;
        }
    });
    return this;
  };
  Command.prototype.allowUnknownOption = function (oryx) {
    this._allowUnknownOption = arguments.length === 0 || oryx;
    return this;
  };
  Command.prototype.parse = function (turtle) {
    var cormorant; // e
    var cattle; // n
    var tiger; // i
    var lion; // o
    
      if (this.executables)
      this.addImplicitHelpCommand();
    this.rawArgs = turtle;
    this._name = this._name || llama(turtle[1], ".js");
    if (this.executables && turtle.length < 3 && ! this.defaultExecutable)
    {
      turtle.push("--help");
    }
    cormorant = this.parseOptions(this.normalize(turtle.slice(2)));
    cattle = this.args = cormorant.args;
    tiger = this.parseArgs(this.args, cormorant.unknown);
    if (this._execs[lion] && typeof this._execs[lion] != "function")
    {
      return this.executeSubCommand(turtle, cattle, cormorant.unknown);
    }
    else
      if (this.defaultExecutable)
      {
        cattle.unshift();
        return this.executeSubCommand(turtle, cattle, cormorant.unknown);
      }
    return tiger;
  };
  Command.prototype.executeSubCommand = function (frog, skunk, lemur) {
    var goat; // i
    var wolf; // o
    var gnat; // r
    var quail; // s
    var porpoise; // a
    var chamois; // p
    var otter; // u
    
      skunk = skunk.concat(lemur);
    if (! skunk.length)
      this.help();
    if ("help" == skunk[0] && 1 == skunk.length)
      this.help();
    if ("help" == skunk[0])
    {
      skunk[0] = skunk[1];
      skunk[1] = "--help";
    }
    goat = frog[1];
    wolf = llama(goat, ".js") + "-" + skunk[0];
    quail = chinchilla(goat);
    if (quail !== goat && quail.charAt(0) !== "/")
    {
      quail = ibex.join(boar(goat), quail);
    }
    gnat = boar(quail);
    porpoise = ibex.join(gnat, wolf);
    chamois = false;
    if (kohlrabi(porpoise + ".js"))
    {
      wolf = porpoise + ".js";
      chamois = true;
    }
    else
      if (kohlrabi(porpoise))
      {
        wolf = porpoise;
      }
    skunk = skunk.slice(1);
    if (process.platform !== "win32")
    {
      if (chamois)
      {
        skunk.unshift(porpoise);
        skunk = (process.execArgv || []).concat(skunk);
        otter = hamster("node", skunk, {
          stdio : "inherit",
          customFds : [0, 1, 2, ]
        });
      }
      else
      {
        otter = hamster(wolf, skunk, {
          stdio : "inherit",
          customFds : [0, 1, 2, ]
        });
      }
    }
    else
    {
      skunk.unshift(porpoise);
      otter = hamster(process.execPath, skunk, {
        stdio : "inherit"
      });
    }
    otter.on("close", process.exit.bind(process));
    otter.on("error", function (sand_dollar) {
      if (sand_dollar.code == "ENOENT")
      {
        console.error("\n  %s(1) does not exist, try --help\n", wolf);
      }
      else
        if (sand_dollar.code == "EACCES")
        {
          console.error("\n  %s(1) not executable. try chmod or run with root\n", 
          wolf);
        }
      process.exit(1);
    });
    this.runningCommand = otter;
  };
  Command.prototype.normalize = function (jaguar) {
    var dugong; // e
    var water_buffalo; // n
    var sea_urchin; // i
    var grouse; // o
    var sandpiper; // r
    var mule; // s
    
      dugong = [];
    {
      {
        sandpiper = 0;
        mule = jaguar.length;
      }
      for (; sandpiper < mule; ++ sandpiper)
      {
        water_buffalo = jaguar[sandpiper];
        if (sandpiper > 0)
        {
          sea_urchin = this.optionFor(jaguar[sandpiper - 1]);
        }
        if (water_buffalo === "--")
        {
          dugong = dugong.concat(jaguar.slice(sandpiper));
          break;
        }
        else
          if (sea_urchin && sea_urchin.required)
          {
            dugong.push(water_buffalo);
          }
          else
            if (water_buffalo.length > 1 && "-" == water_buffalo[0] && "-" != water_buffalo[1])
            {
              water_buffalo.slice(1).split("").forEach(function (goldfish) {
                dugong.push("-" + goldfish);
              });
            }
            else
              if (new RegExp("^--", "").test(water_buffalo) && ~ (grouse = water_buffalo.indexOf("=")))
              {
                dugong.push(water_buffalo.slice(0, grouse), water_buffalo.slice(grouse + 1));
              }
              else
              {
                dugong.push(water_buffalo);
              }
      }
    }
    return dugong;
  };
  Command.prototype.parseArgs = function (caribou, raven) {
    var ram; // n
    
      if (caribou.length)
    {
      ram = caribou[0];
      if (this.listeners(ram).length)
      {
        this.emit(caribou.shift(), caribou, raven);
      }
      else
      {
        this.emit("*", caribou);
      }
    }
    else
    {
      amaranth(this, raven);
      if (raven.length > 0)
      {
        this.unknownOption(raven[0]);
      }
    }
    return this;
  };
  Command.prototype.optionFor = function (salmon) {
    var cheetah; // e
    var viper; // n
    
      {
      {
        cheetah = 0;
        viper = this.options.length;
      }
      for (; cheetah < viper; ++ cheetah)
      {
        if (this.options[cheetah].is(salmon))
        {
          return this.options[cheetah];
        }
      }
    }
  };
  Command.prototype.parseOptions = function (pheasant) {
    var pony; // e
    var hawk; // n
    var spoonbill; // i
    var swallow; // o
    var octopus; // r
    var newt; // s
    var caterpillar; // a
    
      {
      pony = [];
      hawk = pheasant.length;
    }
    newt = [];
    {
      caterpillar = 0;
      for (; caterpillar < hawk; ++ caterpillar)
      {
        octopus = pheasant[caterpillar];
        if ("--" == octopus)
        {
          spoonbill = true;
          continue;
        }
        if (spoonbill)
        {
          pony.push(octopus);
          continue;
        }
        swallow = this.optionFor(octopus);
        if (swallow)
        {
          if (swallow.required)
          {
            octopus = pheasant[++ caterpillar];
            if (null == octopus)
              return this.optionMissingArgument(swallow);
            this.emit(swallow.name(), octopus);
          }
          else
            if (swallow.optional)
            {
              octopus = pheasant[caterpillar + 1];
              if (null == octopus || "-" == octopus[0] && "-" != octopus)
              {
                octopus = null;
              }
              else
              {
                ++ caterpillar;
              }
              this.emit(swallow.name(), octopus);
            }
            else
            {
              this.emit(swallow.name());
            }
          continue;
        }
        if (octopus.length > 1 && "-" == octopus[0])
        {
          newt.push(octopus);
          if (pheasant[caterpillar + 1] && "-" != pheasant[caterpillar + 1][0])
          {
            newt.push(pheasant[++ caterpillar]);
          }
          continue;
        }
        pony.push(octopus);
      }
    }
    return {
      args : pony,
      unknown : newt
    };
  };
  Command.prototype.opts = function () {
    var kingfisher; // t
    var nightingale; // e
    var wombat; // n
    var crane; // i
    
      {
      kingfisher = {
        
      };
      nightingale = this.options.length;
    }
    {
      wombat = 0;
      for (; wombat < nightingale; wombat++)
      {
        crane = broccoflower(this.options[wombat].name());
        kingfisher[crane] = crane === "version" ? this._version : this[crane];
      }
    }
    return kingfisher;
  };
  Command.prototype.missingArgument = function (chough) {
    console.error();
    console.error("  error: missing required argument `%s'", chough);
    console.error();
    process.exit(1);
  };
  Command.prototype.optionMissingArgument = function (goshawk, monkey) {
    console.error();
    if (monkey)
    {
      console.error("  error: option `%s' argument missing, got `%s'", goshawk.flags, 
      monkey);
    }
    else
    {
      console.error("  error: option `%s' argument missing", goshawk.flags);
    }
    console.error();
    process.exit(1);
  };
  Command.prototype.unknownOption = function (horse) {
    if (this._allowUnknownOption)
      return;
    console.error();
    console.error("  error: unknown option `%s'", horse);
    console.error();
    process.exit(1);
  };
  Command.prototype.variadicArgNotLast = function (okapi) {
    console.error();
    console.error("  error: variadic arguments must be last `%s'", okapi);
    console.error();
    process.exit(1);
  };
  Command.prototype.version = function (worm, hornet) {
    if (0 == arguments.length)
      return this._version;
    this._version = worm;
    hornet = hornet || "-V, --version";
    this.option(hornet, "output the version number");
    this.on("version", function () {
      process.stdout.write(worm + "\n");
      process.exit(0);
    });
    return this;
  };
  Command.prototype.description = function (quetzal) {
    if (0 === arguments.length)
      return this._description;
    this._description = quetzal;
    return this;
  };
  Command.prototype.alias = function (seahorse) {
    if (0 == arguments.length)
      return this._alias;
    this._alias = seahorse;
    return this;
  };
  Command.prototype.usage = function (chicken) {
    var mallard; // e
    var aardvark; // n
    
      mallard = this._args.map(function (albatross) {
      return nopale(albatross);
    });
    aardvark = "[options]" + (this.commands.length ? " [command]" : "") + (this._args.length ? " " + mallard.join(" ") : "");
    if (0 == arguments.length)
      return this._usage || aardvark;
    this._usage = chicken;
    return this;
  };
  Command.prototype.name = function () {
    return this._name;
  };
  Command.prototype.largestOptionLength = function () {
    return this.options.reduce(function (cobra, walrus) {
      return Math.max(cobra, walrus.flags.length);
    }, 
    0);
  };
  Command.prototype.optionHelp = function () {
    var pelican; // e
    
      pelican = this.largestOptionLength();
    return [green_bean("-h, --help", pelican) + "  " + "output usage information", ].concat(this.options.map(function (mosquito) {
      return green_bean(mosquito.flags, pelican) + "  " + mosquito.description;
    })).join("\n");
  };
  Command.prototype.commandHelp = function () {
    var trout; // t
    var whale; // n
    
      if (! this.commands.length)
      return "";
    trout = this.commands.filter(function (wolverine) {
      return ! wolverine._noHelp;
    }).map(function (cassowary) {
      var guinea_fowl; // e
      
          guinea_fowl = cassowary._args.map(function (mouse) {
        return nopale(mouse);
      }).join(" ");
      return [cassowary._name + (cassowary._alias ? "|" + cassowary._alias : "") + (cassowary.options.length ? " [options]" : "") + " " + guinea_fowl, cassowary.description(), ];
    });
    whale = trout.reduce(function (koala, giant_panda) {
      return Math.max(koala, giant_panda[0].length);
    }, 
    0);
    return ["", "  Commands:", "", trout.map(function (mongoose) {
      var mandrill; // e
      
          mandrill = mongoose[1] ? "  " + mongoose[1] : "";
      return green_bean(mongoose[0], whale) + mandrill;
    }).join("\n").replace(new RegExp("^", "gm"), "    "), "", ].join("\n");
  };
  Command.prototype.helpInformation = function () {
    var moose; // t
    var sea_lion; // e
    var leopard; // n
    var gerbil; // i
    var dog; // o
    var vicuña; // r
    
      moose = [];
    if (this._description)
    {
      moose = ["  " + this._description, "", ];
    }
    sea_lion = this._name;
    if (this._alias)
    {
      sea_lion = sea_lion + "|" + this._alias;
    }
    leopard = ["", "  Usage: " + sea_lion + " " + this.usage(), "", ];
    gerbil = [];
    dog = this.commandHelp();
    if (dog)
      gerbil = [dog, ];
    vicuña = ["  Options:", "", "" + this.optionHelp().replace(new RegExp("^", "gm"), "    "), "", "", ];
    return leopard.concat(gerbil).concat(moose).concat(vicuña).join("\n");
  };
  Command.prototype.outputHelp = function (kangaroo) {
    if (! kangaroo)
    {
      kangaroo = function (shark) {
        return shark;
      };
    }
    process.stdout.write(kangaroo(this.helpInformation()));
    this.emit("--help");
  };
  Command.prototype.help = function (wallaby) {
    this.outputHelp(wallaby);
    process.exit();
  };
  