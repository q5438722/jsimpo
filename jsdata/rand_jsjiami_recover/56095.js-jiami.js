'use strict';
const common = require('../common');
const tmpdir = require('../common/tmpdir');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
tmpdir['refresh']();
{
    assert['throws'](() => fs['rmdirSync'](path['join'](tmpdir['path'], 'noexist.txt'), { 'recursive': !![] }), { 'code': 'ENOENT' });
}
{
    fs['rmdir'](path['join'](tmpdir['path'], 'noexist.txt'), { 'recursive': !![] }, common['mustCall'](_0x6bf45a => {
        assert['strictEqual'](_0x6bf45a['code'], 'ENOENT');
    }));
}
{
    assert['rejects'](() => fs['promises']['rmdir'](path['join'](tmpdir['path'], 'noexist.txt'), { 'recursive': !![] }), { 'code': 'ENOENT' })['then'](common['mustCall']());
}