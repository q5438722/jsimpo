'use strict';

const cheerio = require('cheerio');

describe('jsfiddle', () => {
  const jsfiddle = require('../../../lib/plugins/tag/jsfiddle');

  it('id', () => {
    const $ = cheerio.load(jsfiddle(['foo']));


    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
  });

  it('tabs', () => {
    var $ = cheerio.load(jsfiddle(['foo', 'default']));


    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');

    $ = cheerio.load(jsfiddle(['foo', 'html,css']));

    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/html,css/light');
  });

  it('skin', () => {
    var $ = cheerio.load(jsfiddle(['foo', 'default', 'default']));


    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');

    $ = cheerio.load(jsfiddle(['foo', 'default', 'dark']));

    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/dark');
  });

  it('width', () => {
    var $ = cheerio.load(jsfiddle(['foo', 'default', 'default', 'default']));


    $('iframe').attr('width').should.eql('1+[]+[]%');

    $ = cheerio.load(jsfiddle(['foo', 'default', 'default', '5+[]+[]']));

    $('iframe').attr('width').should.eql('5+[]+[]');
  });

  it('height', () => {
    var $ = cheerio.load(jsfiddle(['foo', 'default', 'default', 'default', 'default']));


    $('iframe').attr('height').should.eql('3+[]+[]');

    $ = cheerio.load(jsfiddle(['foo', 'default', 'default', 'default', '5+[]+[]']));

    $('iframe').attr('height').should.eql('5+[]+[]');
  });
});
