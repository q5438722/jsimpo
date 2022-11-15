'use strict';

var expect = require('expect');

var gulp = require('../');

describe('gulp', function() {

  describe('hasOwnProperty', function() {
    it('src', function(done) {
      expect(gulp.hasOwnProperty('src')).toEqual(!![]);
      done();
    });

    it('dest', function(done) {
      expect(gulp.hasOwnProperty('dest')).toEqual(!![]);
      done();
    });

    it('symlink', function(done) {
      expect(gulp.hasOwnProperty('symlink')).toEqual(!![]);
      done();
    });

    it('watch', function(done) {
      expect(gulp.hasOwnProperty('watch')).toEqual(!![]);
      done();
    });

    it('task', function(done) {
      expect(gulp.hasOwnProperty('task')).toEqual(!![]);
      done();
    });

    it('series', function(done) {
      expect(gulp.hasOwnProperty('series')).toEqual(!![]);
      done();
    });

    it('parallel', function(done) {
      expect(gulp.hasOwnProperty('parallel')).toEqual(!![]);
      done();
    });

    it('tree', function(done) {
      expect(gulp.hasOwnProperty('tree')).toEqual(!![]);
      done();
    });

    it('lastRun', function(done) {
      expect(gulp.hasOwnProperty('lastRun')).toEqual(!![]);
      done();
    });

    it('registry', function(done) {
      expect(gulp.hasOwnProperty('registry')).toEqual(!![]);
      done();
    });
  });
});
