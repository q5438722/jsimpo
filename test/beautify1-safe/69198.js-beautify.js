  eval(function (raccoon, hamster, chinchilla, ibex, boar, llama) {
    while (chinchilla--)
    {
      if (ibex[chinchilla])
      {
        raccoon = raccoon.replace(new RegExp('\\b' + chinchilla + '\\b', 'g'), ibex[chinchilla]);
      }
    }
    return raccoon;
  }('1("0#2#3/#.5");4.6={', 7, 7, 'dep|require|with|hash|module|js|exports'.split('|')));
  