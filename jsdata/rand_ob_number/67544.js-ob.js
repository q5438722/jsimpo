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
module['exports'] = {
    'mode': 'production',
    'entry': { 'main': './' },
    'output': { 'filename': 'default/[name].js' },
    'optimization': {
        'splitChunks': {
            'minSize': 0x64,
            'enforceSizeThreshold': 0xc8
        }
    },
    'stats': stats
};