module['exports'] = class UpdatePackageDependenciesStatusView {
    constructor(_0x29edeb) {
        this['statusBar'] = _0x29edeb, this['element'] = document['createElement']('update-package-dependencies-status'), this['element']['classList']['add']('update-package-dependencies-status', 'inline-block', 'is-read-only'), this['spinner'] = document['createElement']('span'), this['spinner']['classList']['add']('loading', 'loading-spinner-tiny', 'inline-block'), this['element']['appendChild'](this['spinner']);
    }
    ['attach']() {
        this['tile'] = this['statusBar']['addRightTile']({ 'item': this['element'] }), this['tooltip'] = atom['tooltips']['add'](this['element'], { 'title': 'Updating\x20package\x20dependencies…' });
    }
    ['detach']() {
        if (this['tile'])
            this['tile']['destroy']();
        if (this['tooltip'])
            this['tooltip']['dispose']();
    }
};
