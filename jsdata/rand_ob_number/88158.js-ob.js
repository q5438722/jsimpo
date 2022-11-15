import { ApolloServer } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import { getUser } from 'meteor/apollo';
import { LinksCollection } from '/imports/api/links';
import _0x2e3032 from '/imports/apollo/schema.graphql';
const resolvers = {
        'Query': {
            'getLink': (_0x1c1aad, {id: _0x5c2e1a}) => LinksCollection['findOne'](_0x5c2e1a),
            'getLinks': () => LinksCollection['find']()['fetch']()
        }
    }, server = new ApolloServer({
        'typeDefs': _0x2e3032,
        'resolvers': resolvers,
        'context': async ({req: _0x5c16fb}) => ({ 'user': await getUser(_0x5c16fb['headers']['authorization']) })
    });
server['applyMiddleware']({
    'app': WebApp['connectHandlers'],
    'cors': !![]
});
