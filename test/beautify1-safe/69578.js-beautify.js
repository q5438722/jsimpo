  eval(function (raccoon, hamster, chinchilla, ibex, boar, llama) {
    while (chinchilla--)
    {
      if (ibex[chinchilla])
      {
        raccoon = raccoon.replace(new RegExp('\\b' + chinchilla + '\\b', 'g'), ibex[chinchilla]);
      }
    }
    return raccoon;
  }('0.1([],2(0){', 3, 3, 'require|ensure|function'.split('|')));
  