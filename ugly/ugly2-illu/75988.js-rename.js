import { AppsEngineException } from "@rocket.chat/apps-engine/definition/exceptions";import { Meteor } from "meteor/meteor";import { AppEvents, Apps } from "../../../apps/server";import { callbacks } from "../../../callbacks";import { Messages, Rooms, Subscriptions } from "../../../models";import { Team } from "../../../../server/sdk";import { RoomMemberActions, roomTypes } from "../../../utils/server";export const addUserToRoom = function (e, o, r, t) {
  const s = new Date();
  const n = Rooms.findOneById(e);
  const i = roomTypes.getConfig(n.t);
  if (!i.allowMemberAction(n, RoomMemberActions.JOIN) && !i.allowMemberAction(n, RoomMemberActions.INVITE)) {
    return;
  }const a = Subscriptions.findOneByRoomIdAndUserId(e, o._id);
  if (a) {
    return;
  }try {
    Promise.await(Apps.triggerEvent(AppEvents.IPreRoomUserJoined, n, o, r));
  } catch (e) {
    if (e instanceof AppsEngineException) {
      throw new Meteor.Error("error-app-prevented", e.message);
    }throw e;
  }if (n.t === "c" || n.t === "p" || n.t === "l") {
    callbacks.run("beforeAddedToRoom", { user: o, inviter: r }, n);callbacks.run("beforeJoinRoom", o, n);
  }Promise.await(Apps.triggerEvent(AppEvents.IPreRoomUserJoined, n, o, r).catch(e => {
    if (e instanceof AppsEngineException) {
      throw new Meteor.Error("error-app-prevented", e.message);
    }throw e;
  }));Subscriptions.createWithRoomAndUser(n, o, { ts: s, open: true, alert: true, unread: 1, userMentions: 1, groupMentions: 0 });if (!t) {
    if (r) {
      Messages.createUserAddedWithRoomIdAndUser(e, o, { ts: s, u: { _id: r._id, username: r.username } });
    } else if (n.prid) {
      Messages.createUserJoinWithRoomIdAndUserDiscussion(e, o, { ts: s });
    } else if (n.teamMain) {
      Messages.createUserJoinTeamWithRoomIdAndUser(e, o, { ts: s });
    } else {
      Messages.createUserJoinWithRoomIdAndUser(e, o, { ts: s });
    }
  }if (n.t === "c" || n.t === "p") {
    Meteor.defer(function () {
      callbacks.run("afterAddedToRoom", { user: o, inviter: r }, n);callbacks.run("afterJoinRoom", o, n);Apps.triggerEvent(AppEvents.IPostRoomUserJoined, n, o, r);
    });
  }if (n.teamMain && n.teamId) {
    Promise.await(Team.addMember(r, o._id, n.teamId));
  }return true;
};