module['exports'] = {
    'roots': ['<rootDir>'],
    'testEnvironment': 'jsdom',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'json',
        'jsx'
    ],
    'testPathIgnorePatterns': ['<rootDir>[/\x5c\x5c](node_modules|.next)[/\x5c\x5c]'],
    'transformIgnorePatterns': ['[/\x5c\x5c]node_modules[/\x5c\x5c].+\x5c.(ts|tsx)$'],
    'transform': { '^.+\x5c.(ts|tsx)$': 'babel-jest' },
    'watchPlugins': [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    'moduleNameMapper': {
        '\x5c.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\x5c.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js'
    }
};
