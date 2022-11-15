"use strict";
  var raccoon; // expect
  var hamster; // gulp
  
  raccoon = require('expect');
  hamster = require('../');
  describe('gulp', function () {
    describe('hasOwnProperty', function () {
      it('src', function (chinchilla) {
        raccoon(hamster.hasOwnProperty('src')).toEqual(! ! []);
        chinchilla();
      });
      it('dest', function (ibex) {
        raccoon(hamster.hasOwnProperty('dest')).toEqual(! ! []);
        ibex();
      });
      it('symlink', function (boar) {
        raccoon(hamster.hasOwnProperty('symlink')).toEqual(! ! []);
        boar();
      });
      it('watch', function (llama) {
        raccoon(hamster.hasOwnProperty('watch')).toEqual(! ! []);
        llama();
      });
      it('task', function (capybara) {
        raccoon(hamster.hasOwnProperty('task')).toEqual(! ! []);
        capybara();
      });
      it('series', function (mink) {
        raccoon(hamster.hasOwnProperty('series')).toEqual(! ! []);
        mink();
      });
      it('parallel', function (prairie_dog) {
        raccoon(hamster.hasOwnProperty('parallel')).toEqual(! ! []);
        prairie_dog();
      });
      it('tree', function (mantis) {
        raccoon(hamster.hasOwnProperty('tree')).toEqual(! ! []);
        mantis();
      });
      it('lastRun', function (dogfish) {
        raccoon(hamster.hasOwnProperty('lastRun')).toEqual(! ! []);
        dogfish();
      });
      it('registry', function (snail) {
        raccoon(hamster.hasOwnProperty('registry')).toEqual(! ! []);
        snail();
      });
    });
  });
  