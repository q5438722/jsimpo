module['exports'] = class UpdatePackageDependenciesStatusView {
    constructor(_0x53cb96) {
        var _0x1b381e = '5|3|1|2|0|4'['split']('|'), _0x54c0c8 = 0;
        while (!![]) {
            switch (_0x1b381e[_0x54c0c8++]) {
            case '0':
                this['spinner']['classList']['add']('loading', 'loading-spinner-tiny', 'inline-block');
                continue;
            case '1':
                this['element']['classList']['add']('update-package-dependencies-status', 'inline-block', 'is-read-only');
                continue;
            case '2':
                this['spinner'] = document['createElement']('span');
                continue;
            case '3':
                this['element'] = document['createElement']('update-package-dependencies-status');
                continue;
            case '4':
                this['element']['appendChild'](this['spinner']);
                continue;
            case '5':
                this['statusBar'] = _0x53cb96;
                continue;
            }
            break;
        }
    }
    ['attach']() {
        this['tile'] = this['statusBar']['addRightTile']({ 'item': this['element'] });
        this['tooltip'] = atom['tooltips']['add'](this['element'], { 'title': 'Updating package dependencies\u2026' });
    }
    ['detach']() {
        if (this['tile'])
            this['tile']['destroy']();
        if (this['tooltip'])
            this['tooltip']['dispose']();
    }
};