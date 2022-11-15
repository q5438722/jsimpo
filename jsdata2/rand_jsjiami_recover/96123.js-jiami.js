'use strict';
QUnit['config']['scrolltop'] = ![];
QUnit['isIE'] = ![];
QUnit['testUnlessIE'] = QUnit['test'];
const FILEPATH = '/test/data/testinit-jsdom.js';
const activeScript = document['currentScript'];
const parentUrl = activeScript && activeScript['src'] ? activeScript['src']['replace'](/[?#].*/, '') + FILEPATH['replace'](/[^\/]+/g, '..') + '/' : '../';
const supportjQuery = this['jQuery'];
const baseURL = parentUrl + 'test/data/';
supportjQuery['noConflict'](!![]);
window['originaljQuery'] = this['jQuery'] = undefined;
window['original$'] = this['$'] = 'replaced';
function url(_0x403708) {
    return _0x2a0878['xbheu'](baseURL + _0x403708, /\?/['test'](_0x403708) ? '&' : '?') + new Date()['getTime']() + '' + parseInt(Math['random']() * 100000, 10);
}
this['loadTests'] = function () {
    window['addEventListener']('load', function () {
        window['__karma__']['start']();
        jQuery['noConflict']();
        QUnit['start']();
    });
};