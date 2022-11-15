var _0x1d7c = [
    '31pTuXuX',
    '8783UkvDXM',
    '1rDrbLZ',
    '783313MjKleS',
    '1894816gmlYkQ',
    'startup',
    'add',
    'GoogleVision_Enable',
    'boolean',
    'FileUpload',
    'FileUpload_Storage_Type',
    'GoogleVision_ServiceAccount',
    'string',
    'GoogleVision_Max_Monthly_Calls',
    'int',
    'GoogleVision_Current_Month',
    'Google\x20Vision',
    'GoogleVision_Current_Month_Calls',
    'GoogleVision_Type_Faces',
    'GoogleVision_Type_Logos',
    'GoogleVision_Type_Properties',
    'GoogleVision_Type_SafeSearch',
    'GoogleVision_Type_Similar',
    '118587wEBOuQ',
    '647vskZKG',
    '63qvGRFM',
    '180058MxOobE',
    '755888nJdVqi'
];
var _0x2490b9 = _0x17dc;
function _0x17dc(_0x42072a, _0x18e188) {
    return _0x17dc = function (_0x1d7cc8, _0x17dc54) {
        _0x1d7cc8 = _0x1d7cc8 - 0x93;
        var _0x3716f1 = _0x1d7c[_0x1d7cc8];
        return _0x3716f1;
    }, _0x17dc(_0x42072a, _0x18e188);
}
(function (_0x246707, _0x28ccb0) {
    var _0x3d6bd6 = _0x17dc;
    while (!![]) {
        try {
            var _0x2fadc3 = parseInt(_0x3d6bd6(0x93)) + parseInt(_0x3d6bd6(0x94)) * parseInt(_0x3d6bd6(0x95)) + parseInt(_0x3d6bd6(0x96)) + -parseInt(_0x3d6bd6(0x97)) + parseInt(_0x3d6bd6(0x98)) * -parseInt(_0x3d6bd6(0x99)) + -parseInt(_0x3d6bd6(0x9a)) * parseInt(_0x3d6bd6(0x9b)) + parseInt(_0x3d6bd6(0x9c));
            if (_0x2fadc3 === _0x28ccb0)
                break;
            else
                _0x246707['push'](_0x246707['shift']());
        } catch (_0x18ec5a) {
            _0x246707['push'](_0x246707['shift']());
        }
    }
}(_0x1d7c, 0x6735c));
import { Meteor } from 'meteor/meteor';
import { settings } from '../../settings';
Meteor[_0x2490b9(0x9d)](function () {
    var _0xf41b76 = _0x2490b9;
    settings[_0xf41b76(0x9e)](_0xf41b76(0x9f), ![], {
        'type': _0xf41b76(0xa0),
        'group': _0xf41b76(0xa1),
        'section': 'Google\x20Vision',
        'public': !![],
        'enableQuery': {
            '_id': _0xf41b76(0xa2),
            'value': 'GoogleCloudStorage'
        }
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xa3), '', {
        'type': _0xf41b76(0xa4),
        'group': _0xf41b76(0xa1),
        'section': 'Google\x20Vision',
        'multiline': !![],
        'enableQuery': {
            '_id': _0xf41b76(0x9f),
            'value': !![]
        },
        'secret': !![]
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xa5), 0x0, {
        'type': _0xf41b76(0xa6),
        'group': _0xf41b76(0xa1),
        'section': 'Google\x20Vision',
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xa7), 0x0, {
        'type': _0xf41b76(0xa6),
        'group': _0xf41b76(0xa1),
        'section': _0xf41b76(0xa8),
        'hidden': !![]
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xa9), 0x0, {
        'type': _0xf41b76(0xa6),
        'group': _0xf41b76(0xa1),
        'section': 'Google\x20Vision',
        'blocked': !![]
    }), settings[_0xf41b76(0x9e)]('GoogleVision_Type_Document', ![], {
        'type': _0xf41b76(0xa0),
        'group': 'FileUpload',
        'section': _0xf41b76(0xa8),
        'enableQuery': {
            '_id': _0xf41b76(0x9f),
            'value': !![]
        }
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xaa), ![], {
        'type': _0xf41b76(0xa0),
        'group': 'FileUpload',
        'section': _0xf41b76(0xa8),
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    }), settings['add']('GoogleVision_Type_Landmarks', ![], {
        'type': _0xf41b76(0xa0),
        'group': 'FileUpload',
        'section': 'Google\x20Vision',
        'enableQuery': {
            '_id': _0xf41b76(0x9f),
            'value': !![]
        }
    }), settings[_0xf41b76(0x9e)]('GoogleVision_Type_Labels', ![], {
        'type': _0xf41b76(0xa0),
        'group': 'FileUpload',
        'section': 'Google\x20Vision',
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xab), ![], {
        'type': 'boolean',
        'group': _0xf41b76(0xa1),
        'section': 'Google\x20Vision',
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xac), ![], {
        'type': _0xf41b76(0xa0),
        'group': 'FileUpload',
        'section': 'Google\x20Vision',
        'enableQuery': {
            '_id': 'GoogleVision_Enable',
            'value': !![]
        }
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xad), ![], {
        'type': _0xf41b76(0xa0),
        'group': _0xf41b76(0xa1),
        'section': _0xf41b76(0xa8),
        'enableQuery': {
            '_id': _0xf41b76(0x9f),
            'value': !![]
        }
    }), settings['add']('GoogleVision_Block_Adult_Images', ![], {
        'type': _0xf41b76(0xa0),
        'group': _0xf41b76(0xa1),
        'section': _0xf41b76(0xa8),
        'enableQuery': [
            {
                '_id': 'GoogleVision_Enable',
                'value': !![]
            },
            {
                '_id': 'GoogleVision_Type_SafeSearch',
                'value': !![]
            }
        ]
    }), settings[_0xf41b76(0x9e)](_0xf41b76(0xae), ![], {
        'type': _0xf41b76(0xa0),
        'group': _0xf41b76(0xa1),
        'section': _0xf41b76(0xa8),
        'enableQuery': {
            '_id': _0xf41b76(0x9f),
            'value': !![]
        }
    });
});
