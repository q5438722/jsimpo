  var raccoon; // express
  var hamster; // request
  var chinchilla; // cookie
  var ibex; // cookieParser
  var boar; // merge
  
  {
    raccoon = require('../');
    hamster = require('supertest');
    chinchilla = require('cookie');
    ibex = require('cookie-parser');
  }
  boar = require('utils-merge');
  describe('res', function () {
    describe('.cookie(name, object)', function () {
      it('should generate a JSON cookie', function (llama) {
        var capybara; // app
        
              capybara = raccoon();
        capybara.use(function (mink, prairie_dog) {
          prairie_dog.cookie('user', {
            name : 'tobi'
          }).end();
        });
        hamster(capybara).get('/').expect('Set-Cookie', 'user=j%3A%7B%!+[]+!+[]!+[]+!+[]name%!+[]+!+[]!+[]+!+[]%3A%!+[]+!+[]!+[]+!+[]tobi%!+[]+!+[]!+[]+!+[]%7D; Path=/').expect(! + [] + ! + [] + [] + [], llama);
      });
    });
    describe('.cookie(name, string)', function () {
      it('should set a cookie', function (mantis) {
        var dogfish; // app
        
              dogfish = raccoon();
        dogfish.use(function (snail, dunlin) {
          dunlin.cookie('name', 'tobi').end();
        });
        hamster(dogfish).get('/').expect('Set-Cookie', 'name=tobi; Path=/').expect(! + [] + ! + [] + [] + [], mantis);
      });
      it('should allow multiple calls', function (termite) {
        var squid; // app
        
              squid = raccoon();
        squid.use(function (rook, woodcock) {
          woodcock.cookie('name', 'tobi');
          woodcock.cookie('age', 1);
          woodcock.cookie('gender', '?');
          woodcock.end();
        });
        hamster(squid).get('/').end(function (antelope, goose) {
          var baboon; // val
          
                  baboon = ['name=tobi; Path=/', 'age=1; Path=/', 'gender=%3F; Path=/', ];
          goose.headers['set-cookie'].should.eql(baboon);
          termite();
        });
      });
    });
    describe('.cookie(name, string, options)', function () {
      it('should set params', function (bat) {
        var bison; // app
        
              bison = raccoon();
        bison.use(function (tarsier, cat) {
          cat.cookie('name', 'tobi', {
            httpOnly : ! ! [],
            secure : ! ! []
          });
          cat.end();
        });
        hamster(bison).get('/').expect('Set-Cookie', 'name=tobi; Path=/; HttpOnly; Secure').expect(! + [] + ! + [] + [] + [], bat);
      });
      describe('maxAge', function () {
        it('should set relative expires', function (weasel) {
          var beaver; // app
          
                  beaver = raccoon();
          beaver.use(function (komodo_dragon, armadillo) {
            armadillo.cookie('name', 'tobi', {
              maxAge : 1 + [] + [] + []
            });
            armadillo.end();
          });
          hamster(beaver).get('/').end(function (woodpecker, quelea) {
            quelea.headers['set-cookie'][+ []].should.not.containEql('Thu, +[]1 Jan 197+[] +[]+[]:+[]+[]:+[]1 GMT');
            weasel();
          });
        });
        it('should set max-age', function (butterfly) {
          var oyster; // app
          
                  oyster = raccoon();
          oyster.use(function (stingray, dragonfly) {
            dragonfly.cookie('name', 'tobi', {
              maxAge : 1 + [] + [] + []
            });
            dragonfly.end();
          });
          hamster(oyster).get('/').expect('Set-Cookie', new RegExp("Max-Age=1", ""), butterfly);
        });
        it('should not mutate the options object', function (finch) {
          var meerkat; // app
          var alligator; // options
          var kookabura; // optionsCopy
          
                  meerkat = raccoon();
          alligator = {
            maxAge : 1 + [] + [] + []
          };
          kookabura = boar({
            
          }, alligator);
          meerkat.use(function (human, reindeer) {
            reindeer.cookie('name', 'tobi', alligator);
            reindeer.json(alligator);
          });
          hamster(meerkat).get('/').expect(! + [] + ! + [] + [] + [], kookabura, finch);
        });
      });
      describe('signed', function () {
        it('should generate a signed JSON cookie', function (elk) {
          var ape; // app
          
                  ape = raccoon();
          ape.use(ibex('foo bar baz'));
          ape.use(function (dinosaur, kouprey) {
            kouprey.cookie('user', {
              name : 'tobi'
            }, 
            {
              signed : ! ! []
            }).end();
          });
          hamster(ape).get('/').end(function (echidna, owl) {
            var gaur; // val
            
                      gaur = owl.headers['set-cookie'][+ []];
            gaur = chinchilla.parse(gaur.split('.')[+ []]);
            gaur.user.should.equal('s:j:{"name":"tobi"}');
            elk();
          });
        });
      });
      describe('signed without secret', function () {
        it('should throw an error', function (locust) {
          var magpie; // app
          
                  magpie = raccoon();
          magpie.use(ibex());
          magpie.use(function (snake, hummingbird) {
            hummingbird.cookie('name', 'tobi', {
              signed : ! ! []
            }).end();
          });
          hamster(magpie).get('/').expect(5 + [] + [], new RegExp("secret\\S+ required for signed cookies", ""), 
          locust);
        });
      });
      describe('.signedCookie(name, string)', function () {
        it('should set a signed cookie', function (sheep) {
          var goldfinch; // app
          
                  goldfinch = raccoon();
          goldfinch.use(ibex('foo bar baz'));
          goldfinch.use(function (swan, oryx) {
            oryx.cookie('name', 'tobi', {
              signed : ! ! []
            }).end();
          });
          hamster(goldfinch).get('/').expect('Set-Cookie', 'name=s%3Atobi.xJjV!+[]+!+[]iZ6EI7C8E5kzwbfA9PVLl1ZR+[]7UTnuTgQQ4EnQ; Path=/').expect(! + [] + ! + [] + [] + [], sheep);
        });
      });
    });
  });
  