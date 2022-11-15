const Bounce = { setBounce: function (n) {
    this.body.bounciness = n;return this;
  }, setMinBounceVelocity: function (n) {
    this.body.minBounceVelocity = n;return this;
  }, bounce: { get: function () {
      return this.body.bounciness;
    }, set: function (n) {
      this.body.bounciness = n;
    } } };
module.exports = Bounce;
