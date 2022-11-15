const should = require('should');
const sinon = require('sinon');
const routing = require('../../../core/frontend/services/routing');
const getRssUrl = require('../../../core/frontend/meta/rss-url');
describe('getRssUrl', function () {
    beforeEach(function () {
        sinon['stub'](routing['registry'], 'getRssUrl')['returns']('/rss/');
    });
    afterEach(function () {
        sinon['restore']();
    });
    it('should return rss url', function () {
        const _0x466136 = getRssUrl({ 'secure': ![] });
        should['equal'](_0x466136, '/rss/');
    });
    it('forwards absolute/secure flags', function () {
        const _0x42807e = getRssUrl({ 'secure': ![] }, !![]);
        routing['registry']['getRssUrl']['calledWith']({
            'secure': ![],
            'absolute': !![]
        })['should']['be']['true']();
    });
});