const _0x34df = [
    'writeHead',
    'data',
    'write',
    'bind',
    'pipe',
    'Webdav:Uploads',
    'Webdav:Avatars',
    'Webdav:UserDataFiles',
    'debounce',
    'FileUpload_Webdav_Server_URL',
    'FileUpload_Webdav_Username',
    'Webdav',
    'FileUpload_Webdav_Upload_Folder_Path',
    'get',
    'inRuh',
    'NZtke',
    'FileUpload_Webdav_Password',
    'CtLWX',
    'Ocmvo',
    'name',
    'configureUploadsStore',
    '60327IjppNi',
    '1LEFvRI',
    '1mbHGlJ',
    '1063151MaTtlt',
    '1021427hNhtOv',
    '1yiaXnC',
    '3HIajYv',
    '78487AWTeGf',
    '181272lcqaRd',
    '17233AjQBII',
    '17nAvpcJ',
    '172yLXNEt',
    '4789TPoqSm',
    'end',
    'store',
    'getReadStream',
    '_id',
    'tuXyI'
];
const _0x386127 = _0xe173;
(function (_0x7c3585, _0x38195a) {
    const _0x1f441d = _0xe173;
    while (!![]) {
        try {
            const _0x20e88f = parseInt(_0x1f441d(0x129)) * -parseInt(_0x1f441d(0x12a)) + -parseInt(_0x1f441d(0x12b)) * -parseInt(_0x1f441d(0x12c)) + parseInt(_0x1f441d(0x12d)) * -parseInt(_0x1f441d(0x12e)) + parseInt(_0x1f441d(0x12f)) * parseInt(_0x1f441d(0x130)) + -parseInt(_0x1f441d(0x131)) + parseInt(_0x1f441d(0x132)) * -parseInt(_0x1f441d(0x133)) + parseInt(_0x1f441d(0x134)) * parseInt(_0x1f441d(0x135));
            if (_0x20e88f === _0x38195a)
                break;
            else
                _0x7c3585['push'](_0x7c3585['shift']());
        } catch (_0xcee749) {
            _0x7c3585['push'](_0x7c3585['shift']());
        }
    }
}(_0x34df, -0xfb * 0xcb3 + 0x24b19 + 0x12cca5));
import _0x31aeca from 'underscore';
import {
    FileUploadClass,
    FileUpload
} from '../lib/FileUpload';
function _0xe173(_0x140544, _0xc3690f) {
    return _0xe173 = function (_0x1662e5, _0x3887b0) {
        _0x1662e5 = _0x1662e5 - (-0xabd * 0x2 + -0x19 * 0x44 + 0x1d47);
        let _0x1a5db0 = _0x34df[_0x1662e5];
        return _0x1a5db0;
    }, _0xe173(_0x140544, _0xc3690f);
}
import { settings } from '../../../settings';
import '../../ufs/Webdav/server.js';
const get = function (_0x59da5a, _0x2f5bda, _0x2dd93a) {
        const _0x395099 = _0xe173, _0x5849a5 = {
                'tuXyI': 'An\x20error\x20ocurred\x20when\x20fetching\x20the\x20file',
                'vmdOo': _0x395099(0x136)
            };
        this[_0x395099(0x137)][_0x395099(0x138)](_0x59da5a[_0x395099(0x139)], _0x59da5a)['on']('error', () => {
            const _0x3990da = _0x395099;
            console['error'](_0x5849a5[_0x3990da(0x13a)]), _0x2dd93a[_0x3990da(0x13b)](-0x7a * 0x2 + 0x493 * -0x3 + 0x354 * 0x5), _0x2dd93a[_0x3990da(0x136)]();
        })['on'](_0x395099(0x13c), _0x48061e => {
            const _0x3ad6e8 = _0x395099;
            _0x2dd93a[_0x3ad6e8(0x13d)](_0x48061e);
        })['on'](_0x5849a5['vmdOo'], _0x2dd93a[_0x395099(0x136)][_0x395099(0x13e)](_0x2dd93a));
    }, copy = function (_0x39bb4f, _0x45add0) {
        const _0x4af004 = _0xe173;
        this[_0x4af004(0x137)][_0x4af004(0x138)](_0x39bb4f['_id'], _0x39bb4f)[_0x4af004(0x13f)](_0x45add0);
    }, WebdavUploads = new FileUploadClass({
        'name': _0x386127(0x140),
        'get': get,
        'copy': copy
    }), WebdavAvatars = new FileUploadClass({
        'name': _0x386127(0x141),
        'get': get,
        'copy': copy
    }), WebdavUserDataFiles = new FileUploadClass({
        'name': _0x386127(0x142),
        'get': get,
        'copy': copy
    }), configure = _0x31aeca[_0x386127(0x143)](function () {
        const _0x501db5 = _0x386127, _0x5123a6 = {
                'inRuh': _0x501db5(0x144),
                'NZtke': _0x501db5(0x145),
                'CtLWX': function (_0x4ce98a, _0x14fc04) {
                    return _0x4ce98a || _0x14fc04;
                },
                'Ocmvo': _0x501db5(0x146)
            }, _0x2c800c = settings['get'](_0x501db5(0x147)), _0x4fd0eb = settings[_0x501db5(0x148)](_0x5123a6[_0x501db5(0x149)]), _0x16bd53 = settings['get'](_0x5123a6[_0x501db5(0x14a)]), _0x10ad97 = settings[_0x501db5(0x148)](_0x501db5(0x14b));
        if (_0x5123a6[_0x501db5(0x14c)](!_0x4fd0eb, !_0x16bd53) || !_0x10ad97)
            return;
        const _0x3d7f8b = {
            'connection': {
                'credentials': {
                    'server': _0x4fd0eb,
                    'username': _0x16bd53,
                    'password': _0x10ad97
                }
            },
            'uploadFolderPath': _0x2c800c
        };
        WebdavUploads[_0x501db5(0x137)] = FileUpload['configureUploadsStore'](_0x5123a6[_0x501db5(0x14d)], WebdavUploads[_0x501db5(0x14e)], _0x3d7f8b), WebdavAvatars[_0x501db5(0x137)] = FileUpload[_0x501db5(0x14f)](_0x5123a6[_0x501db5(0x14d)], WebdavAvatars[_0x501db5(0x14e)], _0x3d7f8b), WebdavUserDataFiles[_0x501db5(0x137)] = FileUpload[_0x501db5(0x14f)](_0x5123a6[_0x501db5(0x14d)], WebdavUserDataFiles[_0x501db5(0x14e)], _0x3d7f8b);
    }, -0x1 * 0x40d + -0x2382 + 0x2983);
settings[_0x386127(0x148)](/^FileUpload_Webdav_/, configure);
