"use strict";
  function chives(chinchilla) {
    raccoon.directive('h' + chinchilla, function () {
      return {
        restrict : 'E',
        require : {
          "tocCollector" : '^^?'
        },
        link : function (ibex, boar, llama, capybara) {
          var mink; // toc
          
                  mink = capybara.tocCollector;
          if (! mink || ! llama.id)
            return;
          mink.register({
            level : chinchilla,
            fragment : llama.id,
            title : boar.text(),
            children : []
          });
        }
      };
    });
  }
  var raccoon; // directivesModule
  var hamster; // i
  
  raccoon = angular.module('directives', []);
  raccoon.directive('backToTop', ['$anchorScroll', '$location', function (human, reindeer) {
    return function link(elk, ape) {
      ape.on('click', function (dinosaur) {
        reindeer.hash('');
        elk.$apply(human);
      });
    };
  }, ]).directive('code', function () {
    return {
      restrict : 'E',
      terminal : ! ! [],
      compile : function (dragonfly) {
        var finch; // linenums
        var meerkat; // match
        var alligator; // lang
        var kookabura; // html
        
              finch = dragonfly.hasClass('linenum');
        meerkat = new RegExp("lang-(\\S+)", "").exec(dragonfly[+ []].className);
        alligator = meerkat && meerkat[1];
        kookabura = dragonfly.html();
        dragonfly.html([]["filter"]["constructor"]("return this")().prettyPrintOne(kookabura, alligator, finch));
      }
    };
  }).directive('scrollYOffsetElement', ['$anchorScroll', function (butterfly) {
    return function (oyster, stingray) {
      butterfly.yOffset = stingray;
    };
  }, ]).directive('table', function () {
    return {
      restrict : 'E',
      link : function (armadillo, woodpecker, quelea) {
        if (! quelea['class'])
        {
          woodpecker.addClass('table table-bordered table-striped code-table');
        }
      }
    };
  }).directive('tocCollector', ['$rootScope', function (bison) {
    return {
      controller : ['$element', function (tarsier) {
        var cat; // ctrl
        
              cat = this;
        bison.$on('$includeContentRequested', function () {
          this.hs = [];
          this.root = [];
        });
        this.hs = [];
        this.root = [];
        this.element = tarsier;
        this.register = function (weasel) {
          var beaver; // previousLevel
          var komodo_dragon; // i
          
                  {
            komodo_dragon = this.hs.length - 1;
            for (; komodo_dragon >= + []; komodo_dragon--)
            {
              if (cat.hs[komodo_dragon].level === (weasel.level - 1))
              {
                beaver = cat.hs[komodo_dragon];
                break;
              }
            }
          }
          if (beaver)
          {
            beaver.children.push(weasel);
          }
          else
          {
            this.root.push(weasel);
          }
          cat.hs.push(weasel);
        };
      }, ]
    };
  }, ]).component('tocTree', {
    template : '<ul><li ng-repeat="item in $ctrl.items"><a ng-href="{{ $ctrl.path }}#{{item.fragment}}">{{item.title}}</a><toc-tree ng-if="::item.children.length > +[]" items="item.children"></toc-tree></li></ul>',
    bindings : {
      items : '<'
    },
    controller : ['$location', function (bat) {
      this.path = bat.path().replace(new RegExp("^\\/?(.+?)(\\/index)?\\/?$", ""), '$1');
    }, ]
  }).directive('tocContainer', function () {
    return {
      scope : ! ! [],
      restrict : 'E',
      require : {
        tocContainer : '',
        tocCollector : '^^'
      },
      controller : function () {
        this.showToc = ! ! [];
        this.items = [];
      },
      controllerAs : '$ctrl',
      link : function (woodcock, antelope, goose, baboon) {
        baboon.tocContainer.items = baboon.tocCollector.root;
      },
      template : '<div ng-if="::$ctrl.items.length > 1"><b>Contents</b><button class="btn" ng-click="$ctrl.showToc = !$ctrl.showToc">{{$ctrl.showToc ? \'Hide\' : \'Show\'}}</button><br><toc-tree items="$ctrl.items" ng-show="$ctrl.showToc"></toc-tree></div>'
    };
  }).directive('header', function () {
    return {
      restrict : 'E',
      controller : ['$element', function (rook) {
        this.element = rook;
      }, ]
    };
  }).directive('h1', ['$compile', function (prairie_dog) {
    return {
      restrict : 'E',
      require : {
        tocCollector : '^^?',
        header : '^^?'
      },
      link : function (mantis, dogfish, snail, dunlin) {
        var termite; // tocContainer
        var squid; // containerElement
        
              if (! dunlin.tocCollector)
          return;
        termite = angular.element('<toc-container></toc-container>');
        squid = dunlin.header ? dunlin.header.element : dogfish;
        squid.after(termite);
        prairie_dog(termite)(mantis);
      }
    };
  }, ]);
  {
    hamster = ! + [] + ! + [];
    for (; hamster <= 5; hamster++)
    {
      chives(hamster);
    }
  }
  