'use strict';
const _0x1016 = [
    'mime',
    'setHeader',
    'Content-Type',
    'lookup',
    'pipe',
    'end',
    'benchmarks',
    'url',
    'replace',
    'listen',
    'createServer',
    'no-store',
    'main',
    'error',
    'exit',
    'exports',
    '61366HkseNB',
    '8ywUKoO',
    '7215STKZPb',
    '35251EpsAtk',
    '1tGQJTt',
    '232558HFNiuF',
    '21005uzUmDP',
    '2953CXTQTJ',
    '8pygclt',
    '281229AvroTW',
    'http-server',
    'path',
    'argv'
];
function _0x13cf(_0x2689d1, _0x4a4b09) {
    return _0x13cf = function (_0x1016a2, _0x13cf9f) {
        _0x1016a2 = _0x1016a2 - 0x1ce;
        let _0x773e8b = _0x1016[_0x1016a2];
        return _0x773e8b;
    }, _0x13cf(_0x2689d1, _0x4a4b09);
}
const _0x49cbab = _0x13cf;
(function (_0x5dbef5, _0x5ec845) {
    const _0x13c61a = _0x13cf;
    while (!![]) {
        try {
            const _0x54e056 = parseInt(_0x13c61a(0x1ce)) + parseInt(_0x13c61a(0x1cf)) * parseInt(_0x13c61a(0x1d0)) + parseInt(_0x13c61a(0x1d1)) * parseInt(_0x13c61a(0x1d2)) + -parseInt(_0x13c61a(0x1d3)) + -parseInt(_0x13c61a(0x1d4)) + -parseInt(_0x13c61a(0x1d5)) * parseInt(_0x13c61a(0x1d6)) + parseInt(_0x13c61a(0x1d7));
            if (_0x54e056 === _0x5ec845)
                break;
            else
                _0x5dbef5['push'](_0x5dbef5['shift']());
        } catch (_0x480df9) {
            _0x5dbef5['push'](_0x5dbef5['shift']());
        }
    }
}(_0x1016, 0x26aab));
const http2Server = require('http2'), httpServer = require(_0x49cbab(0x1d8)), {existsSync, statSync, createReadStream} = require('fs'), {join} = require(_0x49cbab(0x1d9)), argv = require('minimist')(process[_0x49cbab(0x1da)]['slice'](0x2)), mime = require(_0x49cbab(0x1db));
function sendFile(_0x51995f, _0x58977a) {
    const _0x2b192e = _0x49cbab;
    _0x58977a[_0x2b192e(0x1dc)](_0x2b192e(0x1dd), mime[_0x2b192e(0x1de)](_0x51995f)), _0x58977a['writeHead'](0xc8);
    const _0x4402b5 = createReadStream(_0x51995f);
    _0x4402b5[_0x2b192e(0x1df)](_0x58977a), _0x4402b5['on']('finish', _0x58977a[_0x2b192e(0x1e0)]);
}
function createHTTP2Server(_0x45c9c7) {
    const _0x46c3d0 = _0x49cbab, _0x1af56e = http2Server['createServer']({}, (_0x557feb, _0x35b4ad) => {
            const _0xf4bc6d = _0x13cf, _0x6ba09c = join(__dirname, _0xf4bc6d(0x1e1), _0x45c9c7, _0x557feb[_0xf4bc6d(0x1e2)])[_0xf4bc6d(0x1e3)](/\?.*/g, '');
            if (existsSync(_0x6ba09c) && statSync(_0x6ba09c)['isFile']())
                sendFile(_0x6ba09c, _0x35b4ad);
            else {
                const _0x16043a = join(_0x6ba09c, 'index.html');
                existsSync(_0x16043a) ? sendFile(_0x16043a, _0x35b4ad) : (_0x35b4ad['writeHead'](0x194), _0x35b4ad[_0xf4bc6d(0x1e0)]());
            }
        });
    return _0x1af56e[_0x46c3d0(0x1e4)](0x1f90), _0x1af56e;
}
function createHTTPServer() {
    const _0x23fa2b = _0x49cbab, _0x65ca0a = httpServer[_0x23fa2b(0x1e5)]({
            'root': join(__dirname, _0x23fa2b(0x1e1)),
            'robots': !![],
            'cache': _0x23fa2b(0x1e6),
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        });
    return _0x65ca0a[_0x23fa2b(0x1e4)](0x1f90), _0x65ca0a;
}
function serveBenchmark(_0x3ed8d4, _0x2cebd7) {
    return _0x2cebd7 ? createHTTP2Server(_0x3ed8d4) : createHTTPServer();
}
if (require[_0x49cbab(0x1e7)] === module) {
    const benchmarkInput = argv['_'][0x0];
    benchmarkInput ? serveBenchmark(benchmarkInput) : (console[_0x49cbab(0x1e8)]('Please\x20specify\x20a\x20benchmark\x20directory\x20to\x20serve!'), process[_0x49cbab(0x1e9)](0x1));
}
module[_0x49cbab(0x1ea)] = serveBenchmark;
