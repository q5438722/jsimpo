  module.exports = function e() {
    return function (raccoon, hamster, chinchilla) {
      var ibex; // t
      
          ibex = new Date;
      if (hamster._responseTime)
        return chinchilla();
      hamster._responseTime = true;
      hamster.on("header", function () {
        var boar; // e
        
              boar = new Date - ibex;
        hamster.setHeader("X-Response-Time", boar + "ms");
      });
      chinchilla();
    };
  };
  