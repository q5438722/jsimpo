  var raccoon; // FindByIndex
  
  raccoon = function (hamster, chinchilla, ibex, boar) {
    var llama; // d
    var capybara; // f
    var mink; // t
    var prairie_dog; // a
    
      if (chinchilla === undefined)
    {
      chinchilla = 0;
    }
    if (ibex === undefined)
    {
      ibex = false;
    }
    if (ibex)
    {
      for (mink = boar.height - 1; mink >= 0; mink--)
      {
        for (capybara = boar.width - 1; capybara >= 0; capybara--)
        {
          prairie_dog = boar.data[mink][capybara];
          if (prairie_dog && prairie_dog.index === hamster)
          {
            if (llama === chinchilla)
            {
              return prairie_dog;
            }
            else
            {
              ;
            }
          }
        }
      }
    }
    else
    {
      for (mink = 0; mink < boar.height; mink++)
      {
        for (capybara = 0; capybara < boar.width; capybara++)
        {
          prairie_dog = boar.data[mink][capybara];
          if (prairie_dog && prairie_dog.index === hamster)
          {
            if (llama === chinchilla)
            {
              return prairie_dog;
            }
            else
            {
              ;
            }
          }
        }
      }
    }
    return null;
  };
  module.exports = raccoon;
  