const http2Server = require('http2'), httpServer = require(_0x49cbab(472)), {existsSync, statSync, createReadStream} = require('fs'), {join} = require(_0x49cbab(473)), argv = require('minimist')(process[_0x49cbab(474)]['slice'](2)), mime = require(_0x49cbab(475));
function sendFile(_0x51995f, _0x58977a) {
    const _0x2b192e = _0x49cbab;
    _0x58977a[_0x2b192e(476)](_0x2b192e(477), mime[_0x2b192e(478)](_0x51995f)), _0x58977a['writeHead'](200);
    const _0x4402b5 = createReadStream(_0x51995f);
    _0x4402b5[_0x2b192e(479)](_0x58977a), _0x4402b5['on']('finish', _0x58977a[_0x2b192e(480)]);
}
function createHTTP2Server(_0x45c9c7) {
    const _0x46c3d0 = _0x49cbab, _0x1af56e = http2Server['createServer']({}, (_0x557feb, _0x35b4ad) => {
            const _0xf4bc6d = _0x13cf, _0x6ba09c = join(__dirname, _0xf4bc6d(481), _0x45c9c7, _0x557feb[_0xf4bc6d(482)])[_0xf4bc6d(483)](/\?.*/g, '');
            if (existsSync(_0x6ba09c) && statSync(_0x6ba09c)['isFile']())
                sendFile(_0x6ba09c, _0x35b4ad);
            else {
                const _0x16043a = join(_0x6ba09c, 'index.html');
                existsSync(_0x16043a) ? sendFile(_0x16043a, _0x35b4ad) : (_0x35b4ad['writeHead'](404), _0x35b4ad[_0xf4bc6d(480)]());
            }
        });
    return _0x1af56e[_0x46c3d0(484)](8080), _0x1af56e;
}
function createHTTPServer() {
    const _0x23fa2b = _0x49cbab, _0x65ca0a = httpServer[_0x23fa2b(485)]({
            'root': join(__dirname, _0x23fa2b(481)),
            'robots': !![],
            'cache': _0x23fa2b(486),
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        });
    return _0x65ca0a[_0x23fa2b(484)](8080), _0x65ca0a;
}
function serveBenchmark(_0x3ed8d4, _0x2cebd7) {
    return _0x2cebd7 ? createHTTP2Server(_0x3ed8d4) : createHTTPServer();
}
if (require[_0x49cbab(487)] === module) {
    const benchmarkInput = argv['_'][0];
    benchmarkInput ? serveBenchmark(benchmarkInput) : (console[_0x49cbab(488)]('Please specify a benchmark directory to serve!'), process[_0x49cbab(489)](1));
}
module[_0x49cbab(490)] = serveBenchmark;