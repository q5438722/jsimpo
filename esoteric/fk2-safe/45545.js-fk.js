  (function () {
    var raccoon; // source
    var hamster; // i
    var chinchilla; // lineNumber
    var ibex; // lineId
    var boar; // lines
    var llama; // totalLines
    var capybara; // anchorHash
    
      raccoon = document.getElementsByClassName('prettyprint source linenums');
    hamster = + [];
    chinchilla = + [];
    if (raccoon && raccoon[+ []])
    {
      capybara = document.location.hash.substring(1);
      boar = raccoon[+ []].getElementsByTagName('li');
      llama = boar.length;
      for (; hamster < llama; hamster++)
      {
        chinchilla++;
        ibex = 'line' + chinchilla;
        boar[hamster].id = ibex;
        if (ibex === capybara)
        {
          boar[hamster].className += ' selected';
        }
      }
    }
  })();
  