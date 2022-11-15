import _0x5ceae0 from '../reducer';
describe('USERS\x20PERMISSIONS\x20|\x20HOOKS\x20|\x20USEROLESLIST\x20|\x20reducer', () => {
    describe('DEFAULT_ACTION', () => {
        it('should\x20return\x20the\x20initialState', () => {
            const _0x563c9e = { 'test': !![] };
            expect(_0x5ceae0(_0x563c9e, {}))['toEqual'](_0x563c9e);
        });
    }), describe('GET_DATA', () => {
        it('should\x20set\x20the\x20isLoading\x20key\x20to\x20true', () => {
            const _0x1a4e20 = {
                    'roles': ['tests'],
                    'isLoading': ![]
                }, _0x163d5f = { 'type': 'GET_DATA' }, _0x13966f = {
                    'roles': [],
                    'isLoading': !![]
                };
            expect(_0x5ceae0(_0x1a4e20, _0x163d5f))['toEqual'](_0x13966f);
        });
    }), describe('GET_DATA_ERROR', () => {
        it('should\x20set\x20isLoading\x20to\x20false\x20is\x20an\x20error\x20occured', () => {
            const _0x273b9e = { 'type': 'GET_DATA_ERROR' }, _0x4ba507 = {
                    'roles': [],
                    'isLoading': !![]
                }, _0x547871 = {
                    'roles': [],
                    'isLoading': ![]
                };
            expect(_0x5ceae0(_0x4ba507, _0x273b9e))['toEqual'](_0x547871);
        });
    }), describe('GET_DATA_SUCCEEDED', () => {
        it('should\x20return\x20the\x20state\x20with\x20the\x20role\x20list', () => {
            const _0x1ce862 = {
                    'type': 'GET_DATA_SUCCEEDED',
                    'data': [{
                            'id': 0x1,
                            'name': 'Super\x20admin',
                            'description': 'This\x20is\x20the\x20super\x20admin\x20role'
                        }]
                }, _0xc31571 = {
                    'roles': [],
                    'isLoading': !![]
                }, _0x4cd7ae = {
                    'roles': [{
                            'id': 0x1,
                            'name': 'Super\x20admin',
                            'description': 'This\x20is\x20the\x20super\x20admin\x20role'
                        }],
                    'isLoading': ![]
                };
            expect(_0x5ceae0(_0xc31571, _0x1ce862))['toEqual'](_0x4cd7ae);
        });
    });
});
