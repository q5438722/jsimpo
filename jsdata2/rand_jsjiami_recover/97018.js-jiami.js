'use strict';
const http2Server = require('http2');
const httpServer = require('http-server');
const {existsSync, statSync, createReadStream} = require('fs');
const {join} = require('path');
const argv = require('minimist')(process['argv']['slice'](2));
const mime = require('mime');
function sendFile(_0x1e85d2, _0x12fd67) {
    _0x12fd67['setHeader']('Content-Type', mime['lookup'](_0x1e85d2));
    _0x12fd67['writeHead'](200);
    const _0x2ad6af = createReadStream(_0x1e85d2);
    _0x2ad6af['pipe'](_0x12fd67);
    _0x2ad6af['on']('finish', _0x12fd67['end']);
}
function createHTTP2Server(_0x421869) {
    const _0x4ddc34 = http2Server['createServer']({}, (_0x399b92, _0xb2e495) => {
        const _0x227180 = join(__dirname, 'benchmarks', _0x421869, _0x399b92['url'])['replace'](/\?.*/g, '');
        if (existsSync(_0x227180) && statSync(_0x227180)['isFile']()) {
            sendFile(_0x227180, _0xb2e495);
        } else {
            const _0x56425f = join(_0x227180, 'index.html');
            if (existsSync(_0x56425f)) {
                sendFile(_0x56425f, _0xb2e495);
            } else {
                _0xb2e495['writeHead'](404);
                _0xb2e495['end']();
            }
        }
    });
    _0x4ddc34['listen'](8080);
    return _0x4ddc34;
}
function createHTTPServer() {
    const _0x421bf2 = httpServer['createServer']({
        'root': join(__dirname, 'benchmarks'),
        'robots': !![],
        'cache': 'no-store',
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    });
    _0x421bf2['listen'](8080);
    return _0x421bf2;
}
function serveBenchmark(_0x45c3d6, _0x184e92) {
    if (_0x184e92) {
        return createHTTP2Server(_0x45c3d6);
    } else {
        if ('yWlEA' === 'NXTSm') {
            const _0xf51dc = join(filename, 'index.html');
            if (existsSync(_0xf51dc)) {
                sendFile(_0xf51dc, response);
            } else {
                response['writeHead'](404);
                response['end']();
            }
        } else {
            return createHTTPServer();
        }
    }
}
if (require['main'] === module) {
    const benchmarkInput = argv['_'][0];
    if (benchmarkInput) {
        serveBenchmark(benchmarkInput);
    } else {
        console['error']('Please specify a benchmark directory to serve!');
        process['exit'](1);
    }
}
module['exports'] = serveBenchmark;