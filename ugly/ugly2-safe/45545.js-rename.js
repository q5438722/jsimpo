  (function () {
    var raccoon; // e
    var hamster; // a
    var chinchilla; // t
    var ibex; // n
    var boar; // r
    var llama; // s
    var capybara; // i
    
      raccoon = document.getElementsByClassName("prettyprint source linenums");
    hamster = 0;
    chinchilla = 0;
    if (raccoon && raccoon[0])
    {
      capybara = document.location.hash.substring(1);
      boar = raccoon[0].getElementsByTagName("li");
      llama = boar.length;
      for (; hamster < llama; hamster++)
      {
        chinchilla++;
        ibex = "line" + chinchilla;
        boar[hamster].id = ibex;
        if (ibex === capybara)
        {
          boar[hamster].className += " selected";
        }
      }
    }
  })();
  