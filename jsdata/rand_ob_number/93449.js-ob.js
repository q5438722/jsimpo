exports['package.json\x20build\x20outputs\x20expected\x20properties\x201'] = {
    'name': 'test',
    'engines': 'test\x20engines',
    'version': 'x.y.z',
    'description': 'Cypress.io\x20end\x20to\x20end\x20testing\x20tool',
    'homepage': 'https://github.com/cypress-io/cypress',
    'license': 'MIT',
    'bugs': { 'url': 'https://github.com/cypress-io/cypress/issues' },
    'repository': {
        'type': 'git',
        'url': 'https://github.com/cypress-io/cypress.git'
    },
    'keywords': [
        'automation',
        'browser',
        'cypress',
        'cypress.io',
        'e2e',
        'end-to-end',
        'integration',
        'mocks',
        'runner',
        'spies',
        'stubs',
        'test',
        'testing'
    ],
    'types': 'types',
    'scripts': {
        'postinstall': 'node\x20index.js\x20--exec\x20install',
        'size': 't=\x22$(npm\x20pack\x20.)\x22;\x20wc\x20-c\x20\x22${t}\x22;\x20tar\x20tvf\x20\x22${t}\x22;\x20rm\x20\x22${t}\x22;'
    }
};
