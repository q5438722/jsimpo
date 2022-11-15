  module.exports = function responseTime() {
    return function (raccoon, hamster, chinchilla) {
      var ibex; // start
      
          ibex = new Date;
      if (hamster._responseTime)
        return chinchilla();
      hamster._responseTime = ! ! [];
      hamster.on('header', function () {
        var boar; // duration
        
              boar = new Date - ibex;
        hamster.setHeader('X-Response-Time', boar + 'ms');
      });
      chinchilla();
    };
  };
  