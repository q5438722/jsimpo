const _0x14db = ['realNameTextInputEnabled', 'isEnabled', 'changeUsername', 'clear', 'type', 'changeRealName', 'realNameTextInput', 'changeEmail', 'emailTextInput', 'saveChanges', 'be.enabled', 'BlrAy', 'should', 'mBMxS', 'click', 'chooseFile', 'exports', '272031aQjeJw', '1027536FdFWtn', '1RftwzL', '554803AibSYR', '1132627bKXAhj', '821119TCTkWo', '442160FIJJmd', '11533ijWUdv', '99qWMQOi', 'formTextInput', 'element', 'BBjXs', 'input[name="realname"]', 'userNameTextInput', 'input[name="username"]', 'srftW', 'XZagZ', 'passwordTextInput', '[name="password"]', 'sHMxH', '#resend-verification-email', 'avatarFileInput', '.avatar-file-input', 'ghFqO', 'useUploadedAvatar', '.avatar-suggestion-item:nth-of-type(2) .select-service', 'uRNMR', 'submitBtn', '.rc-button[type="submit"]'];
const _0x3b7f9f = _0x3229;

(function (_0x5baec8, _0x5b922b) {
    const _0x3801a5 = _0x3229;

    while (true) {
        try {
            const _0x23f6e5 = -parseInt(_0x3801a5(0xd4)) + parseInt(_0x3801a5(0xd5)) + -parseInt(_0x3801a5(0xd6)) * parseInt(_0x3801a5(0xd7)) + parseInt(_0x3801a5(0xd8)) + parseInt(_0x3801a5(0xd9)) + -parseInt(_0x3801a5(0xda)) + -parseInt(_0x3801a5(0xdb)) * parseInt(_0x3801a5(0xdc));

            if (_0x23f6e5 === _0x5b922b) break;else _0x5baec8.push(_0x5baec8.shift());
        } catch (_0x4e3ec9) {
            _0x5baec8.push(_0x5baec8.shift());
        }
    }
})(_0x14db, 570521);
import _0x5cbfa9 from './Page';
class PreferencesMainContent extends _0x5cbfa9 {
    get [_0x3b7f9f(0xdd)]() {
        const _0x101f9a = _0x3b7f9f;
        const _0x1283f8 = { 'BBjXs': '.rocket-form' };

        return browser[_0x101f9a(0xde)](_0x1283f8[_0x101f9a(0xdf)]);
    }
    get ['realNameTextInput']() {
        const _0x196dcf = _0x3b7f9f;

        return browser[_0x196dcf(0xde)](_0x196dcf(0xe0));
    }
    get [_0x3b7f9f(0xe1)]() {
        const _0x46d16e = _0x3b7f9f;
        const _0x427cac = { 'srftW': _0x46d16e(0xe2) };

        return browser.element(_0x427cac[_0x46d16e(0xe3)]);
    }
    get ['emailTextInput']() {
        const _0x561761 = _0x3b7f9f;
        const _0x331c0a = { 'XZagZ': '[name="email"]' };

        return browser[_0x561761(0xde)](_0x331c0a[_0x561761(0xe4)]);
    }
    get [_0x3b7f9f(0xe5)]() {
        const _0x4ac4ba = _0x3b7f9f;
        const _0x151aaa = { 'sHMxH': _0x4ac4ba(0xe6) };

        return browser[_0x4ac4ba(0xde)](_0x151aaa[_0x4ac4ba(0xe7)]);
    }
    get ['resendVerificationEmailBtn']() {
        const _0x161aaf = _0x3b7f9f;

        return browser[_0x161aaf(0xde)](_0x161aaf(0xe8));
    }
    get [_0x3b7f9f(0xe9)]() {
        const _0x2475fc = _0x3b7f9f;
        const _0x37024f = { 'ghFqO': _0x2475fc(0xea) };

        return browser[_0x2475fc(0xde)](_0x37024f[_0x2475fc(0xeb)]);
    }
    get [_0x3b7f9f(0xec)]() {
        const _0x49d5ca = _0x3b7f9f;
        const _0x1a359a = { 'uRNMR': _0x49d5ca(0xed) };

        return browser[_0x49d5ca(0xde)](_0x1a359a[_0x49d5ca(0xee)]);
    }
    get [_0x3b7f9f(0xef)]() {
        const _0x53e3fe = _0x3b7f9f;

        return browser.element(_0x53e3fe(0xf0));
    }
    [_0x3b7f9f(0xf1)]() {
        const _0x2c6d5b = _0x3b7f9f;

        return browser[_0x2c6d5b(0xf2)](_0x2c6d5b(0xe0));
    }
    ['userNameTextInputEnabled']() {
        const _0x41daa3 = _0x3b7f9f;

        return browser.isEnabled(_0x41daa3(0xe2));
    }
    [_0x3b7f9f(0xf3)](_0x415093) {
        const _0x4c0781 = _0x3b7f9f;

        this[_0x4c0781(0xe1)][_0x4c0781(0xf4)]()[_0x4c0781(0xf5)](_0x415093);
    }
    [_0x3b7f9f(0xf6)](_0x2ee26e) {
        const _0x3e44ae = _0x3b7f9f;

        this[_0x3e44ae(0xf7)].clear()[_0x3e44ae(0xf5)](_0x2ee26e);
    }
    [_0x3b7f9f(0xf8)](_0x309b41) {
        const _0x4edfca = _0x3b7f9f;

        this[_0x4edfca(0xf9)].clear().type(_0x309b41);
    }
    [_0x3b7f9f(0xfa)]() {
        const _0x13c9d3 = _0x3b7f9f;
        const _0x2bb515 = {
            'BlrAy': '.rc-button[type="submit"]',
            'mBMxS': _0x13c9d3(0xfb)
        };

        cy.get(_0x2bb515[_0x13c9d3(0xfc)])[_0x13c9d3(0xfd)](_0x2bb515[_0x13c9d3(0xfe)]), this[_0x13c9d3(0xef)][_0x13c9d3(0xff)]();
    }
    ['changeAvatarUpload'](_0x3cf3be) {
        const _0x3e169e = _0x3b7f9f;

        this[_0x3e169e(0xe9)][_0x3e169e(0x100)](_0x3cf3be), this[_0x3e169e(0xec)][_0x3e169e(0xff)]();
    }
}
function _0x3229(_0x517567, _0x3ff3f9) {
    return _0x3229 = function (_0x5c4913, _0xb0d286) {
        _0x5c4913 = _0x5c4913 - 212;
        const _0x1d46d1 = _0x14db[_0x5c4913];

        return _0x1d46d1;
    }, _0x3229(_0x517567, _0x3ff3f9);
}
module[_0x3b7f9f(0x101)] = new PreferencesMainContent();
