  define(["can/util/library", "can/util/string", ], function (raccoon) {
    var hamster; // digitTest
    var chinchilla; // keyBreaker
    var ibex; // paramTest
    var boar; // prep
    
      {
      hamster = new RegExp("^\\d+$", "");
      chinchilla = new RegExp("([^\\[\\]]+)|(\\[\\])", "g");
      ibex = new RegExp("([^?#]*)(#.*)?$", "");
      boar = function (llama) {
        return decodeURIComponent(llama.replace(new RegExp("\\+", "g"), ' '));
      };
    }
    raccoon.extend(raccoon, {
      deparam : function (capybara) {
        var mink; // data
        var prairie_dog; // pairs
        var mantis; // lastPart
        
              mink = {
          
        };
        if (capybara && ibex.test(capybara))
        {
          prairie_dog = capybara.split('&');
          raccoon.each(prairie_dog, function (dogfish) {
            var snail; // parts
            var dunlin; // key
            var termite; // value
            var squid; // current
            var rook; // j
            var woodcock; // l
            
                      {
              snail = dogfish.split('=');
              dunlin = boar(snail.shift());
              termite = boar(snail.join('='));
              squid = mink;
            }
            if (dunlin)
            {
              snail = dunlin.match(chinchilla);
              {
                {
                  rook = + [];
                  woodcock = snail.length - 1;
                }
                for (; rook < woodcock; rook++)
                {
                  if (! squid[snail[rook]])
                  {
                    squid[snail[rook]] = hamster.test(snail[rook + 1]) || snail[rook + 1] === '[]' ? [] : {
                      
                    };
                  }
                  squid = squid[snail[rook]];
                }
              }
              mantis = snail.pop();
              if (mantis === '[]')
              {
                squid.push(termite);
              }
              else
              {
                squid[mantis] = termite;
              }
            }
          });
        }
        return mink;
      }
    });
    return raccoon;
  });
  