'use strict';
const URL_AVATAR_ICONS = ["486681DjklZf", "168142ErrNnj", "2313jlWazq", "277TvcpZL", "1sPsDwH", "333559wXFOHN", "224597htSMuf", "3WLwfcD", "find", "fetch", "headers", "authorization", "applyMiddleware", "405920GjahPz", "41635cYQZjv", "1rpiRAu"];
const rel2Mstr = m;
(function(data, val) {
  const toMonths = m;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(412)) + parseInt(toMonths(413)) * parseInt(toMonths(414)) + parseInt(toMonths(415)) + -parseInt(toMonths(416)) + -parseInt(toMonths(417)) * parseInt(toMonths(418)) + -parseInt(toMonths(419)) * -parseInt(toMonths(420)) + -parseInt(toMonths(421)) * -parseInt(toMonths(422));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x4142fa) {
      data["push"](data["shift"]());
    }
  }
})(URL_AVATAR_ICONS, -502331 + 291201 * -2 + 254 * 5534);
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
function m(b, i) {
  return m = function(value, i) {
    value = value - (4965 * 2 + 4327 + 1065 * -13);
    let d = URL_AVATAR_ICONS[value];
    return d;
  }, m(b, i);
}
import _0x4d54c4 from "/imports/apollo/schema.graphql";
const URL_ICON_FOLDER = {
  "Query" : {
    "getLink" : (watID, {
      id : CAPTURE_ID
    }) => {
      return LinksCollection["findOne"](CAPTURE_ID);
    },
    "getLinks" : () => {
      return LinksCollection[rel2Mstr(423)]()[rel2Mstr(424)]();
    }
  }
};
const URL_ICON_INFO = new ApolloServer({
  "typeDefs" : _0x4d54c4,
  "resolvers" : URL_ICON_FOLDER,
  "context" : async({
    req : same
  }) => {
    return {
      "user" : await getUser(same[rel2Mstr(425)][rel2Mstr(426)])
    };
  }
});
URL_ICON_INFO[rel2Mstr(427)]({
  "app" : WebApp["connectHandlers"],
  "cors" : !![]
});

