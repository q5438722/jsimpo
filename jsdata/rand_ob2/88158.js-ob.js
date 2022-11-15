const _0x4735 = [
    '205692PBRFDg',
    '577381hRaOZB',
    '669919uREBlF',
    '158622HblGxO',
    '183296tBYgZK',
    '8188XmeDle',
    '687982DtQUuM',
    '1HvQkOb',
    'findOne',
    'find',
    'fetch',
    'headers',
    'authorization',
    'applyMiddleware',
    'connectHandlers'
];
const _0x3121ef = _0x35cf;
(function (_0x97e84f, _0x4a58a6) {
    const _0x318756 = _0x35cf;
    while (!![]) {
        try {
            const _0x505687 = -parseInt(_0x318756(0x106)) + parseInt(_0x318756(0x107)) + parseInt(_0x318756(0x108)) + -parseInt(_0x318756(0x109)) + parseInt(_0x318756(0x10a)) + parseInt(_0x318756(0x10b)) + -parseInt(_0x318756(0x10c)) * parseInt(_0x318756(0x10d));
            if (_0x505687 === _0x4a58a6)
                break;
            else
                _0x97e84f['push'](_0x97e84f['shift']());
        } catch (_0x26b1d2) {
            _0x97e84f['push'](_0x97e84f['shift']());
        }
    }
}(_0x4735, 0x5e5b8));
import { ApolloServer } from 'apollo-server-express';
function _0x35cf(_0x589a05, _0x18022c) {
    return _0x35cf = function (_0x4735b6, _0x35cfcb) {
        _0x4735b6 = _0x4735b6 - 0x106;
        let _0x555df3 = _0x4735[_0x4735b6];
        return _0x555df3;
    }, _0x35cf(_0x589a05, _0x18022c);
}
import { WebApp } from 'meteor/webapp';
import { getUser } from 'meteor/apollo';
import { LinksCollection } from '/imports/api/links';
import _0x289e2b from '/imports/apollo/schema.graphql';
const resolvers = {
        'Query': {
            'getLink': (_0x5514c7, {id: _0x198590}) => LinksCollection[_0x3121ef(0x10e)](_0x198590),
            'getLinks': () => LinksCollection[_0x3121ef(0x10f)]()[_0x3121ef(0x110)]()
        }
    }, server = new ApolloServer({
        'typeDefs': _0x289e2b,
        'resolvers': resolvers,
        'context': async ({req: _0x2a118b}) => ({ 'user': await getUser(_0x2a118b[_0x3121ef(0x111)][_0x3121ef(0x112)]) })
    });
server[_0x3121ef(0x113)]({
    'app': WebApp[_0x3121ef(0x114)],
    'cors': !![]
});
