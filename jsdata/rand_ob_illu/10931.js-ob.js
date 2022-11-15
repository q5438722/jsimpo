const _0x3816 = ['creates an array of boolean corresponding to the permission state', 'mockImplementation', 'resolve', 'QNmxd', 'plugins::content-manager.explorer.create', 'rXOfw', 'aZmbA', 'qCdyk', 'KxPLO', 'tKREE', 'zcdAs', 'hrpzu', 'LOAPZ', 'hWjHZ', 'WZJIh', 'BxDAh', 'cQWER', 'bnTfy', 'LWEnC', 'plugins::upload.read', 'plugins::upload.assets.update', 'pGJqd', '183965ykHXsT', '315331CTlFpc', '43EkLAqp', '6246RbDUbl', '929jTlgbz', '351qyjkIC', '527106TrXTvr', '1MbajWE', '556510lhkLgm', '1ISALes', '446385KMoybY', 'mock', 'getPluginSectionLinks', 'application::article.article', 'Name', 'plugins::content-manager.explorer.read', 'fr-FR', '/plugins/content-type-builder', 'plugins::content-type-builder.read', '/plugins/upload', 'Media Library'];
const _0x305f4c = _0x1af3;

(function (_0x59f0b3, _0x50f208) {
    const _0x2c7e74 = _0x1af3;

    while (true) {
        try {
            const _0x5d9d47 = -parseInt(_0x2c7e74(0xaf)) + parseInt(_0x2c7e74(0xb0)) + -parseInt(_0x2c7e74(0xb1)) * -parseInt(_0x2c7e74(0xb2)) + -parseInt(_0x2c7e74(0xb3)) * -parseInt(_0x2c7e74(0xb4)) + -parseInt(_0x2c7e74(0xb5)) + -parseInt(_0x2c7e74(0xb6)) * -parseInt(_0x2c7e74(0xb7)) + parseInt(_0x2c7e74(0xb8)) * -parseInt(_0x2c7e74(0xb9));

            if (_0x5d9d47 === _0x50f208) break;else _0x59f0b3.push(_0x59f0b3.shift());
        } catch (_0x316d5e) {
            _0x59f0b3.push(_0x59f0b3.shift());
        }
    }
})(_0x3816, 309042);
import { hasPermissions } from 'strapi-helper-plugin';
function _0x1af3(_0x55e5b5, _0x59dc07) {
    return _0x1af3 = function (_0x55fe54, _0x3a6f75) {
        _0x55fe54 = _0x55fe54 - 175;
        const _0x319f51 = _0x3816[_0x55fe54];

        return _0x319f51;
    }, _0x1af3(_0x55e5b5, _0x59dc07);
}
import _0x5d12c6 from '../getPluginSectionLinks';
jest[_0x305f4c(0xba)]('strapi-helper-plugin'), describe(_0x305f4c(0xbb), () => {
    const _0x5f2ba0 = _0x305f4c;
    const _0x4e864b = {
        'rnzhC': 'plugins::i18n.locale.read',
        'rXOfw': _0x5f2ba0(0xbc),
        'aZmbA': _0x5f2ba0(0xbd),
        'qCdyk': _0x5f2ba0(0xbe),
        'KxPLO': _0x5f2ba0(0xbf),
        'tKREE': 'plugins::content-manager.explorer.update',
        'zcdAs': _0x5f2ba0(0xc0),
        'hrpzu': 'paint-brush',
        'LOAPZ': 'content-type-builder.plugin.name',
        'uZxdg': 'Content-Types Builder',
        'bnTfy': _0x5f2ba0(0xc1),
        'hWjHZ': _0x5f2ba0(0xc2),
        'LWEnC': 'cloud-upload-alt',
        'WZJIh': 'upload.plugin.name',
        'BxDAh': _0x5f2ba0(0xc3),
        'YZGLC': 'plugins::upload.read',
        'cQWER': 'plugins::upload.assets.create',
        'gqmVS': function (_0x233e7f, _0x1da845, _0x492f26) {
            return _0x233e7f(_0x1da845, _0x492f26);
        },
        'pGJqd': function (_0x362f85, _0x42483b) {
            return _0x362f85(_0x42483b);
        },
        'FIUMm': function (_0x19f41c, _0x4a5102) {
            return _0x19f41c(_0x4a5102);
        },
        'bOoew': function (_0x2174a9, _0x1a43fa, _0x46052b) {
            return _0x2174a9(_0x1a43fa, _0x46052b);
        },
        'QNmxd': _0x5f2ba0(0xc4)
    };

    _0x4e864b.FIUMm(beforeEach, () => {
        const _0x3e422e = _0x5f2ba0;

        hasPermissions[_0x3e422e(0xc5)](() => Promise[_0x3e422e(0xc6)](true));
    }), afterEach(() => {
        jest.resetAllMocks();
    }), _0x4e864b.bOoew(it, _0x4e864b[_0x5f2ba0(0xc7)], async () => {
        const _0x329535 = _0x5f2ba0;
        const _0x8bc53a = [{
            'id': 0x1ca,
            'action': _0x4e864b.rnzhC,
            'subject': null,
            'properties': {},
            'conditions': []
        }, {
            'id': 0x1cb,
            'action': _0x329535(0xc8),
            'subject': _0x4e864b[_0x329535(0xc9)],
            'properties': {
                'fields': [_0x4e864b[_0x329535(0xca)]],
                'locales': ['en']
            },
            'conditions': []
        }, {
            'id': 0x1cc,
            'action': _0x329535(0xbe),
            'subject': _0x4e864b[_0x329535(0xc9)],
            'properties': {
                'fields': [_0x4e864b.aZmbA],
                'locales': ['en']
            },
            'conditions': []
        }, {
            'id': 0x1cd,
            'action': _0x4e864b[_0x329535(0xcb)],
            'subject': _0x4e864b[_0x329535(0xc9)],
            'properties': {
                'fields': [_0x4e864b.aZmbA],
                'locales': [_0x4e864b[_0x329535(0xcc)]]
            },
            'conditions': []
        }, {
            'id': 0x1ce,
            'action': _0x4e864b[_0x329535(0xcd)],
            'subject': _0x4e864b.rXOfw,
            'properties': {
                'fields': [_0x4e864b[_0x329535(0xca)]],
                'locales': [_0x4e864b.KxPLO]
            },
            'conditions': []
        }];
        const _0x6dc280 = [{
            'destination': _0x4e864b[_0x329535(0xce)],
            'icon': _0x4e864b[_0x329535(0xcf)],
            'label': {
                'id': _0x4e864b[_0x329535(0xd0)],
                'defaultMessage': _0x4e864b.uZxdg
            },
            'permissions': [{
                'action': _0x4e864b.bnTfy,
                'subject': null
            }],
            'isDisplayed': false
        }, {
            'destination': _0x4e864b[_0x329535(0xd1)],
            'icon': _0x4e864b.LWEnC,
            'label': {
                'id': _0x4e864b[_0x329535(0xd2)],
                'defaultMessage': _0x4e864b[_0x329535(0xd3)]
            },
            'permissions': [{
                'action': _0x4e864b.YZGLC,
                'subject': null
            }, {
                'action': _0x4e864b[_0x329535(0xd4)],
                'subject': null
            }, {
                'action': 'plugins::upload.assets.update',
                'subject': null
            }],
            'isDisplayed': false
        }];
        const _0x831a96 = [{
            'destination': _0x4e864b[_0x329535(0xce)],
            'icon': _0x4e864b[_0x329535(0xcf)],
            'isDisplayed': false,
            'label': {
                'defaultMessage': _0x4e864b.uZxdg,
                'id': _0x4e864b[_0x329535(0xd0)]
            },
            'permissions': [{
                'action': _0x4e864b[_0x329535(0xd5)],
                'subject': null
            }]
        }, {
            'destination': _0x4e864b[_0x329535(0xd1)],
            'icon': _0x4e864b[_0x329535(0xd6)],
            'isDisplayed': false,
            'label': {
                'defaultMessage': 'Media Library',
                'id': _0x4e864b[_0x329535(0xd2)]
            },
            'permissions': [{
                'action': _0x329535(0xd7),
                'subject': null
            }, {
                'action': _0x4e864b[_0x329535(0xd4)],
                'subject': null
            }, {
                'action': _0x329535(0xd8),
                'subject': null
            }]
        }];

        const _0x1508b2 = await _0x4e864b.gqmVS(_0x5d12c6, _0x8bc53a, _0x6dc280);

        _0x4e864b[_0x329535(0xd9)](expect, _0x1508b2).toEqual(_0x831a96);
    });
});
