const _0x4fb3 = [
    'store',
    'pipe',
    'Webdav:UserDataFiles',
    'debounce',
    'get',
    'FileUpload_Webdav_Username',
    'configureUploadsStore',
    'name',
    'Webdav',
    '244517StQsoz',
    '2mcqVTG',
    '73613AJXlIL',
    '320778uPVFtK',
    '137526oiGsNq',
    '243113tzNIih',
    '254068bUolGW',
    '29091kNBDBT',
    '53XDjpjE',
    'getReadStream',
    '_id',
    'error',
    'An\x20error\x20ocurred\x20when\x20fetching\x20the\x20file',
    'writeHead',
    'end',
    'data',
    'write',
    'bind'
];
const _0x84a0fb = _0x1aee;
(function (_0xe77011, _0x4ea6b8) {
    const _0x214b81 = _0x1aee;
    while (!![]) {
        try {
            const _0x22a976 = -parseInt(_0x214b81(0x151)) + -parseInt(_0x214b81(0x152)) * parseInt(_0x214b81(0x153)) + -parseInt(_0x214b81(0x154)) + -parseInt(_0x214b81(0x155)) + -parseInt(_0x214b81(0x156)) + -parseInt(_0x214b81(0x157)) + parseInt(_0x214b81(0x158)) * parseInt(_0x214b81(0x159));
            if (_0x22a976 === _0x4ea6b8)
                break;
            else
                _0xe77011['push'](_0xe77011['shift']());
        } catch (_0x3e6cd3) {
            _0xe77011['push'](_0xe77011['shift']());
        }
    }
}(_0x4fb3, 0x2f823));
import _0x3024c3 from 'underscore';
import {
    FileUploadClass,
    FileUpload
} from '../lib/FileUpload';
import { settings } from '../../../settings';
import '../../ufs/Webdav/server.js';
const get = function (_0x58eb30, _0xede1c2, _0x582828) {
        const _0x7e9cb8 = _0x1aee;
        this['store'][_0x7e9cb8(0x15a)](_0x58eb30[_0x7e9cb8(0x15b)], _0x58eb30)['on'](_0x7e9cb8(0x15c), () => {
            const _0x1d6f5c = _0x7e9cb8;
            console[_0x1d6f5c(0x15c)](_0x1d6f5c(0x15d)), _0x582828[_0x1d6f5c(0x15e)](0x1f7), _0x582828[_0x1d6f5c(0x15f)]();
        })['on'](_0x7e9cb8(0x160), _0x46a0e4 => {
            const _0x38774c = _0x7e9cb8;
            _0x582828[_0x38774c(0x161)](_0x46a0e4);
        })['on'](_0x7e9cb8(0x15f), _0x582828[_0x7e9cb8(0x15f)][_0x7e9cb8(0x162)](_0x582828));
    }, copy = function (_0x1923ef, _0xbb88c6) {
        const _0x13c7ac = _0x1aee;
        this[_0x13c7ac(0x163)][_0x13c7ac(0x15a)](_0x1923ef[_0x13c7ac(0x15b)], _0x1923ef)[_0x13c7ac(0x164)](_0xbb88c6);
    }, WebdavUploads = new FileUploadClass({
        'name': 'Webdav:Uploads',
        'get': get,
        'copy': copy
    }), WebdavAvatars = new FileUploadClass({
        'name': 'Webdav:Avatars',
        'get': get,
        'copy': copy
    }), WebdavUserDataFiles = new FileUploadClass({
        'name': _0x84a0fb(0x165),
        'get': get,
        'copy': copy
    }), configure = _0x3024c3[_0x84a0fb(0x166)](function () {
        const _0x4efc64 = _0x84a0fb, _0x3d927b = settings[_0x4efc64(0x167)]('FileUpload_Webdav_Upload_Folder_Path'), _0x2c8942 = settings[_0x4efc64(0x167)]('FileUpload_Webdav_Server_URL'), _0x4494fb = settings[_0x4efc64(0x167)](_0x4efc64(0x168)), _0x1e166e = settings['get']('FileUpload_Webdav_Password');
        if (!_0x2c8942 || !_0x4494fb || !_0x1e166e)
            return;
        const _0x9c36d2 = {
            'connection': {
                'credentials': {
                    'server': _0x2c8942,
                    'username': _0x4494fb,
                    'password': _0x1e166e
                }
            },
            'uploadFolderPath': _0x3d927b
        };
        WebdavUploads[_0x4efc64(0x163)] = FileUpload[_0x4efc64(0x169)]('Webdav', WebdavUploads[_0x4efc64(0x16a)], _0x9c36d2), WebdavAvatars[_0x4efc64(0x163)] = FileUpload[_0x4efc64(0x169)](_0x4efc64(0x16b), WebdavAvatars[_0x4efc64(0x16a)], _0x9c36d2), WebdavUserDataFiles[_0x4efc64(0x163)] = FileUpload[_0x4efc64(0x169)]('Webdav', WebdavUserDataFiles[_0x4efc64(0x16a)], _0x9c36d2);
    }, 0x1f4);
function _0x1aee(_0x51a641, _0x105745) {
    return _0x1aee = function (_0x4fb34a, _0x1aee33) {
        _0x4fb34a = _0x4fb34a - 0x151;
        let _0x1f00bd = _0x4fb3[_0x4fb34a];
        return _0x1f00bd;
    }, _0x1aee(_0x51a641, _0x105745);
}
settings[_0x84a0fb(0x167)](/^FileUpload_Webdav_/, configure);
