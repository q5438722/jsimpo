const _0x323f = ['486681DjklZf', '168142ErrNnj', '2313jlWazq', '277TvcpZL', '1sPsDwH', '333559wXFOHN', '224597htSMuf', '3WLwfcD', 'find', 'fetch', 'headers', 'authorization', 'applyMiddleware', '405920GjahPz', '41635cYQZjv', '1rpiRAu'];
const _0x5eeb87 = _0x5b27;

(function (_0x2a364f, _0x8afb72) {
    const _0x431713 = _0x5b27;

    while (true) {
        try {
            const _0x4f695b = -parseInt(_0x431713(0x19c)) + parseInt(_0x431713(0x19d)) * parseInt(_0x431713(0x19e)) + parseInt(_0x431713(0x19f)) + -parseInt(_0x431713(0x1a0)) + -parseInt(_0x431713(0x1a1)) * parseInt(_0x431713(0x1a2)) + -parseInt(_0x431713(0x1a3)) * -parseInt(_0x431713(0x1a4)) + -parseInt(_0x431713(0x1a5)) * -parseInt(_0x431713(0x1a6));

            if (_0x4f695b === _0x8afb72) break;else _0x2a364f.push(_0x2a364f.shift());
        } catch (_0x4142fa) {
            _0x2a364f.push(_0x2a364f.shift());
        }
    }
})(_0x323f, 320903);
import { ApolloServer } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import { getUser } from 'meteor/apollo';
import { LinksCollection } from '/imports/api/links';
function _0x5b27(_0x29d845, _0x51bf54) {
    return _0x5b27 = function (_0x41bc14, _0x4d54c4) {
        _0x41bc14 = _0x41bc14 - 412;
        const _0x3e7859 = _0x323f[_0x41bc14];

        return _0x3e7859;
    }, _0x5b27(_0x29d845, _0x51bf54);
}
import _0x4d54c4 from '/imports/apollo/schema.graphql';
const resolvers = {
    'Query': {
        'getLink': (_0x3e7859, { id: _0x1d8169 }) => LinksCollection.findOne(_0x1d8169),
        'getLinks': () => LinksCollection[_0x5eeb87(0x1a7)]()[_0x5eeb87(0x1a8)]()
    }
};
const server = new ApolloServer({
    'typeDefs': _0x4d54c4,
    'resolvers': resolvers,
    'context': async ({ req: _0x3e9316 }) => ({ 'user': await getUser(_0x3e9316[_0x5eeb87(0x1a9)][_0x5eeb87(0x1aa)]) })
});

server[_0x5eeb87(0x1ab)]({
    'app': WebApp.connectHandlers,
    'cors': true
});
