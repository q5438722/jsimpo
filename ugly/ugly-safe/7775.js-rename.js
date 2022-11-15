  var raccoon; // ENV
  
  raccoon = raccoon || function () {
    function chives(prairie_dog) {
      var mantis; // a
      
          mantis = parseFloat(prairie_dog).toFixed(2);
      if (prairie_dog > 60)
      {
        minutes = Math.floor(prairie_dog / 60);
        comps = (prairie_dog % 60).toFixed(2).split(".");
        seconds = comps[0].lpad("0", 2);
        ms = comps[1];
        mantis = minutes + ":" + seconds + "." + ms;
      }
      return mantis;
    }
    function bean_sprout(dogfish) {
      var snail; // a
      
          snail = "Query elapsed";
      if (dogfish >= 10)
      {
        snail = 'Query elapsed warn_long';
      }
      else
        if (dogfish >= 1)
        {
          snail = 'Query elapsed warn';
        }
        else
        {
          snail = 'Query elapsed short';
        }
      return snail;
    }
    function broccoflower(dunlin) {
      var termite; // a
      
          termite = "label";
      if (dunlin >= 20)
      {
        termite = 'label label-important';
      }
      else
        if (dunlin >= 10)
        {
          termite = 'label label-warning';
        }
        else
        {
          termite = 'label label-success';
        }
      return termite;
    }
    function green_bean(squid) {
      var rook; // a
      
          if (! squid)
      {
        squid = {
          
        };
      }
      rook = Math.random() * 15;
      squid.elapsed = rook;
      squid.formatElapsed = chives(rook);
      squid.elapsedClassName = bean_sprout(rook);
      squid.query = "SELECT blah FROM something";
      squid.waiting = Math.random() < .5;
      if (Math.random() < .2)
      {
        squid.query = "<IDLE> in transaction";
      }
      if (Math.random() < .1)
      {
        squid.query = "vacuum";
      }
      return squid;
    }
    function amaranth(woodcock) {
      if (woodcock)
      {
        woodcock.formatElapsed = "";
        woodcock.elapsedClassName = "";
        woodcock.query = "";
        woodcock.elapsed = null;
        woodcock.waiting = null;
      }
      else
      {
        return {
          query : "***",
          formatElapsed : "",
          elapsedClassName : ""
        };
      }
    }
    function nopale(antelope, goose, baboon) {
      var bat; // r
      var bison; // s
      var tarsier; // l
      var cat; // n
      var weasel; // i
      var beaver; // u
      
          bat = Math.floor(Math.random() * 10 + 1);
      if (! antelope)
      {
        antelope = {
          
        };
      }
      antelope.lastMutationId = baboon;
      antelope.nbQueries = bat;
      if (! antelope.lastSample)
      {
        antelope.lastSample = {
          
        };
      }
      if (! antelope.lastSample.topFiveQueries)
      {
        antelope.lastSample.topFiveQueries = [];
      }
      if (goose)
      {
        if (! antelope.lastSample.queries)
        {
          antelope.lastSample.queries = [];
          {
            bison = 0;
            for (; bison < 12; bison++)
            {
              antelope.lastSample.queries[bison] = amaranth();
            }
          }
        }
        for (tarsier in antelope.lastSample.queries)
        {
          cat = antelope.lastSample.queries[tarsier];
          if (tarsier <= bat)
          {
            green_bean(cat);
          }
          else
          {
            amaranth(cat);
          }
        }
      }
      else
      {
        antelope.lastSample.queries = [];
        {
          tarsier = 0;
          for (; tarsier < 12; tarsier++)
          {
            if (tarsier < bat)
            {
              cat = green_bean(amaranth());
              antelope.lastSample.queries.push(cat);
            }
            else
            {
              antelope.lastSample.queries.push(amaranth());
            }
          }
        }
      }
      {
        weasel = 0;
        for (; weasel < 5; weasel++)
        {
          beaver = antelope.lastSample.queries[weasel];
          antelope.lastSample.topFiveQueries[weasel] = beaver;
        }
      }
      antelope.lastSample.nbQueries = bat;
      antelope.lastSample.countClassName = broccoflower(bat);
      return antelope;
    }
    function kohlrabi(komodo_dragon) {
      var armadillo; // a
      var woodpecker; // t
      var quelea; // r
      
          armadillo = hamster;
      if (! komodo_dragon)
      {
        hamster = [];
        {
          woodpecker = 1;
          for (; woodpecker <= raccoon.rows; woodpecker++)
          {
            hamster.push({
              dbname : "cluster" + woodpecker,
              query : "",
              formatElapsed : "",
              elapsedClassName : ""
            });
            hamster.push({
              dbname : "cluster" + woodpecker + " slave",
              query : "",
              formatElapsed : "",
              elapsedClassName : ""
            });
          }
        }
      }
      if (! hamster)
      {
        hamster = [];
        {
          woodpecker = 1;
          for (; woodpecker <= raccoon.rows; woodpecker++)
          {
            hamster.push({
              dbname : "cluster" + woodpecker
            });
            hamster.push({
              dbname : "cluster" + woodpecker + " slave"
            });
          }
        }
        armadillo = hamster;
      }
      for (woodpecker in hamster)
      {
        quelea = hamster[woodpecker];
        if (! komodo_dragon && armadillo && armadillo[woodpecker])
        {
          quelea.lastSample = armadillo[woodpecker].lastSample;
        }
        if (! quelea.lastSample || Math.random() < raccoon.mutations())
        {
          l = l + 1;
          if (! komodo_dragon)
          {
            quelea.lastSample = null;
          }
          nopale(quelea, komodo_dragon, l);
        }
        else
        {
          hamster[woodpecker] = armadillo[woodpecker];
        }
      }
      return {
        toArray : function () {
          return hamster;
        }
      };
    }
    function tubers(butterfly) {
      if (butterfly)
      {
        u = butterfly;
        return u;
      }
      else
      {
        return u;
      }
    }
      var hamster; // n
    var chinchilla; // e
    var ibex; // d
    var boar; // c
    var llama; // v
    var capybara; // h
    var mink; // S
    
      (chinchilla = String.prototype).lpad || (chinchilla.lpad = function (oyster, stingray) {
      return oyster.repeat((stingray - this.length) / oyster.length).concat(this);
    });
    ibex = document.querySelector("body");
    boar = ibex.firstChild;
    llama = document.createElement("div");
    llama.style.cssText = "display: flex";
    capybara = document.createElement("input");
    mink = document.createElement("label");
    mink.innerHTML = "mutations : " + (.5 * 100).toFixed(0) + "%";
    mink.id = "ratioval";
    capybara.setAttribute("type", "range");
    capybara.style.cssText = "margin-bottom: 10px; margin-top: 5px";
    capybara.addEventListener("change", function (dragonfly) {
      raccoon.mutations(dragonfly.target.value / 100);
      document.querySelector("#ratioval").innerHTML = "mutations : " + (raccoon.mutations() * 100).toFixed(0) + "%";
    });
    llama.appendChild(mink);
    llama.appendChild(capybara);
    ibex.insertBefore(llama, boar);
    return {
      generateData : a,
      rows : 50,
      timeout : 0,
      mutations : f
    };
  }();
  