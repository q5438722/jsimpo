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
  }('6 j;6 8;1 k(){6 x={};m.y=1(v,l){l.B(1(e){D(e.s()==j){8=e.q();7 p}7 r});7 8};m.u(x);7 x.t}1 5(){k()}1 0(){}1 9(){5(0()==0()?\'a\':\'b\')}1 d(){6 o={0:1(){}}5(o.0()==o.0()?\'a\':\'b\')}1 c(){6 o={5:5,0:1(){}};o.5(o.0()==o.0()?\'a\':\'b\')}1 4(f,n){j=f;f();C(n,8)}4(9,A);4(d,z);4(c,w);i(9.g()+"//@ h=0");i(d.g()+"//@ h=0");i(c.g()+"//@ h=0");4(9,2);4(d,3);4(c,3);', 
  40, 
  40, 
  'foo|function|||test|log|var|return|lineNumber|test1|||test3|test2|frame||toString|sourceUrl|eval|functionToCatch|catchLineNumber|stackTrace|Error|expectedLineNumber||true|getLineNumber|false|getFunction|stack|captureStackTrace|error|72||prepareStackTrace|65|58|some|assertEquals|if'.split('|'), 
  0, 
  {
    
  }));
  