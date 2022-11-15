'use strict';
const common = require('../common'), tmpdir = require('../common/tmpdir'), assert = require('assert'), fs = require('fs'), path = require('path');
tmpdir['refresh']();
{
    assert['throws'](() => fs['rmdirSync'](path['join'](tmpdir['path'], 'noexist.txt'), { 'recursive': !![] }), { 'code': 'ENOENT' });
}
{
    fs['rmdir'](path['join'](tmpdir['path'], 'noexist.txt'), { 'recursive': !![] }, common['mustCall'](_0x499d6f => {
        assert['strictEqual'](_0x499d6f['code'], 'ENOENT');
    }));
}
{
    assert['rejects'](() => fs['promises']['rmdir'](path['join'](tmpdir['path'], 'noexist.txt'), { 'recursive': !![] }), { 'code': 'ENOENT' })['then'](common['mustCall']());
}
