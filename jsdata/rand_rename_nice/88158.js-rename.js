'use strict';
import{
  ApolloServer as ApolloServer
}from "apollo-server-express";
import{
  WebApp as WebApp
}from "meteor/webapp";
import{
  getUser as getUser
}from "meteor/apollo";
import{
  LinksCollection as LinksCollection
}from "/imports/api/links";
import typeDefs from "/imports/apollo/schema.graphql";
const resolvers = {
  Query : {
    getLink : (watID, {
      id : CAPTURE_ID
    }) => {
      return LinksCollection.findOne(CAPTURE_ID);
    },
    getLinks : () => {
      return LinksCollection.find().fetch();
    }
  }
};
const httpServer = new ApolloServer({
  typeDefs : typeDefs,
  resolvers : resolvers,
  context : async({
    req : req
  }) => {
    return {
      user : await getUser(req.headers.authorization)
    };
  }
});
httpServer.applyMiddleware({
  app : WebApp.connectHandlers,
  cors : true
});

