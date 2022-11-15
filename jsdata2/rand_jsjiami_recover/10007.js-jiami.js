const cacheLoader = require('../cacheLoader');
module['exports'] = cacheLoader(function loadWASMBundle(_0x6fcd60) {
    return fetch(_0x6fcd60)['then'](function (_0x563b29) {
        if ('NwXIA' !== 'cpRvC') {
            if (WebAssembly['instantiateStreaming']) {
                if ('JvqFH' !== 'QNCxk') {
                    return WebAssembly['instantiateStreaming'](_0x563b29);
                } else {
                    return WebAssembly['instantiateStreaming'](_0x563b29);
                }
            } else {
                return _0x563b29['arrayBuffer']()['then'](function (_0x42e200) {
                    return WebAssembly['instantiate'](_0x42e200);
                });
            }
        } else {
            return _0x563b29['arrayBuffer']()['then'](function (_0x1aa223) {
                return WebAssembly['instantiate'](_0x1aa223);
            });
        }
    })['then'](function (_0xd503f7) {
        return _0xd503f7['instance']['exports'];
    });
});