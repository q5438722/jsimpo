  var raccoon; // PropertyValueSet
  
  raccoon = function (hamster, chinchilla, ibex, boar, llama, capybara) {
    var mink; // u
    var prairie_dog; // d
    var mantis; // o
    
      if (boar === undefined)
    {
      boar = 0;
    }
    if (llama === undefined)
    {
      llama = 0;
    }
    if (capybara === undefined)
    {
      capybara = 1;
    }
    prairie_dog = 0;
    mantis = hamster.length;
    if (capybara === 1)
    {
      for (mink = llama; mink < mantis; mink++)
      {
        hamster[mink][chinchilla] = ibex + prairie_dog * boar;
        prairie_dog++;
      }
    }
    else
    {
      for (mink = llama; mink >= 0; mink--)
      {
        hamster[mink][chinchilla] = ibex + prairie_dog * boar;
        prairie_dog++;
      }
    }
    return hamster;
  };
  module.exports = raccoon;
  