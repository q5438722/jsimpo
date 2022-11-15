import _0x511a24 from './Page';
class PreferencesMainContent extends _0x511a24 {
    get ['formTextInput']() {
        return browser['element']('.rocket-form');
    }
    get ['realNameTextInput']() {
        return browser['element']('input[name=\x22realname\x22]');
    }
    get ['userNameTextInput']() {
        return browser['element']('input[name=\x22username\x22]');
    }
    get ['emailTextInput']() {
        return browser['element']('[name=\x22email\x22]');
    }
    get ['passwordTextInput']() {
        return browser['element']('[name=\x22password\x22]');
    }
    get ['resendVerificationEmailBtn']() {
        return browser['element']('#resend-verification-email');
    }
    get ['avatarFileInput']() {
        return browser['element']('.avatar-file-input');
    }
    get ['useUploadedAvatar']() {
        return browser['element']('.avatar-suggestion-item:nth-of-type(2)\x20.select-service');
    }
    get ['submitBtn']() {
        return browser['element']('.rc-button[type=\x22submit\x22]');
    }
    ['realNameTextInputEnabled']() {
        return browser['isEnabled']('input[name=\x22realname\x22]');
    }
    ['userNameTextInputEnabled']() {
        return browser['isEnabled']('input[name=\x22username\x22]');
    }
    ['changeUsername'](_0x294a9d) {
        this['userNameTextInput']['clear']()['type'](_0x294a9d);
    }
    ['changeRealName'](_0x5bf808) {
        this['realNameTextInput']['clear']()['type'](_0x5bf808);
    }
    ['changeEmail'](_0x4149f1) {
        this['emailTextInput']['clear']()['type'](_0x4149f1);
    }
    ['saveChanges']() {
        cy['get']('.rc-button[type=\x22submit\x22]')['should']('be.enabled'), this['submitBtn']['click']();
    }
    ['changeAvatarUpload'](_0x26817a) {
        this['avatarFileInput']['chooseFile'](_0x26817a), this['useUploadedAvatar']['click']();
    }
}
module['exports'] = new PreferencesMainContent();
