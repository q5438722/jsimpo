  var raccoon; // SetTileIndexCallback
  
  raccoon = function (hamster, chinchilla, ibex, boar) {
    var llama; // i
    var capybara; // len
    
      if (typeof hamster === 'number')
    {
      boar.callbacks[hamster] = (chinchilla !== null) ? {
        callback : chinchilla,
        callbackContext : ibex
      } : undefined;
    }
    else
    {
      {
        llama = + [];
        capybara = hamster.length;
      }
      for (; llama < capybara; llama++)
      {
        boar.callbacks[hamster[llama]] = (chinchilla !== null) ? {
          callback : chinchilla,
          callbackContext : ibex
        } : undefined;
      }
    }
  };
  module.exports = raccoon;
  