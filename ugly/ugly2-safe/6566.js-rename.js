  (function () {
  "use strict";
    function chives() {
      if (location.hostname === "tastejs.github.io")
      {
        location.href = location.href.replace("tastejs.github.io/todomvc", "todomvc.com");
      }
    }
    function bean_sprout() {
      var hamster; // e
      
          hamster = location.href.indexOf("examples/");
      return location.href.substr(0, hamster);
    }
    function broccoflower(chinchilla, ibex) {
      var boar; // r
      
          if (! location.host)
      {
        return console.info("Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.");
      }
      boar = new XMLHttpRequest;
      boar.open("GET", bean_sprout() + chinchilla, true);
      boar.send();
      boar.onload = function () {
        if (boar.status === 200 && ibex)
        {
          broccoflower(boar.responseText);
        }
      };
    }
    function green_bean(llama, capybara) {
      var mink; // r
      var prairie_dog; // n
      
          if (! (this instanceof a))
      {
        return new green_bean(llama, capybara);
      }
      if (typeof llama !== "object")
      {
        try {
          llama = JSON.parse(llama);
        }
        catch (e) {
          return;
        }
      }
      if (capybara)
      {
        mink = capybara.template;
        prairie_dog = capybara.framework;
      }
      if (! mink && llama.templates)
      {
        mink = llama.templates.todomvc;
      }
      if (! prairie_dog && document.querySelector("[data-framework]"))
      {
        prairie_dog = document.querySelector("[data-framework]").dataset.framework;
      }
      this.template = mink;
      if (llama.backend)
      {
        this.frameworkJSON = llama.backend;
        this.frameworkJSON.issueLabel = prairie_dog;
        this.append({
          backend : true
        });
      }
      else
        if (llama[prairie_dog])
        {
          this.frameworkJSON = llama[prairie_dog];
          this.frameworkJSON.issueLabel = prairie_dog;
          this.append();
        }
      this.fetchIssueCount();
    }
      var raccoon; // s
    
      raccoon = function (mantis) {
      var dogfish; // c
      var snail; // l
      var dunlin; // f
      
          mantis.defaults = function (termite) {
        var squid; // t
        var rook; // r
        var woodcock; // n
        var antelope; // a
        
              if (! termite)
        {
          return termite;
        }
        {
          {
            squid = 1;
            rook = arguments.length;
          }
          for (; squid < rook; squid++)
          {
            woodcock = arguments[squid];
            if (woodcock)
            {
              for (antelope in woodcock)
              {
                if (termite[antelope] == null)
                {
                  termite[antelope] = woodcock[antelope];
                }
              }
            }
          }
        }
        return termite;
      };
      mantis.templateSettings = {
        evaluate : new RegExp("<%([\\s\\S]+?)%>", "g"),
        interpolate : new RegExp("<%=([\\s\\S]+?)%>", "g"),
        escape : new RegExp("<%-([\\s\\S]+?)%>", "g")
      };
      dogfish = new RegExp("(.)^", "");
      snail = {
        "'" : "'",
        "\\" : "\\",
        "\r" : "r",
        "\n" : "n",
        "\t" : "t",
        "\u2028" : "u2028",
        "\u2029" : "u2029"
      };
      dunlin = new RegExp("\\\\|'|\\r|\\n|\\t|\\u2028|\\u2029", "g");
      mantis.template = function (goose, baboon, bat) {
        var bison; // r
        var tarsier; // n
        var cat; // s
        var weasel; // a
        
              bat = mantis.defaults({
          
        }, bat, mantis.templateSettings);
        tarsier = new RegExp([(bat.escape || dogfish).source, (bat.interpolate || dogfish).source, (bat.evaluate || dogfish).source, ].join("|") + "|$", 
        "g");
        cat = "__p+='";
        goose.replace(tarsier, function (beaver, komodo_dragon, armadillo, woodpecker, quelea) {
          cat = "__p+='" + goose.slice(0, quelea).replace(dunlin, function (butterfly) {
            return "\\" + snail[butterfly];
          });
          if (komodo_dragon)
          {
            cat = cat + "'+\n((__t=(" + komodo_dragon + "))==null?'':_.escape(__t))+\n'";
          }
          if (armadillo)
          {
            cat = cat + "'+\n((__t=(" + armadillo + "))==null?'':__t)+\n'";
          }
          if (woodpecker)
          {
            cat = cat + "';\n" + woodpecker + "\n__p+='";
          }
          return beaver;
        });
        cat = cat + "';\n";
        if (! bat.variable)
          cat = "with(obj||{}){\n" + cat + "}\n";
        cat = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + cat + "return __p;\n";
        try {
          bison = new Function(bat.variable || "obj", "_", cat);
        }
        catch (e) {
          baboon.source = cat;
          throw baboon;
        }
        if (baboon)
          return bison(baboon, mantis);
        weasel = function (oyster) {
          return bison.call(this, oyster, mantis);
        };
        weasel.source = "function(" + (bat.variable || "obj") + "){\n" + cat + "}";
        return weasel;
      };
      return mantis;
    }({
      
    });
    if (location.hostname === "todomvc.com")
    {
      window._gaq = [["_setAccount", "UA-31081062-1", ], ["_trackPageview", ], ];
      (function (stingray, dragonfly) {
        var finch; // r
        var meerkat; // n
        
              {
          finch = stingray.createElement(dragonfly);
          meerkat = stingray.getElementsByTagName(dragonfly)[0];
        }
        finch.src = "//www.google-analytics.com/ga.js";
        meerkat.parentNode.insertBefore(finch, meerkat);
      })(document, "script");
    }
    a.prototype.append = function (alligator) {
      var kookabura; // t
      var human; // r
      var reindeer; // n
      var elk; // a
      var ape; // o
      var dinosaur; // i
      
          kookabura = document.createElement("aside");
      kookabura.innerHTML = raccoon.template(this.template, this.frameworkJSON);
      kookabura.className = "learn";
      if (alligator && alligator.backend)
      {
        human = kookabura.querySelector(".source-links");
        reindeer = human.firstElementChild;
        elk = human.lastElementChild;
        ape = elk.getAttribute("href");
        elk.setAttribute("href", ape.substr(ape.lastIndexOf("http")));
        human.innerHTML = reindeer.outerHTML + elk.outerHTML;
      }
      else
      {
        dinosaur = kookabura.querySelectorAll(".demo-link");
        Array.prototype.forEach.call(dinosaur, function (kouprey) {
          if (kouprey.getAttribute("href").substr(0, 4) !== "http")
          {
            kouprey.setAttribute("href", bean_sprout() + kouprey.getAttribute("href"));
          }
        });
      }
      document.body.className = (document.body.className + " learn-bar").trim();
      document.body.insertAdjacentHTML("afterBegin", kookabura.outerHTML);
    };
    a.prototype.fetchIssueCount = function () {
      var echidna; // n
      var owl; // e
      var gaur; // t
      
          echidna = document.getElementById("issue-count-link");
      if (echidna)
      {
        owl = echidna.href.replace("https://github.com", "https://api.github.com/repos");
        gaur = new XMLHttpRequest;
        gaur.open("GET", owl, true);
        gaur.onload = function (locust) {
          var magpie; // t
          var snake; // r
          
                  magpie = JSON.parse(locust.target.responseText);
          if (magpie instanceof Array)
          {
            snake = magpie.length;
            if (snake !== 0)
            {
              echidna.innerHTML = "This app has " + snake + " open issues";
              document.getElementById("issue-count").style.display = "inline";
            }
          }
        };
        gaur.send();
      }
    };
    chives();
    broccoflower("learn.json", a);
  })();
  