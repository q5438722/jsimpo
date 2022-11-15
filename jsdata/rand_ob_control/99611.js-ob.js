'use strict';
const contentDisposition = require('content-disposition'), getType = require('cache-content-type'), onFinish = require('on-finished'), escape = require('escape-html'), typeis = require('type-is')['is'], statuses = require('statuses'), destroy = require('destroy'), assert = require('assert'), extname = require('path')['extname'], vary = require('vary'), only = require('only'), util = require('util'), encodeUrl = require('encodeurl'), Stream = require('stream');
module['exports'] = {
    get 'socket'() {
        return this['res']['socket'];
    },
    get 'header'() {
        const _0x4bef5a = {
                'VuoZA': function (_0x5e4955, _0x407ac1) {
                    return _0x5e4955 === _0x407ac1;
                },
                'EAAww': 'function'
            }, {res: _0x4b6356} = this;
        return _0x4bef5a['VuoZA'](typeof _0x4b6356['getHeaders'], _0x4bef5a['EAAww']) ? _0x4b6356['getHeaders']() : _0x4b6356['_headers'] || {};
    },
    get 'headers'() {
        return this['header'];
    },
    get 'status'() {
        return this['res']['statusCode'];
    },
    set 'status'(_0x57750f) {
        const _0x503e33 = {
                'CTRIC': '3|1|6|2|0|4|5',
                'GcGfz': function (_0x3e0543, _0x125063, _0xaf03f5) {
                    return _0x3e0543(_0x125063, _0xaf03f5);
                },
                'pPhrh': 'status\x20code\x20must\x20be\x20a\x20number',
                'iluHT': function (_0x4a932f, _0x5356a6) {
                    return _0x4a932f < _0x5356a6;
                },
                'QyctK': function (_0x39ae49, _0x2dcf28, _0xcf3013) {
                    return _0x39ae49(_0x2dcf28, _0xcf3013);
                },
                'rAgIv': function (_0x408546, _0x4a6dc1) {
                    return _0x408546 >= _0x4a6dc1;
                },
                'AJwWS': function (_0x40021a, _0x1e0267) {
                    return _0x40021a <= _0x1e0267;
                }
            }, _0x486b59 = _0x503e33['CTRIC']['split']('|');
        let _0x430f7b = 0x0;
        while (!![]) {
            switch (_0x486b59[_0x430f7b++]) {
            case '0':
                this['res']['statusCode'] = _0x57750f;
                continue;
            case '1':
                _0x503e33['GcGfz'](assert, Number['isInteger'](_0x57750f), _0x503e33['pPhrh']);
                continue;
            case '2':
                this['_explicitStatus'] = !![];
                continue;
            case '3':
                if (this['headerSent'])
                    return;
                continue;
            case '4':
                if (_0x503e33['iluHT'](this['req']['httpVersionMajor'], 0x2))
                    this['res']['statusMessage'] = statuses[_0x57750f];
                continue;
            case '5':
                if (this['body'] && statuses['empty'][_0x57750f])
                    this['body'] = null;
                continue;
            case '6':
                _0x503e33['QyctK'](assert, _0x503e33['rAgIv'](_0x57750f, 0x64) && _0x503e33['AJwWS'](_0x57750f, 0x3e7), 'invalid\x20status\x20code:\x20' + _0x57750f);
                continue;
            }
            break;
        }
    },
    get 'message'() {
        return this['res']['statusMessage'] || statuses[this['status']];
    },
    set 'message'(_0xc328e5) {
        this['res']['statusMessage'] = _0xc328e5;
    },
    get 'body'() {
        return this['_body'];
    },
    set 'body'(_0x51093b) {
        const _0x7cb06c = {
                'AxzMo': function (_0xcb3493, _0xf3b72f) {
                    return _0xcb3493 == _0xf3b72f;
                },
                'yAQKQ': '0|5|4|2|1|3',
                'XGTuF': function (_0x6b2eb1, _0x34b9de) {
                    return _0x6b2eb1 === _0x34b9de;
                },
                'bnFkm': 'application/json',
                'Rluct': 'null',
                'SqpAK': 'Transfer-Encoding',
                'soTlu': 'Content-Length',
                'rVHui': 'Content-Type',
                'hhYsq': function (_0x33bdfe, _0x4999bf) {
                    return _0x33bdfe === _0x4999bf;
                },
                'WYqzW': 'string',
                'RqjjJ': 'html',
                'ZVweY': 'text',
                'ERsrN': 'bin',
                'sjYBU': function (_0x7475ad, _0x47e425) {
                    return _0x7475ad instanceof _0x47e425;
                },
                'IVAOB': function (_0x2cb789, _0x1aab96, _0x3578a3) {
                    return _0x2cb789(_0x1aab96, _0x3578a3);
                },
                'LGTti': function (_0x57beb9, _0x2aabb8) {
                    return _0x57beb9 !== _0x2aabb8;
                },
                'MKBjO': 'error',
                'kqEUg': function (_0x34d0bb, _0x23f029) {
                    return _0x34d0bb != _0x23f029;
                },
                'TQuNE': 'json'
            }, _0xe9b748 = this['_body'];
        this['_body'] = _0x51093b;
        if (_0x7cb06c['AxzMo'](_0x51093b, null)) {
            const _0xc91455 = _0x7cb06c['yAQKQ']['split']('|');
            let _0x1dc9e8 = 0x0;
            while (!![]) {
                switch (_0xc91455[_0x1dc9e8++]) {
                case '0':
                    if (!statuses['empty'][this['status']]) {
                        if (_0x7cb06c['XGTuF'](this['type'], _0x7cb06c['bnFkm'])) {
                            this['_body'] = _0x7cb06c['Rluct'];
                            return;
                        }
                        this['status'] = 0xcc;
                    }
                    continue;
                case '1':
                    this['remove'](_0x7cb06c['SqpAK']);
                    continue;
                case '2':
                    this['remove'](_0x7cb06c['soTlu']);
                    continue;
                case '3':
                    return;
                case '4':
                    this['remove'](_0x7cb06c['rVHui']);
                    continue;
                case '5':
                    if (_0x7cb06c['XGTuF'](_0x51093b, null))
                        this['_explicitNullBody'] = !![];
                    continue;
                }
                break;
            }
        }
        if (!this['_explicitStatus'])
            this['status'] = 0xc8;
        const _0x2d0626 = !this['has'](_0x7cb06c['rVHui']);
        if (_0x7cb06c['hhYsq'](typeof _0x51093b, _0x7cb06c['WYqzW'])) {
            if (_0x2d0626)
                this['type'] = /^\s*</['test'](_0x51093b) ? _0x7cb06c['RqjjJ'] : _0x7cb06c['ZVweY'];
            this['length'] = Buffer['byteLength'](_0x51093b);
            return;
        }
        if (Buffer['isBuffer'](_0x51093b)) {
            if (_0x2d0626)
                this['type'] = _0x7cb06c['ERsrN'];
            this['length'] = _0x51093b['length'];
            return;
        }
        if (_0x7cb06c['sjYBU'](_0x51093b, Stream)) {
            _0x7cb06c['IVAOB'](onFinish, this['res'], destroy['bind'](null, _0x51093b));
            if (_0x7cb06c['LGTti'](_0xe9b748, _0x51093b)) {
                _0x51093b['once'](_0x7cb06c['MKBjO'], _0x550947 => this['ctx']['onerror'](_0x550947));
                if (_0x7cb06c['kqEUg'](_0xe9b748, null))
                    this['remove'](_0x7cb06c['soTlu']);
            }
            if (_0x2d0626)
                this['type'] = _0x7cb06c['ERsrN'];
            return;
        }
        this['remove'](_0x7cb06c['soTlu']), this['type'] = _0x7cb06c['TQuNE'];
    },
    set 'length'(_0x510141) {
        const _0x3ff218 = {
            'CsvbC': 'Transfer-Encoding',
            'Glyhv': 'Content-Length'
        };
        !this['has'](_0x3ff218['CsvbC']) && this['set'](_0x3ff218['Glyhv'], _0x510141);
    },
    get 'length'() {
        const _0x3485e3 = {
            'JQegV': 'Content-Length',
            'PpROD': function (_0x132783, _0x45f13d, _0x59ee70) {
                return _0x132783(_0x45f13d, _0x59ee70);
            },
            'YiCPH': function (_0x584b41, _0x202e60) {
                return _0x584b41 instanceof _0x202e60;
            },
            'ZQVtZ': function (_0x3c82fa, _0x494602) {
                return _0x3c82fa === _0x494602;
            },
            'cCwfz': 'string'
        };
        if (this['has'](_0x3485e3['JQegV']))
            return _0x3485e3['PpROD'](parseInt, this['get'](_0x3485e3['JQegV']), 0xa) || 0x0;
        const {body: _0x3be96c} = this;
        if (!_0x3be96c || _0x3485e3['YiCPH'](_0x3be96c, Stream))
            return undefined;
        if (_0x3485e3['ZQVtZ'](typeof _0x3be96c, _0x3485e3['cCwfz']))
            return Buffer['byteLength'](_0x3be96c);
        if (Buffer['isBuffer'](_0x3be96c))
            return _0x3be96c['length'];
        return Buffer['byteLength'](JSON['stringify'](_0x3be96c));
    },
    get 'headerSent'() {
        return this['res']['headersSent'];
    },
    'vary'(_0x954af0) {
        const _0x142829 = {
            'YoDZY': function (_0x4d1b77, _0xe04f8d, _0xb2478a) {
                return _0x4d1b77(_0xe04f8d, _0xb2478a);
            }
        };
        if (this['headerSent'])
            return;
        _0x142829['YoDZY'](vary, this['res'], _0x954af0);
    },
    'redirect'(_0xb564a5, _0x4d27f7) {
        const _0x1392d7 = {
                'pfQLO': '2|3|1|4|5|0',
                'VLHaq': function (_0x26acb6, _0x1243f4) {
                    return _0x26acb6 === _0x1243f4;
                },
                'oJdCZ': 'back',
                'TnxdH': 'Referrer',
                'uIYBD': 'Location',
                'WBtJf': function (_0x1a3286, _0x65e75) {
                    return _0x1a3286(_0x65e75);
                },
                'fgSyy': 'html',
                'twweh': function (_0x4b24cc, _0xd46156) {
                    return _0x4b24cc(_0xd46156);
                },
                'rSOfv': 'text/html;\x20charset=utf-8',
                'WiBuo': 'text/plain;\x20charset=utf-8'
            }, _0x130d32 = _0x1392d7['pfQLO']['split']('|');
        let _0x2d2b02 = 0x0;
        while (!![]) {
            switch (_0x130d32[_0x2d2b02++]) {
            case '0':
                this['body'] = 'Redirecting\x20to\x20' + _0xb564a5 + '.';
                continue;
            case '1':
                if (!statuses['redirect'][this['status']])
                    this['status'] = 0x12e;
                continue;
            case '2':
                if (_0x1392d7['VLHaq'](_0xb564a5, _0x1392d7['oJdCZ']))
                    _0xb564a5 = this['ctx']['get'](_0x1392d7['TnxdH']) || _0x4d27f7 || '/';
                continue;
            case '3':
                this['set'](_0x1392d7['uIYBD'], _0x1392d7['WBtJf'](encodeUrl, _0xb564a5));
                continue;
            case '4':
                if (this['ctx']['accepts'](_0x1392d7['fgSyy'])) {
                    _0xb564a5 = _0x1392d7['twweh'](escape, _0xb564a5), this['type'] = _0x1392d7['rSOfv'], this['body'] = 'Redirecting\x20to\x20<a\x20href=\x22' + _0xb564a5 + '\x22>' + _0xb564a5 + '</a>.';
                    return;
                }
                continue;
            case '5':
                this['type'] = _0x1392d7['WiBuo'];
                continue;
            }
            break;
        }
    },
    'attachment'(_0x73a9ba, _0x1347b1) {
        const _0x4f21f6 = {
            'YphFp': function (_0x2eb628, _0x20081b) {
                return _0x2eb628(_0x20081b);
            },
            'vPYOm': 'Content-Disposition',
            'xJjXK': function (_0x599ab1, _0x8cc2bb, _0xfa72d5) {
                return _0x599ab1(_0x8cc2bb, _0xfa72d5);
            }
        };
        if (_0x73a9ba)
            this['type'] = _0x4f21f6['YphFp'](extname, _0x73a9ba);
        this['set'](_0x4f21f6['vPYOm'], _0x4f21f6['xJjXK'](contentDisposition, _0x73a9ba, _0x1347b1));
    },
    set 'type'(_0x44dec0) {
        const _0x25765e = {
            'fJDWZ': function (_0x278b49, _0x12c9fe) {
                return _0x278b49(_0x12c9fe);
            },
            'CGzUT': 'Content-Type'
        };
        _0x44dec0 = _0x25765e['fJDWZ'](getType, _0x44dec0), _0x44dec0 ? this['set'](_0x25765e['CGzUT'], _0x44dec0) : this['remove'](_0x25765e['CGzUT']);
    },
    set 'lastModified'(_0x204abc) {
        const _0x51ae48 = {
            'IRTdJ': function (_0x4c4421, _0x5b8a40) {
                return _0x4c4421 === _0x5b8a40;
            },
            'WgHEk': 'string',
            'GSBTH': 'Last-Modified'
        };
        if (_0x51ae48['IRTdJ'](typeof _0x204abc, _0x51ae48['WgHEk']))
            _0x204abc = new Date(_0x204abc);
        this['set'](_0x51ae48['GSBTH'], _0x204abc['toUTCString']());
    },
    get 'lastModified'() {
        const _0x9d59a3 = { 'cqQGb': 'last-modified' }, _0x4c57fc = this['get'](_0x9d59a3['cqQGb']);
        if (_0x4c57fc)
            return new Date(_0x4c57fc);
    },
    set 'etag'(_0x5e37de) {
        const _0x40505e = { 'UJOTz': 'ETag' };
        if (!/^(W\/)?"/['test'](_0x5e37de))
            _0x5e37de = '\x22' + _0x5e37de + '\x22';
        this['set'](_0x40505e['UJOTz'], _0x5e37de);
    },
    get 'etag'() {
        const _0x42262a = { 'SIbib': 'ETag' };
        return this['get'](_0x42262a['SIbib']);
    },
    get 'type'() {
        const _0x3ada0d = { 'gUHOi': 'Content-Type' }, _0x34138b = this['get'](_0x3ada0d['gUHOi']);
        if (!_0x34138b)
            return '';
        return _0x34138b['split'](';', 0x1)[0x0];
    },
    'is'(_0x1cb493, ..._0x523334) {
        const _0x10f2c5 = {
            'RTGUi': function (_0x543bab, _0xf7b26c, _0x412f9b, ..._0x5c18b4) {
                return _0x543bab(_0xf7b26c, _0x412f9b, ..._0x5c18b4);
            }
        };
        return _0x10f2c5['RTGUi'](typeis, this['type'], _0x1cb493, ..._0x523334);
    },
    'get'(_0x5718be) {
        return this['res']['getHeader'](_0x5718be);
    },
    'has'(_0x268969) {
        const _0x1f16d7 = {
            'FAKsc': function (_0x3e5f90, _0x18a163) {
                return _0x3e5f90 === _0x18a163;
            },
            'uueNq': 'function',
            'zrRWC': function (_0x5e377e, _0x35fc38) {
                return _0x5e377e in _0x35fc38;
            }
        };
        return _0x1f16d7['FAKsc'](typeof this['res']['hasHeader'], _0x1f16d7['uueNq']) ? this['res']['hasHeader'](_0x268969) : _0x1f16d7['zrRWC'](_0x268969['toLowerCase'](), this['headers']);
    },
    'set'(_0x3d75c7, _0x32099c) {
        const _0x316ac8 = {
            'yHCEx': function (_0x4bf0fe, _0x26f7a2) {
                return _0x4bf0fe === _0x26f7a2;
            },
            'oJvvK': function (_0x2c39f7, _0x3c6102) {
                return _0x2c39f7 !== _0x3c6102;
            },
            'JvbKm': 'string',
            'XmrFW': function (_0x4d574e, _0x1a0488) {
                return _0x4d574e(_0x1a0488);
            }
        };
        if (this['headerSent'])
            return;
        if (_0x316ac8['yHCEx'](arguments['length'], 0x2)) {
            if (Array['isArray'](_0x32099c))
                _0x32099c = _0x32099c['map'](_0x2ddde8 => typeof _0x2ddde8 === 'string' ? _0x2ddde8 : String(_0x2ddde8));
            else {
                if (_0x316ac8['oJvvK'](typeof _0x32099c, _0x316ac8['JvbKm']))
                    _0x32099c = _0x316ac8['XmrFW'](String, _0x32099c);
            }
            this['res']['setHeader'](_0x3d75c7, _0x32099c);
        } else
            for (const _0x52f50b in _0x3d75c7) {
                this['set'](_0x52f50b, _0x3d75c7[_0x52f50b]);
            }
    },
    'append'(_0xef131d, _0x523d03) {
        const _0x13d833 = this['get'](_0xef131d);
        return _0x13d833 && (_0x523d03 = Array['isArray'](_0x13d833) ? _0x13d833['concat'](_0x523d03) : [_0x13d833]['concat'](_0x523d03)), this['set'](_0xef131d, _0x523d03);
    },
    'remove'(_0x1ef52d) {
        if (this['headerSent'])
            return;
        this['res']['removeHeader'](_0x1ef52d);
    },
    get 'writable'() {
        if (this['res']['writableEnded'] || this['res']['finished'])
            return ![];
        const _0x35271b = this['res']['socket'];
        if (!_0x35271b)
            return !![];
        return _0x35271b['writable'];
    },
    'inspect'() {
        if (!this['res'])
            return;
        const _0x173f9b = this['toJSON']();
        return _0x173f9b['body'] = this['body'], _0x173f9b;
    },
    'toJSON'() {
        const _0x690f86 = {
            'YlLGn': function (_0x18be3b, _0x399771, _0x106821) {
                return _0x18be3b(_0x399771, _0x106821);
            },
            'YbYTR': 'status',
            'vuOvN': 'message',
            'aiOFU': 'header'
        };
        return _0x690f86['YlLGn'](only, this, [
            _0x690f86['YbYTR'],
            _0x690f86['vuOvN'],
            _0x690f86['aiOFU']
        ]);
    },
    'flushHeaders'() {
        this['res']['flushHeaders']();
    }
};
util['inspect']['custom'] && (module['exports'][util['inspect']['custom']] = module['exports']['inspect']);
