const Throw = React['lazy'](() => {
        throw new Error('Example');
    }), Component = React['memo'](function Component({children: _0x3f2962}) {
        return _0x3f2962;
    });
function DisplayName({children: _0x10652a}) {
    return _0x10652a;
}
DisplayName['displayName'] = 'Custom\x20Name';
class NativeClass extends React['Component'] {
    ['render']() {
        return this['props']['children'];
    }
}
class FrozenClass extends React['Component'] {
    constructor() {
        super();
    }
    ['render']() {
        return this['props']['children'];
    }
}
Object['freeze'](FrozenClass['prototype']);
