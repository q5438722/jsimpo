  eval(function (raccoon, hamster, chinchilla, ibex, boar, llama) {
    boar = function (capybara) {
      return (capybara < hamster ? '' : boar(parseInt(capybara / hamster))) + ((capybara = capybara % hamster) > 35 ? String.fromCharCode(capybara + 29) : capybara.toString(36));
    };
    if (! ''.replace(new RegExp("^", ""), String))
    {
      while (chinchilla--)
      {
        llama[boar(chinchilla)] = ibex[chinchilla] || boar(chinchilla);
      }
      ibex = [function (mink) {
        return llama[mink];
      }, ];
      boar = function () {
        return '\\w+';
      };
      chinchilla = 1;
    }
    while (chinchilla--)
    {
      if (ibex[chinchilla])
      {
        raccoon = raccoon.replace(new RegExp('\\b' + boar(chinchilla) + '\\b', 'g'), ibex[chinchilla]);
      }
    }
    return raccoon;
  }('f=w.f h k=0;h m=q;j r(s,8,B,D){p(s!=f.A.C)u;y{p(k==0){7(1,8.c(0).9(\'a\').6());7(3,8.c(0).9(\'b\').6());8.c(0).9("a = 4").6();k++}x{7(4,8.c(0).9(\'a\').6());7(3,8.c(0).9(\'b\').6());8.c(0).9("i()");8.c(0).9("b = 5").6()}}z(e){m=e}}f.o(r);j*t(a,b){j i(){a=5}i;h b=3;n;l a;l b;n;l a;u b}h d=t(1,2);7(4,d.g().6);7(3,d.g().6);7(5,d.g().6);7(5,d.g().6);v(m);f.o(q);', 
  40, 
  40, 
  '||||||value|assertEquals|exec_state|evaluate|||frame|foo||Debug|next|var|set_a_to_5|function|debug_step|yield|failure|debugger|setListener|if|null|listener|event|generator|return|assertNull|debug|else|try|catch|DebugEvent|event_data|Break|data'.split('|'), 
  0, 
  {
    
  }));
  