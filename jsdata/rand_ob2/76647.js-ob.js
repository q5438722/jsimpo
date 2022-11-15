var _0x5258 = [
    'formTextInput',
    'realNameTextInput',
    'userNameTextInput',
    'element',
    'input[name=\x22username\x22]',
    'emailTextInput',
    '[name=\x22email\x22]',
    '[name=\x22password\x22]',
    '#resend-verification-email',
    'avatarFileInput',
    '.avatar-file-input',
    'useUploadedAvatar',
    '.avatar-suggestion-item:nth-of-type(2)\x20.select-service',
    '.rc-button[type=\x22submit\x22]',
    'isEnabled',
    'changeUsername',
    'clear',
    'type',
    'changeRealName',
    'changeEmail',
    'saveChanges',
    'should',
    'be.enabled',
    'submitBtn',
    'click',
    'changeAvatarUpload',
    'chooseFile',
    'exports',
    '196048LZjZWc',
    '727TYPPOf',
    '191aiIzVt',
    '115697ADusDs',
    '98964dInBuS',
    '122115lzeBvu',
    '214866yRTdNE',
    '1RbjrsE',
    '311329hJGreC'
];
var _0x3803c5 = _0x392f;
(function (_0x38f2d3, _0x8e70cf) {
    var _0x504dc1 = _0x392f;
    while (!![]) {
        try {
            var _0x57027c = parseInt(_0x504dc1(0x97)) + parseInt(_0x504dc1(0x98)) * -parseInt(_0x504dc1(0x99)) + parseInt(_0x504dc1(0x9a)) + parseInt(_0x504dc1(0x9b)) + parseInt(_0x504dc1(0x9c)) + parseInt(_0x504dc1(0x9d)) + parseInt(_0x504dc1(0x9e)) * -parseInt(_0x504dc1(0x9f));
            if (_0x57027c === _0x8e70cf)
                break;
            else
                _0x38f2d3['push'](_0x38f2d3['shift']());
        } catch (_0x25bf2a) {
            _0x38f2d3['push'](_0x38f2d3['shift']());
        }
    }
}(_0x5258, 0x48a20));
import _0x1dc494 from './Page';
class PreferencesMainContent extends _0x1dc494 {
    get [_0x3803c5(0xa0)]() {
        return browser['element']('.rocket-form');
    }
    get [_0x3803c5(0xa1)]() {
        return browser['element']('input[name=\x22realname\x22]');
    }
    get [_0x3803c5(0xa2)]() {
        var _0x3cbbab = _0x3803c5;
        return browser[_0x3cbbab(0xa3)](_0x3cbbab(0xa4));
    }
    get [_0x3803c5(0xa5)]() {
        var _0x3f71f8 = _0x3803c5;
        return browser['element'](_0x3f71f8(0xa6));
    }
    get ['passwordTextInput']() {
        var _0x31c43a = _0x3803c5;
        return browser[_0x31c43a(0xa3)](_0x31c43a(0xa7));
    }
    get ['resendVerificationEmailBtn']() {
        var _0x389426 = _0x3803c5;
        return browser[_0x389426(0xa3)](_0x389426(0xa8));
    }
    get [_0x3803c5(0xa9)]() {
        var _0x2b62ff = _0x3803c5;
        return browser[_0x2b62ff(0xa3)](_0x2b62ff(0xaa));
    }
    get [_0x3803c5(0xab)]() {
        var _0x3b0bf5 = _0x3803c5;
        return browser[_0x3b0bf5(0xa3)](_0x3b0bf5(0xac));
    }
    get ['submitBtn']() {
        var _0x167fe5 = _0x3803c5;
        return browser[_0x167fe5(0xa3)](_0x167fe5(0xad));
    }
    ['realNameTextInputEnabled']() {
        return browser['isEnabled']('input[name=\x22realname\x22]');
    }
    ['userNameTextInputEnabled']() {
        var _0x2cf4e9 = _0x3803c5;
        return browser[_0x2cf4e9(0xae)](_0x2cf4e9(0xa4));
    }
    [_0x3803c5(0xaf)](_0x89d96b) {
        var _0x5a2bec = _0x3803c5;
        this[_0x5a2bec(0xa2)][_0x5a2bec(0xb0)]()[_0x5a2bec(0xb1)](_0x89d96b);
    }
    [_0x3803c5(0xb2)](_0x49954d) {
        var _0x36afb6 = _0x3803c5;
        this[_0x36afb6(0xa1)]['clear']()[_0x36afb6(0xb1)](_0x49954d);
    }
    [_0x3803c5(0xb3)](_0x2584fc) {
        var _0x65f0a8 = _0x3803c5;
        this[_0x65f0a8(0xa5)][_0x65f0a8(0xb0)]()[_0x65f0a8(0xb1)](_0x2584fc);
    }
    [_0x3803c5(0xb4)]() {
        var _0x58fd42 = _0x3803c5;
        cy['get'](_0x58fd42(0xad))[_0x58fd42(0xb5)](_0x58fd42(0xb6)), this[_0x58fd42(0xb7)][_0x58fd42(0xb8)]();
    }
    [_0x3803c5(0xb9)](_0x5e4abf) {
        var _0x5beed3 = _0x3803c5;
        this[_0x5beed3(0xa9)][_0x5beed3(0xba)](_0x5e4abf), this['useUploadedAvatar'][_0x5beed3(0xb8)]();
    }
}
function _0x392f(_0x375cef, _0x5d5cae) {
    return _0x392f = function (_0x525888, _0x392f5a) {
        _0x525888 = _0x525888 - 0x97;
        var _0x36e037 = _0x5258[_0x525888];
        return _0x36e037;
    }, _0x392f(_0x375cef, _0x5d5cae);
}
module[_0x3803c5(0xbb)] = new PreferencesMainContent();
