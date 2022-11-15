  var raccoon; // gulp
  var hamster; // console
  var chinchilla; // fs
  var ibex; // autoprefixer
  var boar; // chmod
  var llama; // clone
  var capybara; // gulpif
  var mink; // header
  var prairie_dog; // less
  var mantis; // minifyCSS
  var dogfish; // plumber
  var snail; // print
  var dunlin; // rename
  var termite; // replace
  var squid; // uglify
  var rook; // replaceExt
  var woodcock; // watch
  var antelope; // config
  var goose; // tasks
  var baboon; // configSetup
  var bat; // install
  var bison; // banner
  var tarsier; // comments
  var cat; // log
  var weasel; // settings
  var beaver; // globs
  var komodo_dragon; // assets
  var armadillo; // output
  var woodpecker; // source
  
  {
    raccoon = require("gulp");
    hamster = require("better-console");
    chinchilla = require("fs");
    ibex = require("gulp-autoprefixer");
    boar = require("gulp-chmod");
    llama = require("gulp-clone");
    capybara = require("gulp-if");
    mink = require("gulp-header");
    prairie_dog = require("gulp-less");
    mantis = require("gulp-clean-css");
    dogfish = require("gulp-plumber");
    snail = require("gulp-print").default;
    dunlin = require("gulp-rename");
    termite = require("gulp-replace");
    squid = require("gulp-uglify");
    rook = require("replace-ext");
    woodcock = require("gulp-watch");
    antelope = require("../config/docs");
    goose = require("../config/tasks");
    baboon = require("../config/project/config");
    bat = require("../config/project/install");
    bison = goose.banner;
    tarsier = goose.regExp.comments;
    cat = goose.log;
    weasel = goose.settings;
  }
  require("../collections/internal")(raccoon);
  module.exports = function () {
    antelope = baboon.addDerivedValues(antelope);
    beaver = antelope.globs;
    komodo_dragon = antelope.paths.assets;
    armadillo = antelope.paths.output;
    woodpecker = antelope.paths.source;
    raccoon.watch(["src/**/*.*", ], function (quelea) {
      hamster.clear();
      return raccoon.src(quelea.path, {
        base : "src/"
      }).pipe(raccoon.dest(armadillo.less)).pipe(snail(cat.created));
    });
    raccoon.watch(["examples/**/*.*", ], function (butterfly) {
      hamster.clear();
      return raccoon.src(butterfly.path, {
        base : "examples/"
      }).pipe(raccoon.dest(armadillo.examples)).pipe(snail(cat.created));
    });
    raccoon.watch([woodpecker.config, woodpecker.definitions + "/**/*.less", woodpecker.site + "/**/*.{overrides,variables}", woodpecker.themes + "/**/*.{overrides,variables}", ], 
    function (oyster) {
      var stingray; // s
      var dragonfly; // p
      var finch; // i
      var meerkat; // t
      var alligator; // n
      var kookabura; // o
      var human; // c
      
          raccoon.src(oyster.path).pipe(snail(cat.modified));
      human = oyster.path.indexOf("theme.config") !== -1 || oyster.path.indexOf("site.variables") !== -1;
      alligator = oyster.path.indexOf(woodpecker.themes) !== -1;
      kookabura = oyster.path.indexOf(woodpecker.site) !== -1;
      if (human)
      {
        return;
      }
      else
        if (alligator)
        {
          hamster.log("Change detected in packaged theme");
          stingray = rook(oyster.path, ".less");
          stingray = stingray.replace(goose.regExp.theme, woodpecker.definitions);
        }
        else
          if (kookabura)
          {
            hamster.log("Change detected in site theme");
            stingray = rook(oyster.path, ".less");
            stingray = stingray.replace(woodpecker.site, woodpecker.definitions);
          }
          else
          {
            hamster.log("Change detected in definition");
            stingray = oyster.path;
          }
      if (chinchilla.existsSync(stingray))
      {
        dragonfly = raccoon.src(stingray).pipe(dogfish()).pipe(prairie_dog(weasel.less)).pipe(termite(tarsier.variables.in, tarsier.variables.out)).pipe(termite(tarsier.large.in, tarsier.large.out)).pipe(termite(tarsier.small.in, tarsier.small.out)).pipe(termite(tarsier.tiny.in, tarsier.tiny.out)).pipe(ibex(weasel.prefix)).pipe(capybara(antelope.hasPermission, boar(antelope.permission)));
        meerkat = dragonfly.pipe(llama());
        finch = dragonfly.pipe(llama());
        meerkat.pipe(dogfish()).pipe(termite(komodo_dragon.source, komodo_dragon.uncompressed)).pipe(mink(bison, weasel.header)).pipe(raccoon.dest(armadillo.uncompressed)).pipe(snail(cat.created)).on("end", function () {
          raccoon.start("package uncompressed docs css");
        });
        finch.pipe(dogfish()).pipe(termite(komodo_dragon.source, komodo_dragon.compressed)).pipe(mantis(weasel.minify)).pipe(dunlin(weasel.rename.minCSS)).pipe(mink(bison, weasel.header)).pipe(raccoon.dest(armadillo.compressed)).pipe(snail(cat.created)).on("end", function () {
          raccoon.start("package compressed docs css");
        });
      }
      else
      {
        hamster.log("Cannot find UI definition at path", stingray);
      }
    });
    raccoon.watch([woodpecker.definitions + "/**/*.js", ], function (reindeer) {
      raccoon.src(reindeer.path).pipe(dogfish()).pipe(capybara(antelope.hasPermission, boar(antelope.permission))).pipe(raccoon.dest(armadillo.uncompressed)).pipe(snail(cat.created)).pipe(squid(weasel.uglify)).pipe(dunlin(weasel.rename.minJS)).pipe(raccoon.dest(armadillo.compressed)).pipe(snail(cat.created)).on("end", function () {
        raccoon.start("package compressed docs js");
        raccoon.start("package uncompressed docs js");
      });
    });
    raccoon.watch([woodpecker.themes + "/**/assets/**/" + beaver.components + "?(s).*", ], 
    function (elk) {
      raccoon.src(elk.path, {
        base : woodpecker.themes
      }).pipe(capybara(antelope.hasPermission, boar(antelope.permission))).pipe(raccoon.dest(armadillo.themes)).pipe(snail(cat.created));
    });
  };
  