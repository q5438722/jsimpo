const _0x3586 = ['boolean', 'FileUpload', 'string', 'GoogleVision_Max_Monthly_Calls', 'int', 'GoogleVision_Type_Document', 'GoogleVision_Type_Faces', 'GoogleVision_Type_Landmarks', 'GoogleVision_Type_Properties', 'add', 'fyKCs', 'MDXHl', 'VImgb', 'VNquJ', 'repdF', 'GoogleVision_Current_Month', 'GEtqu', 'Google Vision', 'hNffF', 'aMTGF', 'GoogleVision_Type_Labels', 'GoogleVision_Type_SafeSearch', 'NvirV', 'EkAix', 'GoogleVision_Type_Similar', '19oJRDXs', '9697EEqeSN', '83637DzAUfO', '9679SzcRFl', '71FtGeMb', '1709SijhtI', '49270HYKINZ', '145076yDVZxa', '1BOlYch', '9cFeIvu', '24391EqFoKf', 'startup', 'GoogleVision_Enable'];
const _0x361b5a = _0x2462;

(function (_0x180d15, _0x3ecc8b) {
    const _0xe324de = _0x2462;

    while (true) {
        try {
            const _0x3073a8 = parseInt(_0xe324de(0x1ed)) * parseInt(_0xe324de(0x1ee)) + parseInt(_0xe324de(0x1ef)) + parseInt(_0xe324de(0x1f0)) + parseInt(_0xe324de(0x1f1)) * -parseInt(_0xe324de(0x1f2)) + parseInt(_0xe324de(0x1f3)) + parseInt(_0xe324de(0x1f4)) * parseInt(_0xe324de(0x1f5)) + -parseInt(_0xe324de(0x1f6)) * parseInt(_0xe324de(0x1f7));

            if (_0x3073a8 === _0x3ecc8b) break;else _0x180d15.push(_0x180d15.shift());
        } catch (_0x483bf9) {
            _0x180d15.push(_0x180d15.shift());
        }
    }
})(_0x3586, 131047);
function _0x2462(_0x1432a2, _0x3327bc) {
    return _0x2462 = function (_0x5840a7, _0x4b8c61) {
        _0x5840a7 = _0x5840a7 - 493;
        const _0x16adca = _0x3586[_0x5840a7];

        return _0x16adca;
    }, _0x2462(_0x1432a2, _0x3327bc);
}
import { Meteor } from 'meteor/meteor';
import { settings } from '../../settings';
Meteor[_0x361b5a(0x1f8)](function () {
    const _0x2af03 = _0x361b5a;
    const _0x508cb7 = {
        'repdF': _0x2af03(0x1f9),
        'fyKCs': _0x2af03(0x1fa),
        'MDXHl': _0x2af03(0x1fb),
        'VImgb': 'Google Vision',
        'hVhWL': 'FileUpload_Storage_Type',
        'VNquJ': 'GoogleVision_ServiceAccount',
        'viVOR': _0x2af03(0x1fc),
        'zBrFO': _0x2af03(0x1fd),
        'GEtqu': _0x2af03(0x1fe),
        'oTZam': 'GoogleVision_Current_Month_Calls',
        'yjpPD': _0x2af03(0x1ff),
        'hNffF': _0x2af03(0x200),
        'aMTGF': _0x2af03(0x201),
        'opCgZ': 'GoogleVision_Type_Logos',
        'AMOHb': _0x2af03(0x202),
        'NvirV': 'GoogleVision_Block_Adult_Images',
        'EkAix': 'GoogleVision_Type_SafeSearch'
    };

    settings[_0x2af03(0x203)](_0x508cb7.repdF, false, {
        'type': _0x508cb7[_0x2af03(0x204)],
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x508cb7[_0x2af03(0x206)],
        'public': true,
        'enableQuery': {
            '_id': _0x508cb7.hVhWL,
            'value': 'GoogleCloudStorage'
        }
    }), settings[_0x2af03(0x203)](_0x508cb7[_0x2af03(0x207)], '', {
        'type': _0x508cb7.viVOR,
        'group': _0x2af03(0x1fb),
        'section': _0x508cb7[_0x2af03(0x206)],
        'multiline': true,
        'enableQuery': {
            '_id': _0x2af03(0x1f9),
            'value': true
        },
        'secret': true
    }), settings[_0x2af03(0x203)](_0x508cb7.zBrFO, 0, {
        'type': _0x508cb7.GEtqu,
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x508cb7.VImgb,
        'enableQuery': {
            '_id': _0x508cb7[_0x2af03(0x208)],
            'value': true
        }
    }), settings[_0x2af03(0x203)](_0x2af03(0x209), 0, {
        'type': _0x508cb7[_0x2af03(0x20a)],
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x508cb7[_0x2af03(0x206)],
        'hidden': true
    }), settings.add(_0x508cb7.oTZam, 0, {
        'type': 'int',
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x2af03(0x20b),
        'blocked': true
    }), settings.add(_0x508cb7.yjpPD, false, {
        'type': _0x508cb7[_0x2af03(0x204)],
        'group': _0x2af03(0x1fb),
        'section': _0x508cb7[_0x2af03(0x206)],
        'enableQuery': {
            '_id': _0x508cb7[_0x2af03(0x208)],
            'value': true
        }
    }), settings[_0x2af03(0x203)](_0x508cb7[_0x2af03(0x20c)], false, {
        'type': _0x508cb7[_0x2af03(0x204)],
        'group': _0x508cb7.MDXHl,
        'section': _0x508cb7[_0x2af03(0x206)],
        'enableQuery': {
            '_id': _0x2af03(0x1f9),
            'value': true
        }
    }), settings[_0x2af03(0x203)](_0x508cb7[_0x2af03(0x20d)], false, {
        'type': _0x2af03(0x1fa),
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x508cb7.VImgb,
        'enableQuery': {
            '_id': _0x508cb7.repdF,
            'value': true
        }
    }), settings[_0x2af03(0x203)](_0x2af03(0x20e), false, {
        'type': _0x508cb7[_0x2af03(0x204)],
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x508cb7[_0x2af03(0x206)],
        'enableQuery': {
            '_id': _0x508cb7[_0x2af03(0x208)],
            'value': true
        }
    }), settings.add(_0x508cb7.opCgZ, false, {
        'type': _0x2af03(0x1fa),
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x508cb7[_0x2af03(0x206)],
        'enableQuery': {
            '_id': _0x508cb7[_0x2af03(0x208)],
            'value': true
        }
    }), settings.add(_0x508cb7.AMOHb, false, {
        'type': _0x508cb7[_0x2af03(0x204)],
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x508cb7[_0x2af03(0x206)],
        'enableQuery': {
            '_id': _0x508cb7.repdF,
            'value': true
        }
    }), settings[_0x2af03(0x203)](_0x2af03(0x20f), false, {
        'type': _0x508cb7.fyKCs,
        'group': _0x508cb7.MDXHl,
        'section': _0x508cb7[_0x2af03(0x206)],
        'enableQuery': {
            '_id': _0x2af03(0x1f9),
            'value': true
        }
    }), settings[_0x2af03(0x203)](_0x508cb7[_0x2af03(0x210)], false, {
        'type': _0x2af03(0x1fa),
        'group': _0x508cb7.MDXHl,
        'section': _0x2af03(0x20b),
        'enableQuery': [{
            '_id': _0x508cb7[_0x2af03(0x208)],
            'value': true
        }, {
            '_id': _0x508cb7[_0x2af03(0x211)],
            'value': true
        }]
    }), settings[_0x2af03(0x203)](_0x2af03(0x212), false, {
        'type': _0x508cb7[_0x2af03(0x204)],
        'group': _0x508cb7[_0x2af03(0x205)],
        'section': _0x508cb7[_0x2af03(0x206)],
        'enableQuery': {
            '_id': _0x508cb7[_0x2af03(0x208)],
            'value': true
        }
    });
});
