  var raccoon; // GetTarget
  
  raccoon = function (hamster) {
    var chinchilla; // t
    
      if (hamster !== "")
    {
      if (typeof hamster === "string")
      {
        chinchilla = document.getElementById(hamster);
      }
      else
        if (hamster && hamster.nodeType === 1)
        {
          chinchilla = hamster;
        }
    }
    if (! chinchilla)
    {
      chinchilla = document.body;
    }
    return chinchilla;
  };
  module.exports = raccoon;
  