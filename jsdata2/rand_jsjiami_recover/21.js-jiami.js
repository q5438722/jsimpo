'use strict';
describe('Injector', () => {
    const _0x35f181 = [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head id="head"><title>Test</title>',
        '</head>',
        '<body id="body">',
        '<div></div>',
        '<p></p>',
        '</body>',
        '</html>'
    ]['join']('');
    const _0x103e25 = require('../../../lib/extend/injector');
    it('register() - entry is required', () => {
        const _0x13b6cb = new _0x103e25();
        try {
            if ('PMQzA' === 'bpPMj') {
                const _0x1e8a8a = new _0x103e25();
                const _0x29abc9 = '<script src="jquery.min.js"></script>';
                _0x1e8a8a['register']('head_end', _0x29abc9);
                _0x1e8a8a['register']('body_end', _0x29abc9);
                _0x1e8a8a['register']('body_end', _0x29abc9, 'home');
                _0x1e8a8a['getSize']('head_begin')['should']['eql'](0);
                _0x1e8a8a['getSize']('head_end')['should']['eql'](1);
                _0x1e8a8a['getSize']('body_end')['should']['eql'](2);
            } else {
                _0x13b6cb['register']();
            }
        } catch (_0x1a12cf) {
            _0x1a12cf['should']['be']['instanceOf'](TypeError)['property']('message', 'entry is required');
        }
    });
    it('register() - string', () => {
        const _0x17784b = new _0x103e25();
        const _0x3d042b = '<link rel="stylesheet" href="DPlayer.min.css" />';
        _0x17784b['register']('head_begin', _0x3d042b);
        _0x17784b['register']('head_end', _0x3d042b, 'home');
        _0x17784b['get']('head_begin')['should']['contains'](_0x3d042b);
        _0x17784b['get']('head_begin', 'default')['should']['contains'](_0x3d042b);
        _0x17784b['get']('head_end', 'home')['should']['contains'](_0x3d042b);
    });
    it('register() - function', () => {
        if ('ajXvk' !== 'ajXvk') {
            const _0x1a9a83 = [
                '<!DOCTYPE html>',
                '<html lang="en">',
                '<head id="head"><title>Test</title>',
                '</head>',
                '<body id="body">',
                '<div></div>',
                '<p></p>',
                '</body>',
                '</html>'
            ]['join']('\n');
            const _0x514fa8 = new _0x103e25();
            _0x514fa8['register']('head_begin', '<!-- Powered by Hexo -->');
            _0x514fa8['register']('head_end', '<link href="prism.css" rel="stylesheet">');
            _0x514fa8['register']('head_end', '<link href="prism-linenumber.css" rel="stylesheet">');
            _0x514fa8['register']('body_begin', '<script>window.Prism = window.Prism || {}; window.Prism.manual = true;</script>');
            _0x514fa8['register']('body_end', '<script src="prism.js"></script>');
            const _0x5083a1 = _0x514fa8['exec'](_0x1a9a83);
            _0x5083a1['should']['contain']('<head id="head"><!-- hexo injector head_begin start --><!-- Powered by Hexo --><!-- hexo injector head_begin end -->');
            _0x5083a1['should']['contain']('<!-- hexo injector head_end start --><link href="prism.css" rel="stylesheet"><link href="prism-linenumber.css" rel="stylesheet"><!-- hexo injector head_end end --></head>');
            _0x5083a1['should']['contain']('<body id="body"><!-- hexo injector body_begin start --><script>window.Prism = window.Prism || {}; window.Prism.manual = true;</script><!-- hexo injector body_begin end -->');
            _0x5083a1['should']['contain']('<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>');
        } else {
            const _0x4a76ba = new _0x103e25();
            const _0x295e67 = () => '<link rel="stylesheet" href="DPlayer.min.css" />';
            _0x4a76ba['register']('head_begin', _0x295e67);
            _0x4a76ba['get']('head_begin')['should']['contains'](_0x295e67());
        }
    });
    it('register() - fallback when entry not exists', () => {
        const _0x1f291d = new _0x103e25();
        const _0x389c22 = '<link rel="stylesheet" href="DPlayer.min.css" />';
        _0x1f291d['register']('foo', _0x389c22);
        _0x1f291d['get']('head_end')['should']['contains'](_0x389c22);
    });
    it('list()', () => {
        var _0x3205d4 = {
            'oiHOU': '<script src="jquery.min.js"></script>',
            'Dbpzf': 'body_begin',
            'naplq': 'home',
            'GHMnJ': 'head_end'
        };
        if ('dTQqB' === 'nOeap') {
            const _0x4e61f4 = new _0x103e25();
            const _0x3288c8 = _0x3205d4['oiHOU'];
            _0x4e61f4['register'](_0x3205d4['Dbpzf'], _0x3288c8);
            _0x4e61f4['register']('body_end', _0x3288c8, _0x3205d4['naplq']);
            _0x4e61f4['get'](_0x3205d4['Dbpzf'])['should']['be']['instanceOf'](Array);
            _0x4e61f4['get'](_0x3205d4['Dbpzf'])['should']['contains'](_0x3288c8);
            _0x4e61f4['get']('body_end', 'home')['should']['be']['instanceOf'](Array);
            _0x4e61f4['get']('body_end', 'home')['should']['contains'](_0x3288c8);
            _0x4e61f4['get'](_0x3205d4['GHMnJ'])['should']['be']['instanceOf'](Array);
            _0x4e61f4['get'](_0x3205d4['GHMnJ'])['should']['eql']([]);
        } else {
            const _0x41500f = new _0x103e25();
            _0x41500f['register']('body_begin', '<script src="DPlayer.min.js"></script>');
            _0x41500f['list']()['body_begin']['default']['should']['be']['instanceOf'](Set);
            [..._0x41500f['list']()['body_begin']['default']]['should']['not']['be']['empty'];
        }
    });
    it('get()', () => {
        const _0x56c919 = new _0x103e25();
        const _0x3da0d0 = '<script src="jquery.min.js"></script>';
        _0x56c919['register']('body_begin', _0x3da0d0);
        _0x56c919['register']('body_end', _0x3da0d0, 'home');
        _0x56c919['get']('body_begin')['should']['be']['instanceOf'](Array);
        _0x56c919['get']('body_begin')['should']['contains'](_0x3da0d0);
        _0x56c919['get']('body_end', 'home')['should']['be']['instanceOf'](Array);
        _0x56c919['get']('body_end', 'home')['should']['contains'](_0x3da0d0);
        _0x56c919['get']('head_end')['should']['be']['instanceOf'](Array);
        _0x56c919['get']('head_end')['should']['eql']([]);
    });
    it('getText()', () => {
        const _0x42dab8 = new _0x103e25();
        const _0x3bb6ed = '<script src="jquery.min.js"></script>';
        _0x42dab8['register']('head_end', _0x3bb6ed);
        _0x42dab8['register']('body_end', _0x3bb6ed, 'home');
        _0x42dab8['getText']('body_end', 'home')['should']['eql'](_0x3bb6ed);
        _0x42dab8['getText']('body_end')['should']['eql']('');
    });
    it('getSize()', () => {
        const _0x14cf65 = new _0x103e25();
        const _0x24f526 = '<script src="jquery.min.js"></script>';
        _0x14cf65['register']('head_end', _0x24f526);
        _0x14cf65['register']('body_end', _0x24f526);
        _0x14cf65['register']('body_end', _0x24f526, 'home');
        _0x14cf65['getSize']('head_begin')['should']['eql'](0);
        _0x14cf65['getSize']('head_end')['should']['eql'](1);
        _0x14cf65['getSize']('body_end')['should']['eql'](2);
    });
    it('exec() - default', () => {
        const _0x917fc6 = new _0x103e25();
        const _0x19d31e = _0x917fc6['exec'](_0x35f181);
        _0x19d31e['should']['contain']('<head id="head"><title>Test</title></head>');
        _0x19d31e['should']['contain']('<body id="body"><div></div><p></p></body>');
    });
    it('exec() - default', () => {
        const _0x1b3229 = new _0x103e25();
        const _0x444b61 = _0x1b3229['exec'](_0x35f181);
        _0x444b61['should']['contain']('<head id="head"><title>Test</title></head>');
        _0x444b61['should']['contain']('<body id="body"><div></div><p></p></body>');
    });
    it('exec() - insert code', () => {
        if ('nrfPQ' === 'nrfPQ') {
            const _0x46cfd3 = new _0x103e25();
            _0x46cfd3['register']('head_begin', '<!-- Powered by Hexo -->');
            _0x46cfd3['register']('head_end', '<link href="prism.css" rel="stylesheet">');
            _0x46cfd3['register']('head_end', '<link href="prism-linenumber.css" rel="stylesheet">');
            _0x46cfd3['register']('body_begin', '<script>window.Prism = window.Prism || {}; window.Prism.manual = true;</script>');
            _0x46cfd3['register']('body_end', '<script src="prism.js"></script>');
            const _0x24564b = _0x46cfd3['exec'](_0x35f181);
            _0x24564b['should']['contain']('<head id="head"><!-- hexo injector head_begin start --><!-- Powered by Hexo --><!-- hexo injector head_begin end -->');
            _0x24564b['should']['contain']('<!-- hexo injector head_end start --><link href="prism.css" rel="stylesheet"><link href="prism-linenumber.css" rel="stylesheet"><!-- hexo injector head_end end --></head>');
            _0x24564b['should']['contain']('<body id="body"><!-- hexo injector body_begin start --><script>window.Prism = window.Prism || {}; window.Prism.manual = true;</script><!-- hexo injector body_begin end -->');
            _0x24564b['should']['contain']('<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>');
        } else {
            const _0xf23a20 = new _0x103e25();
            const _0x59476e = '<link rel="stylesheet" href="DPlayer.min.css" />';
            _0xf23a20['register']('foo', _0x59476e);
            _0xf23a20['get']('head_end')['should']['contains'](_0x59476e);
        }
    });
    it('exec() - no duplicate insert', () => {
        const _0x35f181 = [
            '<!DOCTYPE html>',
            '<html lang="en">',
            '<head id="head"><!-- hexo injector head_begin start --><!-- hexo injector head_begin end -->',
            '<title>Test</title>',
            '<!-- hexo injector head_end start --><link href="prism.css" rel="stylesheet"></head>',
            '<body id="body"><!-- hexo injector body_begin start --><!-- hexo injector body_begin end -->',
            '<div></div>',
            '<p></p>',
            '<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>',
            '</html>'
        ]['join']('');
        const _0x5692fb = new _0x103e25();
        _0x5692fb['register']('head_begin', '<!-- Powered by Hexo -->');
        _0x5692fb['register']('head_end', '<link href="prism.css" rel="stylesheet">');
        _0x5692fb['register']('head_end', '<link href="prism-linenumber.css" rel="stylesheet">');
        _0x5692fb['register']('body_begin', '<script>window.Prism = window.Prism || {}; window.Prism.manual = true;</script>');
        _0x5692fb['register']('body_end', '<script src="prism.js"></script>');
        const _0x27a28e = _0x5692fb['exec'](_0x35f181);
        _0x27a28e['should']['contain']('<head id="head"><!-- hexo injector head_begin start --><!-- hexo injector head_begin end -->');
        _0x27a28e['should']['contain']('<!-- hexo injector head_end start --><link href="prism.css" rel="stylesheet"></head>');
        _0x27a28e['should']['contain']('<body id="body"><!-- hexo injector body_begin start --><!-- hexo injector body_begin end -->');
        _0x27a28e['should']['contain']('<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>');
    });
    it('exec() - multi-line head & body', () => {
        if ('HkEAq' !== 'fmAEZ') {
            const _0x35f181 = [
                '<!DOCTYPE html>',
                '<html lang="en">',
                '<head id="head"><title>Test</title>',
                '</head>',
                '<body id="body">',
                '<div></div>',
                '<p></p>',
                '</body>',
                '</html>'
            ]['join']('\n');
            const _0x5aed5a = new _0x103e25();
            _0x5aed5a['register']('head_begin', '<!-- Powered by Hexo -->');
            _0x5aed5a['register']('head_end', '<link href="prism.css" rel="stylesheet">');
            _0x5aed5a['register']('head_end', '<link href="prism-linenumber.css" rel="stylesheet">');
            _0x5aed5a['register']('body_begin', '<script>window.Prism = window.Prism || {}; window.Prism.manual = true;</script>');
            _0x5aed5a['register']('body_end', '<script src="prism.js"></script>');
            const _0x1ad44d = _0x5aed5a['exec'](_0x35f181);
            _0x1ad44d['should']['contain']('<head id="head"><!-- hexo injector head_begin start --><!-- Powered by Hexo --><!-- hexo injector head_begin end -->');
            _0x1ad44d['should']['contain']('<!-- hexo injector head_end start --><link href="prism.css" rel="stylesheet"><link href="prism-linenumber.css" rel="stylesheet"><!-- hexo injector head_end end --></head>');
            _0x1ad44d['should']['contain']('<body id="body"><!-- hexo injector body_begin start --><script>window.Prism = window.Prism || {}; window.Prism.manual = true;</script><!-- hexo injector body_begin end -->');
            _0x1ad44d['should']['contain']('<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>');
        } else {
            const _0x214fad = new _0x103e25();
            const _0x5063a5 = _0x214fad['exec'](_0x35f181);
            _0x5063a5['should']['contain']('<head id="head"><title>Test</title></head>');
            _0x5063a5['should']['contain']('<body id="body"><div></div><p></p></body>');
        }
    });
    it('exec() - inject on specific page', () => {
        if ('HZmrp' !== 'HZmrp') {
            const _0x4c20f8 = new _0x103e25();
            const _0x1255e1 = '<script src="jquery.min.js"></script>';
            _0x4c20f8['register']('head_end', _0x1255e1);
            _0x4c20f8['register']('body_end', _0x1255e1, 'home');
            _0x4c20f8['getText']('body_end', 'home')['should']['eql'](_0x1255e1);
            _0x4c20f8['getText']('body_end')['should']['eql']('');
        } else {
            const _0x35f181 = [
                '<!DOCTYPE html>',
                '<html lang="en">',
                '<head id="head"><title>Test</title>',
                '</head>',
                '<body id="body">',
                '<div></div>',
                '<p></p>',
                '</body>',
                '</html>'
            ]['join']('\n');
            const _0x25c9e5 = new _0x103e25();
            _0x25c9e5['register']('head_begin', '<!-- head_begin_default -->');
            _0x25c9e5['register']('head_begin', '<!-- head_begin_home -->', 'home');
            _0x25c9e5['register']('head_begin', '<!-- head_begin_post -->', 'post');
            _0x25c9e5['register']('head_begin', '<!-- head_begin_page -->', 'page');
            _0x25c9e5['register']('head_begin', '<!-- head_begin_archive -->', 'archive');
            _0x25c9e5['register']('head_begin', '<!-- head_begin_category -->', 'category');
            _0x25c9e5['register']('head_begin', '<!-- head_begin_tag -->', 'tag');
            const _0x39de30 = _0x25c9e5['exec'](_0x35f181, { 'page': {} });
            const _0x5d2060 = _0x25c9e5['exec'](_0x35f181, { 'page': { '__index': !![] } });
            const _0x2508a4 = _0x25c9e5['exec'](_0x35f181, { 'page': { '__post': !![] } });
            const _0x3a1113 = _0x25c9e5['exec'](_0x35f181, { 'page': { '__page': !![] } });
            const _0x198043 = _0x25c9e5['exec'](_0x35f181, { 'page': { 'archive': !![] } });
            const _0x2d06e4 = _0x25c9e5['exec'](_0x35f181, { 'page': { 'category': !![] } });
            const _0x472fb5 = _0x25c9e5['exec'](_0x35f181, { 'page': { 'tag': !![] } });
            _0x39de30['should']['not']['contain']('<!-- head_begin_home -->');
            _0x5d2060['should']['contain']('<!-- head_begin_home --><!-- head_begin_default -->');
            _0x39de30['should']['not']['contain']('<!-- head_begin_post -->');
            _0x2508a4['should']['contain']('<!-- head_begin_post --><!-- head_begin_default -->');
            _0x39de30['should']['not']['contain']('<!-- head_begin_page -->');
            _0x3a1113['should']['contain']('<!-- head_begin_page --><!-- head_begin_default -->');
            _0x39de30['should']['not']['contain']('<!-- head_begin_archive -->');
            _0x198043['should']['contain']('<!-- head_begin_archive --><!-- head_begin_default -->');
            _0x39de30['should']['not']['contain']('<!-- head_begin_category -->');
            _0x2d06e4['should']['contain']('<!-- head_begin_category --><!-- head_begin_default -->');
            _0x39de30['should']['not']['contain']('<!-- head_begin_tag -->');
            _0x472fb5['should']['contain']('<!-- head_begin_tag --><!-- head_begin_default -->');
        }
    });
});