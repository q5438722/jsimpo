  var raccoon; // Bounce
  
  raccoon = {
    setBounce : function (hamster) {
      this.body.bounciness = hamster;
      return this;
    },
    setMinBounceVelocity : function (chinchilla) {
      this.body.minBounceVelocity = chinchilla;
      return this;
    },
    bounce : {
      get : function () {
        return this.body.bounciness;
      },
      set : function (ibex) {
        this.body.bounciness = ibex;
      }
    }
  };
  module.exports = raccoon;
  