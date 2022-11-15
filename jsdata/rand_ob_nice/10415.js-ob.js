'use strict';
const tOutResp = ["IOeAJ", "GOsKl", "error", "Hriyx", "GET_DATA_ERROR", "notification", "194237SqjfcP", "528427pXCeec", "10ANAPdG", "15794REpsAB", "52203ifLxXr", "1THiHAy", "566557QhGNtj", "1soAiBo", "1EDWSTp", "721516RxXWKp", "460hqNDVA", "2716cXtGWr", "GET_DATA_SUCCEEDED", "providers", "GET", "notification.error", "PpHXp"];
(function(data, val) {
  const toMonths = m;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(289)) + -parseInt(toMonths(290)) + parseInt(toMonths(291)) * -parseInt(toMonths(292)) + parseInt(toMonths(293)) * -parseInt(toMonths(294)) + parseInt(toMonths(295)) * -parseInt(toMonths(296)) + -parseInt(toMonths(297)) * -parseInt(toMonths(298)) + -parseInt(toMonths(299)) * -parseInt(toMonths(300));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x281234) {
      data["push"](data["shift"]());
    }
  }
})(tOutResp, 2 * 301677 + 868146 + 22727 * -44);
import{
  useReducer as useReducer,
  useEffect as useEffect
}from "react";
import{
  request as request
}from "strapi-helper-plugin";
import{
  getRequestUrl as getRequestUrl
}from "../../../../admin/src/utils";
import _0x35da16, {
  initialState as initialState
}from "./reducer";
const Server = ({
  ssoEnabled : _0x2557c7
}) => {
  const jsonRtn = m;
  const commands = {
    "IOeAJ" : function(saveNotifs) {
      return saveNotifs();
    },
    "hBCLi" : jsonRtn(301),
    "GOsKl" : jsonRtn(302),
    "PpHXp" : function(require, load, callback) {
      return require(load, callback);
    },
    "dEPjI" : jsonRtn(303),
    "IoPcx" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Hriyx" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "LlJHA" : "warning",
    "pmAyz" : jsonRtn(304),
    "gxCJf" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const [node, next] = commands[jsonRtn(305)](useReducer, _0x35da16, initialState);
  commands["gxCJf"](useEffect, () => {
    const persistenceFactory = jsonRtn;
    commands[persistenceFactory(306)](callback);
  }, []);
  const callback = async() => {
    const trim = jsonRtn;
    try {
      if (!_0x2557c7) {
        next({
          "type" : commands["hBCLi"],
          "data" : []
        });
        return;
      }
      const abrDoc = getRequestUrl(commands[trim(307)]);
      const maindata3 = await commands[trim(305)](request, abrDoc, {
        "method" : commands["dEPjI"]
      });
      commands["IoPcx"](next, {
        "type" : trim(301),
        "data" : maindata3
      });
    } catch (previousState) {
      console[trim(308)](previousState);
      commands[trim(309)](next, {
        "type" : trim(310)
      });
      strapi[trim(311)]["toggle"]({
        "type" : commands["LlJHA"],
        "message" : {
          "id" : commands["pmAyz"]
        },
        "centered" : !![]
      });
    }
  };
  return node;
};
function m(b, i) {
  return m = function(value, i) {
    value = value - (1 * 4643 + -1466 + 152 * -19);
    let d = tOutResp[value];
    return d;
  }, m(b, i);
}
export default Server;

