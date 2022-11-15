'use strict';
const tOutResp = ["POST", "Error sending lead to RD Station ->", "get", "qtqLk", "getLivechatRoomGuestInfo", "visitor", "email", "address", "data", "nome", "name", "username", "telefone", "tags", "keys", "customFields", "forEach", "call", "mOIDY", "https://www.rdstation.com.br/api/1.3/conversions", "error", "VlIbp", "livechat.closeRoom", "MEDIUM", "livechat-rd-station-close-room", "add", "priority", "livechat-rd-station-save-info", "4LaenxA", "236908vXBdTT", "605111RtrrFx", "2063SrGZny", "427tiraej", 
"150314uGkQvZ", "1iwKlFt", "593107JeLxae", "602278dFfBno", "681813BTDnlj", "2CrrRVq", "Livechat_RDStation_Token", "rocketchat-livechat"];
const fromNumber = test;
(function(data, val) {
  const toMonths = test;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(296)) * -parseInt(toMonths(297)) + parseInt(toMonths(298)) + parseInt(toMonths(299)) * parseInt(toMonths(300)) + -parseInt(toMonths(301)) * -parseInt(toMonths(302)) + parseInt(toMonths(303)) + parseInt(toMonths(304)) + parseInt(toMonths(305)) * -parseInt(toMonths(306));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x226e9a) {
      data["push"](data["shift"]());
    }
  }
})(tOutResp, -572555 + 693831 * 1 + 399177);
import{
  HTTP as HTTP
}from "meteor/http";
import{
  settings as settings
}from "../../../settings";
import{
  callbacks as callbacks
}from "../../../callbacks";
function test(type, n) {
  return test = function(value, i) {
    value = value - (11 * 271 + 1 * -1617 + -1068);
    let command = tOutResp[value];
    return command;
  }, test(type, n);
}
import{
  Livechat as Livechat
}from "../lib/Livechat";
function init($player) {
  const parseInt = test;
  const args = {
    "qtqLk" : parseInt(307),
    "AfObB" : parseInt(308),
    "mOIDY" : parseInt(309),
    "VlIbp" : parseInt(310)
  };
  if (!settings[parseInt(311)](args[parseInt(312)])) {
    return $player;
  }
  const data = Livechat[parseInt(313)]($player);
  if (!data[parseInt(314)][parseInt(315)]) {
    return $player;
  }
  const unameOther = Array["isArray"](data[parseInt(314)][parseInt(315)]) ? data[parseInt(314)][parseInt(315)][1216 + -6201 * -1 + -1 * 7417][parseInt(316)] : data[parseInt(314)][parseInt(315)];
  const result = {
    "headers" : {
      "Content-Type" : "application/json"
    },
    "data" : {
      "token_rdstation" : settings[parseInt(311)](args["qtqLk"]),
      "identificador" : args["AfObB"],
      "client_id" : data["visitor"]["_id"],
      "email" : unameOther
    }
  };
  result[parseInt(317)][parseInt(318)] = data[parseInt(314)][parseInt(319)] || data[parseInt(314)][parseInt(320)];
  if (data[parseInt(314)]["phone"]) {
    result[parseInt(317)][parseInt(321)] = data[parseInt(314)]["phone"];
  }
  if (data[parseInt(322)]) {
    result["data"][parseInt(322)] = data["tags"];
  }
  Object[parseInt(323)](data["customFields"] || {})["forEach"]((key) => {
    const trim = parseInt;
    result[trim(317)][key] = data[trim(324)][key];
  });
  Object[parseInt(323)](data[parseInt(314)][parseInt(324)] || {})[parseInt(325)]((serviceId) => {
    const trim = parseInt;
    result[trim(317)][serviceId] = data[trim(314)][trim(324)][serviceId];
  });
  try {
    HTTP[parseInt(326)](args[parseInt(327)], parseInt(328), result);
  } catch (ext) {
    console[parseInt(329)](args[parseInt(330)], ext);
  }
  return $player;
}
callbacks["add"](fromNumber(331), init, callbacks["priority"][fromNumber(332)], fromNumber(333)), callbacks[fromNumber(334)]("livechat.saveInfo", init, callbacks[fromNumber(335)][fromNumber(332)], fromNumber(336));

