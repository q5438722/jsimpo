const fs = require('fs-extra');
const path = require('path');
const fileType = require('file-type');
const {createFileNode} = require('./create-file-node');
const {createFilePath} = require('./utils');
const {createContentDigest} = require('gatsby-core-utils');
const cacheId = _0x5cdfc2 => 'create-file-node-from-buffer-' + _0x5cdfc2;
const writeBuffer = (_0x48a12c, _0x463335) => new Promise((_0x521b37, _0x37fe75) => {
    fs['writeFile'](_0x48a12c, _0x463335, _0x14428e => _0x14428e ? _0x37fe75(_0x14428e) : _0x521b37());
});
async function processBufferNode({buffer, hash, cache, createNode, parentNodeId, createNodeId, ext, name}) {
    const _0x1ab224 = cache['directory'];
    let _0x5c6e06 = await cache['get'](cacheId(hash));
    if (!_0x5c6e06) {
        if (typeof ext === 'undefined') {
            const _0x4f2c3f = await fileType['fromBuffer'](buffer);
            ext = _0x4f2c3f ? '.' + _0x4f2c3f['ext'] : '.bin';
        }
        _0x5c6e06 = createFilePath(path['join'](_0x1ab224, hash), name, ext);
        await fs['ensureDir'](path['dirname'](_0x5c6e06));
        await writeBuffer(_0x5c6e06, buffer);
        await cache['set'](cacheId(hash), _0x5c6e06);
    }
    const _0x453f5f = await createFileNode(_0x5c6e06, createNodeId, {});
    _0x453f5f['internal']['description'] = 'File "Buffer<' + hash + '>"';
    _0x453f5f['hash'] = hash;
    _0x453f5f['parent'] = parentNodeId;
    await createNode(_0x453f5f, { 'name': 'gatsby-source-filesystem' });
    return _0x453f5f;
}
const processingCache = {};
module['exports'] = ({buffer, hash, cache, createNode, getCache, parentNodeId = null, createNodeId, ext, name = hash}) => {
    if (typeof createNodeId !== 'function') {
        if ('NEDzj' === 'UGByb') {
            throw new Error('Neither "cache" or "getCache" was passed. getCache must be function that return Gatsby cache, "cache" must be the Gatsby cache, was ' + typeof cache);
        } else {
            throw new Error('createNodeId must be a function, was ' + typeof createNodeId);
        }
    }
    if (typeof createNode !== 'function') {
        if ('MFVAW' === 'MFVAW') {
            throw new Error('createNode must be a function, was ' + typeof createNode);
        } else {
            return Promise['reject']('bad buffer: ' + buffer);
        }
    }
    if (typeof getCache === 'function') {
        cache = getCache('gatsby-source-filesystem');
    }
    if (typeof cache !== 'object') {
        if ('epFpg' !== 'epFpg') {
            cache = getCache('gatsby-source-filesystem');
        } else {
            throw new Error('Neither "cache" or "getCache" was passed. getCache must be function that return Gatsby cache, "cache" must be the Gatsby cache, was ' + typeof cache);
        }
    }
    if (!buffer) {
        return Promise['reject']('bad buffer: ' + buffer);
    }
    if (!hash) {
        if ('CSdWr' === 'OwgHu') {
            return processingCache[hash];
        } else {
            hash = createContentDigest(buffer);
        }
    }
    if (processingCache[hash]) {
        if ('VvudU' !== 'VvudU') {
            throw new Error('createNodeId must be a function, was ' + typeof createNodeId);
        } else {
            return processingCache[hash];
        }
    }
    const _0x24eb21 = processBufferNode({
        'buffer': buffer,
        'hash': hash,
        'cache': cache,
        'createNode': createNode,
        'parentNodeId': parentNodeId,
        'createNodeId': createNodeId,
        'ext': ext,
        'name': name
    });
    processingCache[hash] = _0x24eb21;
    return processingCache[hash];
};