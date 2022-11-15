'use strict';
const eventHandlersByType = ["441424VZHaDm", "542SJKppj", "1177mFIuig", "1JwNjFM", "760269BokRsv", "67979WlOvhz", "55ADLKmU", "findAllTokenChannels", "_id", "keys", "forEach", "push", "rid", "findOneById", "services", "tokenpass", "RVEdg", "validateAccess", "WPxHj", "startup", "defer", "iygzH", "add", "cron", "0 * * * *", "30673JNZcgg", "290740WAiHnn", "1UvovSO", "1012201RKRaCJ"];
const eventHandlers = test;
(function(data, val) {
  const toMonths = test;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(227)) + -parseInt(toMonths(228)) + -parseInt(toMonths(229)) * parseInt(toMonths(230)) + -parseInt(toMonths(231)) + -parseInt(toMonths(232)) * parseInt(toMonths(233)) + -parseInt(toMonths(234)) * parseInt(toMonths(235)) + -parseInt(toMonths(236)) * -parseInt(toMonths(237));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x534f8b) {
      data["push"](data["shift"]());
    }
  }
})(eventHandlersByType, -1321 * -286 + 348737 * 1 + 17 * -9467);
import{
  Meteor as Meteor
}from "meteor/meteor";
import{
  SyncedCron as SyncedCron
}from "meteor/littledata:synced-cron";
function test(type, n) {
  return test = function(type, i) {
    type = type - (-8603 + 16 * 284 + 4286);
    let command = eventHandlersByType[type];
    return command;
  }, test(type, n);
}
import{
  updateUserTokenpassBalances as updateUserTokenpassBalances
}from "./functions/updateUserTokenpassBalances";
import{
  Tokenpass as Tokenpass
}from "./Tokenpass";
import{
  Rooms as Rooms,
  Subscriptions as Subscriptions,
  Users as Users
}from "../../models";
import{
  removeUserFromRoom as removeUserFromRoom
}from "../../lib/server/functions/removeUserFromRoom";
function create() {
  const String = test;
  const variable = {
    "RVEdg" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const target = {};
  Rooms[String(238)]()["forEach"]((properties) => {
    const get = String;
    target[properties[get(239)]] = properties["tokenpass"];
  });
  const obj = {};
  Subscriptions["findByRoomIds"](Object[String(240)](target))[String(241)]((values) => {
    const parseInt = String;
    if (!obj[values["u"][parseInt(239)]]) {
      obj[values["u"][parseInt(239)]] = [];
    }
    obj[values["u"][parseInt(239)]][parseInt(242)](values[parseInt(243)]);
  });
  Object[String(240)](obj)[String(241)]((prop) => {
    const parseInt = String;
    const rpm_traffic = {
      "WPxHj" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    const map = Users[parseInt(244)](prop);
    if (map && map[parseInt(245)] && map[parseInt(245)][parseInt(246)]) {
      const artistTrack = variable[parseInt(247)](updateUserTokenpassBalances, map);
      obj[prop][parseInt(241)]((name) => {
        const now = parseInt;
        const _0x54555c = Tokenpass[now(248)](target[name], artistTrack);
        if (!_0x54555c) {
          rpm_traffic[now(249)](removeUserFromRoom, name, map);
        }
      });
    }
  });
}
Meteor[eventHandlers(250)](function() {
  const updateDevicesAfterDelay = eventHandlers;
  const countries = {
    "iygzH" : function(saveNotifs) {
      return saveNotifs();
    },
    "mToMy" : "Remove users from Token Channels"
  };
  Meteor[updateDevicesAfterDelay(251)](function() {
    const parseInt = updateDevicesAfterDelay;
    countries[parseInt(252)](create);
    SyncedCron[parseInt(253)]({
      "name" : countries["mToMy"],
      "schedule" : (result) => {
        return result[parseInt(254)](parseInt(255));
      },
      "job" : create
    });
  });
});

