  var raccoon; // Utils
  var hamster; // StrokePathWebGL
  
  raccoon = require("../../renderer/webgl/Utils");
  hamster = function (chinchilla, ibex, boar, llama, capybara) {
    var mink; // o
    var prairie_dog; // v
    var mantis; // i
    var dogfish; // h
    var snail; // s
    var dunlin; // n
    var termite; // p
    var squid; // k
    var rook; // L
    var woodcock; // b
    var antelope; // c
    
      mink = chinchilla.strokeTint;
    prairie_dog = raccoon.getTintAppendFloatAlpha(ibex.strokeColor, ibex.strokeAlpha * boar);
    mink.TL = prairie_dog;
    mink.TR = prairie_dog;
    mink.BL = prairie_dog;
    mink.BR = prairie_dog;
    mantis = ibex.pathData;
    dogfish = mantis.length - 1;
    snail = ibex.lineWidth;
    dunlin = snail / 2;
    if (! ibex.closePath)
    {
      dogfish = dogfish - 2;
    }
    {
      rook = 2;
      for (; rook < dogfish; rook += 2)
      {
        woodcock = mantis[rook] - llama;
        antelope = mantis[rook + 1] - capybara;
        chinchilla.batchLine(termite, squid, woodcock, antelope, dunlin, dunlin, snail, 
        rook - 2, 
        ibex.closePath ? rook === dogfish - 1 : false);
      }
    }
  };
  module.exports = hamster;
  