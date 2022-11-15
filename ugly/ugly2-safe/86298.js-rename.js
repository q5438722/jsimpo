  var raccoon; // CanvasPool
  var hamster; // MeasureText
  
  raccoon = require("../../display/canvas/CanvasPool");
  hamster = function (chinchilla) {
    var ibex; // a
    var boar; // t
    var llama; // n
    var capybara; // r
    var mink; // s
    var prairie_dog; // o
    var mantis; // i
    var dogfish; // l
    var snail; // v
    var dunlin; // c
    var termite; // f
    var squid; // d
    var rook; // g
    var woodcock; // x
    var antelope; // h
    var goose; // S
    
      ibex = raccoon.create(this);
    boar = ibex.getContext("2d");
    chinchilla.syncFont(ibex, boar);
    llama = boar.measureText(chinchilla.testString);
    if ("actualBoundingBoxAscent" in llama)
    {
      capybara = llama.actualBoundingBoxAscent;
      mink = llama.actualBoundingBoxDescent;
      raccoon.remove(ibex);
      return {
        ascent : capybara,
        descent : mink,
        fontSize : capybara + mink
      };
    }
    prairie_dog = Math.ceil(llama.width * chinchilla.baselineX);
    mantis = prairie_dog;
    dogfish = 2 * mantis;
    mantis = mantis * chinchilla.baselineY | 0;
    ibex.width = prairie_dog;
    ibex.height = dogfish;
    boar.fillStyle = "#f00";
    boar.fillRect(0, 0, prairie_dog, dogfish);
    boar.font = chinchilla._font;
    boar.textBaseline = "alphabetic";
    boar.fillStyle = "#000";
    boar.fillText(chinchilla.testString, 0, mantis);
    snail = {
      ascent : 0,
      descent : 0,
      fontSize : 0
    };
    dunlin = boar.getImageData(0, 0, prairie_dog, dogfish);
    if (! dunlin)
    {
      snail.ascent = mantis;
      snail.descent = mantis + 6;
      snail.fontSize = snail.ascent + snail.descent;
      raccoon.remove(ibex);
      return snail;
    }
    termite = dunlin.data;
    squid = prairie_dog * 4;
    goose = false;
    for (rook = 0; rook < mantis; rook++)
    {
      for (woodcock = 0; woodcock < squid; woodcock += 4)
      {
        if (termite[antelope + woodcock] !== 255)
        {
          goose = true;
          break;
        }
      }
      if (! goose)
      {
        ;
      }
      else
      {
        break;
      }
    }
    snail.ascent = mantis - rook;
    goose = false;
    for (rook = dogfish; rook > mantis; rook--)
    {
      for (woodcock = 0; woodcock < squid; woodcock += 4)
      {
        if (termite[antelope + woodcock] !== 255)
        {
          goose = true;
          break;
        }
      }
      if (! goose)
      {
        ;
      }
      else
      {
        break;
      }
    }
    snail.descent = rook - mantis;
    snail.fontSize = snail.ascent + snail.descent;
    raccoon.remove(ibex);
    return snail;
  };
  module.exports = hamster;
  