const _0x25ee = [
    'importer_done',
    'importer_import_cancelled',
    'NEW',
    'UPLOADING',
    'FILE_LOADED',
    'PREPARING_STARTED',
    'PREPARING_CHANNELS',
    'IMPORTING_STARTED',
    'IMPORTING_USERS',
    'IMPORTING_CHANNELS',
    'IMPORTING_MESSAGES',
    'IMPORTING_FILES',
    'FINISHING',
    'DONE',
    'CANCELLED',
    'ERROR',
    '301653DZFhTv',
    '106SmHbcQ',
    '7051JTkBIi',
    '367AjzQSv',
    '8uYQNzI',
    '1OIyjOp',
    '409138lkWchk',
    '747909tZqbvq',
    '378887NgxhlX',
    '1UaWQXK',
    '1onTRGS',
    '142904OBYPEB',
    'freeze',
    'importer_new',
    'importer_uploading',
    'importer_downloading_file',
    'importer_file_loaded',
    'importer_preparing_started',
    'importer_preparing_channels',
    'importer_importing_started',
    'importer_importing_messages',
    'importer_finishing'
];
function _0x9d40(_0x170f72, _0x1ac604) {
    return _0x9d40 = function (_0x25ee25, _0x9d40b7) {
        _0x25ee25 = _0x25ee25 - 0xb1;
        let _0x7af304 = _0x25ee[_0x25ee25];
        return _0x7af304;
    }, _0x9d40(_0x170f72, _0x1ac604);
}
const _0x26b48a = _0x9d40;
(function (_0x4f6e32, _0x439e49) {
    const _0x3d44a3 = _0x9d40;
    while (!![]) {
        try {
            const _0x332177 = parseInt(_0x3d44a3(0xb1)) + parseInt(_0x3d44a3(0xb2)) * parseInt(_0x3d44a3(0xb3)) + -parseInt(_0x3d44a3(0xb4)) * parseInt(_0x3d44a3(0xb5)) + -parseInt(_0x3d44a3(0xb6)) * parseInt(_0x3d44a3(0xb7)) + -parseInt(_0x3d44a3(0xb8)) + -parseInt(_0x3d44a3(0xb9)) * -parseInt(_0x3d44a3(0xba)) + parseInt(_0x3d44a3(0xbb)) * parseInt(_0x3d44a3(0xbc));
            if (_0x332177 === _0x439e49)
                break;
            else
                _0x4f6e32['push'](_0x4f6e32['shift']());
        } catch (_0x263b1c) {
            _0x4f6e32['push'](_0x4f6e32['shift']());
        }
    }
}(_0x25ee, 0x644f3));
export const ProgressStep = Object[_0x26b48a(0xbd)]({
    'NEW': _0x26b48a(0xbe),
    'UPLOADING': _0x26b48a(0xbf),
    'DOWNLOADING_FILE': _0x26b48a(0xc0),
    'FILE_LOADED': _0x26b48a(0xc1),
    'PREPARING_STARTED': _0x26b48a(0xc2),
    'PREPARING_USERS': 'importer_preparing_users',
    'PREPARING_CHANNELS': _0x26b48a(0xc3),
    'PREPARING_MESSAGES': 'importer_preparing_messages',
    'USER_SELECTION': 'importer_user_selection',
    'IMPORTING_STARTED': _0x26b48a(0xc4),
    'IMPORTING_USERS': 'importer_importing_users',
    'IMPORTING_CHANNELS': 'importer_importing_channels',
    'IMPORTING_MESSAGES': _0x26b48a(0xc5),
    'IMPORTING_FILES': 'importer_importing_files',
    'FINISHING': _0x26b48a(0xc6),
    'DONE': _0x26b48a(0xc7),
    'ERROR': 'importer_import_failed',
    'CANCELLED': _0x26b48a(0xc8)
});
export const ImportWaitingStates = [
    ProgressStep[_0x26b48a(0xc9)],
    ProgressStep[_0x26b48a(0xca)],
    ProgressStep['DOWNLOADING_FILE']
];
export const ImportFileReadyStates = [ProgressStep[_0x26b48a(0xcb)]];
export const ImportPreparingStartedStates = [
    ProgressStep[_0x26b48a(0xcc)],
    ProgressStep['PREPARING_USERS'],
    ProgressStep[_0x26b48a(0xcd)],
    ProgressStep['PREPARING_MESSAGES']
];
export const ImportingStartedStates = [
    ProgressStep[_0x26b48a(0xce)],
    ProgressStep[_0x26b48a(0xcf)],
    ProgressStep[_0x26b48a(0xd0)],
    ProgressStep[_0x26b48a(0xd1)],
    ProgressStep[_0x26b48a(0xd2)],
    ProgressStep[_0x26b48a(0xd3)]
];
export const ImportingDoneStates = [
    ProgressStep[_0x26b48a(0xd4)],
    ProgressStep['ERROR'],
    ProgressStep[_0x26b48a(0xd5)]
];
export const ImportingErrorStates = [
    ProgressStep[_0x26b48a(0xd6)],
    ProgressStep[_0x26b48a(0xd5)]
];
