const _0x8792 = [
    'importer_preparing_users',
    'importer_preparing_channels',
    'importer_preparing_messages',
    'importer_user_selection',
    'importer_importing_users',
    'importer_importing_messages',
    'importer_importing_files',
    'importer_finishing',
    'importer_import_failed',
    'importer_import_cancelled',
    'NEW',
    'PREPARING_STARTED',
    'PREPARING_USERS',
    'PREPARING_CHANNELS',
    'PREPARING_MESSAGES',
    'IMPORTING_USERS',
    'IMPORTING_CHANNELS',
    'IMPORTING_MESSAGES',
    'IMPORTING_FILES',
    'DONE',
    'ERROR',
    'CANCELLED',
    '1481YscZXK',
    '809zxGBUZ',
    '711385THKFCG',
    '1QCaiMS',
    '938004afeRSp',
    '975377qjBZve',
    '1108788gkfkNn',
    '6oTmhRM',
    '106474nNEYBG',
    '1250634EAyqBl',
    'freeze',
    'importer_new',
    'importer_file_loaded',
    'importer_preparing_started'
];
const _0x491d40 = _0x2fbb;
(function (_0x349abe, _0x15522b) {
    const _0xc9ba2e = _0x2fbb;
    while (!![]) {
        try {
            const _0x57c6cc = parseInt(_0xc9ba2e(0x1af)) * -parseInt(_0xc9ba2e(0x1b0)) + parseInt(_0xc9ba2e(0x1b1)) * -parseInt(_0xc9ba2e(0x1b2)) + parseInt(_0xc9ba2e(0x1b3)) + parseInt(_0xc9ba2e(0x1b4)) + -parseInt(_0xc9ba2e(0x1b5)) + -parseInt(_0xc9ba2e(0x1b6)) * -parseInt(_0xc9ba2e(0x1b7)) + parseInt(_0xc9ba2e(0x1b8));
            if (_0x57c6cc === _0x15522b)
                break;
            else
                _0x349abe['push'](_0x349abe['shift']());
        } catch (_0x53d998) {
            _0x349abe['push'](_0x349abe['shift']());
        }
    }
}(_0x8792, 0x1164de + 0xe891c + -0x1 * 0x13f54d));
export const ProgressStep = Object[_0x491d40(0x1b9)]({
    'NEW': _0x491d40(0x1ba),
    'UPLOADING': 'importer_uploading',
    'DOWNLOADING_FILE': 'importer_downloading_file',
    'FILE_LOADED': _0x491d40(0x1bb),
    'PREPARING_STARTED': _0x491d40(0x1bc),
    'PREPARING_USERS': _0x491d40(0x1bd),
    'PREPARING_CHANNELS': _0x491d40(0x1be),
    'PREPARING_MESSAGES': _0x491d40(0x1bf),
    'USER_SELECTION': _0x491d40(0x1c0),
    'IMPORTING_STARTED': 'importer_importing_started',
    'IMPORTING_USERS': _0x491d40(0x1c1),
    'IMPORTING_CHANNELS': 'importer_importing_channels',
    'IMPORTING_MESSAGES': _0x491d40(0x1c2),
    'IMPORTING_FILES': _0x491d40(0x1c3),
    'FINISHING': _0x491d40(0x1c4),
    'DONE': 'importer_done',
    'ERROR': _0x491d40(0x1c5),
    'CANCELLED': _0x491d40(0x1c6)
});
export const ImportWaitingStates = [
    ProgressStep[_0x491d40(0x1c7)],
    ProgressStep['UPLOADING'],
    ProgressStep['DOWNLOADING_FILE']
];
export const ImportFileReadyStates = [ProgressStep['FILE_LOADED']];
export const ImportPreparingStartedStates = [
    ProgressStep[_0x491d40(0x1c8)],
    ProgressStep[_0x491d40(0x1c9)],
    ProgressStep[_0x491d40(0x1ca)],
    ProgressStep[_0x491d40(0x1cb)]
];
export const ImportingStartedStates = [
    ProgressStep['IMPORTING_STARTED'],
    ProgressStep[_0x491d40(0x1cc)],
    ProgressStep[_0x491d40(0x1cd)],
    ProgressStep[_0x491d40(0x1ce)],
    ProgressStep[_0x491d40(0x1cf)],
    ProgressStep['FINISHING']
];
export const ImportingDoneStates = [
    ProgressStep[_0x491d40(0x1d0)],
    ProgressStep[_0x491d40(0x1d1)],
    ProgressStep[_0x491d40(0x1d2)]
];
function _0x2fbb(_0x5daa52, _0x223d36) {
    return _0x2fbb = function (_0x4eb5d2, _0x322e62) {
        _0x4eb5d2 = _0x4eb5d2 - (0x936 + 0x7db * -0x3 + 0x100a);
        let _0x488a61 = _0x8792[_0x4eb5d2];
        return _0x488a61;
    }, _0x2fbb(_0x5daa52, _0x223d36);
}
export const ImportingErrorStates = [
    ProgressStep[_0x491d40(0x1d1)],
    ProgressStep['CANCELLED']
];
