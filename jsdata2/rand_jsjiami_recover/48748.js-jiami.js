const {join} = require('path');
const {https} = require('firebase-functions');
const {default: next} = require('next');
const nextjsDistDir = join('src', require('./src/next.config.js')['distDir']);
const nextjsServer = next({
    'dev': ![],
    'conf': { 'distDir': nextjsDistDir }
});
const nextjsHandle = nextjsServer['getRequestHandler']();
exports['nextjsFunc'] = https['onRequest']((_0xc1278f, _0x6030ae) => {
    return nextjsServer['prepare']()['then'](() => nextjsHandle(_0xc1278f, _0x6030ae));
});