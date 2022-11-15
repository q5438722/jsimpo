'use strict';
import{
  Meteor as Meteor
}from "meteor/meteor";
import{
  SyncedCron as SyncedCron
}from "meteor/littledata:synced-cron";
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
function self() {
  const tasksToUpdate = {};
  Rooms.findAllTokenChannels().forEach((foundTask) => {
    tasksToUpdate[foundTask._id] = foundTask.tokenpass;
  });
  const o = {};
  Subscriptions.findByRoomIds(Object.keys(tasksToUpdate)).forEach((e) => {
    if (!o[e.u._id]) {
      o[e.u._id] = [];
    }
    o[e.u._id].push(e.rid);
  });
  Object.keys(o).forEach((userId) => {
    const parseResult = Users.findOneById(userId);
    if (parseResult && parseResult.services && parseResult.services.tokenpass) {
      const artistTrack = updateUserTokenpassBalances(parseResult);
      o[userId].forEach((taskId) => {
        const o = Tokenpass.validateAccess(tasksToUpdate[taskId], artistTrack);
        if (!o) {
          removeUserFromRoom(taskId, parseResult);
        }
      });
    }
  });
}
Meteor.startup(function() {
  Meteor.defer(function() {
    self();
    SyncedCron.add({
      name : "Remove users from Token Channels",
      schedule : (report) => {
        return report.cron("0 * * * *");
      },
      job : self
    });
  });
});

