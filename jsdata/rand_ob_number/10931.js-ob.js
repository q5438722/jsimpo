import { hasPermissions } from 'strapi-helper-plugin';
import _0x518110 from '../getPluginSectionLinks';
jest['mock']('strapi-helper-plugin'), describe('getPluginSectionLinks', () => {
    beforeEach(() => {
        hasPermissions['mockImplementation'](() => Promise['resolve'](!![]));
    }), afterEach(() => {
        jest['resetAllMocks']();
    }), it('creates\x20an\x20array\x20of\x20boolean\x20corresponding\x20to\x20the\x20permission\x20state', async () => {
        const _0x2965f4 = [
                {
                    'id': 0x1ca,
                    'action': 'plugins::i18n.locale.read',
                    'subject': null,
                    'properties': {},
                    'conditions': []
                },
                {
                    'id': 0x1cb,
                    'action': 'plugins::content-manager.explorer.create',
                    'subject': 'application::article.article',
                    'properties': {
                        'fields': ['Name'],
                        'locales': ['en']
                    },
                    'conditions': []
                },
                {
                    'id': 0x1cc,
                    'action': 'plugins::content-manager.explorer.read',
                    'subject': 'application::article.article',
                    'properties': {
                        'fields': ['Name'],
                        'locales': ['en']
                    },
                    'conditions': []
                },
                {
                    'id': 0x1cd,
                    'action': 'plugins::content-manager.explorer.read',
                    'subject': 'application::article.article',
                    'properties': {
                        'fields': ['Name'],
                        'locales': ['fr-FR']
                    },
                    'conditions': []
                },
                {
                    'id': 0x1ce,
                    'action': 'plugins::content-manager.explorer.update',
                    'subject': 'application::article.article',
                    'properties': {
                        'fields': ['Name'],
                        'locales': ['fr-FR']
                    },
                    'conditions': []
                }
            ], _0x3d7585 = [
                {
                    'destination': '/plugins/content-type-builder',
                    'icon': 'paint-brush',
                    'label': {
                        'id': 'content-type-builder.plugin.name',
                        'defaultMessage': 'Content-Types\x20Builder'
                    },
                    'permissions': [{
                            'action': 'plugins::content-type-builder.read',
                            'subject': null
                        }],
                    'isDisplayed': ![]
                },
                {
                    'destination': '/plugins/upload',
                    'icon': 'cloud-upload-alt',
                    'label': {
                        'id': 'upload.plugin.name',
                        'defaultMessage': 'Media\x20Library'
                    },
                    'permissions': [
                        {
                            'action': 'plugins::upload.read',
                            'subject': null
                        },
                        {
                            'action': 'plugins::upload.assets.create',
                            'subject': null
                        },
                        {
                            'action': 'plugins::upload.assets.update',
                            'subject': null
                        }
                    ],
                    'isDisplayed': ![]
                }
            ], _0x9c31a9 = [
                {
                    'destination': '/plugins/content-type-builder',
                    'icon': 'paint-brush',
                    'isDisplayed': ![],
                    'label': {
                        'defaultMessage': 'Content-Types\x20Builder',
                        'id': 'content-type-builder.plugin.name'
                    },
                    'permissions': [{
                            'action': 'plugins::content-type-builder.read',
                            'subject': null
                        }]
                },
                {
                    'destination': '/plugins/upload',
                    'icon': 'cloud-upload-alt',
                    'isDisplayed': ![],
                    'label': {
                        'defaultMessage': 'Media\x20Library',
                        'id': 'upload.plugin.name'
                    },
                    'permissions': [
                        {
                            'action': 'plugins::upload.read',
                            'subject': null
                        },
                        {
                            'action': 'plugins::upload.assets.create',
                            'subject': null
                        },
                        {
                            'action': 'plugins::upload.assets.update',
                            'subject': null
                        }
                    ]
                }
            ], _0x1c16f0 = await _0x518110(_0x2965f4, _0x3d7585);
        expect(_0x1c16f0)['toEqual'](_0x9c31a9);
    });
});
