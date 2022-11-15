var Bounce = {
    'setBounce': function (_0x36e9ca) {
        this['body']['bounciness'] = _0x36e9ca;
        return this;
    },
    'setMinBounceVelocity': function (_0x59525c) {
        this['body']['minBounceVelocity'] = _0x59525c;
        return this;
    },
    'bounce': {
        'get': function () {
            return this['body']['bounciness'];
        },
        'set': function (_0x1b4c16) {
            this['body']['bounciness'] = _0x1b4c16;
        }
    }
};
module['exports'] = Bounce;