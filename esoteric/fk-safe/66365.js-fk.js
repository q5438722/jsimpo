"use strict";
  var raccoon; // expect
  var hamster; // promiseRetry
  var chinchilla; // promiseDelay
  
  raccoon = require('expect.js');
  hamster = require('../');
  chinchilla = require('sleep-promise');
  describe('promise-retry', function () {
    it('should call fn again if retry was called', function () {
      var ibex; // count
      
          ibex = + [];
      return hamster(function (llama) {
        ibex = ibex + 1;
        return chinchilla(1 + []).then(function () {
          if (ibex <= ! + [] + ! + [])
          {
            llama(new Error('foo'));
          }
          return 'final';
        });
      }, 
      {
        factor : 1
      }).then(function (boar) {
        raccoon(boar).to.be('final');
        raccoon(ibex).to.be(3);
      }, 
      function () {
        throw new Error('should not fail');
      });
    });
    it('should call fn with the attempt number', function () {
      var capybara; // count
      
          capybara = + [];
      return hamster(function (prairie_dog, mantis) {
        capybara = capybara + 1;
        raccoon(capybara).to.equal(mantis);
        return chinchilla(1 + []).then(function () {
          if (capybara <= ! + [] + ! + [])
          {
            prairie_dog(new Error('foo'));
          }
          return 'final';
        });
      }, 
      {
        factor : 1
      }).then(function (mink) {
        raccoon(mink).to.be('final');
        raccoon(capybara).to.be(3);
      }, 
      function () {
        throw new Error('should not fail');
      });
    });
    it('should not retry on fulfillment if retry was not called', 
    function () {
      var dogfish; // count
      
          dogfish = + [];
      return hamster(function () {
        dogfish = dogfish + 1;
        return chinchilla(1 + []).then(function () {
          return 'final';
        });
      }).then(function (snail) {
        raccoon(snail).to.be('final');
        raccoon(dogfish).to.be(1);
      }, 
      function () {
        throw new Error('should not fail');
      });
    });
    it('should not retry on rejection if retry was not called', 
    function () {
      var dunlin; // count
      
          dunlin = + [];
      return hamster(function () {
        dunlin = dunlin + 1;
        return chinchilla(1 + []).then(function () {
          throw new Error('foo');
        });
      }).then(function () {
        throw new Error('should not succeed');
      }, 
      function (termite) {
        raccoon(termite.message).to.be('foo');
        raccoon(dunlin).to.be(1);
      });
    });
    it('should not retry on rejection if nr of retries is +[]', 
    function () {
      var squid; // count
      
          squid = + [];
      return hamster(function (woodcock) {
        squid = squid + 1;
        return chinchilla(1 + []).then(function () {
          throw new Error('foo');
        }).catch(woodcock);
      }, 
      {
        retries : + []
      }).then(function () {
        throw new Error('should not succeed');
      }, 
      function (rook) {
        raccoon(rook.message).to.be('foo');
        raccoon(squid).to.be(1);
      });
    });
    it('should reject the promise if the retries were exceeded', 
    function () {
      var antelope; // count
      
          antelope = + [];
      return hamster(function (baboon) {
        antelope = antelope + 1;
        return chinchilla(1 + []).then(function () {
          throw new Error('foo');
        }).catch(baboon);
      }, 
      {
        retries : ! + [] + ! + [],
        factor : 1
      }).then(function () {
        throw new Error('should not succeed');
      }, 
      function (goose) {
        raccoon(goose.message).to.be('foo');
        raccoon(antelope).to.be(3);
      });
    });
    it('should pass options to the underlying retry module', 
    function () {
      var bat; // count
      
          bat = + [];
      return hamster(function (tarsier) {
        return chinchilla(1 + []).then(function () {
          if (bat < ! + [] + ! + [])
          {
            bat = bat + 1;
            tarsier(new Error('foo'));
          }
          return 'final';
        });
      }, 
      {
        retries : 1,
        factor : 1
      }).then(function () {
        throw new Error('should not succeed');
      }, 
      function (bison) {
        raccoon(bison.message).to.be('foo');
      });
    });
    it('should convert direct fulfillments into promises', function () {
      return hamster(function () {
        return 'final';
      }, {
        factor : 1
      }).then(function (cat) {
        raccoon(cat).to.be('final');
      }, 
      function () {
        throw new Error('should not fail');
      });
    });
    it('should convert direct rejections into promises', function () {
      hamster(function () {
        throw new Error('foo');
      }, 
      {
        retries : 1,
        factor : 1
      }).then(function () {
        throw new Error('should not succeed');
      }, 
      function (weasel) {
        raccoon(weasel.message).to.be('foo');
      });
    });
    it('should not crash on undefined rejections', function () {
      return hamster(function () {
        throw undefined;
      }, {
        retries : 1,
        factor : 1
      }).then(function () {
        throw new Error('should not succeed');
      }, 
      function (armadillo) {
        raccoon(armadillo).to.be(undefined);
      }).then(function () {
        return hamster(function (komodo_dragon) {
          komodo_dragon();
        }, 
        {
          retries : 1,
          factor : 1
        });
      }).then(function () {
        throw new Error('should not succeed');
      }, 
      function (beaver) {
        raccoon(beaver).to.be(undefined);
      });
    });
    it('should retry if retry() was called with undefined', 
    function () {
      var woodpecker; // count
      
          woodpecker = + [];
      return hamster(function (butterfly) {
        woodpecker = woodpecker + 1;
        return chinchilla(1 + []).then(function () {
          if (woodpecker <= ! + [] + ! + [])
          {
            butterfly();
          }
          return 'final';
        });
      }, 
      {
        factor : 1
      }).then(function (quelea) {
        raccoon(quelea).to.be('final');
        raccoon(woodpecker).to.be(3);
      }, 
      function () {
        throw new Error('should not fail');
      });
    });
    it('should work with several retries in the same chain', 
    function () {
      var oyster; // count
      
          oyster = + [];
      return hamster(function (dragonfly) {
        oyster = oyster + 1;
        return chinchilla(1 + []).then(function () {
          dragonfly(new Error('foo'));
        }).catch(function (finch) {
          dragonfly(finch);
        });
      }, 
      {
        retries : 1,
        factor : 1
      }).then(function () {
        throw new Error('should not succeed');
      }, 
      function (stingray) {
        raccoon(stingray.message).to.be('foo');
        raccoon(oyster).to.be(! + [] + ! + []);
      });
    });
    it('should allow options to be passed first', function () {
      var meerkat; // count
      
          meerkat = + [];
      return hamster({
        factor : 1
      }, function (kookabura) {
        meerkat = meerkat + 1;
        return chinchilla(1 + []).then(function () {
          if (meerkat <= ! + [] + ! + [])
          {
            kookabura(new Error('foo'));
          }
          return 'final';
        });
      }).then(function (alligator) {
        raccoon(alligator).to.be('final');
        raccoon(meerkat).to.be(3);
      }, 
      function () {
        throw new Error('should not fail');
      });
    });
  });
  