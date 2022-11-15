const _0x5e38 = ['1XsLPWU', '479234XlTgcz', '1390276niKuLS', '586781UhadYM', '1153599zpogOe', '1UeIKPP', '742446RsZvsG', 'methods', 'deleteMessage', 'Uploads', 'ChRjN', 'call', 'getStore', 'yOJeE', 'deleteById', '37mVcqgL', '5739WMKCZO', '1588uBkxWL', '466WKZCkH'];
const _0x1ba84b = _0x5cae;

(function (_0x47655a, _0x386fff) {
    const _0x1f1507 = _0x5cae;

    while (true) {
        try {
            const _0x2854f1 = parseInt(_0x1f1507(0xd0)) * -parseInt(_0x1f1507(0xd1)) + parseInt(_0x1f1507(0xd2)) * -parseInt(_0x1f1507(0xd3)) + -parseInt(_0x1f1507(0xd4)) * -parseInt(_0x1f1507(0xd5)) + parseInt(_0x1f1507(0xd6)) + -parseInt(_0x1f1507(0xd7)) + parseInt(_0x1f1507(0xd8)) * parseInt(_0x1f1507(0xd9)) + -parseInt(_0x1f1507(0xda));

            if (_0x2854f1 === _0x386fff) break;else _0x47655a.push(_0x47655a.shift());
        } catch (_0x13e089) {
            _0x47655a.push(_0x47655a.shift());
        }
    }
})(_0x5e38, 741531);
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
function _0x5cae(_0x4a3f95, _0x122227) {
    return _0x5cae = function (_0x527dc0, _0x36344b) {
        _0x527dc0 = _0x527dc0 - 208;
        const _0x262b40 = _0x5e38[_0x527dc0];

        return _0x262b40;
    }, _0x5cae(_0x4a3f95, _0x122227);
}
import { FileUpload } from '../../app/file-upload';
import { Messages } from '../../app/models';
Meteor[_0x1ba84b(0xdb)]({
    'deleteFileMessage'(_0x107b56) {
        const _0x192664 = _0x1ba84b;
        const _0x6d7faa = {
            'ChRjN': function (_0x578795, _0x36ef60, _0x357306) {
                return _0x578795(_0x36ef60, _0x357306);
            },
            'Xqsvg': _0x192664(0xdc),
            'yOJeE': _0x192664(0xdd)
        };

        _0x6d7faa[_0x192664(0xde)](check, _0x107b56, String);

        const _0x5d4333 = Messages.getMessageByFileId(_0x107b56);

        if (_0x5d4333) return Meteor[_0x192664(0xdf)](_0x6d7faa.Xqsvg, _0x5d4333);
        return FileUpload[_0x192664(0xe0)](_0x6d7faa[_0x192664(0xe1)])[_0x192664(0xe2)](_0x107b56);
    }
});
