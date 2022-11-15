const _0x1e1b = [
    '514584aALfrB',
    '1362845OkrdkS',
    '1164754LKOkyj',
    '1oUQVkk',
    '1IzvhFr',
    '470221puSwiK',
    '41186yWTJhP',
    '2BrPnto',
    '1262106hLMnEu',
    '519816ZUIFdB',
    'methods',
    'deleteMessage',
    'Uploads',
    'deleteById'
];
const _0x350993 = _0x1e4d;
(function (_0x25ef2b, _0x34283f) {
    const _0x2f16a7 = _0x1e4d;
    while (!![]) {
        try {
            const _0x2585e6 = parseInt(_0x2f16a7(0x92)) + parseInt(_0x2f16a7(0x93)) + -parseInt(_0x2f16a7(0x94)) * -parseInt(_0x2f16a7(0x95)) + parseInt(_0x2f16a7(0x96)) * -parseInt(_0x2f16a7(0x97)) + parseInt(_0x2f16a7(0x98)) * -parseInt(_0x2f16a7(0x99)) + -parseInt(_0x2f16a7(0x9a)) + -parseInt(_0x2f16a7(0x9b));
            if (_0x2585e6 === _0x34283f)
                break;
            else
                _0x25ef2b['push'](_0x25ef2b['shift']());
        } catch (_0x106fec) {
            _0x25ef2b['push'](_0x25ef2b['shift']());
        }
    }
}(_0x1e1b, 0xacc54));
import { Meteor } from 'meteor/meteor';
function _0x1e4d(_0x5f049d, _0x5670bc) {
    return _0x1e4d = function (_0x1e1bcd, _0x1e4dbe) {
        _0x1e1bcd = _0x1e1bcd - 0x92;
        let _0x1fe72f = _0x1e1b[_0x1e1bcd];
        return _0x1fe72f;
    }, _0x1e4d(_0x5f049d, _0x5670bc);
}
import { check } from 'meteor/check';
import { FileUpload } from '../../app/file-upload';
import { Messages } from '../../app/models';
Meteor[_0x350993(0x9c)]({
    'deleteFileMessage'(_0x4f3030) {
        const _0x5242f0 = _0x350993;
        check(_0x4f3030, String);
        const _0x3b18e0 = Messages['getMessageByFileId'](_0x4f3030);
        if (_0x3b18e0)
            return Meteor['call'](_0x5242f0(0x9d), _0x3b18e0);
        return FileUpload['getStore'](_0x5242f0(0x9e))[_0x5242f0(0x9f)](_0x4f3030);
    }
});
