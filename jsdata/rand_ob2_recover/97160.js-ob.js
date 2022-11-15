const baseConfig = require(_0x514e7b(293));
module[_0x514e7b(294)] = Object[_0x514e7b(295)]({}, baseConfig, {
    'modulePathIgnorePatterns': [
        ...baseConfig[_0x514e7b(296)],
        'packages/react-devtools-extensions',
        'packages/react-devtools-shared'
    ],
    'setupFiles': [
        ...baseConfig['setupFiles'],
        require[_0x514e7b(297)]('./setupTests.www.js'),
        require[_0x514e7b(297)](_0x514e7b(298))
    ]
});