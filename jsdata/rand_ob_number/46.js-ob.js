'use strict';
const cheerio = require('cheerio');
describe('jsfiddle', () => {
    const _0x34993a = require('../../../lib/plugins/tag/jsfiddle');
    it('id', () => {
        const _0x41db9f = cheerio['load'](_0x34993a(['foo']));
        _0x41db9f('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
    }), it('tabs', () => {
        let _0x1dd717 = cheerio['load'](_0x34993a([
            'foo',
            'default'
        ]));
        _0x1dd717('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light'), _0x1dd717 = cheerio['load'](_0x34993a([
            'foo',
            'html,css'
        ])), _0x1dd717('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/html,css/light');
    }), it('skin', () => {
        let _0x43643a = cheerio['load'](_0x34993a([
            'foo',
            'default',
            'default'
        ]));
        _0x43643a('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light'), _0x43643a = cheerio['load'](_0x34993a([
            'foo',
            'default',
            'dark'
        ])), _0x43643a('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/dark');
    }), it('width', () => {
        let _0x57e454 = cheerio['load'](_0x34993a([
            'foo',
            'default',
            'default',
            'default'
        ]));
        _0x57e454('iframe')['attr']('width')['should']['eql']('100%'), _0x57e454 = cheerio['load'](_0x34993a([
            'foo',
            'default',
            'default',
            '500'
        ])), _0x57e454('iframe')['attr']('width')['should']['eql']('500');
    }), it('height', () => {
        let _0x404ff1 = cheerio['load'](_0x34993a([
            'foo',
            'default',
            'default',
            'default',
            'default'
        ]));
        _0x404ff1('iframe')['attr']('height')['should']['eql']('300'), _0x404ff1 = cheerio['load'](_0x34993a([
            'foo',
            'default',
            'default',
            'default',
            '500'
        ])), _0x404ff1('iframe')['attr']('height')['should']['eql']('500');
    });
});
