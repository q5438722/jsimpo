import { Meteor } from 'meteor/meteor';
import { settings } from '../../settings';
Meteor['startup'](function () {
    var _0x2e01a9 = {
            'msHfL': '2|9|3|10|7|1|11|8|5|6|12|4|13|0',
            'vIafJ': 'GoogleVision_Type_Similar',
            'mpsnn': 'boolean',
            'yHjmv': 'FileUpload',
            'MUyBg': 'Google\x20Vision',
            'twzty': 'GoogleVision_Enable',
            'UTXHH': 'GoogleVision_Type_Document',
            'bnNOC': 'FileUpload_Storage_Type',
            'AzZsH': 'GoogleCloudStorage',
            'zTNgf': 'GoogleVision_Max_Monthly_Calls',
            'LoDQj': 'int',
            'mbBfZ': 'GoogleVision_Type_SafeSearch',
            'vxVTs': 'GoogleVision_Type_Labels',
            'FOeoe': 'GoogleVision_Type_Logos',
            'KZyBE': 'GoogleVision_Current_Month_Calls',
            'igkwR': 'GoogleVision_Type_Landmarks',
            'emdZv': 'GoogleVision_ServiceAccount',
            'eJVfv': 'string',
            'WswsH': 'GoogleVision_Current_Month',
            'mbmXj': 'GoogleVision_Type_Faces',
            'WiLeF': 'GoogleVision_Type_Properties',
            'SIgnC': 'GoogleVision_Block_Adult_Images'
        }, _0x1c290e = _0x2e01a9['msHfL']['split']('|'), _0x417a57 = 0x0;
    while (!![]) {
        switch (_0x1c290e[_0x417a57++]) {
        case '0':
            settings['add'](_0x2e01a9['vIafJ'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '1':
            settings['add'](_0x2e01a9['UTXHH'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '2':
            settings['add'](_0x2e01a9['twzty'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'public': !![],
                'enableQuery': {
                    '_id': _0x2e01a9['bnNOC'],
                    'value': _0x2e01a9['AzZsH']
                }
            });
            continue;
        case '3':
            settings['add'](_0x2e01a9['zTNgf'], 0x0, {
                'type': _0x2e01a9['LoDQj'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '4':
            settings['add'](_0x2e01a9['mbBfZ'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '5':
            settings['add'](_0x2e01a9['vxVTs'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '6':
            settings['add'](_0x2e01a9['FOeoe'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '7':
            settings['add'](_0x2e01a9['KZyBE'], 0x0, {
                'type': _0x2e01a9['LoDQj'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'blocked': !![]
            });
            continue;
        case '8':
            settings['add'](_0x2e01a9['igkwR'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '9':
            settings['add'](_0x2e01a9['emdZv'], '', {
                'type': _0x2e01a9['eJVfv'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'multiline': !![],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                },
                'secret': !![]
            });
            continue;
        case '10':
            settings['add'](_0x2e01a9['WswsH'], 0x0, {
                'type': _0x2e01a9['LoDQj'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'hidden': !![]
            });
            continue;
        case '11':
            settings['add'](_0x2e01a9['mbmXj'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '12':
            settings['add'](_0x2e01a9['WiLeF'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': {
                    '_id': _0x2e01a9['twzty'],
                    'value': !![]
                }
            });
            continue;
        case '13':
            settings['add'](_0x2e01a9['SIgnC'], ![], {
                'type': _0x2e01a9['mpsnn'],
                'group': _0x2e01a9['yHjmv'],
                'section': _0x2e01a9['MUyBg'],
                'enableQuery': [
                    {
                        '_id': _0x2e01a9['twzty'],
                        'value': !![]
                    },
                    {
                        '_id': _0x2e01a9['mbBfZ'],
                        'value': !![]
                    }
                ]
            });
            continue;
        }
        break;
    }
});
