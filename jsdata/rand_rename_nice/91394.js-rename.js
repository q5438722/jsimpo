'use strict';
const graphql = require(`graphql`);
const {
  GraphQLJSON : GraphQLJSON
} = require(`graphql-compose`);
module.exports = Object.assign({}, graphql, {
  GraphQLJSON : GraphQLJSON
});

