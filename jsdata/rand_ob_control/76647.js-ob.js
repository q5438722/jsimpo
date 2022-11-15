import _0x421188 from './Page';
class PreferencesMainContent extends _0x421188 {
    get ['formTextInput']() {
        var _0x1087f2 = { 'xoNoD': '.rocket-form' };
        return browser['element'](_0x1087f2['xoNoD']);
    }
    get ['realNameTextInput']() {
        var _0x26bf93 = { 'dkXqN': 'input[name=\x22realname\x22]' };
        return browser['element'](_0x26bf93['dkXqN']);
    }
    get ['userNameTextInput']() {
        var _0x9d7e7 = { 'asQJp': 'input[name=\x22username\x22]' };
        return browser['element'](_0x9d7e7['asQJp']);
    }
    get ['emailTextInput']() {
        var _0x4d0377 = { 'cPizk': '[name=\x22email\x22]' };
        return browser['element'](_0x4d0377['cPizk']);
    }
    get ['passwordTextInput']() {
        var _0x175635 = { 'EfdEr': '[name=\x22password\x22]' };
        return browser['element'](_0x175635['EfdEr']);
    }
    get ['resendVerificationEmailBtn']() {
        var _0x2e5c92 = { 'LPWDE': '#resend-verification-email' };
        return browser['element'](_0x2e5c92['LPWDE']);
    }
    get ['avatarFileInput']() {
        var _0x9d915f = { 'xtGxR': '.avatar-file-input' };
        return browser['element'](_0x9d915f['xtGxR']);
    }
    get ['useUploadedAvatar']() {
        var _0x3c509e = { 'KWkBI': '.avatar-suggestion-item:nth-of-type(2)\x20.select-service' };
        return browser['element'](_0x3c509e['KWkBI']);
    }
    get ['submitBtn']() {
        var _0x1c3dce = { 'QMVRL': '.rc-button[type=\x22submit\x22]' };
        return browser['element'](_0x1c3dce['QMVRL']);
    }
    ['realNameTextInputEnabled']() {
        var _0x1ab9bc = { 'bpViz': 'input[name=\x22realname\x22]' };
        return browser['isEnabled'](_0x1ab9bc['bpViz']);
    }
    ['userNameTextInputEnabled']() {
        var _0x3d4977 = { 'Asfrp': 'input[name=\x22username\x22]' };
        return browser['isEnabled'](_0x3d4977['Asfrp']);
    }
    ['changeUsername'](_0x374b3f) {
        this['userNameTextInput']['clear']()['type'](_0x374b3f);
    }
    ['changeRealName'](_0xaeb59a) {
        this['realNameTextInput']['clear']()['type'](_0xaeb59a);
    }
    ['changeEmail'](_0x2883a0) {
        this['emailTextInput']['clear']()['type'](_0x2883a0);
    }
    ['saveChanges']() {
        var _0x18dbc4 = {
            'ujsvc': '.rc-button[type=\x22submit\x22]',
            'duULP': 'be.enabled'
        };
        cy['get'](_0x18dbc4['ujsvc'])['should'](_0x18dbc4['duULP']), this['submitBtn']['click']();
    }
    ['changeAvatarUpload'](_0x2cfc0d) {
        this['avatarFileInput']['chooseFile'](_0x2cfc0d), this['useUploadedAvatar']['click']();
    }
}
module['exports'] = new PreferencesMainContent();
