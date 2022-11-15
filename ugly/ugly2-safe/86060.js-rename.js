  var raccoon; // PolygonRender
  var hamster; // Class
  var chinchilla; // Earcut
  var ibex; // GetAABB
  var boar; // GeomPolygon
  var llama; // Shape
  var capybara; // Smooth
  var mink; // Polygon
  
  raccoon = require("./PolygonRender");
  hamster = require("../../../utils/Class");
  chinchilla = require("../../../geom/polygon/Earcut");
  ibex = require("../../../geom/polygon/GetAABB");
  boar = require("../../../geom/polygon/Polygon");
  llama = require("../Shape");
  capybara = require("../../../geom/polygon/Smooth");
  mink = new hamster({
    Extends : llama,
    Mixins : [raccoon, ],
    initialize : function e(prairie_dog, mantis, dogfish, snail, dunlin, termite) {
      var squid; // s
      
          if (mantis === undefined)
      {
        mantis = 0;
      }
      if (dogfish === undefined)
      {
        dogfish = 0;
      }
      llama.call(this, prairie_dog, "Polygon", new boar(snail));
      squid = ibex(this.geom);
      this.setPosition(mantis, dogfish);
      this.setSize(squid.width, squid.height);
      if (dunlin !== undefined)
      {
        this.setFillStyle(dunlin, termite);
      }
      this.updateDisplayOrigin();
      this.updateData();
    },
    smooth : function (rook) {
      var woodcock; // o
      
          if (rook === undefined)
      {
        rook = 1;
      }
      {
        woodcock = 0;
        for (; woodcock < rook; woodcock++)
        {
          capybara(this.geom);
        }
      }
      return this.updateData();
    },
    updateData : function () {
      var antelope; // e
      var goose; // o
      var baboon; // t
      
          antelope = [];
      goose = this.geom.points;
      {
        baboon = 0;
        for (; baboon < goose.length; baboon++)
        {
          antelope.push(goose[baboon].x, goose[baboon].y);
        }
      }
      antelope.push(goose[0].x, goose[0].y);
      this.pathIndexes = chinchilla(antelope);
      this.pathData = antelope;
      return this;
    }
  });
  module.exports = mink;
  