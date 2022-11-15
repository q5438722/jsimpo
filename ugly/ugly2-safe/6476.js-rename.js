  define(["can/util/library", "can/util/string", ], function (raccoon) {
    var hamster; // u
    var chinchilla; // l
    var ibex; // i
    var boar; // p
    
      {
      hamster = new RegExp("^\\d+$", "");
      chinchilla = new RegExp("([^\\[\\]]+)|(\\[\\])", "g");
      ibex = new RegExp("([^?#]*)(#.*)?$", "");
      boar = function (llama) {
        return decodeURIComponent(llama.replace(new RegExp("\\+", "g"), " "));
      };
    }
    raccoon.extend(raccoon, {
      deparam : function (capybara) {
        var mink; // c
        var prairie_dog; // n
        var mantis; // o
        
              mink = {
          
        };
        if (capybara && ibex.test(capybara))
        {
          prairie_dog = capybara.split("&");
          raccoon.each(prairie_dog, function (dogfish) {
            var snail; // n
            var dunlin; // e
            var termite; // i
            var squid; // r
            var rook; // a
            var woodcock; // f
            
                      {
              snail = dogfish.split("=");
              dunlin = boar(snail.shift());
              termite = boar(snail.join("="));
              squid = mink;
            }
            if (dunlin)
            {
              snail = dunlin.match(chinchilla);
              {
                {
                  rook = 0;
                  woodcock = snail.length - 1;
                }
                for (; rook < woodcock; rook++)
                {
                  if (! squid[snail[rook]])
                  {
                    squid[snail[rook]] = hamster.test(snail[rook + 1]) || snail[rook + 1] === "[]" ? [] : {
                      
                    };
                  }
                  squid = squid[snail[rook]];
                }
              }
              mantis = snail.pop();
              if (mantis === "[]")
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
  