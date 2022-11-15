var _0x1dbf = [
    'Google\x20Vision',
    'FileUpload_Storage_Type',
    'GoogleCloudStorage',
    'GoogleVision_ServiceAccount',
    'int',
    'GoogleVision_Current_Month_Calls',
    'GoogleVision_Type_Faces',
    'GoogleVision_Type_Labels',
    'GoogleVision_Type_Logos',
    'GoogleVision_Type_Properties',
    'GoogleVision_Block_Adult_Images',
    'GoogleVision_Type_SafeSearch',
    'GoogleVision_Type_Similar',
    '201608JNkZSW',
    '314523FFebvC',
    '308645akhUET',
    '317207PWIgcP',
    '1KKhmet',
    '227301rxUDFb',
    '1moKyBk',
    '166778BSOzZu',
    '601rqWxAI',
    '1137cNZFDO',
    'startup',
    'add',
    'GoogleVision_Enable',
    'boolean',
    'FileUpload'
];
var _0x5a8256 = _0x3748;
(function (_0x3dd830, _0x295604) {
    var _0x1e192a = _0x3748;
    while (!![]) {
        try {
            var _0x196843 = parseInt(_0x1e192a(0xaa)) + -parseInt(_0x1e192a(0xab)) + parseInt(_0x1e192a(0xac)) + -parseInt(_0x1e192a(0xad)) + parseInt(_0x1e192a(0xae)) * -parseInt(_0x1e192a(0xaf)) + parseInt(_0x1e192a(0xb0)) * -parseInt(_0x1e192a(0xb1)) + -parseInt(_0x1e192a(0xb2)) * -parseInt(_0x1e192a(0xb3));
            if (_0x196843 === _0x295604)
                break;
            else
                _0x3dd830['push'](_0x3dd830['shift']());
        } catch (_0x437971) {
            _0x3dd830['push'](_0x3dd830['shift']());
        }
    }
}(_0x1dbf, 0x28f65));
import { Meteor } from 'meteor/meteor';
function _0x3748(_0x32ab75, _0xab4b91) {
    return _0x3748 = function (_0x1dbfff, _0x374858) {
        _0x1dbfff = _0x1dbfff - 0xaa;
        var _0x12cf97 = _0x1dbf[_0x1dbfff];
        return _0x12cf97;
    }, _0x3748(_0x32ab75, _0xab4b91);
}
import { settings } from '../../settings';
Meteor[_0x5a8256(0xb4)](function () {
    var _0x4cb4b2 = _0x5a8256;
    settings[_0x4cb4b2(0xb5)](_0x4cb4b2(0xb6), ![], {
        'type': _0x4cb4b2(0xb7),
        'group': _0x4cb4b2(0xb8),
        'section': _0x4cb4b2(0xb9),
        'public': !![],
        'enableQuery': {
            '_id': _0x4cb4b2(0xba),
            'value': _0x4cb4b2(0xbb)
        }
    }), settings['add'](_0x4cb4b2(0xbc), '', {
        'type': 'string',
        'group': _0x4cb4b2(0xb8),
        'section': _0x4cb4b2(0xb9),
        'multiline': !![],
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        },
        'secret': !![]
    }), settings[_0x4cb4b2(0xb5)]('GoogleVision_Max_Monthly_Calls', 0x0, {
        'type': 'int',
        'group': 'FileUpload',
        'section': _0x4cb4b2(0xb9),
        'enableQuery': {
            '_id': _0x4cb4b2(0xb6),
            'value': !![]
        }
    }), settings[_0x4cb4b2(0xb5)]('GoogleVision_Current_Month', 0x0, {
        'type': _0x4cb4b2(0xbd),
        'group': 'FileUpload',
        'section': _0x4cb4b2(0xb9),
        'hidden': !![]
    }), settings[_0x4cb4b2(0xb5)](_0x4cb4b2(0xbe), 0x0, {
        'type': 'int',
        'group': _0x4cb4b2(0xb8),
        'section': 'Google\x20Vision',
        'blocked': !![]
    }), settings[_0x4cb4b2(0xb5)]('GoogleVision_Type_Document', ![], {
        'type': _0x4cb4b2(0xb7),
        'group': _0x4cb4b2(0xb8),
        'section': 'Google\x20Vision',
        'enableQuery': {
            '_id': _0x4cb4b2(0xb6),
            'value': !![]
        }
    }), settings[_0x4cb4b2(0xb5)](_0x4cb4b2(0xbf), ![], {
        'type': 'boolean',
        'group': 'FileUpload',
        'section': _0x4cb4b2(0xb9),
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    }), settings[_0x4cb4b2(0xb5)]('GoogleVision_Type_Landmarks', ![], {
        'type': 'boolean',
        'group': _0x4cb4b2(0xb8),
        'section': _0x4cb4b2(0xb9),
        'enableQuery': {
            '_id': _0x4cb4b2(0xb6),
            'value': !![]
        }
    }), settings[_0x4cb4b2(0xb5)](_0x4cb4b2(0xc0), ![], {
        'type': 'boolean',
        'group': _0x4cb4b2(0xb8),
        'section': 'Google\x20Vision',
        'enableQuery': {
            '_id': _0x4cb4b2(0xb6),
            'value': !![]
        }
    }), settings[_0x4cb4b2(0xb5)](_0x4cb4b2(0xc1), ![], {
        'type': _0x4cb4b2(0xb7),
        'group': _0x4cb4b2(0xb8),
        'section': _0x4cb4b2(0xb9),
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    }), settings[_0x4cb4b2(0xb5)](_0x4cb4b2(0xc2), ![], {
        'type': _0x4cb4b2(0xb7),
        'group': _0x4cb4b2(0xb8),
        'section': _0x4cb4b2(0xb9),
        'enableQuery': {
            '_id': _0x4cb4b2(0xb6),
            'value': !![]
        }
    }), settings[_0x4cb4b2(0xb5)]('GoogleVision_Type_SafeSearch', ![], {
        'type': _0x4cb4b2(0xb7),
        'group': _0x4cb4b2(0xb8),
        'section': _0x4cb4b2(0xb9),
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    }), settings['add'](_0x4cb4b2(0xc3), ![], {
        'type': _0x4cb4b2(0xb7),
        'group': _0x4cb4b2(0xb8),
        'section': _0x4cb4b2(0xb9),
        'enableQuery': [
            {
                '_id': _0x4cb4b2(0xb6),
                'value': !![]
            },
            {
                '_id': _0x4cb4b2(0xc4),
                'value': !![]
            }
        ]
    }), settings[_0x4cb4b2(0xb5)](_0x4cb4b2(0xc5), ![], {
        'type': _0x4cb4b2(0xb7),
        'group': _0x4cb4b2(0xb8),
        'section': _0x4cb4b2(0xb9),
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    });
});
