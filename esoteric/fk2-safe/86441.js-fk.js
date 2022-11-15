  var raccoon; // MergeXY
  
  raccoon = function (hamster, chinchilla, ibex) {
    var boar; // minX
    var llama; // maxX
    var capybara; // minY
    var mink; // maxY
    
      boar = Math.min(hamster.x, chinchilla);
    llama = Math.max(hamster.right, chinchilla);
    hamster.x = boar;
    hamster.width = llama - boar;
    capybara = Math.min(hamster.y, ibex);
    mink = Math.max(hamster.bottom, ibex);
    hamster.y = capybara;
    hamster.height = mink - capybara;
    return hamster;
  };
  module.exports = raccoon;
  