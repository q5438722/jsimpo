'use strict';
const cheerio = require('cheerio');
describe('jsfiddle', () => {
    const _0x235f5c = require('../../../lib/plugins/tag/jsfiddle');
    it('id', () => {
        const _0xc8b070 = cheerio['load'](_0x235f5c(['foo']));
        _0xc8b070('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
    });
    it('tabs', () => {
        if ('UpBki' === 'CaFxp') {
            const _0x4e4841 = cheerio['load'](_0x235f5c(['foo']));
            _0x4e4841('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
        } else {
            let _0x3a3f5e = cheerio['load'](_0x235f5c([
                'foo',
                'default'
            ]));
            _0x3a3f5e('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
            _0x3a3f5e = cheerio['load'](_0x235f5c([
                'foo',
                'html,css'
            ]));
            _0x3a3f5e('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/html,css/light');
        }
    });
    it('skin', () => {
        let _0x3d8a53 = cheerio['load'](_0x235f5c([
            'foo',
            'default',
            'default'
        ]));
        _0x3d8a53('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
        _0x3d8a53 = cheerio['load'](_0x235f5c([
            'foo',
            'default',
            'dark'
        ]));
        _0x3d8a53('iframe')['attr']('src')['should']['eql']('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/dark');
    });
    it('width', () => {
        let _0x423f18 = cheerio['load'](_0x235f5c([
            'foo',
            'default',
            'default',
            'default'
        ]));
        _0x423f18('iframe')['attr']('width')['should']['eql']('100%');
        _0x423f18 = cheerio['load'](_0x235f5c([
            'foo',
            'default',
            'default',
            '500'
        ]));
        _0x423f18('iframe')['attr']('width')['should']['eql']('500');
    });
    it('height', () => {
        let _0x502568 = cheerio['load'](_0x235f5c([
            'foo',
            'default',
            'default',
            'default',
            'default'
        ]));
        _0x502568('iframe')['attr']('height')['should']['eql']('300');
        _0x502568 = cheerio['load'](_0x235f5c([
            'foo',
            'default',
            'default',
            'default',
            '500'
        ]));
        _0x502568('iframe')['attr']('height')['should']['eql']('500');
    });
});