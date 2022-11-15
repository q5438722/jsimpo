  var raccoon; // FillStyleCanvas
  var hamster; // LineStyleCanvas
  var chinchilla; // SetTransform
  var ibex; // TriangleCanvasRenderer
  
  raccoon = require("../FillStyleCanvas");
  hamster = require("../LineStyleCanvas");
  chinchilla = require("../../../renderer/canvas/utils/SetTransform");
  ibex = function (boar, llama, capybara, mink) {
    var prairie_dog; // n
    var mantis; // l
    var dogfish; // v
    var snail; // o
    var dunlin; // s
    var termite; // t
    var squid; // d
    var rook; // g
    var woodcock; // m
    
      capybara.addToRenderList(llama);
    prairie_dog = boar.currentContext;
    if (chinchilla(boar, prairie_dog, llama, capybara, mink))
    {
      mantis = llama._displayOriginX;
      dogfish = llama._displayOriginY;
      snail = llama.geom.x1 - mantis;
      dunlin = llama.geom.y1 - dogfish;
      termite = llama.geom.x2 - mantis;
      squid = llama.geom.y2 - dogfish;
      rook = llama.geom.x3 - mantis;
      woodcock = llama.geom.y3 - dogfish;
      prairie_dog.beginPath();
      prairie_dog.moveTo(snail, dunlin);
      prairie_dog.lineTo(termite, squid);
      prairie_dog.lineTo(rook, woodcock);
      prairie_dog.closePath();
      if (llama.isFilled)
      {
        raccoon(prairie_dog, llama);
        prairie_dog.fill();
      }
      if (llama.isStroked)
      {
        hamster(prairie_dog, llama);
        prairie_dog.stroke();
      }
      prairie_dog.restore();
    }
  };
  module.exports = ibex;
  