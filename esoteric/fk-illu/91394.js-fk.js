"use strict";

const graphql = require(`graphql`);

var { GraphQLJSON } = require(`graphql-compose`);

module.exports = Object.assign({}, graphql, { GraphQLJSON });
