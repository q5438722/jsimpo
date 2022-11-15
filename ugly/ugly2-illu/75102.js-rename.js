import { Meteor } from "meteor/meteor";import { SyncedCron } from "meteor/littledata:synced-cron";import { updateUserTokenpassBalances } from "./functions/updateUserTokenpassBalances";import { Tokenpass } from "./Tokenpass";import { Rooms, Subscriptions, Users } from "../../models";import { removeUserFromRoom } from "../../lib/server/functions/removeUserFromRoom";function removeUsersFromTokenChannels() {
  const n = {};
  Rooms.findAllTokenChannels().forEach(e => {
    n[e._id] = e.tokenpass;
  });const o = {};
  Subscriptions.findByRoomIds(Object.keys(n)).forEach(e => {
    if (!o[e.u._id]) {
      o[e.u._id] = [];
    }o[e.u._id].push(e.rid);
  });Object.keys(o).forEach(e => {
    const s = Users.findOneById(e);
    if (s && s.services && s.services.tokenpass) {
      const r = updateUserTokenpassBalances(s);
      o[e].forEach(e => {
        const o = Tokenpass.validateAccess(n[e], r);
        if (!o) {
          removeUserFromRoom(e, s);
        }
      });
    }
  });
}Meteor.startup(function () {
  Meteor.defer(function () {
    const n = {};
    Rooms.findAllTokenChannels().forEach(e => {
      n[e._id] = e.tokenpass;
    });const o = {};
    Subscriptions.findByRoomIds(Object.keys(n)).forEach(e => {
      if (!o[e.u._id]) {
        o[e.u._id] = [];
      }o[e.u._id].push(e.rid);
    });Object.keys(o).forEach(e => {
      const s = Users.findOneById(e);
      if (s && s.services && s.services.tokenpass) {
        const r = updateUserTokenpassBalances(s);
        o[e].forEach(e => {
          const o = Tokenpass.validateAccess(n[e], r);
          if (!o) {
            removeUserFromRoom(e, s);
          }
        });
      }
    });SyncedCron.add({ name: "Remove users from Token Channels", schedule: e => e.cron("0 * * * *"), job: removeUsersFromTokenChannels });
  });
});
