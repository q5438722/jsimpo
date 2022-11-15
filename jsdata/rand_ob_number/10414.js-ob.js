import _0x129930 from '../reducer';
describe('ADMIN\x20|\x20HOOKS\x20|\x20USEFETCHROLE\x20|\x20reducer', () => {
    describe('DEFAULT_ACTION', () => {
        it('should\x20return\x20the\x20initialState', () => {
            const _0x20d78a = { 'test': !![] };
            expect(_0x129930(_0x20d78a, {}))['toEqual'](_0x20d78a);
        });
    }), describe('GET_DATA_ERROR', () => {
        it('should\x20set\x20isLoading\x20to\x20false\x20is\x20an\x20error\x20occured', () => {
            const _0x23913c = { 'type': 'GET_DATA_ERROR' }, _0x469763 = {
                    'data': [],
                    'isLoading': !![]
                }, _0x453469 = {
                    'data': [],
                    'isLoading': ![]
                };
            expect(_0x129930(_0x469763, _0x23913c))['toEqual'](_0x453469);
        });
    }), describe('GET_DATA_SUCCEEDED', () => {
        it('should\x20return\x20the\x20state\x20with\x20the\x20data', () => {
            const _0xbe8a59 = {
                    'type': 'GET_DATA_SUCCEEDED',
                    'data': [
                        {
                            'uid': 'provider1',
                            'displayName': 'Provider\x201',
                            'icon': 'icon1'
                        },
                        {
                            'uid': 'provider2',
                            'displayName': 'Provider\x202',
                            'icon': 'icon2'
                        }
                    ]
                }, _0x1c6bd4 = {
                    'data': [],
                    'isLoading': !![]
                }, _0x2b0abd = {
                    'data': [
                        {
                            'uid': 'provider1',
                            'displayName': 'Provider\x201',
                            'icon': 'icon1'
                        },
                        {
                            'uid': 'provider2',
                            'displayName': 'Provider\x202',
                            'icon': 'icon2'
                        }
                    ],
                    'isLoading': ![]
                };
            expect(_0x129930(_0x1c6bd4, _0xbe8a59))['toEqual'](_0x2b0abd);
        });
    });
});
