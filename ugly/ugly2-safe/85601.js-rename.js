  var raccoon; // CONST
  var hamster; // Class
  var chinchilla; // Components
  var ibex; // Rectangle
  var boar; // Tile
  
  raccoon = require("./const/ORIENTATION_CONST");
  hamster = require("../utils/Class");
  chinchilla = require("../gameobjects/components");
  ibex = require("../geom/rectangle");
  boar = new hamster({
    Mixins : [chinchilla.Alpha, chinchilla.Flip, chinchilla.Visible, ],
    initialize : function i(llama, capybara, mink, prairie_dog, mantis, dogfish, 
    snail, 
    dunlin) {
      this.layer = llama;
      this.index = capybara;
      this.x = mink;
      this.y = prairie_dog;
      this.width = mantis;
      this.height = dogfish;
      this.right;
      this.bottom;
      this.baseWidth = snail !== undefined ? snail : mantis;
      this.baseHeight = dunlin !== undefined ? dunlin : dogfish;
      this.pixelX = 0;
      this.pixelY = 0;
      this.updatePixelXY();
      this.properties = {
        
      };
      this.rotation = 0;
      this.collideLeft = false;
      this.collideRight = false;
      this.collideUp = false;
      this.collideDown = false;
      this.faceLeft = false;
      this.faceRight = false;
      this.faceTop = false;
      this.faceBottom = false;
      this.collisionCallback = undefined;
      this.collisionCallbackContext = this;
      this.tint = 16777215;
      this.physics = {
        
      };
    },
    containsPoint : function (termite, squid) {
      return ! (termite < this.pixelX || squid < this.pixelY || termite > this.right || squid > this.bottom);
    },
    copy : function (rook) {
      this.index = rook.index;
      this.alpha = rook.alpha;
      this.properties = rook.properties;
      this.visible = rook.visible;
      this.setFlip(rook.flipX, rook.flipY);
      this.tint = rook.tint;
      this.rotation = rook.rotation;
      this.collideUp = rook.collideUp;
      this.collideDown = rook.collideDown;
      this.collideLeft = rook.collideLeft;
      this.collideRight = rook.collideRight;
      this.collisionCallback = rook.collisionCallback;
      this.collisionCallbackContext = rook.collisionCallbackContext;
      return this;
    },
    getCollisionGroup : function () {
      return this.tileset ? this.tileset.getTileCollisionGroup(this.index) : null;
    },
    getTileData : function () {
      return this.tileset ? this.tileset.getTileData(this.index) : null;
    },
    getLeft : function (woodcock) {
      var antelope; // t
      
          antelope = this.tilemapLayer;
      return antelope ? antelope.tileToWorldX(this.x, woodcock) : this.x * this.baseWidth;
    },
    getRight : function (goose) {
      var baboon; // t
      
          baboon = this.tilemapLayer;
      return baboon ? this.getLeft(goose) + this.width * baboon.scaleX : this.getLeft(goose) + this.width;
    },
    getTop : function (bat) {
      var bison; // t
      
          bison = this.tilemapLayer;
      return bison ? bison.tileToWorldY(this.y, bat) - (this.height - this.baseHeight) * bison.scaleY : this.y * this.baseHeight - (this.height - this.baseHeight);
    },
    getBottom : function (tarsier) {
      var cat; // t
      
          cat = this.tilemapLayer;
      return cat ? this.getTop(tarsier) + this.height * cat.scaleY : this.getTop(tarsier) + this.height;
    },
    getBounds : function (weasel, beaver) {
      if (beaver === undefined)
      {
        beaver = new ibex;
      }
      beaver.x = this.getLeft();
      beaver.y = this.getTop();
      beaver.width = this.getRight() - beaver.x;
      beaver.height = this.getBottom() - beaver.y;
      return beaver;
    },
    getCenterX : function (komodo_dragon) {
      return (this.getLeft(komodo_dragon) + this.getRight(komodo_dragon)) / 2;
    },
    getCenterY : function (armadillo) {
      return (this.getTop(armadillo) + this.getBottom(armadillo)) / 2;
    },
    intersects : function (woodpecker, quelea, butterfly, oyster) {
      return ! (butterfly <= this.pixelX || oyster <= this.pixelY || woodpecker >= this.right || quelea >= this.bottom);
    },
    isInteresting : function (stingray, dragonfly) {
      if (stingray && dragonfly)
      {
        return this.canCollide || this.hasInterestingFace;
      }
      else
        if (stingray)
        {
          return this.collides;
        }
        else
          if (dragonfly)
          {
            return this.hasInterestingFace;
          }
      return false;
    },
    resetCollision : function (finch) {
      var meerkat; // t
      
          if (finch === undefined)
      {
        finch = true;
      }
      this.collideLeft = false;
      this.collideRight = false;
      this.collideUp = false;
      this.collideDown = false;
      this.faceTop = false;
      this.faceBottom = false;
      this.faceLeft = false;
      this.faceRight = false;
      if (finch)
      {
        meerkat = this.tilemapLayer;
        if (meerkat)
        {
          this.tilemapLayer.calculateFacesAt(this.x, this.y);
        }
      }
      return this;
    },
    resetFaces : function () {
      this.faceTop = false;
      this.faceBottom = false;
      this.faceLeft = false;
      this.faceRight = false;
      return this;
    },
    setCollision : function (alligator, kookabura, human, reindeer, elk) {
      var ape; // l
      
          if (kookabura === undefined)
      {
        kookabura = alligator;
      }
      if (human === undefined)
      {
        human = alligator;
      }
      if (reindeer === undefined)
      {
        reindeer = alligator;
      }
      if (elk === undefined)
      {
        elk = true;
      }
      this.collideLeft = alligator;
      this.collideRight = kookabura;
      this.collideUp = human;
      this.collideDown = reindeer;
      this.faceLeft = alligator;
      this.faceRight = kookabura;
      this.faceTop = human;
      this.faceBottom = reindeer;
      if (elk)
      {
        ape = this.tilemapLayer;
        if (ape)
        {
          this.tilemapLayer.calculateFacesAt(this.x, this.y);
        }
      }
      return this;
    },
    setCollisionCallback : function (dinosaur, kouprey) {
      if (dinosaur === null)
      {
        this.collisionCallback = undefined;
        this.collisionCallbackContext = undefined;
      }
      else
      {
        this.collisionCallback = dinosaur;
        this.collisionCallbackContext = kouprey;
      }
      return this;
    },
    setSize : function (echidna, owl, gaur, locust) {
      if (echidna !== undefined)
      {
        this.width = echidna;
      }
      if (owl !== undefined)
      {
        this.height = owl;
      }
      if (gaur !== undefined)
      {
        this.baseWidth = gaur;
      }
      if (locust !== undefined)
      {
        this.baseHeight = locust;
      }
      this.updatePixelXY();
      return this;
    },
    updatePixelXY : function () {
      var magpie; // i
      var snake; // t
      var hummingbird; // e
      
          magpie = this.layer.orientation;
      if (magpie === raccoon.ORTHOGONAL)
      {
        this.pixelX = this.x * this.baseWidth;
        this.pixelY = this.y * this.baseHeight;
      }
      else
        if (magpie === raccoon.ISOMETRIC)
        {
          this.pixelX = (this.x - this.y) * this.baseWidth * .5;
          this.pixelY = (this.x + this.y) * this.baseHeight * .5;
        }
        else
          if (magpie === raccoon.STAGGERED)
          {
            this.pixelX = this.x * this.baseWidth + this.y % 2 * (this.baseWidth / 2);
            this.pixelY = this.y * (this.baseHeight / 2);
          }
          else
            if (magpie === raccoon.HEXAGONAL)
            {
              snake = this.layer.hexSideLength;
              hummingbird = (this.baseHeight - snake) / 2 + snake;
              this.pixelX = this.x * this.baseWidth + this.y % 2 * (this.baseWidth / 2);
              this.pixelY = this.y * hummingbird;
            }
      this.right = this.pixelX + this.baseWidth;
      this.bottom = this.pixelY + this.baseHeight;
      return this;
    },
    destroy : function () {
      this.collisionCallback = undefined;
      this.collisionCallbackContext = undefined;
      this.properties = undefined;
    },
    canCollide : {
      get : function () {
        return this.collideLeft || this.collideRight || this.collideUp || this.collideDown || this.collisionCallback !== undefined;
      }
    },
    collides : {
      get : function () {
        return this.collideLeft || this.collideRight || this.collideUp || this.collideDown;
      }
    },
    hasInterestingFace : {
      get : function () {
        return this.faceTop || this.faceBottom || this.faceLeft || this.faceRight;
      }
    },
    tileset : {
      get : function () {
        var sheep; // i
        var goldfinch; // t
        
              sheep = this.layer.tilemapLayer;
        if (sheep)
        {
          goldfinch = sheep.gidMap[this.index];
          if (goldfinch)
          {
            return goldfinch;
          }
        }
        return null;
      }
    },
    tilemapLayer : {
      get : function () {
        return this.layer.tilemapLayer;
      }
    },
    tilemap : {
      get : function () {
        var swan; // i
        
              swan = this.tilemapLayer;
        return swan ? swan.tilemap : null;
      }
    }
  });
  module.exports = boar;
  