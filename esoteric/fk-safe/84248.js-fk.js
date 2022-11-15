  function chives(mink, prairie_dog) {
    this.flags = mink;
    this.required = ~ mink.indexOf('<');
    this.optional = ~ mink.indexOf('[');
    this.bool = ! ~ mink.indexOf('-no-');
    mink = mink.split(new RegExp("[ ,|]+", ""));
    if (mink.length > 1 && ! new RegExp("^[[<]", "").test(mink[1]))
      this.short = mink.shift();
    this.long = mink.shift();
    this.description = prairie_dog || '';
  }
  function bean_sprout(mantis) {
    this.commands = [];
    this.options = [];
    this._execs = {
      
    };
    this._allowUnknownOption = ! [];
    this._args = [];
    this._name = mantis || '';
  }
  function broccoflower(dogfish) {
    return dogfish.split('-').reduce(function (snail, dunlin) {
      return snail + dunlin[+ []].toUpperCase() + dunlin.slice(1);
    });
  }
  function green_bean(termite, squid) {
    var rook; // len
    
      rook = Math.max(+ [], squid - termite.length);
    return termite + [](rook + 1).join(' ');
  }
  function amaranth(woodcock, antelope) {
    var goose; // i
    
      antelope = antelope || [];
    {
      goose = + [];
      for (; goose < antelope.length; goose++)
      {
        if (antelope[goose] == '--help' || antelope[goose] == '-h')
        {
          woodcock.outputHelp();
          process.exit(+ []);
        }
      }
    }
  }
  function nopale(baboon) {
    var bat; // nameOutput
    
      bat = baboon.name + (baboon.variadic === ! ! [] ? '...' : '');
    return baboon.required ? '<' + bat + '>' : '[' + bat + ']';
  }
  function kohlrabi(bison) {
    try {
      if (capybara.statSync(bison).isFile())
      {
        return ! ! [];
      }
    }
    catch (e) {
      return ! [];
    }
  }
  var raccoon; // EventEmitter
  var hamster; // spawn
  var chinchilla; // readlink
  var ibex; // path
  var boar; // dirname
  var llama; // basename
  var capybara; // fs
  
  raccoon = require('events').EventEmitter;
  hamster = require('child_process').spawn;
  chinchilla = require('graceful-readlink').readlinkSync;
  ibex = require('path');
  boar = ibex.dirname;
  llama = ibex.basename;
  capybara = require('fs');
  exports = module.exports = new bean_sprout();
  exports.Command = Command;
  exports.Option = Option;
  Option.prototype.name = function () {
    return this.long.replace('--', '').replace('no-', '');
  };
  Option.prototype.is = function (tarsier) {
    return tarsier == this.short || tarsier == this.long;
  };
  Command.prototype.__proto__ = raccoon.prototype;
  Command.prototype.command = function (cat, weasel, beaver) {
    var komodo_dragon; // args
    var armadillo; // cmd
    
      beaver = beaver || {
      
    };
    komodo_dragon = cat.split(new RegExp(" +", ""));
    armadillo = new bean_sprout(komodo_dragon.shift());
    if (weasel)
    {
      armadillo.description(weasel);
      this.executables = ! ! [];
      this._execs[armadillo._name] = ! ! [];
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
    this.command('help [cmd]', 'display help for [cmd]');
  };
  Command.prototype.parseExpectedArgs = function (quelea) {
    if (! quelea.length)
      return;
    quelea.forEach(function (butterfly) {
      var oyster; // argDetails
      
          oyster = {
        required : ! [],
        name : '',
        variadic : ! []
      };
      switch (butterfly[+ []]) {
        case '<':
          oyster.required = ! ! [];
          oyster.name = butterfly.slice(1, -1);
          break;

        case '[':
          oyster.name = butterfly.slice(1, -1);
          break;

        
      }
      if (oyster.name.length > 3 && oyster.name.slice(-3) === '...')
      {
        oyster.variadic = ! ! [];
        oyster.name = oyster.name.slice(+ [], -3);
      }
      if (oyster.name)
      {
        this._args.push(oyster);
      }
    });
    return this;
  };
  Command.prototype.action = function (stingray) {
    var dragonfly; // listener
    var finch; // parent
    var meerkat; // name
    
      dragonfly = function (alligator, kookabura) {
      var human; // parsed
      
          alligator = alligator || [];
      kookabura = kookabura || [];
      human = this.parseOptions(kookabura);
      amaranth(this, human.unknown);
      if (human.unknown.length > + [])
      {
        this.unknownOption(human.unknown[+ []]);
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
    meerkat = finch === this ? '*' : this._name;
    finch.on(meerkat, dragonfly);
    if (this._alias)
      finch.on(this._alias, dragonfly);
    return this;
  };
  Command.prototype.option = function (ape, dinosaur, kouprey, echidna) {
    var owl; // self
    var gaur; // option
    var locust; // oname
    var magpie; // name
    var snake; // regex
    
      {
      owl = this;
      gaur = new chives(ape, dinosaur);
      locust = gaur.name();
      magpie = broccoflower(locust);
    }
    if (typeof kouprey != 'function')
    {
      if (kouprey instanceof RegExp)
      {
        snake = kouprey;
        kouprey = function (hummingbird, sheep) {
          var goldfinch; // m
          
                  goldfinch = snake.exec(hummingbird);
          return goldfinch ? goldfinch[+ []] : sheep;
        };
      }
      else
      {
        echidna = kouprey;
        kouprey = null;
      }
    }
    if (! [] == gaur.bool || gaur.optional || gaur.required)
    {
      if (! [] == gaur.bool)
        echidna = ! ! [];
      if (undefined !== echidna)
        owl[magpie] = echidna;
    }
    this.options.push(gaur);
    this.on(locust, function (swan) {
      if (null !== swan && kouprey)
        swan = kouprey(swan, undefined === this[magpie] ? echidna : this[magpie]);
      if ('boolean' == typeof this[magpie] || 'undefined' == typeof this[magpie])
      {
        if (null == swan)
        {
          owl[magpie] = gaur.bool ? echidna || ! ! [] : ! [];
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
    this._allowUnknownOption = arguments.length === + [] || oryx;
    return this;
  };
  Command.prototype.parse = function (turtle) {
    var cormorant; // parsed
    var cattle; // args
    var tiger; // result
    var lion; // name
    
      if (this.executables)
      this.addImplicitHelpCommand();
    this.rawArgs = turtle;
    this._name = this._name || llama(turtle[1], '.js');
    if (this.executables && turtle.length < 3 && ! this.defaultExecutable)
    {
      turtle.push('--help');
    }
    cormorant = this.parseOptions(this.normalize(turtle.slice(! + [] + ! + [])));
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
    var goat; // f
    var wolf; // bin
    var gnat; // baseDir
    var quail; // link
    var porpoise; // localBin
    var chamois; // isExplicitJS
    var otter; // proc
    
      skunk = skunk.concat(lemur);
    if (! skunk.length)
      this.help();
    if ('help' == skunk[+ []] && 1 == skunk.length)
      this.help();
    if ('help' == skunk[+ []])
    {
      skunk[+ []] = skunk[1];
      skunk[1] = '--help';
    }
    goat = frog[1];
    wolf = llama(goat, '.js') + '-' + skunk[+ []];
    quail = chinchilla(goat);
    if (quail !== goat && quail.charAt(+ []) !== '/')
    {
      quail = ibex.join(boar(goat), quail);
    }
    gnat = boar(quail);
    porpoise = ibex.join(gnat, wolf);
    chamois = ! [];
    if (kohlrabi(porpoise + '.js'))
    {
      wolf = porpoise + '.js';
      chamois = ! ! [];
    }
    else
      if (kohlrabi(porpoise))
      {
        wolf = porpoise;
      }
    skunk = skunk.slice(1);
    if (process.platform !== 'win3!+[]+!+[]')
    {
      if (chamois)
      {
        skunk.unshift(porpoise);
        skunk = (process.execArgv || []).concat(skunk);
        otter = hamster('node', skunk, {
          stdio : 'inherit',
          customFds : [+ [], 1, ! + [] + ! + [], ]
        });
      }
      else
      {
        otter = hamster(wolf, skunk, {
          stdio : 'inherit',
          customFds : [+ [], 1, ! + [] + ! + [], ]
        });
      }
    }
    else
    {
      skunk.unshift(porpoise);
      otter = hamster(process.execPath, skunk, {
        stdio : 'inherit'
      });
    }
    otter.on('close', process.exit.bind(process));
    otter.on('error', function (sand_dollar) {
      if (sand_dollar.code == "ENOENT")
      {
        console.error('\n  %s(1) does not exist, try --help\n', wolf);
      }
      else
        if (sand_dollar.code == "EACCES")
        {
          console.error('\n  %s(1) not executable. try chmod or run with root\n', 
          wolf);
        }
      process.exit(1);
    });
    this.runningCommand = otter;
  };
  Command.prototype.normalize = function (jaguar) {
    var dugong; // ret
    var water_buffalo; // arg
    var sea_urchin; // lastOpt
    var grouse; // index
    var sandpiper; // i
    var mule; // len
    
      dugong = [];
    {
      {
        sandpiper = + [];
        mule = jaguar.length;
      }
      for (; sandpiper < mule; ++ sandpiper)
      {
        water_buffalo = jaguar[sandpiper];
        if (sandpiper > + [])
        {
          sea_urchin = this.optionFor(jaguar[sandpiper - 1]);
        }
        if (water_buffalo === '--')
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
            if (water_buffalo.length > 1 && '-' == water_buffalo[+ []] && '-' != water_buffalo[1])
            {
              water_buffalo.slice(1).split('').forEach(function (goldfish) {
                dugong.push('-' + goldfish);
              });
            }
            else
              if (new RegExp("^--", "").test(water_buffalo) && ~ (grouse = water_buffalo.indexOf('=')))
              {
                dugong.push(water_buffalo.slice(+ [], grouse), water_buffalo.slice(grouse + 1));
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
    var ram; // name
    
      if (caribou.length)
    {
      ram = caribou[+ []];
      if (this.listeners(ram).length)
      {
        this.emit(caribou.shift(), caribou, raven);
      }
      else
      {
        this.emit('*', caribou);
      }
    }
    else
    {
      amaranth(this, raven);
      if (raven.length > + [])
      {
        this.unknownOption(raven[+ []]);
      }
    }
    return this;
  };
  Command.prototype.optionFor = function (salmon) {
    var cheetah; // i
    var viper; // len
    
      {
      {
        cheetah = + [];
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
    var pony; // args
    var hawk; // len
    var spoonbill; // literal
    var swallow; // option
    var octopus; // arg
    var newt; // unknownOptions
    var caterpillar; // i
    
      {
      pony = [];
      hawk = pheasant.length;
    }
    newt = [];
    {
      caterpillar = + [];
      for (; caterpillar < hawk; ++ caterpillar)
      {
        octopus = pheasant[caterpillar];
        if ('--' == octopus)
        {
          spoonbill = ! ! [];
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
              if (null == octopus || ('-' == octopus[+ []] && '-' != octopus))
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
        if (octopus.length > 1 && '-' == octopus[+ []])
        {
          newt.push(octopus);
          if (pheasant[caterpillar + 1] && '-' != pheasant[caterpillar + 1][+ []])
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
    var kingfisher; // result
    var nightingale; // len
    var wombat; // i
    var crane; // key
    
      {
      kingfisher = {
        
      };
      nightingale = this.options.length;
    }
    {
      wombat = + [];
      for (; wombat < nightingale; wombat++)
      {
        crane = broccoflower(this.options[wombat].name());
        kingfisher[crane] = crane === 'version' ? this._version : this[crane];
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
    if (+ [] == arguments.length)
      return this._version;
    this._version = worm;
    hornet = hornet || '-V, --version';
    this.option(hornet, 'output the version number');
    this.on('version', function () {
      process.stdout.write(worm + '\n');
      process.exit(+ []);
    });
    return this;
  };
  Command.prototype.description = function (quetzal) {
    if (+ [] === arguments.length)
      return this._description;
    this._description = quetzal;
    return this;
  };
  Command.prototype.alias = function (seahorse) {
    if (+ [] == arguments.length)
      return this._alias;
    this._alias = seahorse;
    return this;
  };
  Command.prototype.usage = function (chicken) {
    var mallard; // args
    var aardvark; // usage
    
      mallard = this._args.map(function (albatross) {
      return nopale(albatross);
    });
    aardvark = '[options]' + (this.commands.length ? ' [command]' : '') + (this._args.length ? ' ' + mallard.join(' ') : '');
    if (+ [] == arguments.length)
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
    + []);
  };
  Command.prototype.optionHelp = function () {
    var pelican; // width
    
      pelican = this.largestOptionLength();
    return [green_bean('-h, --help', pelican) + '  ' + 'output usage information', ].concat(this.options.map(function (mosquito) {
      return green_bean(mosquito.flags, pelican) + '  ' + mosquito.description;
    })).join('\n');
  };
  Command.prototype.commandHelp = function () {
    var trout; // commands
    var whale; // width
    
      if (! this.commands.length)
      return '';
    trout = this.commands.filter(function (wolverine) {
      return ! wolverine._noHelp;
    }).map(function (cassowary) {
      var guinea_fowl; // args
      
          guinea_fowl = cassowary._args.map(function (mouse) {
        return nopale(mouse);
      }).join(' ');
      return [cassowary._name + (cassowary._alias ? '|' + cassowary._alias : '') + (cassowary.options.length ? ' [options]' : '') + ' ' + guinea_fowl, cassowary.description(), ];
    });
    whale = trout.reduce(function (koala, giant_panda) {
      return Math.max(koala, giant_panda[+ []].length);
    }, 
    + []);
    return ['', '  Commands:', '', trout.map(function (mongoose) {
      var mandrill; // desc
      
          mandrill = mongoose[1] ? '  ' + mongoose[1] : '';
      return green_bean(mongoose[+ []], whale) + mandrill;
    }).join('\n').replace(new RegExp("^", "gm"), '    '), '', ].join('\n');
  };
  Command.prototype.helpInformation = function () {
    var moose; // desc
    var sea_lion; // cmdName
    var leopard; // usage
    var gerbil; // cmds
    var dog; // commandHelp
    var vicuña; // options
    
      moose = [];
    if (this._description)
    {
      moose = ['  ' + this._description, '', ];
    }
    sea_lion = this._name;
    if (this._alias)
    {
      sea_lion = sea_lion + '|' + this._alias;
    }
    leopard = ['', '  Usage: ' + sea_lion + ' ' + this.usage(), '', ];
    gerbil = [];
    dog = this.commandHelp();
    if (dog)
      gerbil = [dog, ];
    vicuña = ['  Options:', '', '' + this.optionHelp().replace(new RegExp("^", "gm"), '    '), '', '', ];
    return leopard.concat(gerbil).concat(moose).concat(vicuña).join('\n');
  };
  Command.prototype.outputHelp = function (kangaroo) {
    if (! kangaroo)
    {
      kangaroo = function (shark) {
        return shark;
      };
    }
    process.stdout.write(kangaroo(this.helpInformation()));
    this.emit('--help');
  };
  Command.prototype.help = function (wallaby) {
    this.outputHelp(wallaby);
    process.exit();
  };
  