  var raccoon; // AnimationState
  var hamster; // Class
  var chinchilla; // Components
  var ibex; // GameObject
  var boar; // SpriteRender
  var llama; // Sprite
  
  raccoon = require('../../animations/AnimationState');
  hamster = require('../../utils/Class');
  chinchilla = require('../components');
  ibex = require('../GameObject');
  boar = require('./SpriteRender');
  llama = new hamster({
    Extends : ibex,
    Mixins : [chinchilla.Alpha, chinchilla.BlendMode, chinchilla.Depth, chinchilla.Flip, chinchilla.GetBounds, chinchilla.Mask, chinchilla.Origin, chinchilla.Pipeline, chinchilla.ScrollFactor, chinchilla.Size, chinchilla.TextureCrop, chinchilla.Tint, chinchilla.Transform, chinchilla.Visible, boar, ],
    initialize : function Sprite(capybara, mink, prairie_dog, mantis, dogfish) {
      ibex.call(this, capybara, 'Sprite');
      this._crop = this.resetCropObject();
      this.anims = new raccoon(this);
      this.setTexture(mantis, dogfish);
      this.setPosition(mink, prairie_dog);
      this.setSizeToFrame();
      this.setOriginFromFrame();
      this.initPipeline();
    },
    addedToScene : function () {
      this.scene.sys.updateList.add(this);
    },
    removedFromScene : function () {
      this.scene.sys.updateList.remove(this);
    },
    preUpdate : function (snail, dunlin) {
      this.anims.update(snail, dunlin);
    },
    play : function (termite, squid) {
      return this.anims.play(termite, squid);
    },
    playReverse : function (rook, woodcock) {
      return this.anims.playReverse(rook, woodcock);
    },
    playAfterDelay : function (antelope, goose) {
      return this.anims.playAfterDelay(antelope, goose);
    },
    playAfterRepeat : function (baboon, bat) {
      return this.anims.playAfterRepeat(baboon, bat);
    },
    chain : function (bison) {
      return this.anims.chain(bison);
    },
    stop : function () {
      return this.anims.stop();
    },
    stopAfterDelay : function (tarsier) {
      return this.anims.stopAfterDelay(tarsier);
    },
    stopAfterRepeat : function (cat) {
      return this.anims.stopAfterRepeat(cat);
    },
    stopOnFrame : function (weasel) {
      return this.anims.stopOnFrame(weasel);
    },
    toJSON : function () {
      return chinchilla.ToJSON(this);
    },
    preDestroy : function () {
      this.anims.destroy();
      this.anims = undefined;
    }
  });
  module.exports = llama;
  