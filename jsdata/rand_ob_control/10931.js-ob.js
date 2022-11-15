import { hasPermissions } from 'strapi-helper-plugin';
import _0x587f64 from '../getPluginSectionLinks';
jest['mock']('strapi-helper-plugin'), describe('getPluginSectionLinks', () => {
    const _0x34fa9b = {
        'BrLLM': 'plugins::i18n.locale.read',
        'gNKgM': 'plugins::content-manager.explorer.create',
        'BqUJM': 'application::article.article',
        'uBlpK': 'Name',
        'NbFZf': 'plugins::content-manager.explorer.read',
        'OdOHW': 'fr-FR',
        'CBLVk': 'plugins::content-manager.explorer.update',
        'zdpov': '/plugins/content-type-builder',
        'FRtfy': 'paint-brush',
        'SbONB': 'content-type-builder.plugin.name',
        'qtxen': 'Content-Types\x20Builder',
        'dPVth': 'plugins::content-type-builder.read',
        'WAqkZ': '/plugins/upload',
        'OUfoJ': 'cloud-upload-alt',
        'InngE': 'upload.plugin.name',
        'HsKiz': 'Media\x20Library',
        'OdNAj': 'plugins::upload.read',
        'edkWM': 'plugins::upload.assets.create',
        'uoEOy': 'plugins::upload.assets.update',
        'sDYXy': function (_0x577975, _0x267f11, _0x43561f) {
            return _0x577975(_0x267f11, _0x43561f);
        },
        'OkIOE': function (_0x4f92d2, _0x234553) {
            return _0x4f92d2(_0x234553);
        },
        'CaDWf': function (_0x2f00a8, _0xed466a) {
            return _0x2f00a8(_0xed466a);
        },
        'FYTXQ': function (_0x15213b, _0xb858f5, _0x52bb0c) {
            return _0x15213b(_0xb858f5, _0x52bb0c);
        },
        'eSmGC': 'creates\x20an\x20array\x20of\x20boolean\x20corresponding\x20to\x20the\x20permission\x20state'
    };
    _0x34fa9b['OkIOE'](beforeEach, () => {
        hasPermissions['mockImplementation'](() => Promise['resolve'](!![]));
    }), _0x34fa9b['CaDWf'](afterEach, () => {
        jest['resetAllMocks']();
    }), _0x34fa9b['FYTXQ'](it, _0x34fa9b['eSmGC'], async () => {
        const _0x398a07 = [
                {
                    'id': 0x1ca,
                    'action': _0x34fa9b['BrLLM'],
                    'subject': null,
                    'properties': {},
                    'conditions': []
                },
                {
                    'id': 0x1cb,
                    'action': _0x34fa9b['gNKgM'],
                    'subject': _0x34fa9b['BqUJM'],
                    'properties': {
                        'fields': [_0x34fa9b['uBlpK']],
                        'locales': ['en']
                    },
                    'conditions': []
                },
                {
                    'id': 0x1cc,
                    'action': _0x34fa9b['NbFZf'],
                    'subject': _0x34fa9b['BqUJM'],
                    'properties': {
                        'fields': [_0x34fa9b['uBlpK']],
                        'locales': ['en']
                    },
                    'conditions': []
                },
                {
                    'id': 0x1cd,
                    'action': _0x34fa9b['NbFZf'],
                    'subject': _0x34fa9b['BqUJM'],
                    'properties': {
                        'fields': [_0x34fa9b['uBlpK']],
                        'locales': [_0x34fa9b['OdOHW']]
                    },
                    'conditions': []
                },
                {
                    'id': 0x1ce,
                    'action': _0x34fa9b['CBLVk'],
                    'subject': _0x34fa9b['BqUJM'],
                    'properties': {
                        'fields': [_0x34fa9b['uBlpK']],
                        'locales': [_0x34fa9b['OdOHW']]
                    },
                    'conditions': []
                }
            ], _0x4f420f = [
                {
                    'destination': _0x34fa9b['zdpov'],
                    'icon': _0x34fa9b['FRtfy'],
                    'label': {
                        'id': _0x34fa9b['SbONB'],
                        'defaultMessage': _0x34fa9b['qtxen']
                    },
                    'permissions': [{
                            'action': _0x34fa9b['dPVth'],
                            'subject': null
                        }],
                    'isDisplayed': ![]
                },
                {
                    'destination': _0x34fa9b['WAqkZ'],
                    'icon': _0x34fa9b['OUfoJ'],
                    'label': {
                        'id': _0x34fa9b['InngE'],
                        'defaultMessage': _0x34fa9b['HsKiz']
                    },
                    'permissions': [
                        {
                            'action': _0x34fa9b['OdNAj'],
                            'subject': null
                        },
                        {
                            'action': _0x34fa9b['edkWM'],
                            'subject': null
                        },
                        {
                            'action': _0x34fa9b['uoEOy'],
                            'subject': null
                        }
                    ],
                    'isDisplayed': ![]
                }
            ], _0x585d43 = [
                {
                    'destination': _0x34fa9b['zdpov'],
                    'icon': _0x34fa9b['FRtfy'],
                    'isDisplayed': ![],
                    'label': {
                        'defaultMessage': _0x34fa9b['qtxen'],
                        'id': _0x34fa9b['SbONB']
                    },
                    'permissions': [{
                            'action': _0x34fa9b['dPVth'],
                            'subject': null
                        }]
                },
                {
                    'destination': _0x34fa9b['WAqkZ'],
                    'icon': _0x34fa9b['OUfoJ'],
                    'isDisplayed': ![],
                    'label': {
                        'defaultMessage': _0x34fa9b['HsKiz'],
                        'id': _0x34fa9b['InngE']
                    },
                    'permissions': [
                        {
                            'action': _0x34fa9b['OdNAj'],
                            'subject': null
                        },
                        {
                            'action': _0x34fa9b['edkWM'],
                            'subject': null
                        },
                        {
                            'action': _0x34fa9b['uoEOy'],
                            'subject': null
                        }
                    ]
                }
            ], _0x199208 = await _0x34fa9b['sDYXy'](_0x587f64, _0x398a07, _0x4f420f);
        _0x34fa9b['OkIOE'](expect, _0x199208)['toEqual'](_0x585d43);
    });
});
