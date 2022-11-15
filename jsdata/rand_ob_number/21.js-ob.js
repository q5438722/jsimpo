'use strict';
describe('Injector', () => {
    const _0x5bfc0a = [
            '<!DOCTYPE\x20html>',
            '<html\x20lang=\x22en\x22>',
            '<head\x20id=\x22head\x22><title>Test</title>',
            '</head>',
            '<body\x20id=\x22body\x22>',
            '<div></div>',
            '<p></p>',
            '</body>',
            '</html>'
        ]['join'](''), _0x545baf = require('../../../lib/extend/injector');
    it('register()\x20-\x20entry\x20is\x20required', () => {
        const _0x2b2298 = new _0x545baf();
        try {
            _0x2b2298['register']();
        } catch (_0x395ed5) {
            _0x395ed5['should']['be']['instanceOf'](TypeError)['property']('message', 'entry\x20is\x20required');
        }
    }), it('register()\x20-\x20string', () => {
        const _0xa29d38 = new _0x545baf(), _0x3bd904 = '<link\x20rel=\x22stylesheet\x22\x20href=\x22DPlayer.min.css\x22\x20/>';
        _0xa29d38['register']('head_begin', _0x3bd904), _0xa29d38['register']('head_end', _0x3bd904, 'home'), _0xa29d38['get']('head_begin')['should']['contains'](_0x3bd904), _0xa29d38['get']('head_begin', 'default')['should']['contains'](_0x3bd904), _0xa29d38['get']('head_end', 'home')['should']['contains'](_0x3bd904);
    }), it('register()\x20-\x20function', () => {
        const _0x354a2d = new _0x545baf(), _0x12c384 = () => '<link\x20rel=\x22stylesheet\x22\x20href=\x22DPlayer.min.css\x22\x20/>';
        _0x354a2d['register']('head_begin', _0x12c384), _0x354a2d['get']('head_begin')['should']['contains'](_0x12c384());
    }), it('register()\x20-\x20fallback\x20when\x20entry\x20not\x20exists', () => {
        const _0x18a9ac = new _0x545baf(), _0x1cb94f = '<link\x20rel=\x22stylesheet\x22\x20href=\x22DPlayer.min.css\x22\x20/>';
        _0x18a9ac['register']('foo', _0x1cb94f), _0x18a9ac['get']('head_end')['should']['contains'](_0x1cb94f);
    }), it('list()', () => {
        const _0x59cf5a = new _0x545baf();
        _0x59cf5a['register']('body_begin', '<script\x20src=\x22DPlayer.min.js\x22></script>'), _0x59cf5a['list']()['body_begin']['default']['should']['be']['instanceOf'](Set), [..._0x59cf5a['list']()['body_begin']['default']]['should']['not']['be']['empty'];
    }), it('get()', () => {
        const _0x241efb = new _0x545baf(), _0x3c5abc = '<script\x20src=\x22jquery.min.js\x22></script>';
        _0x241efb['register']('body_begin', _0x3c5abc), _0x241efb['register']('body_end', _0x3c5abc, 'home'), _0x241efb['get']('body_begin')['should']['be']['instanceOf'](Array), _0x241efb['get']('body_begin')['should']['contains'](_0x3c5abc), _0x241efb['get']('body_end', 'home')['should']['be']['instanceOf'](Array), _0x241efb['get']('body_end', 'home')['should']['contains'](_0x3c5abc), _0x241efb['get']('head_end')['should']['be']['instanceOf'](Array), _0x241efb['get']('head_end')['should']['eql']([]);
    }), it('getText()', () => {
        const _0x3a38e9 = new _0x545baf(), _0x1bceac = '<script\x20src=\x22jquery.min.js\x22></script>';
        _0x3a38e9['register']('head_end', _0x1bceac), _0x3a38e9['register']('body_end', _0x1bceac, 'home'), _0x3a38e9['getText']('body_end', 'home')['should']['eql'](_0x1bceac), _0x3a38e9['getText']('body_end')['should']['eql']('');
    }), it('getSize()', () => {
        const _0x27aea6 = new _0x545baf(), _0x4341dc = '<script\x20src=\x22jquery.min.js\x22></script>';
        _0x27aea6['register']('head_end', _0x4341dc), _0x27aea6['register']('body_end', _0x4341dc), _0x27aea6['register']('body_end', _0x4341dc, 'home'), _0x27aea6['getSize']('head_begin')['should']['eql'](-0x73c + 0xf4f + -0x813), _0x27aea6['getSize']('head_end')['should']['eql'](-0xbf + -0x1867 + -0x1927 * -0x1), _0x27aea6['getSize']('body_end')['should']['eql'](-0xd84 + 0x4 * -0x245 + 0x16 * 0x107);
    }), it('exec()\x20-\x20default', () => {
        const _0x458b28 = new _0x545baf(), _0x1c11b1 = _0x458b28['exec'](_0x5bfc0a);
        _0x1c11b1['should']['contain']('<head\x20id=\x22head\x22><title>Test</title></head>'), _0x1c11b1['should']['contain']('<body\x20id=\x22body\x22><div></div><p></p></body>');
    }), it('exec()\x20-\x20default', () => {
        const _0xad3624 = new _0x545baf(), _0x4d2de8 = _0xad3624['exec'](_0x5bfc0a);
        _0x4d2de8['should']['contain']('<head\x20id=\x22head\x22><title>Test</title></head>'), _0x4d2de8['should']['contain']('<body\x20id=\x22body\x22><div></div><p></p></body>');
    }), it('exec()\x20-\x20insert\x20code', () => {
        const _0x509b88 = new _0x545baf();
        _0x509b88['register']('head_begin', '<!--\x20Powered\x20by\x20Hexo\x20-->'), _0x509b88['register']('head_end', '<link\x20href=\x22prism.css\x22\x20rel=\x22stylesheet\x22>'), _0x509b88['register']('head_end', '<link\x20href=\x22prism-linenumber.css\x22\x20rel=\x22stylesheet\x22>'), _0x509b88['register']('body_begin', '<script>window.Prism\x20=\x20window.Prism\x20||\x20{};\x20window.Prism.manual\x20=\x20true;</script>'), _0x509b88['register']('body_end', '<script\x20src=\x22prism.js\x22></script>');
        const _0x5f5ce0 = _0x509b88['exec'](_0x5bfc0a);
        _0x5f5ce0['should']['contain']('<head\x20id=\x22head\x22><!--\x20hexo\x20injector\x20head_begin\x20start\x20--><!--\x20Powered\x20by\x20Hexo\x20--><!--\x20hexo\x20injector\x20head_begin\x20end\x20-->'), _0x5f5ce0['should']['contain']('<!--\x20hexo\x20injector\x20head_end\x20start\x20--><link\x20href=\x22prism.css\x22\x20rel=\x22stylesheet\x22><link\x20href=\x22prism-linenumber.css\x22\x20rel=\x22stylesheet\x22><!--\x20hexo\x20injector\x20head_end\x20end\x20--></head>'), _0x5f5ce0['should']['contain']('<body\x20id=\x22body\x22><!--\x20hexo\x20injector\x20body_begin\x20start\x20--><script>window.Prism\x20=\x20window.Prism\x20||\x20{};\x20window.Prism.manual\x20=\x20true;</script><!--\x20hexo\x20injector\x20body_begin\x20end\x20-->'), _0x5f5ce0['should']['contain']('<!--\x20hexo\x20injector\x20body_end\x20start\x20--><script\x20src=\x22prism.js\x22></script><!--\x20hexo\x20injector\x20body_end\x20end\x20--></body>');
    }), it('exec()\x20-\x20no\x20duplicate\x20insert', () => {
        const _0x3e8054 = [
                '<!DOCTYPE\x20html>',
                '<html\x20lang=\x22en\x22>',
                '<head\x20id=\x22head\x22><!--\x20hexo\x20injector\x20head_begin\x20start\x20--><!--\x20hexo\x20injector\x20head_begin\x20end\x20-->',
                '<title>Test</title>',
                '<!--\x20hexo\x20injector\x20head_end\x20start\x20--><link\x20href=\x22prism.css\x22\x20rel=\x22stylesheet\x22></head>',
                '<body\x20id=\x22body\x22><!--\x20hexo\x20injector\x20body_begin\x20start\x20--><!--\x20hexo\x20injector\x20body_begin\x20end\x20-->',
                '<div></div>',
                '<p></p>',
                '<!--\x20hexo\x20injector\x20body_end\x20start\x20--><script\x20src=\x22prism.js\x22></script><!--\x20hexo\x20injector\x20body_end\x20end\x20--></body>',
                '</html>'
            ]['join'](''), _0x2587bc = new _0x545baf();
        _0x2587bc['register']('head_begin', '<!--\x20Powered\x20by\x20Hexo\x20-->'), _0x2587bc['register']('head_end', '<link\x20href=\x22prism.css\x22\x20rel=\x22stylesheet\x22>'), _0x2587bc['register']('head_end', '<link\x20href=\x22prism-linenumber.css\x22\x20rel=\x22stylesheet\x22>'), _0x2587bc['register']('body_begin', '<script>window.Prism\x20=\x20window.Prism\x20||\x20{};\x20window.Prism.manual\x20=\x20true;</script>'), _0x2587bc['register']('body_end', '<script\x20src=\x22prism.js\x22></script>');
        const _0x38bf89 = _0x2587bc['exec'](_0x3e8054);
        _0x38bf89['should']['contain']('<head\x20id=\x22head\x22><!--\x20hexo\x20injector\x20head_begin\x20start\x20--><!--\x20hexo\x20injector\x20head_begin\x20end\x20-->'), _0x38bf89['should']['contain']('<!--\x20hexo\x20injector\x20head_end\x20start\x20--><link\x20href=\x22prism.css\x22\x20rel=\x22stylesheet\x22></head>'), _0x38bf89['should']['contain']('<body\x20id=\x22body\x22><!--\x20hexo\x20injector\x20body_begin\x20start\x20--><!--\x20hexo\x20injector\x20body_begin\x20end\x20-->'), _0x38bf89['should']['contain']('<!--\x20hexo\x20injector\x20body_end\x20start\x20--><script\x20src=\x22prism.js\x22></script><!--\x20hexo\x20injector\x20body_end\x20end\x20--></body>');
    }), it('exec()\x20-\x20multi-line\x20head\x20&\x20body', () => {
        const _0x215c1e = [
                '<!DOCTYPE\x20html>',
                '<html\x20lang=\x22en\x22>',
                '<head\x20id=\x22head\x22><title>Test</title>',
                '</head>',
                '<body\x20id=\x22body\x22>',
                '<div></div>',
                '<p></p>',
                '</body>',
                '</html>'
            ]['join']('\x0a'), _0x1fae57 = new _0x545baf();
        _0x1fae57['register']('head_begin', '<!--\x20Powered\x20by\x20Hexo\x20-->'), _0x1fae57['register']('head_end', '<link\x20href=\x22prism.css\x22\x20rel=\x22stylesheet\x22>'), _0x1fae57['register']('head_end', '<link\x20href=\x22prism-linenumber.css\x22\x20rel=\x22stylesheet\x22>'), _0x1fae57['register']('body_begin', '<script>window.Prism\x20=\x20window.Prism\x20||\x20{};\x20window.Prism.manual\x20=\x20true;</script>'), _0x1fae57['register']('body_end', '<script\x20src=\x22prism.js\x22></script>');
        const _0x945eb3 = _0x1fae57['exec'](_0x215c1e);
        _0x945eb3['should']['contain']('<head\x20id=\x22head\x22><!--\x20hexo\x20injector\x20head_begin\x20start\x20--><!--\x20Powered\x20by\x20Hexo\x20--><!--\x20hexo\x20injector\x20head_begin\x20end\x20-->'), _0x945eb3['should']['contain']('<!--\x20hexo\x20injector\x20head_end\x20start\x20--><link\x20href=\x22prism.css\x22\x20rel=\x22stylesheet\x22><link\x20href=\x22prism-linenumber.css\x22\x20rel=\x22stylesheet\x22><!--\x20hexo\x20injector\x20head_end\x20end\x20--></head>'), _0x945eb3['should']['contain']('<body\x20id=\x22body\x22><!--\x20hexo\x20injector\x20body_begin\x20start\x20--><script>window.Prism\x20=\x20window.Prism\x20||\x20{};\x20window.Prism.manual\x20=\x20true;</script><!--\x20hexo\x20injector\x20body_begin\x20end\x20-->'), _0x945eb3['should']['contain']('<!--\x20hexo\x20injector\x20body_end\x20start\x20--><script\x20src=\x22prism.js\x22></script><!--\x20hexo\x20injector\x20body_end\x20end\x20--></body>');
    }), it('exec()\x20-\x20inject\x20on\x20specific\x20page', () => {
        const _0x359889 = [
                '<!DOCTYPE\x20html>',
                '<html\x20lang=\x22en\x22>',
                '<head\x20id=\x22head\x22><title>Test</title>',
                '</head>',
                '<body\x20id=\x22body\x22>',
                '<div></div>',
                '<p></p>',
                '</body>',
                '</html>'
            ]['join']('\x0a'), _0x4eea22 = new _0x545baf();
        _0x4eea22['register']('head_begin', '<!--\x20head_begin_default\x20-->'), _0x4eea22['register']('head_begin', '<!--\x20head_begin_home\x20-->', 'home'), _0x4eea22['register']('head_begin', '<!--\x20head_begin_post\x20-->', 'post'), _0x4eea22['register']('head_begin', '<!--\x20head_begin_page\x20-->', 'page'), _0x4eea22['register']('head_begin', '<!--\x20head_begin_archive\x20-->', 'archive'), _0x4eea22['register']('head_begin', '<!--\x20head_begin_category\x20-->', 'category'), _0x4eea22['register']('head_begin', '<!--\x20head_begin_tag\x20-->', 'tag');
        const _0x457bbd = _0x4eea22['exec'](_0x359889, { 'page': {} }), _0x2cd97d = _0x4eea22['exec'](_0x359889, { 'page': { '__index': !![] } }), _0x11ebad = _0x4eea22['exec'](_0x359889, { 'page': { '__post': !![] } }), _0xecf6ac = _0x4eea22['exec'](_0x359889, { 'page': { '__page': !![] } }), _0x6fc91c = _0x4eea22['exec'](_0x359889, { 'page': { 'archive': !![] } }), _0x44e73b = _0x4eea22['exec'](_0x359889, { 'page': { 'category': !![] } }), _0x19f95f = _0x4eea22['exec'](_0x359889, { 'page': { 'tag': !![] } });
        _0x457bbd['should']['not']['contain']('<!--\x20head_begin_home\x20-->'), _0x2cd97d['should']['contain']('<!--\x20head_begin_home\x20--><!--\x20head_begin_default\x20-->'), _0x457bbd['should']['not']['contain']('<!--\x20head_begin_post\x20-->'), _0x11ebad['should']['contain']('<!--\x20head_begin_post\x20--><!--\x20head_begin_default\x20-->'), _0x457bbd['should']['not']['contain']('<!--\x20head_begin_page\x20-->'), _0xecf6ac['should']['contain']('<!--\x20head_begin_page\x20--><!--\x20head_begin_default\x20-->'), _0x457bbd['should']['not']['contain']('<!--\x20head_begin_archive\x20-->'), _0x6fc91c['should']['contain']('<!--\x20head_begin_archive\x20--><!--\x20head_begin_default\x20-->'), _0x457bbd['should']['not']['contain']('<!--\x20head_begin_category\x20-->'), _0x44e73b['should']['contain']('<!--\x20head_begin_category\x20--><!--\x20head_begin_default\x20-->'), _0x457bbd['should']['not']['contain']('<!--\x20head_begin_tag\x20-->'), _0x19f95f['should']['contain']('<!--\x20head_begin_tag\x20--><!--\x20head_begin_default\x20-->');
    });
});
