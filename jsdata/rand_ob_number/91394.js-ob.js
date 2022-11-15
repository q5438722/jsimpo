'use strict';
const graphql = require('graphql'), {GraphQLJSON} = require('graphql-compose');
module['exports'] = Object['assign']({}, graphql, { 'GraphQLJSON': GraphQLJSON });
