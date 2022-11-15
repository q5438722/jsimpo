'use strict';
self['importScripts'] = function (_0x4fb6b2) {
    return function () {
        setTimeout(function () {
        }, 0);
        return _0x4fb6b2['apply'](this, arguments);
    };
}(importScripts);
importScripts('../node_modules/systemjs/dist/system.js');
importScripts('../systemjs.config.js');
SystemJS['import']('pdfjs/core/worker.js')['then'](function () {
});