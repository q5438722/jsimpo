const stats = {
    'hash': ![],
    'timings': ![],
    'builtAt': ![],
    'assets': ![],
    'chunks': !![],
    'chunkRelations': !![],
    'chunkModules': !![],
    'dependentModules': !![],
    'chunkOrigins': !![],
    'entrypoints': !![],
    'modules': ![]
};
module[_0x2d418a(414)] = {
    'mode': _0x2d418a(415),
    'entry': { 'main': './' },
    'output': { 'filename': _0x2d418a(416) },
    'optimization': {
        'splitChunks': {
            'minSize': 100,
            'enforceSizeThreshold': 200
        }
    },
    'stats': stats
};